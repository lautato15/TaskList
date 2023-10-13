import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState } from "react";

import FormList from "./FormList";
import ListOfLists from "./ListOfLists";

const MotherOfLists = () => {
  const [show, setShow] = useState(false);
  const [bgForm, setBgForm] = useState("bg-secondary-subtle");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="card bg-light mt-4">
        <div className="container d-flex flex-column mt-2">
          <ListOfLists />

          <Button
            className="ms-auto mt-4 btn btn-primary rounded-5 px-3 shadow fs-4"
            onClick={handleShow}
          >
            +
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header
              className={`d-flex justifiy-content-center fw-bold border-bottom-0 ${bgForm}`}
              closeButton
            >
              <Modal.Title className="text-center ms-auto fw-bold fs-3">
                New List
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className={`${bgForm}`}>
              <FormList
                handleClose={handleClose}
                bgForm={bgForm}
                setBgForm={setBgForm}
              />
            </Modal.Body>
            <Modal.Footer className={`border-top-0  ${bgForm}`} />
          </Modal>
        </div>
      </div>
    </>
  );
};

export default MotherOfLists;
