import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { toast } from 'react-toastify';
import dayjs from 'dayjs';

import { fetchData } from 'services';

import type { ITStoreContext, PlanetDataStateType, DatesFilters } from 'types';

interface Props {
  children: ReactNode;
}

const defaultState = {
  loading: false,
  planetData: [],
  isFetchingStarted: false,
  fetchMore: () => '',
};

export const StoreContext = createContext<ITStoreContext>(defaultState);

const StoreProvider: FC<Props> = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [planetData, setPlanetData] = useState<PlanetDataStateType>([]);
  const [dates] = useState<DatesFilters>({
    endDate: dayjs().format('YYYY-MM-DD'),
    startDate: dayjs().subtract(1, 'month').format('YYYY-MM-DD'),
  });
  const [isFetchingStarted, setIsFetchingStarted] = useState(false);

  const getData = async (fetchedDates: DatesFilters) => {
    setLoading(true);
    const response = await fetchData(fetchedDates);
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

  const fetchMore = async () => {
    const newEndDate = dates.startDate;
    const newStartDate = dayjs(dates.startDate)
      .subtract(1, 'month')
      .format('YYYY-MM-DD');

    setIsFetchingStarted(true);

    const response = await fetchData({
      startDate: newStartDate,
      endDate: newEndDate,
    });

    if (!response.success) {
      toast.error(response.message);
      setIsFetchingStarted(false);
      return;
    }

    if (response.data) {
      setPlanetData((prevState) => [...prevState, ...response.data]);
    }
  };

  useEffect(() => {
    getData(dates);
  }, [dates]);

  return (
    <StoreContext.Provider
      value={{ loading, planetData, isFetchingStarted, fetchMore }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStoreContext = () => useContext(StoreContext);

export default StoreProvider;
