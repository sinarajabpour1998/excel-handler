const reader = require('xlsx')
  
// Reading our test file
const file = reader.readFile('./test.xlsx')

let data = []
  
const sheets = file.SheetNames
  
for(let i = 0; i < sheets.length; i++)
{
   const temp = reader.utils.sheet_to_json(
        file.Sheets[file.SheetNames[i]])
   temp.forEach((res) => {
      data.push(res)
   })
}

console.log(data);
  
const ws = reader.utils.json_to_sheet(data)
  
// append to new sheet
// reader.utils.book_append_sheet(file,ws,"Sheet1")
  
// Writing to our file
reader.writeFile(file,'./test_export.xlsx')

console.log("ok");