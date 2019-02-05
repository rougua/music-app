<template>
  <div class="recommend">
    <div class="recommend-content">
      <div v-if="recommends.length" class="slider-wrapper">
        <slider>
          <div v-for="item in recommends" :key="item.id">
            <a :href="item.linkUrl">
              <img :src="item.picUrl" alt="">
            </a>
          </div>
        </slider>
      </div>
      <div class="recommend-list">
        <h1 class="list-title">热门歌单推荐</h1>
        <ul></ul>
      </div>
    </div>
  </div>
</template>

<script>
import Slider from 'base/slider/slider'
import { getRecommend } from 'api/recommend'
import { ERR_OK } from 'api/config'

export default {
  name: 'recommend',
  components: {
    Slider
  },
  data () {
    return {
      recommends: []
    }
  },
  created () {
    this._getRecommend()
  },
  methods: {
    _getRecommend () {
      getRecommend()
        .then(response => {
          if (response.code === ERR_OK) {
            this.recommends = response.data.slider
          }
        })
    }
  }
}
</script>

<style scoped lang="scss">
.recommend {
  position: fixed; top: 88px;bottom: 0; width: 100%;
  .recommend-content {
    height: 100%; overflow: hidden;
    .slider-wrapper {
      position: relative; width: 100%; overflow: hidden;
    }
  }
}
</style>
