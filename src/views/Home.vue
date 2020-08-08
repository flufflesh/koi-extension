<template>
  <div class="container">
    <header><Header :key="key"/></header>
    <div class="main">
      <div class="top">
        <img src="../assets/logo.png" />
        <div class="inside">
          <span>Welcome back,</span>
          <br />
          <span>User#6969</span>
        </div>
      </div>
      <div class="mid">
        <p>Renewal Date: dd/mm/yyyy</p>
      </div>
      <div class="bottom">
        <button class="renew button">Renew</button>
        <button class="cancel button">Cancel</button>
        <button class="discord button">Discord</button>
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
  name: "Home",
  components: {
    Header,
    Footer,
  },
  data() {
      return{
          key: 0
      }
  },
  created: () => {
      this.key++
  }
};
</script>
<style scoped>
.main {
  display: grid;
  grid-template-columns: 40px 1fr 1fr 40px;
  grid-template-rows: 150px 40px 100px;
  grid-row: 2;
  background-color: var(--background-color);
  background-size: 100% 70%;
  background-repeat: no-repeat;
  background-position: left bottom;
  background-image: var(--background-image);
}
.container {
  height: 596px;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 55px 1fr 48px;
  justify-content: space-between;
}
span {
  color: var(--text-color);
}
.top {
  padding-top: 25px;
  grid-column: 2/4;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.top span {
  font-size: 18px;
  font-weight: bold;
}
.mid {
  grid-column: 2/4;
}
.mid p {
  color: var(--text-color);
  font-weight: 600;
}
img {
  border-radius: 100%;
  height: 128px;
  width: 128px;
}
.bottom {
  grid-column: 2/4;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
.inside {
  padding-left: 10px;
  font-weight: bold;
}
.button {
  height: 40px;
  width: 100%;
  border: 0;
  border-radius: 5px;
  font-weight: 600;
}
.renew {
  background-color: var(--confirm-color);
  color: white;
}
.cancel {
  background-color: var(--cancel-color);
  color: white;
}
.discord {
  background-color: var(--discord-color);
  color: white;
}
footer {
  height: 48px;
}
header {
  height: 55px;
}
</style>
