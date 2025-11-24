import { useNavigate } from "react-router-dom";

function Card({ doctor }) {
  const navigate = useNavigate();
  return (
    <div
      className="card"
      onClick={() => {
        navigate(`/doctor/${doctor.id}`);
      }}
      style={{
        width: "250px",
        height: "350px",
      }}
    >
      <img
        src={doctor.image}
        className="card-img-top"
        alt={doctor.name}
        style={{ objectFit: "cover", height: "180px" }}
      />
      <div className="card-body">
        <h5 className="card-title">{doctor.name}</h5>

        <p className="card-text mb-1">
          <strong>{doctor.phone}</strong>
        </p>

        <p className="card-text">
          {" "}
          {doctor.town}, {doctor.province}
        </p>
      </div>
    </div>
  );
}

export default Card;
