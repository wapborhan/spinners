import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Source from "./Source";

const SpinItem = (props) => {
  const item = props.data;

  return (
    <div className="col-md-3">
      <div className="card">
        <div className="card-header">{item.name}</div>
        <div className="card-body h-250">
          <div className={item.class} id="loader1"></div>
          {/* <div className="card">{item.code}</div> */}
        </div>
        <div className="card-footer">
          <button className="btn btn-success w-100 " onClick={props.selecSpin}>
            Source Code
          </button>
        </div>
        <Modal show={props.show} onHide={props.handleClose} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Source Code</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="s">
              <Source data={props.data} spinner={props.selectedSpinner} />
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default SpinItem;
