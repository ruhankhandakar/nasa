import { FC } from 'react';

import Planets from '@components/Planets';
import SpotLight from '@components/SpotLight';

import type { PlanetDataType } from 'types';

interface Props {
  planetData: PlanetDataType[];
}

const PlanetsContainer: FC<Props> = ({ planetData }) => {
  return (
    <div>
      <div className="mb-4">
        <SpotLight planet={planetData[0]} />
      </div>

      <Planets planetData={planetData} />
    </div>
  );
};

export default PlanetsContainer;
