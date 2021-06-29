import { stage } from 'src/configs';

export const testEnvs = () => {
  switch (stage) {
    case 'tst':
      return {
        userUuid: '8e6b1e55-bf88-4cc6-a654-e30e63af33bb',
      };
    case 'stg':
      return {
        userUuid: '057bad64-7893-418c-8b22-8fe2a1bc3081',
      };
    case 'prd':
      return {
        userUuid: '16dd0973-c997-49da-9c42-47b6b24b3f01',
      };
  }
};
