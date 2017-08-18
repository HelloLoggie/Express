<template>
    <div>
        <span :class="{'bg-primary text-danger':isA,'bg-success text-white':!isA}" @click="toggle()">{{isA}}</span>
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
    axios.get('/api/restroom')
    .then((res)=> {
        console.log(isDev)
        return {title: res.data}
    })
    .catch((err)=> {
        error({ statusCode: 404, message: 'Post not found' })
        console.log(err.status)
    })
    //   console.log(env, params)
    // return {data: data.triptype}
  }
}
</script>

<style scoped>
</style>