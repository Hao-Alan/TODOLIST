import React, { useState, useEffect, useCallback } from "react";
import ChildUseEffect from "./ChildUseEffect";

const DemoUseEffect = (props) => {
  const [number, setNumber] = useState(1);

  // useEffect(() => {
  //   console.log("didmount");
  // }, []);

  // useEffect(() => {
  //   console.log("didupdate");
  // }, [number]);

  const handleChange = () => {
    setNumber(number + 1);
  };

  // const tangSoLuong = () => {
  //   return `ban da thich ${number} tim`;
  // };

  const callBackVerify = useCallback(() => {
    return `ban da thich ${number} tim`;
  }, []);

  return (
    <div className="card mt-3">
      <img
        src="https://sohanews.sohacdn.com/160588918557773824/2021/4/28/photo-9-1619575510785681886686.jpg"
        className="card-img-top"
        alt="..."
        style={{ width: "200px", height: "200px" }}
      />
      <div className="card-body">
        <h5 className="card-title">
          <span className="text-success"> {number} </span>{" "}
          <i
            class="fa fa-heart text-danger"
            onClick={() => {
              handleChange();
            }}
          ></i>
        </h5>

        {/* <button
          href="#"
          className="btn btn-success"
          
        >
          +
        </button> */}
        <ChildUseEffect tangSoLuong={callBackVerify} />
      </div>
    </div>
  );
};

export default DemoUseEffect;
