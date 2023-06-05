import { Select } from './Select'

export function ModalitySelect({ ...props }) {
  const options = [
    { name: 'Venta', value: 'sale' },
    { name: 'Alquiler', value: 'rental' },
  ]
  return <Select {...props} options={options} selectName="Operación" />
}