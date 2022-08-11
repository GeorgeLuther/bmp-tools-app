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
    let data = {
      partName: item.partName,
      bin: item.bin,
      zone: item.zone,
      type: item.type,
      quantity: item.zone,
      lots: item.lots,
      //lot { lotNumber: 0, quantity: 0, vendor: Unknown, job: 23542, location: ? }
      status: item.status,
      description: item.description,
      // relatedJobs: item.relatedJobs,
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
      <label htmlFor="bin-number">Bin Number</label>
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
  );
};
// TODO: add form and validation
// part,bin, status
