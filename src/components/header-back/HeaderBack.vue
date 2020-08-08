<template>
  <div class="container-header-back">
    <div class="svg">
      <div class="wrapper" @click="$router.go(-1)">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 447 447">
          <defs />
          <path
            d="M420 192H99l7-3c7-4 13-8 18-13l89-89c11-11 13-29 4-42a32 32 0 00-48-4L9 201a32 32 0 000 45l160 160a32 32 0 0048-3c9-14 7-31-4-43l-89-88c-4-5-10-9-16-12l-9-4h314c16 0 31-11 34-27 3-18-9-34-27-37z"
          />
        </svg>
      </div>
    </div>
    <div>
      <img src="../../assets/text.png" v-if="!checkDark()"/>
      <img src="../../assets/textDark.png" v-else/>
    </div>
    <hr />
  </div>
</template>

<script>
import {isDarkTheme} from '../../themeChanger';

export default {
  name: "HeaderBack",
  methods: {
      checkDark: function() {
          return isDarkTheme()
      }
  }
};
</script>

<style scoped>
.container-header-back {
  background-color: var(--background-color);
  color: var(--text-color);
  height: 55px;
  padding-bottom: 6px;
  display: grid;
  grid-template-columns: 150px 1fr;
  grid-template-rows: 1fr 2px;
}

img {
  height: 42px;
  padding-top: 5px;
}
hr {
    grid-column: 1/3;
  border: 1px solid var(--hr-color);
  margin: 0;
}
.svg {
  display: flex;
  justify-content: center;
  align-items: center;
}
.wrapper {
  background-color: var(--confirm-color);
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  cursor: pointer;
  width: 30px;
}
svg {
  fill: white;
  height: 14px;
  width: 14px;
}
</style>
