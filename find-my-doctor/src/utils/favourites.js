const favStorageKey = "favDoctors";

export function getFavDoctors() {
  return JSON.parse(localStorage.getItem(favStorageKey)) || [];
}

export function findDoctor(doctor) {
  const storedDoctors = getFavDoctors();
  return storedDoctors.includes(doctor) ? true : false;
}

export function addFavDoctor(doctor) {
  const storedDoctors = getFavDoctors();
  if (!storedDoctors.includes(doctor)) {
    storedDoctors.push(doctor);
    localStorage.setItem(favStorageKey, JSON.stringify(storedDoctors));
  }
  return storedDoctors;
}

export function removeFavDoctor(doctor) {
  let storedDoctors = getFavDoctors();
  storedDoctors = storedDoctors.filter((id) => id !== doctor);
  localStorage.setItem(favStorageKey, JSON.stringify(storedDoctors));
  return storedDoctors;
}
