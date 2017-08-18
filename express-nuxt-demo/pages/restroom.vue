<template>
    <div class="pop-vas" id="pop-vas" style="display: block;opacity: 1;">
      <div class="vas-cont vas-viproom">
        <div class="notice-board">
          <span v-if="data[0].tagsInfo[0].tagTop" class="icon-tag tag-slogan">{{data[0].tagsInfo[0].tagTop.noteCnt}}</span>{{data[0].tagsInfo[0].tagInfo.noteCnt}}
        </div>
        <div class="intro">
          <div class="pic">
            <img :src="data[0].imgInfo[0].imgs[0].noteCnt" alt="贵宾室">
          </div>
          <div v-if="data[0].imgInfo[0].tagsPic.length > 0" class="tag-box">
            <span v-for="tagsPic in (data[0].imgInfo[0].tagsPic)" class="icon-tag">{{tagsPic.noteCnt}}</span>
          </div>
        </div>
        <div class="detail">
          <div class="vas-item">
            <div v-for="data in data" class="vas-item-cont">
              <div class="tit">
                <h5 v-if="data.notes[0].restName">
                  <span v-if="type===2 && data.segno == 1" class="icon-tag tag-range">去</span>
                  <span v-if="type===2 && data.segno == 2" class="icon-tag tag-range">返</span>
                  {{data.notes[0].restName.noteCnt}}
                </h5>
                <span v-if="data.notes[0].check" class="icon-tag tag-lounge">{{data.notes[0].check.noteCnt}}</span>
                <span v-if="data.notes[0].marketPrice && data.notes[0].price && (data.notes[0].marketPrice.noteCnt - data.notes[0].price.noteCnt > 0)" class="discount">
                            省<span class="price"><dfn>&yen;</dfn>{{data.notes[0].marketPrice.noteCnt - data.notes[0].price.noteCnt}}</span>
                </span>
              </div>
              <div v-if="type !== 2" class="subtitle">
                <i v-if="data.notes[0].tagStar" v-bind:class="'icon-star' + data.notes[0].tagStar.noteCnt"></i>
                <span v-if="star" class="type">{{star[data.notes[0].tagStar.noteCnt]}}</span>
                <span v-if="data.notes[0].monthMount" class="use-coupon">月销{{data.notes[0].monthMount.noteCnt}}件</span>
              </div>
              <div v-if="data.notes[0].tagPrice" class="subtitle">
                {{data.notes[0].tagPrice.noteCnt}}<strong v-if="data.notes[0].price" class="price"><dfn>&yen;</dfn>{{data.notes[0].price.noteCnt}}</strong>/人
                <span class="use-coupon" style="display: none;">(已用券)</span>
                <del v-if="data.notes[0].marketPriceTag">
                  {{data.notes[0].marketPriceTag.noteCnt}}<span v-if="data.notes[0].marketPrice" class="price"><dfn>&yen;</dfn>{{data.notes[0].marketPrice.noteCnt}}</span>/人
                </del>
              </div>
              <div class="subtitle" style="display: none;">
                    <span class="icon-tag tag-coupon">
                        <span class="half">赠</span>
                        <span class="info"><dfn>&yen;</dfn>5门票券</span>
                    </span>
              </div>
            </div>
            <div class="pop-tooltip" style="display: none;">
              <div class="wakeup">当前特惠价仅：<span class="price"><dfn>&yen;</dfn>20</span>/份</div>
              <div class="hint-msg"><i class="icon-info-full"></i>最近北京雾大，飞机延误比例较高</div>
            </div>
          </div>
        </div>
        <div v-if="flag" class="summary" >
          <ol class="summary-list">
            <li v-for="summary in data[0].instruction">{{summary.noteTit}} : {{summary.noteCnt}}</li>
          </ol>
        </div>
        <a href="javascript:;" v-bind:class="{'summary-link' : flag,'summary-link summary-link-up' : !flag}" v-on:click="toggle()">产品详情</a>
      </div>
    </div>

</template>

<script>
import axios from '~/plugins/axios'
import {filter} from '~/assets/js/data'
export default {
  data: function () {
    return {
      flag: false
    }
  },
  async asyncData () {
    let {data} = await axios.get('/api/restroom')
    /* console.log(2) */
    let xPrdList = data.xpdtlst || []
    // 行程类型
    let triptype = data.triptype || []
    let xprd = filter(xPrdList)
    let starMap = {
      '1': '基础型',
      '2': '舒适型',
      '3': '商务型',
      '4': '尊贵型',
      '5': '奢华型'
    }
    return {data: xprd, type: triptype, star: starMap}
  },
  head () {
    return {
      title: 'restroom'
    }
  },
  methods: {
    toggle: function () {
      this.flag = !this.flag
    }
  }
}
</script>

