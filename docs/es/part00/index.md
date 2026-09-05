---
title: "Comenzar"
---

# PARTE 00 · Comenzar

<div class="lead">
  Empecemos por la pregunta más básica: <b>por qué aprender dsh en 2026 y cómo leer este libro.</b>
  Dos ensayos cortos para establecer el eje de "de qué va este libro, y cómo leerlo".
</div>

<div class="start-grid">
  <a class="start-card" href="/es/part00/ch00">
    <span class="sc-no">CH 00</span>
    <span class="sc-title">Por qué es la era Lego del Agent</span>
    <span class="sc-desc">Dónde está dsh, por qué vale la pena aprenderlo · ~10 min</span>
    <span class="sc-go">Empezar a leer →</span>
  </a>
  <a class="start-card" href="/es/part00/ch01">
    <span class="sc-no">CH 01</span>
    <span class="sc-title">Cómo leer: tres rutas</span>
    <span class="sc-desc">Principiante / Intermedio / Desarrollador · ~8 min</span>
    <span class="sc-go">Empezar a leer →</span>
  </a>
</div>

## Y luego, elige tu ruta

Tras leer PARTE 00, sigue la ruta que hayas elegido en CH 01 hacia cualquiera de las siguientes secciones — cada capítulo se abre con un clic.

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
