import { FC, useState } from 'react';

import LazyImage from '@components/Common/LazyImage';

import type { PlanetDataType } from 'types';
import Modal from '@components/Common/Modal';
import SpotLight from '@components/SpotLight';

interface Props {
  planet: PlanetDataType;
}

const Planet: FC<Props> = ({ planet }) => {
  const [isPreview, setIsPreview] = useState(false);

  const togglePreview = (): void => {
    setIsPreview((prevState) => !prevState);
  };
  return (
    <>
      <div
        className="card w-96 bg-base-100 shadow-xl min-w-[250px] cursor-pointer"
        onClick={togglePreview}
      >
        <figure>
          <LazyImage
            image={{
              src: planet.thumbnail_url || planet.url,
              alt: planet.title,
            }}
            wrapperClassName="h-[180px]"
          />
        </figure>
        <div className="card-body p-4 pb-6">
          <h2 className="card-title text-base text-ellipsis overflow-hidden">
            {planet.title}
          </h2>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{planet.date}</div>
          </div>
        </div>
      </div>
      {isPreview && (
        <Modal toggleModal={togglePreview}>
          <SpotLight planet={planet} isFromModal />
        </Modal>
      )}
    </>
  );
};

export default Planet;
