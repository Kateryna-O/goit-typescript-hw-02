import ImageCard from "../ImageCard/ImageCard";
import styles from "./ImageGallery.module.css";
import { Photo } from "../../App";

type Props = {
  images: Photo[];
  openModal: (photo: Photo) => void;
};

const ImageGallery = ({ images, openModal }: Props) => {
  return (
    <ul className={styles.gallery}>
      {images.map((image) => (
        <li key={image.id} className={styles.imageWrapper}>
          <ImageCard onClick={() => openModal(image)} url={image.urls.small} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
