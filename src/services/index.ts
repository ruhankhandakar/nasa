import type { PlanetDataType, DatesFilters } from 'types';

interface ReturnType {
  success: boolean;
}

interface SuccessReturnType extends ReturnType {
  data: PlanetDataType[];
  message?: never;
}
interface FailureReturnType extends ReturnType {
  data?: never;
  message: string;
}

type FetchDataReturnType = SuccessReturnType | FailureReturnType;

export const fetchData = async (
  dates: DatesFilters
): Promise<FetchDataReturnType> => {
  try {
    const response = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${
        import.meta.env.VITE_APP_API_KEY
      }&start_date=${dates.startDate}&end_date=${dates.endDate}&thumbs=true`
    );
    const data = await response.json();
    return {
      success: true,
      data,
    };
  } catch (error: Error | any) {
    return {
      success: false,
      message: error.message,
    };
  }
};
