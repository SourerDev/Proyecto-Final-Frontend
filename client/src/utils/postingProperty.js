import { API_URL } from "../services/api/baseApi";
import axios from "axios"


export const getDataForm = async function(data, services, files, id_User) {
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
    id_User, 
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
