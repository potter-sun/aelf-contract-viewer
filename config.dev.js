module.exports = {
  sql: {
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: 'password',
    database: 'aelf_viewer',
    connectionLimit: 25
  },
  scanSql: {
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: 'password',
    database: 'aelf_main_chain',
    connectionLimit: 25
  },
  scan: {
    interval: 20 * 1000,
    concurrentQueryLimit: 5,
    host: 'http://192.168.197.51:8000',
    buffer: 100
  },
  decompiler: {
    interval: 20 * 1000,
    remoteApi: 'http://192.168.197.35:5566/getfiles'
  },
  wallet: {
    privateKey: 'f6e512a3c259e5f9af981d7f99d245aa5bc52fe448495e0b0dd56e8406be6f71'
  },
  contracts: {
    parliament: 'AElf.ContractNames.Parliament'
  },
  viewer: {
    viewerUrl: './viewer.html',
    addressUrl: '/address',
    txUrl: '/tx',
    blockUrl: '/block',
    chainId: 'AELF'
  }
};
