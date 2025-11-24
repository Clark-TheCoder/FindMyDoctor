import { useParams } from "react-router-dom";
import { Fragment } from "react";
import doctors from "../Data/doctors.json";
import Header from "../components/Header/Header.jsx";
import DoctorDetails from "../components/DoctorDetails/DoctorDetails.jsx";
import HomeButton from "../components/HomeBtn/HomeBtn";

function Profile() {
  const params = useParams();
  const doctorId = params.id;

  const doctor = doctors.find((item) => {
    return String(item.id) === doctorId;
  });

  return (
    <>
      <Header title={doctor.name}></Header>
      <DoctorDetails doctor={doctor}></DoctorDetails>
      <HomeButton homeRoute={"/"}></HomeButton>
    </>
  );
}

export default Profile;
