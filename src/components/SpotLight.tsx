import React, { FC, useState, useCallback } from 'react';

import Modal from '@components/Common/Modal';
import LazyImage from '@components/Common/LazyImage';

import type { PlanetDataType } from 'types';

interface Props {
  planet: PlanetDataType;
  isFromModal?: boolean;
}

const SpotLight: FC<Props> = ({ planet, isFromModal = false }) => {
  const [isShowPreview, setIsShowPreview] = useState(false);

  const handleThumbnailClick = (): void => {
    setIsShowPreview((prevState) => !prevState);
  };

  const renderPlanetImgOrVideo = useCallback(() => {
    return (
      <>
        {planet.media_type === 'image' ? (
          <figure className="md:max-w-lg" onClick={handleThumbnailClick}>
            <img
              className="max-w-full h-auto rounded-lg"
              src={planet.url}
              alt={planet.title}
            />
          </figure>
        ) : (
          <iframe className="w-full aspect-video" src={planet.url}></iframe>
        )}
      </>
    );
  }, []);

  console.log('planet', planet.media_type, planet);
  return (
    <>
      <div
        className={`flex flex-col-reverse gap-y-4 max-w-full justify-between items-center ${
          isFromModal ? 'md:flex-col-reverse' : 'md:flex-row'
        }`}
      >
        <div className="flex-1 max-w-full">
          <div className="flex-col w-full">
            <h1
              className={`mb-3 text-center md:text-left ${
                isFromModal ? 'text-2xl' : 'text-4xl'
              }`}
            >
              {planet.title}
            </h1>
            <div className={`mb-3 ${isFromModal ? 'text-base' : 'text-lg'}`}>
              {planet.explanation.substring(0, 200)}...
            </div>
            {planet.copyright ? (
              <p className="text-base">Author: {planet.copyright}</p>
            ) : null}
          </div>
        </div>
        <div className="flex-1 max-w-full flex justify-end">
          {isFromModal ? (
            renderPlanetImgOrVideo()
          ) : (
            <figure
              className={`md:max-w-lg cursor-pointer ${
                isFromModal ? 'w-1/2 m-auto' : ''
              }`}
              onClick={handleThumbnailClick}
            >
              <LazyImage
                image={{
                  src: planet.url,
                  alt: planet.title,
                }}
              />
            </figure>
          )}
        </div>
      </div>
      {isShowPreview ? (
        <Modal toggleModal={handleThumbnailClick}>
          {renderPlanetImgOrVideo()}
        </Modal>
      ) : null}
    </>
  );
};

export default React.memo(SpotLight);
