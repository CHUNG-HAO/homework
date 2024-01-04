// 引入 express 和 path 模組
const express = require('express');
const path = require('path');

// 建立 express 應用程式
const app = express();

// 使用 express.static 中介軟體來提供 public 目錄中的靜態檔案
app.use(express.static(path.join(__dirname, 'public')));

// 啟動伺服器，監聽 3000 port
app.listen(3000, () => {
  console.log('App is listening on port 3000');
});