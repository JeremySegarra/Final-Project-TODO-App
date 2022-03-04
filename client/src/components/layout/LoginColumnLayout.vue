<template>
  <div class="columns is-mobile">
    <div class="column is-half is-offset-one-quarter">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.columns:last-child {
  margin-bottom: 0;
}
.columns {
  margin-top: 0;
}
</style>
