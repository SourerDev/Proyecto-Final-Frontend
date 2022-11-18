export default function UserIcon({user}) {
  return (
    <div className="w-full flex spacin-x-2"> 
        <img className='rounded-full' src={user.photo} alt='Ø' /> 
    </div>
  )
}