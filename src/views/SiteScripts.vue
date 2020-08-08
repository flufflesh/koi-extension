<template>
  <div>
    <header><Header /></header>
    <div class="container">
      <h2>Site Scripts</h2>
      <div class="groups">
        <div class="special-remover">
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round" @click="groups = !groups"></span>
          </label>
          <span>Groups</span>
        </div>
        <router-link to="/sitescripts/groups"
          ><button v-bind:class="{ off: groups }" :disabled="groups == true">
            Options
          </button></router-link
        >
      </div>
      <div class="bots">
        <div class="special-remover">
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round" @click="bots = !bots"></span>
          </label>
          <span>Bots</span>
        </div>
        <button v-bind:class="{ off: bots }" :disabled="bots == true">
          Options
        </button>
      </div>
      <div class="misc">
        <div class="special-remover">
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round" @click="misc = !misc"></span>
          </label>
          <span>Misc</span>
        </div>
        <button v-bind:class="{ off: misc }" :disabled="misc == true">
          Options
        </button>
      </div>
      <div class="diy">
        <div class="special-remover">
          <label class="switch">
            <input type="checkbox" :disabled="true"/>
            <span class="slider round" @click="diy = !diy"></span>
          </label>
          <span>Custom</span>
        </div>
        <button v-bind:class="{ off: true }" :disabled="true">
          Coming Soon
        </button>
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
  name: "SiteScripts",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      misc: true,
      bots: true,
      groups: true,
      diy: true
    };
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
  grid-template-rows: 70px 60px 60px 60px 60px;
  background-size: cover;
  background-size: 100% 70%;
  background-position: left bottom;
  background-repeat: no-repeat;
  background-image: var(--background-image);;
}
h2 {
  grid-column: 2/4;
  margin-top: 5px;
  color: var(--text-color);
}
.groups,
.misc,
.bots, .diy {
  grid-column: 2/4;
  display: grid;
  grid-template-columns: 1fr 1fr;
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
.special-remover {
  display: flex;
  flex-direction: row;
  align-items: center;
  grid-column: 1;
}
button {
  margin-top: 10px;
  grid-column: 2;
  height: 40px;
  width: 80%;
  border: 0;
  border-radius: 5px;
  font-weight: 600;
  color: white;
  background-color: var(--confirm-color);
  cursor: pointer;
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
