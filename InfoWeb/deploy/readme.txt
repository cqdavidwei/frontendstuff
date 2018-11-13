部署所需要的工具：
node
nuxt
pm2

部署流程：
1. 以管理员身份打开cmd，运行deploy目录下的build.cmd文件，在deploy/build目录下生成部署所需要的所有文件
2. 将deploy/整个文件夹复制到linux服务器上
3. 定位(cd)到deploy目录，运行sh run.sh即可启动站点
4. 定位(cd)到deploy目录，运行sh stop.sh即可关闭站点