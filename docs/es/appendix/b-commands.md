---
title: Apéndice B · Chuleta de Comandos
description: Instalación / inicio / plugins / configuración / comandos slash
---

# Apéndice B · Chuleta de Comandos

<div class="chapter-meta">
  <span class="cm-item"><span class="cm-k">Número de palabras</span><span class="cm-v">~540 palabras</span></span>
  <span class="cm-item"><span class="cm-k">Tiempo</span><span class="cm-v">~8 min</span></span>
  <span class="cm-item"><span class="cm-k">Nivel</span><span class="cm-v hl">Referencia</span></span>
</div>

Comandos que usas a diario con dsh, agrupados por escenario. Para profundizar, consulta el capítulo correspondiente.

## Instalación y Actualización

```bash
# Instalación global de dsh (recomendado para principiantes)
npm install -g @deepseek-ai/dsh

# Consultar la versión
dsh --version

# Actualizar a la última versión
npm install -g @deepseek-ai/dsh@latest

# Ejecutar sin instalar (siempre usa el paquete más reciente)
npx @deepseek-ai/dsh web
```

> `npx` descarga el paquete más reciente cada vez, la instalación global no se actualiza automáticamente. Para fijar una versión usa la instalación global, para tener siempre la última usa npx.

## Inicio

```bash
# Iniciar la Web UI (lo más habitual, puerto por defecto 3080)
dsh web

# Iniciar en un puerto específico
dsh web --port 8080

# Iniciar headless, ejecutar una tarea y terminar
dsh --profile headless "Ejecuta las pruebas del directorio actual y resume los fallos"

# Iniciar un profile específico
dsh --profile <nombre-del-profile>

# Iniciar con configuración adicional (método patch)
dsh web --patch ./my-plugin/cordis.yml
```

## Gestión de Plugins

```bash
# Listar los plugins instalados en el profile web
dsh plugin --profile web list

# Instalar un plugin (paquete npm)
dsh plugin --profile web add <nombre-del-paquete>

# Instalar un plugin (código fuente de GitHub)
dsh plugin --profile web add github:<usuario>/<repositorio>

# Instalar un plugin (ruta local)
dsh plugin --profile web add ./my-plugin

# Instalar un plugin (paquete tgz)
dsh plugin --profile web add https://example.com/plugin.tgz

# Desinstalar un plugin
dsh plugin --profile web remove <nombre-del-paquete>
```

> Tras instalar un plugin, debes reiniciar el profile correspondiente para que surta efecto (los cambios en bundles no se hot-reload).

## Configuración y Depuración

```bash
# Imprimir el árbol de configuración completo del profile web (para "¿de dónde viene este comportamiento?")
dsh --profile web --dump-config

# Imprimir el árbol de configuración del profile headless
dsh --profile headless --dump-config

# Iniciar con un patch y ver la configuración
dsh web --patch ./my-config.yml --dump-config
```

> La salida de `--dump-config` es texto plano, puedes pasársela a la IA durante la resolución de problemas para que escanee el árbol de configuración en busca de incidencias.

## Variables de Entorno

```bash
# Directorio raíz de configuración de dsh (por defecto ~/.dsh)
$DSH_HOME

# API Key (máxima prioridad, anula .credentials.yaml)
$DEEPSEEK_API_KEY

# API Key del modelo local (LM Studio, etc., asigna cualquier valor)
$LM_STUDIO_API_KEY
```

## Comandos Slash de la Web UI

Escribe `/` en el cuadro de entrada para abrir una lista emergente de los comandos disponibles actualmente.

| Comando | Efecto |
|---|---|
| `/compact` | Comprime manualmente el contexto del diálogo actual, resume el historial temprano en un compendio |
| `/permission` | Ver o cambiar el modo de permisos de la sesión actual (read-only / workspace-write / danger-full-access), sin argumentos muestra un cuadro de selección |
| `/model` | Cambiar de modelo, agrupado por provider, aplica el nivel de razonamiento por defecto del modelo seleccionado |
| `/goal` | Gestión de objetivos: crear / ver / editar / pausar / reanudar / limpiar objetivos de largo plazo (p. ej. `/goal pause`, `/goal clear`) |

> Con distintas versiones y distintos plugins instalados, la lista de comandos puede variar. Escribe `/` para ver los disponibles.

## Combinaciones Habituales

```bash
# Primer día como principiante: instalar y ejecutar
npm install -g @deepseek-ai/dsh
dsh web

# Cuarteto de resolución: ver versión → ver configuración → ver plugins → reiniciar
dsh --version
dsh --profile web --dump-config
dsh plugin --profile web list
dsh web

# headless para ejecutar una tarea puntual
dsh --profile headless "Resume la arquitectura de este repo, escríbela en markdown"
```
