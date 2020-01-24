<template>
  <div class="worked_at">
    <Header></Header>
    <h1>職歴</h1>
    <div>
        <h2>2018:05~2019:04</h2>    
        <a href="https://arii.jp">Arii-inc</a>
        <p>3つの新規サービスの立ち上げを経験。</p>
        <p>サーバサイド、フロント、インフラまで、エンジニアの基礎を学んだ。</p>
        <p>半年間は休学をしてフルコミットで働いた。</p>
        <a href="https://note.com/yu1013sp/n/nd2db44eb0a46">ブログ</a>
        <h3>身に付けた技術</h3>
        <div>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Golang</li>
            <li>React</li>
            <li>Terraform</li>
            <li>GCP</li>
            <li>AWS</li>
            <li>WordPress</li>
        </div>
        <h2>2019:01~2019:03</h2>
        <p>ゼロからわかるDeepLearning(O'reilly社)を教材にして初心者向けに機械学習の講師をした。</p>
        <h3>身に付けた技術</h3>
        <div>
            <li>Python3</li>
            <li>Pandas</li>
            <li>Numpy</li>
            <li>scikit-learn</li>
            <li>Keras</li>
        </div>
        <h2>2019:05~2019:12</h2>
        <a href="https://sc0ville.com">Scoville</a>
        <p>外国人8割のチームにサーバサイド&機械学習エンジニアとしてジョイン。</p>
        <p>音声認識を用いたレストランの自動予約システムのAPIを全て実装した。</p>
        <p>また、Pythonを使用して就活サービスen-courageのデータ分析を行った。</p>
        <h3>身に付けた技術</h3>
        <div>
            <li>English Speaking Skill</li>
            <li>Natural Language Processing Knowledge</li>
            <li>rails5</li>
            <li>AWS Lambda</li>
        </div>
        <h2>2019:08</h2>
        <a href="https://www.winticket.jp/">Cyber Agent</a>
        <p>Cyber Agent(CATS)で1ヶ月間の就業型インターンをした。</p>
        <p>Winticketというサービスで、3つのGoのAPIの実装を行った。</p>
        <h3>身に付けた技術</h3>
        <div>
            <li>Advance Knowledge About Golang</li>
            <li>Operation System</li>
            <li>Process</li>
            <li>Memory</li>
            <li>k8s</li>
        </div>
        <h2>2019:09~2019:11</h2>
        <a href="https://www.official.chillnn.com/">CHIILLNN</a>
        <p>Node×TypeScriptを使いシステムのアーキテクチャの再設計と実装を行った。</p>
        <p>TypeScriptについての理解が深まった。</p>
        <p>また、クリーンアーキテクチャ、サーバレス、GraphQLの知見がたまった。</p>
        <h3>身に付けた技術</h3>
        <li>TypeScript</li>
        <li>Node</li>
        <li>Vue</li>
        <li>GraphQL</li>
        <li>Clean Architecture</li>
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

export default class Work extends Vue {}
</script>

<style scoped>
a {
    text-decoration: none;
}
</style>

