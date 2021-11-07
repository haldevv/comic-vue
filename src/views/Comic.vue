<template>
  <div class="container">
    <h1>{{comic.title}}</h1>
    <img class="comic-img" :src=comic.image.url :alt=comic.image.alt />
    <span style="font-weight: bold;">Califica este comic</span>
    <StarRating :star-size="25" v-model="comic.rate"/>
    <button @click=getComic class="comic-button">NUEVO COMIC</button>
  </div>
</template>

<script>
import StarRating from 'vue-star-rating'
import { mapActions, mapGetters } from 'vuex'
import store from '../store'


export default {
  name: 'Comic',
  components: {
    StarRating
  },
  computed: {
    ...mapGetters([ 'comic' ])
  },
  methods: {
    ...mapActions(['getComic'])
  },
  mounted() {
    store.dispatch('getComic')
  }
}
</script>

<style scoped lang="scss">
  @import '../styles/breakpoints-mixin.scss';
  @import '../styles/theme.scss';

  .comic-img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    height: auto;
    width: 100%;

    @include breakpoint(medium) {
        width: 65%;
    }

    @include breakpoint(large) {
        width: 35%;
    }
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }

  .comic-button {
    font-family: 'Comic Neue', cursive;
    position: relative;
    overflow: hidden;
    color: $primary-color;
    border: 2px solid $primary-color;
    background-color: transparent;
    cursor: pointer;
    line-height: 1;
    padding: 5px;
    border-radius: 1.5rem;
    font-size: 1.2rem;
    outline: none;
    transition: transform .125s;
    margin-top: 10px;
  }
</style>
