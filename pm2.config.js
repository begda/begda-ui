module.exports = {
    apps: [
        //启动流媒体服务器，让摄像头视频推送到这个服务器上
        {
            name: 'begda-ui',
            script: 'pnpm run docs:dev',
            watch: true,
            ignore_watch: [
                // 不用监听的文件
                'node_modules',
                'logs'
            ],
            error_file: './logs/frps-server-err.log', // 错误日志文件
            out_file: './logs/frps-server-out.log'
        }
    ]
};
console.log('http://127.0.0.1:4002');
