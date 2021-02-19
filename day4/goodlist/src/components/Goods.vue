<template>
  <div>
    <div class="content">
      <div class="main" v-for="item in goodlist" :key="item.id">
        <div class="img"><img :src="item.img_url" alt="" /></div>
        <div class="right">
          <div class="title">{{ item.title }}</div>
          <div class="date">上架日期:{{ item.add_time }}</div>
          <div class="num">库存数量:{{ item.stock_quantity }}</div>
          <div class="price">
            <span>{{ item.market_price }}</span>
            <del>{{ item.sell_price }}</del>
          </div>
          <div class="buy_num">
            够买数量:
            <div class="box">
              <div class="number">{{ item.click }}</div>
            </div>
          </div>
          <button>立即购买</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      goodlist: []
    }
  },
  created() {
    this.getGoodList()
  },
  methods: {
    async getGoodList() {
      const { data: res } = await this.$ajax.get(
        'http://www.liulongbin.top:3005/api/getgoods?pageindex=0'
      )
      this.goodlist = res.message

      console.log(this.goodlist)
    }
  }
}
</script>
<style lang="less" scoped>
* {
  padding: 0;
  margin: 0;
}
.main {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  display: flex;
}
.img {
  height: 200px;
  width: 200px;
}
.title {
  font-size: 28px;
  font-weight: 700;
}
.date,
.date,
.num,
.price,
.buy_num {
  font-size: 16px;
  height: 32px;
  line-height: 32px;
}
.buy_num {
  display: flex;
}
button {
  background-color: red;
  border: none;
  color: #fff;
  height: 30px;
  width: 70px;
  margin-top: 10px;
}
.price span {
  color: red;
  font-size: 20px;
}
.box {
  width: 60px;
  height: 20px;
  margin-left: 10px;
  margin-top: 5px;
  border: 1px solid black;
}
.number {
  line-height: 20px;
}
</style>
