<template>
  <div>
    <header><HeaderBack /></header>
    <div class="container">
      <h2>Groups</h2>
      <h3>Click to Select</h3>
      <div class="buttons">
        <button v-for="item in items" :key="item.name">{{item.name}}</button>
      </div>
    </div>
    <footer><Footer /></footer>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderBack from "../components/header-back/HeaderBack";
import Footer from "../components/footer/Footer";

export default {
  name: "SiteScriptsMisc",
  components: {
    HeaderBack,
    Footer,
  },
  data() {
      return {
          items: [
              {
                  name: "Misc1"
              },
              {
                  name: "Misc3"
              },
              {
                  name: "Misc2"
              }
          ]
      }
  }
};
</script>

<style scoped>
header {
  height: 55px;
}
footer {
  height: 48px;
}
.container {
  height: 493px;
  background-color: var(--background-color);
  display: grid;
  grid-template-columns: 40px 1fr 1fr 40px;
  grid-template-rows: 50px 30px auto;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: var(--background-image);;
  background-size: 100% 70%;
  background-position: left bottom;
}
h2,
h3 {
  grid-column: 2/4;
  margin-top: 5px;
  color: var(--text-color);
}

button {
  margin-top: 10px;
  height: 40px;
  width: 80%;
  border: 0;
  border-radius: 5px;
  font-weight: 600;
  color: white;
  background-color: var(--confirm-color);
  cursor: pointer;
}
.buttons {
  grid-column: 2/4;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: repeat(7, 1fr);
}
.off {
  background-color: #a9a9a9;
  cursor: default;
}
.special-remover span {
  color: var(--text-color);
  font-weight: 600;
  padding-left: 5px;
}
</style>
