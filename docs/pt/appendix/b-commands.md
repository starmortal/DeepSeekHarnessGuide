---
title: Apêndice B · Folha de Referência de Comandos
description: Instalação / inicialização / plugin / configuração / comandos slash
---

# Apêndice B · Folha de Referência de Comandos

<div class="chapter-meta">
  <span class="cm-item"><span class="cm-k">Número de palavras</span><span class="cm-v">~540 palavras</span></span>
  <span class="cm-item"><span class="cm-k">Tempo</span><span class="cm-v">~8 min</span></span>
  <span class="cm-item"><span class="cm-k">Nível</span><span class="cm-v hl">Referência</span></span>
</div>

Comandos que você usa diariamente com o dsh, agrupados por cenário. Para aprofundar, vá ao capítulo correspondente.

## Instalação & Atualização

```bash
# Instalação global do dsh (recomendado para iniciantes)
npm install -g @deepseek-ai/dsh

# Verificar versão
dsh --version

# Atualizar para a versão mais recente
npm install -g @deepseek-ai/dsh@latest

# Executar sem instalar (sempre usa o pacote mais recente)
npx @deepseek-ai/dsh web
```

> `npx` puxa o pacote mais recente a cada vez, a instalação global não atualiza automaticamente. Para fixar uma versão use a instalação global, para sempre ter a mais recente use npx.

## Inicialização

```bash
# Iniciar a Web UI (mais comum, porta padrão 3080)
dsh web

# Especificar porta para iniciar
dsh web --port 8080

# Iniciar headless, executar uma tarefa e sair
dsh --profile headless "Execute os testes do diretório atual e resuma as falhas"

# Iniciar um profile específico
dsh --profile <profile-name>

# Iniciar com configuração extra (método patch)
dsh web --patch ./my-plugin/cordis.yml
```

## Gerenciamento de Plugins

```bash
# Listar plugins instalados no profile web
dsh plugin --profile web list

# Instalar um plugin (pacote npm)
dsh plugin --profile web add <package-name>

# Instalar um plugin (fonte GitHub)
dsh plugin --profile web add github:<username>/<repo-name>

# Instalar um plugin (caminho local)
dsh plugin --profile web add ./my-plugin

# Instalar um plugin (pacote tgz)
dsh plugin --profile web add https://example.com/plugin.tgz

# Remover um plugin
dsh plugin --profile web remove <package-name>
```

> Após instalar um plugin, você precisa reiniciar o profile correspondente para que tenha efeito (mudanças em bundle não recarregam a quente).

## Configuração & Depuração

```bash
# Imprimir a árvore de configuração completa do profile web (para "de onde vem esse comportamento")
dsh --profile web --dump-config

# Imprimir a árvore de configuração do profile headless
dsh --profile headless --dump-config

# Iniciar com um patch e ver a configuração
dsh web --patch ./my-config.yml --dump-config
```

> A saída de `--dump-config` é texto simples, você pode jogá-la para a IA durante o troubleshooting e deixá-la escanear a árvore de configuração em busca de problemas.

## Variáveis de Ambiente

```bash
# Diretório raiz de configuração do dsh (padrão ~/.dsh)
$DSH_HOME

# API Key (maior prioridade, sobrescreve .credentials.yaml)
$DEEPSEEK_API_KEY

# API Key de modelo local (LM Studio etc., defina qualquer valor)
$LM_STUDIO_API_KEY
```

## Comandos Slash da Web UI

Digite `/` na caixa de entrada para abrir uma lista pop-up dos comandos disponíveis no momento.

| Comando | Efeito |
|---|---|
| `/compact` | Comprimir manualmente o contexto do diálogo atual, resumir o histórico inicial em um digest |
| `/permission` | Ver ou alternar o modo de permissão da session atual (read-only / workspace-write / danger-full-access), sem argumento abre uma caixa de seleção |
| `/model` | Trocar modelo, agrupado por provider, aplica o reasoning effort padrão do modelo selecionado |
| `/goal` | Gerenciamento de goals: criar / ver / editar / pausar / retomar / limpar objetivos de longo prazo (ex. `/goal pause`, `/goal clear`) |

> Versões diferentes, com plugins diferentes instalados, a lista de comandos pode variar. Digite `/` para ver o que está disponível.

## Combinações Comuns

```bash
# Primeiro dia como iniciante: instalar e executar
npm install -g @deepseek-ai/dsh
dsh web

# Pacote de troubleshooting: verificar versão → verificar config → verificar plugins → reiniciar
dsh --version
dsh --profile web --dump-config
dsh plugin --profile web list
dsh web

# headless executa uma tarefa one-shot
dsh --profile headless "Resuma a arquitetura deste repo, escreva como markdown"
```
