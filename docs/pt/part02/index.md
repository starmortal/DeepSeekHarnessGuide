---
title: "Entendendo o esqueleto: tudo é um plugin"
---

# PARTE 02 · Entendendo o esqueleto

<div class="lead">
  Arquitetura. Entenda o modelo mental da árvore de plugins do dsh e os subsistemas centrais. Três capítulos, do macro ao micro, desembalando por completo a frase "tudo é um plugin".
</div>

<div class="start-grid">
  <a class="start-card" href="/pt/part02/ch09">
    <span class="sc-no">CH 09</span>
    <span class="sc-title">Modelo mental da árvore de plugins</span>
    <span class="sc-desc">Tudo é um plugin · ~15 min</span>
    <span class="sc-go">Começar a ler →</span>
  </a>
  <a class="start-card" href="/pt/part02/ch10">
    <span class="sc-no">CH 10</span>
    <span class="sc-title">Subsistemas centrais e fluxo de mensagens</span>
    <span class="sc-desc">Do Enter até a resposta · ~12 min</span>
    <span class="sc-go">Começar a ler →</span>
  </a>
  <a class="start-card" href="/pt/part02/ch11">
    <span class="sc-no">CH 11</span>
    <span class="sc-title">Log de sessão como fonte da verdade</span>
    <span class="sc-desc">Cada execução é rastreável · ~10 min</span>
    <span class="sc-go">Começar a ler →</span>
  </a>
</div>

<style scoped>
.lead {
  margin: 18px 0 22px;
  font-size: 15px;
  color: var(--vp-c-text-2);
  line-height: 1.85;
}
.lead b { color: var(--vp-c-text-1); }
.start-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 14px;
  margin: 0 0 6px;
}
.start-card {
  display: block;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  padding: 18px 18px 15px;
  background: var(--vp-c-bg);
  text-decoration: none;
}
.start-card:hover { background: var(--hl); }
.sc-no {
  display: inline-block;
  font-family: var(--vp-font-family-mono);
  font-size: 11.5px; font-weight: 700;
  background: var(--vp-c-text-1); color: var(--hl);
  padding: 2px 8px; border-radius: 2px; letter-spacing: 0.05em;
}
.sc-title {
  display: block;
  font-size: 17px; font-weight: 700;
  color: var(--vp-c-text-1);
  margin-top: 11px;
}
.sc-desc {
  display: block;
  font-size: 12.5px;
  color: var(--vp-c-text-3);
  margin-top: 6px;
  font-family: var(--vp-font-family-mono);
  letter-spacing: 0.02em;
}
.sc-go {
  display: inline-block;
  margin-top: 13px;
  font-size: 12.5px; font-weight: 700;
  color: var(--vp-c-brand-1);
  font-family: var(--vp-font-family-mono);
}
.start-card:hover .sc-go { color: var(--vp-c-text-1); }
</style>
