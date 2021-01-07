<template>
  <div class="search">
    <div class="search__inner">
      <label for="search" class="search__label">Find images 🪐</label>
      <input name="search" id="search" v-model="searchValue"
      type="text" class="search__input"
      @input="handleInput">
      <div v-if="!started" class="search__temporary">
        Explore the space... 👩‍🚀
      </div>
      <ul class="search__list">
        <li class="search__item" v-for="item in results" :key="item.data[0].nasa_id">
          <div class="search__imageWrap">
            <div class="search__itemImage"
              :style="{ 'background-image': 'url('+ item.links[0].href +')' }">
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
const axios = require('axios').default;
const debounce = require('lodash.debounce');

const API = 'https://images-api.nasa.gov/search';

export default {
  name: 'Search',

  data() {
    return {
      searchValue: '',
      results: [],
    };
  },

  methods: {
    handleInput: debounce(function () {
      axios.get(`${API}?q=${this.searchValue}&media_type=image`).then((response) => {
        this.results = response.data.collection.items;
        this.started = true;
        console.log(this.results);
      }).catch((error) => {
        console.log(error);
      });
    }, 500),
  },
};

</script>
<style lang="scss">
  .search {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    width: 100%;
    margin-top: 100px;
    &__inner {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 90%;
    }
    &__label {
      width: 300px;
    }
    &__input {
      border: none;
      border-bottom: 1px solid black;
      font-size: 1.2rem;
      font-family: 'Montserrat', sans-serif;
      padding: 5px;
      width: 300px;

      &:focus {
        outline:0;
      }
    }
    &__list {
      display: flex;
      width: 90%;
      flex-wrap: wrap;
      margin-top: 30px;
    }
    &__item {
      flex-basis: calc(100%/3);
      box-sizing: border-box;
      padding: 3px;
      list-style: none;
    }
    &__imageWrap {
      width: 100%;
      height: 20vw;
      overflow: hidden;
    }
    &__itemImage {
      width: 100%;
      height: 100%;
      background-position: center;
      background-size: cover;
      transition: .2s linear;
      &:hover {
        cursor: pointer;
        transform: scale(1.1);
      }
    }
    &__temporary {
      display: flex;
      align-items: center;
      height: 500px;
      font-size: 3rem;
    }
  }
</style>
