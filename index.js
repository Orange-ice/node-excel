const xlsx = require('node-xlsx');
const fs = require("fs");

const workSheetsFromFile = xlsx.parse('./excel/example.xlsx');

const sheet1 = workSheetsFromFile[0].data;


const generatePhone = () => {
    const randomNum = Math.round(Math.random() * 100000000)
    return `199${randomNum}`.padEnd(11, '0')
}

for (let i = 1001; i < 2000; i++) {
    const data = [`test${i}`, `test${i}`, '男', 'huangb-test', `test${i}@paraview.test`, generatePhone(), '普通用户']
    sheet1.push(data)
}

const buffer = xlsx.build([{name: 'sheet1', data: sheet1}]);

fs.writeFileSync('./excel/example.xlsx', buffer, 'binary');
