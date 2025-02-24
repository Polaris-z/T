import { addClass, removeClass } from './util'
import { defineComponent, h, Transition } from 'vue'

const collapseTransitio = defineComponent({
  setup(props, { slots }) {
    return () =>
      h(
        Transition,
        {
          onBeforeEnter(el: any) {
            addClass(el, 'collapse-transition')
            if (!el.dataset) el.dataset = {}

            el.dataset.oldPaddingTop = el.style.paddingTop
            el.dataset.oldPaddingBottom = el.style.paddingBottom

            el.style.height = '0'
            el.style.paddingTop = 0
            el.style.paddingBottom = 0
          },

          onEnter(el: any) {
            el.dataset.oldOverflow = el.style.overflow
            if (el.scrollHeight !== 0) {
              el.style.height = el.scrollHeight + 'px'
              el.style.paddingTop = el.dataset.oldPaddingTop
              el.style.paddingBottom = el.dataset.oldPaddingBottom
            } else {
              el.style.height = ''
              el.style.paddingTop = el.dataset.oldPaddingTop
              el.style.paddingBottom = el.dataset.oldPaddingBottom
            }

            el.style.overflow = 'hidden'
          },

          onAfterEnter(el: any) {
            // for safari: remove class then reset height is necessary
            removeClass(el, 'collapse-transition')
            el.style.height = ''
            el.style.overflow = el.dataset.oldOverflow
          },

          onBeforeLeave(el: any) {
            if (!el.dataset) el.dataset = {}
            el.dataset.oldPaddingTop = el.style.paddingTop
            el.dataset.oldPaddingBottom = el.style.paddingBottom
            el.dataset.oldOverflow = el.style.overflow

            el.style.height = el.scrollHeight + 'px'
            el.style.overflow = 'hidden'
          },

          onLeave(el: any) {
            if (el.scrollHeight !== 0) {
              // for safari: add class after set height, or it will jump to zero height suddenly, weired
              addClass(el, 'collapse-transition')
              el.style.height = 0
              el.style.paddingTop = 0
              el.style.paddingBottom = 0
            }
          },

          onAfterLeave(el: any) {
            removeClass(el, 'collapse-transition')
            el.style.height = ''
            el.style.overflow = el.dataset.oldOverflow
            el.style.paddingTop = el.dataset.oldPaddingTop
            el.style.paddingBottom = el.dataset.oldPaddingBottom
          },
        },
        () => slots.default?.()
      )
  },
})

export default collapseTransitio
