import ImageCard from "../ImageCard/ImageCard.jsx";
import styles from "./ImageGallery.module.css";

const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className={styles.gallery}>
      {images.map((image) => (
        <li key={image.id} className={styles.imageWrapper}>
          <ImageCard
            onClick={() => openModal(image)}
            urls={image.urls}
            description={image.description}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
