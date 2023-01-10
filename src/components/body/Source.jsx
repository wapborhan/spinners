import React from "react";

const Source = (props) => {
  // console.log(props);
  return (
    <div>
      <div className="html">
        <h1>HTML</h1>
        <div className="codehtml">
          {`<div class="${props.data.class}"></div>`}
        </div>
      </div>
      Source
      <br />
    </div>
  );
};

export default Source;
