import { FC } from 'react';

import Planet from './Planet';

import type { PlanetDataType } from 'types';

interface Props {
  planetData: PlanetDataType[];
}

const Planets: FC<Props> = ({ planetData }) => {
  console.log('planetData', planetData);
  return (
    <div>
      <Planet />
    </div>
  );
};

export default Planets;
