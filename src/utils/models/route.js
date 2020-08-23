/**
 * 驼峰转换连接线
 * @param name str
 * @return
 */
export const toLineLink = name => {
  if (!name) {
    return "";
  } else {
    name = name.charAt(0).toLowerCase() + name.slice(1); //把第一个字母转换为小写
    return name.replace(/([A-Z])/g, "-$1").toLowerCase(); //把大写转换为连字符
  }
};
