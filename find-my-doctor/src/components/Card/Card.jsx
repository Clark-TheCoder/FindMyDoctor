import { useNavigate } from "react-router-dom";
import FavouriteBtn from "../FavouriteBtn/FavouriteBtn.jsx";
import "./Card.css";

function Card({ doctor }) {
  const navigate = useNavigate();
  return (
    <div
      className="card"
      onClick={() => {
        navigate(`/doctor/${doctor.id}`);
      }}
    >
      <img src={doctor.image} className="card-img-top" alt={doctor.name} />
      <div className="card-body">
        <h5 className="card-title">{doctor.name}</h5>

        <p className="card-text mb-1">
          <strong>{doctor.phone}</strong>
        </p>

        <p className="card-text">
          {" "}
          {doctor.town}, {doctor.province}
        </p>
        <FavouriteBtn docId={doctor.id}></FavouriteBtn>
      </div>
    </div>
  );
}

export default Card;
