import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Chart } from "chart.js";

const OwnerData = () => {
  const { idUser } = useParams();
  // console.log(id_User);
  // const dispatch = useDispatch();
  // // const house = useSelector((state) => state.house);

  // React.useEffect(() => {
  //   dispatch(getHouse(houseId));
  // }, [dispatch]);
  const ctx = document.getElementById("myChart");

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          label: "# of Votes",
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  return (
    <>
      <h1>Owner data</h1>
      <div>
        <canvas id="myChart"></canvas>
      </div>
    </>
  );
};

export default OwnerData;
