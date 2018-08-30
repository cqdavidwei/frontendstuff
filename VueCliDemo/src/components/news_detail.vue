<template>
    <div>
        <div>{{title}}</div>
        <div v-html="body"></div>
    </div>
</template>

<script>
import $ from '../lib/util.js'

export default {
  props: {
    articleId: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      title: '',
      body: ''
    }
  },
  watch: {
    articleId: function (val) {
      $.ajax.get('news/' + this.articleId).then(res => {
        this.title = res.title
        this.body = res.body
        window.scrollTo(0, 0)
      })
    }
  }
}
</script>

<style scoped>
</style>
