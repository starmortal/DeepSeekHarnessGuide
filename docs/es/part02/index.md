---
title: "Entender el esqueleto: todo es un plugin"
---

# PART 02 · Entender el esqueleto

<div class="lead">
  Arquitectura. Entiende el modelo mental del árbol de plugins de dsh y sus subsistemas centrales. Tres capítulos, de lo macro a lo micro, que desarrollan por completo la frase "todo es un plugin".
</div>

<div class="start-grid">
  <a class="start-card" href="/es/part02/ch08">
    <span class="sc-no">CH 08</span>
    <span class="sc-title">Modelo mental del árbol de plugins</span>
    <span class="sc-desc">Todo es un plugin · ~15 min</span>
    <span class="sc-go">Empezar a leer →</span>
  </a>
  <a class="start-card" href="/es/part02/ch09">
    <span class="sc-no">CH 09</span>
    <span class="sc-title">Subsistemas centrales y flujo de mensajes</span>
    <span class="sc-desc">Desde tu tecla Enter hasta su respuesta · ~12 min</span>
    <span class="sc-go">Empezar a leer →</span>
  </a>
  <a class="start-card" href="/es/part02/ch10">
    <span class="sc-no">CH 10</span>
    <span class="sc-title">El log de sesión como fuente de verdad</span>
    <span class="sc-desc">Cada ejecución es trazable · ~10 min</span>
    <span class="sc-go">Empezar a leer →</span>
  </a>
</div>

<style scoped>
.lead {
  margin: 18px 0 22px;
  font-size: 15px;
  color: var(--vp-c-text-2);
  line-height: 1.85;
}
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
