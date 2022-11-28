export const domRef = ref => {
  //定义dom操作接口
  let Api = {
    height() {
      return ref.clientHeight;
    },
    width() {
      return ref.clientWidth;
    }
  };

  if (!ref) {
    // console.error(ref, 'domRef库方法的 ref 参数未定义');
    //页面元素不存在的时候 ,防止在外面报错
    for (const item in Api) {
      Api[item] = () => {
        return 0;
      };
    }
  }
  return Api;
};
