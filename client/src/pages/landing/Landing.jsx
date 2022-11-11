import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {getallProperties, getCities} from '../../redux/actions';
import Footer from "../../components/footer/Footer.jsx";
import HeaderLanding from "../../components/header/HeaderLanding.jsx"

export default function Landing() {
  const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getallProperties())
        dispatch(getCities())
    }, [])
  return (
    <div>
      <HeaderLanding/>
      <Footer />
    </div>
  );
}
