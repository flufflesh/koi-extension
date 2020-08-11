<template>
  <div>
    <header><Header /></header>
    <div class="container">
      <router-link to="/autofill/profiles" class="link"
        ><button>Profile1</button></router-link
      >
      <div class="aco-options">
        <div class="flex" v-for="item in items" :key="item.name" v-bind:class="{ grayscale:item.on }" @click="toggle(item)">
          <img :src="item.img" />
          <span>{{item.name}}</span>
        </div>
      </div>
    </div>
    <footer><Footer /></footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

export default {
  name: "Autofill",
  components: {
    Header,
    Footer,
  },
  data() {
      return {
          items: [
              {
                  name: "Stripe",
                  on: false,
                  img: "img/logo.png"
              },
              {
                  name: "Amazon",
                  on: false,
                  img: "img/logo.png"
              },
              {
                  name: "Adidas",
                  on: false,
                  img: "img/logo.png"
              },
              {
                  name: "Nike",
                  on: false,
                  img: "img/logo.png"
              },
          ]
      }
  },
  methods: {
      toggle: function(item) {
          item.on = !item.on
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
  grid-template-rows: 50px 400px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: var(--background-image);;
    background-size: 100% 70%;
  background-position: left bottom;
  row-gap: 20px;
}
.aco-options {
  grid-column: 2/4;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: repeat(6, 1fr);
  row-gap: 5px;
}
.aco-options img {
  border-radius: 100%;
  border: 5px solid var(--confirm-color);
  height: 42px;
  width: 42px;
}
.grayscale {
  filter: grayscale();
}
.flex {
  display: flex;
  align-items: center;
}
.flex span {
  font-weight: 600;
  padding-left: 5px;
  color: var(--text-color);
}
h2 {
  grid-column: 2/4;
  margin-top: 5px;
  color: var(--text-color);
}
.link {
  grid-column: 2/4;
  width: 40%;
}
button {
  grid-column: 2 / 4;
  margin-top: 20px;
  margin-bottom: 20px;
  height: 40px;
  width: 100%;
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
