<template>
  <div class="w-full max-w-xs">
    <p class="text-xl">ログイン</p>
    <form @submit.prevent="userLogin">
      <div>
        <label>name</label>
        <input type="text" v-model="login.name" />
      </div>
      <div>
        <label>Password</label>
        <input type="text" v-model="login.password" />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
      <div v-show="message">{{ message }}</div>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      login: {
        name: '',
        password: ''
      },
      message: ''
    }
  },
  methods: {
    // userLogin () {
    //   try {
    //     this.$auth.loginWith('local', { data: this.login }).then((res) => {
    //       this.message = res.data.error || 'ログインしました'
    //     })
    //   } catch (err) {
    //     console.log(err)
    //   }
    // }

    async userLogin () {
      try {
        await this.$auth.loginWith('local', { data: this.login })
      } catch (e) {
        this.message = 'ニックネームまたはパスワードが誤っています'
      }
    }
  }
}
</script>

<style>

</style>
