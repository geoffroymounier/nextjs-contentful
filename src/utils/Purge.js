

const fs = require('fs');
const _ = require('lodash')
const sanityClient = require('@sanity/client')

const flattenObject = (item,json={}) => {
  if (_.isArray(item)) {
    return  item.reduce((acc,key) => {
      if (/classes/i.test(key)) return [...acc,key]
      if (_.isArray(key) || _.isObject(key)) {
        return [...acc,...flattenObject(key)]
      }
      return acc
    },[])
  } else if (_.isObject(item)) {
    return Object.keys(item).reduce((acc,key) => {
      if (/classes/i.test(key)) return [...acc,item[key]]
      if (_.isArray(item[key]) || _.isObject(item[key])) {
        return [...acc,...flattenObject(item[key])]
      }
      return acc
    },[])
  }
  
}

 const migration = async () => {
  const client = sanityClient({
    projectId: 'f2ewgphe',
    dataset: 'production',
    useCdn: true // `false` if you want to ensure fresh data
  })
  
  const query =  `*[_type == 'page']` 
  const items = await client.fetch(query)

  const classArray = [...new Set(flattenObject(items))]
  
  const string = JSON.stringify(classArray)

  fs.writeFile('./classArray.json', string, function (err,data) {
    if (err) {
      return console.log({err});
    }
    console.log('migrated');
  });
  return

};
migration()