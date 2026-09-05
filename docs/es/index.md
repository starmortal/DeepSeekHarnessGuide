---
layout: home

hero:
  name: Guía DeepSeek Harness
  text: Guía práctica de dsh basada en tareas reales
  tagline: Pon dsh a trabajar de verdad. De 0 a 1 con tareas reales, luego de 1 a 100 — convierte cada éxito en un sistema reutilizable. Todo es un plugin, cada ejecución es trazable.
  image:
    src: /logo.jpg
    alt: Guía DeepSeek Harness
  actions:
    - theme: brand
      text: Empezar a leer
      link: /es/part00/
    - theme: alt
      text: Índice completo
      link: /es/part00/
---

<div style="text-align:center;margin-top:8px;">
  <span class="hlm" style="font-family:var(--vp-font-family-mono);font-size:15px;letter-spacing:.05em;">everything is a plugin · Agent = Model + Harness</span>
</div>

<StatsBar />

<PathCards />

<div class="contrib-wrap">
  <div class="contrib-label">COMMUNITY <b>/ Contribuir</b></div>
  <h2 class="contrib-title">Este libro es un proyecto de la comunidad</h2>
  <p class="contrib-desc">Tanto si acabas de empezar como si ya ejecutas dsh en producción, todas las contribuciones son bienvenidas.</p>

  <div class="contrib-cards">
    <a class="c-card" href="https://github.com/super-mortal/DeepSeekHarnessGuide/issues" target="_blank">
      <span class="c-no">01</span>
      <span class="c-title">Abrir Issues</span>
      <span class="c-desc">Informar de errores, proponer mejoras, pedir contenido</span>
    </a>
    <a class="c-card" href="https://github.com/super-mortal/DeepSeekHarnessGuide/pulls" target="_blank">
      <span class="c-no">02</span>
      <span class="c-title">Enviar Pull Requests</span>
      <span class="c-desc">Corregir erratas, añadir capítulos, mejorar ejemplos</span>
    </a>
    <a class="c-card" href="https://github.com/super-mortal/DeepSeekHarnessGuide/discussions" target="_blank">
      <span class="c-no">03</span>
      <span class="c-title">Compartir experiencia</span>
      <span class="c-desc">Tus tropiezos prácticos, plugins recomendados, trucos de uso</span>
    </a>
  </div>

  <div class="contrib-foot">
    <span class="hlm">Open Source · MIT · Community Driven</span>
  </div>
</div>

<style scoped>
.contrib-wrap {
  margin-top: 48px;
  border-top: 1px solid var(--vp-c-divider);
  padding-top: 28px;
}
.contrib-label {
  font-family: var(--vp-font-family-mono);
  font-size: 12.5px;
  letter-spacing: 0.18em;
  color: var(--vp-c-text-3);
}
.contrib-label b { color: var(--vp-c-text-1); }
.contrib-title {
  font-size: 24px;
  font-weight: 900;
  color: var(--vp-c-text-1);
  margin-top: 10px;
  letter-spacing: 0.01em;
}
.contrib-desc {
  font-size: 14px;
  color: var(--vp-c-text-2);
  margin-top: 8px;
  line-height: 1.8;
}
.contrib-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 14px;
  margin-top: 22px;
}
.c-card {
  display: block;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  padding: 18px 18px 16px;
  background: var(--vp-c-bg);
  text-decoration: none;
}
.c-card:hover { background: var(--hl); }
.c-no {
  display: inline-block;
  font-family: var(--vp-font-family-mono);
  font-size: 11.5px;
  font-weight: 700;
  background: var(--vp-c-text-1);
  color: var(--hl);
  padding: 2px 8px;
  border-radius: 2px;
  letter-spacing: 0.05em;
}
.c-title {
  display: block;
  font-size: 17px;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin-top: 11px;
}
.c-desc {
  display: block;
  font-size: 12.5px;
  color: var(--vp-c-text-3);
  margin-top: 6px;
  line-height: 1.7;
}
.contrib-foot {
  margin-top: 24px;
  text-align: center;
}
.contrib-foot .hlm {
  font-family: var(--vp-font-family-mono);
  font-size: 13px;
  letter-spacing: 0.05em;
}
</style>
