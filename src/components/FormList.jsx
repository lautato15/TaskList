import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addList } from "../redux/listSlice";
import { v4 as uuidv4 } from "uuid";

const FormList = ({ handleClose, bgForm, setBgForm }) => {
  const [inputList, setInputList] = useState("");
  const [iconActive, setIconActive] = useState(1);
  const [iconList, setIconList] = useState(
    <i className="fs-5 text-white bg-black p-2 rounded-2 bi bi-list-task flex-grow-1"></i>
  );
  const dispatch = useDispatch();
  const handleAddList = (e) => {
    e.preventDefault();
    if (inputList != "") {
      const id = uuidv4();
      const list = {
        id: id,
        name: inputList,
        color: bgForm,
        icon: iconList,
        list: [],
      };
      inputList && dispatch(addList(list));
      handleClose();
    }
  };
  const handleIconList = (e, icon, select) => {
    e.preventDefault();
    setIconList(icon);
    setIconActive(select);
  };
  const handleColor = (e, bg) => {
    e.preventDefault();
    setBgForm(bg);
  };
  return (
    <>
      <form
        className="d-flex flex-column px-5"
        action=""
        onSubmit={handleAddList}
      >
        <label htmlFor="newItem" hidden></label>
        <input
          name="newList"
          id="newList"
          type="text"
          value={inputList}
          onChange={(e) => setInputList(e.target.value)}
          placeholder=" Add new List..."
          className="p-0 m-0 fs-4 w-100  rounded-1"
          autoFocus
        />
        {/* Iconos */}
        <h4 className="mt-4">Iconos</h4>
        <div className="my-1 d-flex">
          <button
            onClick={(e) =>
              handleIconList(
                e,
                <i className="fs-5 text-white bg-black p-2 rounded-2 bi bi-list-task flex-grow-1"></i>,
                1
              )
            }
            className={
              iconActive == 1 ? `btn p-2 me-2 border  bg-dark` : `btn p-2 me-2 `
            }
          >
            <i className="fs-5 text-black bg-dark-subtle p-2 rounded-2 bi bi-list-task "></i>
          </button>
          <button
            onClick={(e) =>
              handleIconList(
                e,
                <i className="fs-5 text-white bg-black p-2 rounded-2 bi bi-search flex-grow-1"></i>,
                2
              )
            }
            className={
              iconActive == 2 ? `btn p-2 me-2 border  bg-dark` : `btn p-2 me-2 `
            }
          >
            <i className="fs-5 text-black bg-dark-subtle p-2 rounded-2 bi bi-search"></i>
          </button>
          <button
            className={
              iconActive == 3 ? `btn p-2 me-2 border  bg-dark` : `btn p-2 me-2 `
            }
            onClick={(e) =>
              handleIconList(
                e,
                <i className="fs-5 text-white bg-black p-2 rounded-2 bi bi-briefcase flex-grow-1"></i>,
                3
              )
            }
          >
            <i className="fs-5 text-black bg-dark-subtle p-2 rounded-2 bi bi-briefcase"></i>
          </button>
          <button
            className={
              iconActive == 4 ? `btn p-2 me-2 border  bg-dark` : `btn p-2 me-2 `
            }
            onClick={(e) =>
              handleIconList(
                e,
                <i className="fs-5 text-white bg-black p-2 rounded-2 bi bi-balloon-fill flex-grow-1"></i>,
                4
              )
            }
          >
            <i className="fs-5 text-black bg-dark-subtle p-2 rounded-2 bi bi-balloon-fill"></i>
          </button>
          <button
            className={
              iconActive == 5 ? `btn p-2 me-2 border  bg-dark` : `btn p-2 me-2 `
            }
            onClick={(e) =>
              handleIconList(
                e,
                <i className="fs-5 text-white bg-black p-2 rounded-2 bi bi-bicycle flex-grow-1"></i>,
                5
              )
            }
          >
            <i className="fs-5 text-black bg-dark-subtle p-2 rounded-2 bi bi-bicycle"></i>
          </button>
          <button
            className={
              iconActive == 6 ? `btn p-2 me-2 border bg-dark` : `btn p-2 me-2 `
            }
            onClick={(e) =>
              handleIconList(
                e,
                <i className="fs-5 text-white bg-black p-2 rounded-2 bi bi-calendar-check-fill flex-grow-1"></i>,
                6
              )
            }
          >
            <i className="fs-5 text-black bg-dark-subtle p-2 rounded-2 bi bi-calendar-check-fill"></i>
          </button>
        </div>
        {/* COLORS */}
        <h4 className="mt-4">Color</h4>
        <div className="my-1 d-flex">
          <button
            onClick={(e) => handleColor(e, "bg-danger-subtle")}
            className={`btn btn-danger rounded-start-2 rounded-0 p-2`}
          >
            {/* ICONO SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-file-earmark-fill text-black"
              viewBox="0 0 16 16"
            >
              <path d="M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm5.5 1.5v2a1 1 0 0 0 1 1h2l-3-3z" />
            </svg>
          </button>
          <button
            onClick={(e) => handleColor(e, "bg-warning-subtle")}
            className="btn btn-warning p-2 rounded-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-file-earmark-fill "
              viewBox="0 0 16 16"
            >
              <path d="M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm5.5 1.5v2a1 1 0 0 0 1 1h2l-3-3z" />
            </svg>
          </button>
          <button
            onClick={(e) => handleColor(e, "bg-primary-subtle")}
            className="btn btn-info p-2 rounded-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-file-earmark-fill "
              viewBox="0 0 16 16"
            >
              <path d="M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm5.5 1.5v2a1 1 0 0 0 1 1h2l-3-3z" />
            </svg>
          </button>
          <button
            onClick={(e) => handleColor(e, "bg-success-subtle")}
            className="btn btn-success p-2 rounded-end-2 rounded-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-file-earmark-fill text-black"
              viewBox="0 0 16 16"
            >
              <path d="M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm5.5 1.5v2a1 1 0 0 0 1 1h2l-3-3z" />
            </svg>
          </button>
        </div>
        <div className="d-flex justify-content-end mt-3">
          <button type="submit" className=" ms-1 button  btn btn-success fs-5">
            Create
          </button>
          <button
            className=" ms-1 button  btn btn-secondary fs-5"
            onClick={() => handleClose()}
          >
            Cancel
          </button>
        </div>
      </form>
    </>
  );
};

export default FormList;
