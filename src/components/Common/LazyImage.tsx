import { FC } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

interface Props {
  image: {
    alt: string;
    src: string;
  };
  wrapperClassName?: string;
}

const LazyImage: FC<Props> = ({ image, ...props }) => (
  <LazyLoadImage
    placeholderSrc="/placeholder.png"
    alt={image.alt}
    effect="blur"
    src={image.src}
    {...props}
  />
);

export default LazyImage;
