import "./Detail.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDriver } from "../../Redux/actions";
import { Link, useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const driver = useSelector((state) => state.driver);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDriver(id));
    return () => {
      getDriver("");
    };
  }, [id]);
  const defaultImage =
    "https://morguefile.nyc3.cdn.digitaloceanspaces.com/imageData/public/files/a/anthot4/07/p/51ff02ca581c4334ece364de7e102943.jpg";
  return (
    <section className="sect">
      <div className="text-container">
        <h1>{driver[0]?.id}</h1>
        <h2>
          Name: {driver[0]?.forename} {driver[0]?.surname}
        </h2>
        <h3>Nationality: {driver[0]?.nationality}</h3>
        <h4>Date of Birth: {driver[0]?.dob} </h4>
        <h4>Teams: {driver[0]?.teams || ["Not Available"]}</h4>
        <p>Description: {driver[0]?.description || "Not Available"}</p>
      </div>
      <div className="img-container">
        <img src={driver[0]?.image || defaultImage} className="image" />
        <Link to={"/home/"}>
          <button>BACK</button>
        </Link>
      </div>
    </section>
  );
}

export default Detail;
