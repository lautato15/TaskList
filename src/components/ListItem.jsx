import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { delItem, checkItem } from "../redux/listSlice";
import { useParams } from "react-router-dom";

const ListItem = () => {
  const params = useParams();
  const lists = useSelector((state) => state.lists);
  const page = lists.find((list) => list.id === params.listId);
  const dispatch = useDispatch();

  const handleDelItem = (id) => {
    dispatch(delItem({ itemId: id, listId: params.listId }));
  };

  const handleCheckItem = (id) => {
    dispatch(checkItem({ itemId: id, listId: params.listId }));
  };
  return (
    <>
      <ul className="p-0">
        {page.list.map((item) => (
          <li
            key={item.id}
            className={
              item.checklist != false
                ? "d-flex w-100 mt-3 p-1 rounded-3 colorOnCheck"
                : "d-flex w-100 mt-3 p-1 rounded-3 colorOffCheck"
            }
          >
            <button className="  btn" onClick={() => handleCheckItem(item.id)}>
              <i
                className={
                  item.checklist != false
                    ? "fa-solid fa-check fs-5"
                    : "fa-solid fa-circle fs-5"
                }
              ></i>
            </button>
            <span className=" fs-4">{item.name}</span>
            <button
              className="ms-auto px-2 py-0 btn"
              onClick={() => handleDelItem(item.id)}
            >
              <i className="fa-solid fa-trash fs-5"></i>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListItem;
