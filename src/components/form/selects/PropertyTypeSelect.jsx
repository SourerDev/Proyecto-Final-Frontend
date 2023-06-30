import { Select } from './Select'

export function PropertyTypeSelect({ ...props }) {
  const options = [
    { name: 'Tipo de propiedad', value: 'default' },
    { name: 'Departamento', value: 'apartment' },
    { name: 'Casa', value: 'house' },
    { name: 'PH', value: 'ph' },
    { name: 'Finca', value: 'ranch' },
  ]

  return <Select {...props} options={options} selectName="byProperty-type" />
}
