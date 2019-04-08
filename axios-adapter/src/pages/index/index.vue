<template>
  <div>
      <button @click="handleGet">发送get请求</button>
      <button @click="handlePost">发送post请求</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {};
  },
  methods: {
    handleGet() {
      axios
        .get("http://localhost:3000/get_msg", {
          params: {
            ID: 12345
          }
        })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    handlePost() {
      axios
        .post("http://localhost:3000/post_msg", {
          ID: 12345
        })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>


