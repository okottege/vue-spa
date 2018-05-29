import axios from 'axios';

axios.defaults.baseURL = 'https://api.fullstackweekly.com';
axios.interceptors.request.use((config) => {
  if (typeof window === 'undefined') {
    return config;
  }

  const token = window.localStorage.getItem('token');
  const newConfig = config;
  if (token) {
    newConfig.headers.Authorization = `Bearer ${token}`;
  }

  return newConfig;
});

const appService = {
  getPosts(categoryId) {
    return new Promise((resolve) => {
      axios.get(`/wp-json/wp/v2/posts?categories=${categoryId}&per_page=6`)
        .then((resp) => {
          resolve(resp.data);
        });
    });
  },
  getProfile() {
    return new Promise((resolve) => {
      axios.get('/services/profile.php')
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
