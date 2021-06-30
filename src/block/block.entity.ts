/* eslint-disable @typescript-eslint/no-unused-vars */
import { IsArray, IsBoolean, IsInt, IsNumber, IsString } from 'class-validator';

import { ApiFieldDocValidate } from 'src/decorators/api-response.decorator';


export class BlockCommittedCouncilNode {
  @ApiFieldDocValidate('Address', 'Address', true)
  @IsString()
  address: string;

  @ApiFieldDocValidate(new Date(), 'Time', true)
  @IsString()
  time: Date;

  @ApiFieldDocValidate('commit signature', 'Commit Signature')
  @IsString()
  signature?: string;

  @ApiFieldDocValidate(true, 'Is Proposer')
  @IsNumber()
  isProposer?: boolean;
}

export class Block {
  @ApiFieldDocValidate(1294032, 'Block Hight', true)
  @IsString()
  height: number;

  @ApiFieldDocValidate('EFDE5E7504B733A720D6D41A87B23A9D319FB59B4EC69A6E57889E6EEA30BECA', 'Block hash', true)
  @IsString()
  blockHash: string;

  @ApiFieldDocValidate(new Date(), 'Block time')
  @IsString()
  blockTime?: Date;

  @ApiFieldDocValidate('A14A9DA0B442D68F7A0BDCFE73F7AE7943C5E4701027AB2FC68FF6D1B2F7D8CA', 'App hash')
  @IsNumber()
  appHash?: string;

  @ApiFieldDocValidate(10, 'Number of transactions')
  transactionCount?: number;

  @ApiFieldDocValidate(
    undefined, 'BlockCommittedCouncilNode',
    false, [BlockCommittedCouncilNode])
  @IsArray()
  committedCouncilNodes?: BlockCommittedCouncilNode[];
}
