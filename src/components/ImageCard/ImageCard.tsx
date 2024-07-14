import React from "react";
import styles from "./ImageCard.module.css";

type Props = {
  onClick: () => void;
  url: string;
};

const ImageCard = ({ onClick, url }: Props) => {
  const handleClick = (
    event: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    onClick();
  };

  return (
    <div className={styles.card}>
      <img
        onClick={handleClick}
        src={url}
        alt="Image"
        className={styles.image}
      />
    </div>
  );
};

export default ImageCard;
