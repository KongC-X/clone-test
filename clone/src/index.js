import { type } from './type.js';

// Array.from('abc') // ['a', 'b', 'c']

// 定义一个深度克隆函数，接收一个参数 source
export function deepClone(source) {
  // 获取 source 的类型
  const t = type(source);
  // 如果类型不是 object 或 array，则直接返回 source
  if (t !== 'object' && t !== 'array') {
    return source;
  }

  let target;

  // 如果类型是 object，则创建一个空对象 target，并遍历 source 的所有属性
  if (t === 'object') {
    target = {};
    for (let i in source) {
      // 判断属性是否为 source 自身的属性而非原型链上的属性
      if (source.hasOwnProperty(i)) {
        // 递归调用 deepClone 函数，将 source 中的每个属性值都进行深度克隆，并赋值给 target 对应的属性
        target[i] = deepClone(source[i]);
      }
    }
  } else {
    // 如果类型是 array，则创建一个空数组 target，并遍历 source 的所有元素
    target = [];
    for (let i = 0; i < source.length; i++) {
      // 递归调用 deepClone 函数，将 source 中的每个元素都进行深度克隆，并赋值给 target 对应的索引位置
      target[i] = deepClone(source[i]);
    }
  }

  // 返回克隆后的对象或数组
  return target;
}
