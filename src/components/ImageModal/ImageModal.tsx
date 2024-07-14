import ReactModal from "react-modal";
import styles from "./ImageModal.module.css";

type ImageMod = {
  isOpen: boolean;
  onRequestClose: () => void;
  largeImageURL: string;
  description: string;
  likes: number;
  tags: { title: string }[];
  user: { username: string };
  created_at: Date;
};

const ImageModal = ({
  isOpen,
  onRequestClose,
  largeImageURL,
  description,
  likes,
  tags,
  user,
  created_at,
}: ImageMod) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={styles.content}
      overlayClassName={styles.overlay}
      ariaHideApp={false}
    >
      <div className={styles.modalBoxOverlay}>
        <button className={styles.closeButton} onClick={onRequestClose}>
          Close
        </button>
        <img src={largeImageURL} alt="Large" className={styles.image} />
        <div className={styles.textContainer}>
          <h2 className={styles.modalText}>Description: {description}</h2>
          <p className={styles.additionalInfo}>
            Likes: {likes} | Tags: {tags.map((tag) => tag.title).join(", ")} |
            Created by: {user.username} | Created at:{" "}
            {new Date(created_at).toLocaleDateString()}
          </p>
        </div>
      </div>
    </ReactModal>
  );
};

export default ImageModal;
