module.exports = {
  sql: {
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: 'password',
    database: 'aelf_viewer',
    connectionLimit: 25,
    logging: false
  },
  scanSql: {
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: 'password',
    database: 'aelf_main_chain'
  },
  redis: {
    host: '127.0.0.1',
    port: 6379,
    db: 1
  },
  scan: {
    interval: 20 * 1000,
    proposalInterval: 4000, // ms
    concurrentQueryLimit: 5,
    host: 'http://18.163.40.216:8000',
    buffer: 100
  },
  decompiler: {
    interval: 20 * 1000,
    remoteApi: 'http://192.168.197.35:5566/getfiles'
  }
};
