<template>
  <div class="m-header">
    <div class="icon"></div>
    <h1 class="text">guagua-music</h1>
    <router-link tag="div" class="mine" to="/user">
      <i class="icon-mine"></i>
    </router-link>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
  @import "variable";
  @import "mixin";

  .m-header {
    height: 44px; text-align: center; color: $color-theme; font-size: 0;
    .icon {
      display: inline-block; vertical-align: top; margin-top: 6px; margin-right: 9px; width: 30px; height: 30px;
      @include bg-image('logo'); background-size: 30px 30px;
    }
    .text {
      display: inline-block; vertical-align: top; line-height: 44px; font-size: $font-size-large;
    }
    .mine {
      position: absolute; top: 0; right: 0;
      .icon-mine {
        display: block; padding: 12px; font-size: 20px; color: $color-theme;
      }
    }
  }
</style>
