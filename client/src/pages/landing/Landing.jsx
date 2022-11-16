import Footer from "../../components/footer/Footer.jsx";
import HeaderLanding from "../../components/header/HeaderLanding.jsx";
import CardsLanding from "../../components/infoLanding/InfoLanding";
import  Carousel from "../../components/carousel/Carousel"

const images = [
  "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/casa-de-campo-moderna30-1639245321.jpg",
  "https://i.pinimg.com/originals/27/51/cc/2751cc959a1ecb2ec3ff304791f1c86a.jpg",
  "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/casa-de-diseno-contemporaneo26-1637602658.jpg",
  "https://i.pinimg.com/originals/27/51/cc/2751cc959a1ecb2ec3ff304791f1c86a.jpg",
  "https://images.unsplash.com/photo-1667802132853-7549c1ff0c17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
];

const images2=[
  {image:images[0],id:25486},
  {image:images[1],id:25486},
  {image:images[2],id:25486},
  {image:images[1],id:25486},
  {image:images[4],id:25486}
]

export default function Landing() {
  
  return (
    <div >
      <HeaderLanding/>
      <Carousel title={'Venta'} images={images2}/>
      <Carousel title={'Alquiler'} images={images2}/>
      <CardsLanding/>
      <Footer />
    </div>
  );
}
