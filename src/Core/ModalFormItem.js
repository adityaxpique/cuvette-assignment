import React from "react";

import "./ModalFormItem.css";

const ModalFormItem = (props) => {
  return (
    <div className="modal-body-form-div">
      <div className="form-text-div">
        <div>
          <div className="index-span">{props.index}</div>
          <p>
            Update your <span>{props.item}</span>
          </p>
        </div>
      </div>
      <div className="form-field-div">
        <input
          name={props.name}
          value={props.value}
          onChange={props.handleChange}
        />
      </div>
    </div>
  );
};

export default ModalFormItem;
