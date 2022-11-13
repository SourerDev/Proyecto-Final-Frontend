import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {getallProperties, getCities} from '../../redux/actions';
import Footer from "../../components/footer/Footer.jsx";
import HeaderLanding from "../../components/header/HeaderLanding.jsx";
import Carousel from '../../components/carousel/Carousel';

export default function Landing() {
  const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getallProperties())
        dispatch(getCities())
    }, [])
  return (
    <div>
      <HeaderLanding/>
      <Carousel/>
      <Footer />
    </div>
  );
}
