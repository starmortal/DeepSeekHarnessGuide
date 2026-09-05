---
title: Apêndice A · Glossário
description: "Cinco categorias de termos centrais: arquitetura / runtime / ferramentas / segurança / modelo"
---

# Apêndice A · Glossário

<div class="chapter-meta">
  <span class="cm-item"><span class="cm-k">Número de palavras</span><span class="cm-v">~2.570 palavras</span></span>
  <span class="cm-item"><span class="cm-k">Tempo</span><span class="cm-v">~10 min</span></span>
  <span class="cm-item"><span class="cm-k">Nível</span><span class="cm-v hl">Referência</span></span>
</div>

Os termos que você encontra ao ler o blue book ou a documentação oficial estão organizados por categoria aqui. Cada termo recebe uma explicação em uma linha, sem elaborações; para aprofundar, vá ao capítulo correspondente.

## Arquitetura

| Termo | Explicação em uma linha |
|---|---|
| **Cordis** | O framework de plugins na camada base do dsh, fornecendo três primitivas: registro de serviços, eventos tipados e side effects reversíveis. Todas as capacidades do dsh rodam sobre ele |
| **Plugin** | A unidade mínima de capacidade do dsh, um módulo que exporta uma função `apply(ctx)`. Carregado na inicialização, registra tools, escuta eventos e fornece serviços via ctx |
| **Bundle** | O formato de distribuição de um plugin, um pacote npm, declara quais plugins e configuração ele contribui para o runtime. Instalar um plugin é essencialmente instalar um bundle |
| **Profile** | Uma receita de combinação para um conjunto de plugins, decide "como essa árvore de plugins se parece". web, headless são ambos profiles, armazenados em `$DSH_HOME/profiles/` |
| **Context (ctx)** | O objeto de contexto que um plugin recebe ao ser carregado, onipotente — registrar tools, chamar serviços, escutar eventos, ler/escrever configuração, tudo depende dele |
| **Service** | Capacidade reutilizável que um plugin fornece via ctx, pode ser chamada por outros plugins. Por exemplo, serviço de session, serviço de registro de tools |
| **Event** | A forma como os plugins se comunicam, padrão pub/sub. Por exemplo, antes da execução de uma tool o evento `tools/pre-execute` é disparado, outros plugins podem se inscrever para interceptar |
| **Effect** | A modificação de um plugin no runtime (registrar tools, adicionar configuração etc.). Quando o plugin é descarregado, é revertido na ordem inversa, garantindo restauração limpa |
| **Seam** | O contrato de interface entre plugins, um plugin declara "preciso dessa capacidade", outro fornece "tenho essa capacidade", o sistema faz o match automaticamente |

## Runtime

| Termo | Explicação em uma linha |
|---|---|
| **Agent Loop** | O loop de iteração "pensar → chamar tool → ver resultado → pensar de novo", até a tarefa ser concluída ou as condições de terminação serem atendidas. A diferença essencial entre um Agent e um chatbot está aqui |
| **Turn** | De o usuário enviar uma mensagem até o Agent dar a resposta final, isso é um turn. Internamente um turn pode conter múltiplas chamadas de tools |
| **Step** | Uma iteração no Agent loop, pode ser uma chamada de modelo ou uma chamada de tool. Um turn = múltiplos steps |
| **Session** | Um contexto de diálogo completo, vinculado a um workspace, persistido em armazenamento. Feche o dsh e reabra, ainda é possível continuar |
| **Trajectory** | O registro completo de execução de uma session — system prompts, requisições ao modelo, chamadas de tools, agendamento de subagents, tudo registrado em uma linha do tempo |
| **Headless** | Um modo de execução que não precisa de interface, um único comando executa uma tarefa e sai. Adequado para automação, CI/CD, tarefas agendadas |
| **Web UI** | A interface do navegador, diálogo interativo. Iniciada com `dsh web`, endereço padrão `http://127.0.0.1:3080` |
| **Fork** | Abre um novo caminho em algum nó histórico de uma session, a session original é preservada. Adequado para "deixe-me tentar outra abordagem" |
| **Compaction** | Resume o diálogo inicial em um digest, substitui o histórico original, libera espaço de contexto. Disparado manualmente com o comando `/compact` |

## Tools & Capacidades

| Termo | Explicação em uma linha |
|---|---|
| **Tool** | Uma função que o Agent pode chamar, por exemplo, ler arquivo, executar comando, pesquisar na web. Cada tool tem um Schema (definição de parâmetros) |
| **Tool Schema** | A definição de parâmetros da tool, diz ao modelo quais parâmetros essa tool aceita, quais tipos. O modelo constrói as chamadas de acordo com o Schema |
| **MCP (Model Context Protocol)** | Model Context Protocol, um conjunto de interfaces padrão, permite que o Agent se conecte a servidores externos de tools. O dsh suporta isso através do plugin `dsh-mcp-client` |
| **MCP Server** | Um serviço externo que fornece um conjunto de tools, por exemplo, Firecrawl (raspar web), GitHub (operar repositórios). Quando o dsh se conecta, o Agent pode usar essas tools |
| **Skill** | Um conjunto de instruções escritas para o modelo, diz a ele "quando você encontrar esse tipo de tarefa, siga este conjunto de passos". Armazenado no workspace ou diretório do usuário, o modelo carrega sob demanda |
| **Subagent** | Um Agent independente despachado pelo agente principal para fazer subtarefas, retorna o resultado quando termina. Dois modos: subagent (sem histórico) e subagent_fork (com histórico) |
| **Workflow** | Orquestração de múltiplos passos, encadeia múltiplas tarefas em ordem ou ramifica. Rotinas fixas de passo único usam Skill, cadeias de múltiplos passos usam Workflow |
| **Provider** | Um provedor de API de modelos, por exemplo, DeepSeek, OpenAI, Anthropic. O dsh conecta diferentes providers através do Model Adapter |

## Segurança

| Termo | Explicação em uma linha |
|---|---|
| **Sandbox** | Um mecanismo de isolamento que limita quais arquivos e recursos o Agent pode acessar. Nível de kernel do SO, não verificação em JS, o modelo não pode contorná-lo |
| **Permission** | Três níveis: read-only (somente leitura), workspace-write (padrão, só pode escrever no workspace), danger-full-access (sem restrições) |
| **Approval** | Quando o Agent quer fazer algo além das suas permissões, um pop-up pergunta você. Permitir uma vez significa uma vez, não permanente |
| **Write-only** | A forma como API Keys são armazenadas — após salvar a interface não ecoa o texto simples de volta, apenas mostra um descritor mascarado. O texto simples está apenas no `.credentials.yaml` local |

## Modelo

| Termo | Explicação em uma linha |
|---|---|
| **Model Adapter** | Um plugin que unifica as APIs de diferentes providers de modelos na interface padrão interna do dsh. Trocar de modelo = trocar de adapter, sem necessidade de mudar outro código |
| **LLM (Large Language Model)** | O núcleo responsável por pensar e gerar texto. O dsh em si não inclui um modelo, apenas orquestra |
| **KV Cache** | O modelo faz cache dos prefixos já computados durante a inferência, requisições subsequentes com o mesmo prefixo reutilizam diretamente, sem necessidade de recomputar. As partes em cache são cobradas muito abaixo do preço normal |
| **Context Window** | O número máximo de tokens que o modelo pode processar de uma vez. Qualquer coisa além disso não será enviada ao modelo, equivalente a "esquecer" |
| **Token** | A unidade básica de processamento de texto do modelo, chinês ~1 caractere = 1,5 tokens, inglês ~4 caracteres = 1 token. Tanto o billing quanto os limites de contexto são baseados em tokens |
