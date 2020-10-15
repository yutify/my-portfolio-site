<template>
  <div class="about">
    <Header></Header>
    <h1>About Me</h1>
    <h2>加藤 優/Yu Kato</h2>
    <div class="boxes">
      <div style="text-align:left">
        <p>千葉大学の学生です。専攻は国際教養学です。</p>
        <p>学部でCSや統計などの幅広い分野のトピックを学びつつ、「機械学習を使った精神疾患の検知」について研究しています。</p>
        <p>修士まで行く予定です。</p>
        <p>サーバサイド、インフラ、フロント、データ分析の仕事に取り組んできました。</p>
        <p>得意なのはサーバサイドです。</p>
        <p>Go言語でフルスクラッチでサーバサイドの開発をしたことがあります。</p>
        <p>経験してきた言語は、Ruby、Python、Go、Vue×TypeScript、Node×TypeScriptです。特にGo言語が好きです。</p>
        <p>またアークテクチャーの設計も好きです。</p>
      <p></p>
      </div>
      <div>
        <img src="../../public/yukato.jpg"/>
      </div>
      <div style="text-align:left">
        <p>I'm a student of Chiba University,mejoring Liberal Art.</p>
        <p>I study variety of fields especialy computer science, statistics. I am reseaching machine learning.</p>
        <p>I am going to graduate school.</p>
        <p>I worked at serverside,infra and front sometimes data analysis.</p>
        <p>I have strong knowledge about serverside.</p>
        <p>I used to develop api server from scratch with golang.</p>
        <p>Using Ruby、Python、Go、Vue×TypeScript、Node×TypeScript. My lover is Go.</p>
        <p>I also like design for scalable architecture.(CleanArchitecture,DDD)</p>
      </div>
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

export default class About extends Vue {}
</script>

<style scoped>
.boxes {
  display: flex;
}
p {
  font-size: 15px;
  margin: 20px;
}
img {
  width: 500px;
  height: 500px;
}
@media screen and (max-width:480px){
  img {
    width: 0px;
    height: 0px;
    }
  p {
    font-size: 10px;
    margin: 10px;
  }
}
</style>

