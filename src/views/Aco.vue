<template>
  <div>
    <header><Header /></header>
    <div class="container">
      <h2>ACO</h2>
      <div class="aco-options">
        <div class="flex">
          <img src="../assets/logo.png" />
          <span>Stripe</span>
        </div>
        <div class="flex">
          <img src="../assets/logo.png" />
          <span>Shopify</span>
        </div>
        <div class="flex grayscale">
          <img src="../assets/logo.png" />
          <span>Supreme</span>
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
  name: "Aco",
  components: {
    Header,
    Footer,
  },
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
  background-size: cover;
  background-repeat: no-repeat;
  background-image: var(--background-image);;
  background-size: 100% 70%;
  background-position: left bottom;
  grid-template-rows: 50px 200px;
}
.aco-options {
  grid-column: 2/4;
  display: grid;
  grid-template-columns: auto auto;
}
.aco-options img {
  border-radius: 100%;
  border: 5px solid var(--confirm-color);
  height: 64px;
  width: 64px;
}
.flex {
  display: flex;
  align-items: center;
}
.flex span {
  font-weight: 600;
  padding-left: 5px;
  font-size: 16px;
  color: var(--text-color);
}
h2 {
  grid-column: 2/4;
  margin-top: 5px;
  color: var(--text-color);
}

.off {
  background-color: #a9a9a9;
  cursor: default;
}
.grayscale {
  filter: grayscale();
}
</style>
