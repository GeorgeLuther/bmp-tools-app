import React, { useState } from "react";
import InventoryService from "../../services/InventoryService";

const AddItem = () => {
  const blankState = {
    partName: "",
    bin: "",
    status: "",
    description: "",
  };
  const [item, setItem] = useState(blankState);
  const [submitted, setSubmitted] = useState(false);


const handleInputChange = (e) => {
  const { name, value } = e.target;
  setItem({ ...item, [name]: value });
};

const saveItem = () => {
  var data = {
    partName: item.partName,
    bin: item.bin,
    zone: item.zone,
    status: item.status,
    description: item.description,
  };

  InventoryService.create(data)
    .then(() => {
      setSubmitted(true);
    })
    .catch((err) => {
      console.log(err);
    });
};

const newItem = () => {
  setItem(blankState);
  setSubmitted(false);
};

return (
  <div className="add-item">
    <label htmlFor="part-name">Part Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="enter part name"
              id="partName"
              required
              value={item.partName}
              onChange={handleInputChange}
              name="title"
            />
  </div>
)
// TODO: add form and validation
// part,bin, status
