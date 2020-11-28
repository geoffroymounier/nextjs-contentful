
function unNestJson (item, json) {
  if (!item) return {}
  if (!!item.nodeType) return item

  Object.keys(item).map((key, i) => {
    
    if (key === 'fields' && item['sys'].contentType) {
      json = { ...json, ...unNestJson(item[key], {}), type: item.sys.contentType.sys.id}
    } else if (key === 'fields') {
      json = { ...json, ...unNestJson(item[key], {})}
    } else if (typeof item[key] === 'object' && Array.isArray(item[key])) {
      json = { ...json, [key]: jsonToArray(unNestJson(item[key], {})) }
    } else if (typeof item[key] === 'object' && key !== 'sys') {
      json = { ...json, [key]: unNestJson(item[key], {}) }
    } else if (typeof item[key] !== 'object') {
      json = { ...json, [key]: item[key] }
    }
  })
  return json
}
function unNestArray (item, json) {
  if (!item) return []
  Object.keys(item).map((key, i) => {
    if (key === 'fields') { // is a 'field' type
      json = [...json, { ...unNestJson(item[key], {}) }]
    } else if (typeof item[key] === 'object' && Array.isArray(item[key])) {
      const type = item['sys'] && item['sys'].contentType ? item.sys.contentType.sys.id : key
      const data = unNestJson(item[key], {})
      json = ([
        ...json,
        ...Object.keys(data).reduce((arr, nestedKey) => {
          return [...arr, { ...data[nestedKey], type : data[nestedKey]['type'] }]
        }, [])
      ])
    } else if (typeof item[key] === 'object' && key !== 'sys') {
      
      json = [...json, { type: key, ...unNestJson(item[key], {}) }]
    } else if (typeof item[key] !== 'object') {
      
      json = [...json, { [key]: item[key], type: 'other' }]
    }
  })
  return json
}

function parseData(object) {
  if (object.items && object.items.length) return object.items.map(item =>  unNestJson(item,{}))
  else unNestJson(object,{})
}
function jsonToArray (json) {
  if (!json) return []
  return Object.keys(json).reduce(
    (arr, key) => (/^\d+$/.test(key) ? [...arr, json[key]] : [...arr]),
    []
  )
}

export {  jsonToArray, unNestArray, unNestJson, parseData }
