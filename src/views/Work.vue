<template>
  <div class="work">
    <textarea style="height:auto" rows="16" v-model="md_text"></textarea>
    <div class="preview" v-html="previewText"></div>
  </div>
</template>

<script>
let marked = require("marked");
export default {
  name: "work",
  data: function() {
    return {
      show: false,
      md_text: "# hello"
    };
  },
  computed: {
    previewText() {
      marked.setOptions({
        renderer: new marked.Renderer(),
        gfm: true,
        tables: true,
        breaks: true,
        pedantic: false,
        sanitize: true,
        smartLists: true,
        smartypants: false
      });
      return marked(this.md_text);
    }
  }
};
</script>

<style lang="css" scoped>
</style>