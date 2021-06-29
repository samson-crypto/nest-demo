import { Block } from "./block.entity";

export class BlockService {
  static async findOne(id: string, userId: string) {
    const dbResult = new Block();
    return dbResult;
  }
}
