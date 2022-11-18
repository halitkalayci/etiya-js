export class BaseLogger {
    log(data) {
        console.log(new Date())
    }
}

export class MssqlLogger extends BaseLogger {
    // overriding
    log(data) {
        console.log(`Log Mssql: ${data}`)
        super.log(data);
    }
}

export class FileLogger extends BaseLogger {
    log(data) {
        console.log(`Log File: ${data}`)
        super.log(data);
    }
}