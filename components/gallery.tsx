import { useState } from 'react';
import { Lightbox } from 'yet-another-react-lightbox';
import Captions from 'yet-another-react-lightbox/plugins/captions';

interface GalleryProps {
  title?: string;
  images: {
    columns?: 1 | 2 | 3 | 4;
    rows?: number;
    source: string;
    alt: string;
    caption?: string;
  }[];
}

const Gallery: React.VFC<GalleryProps> = ({ images, title }) => {
  const [index, setIndex] = useState(-1);

  const slides = images.map(image => ({
    title: image.caption || title,
    description: image.alt,
    src: image.source,
  }));

  return (
    <div>
      <div className="grid grid-flow-row-dense grid-cols-2 gap-6 md:grid-cols-4">
        {images.map((image, index) => (
          <figure
            key={`${index}-image`}
            style={{
              gridColumn: `span ${image.columns || 1}`,
              gridRow: `span ${image.rows || 1}`,
            }}
            className="cursor-pointer max-h-96"
            onClick={() => setIndex(index)}
          >
            <img src={image.source} alt={image.alt || `sandia greenhouse gallery image ${index + 1}`} className="object-cover object-center w-full h-full" />
          </figure>
        ))}
      </div>
      <Lightbox slides={slides} index={index} open={index >= 0} close={() => setIndex(-1)} plugins={[Captions]} />
    </div>
  );
};

export default Gallery;
