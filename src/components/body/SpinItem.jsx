import React from "react";

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
        {/* <div className="s">{source}</div> */}
      </div>
    </div>
  );
};

export default SpinItem;
