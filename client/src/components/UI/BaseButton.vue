<template>
  <div class="buttons">
    <a class="button is-primary">
      <slot></slot>
    </a>
  </div>
</template>

<style>
.button.is-primary {
  background-color: #00a0d1;
  border-color: transparent;
  color: black;
  font-weight: 400;
}
</style>
