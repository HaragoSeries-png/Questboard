<template>
  <div id="notifybox">
    <slot name="success">
      <div class="alert alert-success" role="alert">Success</div>
    </slot>
    <slot name="fail">
      <div class="alert alert-danger" role="alert">Fail</div>
    </slot>
  </div>
</template>

<script>
export default {
  name: "NotifyBox",
};
</script>

<style></style>
