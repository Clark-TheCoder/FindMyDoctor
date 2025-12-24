import Card from "../Card/Card";
import doctors from "../../Data/doctors.json";
import "./Main.css";

function Main({ selectedProvince }) {
  const selectedDoctors =
    doctors.length > 0
      ? doctors.filter((element) => element.province === selectedProvince)
      : [];

  function createCards({ selectedDoctors }) {
    return selectedDoctors.length > 0 ? (
      selectedDoctors.map((item) => <Card key={item.id} doctor={item} />)
    ) : (
      <h1 className="heading">
        Select province to discover doctors located in that area.
      </h1>
    );
  }

  return (
    <main className="d-flex flex-wrap p-3 main">
      {createCards({ selectedDoctors })}
    </main>
  );
}

export default Main;
