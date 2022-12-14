import CRUD from './../../node_modules/crud-suit/index.js'
// const crudService = new CRUD([data | Array], [save to LocalStorage | boolean], [name of key in LocalStorage | string], [asynchronous CRUD | boolean])
// LINK TO DOCUMENTATION https://www.npmjs.com/package/crud-suit
import todo from './../data/todos.json' assert { type: 'json' }
const crudService = new CRUD(todo, true, 'todo_db', true)
window.crudService = crudService
async function query() {
  return await crudService.query()
  // query - will return the data Array
  // When calling this function, a timestamp key will be generated on each object in the Array.
}

async function getById(entityId) {
  return await crudService.getById(entityId)
  // getById - will take an _id and will return the object matching that _id
}

async function remove(entityId) {
  return await crudService.remove(entityId)
  // remove - will take _id and splice it from the data Array. will not return any data.
}

async function getEmptyItem() {
  return await crudService.getEmptyItem()
  // getEmptyItem - will return an empty item based on the first object in your data Array
}
async function save(entity) {
  if (entity._id) {
    await crudService.update(entity)
    // update - will find an object inside the data Array and replace it with the new object.
    // Will not return any data.
    // When calling this function, an updatedStamp key will be created on each object in the Array.
    return
  }
  return await crudService.add(entity)
  // add - will take a new data object, add it to the data Array with an _id,
  // and will return the new object that was created with the _id.
  // When calling this function, a timestamp key will be generated on the added object.
}

function getActivity() {
  crudService.getActivities()
}

export const itemService = {
  query,
  getById,
  remove,
  getEmptyItem,
  save,
  getActivity,
}
