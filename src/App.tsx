import React, { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import { Toaster, toast } from "react-hot-toast";
import getImages from "./photo-api";

 export type Photo = {
  id: string;
  urls: {
    small: string;
    full: string;
  };
  alt_description: string;
  likes: number;
  tags: { title: string }[];
  user: { username: string };
  created_at: Date;
  description: string;
};

function App() {
  const [images, setImages] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleSearchSubmit = async (searchQuery: string) => {
    setPage(1);
    setImages([]);
    try {
      setLoading(true);
      const data: Photo[] = await getImages(searchQuery, 1);
      setImages(data);
      setQuery(searchQuery);
    } catch (error) {
      toast.error("Failed to fetch images");
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = async () => {
    try {
      setLoading(true);
      const data = await getImages(query, page + 1);
      setImages((prevImages) => [...prevImages, ...data]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      toast.error("Failed to fetch more images");
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const openModal = (photo: Photo) => {
    setSelectedPhoto(photo);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedPhoto(null);
  };

  return (
    <>
      <SearchBar onSubmit={handleSearchSubmit} />
      {error && <ErrorMessage />}
      {images.length > 0 && (
        <ImageGallery images={images} openModal={openModal} />
      )}
      {images.length > 0 && !loading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      {loading && <Loader />}
      {selectedPhoto && (
        <ImageModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          largeImageURL={selectedPhoto.urls.full}
          description={selectedPhoto.alt_description}
          likes={selectedPhoto.likes}
          tags={selectedPhoto.tags}
          user={selectedPhoto.user}
          created_at={selectedPhoto.created_at}
        />
      )}
      <Toaster position="bottom-right" reverseOrder={false} />
    </>
  );
}

export default App;
