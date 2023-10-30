import React, { useEffect, useState } from "react";
import CardList from "../../components/CardList/CardList";
import { useDispatch, useSelector } from "react-redux";
import { getDrivers } from "../../Redux/actions.js";
import { Pagination } from "../../components/Pagination/Pagination";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const driversPerPage = 32;
  const drivers = useSelector((state) => state.drivers);
  const totalDrivers = drivers.length;
  const dispatch = useDispatch();
  const lastDriverIndex = currentPage * driversPerPage;
  const firstDriverIndex = lastDriverIndex - driversPerPage;

  useEffect(() => {
    dispatch(getDrivers());
  }, [dispatch]);
  return (
    <div>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalDrivers={totalDrivers}
        driversPerPage={driversPerPage}
      />
      <CardList
        firstDriverIndex={firstDriverIndex}
        lastDriverIndex={lastDriverIndex}
      />
    </div>
  );
};

export default Home;
