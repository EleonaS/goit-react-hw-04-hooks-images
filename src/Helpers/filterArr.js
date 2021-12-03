function filterImages(images) {
  const Arr = images.map(
    ({
      id,
      webformatURL,
      user,
      largeImageURL,
    }) => ({
      id,
      webformatURL,
      user,
      largeImageURL,
    }),
  );
  return Arr;
}

export default filterImages;
