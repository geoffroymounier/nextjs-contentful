
 const fs = require('fs');
 
 const migration = async (migration, context) => {
  
  const makeRequest = context.makeRequest
  const {items} = await makeRequest({
    method: 'GET',
    url: `/entries`
  });

  const classArray = [...new Set(items.reduce((acc,item) => {
    if (item.fields.classes || item.fields.itemClasses || item.fields.paginationClasses) {
      const json = {...item.fields.itemClasses,...item.fields.classes, ...item.fields.paginationClasses}
      const classByLang = Object.keys(json).reduce((acc,key) => {
        const array = json[key].split(' ')
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