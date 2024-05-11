import Notiflix from 'notiflix';
import axios from 'axios';

const api_key =
  'live_gv9BA17aTwcuCrTNXGJ7bTGaQAmAqX0hq9nC7bkHZzcxRYWjt4OP9JOgnUsY3fJC';
axios.defaults.headers.common['x-api-key'] = api_key;
const url = 'https://api.thecatapi.com/v1';

export function fetchBreeds() {
  return axios
    .get(`${url}/breeds`)
    .then(response => response.data)
    .catch(error => {
      Notiflix.Notify.failure('Action failed');
      console.error('Action failed', error);
    });
}

export function fetchCatByBreed(breedId) {
  return axios
    .get(`${url}/images/search?breed_ids=${breedId}`)
    .then(response => response.data)
    .catch(error => {
      Notiflix.Notify.failure('Action failed');
      console.error('Action failed', error);
    });
}
