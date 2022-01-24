const readXlsxFile = require('read-excel-file/node')
const writeXlsxFile = require('write-excel-file/node')
const fs = require('fs')

async function parseFileAsArray(filePath) {
    try {
        return await readXlsxFile(filePath).then((rows) => {
            return rows.map((col) => {
                return col.filter((data) => {
                    return data != null;
                })
            })
        });
    } catch (e) {
        console.log(e);
        return null;
    }

}

async function writeToFile(filePath, new_data_array) {
    try {
        return await writeXlsxFile(new_data_array, {
            filePath: filePath
          }).then(() => {
              return "ok"
          });
    } catch (e) {
        console.log(e);
        return null;
    }

}

(async () => {
    let new_data_array = await parseFileAsArray('./test.xlsx');
    console.log(new_data_array);
    let object = await writeToFile('./test_export.xlsx', [new_data_array]);
    console.log(object);
})()