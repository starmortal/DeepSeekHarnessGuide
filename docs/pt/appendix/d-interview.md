---
title: Apêndice D · Folha de Perguntas e Respostas de Entrevista
description: 8 perguntas de entrevista de alta frequência organizadas a partir do blue book
---

# Apêndice D · Folha de Perguntas e Respostas de Entrevista

<div class="chapter-meta">
  <span class="cm-item"><span class="cm-k">Número de palavras</span><span class="cm-v">~2.470 palavras</span></span>
  <span class="cm-item"><span class="cm-k">Tempo</span><span class="cm-v">~15 min</span></span>
  <span class="cm-item"><span class="cm-k">Nível</span><span class="cm-v hl">Auto-teste após estudo</span></span>
</div>

Após terminar o blue book inteiro, use estas 8 perguntas para se auto-testar. Cada pergunta dá o ponto de teste e a direção da resposta, não uma resposta padrão — explicar seu próprio entendimento é mais importante do que recitar em uma entrevista.

## Perguntas de Conceito

### Q1: Apresente o DeepSeek Harness em um minuto?

**Ponto de teste**: Sensibilidade técnica, se você realmente usou em vez de apenas ler as notícias.

**Direção da resposta**: Framework de runtime Agent open-source oficial da DeepSeek, licença MIT, a ideia central é "tudo é um plugin" — adaptação de modelo, registro de tools, gerenciamento de session, execução em sandbox, até o próprio Agent loop é pluggable, rodando no sistema de plugins Cordis. Diferente de bibliotecas como LangChain que "te dão um monte de peças para montar", o dsh é um runtime completo, com loop principal, session, sandbox, agendamento de tools tudo embutido, desenvolvedores só precisam escolher plugins e escrever configuração. Atualmente em developer preview, iterando rápido.

### Q2: O que o "tudo é um plugin" do dsh realmente significa? Como é diferente da modularidade comum?

**Ponto de teste**: Profundidade de entendimento arquitetural, se você consegue articular a diferença essencial entre pluginnização e modularidade.

**Direção da resposta**: Não é tão simples quanto "dividir o código em módulos". A pluginnização do dsh tem três características: primeira, sem núcleo privilegiado — mesmo algo tão fundamental quanto o Agent Loop é um plugin, teoricamente substituível inteiramente; segunda, carregamento dinâmico em runtime — quais plugins carregar é decidido pela configuração de Profile na inicialização, não hardcoded em tempo de compilação; terceira, side effects reversíveis — toda modificação de um plugin no sistema pode ser revertida na ordem inversa, o sistema fica limpo após a desinstalação. Subjacente estão as três primitivas do Cordis: Service (registro de serviço), Event (eventos tipados), Effect (side effects reversíveis).

### Q3: Qual é a relação entre Profile e Bundle?

**Ponto de teste**: Se você consegue explicar o layering de configuração do dsh.

**Direção da resposta**: Bundle é a unidade de distribuição — um pacote npm, declara quais plugins e configuração ele contribui para o runtime. Profile é a combinação em execução — armazenado em `$DSH_HOME/profiles/<name>/`, é um conjunto de Bundles, decide "como essa árvore de plugins se parece". web, headless são ambos Profiles, sua diferença é apenas empilhar Bundles diferentes. Você pode pensar no Bundle como "um prato", Profile como "uma mesa ordenada de pratos" — o mesmo prato pode aparecer em mesas diferentes, a combinação de cada mesa é diferente.

### Q4: Quais cenários cada um dos quatro modos de runtime do dsh é adequado?

**Ponto de teste**: Se você realmente usou modos diferentes, não apenas rodou a Web UI.

**Direção da resposta**: Modo Web é diálogo interativo, para desenvolvimento diário, debugging, observar o Agent trabalhar; modo Headless é tarefas one-shot, executa e sai, adequado para scripts de automação, CI/CD, tarefas agendadas; modo SDK é chamar de dentro do seu próprio programa, adequado para integrar capacidades Agent em sistemas existentes; também há o modo Minimal, mantendo apenas o Agent loop mais central, adequado para estudar o mecanismo subjacente ou fazer personalização pesada. Os quatro modos compartilham a mesma camada de plugins, a diferença é apenas qual Bundle é empilhado — isso também é uma manifestação direta de "tudo é um plugin".

## Perguntas de Prática

### Q5: Como funciona o pipeline de chamada de tools do dsh? Por que projetar como pipeline em vez de execução direta?

**Ponto de teste**: Entendimento do mecanismo central, se você consegue declarar a intenção do design.

**Direção da resposta**: Depois que o modelo diz para chamar uma tool, não executa diretamente, mas passa por um pipeline de múltiplos estágios: primeiro pela política pre-execute (pode interceptar, modificar, negar), depois pela approval (pop-up pergunta o usuário quando além das permissões), então entra no sandbox para executar (isolamento de nível de kernel do SO, limita quais arquivos podem ser tocados), o resultado então passa pelo post-execute (pode registrar, transformar, auditar), finalmente retornado ao modelo. A razão de projetar como pipeline é que cada estágio pode ser interceptado e aumentado por plugins — quer adicionar logs de auditoria, quer adicionar uma whitelist de tools, quer mudar parâmetros de execução, sem necessidade de modificar código central, apenas pendurar um plugin. Isso também é "tudo é um plugin" incorporado na camada de execução.

### Q6: Qual é a diferença entre MCP e Skill? Quando usar qual?

**Ponto de teste**: Se você consegue distinguir os dois tipos de extensão de capacidade.

**Direção da resposta**: MCP é um protocolo padrão para conectar tools externas — ex. deixar o Agent operar GitHub, raspar web, consultar bancos de dados, essas são "capacidades de ação", expostas através do servidor MCP como um conjunto de funções de tools, o Agent chama a tool e obtém o resultado. Skill são instruções escritas para o modelo — diz a ele "quando você encontrar esse tipo de tarefa, siga este conjunto de passos", ex. checklist de code review, template de relatório semanal, não adiciona novas tools, mas muda o comportamento do modelo. Simplificando: MCP dá ao Agent mais um par de mãos, Skill dá ao Agent mais um manual de instruções. Precisa conectar sistemas externos use MCP, precisa solidificar workflows use Skill.

### Q7: Como o modelo de segurança do dsh é projetado?

**Ponto de teste**: Se você presta atenção à segurança, consegue declarar a abordagem de proteção multi-camada.

**Direção da resposta**: Três camadas de proteção. A primeira camada é o sandbox de arquivos — isolamento de nível de kernel do SO, não verificação em JS, três níveis de permissão: read-only (somente leitura), workspace-write (padrão, só pode escrever no workspace atual), danger-full-access (sem restrições). A segunda camada é a approval de operações — quando o Agent quer fazer algo além das permissões, um pop-up pergunta você, permitir uma vez significa uma vez, não permanente. A terceira camada são as keys write-only — após salvar a API Key, a interface não ecoa o texto simples de volta, apenas mostra um descritor mascarado, o texto simples está apenas no `.credentials.yaml` local. A ideia central é "restrito por padrão, permitir sob demanda", não "dar todas as permissões e depender da cautela do usuário".

## Pergunta Aberta

### Q8: Se você estivesse escolhendo tecnologia para sua equipe, quais são os prós e contras de dsh vs Claude Code vs Codex?

**Ponto de teste**: Capacidade de seleção de tecnologia, se você consegue analisar objetivamente em vez de ser fã.

**Direção da resposta**: Vantagens do dsh: primeiro, totalmente open source, licença MIT, sem vendor lock-in, modelos podem ser conectados livremente — DeepSeek, OpenAI, modelos locais todos funcionam; segundo, maior grau de pluginnização, até o Agent loop pode ser trocado, grande espaço de personalização; terceiro, modos Headless e SDK são adequados para cenários de automação e integração, não apenas uma ferramenta de chat. Desvantagens: primeiro, muito novo, em developer preview, API instável, docs incompletos, ecossistema da comunidade ainda crescendo; segundo, experiência padrão da Web UI ainda tem um gap comparado a Claude Code, Codex, muitas capacidades precisam ser suplementadas instalando plugins; terceiro, se ninguém na equipe está disposto a mexer com config e plugins, a experiência out-of-the-box não é tão boa quanto produtos comerciais. Sugestão de seleção: equipe tem necessidades de personalização, quer construir sua própria infraestrutura de Agent, não se importa com alguns solavancos, escolha dsh; coding diário individual para paz de espírito, produtos comerciais são mais maduros.
