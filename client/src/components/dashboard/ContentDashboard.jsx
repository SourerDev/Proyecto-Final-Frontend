import React from "react";
import { getallProperties } from "../../redux/actions/index.js";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"; // import useSelec
import Dashboard from "./Dashboard.jsx";

const ContentDashboard = () => {
  const dispatch = useDispatch();
  const { properties } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getallProperties);
  }, [dispatch]);
  return (
    <>
      <div class="flex items-center justify-center min-h-screen bg-gray-900">
        <div class="col-span-12">
          <div class="overflow-auto lg:overflow-visible ">
            <table class="tableDashboard text-gray-400 border-separate space-y-6 text-sm ">
              <thead class="bg-gray-800 text-white-500">
                <tr className="bg-indigo-600">
                  <th class="p-3">Propiedades</th>
                  <th class="p-3 text-left">Disponible</th>
                  <th class="p-3 text-left">Propietario</th>
                  <th class="p-3 text-left">Borrar/Bloquear</th>
                </tr>
              </thead>
              <tbody>
                {!properties.length ? (
                  <h1>No hay propiedades</h1>
                ) : (
                  properties.map((el) => <Dashboard key={el.id} data={el} />)
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentDashboard;
