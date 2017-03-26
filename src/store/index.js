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
      },
      {
        id: 4,
        src: '/static/img/carousel/image_04.jpg',
        alt: '画像４'
      },
      {
        id: 5,
        src: '/static/img/carousel/image_05.jpg',
        alt: '画像５'
      },
      {
        id: 6,
        src: '/static/img/carousel/image_06.jpg',
        alt: '画像６'
      },
      {
        id: 7,
        src: '/static/img/carousel/image_03.jpg',
        alt: '画像7'
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
  },
  mutations: {
    updateCurrentIdx (state) {
      if(state.isAnimatePrev) {
        state.currentIdx = state.prevIdx === null ? state.images.length - 1 : state.prevIdx;
      } else if (state.isAnimateNext) {
        state.currentIdx = state.nextIdx;
      }
    },
    updatePrevIdx (state) {
      state.prevIdx = (state.currentIdx === 0) ? state.images.length - 1 : state.currentIdx - 1;
    },
    updateNextIdx (state) {
      state.nextIdx = (state.currentIdx === state.images.length - 1) ? 0 : state.currentIdx + 1;
    },
    setCurrentIdx (state, id) {
      state.currentIdx = id - 1
    },
    setIsAnimatePrev (state, TorF) {
      state.isAnimatePrev = TorF
    },
    setIsAnimateNext (state, TorF) {
      state.isAnimateNext = TorF
    },
    resetIsAnimatePrev (state) {
      if(state.isAnimatePrev) {
        state.isAnimatePrev = !state.isAnimatePrev;
      }
    },
    resetIsAnimateNext (state) {
      if(state.isAnimateNext) {
        state.isAnimateNext = !state.isAnimateNext;
      }
    },
    updateTouchX (state, value) {
      state.touchX = value
    },
    updateMoveX (state, value) {
      state.moveX = value
    },
    updateIsDrag (state, TorF) {
      state.isDrag = TorF
    },
  }
});

export default store