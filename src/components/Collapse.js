import React from "react";
import { useState } from "react";

const Collapse = (props) => {
  const [open, setOPen] = useState(false);
  const toggle = () => {
    setOPen(!open);
  };

  return (
    <div>
      <button onClick={toggle}>{props.label}</button>
      {open && <div className="toggle">{props.children}</div>}
    </div>
  );
};

export default Collapse;
