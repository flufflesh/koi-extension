<template>
  <div>
    <header><HeaderBack /></header>
    <div class="container">
      <h2>Profiles</h2>
      <div class="profiles">
        <div class="profile" v-for="item in items" :key="item.name">
          <button class="profile1">{{item.name}}</button>
          <button class="edit">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 384">
              <defs />
              <path
                d="M0 304v80h80l236-236-80-80zM378 56L328 6c-8-8-22-8-30 0l-39 39 80 80 39-39c8-8 8-22 0-30z"
              />
            </svg>
          </button>
          <button class="delete">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-57 0 512 512">
              <defs />
              <path
                d="M156 31h86v14h31V29c0-16-13-29-29-29h-90c-16 0-29 13-29 29v16h31zm0 0M344 168H54c-8 0-14 7-13 14l24 300c1 17 15 30 32 30h204c17 0 31-13 33-30l24-300c0-7-6-14-14-14zM124 480h-1c-8 0-15-6-15-14L93 219a15 15 0 0131-2l15 247c0 8-6 15-15 16zm91-15a15 15 0 01-31 0V218a15 15 0 1131 0zm91-246l-15 246a15 15 0 11-31-1l15-247a15 15 0 1131 2zm0 0M398 120l-11-30c-2-8-10-14-18-14H29c-8 0-16 6-18 14L1 120a13 13 0 0012 17h373l6-2c5-3 8-9 6-15zm0 0"
              />
            </svg>
          </button>
        </div>
      </div>
      <router-link class="add" to="/autofill/create"
        ><button class="add">+</button></router-link
      >
    </div>
    <footer><Footer /></footer>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderBack from "../components/header-back/HeaderBack";
import Footer from "../components/footer/Footer";

export default {
  name: "Profiles",
  components: {
    HeaderBack,
    Footer,
  },
  data() {
      return {
          items: [
              {
                  name: "profile1"
              },
              {
                  name: "profile2"
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
  grid-template-rows: 50px 390px 50px;
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
.profiles {
  grid-column: 2/4;
}
.profile {
  display: grid;
  grid-template-columns: 100px 40px 40px;
  column-gap: 10px;
}
svg {
  height: 16px;
  width: 16px;
  fill: white;
}
.add {
  font-size: 32px;
  width: 48px;
  height: 48px;
  margin: 0 auto;
  border-radius: 100%;
  grid-column: 2/4;
}
button {
  margin-top: 10px;
  margin-bottom: 10px;
  height: 40px;
  width: 100%;
  border: 0;
  border-radius: 5px;
  font-weight: 600;
  color: white;
  background-color: var(--confirm-color);
  cursor: pointer;
}
</style>
