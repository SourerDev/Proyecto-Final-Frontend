import styled from 'styled-components'

export default function Carousel(){
    const images = [
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/casa-de-campo-moderna30-1639245321.jpg",
        "https://i.pinimg.com/originals/27/51/cc/2751cc959a1ecb2ec3ff304791f1c86a.jpg",
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/casa-de-campo-moderna30-1639245321.jpg",
        "https://i.pinimg.com/originals/27/51/cc/2751cc959a1ecb2ec3ff304791f1c86a.jpg",
      ]
    return(
        <div className='relative w-full'>
            <div className='flex flex nowrap overflow-hidden w-full justify-center items-center'>
                <a href="url">
                    <img src={images[0]} alt=""  className='' width={340}/>
                </a>
                <a href="url">
                    <img src={images[1]} alt="" width={340} />
                </a>
                <a href="url">
                    <img src={images[2]} alt="" width={340}/>
                </a>
            </div>
            <div>
                <button>
                    {`<`}
                </button>
                <button>
                    {`>`}
                </button>
            </div>
        </div>
    )
}