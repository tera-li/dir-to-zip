# czjs
发布于NPM网站的包，这是czjs源代码，供学习娱乐
## 安装npm包方式
```
npm install -g 包名（全局安装）
npm install 包名（安装到项目，package不会记录）
npm install --save 包名（安装到项目必须依赖）
npm install --save-d 包名（安装到项目开发依赖）
```
## 删除npm包
```
npm uninstall -g 包名（全局删除模块）
npm uninstall 包名（删除本地模块）
npm uninstall --save 包名（删除本地模块，并删除项目依赖）
npm uninstall --save -d 包名（删除本地模块，并删除项目开发依赖）
```

## 发布npm包
```
npm adduser（输入npm注册的账号、密码、邮箱）
npm publish（发布包，包名不能有大写字母、空格、下划线，已经在package.json中定义）
npm unpublish（取消发布包）
.gitignore或.npmignore（忽略相关文件上传）
```
## 更新npm包
```
修改package中的version版本号
x.y.z（大改，小改，补丁）
再使用npm publish

```
