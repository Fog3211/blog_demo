<template>
  <div>

  </div>
</template>

<script>
export default {
  mounted() {
    wx.login({
      success: res => {
        const js_code = res.code;
        if (js_code) {
          console.log("获取用户登录凭证：" + js_code);
          wx.request({
            url: "http://localhost:3000/get_openid", //后端地址
            data: { code: js_code },
            method: "POST",
            header: {
              "content-type": "application/json"
            },
            success: res => {
              if (res.statusCode == 200) {
                console.log("获取到的openid为：" + res);
                wx.setStorageSync("openid", res.data);
              } else {
                console.log(res.errMsg);
              }
            }
          });
        } else {
          console.log("获取用户登录失败：" + res.errMsg);
        }
      }
    });
  }
};
</script>

<style scoped>
</style>
