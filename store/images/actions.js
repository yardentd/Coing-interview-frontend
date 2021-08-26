
const URL = 'http://localhost:9090/v1/images';
export default {

  async getImagesFromApi ({ commit }) {
    await fetch(URL).then(res => res.json()).then(data => commit('setImages', data));
  }
};
