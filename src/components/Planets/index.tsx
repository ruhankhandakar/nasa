import { FC, Children } from 'react';

import Planet from './Planet';

import type { PlanetDataType } from 'types';

interface Props {
  planetData: PlanetDataType[];
}

const Planets: FC<Props> = ({ planetData }) => {
  return (
    <>
      {Children.toArray(planetData.map((planet) => <Planet planet={planet} />))}
    </>
  );
};

export default Planets;
