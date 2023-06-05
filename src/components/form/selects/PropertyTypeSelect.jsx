import { Select } from './Select'

export function PropertyTypeSelect({ ...props }) {
  const options = [
    { name: 'Departamento', value: 'apartment' },
    { name: 'Casa', value: 'house' },
    { name: 'PH', value: 'ph' },
    { name: 'Finca', value: 'Ranch' },
  ]

  return <Select {...props} options={options} selectName="Tipo de propiedad" />
}
