<template>
  <div id="app">
    <div class="daily-menu">
      <div class="daily-menu-item">
        每日推荐
      </div>
      <div class="daily-menu-item">
        <span @click="showTheme=!showTheme">主题日报</span>
        <ul v-show="showTheme" class="daily-menu-item-subitem-zone">
          <li v-for="item in themes" :key="item.id">
            <a class="daily-menu-item-subitem-zone-item" :class="{'daily-menu-item-subitem-zone-selected': selectedThemeId == item.id}" @click="selectTheme(item.id)">{{item.name}}
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="daily-list">
      <div class="daily-list-item" v-for="newsItem in newsItems" :key="newsItem.id" @click="selectArticle(newsItem.id)">
        <vNewsItem :converImg="newsItem.images[0]" :breifDesc="newsItem.title"></vNewsItem>
      </div>
    </div>
    <div class="daily-article" v-if="selectedArticleId > 0">
      <vNewsDetail :articleId="selectedArticleId"></vNewsDetail>
    </div>
  </div>
</template>

<script>
import $ from './lib/util'
import vNewsItem from './components/news_item.vue'
import vNewsDetail from './components/news_detail.vue'
export default {
  name: 'App',
  components: {
    vNewsItem,
    vNewsDetail
  },
  data () {
    return {
      themes: [],
      showTheme: false,
      selectedThemeId: -1,
      newsItems: [],
      selectedArticleId: 0
    }
  },
  methods: {
    getThemes () {
      $.ajax.get('themes').then(res => {
        this.themes = res.others
      })
    },
    selectTheme (themeId) {
      this.selectedThemeId = themeId
      $.ajax.get('theme/' + themeId).then(res => {
        this.newsItems = res.stories.filter(
          item => item.type !== 1 && item.images && item.images.length > 0
        )
      })
      this.selectedArticleId = 0
    },
    selectArticle (articleId) {
      this.selectedArticleId = articleId
    }
  },
  mounted () {
    this.getThemes()
  }
}
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

.daily-menu {
  width: 150px;
  min-width: 150px;
  background-color: blue;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.daily-menu-item {
  width: 100px;
  height: 25px;
  margin-top: 15px;
  text-align: center;
  background-color: coral;
}

.daily-menu-item-subitem-zone {
  list-style-type: none;
  margin-left: -40px;
}

.daily-menu-item-subitem-zone-item:hover {
  background-color: burlywood;
}

.daily-menu-item-subitem-zone-selected {
  background-color: cornflowerblue;
}

.daily-list {
  width: 300px;
  min-width: 300px;
  background-color: red;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: auto;
}

.daily-list-item {
  margin-bottom: 15px;
}

.daily-article {
  width: 100%;
  background-color: blueviolet;
  overflow: auto;
}
</style>
