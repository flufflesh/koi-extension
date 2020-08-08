<template>
  <div>
    <header><HeaderBack /></header>
    <div class="container">
      <h2>Create Profile</h2>
      <form class="form">
        <div class="profile-name">
          <input type="text" placeholder="Profile Name" />
        </div>
        <div class="full-name two">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <div class="email">
          <input type="email" placeholder="E-mail" />
        </div>
        <div class="address1">
          <input type="text" placeholder="Address 1" />
        </div>
        <div class="address2">
          <input type="text" placeholder="Address 2" />
        </div>
        <div class="city-state two">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>
        <div class="zipcode-country two">
          <input type="text" placeholder="Zip Code" />
          <input type="text" placeholder="Country" />
        </div>
        <div class="phone-number">
          <input type="text" placeholder="Phone Number" />
        </div>
        <div class="card-number">
          <input type="text" placeholder="Card Number" />
        </div>
        <div class="card-info two">
          <input type="text" placeholder="MM/YYYY" />
          <input type="text" placeholder="CVV" />
        </div>
        <button>Save</button>
      </form>
    </div>
    <footer><Footer /></footer>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderBack from "../components/header-back/HeaderBack";
import Footer from "../components/footer/Footer";

export default {
  name: "CreateProfile",
  components: {
    HeaderBack,
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
  grid-template-rows: 50px 400px;
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
.form {
  grid-column: 2/4;
  display: grid;
  grid-template-columns: auto auto;
  row-gap: 7px;
}
.form div {
  grid-column: 1/3;
}
.two {
  display: grid;
  grid-template-columns: auto auto;
}
.two input {
  width: 60%;
}
input {
  background-color: var(--input-background);
  border: 0;
  border-radius: 5px;
  padding: 5px 20px;
  font-size: 16px;
  color: var(--input-text);
  font-weight: bold;
  width: 80%;
}
button {
  grid-column: 1/3;
  margin-top: 10px;
  height: 40px;
  margin: 10px auto;
  width: 50%;
  border: 0;
  border-radius: 5px;
  font-weight: 600;
  color: white;
  background-color: var(--confirm-color);
  cursor: pointer;
}
</style>
