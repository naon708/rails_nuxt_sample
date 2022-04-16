<template>
  <div>
    <NuxtLink to="/">TOP</NuxtLink>
    <NuxtLink to="/register">ユーザー登録</NuxtLink>
    <NuxtLink to="/login">ログイン</NuxtLink>
    <NuxtLink to="/myPage">マイページ</NuxtLink>
    <button @click="console()">コンソール</button>
    <button @click="logout()">ログアウト</button><br>
    {{ $auth.loggedIn }}
    <div v-if="$auth.loggedIn">
      {{ $auth.user.name }}でログインしてるよ
    </div>
    <div v-else>
      ログインしてないよ
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    console () {
      console.log(this.$auth)
    },
    logout () {
      this.$auth.logout()
    }
  }
}
</script>

<style>

</style>
