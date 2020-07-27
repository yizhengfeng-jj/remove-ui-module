### 介绍

remove-ui-module 这个插件是用来解决 css-module 把第三方 ui 库的样式也 module 了

### options

- moduleName: 这个是 ui 库的前缀如 el-
- diretiveRule: 自定义的后缀名和 css-module 保持对应，默认是\_.{8}

### expamle

```javascript
 {
            loader: path.resolve(__dirname, "./loaders/removeUiModule.js"),
            options: {
              moduleName: "el-",
              diretiveRule: /__.{8}_json/
            }
          }
```
