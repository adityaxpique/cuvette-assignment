import React, {useState} from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import html from "../Assets/image 4.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import ModalFormItem from "./ModalFormItem";
import "./Modal.css";

function MyVerticallyCenteredModal(props) {
  const [localVals, setLocalVals] = useState({
    rank: props.values.rank,
    percentile: props.values.percentile,
    answered: props.values.answered,
  });

  const handleChange = (e) => {
    console.log("Function clled");
    e.preventDefault();
    const { name, value } = e.target;
    setLocalVals((prev) => {
      return { ...prev, [name]: Number(value) };
    });
  };

  const updateGlobalValues = (e) => {
    e.preventDefault();
    props.setValues(() => {
      return {
        rank: localVals.rank,
        percentile: localVals.percentile,
        answered: localVals.answered,
      };
    });

    props.onHide();
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <div className="modal-title-div">
            <h1>Update Scores</h1>
            <img src={html} alt="HTML" />
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ModalFormItem
          index="1"
          item="rank"
          name="rank"
          value={localVals.rank}
          handleChange={handleChange}
        />
        <ModalFormItem
          index="2"
          item="percentile"
          name="percentile"
          value={localVals.percentile}
          handleChange={handleChange}
        />
        <ModalFormItem
          index="3"
          item="score (out of 15)"
          name="answered"
          value={localVals.answered}
          handleChange={handleChange}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className="modal-footer-alt-btn">
          Cancel
        </Button>
        <Button onClick={updateGlobalValues} className="modal-footer-btn">
          Save <AiOutlineArrowRight className="btn-icon" />
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;
