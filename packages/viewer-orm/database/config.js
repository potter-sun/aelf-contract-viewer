/**
 * @file migrate config
 * @author atom-yang
 */
const developmentConfig = require('../../../config.dev');
const prodConfig = require('../../../config.prod');

module.exports = {
  development: {
    ...developmentConfig.sql,
    username: developmentConfig.sql.user,
    dialect: 'mysql',
    define: {
      timestamp: false
    }
  },
  production: {
    ...prodConfig.sql,
    username: prodConfig.sql.user,
    dialect: 'mysql',
    define: {
      timestamp: false
    }
  }
};
