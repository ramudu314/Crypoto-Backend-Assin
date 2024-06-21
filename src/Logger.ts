

enum LogLevel {
    VERBOSE,
    INFO,
    WARNING,
    ERROR,
  }
  
  interface LogMessage {
    level: LogLevel;
    message: string;
    timestamp: Date;
  }
  
  class Logger {
    log(message: LogMessage): void {
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
  
    verbose(message: string): void {
      this.log({ level: LogLevel.VERBOSE, message, timestamp: new Date() });
    }
  
    info(message: string): void {
      this.log({ level: LogLevel.INFO, message, timestamp: new Date() });
    }
  
    warning(message: string): void {
      this.log({ level: LogLevel.WARNING, message, timestamp: new Date() });
    }
  
    error(message: string): void {
      this.log({ level: LogLevel.ERROR, message, timestamp: new Date() });
    }
  }
  
  export default Logger;
  