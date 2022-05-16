## nodejs 对 excel 文件进行读写操作

这里使用的 `node-xlsx`, 更复杂的情况可以使用 `js-xlsx`

### node-xlsx

- `xlsx.parse()` 读取 excel 文件
- `xlsx.build([{name: 'sheetName', data: data}])` 将 data 转为 buffer，`data` 是二位数组形式。
- `fs.writeFileSync('filename-excel.xlsx', buffer, 'binary')` 将 buffer 写入文件
