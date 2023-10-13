import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { delList } from "../redux/listSlice";
import { Link } from "react-router-dom";

const ListOfLists = () => {
  const lists = useSelector((state) => state.lists);
  const dispatch = useDispatch();
  const handleDelList = (id) => {
    dispatch(delList(id));
  };

  const handleShowList = () => {};
  return (
    <>
      {lists.length > 0 ? (
        lists.map((list) => (
          <div key={list.id} className="divLists">
            <Link
              to={"/list/" + list.id.toString()}
              className="text-decoration-none text-black linkList"
            >
              <div
                className={`d-flex w-100 mt-3 p-3 border border-black rounded-3 ${list.color}`}
                onClick={handleShowList}
              >
                <p className=" m-0 fs-4">
                  {list.name} {list.icon}
                </p>
              </div>
            </Link>
            <button
              className="ms-auto px-2 py-0 btn buttonDel"
              onClick={() => handleDelList(list.id)}
            >
              <i className="fa-solid fa-trash fs-5"></i>
            </button>
          </div>
        ))
      ) : (
        <p className="border shadow bg-info rounded-2 p-2 d-flex">
          Add a new List!
          <i className=" ms-auto fa-solid fa-down-long"></i>
        </p>
      )}
    </>
  );
};

export default ListOfLists;
