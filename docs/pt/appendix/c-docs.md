---
title: Apêndice C · Índice da Documentação Oficial
description: Arquitetura / subsystems / cookbook / referência CLI / READMEs por pacote
---

# Apêndice C · Índice da Documentação Oficial

<div class="chapter-meta">
  <span class="cm-item"><span class="cm-k">Número de palavras</span><span class="cm-v">~1.710 palavras</span></span>
  <span class="cm-item"><span class="cm-k">Tempo</span><span class="cm-v">~5 min</span></span>
  <span class="cm-item"><span class="cm-k">Nível</span><span class="cm-v hl">Referência</span></span>
</div>

A documentação do repo oficial do dsh está toda no diretório `docs/` do [GitHub repo](https://github.com/deepseek-ai/deepseek-harness) e no README de cada pacote. Categorizada por uso, pule direto quando precisar se aprofundar em um tópico.

## Documentos Centrais

| Documento | Conteúdo | Quando ler |
|---|---|---|
| [README](https://github.com/deepseek-ai/deepseek-harness) | Visão geral do projeto, filosofia de design, início rápido, quatro modos de runtime | Primeiro contato, quer entender rapidamente o quadro geral |
| [architecture.md](https://github.com/deepseek-ai/deepseek-harness/blob/master/docs/architecture.md) | Design de arquitetura geral: framework de plugins Cordis, árvore de plugins, Profile, Bundle, ordem de carregamento de configuração em camadas | Quer entender exatamente como "tudo é um plugin" é implementado |
| [Root AGENTS.md](https://github.com/deepseek-ai/deepseek-harness/blob/master/AGENTS.md) | Estrutura do repo, organização de diretórios por pacote, configuração do ambiente de dev | Quer ler o código-fonte ou submeter um PR para o repo oficial |
| [docs/AGENTS.md](https://github.com/deepseek-ai/deepseek-harness/blob/master/docs/AGENTS.md) | Manual de dev da documentação: especifica o que cada tipo de documento deve e não deve conter, padrão de camadas de doc | Quer submeter um PR para a documentação oficial, ou aprender as convenções de organização da documentação |

## Documentos de Subsystems (subsystems/)

A equipe oficial escreveu um documento separado para cada subsystem central, mais de 40 no total. Cada um explica: o que é esse subsystem, quais estruturas de dados flui, quais serviços ctx e eventos fornece. Todos estão no diretório [docs/subsystems/](https://github.com/deepseek-ai/deepseek-harness/tree/master/docs/subsystems).

| Subsystem | O que cobre |
|---|---|
| **session** | Gerenciamento de Session: criar, retomar, fork, persistência, stream de eventos |
| **agent-loop** | Agent loop: mecanismo de iteração pensar → chamar tool → ver resultado |
| **tools** | Registro de tools, Schema, pipeline de execução, approval, sandbox |
| **llm** | Adaptação de modelo, Provider, request/response, cache |
| **skills** | Descoberta, carregamento, mecanismo de invocação de Skill |
| **subagent** | Agendamento de subagent, dois modos (spawn / fork), agregação de resultados |
| **workflow** | Orquestração de Workflow, cadeias de múltiplos passos |
| **sandbox** | Sandbox de arquivos, três níveis de permissão, fluxo de approval |
| **trajectory** | Registro de Trajectory, replay, exportação |
| **credentials** | Gerenciamento de credenciais, armazenamento write-only, redação |
| **mcp** | Cliente MCP, integração de servidor, bridging de tools |
| **compaction** | Compressão de contexto, timing de disparo, geração de resumo |

> Documentos de Subsystems estão em ordem alfabética; quando precisar se aprofundar em um mecanismo, encontre o arquivo correspondente diretamente.

## Cookbook

Os tutoriais hands-on passo a passo oficiais estão no diretório [docs/cookbook/](https://github.com/deepseek-ai/deepseek-harness/tree/master/docs/cookbook).

| Tutorial | O que ensina |
|---|---|
| **Add a package** | Como adicionar uma nova dependência npm ao dsh |
| **Add a tool** | Como escrever uma tool customizada e registrá-la com o Agent |
| **Add an LLM adapter** | Como conectar um novo provider de modelo |
| **Extend plugin forms** | Como escrever plugins client, plugins UI, bundles |
| **Custom Profile** | Como criar uma combinação de profile totalmente nova |

> Cookbook são tutoriais "siga junto e funciona", mais hands-on do que os documentos de subsystems.

## Referência CLI

[apps/cli/reference/README.md](https://github.com/deepseek-ai/deepseek-harness/blob/master/apps/cli/reference/README.md) — a referência completa de comportamento da linha de comando do dsh, incluindo parsing de argumentos, fluxo de inicialização de profile, comportamento exato de cada subcomando. Consulte isto ao escrever scripts ou troubleshooting.

## READMEs por Pacote

O repo é um monorepo, com 49 grupos em `packages/`, cada um com seu próprio README. Os mais usados:

| Pacote | Papel |
|---|---|
| `@deepseek-ai/dsh` | Entry principal, binário CLI |
| `@deepseek-ai/cordis` | Framework de plugins subjacente |
| `@deepseek-ai/dsh-web-app` | Front-end da Web UI |
| `@deepseek-ai/dsh-headless` | Runtime headless |
| `@deepseek-ai/dsh-mcp-client` | Plugin cliente MCP |
| `@deepseek-ai/dsh-tool-skill` | Plugin tool de Skill |

## Como usar este índice

1. **Quer entender um conceito** → leia README e architecture.md primeiro
2. **Quer entender um mecanismo** → encontre o subsystem correspondente em subsystems/
3. **Quer fazer algo seguindo o tutorial** → encontre o tutorial correspondente em cookbook/
4. **Inseguro sobre comportamento de comando** → verifique a referência CLI
5. **Quer ver a implementação de um pacote específico** → encontre o README do pacote correspondente em packages/
