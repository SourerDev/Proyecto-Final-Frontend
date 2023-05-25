import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { actionsPublications } from "../../redux2.0/reducers";
import { ApiPropYou } from "../../services";
import { GoBackButton } from "../../components/form/buttons/GoBack";
import CarrouselDetail from "../../components/carousel/CarrouselDetail";
import { OwnerCard } from "../../components/cards/OwnerCard";

export function PropertyDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const publication = useSelector(
    (state) => state.publication.detailPublication
  );
  const { User, Property } = publication?.idPublication
    ? publication
    : { User: {}, Property: {} };

  useEffect(() => {
    ApiPropYou.getPublicationById({ idPublication: id })
      .then((response) => {
        const { publication } = response.data;
        dispatch(actionsPublications.setDetailPublication({ ...publication }));
      })
      .catch(() => {});
    return () => {
      dispatch(
        actionsPublications.setDetailPublication({ idPublication: null })
      );
    };
  }, [dispatch]);

  if (!publication?.idPublication) return <div>...Loading</div>;

  return (
    <>
      <GoBackButton />
      <div className="max-w-4xl m-1 p-2 mx-auto  grid grid-cols-1 lg:max-w-[97rem] lg:gap-x-20 lg:grid-cols-2">
        <div class=" col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4  lg:col-start-2  lg:row-span-2  ">
          <CarrouselDetail images={[...Property.photos]} />
        </div>
        <div className="relative my-0 shadow-2xl p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:bg-white sm:bg-white lg:row-start-1">
          <h1 className="mt-1 my-2 flex justify-center text-lg font-semibold text-white sm:text-slate-900 md:text-2xl dark:sm:text-black">
            {Property.address}
          </h1>
          <h1 className="mt-1 text-lg flex justify-center font-semibold text-white sm:text-slate-900 md:text-2xl dark:sm:text-black">
            {Property.City?.string}
          </h1>
          <p className="text-xl mt-2 leading-4 flex justify-center font-medium text-white sm:text-slate-400 dark:sm:text-slate-400">
            {" "}
            {Property.type}
          </p>
          <p className="text-xl mt-2 leading-4 flex justify-center font-medium text-white sm:text-indigo-600 dark:sm:text-indigo-600">
            {publication.modality}
          </p>
        </div>
        <dl class="mt-4 text-xs font-medium drop-shadow-2xl row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
          <dl className="my-4 border-black border-2 rounded-lg shadow-2xl bg-white">
            <dd class="flex justify-center  text-black  items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <span class="text-2xl ">
                {publication.price} <span class="  font-normal">us</span>
              </span>
            </dd>
          </dl>
          <div className="shadow-2xl bg-white grid rounded-lg items-center col-start-1 col-end-3 row-start-1 sm:mb-3 sm:grid-cols-2">
            <dd class="text-black m-3 p-1 flex items-center  dark:text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                />
              </svg>

              <span class="m-3 text-xl p-0">
                numero de pisos <spam></spam>{" "}
                <span class="text-black font-normal">(pisos)</span>
              </span>
            </dd>
            <dd class="text-black m-3 p-1 flex items-center  dark:text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                />
              </svg>

              <span class="m-3 text-xl p-0">
                garage <span class="text-black font-normal">(garage)</span>
              </span>
            </dd>
            <dd class="text-black m-3 p-1 flex items-center   dark:text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
                />
              </svg>

              <span class="m-3 text-xl p-0">
                numero de enverioments{" "}
                <span class="text-black font-normal">ambientes</span>
              </span>
            </dd>
            <dd class="text-black m-3 p-1 flex items-center  dark:text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
                />
              </svg>

              <span class="m-3 text-xl p-0">
                {Property.squareMeters}{" "}
                <span class="text-black text-l">.mt2</span>
              </span>
            </dd>
            <dd class="text-black m-3 p-1 flex items-center  dark:text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
                />
              </svg>

              <span class="m-3 text-xl p-0">
                {Property.bedrooms}{" "}
                <span class="text-black font-normal">cuartos</span>
              </span>
            </dd>
            <dd class="text-black m-3 p-1 flex items-center dark:text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <span class="m-3 text-xl p-0">{Property.yearBuilt} </span>
              <span class="text-black text-xl font-normal">antiguedad</span>
            </dd>
          </div>
        </dl>
      </div>
      <OwnerCard User={User}/>
    </>
  );
}
