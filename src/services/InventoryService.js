import firestore from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const db = collection(firestore, "/inventory");

const getAll = () => {
  return getDocs(db)
    .then((response) => {
      console.log(response);
    })
    .catch((e) => console.error(e.message));
};
const getByName = (name) => {
  return db.where("name", "==", name).get();
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
