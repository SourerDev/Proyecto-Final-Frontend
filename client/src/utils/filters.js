
export function filterLanding(properties, operation, propertyType, city) {
  if(operation) {
    properties = properties.filter(p => p.modality === operation)
  }
  if(propertyType) {
    properties = properties.filter(p => p.type === propertyType)
  }
  if(city) {
    properties = properties.filter(p => p.city === city)
  }

  return properties
}