import { FC } from 'react';

import Planets from '@components/Planets';
import SpotLight from '@components/SpotLight';

import type { PlanetDataType } from 'types';

interface Props {
  planetData: PlanetDataType[];
}

const PlanetsContainer: FC<Props> = ({ planetData }) => {
  const spotlightPlanet = planetData[0];
  const prev7Planets = planetData.slice(1, 7);
  const allOtherPlanets = planetData.slice(7);

  return (
    <div>
      <div className="mb-12">
        <SpotLight planet={spotlightPlanet} />
      </div>

      <div className="flex overflow-x-auto max-w-full gap-x-4 pb-8">
        <Planets planetData={prev7Planets} />
      </div>
      <div className="divider pb-8" />
      <div className="pb-12 flex justify-between flex-wrap gap-y-8">
        <Planets planetData={allOtherPlanets} />
      </div>
    </div>
  );
};

export default PlanetsContainer;
