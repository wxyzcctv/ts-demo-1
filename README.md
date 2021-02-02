### demo说明
1. 原始文件是index.html、style.css、mmain.ts，其他的文件在vscode中运行时需要在终端中执行命令npx parchel index.html自动生成的；

2. 为了凸显ts的查错能力，在根目录下新建tsconfig.json文件，并添加一个配置：
```
"strictNullChecks": true,
```
3. 本demo通过ts实现一个可拖拽的div；主要逻辑在代码中尽心了注释。

4. ts中的变量声明过程中，需要指定变量的类型，如：
```
var label: boolean = false;
var position: [number, number] = [0, 0];
```
或者
```
var label = false;
var position = [0, 0];
```
声明变量并进行赋值时就是对该变量进行指定类型了，一旦指定类型之后，后面该变量就只能是该类型，一旦变量被赋值为其他类型的值程序就不会正常执行，ts是一种强类型的语言。

5. ts文件上传到github上无法直接部署进行查看编译效果，需要进行打包编译，使用npx parcel build --public-url ./ index.html
