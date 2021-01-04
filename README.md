# 自动评教脚本

使用方法：

在评教界面，按`f12`打开console，将main.js 内容复制进console，`enter`键执行。

## 高级用法

### 为指定老师打指定的分

main.js

```js
function autoCommit(exclusiveTeacher, exclusiveLevel, exclusiveText) { ... }
```

+ exclusiveTeacher: 指定的老师名。
+ exclusiveLevel: 指定的评级，只能为`1`、`0.8`、`0.6`、`0.4`、`0.2`。
+ exclusiveText: 指定的主观评价内容。
+ 三个参数有一个传入`null`或`undefined`即不指定特别的老师，全部为通用评价。

### 更改通用打分

main.js

```js
// 通用评级
const COMMON_LEVEL = "1";

// 通用文字评价
const COMMON_TEXT = "讲的很好！";
```
