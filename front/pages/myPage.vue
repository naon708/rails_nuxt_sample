<template>
  <div>
    <p class="text-xl">マイページ</p>
    {{ $auth.user.name }}さんこんにちは
  </div>
</template>

<script>
export default {
  middleware: 'auth'
}
</script>

<style>

</style>
