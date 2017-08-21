<template>
    <div>
        <span :class="{'bg-primary text-danger':isA,'bg-success text-white':!isA}" @click="toggle()">{{isA}}</span>
        <span>{{data.triptype}}</span>
    </div>
</template>

<script>
import axios from '~/plugins/axios'
export default {
  name: 'hello',
  data () {
    return {
      isA: false
    }
  },
  methods: {
    toggle: function () {
      this.isA = !this.isA
    }
  },
    asyncData ({ params, env, error ,isDev}) {
    return axios.get('/api/restroom')
    .then((res)=> {
        console.log(env)
        console.log(isDev)
        console.log(res.data.triptype)
        return {data: res.data}
    })
    .catch((err)=> {
        error({ statusCode: 404, message: 'Post not found' })
        console.log(err.status)
    })
  }
}
</script>

<style scoped>
</style>