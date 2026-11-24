/* APG · caso HIV/AIDS — módulos 5 a 7 + tutor, relâmpago, casos e dicas */
(function () {
  var C = window.APG_DATA.casos.find(function (c) { return c.id === 'hiv'; });
  C.modulos.push(
    {
      id: 'm5', n: 5, ic: '💊', t: 'TARV: tratar, monitorar, resistência', obj: 'Objetivo 2',
      ler: [
        { t: 'Tratar todos, e logo', d: 'A TARV é indicada para **toda pessoa com HIV, independentemente do CD4**, o mais cedo possível. Tratar cedo **reduz a inflamação, preserva o CD4, evita adoecimento e zera a transmissão sexual** (I = I: indetectável = intransmissível).' },
        { t: 'Esquema inicial e classes', d: 'Esquema preferencial: **TDF + 3TC + DTG** (dois ITRN + um inibidor de integrase). **ITRN** são “tijolos falsos” na transcriptase reversa; **ITRNN** bloqueiam a enzima fora do sítio ativo; **IP** impedem o corte pela protease; **INI** impedem a integração; **inibidores de entrada** impedem a fusão. O dolutegravir tem alta barreira genética: o vírus precisa de várias mutações para escapar.' },
        { t: 'Por que combinar drogas', d: 'A transcriptase erra e produz bilhões de vírions por dia; com uma droga só, os resistentes são selecionados. Com **três ao mesmo tempo**, a chance de uma mutação contra todas ao mesmo tempo é mínima.' },
        { t: 'Meta e monitoramento', d: 'Meta: **carga viral indetectável em até 6 meses**. CV na semana 4 a 8 para checar resposta, depois a cada 6 meses; CD4 para saber quando suspender profilaxias. **Falha virológica** = CV detectável após 6 meses de tratamento ou rebote após indetecção.' },
        { t: 'Falha: investigar antes de trocar', d: 'Causas: **má adesão** (a principal), interação medicamentosa, absorção ruim, resistência. Passos: reforçar adesão, checar interações, pedir **genotipagem com o paciente ainda em uso da droga** (se parar, o vírus selvagem volta a dominar e o exame não vê a resistência), e trocar para esquema ativo.' },
        { t: 'Efeitos adversos que cobram atenção', d: '**TDF:** lesão renal tubular e perda óssea. **Abacavir:** hipersensibilidade em quem tem HLA-B*5701 (por isso testar antes). **Efavirenz:** sintomas neuropsiquiátricos. **Dolutegravir:** insônia e leve ganho de peso. **IRIS** (síndrome de reconstituição imune): a imunidade volta e “enxerga” uma infecção antes silenciosa, causando piora paradoxal.' },
        { t: 'TB e HIV', d: 'Tratar TB ativa e iniciar TARV **em até 7 dias se CD4 < 50 e até 2 semanas nos demais**; na **meningite tuberculosa**, esperar cerca de 4 semanas (risco de IRIS grave no SNC). Rifampicina reduz níveis de alguns antirretrovirais, exigindo ajuste.' }
      ],
      explique: {
        p: 'Explique a TARV: quando começar, o esquema, por que combinar drogas, e como saber se funciona.',
        dica: 'Quando → o quê → por quê → como monitorar → o que fazer se falhar.',
        pts: [
          { t: 'Iniciar para todos, independentemente do CD4, o mais cedo possível', kw: ['todos', 'independente', 'cedo', 'imediat'] },
          { t: 'Esquema TDF + 3TC + DTG e as classes (ITRN, ITRNN, IP, INI)', kw: ['tdf', '3tc', 'dtg', 'dolutegravir', 'itrn', 'integrase'] },
          { t: 'Combinar drogas por causa da mutação e do grande número de vírions', kw: ['mutacao', 'mutac', 'resisten', 'combin'] },
          { t: 'Meta: carga viral indetectável em até 6 meses; I = I', kw: ['indetect', '6 meses', 'seis meses', 'intransmiss'] },
          { t: 'Monitorar CV e CD4; falha = detectável após 6 meses ou rebote', kw: ['falha', 'rebote', 'monitor'] },
          { t: 'Na falha: adesão, interações, genotipagem em uso da droga, novo esquema', kw: ['adesao', 'genotip', 'interac'] }
        ],
        modelo: 'A TARV é indicada para toda pessoa com HIV, independentemente do CD4, o mais cedo possível, porque preserva a imunidade, reduz a inflamação e zera a transmissão sexual quando a carga viral fica indetectável. O esquema preferencial é tenofovir, lamivudina e dolutegravir: dois ITRN, que bloqueiam a transcriptase reversa, e um inibidor de integrase. Combino drogas porque o vírus produz bilhões de partículas por dia e a transcriptase erra, então com uma droga só selecionaria resistentes; com três, a chance de uma mutação contra todas é mínima. A meta é carga viral indetectável em até 6 meses. Se houver falha, primeiro avalio adesão e interações, peço genotipagem com o paciente ainda tomando a droga e troco para um esquema ativo.'
      },
      porques: {
        ini: 'Antes de trocar o esquema na falha virológica, pede-se genotipagem com o paciente ainda tomando a medicação.',
        niveis: [
          { q: 'Por quê?', a: 'Porque, se a droga for suspensa, o **vírus selvagem (sensível) volta a predominar** no sangue.' },
          { q: 'E qual o problema disso para o exame?', a: 'O exame detecta o que **está circulando**: ele não veria as mutações de resistência, e o resultado ficaria **falsamente tranquilizador**.' },
          { q: 'E a consequência?', a: 'Escolher um esquema às cegas, que **falhará de novo** e selecionará ainda mais resistência.' }
        ]
      }
    },
    {
      id: 'm6', n: 6, ic: '🦠', t: 'AIDS e infecções oportunistas', obj: 'Objetivo 2',
      ler: [
        { t: 'Conceito de oportunista', d: 'É a infecção que **só adoece quem tem a imunidade celular enfraquecida**. O CD4 baixo é o que permite que germes comuns, antes contidos, causem doença grave ou reativem focos latentes.' },
        { t: 'Pneumocistose (PCP)', d: 'Fungo *Pneumocystis jirovecii*; CD4 < 200. Quadro: **tosse seca, dispneia progressiva, febre, hipoxemia**, LDH elevada, Raio-X/TC com **infiltrado intersticial bilateral em vidro fosco**. Tratamento: **sulfametoxazol-trimetoprima**; **corticoide** se hipoxemia importante (reduz a inflamação alveolar que piora a troca gasosa). Profilaxia com SMX-TMP se CD4 < 200.' },
        { t: 'Neurotoxoplasmose', d: '*Toxoplasma gondii* (reativação de cisto latente); CD4 < 100. **Cefaleia, febre, déficit focal, convulsão**; TC/RM com **lesões com realce em anel**. Tratamento empírico com **SMX-TMP ou sulfadiazina + pirimetamina + ácido folínico**; resposta clínica em 10–14 dias confirma. Profilaxia: SMX-TMP se IgG positivo e CD4 < 100.' },
        { t: 'Criptococose', d: '*Cryptococcus*, via inalatória → meninge; CD4 < 100. **Meningite subaguda** com cefaleia intensa e poucos sinais meníngeos; o grande risco é a **hipertensão intracraniana**, que exige **punção de alívio** repetida. Diagnóstico: antígeno criptocócico (CrAg) e tinta da China. Tratamento: **anfotericina B + flucitosina**, depois fluconazol.' },
        { t: 'Tuberculose', d: 'Em qualquer CD4. Com CD4 alto a apresentação é típica (cavitação); com CD4 baixo é **atípica e disseminada** (extrapulmonar, sem cavitação, Raio-X pode ser normal). Usar também **LF-LAM** urinário e cultura. Tratar com RIPE e iniciar TARV conforme o CD4.' },
        { t: 'Candidíase, CMV, MAC, histoplasmose', d: '**Candidíase esofágica** (CD4 < 200): odinofagia; tratar com fluconazol. **CMV** (CD4 < 50): retinite com perda visual indolor, colite; ganciclovir. **MAC** (CD4 < 50): febre, emagrecimento, diarreia; azitromicina. **Histoplasmose**: região endêmica, quadro disseminado; anfotericina.' },
        { t: 'Profilaxias e reconstituição', d: 'Primária (evitar a primeira doença): SMX-TMP conforme o CD4. **Suspender** quando o CD4 sobe e mantém (geralmente > 200 por 3 meses): o motivo da profilaxia desaparece. **IRIS:** após iniciar a TARV, a imunidade recupera e reage de forma exagerada contra o patógeno residual.' }
      ],
      explique: {
        p: 'Explique o que é infecção oportunista e descreva pneumocistose e neurotoxoplasmose: quadro, diagnóstico e tratamento.',
        dica: 'Defina oportunista; depois cada uma: CD4 → quadro → exame → tratamento → profilaxia.',
        pts: [
          { t: 'Oportunista = adoece quem tem imunidade celular (CD4) baixa', kw: ['oportunista', 'imunidade', 'cd4'] },
          { t: 'Pneumocistose: CD4 < 200, tosse seca, dispneia, hipoxemia, vidro fosco, LDH', kw: ['vidro fosco', 'tosse seca', 'dispneia', 'ldh'] },
          { t: 'Pneumocistose: SMX-TMP, mais corticoide se hipoxemia', kw: ['smx', 'sulfametoxazol', 'bactrim', 'corticoide', 'predniso'] },
          { t: 'Neurotoxoplasmose: CD4 < 100, déficit focal/convulsão, lesões em anel', kw: ['anel', 'focal', 'convuls', 'cefaleia'] },
          { t: 'Tratamento empírico (SMX-TMP ou sulfadiazina + pirimetamina) e resposta em 10 a 14 dias', kw: ['pirimetamina', 'sulfadiazina', 'empiric', '14 dias', '10 a 14'] },
          { t: 'Profilaxia com SMX-TMP e suspensão quando o CD4 sobe', kw: ['profilaxia', 'suspend', '200'] }
        ],
        modelo: 'Oportunista é a infecção que só causa doença quando a imunidade celular, o CD4, está baixa. A pneumocistose aparece com CD4 abaixo de 200: tosse seca, dispneia progressiva, hipoxemia e LDH elevada, com infiltrado intersticial em vidro fosco; trata-se com sulfametoxazol-trimetoprima, e corticoide se a hipoxemia for importante. A neurotoxoplasmose aparece com CD4 abaixo de 100, com cefaleia, déficit focal ou convulsão e lesões com realce em anel na imagem; trata-se empiricamente com sulfametoxazol-trimetoprima ou sulfadiazina com pirimetamina e ácido folínico, e a melhora em 10 a 14 dias sustenta o diagnóstico. A profilaxia com SMX-TMP evita as duas e é suspensa quando o CD4 sobe e se mantém.'
      },
      porques: {
        ini: 'Na pneumocistose com hipoxemia grave, associa-se corticoide ao tratamento.',
        niveis: [
          { q: 'Por quê?', a: 'Ao matar o fungo, a **resposta inflamatória nos alvéolos aumenta** e piora a troca gasosa.' },
          { q: 'E o corticoide faz o quê?', a: '**Reduz essa inflamação**, diminuindo a lesão alveolar e a necessidade de ventilação.' },
          { q: 'Qual o critério?', a: '**Hipoxemia** (por exemplo, PaO2 < 70 mmHg ou SatO2 < 92% em ar ambiente).' }
        ]
      }
    },
    {
      id: 'm7', n: 7, ic: '🛡️', t: 'Prevenção, vertical e cuidado integral', obj: 'Objetivo 3',
      ler: [
        { t: 'Prevenção combinada', d: 'Nenhuma medida basta sozinha, por isso se **combinam**: preservativo, **PrEP** (antes), **PEP** (depois), **TcP/TARV** (tratar para não transmitir), testagem regular, redução de danos, tratamento de ISTs e vacinação.' },
        { t: 'PrEP e PEP', d: '**PrEP:** TDF/FTC diário para pessoas com maior exposição; o fármaco já está nos tecidos quando o vírus chega e **bloqueia a integração**. Precisa de teste de HIV negativo e função renal. **PEP:** após exposição, **iniciar o quanto antes e em até 72 horas**, por **28 dias** (TDF + 3TC + DTG), pois no início o vírus ainda está em poucas células e pode ser contido.' },
        { t: 'I = I', d: '**Indetectável = Intransmissível**: com carga viral indetectável por pelo menos 6 meses e adesão, a transmissão sexual é praticamente nula. Isso reduz o estigma e reforça que tratar é também prevenir.' },
        { t: 'Transmissão vertical', d: 'Sem cuidado, 15–45%; com intervenção, **< 1%**. Ocorre na gestação, no **parto** (maior risco, contato com sangue e secreções) e na **amamentação**. Medidas: **TARV para a gestante o quanto antes**, CV no 3º trimestre, **cesárea eletiva** se CV > 1.000 ou desconhecida, **AZT intravenoso** no parto conforme a CV, **fórmula láctea** (aleitamento contraindicado; a mama é via de transmissão), profilaxia no recém-nascido.' },
        { t: 'Notificação e rede', d: 'HIV, aids e gestante com HIV são de **notificação compulsória**, o que permite monitorar a epidemia e organizar políticas. O cuidado é em rede: **UBS, SAE/CTA, hospital**, com acesso universal e gratuito à TARV pelo SUS.' },
        { t: 'Aspectos psicossociais', d: 'Comunicar o diagnóstico com **aconselhamento** (acolher, informar, avaliar rede de apoio, discutir **parcerias sexuais** e revelação). Sigilo e **estigma**: o medo da discriminação afasta pessoas do teste e do tratamento. **Adesão** depende de vínculo, rotina, saúde mental, uso de substâncias e condições sociais; abordar sem julgamento.' },
        { t: 'Cuidado integral e longitudinal', d: 'Hoje o HIV é crônico: o cuidado inclui **rastreio de câncer** (colo do útero, anal), **risco cardiovascular**, saúde óssea e renal, saúde mental, **vacinação** (hepatites, HPV, pneumococo, influenza) e sexualidade/reprodução. A UBS faz a coordenação.' }
      ],
      explique: {
        p: 'Explique a prevenção combinada e as medidas para evitar a transmissão vertical.',
        dica: 'Primeiro as ferramentas; depois a mãe e o bebê, em ordem: gestação, parto, amamentação.',
        pts: [
          { t: 'Prevenção combinada: preservativo, PrEP, PEP, TARV e testagem', kw: ['combinada', 'preservativo', 'prep', 'pep'] },
          { t: 'PEP até 72 h por 28 dias; PrEP diária com TDF/FTC', kw: ['72', '28 dias', 'tdf'] },
          { t: 'I = I (indetectável = intransmissível)', kw: ['indetect', 'intransmiss'] },
          { t: 'Vertical: gestação, parto e amamentação; sem cuidado 15–45%, com cuidado < 1%', kw: ['parto', 'amament', 'vertical', '15', '1%'] },
          { t: 'TARV na gestante, CV no 3º trimestre, cesárea se CV > 1.000, AZT intravenoso', kw: ['cesarea', 'azt', '1000', '1.000'] },
          { t: 'Contraindicar amamentação (fórmula) e dar profilaxia ao recém-nascido', kw: ['formula', 'recem', 'amament'] }
        ],
        modelo: 'A prevenção combinada junta várias estratégias porque nenhuma é suficiente sozinha: preservativo, PrEP antes da exposição, PEP até 72 horas depois, por 28 dias, tratamento para manter a carga viral indetectável, que é o I = I, testagem regular e tratamento de outras ISTs. Para a transmissão vertical, que ocorre na gestação, no parto e na amamentação, a taxa cai de 15 a 45% para menos de 1% com: TARV para a gestante o mais cedo possível, carga viral no terceiro trimestre, cesárea eletiva se a carga viral for acima de 1.000 ou desconhecida, AZT intravenoso no parto conforme a carga viral, fórmula láctea no lugar da amamentação e profilaxia para o recém-nascido.'
      },
      porques: {
        ini: 'A PEP precisa ser iniciada o mais rápido possível, em até 72 horas.',
        niveis: [
          { q: 'Por quê?', a: 'Nas primeiras horas o vírus ainda está **em poucas células na mucosa e nos linfonodos**: dá para contê-lo antes que se espalhe.' },
          { q: 'E depois de 72 horas?', a: 'Ele já se **integrou e disseminou**, formando reservatórios que a droga não elimina: perde-se a janela de oportunidade.' },
          { q: 'Por que 28 dias?', a: 'Para cobrir o **período em que o vírus ainda pode ser eliminado** das células recém-infectadas, antes de se estabelecer.' }
        ]
      }
    }
  );

  /* Perguntas do roteiro (tutor): cada uma com resposta modelo curta e follow-ups */
  C.tutor = [
    { q: 'Qual a diferença entre ser portador do HIV e ter AIDS?', a: 'HIV é a infecção pelo vírus; AIDS é a fase avançada, com CD4 abaixo de 200 e/ou doença definidora, causada pela falência da imunidade celular. Com TARV a maioria não chega à AIDS.', seg: ['E quais exames mostram em que fase o paciente está?', 'Por que 200 é o corte?'], m: 'm1' },
    { q: 'Como o HIV entra na célula e por que não há cura?', a: 'gp120 liga o CD4 e o correceptor, a gp41 funde, a transcriptase reversa faz DNA, a integrase o insere no genoma. Parte das células guarda o provírus latente, e esse reservatório não é eliminado.', seg: ['Qual enzima é alvo dos ITRN?', 'O que é o reservatório e por que importa?'], m: 'm1' },
    { q: 'Por que a relação CD4/CD8 se inverte?', a: 'O CD4 é destruído por vários mecanismos, e o CD8 aumenta porque é estimulado pelo HIV, por CMV e EBV e pela ativação crônica, alimentada pela translocação microbiana do intestino.', seg: ['Por que o intestino é importante?', 'A TARV normaliza isso?'], m: 'm2' },
    { q: 'Cite as formas de transmissão e o que não transmite.', a: 'Sexual, sanguínea e vertical. Não transmite: abraço, talheres, suor, tosse, mosquito, piscina. O risco depende da carga viral e da porta de entrada.', seg: ['Por que o sexo anal receptivo é mais arriscado?', 'Por que ISTs aumentam o risco?'], m: 'm2' },
    { q: 'Descreva a infecção aguda e por que o teste rápido pode ser negativo.', a: 'Síndrome mononucleose-símile com febre, exantema, faringite e linfadenopatia, por viremia altíssima. O teste rápido detecta anticorpos, que levam semanas; RNA e p24 aparecem antes.', seg: ['Que exame você pede então?', 'Esse paciente transmite mais ou menos?'], m: 'm3' },
    { q: 'Que infecções oportunistas aparecem em cada faixa de CD4?', a: 'Abaixo de 200: pneumocistose e candidíase esofágica; abaixo de 100: neurotoxoplasmose e criptococose; abaixo de 50: CMV e MAC; tuberculose em qualquer faixa.', seg: ['Por que a TB aparece em qualquer CD4?', 'O que muda na TB com CD4 baixo?'], m: 'm3' },
    { q: 'Como se faz o diagnóstico do HIV?', a: 'Triagem com 4ª geração ou teste rápido, confirmação com teste complementar de princípio diferente e carga viral. Menores de 18 meses: molecular.', seg: ['Por que não basta um teste?', 'O que é janela imunológica?'], m: 'm4' },
    { q: 'O que você pede na avaliação inicial?', a: 'Carga viral e CD4, hemograma, função renal e hepática, lipídios, glicemia, hepatites B e C, sífilis, tuberculose, toxoplasmose IgG, HLA-B*5701 se abacavir e genotipagem quando indicada.', seg: ['Para que serve o CD4 e a carga viral?', 'Por que não atrasar a TARV esperando a genotipagem?'], m: 'm4' },
    { q: 'Quando e com o que iniciar a TARV?', a: 'Para todos, independentemente do CD4, o quanto antes, com TDF + 3TC + DTG. Meta de indetectável em até 6 meses.', seg: ['Por que três drogas?', 'Quais efeitos adversos você monitora?'], m: 'm5' },
    { q: 'O que é falha virológica e como conduzir?', a: 'Carga viral detectável após 6 meses de tratamento ou rebote após indetecção. Avaliar adesão e interações, genotipagem em uso do esquema e trocar para esquema ativo.', seg: ['Por que a genotipagem é feita ainda em uso da droga?', 'O que é IRIS?'], m: 'm5' },
    { q: 'Apresente a pneumocistose.', a: 'Fungo, CD4 menor que 200: tosse seca, dispneia, hipoxemia, LDH alta, vidro fosco. Tratamento: SMX-TMP, com corticoide se hipoxemia. Profilaxia com SMX-TMP.', seg: ['Por que o corticoide ajuda?', 'Quando suspender a profilaxia?'], m: 'm6' },
    { q: 'Paciente com HIV, cefaleia e convulsão: qual a hipótese e a conduta?', a: 'Neurotoxoplasmose, mais provável com lesões em anel e CD4 abaixo de 100. Tratamento empírico com SMX-TMP ou sulfadiazina + pirimetamina + folínico; avaliar resposta em 10 a 14 dias; diferenciais: linfoma de SNC e criptococose.', seg: ['Por que tratar sem biópsia?', 'E se for meningite sem lesão na imagem?'], m: 'm6' },
    { q: 'Quando iniciar TARV em quem tem tuberculose?', a: 'Em até 7 dias se CD4 menor que 50 e até 2 semanas nos demais; na meningite tuberculosa, aguardar cerca de 4 semanas por risco de IRIS grave no SNC.', seg: ['O que é IRIS?', 'Qual interação com a rifampicina?'], m: 'm6' },
    { q: 'O que é prevenção combinada?', a: 'Uso conjunto de preservativo, PrEP, PEP, tratamento para indetectável (I = I), testagem regular, tratamento de ISTs e redução de danos.', seg: ['Quem indica PrEP?', 'Em quanto tempo iniciar a PEP e por quê?'], m: 'm7' },
    { q: 'Como reduzir a transmissão vertical?', a: 'TARV precoce na gestante, CV no 3º trimestre, cesárea se CV acima de 1.000, AZT intravenoso, fórmula láctea e profilaxia no recém-nascido.', seg: ['Por que o parto é o momento de maior risco?', 'Por que não amamentar?'], m: 'm7' },
    { q: 'Como você daria o diagnóstico a um paciente e o que discutiria?', a: 'Em local reservado e com sigilo, comunicação clara e empática, explicando que é crônico e tratável, avaliando rede de apoio, discutindo parcerias sexuais, adesão e vinculação ao serviço.', seg: ['Como lidar com o medo do estigma?', 'Como favorecer a adesão?'], m: 'm7' }
  ];


  /* Respostas das perguntas de aprofundamento do tutor */
  var SEG = {
    'E quais exames mostram em que fase o paciente está?': 'O **CD4** mostra o estado da imunidade (abaixo de 200 = aids) e a **carga viral** mostra a velocidade de replicação. A fase também depende da clínica: doença definidora de aids, mesmo com CD4 maior, caracteriza aids.',
    'Por que 200 é o corte?': 'Porque abaixo de 200 células/mm³ a imunidade celular já não contém germes que o corpo normalmente controla, como o *Pneumocystis*, e o risco de oportunistas sobe de forma marcante. É um corte **epidemiológico e clínico**, não um limite biológico exato.',
    'Qual enzima é alvo dos ITRN?': 'A **transcriptase reversa**. Os ITRN são análogos de nucleosídeos: entram na cadeia de DNA em formação como “tijolos falsos” e **interrompem** a síntese.',
    'O que é o reservatório e por que importa?': 'São células de memória infectadas com **provírus latente**, que não produzem vírus e por isso escapam do sistema imune e dos remédios. Importa porque é a razão de **não haver cura** e de o vírus voltar se a TARV for suspensa.',
    'Por que o intestino é importante?': 'O **GALT** concentra grande parte dos linfócitos CD4, que são destruídos logo nas primeiras semanas. A barreira intestinal falha, bactérias e seus produtos passam para o sangue (**translocação microbiana**) e mantêm o sistema imune ativado.',
    'A TARV normaliza isso?': '**Em parte.** Ao parar a replicação, o CD4 sobe e a ativação cai, mas a relação CD4/CD8 pode demorar a normalizar ou não normalizar, e persiste inflamação residual, com mais risco cardiovascular, renal e ósseo.',
    'Por que o sexo anal receptivo é mais arriscado?': 'A mucosa retal é **fina, com microlesões** e rica em células CD4 e dendríticas, então o vírus encontra acesso fácil. Além disso, o contato com grande quantidade de sêmen aumenta a dose do vírus.',
    'Por que ISTs aumentam o risco?': 'As **úlceras** abrem a barreira da mucosa e a inflamação **atrai CD4 e macrófagos** para o local. Isso torna a pessoa exposta mais suscetível e a pessoa infectada mais transmissora (mais vírus na secreção).',
    'Que exame você pede então?': '**Teste de 4ª geração (p24 + anticorpos)** e **carga viral**. Eles detectam o vírus ou o antígeno antes de os anticorpos aparecerem.',
    'Esse paciente transmite mais ou menos?': '**Mais.** Na fase aguda a carga viral é altíssima e o paciente muitas vezes nem sabe que está infectado, o que a torna a fase de maior transmissibilidade.',
    'Por que a TB aparece em qualquer CD4?': 'Porque o bacilo é mais virulento que os verdadeiros oportunistas e o HIV **aumenta o risco em todos os níveis**. Com CD4 alto a TB é típica; com CD4 baixo, é atípica e disseminada.',
    'O que muda na TB com CD4 baixo?': 'A resposta imune que forma granuloma e cavitação enfraquece. A TB fica **extrapulmonar, disseminada, sem cavitação** e o Raio-X pode ser normal, por isso usamos também LF-LAM urinário e cultura.',
    'Por que não basta um teste?': 'Porque o teste de triagem é **muito sensível** e dá falso-positivo. Um segundo teste de **princípio diferente** e a carga viral confirmam e evitam um diagnóstico errado.',
    'O que é janela imunológica?': 'O intervalo entre a infecção e o momento em que o exame consegue detectá-la. A ordem é **RNA (~10 dias), p24 (~2 semanas), anticorpos (3 a 4 semanas)**. Nesse período o teste pode ser negativo, então repete-se se a exposição foi recente.',
    'Para que serve o CD4 e a carga viral?': 'O **CD4** diz o tamanho do exército que resta (risco de oportunistas, quando suspender profilaxias). A **carga viral** diz a velocidade do ataque e é a medida de resposta ao tratamento (meta: indetectável).',
    'Por que não atrasar a TARV esperando a genotipagem?': 'Porque o benefício de tratar cedo é grande, e a maioria dos vírus é sensível ao esquema com dolutegravir. A genotipagem **é colhida antes** e, se mostrar resistência, o esquema é ajustado depois.',
    'Por que três drogas?': 'O vírus **muta muito e se replica em bilhões** por dia. Com uma droga só, selecionam-se resistentes. Três drogas ao mesmo tempo tornam improvável uma mutação contra todas.',
    'Quais efeitos adversos você monitora?': '**TDF:** rim e osso (creatinina, fosfato). **Abacavir:** hipersensibilidade (HLA-B*5701). **Efavirenz:** sintomas neuropsiquiátricos. **Dolutegravir:** insônia e ganho de peso. Também a **IRIS** no início do tratamento.',
    'Por que a genotipagem é feita ainda em uso da droga?': 'Porque, se a droga é suspensa, o **vírus selvagem volta a predominar** e o exame não enxerga as mutações. O resultado seria falsamente tranquilizador.',
    'O que é IRIS?': 'É a **síndrome de reconstituição imune**: ao iniciar a TARV, a imunidade volta a funcionar e reage de forma exagerada contra um patógeno antes silencioso (como TB ou criptococo), causando **piora paradoxal**. Trata-se o agente, mantém-se a TARV e usa-se corticoide em casos selecionados.',
    'Por que o corticoide ajuda?': 'Ao morrer, o fungo provoca **inflamação intensa nos alvéolos**, que piora a troca gasosa. O corticoide reduz essa resposta e diminui a lesão pulmonar e a necessidade de ventilação.',
    'Quando suspender a profilaxia?': 'Quando o **CD4 se mantém acima de 200 por pelo menos 3 meses** com a TARV (o motivo da profilaxia desapareceu).',
    'Por que tratar sem biópsia?': 'Porque a neurotoxoplasmose é a causa mais comum de lesão focal com CD4 baixo e a **biópsia cerebral é arriscada**. Trata-se empiricamente e a **melhora em 10 a 14 dias** sustenta o diagnóstico.',
    'E se for meningite sem lesão na imagem?': 'Pensar em **criptococose**: fazer punção lombar com pressão de abertura, antígeno criptocócico (CrAg) e tinta da China, e tratar com anfotericina B e flucitosina, com punções de alívio se houver hipertensão intracraniana.',
    'Qual interação com a rifampicina?': 'A rifampicina **induz enzimas hepáticas** e reduz os níveis de vários antirretrovirais. Com dolutegravir, **dobra-se a dose** (50 mg de 12/12 h) durante o uso da rifampicina.',
    'Quem indica PrEP?': 'Pessoas com **maior chance de exposição**: HSH, pessoas trans, profissionais do sexo, parcerias sorodiferentes sem carga viral indetectável, uso irregular de preservativo ou ISTs repetidas. Exige teste de HIV negativo e função renal normal.',
    'Em quanto tempo iniciar a PEP e por quê?': '**O quanto antes, em até 72 horas**, por 28 dias. Nas primeiras horas o vírus está em poucas células e ainda pode ser contido, antes de se integrar e formar reservatório.',
    'Por que o parto é o momento de maior risco?': 'Porque o bebê tem **contato direto com sangue e secreções genitais** da mãe e as contrações podem misturar sangue materno e fetal. A carga viral materna no parto é o principal determinante.',
    'Por que não amamentar?': 'O **leite materno contém vírus e células infectadas** e a amamentação prolongada é uma via de transmissão. Por isso se oferece fórmula láctea, fornecida pelo SUS.',
    'Como lidar com o medo do estigma?': 'Garantindo **sigilo**, explicando que o HIV é crônico e tratável e que, indetectável, não se transmite (I = I), e avaliando a rede de apoio. Respeitar o tempo de cada pessoa para revelar o diagnóstico.',
    'Como favorecer a adesão?': 'Com **vínculo, linguagem simples, esquema de comprimido único e rotina**, tratando saúde mental, uso de substâncias e barreiras sociais, sem julgamento. Lembretes e acompanhamento próximo no começo ajudam.'
  };
  C.tutor.forEach(function (t) { t.seg = t.seg.map(function (q) { if (!SEG[q]) throw new Error('sem resposta: ' + q); return { q: q, a: SEG[q] }; }); });

  /* Relâmpago: tema → pontos que cabem em 1 minuto */
  C.relampago = [
    { t: 'Ciclo viral do HIV', pts: ['Entrada: gp120 + CD4 + CCR5/CXCR4', 'Fusão: gp41', 'Transcrição reversa: RNA → DNA', 'Integração: provírus', 'Montagem e protease', 'Cada etapa é alvo de uma classe'] },
    { t: 'Por que não há cura', pts: ['Provírus integrado', 'Latência em células de memória', 'Reservatório fora do alcance imune e dos remédios', 'Rebote se parar a TARV'] },
    { t: 'Infecção aguda', pts: ['2 a 4 semanas', 'Febre, exantema, faringite, linfadenopatia', 'Viremia altíssima = muito transmissível', 'Teste rápido pode ser negativo', 'Pedir 4ª geração ou CV'] },
    { t: 'Janela e diagnóstico', pts: ['RNA → p24 → anticorpos', '4ª geração + teste complementar + CV', 'Repetir se exposição recente', 'Menor de 18 meses: molecular'] },
    { t: 'TARV', pts: ['Para todos, o quanto antes', 'TDF + 3TC + DTG', 'Três drogas por causa da mutação', 'Meta: indetectável em 6 meses', 'I = I'] },
    { t: 'Falha virológica', pts: ['CV detectável após 6 meses ou rebote', 'Adesão primeiro', 'Interações', 'Genotipagem em uso da droga', 'Trocar para esquema ativo'] },
    { t: 'Pneumocistose', pts: ['CD4 < 200', 'Tosse seca, dispneia, hipoxemia', 'Vidro fosco, LDH alta', 'SMX-TMP ± corticoide', 'Profilaxia'] },
    { t: 'Neurotoxoplasmose', pts: ['CD4 < 100', 'Cefaleia, déficit focal, convulsão', 'Lesões em anel', 'Tratar empiricamente e reavaliar em 10–14 dias', 'Diferencial: linfoma'] },
    { t: 'PrEP e PEP', pts: ['PrEP: TDF/FTC antes da exposição', 'PEP: até 72 h, por 28 dias', 'Teste negativo antes', 'Dentro da prevenção combinada'] },
    { t: 'Transmissão vertical', pts: ['Gestação, parto, amamentação', '15–45% → < 1%', 'TARV, CV no 3º tri, cesárea se CV > 1.000', 'AZT IV, fórmula láctea, profilaxia no RN'] },
    { t: 'Relação CD4/CD8', pts: ['CD4 cai por vários mecanismos', 'CD8 sobe (HIV, CMV, EBV, ativação)', 'Translocação microbiana no GALT', 'Relação < 1', 'Inflamação crônica mesmo tratado'] },
    { t: 'Aspectos psicossociais', pts: ['Comunicar com acolhimento e sigilo', 'Estigma afasta do teste e do tratamento', 'Adesão e vínculo', 'Parcerias sexuais', 'Rede: UBS, SAE'] }
  ];

  /* Casos clínicos para narrar: passos do raciocínio */
  C.casos = [
    {
      t: 'Homem de 26 anos com febre e exantema',
      hist: 'Homem de 26 anos, 5 dias de febre, exantema, dor de garganta e mal-estar. Exame: petéquias no palato e úlceras orais. Relata sexo sem preservativo há 2 semanas. Teste rápido para HIV: negativo.',
      passos: [
        { p: 'Qual a sua hipótese?', a: 'Infecção aguda pelo HIV (síndrome retroviral aguda).', pq: 'Quadro mononucleose-símile em 2 a 4 semanas de exposição de risco.' },
        { p: 'Por que o teste rápido veio negativo?', a: 'Detecta anticorpos, ainda não formados: janela imunológica.', pq: 'Anticorpos aparecem em 3 a 4 semanas; RNA (~10 dias) e p24 (~2 semanas) aparecem antes.' },
        { p: 'Que exame pedir?', a: 'Teste de 4ª geração (p24 + anticorpos) e carga viral.', pq: 'Detectam o vírus/antígeno antes dos anticorpos.' },
        { p: 'Resultado: 4ª geração positivo e carga viral > 10 milhões. E agora?', a: 'Diagnóstico de infecção aguda; solicitar CD4, exames basais e iniciar TARV.', pq: 'Tratar cedo reduz reservatório e inflamação; viremia alta significa grande risco de transmissão.' },
        { p: 'Que orientações dar?', a: 'Preservativo, notificação, convocar parcerias, discutir PEP/testagem para elas e acompanhar sífilis, hepatites e outras ISTs.', pq: 'Na fase aguda a transmissibilidade é máxima.' }
      ]
    },
    {
      t: 'Paciente com HIV, tosse seca e falta de ar',
      hist: 'Mulher de 38 anos, HIV sem tratamento, 3 semanas de tosse seca, dispneia progressiva e febre. SatO2 86% em ar ambiente. LDH elevada. Raio-X com infiltrado intersticial bilateral. CD4 = 62.',
      passos: [
        { p: 'Hipótese principal?', a: 'Pneumocistose (PCP).', pq: 'CD4 < 200, tosse seca, hipoxemia, LDH alta, infiltrado intersticial bilateral.' },
        { p: 'Que exame confirma?', a: 'Pesquisa de Pneumocystis (escarro induzido ou lavado broncoalveolar) e TC com vidro fosco; considerar beta-D-glucana.', pq: 'Não se cultiva o fungo; a identificação é por coloração/PCR.' },
        { p: 'Tratamento?', a: 'SMX-TMP em dose alta por 21 dias, mais corticoide.', pq: 'A hipoxemia indica corticoide para reduzir a inflamação alveolar que surge com a morte do fungo.' },
        { p: 'Quando iniciar a TARV?', a: 'Em até 2 semanas do início do tratamento da PCP.', pq: 'Iniciar precoce reduz mortalidade; esperar demais deixa o CD4 baixo e expõe a novas oportunistas.' },
        { p: 'Depois, o que mantém?', a: 'Profilaxia secundária com SMX-TMP até CD4 > 200 por 3 meses.', pq: 'Evita recorrência enquanto a imunidade se recupera.' }
      ]
    },
    {
      t: 'Gestante com HIV no terceiro trimestre',
      hist: 'Gestante de 30 anos, 34 semanas, em TARV desde o início do pré-natal. Carga viral recente: 3.200 cópias/mL.',
      passos: [
        { p: 'Qual a prioridade?', a: 'Reduzir o risco de transmissão vertical.', pq: 'Sem cuidado, 15–45%; com cuidado, < 1%.' },
        { p: 'O que a carga viral de 3.200 indica?', a: 'Controle insuficiente: investigar adesão, interações e resistência.', pq: 'A transmissão no parto depende da carga viral materna.' },
        { p: 'Qual a via de parto?', a: 'Cesárea eletiva a partir de 38 semanas.', pq: 'CV > 1.000 ou desconhecida perto do parto: a cesárea reduz o contato do bebê com sangue e secreções.' },
        { p: 'O que fazer no parto?', a: 'AZT intravenoso conforme a carga viral.', pq: 'Garante proteção adicional no momento de maior risco.' },
        { p: 'E depois do nascimento?', a: 'Fórmula láctea, profilaxia no recém-nascido e seguimento da criança com teste molecular.', pq: 'A mama é via de transmissão; IgG materno confunde a sorologia até 18 meses.' }
      ]
    }
  ];

  /* Dicas de fala em público */
  C.fala = [
    { t: 'Abra com a resposta', d: 'Comece com a ideia central em uma frase (“HIV é a infecção; AIDS é a fase avançada”). Depois explique. Quem abre com o contexto se perde.' },
    { t: 'Estrutura 1-2-3', d: 'Anuncie quantos pontos vai falar (“são três pontos”). Isso organiza você, o grupo e dá segurança.' },
    { t: 'Mecanismo antes do nome', d: 'Explique o porquê (“o CD4 é o maestro”) antes da lista. Quem entende o mecanismo reconstrói a lista na hora.' },
    { t: 'Silêncio é pausa, não erro', d: 'Respire antes de responder. Dois segundos parecem eternos para você e passam como segurança para os outros.' },
    { t: 'Se travar', d: 'Volte à âncora: “Deixa eu retomar: o ponto central é…”. Não peça desculpas nem se justifique. Se não souber: “Não tenho certeza, mas o raciocínio seria…”.' },
    { t: 'Devolva a bola', d: 'Termine com a mensagem-chave e, se couber, uma pergunta ao grupo. Isso mostra domínio e conduz a discussão.' },
    { t: 'Fale em voz alta, sempre', d: 'Ler em silêncio engana: parece que você sabe. Falar expõe a lacuna. Treine em pé, com o celular gravando, no ritmo de uma conversa.' }
  ];

  C.ancoras = [
    'O HIV é um retrovírus que destrói o CD4 e se integra ao genoma: controla-se, não se cura.',
    'CD4 baixo abre a porta das oportunistas; a carga viral diz o ritmo do ataque.',
    'Diagnóstico = triagem + confirmação por outro princípio; cuidado com a janela.',
    'TARV para todos, logo, com três drogas: indetectável = intransmissível.',
    'Prevenir é combinar: preservativo, PrEP, PEP, tratamento e testagem.',
    'Cuidar é integral: estigma, adesão, parcerias e a vida inteira com acompanhamento.'
  ];
})();
