<template>
  <div>
    <p class="text-3xl">
      サンプル
    </p>
    <button class="h-10 px-6 font-semibold rounded-md bg-green-300 text-gray-50" @click="getData">
      データ取得
    </button>
    <br>
    tasks: {{ tasks }}
    <br>
    <div v-for="task of tasks" :key="task.id">
      {{ task.id }}: {{ task.title }}
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data () {
    return {
      tasks: []
    }
  },
  methods: {
    async getData() {
      // タスク一覧を取得するための API を叩く
      const response = await this.$axios.$get('api/tasks', { withCredentials: true })
      console.log(response)
      this.tasks = JSON.parse(response.tasks)
    }
  }
}
/* eslint-disable */
</script>
