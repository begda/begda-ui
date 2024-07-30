/**
 * 平台检测模块
 * 此模块用于检测当前运行环境（浏览器或Node.js）并确定具体平台类型，
 * 如微信小程序、Android、iPhone等。在浏览器环境中，通过分析navigator.userAgent
 * 来识别平台；在Node.js环境中，由于navigator不存在，返回空对象。
 */

let _Platforms = {};
let _platformSync = {};
/**
 * 在浏览器环境中，定义平台检测逻辑
 * @param {Function} callback 回调函数，接收平台类型作为参数
 */
function detectPlatform(callback = () => {}) {
  // 获取User-Agent字符串
  const sUsrAg = navigator.userAgent;

  // 判断是否为微信小程序环境
  const _miniProgram =
    sUsrAg.indexOf("miniProgram") > -1 ? "miniProgram" : false;

  // 判断是否为Html5Plus环境（uni-app外壳）
  const _Html5Plus = sUsrAg.indexOf("Html5Plus") > -1 ? "Html5Plus" : false;

  // 判断是否为微信环境
  const _Wechat = !!sUsrAg.match(/MicroMessenger/i) ? "Wechat" : false;

  // 判断是否为iPhone环境
  const _iPhone = sUsrAg.indexOf("iPhone") > -1 ? "iPhone" : false;

  // 判断是否为Android环境
  const _Android = sUsrAg.indexOf("Android") > -1 ? "Android" : false;

  // 判断是否为Windows环境
  const _Windows =
    !!sUsrAg.match(/compatible/i) || sUsrAg.match(/Windows/i)
      ? "Windows"
      : false;

  // 判断是否为Mac环境
  const _Mac = !!sUsrAg.match(/Macintosh/i) ? "Mac" : false;

  // 根据检测结果，调用回调函数并传递平台类型
  if (_miniProgram) {
    callback("miniProgram");
    return "miniProgram";
  } else if (_Html5Plus) {
    callback("Html5Plus");
    return "Html5Plus";
  } else if (_Android) {
    callback("Android");
    return "Android";
  } else if (_iPhone) {
    callback("iPhone");
    return "iPhone";
  } else if (_Windows) {
    callback("Windows");
    return "Windows";
  } else if (_Mac) {
    callback("Mac");
    return "Mac";
  } else if (_Mac || _Windows) {
    callback("Desk"); // 如果是Mac或Windows，则视为桌面环境
    return "Desk";
  } else {
    callback(false); // 无法识别的环境，返回false
  }
  //不在识别返回的就返回false
  return false;
}

/**
 * 创建平台API对象，封装各种平台的检测方法
 * @returns {Object} 包含各种平台检测方法的对象
 */
function createPlatformApi() {
  return {
    /**
     * 检测是否为微信小程序环境
     * @param {Function} callback 回调函数，接收平台类型作为参数
     */
    miniProgram(callback) {
      detectPlatform((res) => {
        if (res === "miniProgram") {
          callback(res);
        }
      });
    },

    /**
     * 检测是否为Html5Plus环境
     * @param {Function} callback 回调函数，接收平台类型作为参数
     */
    Html5Plus(callback) {
      detectPlatform((res) => {
        if (res === "Html5Plus") {
          callback(res);
        }
      });
    },

    /**
     * 检测是否为Android环境
     * @param {Function} callback 回调函数，接收平台类型作为参数
     */
    Android(callback) {
      detectPlatform((res) => {
        if (res === "Android") {
          callback(res);
        }
      });
    },

    /**
     * 检测是否为iPhone环境
     * @param {Function} callback 回调函数，接收平台类型作为参数
     */
    iPhone(callback) {
      detectPlatform((res) => {
        if (res === "iPhone") {
          callback(res);
        }
      });
    },

    /**
     * 检测是否为Windows环境
     * @param {Function} callback 回调函数，接收平台类型作为参数
     */
    Windows(callback) {
      detectPlatform((res) => {
        if (res === "Windows") {
          callback(res);
        }
      });
    },

    /**
     * 检测是否为Mac环境
     * @param {Function} callback 回调函数，接收平台类型作为参数
     */
    Mac(callback) {
      detectPlatform((res) => {
        if (res === "Mac") {
          callback(res);
        }
      });
    },

    /**
     * 检测是否为桌面环境（Mac或Windows）
     * @param {Function} callback 回调函数，接收平台类型作为参数
     */
    Desk(callback) {
      detectPlatform((res) => {
        if (res === "Mac" || res === "Windows") {
          callback("Desk");
        }
      });
    },
  };
}

// 检查当前环境是否为浏览器环境
if (typeof navigator !== "undefined") {
  // 如果是浏览器环境，创建并导出平台API对象
  _Platforms = createPlatformApi();
  _platformSync = detectPlatform(() => {}); //同步获取运行平台
} else {
  // 如果是Node.js环境，打印提示信息并返回空对象
  console.log("运行在 Node.js, navigator 是不存在的.");
  _Platforms = false;
  _platformSync = false;
}

// 导出平台检测模块
export const Platforms = _Platforms;
export const PlatformsSync = _platformSync;
