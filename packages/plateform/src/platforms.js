/*

//使用例子
import {Platforms,PlatformsSync} from "@/assets/utils/platforms";
// console.log(baPlatform)
const nowPlatfoem = ref()
//组合试用法
Platforms.miniProgram(() => {
  nowPlatfoem.value = '这个要在小程序显示的 字段'
  Platforms.Android(() => {
    nowPlatfoem.value = '这个要在 安卓小程序显示的 字段'
  })
  Platforms.iPhone(() => {
    nowPlatfoem.value = '只在iphone下运行'
  })
})
Platforms.iPhone(() => {
  nowPlatfoem.value = '只在iphone下运行'
})
Platforms.Mac(() => {
  nowPlatfoem.value = '只在mac下运行'
})
Platforms.Desk(() => {
  nowPlatfoem.value = '只在桌面环境下运行'
})

* */

const sUsrAg = navigator.userAgent; //获取浏览器标示
//所在平台供应商
const _miniProgram = sUsrAg.indexOf('miniProgram') > 1 ? 'miniProgram' : false; //微信小程序平台
const _Html5Plus = sUsrAg.indexOf('Html5Plus') > 1 ? 'Html5Plus' : false; //uniapp外壳平台
const _Wechat = !!sUsrAg.match(/MicroMessenger/i) ? 'Wechat' : false; //微信

//所在系统
const _iPhone = sUsrAg.indexOf('iPhone') > 1 ? 'iPhone' : false;
const _Android = sUsrAg.indexOf('Android') > 1 ? 'Android' : false;
const _Windows = !!sUsrAg.match(/compatible/i) || sUsrAg.match(/Windows/i) ? 'Windows' : false;
const _Mac = !!sUsrAg.match(/Macintosh/i) || sUsrAg.match(/Macintosh/i) ? 'Mac' : false;

const platform = function (callback = () => {}) {
    if (_miniProgram) {
        callback('miniProgram');
        return 'miniProgram';
    }
    if (_Html5Plus) {
        callback('Html5Plus');
        return 'Html5Plus';
    }
    if (_Android) {
        callback('Android');
        return 'Android';
    }
    if (_iPhone) {
        callback('iPhone');
        return 'iPhone';
    }
    if (_Windows) {
        callback('Windows');
        return 'Windows';
    }
    if (_Mac) {
        callback('Mac');
        return 'Mac';
    }
    if (_Mac || _Windows) {
        callback('Desk');
    }

    //不在识别返回的就返回false
    return false;
};

function miniProgram(callback) {
    platform(res => {
        if (res === 'miniProgram') {
            callback(res);
        }
    });
}

function Html5Plus(callback) {
    platform(res => {
        if (res === 'Html5Plus') {
            callback(res);
        }
    });
}

function Android(callback) {
    platform(res => {
        if (res === 'Android') {
            callback(res);
        }
    });
}

function iPhone(callback) {
    platform(res => {
        if (res === 'iPhone') {
            callback(res);
        }
    });
}

function Windows(callback) {
    platform(res => {
        if (res === 'Windows') {
            callback(res);
        }
    });
}

function Mac(callback) {
    platform(res => {
        if (res === 'Mac') {
            callback(res);
        }
    });
}

//桌面浏览器环境下运行,不依赖任何外壳
function Desk(callback) {
    platform(res => {
        if (res === 'Mac' || res === 'Windows') {
            callback('Desk');
        }
    });
}

export const PlatformsSync = platform(() => {});
//这个直接返回当前运行环境,一次只能返回一个
export const Platforms = { Android, miniProgram, Html5Plus, iPhone, Windows, Mac, Desk }; //返回回调组合运行环境
