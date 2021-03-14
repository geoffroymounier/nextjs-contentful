const sanityClient = require('@sanity/client')


// const TOKEN: string = process.env.NEXT_SANITY_TOKEN!;
const PROJECT_ID: string = process.env.NEXT_PUBLIC_SANITY_ID!;
const DATASET: string = process.env.NEXT_PUBLIC_SANITY_DATASET!;


export const client = sanityClient({
  projectId: PROJECT_ID,
  dataset: DATASET,
  // token: TOKEN,
  useCdn: true // `false` if you want to ensure fresh data
})

const listenToChanges =  async (href?: string) => {
  const params = {href}
  const query = '*[_type == "page" && href.current == $href] { ..., header->}'
 
  client.listen(query, params).subscribe()
}

const internalLink = async (id) => {
  const params = {id}
  const query = '*[_id == $id] { _type, href }'
  return await client.fetch(query,params)
}

const fetchPagesFromSanity = async (href?: string) => {
  const params = {href}
  const query =  `*[_type == "page"${!!href ? " && href.current == $href" : ""}] { ..., header->}` 
  // const query = '*[_type == "page" && href.current == $href] { ..., header->}'
  if (href) {
    return await client.fetch(query,params)
  }
  return await client.fetch(query)
};

const fetchBlogsFromSanity = async (href?: string) => {
  const params = {href}
  const query =  `*[_type == "blogItem"${!!href ? " && href.current == $href" : ""}] { ..., header->}` 
  if (href) {
    return await client.fetch(query,params)
  }
  return await client.fetch(query)
};

const setValueInSanity = async (id,object) => {
  return client
  .patch(id) // Document ID to patch
  .set(object) // Shallow merge
  .commit()
  .then(updated => {
    return updated
  })
  .catch(err => {
    console.error('Oh no, the update failed: ', err.message)
  })
}
const insertInArraySanity = ({id,path,node}) => {
  return client
  .patch(id) // Document ID to patch
  .insert('after', path, [
    node
  ])
  .commit()
  .then(updated => {
    return updated
  })
  .catch(err => {
    console.error('Oh no, the update failed: ', err.message)
  })
  
}

const unSetFieldSanity = (id,node) => {
  return client
  .patch(id) // Document ID to patch
  .unset(node)
  .commit()
  .then(updated => {
    return updated
  })
  .catch(err => {
    console.error('Oh no, the update failed: ', err.message)
  })
  
}


export {fetchPagesFromSanity,setValueInSanity, insertInArraySanity, unSetFieldSanity, fetchBlogsFromSanity, listenToChanges, internalLink}
