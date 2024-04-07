# 1、 安装 protobuf
# npm install google-protobuf 
# 2、 引入 protoc.exe 
# 3、 编译protobuf
#  .\protoc --js_out=import_style=commonjs,binary:. .\proto\JT808TRspServer.proto
# 4、 生成对应 js可调用文件
# browserify .\js\main.js >JT808js.js 
