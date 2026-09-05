<script setup>
import { useData } from 'vitepress'

const { lang } = useData()

const statsI18n = {
  'zh-CN': [
    { n: '34', l: '篇（30 章 + 4 附录）' },
    { n: '6', l: 'PART 分段' },
    { n: '120', l: '张配图' },
    { n: '7.5', l: '万字总字数' },
    { n: '3', l: '天入门' },
  ],
  'en': [
    { n: '34', l: 'articles (30 ch + 4 appx)' },
    { n: '6', l: 'PART sections' },
    { n: '120', l: 'illustrations' },
    { n: '7.5', l: 'k words total' },
    { n: '3', l: 'days to start' },
  ],
  'ja': [
    { n: '34', l: '記事（30章 + 4付録）' },
    { n: '6', l: 'PART セクション' },
    { n: '120', l: '図版' },
    { n: '7.5', l: '万文字 合計' },
    { n: '3', l: '日で入門' },
  ],
  'ko': [
    { n: '34', l: '글 (30장 + 4부록)' },
    { n: '6', l: 'PART 섹션' },
    { n: '120', l: '삽화' },
    { n: '7.5', l: '만자 총합' },
    { n: '3', l: '일만에 입문' },
  ],
  'es': [
    { n: '34', l: 'artículos (30 cap + 4 anexos)' },
    { n: '6', l: 'secciones PART' },
    { n: '120', l: 'ilustraciones' },
    { n: '7.5', l: 'k palabras total' },
    { n: '3', l: 'días para empezar' },
  ],
  'pt-BR': [
    { n: '34', l: 'artigos (30 cap + 4 apêndices)' },
    { n: '6', l: 'seções PART' },
    { n: '120', l: 'ilustrações' },
    { n: '7.5', l: 'k palavras total' },
    { n: '3', l: 'dias para começar' },
  ],
}

const stats = statsI18n[lang.value] || statsI18n['zh-CN']
</script>

<template>
  <div class="stats-wrap">
    <div class="stats">
      <div class="stat" v-for="(s, i) in stats" :key="i">
        <div class="n">{{ s.n }}</div>
        <div class="l">{{ s.l }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.stats-wrap { margin-top: 24px; }
.stats {
  display: flex; border: 1px solid var(--vp-c-divider); border-radius: 4px;
  background: var(--vp-c-bg-alt); flex-wrap: wrap;
}
.stat { flex: 1 1 120px; padding: 15px 18px; border-right: 1px solid var(--vp-c-divider); }
.stat:last-child { border-right: none; }
.n { font-family: var(--vp-font-family-mono); font-size: 23px; font-weight: 700; color: var(--vp-c-brand-1); }
.l { font-size: 12px; color: var(--vp-c-text-3); letter-spacing: 0.08em; margin-top: 2px; }
@media (max-width: 520px) {
  .stat { border-right: none; border-bottom: 1px solid var(--vp-c-divider); }
  .stat:nth-last-child(2) { border-bottom: none; }
}
</style>
