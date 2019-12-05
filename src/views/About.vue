<template>
  <div class="about">
    <h1>About Me</h1>
    <h2>加藤 優</h2>
    <h3>
      <b>Yu Kato</b>
    </h3>
    <div class="boxes">
      <div style="text-align:left">
        <p>千葉大学の学生です。専攻はLiberalArtです。</p>
        <p>学部で幅広い分野のトピックを学びつつ、CSと統計と歴史学を独学しています。</p>
        <p>サーバサイド、インフラ、フロント、データ分析の仕事に取り組んできました。</p>
        <p>得意なのはサーバサイドです。</p>
        <p>Go言語でフルスクラッチでサーバサイドの開発をしたことがあります。</p>
        <p>経験してきた言語は、Ruby、Python、Go、Vue×TypeScript、Node×TypeScriptです。特にGo言語が好きです。</p>
        <p>またアークテクチャーの設計も好きです。</p>
        <p>技術を通して社会に感動を届けることを意識して日々頑張っています。</p>
      <p></p>
      </div>
      <div>
        <img src="../../public/yukato.jpg"/>
      </div>
      <div style="text-align:left">
        <p>I'm a student of Chiba University,mejoring Liberal Art.</p>
        <p>I study variety of fields especialy Computer Science, Statistics and Historical Science are my favorite ones</p>
        <p>I worked at serverside,infra and front sometimes data analysis.</p>
        <p>I have strong knowledge about serverside.</p>
        <p>I used to develop api server from scratch with golang.</p>
        <p>Using Ruby、Python、Go、Vue×TypeScript、Node×TypeScript. My lover is Go.</p>
        <p>I also like design for scalable architecture.(CleanArchitecture,DDD)</p>
        <p>My purpose is causing repercussions with using advance technology.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media screen and (max-width:480px){
  .image {
    width: 100%;
    }
}
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
</style>

