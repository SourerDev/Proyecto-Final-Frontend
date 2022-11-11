import {Link} from 'react-router-dom'

export default function Nav(){
    return(
        <div class="relative bg-white flex flex-row shadow">
            <div>
            <Link to='/'>
                <img
                    src="https://images.vexels.com/media/users/3/142719/isolated/preview/f07a4b2d673e9935e58e6ff8262d4a1d-icono-de-casas-de-triangulo.png"
                    width={50}
                    height={50}
                />
            </Link>
            </div>
            <div>
                <Link to='/home'>Home</Link>
                <Link to='/createProperty'>Create Property</Link>
            </div>
        </div>
    )
}