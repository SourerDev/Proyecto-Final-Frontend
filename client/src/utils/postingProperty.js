import { API_URL } from "../services/api/baseApi";
import axios from "axios"

export default function postingProperty(data, services, files) {
  const arrFiles = Object.values(files);
  let promises = [];
  const post = "no hay post"
  arrFiles.map((f) => {
    const data = new FormData();
    data.append("file", f);
    data.append("upload_preset", "tomi_test");
    promises.push(
      axios.post(
        "https://api.cloudinary.com/v1_1/deauhmx0e/image/upload",
        data
      )
    );
  });
  
  return Promise.all(promises).then((values) => {
    const urls = values.map((v) => v.data.secure_url);
    console.log(urls);

    let {
      antiquity,
      area,
      bathrooms,
      idCity,
      enviroments,
      floors,
      garage,
      rooms,
      adressName,
      adressNumber,
      modality,
      type,
      description,
      observation,
      price,
    } = data;
    let trueServices = [];
    for (const s in services) {
      if (services[s]) trueServices.push(s);
    }
     const fixedData = {
      images: urls,
      modality,
      type,
      address: `${adressName} ${adressNumber}`,
      services: trueServices,
      antiquity: parseInt(antiquity),
      area: parseInt(area),
      bathrooms: parseInt(bathrooms),
      idCity: idCity,
      environments: parseInt(enviroments),
      floors: parseInt(floors),
      garage: parseInt(garage),
      rooms: parseInt(rooms),
      price: parseInt(price),
      description,
      observation,
    };
    /* axios.post(`${API_URL}/properties/createProperty`, fixedData)
    .then((r) => {
      let state = r.data.Message
    }); */
    //post = axios.post(`${API_URL}/properties/createProperty`, fixedData)
  })
  
}

/*
    const fixedData = await postingProperty()
    const result = await postProperty(fixedData)
    
*/

export const getDataForm = async function(data, services, files) {
  const arrFiles = Object.values(files);
  let promises = arrFiles.map((fs)=>{
    const data = new FormData();
    data.append("file",fs)
    data.append("upload_preset", "tomi_test")
    return axios.post("https://api.cloudinary.com/v1_1/deauhmx0e/image/upload",data)
  })

  const result = await Promise.all(promises)
  const urls = result.map((element)=> element.data.secure_url)
  let {
    antiquity,
    area,
    bathrooms,
    idCity,
    enviroments,
    floors,
    garage,
    rooms,
    adressName,
    adressNumber,
    modality,
    type,
    description,
    observation,
    price,
  } = data;
  let trueServices = [];
  for (const s in services) {
    if (services[s]) trueServices.push(s);
  }

  const fixedData = {
    images: urls,
    modality,
    type,
    address: `${adressName} ${adressNumber}`,
    services: trueServices,
    antiquity: parseInt(antiquity),
    area: parseInt(area),
    bathrooms: parseInt(bathrooms),
    idCity: idCity,
    environments: parseInt(enviroments),
    floors: parseInt(floors),
    garage: parseInt(garage),
    rooms: parseInt(rooms),
    price: parseInt(price),
    description,
    observation,
  };

  return fixedData
}
