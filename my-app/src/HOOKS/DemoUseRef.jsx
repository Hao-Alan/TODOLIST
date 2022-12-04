import React, { useMemo, useState } from "react";
import ChildUseMemo from "./ChildUseMemo";

const DemoUseRef = (props) => {
  const [number, setNumber] = useState(1);

  return (
    <div className="container">
      <div className="form-group">
        <p>user Name</p>
        <input className="form-control" name="user Name" />
      </div>
      <br />
      <div className="form-group">
        <p>Password</p>
        <input className="form-control" name="Password" />
      </div>
    </div>
  );
};

export default DemoUseRef;
