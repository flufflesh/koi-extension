<template>
  <div>
    <router-view />
  </div>
</template>

<script>
import {getActiveTheme, setDarkTheme, setLightTheme} from '../themeChanger';

export default {
  name: "App",
  components: {},
  created() {
      let activeTheme;
      getActiveTheme().then(value => {
          activeTheme = value;
          activeTheme ? setDarkTheme() : setLightTheme()
      })
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
html,
body {
  font-family: "Montserrat", sans-serif;
  width: 361px;
  margin: 0;
  padding: 0;
  height: 100%;
}
:root {
  font-size: 16px;
  --background-color: #fdf8f2;
  --picked-route: black;

  --confirm-color: #3ada84;
  --cancel-color: #e03636;
  --discord-color: #7289da;

  --input-background: #292929;
  --input-text: #a9a9a9;

  --text-color: black;
  --hr-color: #e2e8f0;
  --background-image: url('../assets/background-0.png');
  --background-dark: url('../assets/background-dark.png');
}
</style>
