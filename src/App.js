import React, {
  useState,
  useEffect,
} from 'react';
import {
  ToastContainer,
  toast,
} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import * as api from './Services/api';
import { fetchApi } from './Services/api';
import { Searchbar } from 'Components/Searchbar/Searchbar';
import { ImageGallery } from 'Components/ImageGallery/ImageGallery';
import { Button } from 'Components/Button/Button';
import { Modal } from 'Components/Modal/Modal';
import { Loader } from 'Components/Loader/Loader';
import filterImages from 'Helpers/filterArr';

function App() {
  const [searchQuery, setSearchQuery] =
    useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState(
    [],
  );
  const [
    largeImageUrl,
    setLargeImageUrl,
  ] = useState('');
  const [error, setError] =
    useState(null);
  const [showModal, setShowModal] =
    useState(false);
  const [isLoading, setIsLoading] =
    useState(false);

  useEffect(() => {
    function fetchImages() {
      setIsLoading(true);
      fetchApi(searchQuery, page)
        .then(data =>
          data.length > 0
            ? setImages(prevState => [
                ...prevState,
                ...filterImages(data),
              ])
            : toast.warning(
                'Image not found!!!',
              ),
        )
        .catch(
          error => console.log(error),
          //setError(error)
        )
        .finally(() => {
          setIsLoading(false);

          window.scrollTo({
            top: document
              .documentElement
              .scrollHeight,
            behavior: 'smooth',
          });
        });
    }
    if (searchQuery) {
      fetchImages();
    }
  }, [searchQuery, page]);

  function toggleModal(largeImageUrl) {
    setLargeImageUrl(largeImageUrl);
    setShowModal(!showModal);
  }

  function handleSubmit(searchQuery) {
    setImages([]);
    setSearchQuery(searchQuery);
    setPage(1);
    setError(null);
  }

  function handleLoadMore() {
    setPage(prev => prev + 1);
  }

  return (
    <div className="App">
      {error &&
        toast.error(
          'Error!!! Something went wrong.',
        )}

      <Searchbar
        onSubmit={handleSubmit}
      />

      {isLoading && <Loader />}

      {images.length > 0 && (
        <ImageGallery
          images={images}
          onClose={toggleModal}
        />
      )}

      {images.length > 11 && (
        <Button
          type="button"
          onClick={handleLoadMore}
        />
      )}

      {showModal && (
        <Modal
          onClose={toggleModal}
          largeImageUrl={largeImageUrl}
        />
      )}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
