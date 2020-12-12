<template>
  <div class="search">
    <div class="search__inner">
      <label for="search" class="search__label">Search smth 👩‍🚀</label>
      <input name="search" id="search" v-model="searchValue"
      type="text" class="search__input"
      @input="handleInput">
      <ul class="search__list">
        <li class="search__item" v-for="item in results" :key="item.data[0].nasa_id">
          <p class="search__itemTitle">
            {{item.data[0].title}}
          </p>
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
      }).catch((error) => {
        console.log(error);
      });
    }, 500),
  },
};

</script>
<style lang="scss" scoped>
  .search {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding: 30px;
    width: 100%;
    &__inner {
      display: flex;
      flex-direction: column;
      width: 300px;
    }
    &__label {

    }
    &__input {
      border: none;
      border-bottom: 1px solid black;
      font-size: 1.2rem;
      font-family: 'Montserrat', sans-serif;
      padding: 5px;

      &:focus {
        outline:0;
      }
    }
  }
</style>
