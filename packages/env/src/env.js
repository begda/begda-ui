const _Env = process.env.NODE_ENV ? process.env.NODE_ENV : false;

const platform = function (callback) {
    if (_Env === 'development') {
        callback('Development');
        return 'Development';
    }
    if (_Env === 'production') {
        callback('Production');
        return 'Production';
    }
    //不在识别返回的就返回false
    return false;
};

//开发环境判断
function Development(callback) {
    platform(res => {
        console.log(res);
    });
    if (_Env === 'development') {
        callback('Development');
    }
}

//生成环境判断
function Production(callback) {
    platform(res => {
        if (_Env === 'production') {
            callback('Production');
        }
    });
}

export const EnvSync = platform(() => {}); //这个直接返回当前运行环境,一次只能返回一个
export const Env = { Development, Production }; //返回回调组合运行环境
