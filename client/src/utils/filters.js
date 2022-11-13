
export function filter(properties, filter) {
  console.log(properties)
  console.log(filter)
  if(filter.operation.length) {
    properties = properties.filter(p => p.modality === filter.operation)
  }
  if(filter.propertyType.length) {
    properties = properties.filter(p => p.type === filter.propertyType)
  }
  if(filter.idCity) {
    properties = properties.filter(p => p.idCity === filter.idCity)
  }
  console.log(properties)
  return properties
}