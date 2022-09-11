
import "./index.css";
import ImageGallery from 'react-image-gallery';
import patata from '../../assets/patata.jpg';

const images = [
  {
    original: patata,
    thumbnail: patata,
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];


function Gallery() {
  return (
    <div>
      Some images of my outreach and conference talks
      <ImageGallery items={images} showFullscreenButton={false} />
    </div>
  );
}

export default Gallery;