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
    if (id) {
      dispatch(getDriver(id));
    }
  }, [id, dispatch]);
  if (!driver) {
    return <p>Cargando...</p>;
  }

  return (
    <section className="sect">
      <div className="text-container">
        <h1>{driver[0]?.id}</h1>
        <h2>
          Name: {driver[0]?.forename} {driver[0]?.surname}
        </h2>
        <h3>Nationality: {driver[0]?.nationality}</h3>
        <h4>Date of Birth: {driver[0]?.dob} </h4>
        <h4>Teams: {driver[0]?.teams}</h4>
        <p>Description: {driver[0]?.description}</p>
      </div>
      <div className="img-container">
        <img src={driver[0]?.image} className="image" />
        <Link to="/home">
          <button>BACK</button>
        </Link>
      </div>
    </section>
  );
}
//   return (
//     <div className="">
//       <Card
//         id={driver.id}
//         forename={driver.forename}
//         surname={driver.surname}
//         image={driver.image}
//         teams={driver.teams}
//       />
//     </div>
//   );
// }

export default Detail;
// return (
//   <div className="">
//     {driver.map((e) => (
//       <Card
//         key={e.id}
//         id={e.id}
//         forename={e.forename}
//         surname={e.surname}
//         image={e.image}
//         teams={e.teams}
//       />
//     ))}
//   </div>
// );
