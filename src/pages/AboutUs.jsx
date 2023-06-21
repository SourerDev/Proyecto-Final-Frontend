import { CreatorCard } from '../components/cards/CreatorCard'
import { GoBackButton } from '../components/form/buttons/GoBack'
import { ContainerCards } from '../components/cards/Card'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'

export function AboutUs() {
  return (
    <div className="px-4 pb-4">
      <GoBackButton className="mt-3 aspect-square  rounded-full bg-transparent text-gray-700 shadow-none hover:bg-gray-800 hover:text-white">
        <ArrowLeftIcon className="h-auto w-8 " />
      </GoBackButton>
      <ContainerCards className="flex  flex-col items-center gap-2 sm:flex-row sm:justify-around">
        {creators_info.map((creator, i) => (
          <CreatorCard
            key={i}
            userName={creator.userName}
            linkedin={creator.linkedin}
            role={creator.role}
          />
        ))}
      </ContainerCards>
    </div>
  )
}

const creators_info = [
  {
    userName: 'SourerDev',
    role: 'Full Stack developer',
    linkedin: 'https://www.linkedin.com/in/yhonier-c-alegria/',
  },
  {
    userName: 'TomasPerez1',
    role: 'Full Stack developer',
    linkedin: 'https://www.linkedin.com/in/tomas-perez-371bb4258/',
  },
  {
    userName: 'enzo2022',
    role: 'Full Stack developer',
    linkedin: 'https://www.linkedin.com/in/enzo-monti-65bb9a19a/',
  },
  {
    userName: 'Agustin-Berger',
    role: 'Full Stack developer',
    linkedin: 'https://www.linkedin.com/in/agustin-berger-b9589a240/',
  },
  {
    userName: 'chanticou',
    role: 'Full Stack developer',
    linkedin: 'https://www.linkedin.com/in/chantal-denise-coutenceau/',
  },
  {
    userName: 'arturogutierrez11',
    role: 'Full Stack developer',
    linkedin: 'https://www.linkedin.com/in/arturo-gutierrez-6a7449181/',
  },
  {
    userName: 'asouesou',
    role: 'Full Stack developer',
    linkedin: 'https://www.linkedin.com/in/HBOHermes',
  },
  {
    userName: 'rmalegr',
    role: 'Full Stack developer',
    linkedin: 'https://www.linkedin.com/in/rmalegre',
  },
]
