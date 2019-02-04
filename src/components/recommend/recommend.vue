<template>
  <div class="recommend">

  </div>
</template>

<script>
import { getRecommend } from 'api/recommend'
import { ERR_OK } from 'api/config'

export default {
  name: 'recommend',
  data () {
    return {

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
            console.log(response.data)
          }
        })
    }
  }
}
</script>

<style scoped>

</style>
