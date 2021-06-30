import { Block, BlockCommittedCouncilNode } from './block.entity';

export class BlockService {
  static async findOne(id: string) {
    console.log(id);
    const dbResult = new Block();
    dbResult.height = 1294032;
    dbResult.blockHash = 'EFDE5E7504B733A720D6D41A87B23A9D319FB59B4EC69A6E57889E6EEA30BECA';
    dbResult.blockTime = new Date();
    dbResult.appHash = 'A14A9DA0B442D68F7A0BDCFE73F7AE7943C5E4701027AB2FC68FF6D1B2F7D8CA';
    dbResult.transactionCount = 54;
    const committedCouncilNode = new BlockCommittedCouncilNode();
    committedCouncilNode.address = 'Address';
    committedCouncilNode.time = new Date();
    committedCouncilNode.signature = 'commit signature';
    committedCouncilNode.isProposer = true;
    dbResult.committedCouncilNodes = [committedCouncilNode];
    return dbResult;
  }
}
