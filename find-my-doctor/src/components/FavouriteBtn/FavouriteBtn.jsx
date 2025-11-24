import { useState } from "react";
import {
  addFavDoctor,
  removeFavDoctor,
  getFavDoctors,
  findDoctor,
} from "../../utils/favourites.js";

function FavouriteBtn({ docId }) {
  const [active, setActive] = useState(() => findDoctor(docId));

  const handleClick = (e) => {
    e.stopPropagation();

    if (findDoctor(docId)) {
      setActive(false);
      removeFavDoctor(docId);
    } else if (!findDoctor(docId)) {
      setActive(true);
      addFavDoctor(docId);
    }
  };

  return (
    <button className="btn btn-light" onClick={handleClick}>
      Favourite: {active === true ? "❤️" : "🤍"}
    </button>
  );
}

export default FavouriteBtn;
