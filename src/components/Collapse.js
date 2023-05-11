import React from "react";
import { useRef } from "react";
import { useState } from "react";

const Collapse = (props) => {
  const [open, setOPen] = useState(false);
  const toggle = () => {
    setOPen(!open);
  };
  const contentRef = useRef();

  return (
    <div>
      <button
        className={`collapse-button ${open ? "open" : ""}`}
        onClick={toggle}
      >
        {props.label}
        <img
          className="collapse-icon"
          src="./chevron.png"
          alt="icon"
          style={{ transform: open ? "rotate(-180deg)" : "" }}
        />
      </button>
      <div
        ref={contentRef}
        className={`collapse-content ${open ? "open" : ""}`}
      >
        {props.children}
      </div>
    </div>
  );
};

export default Collapse;
