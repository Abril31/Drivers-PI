import "./Home.css";
import React, { useEffect, useMemo, useState } from "react";
import CardList from "../../components/CardList/CardList";
import { useDispatch, useSelector } from "react-redux";
import {
  filterBySource,
  filterTeam,
  getDrivers,
  getTeams,
  orderByDob,
  orderDrivers,
  orderReverseDrivers,
  restart,
} from "../../Redux/actions.js";
import { Pagination } from "../../components/Pagination/Pagination";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const driversPerPage = 40;
  const drivers = useSelector((state) => state.drivers);
  const allTeams = useSelector((state) => state.allTeams);
  const filteredDrivers = useSelector((state) => state.filteredDrivers);
  const totalDrivers = drivers.length;
  const dispatch = useDispatch();
  const lastDriverIndex = currentPage * driversPerPage;
  const firstDriverIndex = lastDriverIndex - driversPerPage;

  useEffect(() => {
    dispatch(getDrivers());
    dispatch(getTeams());
  }, [dispatch]);
  const filterByTeam = (event) => {
    dispatch(filterTeam(event.target.value));
  };
  const reset = () => {
    dispatch(restart());
  };
  const filterByOrigin = (event) => {
    dispatch(filterBySource(event.target.value));
  };
  return (
    <div>
      <div className="cont-pag-or">
        <button onClick={() => reset()}>RESET</button>

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
        <label>
          Order
          <button onClick={() => dispatch(orderByDob())}>Birth of Date</button>
        </label>
        <label>
          Origin
          <select name="filterByOrigin" onChange={filterByOrigin}>
            <option value="All">All</option>
            <option value="Api">Api</option>
            <option value="Database">Database</option>
          </select>
        </label>
        <label>
          Teams
          <select name="filterByTeams" onChange={filterByTeam}>
            {allTeams.map((team) => (
              <option key={team} value={team}>
                {team}
              </option>
            ))}
          </select>
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
