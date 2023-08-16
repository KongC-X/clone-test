var expect = require('expect.js');
// var deepClone = require('../dist/index').deepClone;
var deepClone = require('../src/index').deepClone;

// 测试
describe('function deepClone', function () {
  describe('param data', function () {
    it('正确的测试用例', function () {
      // 基本数据类型
      expect(deepClone('abc')).to.equal('abc');

      // 数组
      var arr = [1, [2]];
      var deepCloneArr = deepClone(arr);
      expect(deepCloneArr).not.to.equal(arr);
      expect(deepCloneArr).to.eql(arr);

      // 对象
      var obj = {
        a: 1,
        b: {
          c: 2,
        },
      };
      var deepCloneObj = deepClone(obj);
      expect(deepCloneObj).to.not.equal(obj);
      expect(deepCloneObj).to.eql(obj);
    });
    it('边界值测试用例', function () {
      expect(deepClone(null)).to.equal(null);
      expect(deepClone(undefined)).to.equal(undefined);
      expect(deepClone()).to.equal(undefined);
      expect(deepClone(true)).to.equal(true);
    });
  });
});
