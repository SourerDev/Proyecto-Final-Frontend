export function filter(properties, filter) {
  if (filter?.operation?.length) {
    properties = properties.filter((p) => p.modality === filter.operation)
  }
  if (filter?.propertyType?.length) {
    properties = properties.filter((p) => p.type === filter.propertyType)
  }
  if (filter?.idCity) {
    properties = properties?.filter((p) => p.idCity === filter.idCity)
  }
  if (filter?.environments?.length) {
    properties = properties.filter(
      (p) => p.environments === parseInt(filter.environments)
    )
  }

  if (filter?.floors?.length) {
    properties = properties.filter((p) => p.floors === parseInt(filter.floors))
  }

  if (filter?.rooms?.length) {
    properties = properties.filter((p) => p.rooms === parseInt(filter.rooms))
  }

  if (filter?.bathrooms?.length) {
    properties = properties.filter(
      (p) => p.bathrooms === parseInt(filter.bathrooms)
    )
  }

  if (filter?.garage?.length) {
    properties = properties.filter((p) => p.garage === parseInt(filter.garage))
  }
  if (filter?.price?.min && filter?.price?.max) {
    properties = properties.filter(
      (p) => p.price >= filter.price.min && p.price <= filter.price.max
    )
  }
  if (filter?.area?.min && filter?.area?.max) {
    properties = properties.filter(
      (p) => p.area >= filter.area.min && p.area <= filter.area.max
    )
  }
  if (filter?.antiquity?.min && filter?.antiquity?.max) {
    properties = properties.filter(
      (p) =>
        p.antiquity >= filter.antiquity.min &&
        p.antiquity <= filter.antiquity.max
    )
  }
  return properties
}
