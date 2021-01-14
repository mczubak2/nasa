<template>
  <div class="search">
    <div class="search__inner">
      <label for="search" class="search__label">Let's find some images 🪐</label>
      <input name="search" id="search" v-model="searchValue" type="text" class="search__input">
      <button class="search__button" @click="getItems(searchValue)">
        <span class="search__span">
          Search
          <vue-fontawesome class="search__icon" icon="search" size="1"></vue-fontawesome>
        </span>
        <span class="search__span search__span--active">
          Search
          <vue-fontawesome class="search__icon" icon="search" size="1"></vue-fontawesome>
        </span>
      </button>
      <div v-if="!started" class="search__temporary">
        Explore the space... 👩‍🚀
      </div>
      <ul class="search__list">
        <li class="search__item" v-for="item in results" :key="item.href">
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
import ImagesService from '../ImagesService';

export default {
  name: 'Search',

  data() {
    return {
      searchValue: '',
      results: [],
      started: false,
    };
  },

  methods: {
    async getItems(value) {
      try {
        const response = await ImagesService.getImages(value);
        this.results = response.data.collection.items;
        this.started = true;
        console.log(this.results);
      } catch (error) {
        console.log(error.message);
      }
    },
  },
};

</script>

<style lang="scss">
  $root: &;

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
      margin-bottom: 30px;
      text-align: center;
    }

    &__input {
      border: none;
      border-bottom: 1px solid black;
      font-size: 1.2rem;
      font-family: 'Montserrat', sans-serif;
      padding: 5px;
      width: 300px;
      margin-bottom: 30px;
      text-align: center;

      &:focus {
        outline:0;
      }
    }

    &__button {
      font-family: 'Montserrat', sans-serif;
      text-transform: uppercase;
      border: #00b6dc solid 2px;
      color: #00b6dc;
      border-radius: 30px;
      background-color: transparent;
      height: 40px;
      font-weight: 600;
      font-size: 15px;
      width: 170px;
      display: block;
      overflow: hidden;
      box-sizing: border-box;
      padding: 0;
      margin-bottom: 50px;

      &:focus {
        outline: none;
      }

      &:hover {
        cursor: pointer;
        .search__span {
          transform: translateY(-100%);
        }
      }
    }

    &__span {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 100%;
      transition: .3s;

      &--active {
        background-color: #00b6dc;
        color: #fff;
      }
    }

    &__icon {
      margin-left: 10px;
    }

    &__list {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      width: 90%;
      margin-top: 30px;
      padding-inline-start: 0;
      @media (max-width: 1200px) {
        grid-template-columns: 1fr 1fr;
      }
      @media (max-width: 600px) {
        grid-template-columns: 1fr;
      }
    }

    &__item {
      box-sizing: border-box;
      padding: 5px;
      list-style: none;
    }
    &__imageWrap {
      width: 100%;
      height: 20vw;
      overflow: hidden;
      box-shadow: 0 0 20px 3px rgba($color: #000000, $alpha: .2);
      @media (max-width: 1200px) {
        height: 40vw;
      }
      @media (max-width: 600px) {
        height: 60vw;
      }
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
