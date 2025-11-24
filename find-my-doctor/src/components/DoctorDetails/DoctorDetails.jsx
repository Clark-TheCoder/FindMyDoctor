import React from "react";
import FavouriteBtn from "../FavouriteBtn/FavouriteBtn";

function DoctorDetails({ doctor }) {
  return (
    <div
      className="container-fluid"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column-reverse",
        flexWrap: "wrap",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          padding: "1rem",
        }}
      >
        <img
          className="img-fluid"
          style={{ objectFit: "cover", height: "100%", width: "auto" }}
          src={doctor.image}
          alt="Image"
        />
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "fit-content",
          padding: "1rem",
        }}
      >
        <h2>{doctor.specialty}</h2>
        <h6>{doctor.bio}</h6>
        <h4>{`${doctor.town}, ${doctor.province}`}</h4>
        <h5>{doctor.phone}</h5>
        <FavouriteBtn docId={doctor.id}></FavouriteBtn>
      </div>
    </div>
  );
}

export default DoctorDetails;
