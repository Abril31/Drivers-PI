import "./Home.css";
import React, { useEffect, useMemo, useState } from "react";
import CardList from "../../components/CardList/CardList";
import { useDispatch, useSelector } from "react-redux";
import {
  getDrivers,
  orderDrivers,
  orderReverseDrivers,
} from "../../Redux/actions.js";
import { Pagination } from "../../components/Pagination/Pagination";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const driversPerPage = 32;
  const { drivers, copyDrivers } = useSelector((state) => ({
    drivers: state.drivers,
    copyDrivers: state.copyDrivers,
  }));
  const totalDrivers = drivers.length;
  const dispatch = useDispatch();
  const lastDriverIndex = currentPage * driversPerPage;
  const firstDriverIndex = lastDriverIndex - driversPerPage;

  useEffect(() => {
    dispatch(getDrivers());
  }, [dispatch]);

  return (
    <div>
      <div className="cont-pag-or">
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalDrivers={totalDrivers}
          driversPerPage={driversPerPage}
        />
        <label>
          Order ⬆️
          <button onClick={() => dispatch(orderDrivers())}>A - Z</button>
        </label>
        <label>
          Order ⬇️
          <button onClick={() => dispatch(orderReverseDrivers())}>Z - A</button>
        </label>
      </div>
      <div className="cardlist-div">
        <CardList
          firstDriverIndex={firstDriverIndex}
          lastDriverIndex={lastDriverIndex}
        />
      </div>
    </div>
  );
};

export default Home;
