import React from "react";
import "./Burger.css";
import { useSelector, useDispatch } from "react-redux";
import { selectBurger } from "../features/counter/counterSliceHambe";

const BaiTapBurgerCopy = () => {
  let burgerListx = useSelector(selectBurger).burgerList;
  const dispatch = useDispatch();
  // console.log(burgerListx);

  const renderBurgerx = () => {
    let content = [];
    for (let burger in burgerListx) {
      console.log("burger", burger);
      //burger: Salad,Cheese, Beef
      // console.log(burger);
      let breadMid = [];
      for (let ix = 0; ix < burgerListx[burger]; ix++) {
        // console.log(burgerListx[burger]);
        //i: value
        breadMid.push(
          <div className={`${burger} mt-2`} key={ix}>
            {burger}
          </div>
        );
      }
      content.push(breadMid);
    }
    return content;
  };

  return (
    <div className="container">
      <div className="row ">
        <div className="col-6 mt-5 justify-content-center align-content-center text-center">
          <div className="BurgerUp mb-3"></div>
          {renderBurgerx()}
          <div className="BurgerDown mt-3"></div>
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
                    // onClick={() => {
                    //   dispatch(handleIncrease("Salad"));
                    // }}
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

export default BaiTapBurgerCopy;
