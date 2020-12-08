<template>
  <div class="related_service">
      <Header></Header>
      <h1>開発に関わったサービス</h1>
      <div>
          <a href="https://pre.1tap.chat/">
            <img src="../../public/1tap-image.jpeg" width="300" height="200"/>
          </a>
      </div>
      <div>
          <a href="https://lp.9ame-arena.com/">
            <img src="../../public/game-arena.jpeg" width="300" height="200"/>
          </a>
      </div>
      <div>
          <a href="https://www.winticket.jp/">
            <img src="../../public/winticket-image.jpeg" width="300" height="200"/>
          </a>
      </div>
      <div>
          <a href="https://www.chillnn.com/?inflowfrom=OTA_ORDINARY/">
            <img src="../../public/chillnn-image.jpeg" width="300" height="200"/>
          </a>
      </div>
      <div>
          <a href="https://apps.apple.com/jp/app/%E6%9C%9D%E6%97%A5%E6%96%B0%E8%81%9E%E3%83%87%E3%82%B8%E3%82%BF%E3%83%AB/id429622552">
            <img src="../../public/asahi.jpg" width="300" height="200"/>
          </a>
      </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/Header.vue';

@Component({
    components: {
        Header
    }
})

export default class Service extends Vue {}
</script>

<style scoped>
a {
    text-decoration: none;
}
</style>

