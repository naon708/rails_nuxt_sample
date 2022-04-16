<template>
  <div class="w-full max-w-xs">
    <p class="text-xl">ユーザー登録</p>
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
          name
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" v-model="user.name">
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
          email
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="email" v-model="user.email">
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
          Password
        </label>
        <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" v-model="user.password">
      </div>
      <div class="flex items-center justify-between">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" @click="register()">
          Sign In
        </button>
      </div><br>
      {{ user.name }}<br>
      {{ user.email }}<br>
      {{ user.password }}<br>
      エラーメッセージ：
      <div v-for="(m, index) of message" :key="index">
        {{ m }}
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        name: '',
        email: '',
        password: '',
        message: ''
      }
    }
  },
  methods: {
    register () {
      this.$axios.post('api/register', this.user).then((res) => {
        if (res.data.status === 401) {
          this.message = res.data.error.name
          return
        }
        this.$auth.loginWith('local', { data: this.user })
      })
    }
  }
}
</script>

<style>

</style>
