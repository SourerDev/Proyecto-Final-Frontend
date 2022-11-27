import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getIdProperties } from "../../redux/actions/index";
import { useEffect } from "react";
const OwnerData = () => {
  const { id_User } = useParams();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getIdProperties(id_User));
  }, [dispatch]);

  return (
    <>
      <h1>Owner data</h1>
      {console.log(user)}
    </>
  );
};

export default OwnerData;
