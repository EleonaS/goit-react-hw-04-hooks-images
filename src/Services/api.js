import axios from 'axios';

const BASE_URL =
  'https://pixabay.com/api/';

const key =
  '23559462-5fccbea6e5ec1609b81e1decd';

/*function fetchApi({
  searchQuery,
  page,
}) {
  return axios
    .get(
      `${BASE_URL}?q=${searchQuery}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12
        `,
    )
    .then(
      response => response.data.hits,
    );
}

*/
export const fetchApi = (
  searchQuery,
  page,
) =>
  axios
    .get(
      `${BASE_URL}?q=${searchQuery}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12
        `,
    )
    .then(
      response => response.data.hits,
    );
