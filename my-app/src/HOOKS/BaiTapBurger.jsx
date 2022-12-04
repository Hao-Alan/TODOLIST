import React from "react";
import "./Burger.css";
import { useSelector, useDispatch } from "react-redux";
import {
  selectBurger,
  handleIncrease,
} from "../features/counter/counterSliceHambe";

const BaiTapBurger = () => {
  let burgerList = useSelector(selectBurger);
  // const num = useSelector(numBurger);
  const dispatch = useDispatch();
  console.log(burgerList);
  // console.log(num);

  const renderBurger = () => {
    return burgerList.map((item, index) => {
      return (
        <div className={`${item.name} mt-2`} key={index}>
          {item.name}
        </div>
      );
    });
  };

  const burgerList2 = {
    a: { name: "BurgerUp", quantity: 1 },
    b: { name: "Salad", quantity: 1 },
    c: { name: "Salad", quantity: 1 },
    d: { name: "Cheese", quantity: 1 },
  };

  console.log(Object.entries(burgerList2));
  return (
    <div className="container">
      <div className="row ">
        <div className="col-6 mt-5 justify-content-center align-content-center text-center">
          {renderBurger()}
        </div>

        <div className="col-6 ">
          <h4 className="text-center">Chọn thức ăn</h4>
          <table class="table  border-primary">
            <tbody>
              <tr>
                <td className="fs-5">Thức ăn</td>
                <td></td>
                <td></td>
                <td className="fs-5">Giá</td>
              </tr>
              <tr>
                <td>Salad</td>
                <td>
                  <button
                    className="btn btn-success"
                    onClick={() => {
                      console.log("dispatch");
                      dispatch(handleIncrease("Salad"));
                    }}
                  >
                    +
                  </button>
                </td>
                <td>
                  <button className="btn btn-danger">-</button>
                </td>
                <td>10</td>
              </tr>
              <tr>
                <td>Cheese</td>
                <td>
                  <button className="btn btn-success">+</button>
                </td>
                <td>
                  <button className="btn btn-danger">-</button>
                </td>
                <td>10</td>
              </tr>
              <tr>
                <td>Beef</td>
                <td>
                  <button className="btn btn-success">+</button>
                </td>
                <td>
                  <button className="btn btn-danger">-</button>
                </td>
                <td>10</td>
              </tr>
              <tr>
                <td></td>
                <td colSpan={2}>Tổng tiền</td>
                <td>30</td>
              </tr>
              <tr className="border-white">
                <td></td>
                <td></td>
                <td colSpan={2}>
                  <button className="btn btn-primary">THANH TOAN</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BaiTapBurger;
