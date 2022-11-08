import React, { Children, useEffect, useRef, useState } from 'react';

import Planets from './Planets';

import Planet from '@components/Planets/Planet';
import Spinner from '@components/Common/Spinner';

import { useStoreContext } from 'context/storeContext';

import type { PlanetDataType } from 'types';

interface Props {
  planets: PlanetDataType[];
}

const AllPlanets: React.FC<Props> = ({ planets }) => {
  const [lastCardEl, setLastCardEl] = useState<HTMLDivElement | null>(null);
  const [visitedEl, setVisitedEl] = useState<(string | undefined)[]>([]);
  const { fetchMore, isFetchingStarted } = useStoreContext();

  const observer = useRef(
    new IntersectionObserver((entries) => {
      const el = entries[0];
      if (el.isIntersecting) {
        const targetEl = el.target as HTMLElement;
        const { item } = targetEl.dataset;
        if (visitedEl.includes(item)) {
          return false;
        }
        fetchMore();

        if (item) {
          setVisitedEl((prevVisitedEl) => [...prevVisitedEl, item]);
        }
      }
    })
  );

  useEffect(() => {
    const currentEl = lastCardEl;

    const currentObserver = observer.current;
    if (currentEl) {
      currentObserver?.observe(currentEl);
    }

    return () => {
      // to clear
      if (currentEl) {
        currentObserver?.unobserve(currentEl);
      }
    };
  }, [lastCardEl]);

  return (
    <>
      <div className="pb-12 flex justify-center md:justify-between flex-wrap gap-8">
        {Children.toArray(
          planets.map((planet, index, arr) => (
            <div
              ref={arr.length - 1 === index ? setLastCardEl : null}
              data-item={planet.title}
            >
              <Planet planet={planet} />
            </div>
          ))
        )}
      </div>
      <div className="flex justify-center py-5">
        {isFetchingStarted && 'Fetching...'}
      </div>
    </>
  );
};

export default AllPlanets;
