import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { toast } from 'react-toastify';

import { fetchData } from 'services';

import type { ITStoreContext, PlanetDataStateType } from 'types';

interface Props {
  children: ReactNode;
}

const defaultState = {
  loading: false,
  planetData: [],
};

export const StoreContext = createContext<ITStoreContext>(defaultState);

const StoreProvider: FC<Props> = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [planetData, setPlanetData] = useState<PlanetDataStateType>([]);

  const getData = async () => {
    setLoading(true);
    const response = await fetchData();
    if (!response.success) {
      toast.error(response.message);
      setLoading(false);
      return;
    }
    if (response.data) {
      setPlanetData(response.data);
    }
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <StoreContext.Provider value={{ loading, planetData }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStoreContext = () => useContext(StoreContext);

export default StoreProvider;
