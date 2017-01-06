# 介绍
    基于AdminLTE修改，加上左侧导航栏可拖动改变大小、tabs等功能。

## 已实现功能
1. 2017-01-06 左侧导航栏可拖动 示例：qimeng-index.html
## 使用说明
1. 引入AdminTLE所需的css js等
2. 左侧导航可拖动
- 2.1在【&lt;aside class="main-sidebar"&gt;】下加入
```
<div class="side-dragbar"></div>
```
- 2.2 引入js
```
<!-- IE9 以下支持 matchMedia  -->
<!--[if lt IE 10]>
  <script src="plugins/media-match/media.match.js"></script>
<![endif]-->
<script src="plugins/enquire/dist/enquire.js"></script>
<script src="dist/js/qimeng-admin.js"></script>
```
## 开发说明
1. 安装[nodejs](https://nodejs.org/en/download/)
2. 安装grunt
```
npm install -g grunt-cli
```
3. 安装依赖包
```
npm install
```
4. 安装typesecript
```
npm install -g typescript
```
5. 启动开发环境
```
dev.cmd
```