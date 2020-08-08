<template>
  <div>
    <img src="../../assets/text.png" v-if="!darkModeOn" />
    <img src="../../assets/textDark.png" v-else />
    <hr />
  </div>
</template>

<script>
import { isDarkTheme, getActiveTheme } from "../../themeChanger";

export default {
  name: "Header",
  data() {
      return {
          key: 0,
          darkModeOn: false
      }
  },
  methods: {
    checkDark: function () {
        isDarkTheme ? this.darkModeOn = true : this.darkModeOn = false;
        return this.darkModeOn;
    },
  },
  created: function() {
    getActiveTheme().then(value => {
          this.darkModeOn = value;
      })
  }
};
</script>

<style scoped>
img {
  height: 42px;
  padding-top: 5px;
}
div {
  background-color: var(--background-color);
  color: var(--text-color);
  text-align: center;
  height: 55px;
  padding-bottom: 6px;
}
hr {
  border: 1px solid var(--hr-color);
  margin-top: 0;
  margin-bottom: 0;
}
</style>