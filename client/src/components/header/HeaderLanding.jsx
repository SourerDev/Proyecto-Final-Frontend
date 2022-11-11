import { Link } from "react-router-dom";
import LandingSearch from "../landingSearch/LandingSearch";
//className="flex justify-center items-center bg-cover bg-no-repeat bg-center shadow min-h-screen bg-[url('https://i.pinimg.com/originals/2f/9d/84/2f9d84d72b045ecb50399e9177b73288.jpg


const HeaderLanding = ()=>{
    return(
        <div className="flex flex-col h-full">
            <div className="flex flex row justify-between p-4 relative">
                <div>
                    <h1 className="text-2xl">Properties & You</h1>
                </div>
                <div className="w-10 h-10 bg-blue-300">

                </div>

                <div className="absolute -bottom-4 right-4">
                    <Link to={'/home'}>
                        <button className="bg-blue-300 p-1 r-2 text-slate-100 hover:bg-blue-400 hover:rounded-xl rounded-2xl font-bold" >Go to Home</button>
                    </Link>
                </div>
            </div>
                <h2><LandingSearch/></h2>
            
        </div>
    )
}

export default HeaderLanding;