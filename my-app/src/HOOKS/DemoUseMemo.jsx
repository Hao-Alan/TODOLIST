import React, { useMemo, useState } from "react";
import ChildUseMemo from "./ChildUseMemo";

const DemoUseMemo = (props) => {
  const [number, setNumber] = useState(1);

  let object = [
    {
      id: 1,
      name: "anh Hao",
      price: 2000,
    },
    {
      id: 2,
      name: "anh Haxcco",
      price: 2000,
    },
    {
      id: 3,
      name: "anh Hacxco",
      price: 2000,
    },
  ];

  let objectMemo = useMemo(() => object, []);

  return (
    <div>
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
                setNumber(number + 1);
              }}
            ></i>
          </h5>
          <ChildUseMemo objectMemo={objectMemo} />
        </div>
      </div>
    </div>
  );
};

export default DemoUseMemo;
