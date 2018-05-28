import axios from 'axios';

axios.defaults.baseURL = 'https://api.fullstackweekly.com';

const appService = {
  getPosts(categoryId) {
    return new Promise((resolve) => {
      axios.get(`/wp-json/wp/v2/posts?categories=${categoryId}&per_page=6`)
        .then((resp) => {
          resolve(resp.data);
        });
    });
  },
  login(credentials) {
    return new Promise((resolve, reject) => {
      axios.post('/services/auth.php', credentials)
        .then((resp) => {
          resolve(resp.data);
        }).catch((resp) => {
          reject(resp.status);
        });
    });
  },
};

export default appService;
