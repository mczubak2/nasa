import axios from 'axios';

const url = 'http://127.0.0.1:5000/api/images/';

class ImagesService {
  // Get Images
  static getImages(name) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(`${url}${name}`);
        const { data } = res;
        resolve(data);
      } catch (error) {
        reject(error);
      }
    });
  }

  static clearCache() {
    return new Promise(async (resolve, reject) => {
      try {
          await axios.use(`${url}delete/all`);
        resolve(
          console.log('Cache is deleted')
        );
      } catch (error) {
        reject(error);
      }
    });
  }

  static removeSpecific(name) {
    return new Promise(async (resolve, reject) => {
      try {
          await axios.use(`${url}delete/${name}`);
        resolve(
          console.log('Key is deleted')
        );
      } catch (error) {
        reject(error);
      }
    });
  }
}

export default ImagesService;
