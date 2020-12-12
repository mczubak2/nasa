<template>
  <div class="app">
    <div class="nav">
      <router-link to="/">space explorer</router-link>
      <router-link to="/about">about</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss" scoped>
  .app {
    font-family: 'Montserrat', sans-serif;
  }

</style>
