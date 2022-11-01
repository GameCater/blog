<template>
  <div class="container-sm border border-primary" style="text-align: center; margin-top: 10px;">
    <h5 style="margin: 10px;">TAGS</h5>
    <div>
      <span 
        class="badge" 
        style="margin: 5px 6px; cursor: pointer;" 
        :class="{ 'selected': tagsToSearch.includes(tagObj._id) }"
        v-for="(tagObj, idx) in tags" 
        :key="idx" 
        @click="search(tagObj._id)"
        >{{ tagObj.name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tags: [],
      tagsToSearch: [],
    }
  },
  methods: {
    fetchTags() {
      this.$http.get('/tag/list').then((response) => {
        // console.log(response.data);
        this.tags = response.data.data;
      })
    },
    search(tagId) {
      const idx = this.tagsToSearch.indexOf(tagId);
      if (idx !== -1) {
        this.tagsToSearch.splice(idx, 1);
      } else {
        this.tagsToSearch.push(tagId);
      }
      this.$bus.$emit('tagsChanged', this.tagsToSearch);
    }
  },
  mounted() {
    this.fetchTags();
  },
  beforeDestroy() {
    this.tagsToSearch = [];
  }
}
</script>

<style lang="scss" scoped>
// class="container" style="display: flex; flex-wrap: wrap; justify-content: flex-start;"

.selected {
  transform: scale(1.05);
  color: #666;
  background-color: #eee;

  position: relative;
}

.selected::after {
  content: 'x';
  display: block;
  width: 18px;
  height: 18px;
  border: 2px solid #eee;
  background-color: #666;
  border-radius: 50%;
  color: #eee;

  position: absolute;
  right: -10px;
  top: -10px;
}
</style>