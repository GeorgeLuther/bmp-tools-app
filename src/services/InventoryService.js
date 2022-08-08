import firestore from "../firebase";

const db = firestore.collection("/inventory");

const getAll = () => {
  return inventory;
};
const create = (data) => {
  return db.add(data);
};

const update = (id, value) => {
  return db.doc(id).update(value);
};

const remove = (id) => {
  return db.doc(id).delete();
};

const InventoryService = {
  getAll,
  create,
  update,
  remove,
};

export default InventoryService;
