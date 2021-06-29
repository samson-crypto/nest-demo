import { LogLevel } from 'src/libs/logger';
import { transports } from 'winston';

export const mongoUri = process.env.MONGO_URI;

export const stage = process.env.STAGE || 'tst';

export const logLevel = process.env.LOG_LEVEL || (stage === 'prd' ? LogLevel.info : LogLevel.debug);

export const logTransports = [new transports.Console()];
