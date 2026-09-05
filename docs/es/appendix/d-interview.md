---
title: Apéndice D · Chuleta de Preguntas de Entrevista
description: 8 preguntas de entrevista de alta frecuencia organizadas a partir del libro azul
---

# Apéndice D · Chuleta de Preguntas de Entrevista

<div class="chapter-meta">
  <span class="cm-item"><span class="cm-k">Número de palabras</span><span class="cm-v">~2470 palabras</span></span>
  <span class="cm-item"><span class="cm-k">Tiempo</span><span class="cm-v">~15 min</span></span>
  <span class="cm-item"><span class="cm-k">Nivel</span><span class="cm-v hl">Autoevaluación tras el estudio</span></span>
</div>

Tras terminar todo el libro azul, usa estas 8 preguntas para autoevaluarte. Cada pregunta incluye el punto evaluado y la línea de respuesta, no es una respuesta estándar: en una entrevista, explicar tu propio entendimiento importa más que recitar.

## Preguntas de Concepto

### P1: ¿Presenta DeepSeek Harness en un minuto?

**Punto evaluado**: sensibilidad técnica, si realmente lo has usado y no solo leído las noticias.

**Línea de respuesta**: el framework de runtime para Agent de código abierto oficial de DeepSeek, licencia MIT, la idea central es "todo es un plugin": la adaptación de modelos, el registro de herramientas, la gestión de sesiones, la ejecución en sandbox e incluso el propio Agent loop son enchufables, ejecutándose sobre el sistema de plugins Cordis. A diferencia de bibliotecas tipo LangChain que te dan "un montón de piezas para que las ensambles tú", dsh es un runtime completo, con el bucle principal, la sesión, el sandbox y la programación de herramientas ya integrados; los desarrolladores solo necesitan elegir plugins y escribir configuración. Actualmente está en developer preview, e iterando con rapidez.

### P2: ¿Qué significa realmente el "todo es un plugin" de dsh? ¿En qué se diferencia de la modularidad ordinaria?

**Punto evaluado**: profundidad de comprensión de la arquitectura, si puedes articular la diferencia esencial entre plugginización y modularidad.

**Línea de respuesta**: no es algo tan simple como "dividir el código en módulos". La plugginización de dsh tiene tres características: primera, sin núcleo privilegiado: incluso algo tan fundamental como el Agent Loop es un plugin, en teoría intercambiable por completo; segunda, carga dinámica en runtime: qué plugins se cargan lo decide la configuración del Profile al iniciar, no hardcodeado en tiempo de compilación; tercera, efectos secundarios reversibles: cada modificación que un plugin aplica al sistema puede revertirse en orden inverso, el sistema queda limpio tras la desinstalación. Por debajo se apoya en las tres primitivas de Cordis: Service (registro de servicios), Event (eventos tipados), Effect (efectos secundarios reversibles).

### P3: ¿Qué relación hay entre Profile y Bundle?

**Punto evaluado**: si puedes explicar la configuración por capas de dsh.

**Línea de respuesta**: Bundle es la unidad de distribución: un paquete npm, declara qué plugins y configuración aporta al runtime. Profile es la combinación en ejecución: se almacena en `$DSH_HOME/profiles/<nombre>/`, es un conjunto de Bundles, decide "cómo luce este árbol de plugins". web y headless son ambos Profiles, su diferencia está simplemente en qué Bundles apilan. Puedes pensar en Bundle como "un plato" y en Profile como "una mesa ya encargada": el mismo plato puede aparecer en mesas distintas, cada mesa con su propia combinación.

### P4: ¿Para qué escenarios es adecuado cada uno de los cuatro modos de ejecución de dsh?

**Punto evaluado**: si realmente has usado distintos modos, y no solo ejecutado la Web UI.

**Línea de respuesta**: el modo Web es diálogo interactivo, para el desarrollo diario, la depuración y observar al Agent trabajar; el modo Headless son tareas de un solo uso, ejecutar y terminar, adecuado para scripts de automatización, CI/CD y tareas programadas; el modo SDK es invocación desde dentro de tu propio programa, adecuado para integrar capacidades de Agent en sistemas existentes; también está el modo Minimal, que conserva solo el Agent loop más esencial, adecuado para estudiar el mecanismo subyacente o hacer personalizaciones profundas. Los cuatro modos comparten la misma capa de plugins, la diferencia está simplemente en qué Bundle se apila: esto también es una manifestación directa del "todo es un plugin".

## Preguntas de Práctica

### P5: ¿Cómo funciona el pipeline de llamadas a herramientas de dsh? ¿Por qué se diseña como pipeline en vez de ejecución directa?

**Punto evaluado**: comprensión del mecanismo central, si puedes enunciar la intención de diseño.

**Línea de respuesta**: tras decir el modelo que quiere llamar a una herramienta, no se ejecuta directamente, sino que pasa por un pipeline de varias etapas: primero por la política pre-execute (puede interceptar, modificar, denegar), luego por la aprobación (cuando se superan los permisos aparece un cuadro preguntando al usuario), después entra en el sandbox para ejecutar (aislamiento a nivel de kernel del SO, limita a qué archivos puede tocar), el resultado pasa luego por post-execute (puede registrar, transformar, auditar) y finalmente se devuelve al modelo. El motivo de diseñarlo como pipeline es que cada etapa puede ser interceptada y mejorada por plugins: si quieres añadir logs de auditoría, una whitelist de herramientas o cambiar parámetros de ejecución, no hace falta modificar el código central, basta con colgar un plugin. Esto también es el "todo es un plugin" encarnado en la capa de ejecución.

### P6: ¿Qué diferencia hay entre MCP y Skill? ¿Cuándo usar cada uno?

**Punto evaluado**: si puedes distinguir los dos tipos de extensión de capacidad.

**Línea de respuesta**: MCP es un protocolo estándar para conectar herramientas externas: por ejemplo, permitir que el Agent opere GitHub, raspe la web o consulte bases de datos; son "capacidades de acción", expuestas a través del servidor MCP como un conjunto de funciones de herramienta, el Agent llama a la herramienta y obtiene el resultado. Skill son instrucciones escritas para el modelo: le indican "cuando te encuentres con este tipo de tarea, sigue estos pasos", por ejemplo, una checklist de revisión de código o una plantilla de informe semanal; no añade herramientas nuevas, sino que cambia el comportamiento del modelo. En resumen: MCP le da al Agent un par más de manos, Skill le da al Agent un manual de instrucciones más. Para conectar sistemas externos usa MCP, para固化 flujos de trabajo usa Skill.

### P7: ¿Cómo está diseñado el modelo de seguridad de dsh?

**Punto evaluado**: si te preocupas por la seguridad, si puedes exponer el enfoque de protección por capas.

**Línea de respuesta**: tres capas de protección. La primera capa es el sandbox de archivos: aislamiento a nivel de kernel del SO, no comprobación en JS, con tres niveles de permisos: read-only (solo lectura), workspace-write (por defecto, solo puede escribir en el workspace actual), danger-full-access (sin restricciones). La segunda capa es la aprobación de operaciones: cuando el Agent quiere hacer algo más allá de sus permisos, aparece un cuadro preguntándote, permitir una vez significa una vez, no permanente. La tercera capa son las claves write-only: tras guardar la API Key, la interfaz no muestra el texto plano, solo un descriptor censurado; el texto plano solo está en el `.credentials.yaml` local. La idea central es "restringido por defecto, permitir bajo demanda", no "dar todos los permisos y confiar en la prudencia del usuario".

## Pregunta Abierta

### P8: Si tuvieras que elegir tecnología para tu equipo, ¿cuáles serían las ventajas y desventajas de dsh frente a Claude Code y Codex?

**Punto evaluado**: capacidad de selección tecnológica, si puedes analizar con objetividad en vez de hacer fanatismo.

**Línea de respuesta**: las ventajas de dsh: primera, completamente de código abierto, licencia MIT, sin dependencia de ningún proveedor, los modelos se pueden enchufar libremente: DeepSeek, OpenAI, modelos locales, todo funciona; segunda, el mayor grado de plugginización, incluso el Agent loop se puede intercambiar, amplio espacio de personalización; tercera, los modos Headless y SDK son adecuados para escenarios de automatización e integración, no es solo una herramienta de chat. Desventajas: primera, demasiado nuevo, en developer preview, API inestable, documentación incompleta, ecosistema comunitario aún en crecimiento; segunda, la experiencia de la Web UI por defecto aún queda lejos de Claude Code y Codex, muchas capacidades hay que complementarlas instalando plugins; tercera, si en el equipo nadie está dispuesto a trastear con configuración y plugins, la experiencia out-of-the-box no es tan buena como la de los productos comerciales. Sugerencia de selección: si el equipo tiene necesidades de personalización, quiere construir su propia infraestructura de Agent y no le importa tropezar con algunos baches, elige dsh; para la programación diaria individual buscando tranquilidad, los productos comerciales están más maduros.
