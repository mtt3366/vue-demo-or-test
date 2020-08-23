/**
 * 类型检测
 * @param data 检测值
 * @reutn string/number/object...
 */
export const getType = data => {
  return Object.prototype.toString
    .call(data)
    .split(" ")[1]
    .slice(0, -1)
    .toLowerCase();
};
