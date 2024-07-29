const Platforms = {
  miniProgram: "miniProgram",
  Html5Plus: "Html5Plus",
  Android: "Android",
  iPhone: "iPhone",
  Windows: "Windows",
  Mac: "Mac",
  Desk: "Desk",
};

function detectPlatform(callback) {
  const sUsrAg = navigator.userAgent;

  const isMiniProgram = sUsrAg.indexOf("miniProgram") > -1;
  const isHtml5Plus = sUsrAg.indexOf("Html5Plus") > -1;
  const isWechat = !!sUsrAg.match(/MicroMessenger/i);
  const isAndroid = sUsrAg.indexOf("Android") > -1;
  const isIPhone = sUsrAg.indexOf("iPhone") > -1;
  const isWindows = !!sUsrAg.match(/Windows/i);
  const isMac = !!sUsrAg.match(/Macintosh/i);

  // 简化平台判断逻辑
  let platform;
  if (isMiniProgram) {
    platform = Platforms.miniProgram;
  } else if (isHtml5Plus) {
    platform = Platforms.Html5Plus;
  } else if (isAndroid) {
    platform = Platforms.Android;
  } else if (isIPhone) {
    platform = Platforms.iPhone;
  } else if (isWindows) {
    platform = Platforms.Windows;
  } else if (isMac) {
    platform = Platforms.Mac;
  } else if (isMac || isWindows) {
    platform = Platforms.Desk;
  } else {
    platform = false;
  }

  // 执行回调
  if (callback) {
    try {
      callback(platform);
    } catch (error) {
      console.error("Error executing callback:", error);
    }
  }

  return platform;
}

function platformWrapper(callback = () => {}) {
  return detectPlatform(callback);
}

// 为保持与原代码相同的功能，以下为各个平台的封装，它们都调用同一个内部检测函数
function miniProgram(callback) {
  platformWrapper((res) => {
    if (res === Platforms.miniProgram) {
      callback(res);
    }
  });
}

function Html5Plus(callback) {
  platformWrapper((res) => {
    if (res === Platforms.Html5Plus) {
      callback(res);
    }
  });
}

function Android(callback) {
  platformWrapper((res) => {
    if (res === Platforms.Android) {
      callback(res);
    }
  });
}

function iPhone(callback) {
  platformWrapper((res) => {
    if (res === Platforms.iPhone) {
      callback(res);
    }
  });
}

function Windows(callback) {
  platformWrapper((res) => {
    if (res === Platforms.Windows) {
      callback(res);
    }
  });
}

function Mac(callback) {
  platformWrapper((res) => {
    if (res === Platforms.Mac) {
      callback(res);
    }
  });
}

// 桌面浏览器环境下运行,不依赖任何外壳
function Desk(callback) {
  platformWrapper((res) => {
    if (res === Platforms.Desk) {
      callback("Desk");
    }
  });
}

export const PlatformsSync = platformWrapper();
export const Platforms = {
  miniProgram,
  Html5Plus,
  Android,
  iPhone,
  Windows,
  Mac,
  Desk,
};
