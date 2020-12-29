
 const fs = require('fs');
 
 const migration = async (migration, context) => {
  
  const makeRequest = context.makeRequest
  const {items} = await makeRequest({
    method: 'GET',
    url: `/entries`
  });

  const classArray = [...new Set(items.reduce((acc,item) => {
    if (item.fields.classes) {

      const classByLang = Object.keys({...item.fields.itemClasses,...item.fields.classes}).reduce((acc,key) => {
        const array = item.fields.classes[key].split(' ')
        return [...acc,...array]
      },[])

      return [...new Set([...acc,...classByLang])]
    }
    return acc
  },[]))]
  const string = JSON.stringify(classArray)

  fs.writeFile('./classArray.json', string, function (err,data) {
    if (err) {
      return console.log({err});
    }
    console.log('migrated');
  });
  return

};

module.exports = migration;