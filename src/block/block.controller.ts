import { Param } from '@nestjs/common';

import { ApiAllInOne, HTTPMethod } from 'src/decorators/api-response.decorators';
import { ApiDocAndRoute } from 'src/decorators/common.decorators';
import { User } from 'src/decorators/user.decorator';
import { Block } from './block.entity';
import { BlockService } from './block.service';

@ApiDocAndRoute('blocks')
export class BlockController {
  @ApiAllInOne(
    'Get block details by block id',
    'Return the details of block.',
    Block, HTTPMethod.GET, ':id'
  )
  async findOne(
    @Param('id') id: string,
    @User('userUuid') userId: string,
  ) {
    return BlockService.findOne(id, userId);
  }
}
