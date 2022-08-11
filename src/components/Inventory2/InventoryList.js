// map all items matching query params
// display them as shorthand
// in mobile, selected item pops up as modal? or expands? or routes to page? is it 1 item allowed to expand at a time or multiple?
// in desktop/tablet, selected item pops up as modal? or expands? or is displayed on the left / right side next to the list?
//TODO: add searchbar component and feed it the right place to do a search ... props? context? Or just make a unique for each parent i.e. Maintenence Assets, Inventory Items,

import React, { useEffect, useState } from "react";
import InventoryService from "../../services/InventoryService";

let ItemsList = () => {
  const searchText = "che";
  const [items, loading, error] = [[1, 2, 3, 4], 0, 0];
  console.log(InventoryService.getAll());
  //console.log(InventoryService.getAll());
  //useEffect(() => (items = items.filter((item) => item.includes(searchText))));

  return (
    <div>
      {error && <strong>Error: {error}</strong>}
      {loading && <span>Loading...</span>}
      <ul className="inventoryList">
        {!loading && items && items.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
};

export default ItemsList;
