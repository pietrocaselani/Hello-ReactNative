import axios from 'axios';

export default class GithubApi {
  zen() {
    return axios.get('https://api.github.com/zen').then((response) => {
      return response.data;
    });
  }
}
