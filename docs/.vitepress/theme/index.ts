import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress'
import './style.css'
import PathCards from './components/PathCards.vue'
import StatsBar from './components/StatsBar.vue'

// —— 图片灯箱：点击放大 + ctrl+滚轮缩放 + 左右切换 + 拖拽平移 + ESC 退出 ——
interface LightboxState {
  images: string[]
  index: number
  scale: number
  translateX: number
  translateY: number
  isDragging: boolean
  dragStartX: number
  dragStartY: number
  overlay: HTMLElement | null
  imgEl: HTMLImageElement | null
}

const state: LightboxState = {
  images: [],
  index: 0,
  scale: 1,
  translateX: 0,
  translateY: 0,
  isDragging: false,
  dragStartX: 0,
  dragStartY: 0,
  overlay: null,
  imgEl: null,
}

function applyTransform() {
  if (!state.imgEl) return
  state.imgEl.style.transform = `translate(${state.translateX}px, ${state.translateY}px) scale(${state.scale})`
}

function resetZoom() {
  state.scale = 1
  state.translateX = 0
  state.translateY = 0
  applyTransform()
}

function showImage(index: number) {
  if (!state.overlay || !state.imgEl) return
  state.index = Math.max(0, Math.min(state.images.length - 1, index))
  state.imgEl.src = state.images[state.index]
  resetZoom()
  updateCounter()
  updateButtons()
}

function updateCounter() {
  const counter = state.overlay?.querySelector('.dsh-lightbox-counter')
  if (counter) {
    counter.textContent = `${state.index + 1} / ${state.images.length}`
  }
}

function updateButtons() {
  const prev = state.overlay?.querySelector('.dsh-lightbox-prev') as HTMLButtonElement | null
  const next = state.overlay?.querySelector('.dsh-lightbox-next') as HTMLButtonElement | null
  if (prev) prev.disabled = state.index <= 0
  if (next) next.disabled = state.index >= state.images.length - 1
}

function closeLightbox() {
  state.overlay?.remove()
  state.overlay = null
  state.imgEl = null
  document.body.style.overflow = ''
}

function onKeyDown(e: KeyboardEvent) {
  if (e.key === 'Escape') {
    e.preventDefault()
    closeLightbox()
  } else if (e.key === 'ArrowLeft') {
    e.preventDefault()
    showImage(state.index - 1)
  } else if (e.key === 'ArrowRight') {
    e.preventDefault()
    showImage(state.index + 1)
  } else if (e.key === '0' || e.key === 'r' || e.key === 'R') {
    resetZoom()
  }
}

function onWheel(e: WheelEvent) {
  // ctrl + 滚轮缩放
  if (e.ctrlKey || e.metaKey) {
    e.preventDefault()
    const delta = e.deltaY > 0 ? -0.1 : 0.1
    state.scale = Math.max(0.5, Math.min(5, state.scale + delta))
    applyTransform()
  }
}

function onMouseDown(e: MouseEvent) {
  if (e.button !== 0) return
  // 只有缩放后才允许拖拽
  if (state.scale <= 1) return
  e.preventDefault()
  e.stopPropagation()
  state.isDragging = true
  state.dragStartX = e.clientX - state.translateX
  state.dragStartY = e.clientY - state.translateY
  state.imgEl?.classList.add('dragging')
}

function onMouseMove(e: MouseEvent) {
  if (!state.isDragging) return
  state.translateX = e.clientX - state.dragStartX
  state.translateY = e.clientY - state.dragStartY
  applyTransform()
}

function onMouseUp() {
  state.isDragging = false
  state.imgEl?.classList.remove('dragging')
}

function createLightbox(images: string[], startIndex: number) {
  // 关闭已有的
  closeLightbox()

  state.images = images
  state.index = startIndex
  state.scale = 1
  state.translateX = 0
  state.translateY = 0

  const overlay = document.createElement('div')
  overlay.className = 'dsh-lightbox'

  // 图片容器
  const wrap = document.createElement('div')
  wrap.className = 'dsh-lightbox-img-wrap'

  const img = document.createElement('img')
  img.src = images[startIndex]
  img.alt = ''
  img.draggable = false
  wrap.appendChild(img)
  overlay.appendChild(wrap)

  // 关闭按钮
  const closeBtn = document.createElement('button')
  closeBtn.className = 'dsh-lightbox-btn dsh-lightbox-close'
  closeBtn.textContent = '✕'
  closeBtn.title = '关闭 (ESC)'
  closeBtn.addEventListener('click', (e) => {
    e.stopPropagation()
    closeLightbox()
  })
  overlay.appendChild(closeBtn)

  // 上一张
  const prevBtn = document.createElement('button')
  prevBtn.className = 'dsh-lightbox-btn dsh-lightbox-prev'
  prevBtn.textContent = '‹'
  prevBtn.title = '上一张 (←)'
  prevBtn.addEventListener('click', (e) => {
    e.stopPropagation()
    showImage(state.index - 1)
  })
  overlay.appendChild(prevBtn)

  // 下一张
  const nextBtn = document.createElement('button')
  nextBtn.className = 'dsh-lightbox-btn dsh-lightbox-next'
  nextBtn.textContent = '›'
  nextBtn.title = '下一张 (→)'
  nextBtn.addEventListener('click', (e) => {
    e.stopPropagation()
    showImage(state.index + 1)
  })
  overlay.appendChild(nextBtn)

  // 计数器
  const counter = document.createElement('div')
  counter.className = 'dsh-lightbox-counter'
  counter.textContent = `${startIndex + 1} / ${images.length}`
  overlay.appendChild(counter)

  // 操作提示
  if (images.length > 1) {
    const hint = document.createElement('div')
    hint.className = 'dsh-lightbox-hint'
    hint.textContent = 'Ctrl+滚轮缩放 · ← → 切换 · 拖拽平移 · ESC 退出'
    overlay.appendChild(hint)
  }

  // 点击遮罩关闭（但点击图片不关闭，图片用于拖拽）
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay || e.target === wrap) {
      closeLightbox()
    }
  })

  // 事件绑定
  overlay.addEventListener('wheel', onWheel, { passive: false })
  img.addEventListener('mousedown', onMouseDown)
  document.addEventListener('mousemove', onMouseMove)
  document.addEventListener('mouseup', onMouseUp)
  document.addEventListener('keydown', onKeyDown)

  document.body.appendChild(overlay)
  document.body.style.overflow = 'hidden'

  state.overlay = overlay
  state.imgEl = img
}

function bindLightbox() {
  const imgs = document.querySelectorAll('.VPDoc :not(a) > img')
  const imageList: string[] = []
  imgs.forEach((img) => {
    const el = img as HTMLImageElement & { __dshZoomBound?: boolean }
    const src = el.currentSrc || el.src
    if (!imageList.includes(src)) {
      imageList.push(src)
    }
    if (el.__dshZoomBound) return
    el.__dshZoomBound = true
    el.style.cursor = 'zoom-in'
    el.addEventListener('click', (e) => {
      e.preventDefault()
      e.stopPropagation()
      const idx = imageList.indexOf(el.currentSrc || el.src)
      createLightbox(imageList, idx >= 0 ? idx : 0)
    })
  })
}

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('PathCards', PathCards)
    app.component('StatsBar', StatsBar)
  },
  setup() {
    const route = useRoute()
    const init = () => nextTick(bindLightbox)
    onMounted(init)
    watch(() => route.path, init)
  },
} satisfies Theme
