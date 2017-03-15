import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    images: [
      {
        id: 1,
        src: '/static/img/carousel/image_01.jpg',
        alt: '画像１'
      },
      {
        id: 2,
        src: '/static/img/carousel/image_02.jpg',
        alt: '画像２'
      },
      {
        id: 3,
        src: '/static/img/carousel/image_03.jpg',
        alt: '画像３'
      }
    ],
    currentIdx: 0,
    nextIdx: 1,
    prevIdx: null,
    touchX: 0,
    moveX: 0,
    isDrag: false,
    isAnimatePrev: false,
    isAnimateNext: false
  }
});

export default store