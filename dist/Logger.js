"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["VERBOSE"] = 0] = "VERBOSE";
    LogLevel[LogLevel["INFO"] = 1] = "INFO";
    LogLevel[LogLevel["WARNING"] = 2] = "WARNING";
    LogLevel[LogLevel["ERROR"] = 3] = "ERROR";
})(LogLevel || (LogLevel = {}));
class Logger {
    log(message) {
        switch (message.level) {
            case LogLevel.VERBOSE:
                console.log(`[VERBOSE] ${message.timestamp.toISOString()}: ${message.message}`);
                break;
            case LogLevel.INFO:
                console.log(`[INFO] ${message.timestamp.toISOString()}: ${message.message}`);
                break;
            case LogLevel.WARNING:
                console.warn(`[WARNING] ${message.timestamp.toISOString()}: ${message.message}`);
                break;
            case LogLevel.ERROR:
                console.error(`[ERROR] ${message.timestamp.toISOString()}: ${message.message}`);
                break;
            default:
                console.log(`[UNKNOWN] ${message.timestamp.toISOString()}: ${message.message}`);
                break;
        }
    }
    verbose(message) {
        this.log({ level: LogLevel.VERBOSE, message, timestamp: new Date() });
    }
    info(message) {
        this.log({ level: LogLevel.INFO, message, timestamp: new Date() });
    }
    warning(message) {
        this.log({ level: LogLevel.WARNING, message, timestamp: new Date() });
    }
    error(message) {
        this.log({ level: LogLevel.ERROR, message, timestamp: new Date() });
    }
}
exports.default = Logger;
