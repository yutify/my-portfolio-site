<template>
  <div class="hello">
    <Header></Header>
    <div class>
      <router-link class="text1" to="/about">
        <!-- <img src="../../public/gopher-st-image.png" width="50px" height="50px"/> -->
        Who Am I
        </router-link>
      <router-link class="text2" to="worked_at">
        <!-- <img src="../../public/company-image.png" width="50px" height="50px"/> -->
        Work
        </router-link>
    </div>
    <div>
      <router-link class="text1" to="/related_service">
        <!-- <img src="../../public/app-image.png" width="50px" height="50px"/> -->
        Service
        </router-link>
        <a class="text2" href="https://www.linkedin.com/in/yu-kato-85a63a187/">
        <!-- <img src="../../public/dart-image.png" width="50px" height="50px"/> -->
        LinkedIn
        </a>
    </div>
    <div>
      <a class="text3" href="https://github.com/yukato7">
        <!-- <img src="../../public/github-image.png" width="50px" height="50px"/> -->
        Github
        </a>
      <a class="text4" href="https://new-gengo.com">
      <!-- <img src="../../public/gengo-image.svg" width="50px" height="50px"/> -->
      Gengo
      </a>
    </div>
    <div>
      <a class="text3" href="https://twitter.com/yukato7777">
      <!-- <img src="../../public/twitter-image.png" width="50px" height="50px"/> -->
      Twitter
      </a>
      <a class="text4" href="https://zenn.dev/yukato">
      <!-- <img src="../../public/medium-image.png" width="50px" height="50px"/> -->
      Zenn
      </a>
    </div>
    <div>
      <a class="text5" href="https://">
      </a>
    </div>
    <div>

    </div>
    <div>

    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Header from '@/components/Header.vue';

@Component({
    components: {
        Header
    }
})
export default class HelloWorld extends Vue {}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  text-decoration: none;
  font-size: 70px;
}
.header-block {
  display: block;
}
.header-boxes {
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
}
.header-box1 {
  flex: 1;
  text-align: center;
}
.header-box2 {
  flex: 1;
  text-align: right;
}
.cv {
  text-decoration: none;
  font-size: 15px;
  color:black;
}
.text1 {
  font-family: arial black;
  color: dodgerblue;
  transition: 1.0s;
}
.text1:hover {
  color: black;
  transition: 1.0s;}
.text2 {
  color: dodgerblue;
}
.text2:hover {
  color: black;
  transition: 1.0s;
}
.text3 {
  font-family: arial black;
  color: #00bfff;
}
.text3:hover {
  color: black;
  transition: 1.0s;
}
.text4 {
  color: #87ceeb;
}
.text4:hover {
  color: black;
  transition: 1.0s;
}
.text5 {
  font-family: arial black;
  color: #66cdaa;
}
.text5:hover {
  color: black;
  transition: 1.0s;
}
.text6 {
  color: #00BB00;
}
.text6:hover {
  color: black;
  transition: 1.0s;
}
.loader,
.loader:before,
.loader:after {
  background: dodgerblue;
  -webkit-animation: load1 1s infinite ease-in-out;
  animation: load1 1s infinite ease-in-out;
  width: 1em;
  height: 4em;
}
</style>
