<template>
  <a class="button is-primary">
    <slot></slot>
  </a>
</template>

<style>
.button.is-primary {
  background-color: #00a0d1;
  border-color: transparent;
  color: black;
  font-weight: 400;
}
.button.is-primary:hover {
  background-color: #82e0aa;
  color: black;
}
</style>
