<template>
  <div class="news-item">
      <img class="news-item-img" :src="imgSrc"/>
      <div class="news-item-desc">
          {{desc}}
      </div>
  </div>
</template>

<script>
export default {
  props: {
    converImg: {
      type: String,
      required: true
    },
    breifDesc: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      imgSrc: this.converImg,
      desc: this.breifDesc
    }
  }
}
</script>

<style scoped>
.news-item {
  border: 1px solid black;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 250px;
  height: 100px;
}

.news-item-img {
  width: 64px;
  height: 64px;
}

.news-item-desc {
  width: 136px;
  height: 64px;
  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>
