import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/listSlice";
import { v4 as uuidv4 } from "uuid";
import { useParams } from "react-router-dom";

const FormItem = () => {
  const [inputItem, setInputItem] = useState("");

  const dispatch = useDispatch();
  const params = useParams();
  const handleAddItem = (e) => {
    e.preventDefault();
    const id = uuidv4();
    const item = { id: id, name: inputItem, checklist: false };
    inputItem && dispatch(addItem({ item: item, listId: params.listId }));
    setInputItem("");
  };

  return (
    <>
      <form className="d-flex mt-5" action="" onSubmit={handleAddItem}>
        <label htmlFor="newItem" hidden></label>
        <input
          name="newItem"
          id="newItem"
          type="text"
          value={inputItem}
          onChange={(e) => setInputItem(e.target.value)}
          placeholder=" Add new Item..."
          className="p-0 m-0 fs-4 w-100 rounded-1"
          autoFocus
        />
        <button type="submit" className=" ms-1 button  btn btn-success fs-5">
          +
        </button>
      </form>
    </>
  );
};

export default FormItem;
