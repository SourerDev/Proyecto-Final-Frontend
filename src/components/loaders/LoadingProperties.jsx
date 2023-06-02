import PropTypes from 'prop-types'
import { LoaderCard, LoaderItem } from './Loader'

export function LoadingPropertyCard() {
  return (
    <LoaderCard className="flex w-[331px] flex-col items-center justify-center bg-white p-2">
      <LoaderItem className="h-60 w-[95%] rounded-lg" />
      <div className="flex h-20 w-full justify-between px-2">
        <div className="flex flex-col justify-center p-2">
          <LoaderItem className="-mt-2 mb-1 h-5 w-[200px] rounded" />
          <LoaderItem className="h-3 w-[200px] rounded" />
          <LoaderItem className="mt-1 h-6 w-[200px] rounded" />
        </div>
        <div className="flex items-center justify-center">
          <LoaderItem className=" mt-2 mr-2 flex h-14 w-14 rounded-full" />
        </div>
      </div>
      <LoaderItem className="ml-2 h-8 w-[150px] self-start rounded" />
    </LoaderCard>
  )
}

export function LoadingProperties({ cards }) {
  const Cards = createArray(cards)
  return (
    <div className='gap-x-6 gap-y-4 sm:flex sm:flex-wrap sm:justify-center'>
      {Cards.map((card) => (
        <LoadingPropertyCard key={card} />
      ))}
    </div>
  )
}

//
LoadingProperties.propTypes = {
  cards: PropTypes.number.isRequired,
}

export function createArray(n) {
  var array = []
  for (var i = 0; i < n; i++) {
    array.push(i)
  }
  return array
}
