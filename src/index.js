"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Logger_1 = __importDefault(require("./Logger"));
const logger = new Logger_1.default();
logger.verbose('This is a verbose message.');
logger.info('This is an informational message.');
logger.warning('This is a warning message.');
logger.error('This is an error message.');
