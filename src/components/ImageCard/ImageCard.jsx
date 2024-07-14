import styles from "./ImageCard.module.css";

const ImageCard = ({ urls, description, onClick }) => {
  return (
    <div className={styles.card}>
      <img
        onClick={onClick}
        src={urls.small}
        alt={description}
        className={styles.image}
      />
    </div>
  );
};

export default ImageCard;
