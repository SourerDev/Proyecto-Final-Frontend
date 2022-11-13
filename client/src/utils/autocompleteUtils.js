export function valuesCities(object) {
  let cities = [];

  for (const key in object) {
    cities.push(key);
  }
  return cities.sort();
}

export function findNameCity(object, id) {
  let name = "hola";

  for (const key in object) {
    if (object[key].id === id) {
      name = object[key].name + ' ' + object[key].provincia;
    }
  }

  return name;
}