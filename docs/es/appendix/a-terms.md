---
title: Apéndice A · Glosario
description: "Cinco categorías de términos clave: arquitectura / ejecución / herramientas / seguridad / modelo"
---

# Apéndice A · Glosario

<div class="chapter-meta">
  <span class="cm-item"><span class="cm-k">Número de palabras</span><span class="cm-v">~2570 palabras</span></span>
  <span class="cm-item"><span class="cm-k">Tiempo</span><span class="cm-v">~10 min</span></span>
  <span class="cm-item"><span class="cm-k">Nivel</span><span class="cm-v hl">Referencia</span></span>
</div>

Los términos que encuentres al leer el libro azul o la documentación oficial se organizan aquí por categoría. Cada término recibe una explicación de una línea sin desarrollo adicional; para profundizar, consulta el capítulo correspondiente.

## Arquitectura

| Término | Explicación de una línea |
|---|---|
| **Cordis** | El framework de plugins en la capa base de dsh, que aporta tres primitivas: registro de servicios, eventos tipados y efectos secundarios reversibles. Todas las capacidades de dsh se ejecutan sobre él |
| **Plugin** | La unidad mínima de capacidad de dsh, un módulo que exporta una función `apply(ctx)`. Se carga al iniciar, registra herramientas, escucha eventos y provee servicios mediante ctx |
| **Bundle** | El formato de distribución de un plugin, un paquete npm, declara qué plugins y configuración aporta al runtime. Instalar un plugin equivale esencialmente a instalar un bundle |
| **Profile** | Una receta de combinación para un conjunto de plugins, decide "cómo luce este árbol de plugins". web y headless son profiles, se almacenan en `$DSH_HOME/profiles/` |
| **Context (ctx)** | El objeto de contexto que recibe un plugin al cargarse, todopoderoso: registrar herramientas, llamar servicios, escuchar eventos, leer/escribir configuración, todo depende de él |
| **Service** | Capacidad reutilizable que un plugin provee mediante ctx, invocable por otros plugins. Por ejemplo, el servicio de sesión, el servicio de registro de herramientas |
| **Event** | La forma en que los plugins se comunican, patrón pub/sub. Por ejemplo, antes de ejecutar una herramienta se dispara el evento `tools/pre-execute`, otros plugins pueden suscribirse para interceptar |
| **Effect** | La modificación que un plugin aplica al runtime (registrar herramientas, añadir configuración, etc.). Cuando el plugin se descarga, se revierte en orden inverso, garantizando una restauración limpia |
| **Seam** | El contrato de interfaz entre plugins, un plugin declara "necesito esta capacidad", otro provee "tengo esta capacidad", el sistema los empareja automáticamente |

## Ejecución

| Término | Explicación de una línea |
|---|---|
| **Agent Loop** | El bucle de iteración "pensar → llamar herramienta → ver resultado → pensar de nuevo", hasta que la tarea termina o se cumplen las condiciones de parada. La diferencia esencial entre un Agent y un chatbot está aquí |
| **Turn** | Desde que el usuario envía un mensaje hasta que el Agent da la respuesta final, eso es un turno. Internamente un turno puede contener múltiples llamadas a herramientas |
| **Step** | Una iteración dentro del Agent loop, puede ser una llamada al modelo o una llamada a una herramienta. Un turno = varios pasos |
| **Session** | Un contexto de diálogo completo, vinculado a un workspace, persistido en almacenamiento. Cierra dsh y vuelve a abrir, se puede continuar |
| **Trajectory** | El registro completo de ejecución de una sesión: prompts del sistema, peticiones al modelo, llamadas a herramientas, programación de subagents, todo registrado en una línea de tiempo |
| **Headless** | Un modo de ejecución que no necesita interfaz, un solo comando ejecuta una tarea y termina. Adecuado para automatización, CI/CD, tareas programadas |
| **Web UI** | La interfaz de navegador, diálogo interactivo. Se inicia con `dsh web`, dirección por defecto `http://127.0.0.1:3080` |
| **Fork** | Abrir un nuevo camino en algún nodo histórico de una sesión, la sesión original se conserva. Adecuado para "voy a probar otro enfoque" |
| **Compaction** | Resumir el diálogo temprano en un compendio, reemplazar el historial original, liberar espacio de contexto. Se activa manualmente con el comando `/compact` |

## Herramientas y Capacidades

| Término | Explicación de una línea |
|---|---|
| **Tool** | Una función que el Agent puede llamar, por ejemplo, leer archivos, ejecutar comandos, buscar en la web. Cada herramienta tiene un Schema (definición de parámetros) |
| **Tool Schema** | La definición de parámetros de la herramienta, indica al modelo qué parámetros acepta esta herramienta y de qué tipos. El modelo construye las llamadas según el Schema |
| **MCP (Model Context Protocol)** | Protocolo de Contexto de Modelo, un conjunto de interfaces estándar, permite al Agent conectarse a servidores externos de herramientas. dsh lo soporta mediante el plugin `dsh-mcp-client` |
| **MCP Server** | Un servicio externo que provee un conjunto de herramientas, por ejemplo, Firecrawl (raspar la web), GitHub (operar repos). Una vez que dsh se conecta, el Agent puede usar estas herramientas |
| **Skill** | Un conjunto de instrucciones escritas para el modelo, le indica "cuando te encuentres con este tipo de tarea, sigue estos pasos". Se almacena en el workspace o en el directorio de usuario, el modelo lo carga bajo demanda |
| **Subagent** | Un Agent independiente enviado por el agent principal para realizar subtareas, devuelve el resultado al terminar. Dos modos: subagent (sin historial) y subagent_fork (con historial) |
| **Workflow** | Orquestación de múltiples pasos, encadena varias tareas en orden o con bifurcaciones. Para rutinas fijas de un solo paso usa Skill, para cadenas de múltiples pasos usa Workflow |
| **Provider** | Un proveedor de API de modelos, por ejemplo, DeepSeek, OpenAI, Anthropic. dsh conecta distintos providers mediante Model Adapter |

## Seguridad

| Término | Explicación de una línea |
|---|---|
| **Sandbox** | Un mecanismo de aislamiento que limita a qué archivos y recursos puede acceder el Agent. A nivel de kernel del SO, no comprobación en JS, el modelo no puede saltárselo |
| **Permission** | Tres niveles: read-only (solo lectura), workspace-write (por defecto, solo puede escribir en el workspace), danger-full-access (sin restricciones) |
| **Approval** | Cuando el Agent quiere hacer algo más allá de sus permisos, aparece un cuadro de diálogo preguntándote. Permitir una vez significa una vez, no permanente |
| **Write-only** | La forma en que se almacenan las API Keys: tras guardar, la interfaz no muestra el texto plano, solo un descriptor censurado. El texto plano solo está en el `.credentials.yaml` local |

## Modelo

| Término | Explicación de una línea |
|---|---|
| **Model Adapter** | Un plugin que unifica las APIs de distintos proveedores de modelos en la interfaz estándar interna de dsh. Cambiar de modelo = cambiar de adapter, sin necesidad de modificar otro código |
| **LLM (Large Language Model)** | El núcleo responsable de pensar y generar texto. dsh en sí no incluye un modelo, solo lo orquesta |
| **KV Cache** | El modelo almacena en caché los prefijos ya computados durante la inferencia, las peticiones posteriores con el mismo prefijo los reutilizan directamente, sin recalcular. Las partes que aciertan se facturan a un precio muy inferior al normal |
| **Context Window** | El número máximo de tokens que el modelo puede procesar a la vez. Lo que sobrepase no se envía al modelo, equivale a "olvidar" |
| **Token** | La unidad básica de procesamiento de texto del modelo, en chino ~1 carácter = 1.5 tokens, en inglés ~4 caracteres = 1 token. Tanto la facturación como los límites de contexto se basan en tokens |
