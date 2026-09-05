---
title: "Começar"
---

# PARTE 00 · Começar

<div class="lead">
  Comecemos pela pergunta mais básica: <b>por que aprender o dsh em 2026 e como ler este livro.</b>
  Dois ensaios curtos para estabelecer o eixo "do que trata este livro, e como lê-lo".
</div>

<div class="start-grid">
  <a class="start-card" href="/pt/part00/ch00">
    <span class="sc-no">CH 00</span>
    <span class="sc-title">Por que é a era Lego do Agent</span>
    <span class="sc-desc">Onde está o dsh, por que vale a pena aprender · ~10 min</span>
    <span class="sc-go">Começar a ler →</span>
  </a>
  <a class="start-card" href="/pt/part00/ch01">
    <span class="sc-no">CH 01</span>
    <span class="sc-title">Como ler: três rotas</span>
    <span class="sc-desc">Iniciante / Intermediário / Desenvolvedor · ~8 min</span>
    <span class="sc-go">Começar a ler →</span>
  </a>
</div>

## E então, escolha a sua rota

Após ler a PARTE 00, siga a rota escolhida em CH 01 para qualquer uma das seções abaixo — cada capítulo se abre com um clique.

<PathCards />

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
