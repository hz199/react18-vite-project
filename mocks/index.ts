const Mock = require('mockjs');

const config = {
  '/api/user': {
    method: 'GET',
    response: () => {
      return {
        code: 0,
        result: Mock.mock({
          'string': `@string('lower', 10, 50)`,
          'number|123.3': 1,
          'boolean|1': true,
          'object|1-4': {
            '310000': '上海市',
            '320000': '江苏省',
            '330000': '浙江省',
            '340000': '安徽省'
          }
        })
      }
    }
  }
};

module.exports = config;
