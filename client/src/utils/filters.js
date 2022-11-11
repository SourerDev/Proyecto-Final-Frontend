
export function filterLanding(properties, operation, propertyType, city) {
  if(operation && operation !== "default") {
    properties = properties.filter(p => p.modality === operation)
  }
  if(propertyType && propertyType !== "default") {
    properties = properties.filter(p => p.type === propertyType)
  }
  if(city && city !== "default") {
    properties = properties.filter(p => p.idCity === parseInt(city))
  }

  return properties
}