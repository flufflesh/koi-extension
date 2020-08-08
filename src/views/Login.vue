<template>
  <div>
    <header><Header /></header>
    <div class="main">
      <div class="inside">
        <img src="../assets/logo.png" />
        <input type="text" placeholder="Key" class="key" />
        <button>Login</button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "../components/header/Header";

export default {
  name: "Login",
  components: {
    Header,
  },
};
</script>

<style scoped>
.main {
  height: 500px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: var(--background-image);;
  background-size: 100% 70%;
  background-position: left bottom;
}
.inside {
  display: flex;
  width: 100%;
  gap: 20px;
  flex-direction: column;
  align-items: center;
}

img {
  height: 128px;
  width: 128px;
  border-radius: 100%;
}
.key {
  background-color: var(--input-background);
  border: 0;
  border-radius: 5px;
  padding: 5px 10px;
  color: var(--input-text);
  font-weight: bold;
  width: 60%;
}
button {
  height: 40px;
  width: 35%;
  border: 0;
  border-radius: 5px;
  font-weight: 600;
  color: white;
  background-color: var(--confirm-color);
}
footer {
  height: 48px;
}
header {
  height: 55px;
}
</style>
