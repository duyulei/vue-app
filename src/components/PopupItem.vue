<template>
  <div class="popup-item" :class="{ 'red': select }">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'popup-item',
    data() {
      return {
        select: false
      }
    },
    props: {
      selectDiv: String,
      divType: String
    },
    created: function () {
      this.select = (this.selectDiv === this.divType)
    },
    watch: {
      selectDiv(val) {
        this.select = (val === this.divType)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .red {
    color: #D86471;
  }

  .popup-item {
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #f1f1f1;
  }
</style>
