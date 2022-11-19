<template>
  <div class="xi-doc">
    <aside>
      <div class="xi-doc-logo">
        <img src="http://h5.dooring.cn/uploads/logo_1742fd359da.png" alt="" />
      </div>
      <router-link v-for="(link, index) in data.links" :key="index" :to="link.path">{{
        link.name
      }}</router-link>
      <div><a href="https://github.com/MrXujiang/react-slider-vertify">Github</a></div>
      <div style="margin-top: 60px">
        <h3>更多推荐</h3>
        <div>
          <a href="http://h5.dooring.cn/slider-vertify" target="_blank"
            >React-Slider-Vertify</a
          >
        </div>
        <div>
          <a href="https://github.com/MrXujiang/h5-Dooring" target="_blank">H5-Dooring</a>
        </div>
        <div>
          <a href="https://github.com/MrXujiang/xijs" target="_blank">xijs</a>
        </div>
        <div>
          <a href="https://github.com/MrXujiang/react-loading" target="_blank"
            >react-loading</a
          >
        </div>
        <div>
          <a href="https://github.com/MrXujiang" target="_blank">徐小夕的Github</a>
        </div>
      </div>
    </aside>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
import ComponentList from "packages/list.json";
import { reactive } from "vue";

const data = reactive({
  links: ComponentList.map((item) => ({
    path: `/${item.compName}`,
    name: item.compZhName,
  })),
});
</script>

<style lang="less">
html,
body {
  margin: 0;
  padding: 0;
}
.xi-doc {
  display: flex;
  min-height: 100vh;
  .xi-doc-logo {
    width: 100px;
    height: 100px;
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 20px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  aside {
    width: 200px;
    padding: 15px;
    border-right: 1px solid #ccc;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  main {
    width: 100%;
    flex: 1;
    padding: 15px;
  }
}
</style>
