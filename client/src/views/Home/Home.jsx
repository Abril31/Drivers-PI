import React, { useEffect } from "react";
import CardList from "../../components/CardList/CardList";
import { useDispatch } from "react-redux";
import { getDrivers } from "../../Redux/actions.js";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDrivers());
  }, []);
  return (
    <div>
      <CardList />
    </div>
  );
};

export default Home;
