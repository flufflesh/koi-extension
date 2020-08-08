<template>
  <div>
    <header>
      <Header :key="componentKey"/>
    </header>
    <div class="container">
      <h2 class="header2">Settings</h2>
      <div class="special-remover">
        <label class="switch">
          <input type="checkbox" />
          <span class="slider round"></span>
        </label>
        <span>Special characters remover</span>
      </div>
      <div class="special-remover">
        <label class="switch">
          <input type="checkbox" />
          <span class="slider round"></span>
        </label>
        <span>Space Remover</span>
      </div>
      <form class="form">
        <div>
          <input type="text" placeholder="Discord ID" />
        </div>
        <div>
          <input type="text" placeholder="Twitter ID" />
        </div>
        <div>
          <input type="text" placeholder="Discord Webhook" />
        </div>
      </form>
      <div class="special-remover">
        <label class="switch">
          <input type="checkbox" v-model="darkModeOn"/>
          <span class="slider round" @click="toggleTheme()"></span>
        </label>
        <span>Dark Mode: {{darkModeActive}}</span>
      </div>
      <div class="buttons">
        <button class="save">Save</button>
        <button class="log-out">Log Out</button>
      </div>
    </div>
    <footer>
      <Footer />
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import {setLightTheme, setDarkTheme, isDarkTheme, getActiveTheme} from '../themeChanger'

export default {
  name: "Settings",
  components: {
    Header,
    Footer,
  },
  data() {
      return {
          darkModeOn: false,
          darkModeActive: "Off",
          componentKey: 0
      }
  },
  methods: {
      toggleTheme: function () {
          if(!isDarkTheme()) {
              setDarkTheme()
              this.componentKey++
              this.darkModeOn = true;
              this.darkModeActive = "On"
          }else {
              setLightTheme()
              this.componentKey++
              this.darkModeOn = false;
              this.darkModeActive = "Off"
          }
      }
  },
  created: function() {
      getActiveTheme().then(value => {
          this.darkModeOn = value;
          if(this.darkModeOn) {
              this.darkModeActive = "On";
          }
      })
  },
  watch: {
      darkModeOn: function() {
          getActiveTheme().then(value => {
          this.darkModeOn = value;
      })
      }
  }
};
</script>

<style scoped>
footer {
  height: 48px;
}
header {
  height: 55px;
}
span,
h2 {
  color: var(--text-color);
}
.container {
  height: 493px;
  display: grid;
  grid-template-columns: 40px 1fr 1fr 40px;
  grid-template-rows: 35px 50px 55px 110px 55px 40px;
  background-color: var(--background-color);
  background-size: cover;
  background-repeat: no-repeat;
  background-image: var(--background-image);
  background-size: 100% 70%;
  background-position: left bottom;
}
.header2 {
  margin-top: 5px;
  margin-bottom: 5px;
  grid-column: 2/4;
}
.special-remover {
  grid-column: 2/4;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.special-remover span {
  font-weight: 600;
  padding-left: 5px;
  font-size: 16px;
}
.form {
  grid-column: 2/4;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.form input {
  background-color: var(--input-background);
  border: 0;
  border-radius: 5px;
  padding-left: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-right: 0;
  color: var(--input-text);
  font-weight: bold;
  font-size: 16px;
  width: 95%;
}
.buttons {
  grid-column: 2/4;
  display: flex;
  gap: 10px;
}
.save {
  height: 40px;
  width: 40%;
  border: 0;
  border-radius: 5px;
  font-weight: 600;
  color: white;
  background-color: var(--confirm-color);
}
.log-out {
  height: 40px;
  width: 40%;
  border: 0;
  border-radius: 5px;
  font-weight: 600;
  color: white;
  background-color: var(--cancel-color);
}
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--cancel-color);
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: var(--confirm-color);
}

input:focus + .slider {
  box-shadow: 0 0 1px var(--confirm-color);
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
