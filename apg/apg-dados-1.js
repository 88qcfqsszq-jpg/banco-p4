/* APG · caso HIV/AIDS — módulos 1 a 4. Texto simples; **negrito** é interpretado pelo app. */
window.APG_DATA = window.APG_DATA || { casos: [] };
window.APG_DATA.casos.push({
  id: 'hiv',
  titulo: 'HIV e AIDS',
  sub: 'Tutoria · 3 objetivos: do vírus ao tratamento, à prevenção e ao cuidado integral',
  cor: '#d6455d',
  modulos: [
    {
      id: 'm1', n: 1, ic: '🧬', t: 'Epidemiologia, conceitos e vírus', obj: 'Objetivo 1',
      ler: [
        { t: 'HIV × AIDS', d: '**HIV é o vírus; AIDS é a fase avançada** (CD4 abaixo de 200 e/ou doença definidora). O corte de 200 existe porque, abaixo dele, germes que o corpo controla sem esforço (como Pneumocystis e Toxoplasma) passam a causar doença. Dá para ter HIV por anos sem aids, e com TARV a maioria nunca chega lá.' },
        { t: 'História natural: uma disputa', d: '**Aguda:** pico de carga viral e queda transitória do CD4. **Crônica:** os linfócitos CD8 freiam o vírus até um *set point* (quanto mais alto, mais rápida a progressão); bilhões de vírions são produzidos e destruídos por dia, e o corpo repõe o CD4. **Avançada:** a reposição se esgota, o CD4 despenca, a carga viral sobe e surgem oportunistas.' },
        { t: 'Um retrovírus: RNA vira DNA', d: 'O fluxo normal é DNA → RNA → proteína. O HIV faz **RNA → DNA** com a **transcriptase reversa**, e esse DNA se **integra ao genoma** da célula. Daí em diante o vírus é copiado junto com a célula: é **permanente**. Como a enzima só existe no vírus, ela é um ótimo alvo de remédio.' },
        { t: 'Estrutura e enzimas, cada uma com seu porquê', d: '**gp120** é a chave (liga CD4 e depois CCR5/CXCR4); **gp41** funde o vírus à célula; **p24** forma o capsídeo e aparece cedo no sangue (por isso o teste de 4ª geração a detecta). **Transcriptase reversa** erra muito e não corrige: gera mutações e resistência. **Integrase** cria o provírus (sem cura). **Protease** corta o “colar” de proteínas para o vírion amadurecer.' },
        { t: 'Por que atacar o CD4 desmonta tudo', d: 'O CD4 é o **maestro** da imunidade celular: ativa CD8 (que matam células infectadas), linfócitos B e macrófagos. Macrófagos e células dendríticas morrem menos e viram **reservatórios** que levam o vírus aos linfonodos. Vírus **R5** (CCR5) dominam no início; a troca para **X4** (CXCR4) costuma acompanhar a progressão.' },
        { t: 'HIV-1 × HIV-2 e a epidemia', d: 'O HIV-2 (África Ocidental) é menos transmissível, progride mais devagar e é **naturalmente resistente aos ITRNN** (a “bolsa” da enzima é diferente). No Brasil há cerca de 1 milhão de pessoas vivendo com HIV; a epidemia é **concentrada** em populações-chave (HSH, pessoas trans, profissionais do sexo, pessoas que usam drogas injetáveis, privadas de liberdade), onde há mais exposição e menos acesso.' }
      ],
      explique: {
        p: 'Explique o que é o HIV, como ele entra e se multiplica, e por que não existe cura.',
        dica: 'Siga o ciclo: entrada → RNA em DNA → integração → latência.',
        pts: [
          { t: 'É um retrovírus de RNA que infecta CD4', kw: ['retrovirus', 'rna', 'cd4'] },
          { t: 'gp120 liga CD4 e o correceptor CCR5/CXCR4; gp41 faz a fusão', kw: ['gp120', 'ccr5', 'cxcr4', 'gp41', 'fusao', 'funde'] },
          { t: 'Transcriptase reversa converte RNA em DNA', kw: ['transcriptase', 'rna em dna', 'rna para dna'] },
          { t: 'Integrase insere o DNA no genoma (provírus)', kw: ['integrase', 'provirus', 'integra'] },
          { t: 'Provírus fica latente em células de memória: reservatório, por isso não cura', kw: ['latente', 'latencia', 'reservatorio', 'nao cura', 'sem cura'] },
          { t: 'HIV não é AIDS (CD4 < 200 e/ou doença definidora)', kw: ['aids', '200'] }
        ],
        modelo: 'O HIV é um retrovírus de RNA. A gp120 reconhece o CD4 e depois o correceptor CCR5 ou CXCR4, e a gp41 funde o vírus à célula. Dentro dela, a transcriptase reversa transforma o RNA em DNA, e a integrase insere esse DNA no genoma: o provírus. A partir daí a célula passa a copiá-lo e a produzir vírus. Parte dessas células, os linfócitos de memória em repouso, mantém o provírus silencioso, o reservatório latente, que o sistema imune e os remédios não alcançam. Por isso o tratamento controla, mas não cura, e o vírus volta se a TARV for interrompida.'
      },
      porques: {
        ini: 'A TARV precisa combinar três drogas, e não uma só.',
        niveis: [
          { q: 'Por quê?', a: 'Porque a transcriptase reversa **erra muito e não corrige**, e o vírus produz **bilhões de partículas por dia**: em um único dia, quase toda mutação pontual possível aparece em algum vírion.' },
          { q: 'E por que isso é um problema com uma droga só?', a: 'O remédio **mata os vírus sensíveis e deixa os resistentes**, que passam a dominar: é a **seleção** de variantes resistentes.' },
          { q: 'E por que três drogas resolvem?', a: 'O vírus precisaria ter, **ao mesmo tempo**, mutações contra todas as drogas, o que é muito improvável.' }
        ]
      }
    },
    {
      id: 'm2', n: 2, ic: '🔬', t: 'Transmissão e fisiopatologia', obj: 'Objetivo 1',
      ler: [
        { t: 'Vias de transmissão', d: '**Sexual, sanguínea/parenteral e vertical** (15–45% sem intervenção; menos de 1% com cuidado). **Não transmite:** abraço, aperto de mão, talheres, suor, tosse, banheiro, piscina, mosquito. Conviver é seguro, e saber disso combate o estigma.' },
        { t: 'O que define o risco', d: 'Depende da **quantidade de vírus** (dose) e da **porta de entrada**. O reto tem mucosa fina, com microlesões e muito CD4, por isso o sexo anal receptivo é o de maior risco. **ISTs** aumentam o risco: as úlceras abrem a barreira e qualquer IST atrai CD4 e macrófagos para o local. **Fase aguda** = carga viral altíssima = muito transmissível.' },
        { t: 'Ciclo viral em ordem', d: '**1)** gp120 liga CD4 e correceptor; **2)** gp41 funde; **3)** transcriptase reversa: RNA → DNA; **4)** integrase: provírus; **5)** a célula produz RNA e proteínas; **6)** o vírion brota; **7)** a protease o amadurece. Cada classe de remédio bloqueia uma dessas etapas.' },
        { t: 'Cinco frentes de perda de CD4', d: '**Morte direta** da célula infectada; **células “espectadoras”** (infecção abortiva → piroptose → IL-1β atrai mais CD4: o círculo vicioso responsável pela maior parte da perda); **CD8 e anticorpos** destruindo células infectadas; **ativação crônica** (apoptose); **reposição insuficiente** (timo e medula prejudicados pela inflamação).' },
        { t: 'Intestino, inflamação e CD4/CD8', d: 'O **GALT** perde CD4 já nas primeiras semanas → a barreira intestinal falha → **translocação microbiana** → ativação imune contínua. O **CD4 cai** (destruído) e o **CD8 sobe** (estimulado pelo HIV, por CMV/EBV que reativam e pela ativação crônica): a relação CD4/CD8 fica **abaixo de 1**. Mesmo tratado, o paciente mantém mais risco cardiovascular, renal e ósseo.' },
        { t: 'Do CD4 baixo à doença', d: 'O CD4 coordena a imunidade celular, que controla micobactérias, fungos, protozoários e vírus latentes. Com a queda, a contenção falha em ordem: pneumocistose e candidíase esofágica < 200; neurotoxoplasmose e criptococose < 100; CMV e MAC < 50; tuberculose em qualquer faixa. As neoplasias surgem porque a **vigilância imune** falha: Kaposi (HHV-8), linfomas (EBV), câncer de colo e ânus (HPV).' }
      ],
      explique: {
        p: 'Explique por que a relação CD4/CD8 se inverte e como o HIV leva à imunodeficiência.',
        dica: 'Comece pelo que acontece com o CD4; depois explique o CD8; feche com a consequência clínica.',
        pts: [
          { t: 'CD4 é o maestro da imunidade celular e é destruído por vários mecanismos', kw: ['maestro', 'coordena', 'destru'] },
          { t: 'Perda das células “espectadoras” (piroptose) é a maior parte da perda', kw: ['espectadora', 'piroptose', 'abortiv'] },
          { t: 'Perda de CD4 no intestino (GALT) → translocação microbiana → ativação crônica', kw: ['galt', 'intestin', 'translocacao', 'microbian'] },
          { t: 'CD8 aumenta (estimulado por HIV, CMV, EBV e ativação)', kw: ['cd8', 'cmv', 'ebv', 'aumenta'] },
          { t: 'Relação CD4/CD8 abaixo de 1: marcador de ativação e de risco', kw: ['relacao', 'inver', 'abaixo de 1', 'menor que 1'] },
          { t: 'Consequência: oportunistas e neoplasias, e inflamação crônica mesmo tratado', kw: ['oportunista', 'neoplasia', 'cancer', 'inflamacao'] }
        ],
        modelo: 'O CD4 é o maestro da imunidade celular, e o HIV o destrói de várias formas: matando diretamente as células infectadas, matando as espectadoras por piroptose (a maior parte da perda), por ação de CD8 e anticorpos, por ativação crônica e por reposição insuficiente. Já nas primeiras semanas o intestino perde CD4, a barreira falha e produtos bacterianos passam para o sangue, ativando o sistema imune o tempo todo. Com isso o CD4 cai e o CD8 sobe, estimulado pelo HIV, por CMV e EBV que reativam e pela ativação crônica. A relação CD4/CD8 fica abaixo de 1. A imunidade celular fica comprometida, surgem oportunistas e neoplasias, e a inflamação crônica explica por que, mesmo tratado, o paciente tem mais risco cardiovascular, renal e ósseo.'
      },
      porques: {
        ini: 'Mesmo com a carga viral indetectável, a pessoa com HIV tem mais risco cardiovascular.',
        niveis: [
          { q: 'Por quê?', a: 'Porque persiste uma **inflamação crônica**: a barreira intestinal lesada continua permitindo a **translocação microbiana** e o sistema imune permanece ativado.' },
          { q: 'E como a inflamação causa doença cardiovascular?', a: 'A ativação contínua (IL-6, TNF, PCR) **lesa o endotélio dos vasos**, favorecendo aterosclerose; o mesmo ocorre em rins, ossos e cérebro.' },
          { q: 'A TARV não resolve?', a: 'Ela **reduz muito**, ao parar a replicação, mas **não zera** a ativação, porque parte do dano ao intestino e ao timo é lento de se recuperar. Por isso se tratam também os fatores de risco clássicos.' }
        ]
      }
    },
    {
      id: 'm3', n: 3, ic: '🩺', t: 'Manifestações clínicas', obj: 'Objetivo 1',
      ler: [
        { t: 'Infecção aguda (2 a 4 semanas)', d: 'Febre, exantema, faringite, linfadenopatia, mialgia, às vezes úlceras orais/genitais. **Por que?** O vírus se multiplica sem controle e o corpo reage com uma tempestade de citocinas. Melhora sozinha quando os CD8 trazem a carga viral ao *set point*. Carga viral altíssima = máxima transmissibilidade, e o **teste pode estar negativo** (janela).' },
        { t: 'Fase crônica', d: 'Assintomática por anos porque o sistema imune ainda controla e repõe CD4. Sinais precoces de queda de CD4 (infecções comuns que o corpo deixa de controlar): **candidíase oral, leucoplasia pilosa (EBV), dermatite seborreica, herpes-zóster**, diarreia, febre e emagrecimento.' },
        { t: 'AIDS', d: 'Imunodeficiência grave: **sintomas constitucionais** (febre, sudorese noturna, emagrecimento, diarreia), **infecções oportunistas** e **neoplasias**. Exemplos: tuberculose, pneumocistose, candidíase esofágica, neurotoxoplasmose, criptococose, retinite por CMV.' },
        { t: 'Cada oportunista no seu CD4', d: '**< 200:** pneumocistose (dispneia, tosse seca, hipoxemia), candidíase esofágica (odinofagia). **< 100:** neurotoxoplasmose (cefaleia, déficit focal, convulsão), criptococose (meningite subaguda). **< 50:** retinite por CMV (perda visual), MAC. **Qualquer CD4:** tuberculose.' },
        { t: 'Caso da aula: infecção aguda', d: 'Homem de 26 anos, 5 dias de exantema, dor de garganta, febre e mal-estar; petéquias no palato e úlceras bucais; sexo sem preservativo 2 semanas antes. **Teste rápido negativo, 4ª geração positiva, carga viral > 10 milhões.** Lição: na aguda, anticorpos ainda não existem, mas p24 e RNA já estão altos.' }
      ],
      explique: {
        p: 'Descreva a evolução clínica do HIV e relacione o CD4 com o aparecimento das infecções oportunistas.',
        dica: 'Aguda → crônica → AIDS; depois uma escada de CD4.',
        pts: [
          { t: 'Aguda: síndrome retroviral (febre, exantema, faringite, linfadenopatia) por viremia e citocinas', kw: ['aguda', 'retroviral', 'febre', 'exantema', 'faringite'] },
          { t: 'Na aguda a carga viral é altíssima e o teste pode estar negativo (janela)', kw: ['janela', 'negativo', 'carga viral'] },
          { t: 'Crônica: assintomática; sinais precoces como candidíase oral, leucoplasia pilosa, zóster', kw: ['cronica', 'assintomatic', 'candidiase oral', 'leucoplasia', 'zoster'] },
          { t: 'AIDS: CD4 < 200 e/ou doença definidora', kw: ['aids', '200'] },
          { t: 'Escada: < 200 pneumocistose; < 100 toxoplasmose e criptococo; < 50 CMV e MAC; TB em qualquer CD4', kw: ['pneumocist', 'toxoplasm', 'cripto', 'cmv', 'tuberculose'] },
          { t: 'Neoplasias: Kaposi (HHV-8), linfomas (EBV), colo e ânus (HPV)', kw: ['kaposi', 'linfoma', 'hpv', 'neoplasia'] }
        ],
        modelo: 'Na fase aguda, de 2 a 4 semanas após a infecção, há uma síndrome retroviral parecida com mononucleose, causada pela viremia altíssima e pelas citocinas, e o teste pode estar negativo pela janela. Depois vem a fase crônica, muitas vezes assintomática, com sinais precoces como candidíase oral, leucoplasia pilosa e zóster quando o CD4 começa a cair. Na AIDS, com CD4 abaixo de 200 ou doença definidora, surgem as oportunistas em ordem: pneumocistose e candidíase esofágica abaixo de 200, neurotoxoplasmose e criptococose abaixo de 100, CMV e MAC abaixo de 50, e tuberculose em qualquer faixa. Também aparecem neoplasias, como Kaposi, linfomas e câncer de colo e ânus.'
      },
      porques: {
        ini: 'Na síndrome retroviral aguda o teste rápido pode ser negativo.',
        niveis: [
          { q: 'Por quê?', a: 'O teste rápido detecta **anticorpos**, e o corpo leva **semanas** para produzi-los em quantidade detectável.' },
          { q: 'Então o que aparece antes?', a: 'O **RNA viral** (cerca de 10 dias) e o **p24** (cerca de 2 semanas) já estão altos no sangue.' },
          { q: 'Como evitar o erro?', a: 'Com suspeita de infecção aguda, usar **4ª geração (p24 + anticorpos)** ou **carga viral**, e repetir o teste depois se a exposição for muito recente.' }
        ]
      }
    },
    {
      id: 'm4', n: 4, ic: '🧪', t: 'Diagnóstico e avaliação inicial', obj: 'Objetivo 2',
      ler: [
        { t: 'Teste de 4ª geração', d: 'Detecta **anticorpos anti-HIV-1/2 e antígeno p24** ao mesmo tempo. O p24 aparece **antes** dos anticorpos, então a janela encurta. É de **triagem**: prioriza sensibilidade, aceitando falso-positivos, e por isso **precisa de confirmação**.' },
        { t: 'Testes rápidos e o algoritmo', d: 'Detectam **anticorpos**, dão resultado em minutos e ampliam o acesso (UBS, pré-natal, maternidade). Algoritmo: **Teste 1 + Teste 2**; negativo/negativo = negativo; positivo/positivo = positivo; discordante = **Teste 3**. Exposição recente: **nova coleta após 30 dias**.' },
        { t: 'Por que confirmar com outro princípio', d: 'Um único teste pode dar falso-positivo. Um segundo teste de **princípio diferente** não repete o mesmo erro. A **carga viral** confirma que há vírus e ainda vira **linha de base**. O Western blot perdeu espaço por ser menos sensível no início.' },
        { t: 'Janela imunológica', d: 'Ordem de aparecimento: **RNA (~10 dias) → p24 (~2 semanas) → anticorpos (~3 a 4 semanas)**. A janela é: **molecular < 4ª geração < teste rápido**. Após exposição de risco, **não concluir “negativo” cedo demais**: repetir conforme o teste e o tempo.' },
        { t: 'Crianças com menos de 18 meses', d: 'O **IgG materno atravessa a placenta** e permanece até 18 meses, então o teste de anticorpos pode ser positivo em criança **não infectada**. Usa-se **teste molecular**.' },
        { t: 'Avaliação inicial: CV e CD4', d: '**Carga viral = velocidade do ataque** (quanto vírus se replica; meta: indetectável, em log). **CD4 = tamanho do exército que resta** (< 200 = risco de oportunistas). Exames: hemograma, função renal e hepática, lipídios, glicemia, hepatites B e C, sífilis, TB (+ LF-LAM/CrAg quando indicado), toxoplasmose IgG, HLA-B*5701 se abacavir, gravidez. **Genotipagem** quando indicada, **sem atrasar a TARV**.' }
      ],
      explique: {
        p: 'Como se diagnostica o HIV e o que você faz após o diagnóstico?',
        dica: 'Triagem → confirmação → o que pedir → quando tratar.',
        pts: [
          { t: 'Triagem: 4ª geração (anticorpos + p24) ou teste rápido', kw: ['4', 'quarta', 'p24', 'rapido', 'triagem'] },
          { t: 'Confirmação com teste complementar de princípio diferente e carga viral', kw: ['complementar', 'confirm', 'carga viral', 'principio'] },
          { t: 'Janela imunológica: RNA, depois p24, depois anticorpos; repetir se exposição recente', kw: ['janela', 'repet', '30 dias'] },
          { t: 'Menores de 18 meses: teste molecular (IgG materno)', kw: ['18 meses', 'molecular', 'materno'] },
          { t: 'Avaliação: CV (replicação) e CD4 (imunidade), exames de base e outras ISTs/hepatites/TB', kw: ['cd4', 'carga viral', 'hepatite', 'sifilis', 'tuberculose'] },
          { t: 'Genotipagem quando indicada, sem atrasar a TARV', kw: ['genotip', 'resistencia', 'atrasar'] }
        ],
        modelo: 'A triagem é feita com imunoensaio de 4ª geração, que detecta anticorpos e p24, ou com teste rápido de anticorpos. Como a triagem pode dar falso-positivo, confirma-se com um teste complementar de princípio diferente e carga viral, que também serve de linha de base. Lembro da janela imunológica: RNA, depois p24, depois anticorpos, então repito o teste se a exposição foi recente. Em menores de 18 meses uso teste molecular por causa do IgG materno. Depois peço carga viral e CD4, exames de base, hepatites, sífilis e tuberculose, e genotipagem quando indicada, sem atrasar o início da TARV.'
      },
      porques: {
        ini: 'O diagnóstico de HIV nunca se baseia em um único teste.',
        niveis: [
          { q: 'Por quê?', a: 'Porque o teste de triagem é **muito sensível e portanto pode dar falso-positivo**.' },
          { q: 'Como o segundo teste ajuda?', a: 'Tem **princípio diferente**, então o **erro do primeiro não se repete** no segundo.' },
          { q: 'E a carga viral entra por quê?', a: 'Confirma que **existe o vírus** (e não só anticorpos) e já fica registrada como **linha de base** para acompanhar o tratamento.' }
        ]
      }
    }
  ]
});
