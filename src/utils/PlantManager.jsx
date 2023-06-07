import React, { useState, createContext, useContext, useEffect } from 'react';
import PlantAPI from '../api/module/PlantAPI';
import { useSession } from './SessionManager';

const PlantContext = createContext(null);

export const usePlant = () => {
  const context = useContext(PlantContext);

  if (!context) {
    throw new Error('Cannot find PlantContext');
  }
  return context;
};

const PlantManager = ({ children }) => {
  /* Router */

  /* State */
  const [plantList, setPlantList] = useState([]);
  const { session } = useSession();

  /* Hooks */
  // 세션의 building_id를 통해 Plant 전체 조회
  useEffect(() => {
    const getPlantList = async () => {
      try {
        if (!session) {
          return;
        }

        const result = await PlantAPI.getPlantList(session.building_id);

        if (result) {
          setPlantList(result);
        }

        return;
      } catch (e) {
        console.log(e);
        throw e;
      }
    };

    getPlantList();
  }, [session]);

  /* Functions */

  /* Render */
  return (
    <PlantContext.Provider
      value={{
        plantList,
        setPlantList,
      }}
    >
      {children}
    </PlantContext.Provider>
  );
};

export default PlantManager;
