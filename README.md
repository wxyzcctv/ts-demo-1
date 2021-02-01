#####
1.原始文件是index.html、style.css、mmain.ts，其他的文件在vscode中运行时需要在终端中执行命令npx parchel index.html自动生成的；

2.为了凸显ts的查错能力，在根目录下新建tsconfig.json文件，并添加一个配置：
```
"strictNullChecks": true,
```

3.本demo通过ts实现一个可拖拽的div；主要逻辑在代码中尽心了注释。

