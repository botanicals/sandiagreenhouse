interface GalleryProps {
  data: {
    type: 'gallery';
    images: {
      columns: 1 | 2 | 3 | 4;
      rows: number;
      source: string;
      alt: string;
      caption?: string;
    }[];
  };
}

const Gallery: React.VFC<GalleryProps> = ({ data: gallery }) => {
  return (
    <div>
      <div className="grid grid-flow-row-dense grid-cols-2 gap-6 md:grid-cols-4">
        {gallery.images.map((image, index) => (
          <figure
            key={`${index}-image`}
            style={{
              gridColumn: `span ${image.columns || 1}`,
              gridRow: `span ${image.rows || 1}`,
            }}
            className="max-h-96"
          >
            <img src={image.source} alt={image.alt || `gibby floral gallery image ${index + 1}`} className="object-cover object-center w-full h-full" />
          </figure>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
