STAGE?=tst
AWS_REGION?=ap-northeast-1
AWS_ACCOUNT_ID?=301050019792

# get the latest commit hash in the short form
COMMIT := $(shell git rev-parse --short HEAD)
# get the latest commit date in the form of YYYYmmdd
DATE := $(shell git log -1 --format=%cd --date=format:"%Y%m%d")
UPDATEDTAG := ${STAGE}-$(COMMIT)-$(DATA)

test:
	export $(cat environments/tst.env | xargs) && yarn test

create-ecr:
	aws ecr create-repository --repository-name chain-explorer

ecr-purge-policy:
	aws ecr put-lifecycle-policy --registry-id ${AWS_ACCOUNT_ID} --repository-name chain-explorer-${STAGE} --lifecycle-policy-text '{"rules":[{"rulePriority":10,"description":"Expire old images","selection":{"tagStatus":"any","countType":"imageCountMoreThan","countNumber":100},"action":{"type":"expire"}}]}'

clean-up:
	rm -rf ./dist

build:
	yarn build
	cd dist/ && mkdir cert

push-img: build
	aws ecr get-login-password --region ${AWS_REGION} | docker login --username AWS --password-stdin ${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com
	docker build -t chain-explorer:${STAGE} .
	docker tag chain-explorer:${STAGE} ${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com/chain-explorer:${STAGE}
	docker push ${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com/chain-explorer:${STAGE}

deploy: clean-up push-img
	aws ecs update-service --cluster ChainExploreCluster --service ChainExploreService --force-new-deployment --region ${AWS_REGION}

.PHONY: test build
