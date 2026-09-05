---
title: Apéndice C · Índice de Documentación Oficial
description: Arquitectura / subsistemas / cookbook / referencia CLI / READMEs por paquete
---

# Apéndice C · Índice de Documentación Oficial

<div class="chapter-meta">
  <span class="cm-item"><span class="cm-k">Número de palabras</span><span class="cm-v">~1710 palabras</span></span>
  <span class="cm-item"><span class="cm-k">Tiempo</span><span class="cm-v">~5 min</span></span>
  <span class="cm-item"><span class="cm-k">Nivel</span><span class="cm-v hl">Referencia</span></span>
</div>

La documentación oficial de dsh se encuentra toda en el directorio `docs/` del [repositorio de GitHub](https://github.com/deepseek-ai/deepseek-harness) y en el README de cada paquete. Aquí se clasifica por uso, salta directamente cuando necesites profundizar en un tema.

## Documentos Principales

| Documento | Contenido | Cuándo leerlo |
|---|---|---|
| [README](https://github.com/deepseek-ai/deepseek-harness) | Visión general del proyecto, filosofía de diseño, inicio rápido, cuatro modos de ejecución | Primer contacto, quieres entender rápidamente el panorama completo |
| [architecture.md](https://github.com/deepseek-ai/deepseek-harness/blob/master/docs/architecture.md) | Diseño de arquitectura global: framework de plugins Cordis, árbol de plugins, Profile, Bundle, orden de carga por capas de configuración | Quieres entender cómo se implementa exactamente "todo es un plugin" |
| [AGENTS.md raíz](https://github.com/deepseek-ai/deepseek-harness/blob/master/AGENTS.md) | Estructura del repo, organización de directorios por paquete, configuración del entorno de desarrollo | Quieres leer el código fuente o enviar un PR al repo oficial |
| [docs/AGENTS.md](https://github.com/deepseek-ai/deepseek-harness/blob/master/docs/AGENTS.md) | Manual de desarrollo de documentación: especifica qué debe y qué no debe contener cada tipo de documento, estándar de capas de documentación | Quieres enviar un PR a la documentación oficial o conocer las convenciones de organización |

## Documentos de Subsistemas (subsystems/)

El equipo oficial escribió un documento aparte para cada subsistema central, más de 40 en total. Cada uno explica: qué es este subsistema, qué estructuras de datos fluyen por él, qué servicios y eventos de ctx provee. Todos están en el directorio [docs/subsystems/](https://github.com/deepseek-ai/deepseek-harness/tree/master/docs/subsystems).

| Subsistema | Qué cubre |
|---|---|
| **session** | Gestión de sesiones: crear, reanudar, fork, persistencia, flujo de eventos |
| **agent-loop** | Agent loop: mecanismo de iteración pensar → llamar herramienta → ver resultado |
| **tools** | Registro de herramientas, Schema, pipeline de ejecución, aprobación, sandbox |
| **llm** | Adaptación de modelos, Provider, petición/respuesta, caché |
| **skills** | Descubrimiento, carga e invocación de Skills |
| **subagent** | Programación de subagents, dos modos (spawn / fork), agregación de resultados |
| **workflow** | Orquestación de workflows, cadenas de múltiples pasos |
| **sandbox** | Sandbox de archivos, tres niveles de permisos, flujo de aprobación |
| **trajectory** | Registro de trayectorias, reproducción, exportación |
| **credentials** | Gestión de credenciales, almacenamiento write-only, redacción |
| **mcp** | Cliente MCP, integración de servidores, puenteo de herramientas |
| **compaction** | Compresión de contexto, momento de activación, generación de resúmenes |

> Los documentos de subsistemas están en orden alfabético; cuando necesites profundizar en un mecanismo, busca directamente el archivo correspondiente.

## Cookbook (manuales prácticos)

Los tutoriales paso a paso escritos por el equipo oficial se encuentran en el directorio [docs/cookbook/](https://github.com/deepseek-ai/deepseek-harness/tree/master/docs/cookbook).

| Tutorial | Qué enseña |
|---|---|
| **Añadir un paquete** | Cómo añadir una nueva dependencia npm a dsh |
| **Añadir una herramienta** | Cómo escribir una herramienta personalizada y registrarla en el Agent |
| **Añadir un LLM adapter** | Cómo conectar un nuevo provider de modelos |
| **Extender las formas de plugin** | Cómo escribir plugins de cliente, plugins de UI, bundles |
| **Profile personalizado** | Cómo crear una combinación de profile totalmente nueva |

> El Cookbook son tutoriales del tipo "síguelo y funcionará", más prácticos que los documentos de subsistemas.

## Referencia CLI

[apps/cli/reference/README.md](https://github.com/deepseek-ai/deepseek-harness/blob/master/apps/cli/reference/README.md): la referencia completa del comportamiento de la línea de comandos de dsh, incluyendo el análisis de argumentos, el flujo de inicio de profile y el comportamiento exacto de cada subcomando. Consúltala al escribir scripts o resolver problemas.

## READMEs por Paquete

El repo es un monorepo, con 49 grupos en `packages/`, cada uno con su propio README. Los más usados:

| Paquete | Función |
|---|---|
| `@deepseek-ai/dsh` | Punto de entrada principal, binario de CLI |
| `@deepseek-ai/cordis` | Framework subyacente de plugins |
| `@deepseek-ai/dsh-web-app` | Frontend de la Web UI |
| `@deepseek-ai/dsh-headless` | Runtime headless |
| `@deepseek-ai/dsh-mcp-client` | Plugin cliente de MCP |
| `@deepseek-ai/dsh-tool-skill` | Plugin de herramienta Skill |

## Cómo usar este índice

1. **Quieres entender un concepto** → lee primero README y architecture.md
2. **Quieres entender un mecanismo** → busca el subsistema correspondiente en subsystems/
3. **Quieres construir algo siguiendo los pasos** → busca el tutorial correspondiente en cookbook/
4. **No estás seguro del comportamiento de un comando** → consulta la referencia CLI
5. **Quieres ver la implementación concreta de un paquete** → busca el README del paquete correspondiente en packages/
