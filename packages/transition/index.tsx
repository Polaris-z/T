// import { addClass, removeClass } from '../utils/util'
// import { defineComponent } from 'next-vue'

// const Transition = {
//   beforeEnter(el: any) {
//     addClass(el, 'collapse-transition')
//     if (!el.dataset) {
//       el.dataset = {}
//     }

//     el.dataset.oldPaddingTop = el.style.paddingTop
//     el.dataset.oldPaddingBottom = el.style.paddingBottom

//     el.style.height = '0'
//     el.style.paddingTop = 0
//     el.style.paddingBottom = 0
//   },

//   enter(el: any) {
//     el.dataset.oldOverflow = el.style.overflow
//     if (el.scrollHeight !== 0) {
//       el.style.height = el.scrollHeight + 'px'
//       el.style.paddingTop = el.dataset.oldPaddingTop
//       el.style.paddingBottom = el.dataset.oldPaddingBottom
//     } else {
//       el.style.height = ''
//       el.style.paddingTop = el.dataset.oldPaddingTop
//       el.style.paddingBottom = el.dataset.oldPaddingBottom
//     }

//     el.style.overflow = 'hidden'
//   },

//   afterEnter(el: any) {
//     // for safari: remove class then reset height is necessary
//     removeClass(el, 'collapse-transition')
//     el.style.height = ''
//     el.style.overflow = el.dataset.oldOverflow
//   },

//   beforeLeave(el: any) {
//     if (!el.dataset) {
//       el.dataset = {}
//     }
//     el.dataset.oldPaddingTop = el.style.paddingTop
//     el.dataset.oldPaddingBottom = el.style.paddingBottom
//     el.dataset.oldOverflow = el.style.overflow

//     el.style.height = el.scrollHeight + 'px'
//     el.style.overflow = 'hidden'
//   },

//   leave(el: any) {
//     if (el.scrollHeight !== 0) {
//       // for safari: add class after set height, or it will jump to zero height suddenly, weired
//       addClass(el, 'collapse-transition')
//       el.style.height = 0
//       el.style.paddingTop = 0
//       el.style.paddingBottom = 0
//     }
//   },

//   afterLeave(el: any) {
//     removeClass(el, 'collapse-transition')
//     el.style.height = ''
//     el.style.overflow = el.dataset.oldOverflow
//     el.style.paddingTop = el.dataset.oldPaddingTop
//     el.style.paddingBottom = el.dataset.oldPaddingBottom
//   }
// }
// const CollapseTransition = defineComponent({
//   name: 'CollapseTransition',
//   setup(props: { appear?: boolean }, { slots }) {
//     return () => (
//       <transition on={Transition} appear={props.appear}>
//         {slots.default()}
//       </transition>
//     )
//   }
// })

// export default CollapseTransition
