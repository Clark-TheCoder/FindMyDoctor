import Card from "../Card/Card";
import doctors from "../../Data/doctors.json";

function Main({ selectedProvince }) {
  const selectedDoctors =
    doctors.length > 0
      ? doctors.filter((element) => element.province === selectedProvince)
      : [];

  function createCards({ selectedDoctors }) {
    return selectedDoctors.map((item) => {
      return <Card key={item.id} doctor={item} />;
    });
  }

  return (
    <main
      className="d-flex flex-wrap p-3"
      style={{
        backgroundColor: "#d0ebff",
        gap: "15px",
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      {createCards({ selectedDoctors })}
    </main>
  );
}

export default Main;
