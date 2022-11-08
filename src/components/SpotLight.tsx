import { FC, useState } from 'react';

import Modal from '@components/Common/Modal';

import type { PlanetDataType } from 'types';

interface Props {
  planet: PlanetDataType;
}

const SpotLight: FC<Props> = ({ planet }) => {
  const [isShowPreview, setIsShowPreview] = useState(false);

  const handleThumbnailClick = (): void => {
    setIsShowPreview((prevState) => !prevState);
  };
  console.log('planet', planet);
  return (
    <>
      <div className="flex flex-col-reverse gap-y-4 md:flex-row max-w-full justify-between items-center">
        <div className="flex-1 max-w-full">
          <div className="flex-col w-full">
            <h1 className="text-4xl mb-3 text-center md:text-left">
              {planet.title}
            </h1>
            <div className="text-lg mb-3">
              {planet.explanation.substring(0, 200)}...
            </div>
            <p className="text-base">Author: {planet.copyright}</p>
          </div>
        </div>
        <div className="flex-1 max-w-full flex justify-end">
          <figure
            className="md:max-w-lg cursor-pointer"
            onClick={handleThumbnailClick}
          >
            <img
              className="max-w-full h-auto rounded-lg"
              src={planet.url}
              alt={planet.title}
            />
          </figure>
        </div>
      </div>
      {isShowPreview ? (
        <Modal toggleModal={handleThumbnailClick}>
          <figure className="md:max-w-lg" onClick={handleThumbnailClick}>
            <img
              className="max-w-full h-auto rounded-lg"
              src={planet.url}
              alt={planet.title}
            />
          </figure>
        </Modal>
      ) : null}
    </>
  );
};

export default SpotLight;
