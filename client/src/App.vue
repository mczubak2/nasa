<template>
  <div class="app">
    <div class="app__nav">
      <a class="app__logo" href="/"><div class="app__logoItem">Spacer 🚀</div></a>
      <div class="app__links">
        <router-link class="app__link" to="/">
          <span class="app__span">space explorer</span>
          <span class="app__span app__span--active">space explorer</span>
        </router-link>
        <router-link class="app__link" to="/about">
          <span class="app__span">about</span>
          <span class="app__span app__span--active">about</span>
        </router-link>
      </div>
    </div>
      <router-view />
  </div>
</template>

<style lang="scss">
  body {
    margin: 0;
    box-sizing: border-box;
    overflow-y: scroll;
  }

  .router-link-exact-active {
    color: #ffcd19 !important;
  }

  .app {
    $root: &;
    font-family: 'Montserrat', sans-serif;

    &__nav {
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      z-index: 5;
      height: 50px;
      line-height: 50px;
      display: flex;
      justify-content: space-between;
      background-color: #001927;
      box-shadow: 0 2px 8px rgba(black, $alpha: .3);
    }

    &__logo {
      margin-left: 40px;
      text-decoration: none;
    }

    &__logoItem {
      font-size: 1.4rem;
      text-transform: uppercase;
      font-weight: 500;
      color: white;
      transition: .3s;

      &:hover {
        cursor: pointer;
        opacity: .7;
      }
    }

    &__links {
      display: flex;
    }

    &__link {
      display: block;
      padding: 0 15px;
      margin: 0 15px;
      height: 100%;
      text-transform: uppercase;
      text-decoration: none;
      color: white;
      font-weight: 500;
      overflow: hidden;
      &:hover {

        #{$root}__span {
          transform: translateY(-100%);
        }
      }
    }
    &__span {
      display: block;
      transition: .3s;

      &--active {
        color:#00b6dc;
      }
    }
  }
</style>
