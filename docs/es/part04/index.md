---
title: "Instalar, Escribir y Publicar Plugins"
---

# PART 04 · Instalar, Escribir y Publicar Plugins

<div class="lead">
  De la instalación al desarrollo y la publicación. Siete capítulos: primero aprende a instalar plugins de la comunidad, luego escribe tu primer hello-plugin, plugins de herramienta / hook / UI, y finalmente publícalo para que cualquiera pueda instalarlo con un solo comando.
</div>

<div class="start-grid">
  <a class="start-card" href="/es/part04/ch17">
    <span class="sc-no">CH 17</span>
    <span class="sc-title">Instalación de Plugins</span>
    <span class="sc-desc">dsh plugin + Plugin Market · ~12 min</span>
    <span class="sc-go">Comenzar a leer →</span>
  </a>
  <a class="start-card" href="/es/part04/ch18">
    <span class="sc-no">CH 18</span>
    <span class="sc-title">Tu Primer Plugin: hello-plugin</span>
    <span class="sc-desc">Plugin mínimo ejecutable · ~15 min</span>
    <span class="sc-go">Comenzar a leer →</span>
  </a>
  <a class="start-card" href="/es/part04/ch19">
    <span class="sc-no">CH 19</span>
    <span class="sc-title">Tres Formas de Plugin</span>
    <span class="sc-desc">service / loader / patch · ~12 min</span>
    <span class="sc-go">Comenzar a leer →</span>
  </a>
  <a class="start-card" href="/es/part04/ch20">
    <span class="sc-no">CH 20</span>
    <span class="sc-title">Plugin de Herramienta: defineTool</span>
    <span class="sc-desc">Añadir nueva capacidad al Agent · ~12 min</span>
    <span class="sc-go">Comenzar a leer →</span>
  </a>
  <a class="start-card" href="/es/part04/ch21">
    <span class="sc-no">CH 21</span>
    <span class="sc-title">Plugins Hook e Intercepción</span>
    <span class="sc-desc">tools/pre-execute · ~10 min</span>
    <span class="sc-go">Comenzar a leer →</span>
  </a>
  <a class="start-card" href="/es/part04/ch22">
    <span class="sc-no">CH 22</span>
    <span class="sc-title">Plugins de UI</span>
    <span class="sc-desc">Página de ajustes + event listener · ~15 min</span>
    <span class="sc-go">Comenzar a leer →</span>
  </a>
  <a class="start-card" href="/es/part04/ch23">
    <span class="sc-no">CH 23</span>
    <span class="sc-title">Publicar y Distribuir</span>
    <span class="sc-desc">npm + GitHub Release · ~12 min</span>
    <span class="sc-go">Comenzar a leer →</span>
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
