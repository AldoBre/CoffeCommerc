import axios from 'axios';

const createAxiosInstance = () => {
  const instance = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  instance.interceptors.response.use(
    response => response,
    error => {
      if (error.response && error.response.status === 401) {
        localStorage.removeItem('token')
        
      }
      return Promise.reject(error);
    }
  );


  return instance;
};

export default createAxiosInstance();
