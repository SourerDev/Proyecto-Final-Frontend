import { Select } from './Select'

export function ModalitySelect({ ...props }) {
  const options = [
    { name: 'Operación', value: 'default' },
    { name: 'Venta', value: 'sale' },
    { name: 'Alquiler', value: 'rental' },
  ]
  return <Select {...props} options={options} selectName="byPublication-modality" />
}