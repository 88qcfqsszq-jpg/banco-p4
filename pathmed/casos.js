/* PATHMED V10 · Investigações e avaliações de cada missão.
   Investigações: pacientes e achados vêm das questões ANAT do banco (campo "fonte"); nada é inventado.
   Imagens "bank:arquivo.jpg" vêm do banco de questões (window.IMG, em dados.js); as demais, de pathmed/imagens.
   Para uma nova missão, copie um bloco m00X e preencha investigation + mastery. */
window.PM_CASES = {
  m001: {
    investigation: {
      title:'Investigação 001 · Refluxo há mais de dez anos',
      fonte:'Caso das questões ANAT-02 e ANAT-03 do banco de Anatomopatologia (mesmo paciente, biópsia inicial e de seguimento).',
      patient:{age:56,sex:'Masculino',complaint:'Pirose e regurgitação há mais de dez anos',history:'Homem obeso e tabagista, com uso irregular de omeprazol. Foi encaminhado para endoscopia com biópsia e, depois, para seguimento endoscópico.'},
      evidence:[
        {id:'antecedentes',label:'Antecedentes e tratamento',relevance:1,text:'Obesidade, tabagismo e **uso irregular de omeprazol**: o refluxo continuou agredindo o esôfago por anos.',feedback:'Explica o estímulo crônico (DRGE), mas não diz qual é a lesão no epitélio.'},
        {id:'endo',label:'Endoscopia inicial',relevance:2,text:'Mucosa **cor de salmão** estendendo-se por **4 cm acima da junção esofagogástrica**.',feedback:'Muito útil: mostra onde está a alteração e a sua extensão, que define o segmento.'},
        {id:'bio1',label:'Biópsia inicial',relevance:2,img:'bank:anat_q02_0.jpg',cap:'Biópsia inicial da área cor de salmão (questão ANAT-02).',text:'O epitélio pavimentoso estratificado foi substituído por **epitélio colunar com células caliciformes**.',feedback:'Decisiva para metaplasia intestinal. Ainda falta saber se há displasia.'},
        {id:'bio2',label:'Biópsia de seguimento',relevance:2,text:'**Glândulas irregulares e aglomeradas**, células com **núcleos aumentados, hipercromáticos e estratificados até a superfície**, **sem infiltração da lâmina própria**.',feedback:'Decisiva: descreve atipia e desorganização, e diz se há ou não invasão.'},
        {id:'lab',label:'Exames laboratoriais',relevance:0,text:'O caso não traz exames laboratoriais. Eles não classificam uma lesão do epitélio: quem faz isso é a biópsia.',feedback:'Baixo rendimento aqui. A pergunta do caso é morfológica.'}
      ],
      hypothesis:{prompt:'Com o que você abriu até agora, qual é sua hipótese para a biópsia de seguimento?',options:['Esofagite de refluxo, sem metaplasia','Esôfago de Barrett sem displasia','Esôfago de Barrett com displasia de alto grau','Adenocarcinoma invasivo'],correct:2,feedback:['A biópsia inicial já mostrou células caliciformes, ou seja, metaplasia intestinal.','A biópsia inicial era só metaplasia, mas o seguimento descreve atipia e desorganização.','Metaplasia na biópsia inicial e, no seguimento, atipia importante sem invasão.','Não há infiltração da lâmina própria descrita, então não há critério de invasão.']},
      microscopy:{image:'bank:anat_q03_0.jpg',prompt:'Esta é a lâmina da biópsia de seguimento. Qual achado indica que já não é só metaplasia?',options:['Presença de células caliciformes','Núcleos aumentados, hipercromáticos e estratificados, com glândulas aglomeradas','Epitélio pavimentoso estratificado preservado','Infiltração da lâmina própria por células neoplásicas'],correct:1,hint:'Metaplasia muda o tipo de célula. O que muda na displasia é o núcleo e a organização.',competencies:['visual','conceitual'],
        explain:['Células caliciformes indicam metaplasia intestinal, não displasia.','É a atipia (núcleo grande, escuro, estratificado) com desorganização glandular que define displasia.','O epitélio pavimentoso é o normal do esôfago, e aqui ele foi substituído.','O caso diz explicitamente que não há infiltração da lâmina própria.']},
      differential:[
        {prompt:'Por que não chamar isso de "metaplasia intestinal sem displasia"?',options:['Porque há células caliciformes','Porque há atipia nuclear e desorganização glandular','Porque o segmento tem mais de 3 cm','Porque o paciente é tabagista'],correct:1,competencies:['diferencial','conceitual'],
          explain:['Células caliciformes existem na metaplasia com ou sem displasia; não separam as duas.','Metaplasia não tem atipia. Núcleos aumentados, hipercromáticos e estratificados, com glândulas aglomeradas, são displasia.','A extensão classifica o segmento (longo), não o grau da lesão.','Tabagismo é antecedente, não critério morfológico.']},
        {prompt:'O que falta para ser adenocarcinoma invasivo?',options:['Hipercromasia nuclear','Glândulas aglomeradas','Invasão de tecidos adjacentes (infiltração da lâmina própria)','Mais de 4 cm de extensão'],correct:2,competencies:['diferencial','fisiopatologia'],
          explain:['Hipercromasia já está presente e faz parte da displasia.','Glândulas aglomeradas também já estão presentes.','Na tabela da apostila, só o adenocarcinoma invade. Sem infiltração da lâmina própria, não é invasivo.','A extensão não muda a categoria da lesão.']},
        {prompt:'Como se classifica o segmento deste Barrett?',options:['Ultracurto','Curto','Longo'],correct:2,competencies:['clinica','conceitual'],
          explain:['Ultracurto são só pequenas áreas na região da JEG.','Curto é menos de 3 cm.','4 cm acima da JEG: 3 cm ou mais é segmento longo, o mais associado ao adenocarcinoma.']}
      ],
      final:{prompt:'Qual é a conclusão diagnóstica da biópsia de seguimento?',options:['Esôfago de Barrett de segmento longo, sem displasia','Esôfago de Barrett de segmento longo com displasia de alto grau','Esôfago de Barrett de segmento curto com displasia de baixo grau','Adenocarcinoma invasivo do esôfago'],correct:1,
        keyPrompt:'Qual achado mais sustenta essa conclusão?',keyOptions:['Atipia nuclear acentuada com glândulas aglomeradas, sem infiltração da lâmina própria','Células caliciformes no epitélio colunar','Mucosa cor de salmão na endoscopia','Uso irregular de omeprazol'],keyCorrect:0,competencies:['clinica','diferencial','visual']},
      debrief:{diagnosis:'Esôfago de Barrett de segmento longo com displasia de alto grau',evidence:['Refluxo crônico mal controlado é o **estímulo persistente** da DRGE.','Biópsia inicial: **epitélio colunar com células caliciformes** substituindo o escamoso = metaplasia intestinal.','Extensão de **4 cm** acima da JEG = **segmento longo**.','Seguimento: **núcleos aumentados, hipercromáticos e estratificados até a superfície** com **glândulas aglomeradas** = displasia; a desorganização acentuada indica **alto grau**.','**Sem infiltração da lâmina própria**: não há critério de invasão, portanto não é adenocarcinoma invasivo.'],
        clinic:'O mesmo paciente percorreu duas etapas da sequência **metaplasia → displasia → adenocarcinoma**. A displasia de alto grau é lesão pré-neoplásica: ainda não invade, mas o risco de adenocarcinoma é real. A sequência é possível, não obrigatória.',
        revisar:{conceitual:'Metaplasia × displasia × adenocarcinoma (quadro da p. 9)',visual:'O que mudou nos núcleos (p. 8)',diferencial:'Baixo grau × alto grau (p. 8)',clinica:'Segmento longo, curto e ultracurto (p. 5–6)',fisiopatologia:'Do refluxo à metaplasia (p. 4)'}}
    },
    mastery:[
      {id:'m1q1',image:'m1_esofago_normal',q:'Qual descrição corresponde ao revestimento normal do esôfago?',ops:['Epitélio colunar simples com células caliciformes','Epitélio pavimentoso estratificado não queratinizado','Epitélio glandular invasivo','Epitélio pavimentoso queratinizado'],a:1,why:'O esôfago normal é revestido por epitélio pavimentoso estratificado não queratinizado e não possui células caliciformes.',c:['visual','conceitual']},
      {id:'m1q2',q:'No exemplo do brônquio do fumante, a substituição do epitélio respiratório por epitélio estratificado pavimentoso representa:',ops:['Hipertrofia','Atrofia','Metaplasia','Hiperplasia'],a:2,why:'Metaplasia é a substituição de um tipo celular adulto por outro em resposta a agressão crônica.',c:['conceitual','fisiopatologia']},
      {id:'m1q3',q:'Qual sequência resume melhor o mecanismo do Barrett descrito na missão?',ops:['Refluxo crônico → lesão → mudança da diferenciação de células-tronco → epitélio colunar intestinal','Refluxo → hipertrofia muscular → invasão → metaplasia','Refluxo → atrofia → carcinoma obrigatório','Refluxo → aumento do número de células sem mudança de tipo'],a:0,why:'A agressão crônica lesa o epitélio e altera a diferenciação das células-tronco basais, originando epitélio colunar intestinal com células caliciformes.',c:['fisiopatologia','conceitual']},
      {id:'m1q4',q:'Biópsia de Barrett: células caliciformes, núcleos pequenos e uniformes, arquitetura preservada. O melhor termo é:',ops:['Metaplasia intestinal sem displasia','Displasia de alto grau','Adenocarcinoma','Atrofia'],a:0,why:'Células caliciformes indicam metaplasia; sem atipia e desorganização não há critério descrito para displasia.',c:['diferencial','visual']},
      {id:'m1q5',q:'A metaplasia intestinal se estende 4 cm acima da JEG. Como classificar?',ops:['Ultracurto','Curto','Longo','Não é Barrett'],a:2,why:'Segmento longo corresponde a 3 cm ou mais acima da JEG.',c:['clinica','conceitual']},
      {id:'m1q6',image:'m1_displasia_alto',q:'Uma lâmina mostra alterações arquiteturais acentuadas, incluindo glândulas dentro de glândulas, sem invasão. Qual interpretação é mais adequada?',ops:['Metaplasia sem displasia','Displasia de baixo grau','Displasia de alto grau','Adenocarcinoma invasivo'],a:2,why:'Glândulas dentro de glândulas indicam irregularidade arquitetural acentuada de displasia de alto grau; sem invasão, não é adenocarcinoma invasivo.',c:['visual','diferencial','clinica']}
    ]
  },
  m002: {
    investigation: {
      title:'Investigação 002 · Queimação que piora em jejum',
      fonte:'Caso das questões ANAT-05 e ANAT-06 do banco de Anatomopatologia (mesma paciente, mesma biópsia).',
      patient:{age:38,sex:'Feminino',complaint:'Epigastralgia em queimação há seis meses',history:'A dor piora em jejum. Foi feita endoscopia digestiva alta com biópsia.'},
      evidence:[
        {id:'endo',label:'Endoscopia',relevance:2,text:'**Enantema no antro.**',feedback:'Útil: localiza a alteração no antro, a região mais acometida pelo H. pylori.'},
        {id:'prata',label:'Biópsia · impregnação pela prata',relevance:2,img:'bank:anat_q05_0.jpg',cap:'Superfície da mucosa antral, impregnação pela prata (questão ANAT-05).',text:'**Bacilos espiralados** na superfície da mucosa, **junto ao muco**.',feedback:'Decisiva para o agente: onde ele está e como ele é.'},
        {id:'he',label:'Biópsia · lâmina própria em H&E',relevance:2,text:'Infiltrado na lâmina própria. Você vai examiná-lo na etapa de microscopia.',feedback:'Decisiva para classificar a inflamação. A lâmina aparece na etapa 4.'},
        {id:'lab',label:'Exames laboratoriais',relevance:0,text:'O caso não traz exames laboratoriais. A classificação da gastrite é feita na biópsia.',feedback:'Baixo rendimento aqui. A pergunta do caso é histológica.'}
      ],
      hypothesis:{prompt:'Antes de olhar o infiltrado, qual é sua hipótese?',options:['Gastrite aguda isolada','Gastrite crônica associada ao H. pylori','Gastrite por Candida','Adenocarcinoma gástrico difuso'],correct:1,feedback:['Seis meses de sintomas e H. pylori no muco apontam para inflamação persistente.','Antro, bacilos espiralados no muco superficial e sintomas há meses formam o padrão da missão.','Candida forma hifas, não bacilos espiralados.','Nada no caso sugere neoplasia: não há células atípicas nem parede rígida.']},
      microscopy:{image:'bank:anat_q06_0.jpg',prompt:'Lâmina própria da mesma biópsia (H&E). Qual é o infiltrado predominante?',options:['Neutrófilos','Linfócitos e plasmócitos (mononuclear)','Eosinófilos','Células em anel de sinete'],correct:1,hint:'Procure células pequenas, redondas e de núcleo escuro, ocupando a lâmina própria entre as glândulas.',competencies:['visual','conceitual'],
        explain:['Neutrófilos indicariam atividade; não são o infiltrado predominante aqui.','Linfócitos e plasmócitos na lâmina própria = inflamação crônica.','Não é um infiltrado eosinofílico.','Não há células neoplásicas em anel de sinete.']},
      differential:[
        {prompt:'Por que não é uma gastrite aguda isolada?',options:['Porque há bacilos no muco','Porque o infiltrado é mononuclear (linfócitos e plasmócitos), marca de cronicidade','Porque a dor piora em jejum','Porque a biópsia foi no antro'],correct:1,competencies:['diferencial','conceitual'],
          explain:['A bactéria indica a causa, não o tipo de infiltrado.','A gastrite aguda tem infiltrado de neutrófilos. Linfócitos e plasmócitos persistentes indicam inflamação crônica.','Sintoma não classifica a inflamação; a histologia sim.','O sítio sugere H. pylori, mas não diz se é aguda ou crônica.']},
        {prompt:'O que seria preciso para chamar de "gastrite crônica ATIVA"?',options:['Células caliciformes','Neutrófilos na mucosa e no epitélio das fossetas ou glândulas','Mais plasmócitos','Bacilos invadindo a lâmina própria'],correct:1,competencies:['diferencial','visual'],
          explain:['Células caliciformes indicariam metaplasia intestinal.','"Ativa" é o componente agudo sobreposto: neutrófilos no epitélio das fossetas ou glândulas. O caso não os descreve.','Mais plasmócitos continua sendo cronicidade.','O H. pylori fica no muco superficial e não invade.']},
        {prompt:'Por que a bactéria favorece o antro e sobrevive no estômago ácido?',options:['Ela invade a submucosa, longe do ácido','A urease gera amônia, que reduz a acidez ao redor dela','Ela destrói as células parietais','Ela vive dentro dos plasmócitos'],correct:1,competencies:['fisiopatologia'],
          explain:['O H. pylori não invade: fica no muco superficial.','A urease transforma ureia em amônia e CO₂; a amônia neutraliza parcialmente a acidez no microambiente da bactéria.','A perda de células parietais vem da inflamação crônica com atrofia, não de destruição direta pela bactéria.','Não; ela coloniza o muco.']}
      ],
      final:{prompt:'Qual é a conclusão diagnóstica?',options:['Gastrite crônica associada ao H. pylori','Gastrite aguda isolada','Gastrite crônica ativa com metaplasia intestinal','Adenocarcinoma gástrico difuso'],correct:0,
        keyPrompt:'Qual combinação de achados mais sustenta essa conclusão?',keyOptions:['Bacilos espiralados no muco superficial + linfócitos e plasmócitos na lâmina própria','Neutrófilos no epitélio das fossetas + células caliciformes','Enantema no antro, isoladamente','Células em anel de sinete isoladas na lâmina própria'],keyCorrect:0,competencies:['clinica','diferencial','fisiopatologia']},
      debrief:{diagnosis:'Gastrite crônica associada ao H. pylori',evidence:['**Antro** com enantema: a região mais acometida pelo H. pylori.','**Bacilos espiralados no muco superficial** (prata): H. pylori, gram-negativo, que não invade. O **Giemsa** também evidencia a bactéria.','**Linfócitos e plasmócitos** na lâmina própria: inflamação **crônica**.','Neutrófilos no epitélio **não foram descritos**: por isso não se fecha "ativa".','Sem células caliciformes, não há metaplasia intestinal descrita.'],
        clinic:'A inflamação crônica pode evoluir para **atrofia** (menos parietais e principais, menos ácido, risco de deficiência de B12) e **metaplasia intestinal**, aumentando o risco de adenocarcinoma. É uma possibilidade, não um destino.',
        revisar:{conceitual:'O que procurar na lâmina (p. 13)',visual:'O que procurar na lâmina (p. 13)',diferencial:'Confira: gastrite crônica ativa (p. 12–13)',clinica:'Patogênese: da colonização à metaplasia (p. 12)',fisiopatologia:'Patogênese: da colonização à metaplasia (p. 12)'}}
    },
    mastery:[
      {id:'m2q1',image:'m2_parietais_principais',q:'No corpo/fundo, quais células são associadas respectivamente a HCl/fator intrínseco e pepsinogênio?',ops:['G e mucosas','Parietais e principais','Caliciformes e principais','Parietais e G'],a:1,why:'Células parietais produzem HCl e fator intrínseco; células principais produzem pepsinogênio.',c:['visual','conceitual']},
      {id:'m2q2',q:'Linfócitos e plasmócitos na lâmina própria somados a neutrófilos nas fossetas indicam:',ops:['Gastrite crônica ativa','Gastrite aguda isolada','Metaplasia sem inflamação','Adenocarcinoma'],a:0,why:'Linfócitos/plasmócitos = crônico; neutrófilos = componente ativo.',c:['conceitual','diferencial']},
      {id:'m2q3',q:'Qual papel da urease do H. pylori foi descrito na missão?',ops:['Gerar amônia e reduzir a acidez no microambiente da bactéria','Produzir pepsinogênio','Transformar células G em caliciformes','Invadir diretamente a muscular própria'],a:0,why:'A urease transforma ureia em amônia e CO₂, reduzindo a acidez perto da bactéria e favorecendo sua sobrevivência.',c:['fisiopatologia','conceitual']},
      {id:'m2q4',q:'Mucosa gástrica com células caliciformes, núcleos uniformes e arquitetura organizada deve ser interpretada como:',ops:['Metaplasia intestinal','Displasia gástrica','Adenocarcinoma invasivo','Gastrite aguda isolada'],a:0,why:'Epitélio intestinal com células caliciformes, sem atipia/desorganização, corresponde a metaplasia intestinal.',c:['diferencial','visual']},
      {id:'m2q5',q:'Glândulas longas e tortuosas, lúmen mais amplo, células mucosas e células G sugerem qual região?',ops:['Corpo','Fundo','Antro/piloro','Esôfago'],a:2,why:'Esse é o padrão descrito para antro/piloro, região frequentemente acometida por H. pylori.',c:['clinica','visual']},
      {id:'m2q6',image:'m2_adenocarcinoma',q:'Qual conjunto favorece adenocarcinoma gástrico em vez de metaplasia intestinal isolada?',ops:['Células caliciformes com arquitetura organizada','Crescimento invasivo com destruição da arquitetura e atipia','Linfócitos e plasmócitos isolados','Glândulas antrais longas e tortuosas'],a:1,why:'O adenocarcinoma é maligno, invasivo, com destruição da arquitetura normal e atipia celular.',c:['visual','diferencial','clinica']}
    ]
  }
};

window.PM_COMPETENCIAS = {
  visual:'Reconhecimento visual',
  conceitual:'Conhecimento conceitual',
  fisiopatologia:'Fisiopatologia',
  diferencial:'Diagnóstico diferencial',
  clinica:'Aplicação clínica'
};

/* ===== Missões 003 a 011: adicionadas a partir da apostila (cada bloco indica as páginas e as questões ANAT usadas) ===== */

/* ===== Missão 003 · Doenças inflamatórias intestinais (apostila p. 15–25; questões ANAT-09 a 12) ===== */
PM_MISSOES.push({
  id:'m003', num:'003', titulo:'Doenças inflamatórias intestinais',
  sub:'Intestino normal, doença de Crohn e retocolite ulcerativa',
  pags:'15–25', cor:'#d9578f',
  questoes:['ANAT-09','ANAT-10','ANAT-11','ANAT-12'],
  etapas:[
  { t:'texto', titulo:'Por que começar pelo normal', p:'15',
    corpo:[
      'O diagnóstico anatomopatológico das DII depende de reconhecer **quais estruturas estão preservadas, quais foram destruídas e até onde a inflamação se estende** na parede intestinal.',
      'O intestino delgado é um órgão tubular especializado em **digestão e absorção**, com cerca de 6 a 8 metros, dividido em **duodeno, jejuno e íleo**.'
    ],
    destaque:'A pergunta que vai separar Crohn de retocolite é: **até que camada a inflamação chega?** Por isso, primeiro as camadas.'
  },
  { t:'explorar', titulo:'As camadas da parede', p:'16–17', img:'p016_113',
    intro:'Toque nos números, de dentro para fora.',
    pts:[
      { x:50, y:18, nome:'Mucosa', txt:'Camada mais interna: **epitélio, lâmina própria e muscular da mucosa**. Tem vilosidades e criptas e participa da absorção, da secreção e da defesa. Na **retocolite ulcerativa**, é a principal região acometida.' },
      { x:62, y:52, nome:'Submucosa', txt:'Tecido conjuntivo com fibras colágenas, vasos sanguíneos e linfáticos e elementos nervosos (plexo de Meissner).' },
      { x:45, y:75, nome:'Muscular', txt:'Camada circular interna e longitudinal externa de músculo liso; entre elas fica o plexo mioentérico de Auerbach.' },
      { x:29, y:93, nome:'Serosa', txt:'Revestimento mais externo: conjuntivo recoberto por mesotélio. Inflamada quando o processo é **transmural**, como pode ocorrer na **doença de Crohn**, o que se associa a aderências e complicações.' }
    ]
  },
  { t:'abas', titulo:'A mucosa: vilosidades, criptas e células', p:'16, 19',
    intro:'O epitélio é predominantemente **cilíndrico simples** e tem vários tipos celulares especializados.',
    abas:[
      { rot:'Vilosidades', img:'p016_115', leg:'Vilosidades intestinais.',
        itens:['Projeções da mucosa em direção à luz.','**Aumentam a superfície de absorção.**','Revestidas por epitélio cilíndrico simples com enterócitos e células caliciformes.'] },
      { rot:'Criptas e Paneth', img:'p016_117', leg:'Base de uma cripta com células de Paneth.',
        itens:['Entre as vilosidades há invaginações epiteliais: as **criptas intestinais (de Lieberkühn)**.','Na base das criptas ficam as **células de Paneth**, com grânulos muito eosinofílicos, que produzem lisozima e defensinas (defesa antimicrobiana).'] },
      { rot:'Os tipos celulares', img:'p016_116', leg:'Esquema da mucosa intestinal e de seus tipos celulares.',
        itens:['Enterócitos com microvilosidades formam a **borda em escova**.','**Células caliciformes** produzem muco, que lubrifica e protege o epitélio.','Também há células enteroendócrinas, células regenerativas (tronco) e células de Paneth.'] }
    ]
  },
  { t:'explorar', titulo:'Submucosa e muscular própria', p:'17', img:'p017_121',
    intro:'Lâmina do intestino em maior aumento. Toque nos números.',
    pts:[
      { x:10, y:45, nome:'Mucosa', txt:'Criptas e lâmina própria.' },
      { x:40, y:30, nome:'Submucosa', txt:'Tecido conjuntivo com fibras colágenas, vasos e nervos.' },
      { x:56, y:15, nome:'Vaso sanguíneo', txt:'Vasos da submucosa.' },
      { x:46, y:57, nome:'Plexo de Meissner', txt:'Plexo nervoso da submucosa.' },
      { x:82, y:70, nome:'Muscular própria', txt:'Músculo liso, abaixo da submucosa.' }
    ]
  },
  { t:'abas', titulo:'Duodeno, jejuno e íleo', p:'18',
    intro:'Cada segmento tem um marcador que ajuda a reconhecer de onde veio a lâmina.',
    abas:[
      { rot:'Duodeno', img:'p018_127', leg:'Duodeno: vilosidades, mucosa e glândulas de Brunner na submucosa.',
        itens:['Cerca de 25 a 30 cm.','Vilosidades largas, foliáceas, distribuídas uniformemente.','Marcador característico: **glândulas de Brunner na submucosa**, que secretam muco alcalino e ajudam a neutralizar o quimo ácido que vem do estômago.'] },
      { rot:'Jejuno', img:'p018_128', leg:'Jejuno: vilosidades altas e pregas circulares.',
        itens:['Cerca de 2,5 a 3 m.','Vilosidades **altas, estreitas e digitiformes**, além de pregas circulares proeminentes, altas e numerosas.','Alta vascularização.'] },
      { rot:'Íleo', img:'p018_129', leg:'Íleo com placas de Peyer na submucosa.',
        itens:['Cerca de 4 a 4,5 m.','Vilosidades mais curtas e abauladas, **mais células caliciformes**.','Marcador: **placas de Peyer**, agregados de tecido linfoide associados à defesa imunológica intestinal.'] }
    ]
  },
  { t:'checar', titulo:'Confira o entendimento', p:'18–19',
    perg:'Uma lâmina de intestino delgado mostra glândulas mucosas na submucosa. De que segmento ela provavelmente veio?',
    dica:'Qual segmento tem glândulas na submucosa que neutralizam o quimo ácido?',
    ops:[
      { t:'Duodeno', por:'As glândulas de Brunner, mucosas e na submucosa, são o marcador do duodeno.', certa:true },
      { t:'Jejuno', por:'O jejuno se reconhece pelas vilosidades altas e digitiformes e pelas pregas circulares, não por glândulas na submucosa.' },
      { t:'Íleo', por:'O marcador do íleo são as placas de Peyer (agregados linfoides), não glândulas mucosas.' }
    ]
  },
  { t:'texto', titulo:'DII: duas doenças, três critérios', p:'19',
    corpo:[
      'As DII são condições **crônicas** com inflamação persistente do trato digestivo. As duas principais são a **doença de Crohn** e a **retocolite ulcerativa (RCU)**.',
      'As duas têm períodos de atividade e de melhora, mas diferem na **distribuição anatômica**, na **profundidade da inflamação** e nos **padrões macro e microscópicos**.',
      '**Crohn** pode comprometer qualquer segmento, **da boca ao ânus**, com predomínio do intestino delgado, de forma **segmentar**: áreas doentes intercaladas com áreas preservadas (lesões salteadas).',
      '**RCU** é limitada ao **cólon e ao reto**, com comprometimento **contínuo**, sem intervalos de intestino normal.'
    ]
  },
  { t:'abas', titulo:'Crohn na peça cirúrgica', p:'19–20',
    intro:'Características centrais: comprometimento segmentar, inflamação transmural, espessamento da parede, fissuras profundas, fibrose e possibilidade de fístulas e abscessos.',
    abas:[
      { rot:'Estenose', img:'p019_133', leg:'Peça de intestino com segmento estenosado e dilatação a montante.',
        itens:['Os segmentos afetados têm reação inflamatória crônica com **fibrose**.','A fibrose leva à **estenose** do segmento.','Acima dele, o conteúdo que não passa pela estenose **dilata** a região a montante.'] },
      { rot:'Fissuras e calçamento', img:'p020_136', leg:'Mucosa com fissuras longitudinais, aspecto em paralelepípedo e fibrose.',
        itens:['Entre as saliências há **fissuras longitudinais**, que podem ser profundas, atravessar a parede e causar **fístulas**.','A mucosa perde as pregas e fica com aspecto mamelonado, lembrando **calçamento em pedra (paralelepípedo)**.','**Fibrose** causada pela inflamação crônica.'] }
    ]
  },
  { t:'explorar', titulo:'Crohn na lâmina: transmural', p:'20', img:'p020_137',
    intro:'Pequeno aumento. Repare até onde vai a inflamação. Toque nos números.',
    pts:[
      { x:50, y:12, nome:'Mucosa', txt:'A inflamação começa aqui, mas não para aqui.' },
      { x:11, y:51, nome:'Infiltrado inflamatório na submucosa', txt:'Agregado de células inflamatórias abaixo da mucosa.' },
      { x:80, y:82, nome:'Infiltrados nas camadas profundas', txt:'O padrão **transmural**: a inflamação ultrapassa todas as camadas. O infiltrado crônico pode vir com edema, úlceras, fibrose e alterações da estrutura celular.' }
    ]
  },
  { t:'explorar', titulo:'Granulomas e fibrose', p:'21', img:'p021_140', ann:'a_p021_140',
    intro:'Outro achado do Crohn. Toque nos números.',
    pts:[
      { x:43, y:42, nome:'Granuloma', txt:'Agregado organizado de células inflamatórias. No Crohn, os granulomas em geral **não têm necrose caseosa** no centro.' },
      { x:15, y:73, nome:'Granuloma', txt:'Outro granuloma, em meio à fibrose.' },
      { x:80, y:33, nome:'Tecido fibrótico', txt:'Colágeno, bem eosinofílico (rosado): fibrose causada pela inflamação crônica.' }
    ],
    destaque:'Granuloma é organização celular inflamatória. **Abscesso** é coleção de pus (neutrófilos e detritos celulares), que no Crohn costuma aparecer após a fístula.'
  },
  { t:'explorar', titulo:'Por dentro do granuloma', p:'21', img:'p021_141',
    intro:'À esquerda, maior aumento; à direita, um granuloma inteiro.',
    pts:[
      { x:16, y:56, nome:'Células epitelioides', txt:'Macrófagos que se transformam e se agrupam, frequentemente associados aos granulomas. Podem se fundir em **células gigantes multinucleadas**.' },
      { x:77, y:32, nome:'Granuloma', txt:'Agregado organizado; no Crohn, sem necrose caseosa central.' }
    ]
  },
  { t:'texto', titulo:'Abscesso de cripta: atividade', p:'22', img:'p022_146', leg:'Cólon normal, abscesso de cripta e criptite.',
    corpo:[
      'Doença ativa pode gerar **abscesso de cripta**: acúmulo de **neutrófilos no interior do lúmen** de uma cripta.',
      'Quando os neutrófilos invadem o epitélio da cripta, ocorre **criptite**; quando se organizam no centro glandular, formam o abscesso.',
      'Neutrófilos são células da inflamação aguda e indicam **atividade**, mesmo quando também há componente crônico.'
    ],
    destaque:'**Inflamação crônica** = linfócitos, plasmócitos e macrófagos. **Atividade** = neutrófilos no epitélio ou no lúmen das criptas. O abscesso de cripta **não é exclusivo de Crohn**: também ocorre na RCU.'
  },
  { t:'checar', titulo:'Confira o entendimento', p:'22',
    perg:'Uma biópsia de cólon mostra neutrófilos preenchendo o lúmen de criptas. O que isso permite concluir?',
    dica:'O que os neutrófilos indicam? Esse achado é exclusivo de alguma das duas DII?',
    ops:[
      { t:'É doença de Crohn, porque abscesso de cripta é exclusivo dela', por:'O abscesso de cripta também ocorre na RCU. Precisa ser interpretado com a distribuição e a profundidade da inflamação.' },
      { t:'Há atividade inflamatória; o achado não define sozinho qual DII', por:'Neutrófilos nas criptas indicam atividade. A diferença entre Crohn e RCU vem da distribuição, da profundidade e dos demais achados.', certa:true },
      { t:'Há só inflamação crônica', por:'Inflamação crônica são linfócitos, plasmócitos e macrófagos. Neutrófilos indicam atividade.' }
    ]
  },
  { t:'abas', titulo:'Retocolite ulcerativa na peça', p:'23',
    intro:'Limitada ao cólon e ao reto, **contínua**, com inflamação geralmente restrita à **mucosa e à submucosa**.',
    abas:[
      { rot:'Colectomia', img:'p023_156', leg:'A: colectomia total com pancolite ativa: mucosa vermelha granular no ceco e mucosa atrófica lisa distalmente. B: demarcação nítida entre colite ativa (embaixo) e normal (em cima).',
        itens:['Retirada total do intestino grosso: quando a questão traz isso, é bem provável retocolite.','Mucosa **vermelha e granular** na doença ativa.'] },
      { rot:'Pseudopólipos', img:'p023_157', leg:'Peça de retocolite ulcerativa com pseudopólipos.',
        itens:['Diferente de Crohn, **não há segmentos lesionados intercalados com áreas preservadas**: a lesão é contínua.','**Pseudopólipos**: tecido muito vascularizado, uma tentativa de reparo da lesão, que forma um tecido de granulação.','Não é transmural.'] },
      { rot:'Microscopia', img:'p023_158', leg:'Cortes com pseudopólipo, abscessos em cripta, submucosa espessada ou destruída e muscular.',
        itens:['**Mucosa e submucosa afetadas, muscular preservada.**','Abscessos de cripta e pseudopólipos.'] }
    ]
  },
  { t:'explorar', titulo:'RCU na lâmina', p:'24', img:'p024_162', ann:'a_p024_162',
    intro:'Dois campos de RCU. Toque nos números.',
    pts:[
      { x:38, y:15, nome:'Pseudopólipo', txt:'Projeção de mucosa inflamada e regenerada.' },
      { x:18, y:55, nome:'Tecido de granulação', txt:'Tecido de reparo, rico em vasos.' },
      { x:25, y:38, nome:'Angiogênese', txt:'Formação de novos vasos no tecido de reparo.' },
      { x:27, y:90, nome:'Camada muscular', txt:'Preservada: a inflamação da RCU não é transmural.' },
      { x:80, y:44, nome:'Necrose', txt:'Necrose da submucosa (úlcera + inflamação), no campo da direita.' }
    ]
  },
  { t:'explorar', titulo:'Arquitetura das criptas', p:'24', img:'p024_163',
    intro:'Pequeno aumento de RCU. Toque nos números.',
    pts:[
      { x:42, y:33, nome:'Irregularidade das criptas', txt:'**Distorção das criptas** é forte indicativo de **cronicidade**: o tecido já passou por ciclos de agressão e reparo.' }
    ],
    destaque:'Neutrófilos invadindo a cripta = **criptite**; organizados no centro glandular = **abscesso de cripta**.'
  },
  { t:'tabela', titulo:'Crohn × retocolite ulcerativa', p:'19, 23, 25',
    cols:['Doença de Crohn','Retocolite ulcerativa'],
    linhas:[
      ['Localização','Qualquer segmento, da boca ao ânus; predomina no intestino delgado','Cólon e reto'],
      ['Distribuição','Segmentar (lesões salteadas)','Contínua'],
      ['Profundidade','Transmural','Mucosa e submucosa'],
      ['Granulomas','Podem estar presentes (não caseosos)','Bem formados não são característicos'],
      ['Macroscopia','Parede espessa, estenose, fissuras, calçamento, fístulas','Mucosa vermelha e granular, pseudopólipos'],
      ['Comum às duas','Abscesso de cripta, criptite e distorção das criptas','Abscesso de cripta, criptite e distorção das criptas']
    ]
  },
  { t:'abas', titulo:'Compare as duas lâminas', p:'25',
    intro:'O quadro da apostila compara duas lâminas em pequeno aumento.',
    abas:[
      { rot:'Esquerda', img:'p025_166', leg:'Esquerda e direita: duas lâminas de cólon em pequeno aumento.',
        itens:['A inflamação parece alcançar **camadas mais profundas**: padrão **transmural**.','Há agregados inflamatórios profundos, mas não dá para confirmar granulomas só nesta imagem.','Mais compatível com **doença de Crohn**.'] },
      { rot:'Direita', img:'p025_166', leg:'Esquerda e direita: duas lâminas de cólon em pequeno aumento.',
        itens:['Inflamação **predominante na mucosa**, sem evidência clara de inflamação transmural.','Não há granulomas bem formados claramente identificáveis.','Mais compatível com **retocolite ulcerativa**.'] },
      { rot:'O que não dá para ver', img:'p025_166', leg:'Pequeno aumento.',
        itens:['Criptite e abscesso de cripta só se confirmam com segurança em **maior aumento**.','A avaliação definitiva da arquitetura das criptas também exige maior aumento.'] }
    ]
  },
  { t:'resumo', titulo:'O que levar desta missão',
    itens:[
      'Parede: **mucosa, submucosa, muscular e serosa**. Na RCU, a mucosa é a principal acometida; no Crohn, a inflamação pode chegar à serosa.',
      'Marcadores: **duodeno = glândulas de Brunner**; **jejuno = vilosidades altas e pregas**; **íleo = placas de Peyer**. Paneth na base das criptas.',
      '**Crohn**: segmentar, transmural, parede espessa, estenose, fissuras, calçamento, fístulas, fibrose e **granulomas não caseosos**.',
      '**RCU**: cólon e reto, **contínua**, mucosa e submucosa, mucosa vermelha granular, **pseudopólipos**, muscular preservada.',
      'Neutrófilos (criptite, abscesso de cripta) = **atividade**; linfócitos e plasmócitos = **cronicidade**; distorção das criptas = **cronicidade**. Abscesso de cripta ocorre nas duas.'
    ]
  }
  ]
});
PM_CASES.m003 = {
  investigation:{
    title:'Investigação 003 · Dor na fossa ilíaca direita e fístula',
    fonte:'Caso da questão ANAT-09 do banco de Anatomopatologia; lâminas da apostila p. 20–21.',
    patient:{age:24,sex:'Masculino',complaint:'Dor em fossa ilíaca direita e diarreia sem sangue',history:'Perda de peso e uma fístula perianal. Foi feita ressecção do íleo terminal.'},
    evidence:[
      {id:'clinica',label:'Quadro clínico',relevance:1,text:'Diarreia **sem sangue**, perda de peso e **fístula perianal**.',feedback:'Fístula é pista importante: lembra inflamação profunda, que atravessa a parede.'},
      {id:'peca',label:'Peça do íleo terminal',relevance:2,img:'bank:anat_q09_0.jpg',cap:'Peça de ressecção do íleo terminal (questão ANAT-09).',text:'Parede **espessada**, luz **estreitada** e áreas doentes **intercaladas por mucosa normal**.',feedback:'Decisiva: lesões salteadas e estenose.'},
      {id:'micro',label:'Lâmina da peça',relevance:2,img:'p021_140',cap:'Corte da parede (apostila p. 21).',text:'Inflamação que alcança camadas profundas, **agregados organizados** sem necrose central e faixas de **fibrose**.',feedback:'Decisiva: profundidade e tipo de infiltrado.'},
      {id:'reto',label:'Retossigmoidoscopia',relevance:0,text:'O caso não descreve o reto. A peça analisada é do íleo terminal.',feedback:'Baixo rendimento aqui; a doença está no delgado.'}
    ],
    hypothesis:{prompt:'Qual é sua hipótese?',options:['Retocolite ulcerativa','Doença de Crohn','Colite amebiana','Pólipo adenomatoso'],correct:1,
      feedback:['A RCU é limitada ao cólon e ao reto e é contínua; aqui a doença está no íleo e é segmentar.','Íleo terminal, lesões salteadas, estenose e fístula formam o padrão do Crohn.','A amebíase forma úlceras em botão de camisa no cólon, sem lesões salteadas com estenose do íleo.','Nada no caso descreve lesão neoplásica.']},
    microscopy:{image:'p020_137',prompt:'Lâmina da parede em pequeno aumento. O que define o padrão desta inflamação?',options:['Inflamação restrita à mucosa','Inflamação que ultrapassa a mucosa e chega às camadas profundas (transmural)','Ausência de inflamação, só hipertrofia muscular','Trofozoítos no lúmen'],correct:1,hint:'Procure os agregados inflamatórios: em que altura da parede eles estão?',competencies:['visual','conceitual'],
      explain:['Inflamação restrita à mucosa é o padrão da RCU. Aqui há agregados profundos.','Os infiltrados aparecem na submucosa e nas camadas profundas: padrão transmural, do Crohn.','Há infiltrado inflamatório evidente; não é só hipertrofia.','Não há parasitas descritos; o achado é inflamatório.']},
    differential:[
      {prompt:'Qual achado mais afasta retocolite ulcerativa?',options:['Abscesso de cripta','Lesões salteadas no íleo, com inflamação transmural','Infiltrado de linfócitos e plasmócitos','Diarreia'],correct:1,competencies:['diferencial'],
        explain:['Abscesso de cripta ocorre nas duas DII.','A RCU é contínua, do cólon e reto, e restrita à mucosa e submucosa. Íleo, lesões salteadas e transmural são Crohn.','Infiltrado crônico existe nas duas.','Sintoma comum a várias doenças.']},
      {prompt:'Os agregados da lâmina são granulomas do Crohn. Como eles costumam ser?',options:['Com necrose caseosa central','Sem necrose caseosa central','Formados por neutrófilos e pus','Formados por ovos de parasita'],correct:1,competencies:['conceitual','visual'],
        explain:['Necrose caseosa não é o padrão do Crohn.','Granulomas do Crohn em geral não têm necrose caseosa.','Neutrófilos e pus formam abscesso, não granuloma.','Granuloma ao redor de ovo é da esquistossomose.']},
      {prompt:'Por que a parede espessa e estreita a luz?',options:['Por hipertrofia muscular isolada','Pela fibrose causada pela inflamação crônica','Por acúmulo de muco','Por pseudopólipos'],correct:1,competencies:['fisiopatologia'],
        explain:['Não é só hipertrofia: há inflamação e fibrose.','A inflamação crônica leva à fibrose, que espessa a parede e causa estenose; acima dela o intestino dilata.','Muco não explica a estenose.','Pseudopólipos são da RCU e não estreitam a parede dessa forma.']}
    ],
    final:{prompt:'Qual é a conclusão?',options:['Doença de Crohn','Retocolite ulcerativa','Colite amebiana','Esquistossomose intestinal'],correct:0,
      keyPrompt:'Qual combinação mais sustenta essa conclusão?',keyOptions:['Inflamação transmural, granulomas não caseosos, fibrose e lesões salteadas','Abscessos de cripta isolados','Mucosa vermelha granular contínua desde o reto','Trofozoítos com hemácias fagocitadas'],keyCorrect:0,competencies:['clinica','diferencial','visual']},
    debrief:{diagnosis:'Doença de Crohn (íleo terminal)',evidence:['Íleo terminal acometido de forma **segmentar** (áreas doentes intercaladas com mucosa normal).','Parede **espessada** e luz **estreitada**: fibrose e estenose.','Inflamação **transmural**, com **granulomas não caseosos** e fibrose.','**Fístula perianal**: fissuras profundas atravessam a parede e formam fístulas.'],
      clinic:'A profundidade explica a clínica: inflamação transmural forma fissuras, fístulas e abscessos; a fibrose estreita a luz. Na RCU, restrita à mucosa, o quadro típico é diarreia com sangue e muco.',
      revisar:{conceitual:'Crohn × retocolite ulcerativa (quadro)',visual:'Crohn na lâmina: transmural (p. 20)',diferencial:'Compare as duas lâminas (p. 25)',clinica:'Crohn na peça cirúrgica (p. 19–20)',fisiopatologia:'Crohn na peça cirúrgica (p. 19–20)'}}
  },
  mastery:[
    {id:'m3q1',image:'p025_166',q:'Duas lâminas de cólon em pequeno aumento: à esquerda a inflamação alcança as camadas profundas; à direita predomina na mucosa. A relação mais compatível é:',ops:['Esquerda RCU; direita Crohn','Esquerda Crohn; direita RCU','As duas são RCU','As duas são Crohn'],a:1,why:'Transmural favorece Crohn; predomínio na mucosa, sem granulomas evidentes, favorece RCU.',c:['visual','diferencial']},
    {id:'m3q2',image:'p023_156',q:'Colectomia total com mucosa vermelha e granular, sem intervalos de mucosa normal, do reto ao cólon proximal. O padrão é:',ops:['Segmentar, típico de Crohn','Contínuo, típico de retocolite ulcerativa','Úlceras em botão de camisa','Pólipos adenomatosos múltiplos'],a:1,why:'A RCU é limitada ao cólon e ao reto e tem comprometimento contínuo.',c:['visual','clinica']},
    {id:'m3q3',q:'Neutrófilos nas criptas e infiltrado linfoplasmocitário na lâmina própria indicam, respectivamente:',ops:['Cronicidade e atividade','Atividade e cronicidade','Infecção e neoplasia','Duas formas de atividade'],a:1,why:'Neutrófilos = atividade; linfócitos e plasmócitos = cronicidade.',c:['conceitual','diferencial']},
    {id:'m3q4',image:'p021_140',q:'Agregados organizados de macrófagos epitelioides, sem necrose caseosa, numa parede intestinal com fibrose. Esse achado favorece:',ops:['Doença de Crohn','Retocolite ulcerativa','Gastrite por H. pylori','Adenoma tubular'],a:0,why:'Granulomas não caseosos favorecem Crohn; granulomas bem formados não são característicos da RCU.',c:['visual','diferencial']},
    {id:'m3q5',q:'Por que a doença de Crohn pode formar fístulas e a retocolite, em geral, não?',ops:['Porque o Crohn é contínuo','Porque a inflamação do Crohn é transmural, com fissuras profundas que atravessam a parede','Porque a RCU tem granulomas','Porque o Crohn só acomete a mucosa'],a:1,why:'Fissuras profundas de uma inflamação transmural atravessam a parede e formam fístulas; a RCU fica na mucosa e na submucosa.',c:['fisiopatologia','clinica']},
    {id:'m3q6',image:'p018_129',q:'Lâmina de intestino delgado com grandes agregados linfoides na submucosa. Qual segmento?',ops:['Duodeno','Jejuno','Íleo','Cólon'],a:2,why:'Placas de Peyer são o marcador do íleo.',c:['visual','conceitual']}
  ]
};

/* ===== Missão 004 · Enterocolites infecciosas (apostila p. 25–31; questões ANAT-13 a 16) ===== */
PM_MISSOES.push({
  id:'m004', num:'004', titulo:'Enterocolites infecciosas',
  sub:'Tipos de diarreia e as quatro parasitoses da apostila',
  pags:'25–31', cor:'#d9578f',
  questoes:['ANAT-13','ANAT-14','ANAT-15','ANAT-16'],
  etapas:[
  { t:'tabela', titulo:'Diarreia: quatro mecanismos', p:'25–26',
    cols:['Mecanismo e pistas'],
    linhas:[
      ['Secretora','Secreção ativa de íons e água para o lúmen. Fezes aquosas; **persiste durante o jejum**; mucosa pode estar relativamente preservada.'],
      ['Osmótica','Solutos não absorvidos retêm água no lúmen. Geralmente **melhora com o jejum**.'],
      ['Má absorção','Redução da superfície absortiva ou lesão dos enterócitos; pode haver **achatamento das vilosidades**.'],
      ['Motora','Alteração da motilidade intestinal.'],
      ['Exsudativa','Lesão inflamatória da mucosa com perda de plasma, proteínas, muco e sangue. Pode haver criptite, abscessos de cripta e ulceração.']
    ],
    nota:'Na prática: **inflamação e destruição da mucosa** → pense em diarreia exsudativa. **Vilosidades achatadas e parasitas aderidos** → padrão de má absorção.'
  },
  { t:'abas', titulo:'Os três padrões de lesão parasitária', p:'26–27',
    intro:'Antes de cada parasita, os padrões. Eles dizem onde o parasita fica e o que ele faz ao tecido.',
    abas:[
      { rot:'Superficial', img:'p026_170', leg:'Parasitas aderidos à superfície da mucosa (setas).',
        itens:['**Acometimento superficial**: o parasita adere à superfície intestinal **sem invadir** profundamente os tecidos.','Exemplo: *Giardia lamblia*.'] },
      { rot:'Invasão', img:'p026_171', leg:'Larvas nas criptas e infiltrado eosinofílico.',
        itens:['**Invasão da mucosa**: o parasita penetra os tecidos e provoca lesão local.','Exemplos: *Strongyloides stercoralis* e *Entamoeba histolytica*.'] },
      { rot:'Ovos e granuloma', img:'p027_174', leg:'Ovos retidos na parede, com reação ao redor.',
        itens:['**Deposição de ovos e reação granulomatosa**: os ovos ficam retidos na parede intestinal, provocando reação inflamatória granulomatosa e possível fibrose.','Exemplo: *Schistosoma mansoni*.'] }
    ]
  },
  { t:'tabela', titulo:'Quadro das parasitoses', p:'26',
    cols:['Giardia','Strongyloides','Schistosoma'],
    linhas:[
      ['Forma infectante','Cisto maduro (4 núcleos)','Larva filarioide (L3), no solo contaminado','Cercária, liberada pelo caramujo na água doce'],
      ['Transmissão','Ingestão de água ou alimentos contaminados com cistos','Penetração ativa da larva através da pele (geralmente dos pés)','Penetração ativa da cercária pela pele em água doce contaminada'],
      ['Local no hospedeiro','Intestino delgado (duodeno e jejuno proximal); não invade','Pulmões (migração) e intestino delgado, onde as fêmeas se alojam na mucosa','Sistema porta-hepático: fígado e plexo mesentérico (veias do intestino, principalmente cólon)'],
      ['Formas encontradas','Trofozoíto e cisto','Larva rabditoide (nas fezes), larva filarioide, fêmea partenogenética','Ovo com espinho lateral, miracídio, cercária, esquistossômulo'],
      ['Material para diagnóstico','Fezes (EPF), aspirado duodenal, swab duodenal','Fezes com técnicas específicas (Baermann-Moraes, placa de ágar), escarro','Fezes (Kato-Katz, Hoffman, Ritchie), biópsia retal, urina (S. haematobium)']
    ]
  },
  { t:'texto', titulo:'Giardia lamblia', p:'27', img:'p027_176', leg:'Trofozoíto de Giardia: formato piriforme e dois núcleos.',
    corpo:[
      '**Como identificar:** protozoário flagelado, **piriforme**, com **dois núcleos que parecem "olhos"**. Coloniza principalmente o **duodeno e o jejuno proximal**.',
      '**Transmissão:** fecal-oral, pela ingestão de cistos.',
      '**Mecanismo:** os trofozoítos aderem à superfície pelo **disco ventral**, prejudicando a borda em escova e a absorção, **sem invasão profunda**.'
    ],
    destaque:'Padrão de lesão: **superficial**. Tipo de diarreia: **má absorção**.'
  },
  { t:'abas', titulo:'Giardia na lâmina', p:'27–28',
    abas:[
      { rot:'Vilosidades', img:'p027_175', leg:'À esquerda, vilosidades normais; à direita, vilosidades achatadas.',
        itens:['Um dos principais achados: **vilosidades achatadas**, geralmente com atrofia leve a moderada.'] },
      { rot:'Na superfície', imgs:['p028_180','p028_181'], leg:'Trofozoítos de Giardia na superfície da mucosa.',
        itens:['Os parasitas ficam **na superfície**, junto ao epitélio, sem invadir.'] },
      { rot:'Visão geral', img:'p027_177', leg:'Pequeno aumento de mucosa com Giardia.',
        itens:['Trofozoítos aderidos à superfície intestinal.','Inflamação: infiltrado mononuclear na lâmina própria.','Macrófagos pigmentados.'] }
    ]
  },
  { t:'explorar', titulo:'Strongyloides stercoralis', p:'28', img:'p028_183', ann:'a_p028_183',
    intro:'Nematódeo cujas **larvas podem ser encontradas nas criptas**. As larvas infectantes **penetram a pele**, migram pelos **pulmões** e chegam ao trato gastrointestinal; pode ocorrer **autoinfecção**. Toque nos números.',
    pts:[
      { x:56, y:40, nome:'Larvas rabditoides nas criptas', txt:'Cortes das larvas dentro das criptas intestinais.' },
      { x:12, y:52, nome:'Larvas rabditoides', txt:'Outra cripta com larvas.' },
      { x:31, y:43, nome:'Infiltrado eosinofílico', txt:'Infiltrado **eosinofílico proeminente**: a resposta típica à invasão epitelial e à lesão mecânica.' }
    ],
    destaque:'O padrão é **invasivo**, com resposta eosinofílica e edema da lâmina própria. **Atenção clínica:** o risco de **hiperinfecção** aumenta em imunossuprimidos: uso de corticoides, transplantados e pessoas com **HTLV-1**.'
  },
  { t:'explorar', titulo:'Larvas em outros cortes', p:'28', img:'p028_184', ann:'a_p028_184',
    intro:'O aspecto muda conforme o plano de corte. Toque nos números.',
    pts:[
      { x:21, y:44, nome:'Larvas rabditoides', txt:'Larvas na mucosa.' },
      { x:29, y:68, nome:'Larva rabditoide em outro plano de corte', txt:'Daí o aspecto alongado.' }
    ]
  },
  { t:'checar', titulo:'Confira o entendimento', p:'27–28',
    perg:'Biópsia duodenal: estruturas piriformes aderidas à superfície, sem invasão, com vilosidades achatadas. E se fossem larvas dentro das criptas com muitos eosinófilos?',
    dica:'Um parasita fica na superfície; o outro invade as criptas.',
    ops:[
      { t:'Primeiro Giardia; segundo Strongyloides', por:'Giardia adere à superfície sem invadir (má absorção); Strongyloides invade as criptas com resposta eosinofílica.', certa:true },
      { t:'Primeiro Strongyloides; segundo Giardia', por:'Está invertido: larvas nas criptas com eosinófilos são do Strongyloides.' },
      { t:'Os dois são Entamoeba histolytica', por:'A ameba acomete o cólon, principalmente ceco e ascendente, não a superfície duodenal.' }
    ]
  },
  { t:'texto', titulo:'Entamoeba histolytica', p:'29', img:'p029_187', leg:'Trofozoítos com hemácias fagocitadas no citoplasma.',
    corpo:[
      '**Como identificar:** protozoário que **invade a mucosa do cólon**. Os trofozoítos podem ter **hemácias fagocitadas no citoplasma**, achado clássico.',
      '**Transmissão:** fecal-oral, pela ingestão de cistos.',
      '**Localização:** principalmente **ceco e cólon ascendente**, podendo acometer outras regiões do cólon e o reto.'
    ]
  },
  { t:'explorar', titulo:'Ameba na lâmina', p:'29', img:'p029_188', ann:'a_p029_188',
    intro:'Fragmento de mucosa com amebas. Toque nos números.',
    pts:[
      { x:56, y:44, nome:'Trofozoítos', txt:'Células grandes, arredondadas, com citoplasma vermelho-magenta e núcleos evidentes, corados em roxo ou azul.' },
      { x:40, y:84, nome:'Processo inflamatório', txt:'Infiltrado de neutrófilos e macrófagos ao redor do parasita.' },
      { x:24, y:50, nome:'Necrose tecidual', txt:'Destruição da arquitetura normal da mucosa.' }
    ]
  },
  { t:'explorar', titulo:'Trofozoítos e infiltrado', p:'29', img:'p029_189', ann:'a_p029_189',
    intro:'Toque nos números.',
    pts:[
      { x:67, y:41, nome:'Trofozoíto', txt:'Trofozoítos na mucosa e submucosa, com núcleo evidente e **hemácias fagocitadas**.' },
      { x:83, y:24, nome:'Infiltrado inflamatório', txt:'Células inflamatórias ao redor.' },
      { x:17, y:75, nome:'Cisto', txt:'Estrutura arredondada, com múltiplos núcleos visíveis (até 4).' }
    ]
  },
  { t:'abas', titulo:'A úlcera em botão de camisa', p:'30',
    abas:[
      { rot:'Lâmina', img:'p030_192', leg:'Úlcera que se alarga na submucosa: padrão em botão de camisa.',
        itens:['Ação fagocitária do parasita sobre a mucosa intestinal.','A lesão se abre pouco na mucosa e se alarga por baixo: **úlcera em botão de camisa** (ou em frasco).'] },
      { rot:'Macroscopia', img:'p030_194', leg:'Múltiplas pequenas úlceras.',
        itens:['Achado macroscópico clássico: **múltiplas pequenas úlceras**, em frasco.'] },
      { rot:'Maior aumento', img:'p030_193', leg:'Trofozoítos junto a infiltrado inflamatório.',
        itens:['Trofozoítos ao lado de infiltrado inflamatório.'] }
    ]
  },
  { t:'explorar', titulo:'Schistosoma mansoni', p:'31', img:'p031_198',
    intro:'**Como identificar:** procure o **ovo com espícula lateral** no tecido. A cercária penetra a pele; os vermes adultos vivem nos **vasos mesentéricos**, e os ovos atravessam a parede intestinal. Alguns ficam retidos. Toque no número.',
    pts:[
      { x:56, y:60, nome:'Ovo com espícula lateral', txt:'Ovo de *S. mansoni* retido na parede do intestino.' }
    ]
  },
  { t:'explorar', titulo:'O granuloma em torno do ovo', p:'31', img:'p031_199', ann:'a_p031_199',
    intro:'Quando os ovos ficam retidos, os **antígenos liberados** desencadeiam uma resposta que forma **granulomas**. Com a persistência, pode haver **fibrose**. Toque nos números.',
    pts:[
      { x:24, y:45, nome:'Granuloma pela casca do ovo', txt:'Reação organizada em torno do ovo, delimitada por **cápsula fibrosa** e cercada por um **halo linfocitário**.' },
      { x:78, y:51, nome:'Granuloma epitelioide', txt:'Granuloma epitelioide ao redor do ovo, em menor aumento.' }
    ]
  },
  { t:'checar', titulo:'Confira o entendimento', p:'29–31',
    perg:'Biópsia retal com uma estrutura ovalada com espícula lateral, cercada por granuloma. Qual o agente e por que há granuloma?',
    dica:'Qual parasita deixa ovos retidos na parede? O que libera o granuloma?',
    ops:[
      { t:'Entamoeba histolytica; as hemácias fagocitadas formam o granuloma', por:'A ameba forma úlceras em botão de camisa, não granuloma ao redor de um ovo.' },
      { t:'Schistosoma mansoni; os antígenos do ovo retido desencadeiam o granuloma', por:'Ovo com espícula lateral retido na parede, granuloma e, com o tempo, fibrose.', certa:true },
      { t:'Doença de Crohn; todo granuloma intestinal é Crohn', por:'Granuloma em torno de um ovo indica esquistossomose.' }
    ]
  },
  { t:'resumo', titulo:'O que levar desta missão',
    itens:[
      'Diarreia: **secretora** (persiste em jejum), **osmótica** (melhora em jejum), **má absorção** (vilosidades achatadas), **motora** e **exsudativa** (inflamação, sangue, criptite, úlceras).',
      '**Giardia**: piriforme, dois núcleos ("olhos"), **adere pelo disco ventral** no duodeno e jejuno proximal, **sem invadir**; vilosidades achatadas; má absorção.',
      '**Strongyloides**: larvas **nas criptas**, infiltrado **eosinofílico**; penetra a pele, passa pelos pulmões; **autoinfecção** e hiperinfecção em imunossuprimidos (corticoide, HTLV-1).',
      '**Entamoeba histolytica**: invade o **cólon** (ceco e ascendente); trofozoítos com **hemácias fagocitadas**; úlceras em **botão de camisa**.',
      '**Schistosoma mansoni**: **ovo com espícula lateral** retido na parede → **granuloma** → fibrose. Adultos nos vasos mesentéricos; cercária penetra a pele.'
    ]
  }
  ]
});
PM_CASES.m004 = {
  investigation:{
    title:'Investigação 004 · Diarreia com sangue e úlceras no ceco',
    fonte:'Caso da questão ANAT-15 do banco de Anatomopatologia; imagens da apostila p. 29–30.',
    patient:{age:35,sex:'Masculino',complaint:'Diarreia com sangue e muco',history:'Mora em área sem saneamento básico. Tem cólicas e febre baixa. Foi feita colonoscopia com biópsia.'},
    evidence:[
      {id:'epi',label:'Contexto e sintomas',relevance:1,text:'Área **sem saneamento básico**; diarreia **com sangue e muco**, cólicas e febre baixa.',feedback:'Sangue e muco sugerem diarreia **exsudativa** (lesão inflamatória da mucosa); o saneamento aponta transmissão fecal-oral.'},
      {id:'colono',label:'Colonoscopia',relevance:2,img:'p030_194',cap:'Múltiplas pequenas úlceras (apostila p. 30).',text:'**Múltiplas pequenas úlceras no ceco e no cólon ascendente.**',feedback:'Decisiva: localização típica e o padrão de úlceras.'},
      {id:'bio',label:'Biópsia da borda da úlcera',relevance:2,text:'Você vai examinar a lâmina na etapa de microscopia.',feedback:'A biópsia mostra o agente; a lâmina aparece na etapa 4.'},
      {id:'duodeno',label:'Biópsia duodenal',relevance:0,text:'O caso não tem biópsia duodenal: a lesão está no cólon.',feedback:'Baixo rendimento: a doença está no ceco e no ascendente.'}
    ],
    hypothesis:{prompt:'Qual é sua hipótese?',options:['Giardíase','Amebíase intestinal','Retocolite ulcerativa','Estrongiloidíase'],correct:1,
      feedback:['A Giardia fica no delgado, não invade e causa má absorção, sem sangue.','Diarreia com sangue, saneamento ruim e úlceras no ceco e ascendente formam o padrão da ameba.','A RCU é contínua a partir do reto; aqui são úlceras no ceco e ascendente.','O Strongyloides fica nas criptas do delgado, com eosinófilos.']},
    microscopy:{image:'bank:anat_q15_0.jpg',prompt:'Borda da úlcera (setas). O que são as estruturas apontadas?',options:['Macrófagos espumosos do Crohn','Trofozoítos de Entamoeba histolytica','Trofozoítos de Giardia','Ovos de Schistosoma'],correct:1,hint:'Células grandes, arredondadas, de núcleo evidente, em meio ao tecido necrótico. O achado clássico delas é ter hemácias no citoplasma.',competencies:['visual','conceitual'],
      explain:['Hemácias fagocitadas em células grandes, num contexto de úlceras no cólon, indicam ameba, não Crohn.','Trofozoítos grandes e arredondados, com núcleo evidente e hemácias fagocitadas, na borda de úlcera do cólon.','A Giardia é piriforme, binucleada, e fica aderida à superfície do delgado, sem invadir.','O ovo de Schistosoma tem espícula lateral e fica envolto por granuloma.']},
    differential:[
      {prompt:'Qual é o achado clássico para identificar o trofozoíto de E. histolytica?',options:['Dois núcleos em "olhos"','Hemácias fagocitadas no citoplasma','Espícula lateral','Disco ventral'],correct:1,competencies:['visual','conceitual'],
        explain:['Os "olhos" são da Giardia.','É o achado clássico da ameba.','Espícula lateral é do ovo de S. mansoni.','O disco ventral é da Giardia.']},
      {prompt:'Por que a úlcera tem forma de botão de camisa?',options:['Porque o parasita só adere à superfície','Porque o parasita invade e destrói a mucosa e se alarga na submucosa','Porque há fibrose em torno de ovos','Porque é transmural como no Crohn'],correct:1,competencies:['fisiopatologia'],
        explain:['Quem só adere é a Giardia; não forma úlcera.','A ameba invade a mucosa e, por ação fagocitária, a lesão se alarga por baixo: abertura estreita e base larga.','Granuloma em torno de ovos é da esquistossomose.','Não é inflamação transmural crônica.']},
      {prompt:'Que tipo de diarreia este paciente tem?',options:['Secretora','Osmótica','Exsudativa','Má absorção'],correct:2,competencies:['clinica','fisiopatologia'],
        explain:['A secretora é aquosa, com mucosa relativamente preservada.','A osmótica melhora com jejum e não tem sangue.','Lesão inflamatória da mucosa com perda de sangue e muco: exsudativa.','Má absorção é o padrão da Giardia, sem sangue.']}
    ],
    final:{prompt:'Qual é a conclusão?',options:['Amebíase intestinal (colite amebiana)','Giardíase','Doença de Crohn','Esquistossomose intestinal'],correct:0,
      keyPrompt:'Qual combinação mais sustenta essa conclusão?',keyOptions:['Trofozoítos com hemácias fagocitadas na borda de úlceras do ceco e ascendente','Vilosidades achatadas no duodeno','Granulomas não caseosos transmurais','Ovo com espícula lateral'],keyCorrect:0,competencies:['clinica','diferencial','visual']},
    debrief:{diagnosis:'Amebíase intestinal (colite amebiana)',evidence:['Transmissão **fecal-oral** (cistos), compatível com área sem saneamento.','**Ceco e cólon ascendente**: localização principal da ameba.','**Trofozoítos com hemácias fagocitadas**: achado clássico.','Úlceras em **botão de camisa**: a ameba invade e destrói a mucosa.','Sangue e muco = diarreia **exsudativa**.'],
      clinic:'A ameba é o parasita da apostila que invade a mucosa do cólon. Giardia (superficial, delgado) dá má absorção; Strongyloides invade as criptas do delgado com eosinófilos; Schistosoma deixa ovos que formam granulomas.',
      revisar:{conceitual:'Entamoeba histolytica (p. 29)',visual:'Ameba na lâmina (p. 29)',diferencial:'Os três padrões de lesão parasitária (p. 26–27)',clinica:'Diarreia: quatro mecanismos (p. 25–26)',fisiopatologia:'A úlcera em botão de camisa (p. 30)'}}
  },
  mastery:[
    {id:'m4q1',image:'p027_175',q:'Biópsia duodenal: à esquerda vilosidades normais; à direita, vilosidades achatadas. Em criança com fezes gordurosas, o padrão sugere:',ops:['Diarreia exsudativa por ameba','Má absorção, como na giardíase','Diarreia secretora com mucosa intacta','Granulomas de esquistossomose'],a:1,why:'Vilosidades achatadas reduzem a superfície absortiva: padrão de má absorção, típico da Giardia.',c:['visual','clinica']},
    {id:'m4q2',image:'p028_183',q:'Larvas dentro das criptas intestinais, com infiltrado eosinofílico proeminente. O agente e sua porta de entrada são:',ops:['Giardia; ingestão de cistos','Strongyloides; penetração da larva pela pele','Ameba; ingestão de cistos','Schistosoma; ingestão de ovos'],a:1,why:'Strongyloides: larvas nas criptas com eosinófilos; a larva filarioide penetra a pele e migra pelos pulmões.',c:['visual','conceitual']},
    {id:'m4q3',q:'Em qual paciente o risco de hiperinfecção por Strongyloides é maior?',ops:['Criança em creche','Adulto em corticoide em dose alta e com HTLV-1','Morador de zona rural com banhos em lagoa','Paciente com DRGE'],a:1,why:'Imunossuprimidos (corticoide, transplantados, HTLV-1) têm maior risco de hiperinfecção, pela autoinfecção.',c:['clinica','fisiopatologia']},
    {id:'m4q4',image:'p031_198',q:'Estrutura ovalada com espícula lateral na parede intestinal. O que ela causa quando fica retida?',ops:['Úlcera em botão de camisa','Achatamento de vilosidades','Granuloma e, com o tempo, fibrose','Abscesso de cripta'],a:2,why:'Ovo de S. mansoni retido: os antígenos desencadeiam granuloma; a persistência leva à fibrose.',c:['visual','fisiopatologia']},
    {id:'m4q5',image:'p030_192',q:'Lâmina de cólon com úlcera de abertura estreita que se alarga na submucosa. O agente mais provável é:',ops:['Giardia lamblia','Entamoeba histolytica','Strongyloides stercoralis','Schistosoma mansoni'],a:1,why:'Úlcera em botão de camisa é a lesão da ameba, que invade a mucosa do cólon.',c:['visual','diferencial']},
    {id:'m4q6',q:'Qual parasita da apostila NÃO invade a mucosa?',ops:['Giardia lamblia','Entamoeba histolytica','Strongyloides stercoralis','Os três invadem'],a:0,why:'A Giardia adere à superfície pelo disco ventral, sem invasão profunda.',c:['conceitual','diferencial']}
  ]
};

/* ===== Missão 005 · Pólipos intestinais e câncer colorretal (apostila p. 32–39; questões ANAT-17 a 20) ===== */
PM_MISSOES.push({
  id:'m005', num:'005', titulo:'Pólipos intestinais e câncer colorretal',
  sub:'Do pólipo ao adenoma e do adenoma ao adenocarcinoma',
  pags:'32–39', cor:'#d9578f',
  questoes:['ANAT-17','ANAT-18','ANAT-19','ANAT-20'],
  etapas:[
  { t:'abas', titulo:'Pólipo: primeiro, o formato', p:'32',
    intro:'Um pólipo é uma **projeção anormal da mucosa para o lúmen** intestinal. Na macroscopia, a primeira coisa é observar o formato.',
    abas:[
      { rot:'Séssil', img:'p032_203', leg:'Pólipo séssil na endoscopia.',
        itens:['Base larga, **sem pedículo**.','Mais difícil de tirar na endoscopia.'] },
      { rot:'Pediculado', img:'p032_204', leg:'Adenoma tubular (pólipo pedunculado).',
        itens:['Tem uma **haste** que conecta a lesão à mucosa.','Mais fácil de ressecar.'] }
    ]
  },
  { t:'tabela', titulo:'Classificação dos pólipos', p:'32–33',
    cols:['Características','Exemplos'],
    linhas:[
      ['Hiperplásicos','Crescimento **não neoplásico** das criptas; comuns.','—'],
      ['Hamartomatosos','Desorganização de tecidos normalmente presentes.','Síndrome de Peutz-Jeghers e polipose juvenil.'],
      ['Inflamatórios','Associados a processos inflamatórios.','Colites.'],
      ['Adenomas','Neoplasias **benignas com displasia epitelial** e potencial de progressão para adenocarcinoma.','Pólipos neoplásicos **precursores** do câncer colorretal.']
    ],
    nota:'O adenoma é neoplasia epitelial benigna **com displasia** que pode evoluir para adenocarcinoma. O risco de malignização aumenta com o **tamanho**, o **componente viloso** e o **grau de displasia**.'
  },
  { t:'explorar', titulo:'Adenoma tubular', p:'33', img:'p033_207', ann:'a_p033_207',
    intro:'O tipo mais comum. Toque nos números.',
    pts:[
      { x:76, y:28, nome:'Glândulas tubulares', txt:'Numerosas glândulas neoplásicas **arredondadas, ovais ou alongadas**, próximas umas das outras, formando estruturas tubulares.' },
      { x:79, y:51, nome:'Epitélio displásico', txt:'Glândulas revestidas por epitélio colunar **com displasia**: núcleos **alongados, hipercromáticos e aumentados**.' },
      { x:56, y:96, nome:'Pseudoestratificação', txt:'Os núcleos se posicionam em diferentes níveis do epitélio.' }
    ],
    destaque:'Adenomas tubulares geralmente são **pequenos e pediculados**, os **mais comuns**, com **menor** potencial de malignização.'
  },
  { t:'explorar', titulo:'Adenoma viloso', p:'34', img:'p034_211', ann:'a_p034_211',
    intro:'Toque nos números.',
    pts:[
      { x:23, y:55, nome:'Projeções vilosas', txt:'Numerosas projeções alongadas, semelhantes a **dedos de luva**, que se estendem para a luz. Cada uma tem um **eixo fibrovascular** central revestido por epitélio displásico.' },
      { x:70, y:32, nome:'Epitélio displásico', txt:'Células colunares com núcleos **aumentados, alongados e hipercromáticos**. A atividade mitótica não é tão aumentada.' }
    ],
    destaque:'Adenomas vilosos geralmente são **maiores, sésseis**, localizados no **reto**, os **menos comuns** e com potencial de malignização **mais alto**.'
  },
  { t:'abas', titulo:'Tubular, viloso e tubuloviloso', p:'33–35',
    abas:[
      { rot:'Tubular', img:'p033_208', leg:'Glândulas de arquitetura tubular separadas por estroma conjuntivo-vascular.',
        itens:['As glândulas ficam separadas por quantidade variável de tecido conjuntivo.'] },
      { rot:'Viloso', img:'p034_213', leg:'Componente viloso: projeções papilíferas.',
        itens:['Projeções papilíferas na macroscopia.'] },
      { rot:'Tubuloviloso', img:'p034_214', leg:'Áreas tubulares e vilosas na mesma lesão.',
        itens:['**Arquitetura mista**: glândulas tubulares e projeções vilosas na mesma lesão.','O componente viloso corresponde a cerca de **25–75%** da arquitetura.','Malignidade **intermediária**, pela arquitetura mista.'] }
    ]
  },
  { t:'texto', titulo:'Displasia de baixo e de alto grau', p:'35', img:'p035_219', leg:'Displasia de baixo e de alto grau nos três tipos de adenoma.',
    corpo:[
      '**Baixo grau** (morfologia mais preservada): núcleos alongados e hipercromáticos, relativamente uniformes; **polaridade relativamente preservada**; pseudoestratificação; menor perda de mucina.',
      '**Alto grau** (atipia mais acentuada): núcleos **maiores, pleomórficos**; **perda da polaridade**; **aumento da atividade mitótica**; pseudoestratificação acentuada; redução importante das células caliciformes.'
    ]
  },
  { t:'checar', titulo:'Confira o entendimento', p:'33–35',
    perg:'Qual adenoma tem MAIOR risco de malignização?',
    dica:'O risco aumenta com o tamanho, o componente viloso e o grau de displasia.',
    ops:[
      { t:'Adenoma tubular pequeno, pediculado, com displasia de baixo grau', por:'É o perfil de menor risco.' },
      { t:'Adenoma viloso grande, séssil, com displasia de alto grau', por:'Reúne os três fatores que aumentam o risco: tamanho, componente viloso e alto grau.', certa:true },
      { t:'Pólipo hiperplásico', por:'Pólipo hiperplásico é crescimento não neoplásico, sem displasia.' }
    ]
  },
  { t:'texto', titulo:'Polipose adenomatosa familiar (PAF)', p:'36', img:'p036_222', leg:'Adenomas na polipose adenomatosa familiar.',
    corpo:[
      'Síndrome de herança **autossômica dominante**, com **numerosos adenomas** colorretais, frequentemente **desde a adolescência**.',
      'Sem tratamento, o adenocarcinoma se desenvolve em **praticamente todos** os pacientes, frequentemente antes dos 30 anos e quase sempre até os 50. Os adenomas costumam ser numerosos e pequenos.'
    ],
    destaque:'Cara de prova: **múltiplos pólipos adenomatosos por todo o cólon em paciente jovem** → polipose adenomatosa familiar.'
  },
  { t:'sequencia', titulo:'Carcinogênese colorretal', p:'36', img:'p036_223',
    intro:'O câncer colorretal não costuma surgir de forma súbita: na via clássica há **acúmulo progressivo** de alterações genéticas e morfológicas.',
    passos:[
      { h:'Mucosa normal', txt:'Ponto de partida.' },
      { h:'Alteração do APC → via β-catenina', txt:'Aumento da proliferação e alterações das criptas.' },
      { h:'Adenoma com displasia', txt:'Neoplasia benigna, ainda sem invasão.' },
      { h:'Acúmulo de mutações (KRAS, perda de p53)', txt:'Novas alterações genéticas se somam.' },
      { h:'Adenocarcinoma invasivo', txt:'O tumor invade a submucosa.' }
    ],
    nota:'O câncer é uma doença **genética**, causada por mutações no DNA, espontâneas ou induzidas por agressões ambientais. **Atenção à prova:** o adenoma tem displasia, mas o critério fundamental de carcinoma invasivo é a **invasão da submucosa, após o rompimento da muscular da mucosa**. Crescer para o lúmen, isoladamente, não comprova invasão.'
  },
  { t:'tabela', titulo:'Hallmarks of cancer', p:'36–37',
    cols:['O que significa'],
    linhas:[
      ['Sinalização proliferativa sustentada','Proliferação contínua: estímulos para se multiplicar mesmo quando não deveriam.'],
      ['Escape dos supressores de crescimento','Perda dos freios celulares: alterações em genes como **TP53 e RB1**.'],
      ['Resistência à morte celular','Evasão da apoptose.'],
      ['Imortalidade replicativa','Divisão repetida, frequentemente por ativação da **telomerase**.'],
      ['Indução de angiogênese','Formação de novos vasos para obter oxigênio e nutrientes.'],
      ['Invasão e metástase','Invasão de tecidos adjacentes e disseminação para órgãos distantes.'],
      ['Desregulação do metabolismo','Reprogramação metabólica para sustentar o crescimento.'],
      ['Evasão do sistema imune','Mecanismos para evitar o reconhecimento e a eliminação pelas células imunes.']
    ]
  },
  { t:'abas', titulo:'Adenocarcinoma do cólon: macroscopia', p:'37–38',
    intro:'Neoplasia maligna do **epitélio glandular** do cólon ou reto. O diagnóstico depende de reconhecer o **crescimento infiltrativo e a invasão da submucosa**.',
    abas:[
      { rot:'Três formas', img:'p037_226', leg:'Polipoide/exofítico, ulcerado/infiltrativo e circunferencial (napkin-ring).',
        itens:['**Polipoide ou exofítico:** massa que cresce para o lúmen; mais comum no **cólon direito**.','**Ulcerado ou infiltrativo:** ulceração central e infiltração da parede; mais comum no **cólon esquerdo**.','**Napkin-ring:** cresce ao redor da parede, estreitando o lúmen e podendo obstruir; típico do **cólon esquerdo**.'] },
      { rot:'Estenosante', img:'p038_231', leg:'Carcinoma com dilatação pré-estenótica.',
        itens:['O tumor que circunda a parede estreita a luz.','Acima dele, **dilatação pré-estenótica**.'] },
      { rot:'Invasão da parede', img:'p037_227', leg:'Massa ulcerada circunferencial com ruptura da muscular própria.',
        itens:['Invasão macroscópica da parede, vista pela **ruptura da muscular própria**.'] }
    ]
  },
  { t:'explorar', titulo:'Adenocarcinoma na lâmina', p:'38', img:'p038_232', ann:'a_p038_232',
    intro:'De modo geral, todos apresentam estes achados. Toque nos números.',
    pts:[
      { x:57, y:27, nome:'Glândulas irregulares e anguladas', txt:'A arquitetura glandular perde a regularidade.' },
      { x:85, y:43, nome:'Desmoplasia', txt:'Estroma fibroso reacional ao redor das glândulas tumorais, indicando que **está ocorrendo invasão** tecidual.' },
      { x:77, y:66, nome:'Desmoplasia', txt:'Mais estroma reacional.' }
    ],
    destaque:'Na atipia celular: núcleos grandes e pleomórficos, nucléolos evidentes, mitoses frequentes e perda de polaridade.'
  },
  { t:'explorar', titulo:'Normal × adenocarcinoma', p:'38', img:'p038_233',
    intro:'Lado a lado: cólon normal e adenocarcinoma. Toque no número.',
    pts:[
      { x:85, y:34, nome:'Crescimento infiltrativo', txt:'O tumor **rompe a muscular da mucosa e chega à submucosa**: o critério de invasão.' }
    ]
  },
  { t:'abas', titulo:'Grau de diferenciação e tipo mucinoso', p:'39',
    abas:[
      { rot:'Bem diferenciado', img:'p039_236', leg:'Adenocarcinoma bem diferenciado.',
        itens:['Ainda **forma glândulas reconhecíveis**, embora irregulares e atípicas.','Pode ter mucina no lúmen, núcleos aumentados e hipercromáticos, mitoses e desmoplasia.'] },
      { rot:'Pouco diferenciado', img:'p039_237', leg:'Adenocarcinoma pouco diferenciado.',
        itens:['**Perda quase total da arquitetura glandular**, com crescimento em **blocos ou cordões** celulares sólidos.','Pleomorfismo nuclear, atividade mitótica aumentada e estroma desmoplásico.'] },
      { rot:'Mucinoso', img:'p039_238', leg:'Adenocarcinoma mucinoso.',
        itens:['**Extensos lagos de mucina extracelular.**','Células neoplásicas dispersas ou em pequenos grupos; podem aparecer células em anel de sinete.','Núcleos com pleomorfismo acentuado, hipercromasia e contorno irregular, além de infiltrado inflamatório crônico.'] }
    ]
  },
  { t:'checar', titulo:'Confira o entendimento', p:'36, 38',
    perg:'Um pólipo grande cresce para o lúmen, com displasia de alto grau no epitélio, mas a muscular da mucosa está intacta. É carcinoma invasivo?',
    dica:'Qual é o critério fundamental de invasão segundo a apostila?',
    ops:[
      { t:'Sim, porque cresce para o lúmen', por:'Crescer para o lúmen, isoladamente, não comprova invasão.' },
      { t:'Sim, porque tem displasia de alto grau', por:'Displasia de alto grau sem invasão ainda não é carcinoma invasivo.' },
      { t:'Não: falta invasão da submucosa após romper a muscular da mucosa', por:'É o critério fundamental. Sem ele, é adenoma com displasia de alto grau.', certa:true }
    ]
  },
  { t:'resumo', titulo:'O que levar desta missão',
    itens:[
      'Pólipo = projeção da mucosa para o lúmen; **séssil** (base larga) ou **pediculado** (haste).',
      'Hiperplásico (não neoplásico), hamartomatoso (Peutz-Jeghers, juvenil), inflamatório (colites) e **adenoma** (benigno com displasia, precursor).',
      '**Tubular**: pequeno, pediculado, mais comum, menor risco. **Viloso**: grande, séssil, reto, maior risco. **Tubuloviloso**: misto (25–75% viloso), risco intermediário.',
      '**PAF**: autossômica dominante, centenas de adenomas desde a adolescência; câncer em praticamente todos sem tratamento.',
      'Via clássica: **APC → adenoma → KRAS, p53 → adenocarcinoma**.',
      'Carcinoma invasivo = **invasão da submucosa após romper a muscular da mucosa**, glândulas irregulares e **desmoplasia**. Bem diferenciado forma glândulas; pouco diferenciado cresce em blocos e cordões; mucinoso tem lagos de mucina.'
    ]
  }
  ]
});
PM_CASES.m005 = {
  investigation:{
    title:'Investigação 005 · Anemia e fezes afiladas',
    fonte:'Caso da questão ANAT-19 do banco de Anatomopatologia; imagens da apostila p. 37–38.',
    patient:{age:68,sex:'Feminino',complaint:'Anemia ferropriva e alteração do hábito intestinal',history:'Fezes afiladas. Foi feita colonoscopia e, depois, cirurgia.'},
    evidence:[
      {id:'clinica',label:'Quadro clínico',relevance:1,text:'**Anemia ferropriva**, alteração do hábito intestinal e **fezes afiladas**.',feedback:'Fezes afiladas sugerem estreitamento da luz.'},
      {id:'colono',label:'Colonoscopia',relevance:2,text:'Lesão **ulcerada e estenosante** no **sigmoide**.',feedback:'Decisiva: lesão do cólon esquerdo que estreita a luz.'},
      {id:'peca',label:'Peça cirúrgica',relevance:2,img:'p037_228',cap:'Carcinoma estenosante do cólon (apostila p. 37).',text:'Tumor que estreita a luz do cólon.',feedback:'Mostra o padrão de crescimento ao redor da parede.'},
      {id:'familia',label:'História familiar',relevance:0,text:'O caso não traz história familiar.',feedback:'Baixo rendimento aqui; não muda a leitura da peça.'}
    ],
    hypothesis:{prompt:'Qual é sua hipótese?',options:['Adenoma tubular pediculado','Adenocarcinoma de cólon','Doença de Crohn','Polipose adenomatosa familiar'],correct:1,
      feedback:['Adenoma tubular pequeno e pediculado não forma lesão ulcerada e estenosante.','Idosa, anemia, fezes afiladas e lesão ulcerada estenosante no sigmoide.','Nada no caso sugere DII.','A PAF é de pacientes jovens, com centenas de pólipos.']},
    microscopy:{image:'bank:anat_q19_0.jpg',prompt:'Lâmina da peça. Quais achados você vê?',options:['Glândulas regulares sem atipia','Glândulas irregulares em meio a estroma fibroso reacional (desmoplasia)','Projeções vilosas sem estroma','Ovos com espícula lateral'],correct:1,hint:'Procure o estroma entre as glândulas: ele está normal ou fibroso?',competencies:['visual','conceitual'],
      explain:['As glândulas não são regulares.','Glândulas irregulares e anguladas com estroma fibroso reacional (desmoplasia), sinal de invasão.','Não é um adenoma viloso.','Não há parasitas.']},
    differential:[
      {prompt:'Qual é o critério FUNDAMENTAL de carcinoma invasivo?',options:['Crescimento para o lúmen','Displasia de alto grau','Invasão da submucosa após romper a muscular da mucosa','Células caliciformes'],correct:2,competencies:['diferencial','conceitual'],
        explain:['Crescer para o lúmen não comprova invasão.','Displasia de alto grau sem invasão não é carcinoma invasivo.','É o critério fundamental, segundo a apostila.','Células caliciformes não indicam invasão.']},
      {prompt:'O que é a desmoplasia vista na lâmina?',options:['Necrose do tumor','Estroma fibroso reacional ao redor das glândulas tumorais, indicando invasão','Inflamação por parasita','Mucina extracelular'],correct:1,competencies:['visual','fisiopatologia'],
        explain:['Não é necrose.','É o estroma fibroso reacional que acompanha a invasão.','Não há parasita.','Lagos de mucina seriam do tipo mucinoso.']},
      {prompt:'Por que as fezes ficaram afiladas?',options:['Porque o tumor é polipoide no cólon direito','Porque o tumor do cólon esquerdo cresce ao redor da parede e estreita a luz','Porque há má absorção','Porque há fístula'],correct:1,competencies:['clinica'],
        explain:['O polipoide é mais comum no cólon direito e cresce para o lúmen.','Ulcerado/infiltrativo e napkin-ring são mais comuns no cólon esquerdo e estreitam a luz.','Não é má absorção.','Fístula é do Crohn.']}
    ],
    final:{prompt:'Qual é a conclusão?',options:['Adenocarcinoma invasivo do cólon (sigmoide)','Adenoma viloso com displasia de alto grau','Adenoma tubular','Doença de Crohn com estenose'],correct:0,
      keyPrompt:'Qual achado mais sustenta essa conclusão?',keyOptions:['Invasão da submucosa com glândulas irregulares e desmoplasia','Crescimento da lesão para o lúmen','Displasia de alto grau na superfície','Anemia ferropriva'],keyCorrect:0,competencies:['clinica','diferencial','visual']},
    debrief:{diagnosis:'Adenocarcinoma invasivo do cólon sigmoide',evidence:['Lesão **ulcerada e estenosante** no **sigmoide** (cólon esquerdo).','**Fezes afiladas**: o tumor estreita a luz.','**Glândulas irregulares** com **desmoplasia** na lâmina.','Critério fundamental: **invasão da submucosa** após romper a muscular da mucosa.'],
      clinic:'No cólon esquerdo, os tumores ulcerados ou em anel estreitam a luz e alteram o calibre das fezes; o sangramento crônico explica a anemia ferropriva. Displasia de alto grau sem invasão ainda seria adenoma.',
      revisar:{conceitual:'Carcinogênese colorretal (p. 36)',visual:'Adenocarcinoma na lâmina (p. 38)',diferencial:'Confira: invasão (p. 36, 38)',clinica:'Adenocarcinoma do cólon: macroscopia (p. 37–38)',fisiopatologia:'Carcinogênese colorretal (p. 36)'}}
  },
  mastery:[
    {id:'m5q1',image:'p033_207',q:'Pólipo pediculado de 1,2 cm com glândulas tubulares próximas, revestidas por epitélio com núcleos alongados, hipercromáticos e pseudoestratificados, sem invasão. O diagnóstico é:',ops:['Pólipo hiperplásico','Adenoma tubular','Adenocarcinoma invasivo','Pólipo hamartomatoso'],a:1,why:'Glândulas tubulares com displasia, sem invasão: adenoma tubular.',c:['visual','diferencial']},
    {id:'m5q2',q:'Rapaz de 19 anos com centenas de pólipos adenomatosos no cólon e pai morto por câncer colorretal aos 38 anos. Qual é a herança da síndrome mais provável?',ops:['Autossômica recessiva','Autossômica dominante','Ligada ao X','Não é hereditária'],a:1,why:'PAF: autossômica dominante, numerosos adenomas desde a adolescência.',c:['clinica','conceitual']},
    {id:'m5q3',image:'p039_237',q:'Área tumoral com crescimento em blocos e cordões, quase sem glândulas, pleomorfismo e mitoses. É:',ops:['Bem diferenciado','Pouco diferenciado','Mucinoso','Adenoma viloso'],a:1,why:'Perda quase total da arquitetura glandular define o pouco diferenciado.',c:['visual','conceitual']},
    {id:'m5q4',q:'Na via clássica da carcinogênese colorretal, qual é a primeira alteração genética?',ops:['Perda de p53','Mutação de KRAS','Alteração do APC (via β-catenina)','Ativação da telomerase'],a:2,why:'A sequência é APC → adenoma → KRAS e p53 → adenocarcinoma.',c:['fisiopatologia']},
    {id:'m5q5',image:'p039_238',q:'Tumor de cólon com extensos lagos de mucina extracelular e células neoplásicas dispersas ou em pequenos grupos. Classifique:',ops:['Adenocarcinoma mucinoso','Adenoma tubular','Pólipo inflamatório','Adenocarcinoma bem diferenciado típico'],a:0,why:'Lagos extensos de mucina extracelular caracterizam o adenocarcinoma mucinoso.',c:['visual','diferencial']},
    {id:'m5q6',image:'p034_211',q:'Lesão séssil e grande do reto com projeções em dedo de luva, cada uma com eixo fibrovascular revestido por epitélio displásico. Qual é o tipo e o risco?',ops:['Tubular, menor risco','Viloso, maior risco','Hiperplásico, sem risco','Hamartomatoso, sem displasia'],a:1,why:'Adenoma viloso: grande, séssil, no reto, com maior potencial de malignização.',c:['visual','clinica']}
  ]
};

/* ===== Missão 006 · Hepatites virais e cirrose (apostila p. 40–50; questões ANAT-21 a 24) ===== */
PM_MISSOES.push({
  id:'m006', num:'006', titulo:'Hepatites virais e cirrose',
  sub:'Fígado normal, hepatite aguda e crônica, B × C, fibrose, cirrose e METAVIR',
  pags:'40–50', cor:'#d9578f',
  questoes:['ANAT-21','ANAT-22','ANAT-23','ANAT-24'],
  etapas:[
  { t:'explorar', titulo:'O lóbulo hepático', p:'40', img:'p040_241', ann:'a_p040_241',
    intro:'Menor aumento. O lóbulo é delimitado por tecido conjuntivo. Toque nos números.',
    pts:[
      { x:53, y:38, nome:'Veia central', txt:'No **centro** do lóbulo.' },
      { x:8, y:58, nome:'Espaço porta (tríade portal)', txt:'Na **periferia** do lóbulo: ramo da **veia porta** + ramo da **artéria hepática** + **ducto biliar**; frequentemente também vasos linfáticos e conjuntivo.' },
      { x:85, y:52, nome:'Placas de hepatócitos', txt:'Irradiam a partir da veia central.' }
    ],
    destaque:'O **sangue** vai do espaço porta, pelos sinusoides, até a veia central. A **bile** corre no sentido contrário, dos hepatócitos até os ductos biliares.'
  },
  { t:'explorar', titulo:'As células do lóbulo', p:'40', img:'p040_242',
    intro:'Maior aumento. Toque nos números.',
    pts:[
      { x:71, y:15, nome:'Hepatócito (H)', txt:'Célula **poligonal**, citoplasma **eosinofílico**, núcleo central e redondo.' },
      { x:49, y:63, nome:'Sinusoide (S)', txt:'Espaço vascular entre as placas de hepatócitos, revestido por **células endoteliais**.' },
      { x:57, y:88, nome:'Célula de Kupffer', txt:'**Macrófago residente** associado aos sinusoides.' }
    ]
  },
  { t:'tabela', titulo:'Hepatite e os vírus', p:'41',
    cols:['Transmissão e característica destacada'],
    linhas:[
      ['HAV (A)','Fecal-oral; geralmente aguda e autolimitada.'],
      ['HBV (B)','Sanguínea, sexual e vertical; pode cronificar; existe vacina.'],
      ['HCV (C)','Principalmente sanguínea; **alta taxa de cronificação**; não há vacina, mas o tratamento pode curar.'],
      ['HDV (D)','Só infecta na presença do HBV e pode agravar a doença.'],
      ['HEV (E)','Fecal-oral, frequentemente água contaminada; atenção especial em gestantes.']
    ],
    nota:'Hepatite = inflamação do fígado com lesão ou necrose de hepatócitos e regeneração. Causas: álcool, drogas, vírus hepatotrópicos, doenças metabólicas e autoimunes. Clínica destacada: **icterícia, colúria, acolia fecal, astenia**. Evolução possível: **inflamação persistente → fibrose → cirrose → carcinoma hepatocelular**. O HBV é resolvido pela maioria dos adultos; o HCV tende mais à cronificação.'
  },
  { t:'explorar', titulo:'Hepatite aguda na lâmina', p:'41–42', img:'p042_251', ann:'a_p042_251',
    intro:'Inflamação **portal e lobular, predominantemente linfocítica**, com lesão dos hepatócitos. Três campos. Toque nos números.',
    pts:[
      { x:14, y:42, nome:'Hepatócito balonizado', txt:'**Aumentado**, citoplasma **claro, vacuolizado**, limites mal definidos. Ao lado: **colestase** (pigmento biliar dentro ou fora do hepatócito).' },
      { x:47, y:50, nome:'Linfócitos, plasmócitos e Kupffer', txt:'Infiltrado predominantemente linfocítico com plasmócitos; células de Kupffer hiperplásicas fagocitando detritos e bilirrubina.' },
      { x:79, y:45, nome:'Infiltrado inflamatório', txt:'Portal e lobular, predominando linfócitos.' }
    ],
    destaque:'Pista de prova: **corpo de Councilman** = hepatócito **apoptótico** isolado, **retraído e intensamente eosinofílico** (róseo): marcador clássico de morte celular individual.'
  },
  { t:'abas', titulo:'Regeneração e necrose', p:'42–43',
    abas:[
      { rot:'Mitose', img:'p042_250', leg:'Hepatócitos em regeneração, com mitose.',
        itens:['**Mitoses** = hepatócitos se dividindo para repor os lesados.','Hepatócitos **bi ou multinucleados** também são sinal de regeneração.'] },
      { rot:'Necrose confluente', img:'p043_255', leg:'Parênquima remanescente e áreas de necrose.',
        itens:['Fusão de várias áreas de necrose focal.','**Sinal de gravidade.**'] },
      { rot:'Necrose em ponte', img:'p043_257', leg:'Área sem hepatócitos, com proliferação ductal e espaços portais aproximados.',
        itens:['Faixas de necrose conectando espaços porta entre si ou porta-centro.','**Forte preditor de progressão para cronicidade.**'] }
    ]
  },
  { t:'explorar', titulo:'Hepatite crônica', p:'43', img:'p043_256', ann:'a_p043_256',
    intro:'A diferença principal é a **persistência** da inflamação e da lesão, com maior possibilidade de **fibrose**. Toque no número.',
    pts:[
      { x:62, y:66, nome:'Infiltrado linfocítico persistente', txt:'Infiltrado **portal denso** de linfócitos, que se acumulam (podendo formar agregados) e invadem o parênquima.' }
    ],
    destaque:'Na **aguda** podem predominar alterações lobulares, **balonização e apoptose**. Na **crônica** chamam atenção o **infiltrado portal persistente, a atividade de interface e a fibrose**.'
  },
  { t:'abas', titulo:'Hepatite B', p:'44–45',
    abas:[
      { rot:'Interface', img:'p044_260', leg:'Necrose em saca-bocado.',
        itens:['**Hepatite de interface (necrose em saca-bocados):** linfócitos ultrapassam a **placa limitante** e lesionam os hepatócitos periportais.','Espaço porta com infiltrado linfocitário.'] },
      { rot:'Vidro fosco', img:'p044_262', leg:'Hepatócitos em vidro fosco (circulados).',
        itens:['Citoplasma **homogêneo, pálido, róseo e vítreo**.','Acúmulo de **HBsAg no retículo endoplasmático**.','**Achado clássico da hepatite B crônica.**'] },
      { rot:'Achados da HBV', img:'p045_266', leg:'Linfócitos entre hepatócitos aumentados e desorganizados.',
        itens:['Infiltrado linfocitário denso, portal e periportal; degeneração balonizante; corpos de Councilman; desorganização dos cordões; hepatócitos multinucleados; hemorragia focal e congestão sinusoidal discreta.'] }
    ],
    nota_:''
  },
  { t:'checar', titulo:'Confira o entendimento', p:'42, 44–45',
    perg:'Vidro fosco ou balonização? Uma célula aumentada, com citoplasma claro e vacuolizado, e limites mal definidos.',
    dica:'Um é homogêneo e vítreo; o outro é claro e cheio de vacúolos.',
    ops:[
      { t:'Hepatócito em vidro fosco', por:'Vidro fosco é citoplasma **homogêneo, pálido e vítreo**, pelo HBsAg.' },
      { t:'Hepatócito balonizado', por:'Aumentado, claro, vacuolizado, limites mal definidos: balonização.', certa:true },
      { t:'Corpo de Councilman', por:'O Councilman é o oposto: retraído e intensamente eosinofílico.' }
    ]
  },
  { t:'abas', titulo:'Hepatite C', p:'46–47',
    intro:'Achados da HCV: necrose hepatocelular extensa, degeneração balonizante, corpúsculos acidófilos, inflamação lobular difusa e **esteatose**.',
    abas:[
      { rot:'Septos e esteatose', img:'p046_271', leg:'Parênquima com septos fibrosos e focos de esteatose.',
        itens:['Menor aumento: **septos fibrosos** e focos de **esteatose** (vacúolos claros de gordura).'] },
      { rot:'Folículo linfoide', img:'p046_273', leg:'Folículo linfoide portal.',
        itens:['**Folículo linfoide portal**: infiltrado linfocítico exuberante, pode ter centro germinativo.'] },
      { rot:'Lesão ductal', img:'p046_272', leg:'Linfócitos agredindo o epitélio dos ductos biliares.',
        itens:['**Lesão ductal linfocítica**: linfócitos agridem o epitélio dos ductos biliares.'] },
      { rot:'Esteatose', img:'p047_278', leg:'Esteatose macrovesicular.',
        itens:['**Esteatose macrovesicular**: grande vacúolo de gordura que **desloca o núcleo para a periferia**; frequente na hepatite C.','O HCV aumenta a lipogênese e reduz a secreção de VLDL, favorecendo acúmulo de triglicerídeos.','Se houver esteato-hepatite, investigar também álcool e distúrbios metabólicos.'] }
    ]
  },
  { t:'tabela', titulo:'Hepatite B × hepatite C', p:'44–47',
    cols:['Hepatite B','Hepatite C'],
    linhas:[
      ['Achado clássico','Hepatócitos em **vidro fosco** (HBsAg)','**Folículos linfoides portais**, lesão ductal, **esteatose**'],
      ['Transmissão','Sanguínea, sexual e vertical','Principalmente sanguínea'],
      ['Cronificação','A maioria dos adultos resolve','Alta taxa de cronificação'],
      ['Vacina','Existe','Não há (tratamento pode curar)'],
      ['Comum às duas','Hepatite de interface, infiltrado portal, fibrose','Hepatite de interface, infiltrado portal, fibrose']
    ]
  },
  { t:'sequencia', titulo:'Da lesão à cirrose', p:'47–48', img:'p048_281',
    intro:'A fibrose é a deposição excessiva de tecido conjuntivo, sobretudo colágeno, em resposta à lesão persistente.',
    passos:[
      { h:'Inflamação crônica', txt:'Lesão hepática persistente.' },
      { h:'Ativação das células estreladas', txt:'As células estreladas hepáticas passam a produzir colágeno.' },
      { h:'Septos fibrosos', txt:'A fibrose começa ao redor dos espaços porta e forma septos que interligam regiões do fígado.' },
      { h:'Distorção da arquitetura', txt:'Distorção progressiva: possível cirrose.' }
    ],
    nota:'**Cirrose** = perda difusa da arquitetura com **nódulos regenerativos circundados por tecido fibroso**. Três componentes: **fibrose difusa, nódulos regenerativos e distorção da arquitetura lobular**.'
  },
  { t:'explorar', titulo:'Cirrose na lâmina', p:'50', img:'p050_292', ann:'a_p050_292',
    intro:'Dois casos. Toque nos números.',
    pts:[
      { x:16, y:41, nome:'Nódulo regenerativo (hepatite B)', txt:'Nódulos de hepatócitos danificados e em regeneração, separados por faixas fibrosas e infiltrados crônicos.' },
      { x:68, y:36, nome:'Nódulo com esteatose (hepatite C)', txt:'Cirrose avançada com alteração gordurosa moderada; nódulo circundado por tecido conjuntivo que se estende entre as regiões portais.' }
    ],
    destaque:'Na lâmina: destruição da arquitetura lobular, nódulos regenerativos, **septos fibrosos em ponte**, inflamação crônica, reação ductular e alterações vasculares.'
  },
  { t:'abas', titulo:'Micro, macronodular e mista', p:'48–49',
    abas:[
      { rot:'Micronodular', imgs:['p048_282','p049_286'], leg:'Esquema e macroscopia da cirrose micronodular.',
        itens:['Nódulos **uniformes, menores que 3 mm**; septos finos e regulares; alteração gordurosa; proliferação ductular nos septos.','Superfície finamente granular; agressão mais uniforme.','Comum no **alcoolismo** e na doença hepática gordurosa.'] },
      { rot:'Macronodular', imgs:['p049_288','p049_285'], leg:'Cirrose macronodular.',
        itens:['Nódulos **maiores que 3 mm**, de tamanhos variados; septos mais espessos e irregulares; arquitetura caótica.','Comum nas **hepatites virais crônicas (B e C)** e doenças autoimunes.'] },
      { rot:'Mista', img:'p049_287', leg:'Cirrose mista.',
        itens:['Nódulos pequenos e grandes.','Estágios evolutivos ou doenças com múltiplos fatores.'] }
    ]
  },
  { t:'tabela', titulo:'Escala METAVIR', p:'50',
    cols:['Atividade (A)','Fibrose (F)'],
    linhas:[
      ['0','A0 · ausente','F0 · sem fibrose'],
      ['1','A1 · leve','F1 · fibrose portal sem septos'],
      ['2','A2 · moderada','F2 · fibrose portal com poucos septos'],
      ['3','A3 · intensa','F3 · fibrose em ponte / numerosos septos'],
      ['4','—','F4 · cirrose estabelecida']
    ],
    nota:'Exemplo dos slides: **A2 F3** = atividade necroinflamatória moderada e fibrose avançada, ainda **sem** cirrose estabelecida.'
  },
  { t:'checar', titulo:'Confira o entendimento', p:'49–50',
    perg:'Paciente com hepatite C há 20 anos: nódulos regenerativos de tamanhos variados, maiores que 3 mm, circundados por septos espessos. Como classificar?',
    dica:'Dois critérios: tamanho dos nódulos e escala METAVIR.',
    ops:[
      { t:'Cirrose micronodular, METAVIR F3', por:'Micronodular tem nódulos < 3 mm, e F3 ainda não é cirrose.' },
      { t:'Cirrose macronodular, METAVIR F4', por:'Nódulos > 3 mm, variados: macronodular, típica das hepatites virais; cirrose estabelecida é F4.', certa:true },
      { t:'Fibrose portal sem septos, F1', por:'Há nódulos e septos: já é cirrose.' }
    ]
  },
  { t:'resumo', titulo:'O que levar desta missão',
    itens:[
      'Lóbulo: **veia central** no centro, **espaço porta** (veia porta, artéria hepática, ducto biliar) na periferia; hepatócitos, sinusoides e **Kupffer**.',
      'Aguda: inflamação **portal e lobular** linfocítica, **balonização**, **corpos de Councilman**, colestase, regeneração. Necrose confluente = gravidade; **necrose em ponte** = preditor de cronicidade.',
      'Crônica: infiltrado **portal persistente**, **hepatite de interface** (saca-bocados) e **fibrose**.',
      '**B**: **vidro fosco** (HBsAg). **C**: **folículos linfoides**, lesão ductal e **esteatose macrovesicular**.',
      'Cirrose = **fibrose + nódulos regenerativos + distorção**. Micronodular (< 3 mm, álcool) × macronodular (> 3 mm, virais).',
      'METAVIR: **A0–A3** atividade, **F0–F4** fibrose; **F4 = cirrose**.'
    ]
  }
  ]
});
PM_CASES.m006 = {
  investigation:{
    title:'Investigação 006 · Transfusão nos anos 1980',
    fonte:'Caso das questões ANAT-23 e ANAT-24 do banco de Anatomopatologia (mesma paciente).',
    patient:{age:50,sex:'Feminino',complaint:'Anti-HCV positivo com carga viral detectável',history:'Transfusão sanguínea na década de 1980. Fez biópsia hepática; 20 anos depois, sem tratamento, voltou com novas queixas.'},
    evidence:[
      {id:'sorologia',label:'Sorologia e antecedente',relevance:2,text:'**Anti-HCV positivo**, carga viral detectável; **transfusão** nos anos 1980.',feedback:'Decisiva: define o vírus e a via (sanguínea).'},
      {id:'bio1',label:'Primeira biópsia · espaço porta',relevance:2,img:'bank:anat_q23_0.jpg',cap:'Espaço porta na primeira biópsia (questão ANAT-23).',text:'Agregado linfoide no **espaço porta**.',feedback:'Achado característico da hepatite C crônica.'},
      {id:'evol',label:'Evolução após 20 anos',relevance:2,text:'Sem tratamento, evolui com **ascite e varizes de esôfago**.',feedback:'Sinais de hipertensão portal: pense em cirrose.'},
      {id:'hbsag',label:'HBsAg',relevance:0,text:'O caso não informa HBsAg.',feedback:'Não muda a leitura: o vírus documentado é o HCV.'}
    ],
    hypothesis:{prompt:'Na evolução após 20 anos, qual é sua hipótese?',options:['Hepatite C aguda','Cirrose por hepatite C crônica','Esteatose simples','Hepatite B crônica com vidro fosco'],correct:1,
      feedback:['Já são décadas de infecção: não é aguda.','HCV crônico sem tratamento, com ascite e varizes, aponta para cirrose.','Esteatose simples não explica ascite e varizes.','O vírus documentado é o C; vidro fosco é da B.']},
    microscopy:{image:'bank:anat_q24_0.jpg',prompt:'Histologia em pequeno aumento na fase de ascite e varizes. O que você vê?',options:['Arquitetura preservada sem septos','Nódulos regenerativos circundados por septos fibrosos, com perda da arquitetura','Hepatócitos em vidro fosco','Só esteatose sem fibrose'],correct:1,hint:'Procure as faixas de tecido conjuntivo: elas cercam grupos de hepatócitos?',competencies:['visual','conceitual'],
      explain:['Há septos e nódulos.','Fibrose + nódulos regenerativos + distorção = cirrose.','Vidro fosco é da hepatite B e não se vê em pequeno aumento.','Há fibrose evidente.']},
    differential:[
      {prompt:'Na primeira biópsia, qual achado favorecia hepatite C e não B?',options:['Hepatócitos em vidro fosco','Folículo linfoide portal','Corpos de Councilman','Hepatite de interface'],correct:1,competencies:['diferencial','visual'],
        explain:['Vidro fosco é da hepatite B crônica.','Folículos linfoides portais são característicos da C.','Councilman aparece em hepatites agudas em geral.','Interface ocorre nas duas.']},
      {prompt:'Na escala METAVIR, cirrose estabelecida é:',options:['F2','F3','F4','A3'],correct:2,competencies:['conceitual'],
        explain:['F2 = fibrose portal com poucos septos.','F3 = fibrose em ponte, ainda sem cirrose.','F4 = cirrose estabelecida.','A mede atividade, não fibrose.']},
      {prompt:'Que padrão de cirrose é mais esperado nas hepatites virais?',options:['Micronodular, nódulos < 3 mm','Macronodular, nódulos > 3 mm e variados','Sempre mista','Não forma nódulos'],correct:1,competencies:['clinica','diferencial'],
        explain:['Micronodular é mais associada ao álcool e à doença gordurosa.','Macronodular é comum nas hepatites virais crônicas B e C.','A mista aparece em estágios evolutivos ou múltiplas causas.','Cirrose sempre tem nódulos.']}
    ],
    final:{prompt:'Qual é a conclusão?',options:['Cirrose (METAVIR F4) por hepatite C crônica','Fibrose F1 por hepatite C','Hepatite B crônica','Esteatose hepática simples'],correct:0,
      keyPrompt:'Qual combinação mais sustenta essa conclusão?',keyOptions:['Nódulos regenerativos circundados por septos fibrosos + HCV crônico + ascite e varizes','Folículo linfoide isolado','Vidro fosco','Vacúolos de gordura sem fibrose'],keyCorrect:0,competencies:['clinica','diferencial','visual']},
    debrief:{diagnosis:'Cirrose (METAVIR F4) por hepatite C crônica',evidence:['**HCV** adquirido por **transfusão**: via sanguínea, alta taxa de cronificação.','Primeira biópsia: **folículo linfoide portal**, típico da hepatite C crônica.','20 anos sem tratamento: **inflamação persistente → fibrose → cirrose**.','Lâmina: **nódulos regenerativos** com **septos fibrosos** e perda da arquitetura = **F4**.','**Ascite e varizes**: hipertensão portal da cirrose.'],
      clinic:'A distorção vascular da cirrose aumenta a pressão no sistema porta, o que explica ascite e varizes. Nas hepatites virais, a cirrose tende a ser macronodular.',
      revisar:{conceitual:'Escala METAVIR (p. 50)',visual:'Cirrose na lâmina (p. 50)',diferencial:'Hepatite B × hepatite C',clinica:'Micro, macronodular e mista (p. 48–49)',fisiopatologia:'Da lesão à cirrose (p. 47–48)'}}
  },
  mastery:[
    {id:'m6q1',image:'bank:anat_q21_0.jpg',q:'Estudante com icterícia, colúria e transaminases muito altas. As setas apontam células isoladas, retraídas e intensamente róseas. São:',ops:['Hepatócitos em vidro fosco','Corpos de Councilman (apoptóticos)','Hepatócitos balonizados','Células de Kupffer'],a:1,why:'Hepatócito apoptótico, retraído e eosinofílico: corpo de Councilman, típico das hepatites agudas.',c:['visual','conceitual']},
    {id:'m6q2',image:'bank:anat_q22_0.jpg',q:'Homem HBsAg positivo há mais de dez anos. Os hepatócitos da elipse têm citoplasma homogêneo, pálido e vítreo. O achado e sua causa são:',ops:['Balonização, por edema','Vidro fosco, por acúmulo de HBsAg no retículo endoplasmático','Esteatose macrovesicular','Councilman, por apoptose'],a:1,why:'Vidro fosco: HBsAg no retículo endoplasmático, achado clássico da hepatite B crônica.',c:['visual','fisiopatologia']},
    {id:'m6q3',image:'p047_278',q:'Hepatócito com grande vacúolo de gordura que desloca o núcleo para a periferia, em paciente com HCV. Por que o HCV favorece isso?',ops:['Porque destrói as células de Kupffer','Porque aumenta a lipogênese e reduz a secreção de VLDL','Porque acumula HBsAg','Porque obstrui o ducto biliar'],a:1,why:'O HCV interfere no metabolismo lipídico, aumentando a lipogênese e reduzindo a exportação (VLDL).',c:['fisiopatologia','visual']},
    {id:'m6q4',q:'Qual achado é forte preditor de progressão para cronicidade na hepatite?',ops:['Mitose de hepatócitos','Necrose em ponte (bridging)','Colestase intra-hepatocítica','Hepatócito binucleado'],a:1,why:'A necrose em ponte conecta espaços porta entre si ou porta-centro e prediz cronicidade.',c:['conceitual','clinica']},
    {id:'m6q5',q:'Laudo: atividade necroinflamatória moderada e fibrose em ponte com numerosos septos, sem nódulos. METAVIR:',ops:['A1 F1','A2 F3','A3 F4','A2 F4'],a:1,why:'Moderada = A2; fibrose em ponte / numerosos septos sem cirrose = F3.',c:['conceitual','clinica']},
    {id:'m6q6',image:'p044_260',q:'Linfócitos ultrapassando a placa limitante e lesionando hepatócitos periportais. O nome do achado é:',ops:['Necrose confluente','Hepatite de interface (necrose em saca-bocados)','Colestase','Esteatose'],a:1,why:'É a hepatite de interface, marca da hepatite crônica.',c:['visual','diferencial']}
  ]
};

/* ===== Missão 007 · Cálculos biliares, pancreatite e apendicite (apostila p. 51–58; questões ANAT-25 a 28) ===== */
PM_MISSOES.push({
  id:'m007', num:'007', titulo:'Cálculos biliares, pancreatite e apendicite',
  sub:'Colelitíase, pâncreas normal, pancreatite aguda e crônica, apendicite aguda',
  pags:'51–58', cor:'#d9578f',
  questoes:['ANAT-25','ANAT-26','ANAT-27','ANAT-28'],
  etapas:[
  { t:'abas', titulo:'Cálculos biliares', p:'51',
    intro:'Colelitíase = precipitação de componentes da bile, formando cálculos na vesícula ou nas vias biliares. Complicações: **obstrução biliar** e **pancreatite aguda**.',
    abas:[
      { rot:'Colesterol', imgs:['p051_295','p051_296'], leg:'Cálculo de colesterol redondo e amarelado; múltiplos cálculos facetados.',
        itens:['**Supersaturação da bile por colesterol + estase + hipomotilidade** da vesícula.','**Redondos ou facetados** (se moldam uns aos outros), **amarelados**, superfície lisa.'] },
      { rot:'Pigmentar', imgs:['p051_297','p051_298'], leg:'Cálculos pigmentares pretos e escuros brilhantes.',
        itens:['**Sais de bilirrubinato de cálcio**.','Relação com **hemólise, cirrose ou infecção**.','**Escuros** (pretos/castanhos), **pequenos, múltiplos e friáveis**.'] }
    ]
  },
  { t:'checar', titulo:'Confira o entendimento', p:'51',
    perg:'Adolescente com anemia falciforme: cálculos pequenos, múltiplos, pretos e friáveis. Qual tipo e por quê?',
    dica:'A anemia falciforme causa hemólise crônica. O que a hemólise aumenta na bile?',
    ops:[
      { t:'Colesterol, pela supersaturação', por:'Os de colesterol são amarelados e lisos.' },
      { t:'Pigmentar, pela hemólise (bilirrubinato de cálcio)', por:'Hemólise crônica aumenta a bilirrubina: cálculos pigmentares pretos.', certa:true },
      { t:'Oxalato de cálcio vindo do rim', por:'Cálculos renais não migram para a vesícula.' }
    ]
  },
  { t:'sequencia', titulo:'Do cálculo à pancreatite', p:'52', img:'p052_301',
    passos:[
      { h:'Cálculo na ampola de Vater', txt:'O cálculo migra e impacta na ampola, obstruindo o **ducto biliar comum** e a **saída do ducto pancreático**.' },
      { h:'Pressão intraductal', txt:'A secreção pancreática fica represada e a **pressão intraductal aumenta**.' },
      { h:'Ativação enzimática', txt:'Bile e enzimas acumuladas favorecem a **ativação enzimática dentro do pâncreas**.' },
      { h:'Autodigestão', txt:'**Pancreatite aguda biliar.**' }
    ]
  },
  { t:'explorar', titulo:'Pâncreas normal', p:'52', img:'p052_302', ann:'a_p052_302',
    intro:'**Exócrino:** ácinos de células acinares, que produzem as enzimas. **Endócrino:** ilhotas de Langerhans (insulina, glucagon). Toque nos números.',
    pts:[
      { x:59, y:31, nome:'Ilhota de Langerhans', txt:'Área **mais clara**, células menores: o pâncreas **endócrino**.' },
      { x:30, y:72, nome:'Ácinos', txt:'Ao redor, **mais corados**: o pâncreas **exócrino**.' }
    ]
  },
  { t:'abas', titulo:'A célula acinar e a drenagem', p:'52–53',
    abas:[
      { rot:'Ácinos', img:'p052_303', leg:'Ácinos contornados, com lúmen central (azul).',
        itens:['Células acinares **piramidais** em volta de um lúmen central, que recebe as enzimas.','A célula é **basofílica (roxa) na base**, pelo retículo endoplasmático rugoso, e **rosada no ápice**, pelos **grânulos de zimogênio**.'] },
      { rot:'Centroacinares', img:'p053_306', leg:'Ácinos, células centroacinares, ductos intercalar e intralobular.',
        itens:['**Células centroacinares**: células claras no centro do ácino, início do ducto intercalar.','Drenagem: ácino → ducto intercalar → intralobular → interlobulares → ducto pancreático.'] }
    ]
  },
  { t:'texto', titulo:'Pancreatite aguda: fisiopatologia', p:'53', img:'p053_307', leg:'Causas, mecanismos e lesões da pancreatite aguda.',
    corpo:[
      'Ativação **intrapancreática** de enzimas → **autodigestão** do parênquima → lesão acinar → inflamação aguda → **necrose gordurosa**.',
      'Três causas principais: **obstrução do ducto** (colelitíase, álcool, concreções); **lesão direta da célula acinar** (álcool, fármacos, hipertrigliceridemia, isquemia, vírus); **transporte intracelular defeituoso** (lesão metabólica). Todas convergem para lesão da célula acinar.',
      'Cada enzima, um dano: **lipase/fosfolipase → necrose gordurosa**; **elastase → dano vascular e hemorragia**; **proteases → lesão parenquimatosa**.'
    ]
  },
  { t:'abas', titulo:'Pancreatite aguda: morfologia', p:'53–55',
    intro:'Edema intersticial, inflamação aguda (neutrófilos) e **necrose gordurosa (esteatonecrose)**: destruição do tecido adiposo pela lipase.',
    abas:[
      { rot:'Esteatonecrose', img:'p054_310', leg:'A: parênquima à esquerda e esteatonecrose à direita. B: necrose hemorrágica.',
        itens:['Tecido adiposo necrosado, com aspecto de **"fantasma"**.','Em casos graves: **hemorragia e necrose parenquimatosa** (áreas escuras).','Focos **branco-amarelados (aspecto de giz)** = necrose gordurosa com saponificação.'] },
      { rot:'Saponificação', img:'p055_315', leg:'Esteatonecrose com saponificação.',
        itens:['**Saponificação:** ácidos graxos liberados se ligam ao **cálcio**, formando **sabões de cálcio** (material **basofílico/azulado**).','Perda da arquitetura do tecido adiposo, com infiltrado inflamatório.'] },
      { rot:'Lesão acinar', imgs:['p054_311','p054_312'], leg:'Ácinos desorganizados com edema e infiltrado; tecido adiposo peripancreático.',
        itens:['Ácinos desorganizados, com **edema** e **infiltrado inflamatório agudo** no interstício.','O tecido adiposo peripancreático é o alvo da necrose gordurosa.'] }
    ],
    nota_:''
  },
  { t:'checar', titulo:'Confira o entendimento', p:'55',
    perg:'Qual é o achado mais característico da pancreatite aguda, segundo a apostila?',
    dica:'Envolve tecido adiposo, lipase e cálcio.',
    ops:[
      { t:'Fibrose com atrofia acinar', por:'Isso é da pancreatite crônica.' },
      { t:'Esteatonecrose com saponificação', por:'Tecido adiposo necrosado com sabões de cálcio basofílicos.', certa:true },
      { t:'Infiltrado de linfócitos e plasmócitos', por:'Infiltrado crônico; a aguda tem neutrófilos.' }
    ]
  },
  { t:'explorar', titulo:'Pancreatite crônica', p:'55–56', img:'p056_318', ann:'a_p056_318',
    intro:'Inflamação crônica com destruição progressiva do parênquima; episódios repetidos de lesão e reparo → **fibrose progressiva**. Toque nos números.',
    pts:[
      { x:23, y:48, nome:'Lóbulos atróficos', txt:'Ilhas de ácinos remanescentes separadas por fibrose.' },
      { x:55, y:45, nome:'Fibrose extensa', txt:'Tecido conjuntivo róseo claro substituindo o parênquima.' }
    ]
  },
  { t:'abas', titulo:'Mais da pancreatite crônica', p:'56',
    abas:[
      { rot:'Calcificação', img:'p056_319', leg:'Fibrose e foco de calcificação dentro do ducto.',
        itens:['**Foco de calcificação dentro do ducto** (cálculo intraductal): pancreatite crônica.'] },
      { rot:'Atrofia acinar', img:'p056_320', leg:'Ácinos pancreáticos residuais.',
        itens:['Fibrose rosada entre os ácinos.','Ácinos residuais isolados (**atrofia acinar**) envoltos por estroma fibroso frouxo.'] },
      { rot:'Ilhotas e ductos', img:'p056_321', leg:'A: fibrose e atrofia extensas com ilhotas residuais. B: ducto dilatado com secreção espessa.',
        itens:['Ilhotas residuais, ductos, células inflamatórias crônicas e ácinos espalhados.','**Ducto dilatado** com secreção espessa.'] }
    ]
  },
  { t:'tabela', titulo:'Pancreatite aguda × crônica', p:'55',
    cols:['Aguda','Crônica'],
    linhas:[
      ['Mecanismo','Autodigestão enzimática','Episódios repetidos de lesão e reparo'],
      ['Infiltrado','Agudo (neutrófilos)','Crônico (linfócitos e plasmócitos)'],
      ['Achado-chave','Edema, esteatonecrose, saponificação, hemorragia','Fibrose, atrofia acinar, ductos dilatados, calcificações'],
      ['Função','Geralmente recuperável','Perda progressiva: exócrina → endócrina']
    ]
  },
  { t:'sequencia', titulo:'Apendicite aguda: fisiopatologia', p:'57', img:'p057_325',
    passos:[
      { h:'Obstrução da luz', txt:'Geralmente por **fecálito** (alça fechada).' },
      { h:'Distensão', txt:'Aumento da pressão intraluminal e na parede.' },
      { h:'Isquemia', txt:'Compromete o **fluxo venoso** → congestão e isquemia.' },
      { h:'Bactérias', txt:'Proliferação bacteriana → **inflamação aguda da parede**.' },
      { h:'Fases', txt:'Edematosa → fibrinosa → flegmonosa → perfurativa ou gangrenosa.' }
    ],
    nota:'Casos graves: abscessos focais na parede (**apendicite supurativa aguda**); ulceração hemorrágica e necrose gangrenosa até a serosa (**apendicite gangrenosa**), com risco de ruptura e peritonite.'
  },
  { t:'explorar', titulo:'O critério da apendicite', p:'58', img:'p058_328', ann:'a_p058_328',
    intro:'Camada muscular do apêndice. Toque no número.',
    pts:[
      { x:48, y:60, nome:'Neutrófilos na muscular própria', txt:'Entre as células musculares lisas alongadas (núcleos fusiformes), **neutrófilos** (núcleos segmentados) infiltram a muscular própria: o **critério diagnóstico**.' }
    ],
    destaque:'**Atenção à prova:** o diagnóstico exige **neutrófilos na muscular própria**. Neutrófilos só na mucosa não bastam. Como analisar: achar o infiltrado → identificar neutrófilos → ver até onde vai → confirmar a muscular própria.'
  },
  { t:'abas', titulo:'Neutrófilos, músculo e serosa', p:'58',
    abas:[
      { rot:'Entre as fibras', img:'p058_329', leg:'Células musculares lisas e neutrófilos.',
        itens:['Célula muscular lisa: núcleo alongado, "em charuto".','Neutrófilo: núcleo **multilobulado** (2 a 5 lobos).'] },
      { rot:'Serosa', img:'p058_330', leg:'Serosa com exsudato fibrino-purulento.',
        itens:['**Exsudato fibrino-purulento**: neutrófilos e **fibrina** (material róseo e filamentoso).'] }
    ]
  },
  { t:'resumo', titulo:'O que levar desta missão',
    itens:[
      'Cálculos de **colesterol**: amarelados, lisos, facetados (supersaturação + estase). **Pigmentares**: pretos, pequenos, friáveis (bilirrubinato de cálcio; hemólise, cirrose, infecção).',
      'Cálculo na **ampola de Vater** → pressão intraductal → ativação enzimática → **pancreatite aguda biliar**.',
      'Pâncreas: ácinos (base roxa, ápice com zimogênio) e **ilhotas** claras; células centroacinares.',
      'Aguda: edema, neutrófilos, **esteatonecrose com saponificação** (sabões de cálcio azulados), hemorragia. Lipase → gordura; elastase → vasos; proteases → parênquima.',
      'Crônica: **fibrose, atrofia acinar, ductos dilatados, calcificações**, infiltrado crônico; perda exócrina e depois endócrina.',
      'Apendicite: fecálito → pressão → isquemia → bactérias. Diagnóstico = **neutrófilos na muscular própria**.'
    ]
  }
  ]
});
PM_CASES.m007 = {
  investigation:{
    title:'Investigação 007 · Dor em faixa irradiada para o dorso',
    fonte:'Caso da questão ANAT-26 do banco de Anatomopatologia; imagens da apostila p. 51–55.',
    patient:{age:45,sex:'Feminino',complaint:'Dor epigástrica intensa em faixa, irradiada para o dorso',history:'Obesa, com colelitíase conhecida. Tem vômitos.'},
    evidence:[
      {id:'lab',label:'Laboratório',relevance:2,text:'**Lipase oito vezes acima do normal.**',feedback:'Decisivo para lesão pancreática aguda.'},
      {id:'antec',label:'Antecedente',relevance:2,img:'p051_296',cap:'Cálculos de colesterol (apostila p. 51).',text:'**Colelitíase** conhecida; obesa.',feedback:'Aponta a causa: cálculo biliar.'},
      {id:'peri',label:'Tecido peripancreático (caso grave semelhante)',relevance:2,text:'Você vai examinar a lâmina na etapa de microscopia.',feedback:'A lâmina aparece na etapa 4.'},
      {id:'apendice',label:'Exame do apêndice',relevance:0,text:'O quadro não sugere apendicite: a dor é epigástrica, em faixa, para o dorso.',feedback:'Baixo rendimento aqui.'}
    ],
    hypothesis:{prompt:'Qual é sua hipótese?',options:['Pancreatite aguda biliar','Pancreatite crônica alcoólica','Apendicite aguda','Colecistite com cálculo de pigmento'],correct:0,
      feedback:['Colelitíase, dor em faixa para o dorso e lipase muito alta.','Não há etilismo, calcificações nem esteatorreia.','A dor da apendicite migra para a fossa ilíaca direita.','A lipase oito vezes acima aponta para o pâncreas.']},
    microscopy:{image:'bank:anat_q26_0.jpg',prompt:'Tecido peripancreático de um caso grave. O que você vê?',options:['Tecido adiposo normal','Esteatonecrose com saponificação (material basofílico) e infiltrado inflamatório','Fibrose com atrofia acinar','Infiltrado exclusivamente linfocitário'],correct:1,hint:'Procure gordura necrosada com material azulado: o que o cálcio forma com os ácidos graxos?',competencies:['visual','conceitual'],
      explain:['O tecido adiposo está necrosado.','Necrose gordurosa com sabões de cálcio (azulados) e inflamação: achado mais característico da aguda.','Fibrose e atrofia são da crônica.','A aguda tem neutrófilos.']},
    differential:[
      {prompt:'Qual enzima causa a necrose gordurosa?',options:['Elastase','Lipase/fosfolipase','Proteases','Amilase'],correct:1,competencies:['fisiopatologia'],
        explain:['Elastase causa dano vascular e hemorragia.','Lipase e fosfolipase destroem o tecido adiposo.','Proteases lesam o parênquima.','A apostila não atribui a necrose gordurosa à amilase.']},
      {prompt:'O que diferenciaria uma pancreatite crônica?',options:['Edema e neutrófilos','Fibrose, atrofia acinar, ductos dilatados e calcificações','Esteatonecrose','Hemorragia'],correct:1,competencies:['diferencial'],
        explain:['São da aguda.','Achados-chave da crônica.','É da aguda.','É da aguda grave.']},
      {prompt:'Como o cálculo leva à pancreatite?',options:['Infecta o pâncreas','Impacta na ampola de Vater, represa a secreção, aumenta a pressão intraductal e ativa as enzimas no pâncreas','Causa autoimunidade','Destrói as ilhotas'],correct:1,competencies:['fisiopatologia','clinica'],
        explain:['Não é infecção.','É a sequência da apostila.','A pancreatite biliar não é autoimune.','Ilhotas não são o mecanismo.']}
    ],
    final:{prompt:'Qual é a conclusão?',options:['Pancreatite aguda biliar com esteatonecrose','Pancreatite crônica','Adenocarcinoma de pâncreas','Apendicite aguda'],correct:0,
      keyPrompt:'Qual combinação mais sustenta essa conclusão?',keyOptions:['Colelitíase + lipase muito alta + esteatonecrose com saponificação','Calcificações e diabetes','Neutrófilos na muscular própria do apêndice','Fibrose extensa'],keyCorrect:0,competencies:['clinica','diferencial','visual']},
    debrief:{diagnosis:'Pancreatite aguda biliar com esteatonecrose',evidence:['**Colelitíase**: o cálculo pode impactar na ampola de Vater.','**Dor em faixa** para o dorso e **lipase** muito elevada.','**Esteatonecrose com saponificação** (sabões de cálcio azulados) e inflamação.','A lipase destrói o tecido adiposo peripancreático.'],
      clinic:'A obstrução da ampola aumenta a pressão intraductal e ativa as enzimas dentro do pâncreas: autodigestão. A função costuma se recuperar, diferente da crônica.',
      revisar:{conceitual:'Pancreatite aguda × crônica (quadro)',visual:'Pancreatite aguda: morfologia (p. 53–55)',diferencial:'Pancreatite aguda × crônica (quadro)',clinica:'Do cálculo à pancreatite (p. 52)',fisiopatologia:'Pancreatite aguda: fisiopatologia (p. 53)'}}
  },
  mastery:[
    {id:'m7q1',image:'bank:anat_q25_0.jpg',q:'Adolescente com anemia falciforme: cálculos pequenos, múltiplos, pretos e friáveis. Composição:',ops:['Colesterol','Bilirrubinato de cálcio','Oxalato de cálcio','Ácido úrico'],a:1,why:'Pigmentares, de bilirrubinato de cálcio, ligados à hemólise.',c:['visual','fisiopatologia']},
    {id:'m7q2',image:'bank:anat_q27_0.jpg',q:'Etilista há 25 anos com esteatorreia, diabetes recente e calcificações. A histologia mostra fibrose substituindo o parênquima e ácinos atróficos. Diagnóstico:',ops:['Pancreatite aguda','Pancreatite crônica','Pâncreas normal','Adenocarcinoma obrigatório'],a:1,why:'Fibrose, atrofia acinar e calcificações, com perda exócrina e depois endócrina.',c:['visual','clinica']},
    {id:'m7q3',image:'bank:anat_q28_0.jpg',q:'Apêndice retirado de jovem com dor migratória para a fossa ilíaca direita. O critério histológico da apendicite aguda é:',ops:['Linfócitos na mucosa','Neutrófilos infiltrando a muscular própria','Fecálito no lúmen','Granulomas na serosa'],a:1,why:'Neutrófilos na muscular própria; só na mucosa não basta.',c:['visual','conceitual']},
    {id:'m7q4',image:'p052_302',q:'No pâncreas normal, a área mais clara com células menores, em meio a ácinos mais corados, é:',ops:['Ducto intralobular','Ilhota de Langerhans (endócrino)','Foco de necrose','Tecido adiposo'],a:1,why:'A ilhota é clara e de células menores; os ácinos ao redor são o exócrino.',c:['visual','conceitual']},
    {id:'m7q5',q:'A elastase ativada na pancreatite aguda causa principalmente:',ops:['Necrose gordurosa','Dano vascular e hemorragia','Fibrose','Calcificação intraductal'],a:1,why:'Elastase → dano vascular e hemorragia; lipase → gordura; proteases → parênquima.',c:['fisiopatologia']},
    {id:'m7q6',q:'Qual é a sequência inicial da apendicite aguda?',ops:['Infecção sistêmica → apêndice','Obstrução por fecálito → aumento da pressão → isquemia → proliferação bacteriana','Autoimunidade → granulomas','Hemólise → cálculo'],a:1,why:'Fecálito obstrui, a pressão compromete o fluxo venoso e as bactérias inflamam a parede.',c:['fisiopatologia','clinica']}
  ]
};

/* ===== Missão 008 · Pielonefrite e cálculo renal (apostila p. 59–69; questões ANAT-29 a 32) ===== */
PM_MISSOES.push({
  id:'m008', num:'008', titulo:'Pielonefrite e cálculo renal',
  sub:'Rim normal, néfron, pielonefrite aguda e crônica',
  pags:'59–69', cor:'#d9578f',
  questoes:['ANAT-29','ANAT-30','ANAT-31','ANAT-32'],
  etapas:[
  { t:'abas', titulo:'O rim por fora e por dentro', p:'59',
    intro:'O rim filtra o sangue e mantém a homeostase: excreta metabólitos, controla água e eletrólitos e regula o equilíbrio ácido-base.',
    abas:[
      { rot:'Organização', img:'p059_333', leg:'Medula, córtex, coluna renal, pelve, ureter e vasos renais.',
        itens:['**Córtex** (externo): corpúsculos renais e túbulos contorcidos.','**Medula** (interna): alças de Henle e ductos coletores, organizados nas **pirâmides**; entre elas, as **colunas renais** (córtex que "desce").','Sistema coletor: cálices, pelve renal e ureter.'] },
      { rot:'Peça real', img:'p059_334', leg:'Rim cortado: pirâmides escuras na medula, cálices e pelve no centro.',
        itens:['Urina: **papila → cálice menor → cálice maior → pelve renal → ureter**.','A **pelve renal** é onde a pielonefrite começa ("pielo" = pelve).'] }
    ]
  },
  { t:'sequencia', titulo:'O caminho do filtrado', p:'60', img:'p060_337',
    intro:'O néfron (cerca de 1 milhão por rim) filtra, reabsorve, secreta e concentra.',
    passos:[
      { h:'Corpúsculo renal', txt:'**Filtração** no glomérulo.' },
      { h:'Túbulo contorcido proximal', txt:'Reabsorve **a maior parte da água, glicose e aminoácidos**.' },
      { h:'Alça de Henle', txt:'Desce e volta na medula, criando o **gradiente** para concentrar a urina.' },
      { h:'Túbulo contorcido distal', txt:'**Ajuste fino** de eletrólitos e ácido-base.' },
      { h:'Ducto coletor', txt:'**Concentração final (ADH)** e drenagem para a papila.' }
    ]
  },
  { t:'texto', titulo:'Corpúsculo renal', p:'60–61', img:'p060_338', leg:'Glomérulo, cápsula de Bowman e espaço capsular.',
    corpo:[
      '**Glomérulo** = tufo de capilares; **cápsula de Bowman** o envolve; **espaço capsular** recebe o **ultrafiltrado** (plasma sem células e quase sem proteínas).',
      '**Barreira de filtração:** endotélio **fenestrado** + **membrana basal glomerular** + **podócitos** (camada visceral, com pedicelos e fendas de filtração).',
      'Camada **parietal**: epitélio **pavimentoso simples**. **Células mesangiais**: suporte do tufo, fagocitose e modulação da filtração.',
      '**Polo vascular**: entram e saem as arteríolas. **Polo urinário**: o espaço capsular continua com o túbulo proximal.'
    ]
  },
  { t:'tabela', titulo:'Túbulos e ducto coletor', p:'61',
    cols:['Como reconhecer','Função'],
    linhas:[
      ['Túbulo proximal','Cúbico simples; células **altas, bem coradas**, lúmen **estreito**, **borda em escova**','Reabsorção maciça; muitas mitocôndrias'],
      ['Alça de Henle','Parede muito delgada, epitélio simples **pavimentoso**','Gradiente medular: descendente reabsorve água; ascendente, solutos'],
      ['Túbulo distal','Cúbico simples; células **baixas, pouco coradas**, lúmen **amplo**','Ajuste fino eletrolítico e ácido-base'],
      ['Ducto coletor','Calibroso, cúbico, citoplasma pouco corado, **limites celulares nítidos**','Concentração final (ADH); células principais e intercaladas']
    ],
    nota:'Dica: os **túbulos proximais são maioria** no córtex. Células **principais** reabsorvem sódio e água; **intercaladas** secretam H⁺ ou bicarbonato e participam da defesa contra bactérias.'
  },
  { t:'abas', titulo:'Proximal, distal e coletor na lâmina', p:'62',
    intro:'A própria apostila pintou as estruturas. Compare as abas.',
    abas:[
      { rot:'Sem cor', img:'p062_345', leg:'Glomérulo no meio dos túbulos do córtex.',
        itens:['Tente achar sozinho: onde estão os proximais e os distais?'] },
      { rot:'Pintada', img:'p062_346', leg:'Azul = túbulos proximais; rosa = túbulos distais.',
        itens:['**Azul = proximais:** células altas, muito coradas, lúmen estreito.','**Rosa = distais:** células baixas, mais claras, lúmen amplo.'] },
      { rot:'Maior aumento', img:'p062_347', leg:'Córtex: proximal em azul, distal em rosa.',
        itens:['Proximal: lúmen em **fenda**, ocupado pela borda em escova.','Distal: lúmen **amplo e "limpo"**.'] },
      { rot:'Medula', img:'p062_348', leg:'Ductos coletores (azul-claro) e segmentos delgados da alça (azul-escuro).',
        itens:['**Azul-claro = ductos coletores:** calibrosos, citoplasma claro, limites nítidos.','**Azul-escuro = alça de Henle** (segmentos delgados, epitélio pavimentoso).'] }
    ]
  },
  { t:'texto', titulo:'Interstício normal e pielonefrite', p:'63', img:'p063_351', leg:'Rim normal × pielonefrite.',
    corpo:[
      'O **interstício normal** é discreto: não é expandido e não tem infiltrado significativo. A urina drena continuamente e o trato urinário superior é estéril.',
      '**Pielonefrite:** infecção do rim e da pelve, geralmente **bacteriana ascendente**, com lesão no compartimento **túbulo-intersticial**; aguda ou crônica.',
      'Agentes: ***Escherichia coli*** (principal), *Proteus*, *Klebsiella*, *Enterobacter*, *Pseudomonas*. Predisponentes: **obstrução e litíase**, **refluxo vesicoureteral**, instrumentação/cateterização.'
    ],
    destaque:'**Atenção à prova:** compare sempre com o normal. O interstício normal é quase invisível; na pielonefrite fica **expandido** (edema ou fibrose) e cheio de células inflamatórias.'
  },
  { t:'texto', titulo:'Ascendente ou hematogênica', p:'63–64', img:'p063_352', leg:'Via hematogênica e via ascendente.',
    corpo:[
      '**Ascendente** (mais comum): bactérias da flora intestinal colonizam uretra e bexiga e sobem pelo ureter até a pelve e o parênquima.',
      '**Hematogênica** (rara): chegam pelo sangue (bacteremia), como *Staphylococcus*.',
      '**Refluxo vesicoureteral:** a urina volta da bexiga ao ureter. **Refluxo intrarrenal:** da pelve para os ductos coletores das papilas, levando bactérias ao parênquima.'
    ]
  },
  { t:'texto', titulo:'Pielonefrite aguda: o rim se defende', p:'64', img:'p064_355', leg:'O ducto coletor reconhece a E. coli e as células tubulares recrutam macrófagos e neutrófilos.',
    corpo:[
      'O epitélio renal reconhece a bactéria: o **ducto coletor** (receptor TLR4) libera peptídeos antimicrobianos e citocinas; as células tubulares chamam **macrófagos e neutrófilos**, que fagocitam e formam NETs. A resposta inicial é **inata**.',
      'Consequência: **edema intersticial, infiltração neutrofílica, tubulite e microabscessos**: inflamação **supurativa** túbulo-intersticial.',
      'Clínica: febre, calafrios, **dor lombar**, disúria, urgência, polaciúria, leucocitúria, bacteriúria e **nitrito positivo**; **sinal de Giordano** (dor à punho-percussão lombar).'
    ],
    destaque:'O rim não é só vítima: ele participa da defesa.'
  },
  { t:'abas', titulo:'Pielonefrite aguda: macro e micro', p:'65–66',
    abas:[
      { rot:'Pus', img:'p065_358', leg:'Lençol de neutrófilos (tracejado) sobre parênquima com túbulos.',
        itens:['**Lençol de neutrófilos** = exsudato supurativo (pus).','Hemorragia/fibrina; embaixo, parênquima com túbulos.'] },
      { rot:'Abscessos', img:'p065_359', leg:'A: rim com pequenos abscessos amarelados. B: neutrófilos nos túbulos e no interstício.',
        itens:['Pequenos **abscessos** amarelados na superfície.','Neutrófilos **dentro dos túbulos** e no interstício (**tubulite**).'] },
      { rot:'Macroscopia', img:'p066_365', leg:'Focos purulentos na superfície e corte com áreas amarelo-esbranquiçadas.',
        itens:['Pequenos focos purulentos (pontos amarelo-esbranquiçados) = abscessos corticais.'] }
    ]
  },
  { t:'explorar', titulo:'Leia a lâmina: aguda', p:'66', img:'p066_364', ann:'a_p066_364',
    intro:'Como "ler": 1. interstício expandido? 2. neutrófilos nos túbulos? 3. microabscessos? Toque no número.',
    pts:[
      { x:36, y:59, nome:'Tubulite', txt:'Numerosos **neutrófilos preenchendo o lúmen do túbulo**.' },
      { x:62, y:25, nome:'Interstício com infiltrado', txt:'Interstício com células inflamatórias entre os túbulos.' }
    ],
    destaque:'**Neutrófilos + túbulos + interstício = pielonefrite aguda.** Glomérulos geralmente **preservados**.'
  },
  { t:'checar', titulo:'Confira o entendimento', p:'65–67',
    perg:'Em uma pielonefrite aguda, onde está o infiltrado e de que células?',
    dica:'"Supurativa túbulo-intersticial."',
    ops:[
      { t:'Neutrófilos no interstício e nos túbulos; glomérulos preservados', por:'É o padrão clássico.', certa:true },
      { t:'Neutrófilos nos glomérulos, túbulos poupados', por:'Isso lembra glomerulonefrite proliferativa, não pielonefrite.' },
      { t:'Linfócitos e plasmócitos com fibrose', por:'Isso é a forma crônica.' }
    ]
  },
  { t:'sequencia', titulo:'Pielonefrite crônica', p:'67', img:'p067_368',
    intro:'Infecções recorrentes e/ou obstrução persistente (refluxo vesicoureteral, cálculo, estase): o rim fica **cicatricial**.',
    passos:[
      { h:'Infecção recorrente', txt:'ITU de repetição.' },
      { h:'Inflamação persistente', txt:'O infiltrado passa a ser crônico.' },
      { h:'Destruição tubular', txt:'Cada infecção destrói túbulos.' },
      { h:'Atrofia e dilatação tubular', txt:'Acúmulo de material proteináceo: **tireoidização**.' },
      { h:'Fibrose intersticial', txt:'O reparo é feito com fibrose.' },
      { h:'Cicatriz renal', txt:'Perda progressiva da função; hipertensão em alguns casos.' }
    ]
  },
  { t:'abas', titulo:'Crônica: macro e micro', p:'67–68',
    abas:[
      { rot:'Cicatrizes', img:'p067_369', leg:'Pielonefrite crônica: superfície irregular.',
        itens:['Rins com **superfície irregular** e **cicatrizes grosseiras** (retrações).','Pelve e cálices **deformados e dilatados**.'] },
      { rot:'Túbulos atróficos', img:'p068_372', leg:'Túbulos atróficos.',
        itens:['Túbulos **pequenos, com epitélio baixo**, separados por fibrose e infiltrado mononuclear.','Atrofia tubular: epitélio achatado e membrana basal espessada.'] },
      { rot:'Infiltrado crônico', img:'p068_374', leg:'Infiltrado crônico denso no interstício.',
        itens:['**Linfócitos e plasmócitos** no interstício; estroma rosado = **fibrose intersticial**.'] },
      { rot:'Periglomerular', img:'p068_375', leg:'Espessamento fibroso do folheto parietal da cápsula de Bowman; tufos capilares normais.',
        itens:['**Fibrose periglomerular**: anéis de colágeno ao redor da cápsula de Bowman.','Tufos capilares ainda normais. Na fase tardia: **glomeruloesclerose** (glomérulo substituído por tecido hialino).'] }
    ]
  },
  { t:'tabela', titulo:'Aguda × crônica', p:'65–69',
    cols:['Aguda','Crônica'],
    linhas:[
      ['Infiltrado','**Neutrófilos** (supurativo)','**Mononuclear** (linfócitos, plasmócitos)'],
      ['Túbulos','Tubulite, cilindros de neutrófilos, microabscessos','Atrofia, dilatação, **tireoidização**'],
      ['Interstício','Edema','**Fibrose**'],
      ['Glomérulos','Geralmente preservados','Fibrose periglomerular; esclerose tardia'],
      ['Macroscopia','Abscessos amarelados na superfície','Rim pequeno, cicatrizes grosseiras, cálices deformados']
    ],
    nota:'**Tireoidização:** túbulos atróficos e dilatados com material eosinofílico (cilindros e proteínas), lembrando folículos da tireoide: achado clássico da crônica.'
  },
  { t:'resumo', titulo:'O que levar desta missão',
    itens:[
      'Córtex (corpúsculos e túbulos contorcidos) × medula (alças e coletores). Urina: papila → cálices → **pelve** → ureter.',
      'Barreira: **endotélio fenestrado + MBG + podócitos**; parietal = pavimentoso simples.',
      'Proximal: alto, corado, lúmen estreito, borda em escova. Distal: baixo, claro, lúmen amplo. Coletor: claro, limites nítidos.',
      'Pielonefrite: túbulo-intersticial, geralmente **ascendente**, *E. coli*; predispõem **obstrução/litíase, refluxo, cateterização**.',
      '**Aguda**: neutrófilos no interstício e nos túbulos (**tubulite**), microabscessos, glomérulos preservados; dor lombar, Giordano, nitrito positivo.',
      '**Crônica**: fibrose, infiltrado mononuclear, atrofia, **tireoidização**, cicatrizes; hipertensão e perda de função.'
    ]
  }
  ]
});
PM_CASES.m008 = {
  investigation:{
    title:'Investigação 008 · Febre e dor lombar após litotripsia',
    fonte:'Caso das questões ANAT-30 e ANAT-31 do banco de Anatomopatologia.',
    patient:{age:76,sex:'Feminino',complaint:'Dor lombar intensa, calafrios e febre há 4 dias',history:'Diabética, ITU de repetição e nefrolitíase à esquerda; litotripsia renal a laser há cerca de um mês. Tem disúria, polaciúria e náuseas.'},
    evidence:[
      {id:'exame',label:'Exame físico',relevance:2,text:'Temperatura 38 °C, PA 100 × 70 mmHg, **sinal de Giordano positivo** bilateral.',feedback:'Giordano sugere inflamação renal.'},
      {id:'urina',label:'Urina 1',relevance:2,text:'**Leucocitúria**, hematúria, proteinúria e **nitrito positivo**.',feedback:'Nitrito positivo sugere bactéria gram-negativa como a E. coli.'},
      {id:'antec',label:'Antecedentes',relevance:1,text:'**Nefrolitíase**, ITU de repetição e **instrumentação** recente (litotripsia).',feedback:'Fatores predisponentes da apostila.'},
      {id:'glom',label:'Pesquisa de anticorpos anti-MBG',relevance:0,text:'O caso não traz esse exame, e o quadro não é glomerular.',feedback:'Baixo rendimento: o padrão é infeccioso túbulo-intersticial.'}
    ],
    hypothesis:{prompt:'Qual é sua hipótese?',options:['Pielonefrite aguda','Pielonefrite crônica','Glomerulonefrite pós-estreptocócica','Necrose tubular aguda'],correct:0,
      feedback:['Febre, dor lombar, Giordano, leucocitúria e nitrito, com litíase e instrumentação.','O quadro é agudo, de 4 dias.','Não há história de infecção estreptocócica nem quadro nefrítico.','NTA não explica febre, Giordano e nitrito positivo.']},
    microscopy:{image:'bank:anat_q30_0.jpg',prompt:'Nefrectomia em caso semelhante. O que você vê?',options:['Túbulos dilatados com material eosinofílico (tireoidização), sem neutrófilos','Neutrófilos preenchendo túbulos e infiltrando o interstício','Glomérulos hipercelulares com neutrófilos, interstício poupado','Células necróticas na luz sem infiltrado'],correct:1,hint:'Procure os núcleos pequenos e segmentados: estão dentro dos túbulos?',competencies:['visual','conceitual'],
      explain:['Tireoidização é da crônica.','Tubulite neutrofílica e infiltrado intersticial: pielonefrite aguda.','Isso seria glomerulonefrite.','Há infiltrado inflamatório.']},
    differential:[
      {prompt:'Como o cálculo favorece a pielonefrite?',options:['Aumenta o fluxo e impede a subida das bactérias','Obstrui, causa estase e abriga biofilme bacteriano onde o antibiótico penetra mal','Causa toxicidade química sem bactérias','Não tem relação'],correct:1,competencies:['fisiopatologia','clinica'],
        explain:['O cálculo causa estase, não aumenta o fluxo.','Estase favorece proliferação; o biofilme na pedra dificulta o antibiótico, e muitas vezes é preciso remover o cálculo.','A pielonefrite é bacteriana.','Litíase é fator predisponente.']},
      {prompt:'Qual achado seria esperado nos glomérulos?',options:['Crescentes','Geralmente preservados','Esclerose global','Humps subepiteliais'],correct:1,competencies:['diferencial'],
        explain:['Crescentes são de glomerulonefrite.','Na pielonefrite aguda os glomérulos costumam estar preservados.','Esclerose é tardia e crônica.','Humps são da GNPE.']},
      {prompt:'Qual é a via de infecção mais provável?',options:['Hematogênica','Ascendente','Linfática','Contiguidade intestinal'],correct:1,competencies:['conceitual'],
        explain:['A hematogênica é rara.','Ascendente é a mais comum, favorecida pela instrumentação e pela litíase.','Não descrita na apostila.','Não descrita na apostila.']}
    ],
    final:{prompt:'Qual é a conclusão?',options:['Pielonefrite aguda associada à litíase e à instrumentação','Pielonefrite crônica com tireoidização','Glomerulonefrite aguda','Necrose tubular tóxica'],correct:0,
      keyPrompt:'Qual combinação mais sustenta essa conclusão?',keyOptions:['Neutrófilos nos túbulos e no interstício + febre, Giordano e nitrito positivo','Túbulos com material eosinofílico','Glomérulos hipercelulares','Cicatrizes grosseiras na superfície'],keyCorrect:0,competencies:['clinica','diferencial','visual']},
    debrief:{diagnosis:'Pielonefrite aguda associada à litíase e à instrumentação',evidence:['**Febre, calafrios, dor lombar e Giordano** positivo.','**Leucocitúria e nitrito positivo**: bactéria gram-negativa.','**Litíase e litotripsia**: obstrução, estase e instrumentação predispõem.','Lâmina: **neutrófilos no interstício e nos túbulos (tubulite)**, glomérulos preservados.'],
      clinic:'O cálculo causa estase e abriga biofilme, onde o antibiótico penetra mal; por isso a remoção do cálculo costuma ser necessária. Infecções repetidas levam à forma crônica, com fibrose e tireoidização.',
      revisar:{conceitual:'Pielonefrite aguda: o rim se defende (p. 64)',visual:'Leia a lâmina: aguda (p. 66)',diferencial:'Aguda × crônica (quadro)',clinica:'Interstício normal e pielonefrite (p. 63)',fisiopatologia:'Ascendente ou hematogênica (p. 63–64)'}}
  },
  mastery:[
    {id:'m8q1',image:'bank:anat_q29_0.jpg',q:'Corpúsculo renal em H&E. Qual afirmação está correta?',ops:['A camada parietal filtra o sangue','Barreira = endotélio fenestrado + MBG + podócitos; o espaço capsular recebe o ultrafiltrado','O espaço capsular contém sangue','As células mesangiais revestem a cápsula por fora'],a:1,why:'É a barreira de filtração; a camada parietal é pavimentosa simples e não filtra.',c:['visual','conceitual']},
    {id:'m8q2',image:'bank:anat_q32_0.jpg',q:'Mulher com refluxo vesicoureteral, ITU de repetição, hipertensão e rim pequeno com cicatrizes. Túbulos atróficos e dilatados com material eosinofílico homogêneo. O achado é:',ops:['Tubulite neutrofílica','Tireoidização','Crescentes','Humps'],a:1,why:'Tireoidização é o achado clássico da pielonefrite crônica.',c:['visual','clinica']},
    {id:'m8q3',image:'p062_347',q:'Túbulos com células altas, muito coradas e lúmen em fenda ao lado de túbulos de células baixas e lúmen amplo. Os primeiros são:',ops:['Distais','Proximais','Ductos coletores','Alça de Henle'],a:1,why:'Proximais: altos, corados, lúmen estreito ocupado pela borda em escova.',c:['visual','conceitual']},
    {id:'m8q4',q:'O que o nitrito positivo na urina sugere?',ops:['Glomerulonefrite','Bactéria gram-negativa que converte nitrato em nitrito, como a E. coli','Cálculo de oxalato','Proteinúria nefrótica'],a:1,why:'Gram-negativos como a E. coli convertem nitrato em nitrito.',c:['clinica','fisiopatologia']},
    {id:'m8q5',image:'p068_374',q:'Interstício com denso infiltrado de linfócitos e plasmócitos e estroma rosado entre túbulos. Isso indica:',ops:['Pielonefrite aguda','Pielonefrite crônica (infiltrado mononuclear e fibrose)','Rim normal','Necrose tubular aguda'],a:1,why:'Infiltrado mononuclear com fibrose intersticial é da forma crônica.',c:['visual','diferencial']},
    {id:'m8q6',q:'Qual é a via mais comum da pielonefrite?',ops:['Hematogênica, por Staphylococcus','Ascendente, da bexiga ao ureter, pelve e rim','Linfática','Por contiguidade do cólon'],a:1,why:'A via ascendente é a mais comum; a hematogênica é rara.',c:['conceitual']}
  ]
};

/* ===== Missão 009 · Glomerulonefrites e síndromes nefrítica e nefrótica (apostila p. 69–77; questões ANAT-33 a 36) ===== */
PM_MISSOES.push({
  id:'m009', num:'009', titulo:'Glomerulonefrites: nefrítica × nefrótica',
  sub:'Corpúsculo renal, imunocomplexos, GN pós-estreptocócica e esclerose',
  pags:'69–77', cor:'#d9578f',
  questoes:['ANAT-33','ANAT-34','ANAT-35','ANAT-36'],
  etapas:[
  { t:'explorar', titulo:'O corpúsculo renal', p:'69', img:'p069_378',
    intro:'A apostila coloriu as estruturas. Toque nos números.',
    pts:[
      { x:50, y:50, nome:'Tufo capilar (glomérulo)', txt:'Em vermelho: o pequeno tufo de capilares.' },
      { x:17, y:52, nome:'Folheto parietal da cápsula de Bowman', txt:'Azul-claro; os núcleos achatados (azul-escuro) são do epitélio pavimentoso.' },
      { x:72, y:22, nome:'Espaço de Bowman', txt:'Branco entre os dois: recebe o ultrafiltrado.' }
    ],
    destaque:'Aparelho de filtração: **endotélio fenestrado + MBG + podócitos** (folheto visceral).'
  },
  { t:'abas', titulo:'Estruturas do corpúsculo', p:'69–70',
    abas:[
      { rot:'Prata', img:'p069_379', leg:'Coloração com prata: setas nas células parietais; azul circulado = polo vascular.',
        itens:['**Polo vascular**: por onde entram e saem as arteríolas.'] },
      { rot:'Mácula densa', img:'p070_382', leg:'P = túbulo proximal; D = distal; MD = mácula densa.',
        itens:['**Mácula densa**: células altas, de núcleos muito juntos, no túbulo distal encostado no polo vascular; percebe o sódio e regula a filtração (aparelho justaglomerular).','Saída do túbulo proximal = **polo urinário**.'] },
      { rot:'Barreira', img:'p070_383', leg:'Caminho do filtrado: capilar → fenestras → MBG → fendas entre os podócitos → Bowman.',
        itens:['A **MBG** é a principal barreira contra a passagem de proteínas.','**Pedicelos** dos podócitos; a fenda entre eles é fechada por um diafragma fino.','**Células mesangiais** sustentam o tufo, fagocitam depósitos e produzem matriz.'] }
    ]
  },
  { t:'texto', titulo:'Como os imunocomplexos lesam o glomérulo', p:'71', img:'p071_387', leg:'Três mecanismos de lesão.',
    corpo:[
      '**A. Imunocomplexos circulantes** formados no sangue e presos no glomérulo. **B. Imunocomplexos in situ**: anticorpo liga antígeno plantado ou próprio. **C. Anti-MBG**: anticorpos contra a membrana basal inteira.',
      'A e B dão padrão **GRANULAR** na imunofluorescência; C dá padrão **LINEAR**.',
      'Depósito **subendotelial** (entre endotélio e MBG) → mais inflamação (nefrítico). Depósito **subepitelial** (entre MBG e podócitos) → lesão de podócitos e perda de proteína (humps da GN pós-estreptocócica, membranosa).',
      'O imunocomplexo ativa o **complemento** (C3, C4…), que atrai neutrófilos. Na GN pós-estreptocócica, o **C3 fica baixo** (consumo).'
    ]
  },
  { t:'abas', titulo:'Nefrítica × nefrótica na lâmina', p:'71–72',
    abas:[
      { rot:'Nefrítica', img:'p072_390', leg:'Proliferação das células mesangiais.',
        itens:['Lesão **inflamatória e proliferativa**: tufo muito celular, lóbulos "cheios", alças capilares estreitadas.','Explica **hematúria, oligúria e hipertensão**.'] },
      { rot:'Nefrótica', img:'p072_391', leg:'Poucas células, paredes capilares espessadas.',
        itens:['**Lesão estrutural da barreira** (podócitos e MBG): poucas células, paredes capilares **espessadas e róseas**, alças abertas, **sem infiltrado inflamatório**.','Explica **proteinúria maciça, edema e hipoalbuminemia**.'] },
      { rot:'Esquema', img:'p073_394', leg:'Síndrome nefrítica e síndrome nefrótica.',
        itens:['Nefrítica = **"filtro obstruído"**: inflamação → cai a TFG → oligúria, retenção de sal → HAS.','Nefrótica = **"filtro com vazamento"**: perde a seletividade → passa muita proteína.'] }
    ]
  },
  { t:'tabela', titulo:'As duas síndromes', p:'72',
    cols:['Nefrítica aguda','Nefrótica'],
    linhas:[
      ['Início / proteína','Início agudo; proteinúria discreta a moderada','Proteinúria maciça (> 3,5 g/dia)'],
      ['Urina','Oligúria, **hematúria** (cilindros hemáticos)','**Lipidúria**'],
      ['Sangue','TFG reduzida','**Hipoalbuminemia** (< 3 g/dL), **hiperlipidemia**'],
      ['Pressão','**Hipertensão arterial**','Geralmente normal'],
      ['Edema','Leve','Intenso, generalizado']
    ],
    nota:'Mecânica nefrótica: barreira sem seletividade → proteinúria → hipoalbuminemia → cai a **pressão oncótica** → líquido escapa para o interstício (**edema**). **Atenção:** síndrome não é doença; a GN pós-infecciosa é a doença, a nefrítica é como ela se apresenta.'
  },
  { t:'checar', titulo:'Confira o entendimento', p:'72–73',
    perg:'Mulher com anasarca, urina espumosa, proteinúria de 6 g/24 h, albumina 2,1 g/dL, colesterol alto, PA normal, sem hematúria. Que glomérulo você espera?',
    dica:'"Filtro com vazamento" ou "filtro obstruído"?',
    ops:[
      { t:'Hipercelular, com neutrófilos ocluindo as alças', por:'Esse é o glomérulo nefrítico, com hematúria e HAS.' },
      { t:'Pouco celular, paredes capilares espessadas, sem infiltrado', por:'Síndrome nefrótica: lesão estrutural da barreira.', certa:true },
      { t:'Normal; a lesão é tubular', por:'A proteinúria maciça vem da barreira glomerular.' }
    ]
  },
  { t:'tabela', titulo:'Classificação e matriz diagnóstica', p:'73–74',
    cols:['Pense em','Síndrome'],
    linhas:[
      ['Hipercelularidade + neutrófilos; humps (ME)','GN pós-infecciosa (pós-estreptocócica)','Nefrítica'],
      ['Crescente em Bowman','GN rapidamente progressiva','Nefrítica grave'],
      ['Proliferação mesangial + IgA','Nefropatia por IgA','Nefrítica (hematúria)'],
      ['Hipercelularidade endocapilar + duplo contorno','GN membranoproliferativa','Mista'],
      ['Glomérulo normal na MO, criança','Doença por lesões mínimas','Nefrótica'],
      ['Parede espessada + spikes na prata','Nefropatia membranosa','Nefrótica (adulto)'],
      ['Esclerose em parte de alguns glomérulos','GESF','Nefrótica'],
      ['Material amorfo + vermelho Congo','Amiloidose renal','Nefrótica'],
      ['Nódulos de Kimmelstiel-Wilson','Nefropatia diabética','Nefrótica']
    ],
    nota:'Etiologia: **primárias** × **secundárias** (lúpus, diabetes, amiloidose). Distribuição: **difusas** (maioria) × **focais** (< 50%). Tufo: **segmentares** (parte) × **globais** (todo).'
  },
  { t:'texto', titulo:'GN aguda pós-estreptocócica', p:'74–75', img:'p075_399', leg:'Alça capilar na GNDA: hump subepitelial, neutrófilos no lúmen, proliferação endotelial e mesangial.',
    corpo:[
      'Inflamação imunitária **GLOBAL e DIFUSA** dos glomérulos.',
      'Crianças e jovens, **1 a 3 semanas após** infecção por *Streptococcus* β-hemolítico do grupo A (faringite ou pele).',
      'Mecanismo: infecção → **imunocomplexos ativam o complemento** → atração de neutrófilos → hipercelularidade.',
      'Morfologia: glomérulo **aumentado e hipercelular**, proliferação **endotelial e mesangial**, exsudato de **neutrófilos**. Tipicamente **C3 baixo** e **ASLO elevada**.'
    ]
  },
  { t:'abas', titulo:'A assinatura da GNPE', p:'75–76',
    intro:'**MO + IF + ME**: as três técnicas juntas.',
    abas:[
      { rot:'Normal × GNDA', img:'p075_400', leg:'Glomérulos com GNDA (esquerda) e normais (direita).',
        itens:['GNDA: glomérulo grande e muito celular, ocupando quase todo o espaço de Bowman.','Normal: tufo menor, espaço de Bowman bem visível.'] },
      { rot:'MO', img:'p076_404', leg:'A: hipercelularidade difusa com neutrófilos.',
        itens:['Hipercelularidade difusa com numerosos **neutrófilos** (exsudativo).'] },
      { rot:'IF', img:'p076_405', leg:'B: IgG e C3 granulares ao longo da MBG.',
        itens:['IgG/C3 em padrão **GRANULAR** = imunocomplexos.'] },
      { rot:'ME', img:'p076_406', leg:'C: H = humps; P = podócitos; MB = membrana basal.',
        itens:['**Humps**: depósitos maciços **subepiteliais**, abaixo dos podócitos.'] }
    ]
  },
  { t:'checar', titulo:'Confira o entendimento', p:'71, 76',
    perg:'Na ME, depósitos em "corcova" abaixo dos podócitos. Que padrão eles dão na imunofluorescência?',
    dica:'São imunocomplexos ou anticorpos contra a MBG inteira?',
    ops:[
      { t:'Linear, por anticorpos anti-MBG', por:'Linear é do anti-MBG, que não forma humps.' },
      { t:'Granular de IgG e C3, por imunocomplexos subepiteliais', por:'Humps são imunocomplexos subepiteliais: padrão granular.', certa:true },
      { t:'Não aparecem na IF', por:'Os imunocomplexos aparecem na IF.' }
    ]
  },
  { t:'abas', titulo:'GN esclerosante difusa', p:'76–77',
    intro:'Fase final (crônica) de várias glomerulonefrites: proliferação endocapilar difusa, expansão da matriz mesangial com material esclerótico e espessamento da MBG.',
    abas:[
      { rot:'Esquema', img:'p076_407', leg:'Glomérulo normal e glomeruloesclerose.',
        itens:['A cicatriz (esclerose) ocupa o tufo e prejudica a função.'] },
      { rot:'1', img:'p077_410', leg:'Tufo retraído.',
        itens:['Tufo retraído, espaço de Bowman alargado, cápsula espessada (fibrose).'] },
      { rot:'2', img:'p077_411', leg:'Expansão de matriz.',
        itens:['Expansão de matriz e material esclerótico róseo, envolto por fibrose.'] },
      { rot:'3', img:'p077_412', leg:'Esclerose global.',
        itens:['Glomérulo substituído por **tecido hialino** (esclerose global), sem alças abertas: deixa de filtrar.'] }
    ]
  },
  { t:'resumo', titulo:'O que levar desta missão',
    itens:[
      'Barreira: **endotélio fenestrado + MBG + podócitos**; MBG é a principal barreira a proteínas. Mácula densa no túbulo distal junto ao polo vascular.',
      'Imunocomplexos (circulantes ou in situ) → IF **granular**; anti-MBG → **linear**. Subendotelial → inflamação; subepitelial → perda de proteína.',
      '**Nefrítica**: glomérulo hipercelular → hematúria, oligúria, HAS, edema leve. **Nefrótica**: barreira lesada, pouco celular → proteinúria > 3,5 g, hipoalbuminemia, edema intenso, hiperlipidemia, lipidúria.',
      '**GNPE**: 1–3 semanas após estreptococo; global e difusa; hipercelular com neutrófilos (MO), granular IgG/C3 (IF), **humps** (ME); C3 baixo, ASLO alta.',
      'Esclerosante difusa: fase final; tufo vira tecido **hialino**.'
    ]
  }
  ]
});
PM_CASES.m009 = {
  investigation:{
    title:'Investigação 009 · Urina avermelhada três semanas após faringite',
    fonte:'Caso das questões ANAT-33, ANAT-34 e ANAT-35 do banco de Anatomopatologia.',
    patient:{age:8,sex:'Masculino',complaint:'Edema facial e urina avermelhada',history:'Edema facial que melhora ao longo do dia, há seis dias, com aumento do volume abdominal e edema de membros inferiores. Há 3 dias, urina avermelhada e em menor quantidade.'},
    evidence:[
      {id:'faringe',label:'História recente',relevance:2,text:'Quadro compatível com **faringite há três semanas**, que melhorou sem medicação.',feedback:'Decisivo: o intervalo de 1 a 3 semanas após estreptococo.'},
      {id:'exame',label:'Exame físico',relevance:2,text:'**PA 150 × 110 mmHg**, edema ++/++++ em membros inferiores.',feedback:'Hipertensão aponta para nefrítica.'},
      {id:'urina',label:'Urina',relevance:2,text:'Urina **avermelhada** (hematúria) e em **menor quantidade** (oligúria).',feedback:'Hematúria e oligúria: nefrítica.'},
      {id:'eco',label:'Ultrassom de vias urinárias',relevance:0,text:'O caso não traz ultrassom; ele não classificaria a lesão glomerular.',feedback:'Baixo rendimento aqui.'}
    ],
    hypothesis:{prompt:'Qual é sua hipótese?',options:['GN aguda pós-estreptocócica (síndrome nefrítica)','Síndrome nefrótica por lesões mínimas','Pielonefrite aguda','GN esclerosante difusa'],correct:0,
      feedback:['Faringite 3 semanas antes, hematúria, oligúria e HAS: nefrítica.','Lesões mínimas não dão hematúria nem HAS importante.','Não há febre, dor lombar nem nitrito.','É um quadro agudo, não fase final.']},
    microscopy:{image:'bank:anat_q33_0.jpg',prompt:'Biópsia de caso semelhante. O que você vê?',options:['Glomérulo normal','Glomérulo aumentado e hipercelular, com neutrófilos','Glomérulo retraído e hialino','Neutrófilos só nos túbulos'],correct:1,hint:'Compare o tamanho do tufo com o espaço de Bowman e conte as células.',competencies:['visual','conceitual'],
      explain:['Há aumento da celularidade.','Proliferação endotelial e mesangial e neutrófilos: GNDA.','Isso é esclerose, fase final.','Isso seria pielonefrite.']},
    differential:[
      {prompt:'Na ME, os depósitos "H" abaixo dos podócitos são:',options:['Anti-MBG, padrão linear','Humps: imunocomplexos subepiteliais, IF granular de IgG e C3','Pedicelos apagados','Amiloide'],correct:1,competencies:['visual','diferencial'],
        explain:['Anti-MBG dá IF linear e não forma humps.','Humps são a assinatura da GNPE na ME.','Pedicelos apagados são de lesões mínimas.','Amiloide cora pelo vermelho Congo.']},
      {prompt:'Por que o C3 fica baixo?',options:['Perda urinária','Consumo pelo complemento ativado pelos imunocomplexos','Falta de produção hepática','Não fica baixo'],correct:1,competencies:['fisiopatologia'],
        explain:['Não é por perda urinária.','Os imunocomplexos ativam e consomem o complemento.','Não é falha hepática.','Tipicamente o C3 fica baixo.']},
      {prompt:'Neste momento, há indicação de biópsia?',options:['Sempre','Em geral não: o diagnóstico é clínico-laboratorial; biópsia para evolução atípica','Só para diferenciar nefrítica de nefrótica','Não, porque a GNPE não altera o glomérulo'],correct:1,competencies:['clinica'],
        explain:['Não é sempre (gabarito da ANAT-35).','Quadro típico: C3 baixo, ASLO alta e hematúria; biópsia se C3 baixo persistente ou piora da função.','A clínica e a urina já diferenciam.','A GNPE altera o glomérulo.']}
    ],
    final:{prompt:'Qual é a conclusão?',options:['GN difusa aguda pós-estreptocócica, síndrome nefrítica','Doença por lesões mínimas','Nefropatia membranosa','GN rapidamente progressiva'],correct:0,
      keyPrompt:'Qual combinação mais sustenta essa conclusão?',keyOptions:['Faringite prévia + hematúria, oligúria e HAS + glomérulo hipercelular com neutrófilos + humps','Proteinúria maciça sem hematúria','Crescentes em Bowman','Spikes na prata'],keyCorrect:0,competencies:['clinica','diferencial','visual']},
    debrief:{diagnosis:'Glomerulonefrite difusa aguda pós-estreptocócica (síndrome nefrítica)',evidence:['Faringite **3 semanas** antes: intervalo típico de 1 a 3 semanas.','**Hematúria, oligúria, HAS** e edema: síndrome nefrítica.','MO: glomérulo **aumentado, hipercelular**, com **neutrófilos**.','ME: **humps subepiteliais**; IF granular de IgG e C3.'],
      clinic:'A proliferação estreita as alças e reduz a filtração: oligúria, retenção de sal e hipertensão. O diagnóstico costuma ser clínico-laboratorial (C3 baixo, ASLO alta, hematúria).',
      revisar:{conceitual:'As duas síndromes (quadro)',visual:'A assinatura da GNPE (p. 75–76)',diferencial:'Classificação e matriz diagnóstica (p. 73–74)',clinica:'GN aguda pós-estreptocócica (p. 74–75)',fisiopatologia:'Como os imunocomplexos lesam o glomérulo (p. 71)'}}
  },
  mastery:[
    {id:'m9q1',image:'bank:anat_q36_0.jpg',q:'Anasarca, proteinúria de 6 g/24 h, albumina baixa, colesterol alto, PA normal e sem hematúria. O glomérulo é pouco celular com paredes espessadas. Mecanismo do edema:',ops:['Retenção de sal por inflamação','Perda de albumina reduz a pressão oncótica','Obstrução linfática','Hipertensão grave'],a:1,why:'Síndrome nefrótica: proteinúria → hipoalbuminemia → cai a pressão oncótica → edema.',c:['fisiopatologia','visual']},
    {id:'m9q2',image:'bank:anat_q34_0.jpg',q:'Na microscopia eletrônica, "H" são depósitos abaixo dos podócitos ("P"). São:',ops:['Pedicelos apagados','Humps subepiteliais de imunocomplexos','Anti-MBG linear','Amiloide'],a:1,why:'Humps: imunocomplexos subepiteliais, IF granular de IgG e C3.',c:['visual','conceitual']},
    {id:'m9q3',image:'p072_390',q:'Tufo muito celular, lóbulos cheios e alças estreitadas. Que síndrome ele explica?',ops:['Nefrótica','Nefrítica','Nenhuma','Lesão tubular aguda'],a:1,why:'Glomérulo hipercelular e inflamado → nefrítica (hematúria, oligúria, HAS).',c:['visual','diferencial']},
    {id:'m9q4',q:'Imunofluorescência com padrão LINEAR ao longo da MBG indica:',ops:['Imunocomplexos circulantes','Anticorpos anti-MBG','Amiloide','Humps'],a:1,why:'Anti-MBG produz padrão linear; imunocomplexos, granular.',c:['conceitual','diferencial']},
    {id:'m9q5',q:'Criança com síndrome nefrótica intensa e glomérulo normal na microscopia óptica. Pense em:',ops:['GNPE','Doença por lesões mínimas','GN membranosa','Nefropatia diabética'],a:1,why:'Glomérulo normal na MO com nefrótica em criança = lesões mínimas.',c:['clinica','diferencial']},
    {id:'m9q6',image:'p077_412',q:'Glomérulo substituído por tecido hialino, róseo e acelular, sem alças abertas. Isso é:',ops:['Proliferação mesangial','Esclerose global (fase final)','Hump','Crescente celular'],a:1,why:'O tufo vira tecido hialino e deixa de filtrar: esclerose global.',c:['visual','conceitual']}
  ]
};

/* ===== Missão 010 · Neoplasias renais, LRA e DRC (apostila p. 77–89; questões ANAT-37 a 40) ===== */
PM_MISSOES.push({
  id:'m010', num:'010', titulo:'Neoplasias renais, lesão renal aguda e DRC',
  sub:'Adenoma, oncocitoma, carcinomas renais, NTA isquêmica e tóxica, doença renal crônica',
  pags:'77–89', cor:'#d9578f',
  questoes:['ANAT-37','ANAT-38','ANAT-39','ANAT-40'],
  etapas:[
  { t:'abas', titulo:'Tumores benignos', p:'77–78',
    intro:'Benigna: bem delimitada, cresce devagar, sem atipia importante, não invade nem dá metástase. Maligna (carcinoma): invade e pode metastatizar.',
    abas:[
      { rot:'Adenoma papilar', img:'p077_413', leg:'Nódulos pequenos, bem delimitados, no córtex; células pequenas e cúbicas.',
        itens:['Nódulo **pequeno**, bem delimitado, cinza a amarelado, no **córtex**.','Padrão **papilar ou túbulo-papilar**; células pequenas, cúbicas, núcleo central regular, citoplasma escasso.','**Sem atipia significativa**: é o que o diferencia do carcinoma papilífero.'] },
      { rot:'Oncocitoma (macro)', img:'p078_416', leg:'Massa marrom-mogno com cicatriz central estelar.',
        itens:['Origem nas **células intercalares** do ducto coletor, ricas em mitocôndrias.','Massa bem delimitada, encapsulada, **marrom-mogno**, homogênea; **cicatriz central estelar** (1/3 dos casos); até 12 cm.'] },
      { rot:'Oncocitoma (micro)', imgs:['p078_417','p078_418'], leg:'Ninhos de células róseas em estroma frouxo; oncócitos.',
        itens:['**Oncócitos**: células grandes, citoplasma **abundante e muito eosinofílico** (mitocôndrias), em ninhos, trabéculas ou túbulos.','Núcleos **pequenos, redondos e uniformes**.'] }
    ]
  },
  { t:'tabela', titulo:'Carcinomas de células renais', p:'79',
    cols:['Origem / genética','Macroscopia','Microscopia'],
    linhas:[
      ['Células claras (mais comum)','Túbulo contorcido proximal; perda do **VHL**','**Amarela**, brilhante, necrose e hemorragia','Citoplasma **claro** (lipídio e glicogênio), **rede delicada de capilares**'],
      ['Papilífero (2º)','Túbulo; ativação do **MET**','Acastanhado, hemorrágico, cístico; multifocal/bilateral','**Papilas** com eixo fibrovascular, macrófagos espumosos, **psamomas**'],
      ['Cromófobo (menos comum)','**Células intercalares**; perdas de cromossomos','Sólido, amarelo-pálido a marrom, homogêneo','Células grandes pálidas, **halo perinuclear**, núcleo em **"uva-passa"**']
    ],
    nota:'Derivam do epitélio tubular, no córtex; mais comuns aos 60–70 anos. Fatores: **tabagismo, hipertensão, obesidade**, cádmio; risco 30 vezes maior na doença policística adquirida da diálise. **Tríade clássica:** hematúria indolor, massa palpável e dor no flanco (completa em só 10–15%).'
  },
  { t:'sequencia', titulo:'Células claras: do VHL à cor amarela', p:'79–80',
    passos:[
      { h:'Perda do VHL', txt:'Gene **supressor tumoral** perdido nas células do túbulo contorcido proximal.' },
      { h:'Acúmulo de HIF', txt:'A célula tem uma "sensação" constante de **hipóxia**.' },
      { h:'Aumento de VEGF', txt:'Ativa genes de **angiogênese**, sobrevivência e crescimento: daí a **rede delicada de capilares**.' },
      { h:'Alteração metabólica', txt:'Acúmulo de **lipídios e glicogênio**: a massa fica **amarela**; na lâmina, o citoplasma fica **claro**, porque o lipídio e o glicogênio se dissolvem no processamento.' }
    ],
    nota:'Macroscopia: massa amarela, brilhante, bem delimitada, num **polo** do rim, vista só na superfície de corte; necrose e hemorragia; pode **invadir a veia renal**.'
  },
  { t:'abas', titulo:'Os três carcinomas na lâmina', p:'79–82',
    abas:[
      { rot:'Células claras', imgs:['p080_426','p080_427'], leg:'Ninhos de células claras separados por septos finos de capilares; citoplasma "vazio" e núcleo redondo central.',
        itens:['Ninhos de células claras separados por **septos finos e róseos de capilares**.','Estroma discreto, sem resposta inflamatória.'] },
      { rot:'Papilífero', imgs:['p080_428','p081_431'], leg:'Papilas com eixo fibrovascular; padrão basofílico com macrófagos espumosos.',
        itens:['Células cuboides ou colunares baixas em **papilas com eixo fibrovascular**.','**Macrófagos espumosos** dentro das papilas e **corpos psamomatosos** (esferas roxas concêntricas, calcificação distrófica).'] },
      { rot:'Cromófobo', imgs:['p081_433','p082_436'], leg:'Células grandes e pálidas com membranas nítidas; halo perinuclear.',
        itens:['Células grandes com citoplasma pálido, **halo perinuclear claro** e núcleo **enrugado em "uva-passa"**.','Diferencial com oncocitoma: o cromófobo tem células **mais pálidas**, membranas grossas e halos.'] }
    ]
  },
  { t:'checar', titulo:'Confira o entendimento', p:'78–82',
    perg:'Massa renal marrom-mogno, homogênea, com cicatriz central estelar; células com citoplasma rosa intenso e núcleos redondos uniformes. Diagnóstico?',
    dica:'Rosa intenso = mitocôndrias. Benigno ou maligno?',
    ops:[
      { t:'Carcinoma de células claras', por:'Esse é amarelo, com citoplasma claro.' },
      { t:'Oncocitoma', por:'Marrom-mogno, cicatriz central, oncócitos eosinofílicos com núcleos uniformes.', certa:true },
      { t:'Carcinoma cromófobo', por:'O cromófobo tem células pálidas com halo perinuclear e núcleo em uva-passa.' }
    ]
  },
  { t:'texto', titulo:'Lesão renal aguda', p:'82–83', img:'p082_437', leg:'Sequência da lesão tubular aguda isquêmica ou tóxica.',
    corpo:[
      'Redução **súbita e reversível** da função renal, por **isquemia**, **nefrotóxicos** ou **obstrução**.',
      'As células tubulares lesadas se **desprendem e obstruem o lúmen**; parte do filtrado **extravasa** para o interstício; há inflamação e, na isquemia, vasoconstrição. Resultado: **↓ TFG e ↓ débito urinário**.',
      '**Isquêmicas (pré-renais):** hipotensão, choque séptico, hemorragias, grandes cirurgias. **Obstrutivas (pós-renais):** cálculos, hiperplasia prostática, tumores. **Nefrotóxicas:** aminoglicosídeos, contrastes, AINEs, metais pesados, mioglobina/hemoglobina.'
    ]
  },
  { t:'tabela', titulo:'NTA isquêmica × tóxica', p:'83, 87',
    cols:['Isquêmica','Tóxica'],
    linhas:[
      ['Distribuição','Necrose **FOCAL**: trechos curtos','Necrose **EXTENSA** ao longo dos segmentos'],
      ['Segmentos mais lesados','Túbulo reto proximal e ramo ascendente espesso da alça','**Túbulo contorcido proximal**'],
      ['Por quê','Maior consumo de energia e pouco oxigênio','Filtra, concentra e reabsorve as toxinas'],
      ['Outros achados','**Tubulorrexe** (ruptura da MB), cilindros','**Membrana basal preservada**; células necróticas preenchem a luz']
    ],
    nota:'Em ambas: **glomérulo preservado** e sinais de **regeneração** (mitoses, núcleos grandes, citoplasma basófilo).'
  },
  { t:'abas', titulo:'NTA na lâmina', p:'84–86',
    abas:[
      { rot:'Isquêmica', img:'p084_444', leg:'Túbulos dilatados e lesados; células descoladas da MB e congestão.',
        itens:['Células tubulares **desprendidas da membrana basal**, cilindros granulares.','**Congestão** proeminente dos capilares peritubulares.'] },
      { rot:'Cilindro e mitose', img:'p084_445', leg:'Mitose e cilindro pigmentado.',
        itens:['**Mitose** = regeneração.','**Cilindro pigmentado**: granuloso e hialino, de proteína de Tamm-Horsfall + hemoglobina.'] },
      { rot:'Tóxica', img:'p085_448', leg:'Necrose e regeneração; túbulos normais do mesmo caso.',
        itens:['Células necróticas **preenchendo a luz**; núcleos picnóticos ou ausentes.','Regeneração: células achatadas, cromatina frouxa, nucléolo evidente, citoplasma **basófilo**.'] },
      { rot:'Glomérulo preservado', img:'p086_452', leg:'Túbulos necróticos, glomérulo isquêmico e túbulos íntegros.',
        itens:['**Glomérulo isquêmico**: retraído, mas preservado.','Túbulos necróticos (sem núcleos, rosa homogêneo) × túbulos íntegros (com núcleos).'] }
    ]
  },
  { t:'sequencia', titulo:'Doença renal crônica', p:'87',
    intro:'Via comum final de perda progressiva de néfrons, em qualquer doença renal grave.',
    passos:[
      { h:'Inicial', txt:'Parte do rim é lesada; alguns néfrons se perdem.' },
      { h:'Adaptativa', txt:'Os néfrons restantes **hiperfiltram**: mantêm a função por um tempo, mas aumentam o estresse hemodinâmico.' },
      { h:'Progressão', txt:'A hiperfiltração lesa os glomérulos remanescentes: **glomeruloesclerose**, **fibrose intersticial**, **atrofia tubular**, esclerose vascular.' },
      { h:'Terminal', txt:'O rim perde a homeostase: insuficiência renal crônica avançada, **uremia**.' }
    ],
    nota:'Laboratório: ↑ ureia e creatinina, ↓ TFG, acidose metabólica, **anemia (menos eritropoetina)**, alterações de cálcio e fósforo e **hiperparatireoidismo secundário** (o rim não ativa a vitamina D e retém fósforo).'
  },
  { t:'abas', titulo:'DRC na lâmina', p:'88–89',
    abas:[
      { rot:'Tricrômico', img:'p088_459', leg:'Tricrômico de Masson: colágeno em azul.',
        itens:['Quase todos os glomérulos substituídos por colágeno (**bolas azuis**) = **glomeruloesclerose global**.','Entre eles: atrofia tubular, fibrose intersticial, infiltrado crônico; arteríola espessada = esclerose vascular.'] },
      { rot:'Nodular × difusa', img:'p088_460', leg:'Glomeruloesclerose nodular e difusa.',
        itens:['**Nodular**: nódulo róseo, hialino e acelular.','**Difusa**: expansão mesangial espalhada pelo tufo.'] },
      { rot:'Kimmelstiel-Wilson', img:'p088_461', leg:'Lesão de Kimmelstiel-Wilson e hialinose arteriolar.',
        itens:['**Kimmelstiel-Wilson**: nódulo mesangial hialino num lóbulo; virtualmente **patognomônico da nefropatia diabética**.','**Hialinose arteriolar**: parede da arteríola espessada e rósea (hipertensão; muito pronunciada em diabéticos).'] },
      { rot:'Hialinose', img:'p089_464', leg:'Hialinose arteriolar e glomérulo com alças colapsadas.',
        itens:['Parede da arteríola substituída por material róseo, homogêneo e vítreo, estreitando a luz: o glomérulo ao lado fica isquêmico.'] }
    ]
  },
  { t:'resumo', titulo:'O que levar desta missão',
    itens:[
      '**Adenoma papilar**: pequeno, cortical, sem atipia. **Oncocitoma**: marrom-mogno, cicatriz central, oncócitos eosinofílicos (células intercalares).',
      '**Células claras**: TCP, **VHL → HIF → VEGF**; amarelo, citoplasma claro, capilares delicados; pode invadir a veia renal.',
      '**Papilífero**: MET; papilas, macrófagos espumosos, psamomas; multifocal. **Cromófobo**: intercalares; halo perinuclear, núcleo em uva-passa.',
      'LRA: isquemia, nefrotóxicos, obstrução. **NTA isquêmica** focal, tubulorrexe; **tóxica** extensa no TCP, MB preservada; glomérulo preservado, regeneração.',
      '**DRC**: hiperfiltração → glomeruloesclerose, fibrose, atrofia, esclerose vascular; anemia (EPO), acidose, hiperparatireoidismo secundário. **Kimmelstiel-Wilson** = nefropatia diabética.'
    ]
  }
  ]
});
PM_CASES.m010 = {
  investigation:{
    title:'Investigação 010 · Hematúria indolor e massa no polo superior',
    fonte:'Caso da questão ANAT-37 do banco de Anatomopatologia; imagens da apostila p. 79–80.',
    patient:{age:63,sex:'Masculino',complaint:'Hematúria indolor e dor incômoda no flanco direito',history:'Tabagista, obeso e hipertenso. Fez tomografia e nefrectomia.'},
    evidence:[
      {id:'fatores',label:'Fatores de risco',relevance:1,text:'**Tabagismo, obesidade e hipertensão.**',feedback:'Fatores predisponentes dos carcinomas renais.'},
      {id:'tc',label:'Tomografia',relevance:2,text:'Massa no **polo superior** do rim direito que **invade a veia renal**.',feedback:'Invasão sugere tumor maligno.'},
      {id:'macro',label:'Peça cirúrgica ao corte',relevance:2,img:'p079_422',cap:'Massa amarelada ocupando um polo do rim (apostila p. 79).',text:'Massa **amarela, brilhante**, com **hemorragia e necrose**.',feedback:'Decisivo: a cor amarela vem dos lipídios.'},
      {id:'urocultura',label:'Urocultura',relevance:0,text:'O caso não traz urocultura; hematúria indolor com massa não é quadro infeccioso.',feedback:'Baixo rendimento aqui.'}
    ],
    hypothesis:{prompt:'Qual é sua hipótese?',options:['Carcinoma de células claras','Oncocitoma','Adenoma papilar','Pielonefrite aguda'],correct:0,
      feedback:['Massa amarela com necrose, hemorragia e invasão da veia renal.','O oncocitoma é marrom-mogno e não invade a veia.','O adenoma papilar é pequeno.','Não há quadro infeccioso.']},
    microscopy:{image:'bank:anat_q37_0.jpg',prompt:'Histologia da massa. O que você vê?',options:['Oncócitos de citoplasma rosa intenso','Células de citoplasma claro separadas por rede delicada de capilares','Papilas com macrófagos espumosos','Células com halo perinuclear e núcleo em uva-passa'],correct:1,hint:'O citoplasma está cheio ou "vazio"? O que separa os ninhos?',competencies:['visual','conceitual'],
      explain:['Isso seria oncocitoma.','Citoplasma claro (lipídio e glicogênio) e capilares delicados: células claras.','Isso seria papilífero.','Isso seria cromófobo.']},
    differential:[
      {prompt:'Qual é a alteração genética típica?',options:['Ativação do MET','Perda do VHL','Perdas cromossômicas das intercalares','Mutação do APC'],correct:1,competencies:['fisiopatologia','conceitual'],
        explain:['MET é do papilífero.','VHL perdido → HIF → VEGF.','Perdas cromossômicas são do cromófobo.','APC é do colorretal.']},
      {prompt:'Por que o citoplasma aparece claro na lâmina?',options:['Por mitocôndrias','Lipídio e glicogênio se dissolvem no processamento','Por necrose','Por edema'],correct:1,competencies:['visual','fisiopatologia'],
        explain:['Mitocôndrias deixam o citoplasma rosa (oncócito).','É a explicação da apostila.','Não é necrose.','Não é edema.']},
      {prompt:'Qual achado mais afasta oncocitoma?',options:['Massa bem delimitada','Invasão da veia renal e cor amarela','Idade acima de 50','Tumor no córtex'],correct:1,competencies:['diferencial','clinica'],
        explain:['Ambos podem ser delimitados.','Oncocitoma é benigno, marrom-mogno e não invade a veia.','Não diferencia.','Não diferencia.']}
    ],
    final:{prompt:'Qual é a conclusão?',options:['Carcinoma de células claras','Carcinoma papilífero','Oncocitoma','Carcinoma cromófobo'],correct:0,
      keyPrompt:'Qual combinação mais sustenta essa conclusão?',keyOptions:['Massa amarela com necrose e invasão da veia + células claras com capilares delicados','Cicatriz central estelar','Psamomas','Halo perinuclear'],keyCorrect:0,competencies:['clinica','diferencial','visual']},
    debrief:{diagnosis:'Carcinoma de células claras',evidence:['Tabagista, obeso, hipertenso, 63 anos: perfil de risco.','Hematúria indolor e dor no flanco (parte da tríade).','Massa **amarela**, brilhante, com necrose e hemorragia, **invadindo a veia renal**.','Células de **citoplasma claro** com **rede delicada de capilares**.'],
      clinic:'A perda do VHL simula hipóxia: o VEGF forma muitos vasos (capilares delicados, hemorragia) e o metabolismo alterado acumula lipídios (cor amarela). A tríade completa aparece em poucos pacientes.',
      revisar:{conceitual:'Carcinomas de células renais (quadro)',visual:'Os três carcinomas na lâmina (p. 79–82)',diferencial:'Confira: oncocitoma (p. 78–82)',clinica:'Carcinomas de células renais (quadro)',fisiopatologia:'Células claras: do VHL à cor amarela (p. 79–80)'}}
  },
  mastery:[
    {id:'m10q1',image:'bank:anat_q38_0.jpg',q:'Massa renal marrom-mogno com cicatriz central estelar; histologia abaixo. Diagnóstico:',ops:['Células claras','Cromófobo','Adenoma papilar','Oncocitoma'],a:3,why:'Oncocitoma: oncócitos eosinofílicos, núcleos uniformes, das células intercalares.',c:['visual','diferencial']},
    {id:'m10q2',image:'bank:anat_q39_0.jpg',q:'Choque séptico com hipotensão prolongada, oligúria e creatinina subindo. Histologia de caso semelhante. Diagnóstico:',ops:['DRC','NTA tóxica extensa','Glomerulonefrite','NTA isquêmica, focal e reversível'],a:3,why:'Células desprendidas da MB, cilindros e congestão; lesão focal da isquemia.',c:['visual','clinica']},
    {id:'m10q3',image:'bank:anat_q40_0.jpg',q:'Diabética e hipertensa em hemodiálise, com anemia. Tricrômico com glomérulos azuis. A anemia se deve a:',ops:['Hemólise','Menor produção de eritropoetina','Perda de ferro na urina','Medula aplásica'],a:1,why:'DRC: o rim produz menos eritropoetina.',c:['clinica','fisiopatologia']},
    {id:'m10q4',image:'p082_436',q:'Células grandes e pálidas, membranas nítidas, halo perinuclear e núcleo enrugado. Tumor e origem:',ops:['Células claras, TCP','Cromófobo, células intercalares','Papilífero, MET','Oncocitoma, TCP'],a:1,why:'Cromófobo: halo perinuclear, núcleo em uva-passa, células intercalares.',c:['visual','conceitual']},
    {id:'m10q5',q:'Necrose extensa e contínua do túbulo contorcido proximal com membrana basal preservada, após aminoglicosídeo, indica:',ops:['NTA isquêmica','NTA tóxica','Pielonefrite','GN'],a:1,why:'NTA tóxica: extensa, no TCP, MB preservada.',c:['diferencial','conceitual']},
    {id:'m10q6',image:'p088_461',q:'Nódulo mesangial hialino e acelular em um lóbulo glomerular. É virtualmente patognomônico de:',ops:['Amiloidose','Nefropatia diabética (Kimmelstiel-Wilson)','GNPE','Hipertensão isolada'],a:1,why:'Lesão de Kimmelstiel-Wilson = nefropatia diabética.',c:['visual','clinica']}
  ]
};

/* ===== Missão 011 · Mama e útero (apostila p. 89–103; questões ANAT-41 a 44) ===== */
PM_MISSOES.push({
  id:'m011', num:'011', titulo:'Mama e útero',
  sub:'Mama inativa e ativa, adenoma lactacional, fibroadenoma, ciclo endometrial, decídua e Arias-Stella',
  pags:'89–103', cor:'#d9578f',
  questoes:['ANAT-41','ANAT-42','ANAT-43','ANAT-44'],
  etapas:[
  { t:'texto', titulo:'A glândula mamária', p:'89–90', img:'p090_467', leg:'Caminho do leite até o mamilo.',
    corpo:[
      'As mamas são **glândulas sudoríparas modificadas**: cerca de **15 a 25 glândulas**, cada uma ocupando um **lobo**, separados por conjuntivo e gordura; o sistema ductal converge para o mamilo.',
      'Caminho do leite: **ácinos/ductos terminais → ducto extralobular → ducto galactóforo → seio galactóforo → mamilo**.',
      '**Lóbulo (UDLT)**: ducto terminal + seus ácinos, a unidade funcional. Estroma **intralobular** frouxo e celular; **interlobular** denso, fibroso e com gordura.'
    ]
  },
  { t:'abas', titulo:'Mama inativa (em repouso)', p:'90–91',
    intro:'Fora da gestação e da lactação: predominam **ductos terminais**, com pouca diferenciação secretora e muito conjuntivo.',
    abas:[
      { rot:'Lóbulos', imgs:['p090_468','p090_469'], leg:'Grupos de ductos terminais e ácinos formando lóbulos; ducto galactóforo e ramificações.',
        itens:['Grupos de ductos terminais e ácinos (roxos) formando **lóbulos**, com muito conjuntivo (rosa) ao redor.'] },
      { rot:'Ducto e lóbulo', img:'p091_472', leg:'Ducto e lóbulo pequenos em meio a tecido fibroso e adiposo.',
        itens:['Ducto e lóbulo pequenos em meio a **muito tecido fibroso e adiposo** = mama em repouso.'] },
      { rot:'Estroma', img:'p091_473', leg:'Ácinos mamários, estroma intralobular e linfócitos.',
        itens:['Lóbulo = ácinos + estroma **intralobular** (mais frouxo, com linfócitos).'] }
    ]
  },
  { t:'explorar', titulo:'Duas camadas no ácino', p:'91', img:'p091_475',
    intro:'Toque nos números.',
    pts:[
      { x:50, y:42, nome:'Células epiteliais', txt:'Camada **interna**, secretora.' },
      { x:18, y:38, nome:'Células mioepiteliais', txt:'Camada **externa**, contrátil, entre o epitélio e a membrana basal. Contraem-se sob **ocitocina** e ejetam o leite. Sua presença ajuda a mostrar que uma lesão é **benigna**.' }
    ]
  },
  { t:'abas', titulo:'Mama ativa: gestação e lactação', p:'92–93',
    intro:'**Estrógeno + progesterona** fazem a mama crescer na gestação; a **prolactina** ativa a secreção; a **ocitocina** contrai as mioepiteliais.',
    abas:[
      { rot:'Esquema', img:'p092_478', leg:'A: ductos inativos. B: alvéolos proliferam (gestação). C: alvéolos cheios de leite (lactação).',
        itens:['Gravidez: mais ramificação e **alvéolos** nas extremidades dos ductos.','Lactação: alvéolos **funcionantes e dilatados**, menos conjuntivo e gordura.'] },
      { rot:'Lactação', img:'p092_480', leg:'Alvéolos numerosos e dilatados, pouco estroma.',
        itens:['Alvéolos numerosos e dilatados, **pouco estroma**.'] },
      { rot:'Secreção', img:'p092_481', leg:'Secreção no lúmen e células secretoras com vacúolos de lipídio.',
        itens:['Células secretoras com **vacúolos de lipídio**; leite no lúmen.','Secretam lipídios, proteínas e **IgA**; a gordura sai por secreção **apócrina**.'] }
    ]
  },
  { t:'tabela', titulo:'Inativa × grávida × lactante', p:'93',
    cols:['Inativa','Grávida','Lactante'],
    linhas:[
      ['Domina','Estroma (conjuntivo/gordura)','Parênquima em expansão','Parênquima pleno'],
      ['Alvéolos','Ausentes','Presentes, luz pequena, algum colostro','Predominantes, luz dilatada, cheios de leite'],
      ['Ductos','Terminais curtos, isolados','Altamente ramificados','Visíveis; o foco são os alvéolos'],
      ['Epitélio','Cuboidal baixo, sem secreção','Cuboidal/colunar, início de vacuolização','Colunar alto, vacuolização intensa'],
      ['Lúmen','Nada','Pouco, eosinofílico (colostro)','Abundante (leite)']
    ]
  },
  { t:'abas', titulo:'Adenoma lactacional', p:'93–94',
    intro:'Lesão **benigna** ligada ao estímulo hormonal da **gestação/lactação**: proliferação lobuloalveolar e atividade secretora acentuada; pode ser nódulo palpável.',
    abas:[
      { rot:'Pequeno aumento', img:'p094_488', leg:'Fragmento de biópsia: lesão densa de glândulas e lóbulos proliferados.',
        itens:['Lesão **bem delimitada**, densa, de lóbulos/alvéolos proliferados.'] },
      { rot:'Glândulas', img:'p094_489', leg:'Glândulas com luz evidente, muito juntas, pouco estroma.',
        itens:['Glândulas com **luz evidente**, muito juntas, **pouco estroma** (menos que no fibroadenoma).'] },
      { rot:'Secreção', imgs:['p094_490','p094_491'], leg:'Células cuboides com vacuolização; secreção eosinofílica no lúmen.',
        itens:['Células com **vacuolização citoplasmática** (lipídio).','**Secreção eosinofílica** no lúmen = atividade secretora.'] }
    ]
  },
  { t:'abas', titulo:'Fibroadenoma', p:'94–95',
    intro:'**Tumor benigno mais comum da mama feminina**, na idade fértil, sobretudo **antes dos 30 anos**; sensível a hormônios (aumenta no fim do ciclo ou na lactação, regride na menopausa). Proliferação do **estroma e dos ductos**.',
    abas:[
      { rot:'Macroscopia', img:'p095_494', leg:'Massa bem delimitada, com fina cápsula fibrosa.',
        itens:['Massa **bem delimitada**, fina **cápsula fibrosa**, branco-acinzentada e **elástica**.'] },
      { rot:'Normal × fibroadenoma', img:'p095_495', leg:'Mama normal (glândulas formam lóbulos) × fibroadenoma (tracejado).',
        itens:['Normal: glândulas formam **lóbulos**.','Fibroadenoma: glândulas distribuídas irregularmente em **estroma abundante**.','Tumor **fibroepitelial**: o estroma cresce e **comprime os ductos**, que ficam alongados como "fendas".'] }
    ]
  },
  { t:'tabela', titulo:'Adenoma lactacional × fibroadenoma × hiperplasia lobular', p:'95',
    cols:['Adenoma lactacional','Fibroadenoma','Hiperplasia lobular'],
    linhas:[
      ['Domina','Glândulas/lóbulos','Estroma + ductos','Lóbulos'],
      ['Secreção','Muito evidente','Discreta/ausente','Menos exuberante'],
      ['Pista','Gestação/lactação','Estroma fibroso evidente','Aumento lobular sem massa secretora típica']
    ],
    nota:'**Atenção à prova:** adenoma lactacional = muitas glândulas com secreção e pouco estroma, em gestante/lactante. Fibroadenoma = estroma abundante comprimindo ductos, em mulher jovem.'
  },
  { t:'checar', titulo:'Confira o entendimento', p:'94–95',
    perg:'Mulher de 23 anos com nódulo móvel, elástico, que aumenta antes da menstruação. Biópsia: estroma abundante envolvendo ductos alongados. Diagnóstico?',
    dica:'O que domina: glândulas com secreção ou estroma?',
    ops:[
      { t:'Adenoma lactacional', por:'Exige contexto de gestação/lactação e muita secreção com pouco estroma.' },
      { t:'Fibroadenoma', por:'Jovem, nódulo elástico, sensível a hormônios, estroma abundante com ductos alongados.', certa:true },
      { t:'Mama em repouso', por:'A mama em repouso não forma nódulo.' }
    ]
  },
  { t:'abas', titulo:'Útero e endométrio', p:'96–97',
    abas:[
      { rot:'Camadas', img:'p096_501', leg:'Miométrio (músculo liso) e endométrio com glândulas.',
        itens:['Parede: **endométrio**, **miométrio** (músculo liso, a mais espessa) e perimétrio/adventícia.','Endométrio: epitélio simples colunar, estroma endometrial e glândulas tubulosas simples.'] },
      { rot:'Ciclo hormonal', img:'p096_503', leg:'Hormônios hipofisários e ovarianos e o endométrio ao longo do ciclo.',
        itens:['Dias 1–4: menstrual. Até o dia 14: **proliferativa** (estradiol). Pico de LH → ovulação. Depois: **secretora** (progesterona do corpo lúteo).','**Estrogênio faz crescer; progesterona faz secretar.**'] },
      { rot:'Basal e funcional', img:'p097_507', leg:'Camada funcional, camada basal e artérias espiraladas.',
        itens:['**Basal**: fundo das glândulas e células-tronco; permanece e regenera.','**Funcional**: superficial, muda e descama; irrigada pelas **artérias espiraladas**.'] }
    ]
  },
  { t:'abas', titulo:'As fases na lâmina', p:'97–100',
    abas:[
      { rot:'Menstrual', img:'p097_508', leg:'Camada funcional se desprendendo, com sangue na cavidade.',
        itens:['Progesterona cai → **artérias espiraladas contraem** → isquemia da funcional → necrose e descamação.','A camada basal com os fundos glandulares permanece.'] },
      { rot:'Proliferativa', img:'p098_511', leg:'Glândulas retas e estreitas em estroma denso.',
        itens:['Estrogênio: glândulas **retas, estreitas**, perpendiculares à superfície, **sem secreção**.','Estroma denso; angiogênese.'] },
      { rot:'Mitoses', imgs:['p098_513','p098_514'], leg:'Mitose no epitélio glandular e no estroma.',
        itens:['Epitélio colunar pseudoestratificado com **mitoses** no epitélio e no estroma.'] },
      { rot:'Secretora', img:'p099_519', leg:'Glândulas largas e tortuosas com secreção.',
        itens:['Progesterona: glândulas **tortuosas** ("dente de serra"), lúmen dilatado **com secreção**, **edema** do estroma.','Preparo para a implantação.'] },
      { rot:'Comparação', img:'p100_525', leg:'Proliferativa (glândulas retas) × secretora (tortuosas).',
        itens:['Esquerda: proliferativa. Direita: secretora.'] }
    ]
  },
  { t:'checar', titulo:'Confira o entendimento', p:'99–100',
    perg:'Biópsia de endométrio no 22º dia de ciclo de 28 dias. O que se espera?',
    dica:'O dia 22 vem depois da ovulação. Qual hormônio predomina?',
    ops:[
      { t:'Glândulas retas com mitoses (proliferativa)', por:'Proliferativa é antes da ovulação, sob estrogênio.' },
      { t:'Glândulas tortuosas com secreção e edema (secretora)', por:'Após a ovulação, a progesterona do corpo lúteo produz a fase secretora.', certa:true },
      { t:'Descamação da basal', por:'A basal não descama; ela regenera.' }
    ]
  },
  { t:'abas', titulo:'Útero gravídico: decídua', p:'100–101',
    intro:'Fecundação → implantação → **HCG** do trofoblasto mantém o corpo lúteo → progesterona alta → sem menstruação.',
    abas:[
      { rot:'Decídua', img:'p101_529', leg:'Células do estroma grandes, poligonais e róseas.',
        itens:['**Decidualização**: células do estroma **grandes, poligonais**, citoplasma **róseo e abundante** ("epitelioide").'] },
      { rot:'Ao redor da glândula', img:'p101_530', leg:'Decidualização do estroma ao redor da glândula.',
        itens:['O endométrio gravídico é a **decídua**.'] }
    ]
  },
  { t:'explorar', titulo:'Reação de Arias-Stella', p:'102–103', img:'p102_536',
    intro:'Alteração glandular da gestação (ou hiperprogesteronemia). Toque nos números.',
    pts:[
      { x:52, y:28, nome:'Hobnail cell', txt:'Célula em **"cabeça de prego"**, saliente na luz, com núcleo grande e escuro.' },
      { x:28, y:78, nome:'Citoplasma abundante', txt:'Citoplasma **róseo e vacuolado**, pela abundante secreção.' }
    ],
    destaque:'Núcleos grandes, hipercromáticos e pleomórficos por **poliploidia** (o DNA se duplica sem divisão, pela progesterona). **Parece câncer, mas é reativo**: sempre considerar gestação (inclusive ectópica) ou progesterona alta.'
  },
  { t:'tabela', titulo:'Resumo do ciclo endometrial', p:'100',
    cols:['Hormônio','Glândulas','Estroma'],
    linhas:[
      ['Menstrual','Queda da progesterona','Fragmentadas, descamando','Necrose, hemorragia'],
      ['Proliferativa','Estrogênio','Retas, estreitas, mitoses, sem secreção','Denso, celular, mitoses'],
      ['Secretora','Progesterona','Tortuosas, dilatadas, com secreção','Edemaciado'],
      ['Gravídica (decídua)','Progesterona alta (HCG)','Muito tortuosas, luz estrelada; Arias-Stella','Decidualizado: células grandes e róseas']
    ]
  },
  { t:'resumo', titulo:'O que levar desta missão',
    itens:[
      'Mama: lobos, lóbulos (UDLT), ácinos com **epitélio + mioepitélio** (ocitocina; sinal de benignidade).',
      'Inativa: estroma domina. Grávida: alvéolos proliferam. Lactante: alvéolos dilatados cheios de leite, pouco estroma.',
      '**Adenoma lactacional**: gestação/lactação; glândulas com secreção e vacuolização, **pouco estroma**. **Fibroadenoma**: jovem, elástico, **estroma abundante comprimindo ductos**.',
      'Ciclo: **estrogênio → proliferativa** (glândulas retas, mitoses); **progesterona → secretora** (tortuosas, secreção, edema); queda da progesterona → menstrual.',
      'Gestação: **decídua** (estroma grande e róseo) e **Arias-Stella** (núcleos grandes e hipercromáticos, hobnail, poliploidia) — reativo, não neoplasia.'
    ]
  }
  ]
});
PM_CASES.m011 = {
  investigation:{
    title:'Investigação 011 · Atraso menstrual e células que parecem câncer',
    fonte:'Caso da questão ANAT-44 do banco de Anatomopatologia; imagens da apostila p. 101–103.',
    patient:{age:27,sex:'Feminino',complaint:'Atraso menstrual',history:'β-HCG positivo. Foi submetida a curetagem uterina por suspeita de gestação ectópica.'},
    evidence:[
      {id:'hcg',label:'β-HCG',relevance:2,text:'**β-HCG positivo.**',feedback:'Decisivo: há gestação (o HCG mantém o corpo lúteo e a progesterona alta).'},
      {id:'clin',label:'Suspeita clínica',relevance:2,text:'Suspeita de **gestação ectópica**: o embrião pode não estar no útero.',feedback:'Mesmo sem embrião no útero, o endométrio responde à progesterona.'},
      {id:'estroma',label:'Estroma do endométrio',relevance:1,img:'p101_529',cap:'Estroma decidualizado (apostila p. 101).',text:'Células do estroma **grandes, poligonais e róseas**.',feedback:'Decidualização: sinal de progesterona alta.'},
      {id:'mamo',label:'Mamografia',relevance:0,text:'O caso não traz mamografia; não ajuda a interpretar o endométrio.',feedback:'Baixo rendimento aqui.'}
    ],
    hypothesis:{prompt:'Antes de ver as glândulas, qual é sua hipótese?',options:['Endométrio gravídico (resposta à progesterona da gestação)','Endométrio proliferativo normal','Adenocarcinoma de endométrio','Endométrio menstrual'],correct:0,
      feedback:['β-HCG positivo e estroma decidualizado: endométrio gravídico.','Proliferativo é fase estrogênica, sem gestação.','Não há dado que aponte neoplasia ainda.','Com HCG positivo não há menstruação.']},
    microscopy:{image:'bank:anat_q44_0.jpg',prompt:'Glândulas com núcleos grandes, hipercromáticos e pleomórficos, que se projetam para a luz. O que é?',options:['Adenocarcinoma de endométrio','Reação de Arias-Stella','Mitoses da fase proliferativa','Decidualização glandular'],correct:1,hint:'Pense no contexto: gestação com progesterona alta. O que a progesterona faz com o DNA dessas células?',competencies:['visual','conceitual'],
      explain:['Núcleos grandes no contexto gestacional não indicam câncer.','Arias-Stella: poliploidia pela progesterona; simula atipia, mas é reativa.','Não é padrão proliferativo.','A decidualização é do estroma, não das glândulas.']},
    differential:[
      {prompt:'Por que os núcleos ficam grandes e escuros?',options:['Mutação maligna','Poliploidia: o DNA se duplica sem divisão, pela progesterona','Necrose','Infecção viral'],correct:1,competencies:['fisiopatologia'],
        explain:['Não é neoplasia.','É o mecanismo da apostila.','Não é necrose.','Não é viral.']},
      {prompt:'Arias-Stella pode ocorrer na gestação ectópica?',options:['Não, só com embrião no útero','Sim: o endométrio responde à progesterona elevada mesmo com o embrião fora do útero','Só na menopausa','Só com estrogênio alto'],correct:1,competencies:['clinica'],
        explain:['O estímulo é hormonal.','Por isso ela é pista de gestação, inclusive ectópica.','Não.','O estímulo é a progesterona.']},
      {prompt:'Decídua × Arias-Stella: onde ocorre cada uma?',options:['Ambas nas glândulas','Decídua no estroma; Arias-Stella nas glândulas','Decídua nas glândulas; Arias-Stella no estroma','Ambas no miométrio'],correct:1,competencies:['diferencial','conceitual'],
        explain:['A decídua é estromal.','Atenção à prova da apostila.','Invertido.','Não.']}
    ],
    final:{prompt:'Qual é a conclusão?',options:['Endométrio gravídico com reação de Arias-Stella','Adenocarcinoma de endométrio','Endométrio proliferativo','Endométrio secretor sem gestação'],correct:0,
      keyPrompt:'Qual combinação mais sustenta essa conclusão?',keyOptions:['β-HCG positivo + núcleos grandes e hipercromáticos em hobnail + estroma decidualizado','Glândulas retas com mitoses','Núcleos grandes isoladamente','Necrose e hemorragia'],keyCorrect:0,competencies:['clinica','diferencial','visual']},
    debrief:{diagnosis:'Endométrio gravídico com reação de Arias-Stella',evidence:['**β-HCG positivo**: o HCG mantém o corpo lúteo e a progesterona alta.','Estroma **decidualizado**: células grandes, poligonais e róseas.','Glândulas com **núcleos grandes, hipercromáticos, pleomórficos**, células **hobnail**: Arias-Stella.','Mecanismo: **poliploidia** induzida pela progesterona.'],
      clinic:'Arias-Stella simula atipia, mas é reativa: deve ser lida no contexto gestacional, inclusive na gestação ectópica. Ver núcleos grandes sem olhar a clínica leva ao erro de chamar de câncer.',
      revisar:{conceitual:'Resumo do ciclo endometrial (quadro)',visual:'Reação de Arias-Stella (p. 102–103)',diferencial:'Útero gravídico: decídua (p. 100–101)',clinica:'Útero gravídico: decídua (p. 100–101)',fisiopatologia:'Reação de Arias-Stella (p. 102–103)'}}
  },
  mastery:[
    {id:'m11q1',image:'bank:anat_q41_0.jpg',q:'Mulher de 23 anos com nódulo móvel e elástico que aumenta antes da menstruação. Biópsia abaixo. Diagnóstico:',ops:['Adenoma lactacional','Carcinoma invasivo','Mama em repouso','Fibroadenoma'],a:3,why:'Fibroadenoma: estroma abundante com ductos alongados, sensível a hormônios.',c:['visual','clinica']},
    {id:'m11q2',image:'bank:anat_q42_0.jpg',q:'Mulher amamentando há três meses com nódulo bem delimitado. Biópsia abaixo. Diagnóstico:',ops:['Fibroadenoma','Adenoma lactacional','Mama inativa','Carcinoma'],a:1,why:'Lóbulos proliferados com vacuolização, secreção eosinofílica e pouco estroma, na lactação.',c:['visual','diferencial']},
    {id:'m11q3',image:'bank:anat_q43_0.jpg',q:'Biópsia no 22º dia de ciclo regular. Fase e hormônio:',ops:['Proliferativa, estrogênio','Secretora, progesterona','Menstrual, queda da progesterona','Gravídica, HCG'],a:1,why:'Glândulas tortuosas com secreção e edema: fase secretora, progesterona do corpo lúteo.',c:['visual','conceitual']},
    {id:'m11q4',image:'p091_475',q:'No ácino mamário, a camada externa de células contráteis que responde à ocitocina é:',ops:['Epitelial secretora','Mioepitelial','Estroma intralobular','Ducto galactóforo'],a:1,why:'Mioepiteliais contraem-se sob ocitocina e ejetam o leite; indicam benignidade.',c:['visual','fisiopatologia']},
    {id:'m11q5',image:'p098_511',q:'Glândulas retas e estreitas, perpendiculares à superfície, sem secreção, em estroma denso com mitoses. Fase:',ops:['Proliferativa','Secretora','Menstrual','Gravídica'],a:0,why:'Estrogênio: fase proliferativa.',c:['visual','conceitual']},
    {id:'m11q6',q:'Por que a menstruação acontece?',ops:['O estrogênio sobe','A progesterona cai, as artérias espiraladas contraem e a camada funcional sofre isquemia e descama','A camada basal necrosa','O HCG aumenta'],a:1,why:'Sem fecundação, a queda da progesterona contrai as artérias espiraladas: isquemia da funcional.',c:['fisiopatologia','clinica']}
  ]
};


/* ===== PILOTOS DAS NOVAS ÁREAS (mesmo motor; campo area = 'img' ou 'lab') =====
   Imagem 08 · Pancreatite aguda: apostila "MAPES 1 · Radiologia · Teoria 2026.2", p. 53–59; questões RAD-54 a 63.
   Laboratório 04 · Pancreatite: amilase e lipase: apostila "MAPES 1 · Farmacologia (Laboratório) · Teoria 2026.2", p. 14–16; questões FARM-13 a 16.
   Imagens com prefixo r (radiologia) e l (laboratório) vêm dessas apostilas. */
(function () {
var m007 = PM_MISSOES.find(function (m) { return m.id === 'm007'; });
if (m007) m007.ligados = ['img08', 'lab04'];

PM_MISSOES.push({
  id:'img08', area:'img', num:'08', titulo:'Pancreatite aguda na imagem',
  sub:'Quando pedir exame, edematosa × necrótica e as coleções de Atlanta',
  pags:'53–59', ligados:['m007','lab04'],
  questoes:['RAD-54','RAD-55','RAD-56','RAD-57','RAD-58','RAD-59','RAD-62','RAD-63'],
  etapas:[
  { t:'texto', titulo:'Para que serve a imagem na pancreatite', p:'53', img:'r053_288', leg:'Pancreatite aguda: 2 dos 3 critérios.',
    corpo:[
      'Pancreatite aguda é inflamação do pâncreas de intensidade variável. Nos adultos, cerca de **metade** dos casos se relaciona à **doença biliar e ao etilismo**.',
      'A imagem tem **três objetivos**: ajudar no diagnóstico **quando necessário**, avaliar a **gravidade** e identificar **complicações locais** que mudem a conduta.',
      'Diagnóstico = **2 de 3 critérios**: dor típica em andar superior, enzimas **> 3× o limite superior** e achados característicos na imagem (TC com contraste, RM ou USG).'
    ],
    destaque:'Com dor típica e enzimas altas, **a imagem não é obrigatória para confirmar o diagnóstico**. Ela ganha importância na **dúvida diagnóstica, suspeita de gravidade, piora clínica ou complicações**.'
  },
  { t:'exame', titulo:'Qual exame pedir?', p:'53, 59',
    intro:'Para cada situação, escolha o exame mais adequado agora.',
    exames:['Nenhum exame de imagem agora','Ultrassonografia de abdome','TC de abdome com contraste','Radiografia simples de abdome'],
    cenarios:[
      { sit:'Homem de 44 anos, etilista, com dor intensa em andar superior irradiada para o dorso e **lipase 5× o limite superior**. Estável, sem sinais de gravidade. O plantonista quer uma TC para "confirmar".', certa:0,
        por:['Dor típica + enzima > 3× já somam **2 de 3 critérios**: o diagnóstico está feito. A imagem fica para dúvida ou gravidade.','O USG tem papel na **causa** biliar, não para confirmar o diagnóstico que já está fechado.','Não é necessária para o diagnóstico, e na admissão ainda pode subestimar a necrose.','A radiografia simples não confirma pancreatite nem avalia necrose.'] },
      { sit:'Mulher de 50 anos, **primeiro episódio** de pancreatite, **sem etilismo**, internada há **dois dias**. A equipe quer saber a **causa**.', certa:1,
        por:['Aqui há uma pergunta clínica: a causa. Ela muda a conduta.','O USG é indicado no primeiro episódio de causa desconhecida, **entre 48 e 72 h**: procura cálculos (focos ecogênicos com sombra acústica) e dilatação das vias biliares.','A TC não é o exame para procurar cálculos na vesícula.','A radiografia não avalia a vesícula nem as vias biliares.'] },
      { sit:'Homem de 47 anos com pancreatite aguda, **no 5º dia**, com **deterioração clínica** e SIRS. É preciso avaliar a extensão da doença e a necrose.', certa:2,
        por:['Piora clínica é indicação de imagem.','O USG não avalia bem o realce do parênquima nem a necrose.','**Mais de 72 h** de evolução e **piora clínica**/SIRS: TC com contraste, que mostra extensão, necrose e coleções.','A radiografia não mostra necrose.'] }
    ],
    regra:'Regra da apostila: **diagnóstico** → em geral sem imagem; **causa** → USG em 48–72 h; **gravidade, piora ou complicações** → TC com contraste, de preferência **após 72 h**, porque antes ela pode **subestimar a necrose**.'
  },
  { t:'tabela', titulo:'Gravidade e fases', p:'54',
    cols:['Critério principal'],
    linhas:[
      ['Branda (leve)','Sem falência orgânica e sem complicações locais ou sistêmicas.'],
      ['Moderada','Falência orgânica **transitória (< 48 h)** e/ou complicações locais ou sistêmicas, sem falência persistente.'],
      ['Grave','Falência orgânica **persistente (> 48 h)**.'],
      ['Fase inicial','Primeira semana: presença ou ausência de falência orgânica.'],
      ['Fase tardia','Após a primeira semana: complicações locais e persistência da falência.']
    ],
    nota:'A **gravidade** se define pela **falência orgânica**; a **forma morfológica** (edematosa ou necrótica), pela **imagem**. São classificações diferentes.'
  },
  { t:'tabela', titulo:'Edematosa × necrótica', p:'54',
    cols:['Edematosa intersticial','Necrótica'],
    linhas:[
      ['O que é','Aumento focal ou difuso por edema e inflamação, **sem necrose**','Necrose do parênquima, dos tecidos peripancreáticos ou de ambos (o combinado é o mais comum)'],
      ['Na TC com contraste','Parênquima **mantém o realce**; glândula aumentada; gordura peripancreática inflamada','Áreas **sem realce** após o contraste: perda da perfusão']
    ]
  },
  { t:'abas', titulo:'Edematosa na tomografia', p:'54–55',
    intro:'Compare as duas incidências. As marcações são da apostila.',
    abas:[
      { rot:'Coronal', img:'a_r054_291', leg:'TC coronal com contraste: pâncreas marcado em vermelho.',
        itens:['O tecido pancreático **continua captando contraste**, sem áreas de ausência de realce.','**Aumento do pâncreas**: mais volumoso que o habitual.','Edema: atenuação **menos uniforme**; **margens indistintas**.','**Estriações da gordura** peripancreática: inflamação local.'] },
      { rot:'Axial', img:'a_r055_294', leg:'TC axial: pâncreas contornado em amarelo; setas na gordura ao redor.',
        itens:['Aumento focal ou difuso, com atenuação alterada pelo edema.','Margens menos nítidas e gordura retroperitoneal com estriações.'] }
    ]
  },
  { t:'checar', titulo:'Confira o entendimento', p:'54',
    perg:'Na TC com contraste, o que separa a pancreatite necrótica da edematosa?',
    dica:'Pense no que acontece quando o tecido perde a perfusão.',
    ops:[
      { t:'O tamanho do pâncreas', por:'As duas podem aumentar o pâncreas.' },
      { t:'Áreas do parênquima sem realce após o contraste', por:'Tecido necrosado não tem perfusão, então não realça: é o achado central da necrose.', certa:true },
      { t:'A inflamação da gordura ao redor', por:'Ocorre também na edematosa.' },
      { t:'A duração da falência orgânica', por:'Isso define gravidade, não a forma morfológica.' }
    ]
  },
  { t:'explorar', titulo:'Ache a necrose', p:'56–57', img:'r057_304', ann:'a_r057_304',
    intro:'Dois cortes de TC com contraste. Toque nos números.',
    pts:[
      { x:58, y:24, nome:'Corpo e cauda sem realce', txt:'**Corpo e cauda** do pâncreas **sem atenuação após o contraste**: necrose pancreática.' },
      { x:54, y:76, nome:'Realce fisiológico', txt:'Para comparar: pâncreas com **realce normal** após o contraste.' }
    ],
    destaque:'O parênquima viável **realça**; as áreas necróticas permanecem **hipoatenuantes**, sem o realce esperado.'
  },
  { t:'texto', titulo:'Coleções: três perguntas', p:'55, 57',
    corpo:[
      'Ao redor do pâncreas podem surgir coleções. Para classificá-las, responda: **quanto tempo** de evolução (antes ou depois de **4 semanas**)? Tem **parede definida**? O conteúdo é **só líquido** ou tem **material sólido/necrótico**?',
      'Na **edematosa**: coleção líquida aguda (APFC) e, depois de 4 semanas, pseudocisto.',
      'Na **necrótica**: coleção necrótica aguda (CNA) e, depois de 4 semanas, necrose murada (WON).'
    ]
  },
  { t:'abas', titulo:'APFC e pseudocisto', p:'55–56',
    abas:[
      { rot:'APFC', img:'r055_295', leg:'TC coronal e axial: coleção líquida junto ao pâncreas, sem parede.',
        itens:['**Coleção líquida peripancreática aguda**: primeiras **4 semanas**, na pancreatite edematosa.','Área de **densidade líquida**, contornos pouco definidos, **sem parede encapsulante** e **sem material sólido**.','Frequentemente é **reabsorvida** com a melhora.'] },
      { rot:'Pseudocisto', img:'a_r056_299', leg:'Pseudocisto marcado em rosa: coleção arredondada e delimitada.',
        itens:['Geralmente **após 4 semanas**.','Coleção **predominantemente líquida**, homogênea, com **parede bem definida**.','Perto do pâncreas ou, eventualmente, à distância.'] },
      { rot:'Pseudocisto grande', img:'r056_300', leg:'Pseudocisto volumoso, coronal e axial.',
        itens:['Diferente da coleção aguda: **parede visível**, formada na organização da coleção, **sem componente necrótico sólido** significativo.'] }
    ]
  },
  { t:'explorar', titulo:'Coleção necrótica aguda (CNA)', p:'57', img:'r057_305', ann:'a_r057_305',
    intro:'Primeiras 4 semanas de uma pancreatite necrótica. Toque no número.',
    pts:[
      { x:44, y:42, nome:'Conteúdo heterogêneo', txt:'Áreas de **diferentes densidades** (líquido + tecido necrótico), **sem cápsula definida**. Diferente da APFC, que é só líquido.' }
    ]
  },
  { t:'explorar', titulo:'Necrose murada (WON)', p:'58', img:'r058_308', ann:'a_r058_308',
    intro:'Geralmente após 4 semanas. Toque nos números.',
    pts:[
      { x:54, y:37, nome:'Coleção encapsulada', txt:'Material necrótico com **parede bem definida**, formada na organização da inflamação.' },
      { x:61, y:55, nome:'Conteúdo heterogêneo', txt:'Diferente do pseudocisto: não é só líquido; há **detritos necróticos**.' }
    ]
  },
  { t:'explorar', titulo:'Necrose infectada', p:'58', img:'r058_309', ann:'a_r058_309',
    intro:'Toque nos números.',
    pts:[
      { x:56, y:62, nome:'Coleção necrótica', txt:'Coleção com material líquido e necrótico.' },
      { x:68, y:40, nome:'Gás', txt:'**Gás dentro da coleção** aparece como pequenas áreas muito escuras: sinal sugestivo de **infecção**, o que aumenta muito a gravidade.' }
    ]
  },
  { t:'tabela', titulo:'Classificação das coleções (Atlanta)', p:'58–59',
    cols:['Tempo','Parede','Conteúdo'],
    linhas:[
      ['APFC','Primeiras 4 semanas','Não definida','Líquido homogêneo, sem sólido'],
      ['Pseudocisto','Após 4 semanas','Definida','Predominantemente líquido, sem necrose sólida'],
      ['CNA','Primeiras 4 semanas','Não definida','Heterogêneo: líquido + tecido necrótico'],
      ['WON/WOPN','Após 4 semanas','Definida','Heterogêneo, com detritos necróticos'],
      ['Necrose infectada','Na evolução da necrose','Variável','**Gás** dentro da coleção sugere infecção']
    ],
    nota:'Regra prática: cruze **tempo** e **conteúdo**. Líquido sem parede → APFC; líquido encapsulado → pseudocisto; heterogêneo sem cápsula → CNA; heterogêneo encapsulado após 4 semanas → WON.'
  },
  { t:'checar', titulo:'Confira o entendimento', p:'59',
    perg:'Seis semanas após uma pancreatite necrótica, a TC mostra coleção com parede bem definida e conteúdo heterogêneo, com detritos. Qual é a coleção?',
    dica:'Tempo: mais de 4 semanas. Conteúdo: só líquido?',
    ops:[
      { t:'Pseudocisto', por:'O pseudocisto é predominantemente líquido, sem necrose sólida significativa.' },
      { t:'Necrose murada (WON)', por:'Heterogêneo, encapsulado, após 4 semanas.', certa:true },
      { t:'Coleção necrótica aguda', por:'A CNA é das primeiras 4 semanas e não tem cápsula definida.' },
      { t:'APFC', por:'A APFC é líquido homogêneo, sem parede, nas primeiras 4 semanas.' }
    ]
  },
  { t:'texto', titulo:'Ultrassom e a hora da TC', p:'59', img:'r059_312', leg:'USG: cálculo hiperecogênico na vesícula com sombra acústica posterior.',
    corpo:[
      '**USG:** procura a **causa biliar**. Cálculos = **focos ecogênicos com sombra acústica posterior**; vias biliares dilatadas = estruturas tubulares **anecoicas** mais calibrosas; coleções = áreas anecoicas ou hipoecoicas perto do pâncreas.',
      '**TC:** indicada com **mais de 72 h** quando é preciso avaliar extensão, em quadros críticos ou escores de gravidade altos, **deterioração rápida**, **SIRS** ou leucocitose num contexto preocupante.'
    ],
    destaque:'Por que não fazer TC na admissão de todos? Nas **primeiras 48–72 h** ela pode **subestimar a necrose**, que evolui ao longo de dias. O momento é definido pela **necessidade clínica**.'
  },
  { t:'resumo', titulo:'O que levar desta missão',
    itens:[
      'Diagnóstico: **2 de 3 critérios**. Com dor típica e enzimas > 3×, **a imagem não é obrigatória**.',
      '**USG** (48–72 h) para a **causa biliar**; **TC com contraste** para gravidade, piora e complicações, de preferência **após 72 h**.',
      'Gravidade = **falência orgânica** (transitória < 48 h = moderada; persistente > 48 h = grave). Forma = **realce na TC**.',
      '**Edematosa**: realce mantido, pâncreas aumentado, gordura com estriações. **Necrótica**: áreas **sem realce**.',
      'Coleções: **APFC** (< 4 sem, líquido, sem parede) → **pseudocisto** (> 4 sem, parede). **CNA** (< 4 sem, heterogênea) → **WON** (> 4 sem, encapsulada). **Gás** = infecção.'
    ]
  }
  ]
});

PM_CASES.img08 = {
  investigation:{
    title:'Investigação · TC no 5º dia de uma pancreatite grave',
    fonte:'Caso das questões RAD-56, RAD-62 e RAD-63 do banco de Radiologia.',
    patient:{age:47,sex:'Masculino',complaint:'Pancreatite aguda grave com deterioração clínica',history:'Internado. No 5º dia de internação, a equipe discute a imagem.'},
    evidence:[
      {id:'tempo',label:'Tempo de evolução',relevance:2,text:'**5º dia** de internação: mais de 72 h.',feedback:'Depois de 72 h a TC já não subestima tanto a necrose.'},
      {id:'clinica',label:'Evolução clínica',relevance:2,text:'**Deterioração clínica.**',feedback:'Piora clínica é indicação de TC com contraste.'},
      {id:'rx',label:'Radiografia simples',relevance:0,text:'O caso não traz radiografia; ela não avalia o realce do parênquima.',feedback:'Baixo rendimento para definir a forma da pancreatite.'},
      {id:'enz',label:'Nova dosagem de lipase',relevance:0,text:'O caso não traz; as enzimas não definem gravidade nem forma morfológica.',feedback:'Baixo rendimento aqui (veja a missão de Laboratório).'}
    ],
    hypothesis:{prompt:'Antes de ver a TC: qual forma morfológica você espera?',options:['Pancreatite edematosa intersticial','Pancreatite necrótica','Não dá para saber antes de ver o realce na TC'],correct:2,
      feedback:['Pode ser, mas só a imagem diz.','Grave não significa necrótica: a forma depende do realce.','A gravidade vem da falência orgânica; a forma, do realce na TC com contraste.']},
    microscopy:{image:'bank:rad_q56_0.jpg',prompt:'TC com contraste no 5º dia. O que você vê?',options:['Pâncreas aumentado, gordura inflamada e parênquima com realce mantido','Áreas do parênquima sem realce','Coleção encapsulada com detritos','Gás dentro de uma coleção'],correct:0,hint:'Olhe o parênquima: ele está captando contraste de forma parecida em toda a glândula?',competencies:['visual','conceitual'],
      explain:['Aumento, inflamação da gordura e realce mantido: padrão edematoso intersticial.','Não há área sem realce descrita.','Não há coleção encapsulada.','Não há gás.']},
    differential:[
      {prompt:'Por que a TC foi adequada agora e não na admissão?',options:['Nas primeiras 48–72 h a TC pode subestimar a necrose; após 72 h ou na piora clínica ela é indicada','A TC é obrigatória para o diagnóstico','O contraste é contraindicado na admissão','A TC só se faz após a alta'],correct:0,competencies:['clinica'],
        explain:['É a justificativa da apostila (RAD-62).','O diagnóstico é por 2 de 3 critérios.','A apostila não contraindica o contraste.','Não.']},
      {prompt:'O paciente é grave e a forma é edematosa. Como isso é possível?',options:['Gravidade se define pela falência orgânica, e a forma pelo realce: são classificações diferentes','Todo caso grave é necrótico; a TC está errada','A edematosa só existe na forma branda','A gravidade se define pelo tamanho do pâncreas'],correct:0,competencies:['conceitual','diferencial'],
        explain:['Exatamente.','Não há essa regra.','Não há essa regra.','Não.']},
      {prompt:'Se a falência orgânica tivesse durado 36 h e se resolvido, sem complicações locais, a gravidade seria:',options:['Branda','Moderada','Grave'],correct:1,competencies:['conceitual'],
        explain:['Houve falência orgânica.','Falência transitória (< 48 h) = moderada (RAD-63).','Grave exige falência persistente (> 48 h).']}
    ],
    final:{prompt:'Qual é a conclusão da TC?',options:['Pancreatite edematosa intersticial, sem necrose identificável','Pancreatite necrótica','Pseudocisto pancreático','Tumor pancreático'],correct:0,
      keyPrompt:'Qual achado mais sustenta essa conclusão?',keyOptions:['O parênquima mantém o realce após o contraste','O pâncreas está aumentado','A gordura ao redor está inflamada','Houve deterioração clínica'],keyCorrect:0,competencies:['visual','diferencial','clinica']},
    debrief:{diagnosis:'Pancreatite edematosa intersticial (TC no 5º dia)',evidence:['Após **72 h** e com **piora clínica**, a TC com contraste estava indicada.','Pâncreas **aumentado** e gordura **inflamada**.','O parênquima **mantém o realce**: sem necrose identificável.','A gravidade (falência orgânica) e a forma (realce) são avaliadas separadamente.'],
      clinic:'Aumento e inflamação da gordura existem nas duas formas; o que separa a necrótica é a área sem realce. Por isso o achado-chave é o realce.',
      revisar:{conceitual:'Gravidade e fases (p. 54)',visual:'Edematosa na tomografia (p. 54–55)',diferencial:'Edematosa × necrótica (p. 54)',clinica:'Qual exame pedir? (p. 53, 59)',fisiopatologia:'Ache a necrose (p. 56–57)'}}
  },
  mastery:[
    {id:'i8q1',image:'bank:rad_q57_0.jpg',q:'Pancreatite edematosa, TC no 10º dia: coleção líquida homogênea ao redor do pâncreas, sem parede definida e sem componente sólido. É:',ops:['Pseudocisto','Coleção líquida peripancreática aguda (APFC)','Necrose murada (WON)','Coleção necrótica aguda'],a:1,why:'Primeiras 4 semanas, líquido homogêneo, sem parede: APFC. Pode virar pseudocisto se persistir com parede.',c:['visual','diferencial']},
    {id:'i8q2',image:'bank:rad_q58_0.jpg',q:'Dois meses após pancreatite edematosa: coleção predominantemente líquida, com parede bem definida, sem material sólido. É:',ops:['Pseudocisto','Coleção necrótica aguda','APFC','Necrose infectada'],a:0,why:'Após 4 semanas, líquido, parede definida, sem necrose: pseudocisto.',c:['visual','clinica']},
    {id:'i8q3',image:'bank:rad_q59_0.jpg',q:'Pancreatite grave, TC na 2ª semana: áreas do pâncreas e dos tecidos ao redor sem realce, conteúdo heterogêneo, sem parede. É:',ops:['Edematosa com APFC','Necrótica com WON','Necrótica com pseudocisto','Necrótica com coleção necrótica aguda'],a:3,why:'Sem realce = necrose; heterogêneo sem parede nas primeiras 4 semanas = CNA.',c:['visual','diferencial']},
    {id:'i8q4',image:'r058_309',q:'Coleção necrótica com pequenas áreas muito escuras no interior. O achado sugere:',ops:['Pseudocisto','Infecção da necrose','Pancreatite edematosa','Cálculo biliar'],a:1,why:'Gás dentro da coleção é sinal sugestivo de necrose infectada.',c:['visual','clinica']},
    {id:'i8q5',q:'Primeiro episódio de pancreatite, sem etilismo, 2º dia de internação. Para investigar a causa, o exame é:',ops:['TC com contraste nas primeiras 12 h','Ultrassonografia, idealmente entre 48 e 72 h','Radiografia simples','Nenhum, a causa é sempre alcoólica'],a:1,why:'USG para a causa biliar: cálculos e dilatação das vias biliares.',c:['clinica']},
    {id:'i8q6',image:'r057_304',q:'Corpo e cauda do pâncreas não captam contraste. O que isso indica?',ops:['Edema','Necrose pancreática','Pseudocisto','Realce normal'],a:1,why:'Ausência de realce após o contraste = perda de perfusão = necrose.',c:['visual','fisiopatologia']}
  ]
};

PM_MISSOES.push({
  id:'lab04', area:'lab', num:'04', titulo:'Pancreatite: amilase e lipase',
  sub:'Critérios, as duas enzimas, ACCR, hipertrigliceridemia e pancreatite crônica',
  pags:'14–16', ligados:['m007','img08'],
  questoes:['FARM-13','FARM-14','FARM-15','FARM-16'],
  etapas:[
  { t:'texto', titulo:'Pancreatite aguda', p:'14',
    corpo:[
      'Abdome agudo por **autodigestão**: as enzimas são **ativadas dentro do próprio pâncreas**, com envolvimento variável dos tecidos ao redor e possíveis repercussões sistêmicas.',
      'A forma **leve** é a mais comum; a **grave** é menos comum, mas tem morbimortalidade de até 45%. **21%** recorrem e **8%** destes cronificam. **Tabagismo** é fator de risco independente.'
    ],
    destaque:'Causas principais: **"BALI"** → **B**iliar, **Á**lcool, **L**ipídeos (triglicerídeos), **I**atrogênica (CPRE).'
  },
  { t:'tabela', titulo:'Etiologia', p:'14',
    cols:['Frequência / detalhe'],
    linhas:[
      ['Biliar','40–50% · cálculo obstrui a ampola'],
      ['Alcoólica','10–40%'],
      ['Idiopática','10–25%'],
      ['Pós-CPRE','3–25%'],
      ['Hipertrigliceridemia','1–4%'],
      ['Medicamentosa','Semaglutida, liraglutida, omeprazol, estrogênio, esteroides…'],
      ['Hipercalcemia','Hiperparatireoidismo primário']
    ],
    nota:'Outras: pós-infecciosa, vascular, genética, trauma, pós-biópsia, autoimune, **acidente escorpiônico**, neoplasias, malformações.'
  },
  { t:'texto', titulo:'Diagnóstico: 2 de 3 critérios', p:'14', img:'l014_120', leg:'Basta preencher 2 dos 3 critérios.',
    corpo:[
      '**1. Dor abdominal** característica: epigástrica, **em faixa**, irradiando para o dorso.',
      '**2. Enzimas:** amilase ou lipase **≥ 3× o limite superior**.',
      '**3. Imagem** com achados característicos (TC, RM ou USG).'
    ]
  },
  { t:'tabela', titulo:'Amilase × lipase', p:'14',
    cols:['Amilase','Lipase'],
    linhas:[
      ['Origem','Pâncreas e **saliva** (a salivar é ≈ 60% da atividade sérica)','**Pâncreas** é a fonte principal'],
      ['Sensibilidade e especificidade','**Menos** sensível e específica','**Mais** sensível e específica'],
      ['Cinética','Sobe em 2–12 h, pico em 24 h, **normaliza em 48–72 h**','Sobe em ≈ 12 h, pico em 24 h, **normaliza em 7–14 dias**'],
      ['Eliminação','Depuração **renal**','—'],
      ['Referência','20–300 U/L','< 200 U/L'],
      ['Preparo','Jejum de 2 h; sem álcool nas 24 h anteriores','Sem preparo específico'],
      ['Interpretação','≥ 3× LSN → pancreatite. Elevada isolada: pode ser **parotidite** (caxumba)','≥ 3× LSN → pancreatite. **Não determina gravidade nem prognóstico**']
    ]
  },
  { t:'texto', titulo:'A curva das duas enzimas', p:'15', img:'l015_125', leg:'Atividade sérica em múltiplos do limite superior ao longo do tempo.',
    corpo:[
      'As duas sobem nas primeiras horas e têm pico em cerca de 24 h.',
      'A **amilase cai rápido** e normaliza em 48–72 h; a **lipase permanece elevada por 7–14 dias**.'
    ],
    destaque:'Por isso a lipase é a mais útil no paciente que **chega tarde**.'
  },
  { t:'laudo', titulo:'Chegou no 5º dia', p:'14–15',
    intro:'Homem de 52 anos, etilista, com dor epigástrica intensa em faixa, irradiada para o dorso, **há 5 dias**.',
    paciente:'Bioquímica sérica',
    foco:'para o diagnóstico de pancreatite',
    linhas:[
      { ex:'Amilase', val:'180 U/L', ref:'20–300 U/L', alt:false, nota:'Normal: a amilase já **normalizou** (48–72 h). Isso **não exclui** pancreatite.' },
      { ex:'Lipase', val:'1.450 U/L', ref:'< 200 U/L', seta:'↑', alt:true, nota:'Mais de **7× o limite**: preenche o critério enzimático. A lipase fica alta por 7–14 dias.' }
    ],
    conclusao:'Dor típica + **lipase ≥ 3×** = **2 de 3 critérios**: pancreatite aguda, mesmo com amilase normal. O valor da lipase **não indica gravidade**.'
  },
  { t:'checar', titulo:'Confira o entendimento', p:'14',
    perg:'Criança com dor e aumento das parótidas: amilase alta, lipase normal. O que pensar?',
    dica:'Qual das duas enzimas também vem da saliva?',
    ops:[
      { t:'Pancreatite aguda grave', por:'A lipase, mais específica do pâncreas, está normal.' },
      { t:'Parotidite (caxumba), pela amilase salivar', por:'Amilase elevada isoladamente pode ser parotidite.', certa:true },
      { t:'Pancreatite crônica', por:'Não há dado de pancreatite crônica.' }
    ]
  },
  { t:'tabela', titulo:'Clearance de amilase/creatinina (ACCR)', p:'15',
    cols:['Interpretação'],
    linhas:[
      ['Fórmula','ACCR (%) = (amilase urinária × creatinina sérica) ÷ (amilase sérica × creatinina urinária) × 100'],
      ['≈ 3–5%','Normal'],
      ['> 5%','Pode estar associado à pancreatite aguda'],
      ['< 3%','Pode ocorrer na **macroamilasemia**: amilase ligada a imunoglobulina, molécula grande que **não é filtrada** → amilase sérica alta sem doença']
    ]
  },
  { t:'laudo', titulo:'Amilase alta sem sintomas', p:'15',
    intro:'Homem de 35 anos, **assintomático**, com amilase persistentemente elevada em exames de rotina.',
    paciente:'Exames de rotina',
    linhas:[
      { ex:'Amilase sérica', val:'Elevada (persistente)', ref:'20–300 U/L', seta:'↑', alt:true, nota:'Alta, mas sem sintomas e de forma persistente.' },
      { ex:'Lipase', val:'Normal', ref:'< 200 U/L', alt:false, nota:'Normal: fala contra lesão pancreática.' },
      { ex:'ACCR', val:'1,5%', ref:'≈ 3–5%', seta:'↓', alt:true, nota:'**Baixo**: a amilase quase não está sendo filtrada pelo rim.' }
    ],
    conclusao:'Amilase sérica alta + lipase normal + **ACCR < 3%** → **macroamilasemia**: a amilase está ligada a uma molécula grande, não é filtrada e se acumula no sangue, sem doença.'
  },
  { t:'sequencia', titulo:'Hipertrigliceridemia e pancreatite', p:'15', img:'l015_126',
    passos:[
      { h:'TG muito altos', txt:'Aumento dos **quilomícrons**. Risco quando os TG passam de **500–1.000 mg/dL**.' },
      { h:'Microcirculação', txt:'Alteração da microcirculação pancreática.' },
      { h:'Lipase age sobre os TG', txt:'Os TG são hidrolisados pela lipase pancreática.' },
      { h:'Ácidos graxos livres', txt:'Aumentam e são **tóxicos**: inflamação e lesão.' },
      { h:'Pancreatite aguda', txt:'Resultado final.' }
    ],
    nota:'Armadilha de laboratório: o soro fica **lipêmico** e pode deixar a **amilase falsamente normal**. A **lipase** e a **imagem** ajudam.'
  },
  { t:'laudo', titulo:'Soro leitoso', p:'15–16',
    intro:'Mulher de 38 anos com dor abdominal em barra e vômitos. O soro tem **aspecto leitoso**.',
    paciente:'Bioquímica sérica',
    linhas:[
      { ex:'Triglicerídeos', val:'2.300 mg/dL', ref:'< 150 mg/dL', seta:'↑', alt:true, nota:'Muito acima de 500–1.000 mg/dL: nível que causa pancreatite.' },
      { ex:'Aspecto do soro', val:'Leitoso (lipêmico)', ref:'Límpido', alt:true, nota:'O soro lipêmico pode **interferir na dosagem da amilase**.' }
    ],
    conclusao:'Pancreatite por **hipertrigliceridemia**: excesso de quilomícrons altera a microcirculação e os **ácidos graxos livres** lesam o pâncreas. Para o diagnóstico enzimático, prefira a **lipase**.'
  },
  { t:'texto', titulo:'Pancreatite crônica', p:'15',
    corpo:[
      '**Amilase e lipase podem estar normais**: o pâncreas fibrosado já não tem tecido acinar suficiente para liberar enzimas.',
      'O diagnóstico é por **imagem**: TC ou RM com colangiopancreatografia; a **ecoendoscopia** é a mais sensível na doença precoce.',
      'Função exócrina: **elastase fecal** (baixa na insuficiência). A esteatorreia aparece quando **mais de 90%** da função já foi perdida.'
    ]
  },
  { t:'tabela', titulo:'Tratamento', p:'16',
    cols:['Aguda','Crônica'],
    linhas:[
      ['Base','Hidratação venosa, analgesia, controle de náuseas','Analgesia'],
      ['Dieta','Jejum, com **realimentação precoce** assim que tolerar','Evitar restrição excessiva de gorduras'],
      ['Causa / enzimas','Controle da causa (ex.: colecistectomia na biliar)','**Pancreatina** (lipase + amilase + protease) + **IBP**, que protege as enzimas do ácido'],
      ['Outros','Antibiótico **só** se necrose infectada (meropenem)','Insulina no DM tipo IIIc; vitaminas **ADEK** se deficiência'],
      ['Octreotide','—','Não recomendado de rotina para a dor; uso em fístula ou ascite pancreática']
    ]
  },
  { t:'checar', titulo:'Confira o entendimento', p:'15–16',
    perg:'Pancreatite crônica alcoólica com esteatorreia, perda de peso e hiperglicemia; amilase e lipase normais. O que fazer?',
    dica:'Enzimas normais excluem a doença crônica?',
    ops:[
      { t:'Enzimas normais excluem pancreatite crônica', por:'Na crônica elas podem ser normais: falta tecido acinar.' },
      { t:'Elastase fecal para a insuficiência exócrina; tratar com pancreatina + IBP', por:'É a conduta da apostila.', certa:true },
      { t:'Octreotide de rotina para a dor', por:'Os estudos não mostraram benefício consistente.' },
      { t:'Restringir totalmente gorduras e evitar vitaminas', por:'Evita-se restrição excessiva, e repõe-se ADEK se faltar.' }
    ]
  },
  { t:'resumo', titulo:'O que levar desta missão',
    itens:[
      'Causas: **BALI** (biliar 40–50%, álcool, lipídeos/TG, iatrogênica/CPRE); também medicamentos e hipercalcemia.',
      'Diagnóstico: **2 de 3** (dor típica, enzima ≥ 3× LSN, imagem).',
      '**Lipase**: mais sensível e específica, fica alta **7–14 dias**. **Amilase**: normaliza em **48–72 h**, também vem da saliva (parotidite). Nenhuma define **gravidade**.',
      '**ACCR** > 5% sugere pancreatite; **< 3%** sugere **macroamilasemia**.',
      'TG > 500–1.000 mg/dL causam pancreatite; soro lipêmico pode **falsear a amilase**.',
      'Crônica: enzimas **podem ser normais**; diagnóstico por imagem; **elastase fecal**; pancreatina + IBP.'
    ]
  }
  ]
});

PM_CASES.lab04 = {
  investigation:{
    title:'Investigação · Amilase normal, lipase alta',
    fonte:'Caso da questão FARM-13 do banco de Farmacologia/Laboratório.',
    patient:{age:52,sex:'Masculino',complaint:'Dor epigástrica intensa em faixa, irradiada para o dorso',history:'Etilista. A dor começou há 5 dias. Chegou ao pronto-socorro.'},
    evidence:[
      {id:'hist',label:'História',relevance:1,text:'**Etilista.**',feedback:'Álcool é uma das causas "BALI".'},
      {id:'tempo',label:'Tempo de dor',relevance:2,text:'Dor há **5 dias**.',feedback:'Decisivo para interpretar a cinética das enzimas.'},
      {id:'enz',label:'Amilase e lipase',relevance:2,text:'Você vai ver o laudo na etapa 4.',feedback:'O laudo aparece na etapa 4.'},
      {id:'tg',label:'Lipidograma',relevance:0,text:'O caso não traz lipidograma.',feedback:'Baixo rendimento: há uma causa provável (álcool) e o problema é interpretar as enzimas.'}
    ],
    hypothesis:{prompt:'Antes do laudo, qual é sua hipótese?',options:['Pancreatite aguda','Pancreatite crônica','Parotidite'],correct:0,
      feedback:['Dor em faixa para o dorso em etilista: pancreatite aguda é a principal hipótese.','A crônica tem dor recorrente, esteatorreia e diabetes; aqui é um quadro agudo.','Não há dado de parótidas.']},
    microscopy:{laudo:{paciente:'Bioquímica sérica (5º dia)',linhas:[{ex:'Amilase',val:'180 U/L',ref:'20–300 U/L',alt:false},{ex:'Lipase',val:'1.450 U/L',ref:'< 200 U/L',seta:'↑',alt:true}]},
      prompt:'Qual é a explicação mais provável para a discordância entre as enzimas?',options:['A amilase normaliza em 48–72 h, enquanto a lipase permanece elevada por 7–14 dias','A lipase vem principalmente da saliva','A amilase normal exclui pancreatite, e a lipase alta indica parotidite','A lipase elevada indica pancreatite grave'],correct:0,hint:'Pense no tempo de dor e na curva das duas enzimas.',competencies:['visual','conceitual'],
      explain:['É a cinética da apostila: a lipase é útil no paciente que chega tarde.','Quem também vem da saliva é a amilase.','Amilase normal não exclui; parotidite elevaria a amilase.','A lipase não determina gravidade.']},
    differential:[
      {prompt:'Quantos critérios diagnósticos ele preenche?',options:['Nenhum','Um','Dois: dor típica + lipase ≥ 3× LSN','Três, porque a amilase também conta'],correct:2,competencies:['conceitual','clinica'],
        explain:['Há dor típica e lipase alta.','São dois.','Dor típica e lipase > 3×: diagnóstico feito.','A amilase está normal; e não há imagem descrita.']},
      {prompt:'A lipase de 1.450 U/L indica que o caso é grave?',options:['Sim, quanto maior a lipase, mais grave','Não: a lipase não determina gravidade nem prognóstico','Sim, se for maior que 1.000','Só se a amilase também estiver alta'],correct:1,competencies:['diferencial'],
        explain:['Não existe essa relação.','A gravidade se define pela falência orgânica (missão de Imagem).','Não.','Não.']},
      {prompt:'Precisa de TC para confirmar o diagnóstico?',options:['Sim, sempre','Não: já há 2 de 3 critérios; imagem fica para dúvida, gravidade ou complicações','Sim, porque a amilase está normal','Basta uma radiografia'],correct:1,competencies:['clinica'],
        explain:['Não é obrigatória.','Igual à missão de Imagem (RAD-54).','A lipase supre o critério enzimático.','A radiografia não confirma pancreatite.']}
    ],
    final:{prompt:'Qual é a conclusão?',options:['Pancreatite aguda (provável alcoólica), com amilase já normalizada','Pancreatite descartada, porque a amilase é normal','Parotidite','Pancreatite crônica'],correct:0,
      keyPrompt:'Qual dado mais sustenta essa conclusão?',keyOptions:['Lipase ≥ 3× LSN com dor típica, 5 dias após o início','Amilase normal','Etilismo isolado','Idade de 52 anos'],keyCorrect:0,competencies:['clinica','diferencial','visual']},
    debrief:{diagnosis:'Pancreatite aguda (provável alcoólica), lipase alta e amilase normalizada',evidence:['Dor epigástrica **em faixa** irradiada para o dorso: critério clínico.','**Lipase 1.450 U/L** (> 7× o limite): critério enzimático.','**5 dias** de dor: a amilase já **normalizou** (48–72 h); a lipase dura 7–14 dias.','**Etilismo**: causa provável (BALI).'],
      clinic:'No paciente que chega tarde, a lipase é a enzima que ainda mostra a lesão. Amilase normal não exclui pancreatite, e nenhuma das duas mede gravidade.',
      revisar:{conceitual:'Amilase × lipase (quadro)',visual:'Chegou no 5º dia (laudo)',diferencial:'A curva das duas enzimas (p. 15)',clinica:'Diagnóstico: 2 de 3 critérios (p. 14)',fisiopatologia:'Pancreatite aguda (p. 14)'}}
  },
  mastery:[
    {id:'l4q1',q:'Mulher com dor em barra e soro leitoso; TG 2.300 mg/dL. Como a hipertrigliceridemia causa pancreatite?',ops:['TG acima de 150 mg/dL já bastam','Excesso de quilomícrons altera a microcirculação e ácidos graxos livres lesam o pâncreas','Só causa pancreatite crônica','Os TG inibem a lipase e impedem sua dosagem'],a:1,why:'É a sequência da apostila; o risco começa com TG > 500–1.000 mg/dL.',c:['fisiopatologia']},
    {id:'l4q2',laudo:{paciente:'Exames de rotina',linhas:[{ex:'Amilase sérica',val:'Elevada (persistente)',ref:'20–300 U/L',seta:'↑'},{ex:'Lipase',val:'Normal',ref:'< 200 U/L'},{ex:'ACCR',val:'1,5%',ref:'≈ 3–5%',seta:'↓'}]},q:'Homem assintomático com estes exames. Hipótese mais provável:',ops:['Pancreatite aguda grave','Insuficiência renal','Parotidite aguda','Macroamilasemia'],a:3,why:'ACCR < 3% com lipase normal: amilase ligada a molécula grande, pouco filtrada.',c:['visual','diferencial']},
    {id:'l4q3',q:'Pancreatite crônica com esteatorreia; amilase e lipase normais. Correto:',ops:['Enzimas normais excluem a doença','Elastase fecal avalia a insuficiência exócrina, tratada com pancreatina + IBP','Octreotide é o tratamento de escolha da dor','Restringir totalmente as gorduras'],a:1,why:'Conduta da apostila.',c:['clinica','conceitual']},
    {id:'l4q4',image:'l015_125',q:'Pelo gráfico, qual enzima ajuda mais no paciente que chega no 6º dia de dor?',ops:['Amilase','Lipase','As duas igualmente','Nenhuma'],a:1,why:'A amilase normaliza em 48–72 h; a lipase permanece elevada por 7–14 dias.',c:['visual','conceitual']},
    {id:'l4q5',q:'Qual é a causa mais frequente de pancreatite aguda?',ops:['Alcoólica','Biliar','Hipertrigliceridemia','Pós-CPRE'],a:1,why:'Biliar: 40–50% dos casos.',c:['conceitual']},
    {id:'l4q6',q:'ACCR de 7% em paciente com dor abdominal sugere:',ops:['Normal','Macroamilasemia','Associação com pancreatite aguda','Erro de coleta'],a:2,why:'ACCR > 5% pode estar associado à pancreatite aguda.',c:['conceitual','clinica']}
  ]
};
})();


/* ===== Imagem 01–03 · EDA, radiografia e TC de abdome (apostila de Radiologia p. 3–17; RAD-01 a 15) ===== */
PM_MISSOES.push({
  id:'img01', area:'img', num:'01', titulo:'Endoscopia digestiva alta',
  sub:'O aparelho, o preparo, as indicações, a biópsia e as complicações',
  pags:'3–7', ligados:['m001','m002','lab01'],
  questoes:['RAD-01','RAD-02','RAD-03','RAD-04','RAD-05'],
  etapas:[
  { t:'texto', titulo:'O que a EDA vê', p:'3', img:'r003_37', leg:'Trajeto do endoscópio: boca, faringe, esôfago, junção gastroesofágica, estômago, piloro e duodeno.',
    corpo:[
      'A EDA permite a **visualização direta** do esôfago, do estômago e da porção inicial do duodeno.',
      'A grande vantagem: avalia **diretamente a mucosa**, enquanto outros exames de imagem dão informações **indiretas**.',
      'Além de diagnosticar, permite **procedimentos** no mesmo exame: **biópsias** e intervenções terapêuticas.'
    ],
    destaque:'O exame começa na boca, passa pela faringe e esôfago, entra no estômago pela junção gastroesofágica e, pelo piloro, alcança a porção inicial do duodeno.'
  },
  { t:'texto', titulo:'O endoscópio e a técnica', p:'3–4', img:'r004_40', leg:'Paciente em decúbito lateral, com o endoscópio introduzido pela boca.',
    corpo:[
      'Tubo **flexível** com **câmera** de alta resolução e **fonte de luz** na ponta (o interior do trato não tem luz suficiente).',
      'Permite **injetar água ou ar** e **aspirar** líquidos, para limpar a mucosa e melhorar a exposição.',
      'Tem um **canal de trabalho**, por onde passam **pinças, laços e agulhas**.',
      'Paciente em **decúbito lateral**, com spray na garganta e sedação leve, em geral venosa. O exame é documentado em foto e vídeo e dura cerca de **10 a 20 minutos**.'
    ]
  },
  { t:'abas', titulo:'Preparo do paciente', p:'4–5',
    abas:[
      { rot:'Etapas', img:'r004_41', leg:'Consulta, medicamentos, dieta, jejum e acompanhante.',
        itens:['**Acompanhante**, pela possibilidade de sedação.','**Termo de consentimento** antes do procedimento.','**Jejum:** sólidos **6 a 8 h**; líquidos **4 h**.','**Dimeticona** cerca de 30 minutos antes: reduz bolhas e espuma.'] },
      { rot:'Medicamentos', img:'r005_44', leg:'Medicamentos que precisam ser informados antes do exame.',
        itens:['**Antiplaquetários e anticoagulantes**: risco de sangramento em procedimentos.','**IBP**: pode interferir na pesquisa de H. pylori.','**Agonistas de GLP-1** (semaglutida, liraglutida): retardam o esvaziamento gástrico; risco de resíduo e aspiração.','O paciente **informa**; a decisão de suspender é da equipe, não por conta própria.'] }
    ]
  },
  { t:'checar', titulo:'Confira o entendimento', p:'4–5',
    perg:'Paciente em uso de AAS, clopidogrel (stent recente), omeprazol e semaglutida, com EDA agendada. Qual orientação está certa?',
    dica:'Quem decide suspender medicamentos? E qual é o jejum?',
    ops:[
      { t:'Jejum de 6–8 h para sólidos e 4 h para líquidos, vir com acompanhante, informar todos os medicamentos e assinar o termo', por:'É a orientação da apostila (RAD-02).', certa:true },
      { t:'Suspender por conta própria o AAS e o clopidogrel 7 dias antes', por:'O paciente informa; a equipe decide. Suspender antiplaquetário com stent recente pode ser perigoso.' },
      { t:'Jejum de 2 h e vir sozinha, porque só há anestesia tópica', por:'O jejum é maior, e a sedação exige acompanhante.' },
      { t:'Jejum de 12 h; dimeticona funciona como sedativo', por:'A dimeticona reduz bolhas e espuma; não é sedativo.' }
    ]
  },
  { t:'texto', titulo:'Quando indicar', p:'5–6',
    corpo:[
      '**Diagnósticas:** dispepsia ou dor epigástrica persistente, azia e refluxo que não melhoram com tratamento, náuseas e vômitos recorrentes sem causa esclarecida. A necessidade aumenta com a **idade**.',
      '**Sinais de alarme:** disfagia, odinofagia, perda de peso inexplicada, vômitos persistentes, anemia, hematêmese ou melena.',
      '**História familiar** de câncer gástrico ou esofágico em parente de 1º grau pode justificar EDA mais cedo.',
      'Doenças específicas: gastrite, esofagite, úlceras, hérnia de hiato, doença celíaca, **Barrett**, neoplasias, **H. pylori**; **varizes** na cirrose; vigilância de lesões já conhecidas.',
      '**Terapêuticas:** polipectomia, **dilatação de estenoses**, próteses, gastrostomia e sondas.'
    ]
  },
  { t:'exame', titulo:'Qual exame pedir?', p:'3, 5–7, 11',
    intro:'Escolha o melhor exame em cada situação.',
    exames:['Endoscopia digestiva alta','Ultrassonografia de abdome','TC de abdome','Radiografia simples'],
    cenarios:[
      { sit:'Homem de 63 anos com dispepsia, **perda de 7 kg**, **melena**, anemia e pai com **câncer gástrico**. Sem melhora com omeprazol.', certa:0,
        por:['Sinais de alarme + idade + família: a EDA avalia **diretamente a mucosa** e permite **biópsia** e pesquisa de H. pylori (RAD-01).','O USG não avalia a mucosa gástrica.','A TC dá informação indireta e não faz biópsia.','A radiografia não avalia a mucosa.'] },
      { sit:'Cirrótico com **hematêmese volumosa**, PA 80 × 50 mmHg. Já recebeu a estabilização inicial.', certa:0,
        por:['Instabilidade aumenta o risco da sedação, mas o risco-benefício é **individualizado**: a EDA é diagnóstica e **terapêutica** (varizes) (RAD-03).','O USG não trata o sangramento.','A TC não trata varizes.','Não.'] },
      { sit:'Três horas após **dilatação** de estenose esofágica: dor torácica intensa, febre, taquicardia e **crepitação cervical**. Suspeita de perfuração; a radiografia foi inconclusiva.', certa:2,
        por:['Repetir a EDA não é a forma de buscar ar fora da luz.','O USG não é o exame para ar extraluminal.','A **TC** é **mais sensível** que a radiografia para **pequenas quantidades de gás** e coleções (RAD-05).','A radiografia já foi inconclusiva; ela é menos sensível.'] }
    ],
    regra:'A EDA vê a **mucosa** e permite **biópsia e tratamento**. Para procurar **ar fora da luz** após um procedimento, a **TC** é mais sensível que a radiografia.'
  },
  { t:'texto', titulo:'EDA com biópsia', p:'6', img:'r006_52', leg:'Pinça de biópsia saindo pelo canal de trabalho.',
    corpo:[
      'Algumas doenças **não se confirmam só pela aparência** da mucosa.',
      'O endoscopista usa uma **pinça** pelo **canal de trabalho** para retirar pequenas amostras para **histopatologia**.',
      'No mesmo exame, pode colher mucosa gástrica para o **teste da urease** (H. pylori).'
    ]
  },
  { t:'tabela', titulo:'Complicações e contraindicações', p:'6–7',
    cols:['O que saber'],
    linhas:[
      ['Perfuração','Lesão da parede; ligada à passagem do aparelho e, **principalmente**, a procedimentos terapêuticos.'],
      ['Hemorragia','Sobretudo após **biópsias** ou procedimentos em lesões vascularizadas.'],
      ['Infecção','Reforça a importância da limpeza e desinfecção do aparelho.'],
      ['Avaliar com cuidado','Instabilidade hemodinâmica ou cardiorrespiratória não corrigida, distúrbios de coagulação, risco de aspiração.'],
      ['Emergência','Risco-benefício individualizado: condição grave **não proíbe** a EDA, sobretudo quando ela é o tratamento (hemorragia digestiva alta).']
    ]
  },
  { t:'resumo', titulo:'O que levar desta missão',
    itens:[
      'EDA = visão **direta da mucosa** do esôfago, estômago e duodeno inicial, com **biópsia** e terapêutica no mesmo exame.',
      'Preparo: **acompanhante**, **termo**, jejum **6–8 h sólidos / 4 h líquidos**, dimeticona; informar **antiplaquetários/anticoagulantes, IBP e GLP-1**.',
      'Indicar com **sinais de alarme**, idade, família com câncer, doenças específicas, varizes e vigilância.',
      'Complicações: **perfuração** (procedimentos terapêuticos), **hemorragia** (biópsias), **infecção**.',
      'Instabilidade não é proibição absoluta: risco-benefício **individualizado**.'
    ]
  }
  ]
});
PM_CASES.img01 = {
  investigation:{
    title:'Investigação · Dispepsia com sinais de alarme',
    fonte:'Caso das questões RAD-01 e RAD-04 do banco de Radiologia.',
    patient:{age:63,sex:'Masculino',complaint:'Dispepsia há três meses',history:'Saciedade precoce e um episódio de melena na última semana. Usou omeprazol por quatro semanas, sem melhora.'},
    evidence:[
      {id:'alarme',label:'Perda de peso e sangramento',relevance:2,text:'Perda de **7 kg** e **melena**.',feedback:'Sinais de alarme.'},
      {id:'hb',label:'Hemograma',relevance:2,text:'Hemoglobina **9,1 g/dL**.',feedback:'Anemia: outro sinal de alarme.'},
      {id:'fam',label:'História familiar',relevance:2,text:'Pai com **câncer gástrico** aos 58 anos.',feedback:'Câncer gástrico em parente de 1º grau aumenta a preocupação com neoplasia.'},
      {id:'usg',label:'Ultrassom de abdome',relevance:0,text:'O caso não traz USG; ele não avalia a mucosa gástrica.',feedback:'Baixo rendimento aqui.'}
    ],
    hypothesis:{prompt:'Qual é a conduta diagnóstica?',options:['Endoscopia digestiva alta','Prolongar o IBP por mais 8 semanas','TC com contraste como primeiro exame','Radiografia simples'],correct:0,
      feedback:['Sinais de alarme, idade e família: EDA.','Com sinais de alarme não se prolonga o tratamento empírico.','A TC não avalia diretamente a mucosa nem faz biópsia.','A radiografia não avalia a mucosa.']},
    microscopy:{image:'bank:rad_q04_0.jpg',prompt:'Durante a EDA, o endoscopista acha uma úlcera de bordas irregulares e faz o procedimento da figura. O que é verdade?',options:['A pinça passa pelo canal de trabalho; a amostra vai para histopatologia, pode-se colher mucosa para urease, e sangramento é complicação possível','A pesquisa de H. pylori só pode ser feita depois, no sangue','A aparência da úlcera basta para saber se é maligna','A biópsia exige um segundo procedimento com outro aparelho'],correct:0,hint:'Por onde passam os instrumentos? E o que mais se pode colher no mesmo exame?',competencies:['visual','conceitual'],
      explain:['É o descrito na apostila (RAD-04).','O teste da urease pode ser feito na mucosa colhida na EDA.','Algumas doenças não se confirmam só pela aparência.','A biópsia é feita pelo canal de trabalho.']},
    differential:[
      {prompt:'Qual é a complicação mais ligada à biópsia?',options:['Hemorragia','Infecção','Perfuração por insuflação','Nenhuma'],correct:0,competencies:['clinica'],
        explain:['A hemorragia ocorre sobretudo após biópsias.','Infecção existe, mas não é a mais ligada à biópsia.','A perfuração liga-se mais a procedimentos terapêuticos.','Há riscos.']},
      {prompt:'Por que não basta prolongar o omeprazol?',options:['Porque há sinais de alarme que exigem investigar neoplasia','Porque o omeprazol causa melena','Porque a EDA é obrigatória em toda dispepsia','Porque o IBP impede a biópsia'],correct:0,competencies:['clinica','diferencial'],
        explain:['Perda de peso, melena, anemia, idade e família.','Não.','Não em toda dispepsia.','Não impede a biópsia.']},
      {prompt:'Qual medicamento o paciente deveria informar antes, por interferir na pesquisa de H. pylori?',options:['Omeprazol (IBP)','Dimeticona','Paracetamol','Nenhum'],correct:0,competencies:['conceitual'],
        explain:['O IBP pode interferir na pesquisa de H. pylori.','Dimeticona só reduz bolhas.','Não citado.','Há o IBP.']}
    ],
    final:{prompt:'Qual é a conclusão sobre a conduta?',options:['EDA com biópsia da lesão e pesquisa de H. pylori','Tratamento empírico prolongado','TC para caracterizar a úlcera sem biópsia','Observação'],correct:0,
      keyPrompt:'O que mais justifica?',keyOptions:['Sinais de alarme + idade + câncer gástrico no pai','A dispepsia isolada','O uso prévio de omeprazol','A idade isolada'],keyCorrect:0,competencies:['clinica','diferencial','visual']},
    debrief:{diagnosis:'Indicação de EDA com biópsia (dispepsia com sinais de alarme)',evidence:['**Perda de peso, melena e anemia**: sinais de alarme.','**63 anos** e **pai com câncer gástrico**.','A EDA vê **diretamente a mucosa** e permite **biópsia** e **urease** no mesmo exame.'],
      clinic:'Sem sinais de alarme, a dispepsia pode ser manejada inicialmente; com eles, a EDA é a investigação, porque só ela permite biópsia.',
      revisar:{conceitual:'O endoscópio e a técnica (p. 3–4)',visual:'EDA com biópsia (p. 6)',diferencial:'Quando indicar (p. 5–6)',clinica:'Qual exame pedir?',fisiopatologia:'Complicações e contraindicações (p. 6–7)'}}
  },
  mastery:[
    {id:'i1q1',image:'bank:rad_q01_0.jpg',q:'A figura mostra o trajeto do aparelho. A EDA avalia diretamente:',ops:['Esôfago, estômago e porção inicial do duodeno','Todo o intestino delgado','O cólon','O pâncreas'],a:0,why:'Visualização direta do trato gastrointestinal superior.',c:['visual','conceitual']},
    {id:'i1q2',q:'Qual é o jejum recomendado antes da EDA?',ops:['2 h para tudo','6–8 h para sólidos e 4 h para líquidos','12 h absoluto','Sem jejum'],a:1,why:'Reduz o conteúdo gástrico e aumenta a segurança.',c:['conceitual']},
    {id:'i1q3',q:'Para que serve a dimeticona antes da EDA?',ops:['Sedação','Reduzir bolhas e espuma e melhorar a visualização','Proteger a mucosa','Acelerar o esvaziamento gástrico'],a:1,why:'Dada cerca de 30 minutos antes.',c:['conceitual']},
    {id:'i1q4',q:'Após dilatação esofágica: dor intensa, febre e crepitação cervical. Hipótese e exame:',ops:['Hemorragia; repetir EDA','Perfuração; TC é mais sensível que a radiografia para pouco gás','Reação à sedação; observar','Infecção; sem imagem'],a:1,why:'Perfuração liga-se a procedimentos terapêuticos (RAD-05).',c:['clinica','fisiopatologia']},
    {id:'i1q5',q:'Cirrótico com hematêmese volumosa e instabilidade. Sobre a EDA:',ops:['Contraindicação absoluta','Após estabilização, indicada: diagnóstica e terapêutica','Só após a alta','Substituída por USG com Doppler'],a:1,why:'Risco-benefício individualizado (RAD-03).',c:['clinica','diferencial']},
    {id:'i1q6',q:'Qual destes NÃO é procedimento terapêutico pela EDA?',ops:['Polipectomia','Dilatação de estenose','Colocação de prótese','Colecistectomia'],a:3,why:'Polipectomia, dilatação, próteses, gastrostomia e sondas são feitos pela EDA.',c:['conceitual']}
  ]
};

PM_MISSOES.push({
  id:'img02', area:'img', num:'02', titulo:'Radiografia de abdome',
  sub:'Órgãos, gases e ossos; pneumoperitônio, calcificações, cálculos e corpos estranhos',
  pags:'7–13', ligados:['m008'],
  questoes:['RAD-06','RAD-07','RAD-08','RAD-09','RAD-10','RAD-11'],
  etapas:[
  { t:'texto', titulo:'O que a radiografia avalia', p:'7',
    corpo:[
      'Usa raios X para avaliar principalmente a **distribuição dos gases**, o **padrão das alças**, as **estruturas ósseas** e algumas **partes moles** (aumento de órgãos, calcificações).',
      'Nem tudo aparece com nitidez: órgãos sólidos são **opacidades de partes moles**, em tons de cinza, e seus contornos se confundem.'
    ],
    destaque:'Regra das densidades: **gás é radiotransparente** (escuro); **osso e cálcio são radiopacos** (brancos); partes moles ficam em cinza.'
  },
  { t:'explorar', titulo:'Órgãos sólidos e partes moles', p:'7', img:'r007_55', ann:'a_r007_55',
    intro:'Lembre: o lado **direito do paciente** fica à **esquerda da imagem**. Toque nos números.',
    pts:[
      { x:22, y:16, nome:'Fígado', txt:'Quadrante superior direito; opacidade homogênea.' },
      { x:74, y:10, nome:'Baço', txt:'Quadrante superior esquerdo; a borda pode se confundir com gás do estômago ou do cólon.' },
      { x:31, y:23, nome:'Rim direito', txt:'Sombras de partes moles no retroperitônio, ao lado da coluna.' },
      { x:66, y:23, nome:'Rim esquerdo', txt:'Do outro lado da coluna.' },
      { x:63, y:40, nome:'Músculo psoas', txt:'Bilateral, ao lado da coluna lombar; às vezes se veem seus contornos.' },
      { x:46, y:90, nome:'Bexiga', txt:'Na pelve, atrás da sínfise púbica; quando distendida, opacidade homogênea central.' }
    ]
  },
  { t:'abas', titulo:'Gases e ossos', p:'8–9',
    abas:[
      { rot:'Gases', img:'a_r008_58', leg:'Estômago (azul), intestino grosso (laranja) e delgado (rosa).',
        itens:['O gás é **radiotransparente** e permite ver estômago e alças.','**Estômago**: bolha gástrica no quadrante superior esquerdo.','**Intestino grosso**: gás na periferia, no trajeto do cólon; diferencia-se pelas **haustrações**.','**Intestino delgado**: alças mais centrais; pode haver pequenas quantidades.'] },
      { rot:'Delgado × grosso', img:'r008_59', leg:'Pregas circulares do delgado × haustrações do cólon.',
        itens:['**Delgado:** pregas circulares (válvulas coniventes) que **atravessam toda a largura** da luz.','**Grosso:** haustrações, que **não atravessam** toda a largura e dão aspecto de "babados".'] },
      { rot:'Ossos', img:'a_r009_62', leg:'Coluna lombar, costelas, ílios, ísquios, cabeça do fêmur e sínfise.',
        itens:['As estruturas ósseas são as **mais fáceis de reconhecer**: radiopacas.','Coluna lombar (central), costelas inferiores, ílios, ísquios, cabeças dos fêmures e sínfise púbica.'] }
    ]
  },
  { t:'texto', titulo:'Pneumoperitônio', p:'9–11', img:'a_r010_67', leg:'Radiografia em ortostase: faixa radiotransparente abaixo das cúpulas diafragmáticas.',
    corpo:[
      '**Ar livre na cavidade peritoneal**, fora das vísceras ocas. Causa importante: **perfuração** (úlcera péptica perfurada, perfuração intestinal).',
      'Na radiografia **em ortostase**, o ar sobe e aparece como **faixa radiotransparente abaixo de uma ou das duas cúpulas diafragmáticas**, melhor vista à **direita** (à esquerda confunde com a bolha gástrica).',
      'Em decúbito dorsal, o ar pode não formar a faixa típica; pode surgir o **sinal de Rigler** (dupla parede): a parede intestinal fica bem delimitada por gás dos dois lados.'
    ],
    destaque:'Nem todo pneumoperitônio é perfuração: ocorre após cirurgias e endoscopias. **Radiografia normal não exclui** pouco ar livre: a **TC é mais sensível**.'
  },
  { t:'checar', titulo:'Confira o entendimento', p:'9–11',
    perg:'Usuário de AINE com dor epigástrica súbita e abdome em tábua. A radiografia em pé mostra ar abaixo da cúpula direita. O que é correto?',
    dica:'O achado é perfuração? E se a radiografia fosse normal?',
    ops:[
      { t:'É bolha gástrica normal', por:'A bolha gástrica fica à esquerda.' },
      { t:'Ar livre compatível com perfuração; se a radiografia fosse normal e a suspeita persistisse, TC', por:'TC é mais sensível para pouco ar (RAD-07).', certa:true },
      { t:'Ar livre ocorre só em perfuração', por:'Também após cirurgias e endoscopias.' }
    ]
  },
  { t:'abas', titulo:'Calcificações, cálculos e corpos estranhos', p:'11–13',
    abas:[
      { rot:'Calcificações', img:'r011_73', leg:'Calcificação em ureter e na parede da aorta.',
        itens:['Depósitos de sais de cálcio: **áreas brancas** (radiopacas).','Podem ser incidentais ou sugerir doença vascular, urinária ou de outros órgãos; **calcificações vasculares** acompanham o trajeto dos vasos, como a aorta.','A localização e a morfologia orientam, mas a radiografia nem sempre define a origem: complementar com **USG ou TC**.'] },
      { rot:'Cálculos', img:'a_r012_76', leg:'Rins em amarelo e cálculo renal projetado sobre a sombra renal.',
        itens:['Cálculos **radiopacos**: focos esbranquiçados projetados sobre rins, ureteres ou bexiga.','Ureterais podem se esconder pela sobreposição óssea.','Diferenciar de **flebólitos** pélvicos.','Cálculos de **ácido úrico** podem ser **radiotransparentes**.','**Ausência de cálculo não exclui litíase**: a **TC sem contraste** é mais sensível em adultos.'] },
      { rot:'Corpo estranho', img:'r013_79', leg:'Moeda projetada no esôfago.',
        itens:['Objetos densos (moedas, metais, agulhas) aparecem **muito brancos**, com contornos definidos.','Nem todo corpo estranho é radiopaco.','**Pontiagudos, baterias do tipo botão e ímãs** são de maior risco: avaliação urgente.'] }
    ]
  },
  { t:'exame', titulo:'Qual exame pedir?', p:'11–13',
    exames:['Radiografia simples','TC sem contraste','TC com contraste','Endoscopia digestiva alta'],
    cenarios:[
      { sit:'Adulto com cólica no flanco irradiada para a fossa ilíaca e hematúria. A radiografia **não mostrou cálculo**.', certa:1,
        por:['Ela já foi feita, e radiografia normal não exclui litíase.','A **TC sem contraste** é mais sensível para cálculo urinário em adultos.','O contraste não é necessário para procurar cálculo e pode atrapalhar.','A EDA não avalia o trato urinário.'] },
      { sit:'Criança de 3 anos que **engoliu um objeto** e está com salivação e recusa alimentar.', certa:0,
        por:['A radiografia localiza objetos **radiopacos**; a conduta depende do objeto, local e sintomas (RAD-09).','Começa-se pela radiografia.','Não é o primeiro exame.','Pode ser necessária depois para retirar, mas primeiro localiza-se o objeto.'] }
    ]
  },
  { t:'resumo', titulo:'O que levar desta missão',
    itens:[
      'Avalia **gases, alças, ossos** e algumas **partes moles**; nem tudo é nítido. Direito do paciente à esquerda da imagem.',
      '**Delgado:** pregas que atravessam toda a luz, alças centrais. **Grosso:** haustrações, gás periférico.',
      '**Pneumoperitônio:** ar abaixo das cúpulas na ortostase; sinal de **Rigler**. Radiografia normal não exclui: **TC** é mais sensível.',
      'Calcificações e cálculos são **brancos**; diferenciar **flebólitos**; ácido úrico pode ser radiotransparente; **TC sem contraste** para litíase.',
      'Corpos estranhos: **baterias, ímãs e pontiagudos** = maior risco.'
    ]
  }
  ]
});
PM_CASES.img02 = {
  investigation:{
    title:'Investigação · Dor súbita e abdome em tábua',
    fonte:'Caso da questão RAD-07 do banco de Radiologia.',
    patient:{age:45,sex:'Masculino',complaint:'Dor epigástrica súbita e intensa',history:'Usa anti-inflamatório não esteroide cronicamente. A dor se generalizou em 4 horas.'},
    evidence:[
      {id:'ex',label:'Exame físico',relevance:2,text:'Taquicárdico, **abdome em tábua**, **dor à descompressão**.',feedback:'Peritonite.'},
      {id:'aine',label:'Medicamentos',relevance:1,text:'**AINE** crônico.',feedback:'Fator de risco para úlcera péptica.'},
      {id:'rx',label:'Radiografia de tórax em ortostase',relevance:2,text:'Você vai examinar a imagem na etapa 4.',feedback:'A imagem aparece na etapa 4.'},
      {id:'usg',label:'Ultrassom de vesícula',relevance:0,text:'O caso não traz; o quadro não é de vesícula.',feedback:'Baixo rendimento.'}
    ],
    hypothesis:{prompt:'Qual é sua hipótese?',options:['Úlcera péptica perfurada','Cólica renal','Obstrução intestinal','Pancreatite'],correct:0,
      feedback:['AINE, dor súbita e peritonite.','A cólica renal não dá abdome em tábua.','Não há distensão e vômitos descritos.','A dor da pancreatite é em faixa; não há AINE como causa típica.']},
    microscopy:{image:'bank:rad_q07_0.jpg',prompt:'Radiografia de tórax em ortostase. O que você vê?',options:['Bolha gástrica normal à direita','Ar livre abaixo da cúpula diafragmática','Derrame pleural','Imagem normal'],correct:1,hint:'Olhe logo abaixo do diafragma direito: há uma faixa escura entre ele e o fígado?',competencies:['visual','conceitual'],
      explain:['A bolha gástrica fica à esquerda.','Ar livre subdiafragmático: pneumoperitônio.','Não é derrame.','Há ar livre.']},
    differential:[
      {prompt:'O ar livre ocorre exclusivamente na perfuração?',options:['Sim','Não: também após cirurgias e endoscopias','Só em crianças','Só após trauma'],correct:1,competencies:['diferencial'],
        explain:['Não.','Por isso o contexto clínico importa.','Não.','Não.']},
      {prompt:'Se a radiografia fosse normal e a suspeita continuasse:',options:['Perfuração excluída','TC, mais sensível para pouco ar livre','Repetir a radiografia em 1 semana','EDA imediata'],correct:1,competencies:['clinica'],
        explain:['Radiografia normal não exclui.','É a recomendação da apostila.','Não.','Não é o exame para ar livre.']},
      {prompt:'Por que a radiografia em pé mostra melhor o ar?',options:['O ar sobe e se acumula abaixo das cúpulas','O contraste sobe','O fígado desce','Não mostra melhor'],correct:0,competencies:['fisiopatologia'],
        explain:['Em ortostase, o ar livre sobe.','Não há contraste.','Não.','Mostra.']}
    ],
    final:{prompt:'Conclusão:',options:['Pneumoperitônio compatível com perfuração de víscera oca','Exame normal','Obstrução','Cálculo renal'],correct:0,
      keyPrompt:'Achado-chave:',keyOptions:['Ar livre abaixo da cúpula diafragmática direita','Taquicardia','Uso de AINE','Dor epigástrica'],keyCorrect:0,competencies:['clinica','visual','diferencial']},
    debrief:{diagnosis:'Pneumoperitônio por perfuração de víscera oca (provável úlcera péptica)',evidence:['**AINE** crônico, dor **súbita** e **peritonite**.','Radiografia em ortostase: **ar livre abaixo da cúpula** diafragmática.','À direita não há bolha gástrica para confundir.'],
      clinic:'Pneumoperitônio exige avaliação urgente. Radiografia normal não exclui pequenas quantidades de ar: na suspeita persistente, TC.',
      revisar:{conceitual:'O que a radiografia avalia (p. 7)',visual:'Pneumoperitônio (p. 9–11)',diferencial:'Pneumoperitônio (p. 9–11)',clinica:'Confira: pneumoperitônio',fisiopatologia:'Pneumoperitônio (p. 9–11)'}}
  },
  mastery:[
    {id:'i2q1',image:'bank:rad_q06_0.jpg',q:'Identifique as estruturas 1 e 2:',ops:['1 rim esquerdo; 2 psoas esquerdo','1 rim direito; 2 psoas direito','1 baço; 2 cólon descendente','1 baço; 2 sigmoide'],a:0,why:'Gabarito da RAD-06.',c:['visual']},
    {id:'i2q2',image:'bank:rad_q08_0.jpg',q:'Cólica no flanco esquerdo com hematúria; opacidade no trajeto do ureter. Correto:',ops:['Confirma cálculo e dispensa outros exames','Pode ser cálculo, mas diferenciar de flebólito; ausência não excluiria; TC sem contraste é mais sensível','É sempre flebólito','Ácido úrico é o mais radiopaco'],a:1,why:'RAD-08.',c:['visual','diferencial']},
    {id:'i2q3',image:'bank:rad_q09_0.jpg',q:'Criança que engoliu objeto, com salivação. A radiografia mostra:',ops:['Corpo estranho metálico no esôfago; conduta depende do objeto, local e sintomas','Moeda: aguardar sempre','Corpo na traqueia','Calcificação de linfonodo'],a:0,why:'RAD-09; baterias e pontiagudos são de maior risco.',c:['visual','clinica']},
    {id:'i2q4',image:'bank:rad_q10_0.jpg',q:'Radiografia normal. O que ela avalia?',ops:['Mucosa do estômago','Gases, alças, ossos e algumas partes moles, sem nitidez de tudo','Órgãos sólidos com nitidez de TC','Só ossos'],a:1,why:'RAD-10.',c:['conceitual']},
    {id:'i2q5',q:'Calcificação linear paralela à coluna lombar esquerda em idoso tabagista. Correto:',ops:['É escura na radiografia','Confirma aneurisma e mede o diâmetro','Localização e morfologia orientam, mas pode-se complementar com USG ou TC','Calcificações têm o mesmo aspecto em qualquer órgão'],a:2,why:'RAD-11.',c:['clinica','diferencial']},
    {id:'i2q6',image:'r008_59',q:'Pregas que atravessam toda a largura da luz indicam:',ops:['Intestino grosso','Intestino delgado','Estômago','Bexiga'],a:1,why:'Pregas circulares (coniventes) atravessam a luz; haustrações não.',c:['visual','conceitual']}
  ]
};

PM_MISSOES.push({
  id:'img03', area:'img', num:'03', titulo:'Tomografia de abdome',
  sub:'Como a TC funciona, planos, contraste, fases e janelas',
  pags:'13–16', ligados:['img08'],
  questoes:['RAD-12','RAD-13','RAD-14','RAD-15'],
  etapas:[
  { t:'texto', titulo:'Por que a TC vê mais', p:'13', img:'r013_80', leg:'Mesa, gantry e tubo de raios X girando ao redor do paciente.',
    corpo:[
      'Raios X + processamento computadorizado produzem **imagens em cortes**, muito mais detalhadas que a radiografia.',
      'A radiografia é **bidimensional**, com muita **sobreposição**; a TC permite **localizar e caracterizar** uma alteração e sua relação com os órgãos vizinhos.',
      'A mesa entra no aparelho enquanto o **tubo gira** ao redor do corpo; o computador reconstrói imagens seccionais e outros planos.',
      'Avalia órgãos sólidos, vasos, retroperitônio, intestino, peritônio e ossos: dor abdominal, inflamação, infecção, trauma, tumores, alterações vasculares, obstruções, **perfurações** e coleções.'
    ]
  },
  { t:'abas', titulo:'Planos', p:'14',
    abas:[
      { rot:'Axial', img:'r014_83', leg:'Corte axial.',
        itens:['É a **direção dos cortes** adquiridos: como se o abdome fosse fatiado.','Visto **de baixo para cima**.'] },
      { rot:'Coronal', img:'r014_84', leg:'Reconstrução coronal.',
        itens:['Reconstruída **a partir dos mesmos dados** do axial, **sem nova exposição** do paciente.','Mostra o corpo como se estivéssemos de frente.'] },
      { rot:'Sagital', img:'r014_85', leg:'Reconstrução sagital.',
        itens:['Mostra o corpo de lado: permite acompanhar as estruturas no sentido anteroposterior.'] }
    ]
  },
  { t:'abas', titulo:'Contraste', p:'14–15',
    abas:[
      { rot:'Sem contraste', img:'r014_86', leg:'TC sem contraste: densidades naturais dos tecidos.',
        itens:['Depende só das **diferenças de densidade** naturais.','**Preto = hipodenso**: atenua pouco os raios X (o ar é o principal exemplo).','**Cinza**: densidade intermediária (a maioria das partes moles).','**Branco = hiperdenso**: ossos e contraste iodado.'] },
      { rot:'Com contraste EV', img:'a_r016_98', leg:'TC com contraste iodado endovenoso.',
        itens:['Contraste **iodado endovenoso** circula pelo sangue: aumenta a diferença entre vasos e tecidos e realça órgãos e lesões.','Ele **não fica parado** no órgão: é distribuído conforme o fluxo sanguíneo.'] },
      { rot:'Contraste oral', img:'r015_94', leg:'Contraste preenchendo a luz digestiva.',
        itens:['Dado pela boca para **preencher a luz** do trato gastrointestinal.','**Negativo** (água, ar): escuro. **Positivo** (iodado): branco.'] }
    ]
  },
  { t:'texto', titulo:'Fases e janelas', p:'15', img:'r015_95', leg:'Sem contraste, arterial, portal/venosa e tardia.',
    corpo:[
      '**Arterial** (≈ 25–35 s): artérias muito brancas; fígado ainda pouco realçado; lesões hipervasculares realçam.',
      '**Portal/venosa** (≈ 60–70 s): veias e fígado bem realçados e homogêneos.',
      '**Tardia** (≈ 3–5 min): rins e **sistema coletor** com contraste; padrões de "lavagem" de lesões.',
      '**Janela** = ajuste de **brilho e contraste** para destacar tecidos de densidades parecidas, dentro da escala de **-1000 a +1000 UH** (Hounsfield).'
    ]
  },
  { t:'explorar', titulo:'TC de abdome normal', p:'16', img:'r016_99',
    intro:'TC coronal com as estruturas rotuladas pela apostila. Toque nos números, que estão nas pontas das linhas.',
    pts:[
      { x:29, y:19, nome:'Fígado', txt:'Sem contraste, densidade homogênea de partes moles; na fase portal fica mais homogêneo e realçado.' },
      { x:25, y:35, nome:'Vesícula biliar', txt:'Na face inferior do fígado; avaliam-se parede e conteúdo.' },
      { x:63, y:16, nome:'Estômago', txt:'Mais fácil de ver quando distendido.' },
      { x:71, y:27, nome:'Baço', txt:'Quadrante superior esquerdo; realça com contraste.' },
      { x:52, y:31, nome:'Pâncreas', txt:'Posterior ao estômago; realça com contraste.' },
      { x:32, y:50, nome:'Rim direito', txt:'Retroperitoneal; realce do parênquima e, depois, do sistema coletor.' },
      { x:53, y:43, nome:'Aorta abdominal', txt:'Com contraste, muito branca na fase arterial.' },
      { x:43, y:56, nome:'Veia cava inferior', txt:'Realça mais na fase venosa.' },
      { x:50, y:92, nome:'Bexiga urinária', txt:'Na pelve.' }
    ]
  },
  { t:'checar', titulo:'Confira o entendimento', p:'14–15',
    perg:'Qual afirmação sobre contraste está correta?',
    dica:'Qual contraste vai pela veia e qual vai para a luz?',
    ops:[
      { t:'O endovenoso realça vasos e órgãos conforme a fase; o oral preenche a luz e pode ser positivo (iodado) ou negativo (água/ar)', por:'RAD-14.', certa:true },
      { t:'O endovenoso preenche a luz intestinal', por:'Quem preenche a luz é o oral.' },
      { t:'Água é contraste positivo e aparece branca', por:'Água é negativa e escura.' }
    ]
  },
  { t:'resumo', titulo:'O que levar desta missão',
    itens:[
      'TC = **cortes**, sem a sobreposição da radiografia; tubo **gira**; outros planos são **reconstruídos** dos mesmos dados.',
      'Preto = hipodenso (ar); cinza = partes moles; branco = hiperdenso (osso, iodo).',
      'Contraste **EV** realça vasos e órgãos; **oral** preenche a luz (positivo iodado, negativo água/ar).',
      'Fases: **arterial** 25–35 s, **portal** 60–70 s, **tardia** 3–5 min.',
      '**Janela** = ajuste de brilho e contraste na escala Hounsfield. TC é **mais sensível** que a radiografia para pouco ar livre.'
    ]
  }
  ]
});
PM_CASES.img03 = {
  investigation:{
    title:'Investigação · Dor após polipectomia',
    fonte:'Caso da questão RAD-15 do banco de Radiologia.',
    patient:{age:61,sex:'Feminino',complaint:'Dor abdominal intensa e progressiva, com distensão',history:'Seis horas antes fez colonoscopia com retirada de pólipo séssil de 2 cm.'},
    evidence:[
      {id:'proc',label:'Procedimento recente',relevance:2,text:'Polipectomia de pólipo **séssil de 2 cm** há 6 horas.',feedback:'Procedimento terapêutico: risco de perfuração.'},
      {id:'rx',label:'Radiografia de tórax em pé',relevance:1,text:'**Sem ar livre evidente.**',feedback:'Não exclui pequenas quantidades de ar.'},
      {id:'tc',label:'Tomografia',relevance:2,text:'Você vai ver a imagem na etapa 4.',feedback:'A imagem aparece na etapa 4.'},
      {id:'lab',label:'Amilase',relevance:0,text:'O caso não traz; não é a pergunta.',feedback:'Baixo rendimento.'}
    ],
    hypothesis:{prompt:'Hipótese:',options:['Perfuração após polipectomia','Distensão normal pela insuflação','Pancreatite','Cólica renal'],correct:0,
      feedback:['Dor progressiva após procedimento terapêutico.','Dor intensa e progressiva não é o esperado.','Não há dado.','Não há dado.']},
    microscopy:{image:'bank:rad_q15_0.jpg',prompt:'TC numa janela que favorece o gás. O que você vê?',options:['Gás livre anterior na cavidade','Gás normal do cólon','Nada anormal','Cálculo'],correct:0,hint:'Procure gás fora das alças, na frente.',competencies:['visual','conceitual']},
    differential:[
      {prompt:'Por que a TC achou o que a radiografia não achou?',options:['TC é mais sensível para pequenas quantidades de ar','O ar só aparece com contraste','A radiografia estava errada','Não há diferença'],correct:0,competencies:['conceitual'],
        explain:['É a afirmação da apostila.','Não precisa de contraste.','Ela só é menos sensível.','Há.']},
      {prompt:'O que é a "janela" usada nessa imagem?',options:['Ajuste de brilho e contraste em unidades Hounsfield','Uma fase do contraste','A espessura do corte','O plano coronal'],correct:0,competencies:['conceitual'],
        explain:['Definição da apostila.','Fase é tempo de contraste.','Não.','Não.']},
      {prompt:'Qual complicação da colonoscopia é essa?',options:['Perfuração','Sangramento','Infecção','Reação à sedação'],correct:0,competencies:['clinica'],
        explain:['Gás livre após polipectomia.','Não há sangramento descrito.','Não.','Não.']}
    ],
    final:{prompt:'Conclusão:',options:['Pneumoperitônio por perfuração após polipectomia','Gás habitual do cólon','Exame normal','Obstrução'],correct:0,
      keyPrompt:'Achado-chave:',keyOptions:['Gás livre anterior na cavidade, na TC','Radiografia sem ar','Pólipo de 2 cm','Distensão'],keyCorrect:0,competencies:['clinica','visual','diferencial']},
    debrief:{diagnosis:'Perfuração após polipectomia (pneumoperitônio na TC)',evidence:['Dor progressiva **horas após procedimento terapêutico**.','Radiografia **sem ar evidente** não excluía.','TC: **gás livre anterior**.'],
      clinic:'A TC detecta pequenas quantidades de ar que a radiografia não mostra. A janela ajusta brilho e contraste para destacar o gás.',
      revisar:{conceitual:'Fases e janelas (p. 15)',visual:'Contraste (p. 14–15)',diferencial:'Por que a TC vê mais (p. 13)',clinica:'Por que a TC vê mais (p. 13)',fisiopatologia:'Por que a TC vê mais (p. 13)'}}
  },
  mastery:[
    {id:'i3q1',image:'bank:rad_q12_0.jpg',q:'Espessamento de segmento do delgado. Método e contraste:',ops:['RM sem contraste','RM com contraste','TC com contraste endovenoso','TC sem contraste'],a:2,why:'Gabarito da RAD-12.',c:['visual']},
    {id:'i3q2',image:'bank:rad_q13_0.jpg',q:'Três planos do mesmo exame. Correto:',ops:['Três aquisições com reposicionamento','Aquisição axial com tubo girando; o computador reconstrói coronal e sagital','Só o coronal é direto','Reconstrução só com contraste'],a:1,why:'RAD-13.',c:['conceitual']},
    {id:'i3q3',image:'bank:rad_q14_0.jpg',q:'Aorta e vasos do hilo brancos. Correto:',ops:['TC com contraste EV, que realça vasos e órgãos conforme a fase','Contraste EV preenche a luz intestinal','Aorta branca por calcificação sem contraste','Água é contraste positivo'],a:0,why:'RAD-14.',c:['visual','conceitual']},
    {id:'i3q4',q:'Na TC, o que aparece preto (hipodenso)?',ops:['Osso','Ar','Contraste iodado','Fígado'],a:1,why:'Atenua pouco os raios X.',c:['conceitual']},
    {id:'i3q5',q:'Em que fase o sistema coletor dos rins fica contrastado?',ops:['Sem contraste','Arterial','Portal','Tardia'],a:3,why:'Fase tardia, 3–5 minutos.',c:['conceitual']},
    {id:'i3q6',q:'Qual vantagem da TC sobre a radiografia?',ops:['Menos radiação sempre','Cortes sem sobreposição, que localizam a alteração e sua relação com os órgãos','Vê a mucosa diretamente','Permite biópsia sempre'],a:1,why:'A radiografia é bidimensional e sobreposta.',c:['conceitual']}
  ]
};


/* ===== Imagem 04 · Obstrução intestinal e intussuscepção (apostila de Radiologia p. 17–31; RAD-17 a 28) ===== */
PM_MISSOES.push({
  id:'img04', area:'img', num:'04', titulo:'Obstrução intestinal e intussuscepção',
  sub:'Delgado × grosso na radiografia, USG e TC, vólvulos, hérnias e invaginação',
  pags:'17–31', ligados:['img02','img03'],
  questoes:['RAD-17','RAD-18','RAD-19','RAD-20','RAD-21','RAD-22','RAD-23','RAD-24','RAD-25','RAD-26','RAD-27','RAD-28'],
  etapas:[
  { t:'texto', titulo:'A síndrome obstrutiva', p:'17', img:'r017_102', leg:'Dor, distensão, vômitos e parada de eliminação: é obstrução mecânica?',
    corpo:[
      'Abdome agudo obstrutivo = **interrupção parcial ou completa** do trânsito intestinal.',
      '**Mecânica:** barreira física. **Funcional:** a motilidade falha sem obstáculo (íleo paralítico, pseudo-obstrução).',
      'Quadro clássico: **dor em cólica, vômitos, distensão e constipação**, podendo haver parada de fezes e gases.',
      'Na **obstrução parcial** ainda passa conteúdo: **eliminar fezes ou gases não exclui** o diagnóstico.',
      'A grande preocupação é a **circulação da parede**, sobretudo no **estrangulamento**.'
    ],
    destaque:'A imagem serve para **confirmar**, **localizar o ponto** de obstrução, achar a **causa** e procurar **complicações**.'
  },
  { t:'abas', titulo:'Delgado na radiografia', p:'17–19',
    intro:'Causas principais: **aderências** pós-operatórias, **hérnias**, neoplasias e estenoses inflamatórias. O gás e o líquido acumulam **antes** do ponto obstrutivo.',
    abas:[
      { rot:'Alças centrais', img:'a_r018_106', leg:'Alças de delgado dilatadas (azul), com diâmetro ≥ 3 cm.',
        itens:['Alças de delgado **dilatadas**, principalmente na **região central** do abdome.','Diâmetro **≥ 3 cm**.'] },
      { rot:'Pilha de moedas', img:'a_r018_107', leg:'Linhas transversais que atravessam toda a alça.',
        itens:['**Válvulas coniventes** (pregas circulares) atravessam **toda a largura** da alça.','A repetição cria o aspecto de **pilha de moedas**: ajuda a reconhecer o delgado.'] },
      { rot:'Níveis em degrau', img:'a_r019_111', leg:'Níveis hidroaéreos em alturas diferentes.',
        itens:['**Níveis hidroaéreos** em alturas diferentes: padrão em **escada/degrau**.','Gás em cima (preto), líquido embaixo (cinza): separados pela gravidade.','Melhor visto em **ortostase** ou decúbito lateral com raio horizontal.'] },
      { rot:'Colar de contas', img:'r019_112', leg:'Pequenas bolhas de gás presas entre as pregas.',
        itens:['Alças **cheias de líquido**: pequenas bolhas de gás ficam presas entre as válvulas coniventes, formando uma fileira de imagens escuras: **colar de contas**.'] }
    ]
  },
  { t:'abas', titulo:'Grosso na radiografia', p:'20–22',
    intro:'Causas principais: **câncer colorretal**, **volvo** e diverticulite. Clínica: distensão **progressiva**, dor em cólica e constipação; **vômitos surgem mais tarde**.',
    abas:[
      { rot:'Medidas', img:'a_r021_119', leg:'Cólon ≥ 6 cm; ceco ≥ 9 cm.',
        itens:['Dilatação do cólon com diâmetro **≥ 6 cm**; ceco **≥ 9 cm**.','Níveis hidroaéreos também podem estar presentes.'] },
      { rot:'Periferia', img:'a_r021_120', leg:'Cólon dilatado na periferia do abdome.',
        itens:['Distribuição **periférica**, acompanhando o trajeto do cólon.','Reconhecido pelas **haustrações**.'] },
      { rot:'Válvula ileocecal', img:'r021_121', leg:'Cólons e ceco.',
        itens:['**Válvula competente:** obstrução em **alça fechada**; o ceco dilata muito, com risco de **isquemia e perfuração** perto de **12 cm**.','**Válvula incompetente:** gás reflui para o delgado; fica difícil separar delgado de grosso na radiografia.','Por isso, na suspeita colônica, a **TC** localiza, acha a causa e as complicações.'] }
    ]
  },
  { t:'tabela', titulo:'Delgado × grosso', p:'17–23',
    cols:['Delgado','Grosso'],
    linhas:[
      ['Causas','Aderências, hérnias, neoplasias, estenoses','Câncer colorretal, volvo, diverticulite'],
      ['Localização das alças','Centrais','Periféricas'],
      ['Pregas','Coniventes, cruzam **toda** a alça (pilha de moedas)','Haustrações, **não** cruzam toda a alça'],
      ['Calibre','≥ 3 cm','Cólon ≥ 6 cm; ceco ≥ 9 cm (risco ≈ 12 cm)'],
      ['Vômitos','Precoces e frequentes','Tardios; distensão acentuada']
    ]
  },
  { t:'checar', titulo:'Confira o entendimento', p:'17–19',
    perg:'Mulher histerectomizada, com cólica periumbilical, vômitos frequentes e distensão; eliminou flatos pela manhã. A radiografia mostra alças centrais com pregas que cruzam toda a alça. Interpretação?',
    dica:'Onde ficam as alças e o que as pregas indicam? Eliminar flatos exclui?',
    ops:[
      { t:'Obstrução de delgado por aderências; eliminar flatos não exclui obstrução parcial', por:'RAD-17.', certa:true },
      { t:'Obstrução de cólon, pelas haustrações', por:'Pregas que cruzam toda a alça são do delgado.' },
      { t:'Eliminar flatos exclui obstrução', por:'Na parcial ainda passa conteúdo.' }
    ]
  },
  { t:'abas', titulo:'Vólvulos', p:'22, 26',
    abas:[
      { rot:'Sigmoide', img:'a_r022_124', leg:'Sigmoide muito dilatado, em U invertido.',
        itens:['Alça sigmoide **muito dilatada**, em **U invertido**, projetando-se para cima: **grão de café**.','Decorre da distensão acentuada do segmento torcido.'] },
      { rot:'Ceco', img:'a_r022_125', leg:'Ceco dilatado e fora do lugar.',
        itens:['Ceco **muito dilatado** e **deslocado**, por vezes no **quadrante superior esquerdo**.'] },
      { rot:'Redemoinho na TC', img:'a_r026_147', leg:'Sinal do redemoinho (whirl sign).',
        itens:['Vasos do mesentério e gordura **em espiral** ao redor do eixo: o mesentério acompanha a rotação.','Na obstrução, o **whirl sign** indica volvo.'] }
    ]
  },
  { t:'abas', titulo:'Ultrassom e tomografia', p:'23–26',
    abas:[
      { rot:'USG', img:'r024_134', leg:'Alça de delgado com mais de 2,5 cm.',
        itens:['Imagens em **tempo real**: calibre, conteúdo, **peristaltismo** e parede.','Delgado dilatado: **> 2,5 cm**; mais sugestivo com conteúdo acumulado, movimento anormal e diferença entre segmentos.','Mostra **líquido livre**. **Sem radiação**: útil em gestantes.'] },
      { rot:'Ponto de transição', img:'a_r024_135', leg:'Alças dilatadas a montante e lesão estenosante com redução abrupta do calibre.',
        itens:['**Ponto de transição**: onde a alça **dilatada** passa a **colabada**.','**Proximal** = antes do bloqueio (dilatado); **distal** = depois (colabado).','Localizar o ponto ajuda a achar a **causa**.'] },
      { rot:'Gravidade', img:'r026_144', leg:'Pneumoperitônio na TC.',
        itens:['Na TC procuram-se sinais de gravidade: **pneumoperitônio**, **líquido livre**, sofrimento da parede e **redemoinho**.'] },
      { rot:'Hérnia', img:'r027_150', leg:'Alça herniada.',
        itens:['Alça atravessa um defeito da parede, com dilatação **antes** e menor calibre depois.','**Encarcerada:** não volta. **Estrangulada:** também perde a circulação: isquemia e necrose.'] }
    ]
  },
  { t:'texto', titulo:'Conduta', p:'27',
    corpo:[
      '**Suporte:** jejum, hidratação venosa, correção de eletrólitos, analgesia, antieméticos e **descompressão por sonda nasogástrica**.',
      '**Nem toda obstrução é cirúrgica:** a parcial sem isquemia, perfuração ou estrangulamento pode ser **conservadora sob vigilância**.',
      '**Cirurgia urgente:** peritonite, perfuração, isquemia/necrose, vólvulo complicado, hérnia estrangulada, ou falha do tratamento conservador.'
    ]
  },
  { t:'texto', titulo:'Intussuscepção', p:'28–29', img:'a_r028_155', leg:'Sinal "bowel within bowel": alça dentro da alça na TC.',
    corpo:[
      'Um segmento do intestino **desliza para dentro** do segmento adjacente, levando o **mesentério** e seus vasos.',
      'Sequência: compressão → **retorno venoso e linfa** prejudicados → **edema** → falta de sangue **arterial** → **isquemia** → **necrose** → perfuração e peritonite.',
      '**Criança:** causa principal **hiperplasia linfoide** (placas de Peyer); muitos casos tratáveis por **enema**. **Adulto:** **ponto guia** (frequentemente **neoplasia**); tratamento geralmente **cirúrgico**.',
      'Clínica na criança: **dor intermitente** (choro, pernas encolhidas, palidez), vômitos (podem ficar biliosos) e fezes em **geleia de framboesa** (tardias; não esperar por elas).'
    ]
  },
  { t:'explorar', titulo:'O sinal do alvo', p:'30', img:'r030_162', ann:'a_r030_162',
    intro:'USG em corte transversal. Toque no número.',
    pts:[
      { x:44, y:37, nome:'Sinal do alvo', txt:'**Anéis concêntricos** alternando ecogenicidades: as paredes intestinais encaixadas umas nas outras.' }
    ],
    destaque:'No corte **longitudinal**, o segmento invaginado parece um rim: **sinal do pseudorrim**. **Gravidade no USG:** diâmetro **> 2 cm** e comprimento **> 3 cm**.'
  },
  { t:'tabela', titulo:'Conduta na intussuscepção', p:'31',
    cols:['O que fazer'],
    linhas:[
      ['Criança (ileocólica)','**Enema terapêutico** (ar ou líquido pelo reto, guiado por imagem). Observar depois: pode recorrer.'],
      ['Contraindicações do enema','**Perfuração, peritonite ou instabilidade** importante: cirurgia.'],
      ['Adulto','Geralmente **cirúrgico**: trata, investiga a causa (ponto guia, neoplasia) e resseca se houver necrose.'],
      ['Transitória','Pequena, **sem obstrução** nem sofrimento vascular, achada por acaso: pode **não exigir tratamento**, salvo sintomas ou ponto guia.']
    ]
  },
  { t:'checar', titulo:'Confira o entendimento', p:'31',
    perg:'Criança com intussuscepção há 36 h, febril, hipotensa, abdome rígido e ar livre na radiografia. Conduta?',
    dica:'Quais são as contraindicações do enema?',
    ops:[
      { t:'Enema com ar imediatamente', por:'Perfuração e instabilidade contraindicam.' },
      { t:'Estabilizar e operar; enema contraindicado', por:'Houve progressão até necrose e perfuração (RAD-26).', certa:true },
      { t:'Observar, porque a maioria se resolve', por:'Não com perfuração.' }
    ]
  },
  { t:'resumo', titulo:'O que levar desta missão',
    itens:[
      'Delgado: alças **centrais ≥ 3 cm**, **pilha de moedas**, níveis em **degrau**, **colar de contas**; causa nº 1: **aderências**.',
      'Grosso: alças **periféricas** com haustrações, cólon **≥ 6 cm**, ceco **≥ 9 cm**; válvula competente = **alça fechada**, ceco perto de **12 cm** perfura.',
      'Volvo de sigmoide = **grão de café**; TC: **redemoinho**. USG: delgado **> 2,5 cm**, sem radiação. TC: **ponto de transição**.',
      'Parcial sem complicações: **conservador**. Peritonite, isquemia, perfuração, estrangulamento: **cirurgia**.',
      'Intussuscepção: **alvo** (transversal) e **pseudorrim** (longitudinal); > 2 cm e > 3 cm = gravidade. Criança: hiperplasia linfoide, **enema**. Adulto: **ponto guia**, cirurgia.'
    ]
  }
  ]
});
PM_CASES.img04 = {
  investigation:{
    title:'Investigação · Constipação, perda de peso e parada de gases',
    fonte:'Caso da questão RAD-18 do banco de Radiologia.',
    patient:{age:78,sex:'Masculino',complaint:'Parada de eliminação de fezes e gases há três dias',history:'Constipação progressiva há duas semanas e perda de peso nos últimos meses.'},
    evidence:[
      {id:'ex',label:'Exame físico',relevance:2,text:'**Distensão abdominal acentuada.**',feedback:'Distensão acentuada sugere obstrução baixa (cólon).'},
      {id:'vom',label:'Vômitos',relevance:2,text:'Vômitos **só surgiram hoje**.',feedback:'Vômitos tardios: típico da obstrução do intestino grosso.'},
      {id:'peso',label:'Perda de peso',relevance:1,text:'Perda de peso há meses.',feedback:'Faz pensar em neoplasia como causa.'},
      {id:'cir',label:'Cirurgias prévias',relevance:0,text:'O caso não traz cirurgias prévias.',feedback:'Aderências são a causa típica do delgado, não aqui.'}
    ],
    hypothesis:{prompt:'Hipótese:',options:['Obstrução do intestino grosso','Obstrução do delgado por aderências','Intussuscepção infantil','Pancreatite'],correct:0,
      feedback:['Idoso, perda de peso, constipação progressiva, distensão acentuada e vômitos tardios.','Sem cirurgia prévia e com vômitos tardios.','Não.','Não.']},
    microscopy:{image:'bank:rad_q18_0.jpg',prompt:'Radiografia. O que você vê?',options:['Alças de delgado centrais com pilha de moedas','Cólon dilatado, periférico, com haustrações','Grão de café','Normal'],correct:1,hint:'As alças estão no centro ou contornando o abdome?',competencies:['visual','conceitual']},
    differential:[
      {prompt:'Por que o ceco preocupa aqui?',options:['Com válvula ileocecal competente, forma-se alça fechada; o ceco pode perfurar perto de 12 cm','O ceco nunca dilata','Só perfura acima de 20 cm','Porque a válvula protege'],correct:0,competencies:['fisiopatologia'],
        explain:['RAD-18.','Dilata.','Não.','A válvula competente é justamente o problema.']},
      {prompt:'Qual exame define a causa e as complicações?',options:['TC de abdome','Repetir radiografia','EDA','Nenhum'],correct:0,competencies:['clinica'],
        explain:['Na suspeita colônica, a TC é particularmente importante.','Não acrescenta.','Não alcança o cólon.','Não.']},
      {prompt:'Qual causa é mais provável?',options:['Câncer colorretal','Aderência','Hérnia inguinal','Hiperplasia linfoide'],correct:0,competencies:['diferencial'],
        explain:['Idoso com perda de peso: neoplasia é a principal etiologia do grosso.','É do delgado.','Não há hérnia descrita.','É da criança.']}
    ],
    final:{prompt:'Conclusão:',options:['Obstrução do intestino grosso, provável neoplasia, com risco de perfuração cecal','Obstrução de delgado por aderências','Íleo paralítico','Volvo de sigmoide'],correct:0,
      keyPrompt:'Achado-chave:',keyOptions:['Cólon dilatado periférico com haustrações','Vômitos','Idade','Constipação'],keyCorrect:0,competencies:['clinica','visual','diferencial']},
    debrief:{diagnosis:'Obstrução do intestino grosso (provável neoplasia)',evidence:['Idoso com **perda de peso** e constipação progressiva.','**Distensão acentuada** e **vômitos tardios**.','Radiografia: **cólon dilatado, periférico, com haustrações**.','Válvula competente → **alça fechada** → risco de perfuração do ceco.'],
      clinic:'A TC é o exame para localizar o ponto, definir a causa e procurar complicações antes da cirurgia.',
      revisar:{conceitual:'Delgado × grosso (quadro)',visual:'Grosso na radiografia (p. 20–22)',diferencial:'Delgado × grosso (quadro)',clinica:'Conduta (p. 27)',fisiopatologia:'Grosso na radiografia (p. 20–22)'}}
  },
  mastery:[
    {id:'i4q1',image:'bank:rad_q19_0.jpg',q:'Idoso institucionalizado com distensão abrupta e parada de gases. A radiografia sugere:',ops:['Volvo de sigmoide (grão de café)','Volvo gástrico','Obstrução de delgado','Normal'],a:0,why:'RAD-19; na TC, redemoinho.',c:['visual','diferencial']},
    {id:'i4q2',image:'bank:rad_q20_0.jpg',q:'Gestante com suspeita de obstrução; foi feito USG. Correto:',ops:['O gás impede o USG','USG avalia em tempo real calibre (> 2,5 cm), conteúdo, peristaltismo e parede, sem radiação','Só vê líquido livre','Delgado dilatado só acima de 6 cm'],a:1,why:'RAD-20.',c:['conceitual','clinica']},
    {id:'i4q3',image:'bank:rad_q21_0.jpg',q:'TC coronal na obstrução. O que se procura?',ops:['Ponto de transição: alças proximais dilatadas passando a distais colabadas','Alças distais dilatadas','Só pneumoperitônio','Nada'],a:0,why:'RAD-21.',c:['visual','conceitual']},
    {id:'i4q4',image:'bank:rad_q22_0.jpg',q:'Hérnia inguinal que não reduz, com febre, taquicardia e pele avermelhada. Correto:',ops:['Hérnia encarcerada com sinais de estrangulamento: cirurgia urgente','Reduzir e dar alta','Conservador','Colonoscopia'],a:0,why:'RAD-22.',c:['clinica','visual']},
    {id:'i4q5',image:'bank:rad_q24_0.jpg',q:'Lactente com choro intermitente, vômitos e sangue com muco nas fezes. USG transversal:',ops:['Sinal do alvo da intussuscepção; ileocólica é a mais comum, hiperplasia linfoide a causa','Pseudorrim do refluxo','Normal','Volvo'],a:0,why:'RAD-24.',c:['visual','clinica']},
    {id:'i4q6',image:'bank:rad_q27_0.jpg',q:'Homem de 58 anos com cólicas, perda de peso e anemia. TC com alça dentro de alça:',ops:['Intussuscepção do adulto, com ponto guia (frequentemente neoplasia); geralmente cirúrgica','Transitória; ignorar','Enema terapêutico','Normal'],a:0,why:'RAD-27.',c:['visual','diferencial']}
  ]
};

/* ===== Imagem 05 · Colonoscopia (apostila de Radiologia p. 31–41; RAD-29 a 35) ===== */
PM_MISSOES.push({
  id:'img05', area:'img', num:'05', titulo:'Colonoscopia',
  sub:'Indicações, preparo, técnica, marcos do ceco, pólipos, DII e sinais de alarme',
  pags:'31–41', ligados:['img01','img04'],
  questoes:['RAD-29','RAD-30','RAD-31','RAD-32','RAD-33','RAD-34','RAD-35'],
  etapas:[
  { t:'texto', titulo:'Por que olhar o cólon por dentro', p:'31–32', img:'r032_174', leg:'Sequência adenoma–carcinoma: do cólon normal ao carcinoma.',
    corpo:[
      'A colonoscopia examina **diretamente** a mucosa do **reto, de todo o cólon** e, quando possível, do **íleo terminal**.',
      'É **diagnóstica** (vê, fotografa, faz biópsia) e **terapêutica** (remove pólipos, trata sangramentos, retira corpos estranhos).',
      'Boa parte dos cânceres colorretais nasce de **adenomas**: a **polipectomia** remove o adenoma antes que evolua e **interrompe a sequência adenoma–carcinoma**. Por isso tem papel **preventivo**.'
    ],
    destaque:'Tempo aproximado: cerca de **10 minutos** para chegar ao ceco e **30 minutos** no total, incluindo a retirada e eventuais intervenções.'
  },
  { t:'tabela', titulo:'Quando indicar', p:'33',
    cols:['Para quê'],
    linhas:[
      ['Alteração em exame de imagem','Esclarecer anormalidades vistas em outros exames.'],
      ['Rastreamento do câncer colorretal','Procurar pólipos e neoplasias em **assintomáticos**, conforme idade e risco.'],
      ['Sangramento sem causa definida','Lesões vasculares, inflamações, pólipos, tumores.'],
      ['PSOF positiva','Investigar a origem do sangue. **Não confirma câncer**, mas cerca de **metade** dos pacientes tem alguma lesão neoplásica.'],
      ['Anemia ferropriva sem causa','Perdas crônicas de sangue pelo trato GI.'],
      ['Suspeita de DII','Ver a mucosa e **biopsiar** para diferenciar as doenças.'],
      ['Vigilância da retocolite crônica','Procurar **displasia**, sobretudo após anos de inflamação.'],
      ['Terapêuticas','Lesões concomitantes (sincrônicas), vigilância pós-ressecção, corpos estranhos e **polipectomia**.']
    ]
  },
  { t:'texto', titulo:'Preparo intestinal', p:'32', img:'r032_175', leg:'Escala de cor das evacuações: quanto mais claras e sem partículas, melhor o preparo.',
    corpo:[
      'Resíduos fecais **escondem pólipos e lesões pequenas**.',
      'Exemplo de preparo: **dieta leve** nos dois dias anteriores, **sem sólidos nas últimas 12 horas** e **laxativos**. Cada serviço tem seu protocolo.',
      'O objetivo é um cólon limpo: evacuações **claras, líquidas e sem partículas** indicam bom preparo.'
    ],
    destaque:'O **preparo inadequado** é a **causa mais comum** de exame **prolongado ou incompleto**: aumenta a chance de não detectar lesões e pode exigir **repetir** a colonoscopia.'
  },
  { t:'abas', titulo:'Antes de começar', p:'34–35',
    abas:[
      { rot:'Contraindicações', img:'r034_185', leg:'Situações em que o exame pode ser perigoso.',
        itens:['**Colite fulminante**: parede frágil, risco de perfuração.','**Diverticulite aguda**: a inflamação ativa aumenta o risco com insuflação e manipulação.','**Instabilidade hemodinâmica**: não tolera o procedimento nem a sedação.','**Infarto recente**: exige avaliação cardiovascular e da urgência.','Também: cirurgia intestinal recente, paciente não cooperativo, **coagulopatia**, **perfuração conhecida ou suspeita**.'] },
      { rot:'Sedação', img:'r034_186', leg:'Videocolonoscópio, monitor e acessórios.',
        itens:['Reduz ansiedade, desconforto e dor.','Clássico: **midazolam + meperidina** IV; também **propofol**.','Monitorar **sinais vitais** e **saturação de O₂**; ECG conforme o risco; acesso venoso disponível.','Complicações da sedação: **depressão respiratória**, reações alérgicas e disritmias.'] },
      { rot:'Posição', img:'r035_191', leg:'Paciente em decúbito lateral esquerdo; o aparelho entra pelo ânus.',
        itens:['Confirmar identificação, consentimento, **qualidade do preparo**, alergias e medicamentos (sobretudo **anticoagulantes**).','Paciente em **decúbito lateral esquerdo**.','Inicia-se pela inspeção do reto e do retossigmoide.'] }
    ]
  },
  { t:'abas', titulo:'O caminho até o ceco', p:'35–39',
    intro:'Reto → sigmoide → descendente → flexura esplênica → transverso → flexura hepática → ascendente → **ceco** → (válvula ileocecal) → **íleo terminal**.',
    abas:[
      { rot:'Retossigmoide', img:'r037_207', leg:'Junção retossigmoide: avançar sem perder o lúmen.',
        itens:['Uma das regiões **críticas**: angulação do sigmoide, mobilidade e possíveis **aderências**.','Regra técnica: **avançar só com o lúmen visível**; nada de introduzir às cegas ou forçar contra a parede.','No descendente, o lúmen aparece como pregas **circulares**.'] },
      { rot:'Flexura esplênica', img:'r037_208', leg:'Angulação aguda perto do baço.',
        itens:['Curva **aguda** próxima ao baço.','Podem ser necessários **movimentos de rotação** (torque) para direcionar a ponta.'] },
      { rot:'Transverso', img:'r037_209', leg:'Cólon transverso.',
        itens:['Costuma permitir progressão mais **retilínea**.','Mas sua **mobilidade** favorece a formação de **alças**.'] },
      { rot:'Flexura hepática', img:'r038_212', leg:'Flexura hepática: mancha azulada do fígado.',
        itens:['Outro ponto de angulação crítica, junto ao fígado.','Pode aparecer uma **sombra azulada** pela proximidade do fígado.'] },
      { rot:'Ascendente', img:'r038_213', leg:'Pregas que não contornam todo o lúmen.',
        itens:['Pode haver **transiluminação** da parede.','As pregas **não contornam completamente** o lúmen.','O assistente pode fazer **pressão abdominal** externa para reduzir alças e apoiar o avanço.'] },
      { rot:'Íleo terminal', img:'r039_217', leg:'Íleo terminal.',
        itens:['Intubar o íleo = **atravessar a válvula ileocecal** com a ponta do aparelho.','Permite examinar a porção final do delgado (importante na suspeita de **Crohn**).'] }
    ]
  },
  { t:'texto', titulo:'Alças e a manobra da sanfona', p:'37–38',
    corpo:[
      'O cólon tem curvas e segmentos **móveis**: empurrar sem controle forma **alças** dentro do abdome, e o aparelho não avança.',
      '**Inserção paradoxal**: a ponta avança enquanto o aparelho é **puxado**, desde que o lúmen siga centralizado.',
      'Técnica em **sanfona**: pequenas inserções e retiradas, insuflação e aspiração, rotação da ponta. Assim se desfazem alças e se mantém o lúmen no centro.',
      'Reduzir alça: movimentos **curtos de retirada e reinserção**, aspirar e, se preciso, **pressão abdominal externa**.'
    ]
  },
  { t:'explorar', titulo:'Como saber que chegou ao ceco', p:'36', img:'r036_203',
    intro:'Esta é a imagem que documenta o exame completo. Toque nos números.',
    pts:[
      { x:24, y:40, nome:'ICV · válvula ileocecal', txt:'Estrutura **semelhante a uma prega**, que delimita a entrada do íleo no ceco.' },
      { x:47, y:53, nome:'AO · óstio apendicular', txt:'Pequena **abertura** na mucosa do ceco; pode lembrar uma **fenda**.' },
      { x:49, y:73, nome:'CF · confluência das tênias', txt:'Ponto onde as tênias do cólon se encontram, no fundo do ceco.' }
    ],
    destaque:'A identificação desses marcos **confirma** o ceco. Não basta o examinador "achar" que chegou: os marcos devem ser **registrados em foto ou vídeo**.'
  },
  { t:'texto', titulo:'A retirada é a hora de procurar', p:'39', img:'r039_218', leg:'Mucosa normal: lisa, vasos visíveis, sem úlceras nem pólipos.',
    corpo:[
      'A inspeção diagnóstica de qualidade ocorre principalmente na **retirada lenta** do aparelho.',
      'Revisar **toda a circunferência**, olhar **atrás das pregas**, limpar e aspirar líquido ou bolhas.',
      '**Mucosa normal:** superfície íntegra, sem úlceras, massas ou pólipos, com **vascularização preservada**.',
      'O laudo registra: qualidade do preparo, se o **ceco foi alcançado**, segmentos examinados, achados, procedimentos, complicações e orientações.'
    ]
  },
  { t:'abas', titulo:'Pólipos e polipectomia', p:'39–40',
    abas:[
      { rot:'Pólipo', img:'r039_219', leg:'Pólipo pediculado: cabeça sobre um pedículo.',
        itens:['Elevações focais da mucosa.','Morfologia **séssil**, **pediculada** ou **plana**.','A aparência sugere, mas **só a histologia confirma** a natureza.'] },
      { rot:'Polipectomia', img:'r040_222', leg:'Passo a passo: identificar, posicionar, laçar, fechar a alça, cortar, recuperar o pólipo.',
        itens:['**Biópsia:** retira uma pequena amostra para investigação.','**Polipectomia:** retira o pólipo **inteiro**: diagnóstica, **preventiva** e curativa.','O pólipo vai para **análise histológica**.','A complicação mais associada é o **sangramento**.'] }
    ]
  },
  { t:'abas', titulo:'Neoplasia colorretal', p:'40',
    abas:[
      { rot:'Vegetante', img:'r040_223', leg:'Lesão vegetante (contornos).',
        itens:['Crescimento **irregular** que se projeta para dentro do lúmen, formando **massa**.','Pode ter bordas irregulares e tecido friável.'] },
      { rot:'Ulcerada', img:'r040_224', leg:'Lesão ulcerada (contorno roxo).',
        itens:['Área de **perda de superfície**, formando uma úlcera.'] },
      { rot:'Estenosante', img:'r040_225', leg:'Lesão estenosante (contorno azul).',
        itens:['**Estreita o lúmen**; pode dificultar ou **impedir a passagem** do aparelho.'] }
    ]
  },
  { t:'tabela', titulo:'Crohn × retocolite na colonoscopia', p:'41',
    cols:['Doença de Crohn','Retocolite ulcerativa'],
    linhas:[
      ['Distribuição','**Descontínua**: lesões salteadas com mucosa preservada entre elas','**Contínua**, sem áreas íntegras'],
      ['Aspecto','Úlceras, aspecto em **pedra de calçamento**','Tecido **edemaciado**, inflamado de forma difusa'],
      ['Pistas clínicas','Íleo terminal, **doença perianal** (fístulas)','Vigilância de displasia na forma crônica'],
      ['Papel da colonoscopia','Ver, **biopsiar** e diferenciar','Ver, **biopsiar** e diferenciar']
    ]
  },
  { t:'abas', titulo:'Veja as duas', p:'41',
    abas:[
      { rot:'Crohn', img:'r041_228', leg:'Áreas de mucosa preservada (verde) entre úlceras (vermelho).',
        itens:['Áreas de mucosa **conservada** em meio à ulceração.','Lesões ulceradas **descontínuas**; padrão em **calçamento de pedra**.'] },
      { rot:'Retocolite', img:'r041_229', leg:'Inflamação contínua (rosa).',
        itens:['Lesão **contínua**, sem áreas íntegras, com tecido **edemaciado**.'] }
    ]
  },
  { t:'texto', titulo:'Complicações e sinais de alarme', p:'41',
    corpo:[
      '**Perfuração:** abertura na parede, com saída de gás e conteúdo para o abdome. Trauma mecânico do aparelho ou das intervenções.',
      '**Sangramento:** imediato ou tardio, sobretudo após **polipectomia**.',
      '**Sedação:** depressão respiratória, reações alérgicas, disritmias.',
      'Depois do exame, **cólicas leves e gases** podem ocorrer (pela insuflação).'
    ],
    destaque:'**Sinais de alarme:** dor **intensa ou progressiva**, abdome **rígido ou muito distendido**, **febre**, **vômitos** persistentes, sangramento volumoso. Pensar em perfuração ou hemorragia: **avaliação imediata**, com **TC**, observação e avaliação cirúrgica. Após sedação, sair **acompanhado**.'
  },
  { t:'checar', titulo:'Confira o entendimento', p:'41',
    perg:'Duas horas após polipectomia, a paciente tem cólicas leves e gases. À noite, dor intensa e progressiva, abdome endurecido, febre e vômitos. Como interpretar?',
    dica:'Separe o desconforto esperado do que é alarme.',
    ops:[
      { t:'Tudo é efeito esperado da insuflação', por:'Dor progressiva, rigidez e febre não são esperadas.' },
      { t:'O primeiro momento é esperado; o segundo é alarme de perfuração/hemorragia e pede imagem imediata', por:'RAD-33.', certa:true },
      { t:'É efeito tardio do midazolam', por:'Não explica febre e abdome rígido.' }
    ]
  },
  { t:'resumo', titulo:'O que levar desta missão',
    itens:[
      'Colonoscopia vê **reto, cólon e íleo terminal**; diagnóstica e **terapêutica**. Polipectomia interrompe a sequência **adenoma–carcinoma**.',
      '**PSOF+** → colonoscopia (≈ metade tem lesão neoplásica). Também: anemia ferropriva, sangramento, DII, rastreamento.',
      '**Preparo inadequado** = causa nº 1 de exame incompleto → repetir com preparo correto.',
      'Contraindicações: colite fulminante, **diverticulite aguda**, instabilidade, **IAM recente**, perfuração. Posição: **decúbito lateral esquerdo**, sedação e monitorização (SpO₂).',
      'Ceco: **válvula ileocecal, óstio apendicular, confluência das tênias**, registrados em foto. A **retirada** é a fase de inspeção.',
      'Crohn = **salteado**, perianal, calçamento; RCU = **contínua**. Alarme pós-exame → **TC** e cirurgia.'
    ]
  }
  ]
});
PM_CASES.img05 = {
  investigation:{
    title:'Investigação · Sangue oculto positivo no rastreamento',
    fonte:'Caso da questão RAD-29 do banco de Radiologia; a imagem do achado é da apostila (p. 39).',
    patient:{age:56,sex:'Masculino',complaint:'Pesquisa de sangue oculto nas fezes positiva',history:'Assintomático; fez a PSOF como rastreamento de câncer colorretal. Pergunta se pode só repetir o exame de fezes em um ano.'},
    evidence:[
      {id:'psof',label:'PSOF',relevance:2,text:'**Positiva.**',feedback:'Indica sangue nas fezes que precisa ser investigado.'},
      {id:'sint',label:'Sintomas',relevance:1,text:'Nenhum.',feedback:'Assintomático não quer dizer falso-positivo.'},
      {id:'idade',label:'Idade',relevance:1,text:'56 anos.',feedback:'Faixa de rastreamento do câncer colorretal.'},
      {id:'eda',label:'Epigastralgia',relevance:0,text:'Não tem queixas digestivas altas.',feedback:'Nada aponta para fonte alta.'}
    ],
    hypothesis:{prompt:'O que fazer com a PSOF positiva?',options:['Investigar com colonoscopia','Repetir a PSOF em um ano','Endoscopia digestiva alta','Radiografia de abdome'],correct:0,
      feedback:['Investigar a origem do sangue; cerca de metade tem lesão neoplásica.','Positiva exige investigação.','O rastreamento aqui é colorretal.','Não identifica pólipos.']},
    microscopy:{image:'r039_219',prompt:'Na colonoscopia aparece esta lesão. O que é?',options:['Pólipo pediculado','Lesão estenosante','Óstio apendicular','Mucosa normal'],correct:0,hint:'Há uma cabeça apoiada sobre uma haste?',competencies:['visual','conceitual']},
    differential:[
      {prompt:'Qual a conduta para essa lesão?',options:['Polipectomia e análise histológica','Só observar, porque parece benigna','Encaminhar para cirurgia aberta','Biopsiar só a mucosa ao lado'],correct:0,competencies:['clinica'],
        explain:['Remove o adenoma e interrompe a sequência adenoma–carcinoma; a histologia confirma.','A aparência não confirma benignidade.','A polipectomia endoscópica é a conduta.','O pólipo é que precisa ir para histologia.']},
      {prompt:'Complicação mais associada à polipectomia:',options:['Sangramento','Pancreatite','Pneumotórax','Nenhuma'],correct:0,competencies:['fisiopatologia'],
        explain:['Imediato ou tardio.','Não.','Não.','Há riscos.']},
      {prompt:'Como provar que o exame foi completo?',options:['Fotografar válvula ileocecal, óstio apendicular e confluência das tênias','A percepção do examinador basta','Ausência de pregas','Transiluminação'],correct:0,competencies:['diferencial'],
        explain:['Marcos do ceco registrados.','Não basta.','Não.','Não é suficiente.']}
    ],
    final:{prompt:'Conclusão:',options:['PSOF+ investigada com colonoscopia; pólipo pediculado removido por polipectomia com histologia','Falso-positivo; repetir PSOF','Sangramento alto; EDA','Câncer confirmado pela PSOF'],correct:0,
      keyPrompt:'Por que a colonoscopia é preventiva?',keyOptions:['Remove adenomas antes que virem câncer','Trata a anemia','Esvazia o cólon','Substitui a histologia'],keyCorrect:0,competencies:['clinica','visual','diferencial']},
    debrief:{diagnosis:'Pólipo pediculado em colonoscopia por PSOF positiva',evidence:['**PSOF positiva** não confirma câncer, mas exige investigação.','Cerca de **metade** desses pacientes tem lesão neoplásica.','Achado: **pólipo pediculado**.','**Polipectomia + histologia**; sangramento é a complicação mais associada.'],
      clinic:'Documentar o ceco (marcos fotografados) e examinar com atenção na retirada.',
      revisar:{conceitual:'Por que olhar o cólon por dentro (p. 31–32)',visual:'Pólipos e polipectomia (p. 39–40)',diferencial:'Como saber que chegou ao ceco (p. 36)',clinica:'Quando indicar (p. 33)',fisiopatologia:'Pólipos e polipectomia (p. 39–40)'}}
  },
  mastery:[
    {id:'i5q1',image:'bank:rad_q30_0.jpg',q:'Colonoscopia de rastreamento de mulher de 60 anos mostra esta lesão. Conduta:',ops:['Observar e repetir em cinco anos','Polipectomia com análise histológica; o sangramento é a complicação mais associada','Cirurgia aberta','Biopsiar apenas a mucosa adjacente'],a:1,why:'RAD-30: a remoção interrompe a sequência adenoma–carcinoma.',c:['visual','clinica']},
    {id:'i5q2',image:'bank:rad_q31_0.jpg',q:'Ao final da progressão, o examinador registra ICV, AO e CF. São:',ops:['Cólon transverso, ângulo hepático e descendente','Válvula ileocecal, óstio apendicular e confluência das tênias: confirmam o ceco e devem ser fotografados','Retossigmoide, óstio apendicular e flexura hepática','Íleo terminal, ânus e flexura esplênica'],a:1,why:'RAD-31.',c:['visual','conceitual']},
    {id:'i5q3',q:'Colonoscopia por anemia ferropriva: muito resíduo sólido no cólon direito e ceco não alcançado. O paciente almoçou na véspera e tomou metade do laxativo. Correto:',ops:['Exame completo, pois o esquerdo foi visto','Preparo inadequado é a causa mais comum de exame incompleto; repetir com preparo correto','A culpa é da sedação','Resíduo não atrapalha, o aparelho aspira tudo'],a:1,why:'RAD-32.',c:['clinica','conceitual']},
    {id:'i5q4',q:'Depois de polipectomia, qual quadro exige avaliação imediata com imagem?',ops:['Cólicas leves e gases','Dor intensa e progressiva, abdome rígido, febre e vômitos','Sonolência na primeira hora','Evacuação clara'],a:1,why:'RAD-33: sinais de alarme de perfuração ou hemorragia.',c:['clinica','fisiopatologia']},
    {id:'i5q5',image:'bank:rad_q34_0.jpg',q:'Rapaz de 24 anos com diarreia crônica, dor em FID, fístula perianal; úlceras alternadas com mucosa preservada. Sugere:',ops:['Retocolite ulcerativa','Doença de Crohn; a colonoscopia permite biópsias diferenciais','Crohn, mas a biópsia não tem papel','Exame na colite fulminante'],a:1,why:'RAD-34: lesões salteadas e doença perianal; RCU é contínua.',c:['visual','diferencial']},
    {id:'i5q6',image:'bank:rad_q35_0.jpg',q:'Homem de 70 anos com colonoscopia marcada, internado com diverticulite aguda e IAM há seis semanas. Correto:',ops:['Sem contraindicações; decúbito lateral direito','Só a diverticulite contraindica','Só o IAM contraindica','Ambos contraindicam; quando indicado, decúbito lateral esquerdo com sedação e monitorização de sinais vitais e saturação'],a:3,why:'RAD-35.',c:['clinica','conceitual']}
  ]
};

/* ===== Imagem 06 · Colecistolitíase e colecistite aguda (apostila de Radiologia p. 42–45; RAD-16, 41 a 45) ===== */
PM_MISSOES.push({
  id:'img06', area:'img', num:'06', titulo:'Cálculos biliares e colecistite',
  sub:'Tipos de cálculo, radiografia, USG padrão-ouro, limites da TC e colecistite aguda',
  pags:'42–45', ligados:['img08','lab06'],
  questoes:['RAD-16','RAD-41','RAD-42','RAD-43','RAD-44','RAD-45'],
  etapas:[
  { t:'texto', titulo:'Nomes que caem em prova', p:'42', img:'r042_232', leg:'Os três tipos de cálculo e seus fatores associados.',
    corpo:[
      '**Colelitíase:** cálculo em **qualquer ponto** do sistema biliar.',
      '**Colecistolitíase:** cálculo **na vesícula**. **Coledocolitíase:** cálculo **nos ductos** biliares.',
      'Tipos: **colesterol** (10%, > 50% de colesterol, bile supersaturada); **mistos** (**80%**, 20–50% de colesterol, os **mais frequentes**); **pigmentares** (10%, < 20% de colesterol, ligados à **bilirrubina não conjugada**).'
    ],
    destaque:'A composição importa para a imagem: **nem todo cálculo aparece em todos os métodos**.'
  },
  { t:'abas', titulo:'Radiografia simples', p:'42–43',
    abas:[
      { rot:'Onde olhar', img:'a_r042_233', leg:'Vesícula: abaixo do fígado, no quadrante superior direito.',
        itens:['A vesícula fica **abaixo do fígado**, no **quadrante superior direito**.','Quando aparecem, os cálculos são **opacidades calcificadas** nessa região.'] },
      { rot:'Pouco sensível', img:'a_r042_234', leg:'Opacidade na região da vesícula (contorno azul).',
        itens:['Só **uma parte** dos cálculos é visível: muitos **não têm cálcio** suficiente para contrastar com os tecidos.','Radiografia **normal não exclui** colelitíase.'] },
      { rot:'Laminados', img:'a_r043_238', leg:'Cálculos laminados (contorno).',
        itens:['Contorno **radiopaco** com centro **radiolucente**: imagem parecida com um **anel**.'] }
    ]
  },
  { t:'explorar', titulo:'USG: o padrão-ouro', p:'43', img:'r043_239', ann:'a_r043_239',
    intro:'Vesícula biliar no ultrassom. Toque nos números.',
    pts:[
      { x:57, y:63, nome:'Foco hiperecogênico', txt:'Achado característico: foco **brilhante** (mais claro) no **interior** do lúmen vesicular.' },
      { x:57, y:86, nome:'Sombra acústica posterior', txt:'Faixa **escura** atrás do foco: o cálculo **bloqueia** a passagem do feixe de ultrassom.' }
    ],
    destaque:'Bile = **anecoica** (preta). Cálculo = **hiperecogênico** com **sombra acústica posterior**. Exame **sem contraste** e sem radiação.'
  },
  { t:'texto', titulo:'A pista da mobilidade', p:'43', img:'r043_240', leg:'Ao mudar a posição do paciente, o cálculo rola dentro da vesícula.',
    corpo:[
      'Ao mudar a **posição do paciente**, o cálculo pode **rolar** e mudar de lugar dentro da vesícula.',
      'Foco ecogênico + **sombra acústica** + **mobilidade** = **muito sugestivo** de cálculo biliar.'
    ]
  },
  { t:'abas', titulo:'Tomografia: cuidado', p:'44–45',
    intro:'A TC tem **limitações** para cálculos: a visibilidade depende da **composição** e da **diferença de atenuação** entre cálculo e bile.',
    abas:[
      { rot:'Calcificados', img:'a_r044_245', leg:'Cálculos calcificados: hiperatenuantes.',
        itens:['**Hiperatenuantes** (mais brancos) em relação à bile: o tipo **claramente visto** na TC.'] },
      { rot:'Colesterol', img:'a_r044_247', leg:'Cálculo hipoatenuante (círculo amarelo).',
        itens:['Cálculos de **colesterol** são **hipoatenuantes**: aparecem **mais escuros** que a bile.'] },
      { rot:'Isodensos', img:'a_r045_250', leg:'Cálculo isodenso que quase não se destaca.',
        itens:['Alguns são **isodensos**: atenuação **semelhante à bile**, e **não se destacam**.','Por isso, **TC sem cálculo não exclui** colecistolitíase; ela **não substitui** o USG.'] }
    ]
  },
  { t:'tabela', titulo:'Qual método vê o cálculo?', p:'42–45',
    cols:['O que mostra','Limite'],
    linhas:[
      ['Radiografia','Só cálculos com **cálcio** suficiente','Normal **não exclui**'],
      ['USG','Foco hiperecogênico, **sombra acústica**, **mobilidade**; também parede e vias biliares','É o **padrão-ouro** e o **exame inicial**'],
      ['TC','Calcificados (hiperatenuantes)','Colesterol hipoatenuante e isodensos podem **passar despercebidos**']
    ]
  },
  { t:'texto', titulo:'Colecistite aguda', p:'45',
    corpo:[
      'Inflamação da vesícula: uma das principais **complicações** da colelitíase; ocorre em até **10%** dos pacientes com cálculos sintomáticos.',
      'Em cerca de **90%** decorre da **obstrução completa do ducto cístico**, geralmente por cálculo **impactado no colo** da vesícula ou no próprio ducto.',
      'A bile não drena → **pressão intravesicular** sobe → **inflamação da parede**.'
    ]
  },
  { t:'explorar', titulo:'Colecistite no USG', p:'45', img:'r045_251', ann:'a_r045_251',
    intro:'Ultrassom de vesícula inflamada. Toque nos números.',
    pts:[
      { x:33, y:61, nome:'Cálculo', txt:'Cálculo impactado, a causa da obstrução.' },
      { x:62, y:21, nome:'Espessamento da parede', txt:'Parede vesicular **espessada**.' },
      { x:62, y:55, nome:'Distensão vesicular', txt:'Vesícula **distendida** pela bile que não drena.' }
    ],
    destaque:'Também pode haver **líquido ao redor** e **densificação da gordura**, que aparece como estriações. Se a dor típica é reproduzida ao pressionar a vesícula com o transdutor: **Murphy ultrassonográfico positivo**.'
  },
  { t:'checar', titulo:'Confira o entendimento', p:'44–45',
    perg:'Mulher com dor em hipocôndrio direito e Murphy positivo. A TC feita no PS não mostra cálculos. O que fazer?',
    dica:'Que tipos de cálculo a TC pode não ver?',
    ops:[
      { t:'Colelitíase excluída', por:'Cálculos de colesterol e isodensos podem não aparecer na TC.' },
      { t:'Fazer USG de abdome superior, o exame inicial e padrão-ouro', por:'RAD-16 e RAD-43.', certa:true },
      { t:'Pedir radiografia simples para confirmar', por:'A radiografia é ainda menos sensível.' }
    ]
  },
  { t:'resumo', titulo:'O que levar desta missão',
    itens:[
      'Colelitíase = qualquer ponto; colecistolitíase = vesícula; coledocolitíase = ductos. **Mistos (80%)** são os mais comuns.',
      'Radiografia vê só cálculos com cálcio: **normal não exclui**. Laminados = **anel**.',
      '**USG = padrão-ouro e exame inicial:** foco hiperecogênico + **sombra acústica** + **mobilidade**.',
      'TC: calcificados hiperatenuantes; **colesterol hipoatenuante**, alguns **isodensos** → TC normal **não exclui**.',
      'Colecistite: ~90% por **obstrução do cístico**; USG com cálculo, **parede espessada**, distensão, líquido, **Murphy ultrassonográfico**.'
    ]
  }
  ]
});
PM_CASES.img06 = {
  investigation:{
    title:'Investigação · Dor no hipocôndrio direito com febre',
    fonte:'Caso da questão RAD-44 do banco de Radiologia.',
    patient:{age:52,sex:'Feminino',complaint:'Dor contínua em hipocôndrio direito há 18 horas',history:'Procurou o pronto-socorro.'},
    evidence:[
      {id:'dor',label:'Dor',relevance:2,text:'**Contínua** há 18 horas, no hipocôndrio direito.',feedback:'Dor que não cede sugere inflamação, não só cólica biliar.'},
      {id:'febre',label:'Temperatura',relevance:2,text:'**38,3 °C.**',feedback:'Febre reforça inflamação.'},
      {id:'murphy',label:'Exame físico',relevance:2,text:'**Sinal de Murphy positivo.**',feedback:'Aponta para a vesícula.'},
      {id:'urina',label:'Urina',relevance:0,text:'Sem queixas urinárias.',feedback:'Não aponta para o rim.'}
    ],
    hypothesis:{prompt:'Hipótese principal:',options:['Colecistite aguda','Apendicite','Pancreatite aguda','Pielonefrite'],correct:0,
      feedback:['Dor contínua em hipocôndrio direito, febre e Murphy positivo.','A dor seria em fossa ilíaca direita.','A dor típica é epigástrica, em barra.','Não há sintomas urinários.']},
    microscopy:{image:'bank:rad_q44_0.jpg',prompt:'Ultrassonografia da vesícula. O que ela mostra?',options:['Vesícula normal','Cálculo impactado e parede vesicular espessada','Apenas lama biliar, sem inflamação','Pólipo de vesícula'],correct:1,hint:'Olhe a espessura da parede e o foco com sombra.',competencies:['visual','conceitual']},
    differential:[
      {prompt:'Qual o mecanismo da colecistite aguda na maioria dos casos?',options:['Obstrução completa do ducto cístico por cálculo','Infecção viral da vesícula','Refluxo pancreático','Isquemia mesentérica'],correct:0,competencies:['fisiopatologia'],
        explain:['Cerca de 90%: cálculo no colo ou no cístico.','Não é o mecanismo descrito.','Não.','Não.']},
      {prompt:'Por que começar pelo USG, e não pela TC?',options:['A TC pode não ver cálculos de colesterol ou isodensos; o USG é o padrão-ouro','A TC é sempre melhor','O USG precisa de contraste','Tanto faz'],correct:0,competencies:['clinica'],
        explain:['RAD-16 e RAD-43.','Não para cálculo.','O USG dispensa contraste.','Não.']},
      {prompt:'Que manobra no USG reforça o diagnóstico?',options:['Pressionar a vesícula com o transdutor e reproduzir a dor: Murphy ultrassonográfico','Pedir para o paciente correr','Fazer o paciente prender a respiração','Usar contraste'],correct:0,competencies:['diferencial'],
        explain:['É o sinal descrito na apostila.','Não.','Não é a manobra.','Não.']}
    ],
    final:{prompt:'Conclusão:',options:['Colecistite aguda calculosa','Cólica biliar sem inflamação','Coledocolitíase','Vesícula normal'],correct:0,
      keyPrompt:'Achado-chave na imagem:',keyOptions:['Parede espessada com cálculo impactado','Sombra acústica isolada','Pneumoperitônio','Fígado nodular'],keyCorrect:0,competencies:['clinica','visual','diferencial']},
    debrief:{diagnosis:'Colecistite aguda calculosa',evidence:['Dor **contínua**, **febre** e **Murphy** positivo.','USG: **cálculo impactado** e **parede espessada**.','Mecanismo: **obstrução completa do cístico** (~90%).'],
      clinic:'O USG é o exame inicial: vê cálculos, parede e vias biliares, sem contraste e sem radiação.',
      revisar:{conceitual:'USG: o padrão-ouro (p. 43)',visual:'Colecistite no USG (p. 45)',diferencial:'Colecistite no USG (p. 45)',clinica:'Qual método vê o cálculo? (quadro)',fisiopatologia:'Colecistite aguda (p. 45)'}}
  },
  mastery:[
    {id:'i6q1',q:'Mulher de 42 anos com dor em hipocôndrio direito, náuseas e Murphy positivo. Exame inicial:',ops:['TC com contraste','USG de abdome superior, sem contraste: cálculos, parede e vias biliares','Radiografia simples','Colonoscopia'],a:1,why:'RAD-16: a TC pode não detectar cálculos de atenuação semelhante à da bile.',c:['clinica','conceitual']},
    {id:'i6q2',image:'bank:rad_q41_0.jpg',q:'Mulher obesa e multípara com dor pós-prandial em hipocôndrio direito; radiografia simples. Correto:',ops:['A radiografia mostra cálculos com cálcio, mas muitos não são visíveis; normal não exclui, e o USG é o padrão-ouro','Radiografia normal exclui colelitíase','Todos os cálculos são radiopacos','A radiografia é o padrão-ouro'],a:0,why:'RAD-41.',c:['visual','conceitual']},
    {id:'i6q3',image:'bank:rad_q42_0.jpg',q:'Exame padrão-ouro para a suspeita. O que ele mostra?',ops:['TC com cálculos hiperatenuantes','USG com focos ecogênicos e sombra acústica posterior: cálculos, sem precisar de contraste','Radiografia com anel','Ressonância'],a:1,why:'RAD-42.',c:['visual','conceitual']},
    {id:'i6q4',image:'bank:rad_q43_0.jpg',q:'TC mostra cálculo na vesícula. O residente diz que TC sem cálculo excluiria colelitíase. Ele está:',ops:['Certo','Errado: cálculos de colesterol são hipoatenuantes e outros isodensos; a TC não substitui o USG','Certo, se a TC for com contraste','Errado, porque a TC não vê a vesícula'],a:1,why:'RAD-43.',c:['visual','diferencial']},
    {id:'i6q5',image:'r043_240',q:'O examinador muda o paciente de posição e o foco ecogênico se desloca dentro da vesícula. Isso indica:',ops:['Pólipo fixo','Cálculo móvel: foco ecogênico + sombra + mobilidade é muito sugestivo de cálculo','Artefato','Espessamento de parede'],a:1,why:'Apostila, p. 43.',c:['visual','diferencial']},
    {id:'i6q6',q:'Sobre a nomenclatura dos cálculos:',ops:['Colecistolitíase é cálculo nos ductos','Os pigmentares são os mais comuns','Colelitíase é qualquer ponto; colecistolitíase, na vesícula; coledocolitíase, nos ductos; mistos são os mais frequentes','Coledocolitíase é cálculo na vesícula'],a:2,why:'RAD-45.',c:['conceitual']}
  ]
};

/* ===== Imagem 07 · Cirrose, hipertensão portal e CHC (apostila de Radiologia p. 46–53; RAD-46 a 53) ===== */
PM_MISSOES.push({
  id:'img07', area:'img', num:'07', titulo:'Cirrose e hipertensão portal',
  sub:'Fígado cirrótico na TC e no USG, elastografia, Doppler portal, LI-RADS e realce do CHC',
  pags:'46–53', ligados:['lab06'],
  questoes:['RAD-46','RAD-47','RAD-48','RAD-49','RAD-50','RAD-51','RAD-52','RAD-53'],
  etapas:[
  { t:'texto', titulo:'O que é a cirrose', p:'46',
    corpo:[
      'Estágio **avançado** de diferentes doenças hepáticas crônicas que lesam e necrosam hepatócitos.',
      'Três características comuns: **fibrose** (tecido cicatricial), **regeneração nodular** e **distorção da arquitetura**.',
      'Essas alterações mudam o parênquima **e a circulação intra-hepática**.'
    ],
    destaque:'USG, TC e RM ajudam no diagnóstico e nas complicações, mas a imagem, **isoladamente, não define a etiologia** (viral, alcoólica etc.).'
  },
  { t:'abas', titulo:'Cirrose na TC', p:'46–47',
    abas:[
      { rot:'Normal', img:'a_r046_255', leg:'Fígado normal (contorno vermelho).',
        itens:['Contornos **lisos** e parênquima **homogêneo**.'] },
      { rot:'Cirrótico', img:'a_r046_256', leg:'Fígado cirrótico (contorno azul).',
        itens:['Margens **irregulares** e superfície **nodular**.','Parênquima **não uniforme**, pela distribuição desigual da fibrose e dos nódulos regenerativos.'] },
      { rot:'Coronal', img:'a_r046_257', leg:'Fígado (roxo) e baço aumentado (azul).',
        itens:['Margens irregulares e parênquima nodular.','Além das alterações hepáticas, pode haver **esplenomegalia**.','Nódulos: **regenerativos** (maioria) são **isodensos**; **sideróticos** (minoria) são **hiperdensos**.'] },
      { rot:'Contraste', img:'r047_260', leg:'Pré e pós-contraste intravenoso.',
        itens:['O fígado cirrótico é **heterogêneo** tanto **antes** quanto **depois** do contraste.'] },
      { rot:'Ascite', img:'a_r047_261', leg:'Ascite contornando o fígado cirrótico; hidrotórax.',
        itens:['A cirrose pode levar à **ascite** como complicação.'] }
    ]
  },
  { t:'abas', titulo:'Cirrose no USG', p:'47–48',
    abas:[
      { rot:'Normal', img:'a_r047_263', leg:'Fígado fisiológico.',
        itens:['Parênquima **homogêneo** e contorno **regular**.'] },
      { rot:'Cirrótico', img:'r047_264', leg:'Fígado cirrótico.',
        itens:['Superfície **irregular** e ecos **desiguais**: aspecto **grosseiro**.'] },
      { rot:'Ecotextura', img:'a_r048_267', leg:'Ecotextura grosseira e heterogênea, com nódulos.',
        itens:['Ecotextura global **grosseira e heterogênea**.','**Nodularidade** da superfície.','Medida morfológica: razão **lobo caudado / lobo direito > 0,65** sugere cirrose.'] },
      { rot:'Baço', img:'a_r048_268', leg:'Medida do baço.',
        itens:['Também é possível avaliar a **esplenomegalia**.','USG: sem radiação, avalia ainda **ascite** e, com Doppler, o **fluxo portal**, sem contraste.'] }
    ]
  },
  { t:'texto', titulo:'Elastografia', p:'48', img:'r048_269', leg:'Elastografia hepática por ultrassonografia.',
    corpo:[
      'Mede a **rigidez** do fígado para estimar a quantidade de **fibrose**.',
      '**> 7 kPa:** fibrose avançada.',
      '**12,5–15 kPa:** cirrose.'
    ]
  },
  { t:'sequencia', titulo:'Como surge a hipertensão portal', p:'49',
    passos:[
      { h:'Fibrose e distorção', txt:'A arquitetura alterada aumenta a **resistência** à passagem do sangue pelo fígado.' },
      { h:'Pressão portal sobe', txt:'Hipertensão portal: **HVPG > 5 mmHg**.' },
      { h:'O sangue procura desvios', txt:'Dilatação de veias do sistema portal e **circulação colateral**.' },
      { h:'Repercussões', txt:'**Esplenomegalia** e **ascite**: sinais de doença hepática crônica visíveis na imagem.' }
    ]
  },
  { t:'abas', titulo:'Hipertensão portal na TC', p:'49–50',
    abas:[
      { rot:'Baço e ascite', img:'a_r049_272', leg:'Esplenomegalia (verde) e ascite (rosa).',
        itens:['**Esplenomegalia** é um dos sinais.','Além das alterações vasculares, a **ascite** também aparece.'] },
      { rot:'Veia porta', img:'r049_273', leg:'Veia porta normal × dilatada na cirrose.',
        itens:['Veia porta **dilatada**, maior do que o esperado.','Também dilatam as veias **esplênica** e **mesentérica superior**.'] },
      { rot:'Colaterais', img:'a_r050_276', leg:'Colaterais dilatadas (azul).',
        itens:['Veias **colaterais dilatadas** nas regiões **peripancreática** e **periesplênica**: vias de desvio do sangue portal para a circulação sistêmica.'] },
      { rot:'Coronal', img:'a_r050_278', leg:'Varizes (vermelho) no corte coronal.',
        itens:['Vasos colaterais tortuosos e dilatados.'] }
    ]
  },
  { t:'tabela', titulo:'Doppler na hipertensão portal', p:'51', img:'r051_281', leg:'Doppler: colaterais peripancreáticas e periesplênicas dilatadas.',
    cols:['Alteração indicada'],
    linhas:[
      ['Veia porta','Diâmetro **> 13 mm**'],
      ['Velocidade do fluxo portal','**< 15 cm/s**'],
      ['Direção do fluxo','Possível **reversão**: de **hepatopetal** (para o fígado) a **hepatofugal** (afastando-se)'],
      ['V. mesentérica superior e esplênica','Diâmetro **> 10 mm**'],
      ['V. paraumbilical','**Recanalizada**, dilatada, com fluxo hepatofugal'],
      ['Colaterais','Vasos portossistêmicos dilatados'],
      ['Também','**Esplenomegalia** e **ascite**']
    ]
  },
  { t:'checar', titulo:'Confira o entendimento', p:'51',
    perg:'Qual o achado mais importante do Doppler na hipertensão portal avançada?',
    dica:'Pense na direção do sangue da veia porta.',
    ops:[
      { t:'Fluxo hepatopetal', por:'Esse é o normal.' },
      { t:'Inversão do fluxo, que passa a ser hepatofugal', por:'Apostila p. 51 e RAD-50.', certa:true },
      { t:'Veia porta de 8 mm', por:'Na hipertensão portal ela dilata (> 13 mm).' }
    ]
  },
  { t:'texto', titulo:'Nódulo no cirrótico', p:'52',
    corpo:[
      'O cirrótico tem **maior risco de carcinoma hepatocelular (CHC)**.',
      'Possibilidades: **nódulo regenerativo** (da regeneração), **nódulo displásico** (etapa intermediária) e **pequeno CHC**.',
      'A aparência sozinha não define malignidade: o que importa é o **padrão de realce** com contraste.'
    ]
  },
  { t:'abas', titulo:'O realce do CHC', p:'52–53',
    abas:[
      { rot:'3 fases', img:'r053_287', leg:'Fase arterial tardia, venosa portal e tardia.',
        itens:['**Arterial tardia** (~35 s): **hiperrealce arterial**, mais brilhante que o fígado.','**Venosa portal**: perde o contraste mais rápido que o parênquima: **washout** (lavagem), fica mais escuro.','**Tardia**: a diferença pode ficar ainda mais evidente.'] },
      { rot:'O que conta', img:'r053_287', leg:'Procure a mesma lesão nas diferentes fases.',
        itens:['**Hiperrealce arterial seguido de washout** favorece CHC em pacientes de risco.','É a **mudança temporal** do realce, e não só a presença de um nódulo, que torna o achado relevante.','Exame que mostra isso: **TC (ou RM) com contraste**, em várias fases.'] },
      { rot:'LI-RADS', img:'r052_284', leg:'Categorias LI-RADS e condutas.',
        itens:['Usado em pacientes com **cirrose** ou **hepatite B crônica** (risco de CHC).','Vai de **LR-1** (favorece benignidade) a **LR-5** (favorece fortemente CHC). Há também LR-M e LR-TIV.','Não é avaliação de cor ou tamanho isolados: combina **características, tamanho, realce e contexto clínico**.'] }
    ]
  },
  { t:'checar', titulo:'Confira o entendimento', p:'52–53',
    perg:'Cirrótica com nódulo sólido, irregular, com lavagem rápida do contraste. Que exame mostrou isso?',
    dica:'"Lavagem do contraste" depende de quê?',
    ops:[
      { t:'USG sem contraste', por:'Sem contraste não há fases de realce.' },
      { t:'TC com contraste', por:'RAD-46: washout é avaliado nas fases após contraste.', certa:true },
      { t:'Radiografia simples', por:'Não avalia nódulo hepático.' }
    ]
  },
  { t:'resumo', titulo:'O que levar desta missão',
    itens:[
      'Cirrose = **fibrose + nódulos regenerativos + distorção**. Imagem **não define a etiologia**.',
      'TC/USG: contorno **irregular**, superfície **nodular**, parênquima **heterogêneo**, caudado/direito **> 0,65**, esplenomegalia, ascite.',
      'Elastografia: **> 7 kPa** fibrose avançada; **12,5–15 kPa** cirrose.',
      'Hipertensão portal (HVPG > 5): porta **> 13 mm**, fluxo **< 15 cm/s**, **hepatofugal**, colaterais, paraumbilical recanalizada, baço grande, ascite.',
      'CHC: **hiperrealce arterial + washout**. LI-RADS (cirrose/HBV): **LR-5** favorece fortemente CHC.'
    ]
  }
  ]
});
PM_CASES.img07 = {
  investigation:{
    title:'Investigação · Etilista com barriga crescendo',
    fonte:'Caso da questão RAD-47 do banco de Radiologia.',
    patient:{age:61,sex:'Masculino',complaint:'Distensão abdominal',history:'Etilista há 30 anos.'},
    evidence:[
      {id:'alc',label:'Hábitos',relevance:2,text:'**Etilismo** há 30 anos.',feedback:'Causa clássica de doença hepática crônica.'},
      {id:'dist',label:'Abdome',relevance:2,text:'**Distensão** abdominal.',feedback:'Pode ser ascite, complicação da cirrose.'},
      {id:'dor',label:'Dor',relevance:0,text:'Sem dor aguda.',feedback:'Não é um abdome agudo.'},
      {id:'tc',label:'Exame pedido',relevance:1,text:'TC de abdome com contraste.',feedback:'Avalia fígado, baço, vasos e líquido.'}
    ],
    hypothesis:{prompt:'Hipótese:',options:['Cirrose com hipertensão portal','Obstrução intestinal','Pancreatite aguda','Colecistite'],correct:0,
      feedback:['Etilismo prolongado e distensão: pensar em cirrose e ascite.','Faltam cólica, vômitos e parada de eliminação.','Faltaria dor em barra.','Faltaria dor e Murphy.']},
    microscopy:{image:'bank:rad_q47_0.jpg',prompt:'TC com contraste. O que você vê?',options:['Fígado normal','Contorno hepático irregular, fígado reduzido e esplenomegalia','Cálculos na vesícula','Pneumoperitônio'],correct:1,hint:'Compare o contorno do fígado e o tamanho do baço.',competencies:['visual','conceitual']},
    differential:[
      {prompt:'A TC permite afirmar que a cirrose é alcoólica?',options:['Não: a imagem isoladamente não define a etiologia','Sim, pelo tamanho do fígado','Sim, pela esplenomegalia','Sim, pelo contraste'],correct:0,competencies:['diferencial'],
        explain:['RAD-47; a história é que aponta o álcool.','Não.','Não.','Não.']},
      {prompt:'Por que o baço aumenta?',options:['Hipertensão portal: a resistência no fígado congestiona o sistema portal','Infecção','Neoplasia','Não tem relação'],correct:0,competencies:['fisiopatologia'],
        explain:['Fibrose → resistência → pressão portal → baço e colaterais.','Não é o mecanismo.','Não.','Tem relação.']},
      {prompt:'Que exame sem radiação avalia ainda o fluxo portal?',options:['USG com Doppler','Radiografia','Cintilografia','Colonoscopia'],correct:0,competencies:['clinica'],
        explain:['Mede calibre, velocidade e direção do fluxo.','Não.','Não citado.','Não.']}
    ],
    final:{prompt:'Conclusão:',options:['Cirrose com sinais de hipertensão portal; etiologia definida pela clínica, não pela imagem','Cirrose alcoólica confirmada pela TC','Fígado normal','Obstrução intestinal'],correct:0,
      keyPrompt:'Achado-chave:',keyOptions:['Contorno irregular com esplenomegalia','Gás livre','Cálculo','Alça dilatada'],keyCorrect:0,competencies:['clinica','visual','diferencial']},
    debrief:{diagnosis:'Cirrose hepática com sinais de hipertensão portal',evidence:['**Etilismo** prolongado e **distensão** abdominal.','TC: contorno **irregular**, fígado **reduzido**, **esplenomegalia**.','A imagem **não define a etiologia**.'],
      clinic:'Procurar ascite, colaterais e dilatação portal; Doppler para o fluxo; vigiar nódulos (risco de CHC).',
      revisar:{conceitual:'O que é a cirrose (p. 46)',visual:'Cirrose na TC (p. 46–47)',diferencial:'O que é a cirrose (p. 46)',clinica:'Doppler na hipertensão portal (p. 51)',fisiopatologia:'Como surge a hipertensão portal (p. 49)'}}
  },
  mastery:[
    {id:'i7q1',image:'bank:rad_q48_0.jpg',q:'Mulher com hepatite C crônica faz USG de acompanhamento. Correto:',ops:['Fígado normal','Superfície nodular e parênquima heterogêneo sugerem cirrose; o USG também avalia baço, ascite e fluxo portal, sem contraste','O USG precisa de contraste para ver cirrose','O USG define a etiologia viral'],a:1,why:'RAD-48.',c:['visual','conceitual']},
    {id:'i7q2',image:'bank:rad_q49_0.jpg',q:'Elastografia com 14 kPa. Interpretação:',ops:['Normal','Esteatose','Compatível com cirrose (12,5–15 kPa); acima de 7 kPa já é fibrose avançada','Mede inflamação, não fibrose'],a:2,why:'RAD-49.',c:['conceitual','clinica']},
    {id:'i7q3',image:'bank:rad_q50_0.jpg',q:'Cirrótico com ascite e circulação colateral; Doppler. Esperado:',ops:['Porta > 13 mm, velocidade < 15 cm/s e possível fluxo hepatofugal','Porta < 8 mm e fluxo acelerado','Fluxo sempre hepatopetal','Doppler não ajuda'],a:0,why:'RAD-50.',c:['conceitual','fisiopatologia']},
    {id:'i7q4',image:'bank:rad_q51_0.jpg',q:'TC de cirrótico para estadiamento. Sinais de hipertensão portal:',ops:['Só nódulos','Esplenomegalia, dilatação da porta, colaterais e ascite','Vesícula espessada','Fígado aumentado e liso'],a:1,why:'RAD-51.',c:['visual','fisiopatologia']},
    {id:'i7q5',image:'bank:rad_q52_0.jpg',q:'TC trifásica de nódulo em cirrose por hepatite B. Comportamento que favorece CHC:',ops:['Escuro na arterial e brilhante na tardia','Igual ao fígado em todas as fases','Realça na arterial (1) e fica mais escuro nas fases venosa (2) e tardia (3): washout','Calcificado'],a:2,why:'RAD-52.',c:['visual','diferencial']},
    {id:'i7q6',q:'Nódulo LR-5 pelo LI-RADS em paciente com hepatite B crônica. Correto:',ops:['LR-5 favorece benignidade','LI-RADS só vale para cálculos','A categoria depende só da cor do nódulo','É usado na cirrose e na hepatite B crônica; LR-5 favorece fortemente CHC, pela combinação dos achados'],a:3,why:'RAD-53.',c:['conceitual','clinica']}
  ]
};

/* ===== Imagem 09 · Apendicite aguda (apostila de Radiologia p. 60–62; RAD-64 a 68) ===== */
PM_MISSOES.push({
  id:'img09', area:'img', num:'09', titulo:'Apendicite aguda na imagem',
  sub:'USG com compressão graduada, Doppler, sinais na TC e quando pedir cada exame',
  pags:'60–62', ligados:['img03','img04'],
  questoes:['RAD-64','RAD-65','RAD-66','RAD-67','RAD-68'],
  etapas:[
  { t:'texto', titulo:'Uma urgência cirúrgica frequente', p:'60',
    corpo:[
      'Inflamação do **apêndice vermiforme**: uma das causas mais comuns de abdome agudo com **cirurgia de urgência**.',
      'Mais frequente entre **20 e 30 anos**; incomum antes dos dois anos. **12–25%** da população fará apendicectomia na vida.',
      'Causa importante de abdome agudo na **gestação** (cerca de 1 a cada 700 gestações).'
    ],
    destaque:'O diagnóstico é **inicialmente clínico**. A imagem é fundamental para **confirmar**, sobretudo na apresentação **atípica** ou com exame físico **inconclusivo**.'
  },
  { t:'explorar', titulo:'O apêndice no USG', p:'60', img:'r060_315', ann:'a_r060_315',
    intro:'Corte longitudinal (esquerda) e transversal (direita). Toque nos números.',
    pts:[
      { x:22, y:38, nome:'Estrutura tubular em fundo cego', txt:'O apêndice aparece **tubular**, terminado em fundo cego, com **diâmetro aumentado**.' },
      { x:77, y:34, nome:'Corte transversal', txt:'No corte transversal, aspecto **circular**: a parede espessada forma um **anel** ao redor do lúmen.' },
      { x:76, y:50, nome:'Gordura ao redor', txt:'O tecido adiposo em volta fica **mais brilhante** que a gordura não inflamada: reação inflamatória adjacente.' }
    ],
    destaque:'A parede do apêndice fica **mais espessa** pelo **edema** inflamatório.'
  },
  { t:'abas', titulo:'Compressão e Doppler', p:'60–61',
    intro:'O ultrassom usa **compressão graduada**: pressão progressiva com o transdutor para afastar o gás e aproximar as estruturas.',
    abas:[
      { rot:'Não compressível', img:'a_r061_320', leg:'Mesmo com pressão, o apêndice não colaba (contorno laranja).',
        itens:['Apêndice **normal**: tende a ser **compressível**.','Na apendicite, edema e aumento do calibre fazem com que ele **não colabe**.','**Não compressibilidade** é um dos sinais mais importantes.'] },
      { rot:'Doppler', img:'a_r060_316', leg:'Fluxo aumentado na parede (verde).',
        itens:['O Doppler pode mostrar **maior fluxo** na parede inflamada: **hiperemia**.'] },
      { rot:'Vascularização', img:'a_r061_319', leg:'Aumento da vascularização.',
        itens:['**Aumento da vascularização** no corte transversal.'] }
    ]
  },
  { t:'explorar', titulo:'Apendicite na TC', p:'61', img:'r061_321', ann:'a_r061_321',
    intro:'Abaixo: apêndice dilatado, inflamação periapendicular e apendicolito. Toque nos números.',
    pts:[
      { x:17, y:75, nome:'Apêndice dilatado', txt:'Diâmetro **> 6 mm**; pode estar preenchido por líquido, gás ou conteúdo misto.' },
      { x:58, y:77, nome:'Fat stranding', txt:'A gordura ao redor fica com **estriações** e **atenuação aumentada**, menos homogênea: inflamação periapendicular.' },
      { x:89, y:81, nome:'Apendicolito', txt:'Foco **calcificado** dentro do apêndice (hiperatenuante); pode contribuir para a **obstrução** do lúmen.' }
    ],
    destaque:'A TC é o método **mais sensível e específico** entre os da aula, e também investiga **diferenciais e complicações**.'
  },
  { t:'texto', titulo:'Parede com realce', p:'62', img:'a_r062_324', leg:'Parede espessada com realce (vermelho) e apendicolito (verde).',
    corpo:[
      'Parede **espessada** e com **realce**: após o contraste IV, a parede inflamada fica mais evidente pela **hiperemia**.',
      'O **apendicolito** pode aparecer junto.'
    ]
  },
  { t:'exame', titulo:'Qual exame pedir?', p:'62',
    intro:'Para cada situação, escolha o exame mais adequado agora.',
    exames:['Ultrassonografia com compressão graduada','TC de abdome','Radiografia simples de abdome'],
    cenarios:[
      { sit:'**Gestante** de 22 semanas com dor em fossa ilíaca direita, febre baixa e náuseas.', certa:0,
        por:['**Primeira linha** quando possível, e especialmente indicada em **gestantes e crianças**: sem radiação ionizante.','Evita-se radiação quando o USG pode responder.','Papel limitado e inespecífico.'] },
      { sit:'Homem de 56 anos, **obeso**, dor em FID, exame físico **inconclusivo**; o USG **não visualizou o apêndice**.', certa:1,
        por:['Já foi tentado e foi inconclusivo; a obesidade dificulta.','USG inconclusivo, adulto, obesidade: TC, o método **mais sensível e específico**.','Não confirma apendicite.'] },
      { sit:'Estudante quer pedir só **radiografia** para confirmar apendicite em mulher de 25 anos.', certa:0,
        por:['O USG é a primeira linha; se inconclusivo, a TC.','Pode ser necessária depois, se houver dúvida.','Inadequado: a radiografia tem papel limitado, achados inespecíficos e **nenhum sinal isolado** confirma apendicite.'] }
    ],
    regra:'**USG**: primeira linha, crianças e gestantes; achado mais sugestivo = apêndice **espessado, dilatado e não compressível** com inflamação adjacente. **TC**: USG inconclusivo, dúvida persistente, adulto atípico, suspeita de **abscesso ou perfuração**, obesidade, diferenciais. **Radiografia**: não é método de escolha.'
  },
  { t:'tabela', titulo:'USG × TC na apendicite', p:'60–62',
    cols:['USG','TC'],
    linhas:[
      ['Quando','Primeira linha; crianças e gestantes','USG inconclusivo, adulto atípico, complicações, obesidade'],
      ['Sinais','Espessado, **não compressível**, Doppler com hiperemia','Diâmetro **> 6 mm**, **fat stranding**, apendicolito, realce da parede'],
      ['Vantagem','Sem radiação','**Mais sensível e específica**; vê diferenciais'],
      ['Limite','Depende do operador; difícil em obesos; nem sempre vê o apêndice','Radiação']
    ]
  },
  { t:'resumo', titulo:'O que levar desta missão',
    itens:[
      'Diagnóstico **clínico**; imagem para confirmar no quadro atípico ou inconclusivo.',
      'USG com **compressão graduada**: apêndice tubular, **não compressível**, parede espessa (anel no transversal), gordura brilhante, Doppler com **hiperemia**.',
      'TC: **> 6 mm**, **fat stranding**, **apendicolito**, realce da parede. Mais **sensível e específica**.',
      'USG primeiro (crianças, **gestantes**); TC se inconclusivo, obeso, atípico ou complicado. **Radiografia não confirma**.'
    ]
  }
  ]
});
PM_CASES.img09 = {
  investigation:{
    title:'Investigação · Dor em fossa ilíaca direita em adulto obeso',
    fonte:'Caso da questão RAD-66 do banco de Radiologia.',
    patient:{age:56,sex:'Masculino',complaint:'Dor abdominal há dois dias, agora na fossa ilíaca direita',history:'Obeso. A dor começou difusa e depois se localizou.'},
    evidence:[
      {id:'dor',label:'Evolução da dor',relevance:2,text:'Difusa, depois **localizada na fossa ilíaca direita**.',feedback:'Migração típica da apendicite.'},
      {id:'ef',label:'Exame físico',relevance:1,text:'**Inconclusivo.**',feedback:'Por isso a imagem é necessária.'},
      {id:'usg',label:'USG',relevance:2,text:'**Não conseguiu visualizar o apêndice.**',feedback:'USG inconclusivo, em obeso.'},
      {id:'urina',label:'Urina',relevance:0,text:'Sem queixas urinárias.',feedback:'Não muda a hipótese.'}
    ],
    hypothesis:{prompt:'Hipótese:',options:['Apendicite aguda','Colecistite','Pancreatite','Pielonefrite'],correct:0,
      feedback:['Dor que migra para a FID.','A dor seria no hipocôndrio direito.','A dor seria epigástrica em barra.','Sem sintomas urinários.']},
    microscopy:{image:'bank:rad_q66_0.jpg',prompt:'Tomografia. O que procurar?',options:['Apêndice dilatado com inflamação ao redor','Cálculo na vesícula','Ar livre subdiafragmático','Fígado nodular'],correct:0,hint:'Olhe a fossa ilíaca direita.',competencies:['visual','conceitual']},
    differential:[
      {prompt:'Por que a TC foi bem indicada?',options:['É a mais sensível e específica no adulto e útil quando o USG é inconclusivo ou há obesidade','Porque a TC é sempre o primeiro exame','Porque o USG é proibido em adultos','Não foi bem indicada'],correct:0,competencies:['clinica'],
        explain:['RAD-66.','O USG é a primeira linha quando possível.','Não.','Foi.']},
      {prompt:'Que diâmetro do apêndice sugere apendicite na TC?',options:['Maior que 6 mm','Menor que 3 mm','Maior que 3 cm','Qualquer um'],correct:0,competencies:['conceitual'],
        explain:['Critério da apostila.','Não.','Não é o critério.','Não.']},
      {prompt:'O que é o fat stranding?',options:['Estriações e aumento da atenuação da gordura ao redor do apêndice inflamado','Gás livre','Cálculo','Líquido na vesícula'],correct:0,competencies:['fisiopatologia'],
        explain:['Inflamação periapendicular.','Não.','Isso seria o apendicolito.','Não.']}
    ],
    final:{prompt:'Conclusão:',options:['Apendicite aguda confirmada pela TC, após USG inconclusivo em obeso','Radiografia bastaria','Colecistite','Normal'],correct:0,
      keyPrompt:'Por que não parar no USG?',keyOptions:['USG inconclusivo e obesidade dificultam a avaliação','O USG usa radiação','O USG é mais específico','Não existe USG para apêndice'],keyCorrect:0,competencies:['clinica','visual','diferencial']},
    debrief:{diagnosis:'Apendicite aguda em adulto obeso',evidence:['Dor que **migra** para a FID; exame físico **inconclusivo**.','**USG não viu o apêndice**; obesidade.','TC: **mais sensível e específica**, também avalia complicações.'],
      clinic:'Na TC: apêndice > 6 mm, fat stranding, apendicolito e realce da parede.',
      revisar:{conceitual:'Apendicite na TC (p. 61)',visual:'Apendicite na TC (p. 61)',diferencial:'USG × TC (quadro)',clinica:'Qual exame pedir? (p. 62)',fisiopatologia:'Apendicite na TC (p. 61)'}}
  },
  mastery:[
    {id:'i9q1',q:'Homem de 34 anos com dor migratória para o QID, febre, defesa e Blumberg positivo. Método a priorizar e achado esperado:',ops:['Radiografia com nível hidroaéreo','TC sem nada a ver','USG com compressão graduada mostrando apêndice não compressível e espessado','Colonoscopia'],a:2,why:'RAD-64.',c:['clinica','conceitual']},
    {id:'i9q2',image:'bank:rad_q65_0.jpg',q:'Gestante de 22 semanas com dor em FID; USG com compressão e Doppler. Correto:',ops:['O USG foi escolhido por não usar radiação; apêndice espessado, não compressível, com fluxo aumentado: apendicite','O USG é contraindicado na gestação','Fluxo aumentado exclui apendicite','Deveria ter sido TC primeiro'],a:0,why:'RAD-65.',c:['visual','clinica']},
    {id:'i9q3',q:'Limitações da ultrassonografia na apendicite do adulto:',ops:['Usa radiação','É mais sensível que a TC','Não é primeira linha','Depende do operador, é difícil em obesos, nem sempre vê o apêndice e é menos sensível que a TC'],a:3,why:'RAD-67.',c:['conceitual','diferencial']},
    {id:'i9q4',q:'Pedir só radiografia simples para confirmar apendicite em mulher de 25 anos é:',ops:['Adequado, é o padrão-ouro','Inadequado: papel limitado, achados inespecíficos e nenhum sinal isolado confirma','Adequado se houver febre','Obrigatório antes do USG'],a:1,why:'RAD-68.',c:['clinica']},
    {id:'i9q5',image:'a_r061_320',q:'O examinador aplica pressão com o transdutor e a estrutura marcada não colaba. Significado:',ops:['Apêndice normal','Artefato de gás','Não compressibilidade: um dos sinais mais importantes de apendicite','Cálculo biliar'],a:2,why:'Apostila, p. 61.',c:['visual','fisiopatologia']},
    {id:'i9q6',image:'r062_324',q:'TC: parede do apêndice espessada, com realce após contraste, e foco calcificado no lúmen. Correto:',ops:['O realce vem da hiperemia inflamatória; o foco calcificado é um apendicolito, que pode obstruir o lúmen','Realce exclui inflamação','O foco é gás','A TC não vê o apêndice'],a:0,why:'Apostila, p. 61–62.',c:['visual','conceitual']}
  ]
};

/* ===== Imagem 10 · Sistema urinário (apostila de Radiologia p. 63–79; RAD-69 a 84) ===== */
PM_MISSOES.push({
  id:'img10', area:'img', num:'10', titulo:'Sistema urinário na imagem',
  sub:'Radiografia, exames contrastados, USG, fases da TC, litíase, hidronefrose, pielonefrite, trauma e RM',
  pags:'63–79', ligados:['lab07','lab08','img11'],
  questoes:['RAD-69','RAD-70','RAD-71','RAD-72','RAD-73','RAD-74','RAD-75','RAD-76','RAD-77','RAD-78','RAD-79','RAD-80','RAD-81','RAD-82','RAD-83','RAD-84'],
  etapas:[
  { t:'abas', titulo:'Radiografia simples', p:'63',
    intro:'Os rins ficam na região **posterior** do abdome, ao lado da coluna; a bexiga aparece na pelve quando **distendida**. A identificação depende do contraste com gordura, gás e ossos.',
    abas:[
      { rot:'Anatomia', img:'r063_329', leg:'Radiografia e a projeção dos rins, ureteres e bexiga.',
        itens:['Rins de cada lado da coluna, bexiga na pelve.'] },
      { rot:'Coraliforme', img:'a_r063_327', leg:'Cálculo coraliforme (contorno vermelho).',
        itens:['Ocupa parte da **pelve renal** e se estende para os **cálices**, com formato ramificado que lembra **ramos de coral**.'] },
      { rot:'Opacidade', img:'a_r063_328', leg:'Opacidade projetada sobre o rim (contorno rosa).',
        itens:['**Opacidade branca** projetada sobre o rim, com ramificações que acompanham o sistema coletor.','**Nem todos os cálculos são visíveis** no raio X: depende da composição química, do tamanho etc.'] }
    ]
  },
  { t:'tabela', titulo:'Cálculos: composição e imagem', p:'71', img:'r071_366', leg:'Tipos de cálculo no raio X e na TC sem contraste.',
    cols:['Raio X','TC sem contraste'],
    linhas:[
      ['Cálcio (70–80%)','Radiopaco (branco); geralmente visível','Hiperdenso'],
      ['Ácido úrico (5–10%)','Radiolucente: pode não ser visto','Visto; melhor avaliação na TC'],
      ['Estruvita (5–10%)','Radiopaco; pode ser **coraliforme**','Hiperdenso; ligado a **infecção urinária** (bactérias produtoras de urease)'],
      ['Cistina (1–2%)','Pouco visível','Melhor detectado na TC'],
      ['Xantina (raro)','Geralmente não visível','Melhor detectado na TC']
    ]
  },
  { t:'abas', titulo:'Exames contrastados', p:'64–65',
    intro:'Ambos usam **contraste iodado**, com vias e objetivos diferentes.',
    abas:[
      { rot:'Urografia excretora', img:'a_r064_333', leg:'Fase inicial (laranja) e preenchimento do sistema coletor (azul).',
        itens:['Contraste **intravenoso**, **filtrado pelos rins** e eliminado na urina.','Imagens **sucessivas**: rins, sistemas coletores, ureteres e bexiga.','Fase inicial: captação e excreção renal; depois, cálices, pelves, ureteres e bexiga.'] },
      { rot:'Duplicação', img:'a_r064_334', leg:'Duplicação pieloureteral.',
        itens:['Na **duplicação pieloureteral** podem ser vistos dois sistemas coletores ou trajetos ureterais.'] },
      { rot:'UCM', img:'a_r065_338', leg:'Contraste voltando da bexiga para os ureteres (azul).',
        itens:['**Uretrocistografia miccional:** bexiga enchida com contraste **por sonda**.','Imagens no enchimento e, principalmente, **durante a micção**.','Principal indicação: **refluxo vesicoureteral**: a urina volta da bexiga aos ureteres, às vezes até a pelve.'] },
      { rot:'Retrógrada', img:'r065_339', leg:'Uretra preenchida por contraste.',
        itens:['**Uretrocistografia retrógrada:** contraste **pela uretra**, contra o fluxo da urina.','Delineia a uretra: **estenoses** e lesões (um estreitamento reduz abruptamente o calibre).'] }
    ]
  },
  { t:'explorar', titulo:'O rim normal no USG', p:'66', img:'r066_342', ann:'a_r066_342',
    intro:'O USG é um dos métodos **iniciais** mais usados: sem radiação, em tempo real, mostra **dilatação do sistema coletor**. Toque nos números.',
    pts:[
      { x:36, y:38, nome:'Córtex renal', txt:'Normalmente **menos ecogênico que o fígado**, na comparação.' },
      { x:51, y:35, nome:'Pirâmides medulares', txt:'Um pouco **menos ecogênicas** que o córtex: regiões mais escuras no interior do rim.' },
      { x:44, y:53, nome:'Seio renal', txt:'**Mais ecogênico** que o córtex, pela gordura, vasos e estruturas do sistema coletor.' }
    ],
    destaque:'No corte longitudinal, o rim tem formato **ovalado/reniforme**. Na **nefropatia**, a ecogenicidade do córtex **aumenta** (pode ficar mais brilhante que o fígado), por infiltrados inflamatórios e edema.'
  },
  { t:'abas', titulo:'Bexiga no USG', p:'67–68',
    intro:'A bexiga é **particularmente bem avaliada** pelo ultrassom: conteúdo, parede e volume.',
    abas:[
      { rot:'Parede', img:'a_r067_347', leg:'Parede vesical (vermelho) e jato ureteral ao Doppler (rosa).',
        itens:['Parede melhor avaliada com a bexiga **cheia**: não deve passar de **3–5 mm**.','Bexiga **pouco cheia** pode **parecer** ter parede espessa.'] },
      { rot:'Conteúdo', img:'r067_348', leg:'Conteúdo vesical anecoico.',
        itens:['Normal: conteúdo **anecoico** (preto): a urina transmite o ultrassom e produz poucos ecos.'] },
      { rot:'Jatos', img:'r067_349', leg:'Jatos de urina dos ureteres direito e esquerdo.',
        itens:['O **Doppler colorido** mostra os **jatos ureterais**: entrada intermitente da urina na bexiga.','A **ausência** do jato **não confirma, isoladamente**, obstrução.'] },
      { rot:'Pré e pós-micção', img:'r068_352', leg:'Antes e após a micção.',
        itens:['Estima o **volume vesical** e o **resíduo pós-miccional**.','Resíduo aumentado pode revelar dificuldade de esvaziamento, **obstrução da saída** da bexiga ou alteração da contratilidade.'] }
    ]
  },
  { t:'tabela', titulo:'As fases da TC dos rins', p:'68–69', img:'r068_353', leg:'Sem contraste, cortical, parenquimatosa e excretora.',
    cols:['O que acontece','O que observar'],
    linhas:[
      ['Sem contraste','Antes do contraste IV','Anatomia basal, **cálculos** hiperatenuantes, densidade sem realce'],
      ['Corticomedular','Contraste chega intensamente: **realça o córtex**','Córtex × medula, vasos, massas hipervasculares'],
      ['Nefrográfica','Contraste distribuído: realce **homogêneo**','Lesões, massas, parênquima, inflamação'],
      ['Excretora','Contraste filtrado chega ao **coletor**','Pelve, cálices, **ureteres** e bexiga preenchidos']
    ]
  },
  { t:'abas', titulo:'Cisto e hidronefrose', p:'69–70, 78',
    abas:[
      { rot:'Cisto no USG', img:'a_r079_397', leg:'Cistos (azul) com reforço acústico posterior (amarelo).',
        itens:['Cisto renal simples: lesão **cheia de líquido**, arredondada/oval, **anecoica**, parede fina, contorno liso e bem delimitado.','**Reforço acústico posterior:** atrás do cisto fica **mais brilhante**, porque o líquido atenua pouco o feixe.'] },
      { rot:'Cisto na TC', img:'a_r069_357', leg:'Cisto renal na TC (amarelo).',
        itens:['Conteúdo **homogêneo de baixa atenuação**, parede fina e regular, **sem realce** relevante.','Diferente da **massa sólida**: densidade variável, **realce**, septos, espessamentos.','Muitas vezes é **achado incidental**.'] },
      { rot:'Hidronefrose USG', img:'a_r070_360', leg:'Cálices e pelve dilatados (vermelho).',
        itens:['Dilatação da **pelve e dos cálices** por dificuldade de drenagem da urina.','No USG: espaços **anecoicos** (pretos) **centrais, comunicantes**; aspecto ramificado, em **"pé de galinha"**.'] },
      { rot:'Hidronefrose TC', img:'a_r070_361', leg:'Pelve e cálices dilatados (roxo); ureter dilatado (amarelo).',
        itens:['Pelve e cálices aumentados e preenchidos por líquido de **baixa atenuação**.','Pode haver **dilatação do ureter**.','Hidronefrose justifica **investigar a causa**.'] }
    ]
  },
  { t:'abas', titulo:'Cálculo urinário', p:'70–71, 79',
    abas:[
      { rot:'TC sem contraste', img:'a_r071_364', leg:'Cálculo renal hiperatenuante (azul).',
        itens:['**TC sem contraste** = método de escolha (padrão-ouro) na suspeita de **cólica renal no adulto**.','Detecta a maioria dos cálculos, sua **localização, tamanho** e sinais de obstrução.','O cálculo é um foco **hiperatenuante** (mais branco que urina e tecidos).'] },
      { rot:'USG', img:'a_r079_400', leg:'Cálculo (azul) com sombra acústica posterior (rosa).',
        itens:['Foco **hiperecogênico** com **sombra acústica posterior** (o material calcificado bloqueia o feixe).','Primeira escolha na **gestação e em crianças** (sem radiação).','Vê cálculos renais e dilatação, mas **pode não ver cálculos pequenos ou no ureter**.'] }
    ]
  },
  { t:'abas', titulo:'Bexiga na TC e trauma renal', p:'71–72',
    abas:[
      { rot:'Bexiga na TC', img:'r071_365', leg:'Sem contraste, com contraste e excretora.',
        itens:['Sem contraste: urina de **baixa atenuação**; útil para cálculos.','Com contraste: parede e tecidos vascularizados realçam. Excretora: o contraste chega à bexiga e o conteúdo fica **hiperatenuante**.','Bexiga pouco distendida pode **simular espessamento**.'] },
      { rot:'Trauma', img:'a_r072_369', leg:'Laceração (azul) e hematoma perirrenal (vermelho).',
        itens:['**TC com contraste**: um dos principais exames no paciente **hemodinamicamente estável**.','**Laceração**: linha ou área irregular de baixa atenuação que atravessa o parênquima.','**Hematoma perirrenal**: sangue ao redor do rim, atenuação variável.'] },
      { rot:'Extravasamento', img:'a_r072_370', leg:'Laceração, hematoma, líquido e extravasamento de contraste.',
        itens:['Também mostra **alterações de perfusão** e **extravasamento de contraste**, sugerindo extravasamento urinário quando há lesão da pelve ou dos cálices.'] }
    ]
  },
  { t:'abas', titulo:'Ressonância', p:'73',
    intro:'Campos magnéticos e radiofrequência, **sem radiação ionizante**.',
    abas:[
      { rot:'Massa renal', img:'r073_373', leg:'Massa renal na RM.',
        itens:['Caracteriza tecidos por sequências: o aspecto depende de líquido, sangue, gordura, tecido sólido e realce.'] },
      { rot:'Ureterorressonância', img:'r073_374', leg:'Urografia por RM.',
        itens:['Em **T2**, líquidos parados ou lentos ficam **brilhantes**: a urina delineia cálices, pelve e ureteres.','Útil quando se quer **evitar radiação** (ex.: gestante).','**Não substitui** a TC sem contraste na cólica renal do adulto.'] }
    ]
  },
  { t:'texto', titulo:'Pielonefrite aguda', p:'73–75',
    corpo:[
      'Infecção bacteriana da **pelve e do parênquima renal**, em geral por **ascensão** do trato urinário inferior. Mais em **mulheres**. Agentes: **E. coli**, Klebsiella, Proteus, Enterobacter, Pseudomonas.',
      'Clínica: **febre, dor lombar**, sensibilidade no ângulo costovertebral, náuseas, vômitos e sintomas urinários. Urina com leucócitos e bactérias; PCR e VHS elevados.',
      'Diagnóstico **clínico-laboratorial**. Imagem quando há suspeita de **obstrução por cálculo**, fatores de risco (**diabetes**, imunossupressão), apresentação atípica ou **complicações** (abscesso, infarto, enfisematosa).',
      '**USG:** baixa sensibilidade na forma **não complicada** (alterações em só **~25%**); vale para procurar **complicações** e obstrução.'
    ],
    destaque:'**TC** é mais sensível para o **parênquima** e as complicações. RM e medicina nuclear em situações específicas.'
  },
  { t:'abas', titulo:'Pielonefrite na imagem', p:'74–77',
    abas:[
      { rot:'Enfisematosa', img:'a_r074_378', leg:'Gás na topografia renal (rosa).',
        itens:['Infecção **grave** com **gás** produzido pelos microrganismos no rim ou ao redor.','Na radiografia: áreas **muito escuras** (radiotransparentes) na loja renal.','Importante sobretudo em **diabéticos**.'] },
      { rot:'TC sem contraste', img:'a_r076_386', leg:'Rim normal (azul) e rim afetado (laranja).',
        itens:['Rim afetado pode estar **aumentado**, com áreas **hipoatenuantes**.','Pode haver estrias perinéfricas e **gás** no sistema urinário ou no parênquima.'] },
      { rot:'TC com contraste', img:'a_r077_391', leg:'Áreas em cunha de menor realce (azul).',
        itens:['Áreas focais **em cunha** que realçam **menos** que o parênquima preservado: base voltada para a superfície, vértice para o centro.','Representam inflamação e **perfusão reduzida**.','**Nefrograma estriado:** faixas de maior e menor atenuação no parênquima.'] }
    ]
  },
  { t:'tabela', titulo:'Pielonefrite × abscesso × infarto', p:'77–78',
    cols:['Achados na imagem'],
    linhas:[
      ['Pielonefrite aguda','Áreas **em cunha** de menor realce, **aumento renal**, estriações do nefrograma, inflamação perirrenal'],
      ['Abscesso renal','**Coleção focal** com centro de baixa atenuação e possível **realce periférico**'],
      ['Infarto renal','Cunha de menor ou **ausente** realce por interrupção do fluxo; distribuição vascular ajuda'],
      ['Hematoma','Atenuação variável conforme o tempo; trauma, procedimento ou sangramento']
    ]
  },
  { t:'exame', titulo:'Qual exame pedir?', p:'63–79',
    intro:'Para cada situação, escolha o exame mais adequado.',
    exames:['Ultrassonografia','TC sem contraste','TC com contraste','Uretrocistografia miccional'],
    cenarios:[
      { sit:'Adulto com **cólica renal** típica; quer-se ver cálculo, local e tamanho.', certa:1,
        por:['Pode não ver cálculos pequenos ou no ureter.','**Padrão-ouro** na litíase do adulto.','O contraste não é necessário para o cálculo.','Não avalia litíase.'] },
      { sit:'**Criança** com primeira infecção urinária: avaliação inicial.', certa:0,
        por:['Exame de **escolha inicial** na criança: sem radiação.','Radiação desnecessária na avaliação inicial.','Não é o primeiro.','Vem depois, se houver suspeita de refluxo (ex.: dilatação, ITU de repetição).'] },
      { sit:'Criança de 3 anos com **ITU de repetição** e **dilatação do sistema coletor** no USG.', certa:3,
        por:['Já foi feito.','Não mostra refluxo.','Não mostra refluxo.','Investiga o **refluxo vesicoureteral**, sua principal indicação.'] },
      { sit:'Motociclista **estável** com trauma no flanco e hematúria.', certa:2,
        por:['Avalia mal lacerações e extravasamento.','Sem contraste não se vê perfusão nem extravasamento.','Mostra **lacerações, hematomas, perfusão e extravasamento**.','Não é o exame do trauma renal.'] },
      { sit:'Diabética com pielonefrite **sem melhora após 72 h** de antibiótico.', certa:2,
        por:['Pouco sensível para o parênquima.','Precisa ver realce do parênquima.','Mais sensível para parênquima e complicações (cunhas, abscesso).','Não.'] }
    ],
    regra:'Cólica no adulto → **TC sem contraste**. Gestante/criança → **USG**. Refluxo → **UCM**. Uretra → **retrógrada**. Trauma estável ou pielonefrite complicada → **TC com contraste**. Ureteres sem radiação → **uretero-RM**.'
  },
  { t:'resumo', titulo:'O que levar desta missão',
    itens:[
      'Raio X: só parte dos cálculos; **coraliforme** = estruvita (urease). Urografia = contraste IV; **UCM** = refluxo; **retrógrada** = uretra.',
      'USG rim: córtex menos ecogênico que o fígado; nefropatia aumenta a ecogenicidade. Bexiga: parede ≤ 3–5 mm cheia, **resíduo pós-miccional**.',
      'TC: sem contraste (cálculo), corticomedular, nefrográfica, **excretora**. Cisto: líquido, sem realce, **reforço acústico** no USG.',
      'Hidronefrose: espaços anecoicos **comunicantes**; investigar causa. Litíase: **TC sem contraste** padrão-ouro; USG pode perder ureter.',
      'Pielonefrite: clínico-laboratorial; USG para complicações; TC: **cunhas** de menor realce; **enfisematosa** = gás em diabético.',
      'Trauma estável: **TC com contraste**. Uretero-RM (T2) evita radiação.'
    ]
  }
  ]
});
PM_CASES.img10 = {
  investigation:{
    title:'Investigação · Dor lombar com hematúria',
    fonte:'Caso da questão RAD-77 do banco de Radiologia.',
    patient:{age:null,sex:'',complaint:'Dor lombar esquerda há 7 dias',history:'Hematúria associada.'},
    evidence:[
      {id:'dor',label:'Dor',relevance:2,text:'**Lombar esquerda** há uma semana.',feedback:'Sugere cólica renal.'},
      {id:'hem',label:'Urina',relevance:2,text:'**Hematúria.**',feedback:'Reforça litíase urinária.'},
      {id:'febre',label:'Febre',relevance:1,text:'Não relatada.',feedback:'Sem sinais de infecção descritos.'},
      {id:'trauma',label:'Trauma',relevance:0,text:'Sem trauma.',feedback:'Não é trauma renal.'}
    ],
    hypothesis:{prompt:'Hipótese:',options:['Litíase urinária','Pielonefrite enfisematosa','Cisto renal simples','Trauma renal'],correct:0,
      feedback:['Dor lombar com hematúria.','Faltariam febre, sepse e diabetes.','Costuma ser incidental e assintomático.','Não há trauma.']},
    microscopy:{image:'bank:rad_q77_0.jpg',prompt:'Imagens A e B. Que exames são e o que mostram?',options:['A: USG; B: TC; cálculo na junção ureterovesical esquerda','A: TC; B: RM; cisto renal','A e B: radiografias; coraliforme','A: USG; B: TC; normal'],correct:0,hint:'Procure o foco brilhante na transição entre ureter e bexiga.',competencies:['visual','conceitual']},
    differential:[
      {prompt:'Qual é o padrão-ouro para litíase no adulto?',options:['TC sem contraste','Radiografia simples','Urografia excretora','RM'],correct:0,competencies:['clinica'],
        explain:['Detecta a maioria dos cálculos, local, tamanho e obstrução.','Muitos cálculos não aparecem.','Não é o padrão-ouro atual.','Não substitui a TC na cólica.']},
      {prompt:'Por que o USG pode falhar aqui?',options:['Pode não ver cálculos pequenos ou no ureter','Usa radiação','Não vê os rins','Precisa de contraste'],correct:0,competencies:['diferencial'],
        explain:['Limitação citada na apostila e em RAD-79.','Não usa.','Vê.','Não precisa.']},
      {prompt:'Como aparece o cálculo em cada método?',options:['USG: foco hiperecogênico com sombra; TC: foco hiperatenuante','USG: anecoico; TC: hipoatenuante','Ambos escuros','Não aparece em nenhum'],correct:0,competencies:['fisiopatologia'],
        explain:['O material calcificado bloqueia o feixe e é denso.','Isso é o cisto.','Não.','Aparece.']}
    ],
    final:{prompt:'Conclusão:',options:['Cálculo na junção ureterovesical esquerda, visto no USG e na TC','Cisto renal','Pielonefrite','Normal'],correct:0,
      keyPrompt:'Onde está o cálculo?',keyOptions:['Junção ureterovesical','Pelve renal','Uretra','Cálice superior'],keyCorrect:0,competencies:['clinica','visual','diferencial']},
    debrief:{diagnosis:'Litíase na junção ureterovesical esquerda',evidence:['Dor lombar esquerda com **hematúria**.','USG: foco **hiperecogênico** com sombra; TC: foco **hiperatenuante**.','Local: **transição ureter–bexiga**.'],
      clinic:'TC sem contraste é o padrão-ouro no adulto; o USG é a primeira escolha em gestantes e crianças.',
      revisar:{conceitual:'Cálculo urinário (p. 70–71, 79)',visual:'Cálculo urinário (p. 70–71, 79)',diferencial:'Cálculo urinário (p. 70–71, 79)',clinica:'Qual exame pedir?',fisiopatologia:'Cálculo urinário (p. 70–71, 79)'}}
  },
  mastery:[
    {id:'i10q1',image:'bank:rad_q70_0.jpg',q:'Imagens sucessivas após injeção de contraste. Que exame é?',ops:['Uretrocistografia retrógrada','Urografia excretora: contraste IV filtrado pelos rins delineia coletores, ureteres e bexiga','Uretrocistografia miccional','TC sem contraste'],a:1,why:'RAD-70.',c:['visual','conceitual']},
    {id:'i10q2',image:'bank:rad_q71_0.jpg',q:'Criança de 3 anos com ITU de repetição; bexiga enchida por sonda, imagens durante a micção. Principal indicação:',ops:['Estenose de uretra','Cálculo','Trauma','Refluxo vesicoureteral'],a:3,why:'RAD-71: uretrocistografia miccional.',c:['visual','clinica']},
    {id:'i10q3',image:'bank:rad_q76_0.jpg',q:'USG renal com estruturas anecoicas centrais e comunicantes no seio renal. Significado:',ops:['Hidronefrose: dilatação de pelve e cálices por dificuldade de drenagem; investigar a causa','Cistos simples múltiplos','Rim normal','Cálculo coraliforme'],a:0,why:'RAD-76.',c:['visual','fisiopatologia']},
    {id:'i10q4',image:'bank:rad_q81_0.jpg',q:'Diabético mal controlado, febre, dor lombar esquerda e sepse; gás na loja renal esquerda na radiografia. Sugere:',ops:['Cálculo coraliforme','Pielonefrite enfisematosa, infecção grave com gás produzido por microrganismos','Achado normal de gás intestinal','Cisto renal'],a:1,why:'RAD-81.',c:['visual','diferencial']},
    {id:'i10q5',image:'bank:rad_q82_0.jpg',q:'Diabética com pielonefrite sem melhora em 72 h; TC com áreas em cunha de menor realce. Correto:',ops:['São infartos sempre','A TC é menos sensível que o USG','Áreas em cunha de menor realce com aumento renal são compatíveis com pielonefrite; TC é mais sensível que o USG para o parênquima','São cistos'],a:2,why:'RAD-82.',c:['visual','conceitual']},
    {id:'i10q6',image:'bank:rad_q84_0.jpg',q:'Gestante de 30 semanas com hidronefrose; avaliar ureteres sem radiação. Exame realizado:',ops:['Ureterorressonância: em T2 a urina fica brilhante e delineia cálices, pelve e ureteres','Urografia excretora','TC sem contraste','Uretrocistografia retrógrada'],a:0,why:'RAD-84.',c:['visual','clinica']}
  ]
};

/* ===== Imagem 11 · Biópsia renal percutânea (apostila de Radiologia p. 80–84; RAD-36 a 40, 85) ===== */
PM_MISSOES.push({
  id:'img11', area:'img', num:'11', titulo:'Biópsia renal guiada por imagem',
  sub:'Focal × não focal, USG ou TC, indicações, contraindicações, técnica e complicações',
  pags:'80–84', ligados:['img10','lab09'],
  questoes:['RAD-36','RAD-37','RAD-38','RAD-39','RAD-40','RAD-85'],
  etapas:[
  { t:'texto', titulo:'Imagem guia, a histologia responde', p:'80',
    corpo:[
      'Procedimento **minimamente invasivo** que obtém fragmentos do rim para **análise histopatológica**: glomerulopatias, outras nefropatias e lesões focais suspeitas de neoplasia.',
      'Guiado principalmente por **USG** ou **TC**: localiza o rim, define o **trajeto da agulha** e reduz o risco de lesar estruturas próximas.',
      'A **imagem** avalia a anatomia, localiza e orienta; quem **caracteriza** as alterações microscópicas é a **histopatologia**.'
    ],
    destaque:'Nas **glomerulopatias**, a imagem costuma ser **inespecífica**: serve para avaliar a anatomia e excluir outras doenças. A causa exige **biópsia do parênquima**.'
  },
  { t:'tabela', titulo:'Focal × não focal', p:'80',
    cols:['Focal (direcionada)','Não focal (difusa)'],
    linhas:[
      ['Quando','Lesão **específica**: nódulo ou massa','Doença do **parênquima**: nefropatias, glomerulopatias'],
      ['Objetivo','Material representativo **da lesão**','Fragmentos representativos do **tecido renal**'],
      ['Material','**Um** fragmento (núcleo)','**No mínimo dois** núcleos']
    ]
  },
  { t:'abas', titulo:'O que o USG mostra antes', p:'81',
    abas:[
      { rot:'Nefropatia', img:'a_r081_405', leg:'Córtex mais brilhante (contorno verde).',
        itens:['**Aumento da ecogenicidade cortical**: córtex mais brilhante, o que pode sugerir **nefropatia**.'] },
      { rot:'Rim atrófico', img:'r081_406', leg:'Rim normal × rim atrófico.',
        itens:['Em fases avançadas de doença crônica, os rins ficam **menores** e com **córtex mais fino**.','Pode haver **perda da diferenciação corticomedular**.'] }
    ]
  },
  { t:'tabela', titulo:'Indicações', p:'81',
    cols:['Indicação','Objetivo'],
    linhas:[
      ['Parênquima','Nefropatia de **causa desconhecida**','Investigar a etiologia'],
      ['Parênquima','Piora da função no **transplantado**','Causa da disfunção do enxerto'],
      ['Parênquima','Suspeita de **glomerulopatia**','Caracterizar o tecido'],
      ['Massa focal','Malignidade **extrarrenal** conhecida; suspeita de **linfoma** renal','Investigar comprometimento renal; caracterizar'],
      ['Massa focal','Antes de **ablação**; massas **múltiplas ou bilaterais**','Caracterizar a lesão'],
      ['Massa focal','Dúvida entre **infecção** e massa maligna','Diferenciar pelo tecido']
    ]
  },
  { t:'texto', titulo:'USG ou TC?', p:'80–82',
    corpo:[
      'Ambos podem guiar. A escolha depende da **lesão**, do **paciente** e da **experiência** da equipe.',
      '**USG:** vê o rim e acompanha a agulha **em tempo real**, **sem radiação**. Útil quando o rim é bem visto e o trajeto é seguro.',
      '**TC:** preferida quando a lesão é **difícil de acessar ou visualizar** pelo USG, ou quando a anatomia dificulta.',
      '**Contraindicações:** paciente que **não coopera** e **distúrbios da coagulação**. Avaliar risco hemorrágico; **hipertensão não controlada** pede atenção.',
      '**Materiais:** agulhas simples ou **coaxiais** (núcleo **18 G**), **lidocaína 1%**, midazolam se indicado, recipiente. Na coaxial, uma agulha introdutora permite coletar pelo **mesmo trajeto**.'
    ],
    destaque:'Radiografia e arteriografia **não** guiam a biópsia renal: os métodos são **USG e TC**.'
  },
  { t:'sequencia', titulo:'Biópsia guiada por TC', p:'82–83',
    passos:[
      { h:'Etapa 1 · posicionar', txt:'Paciente em **decúbito ventral**. A TC identifica a localização do rim e planeja o acesso.' },
      { h:'Etapa 2 · marcar', txt:'A equipe confirma o **lado** e a **altura** da punção; o rim é identificado ao lado da musculatura paravertebral.' },
      { h:'Etapa 3 · puncionar', txt:'A agulha entra pelo **trajeto planejado**; a TC acompanha sua posição até o local de coleta.' }
    ],
    img:'a_r083_413'
  },
  { t:'abas', titulo:'Biópsia guiada por USG', p:'83',
    abas:[
      { rot:'Etapa 1', img:'a_r083_414', leg:'Rim identificado (contorno azul).',
        itens:['Identificar o rim: estrutura **ovalada** com córtex **hipoecoico**.'] },
      { rot:'Etapa 2', img:'r083_415', leg:'Transdutor sobre a região de acesso.',
        itens:['O transdutor é colocado sobre a região de acesso, buscando a **melhor janela**.'] },
      { rot:'Etapa 3', img:'a_r083_416', leg:'Agulha como linha hiperecogênica (rosa).',
        itens:['Com o trajeto visível, a agulha aparece como uma **linha hiperecogênica**.'] }
    ]
  },
  { t:'texto', titulo:'Depois da biópsia', p:'84',
    corpo:[
      '**Observação:** repouso absoluto conforme protocolo; **sinais vitais** a cada 4 h; dor e hematomas a cada 4 h.',
      '**Mais de 90%** das complicações ocorrem nas **primeiras 24 horas**.',
      'Atenção a: piora da **dor lombar**, **hipotensão**, **taquicardia**, **hematúria** importante.',
      'Maior risco: **insuficiência renal avançada**, **hipertensos**, **amiloidose** (pode-se prolongar a observação).'
    ]
  },
  { t:'tabela', titulo:'Complicações', p:'84',
    cols:['Características'],
    linhas:[
      ['Hematoma','Perinefrético, retroperitoneal ou intrarrenal: dor, **queda de hemoglobina**, instabilidade'],
      ['Hematúria','Persistente ou volumosa exige avaliação'],
      ['Fístula arteriovenosa','Comunicação anormal artéria–veia; hematúria, alterações hemodinâmicas'],
      ['Pseudoaneurisma','Sangue contido pelos tecidos após lesão arterial'],
      ['Lesão do cólon','Trajeto da agulha perto do cólon'],
      ['Pneumotórax','Agulha atinge estruturas perto do tórax']
    ],
    nota:'Na complicação: **USG** acha coleções e alterações vasculares; **TC** avalia a extensão do hematoma; exames **vasculares** se houver suspeita de sangramento ativo ou lesão arterial.'
  },
  { t:'checar', titulo:'Confira o entendimento', p:'84',
    perg:'Oito horas após a biópsia, dor lombar progressiva, taquicardia e queda de 2 g/dL na hemoglobina. Hipótese mais provável?',
    dica:'Qual a complicação mais ligada a sangramento?',
    ops:[
      { t:'Pneumotórax', por:'Daria sintomas respiratórios.' },
      { t:'Hematoma perinefrético', por:'RAD-40: sangue ao redor do rim, dentro das primeiras 24 h.', certa:true },
      { t:'Evolução normal', por:'Queda de Hb e taquicardia não são esperadas.' }
    ]
  },
  { t:'resumo', titulo:'O que levar desta missão',
    itens:[
      'Imagem **guia**; **histologia** diagnostica. Glomerulopatia: imagem inespecífica → biópsia do parênquima.',
      '**Focal** = lesão, 1 núcleo; **não focal** = parênquima/nefropatia, **≥ 2 núcleos**.',
      'Guia: **USG** (tempo real, sem radiação) ou **TC** (lesão difícil, anatomia complicada). Raio X e arteriografia não guiam.',
      'Contraindicações: **não cooperação** e **coagulopatia**; atenção à hipertensão.',
      'TC: **decúbito ventral**, marcar lado e altura, agulha no trajeto. USG: agulha = **linha hiperecogênica**.',
      '**> 90%** das complicações nas **primeiras 24 h**; principal: **hematoma**.'
    ]
  }
  ]
});
PM_CASES.img11 = {
  investigation:{
    title:'Investigação · Síndrome nefrótica sem causa definida',
    fonte:'Caso da questão RAD-37 do banco de Radiologia.',
    patient:{age:45,sex:'Feminino',complaint:'Síndrome nefrótica de causa não esclarecida',history:'Piora da função renal.'},
    evidence:[
      {id:'nef',label:'Diagnóstico sindrômico',relevance:2,text:'**Síndrome nefrótica** sem causa definida.',feedback:'Sugere glomerulopatia.'},
      {id:'fun',label:'Função renal',relevance:2,text:'**Em piora.**',feedback:'Aumenta a urgência de definir a causa.'},
      {id:'img',label:'Imagem prévia',relevance:1,text:'Sem lesão focal descrita.',feedback:'A doença é difusa, do parênquima.'},
      {id:'coag',label:'Coagulação',relevance:1,text:'Sem distúrbio relatado.',feedback:'Sem contraindicação aparente.'}
    ],
    hypothesis:{prompt:'Como definir a causa?',options:['Biópsia renal do parênquima','Repetir USG','Urografia excretora','Nada a fazer'],correct:0,
      feedback:['Nas glomerulopatias a imagem é inespecífica: a causa vem da histologia.','Não define a causa.','Não define glomerulopatia.','Há como investigar.']},
    microscopy:{image:'bank:rad_q37_0.jpg',prompt:'Procedimento mostrado. O que é?',options:['Biópsia renal guiada por USG','Urografia excretora','Uretrocistografia','Colonoscopia'],correct:0,hint:'Veja o transdutor e a agulha.',competencies:['visual','conceitual']},
    differential:[
      {prompt:'Biópsia focal ou não focal?',options:['Não focal: doença do parênquima','Focal: há um nódulo','Tanto faz','Nenhuma'],correct:0,competencies:['diferencial'],
        explain:['Nefropatia difusa.','Não há lesão focal.','Muda o material coletado.','Não.']},
      {prompt:'Quantos fragmentos, em geral?',options:['Pelo menos dois','Um','Nenhum','Dez'],correct:0,competencies:['conceitual'],
        explain:['Não focal: no mínimo dois núcleos.','Isso é o previsto na focal.','Não.','Não.']},
      {prompt:'Quando ocorrem a maioria das complicações?',options:['Mais de 90% nas primeiras 24 horas','Após uma semana','Só durante a punção','Após um mês'],correct:0,competencies:['clinica'],
        explain:['Por isso a observação inicial é tão importante.','Não.','Não só.','Não.']}
    ],
    final:{prompt:'Conclusão:',options:['Biópsia não focal do parênquima, guiada por USG, para histopatologia','Biópsia focal por TC','Seguir só com imagem','Urografia'],correct:0,
      keyPrompt:'Quem define a glomerulopatia?',keyOptions:['A análise histopatológica','O USG','A TC','A radiografia'],keyCorrect:0,competencies:['clinica','visual','diferencial']},
    debrief:{diagnosis:'Indicação de biópsia renal não focal guiada por USG',evidence:['**Síndrome nefrótica** sem causa e **piora da função**.','Imagem inespecífica nas glomerulopatias.','**Não focal**: ≥ 2 fragmentos para histologia.'],
      clinic:'Observar sinais vitais, dor e hematúria: mais de 90% das complicações nas primeiras 24 h.',
      revisar:{conceitual:'Focal × não focal (quadro)',visual:'Biópsia guiada por USG (p. 83)',diferencial:'Focal × não focal (quadro)',clinica:'Depois da biópsia (p. 84)',fisiopatologia:'Imagem guia, a histologia responde (p. 80)'}}
  },
  mastery:[
    {id:'i11q1',q:'Sobre a biópsia renal: I focal ou não focal; II USG ou TC (USG mais usado no transplantado); III indicações incluem lesão focal não caracterizada, IR de causa desconhecida e piora do enxerto; IV não cooperação e coagulopatia contraindicam. Corretas:',ops:['Apenas I e II','Apenas I, II e III','Apenas II e IV','I, II, III e IV'],a:3,why:'RAD-38.',c:['conceitual','clinica']},
    {id:'i11q2',image:'bank:rad_q39_0.jpg',q:'Homem com linfoma e nódulo renal sólido de 2 cm indeterminado. Procedimento mostrado:',ops:['Biópsia não focal por USG','Biópsia focal guiada por TC, em decúbito ventral, com marcação e imagens para altura e lateralidade','Nefrectomia','Urografia'],a:1,why:'RAD-39.',c:['visual','diferencial']},
    {id:'i11q3',image:'bank:rad_q40_0.jpg',q:'Oito horas após biópsia, hipertenso com DRC avançada: dor lombar, taquicardia, Hb caiu 2 g/dL. TC:',ops:['Normal','Pneumotórax','Coleção perirrenal: hematoma perinefrético; > 90% das complicações nas primeiras 24 h','Fístula intestinal'],a:2,why:'RAD-40.',c:['visual','clinica']},
    {id:'i11q4',q:'Quais métodos podem guiar uma biópsia renal? I USG, II Rx, III TC, IV arteriografia.',ops:['I e II','II e IV','Todos','I e III'],a:3,why:'RAD-85.',c:['conceitual']},
    {id:'i11q5',image:'a_r083_416',q:'Na biópsia guiada por USG, a estrutura marcada é:',ops:['Cálculo','Agulha, vista como linha hiperecogênica no trajeto','Ureter dilatado','Cisto'],a:1,why:'Apostila, p. 83.',c:['visual']},
    {id:'i11q6',image:'r081_406',q:'Rim menor, de córtex fino, à direita da figura. Interpretação:',ops:['Rim normal','Rim atrófico de doença crônica avançada, podendo perder a diferenciação corticomedular','Hidronefrose','Rim transplantado normal'],a:1,why:'Apostila, p. 81.',c:['visual','fisiopatologia']}
  ]
};

/* ===== Laboratório 01 · H. pylori (apostila de Laboratório p. 3–6; FARM-01 a 04) ===== */
PM_MISSOES.push({
  id:'lab01', area:'lab', num:'01', titulo:'Helicobacter pylori',
  sub:'Urease, indicações, testes invasivos e não invasivos, sorologia e tratamento',
  pags:'3–6', ligados:['m001','m002','img01'],
  questoes:['FARM-01','FARM-02','FARM-03','FARM-04'],
  etapas:[
  { t:'texto', titulo:'A bactéria', p:'3', img:'l003_66', leg:'Bactéria espiralada com flagelos.',
    corpo:[
      '**Gram-negativa**, **espiralada** e **microaerófila**; vive sob o muco, aderida ao epitélio gástrico.',
      'Flagelos dão mobilidade no muco; a forma espiral "parafusa" no muco gástrico.',
      'Principal fator etiológico de **gastrite crônica, úlcera péptica, linfoma MALT** e **adenocarcinoma gástrico**.',
      'Cerca de **metade da população mundial** já teve contato; a infecção ocorre quase sempre na **infância**.'
    ]
  },
  { t:'sequencia', titulo:'Como sobrevive no ácido: a urease', p:'3', img:'l003_67',
    passos:[
      { h:'Estômago ácido', txt:'pH ≈ **1–2**.' },
      { h:'Urease', txt:'A bactéria produz muita **urease**, que quebra a **ureia** do suco gástrico.' },
      { h:'Amônia + CO₂', txt:'A **amônia** (NH₃) é alcalina.' },
      { h:'Nuvem protetora', txt:'A amônia neutraliza o ácido ao redor da bactéria.' }
    ],
    nota:'Esse mesmo mecanismo é a base de quase todos os testes: **teste da urease** (biópsia) e **teste respiratório da ureia**.'
  },
  { t:'tabela', titulo:'Quando pesquisar', p:'3',
    cols:['Testar sempre','Situações especiais'],
    linhas:[
      ['Estômago','**Úlcera péptica** (gástrica ou duodenal)','**Gastrite atrófica**'],
      ['Neoplasia','**Linfoma MALT**; **câncer gástrico** (inclusive após ressecção)','—'],
      ['Sintomas','**Dispepsia < 60 anos**','—'],
      ['Família','**História familiar** de câncer gástrico','—'],
      ['Outros','—','**Anemia ferropriva** sem causa, **PTI**, uso crônico de **AINE**']
    ]
  },
  { t:'abas', titulo:'Os testes', p:'3–5',
    abas:[
      { rot:'Visão geral', img:'l003_68', leg:'Invasivos (endoscopia) e não invasivos.',
        itens:['**Invasivos** (EDA com biópsia): teste rápido da **urease**, **histologia**, **cultura com antibiograma** (útil nas falhas de tratamento).','**Não invasivos:** teste respiratório da ureia (**UBT**), **antígeno fecal**, sorologia (limitada).','UBT e antígeno fecal detectam **infecção ativa**.'] },
      { rot:'UBT', img:'l004_72', leg:'Teste respiratório com ureia marcada.',
        itens:['**Primeira escolha** em vários guidelines: sensibilidade ≈ **95%**, especificidade ≈ **97%**.','Bebe ureia marcada (¹³C, não radioativo, ou ¹⁴C) → urease libera **CO₂ marcado** → absorvido → expirado → medido.','Sem bactéria: sem urease, a ureia sai intacta na urina.','**Padrão-ouro do controle de erradicação**.'] },
      { rot:'Antígeno fecal', img:'l003_68', leg:'Teste não invasivo de infecção ativa.',
        itens:['Imunoensaio que detecta **proteínas bacterianas nas fezes**.','Sensibilidade e especificidade **> 95%**.','Também serve para o controle pós-tratamento.'] },
      { rot:'Sorologia', img:'l004_73', leg:'IgM sobe e cai; IgG persiste por meses a anos.',
        itens:['**Não recomendada** para o diagnóstico de rotina.','Detecta **exposição**, não infecção ativa.','A **IgG persiste** após a cura.','Não usar isoladamente para diagnóstico **nem para confirmar erradicação**.'] },
      { rot:'Urease (biópsia)', img:'l005_79', leg:'Amarelo = negativo; rosa = positivo.',
        itens:['Ureia do meio hidrolisada pela urease → **amônia** → **↑ pH**.','O indicador **vermelho de fenol** muda de **amarelo para rosa** = positivo.'] }
    ]
  },
  { t:'texto', titulo:'Preparo e intervalos', p:'4',
    corpo:[
      'UBT: **jejum ≥ 6 h**; sem bebidas gaseificadas nas 12 h anteriores; não fumar nem fazer exercício; feito em repouso.',
      '**Sem antibióticos** nos 30 dias anteriores; de preferência **sem IBP nem bloqueador H2** nos últimos 30 dias (ou a critério médico).',
      'Controle de erradicação (UBT ou antígeno fecal): **≥ 4 semanas** após o fim dos antibióticos e **≥ 2 semanas** sem IBP.'
    ],
    destaque:'Por quê? Antibiótico e IBP **baixam a carga bacteriana** → **falso-negativo**.'
  },
  { t:'laudo', titulo:'Interpretando a sorologia', p:'5',
    intro:'Paciente de 35 anos com dor epigástrica recorrente, azia, queimação e história familiar de úlcera gástrica.',
    paciente:'Sorologia para H. pylori',
    foco:'para decidir se há infecção ativa',
    linhas:[
      { ex:'Anticorpo IgG', val:'19 U/mL', ref:'Não reagente < 35; indeterminado 35–50; reagente > 50', alt:false, nota:'**Não reagente**: sem evidência clara de infecção crônica estabelecida.' },
      { ex:'Anticorpo IgM', val:'99 U/mL', ref:'Reagente ≥ 70 U/mL', seta:'↑', alt:true, nota:'Reagente **isolada**: pode ser **falso-positivo**, persistência após infecção passada ou limitação do método.' }
    ],
    conclusao:'**IgM sozinha não fecha diagnóstico.** Confirmar infecção ativa com **teste respiratório da ureia** ou **antígeno fecal**.'
  },
  { t:'tabela', titulo:'Tratamento', p:'5',
    cols:['Composição','Duração'],
    linhas:[
      ['Quádrupla com bismuto (1ª linha preferida, ACG 2024)','**IBP + bismuto + tetraciclina + metronidazol**','14 dias'],
      ['Triplo clássico (ainda usado no Brasil)','IBP + **amoxicilina + claritromicina**','14 dias']
    ],
    nota:'A eficácia do esquema triplo cai pela **resistência à claritromicina**, o que motivou o IV Consenso Brasileiro (2017).'
  },
  { t:'sequencia', titulo:'Por que o IBP junto?', p:'6', img:'l006_83',
    passos:[
      { h:'↑ pH', txt:'O IBP reduz a acidez.' },
      { h:'↑ estabilidade', txt:'Vários antibióticos são **instáveis em meio ácido**.' },
      { h:'↑ penetração', txt:'Os antibióticos agem melhor e reduzem a carga bacteriana.' },
      { h:'Mucosa cicatriza', txt:'Favorece a cicatrização.' },
      { h:'↑ erradicação', txt:'Resultado final.' }
    ],
    nota:'Sintomas **não predizem cura**: sempre fazer controle de erradicação. A erradicação **reduz o risco de câncer gástrico**. Probióticos podem reduzir efeitos colaterais (evidência moderada).'
  },
  { t:'checar', titulo:'Confira o entendimento', p:'4',
    perg:'Terminou o tratamento há 10 dias, segue com omeprazol e quer "confirmar a cura" hoje. O que fazer?',
    dica:'Pense nos intervalos mínimos.',
    ops:[
      { t:'Fazer o UBT hoje', por:'Muito cedo e em uso de IBP: risco de falso-negativo.' },
      { t:'Pedir sorologia IgG', por:'A IgG persiste após a cura.' },
      { t:'Aguardar ≥ 4 semanas dos antibióticos e suspender o IBP ≥ 2 semanas antes do UBT', por:'FARM-02.', certa:true }
    ]
  },
  { t:'resumo', titulo:'O que levar desta missão',
    itens:[
      'Gram-negativa espiralada; **urease** → amônia protege do ácido e é a base dos testes.',
      'Testar sempre: **úlcera, MALT, câncer gástrico, dispepsia < 60 anos, história familiar**.',
      '**UBT** = primeira escolha e padrão-ouro do controle. **Antígeno fecal** > 95%. **Sorologia** = exposição; IgM isolada não fecha.',
      'Controle: **≥ 4 sem** sem antibiótico e **≥ 2 sem** sem IBP (falso-negativo).',
      'Urease na biópsia: **amarelo → rosa**. 1ª linha: **IBP + bismuto + tetraciclina + metronidazol**, 14 dias.'
    ]
  }
  ]
});
PM_CASES.lab01 = {
  investigation:{
    title:'Investigação · IgM positiva, IgG negativa',
    fonte:'Caso da questão FARM-01 do banco de Farmacologia/Laboratório.',
    patient:{age:35,sex:'Feminino',complaint:'Dor epigástrica recorrente e azia',history:'História familiar de úlcera gástrica. Trouxe sorologia para H. pylori.'},
    evidence:[
      {id:'sint',label:'Sintomas',relevance:1,text:'Dor epigástrica recorrente, azia, queimação.',feedback:'Quadro dispéptico.'},
      {id:'fam',label:'Família',relevance:1,text:'História familiar de **úlcera** gástrica.',feedback:'Aumenta o interesse em pesquisar H. pylori.'},
      {id:'sor',label:'Sorologia',relevance:2,text:'Você vai ver o laudo na etapa 4.',feedback:'O laudo aparece na etapa 4.'},
      {id:'idade',label:'Idade',relevance:0,text:'35 anos.',feedback:'Dispepsia abaixo de 60 anos: pesquisar H. pylori.'}
    ],
    hypothesis:{prompt:'Antes do laudo, o que se quer saber?',options:['Se há infecção ativa por H. pylori','Se há câncer gástrico','Se há doença celíaca'],correct:0,
      feedback:['A dúvida é se a bactéria está presente agora.','Nada sugere alarme aqui.','Não é o quadro.']},
    microscopy:{laudo:{paciente:'Sorologia para H. pylori',linhas:[{ex:'IgG',val:'19 U/mL',ref:'Não reagente < 35',alt:false},{ex:'IgM',val:'99 U/mL',ref:'Reagente ≥ 70',seta:'↑',alt:true}]},
      prompt:'Como interpretar?',options:['Infecção confirmada: tratar','IgM isolada não fecha: confirmar com UBT ou antígeno fecal','Infecção excluída','Repetir a sorologia em um ano'],correct:1,hint:'A sorologia mede infecção ativa?',competencies:['visual','conceitual'],
      explain:['A sorologia detecta exposição; IgM isolada pode ser falso-positivo.','É a conduta da apostila.','Não dá para excluir.','Não resolve.']},
    differential:[
      {prompt:'Por que a sorologia não serve para confirmar cura?',options:['A IgG persiste meses a anos após a cura','Porque é cara','Porque usa radiação','Porque não detecta anticorpos'],correct:0,competencies:['fisiopatologia'],
        explain:['Detecta exposição, não infecção ativa.','Não é o motivo.','Não usa.','Detecta.']},
      {prompt:'Qual teste é a primeira escolha?',options:['Teste respiratório da ureia','Sorologia IgG','Cultura','Radiografia'],correct:0,competencies:['clinica'],
        explain:['Sensibilidade ≈ 95%, especificidade ≈ 97%.','Limitada.','Reservada para falhas.','Não.']},
      {prompt:'O que pode dar falso-negativo no UBT?',options:['Uso recente de antibiótico ou IBP','Jejum','Repouso','Ureia marcada'],correct:0,competencies:['diferencial'],
        explain:['Baixam a carga bacteriana.','É preparo exigido.','Também.','É o próprio teste.']}
    ],
    final:{prompt:'Conduta:',options:['Confirmar infecção ativa com UBT ou antígeno fecal','Tratar já','Considerar curada','Pedir só nova IgM'],correct:0,
      keyPrompt:'Dado decisivo:',keyOptions:['IgM reagente isolada com IgG não reagente','Azia','Idade','História familiar'],keyCorrect:0,competencies:['clinica','diferencial','visual']},
    debrief:{diagnosis:'Sorologia inconclusiva para H. pylori: confirmar infecção ativa',evidence:['**IgG não reagente**: sem infecção crônica evidente.','**IgM reagente isolada**: falso-positivo, infecção passada ou limitação do método.','Sorologia detecta **exposição**, não infecção ativa.'],
      clinic:'Pedir UBT ou antígeno fecal, respeitando o preparo (sem antibiótico e sem IBP).',
      revisar:{conceitual:'Os testes (p. 3–5)',visual:'Interpretando a sorologia (laudo)',diferencial:'Preparo e intervalos (p. 4)',clinica:'Os testes (p. 3–5)',fisiopatologia:'Os testes (p. 3–5)'}}
  },
  mastery:[
    {id:'l1q1',q:'Concluiu tratamento há 10 dias, assintomático, em uso de omeprazol; quer confirmar a cura hoje. Correto:',ops:['Fazer UBT hoje','Sorologia IgG','Aguardar ≥ 4 semanas após os antibióticos e suspender o IBP ≥ 2 semanas antes do UBT','Não precisa de controle'],a:2,why:'FARM-02.',c:['clinica','conceitual']},
    {id:'l1q2',image:'bank:farm_q03_0.jpg',q:'Fragmento de biópsia em meio com ureia e vermelho de fenol: amarelo virou rosa. Por quê?',ops:['A bactéria produz ácido','A urease hidrolisa a ureia em amônia, que eleva o pH e muda a cor','O IBP muda a cor','Contaminação'],a:1,why:'FARM-03.',c:['visual','fisiopatologia']},
    {id:'l1q3',q:'Úlcera duodenal com UBT positivo; 1ª linha preferida (ACG 2024) e papel do IBP:',ops:['IBP + amoxicilina + claritromicina por 7 dias','Só IBP','IBP + bismuto + tetraciclina + metronidazol por 14 dias; o IBP eleva o pH e favorece os antibióticos','Metronidazol isolado'],a:2,why:'FARM-04.',c:['clinica','conceitual']},
    {id:'l1q4',q:'Em quem pesquisar H. pylori sempre?',ops:['Toda dor abdominal','Úlcera péptica, linfoma MALT, câncer gástrico, dispepsia < 60 anos e história familiar de câncer gástrico','Só idosos','Só quem tem azia'],a:1,why:'Apostila, p. 3.',c:['clinica']},
    {id:'l1q5',image:'l004_73',q:'No gráfico, a IgG continua alta muito depois da infecção. Consequência prática:',ops:['A sorologia é ótima para confirmar a cura','A IgG positiva prova infecção ativa','A sorologia detecta exposição e permanece positiva após a cura; não usar para erradicação','A IgM é a única útil'],a:2,why:'Apostila, p. 4.',c:['visual','diferencial']},
    {id:'l1q6',q:'Preparo do UBT:',ops:['Pode usar IBP até a véspera','Jejum ≥ 6 h, sem gaseificadas por 12 h, sem antibiótico por 30 dias e, de preferência, sem IBP/anti-H2 por 30 dias','Refeição rica em ureia antes','Exercício físico antes'],a:1,why:'Apostila, p. 4.',c:['conceitual']}
  ]
};

/* ===== Laboratório 02 · Lactose e doença celíaca (apostila de Laboratório p. 6–9; FARM-05 a 08) ===== */
PM_MISSOES.push({
  id:'lab02', area:'lab', num:'02', titulo:'Intolerância à lactose e doença celíaca',
  sub:'Lactose × APLV, teste do H₂ e curva glicêmica, sorologias, biópsia e Marsh',
  pags:'6–9', ligados:['lab03'],
  questoes:['FARM-05','FARM-06','FARM-07','FARM-08'],
  etapas:[
  { t:'tabela', titulo:'Dois pares que não se confundem', p:'6',
    cols:['Intolerância à lactose','Alergia à proteína do leite (APLV)'],
    linhas:[
      ['O que é','Deficiência de **lactase**: o açúcar do leite não é digerido','Reação **imunológica** a proteínas (caseína, α-lactoalbumina, β-lactoglobulina)'],
      ['Mecanismo','**Não imune** (enzimático/osmótico)','**Imune** (IgE mediada ou não)'],
      ['Exames','**H₂ expirado**, teste de tolerância (glicemia)','**IgE específicas**, provocação oral']
    ]
  },
  { t:'tabela', titulo:'Celíaca × sensibilidade ao glúten', p:'6',
    cols:['Doença celíaca','SGNC'],
    linhas:[
      ['Natureza','**Autoimune**, desencadeada pelo glúten','Não autoimune; hipersensibilidade funcional'],
      ['Vilosidades','**Atrofia vilositária** (lesão estrutural)','Sem destruição'],
      ['Autoanticorpos','**Anti-tTG IgA**, anti-endomísio','Ausentes'],
      ['Diagnóstico','Sorologia + **biópsia duodenal** (padrão-ouro)','**De exclusão**: celíaca (−), alergia ao trigo (−), melhora sem glúten']
    ]
  },
  { t:'sequencia', titulo:'Por que a lactose dá sintomas', p:'6–7', img:'l006_85',
    passos:[
      { h:'↓ Lactase', txt:'Enzima da **borda em escova** do delgado; normalmente quebra lactose em glicose + galactose.' },
      { h:'Lactose chega ao cólon', txt:'Sem ser digerida.' },
      { h:'Fermentação bacteriana', txt:'As bactérias fermentam o açúcar.' },
      { h:'Gases e ácidos', txt:'**H₂ e CO₂** → distensão e flatulência. **Ácidos orgânicos + água** (osmose) → diarreia aquosa, fezes ácidas.' }
    ],
    nota:'Sintomas **30 min a 2 h** após a ingestão. Tipos: **primária** (mais comum, queda programada após o desmame), **secundária** (reversível; gastroenterite, celíaca, Crohn, quimioterapia) e **congênita** (rara, grave desde o nascimento).'
  },
  { t:'abas', titulo:'Os dois testes da lactose', p:'7',
    abas:[
      { rot:'H₂ expirado', img:'l007_89', leg:'Intolerante: H₂ sobe acima de basal + 20 ppm.',
        itens:['**Padrão-ouro**. Humanos não produzem H₂: só as **bactérias do cólon**.','Basal (normal < 10–15 ppm) → lactose → coletas a cada 30 min por 2–3 h.','**Positivo:** aumento **≥ 20 ppm** acima do basal (ex.: 5 → 30 ppm).','Preparo: suspender **antibióticos, probióticos e laxantes 2 semanas** antes.'] },
      { rot:'Curva glicêmica', img:'l007_90', leg:'Normal sobe ≥ 20 mg/dL; deficiência não sobe.',
        itens:['Se a lactase funciona, lactose vira glicose + galactose: a **glicemia sobe**.','**Normal:** sobe **≥ 20 mg/dL** acima do basal.','**Deficiência:** sobe **< 20 mg/dL** (curva "plana").'] }
    ],
    regra:'Outros critérios: clínico (sintomas + relação com leite + melhora com retirada), **pH fecal ácido** em crianças, teste genético.'
  },
  { t:'laudo', titulo:'Sem laticínios e ainda com sintomas', p:'8',
    intro:'Mulher de 40 anos ficou 2 semanas sem laticínios: os sintomas diminuíram, mas não sumiram.',
    paciente:'Teste de absorção da lactose e IgE',
    foco:'para separar intolerância de alergia',
    linhas:[
      { ex:'Glicose basal', val:'81 mg/dL', ref:'—', alt:false, nota:'Ponto de partida.' },
      { ex:'Glicose 15 min', val:'82 mg/dL', ref:'—', alt:false, nota:'Praticamente não subiu.' },
      { ex:'Glicose 30 min', val:'80 mg/dL', ref:'—', alt:false, nota:'Curva plana.' },
      { ex:'Glicose 60 min', val:'85 mg/dL', ref:'Elevação ≥ 20 mg/dL = normal', seta:'↓', alt:true, nota:'Subiu só **4 mg/dL** (81 → 85): **deficiência de lactase**.' },
      { ex:'IgE específicas (caseína, α-lactoalbumina, β-lactoglobulina, leite)', val:'< 0,10 kUA/L', ref:'Negativo', alt:false, nota:'Negativas: **não é APLV**.' }
    ],
    conclusao:'**Intolerância à lactose.** Se não fosse, a glicemia iria a 101–106 mg/dL. Sintomas residuais? **Lactose escondida** em industrializados.'
  },
  { t:'sequencia', titulo:'Doença celíaca', p:'8', img:'l008_94',
    passos:[
      { h:'Glúten', txt:'Trigo, cevada, centeio → digerido em **gliadina**.' },
      { h:'Atravessa a mucosa', txt:'A gliadina passa pela mucosa intestinal.' },
      { h:'tTG desamida', txt:'A **transglutaminase tecidual** modifica a gliadina.' },
      { h:'HLA-DQ2/DQ8', txt:'Apresentação → ativação imune → inflamação e autoanticorpos (**anti-tTG IgA**).' },
      { h:'Atrofia vilositária', txt:'**Má absorção**.' }
    ],
    nota:'Clássica: diarreia crônica, **esteatorreia**, distensão, perda de peso, **falha de crescimento**. Não clássica: **anemia ferropriva**, osteoporose, **dermatite herpetiforme**, neuropatia, infertilidade, assintomático.'
  },
  { t:'tabela', titulo:'Diagnóstico da celíaca', p:'8–9',
    cols:['Para que serve'],
    linhas:[
      ['Anti-tTG IgA','**Triagem**; sensibilidade > 95%'],
      ['Anti-endomísio IgA (EMA)','**Alta especificidade**'],
      ['Anti-gliadina deamidada (DGP)','Crianças pequenas; versão IgG na **deficiência de IgA**'],
      ['IgA total','**Dosar sempre**: deficiência de IgA é mais comum nos celíacos e dá **falso-negativo** nos testes IgA'],
      ['Biópsia duodenal','**Padrão-ouro**: atrofia, linfócitos intraepiteliais, hiperplasia de criptas (**Marsh** 0 a 3)'],
      ['Exceção em crianças','Pode dispensar biópsia: anti-tTG IgA **> 10×** + EMA positivo (2ª amostra) + HLA DQ2/DQ8']
    ],
    nota:'**Regra de ouro:** nunca iniciar dieta sem glúten antes da investigação: ela **negativa a sorologia** e recupera as vilosidades. Tratamento: **dieta sem glúten por toda a vida**.'
  },
  { t:'laudo', titulo:'A menina que não cresce', p:'9',
    intro:'Menina de 3 anos com diarreia precedida de dor e distensão, **fezes gordurosas**, às vezes sangue; não ganha peso nem cresce. Retirar o leite por 15 dias não ajudou.',
    paciente:'Sorologias',
    foco:'para doença celíaca',
    linhas:[
      { ex:'Anti-gliadina IgG', val:'38,7 U/mL', ref:'Positivo > 10,00', seta:'↑', alt:true, nota:'**Elevada**.' },
      { ex:'Anti-endomísio IgA', val:'Reagente', ref:'Não reagente < 1/10', alt:true, nota:'Reagente: **muito específico**.' },
      { ex:'Anti-transglutaminase IgA', val:'< 2,00 U/mL', ref:'Negativo < 7,0; positivo > 10,0', alt:false, nota:'Negativa: **discordante**. Pensar em **deficiência de IgA**.' }
    ],
    conclusao:'Hipótese: **doença celíaca** clássica. Dosar **IgA total** e confirmar com **biópsia duodenal** antes de retirar o glúten. A celíaca lesa a mucosa e pode causar **intolerância à lactose secundária**.'
  },
  { t:'resumo', titulo:'O que levar desta missão',
    itens:[
      'Lactose = **enzima** (não imune); APLV = **imune** (IgE). SGNC = exclusão; celíaca = autoimune com atrofia.',
      '**H₂ expirado** (padrão-ouro): **≥ 20 ppm** acima do basal = positivo. Curva glicêmica: sobe **< 20 mg/dL** = deficiência.',
      'Celíaca: triagem **anti-tTG IgA**; EMA muito específico; **dosar IgA total**; **biópsia** = padrão-ouro (Marsh).',
      '**Nunca** tirar o glúten antes da investigação. Tratamento: dieta sem glúten para sempre.'
    ]
  }
  ]
});
PM_CASES.lab02 = {
  investigation:{
    title:'Investigação · Laticínios e diarreia',
    fonte:'Caso da questão FARM-05 do banco de Farmacologia/Laboratório.',
    patient:{age:40,sex:'Feminino',complaint:'Distensão, flatulência e diarreia após laticínios',history:'Fez teste de tolerância à lactose e IgE específicas para proteínas do leite.'},
    evidence:[
      {id:'sint',label:'Sintomas',relevance:2,text:'**Distensão, flatulência, diarreia** após laticínios.',feedback:'Típicos da fermentação da lactose no cólon.'},
      {id:'curva',label:'Curva glicêmica',relevance:2,text:'Você vai ver o laudo na etapa 4.',feedback:'O laudo aparece na etapa 4.'},
      {id:'ige',label:'IgE específicas',relevance:2,text:'Você vai ver o laudo na etapa 4.',feedback:'Separam alergia de intolerância.'},
      {id:'peso',label:'Peso',relevance:0,text:'Sem perda de peso.',feedback:'Não aponta para má absorção grave.'}
    ],
    hypothesis:{prompt:'Hipótese principal:',options:['Intolerância à lactose','APLV','Doença celíaca'],correct:0,
      feedback:['Sintomas ligados à lactose, típicos da fermentação.','Possível, mas as IgE vão decidir.','Faltam esteatorreia e perda de peso.']},
    microscopy:{laudo:{paciente:'Teste de tolerância à lactose e IgE',linhas:[{ex:'Glicose basal',val:'81 mg/dL',ref:'—'},{ex:'Glicose 60 min',val:'85 mg/dL',ref:'Normal: sobe ≥ 20',seta:'↓',alt:true},{ex:'IgE específicas',val:'< 0,10 kUA/L',ref:'Negativo'}]},
      prompt:'Interpretação:',options:['APLV','Normal','Intolerância à lactose: glicemia subiu < 20 mg/dL e IgE negativas','Celíaca'],correct:2,hint:'Quanto a glicemia subiu?',competencies:['visual','conceitual'],
      explain:['IgE negativas.','Curva plana não é normal.','FARM-05.','Os exames não avaliam celíaca.']},
    differential:[
      {prompt:'Qual o padrão-ouro para intolerância à lactose?',options:['Teste do H₂ expirado','Biópsia','IgE','Sorologia anti-tTG'],correct:0,competencies:['clinica'],
        explain:['Mede o H₂ da fermentação bacteriana.','Não.','É para alergia.','É para celíaca.']},
      {prompt:'De onde vem o H₂ medido?',options:['Fermentação bacteriana no cólon','Do pulmão','Do fígado','Da própria lactase'],correct:0,competencies:['fisiopatologia'],
        explain:['Humanos não produzem H₂.','Não.','Não.','Não.']},
      {prompt:'Ela melhorou sem laticínios, mas não 100%. Por quê?',options:['Lactose escondida em industrializados','O teste errou','É APLV','É celíaca'],correct:0,competencies:['diferencial'],
        explain:['Explicação da apostila.','Não.','IgE negativas.','Nada sugere.']}
    ],
    final:{prompt:'Conclusão:',options:['Intolerância à lactose, sem APLV','APLV','Normal','SGNC'],correct:0,
      keyPrompt:'Dado decisivo:',keyOptions:['Glicemia subiu só 4 mg/dL com IgE negativas','Flatulência','Idade','Diarreia'],keyCorrect:0,competencies:['clinica','diferencial','visual']},
    debrief:{diagnosis:'Intolerância à lactose (deficiência de lactase)',evidence:['Curva glicêmica **plana**: 81 → 85 mg/dL (< 20).','**IgE negativas**: não é APLV.','Sintomas da **fermentação** no cólon.'],
      clinic:'Sintomas residuais costumam vir de lactose escondida em industrializados.',
      revisar:{conceitual:'Dois pares que não se confundem',visual:'Sem laticínios e ainda com sintomas (laudo)',diferencial:'Dois pares que não se confundem',clinica:'Os dois testes da lactose (p. 7)',fisiopatologia:'Por que a lactose dá sintomas (p. 6–7)'}}
  },
  mastery:[
    {id:'l2q1',q:'Sobre o teste do H₂ expirado:',ops:['O H₂ é produzido pelas células intestinais','Positivo se cair 20 ppm','O H₂ vem da fermentação bacteriana no cólon; aumento ≥ 20 ppm é positivo','Não precisa de preparo'],a:2,why:'FARM-06.',c:['conceitual','fisiopatologia']},
    {id:'l2q2',q:'Menina de 3 anos com esteatorreia e baixo ganho; a mãe quer tirar o glúten antes do especialista. Orientação:',ops:['Tirar o glúten já','Manter o glúten até concluir sorologia e biópsia: a dieta pode negativar os exames','Tirar o leite de novo','Fazer só o teste do H₂'],a:1,why:'FARM-07.',c:['clinica']},
    {id:'l2q3',q:'Celíaca × SGNC:',ops:['Ambas têm atrofia','SGNC tem anti-tTG positivo','Na celíaca há autoanticorpos e lesão estrutural; a SGNC é diagnóstico de exclusão','Celíaca não é autoimune'],a:2,why:'FARM-08.',c:['conceitual','diferencial']},
    {id:'l2q4',laudo:{paciente:'Sorologias',linhas:[{ex:'Anti-endomísio IgA',val:'Reagente',ref:'Não reagente',alt:true},{ex:'Anti-tTG IgA',val:'< 2,00 U/mL',ref:'Negativo < 7,0'}]},q:'Criança com quadro clássico e estes exames. Próximo passo:',ops:['Excluir celíaca','Dosar IgA total e confirmar com biópsia duodenal','Tirar o glúten e reavaliar','Pedir IgE para leite'],a:1,why:'Apostila, p. 9: discordância sugere deficiência de IgA.',c:['visual','clinica']},
    {id:'l2q5',image:'l008_94',q:'Lesão da doença celíaca na biópsia, à direita da figura:',ops:['Vilosidades normais','Atrofia vilositária, com linfócitos intraepiteliais e hiperplasia de criptas (Marsh)','Úlceras salteadas','Pólipo'],a:1,why:'Apostila, p. 8–9.',c:['visual','conceitual']},
    {id:'l2q6',q:'Intolerância à lactose que melhora quando a mucosa se recupera (após gastroenterite ou celíaca) é:',ops:['Primária','Congênita','Secundária','APLV'],a:2,why:'Apostila, p. 7.',c:['fisiopatologia','diferencial']}
  ]
};

/* ===== Laboratório 03 · EPF e coprocultura (apostila de Laboratório p. 9–13; FARM-09 a 12) ===== */
PM_MISSOES.push({
  id:'lab03', area:'lab', num:'03', titulo:'Parasitológico de fezes e coprocultura',
  sub:'Qual método para qual parasita, coprocultura, antibiograma e antiparasitários',
  pags:'9–13', ligados:['lab02'],
  questoes:['FARM-09','FARM-10','FARM-11','FARM-12'],
  etapas:[
  { t:'texto', titulo:'O exame parasitológico de fezes', p:'9',
    corpo:[
      '**Finalidade:** identificar parasitas intestinais (protozoários e helmintos) ao microscópio.',
      '**O que se procura:** helmintos (vermes) → **ovos e larvas**; protozoários → **cistos e trofozoítos**.',
      '**Quando pedir:** diarreia crônica, dor abdominal recorrente, **eosinofilia**, anemia inexplicada, perda de peso, suspeita de verminose.'
    ],
    destaque:'Na prática: **3 amostras** em dias alternados, por **sedimentação espontânea** (Hoffmann/HPJ), em frasco com **MIF**. Uma amostra pode ser feita, mas três aumentam a sensibilidade (a eliminação é **intermitente**). Com suspeita específica, acrescenta-se o método direcionado.'
  },
  { t:'abas', titulo:'Um método para cada alvo', p:'10–11',
    abas:[
      { rot:'Kato-Katz', img:'l010_102', leg:'Ovo de S. mansoni: oval, com espículo lateral.',
        itens:['Para parasitos que eliminam **muitos ovos**: **Schistosoma mansoni** (principal), Ascaris, Trichuris, ancilostomídeos.','**Quantitativo**: ovos por grama de fezes; padrão-ouro em programas de controle da esquistossomose.','Celofane com glicerina e verde-malaquita clareia a amostra.'] },
      { rot:'Hoffmann (HPJ)', img:'l010_103', leg:'Ovo de Enterobius, cistos de E. coli e Giardia.',
        itens:['**Sedimentação espontânea**: o exame **de rotina**.','Ovos de helmintos e cistos de protozoários (Ascaris, Giardia, E. histolytica).','Simples, barato, boa sensibilidade.'] },
      { rot:'Faust', img:'l010_104', leg:'Cistos de Giardia.',
        itens:['**Centrífugo-flutuação** em sulfato de zinco: os **cistos leves flutuam**.','Para **protozoários**: Giardia e E. histolytica.','Excelente na diarreia crônica por protozoário.'] },
      { rot:'Baermann', img:'l011_108', leg:'Larva rabditoide de Strongyloides.',
        itens:['Larvas vivas migram para a **água morna** (hidro e termotropismo).','Alvo: **Strongyloides stercoralis**.','Ideal quando o EPF comum é negativo. Amostra **fresca, sem conservante**.'] },
      { rot:'Graham', img:'l010_103', leg:'Ovo de Enterobius: assimétrico, em "D".',
        itens:['**Fita adesiva** na região perianal pela manhã, antes do banho.','Para **Enterobius** (oxiúros): a fêmea põe os ovos na pele perianal, por isso o EPF comum costuma ser negativo.','Clínica: **prurido anal noturno** em crianças.'] }
    ]
  },
  { t:'tabela', titulo:'Qual parasita, qual método', p:'11–12',
    cols:['Suspeita','Pedir'],
    linhas:[
      ['Hepatoesplenomegalia + diarreia + eosinofilia + água doce (caramujo)','**Esquistossomose**','**Kato-Katz**'],
      ['Criança rural, dor, distensão, anemia, verme nas fezes','**Ascaridíase**','Kato-Katz ou Hoffmann'],
      ['Diarreia + eosinofilia + trabalho descalço + **corticoide**','**Estrongiloidíase**','**Baermann**'],
      ['Diarreia aquosa/gordurosa + flatulência após água não tratada','**Giardíase**','**Faust**'],
      ['Diarreia com muco e sangue + febre','**Amebíase**','Faust ou Hoffmann']
    ],
    nota:'**Corticoide + Strongyloides = risco de hiperinfecção.** Pensar antes de imunossuprimir.'
  },
  { t:'tabela', titulo:'O que se vê ao microscópio', p:'11',
    cols:['Aspecto'],
    linhas:[
      ['Ovo de S. mansoni','Oval, grande, com **espículo lateral**'],
      ['Ovo de Ascaris','Arredondado, casca grossa e **mamilonada**'],
      ['Ovo de Enterobius','Assimétrico, em **"D"**'],
      ['Strongyloides','**Larva rabditoide** móvel (elimina larva, não ovo)'],
      ['Cisto de Giardia','Oval, **4 núcleos** e axonemas'],
      ['Cisto de E. histolytica','Esférico, até 4 núcleos; trofozoíto pode ter **hemácias fagocitadas**']
    ]
  },
  { t:'abas', titulo:'Coprocultura e antibiograma', p:'12–13',
    abas:[
      { rot:'Coprocultura', img:'l012_112', leg:'Coleta, semeadura, incubação e identificação.',
        itens:['Isola **bactérias enteropatogênicas**: Salmonella, Shigella, Campylobacter, E. coli (ex.: **STEC**).','Pedir em: diarreia aguda **com febre**, **com sangue**, intoxicação alimentar, surtos, paciente grave ou imunossuprimido.','**Coleta:** antes do antibiótico, **frasco estéril**, sem urina ou água do vaso, ≈ 5 g de fezes recentes; envio rápido ou refrigerar 2–8 °C.'] },
      { rot:'Kirby-Bauer', img:'l012_113', leg:'Halo grande = sensível; sem halo = resistente.',
        itens:['Disco-difusão em ágar **Mueller-Hinton**, 18–24 h a 35–37 °C.','Em geral, **quanto maior o halo, maior a sensibilidade**.','**S** = eficaz na dose padrão; **I** = depende de dose maior ou concentração local; **R** = não usar.','**CIM** = menor concentração que inibe a bactéria.'] }
    ]
  },
  { t:'texto', titulo:'Caso: E. coli produtora de toxina Shiga', p:'13',
    corpo:[
      'Mulher de 35 anos com diarreia intensa, dor e febre há 3 dias após alimento de procedência duvidosa.',
      'Coprocultura: **STEC**, sensível a ciprofloxacino e ceftriaxona.',
      'O laboratório mede o halo e classifica S/I/R; escolhe-se um antibiótico **S**, com hidratação e orientação contra automedicação.'
    ],
    destaque:'Atenção: na **STEC**, antibiótico é **controverso** (pode aumentar a liberação de toxina e o risco de **síndrome hemolítico-urêmica**): decisão individualizada.'
  },
  { t:'tabela', titulo:'Antiparasitários', p:'13',
    cols:['Mecanismo','Espectro'],
    linhas:[
      ['Benzimidazóis (albendazol, mebendazol)','Ligam-se à **β-tubulina** → sem microtúbulos → sem captação de **glicose** → morte','Ascaris, Trichuris, ancilostomídeos, Strongyloides; neurocisticercose'],
      ['Ivermectina','Canais de **cloro** dependentes de glutamato → hiperpolarização → **paralisia flácida**','**Strongyloides**, oncocercose, escabiose, piolho'],
      ['Praziquantel','↑ permeabilidade ao **Ca²⁺** → contração, paralisia, lesão do tegumento','**Schistosoma**, teníase, cestódeos'],
      ['Nitroimidazóis (metronidazol)','Grupo nitro reduzido no anaeróbio → radicais → quebra do **DNA**','**Giardia**, E. histolytica, tricomoníase'],
      ['Nitazoxanida','Inibe a **PFOR** → ↓ metabolismo anaeróbio','Giardíase, Cryptosporidium']
    ]
  },
  { t:'resumo', titulo:'O que levar desta missão',
    itens:[
      'EPF de rotina: **Hoffmann**, 3 amostras (eliminação intermitente), MIF.',
      '**Kato-Katz** = Schistosoma (espículo lateral), quantitativo. **Faust** = cistos (Giardia). **Baermann** = Strongyloides, amostra fresca. **Graham** = Enterobius.',
      'Corticoide + Strongyloides = **hiperinfecção**: ivermectina.',
      'Coprocultura: diarreia com febre/sangue, surtos; **antes do antibiótico**, frasco estéril. Halo maior = mais sensível. STEC: antibiótico controverso (SHU).',
      'Albendazol = **β-tubulina**; ivermectina = **canais de Cl⁻**; praziquantel = **Ca²⁺**; metronidazol = **DNA**.'
    ]
  }
  ]
});
PM_CASES.lab03 = {
  investigation:{
    title:'Investigação · Agricultor que toma banho na lagoa',
    fonte:'Caso da questão FARM-09 do banco de Farmacologia/Laboratório.',
    patient:{age:45,sex:'Masculino',complaint:'Fraqueza, perda de peso e diarreia',history:'Agricultor do interior; toma banho em lagoas onde há caramujos.'},
    evidence:[
      {id:'agua',label:'Exposição',relevance:2,text:'Banho em **lagoas com caramujos**.',feedback:'Água doce com caramujo: ciclo do Schistosoma.'},
      {id:'ef',label:'Exame físico',relevance:2,text:'Hepatomegalia leve e **esplenomegalia moderada**.',feedback:'Hepatoesplenomegalia sugere esquistossomose.'},
      {id:'hemo',label:'Hemograma',relevance:2,text:'**Eosinofilia.**',feedback:'Aponta para helmintíase.'},
      {id:'febre',label:'Febre',relevance:0,text:'Não relatada.',feedback:'Não muda a hipótese.'}
    ],
    hypothesis:{prompt:'Hipótese:',options:['Esquistossomose mansônica','Giardíase','Estrongiloidíase','Amebíase'],correct:0,
      feedback:['Água doce com caramujo, hepatoesplenomegalia, eosinofilia.','Giardíase: água não tratada, diarreia gordurosa.','Strongyloides: solo, pés descalços, corticoide.','Amebíase: muco, sangue, febre.']},
    microscopy:{image:'l010_102',prompt:'Ovo encontrado no exame direcionado. Que método e que achado?',options:['Kato-Katz: ovo oval com espículo lateral, contado por grama de fezes','Baermann: larva rabditoide','Graham: ovo em "D"','Faust: cisto com 4 núcleos'],correct:0,hint:'Procure o espinho lateral.',competencies:['visual','conceitual'],
      explain:['FARM-09.','É do Strongyloides.','É do Enterobius.','É da Giardia.']},
    differential:[
      {prompt:'Por que Kato-Katz?',options:['É quantitativo e padrão-ouro em programas de esquistossomose','Porque detecta larvas vivas','Porque usa fita adesiva','Porque detecta bactérias'],correct:0,competencies:['clinica'],
        explain:['Estima ovos por grama.','Isso é o Baermann.','Isso é o Graham.','Isso é a coprocultura.']},
      {prompt:'Qual fármaco age no Schistosoma?',options:['Praziquantel: ↑ permeabilidade ao Ca²⁺','Metronidazol','Nitazoxanida','Ivermectina'],correct:0,competencies:['fisiopatologia'],
        explain:['Contração, paralisia, lesão do tegumento.','É para protozoários.','Giardia, Cryptosporidium.','Strongyloides.']},
      {prompt:'Se o paciente usasse corticoide e andasse descalço, o que temer?',options:['Hiperinfecção por Strongyloides','Giardíase','Nada','Enterobíase'],correct:0,competencies:['diferencial'],
        explain:['Corticoide + Strongyloides.','Não.','Há risco.','Não.']}
    ],
    final:{prompt:'Conclusão:',options:['Esquistossomose; Kato-Katz com ovos de espículo lateral','Giardíase; Faust','Estrongiloidíase; Baermann','Coprocultura'],correct:0,
      keyPrompt:'Dado decisivo:',keyOptions:['Banho em lagoa com caramujos + hepatoesplenomegalia + eosinofilia','Perda de peso','Fraqueza','Idade'],keyCorrect:0,competencies:['clinica','diferencial','visual']},
    debrief:{diagnosis:'Esquistossomose mansônica',evidence:['Água doce com **caramujo** (Biomphalaria).','**Hepatoesplenomegalia**, diarreia, **eosinofilia**.','Kato-Katz: ovo **oval com espículo lateral**, contado por grama.'],
      clinic:'Tratamento com praziquantel, que aumenta a permeabilidade ao cálcio.',
      revisar:{conceitual:'Um método para cada alvo (p. 10–11)',visual:'O que se vê ao microscópio',diferencial:'Qual parasita, qual método',clinica:'Qual parasita, qual método',fisiopatologia:'Antiparasitários (p. 13)'}}
  },
  mastery:[
    {id:'l3q1',q:'Trabalhador rural descalço, diarreia e eosinofilia; corticoide por 20 dias; dois EPF (Hoffmann) negativos. Conduta:',ops:['Baermann em amostra fresca e ivermectina','Repetir Hoffmann e albendazol','Graham','Coprocultura'],a:0,why:'FARM-10.',c:['clinica','diferencial']},
    {id:'l3q2',q:'Coprocultura com antibiograma na diarreia febril após viagem. Correto:',ops:['Coletar após iniciar antibiótico','Coletar em frasco estéril antes do antibiótico; halo maior indica, em geral, mais sensibilidade','Halo maior indica resistência','Pode misturar com urina'],a:1,why:'FARM-11.',c:['conceitual','clinica']},
    {id:'l3q3',q:'Mecanismo do albendazol na ascaridíase:',ops:['Canais de cloro','Ca²⁺','Ligação à β-tubulina, inibindo microtúbulos e a captação de glicose','Quebra do DNA'],a:2,why:'FARM-12.',c:['fisiopatologia']},
    {id:'l3q4',image:'l011_108',q:'Larva móvel na amostra fresca. Parasita e fármaco:',ops:['Ascaris; albendazol','Strongyloides; ivermectina','Giardia; metronidazol','Schistosoma; praziquantel'],a:1,why:'Apostila, p. 11 e 13.',c:['visual','clinica']},
    {id:'l3q5',image:'l012_113',q:'No antibiograma, disco com halo grande e disco sem halo. Interpretação:',ops:['Ambos sensíveis','Halo grande sugere sensível; sem halo, resistente','Sem halo = sensível','O halo não importa'],a:1,why:'Apostila, p. 12.',c:['visual','conceitual']},
    {id:'l3q6',q:'Criança com prurido anal noturno e EPF comum negativo. Método:',ops:['Kato-Katz','Baermann','Graham (fita adesiva perianal, de manhã, antes do banho)','Coprocultura'],a:2,why:'Apostila, p. 11.',c:['clinica','diferencial']}
  ]
};

/* ===== Laboratório 05 · Lipidograma (apostila de Laboratório p. 16–18; FARM-17 a 20) ===== */
PM_MISSOES.push({
  id:'lab05', area:'lab', num:'05', titulo:'Lipidograma',
  sub:'Lipoproteínas, colesterol, ApoB, Friedewald, não-HDL e metas',
  pags:'16–18', ligados:['lab04'],
  questoes:['FARM-17','FARM-18','FARM-19','FARM-20'],
  etapas:[
  { t:'texto', titulo:'Lipídios viajam de carona', p:'16', img:'l016_130',
    leg:'Lipoproteína: núcleo de TG e colesterol esterificado, superfície de fosfolipídios e apolipoproteína.',
    corpo:[
      'O sangue é aquoso e os lipídios são hidrofóbicos: colesterol e TG viajam em **lipoproteínas** (lipídio + proteína).',
      '**Apolipoproteínas** são a parte proteica: organizam e direcionam o transporte.',
      'Funções dos lipídios: membranas, energia, hormônios esteroides, absorção de vitaminas **ADEK**, mielina.'
    ]
  },
  { t:'sequencia', titulo:'As três vias', p:'16–17', img:'l017_134',
    passos:[
      { h:'Via exógena', txt:'Intestino → **quilomícron** (TG da dieta).' },
      { h:'Via endógena', txt:'Fígado → **VLDL** (TG endógeno) → IDL → **LDL** (colesterol para os tecidos).' },
      { h:'Transporte reverso', txt:'**HDL** leva colesterol dos tecidos de volta ao fígado.' }
    ],
    nota:'**LDL** = "ruim", aterogênico. **HDL** = "bom". **VLDL** carrega principalmente TG do fígado.'
  },
  { t:'texto', titulo:'Colesterol e estatina', p:'17',
    corpo:[
      'Produzido principalmente no **fígado**, a partir de acetil-CoA (via do mevalonato). Enzima-chave: **HMG-CoA redutase**, alvo das **estatinas**.',
      '**Endógeno 70–80%**; exógeno 20–30% (ovos, carnes, leite, gordura animal).',
      'Funções: membranas, precursor de **hormônios esteroides**, **vitamina D**, **sais biliares**.'
    ],
    destaque:'Estatina bloqueia a HMG-CoA redutase → fígado faz menos colesterol → **↑ receptores de LDL** → **↓ LDL** no sangue.'
  },
  { t:'texto', titulo:'ApoA-I e ApoB', p:'17',
    corpo:[
      '**ApoA-I:** principal apolipoproteína do HDL (transporte reverso).',
      '**ApoB:** presente nas partículas **aterogênicas** (quilomícrons, VLDL, IDL, LDL, Lp(a)); em geral **uma ApoB por partícula**.',
      '**LDL-c** mede quanto colesterol há dentro das LDL; **ApoB** estima **quantas partículas** aterogênicas existem.',
      'SBC 2025: ApoB ajuda a avaliar risco e terapia, sobretudo com **TG > 150 mg/dL**. O **não-HDL-c** é a alternativa prática.'
    ]
  },
  { t:'tabela', titulo:'As contas do lipidograma', p:'18',
    cols:['Fórmula','Observação'],
    linhas:[
      ['Friedewald','**LDL = CT − HDL − TG/5**','Só vale com **TG < 400 mg/dL**; TG/5 estima o VLDL'],
      ['Não-HDL','**CT − HDL**','Colesterol de todas as aterogênicas; útil com **TG altos**'],
      ['TG ≥ 400','Friedewald **não vale**','Usar **LDL direto**, não-HDL ou **ApoB**']
    ]
  },
  { t:'laudo', titulo:'Calcule você', p:'18',
    intro:'Exemplo resolvido da apostila. Calcule antes de olhar as notas.',
    paciente:'Lipidograma',
    foco:'para estimar LDL e não-HDL',
    linhas:[
      { ex:'Colesterol total', val:'240 mg/dL', ref:'—', alt:false, nota:'Ponto de partida.' },
      { ex:'HDL', val:'40 mg/dL', ref:'Homens: < 40 = baixo', alt:false, nota:'No limite.' },
      { ex:'Triglicerídeos', val:'200 mg/dL', ref:'< 150 normal; 200–499 alto', seta:'↑', alt:true, nota:'**Alto**, mas < 400: Friedewald vale. VLDL = 200 ÷ 5 = **40**.' },
      { ex:'LDL (calculado)', val:'160 mg/dL', ref:'< 100 ótimo; 160–189 alto', seta:'↑', alt:true, nota:'240 − 40 − 40 = **160**: "alto".' },
      { ex:'Não-HDL (calculado)', val:'200 mg/dL', ref:'Meta = meta do LDL + 30', seta:'↑', alt:true, nota:'240 − 40 = **200**.' }
    ],
    conclusao:'LDL **160** (alto) e não-HDL **200**. A meta depende do **risco cardiovascular** (escore **PREVENT**).'
  },
  { t:'tabela', titulo:'Valores de referência', p:'18',
    cols:['Faixas'],
    linhas:[
      ['LDL','< 100 ótimo · 100–129 desejável · 130–159 limítrofe · 160–189 alto · ≥ 190 muito alto'],
      ['HDL','Baixo < 40 (homens) ou < 50 (mulheres) · ≥ 60 protetor'],
      ['TG','< 150 normal · 150–199 limítrofe · 200–499 alto · ≥ 500 muito alto'],
      ['TG > 500–1.000','Risco de **pancreatite aguda**']
    ]
  },
  { t:'tabela', titulo:'Metas por risco', p:'18',
    cols:['LDL-c','Não-HDL / ApoB'],
    linhas:[
      ['Baixo','< 115','< 145 / < 100'],
      ['Intermediário','< 100','< 130 / < 90'],
      ['Alto','**< 70**','**< 100 / < 70**'],
      ['Muito alto','< 50','< 80 / < 55'],
      ['Extremo','< 40','< 70 / < 45']
    ],
    nota:'Regra prática: **meta do não-HDL = meta do LDL + 30**.'
  },
  { t:'resumo', titulo:'O que levar desta missão',
    itens:[
      'Quilomícron (dieta) → VLDL → IDL → LDL; **HDL** faz o transporte reverso.',
      '**HMG-CoA redutase** = alvo das estatinas → ↑ receptores de LDL.',
      '**ApoB** = número de partículas aterogênicas; útil com TG > 150.',
      'Friedewald: **LDL = CT − HDL − TG/5**, só com **TG < 400**. Não-HDL = **CT − HDL**.',
      'Metas pelo risco (PREVENT); alto risco: LDL **< 70**, não-HDL **< 100**, ApoB **< 70**.'
    ]
  }
  ]
});
PM_CASES.lab05 = {
  investigation:{
    title:'Investigação · Triglicerídeos de 520',
    fonte:'Caso da questão FARM-18 do banco de Farmacologia/Laboratório.',
    patient:{age:55,sex:'Feminino',complaint:'Avaliação do risco cardiovascular',history:'Diabética e obesa. O médico quer estimar a carga aterogênica.'},
    evidence:[
      {id:'dm',label:'Comorbidades',relevance:1,text:'**Diabetes** e **obesidade**.',feedback:'Aumentam o risco cardiovascular.'},
      {id:'lip',label:'Lipidograma',relevance:2,text:'Você vai ver o laudo na etapa 4.',feedback:'O laudo aparece na etapa 4.'},
      {id:'dor',label:'Dor abdominal',relevance:0,text:'Ausente.',feedback:'Sem quadro de pancreatite.'},
      {id:'fam',label:'Família',relevance:0,text:'Não informado.',feedback:'Não muda o cálculo.'}
    ],
    hypothesis:{prompt:'O que se quer medir?',options:['Carga aterogênica','Função hepática','Função renal'],correct:0,
      feedback:['Partículas que levam colesterol à parede arterial.','Não.','Não.']},
    microscopy:{laudo:{paciente:'Lipidograma',linhas:[{ex:'Colesterol total',val:'230 mg/dL',ref:'—'},{ex:'HDL',val:'32 mg/dL',ref:'Mulheres: < 50 = baixo',seta:'↓',alt:true},{ex:'Triglicerídeos',val:'520 mg/dL',ref:'≥ 500 muito alto',seta:'↑',alt:true}]},
      prompt:'Como estimar a carga aterogênica?',options:['Friedewald: LDL = 230 − 32 − 104','Usar não-HDL-c ou ApoB; Friedewald não vale com TG ≥ 400','HDL basta','Repetir só os TG'],correct:1,hint:'Olhe os TG antes de aplicar a fórmula.',competencies:['visual','conceitual'],
      explain:['Com TG ≥ 400 o VLDL estimado fica errado.','FARM-18.','Não estima a carga aterogênica.','Não resolve.']},
    differential:[
      {prompt:'Quanto é o não-HDL?',options:['198 mg/dL','262 mg/dL','94 mg/dL','230 mg/dL'],correct:0,competencies:['conceitual'],
        explain:['230 − 32 = 198.','Somou.','Não.','É o CT.']},
      {prompt:'Por que a ApoB é boa aqui?',options:['Estima o número de partículas aterogênicas, especialmente com TG > 150','Mede o HDL','Mede a glicemia','Não serve'],correct:0,competencies:['fisiopatologia'],
        explain:['Uma ApoB por partícula.','Isso é a ApoA-I.','Não.','Serve.']},
      {prompt:'TG de 520 traz outro risco?',options:['Pancreatite aguda (TG > 500–1.000)','Nenhum','Hepatite','Litíase renal'],correct:0,competencies:['clinica'],
        explain:['Ver missão de pancreatite.','Há.','Não.','Não.']}
    ],
    final:{prompt:'Conclusão:',options:['Usar não-HDL (198) ou ApoB; Friedewald inválido','LDL por Friedewald é confiável','Lipidograma normal','Só o HDL importa'],correct:0,
      keyPrompt:'Dado decisivo:',keyOptions:['TG ≥ 400 mg/dL','Diabetes','HDL baixo','Idade'],keyCorrect:0,competencies:['clinica','diferencial','visual']},
    debrief:{diagnosis:'Dislipidemia com TG muito altos: carga aterogênica pelo não-HDL ou ApoB',evidence:['**TG 520** → Friedewald não vale.','Não-HDL = 230 − 32 = **198 mg/dL**.','ApoB estima o **número de partículas**.'],
      clinic:'TG acima de 500–1.000 também elevam o risco de pancreatite.',
      revisar:{conceitual:'As contas do lipidograma',visual:'Calcule você (laudo)',diferencial:'ApoA-I e ApoB (p. 17)',clinica:'Metas por risco',fisiopatologia:'ApoA-I e ApoB (p. 17)'}}
  },
  mastery:[
    {id:'l5q1',laudo:{paciente:'Lipidograma',linhas:[{ex:'Colesterol total',val:'250 mg/dL',ref:'—'},{ex:'HDL',val:'45 mg/dL',ref:'—'},{ex:'Triglicerídeos',val:'175 mg/dL',ref:'< 150',seta:'↑',alt:true}]},q:'Pela fórmula de Friedewald, LDL e não-HDL são:',ops:['170 e 205 mg/dL','205 e 170 mg/dL','135 e 205 mg/dL','170 e 250 mg/dL'],a:0,why:'FARM-17: 250 − 45 − 35 = 170; 250 − 45 = 205.',c:['visual','conceitual']},
    {id:'l5q2',q:'Enzima-chave da síntese do colesterol, alvo das estatinas:',ops:['Lipase lipoproteica','HMG-CoA redutase','Lactase','Transglutaminase'],a:1,why:'FARM-19.',c:['fisiopatologia']},
    {id:'l5q3',q:'Risco alto (PREVENT): LDL 92, não-HDL 118, ApoB 82 mg/dL. Correto:',ops:['Todas as metas atingidas','Só o LDL atingiu','Só a ApoB atingiu','Nenhuma: metas são LDL < 70, não-HDL < 100 e ApoB < 70'],a:3,why:'FARM-20.',c:['clinica']},
    {id:'l5q4',q:'Qual lipoproteína faz o transporte reverso do colesterol?',ops:['LDL','VLDL','HDL','Quilomícron'],a:2,why:'Apostila, p. 16–17.',c:['conceitual']},
    {id:'l5q5',q:'LDL-c × ApoB:',ops:['São a mesma coisa','LDL-c mede o colesterol dentro das LDL; ApoB estima o número de partículas aterogênicas','ApoB é do HDL','ApoB só existe no quilomícron'],a:1,why:'Apostila, p. 17.',c:['conceitual','diferencial']},
    {id:'l5q6',q:'Se a meta de LDL é < 70 mg/dL, a de não-HDL é:',ops:['< 70','< 100','< 130','< 40'],a:1,why:'Regra prática: LDL + 30.',c:['clinica']}
  ]
};

/* ===== Laboratório 06 · Função hepática e hepatites virais (apostila de Laboratório p. 18–23; FARM-21 a 25) ===== */
PM_MISSOES.push({
  id:'lab06', area:'lab', num:'06', titulo:'Função hepática e hepatites virais',
  sub:'Lesão × função, padrões de enzimas, bilirrubinas, INR e sorologias das hepatites A a E',
  pags:'18–23', ligados:['img07','img06'],
  questoes:['FARM-21','FARM-22','FARM-23','FARM-24','FARM-25'],
  etapas:[
  { t:'tabela', titulo:'Lesão × função', p:'19',
    cols:['O que mede','Exames'],
    linhas:[
      ['Lesão','Enzimas liberadas quando hepatócito ou via biliar sofrem','**AST (TGO), ALT (TGP), FA, GGT**'],
      ['Função','O que o fígado **produz ou excreta**','**Bilirrubinas, albumina, TP/INR**']
    ],
    nota:'Pode haver **lesão com função normal** (fase inicial) e **função alterada com enzimas pouco elevadas** (doença crônica, como a cirrose).'
  },
  { t:'tabela', titulo:'As quatro enzimas', p:'19',
    cols:['Onde / característica','Referência'],
    linhas:[
      ['AST (TGO)','Fígado, coração, músculo; **menos específica**; meia-vida ≈ 17 h','10–40 U/L'],
      ['ALT (TGP)','Principalmente fígado: **mais específica** do hepatócito; ≈ 47 h','7–56 U/L'],
      ['FA','Fígado e ossos; **lesão canalicular**; sobe mais na **obstrução extra-hepática**; óssea em crianças','40–130 U/L'],
      ['GGT','Hepatobiliar; **a mais sensível**: primeira a subir, última a cair; ↑ com **álcool** e indutores','H 10–71 / M 6–42 U/L']
    ],
    nota:'AST/ALT **> 3×** = lesão leve; **> 10×** = grave. FA **> 3×** sugere colestase; **> 5×** obstrução biliar. **GGT ↑ + FA ↑** confirma que a FA é **hepática**, e não óssea.'
  },
  { t:'tabela', titulo:'Padrões que contam a história', p:'19–20',
    cols:['Padrão'],
    linhas:[
      ['Hepatite viral aguda','AST e ALT **10–50×**; FA normal ou leve'],
      ['Medicamentosa / tóxica','AST e ALT **> 1.000**'],
      ['Isquemia (fígado de choque)','AST e ALT em **milhares**'],
      ['Hepatite alcoólica','**AST > ALT (≈ 2:1)** + **GGT alta**'],
      ['Colestase intra-hepática','**FA ↑↑↑**, GGT ↑↑; transaminases leves'],
      ['Obstrução extra-hepática','**FA ↑↑↑↑**, GGT ↑↑↑'],
      ['Hepatite autoimune','AST e ALT 5–20×'],
      ['Rabdomiólise','**AST ↑** com ALT normal ou pouco alterada; FA e GGT normais']
    ]
  },
  { t:'abas', titulo:'Marcadores de função', p:'20–21',
    abas:[
      { rot:'Bilirrubinas', img:'l020_145', leg:'Da hemácia à urina e às fezes.',
        itens:['BT **> 2–3 mg/dL**: icterícia visível; > 5: disfunção importante ou colestase.','**BD ↑:** hepatite, colestase, obstrução. Hidrossolúvel → **colúria**; não chega ao intestino → **acolia**; prurido.','**BI ↑:** hemólise, defeito de conjugação, **Gilbert**. BI isolada **não** indica perda de função.'] },
      { rot:'Albumina', img:'l020_145', leg:'Proteína sintetizada no fígado.',
        itens:['≈ ⅔ das proteínas totais; mantém a **pressão oncótica**.','**< 3,5** sugere ↓ síntese; **< 2,8** disfunção importante.','Meia-vida **≈ 20 dias**: útil na doença **crônica**.'] },
      { rot:'TP / INR', img:'l020_146', leg:'Vias da coagulação.',
        itens:['**Melhor marcador de função hepática aguda**: fatores com meia-vida de horas.','**INR ≥ 1,5** disfunção significativa; **≥ 2,0** grave.','INR alto: ↓ síntese, falência, ou **falta de vitamina K**.','Na **obstrução prolongada**, sem bile não se absorve vitamina K: o INR sobe e **corrige com vitamina K parenteral**.','TTPa só altera na insuficiência avançada.'] }
    ]
  },
  { t:'laudo', titulo:'Estação 1: lombalgia e paracetamol', p:'21',
    intro:'Homem de 48 anos usou **doses elevadas de paracetamol** para lombalgia. Náuseas, dor abdominal e fadiga, **sem icterícia**.',
    paciente:'Bioquímica hepática',
    foco:'separando lesão de função',
    linhas:[
      { ex:'TGO (AST)', val:'386 U/L', ref:'10–40', seta:'↑', alt:true, nota:'Lesão.' },
      { ex:'TGP (ALT)', val:'460 U/L', ref:'7–56', seta:'↑', alt:true, nota:'**TGP > TGO**: padrão **hepatocelular**.' },
      { ex:'GGT', val:'378 U/L', ref:'H 10–71', seta:'↑', alt:true, nota:'Sobe com fármacos (indução).' },
      { ex:'FA', val:'62 U/L', ref:'40–130', alt:false, nota:'Normal: não é colestase.' },
      { ex:'Bilirrubina total', val:'0,7 mg/dL', ref:'até 1,2', alt:false, nota:'Função excretora preservada.' },
      { ex:'Albumina', val:'4,3 g/dL', ref:'≥ 3,5', alt:false, nota:'Síntese preservada.' },
      { ex:'INR', val:'1,14', ref:'< 1,5', alt:false, nota:'Função aguda preservada.' }
    ],
    conclusao:'**Hepatite medicamentosa por paracetamol**, padrão hepatocelular, com **função preservada**. Outros fármacos: hepatocelular (isoniazida, diclofenaco), colestático (amoxicilina-clavulanato), misto (rifampicina), esteatose (valproato, amiodarona).'
  },
  { t:'laudo', titulo:'Estação 2: icterícia e emagrecimento', p:'21',
    intro:'Mulher de 62 anos com icterícia progressiva, **colúria, acolia**, prurido, **perda de 5 kg** e dor leve no hipocôndrio direito.',
    paciente:'Bioquímica hepática',
    foco:'para definir o padrão',
    linhas:[
      { ex:'Bilirrubina total', val:'9,8 mg/dL', ref:'até 1,2', seta:'↑', alt:true, nota:'Icterícia franca.' },
      { ex:'Bilirrubina direta', val:'7,6 mg/dL', ref:'até 0,3', seta:'↑', alt:true, nota:'**Predomínio direto**: colúria e acolia.' },
      { ex:'AST / ALT', val:'88 / 96 U/L', ref:'até 40 / 56', seta:'↑', alt:true, nota:'Pouco elevadas.' },
      { ex:'FA', val:'820 U/L', ref:'até 120', seta:'↑', alt:true, nota:'≈ **7×**: obstrução biliar.' },
      { ex:'GGT', val:'486 U/L', ref:'até 38', seta:'↑', alt:true, nota:'≈ **13×**: confirma origem hepatobiliar.' },
      { ex:'Albumina', val:'2,8 g/dL', ref:'≥ 3,5', seta:'↓', alt:true, nota:'Doença consumptiva/crônica.' },
      { ex:'INR', val:'1,6', ref:'< 1,5', seta:'↑', alt:true, nota:'Sem bile, **sem vitamina K** → ↓ fatores II, VII, IX, X.' }
    ],
    conclusao:'**Padrão colestático** por **obstrução extra-hepática**, provavelmente **neoplásica** (idade, perda de peso). O INR pode corrigir com **vitamina K parenteral**.'
  },
  { t:'tabela', titulo:'Os cinco vírus', p:'21',
    cols:['Transmissão','Cronifica? / Vacina'],
    linhas:[
      ['HAV (RNA)','**Fecal-oral** (água, alimentos, ostras cruas)','Não / Sim'],
      ['HBV (DNA)','Sexual, parenteral, vertical','**Sim** / Sim (todos)'],
      ['HCV (RNA)','Sangue (transfusão antes de 1993, drogas injetáveis)','**Sim (maioria)** / Não'],
      ['HDV (RNA defectivo)','Igual à B; **depende do HBsAg**','Sim / a vacina da B protege'],
      ['HEV (RNA)','Fecal-oral; **carne suína mal cozida** (genótipo 3)','Só em imunossuprimidos / Não']
    ],
    nota:'**A e E** "entram pela boca"; **B, C e D**: sangue e sexo. Notificação compulsória no SINAN em até 7 dias.'
  },
  { t:'tabela', titulo:'Hepatite B: os marcadores', p:'22',
    cols:['Significado'],
    linhas:[
      ['HBsAg','Infecção **ativa** (aguda ou crônica); ≥ 6 meses = **crônica**'],
      ['Anti-HBc IgM','Infecção **aguda** (ou reativação)'],
      ['Anti-HBc total','**Contato natural** com o vírus; **não aparece após vacina**'],
      ['Anti-HBs','**Imunidade** (vacina ou cura)'],
      ['HBeAg / anti-HBe','Replicação ativa / soroconversão'],
      ['HBV-DNA','Carga viral']
    ],
    nota:'Vacinado: **só anti-HBs**. Curado: **anti-HBc total + anti-HBs**. Janela: só anti-HBc (IgM e total).'
  },
  { t:'laudo', titulo:'Exame admissional', p:'22–23',
    intro:'Profissional de saúde de 30 anos, exames admissionais. Não lembra se foi vacinado.',
    paciente:'Sorologia para hepatite B',
    foco:'para definir o status',
    linhas:[
      { ex:'HBsAg', val:'Não reagente', ref:'Não reagente', alt:false, nota:'Sem infecção ativa.' },
      { ex:'Anti-HBc total', val:'Não reagente', ref:'Não reagente', alt:false, nota:'**Nunca teve contato natural** com o vírus.' },
      { ex:'Anti-HBs', val:'120 mUI/mL', ref:'Reagente ≥ 10', alt:true, nota:'**Imune**.' }
    ],
    conclusao:'**Imunidade vacinal**: só o anti-HBs presente.'
  },
  { t:'tabela', titulo:'Hepatites A, C, D e E', p:'22–23',
    cols:['Como ler'],
    linhas:[
      ['A','**Anti-HAV IgM** = aguda; IgG = imune. Ostras cruas há ≈ 30 dias + transaminases > 10× = pensar em A'],
      ['C','**Anti-HCV** = contato (não é imunidade); **HCV-RNA** = infecção ativa'],
      ['D: coinfecção','HBsAg +, **anti-HBc IgM +**, anti-HDV +'],
      ['D: superinfecção','HBsAg +, **anti-HBc IgM −** (já era crônico de B), anti-HDV +: crônica em **70–90%**, curso grave'],
      ['E','**Anti-HEV IgM** ou **HEV-RNA**. Gestante + hepatite fecal-oral grave + **INR alto** → pensar em **E** (risco fulminante)']
    ]
  },
  { t:'resumo', titulo:'O que levar desta missão',
    itens:[
      'Lesão: **AST, ALT, FA, GGT**. Função: **bilirrubinas, albumina, INR**. INR = melhor marcador **agudo**.',
      'ALT = hepatócito; **FA + GGT** = via biliar. AST:ALT ≈ 2:1 + GGT = álcool. FA > 5× = obstrução.',
      'BD ↑ = colúria, acolia, prurido. Obstrução prolongada: INR ↑ por falta de **vitamina K**.',
      'Hepatite B: **só anti-HBs = vacina**; anti-HBc total + anti-HBs = cura; HBsAg = infecção ativa.',
      'D: anti-HBc IgM **negativo** = **superinfecção**. E: gestante com INR alto. A e E fecal-oral.'
    ]
  }
  ]
});
PM_CASES.lab06 = {
  investigation:{
    title:'Investigação · Gestante ictérica depois de uma viagem',
    fonte:'Caso da questão FARM-25 do banco de Farmacologia/Laboratório.',
    patient:{age:null,sex:'',complaint:'Gestante de 28 semanas com icterícia',history:'Viajou, comeu carne suína mal cozida e bebeu água de procedência duvidosa.'},
    evidence:[
      {id:'via',label:'Exposição',relevance:2,text:'**Carne suína mal cozida** e água duvidosa.',feedback:'Vias fecal-oral e zoonótica.'},
      {id:'gest',label:'Gestação',relevance:2,text:'**28 semanas.**',feedback:'Gestante tem alto risco de forma fulminante em uma das hepatites.'},
      {id:'lab',label:'Exames',relevance:2,text:'Você vai ver o laudo na etapa 4.',feedback:'O laudo aparece na etapa 4.'},
      {id:'transf',label:'Transfusões',relevance:0,text:'Nega.',feedback:'Não aponta para C.'}
    ],
    hypothesis:{prompt:'Hipótese inicial:',options:['Hepatite viral de transmissão fecal-oral','Hepatite C','Colestase da gravidez'],correct:0,
      feedback:['Alimento e água: A ou E.','Seria por sangue.','Não explica a exposição nem a gravidade esperada.']},
    microscopy:{laudo:{paciente:'Exames',linhas:[{ex:'Transaminases',val:'> 20× LSN',ref:'—',seta:'↑',alt:true},{ex:'INR',val:'2,3',ref:'< 1,5',seta:'↑',alt:true},{ex:'Anti-HAV IgM',val:'Não reagente',ref:'—'},{ex:'HBsAg',val:'Não reagente',ref:'—'}]},
      prompt:'Hipótese e exame mais adequados:',options:['Hepatite A; repetir anti-HAV IgM','Hepatite E; anti-HEV IgM ou HEV-RNA, com risco de forma fulminante','Hepatite B; HBV-DNA','Hepatite C; anti-HCV'],correct:1,hint:'Fecal-oral, A negativa, gestante, carne suína.',competencies:['visual','diferencial'],
      explain:['IgM não reagente afasta A aguda.','FARM-25.','HBsAg negativo.','A via não é sanguínea.']},
    differential:[
      {prompt:'O que o INR de 2,3 significa?',options:['Disfunção hepática grave','Nada','Lesão leve','Erro de exame'],correct:0,competencies:['clinica'],
        explain:['INR ≥ 2,0 = disfunção grave.','Importa muito.','Não.','Não.']},
      {prompt:'Qual genótipo do HEV é zoonótico?',options:['Genótipo 3 (carne suína)','Genótipo 1','Nenhum','Genótipo 8'],correct:0,competencies:['fisiopatologia'],
        explain:['Apostila, p. 23.','Não.','Há.','Não.']},
      {prompt:'Por que o INR é o melhor marcador agudo?',options:['Os fatores de coagulação têm meia-vida de horas','Porque é barato','Porque mede bilirrubina','A albumina é mais rápida'],correct:0,competencies:['conceitual'],
        explain:['Reflete a síntese em tempo real.','Não é o motivo.','Não mede.','A albumina demora ≈ 20 dias.']}
    ],
    final:{prompt:'Conclusão:',options:['Hepatite E grave na gestação; confirmar com anti-HEV IgM ou HEV-RNA','Hepatite A','Colestase gestacional','Hepatite autoimune'],correct:0,
      keyPrompt:'Dado decisivo:',keyOptions:['Gestante + fecal-oral/suína + INR alto + A e B negativas','Icterícia isolada','Idade gestacional','Viagem'],keyCorrect:0,competencies:['clinica','diferencial','visual']},
    debrief:{diagnosis:'Hepatite E aguda grave em gestante',evidence:['**Carne suína** mal cozida e água duvidosa.','Transaminases **> 20×**, **INR 2,3**.','Anti-HAV IgM e HBsAg **negativos**.'],
      clinic:'Em gestantes, a hepatite E tem alto risco de forma fulminante.',
      revisar:{conceitual:'Marcadores de função (p. 20–21)',visual:'Hepatites A, C, D e E',diferencial:'Os cinco vírus',clinica:'Marcadores de função (p. 20–21)',fisiopatologia:'Os cinco vírus'}}
  },
  mastery:[
    {id:'l6q1',laudo:{paciente:'Bioquímica',linhas:[{ex:'TGO / TGP',val:'386 / 460 U/L',ref:'até 40 / 56',seta:'↑',alt:true},{ex:'FA',val:'62 U/L',ref:'40–130'},{ex:'BT',val:'0,7 mg/dL',ref:'até 1,2'},{ex:'Albumina / INR',val:'4,3 / 1,14',ref:'≥ 3,5 / < 1,5'}]},q:'Homem com altas doses de paracetamol. Interpretação:',ops:['Colestase','Insuficiência hepática','Lesão hepatocelular medicamentosa com função preservada','Normal'],a:2,why:'FARM-21.',c:['visual','diferencial']},
    {id:'l6q2',q:'Icterícia, colúria, acolia, BD 7,6, FA 820, GGT 486, INR 1,6. Correto:',ops:['Hepatocelular','Padrão colestático por obstrução extra-hepática; INR sobe por falta de vitamina K','Hemólise','Gilbert'],a:1,why:'FARM-22.',c:['clinica','fisiopatologia']},
    {id:'l6q3',laudo:{paciente:'Sorologia B',linhas:[{ex:'HBsAg',val:'Não reagente',ref:'—'},{ex:'Anti-HBc total',val:'Não reagente',ref:'—'},{ex:'Anti-HBs',val:'120 mUI/mL',ref:'≥ 10',alt:true}]},q:'Interpretação:',ops:['Imunidade vacinal','Cura de infecção','Hepatite crônica','Suscetível'],a:0,why:'FARM-23.',c:['visual','conceitual']},
    {id:'l6q4',q:'Ribeirinho da Amazônia, B crônica há 8 anos, piora: HBsAg +, anti-HBc total +, IgM −, anti-HDV +, anti-HBs −. Diagnóstico:',ops:['Coinfecção B + D','Superinfecção pelo vírus D, com alto risco de cronificação','Cura da B','Hepatite A'],a:1,why:'FARM-24.',c:['diferencial']},
    {id:'l6q5',q:'AST > ALT (≈ 2:1) com GGT alta sugere:',ops:['Hepatite viral aguda','Obstrução biliar','Hepatite alcoólica','Rabdomiólise'],a:2,why:'Apostila, p. 19.',c:['conceitual']},
    {id:'l6q6',q:'FA alta: como saber se é do fígado e não do osso?',ops:['GGT também elevada','Albumina baixa','INR alto','Bilirrubina indireta alta'],a:0,why:'GGT ↑ + FA ↑ confirma origem hepática.',c:['conceitual','diferencial']}
  ]
};

/* ===== Laboratório 07 · Função renal (apostila de Laboratório p. 24–26; FARM-26 a 29) ===== */
PM_MISSOES.push({
  id:'lab07', area:'lab', num:'07', titulo:'Marcadores da função renal',
  sub:'Creatinina, TFG estimada, ureia, cistatina C, NGAL, dismorfismo, albuminúria e proteinúria',
  pags:'24–27', ligados:['img10','lab09'],
  questoes:['FARM-26','FARM-27','FARM-28','FARM-29'],
  etapas:[
  { t:'tabela', titulo:'Função × lesão', p:'24', img:'l024_162', leg:'Filtração, reabsorção, secreção e excreção no néfron.',
    cols:['Função renal','Lesão renal'],
    linhas:[
      ['O que é','Capacidade de **filtrar**; medida pela **TFG**','**Dano estrutural** ao néfron; pode vir **antes** da queda da TFG'],
      ['Marcadores','**Creatinina, ureia, cistatina C**','**NGAL**, dismorfismo eritrocitário, proteinúria, albuminúria']
    ],
    nota:'Marcador ideal da TFG: produzido continuamente, sem metabolismo, **filtrado livremente**, **não reabsorvido**, **não secretado**.'
  },
  { t:'texto', titulo:'Creatinina', p:'24–25', img:'l024_163', leg:'Metabolismo da creatina.',
    corpo:[
      'Vem da **creatina muscular**. Filtração **livre**, reabsorção **praticamente nenhuma**, **pequena secreção** (o clearance superestima a TFG em ≈ 10–20%).',
      '↓ TFG → ↑ creatinina no sangue.',
      '**Alta sem doença renal:** musculação, rabdomiólise, dieta rica em carne, suplemento de creatina.',
      '**Baixa sem doença renal:** **sarcopenia, idosos**, cirrose, desnutrição, amputados.'
    ],
    destaque:'TFG estimada: **CKD-EPI 2021** (recomendada, sem raça). **CKD-EPI creatinina + cistatina C**: a mais precisa quando há dúvida (massa muscular baixa). Cockcroft-Gault: ajuste de doses.'
  },
  { t:'texto', titulo:'Ureia', p:'25',
    corpo:[
      'Formada no **fígado** a partir da amônia das proteínas. Filtração livre, **reabsorção de 40–50%**.',
      'A reabsorção **aumenta na desidratação e na hipovolemia**: por isso a ureia sobe muito no **pré-renal**.',
      'Altera sem doença renal: desidratação, dieta hiperproteica, **sangramento digestivo alto** (sangue digerido = carga proteica), sepse, corticoide; hepatopatia grave → ureia baixa.'
    ],
    destaque:'**Ureia/creatinina > 40** = pré-renal; 20–40 indeterminado; **< 20** = lesão intrínseca.'
  },
  { t:'tabela', titulo:'Creatinina × cistatina C', p:'25',
    cols:['Creatinina','Cistatina C'],
    linhas:[
      ['Origem','Músculo','**Todas as células nucleadas**, ritmo constante'],
      ['Massa muscular','Influência **alta**','**Mínima**'],
      ['Secreção','Pequena','Não'],
      ['Detecção precoce','Menor','**Maior**'],
      ['Útil em','—','**Idosos, sarcopenia**, cirrose, desnutrição, amputados'],
      ['Falhas','—','↑ inflamação, hipertireoidismo, corticoide, obesidade; ↓ hipotireoidismo']
    ]
  },
  { t:'texto', titulo:'NGAL: lesão antes da creatinina', p:'25', img:'l025_167', leg:'NGAL sobe em horas; a creatinina, em 24–48 h.',
    corpo:[
      'Liberado pelas **células tubulares lesionadas**, em **2–4 horas**.',
      '**Urinário** = mais específico (vem do túbulo). Sérico também sobe na inflamação (neutrófilos).',
      'Limites: custo, pouca disponibilidade, eleva em sepse e trauma.'
    ],
    destaque:'A **creatinina** mede queda da **função** (tardia); o **NGAL** mede **lesão tubular** (muito precoce).'
  },
  { t:'abas', titulo:'Na urina', p:'26',
    abas:[
      { rot:'Dismorfismo', img:'l026_171', leg:'Isomórfica (urológica) × acantócito (glomerular).',
        itens:['**> 40% dismórficas** → origem **glomerular** (glomerulonefrite, IgA, lúpus).','**Isomórficas** → não glomerular (litíase, tumor, ITU).','**Acantócito** = altamente específico de glomérulo.'] },
      { rot:'Albuminúria', img:'l026_171', leg:'Marcador precoce de lesão glomerular.',
        itens:['**A1 < 30**, **A2 30–300**, **A3 > 300** mg/dia.','Medir pela **relação albumina/creatinina** em amostra isolada.','Transitória (exercício, febre, ITU, glicemia, ICC, gravidez): confirmar em **2 de 3** exames.','Reduzem: controle glicêmico e pressórico, **IECA, BRA, iSGLT2**.','Diabetes: **primeiro marcador** da nefropatia.'] },
      { rot:'Proteinúria', img:'l026_171', leg:'Tipos de proteinúria.',
        itens:['**Glomerular** (mais comum, albumina): diabetes, GN, nefrótica, lúpus.','**Tubular** (β2-microglobulina): NTA, pielonefrite, nefrite intersticial.','**Sobrecarga**: mieloma (**Bence-Jones**).','< 150 normal · **> 3.500 mg/dia** = faixa nefrótica.'] }
    ]
  },
  { t:'laudo', titulo:'Melena e creatinina subindo', p:'25',
    intro:'Homem de 68 anos com **melena há 2 dias**, hipotenso e taquicárdico. Creatinina basal 1,0.',
    paciente:'Bioquímica',
    foco:'para localizar a causa da alteração',
    linhas:[
      { ex:'Ureia', val:'160 mg/dL', ref:'—', seta:'↑', alt:true, nota:'Sobe pela **hipovolemia** (mais reabsorção) e pelo **sangue digerido**.' },
      { ex:'Creatinina', val:'1,6 mg/dL', ref:'Basal 1,0', seta:'↑', alt:true, nota:'Subiu menos.' },
      { ex:'Relação ureia/creatinina', val:'100', ref:'> 40 = pré-renal', seta:'↑', alt:true, nota:'160 ÷ 1,6 = **100**.' }
    ],
    conclusao:'**Padrão pré-renal**: relação > 40 por hipovolemia e sangue digerido.'
  },
  { t:'tabela', titulo:'DRC × injúria renal aguda (KDIGO)', p:'27',
    cols:['Critério'],
    linhas:[
      ['DRC','Alteração de estrutura ou função **≥ 3 meses**: **TFG < 60** por > 3 meses, **ou** TFG normal com lesão persistente (ex.: **albuminúria**)'],
      ['IRA','Creatinina **↑ ≥ 0,3 mg/dL em 48 h**, **ou** ≥ 1,5× o basal em 7 dias, **ou** diurese **< 0,5 mL/kg/h por 6 h**'],
      ['Estadiamento DRC','Risco pela **TFG (G1 a G5)** e pela **albuminúria (A1 a A3)**: G1 ≥ 90 · G2 60–89 · G3a 45–59 · G3b 30–44 · G4 15–29 · G5 < 15']
    ]
  },
  { t:'resumo', titulo:'O que levar desta missão',
    itens:[
      'Função (TFG): creatinina, ureia, cistatina C. Lesão: NGAL, dismorfismo, albuminúria, proteinúria.',
      'Creatinina **"normal" em idosa sarcopênica** engana: usar **CKD-EPI com cistatina C**.',
      'Ureia/creatinina **> 40** = pré-renal (hipovolemia, HDA).',
      '**NGAL** sobe em 2–4 h: lesão tubular antes da creatinina.',
      'Dismórficas > 40% / acantócito = glomerular. Albuminúria **A2 30–300** = DRC mesmo com TFG normal → IECA/BRA + iSGLT2.'
    ]
  }
  ]
});
PM_CASES.lab07 = {
  investigation:{
    title:'Investigação · Creatinina "normal" aos 82 anos',
    fonte:'Caso da questão FARM-26 do banco de Farmacologia/Laboratório.',
    patient:{age:82,sex:'Feminino',complaint:'Vai usar um fármaco de eliminação renal',history:'Emagrecida, com sarcopenia importante. O médico considerou a creatinina normal.'},
    evidence:[
      {id:'musc',label:'Massa muscular',relevance:2,text:'**Sarcopenia importante.**',feedback:'Pouco músculo = pouca creatinina produzida.'},
      {id:'idade',label:'Idade',relevance:1,text:'82 anos.',feedback:'TFG tende a cair com a idade.'},
      {id:'lab',label:'Creatinina',relevance:2,text:'Você vai ver o laudo na etapa 4.',feedback:'O laudo aparece na etapa 4.'},
      {id:'pa',label:'Pressão',relevance:0,text:'Sem dado.',feedback:'Não muda a interpretação.'}
    ],
    hypothesis:{prompt:'Pergunta central:',options:['A creatinina reflete a TFG dela?','Ela tem rabdomiólise?','Ela tem hepatite?'],correct:0,
      feedback:['A massa muscular baixa pode esconder queda da TFG.','Não.','Não.']},
    microscopy:{laudo:{paciente:'Bioquímica',linhas:[{ex:'Creatinina',val:'0,8 mg/dL',ref:'"Normal"',alt:false}]},
      prompt:'Como avaliar a função renal?',options:['Aceitar a creatinina como normal','Estimar a TFG por CKD-EPI com creatinina e cistatina C','Pedir só ureia','Dosar NGAL'],correct:1,hint:'Qual marcador não depende de músculo?',competencies:['visual','conceitual'],
      explain:['Sarcopenia falseia a creatinina para baixo.','FARM-26.','A ureia é pior marcador.','NGAL mede lesão tubular aguda.']},
    differential:[
      {prompt:'Por que a cistatina C é melhor aqui?',options:['É produzida por todas as células, sem depender da massa muscular','É secretada','Depende da dieta','É mais barata'],correct:0,competencies:['fisiopatologia'],
        explain:['Ritmo constante.','Não é secretada.','Varia pouco.','Não é o motivo.']},
      {prompt:'Para ajustar dose de medicamento, qual equação é tradicional?',options:['Cockcroft-Gault','MDRD','Friedewald','Child-Pugh'],correct:0,competencies:['clinica'],
        explain:['Usada para ajuste de doses.','Antiga e menos precisa.','É de lipídeos.','Não.']},
      {prompt:'Em que situação a cistatina C falha?',options:['Inflamação, hipertireoidismo, corticoide, obesidade','Sarcopenia','Idosos','Amputados'],correct:0,competencies:['diferencial'],
        explain:['Situações que a alteram.','Aí ela é útil.','Útil.','Útil.']}
    ],
    final:{prompt:'Conduta:',options:['TFG por CKD-EPI creatinina + cistatina C antes de dosar o fármaco','Dose plena, creatinina normal','Ureia isolada','Nada'],correct:0,
      keyPrompt:'Dado decisivo:',keyOptions:['Sarcopenia importante','Idade','Creatinina 0,8','Sexo'],keyCorrect:0,competencies:['clinica','diferencial','visual']},
    debrief:{diagnosis:'Creatinina falsamente tranquilizadora por sarcopenia',evidence:['Pouca massa muscular → **pouca creatinina**.','A TFG pode estar baixa com creatinina "normal".','**Cistatina C** não depende de músculo.'],
      clinic:'CKD-EPI 2021 com creatinina + cistatina C é a estimativa mais precisa nessas situações.',
      revisar:{conceitual:'Creatinina (p. 24–25)',visual:'Creatinina (p. 24–25)',diferencial:'Creatinina × cistatina C',clinica:'Creatinina (p. 24–25)',fisiopatologia:'Creatinina × cistatina C'}}
  },
  mastery:[
    {id:'l7q1',laudo:{paciente:'Bioquímica',linhas:[{ex:'Ureia',val:'160 mg/dL',ref:'—',seta:'↑',alt:true},{ex:'Creatinina',val:'1,6 mg/dL',ref:'Basal 1,0',seta:'↑',alt:true}]},q:'Homem com melena há 2 dias, hipotenso. Interpretação:',ops:['Lesão intrínseca','Pré-renal: relação ureia/creatinina > 40 por hipovolemia e sangue digerido','Pós-renal','Normal'],a:1,why:'FARM-27.',c:['visual','clinica']},
    {id:'l7q2',q:'DM2, TFG 95, relação albumina/creatinina 120 mg/g em duas amostras com 3 meses. Correto:',ops:['Normal, pois a TFG é normal','Transitória, ignorar','A3, nefrótica','A2 e DRC mesmo com TFG normal; IECA/BRA e iSGLT2 indicados'],a:3,why:'FARM-28.',c:['clinica','conceitual']},
    {id:'l7q3',q:'Pós-operatório cardíaco com hipotensão: 6 h depois, creatinina basal e NGAL urinário muito alto. Interpretação:',ops:['NGAL indica lesão tubular precoce, antes da creatinina','Sem lesão, creatinina normal','Erro do NGAL','Pré-renal puro'],a:0,why:'FARM-29.',c:['fisiopatologia','diferencial']},
    {id:'l7q4',image:'l026_171',q:'Na urina, predominam hemácias como a da direita (com "bolhas"). Origem:',ops:['Urológica','Glomerular','Contaminação','Litíase'],a:1,why:'Acantócito: altamente específico de origem glomerular.',c:['visual']},
    {id:'l7q5',q:'Proteinúria por excesso de cadeias leves no mieloma é do tipo:',ops:['Glomerular','Tubular','Por sobrecarga (Bence-Jones)','Ortostática'],a:2,why:'Apostila, p. 26.',c:['conceitual']},
    {id:'l7q6',q:'Creatinina alta sem doença renal pode ocorrer em:',ops:['Sarcopenia','Cirrose','Musculação intensa, rabdomiólise ou uso de creatina','Desnutrição'],a:2,why:'Apostila, p. 24.',c:['diferencial']}
  ]
};

/* ===== Laboratório 08 · Infecção do trato urinário (apostila de Laboratório p. 27–31; FARM-30 a 33) ===== */
PM_MISSOES.push({
  id:'lab08', area:'lab', num:'08', titulo:'Infecção do trato urinário',
  sub:'Etiologia, complicada × não complicada, quando pedir exames, EAS, urocultura e tratamento',
  pags:'27–31', ligados:['img10','lab07'],
  questoes:['FARM-30','FARM-31','FARM-32','FARM-33'],
  etapas:[
  { t:'texto', titulo:'Como a infecção sobe', p:'27', img:'l027_175', leg:'Colonização da uretra, ascensão, biofilme e invasão renal.',
    corpo:[
      'ITU = resposta inflamatória do **urotélio** a microrganismos. **Cistite** = baixa; **pielonefrite** = alta.',
      'Mecanismo principal: **ascensão** da microbiota fecal → uretra → bexiga → ureteres → rins.',
      'Mais comum em **mulheres**: uretra curta, proximidade com o ânus, atividade sexual, gestação, espermicidas. Em **homens**, investigar próstata, obstrução, cálculo.'
    ]
  },
  { t:'tabela', titulo:'Quem causa', p:'28',
    cols:['Gram','Destaque'],
    linhas:[
      ['E. coli (UPEC)','−','**Principal** (75–95% das cistites comunitárias); adesinas e fímbrias'],
      ['Klebsiella','−','ITU hospitalar'],
      ['Proteus','−','**Urease** → urina alcalina → cálculos de **estruvita**'],
      ['Pseudomonas','−','Complicada, hospitalar, cateter'],
      ['Enterococcus','+','Hospitalar'],
      ['S. saprophyticus','+','**Mulheres jovens sexualmente ativas**']
    ]
  },
  { t:'tabela', titulo:'Não complicada × complicada', p:'28',
    cols:['Não complicada','Complicada'],
    linhas:[
      ['Quem','Mulher jovem, **não gestante**, trato normal, sem comorbidades nem dispositivos','Alteração anatômica, **obstrução**, cálculo, cateter, bexiga neurogênica, próstata, **diabetes**, imunossupressão, **gestação**, resistência'],
      ['Clínica: cistite','Disúria, polaciúria, urgência, dor suprapúbica, hematúria','—'],
      ['Clínica: pielonefrite','—','**Febre**, calafrios, **lombalgia (Giordano +)**, náuseas, vômitos']
    ],
    nota:'EAU 2026 prefere **localizada × sistêmica**, com fatores de risco para evolução desfavorável. **Gestante:** maior risco de pielonefrite e parto prematuro.'
  },
  { t:'exame', titulo:'Precisa de exame?', p:'28–29',
    intro:'Toda suspeita de ITU exige exames? Escolha a conduta.',
    exames:['Nenhum exame: tratar empiricamente','EAS + urocultura com antibiograma','Hemograma, eletrólitos, função renal, EAS e urocultura'],
    cenarios:[
      { sit:'Mulher de 26 anos, **não gestante**, sem comorbidades, disúria, polaciúria e urgência há 2 dias, **sem febre nem dor lombar**.', certa:0,
        por:['Cistite **não complicada** com sintomas típicos: tratar empiricamente (nitrofurantoína ou fosfomicina).','Desnecessário aqui.','Não há pielonefrite.'] },
      { sit:'Diabética com cistite e suspeita de doença urológica de base.', certa:1,
        por:['É complicada.','**Cistite complicada**: EAS + urocultura com antibiograma.','Sem sinais de pielonefrite.'] },
      { sit:'Febre, calafrios, **Giordano +** e vômitos.', certa:2,
        por:['Não.','Insuficiente.','**Pielonefrite**: hemograma, eletrólitos, função renal, EAS e urocultura. Imagem **não é obrigatória** para toda pielonefrite.'] }
    ],
    regra:'**Bacteriúria assintomática** (≥ 10⁵ UFC/mL sem sintomas): rastrear e tratar **só gestantes** e antes de **procedimento urológico** invasivo.'
  },
  { t:'tabela', titulo:'EAS: a tira reagente', p:'29',
    cols:['Interpretação'],
    linhas:[
      ['Coleta','1ª urina da manhã (ou ≥ 2 h sem urinar), **jato médio**'],
      ['pH (5–8)','Alcalino: **Proteus** (urease); ácido: dieta proteica, cetoacidose'],
      ['Glicose','Positiva > ≈ 180 mg/dL: diabetes, **iSGLT2**'],
      ['Hemoglobina','Hematúria, hemoglobinúria (hemólise), mioglobinúria (rabdomiólise)'],
      ['Bilirrubina','A **conjugada**: hepatite, colestase'],
      ['**Nitrito**','Positivo = forte sugestão de ITU. **Negativo não exclui**: Enterococcus e **S. saprophyticus** não reduzem nitrato; urina pouco tempo na bexiga'],
      ['Esterase leucocitária','Marcador indireto de **piúria**']
    ]
  },
  { t:'tabela', titulo:'EAS: o sedimento', p:'29–30',
    cols:['Significado'],
    linhas:[
      ['Leucócitos (até 10.000/mL)','Leucocitúria: ITU, pielonefrite, TB, nefrites'],
      ['Hemácias','Dismórficas + **cilindros hemáticos** → glomerular'],
      ['Células epiteliais','Escamosas → **contaminação**; tubulares → lesão renal'],
      ['Cristais','Oxalato de cálcio, ácido úrico, **estruvita** (Proteus)'],
      ['Cilindros leucocitários','Inflamação do **parênquima** (ex.: pielonefrite)']
    ],
    nota:'Na prática, olhar sempre: **leucócitos, nitrito, flora bacteriana, esterase**.'
  },
  { t:'laudo', titulo:'Nitrito negativo', p:'29–30',
    intro:'Mulher de 34 anos com disúria e urgência.',
    paciente:'EAS e urocultura',
    foco:'para decidir se é ITU',
    linhas:[
      { ex:'Esterase leucocitária', val:'++', ref:'Negativa', seta:'↑', alt:true, nota:'Piúria.' },
      { ex:'Leucócitos', val:'80.000/mL', ref:'até 10.000/mL', seta:'↑', alt:true, nota:'Leucocitúria.' },
      { ex:'Flora bacteriana', val:'Aumentada', ref:'Escassa', alt:true, nota:'Bactérias na urina.' },
      { ex:'Nitrito', val:'Negativo', ref:'Negativo', alt:false, nota:'**Não exclui**: Gram-positivos como S. saprophyticus **não reduzem nitrato**.' },
      { ex:'Urocultura', val:'S. saprophyticus > 10⁵ UFC/mL', ref:'> 100.000 = agente causal', alt:true, nota:'Confirma a ITU.' }
    ],
    conclusao:'**ITU por S. saprophyticus** com nitrito negativo. Urocultura = **padrão-ouro**; > 100.000 UFC/mL identifica o agente; **mais de uma espécie** = contaminação; 10.000–100.000 = não conclusivo.'
  },
  { t:'tabela', titulo:'Tratamento', p:'30–31',
    cols:['Conduta'],
    linhas:[
      ['Cistite','Empírico oral **1–3 dias** (7 no homem): **nitrofurantoína, fosfomicina**, amoxi-clavulanato, SMX-TMP, cefalexina. Fluoroquinolona **não** é 1ª escolha'],
      ['Pielonefrite estável','Oral ambulatorial (ciprofloxacino, levofloxacino, SMX-TMP…)'],
      ['Pielonefrite moderada','Hidratação + **1ª dose EV**; melhorou → alta com oral'],
      ['Grave','Cefalosporina 3ª/4ª, piperacilina-tazobactam, carbapenêmico (ESBL)'],
      ['**ITU + obstrução**','Sempre complicada: urina parada = alto risco de **sepse**. **Internar + antibiótico EV + desobstrução urgente** (duplo J ou nefrostomia)'],
      ['Gestante','Cistite e bacteriúria assintomática: **7 dias**, guiado pelo antibiograma (nitrofurantoína, fosfomicina, amoxicilina, cefalexina)']
    ],
    nota:'Na gestação: **SMX-TMP** preocupa no 1º trimestre (folato) e perto do termo (kernicterus); **nitrofurantoína** evitar perto do termo e na **deficiência de G6PD**.'
  },
  { t:'resumo', titulo:'O que levar desta missão',
    itens:[
      'Ascensão; **E. coli** é a principal. Proteus = urease/estruvita. S. saprophyticus = mulher jovem.',
      'Cistite não complicada típica: **sem exames**, nitrofurantoína ou fosfomicina.',
      'Bacteriúria assintomática: tratar **só gestante** e antes de procedimento urológico.',
      '**Nitrito negativo não exclui** (Gram-positivos). Urocultura > 10⁵ = agente; várias espécies = contaminação.',
      'ITU + **obstrução** = internar, antibiótico EV e **desobstruir**.'
    ]
  }
  ]
});
PM_CASES.lab08 = {
  investigation:{
    title:'Investigação · Febre, lombalgia e hipotensão',
    fonte:'Caso da questão FARM-33 do banco de Farmacologia/Laboratório.',
    patient:{age:58,sex:'Masculino',complaint:'Febre de 39 °C, calafrios e dor lombar à direita',history:'Vômitos persistentes.'},
    evidence:[
      {id:'febre',label:'Sintomas',relevance:2,text:'**Febre 39 °C**, calafrios, **lombalgia direita**.',feedback:'Pielonefrite.'},
      {id:'pa',label:'Pressão',relevance:2,text:'**85/50 mmHg.**',feedback:'Instabilidade: sinal de gravidade.'},
      {id:'vom',label:'Vômitos',relevance:1,text:'**Persistentes.**',feedback:'Impedem a via oral.'},
      {id:'usg',label:'USG',relevance:2,text:'**Hidronefrose por cálculo ureteral.**',feedback:'Obstrução: a infecção não drena.'}
    ],
    hypothesis:{prompt:'Hipótese:',options:['Pielonefrite obstrutiva com sepse','Cistite não complicada','Prostatite crônica'],correct:0,
      feedback:['Febre, lombalgia, hipotensão e obstrução.','Há febre, lombalgia e choque.','Não é o quadro.']},
    microscopy:{laudo:{paciente:'Avaliação inicial',linhas:[{ex:'Temperatura',val:'39 °C',ref:'—',seta:'↑',alt:true},{ex:'PA',val:'85/50 mmHg',ref:'—',seta:'↓',alt:true},{ex:'USG',val:'Hidronefrose por cálculo ureteral',ref:'—',alt:true}]},
      prompt:'Conduta:',options:['Antibiótico oral e alta','Internação, antibiótico EV de amplo espectro e desobstrução urinária','Só analgesia','Esperar a urocultura'],correct:1,hint:'Urina parada não drena a infecção.',competencies:['visual','clinica'],
      explain:['Instável, vomitando, obstruído.','FARM-33.','Insuficiente.','Não se espera com sepse.']},
    differential:[
      {prompt:'Por que a obstrução muda tudo?',options:['Urina parada = infecção que não drena, alto risco de sepse','Não muda','Porque dá dor','Porque o cálculo é infeccioso'],correct:0,competencies:['fisiopatologia'],
        explain:['"Pielonefrite obstrutiva".','Muda.','Não é o ponto.','Não necessariamente.']},
      {prompt:'Como desobstruir?',options:['Cateter duplo J ou nefrostomia','Diurético','Hidratação apenas','Sonda nasogástrica'],correct:0,competencies:['clinica'],
        explain:['Desobstrução urgente.','Não.','Não resolve.','Não.']},
      {prompt:'Que exames laboratoriais pedir?',options:['Hemograma, eletrólitos, função renal, EAS e urocultura com antibiograma','Só EAS','Nada','Só PCR'],correct:0,competencies:['conceitual'],
        explain:['Pacote da pielonefrite.','Insuficiente.','Não.','Insuficiente.']}
    ],
    final:{prompt:'Conclusão:',options:['Pielonefrite obstrutiva com sepse: internar, antibiótico EV e desobstruir','Cistite','Cólica renal sem infecção','Bacteriúria assintomática'],correct:0,
      keyPrompt:'Dado decisivo:',keyOptions:['Hidronefrose por cálculo + hipotensão','Idade','Vômito isolado','Sexo'],keyCorrect:0,competencies:['clinica','diferencial','visual']},
    debrief:{diagnosis:'Pielonefrite obstrutiva com sepse',evidence:['Febre, lombalgia, **PA 85/50**.','**Hidronefrose por cálculo**.','Vômitos persistentes.'],
      clinic:'ITU com obstrução é sempre complicada: internação, antibiótico EV e desobstrução urgente.',
      revisar:{conceitual:'Precisa de exame?',visual:'Nitrito negativo (laudo)',diferencial:'Não complicada × complicada',clinica:'Tratamento',fisiopatologia:'Como a infecção sobe (p. 27)'}}
  },
  mastery:[
    {id:'l8q1',q:'Mulher de 26 anos, não gestante, sem comorbidades, disúria, polaciúria e urgência há 2 dias, sem febre ou lombalgia. Conduta:',ops:['EAS e urocultura antes de tratar','Tratar empiricamente por via oral, sem exames, com nitrofurantoína ou fosfomicina','Ciprofloxacino EV','USG renal'],a:1,why:'FARM-30.',c:['clinica']},
    {id:'l8q2',q:'Gestante de 16 semanas, assintomática, urocultura com E. coli > 100.000 UFC/mL. Conduta:',ops:['Não tratar','Repetir em 3 meses','Tratar por 7 dias com antibiótico seguro na gestação, guiado pelo antibiograma','Ciprofloxacino'],a:2,why:'FARM-31.',c:['clinica','conceitual']},
    {id:'l8q3',laudo:{paciente:'EAS',linhas:[{ex:'Esterase',val:'++',ref:'Neg.',alt:true},{ex:'Leucócitos',val:'80.000/mL',ref:'até 10.000',seta:'↑',alt:true},{ex:'Nitrito',val:'Negativo',ref:'Neg.'}]},q:'Urocultura com S. saprophyticus > 10⁵. Sobre o nitrito:',ops:['Exclui ITU','É erro','Não exclui ITU: alguns Gram-positivos não reduzem nitrato','Indica contaminação'],a:2,why:'FARM-32.',c:['visual','diferencial']},
    {id:'l8q4',q:'Urocultura com crescimento de mais de uma espécie sugere:',ops:['Infecção grave','Contaminação','Pielonefrite','ITU fúngica'],a:1,why:'Apostila, p. 30.',c:['conceitual']},
    {id:'l8q5',q:'Urina alcalina com cristais de estruvita e cálculo coraliforme: qual agente?',ops:['E. coli','S. saprophyticus','Proteus (urease)','Enterococcus'],a:2,why:'Apostila, p. 28–29.',c:['fisiopatologia']},
    {id:'l8q6',q:'Nitrofurantoína na gestação: cuidado com',ops:['1º trimestre por folato','Proximidade do termo e deficiência de G6PD (hemólise)','Nada','Uso em cistite'],a:1,why:'Apostila, p. 31.',c:['clinica']}
  ]
};

/* ===== Laboratório 09 · Síndromes nefrítica e nefrótica (apostila de Laboratório p. 31–34; FARM-34 a 37) ===== */
PM_MISSOES.push({
  id:'lab09', area:'lab', num:'09', titulo:'Síndrome nefrítica e nefrótica',
  sub:'Barreira glomerular, achados, causas, laboratório e tratamento (IECA, BRA, corticoide, diurético)',
  pags:'31–34', ligados:['lab07','img11'],
  questoes:['FARM-34','FARM-35','FARM-36','FARM-37'],
  etapas:[
  { t:'texto', titulo:'A barreira glomerular', p:'31', img:'l031_188', leg:'Podócitos, membrana basal e endotélio fenestrado.',
    corpo:[
      'Três camadas: **endotélio fenestrado**, **membrana basal** (carga negativa) e **podócitos** com fendas de filtração.',
      'Primárias: restritas ao rim (lesões mínimas, GESF, membranosa). Secundárias: diabetes, lúpus, HIV.'
    ],
    destaque:'**Nefrítica** → **inflamação** rompe a barreira: passa **sangue**. **Nefrótica** → lesão do **podócito**: passa **proteína**.'
  },
  { t:'sequencia', titulo:'Síndrome nefrítica', p:'31–32', img:'l032_193',
    passos:[
      { h:'Imunocomplexos', txt:'Formação e deposição → **ativação do complemento**.' },
      { h:'Inflamação glomerular', txt:'Lesão da barreira.' },
      { h:'Passa sangue', txt:'**Hematúria dismórfica** e **cilindros hemáticos** (urina "cor de coca-cola").' },
      { h:'Retém sal e água', txt:'**Edema** leve (periorbitário) e **hipertensão**.' },
      { h:'↓ TFG', txt:'Azotemia e **oligúria**. Proteinúria **< 3,5 g/24 h**.' }
    ],
    nota:'Exemplo clássico: **criança**, 1–3 semanas após **faringite ou impetigo** → **GN pós-estreptocócica**. Investigação: **C3 e C4** (↓ na GNPE e no lúpus), **ASLO**, FAN, anti-DNA, ANCA, anti-MBG.'
  },
  { t:'sequencia', titulo:'Síndrome nefrótica', p:'32–33', img:'l033_198',
    passos:[
      { h:'Proteinúria maciça', txt:'**> 3,5 g/24 h** (urina espumosa).' },
      { h:'Hipoalbuminemia', txt:'Perda de albumina.' },
      { h:'↓ Pressão oncótica', txt:'**Edema generalizado** (anasarca).' },
      { h:'Fígado ↑ síntese', txt:'**↑ CT, LDL, TG**: hiperlipidemia e lipidúria.' },
      { h:'Perda de AT III, proteínas C e S', txt:'Com ↑ fibrinogênio → **trombose** (ex.: veia renal).' },
      { h:'Perda de imunoglobulinas', txt:'**Infecções**.' }
    ],
    nota:'Causas: **lesões mínimas** (principal em **crianças**), GESF, membranosa; secundárias: **diabetes**, lúpus, amiloidose, HIV, hepatites B e C, fármacos, neoplasias.'
  },
  { t:'tabela', titulo:'Nefrítica × nefrótica', p:'33–34',
    cols:['Nefrítica','Nefrótica'],
    linhas:[
      ['Lesão','Inflamação glomerular difusa','Podócitos e membrana basal'],
      ['Início','Agudo','Insidioso'],
      ['Hematúria','**Presente**, dismórfica, cilindros hemáticos','Ausente ou discreta'],
      ['Proteinúria','< 3,5 g/24 h','**> 3,5 g/24 h**'],
      ['Edema','Leve, periorbitário','**Anasarca**, derrames'],
      ['HAS','**Frequente**','Geralmente ausente no início'],
      ['Função renal','Pode cair (IRA), oligúria','Preservada no início'],
      ['Laboratório','**↓ complemento** (algumas), ↑ ureia e creatinina','**↓ albumina**, ↑ CT e LDL, complemento normal'],
      ['Complicações','HAS grave, IRA, hipervolemia','**Trombose**, infecções, DRC, dislipidemia']
    ]
  },
  { t:'laudo', titulo:'Urina cor de coca-cola', p:'31–32',
    intro:'Menino de 8 anos com **edema palpebral**, urina "cor de coca-cola" e pouca urina. Teve **faringite há 2 semanas**. PA 150/95 mmHg.',
    paciente:'Urina e proteinúria',
    foco:'para definir a síndrome',
    linhas:[
      { ex:'Hemácias', val:'Hematúria com hemácias dismórficas', ref:'0–10.000/mL', alt:true, nota:'Origem **glomerular**.' },
      { ex:'Cilindros', val:'Hemáticos', ref:'Ausentes', alt:true, nota:'Típicos da **nefrítica**.' },
      { ex:'Proteinúria', val:'1,2 g/24 h', ref:'< 150 mg/dia', seta:'↑', alt:true, nota:'Moderada: **< 3,5 g**.' }
    ],
    conclusao:'**Síndrome nefrítica** pós-estreptocócica: espera-se **C3 baixo** e **ASLO elevada**.'
  },
  { t:'laudo', titulo:'Edema progressivo aos 4 anos', p:'32–33',
    intro:'Criança de 4 anos com **edema generalizado** há 10 dias, **urina espumosa**, PA normal.',
    paciente:'Bioquímica e urina',
    foco:'para definir a síndrome',
    linhas:[
      { ex:'Proteinúria', val:'4,8 g/24 h', ref:'< 150 mg/dia', seta:'↑', alt:true, nota:'**> 3,5 g**: faixa nefrótica.' },
      { ex:'Albumina', val:'1,8 g/dL', ref:'≥ 3,5', seta:'↓', alt:true, nota:'Hipoalbuminemia → edema.' },
      { ex:'Colesterol total', val:'380 mg/dL', ref:'< 190', seta:'↑', alt:true, nota:'Fígado aumenta a síntese.' },
      { ex:'EAS', val:'Sem hematúria', ref:'—', alt:false, nota:'Fala contra nefrítica.' }
    ],
    conclusao:'**Síndrome nefrótica** (em criança, pensar em **lesões mínimas**). A perda de **antitrombina III e proteínas C e S** favorece **trombose**.'
  },
  { t:'tabela', titulo:'Os fármacos', p:'32–34',
    cols:['Mecanismo','Papel'],
    linhas:[
      ['IECA','Bloqueia angiotensina I → II → dilata a **arteríola eferente** → ↓ pressão intraglomerular → **↓ proteinúria**','Principal **antiproteinúrico** na nefrótica; HAS na nefrítica'],
      ['BRA','Bloqueia o **receptor AT1**','Mesmo papel; preferir se **tosse** (bradicinina) ou angioedema com IECA'],
      ['Corticoide','↓ citocinas, ↓ lesão dos podócitos','**Prednisona** 1ª escolha; metilprednisolona EV'],
      ['Diurético de alça','Bloqueia **Na⁺/K⁺/2Cl⁻** na alça espessa','Na nefrótica, a **hipoalbuminemia** reduz a chegada da furosemida ao túbulo → **associar tiazídico**']
    ],
    nota:'**Não associar IECA + BRA**: hipercalemia, hipotensão, IRA. Nefrítica: restrição de sódio, IECA/BRA, diurético; imunossupressão na GNRP. Nefrótica: IECA/BRA, diurético, imunossupressão, **estatina**.'
  },
  { t:'resumo', titulo:'O que levar desta missão',
    itens:[
      'Nefrítica = **inflamação** → sangue: hematúria dismórfica, cilindros hemáticos, HAS, oligúria, proteinúria < 3,5 g. GNPE: **C3 ↓, ASLO ↑**.',
      'Nefrótica = **podócito** → proteína: > 3,5 g, hipoalbuminemia, anasarca, hiperlipidemia; perda de AT III/C/S → **trombose**.',
      'Criança: nefrótica = **lesões mínimas**.',
      'IECA dilata a **eferente** → ↓ proteinúria. **Tosse** com IECA → trocar por **BRA**. Nunca IECA + BRA.',
      'Furosemida fraca na nefrótica (hipoalbuminemia) → **tiazídico**.'
    ]
  }
  ]
});
PM_CASES.lab09 = {
  investigation:{
    title:'Investigação · Faringite há duas semanas',
    fonte:'Caso da questão FARM-34 do banco de Farmacologia/Laboratório.',
    patient:{age:8,sex:'Masculino',complaint:'Edema palpebral e urina "cor de coca-cola"',history:'Teve faringite há 2 semanas. Urina pouco.'},
    evidence:[
      {id:'far',label:'História',relevance:2,text:'**Faringite há 2 semanas.**',feedback:'Intervalo típico da GN pós-estreptocócica.'},
      {id:'pa',label:'Pressão',relevance:2,text:'**150/95 mmHg.**',feedback:'Hipertensão: retenção de sal e água.'},
      {id:'urina',label:'Urina',relevance:2,text:'Você vai ver o laudo na etapa 4.',feedback:'O laudo aparece na etapa 4.'},
      {id:'peso',label:'Peso',relevance:0,text:'Sem perda de peso.',feedback:'Não muda.'}
    ],
    hypothesis:{prompt:'Hipótese:',options:['Síndrome nefrítica','Síndrome nefrótica','ITU'],correct:0,
      feedback:['Edema palpebral, urina escura, HAS, oligúria após faringite.','A nefrótica tem anasarca e PA normal no início.','Não há disúria nem febre.']},
    microscopy:{laudo:{paciente:'Urina',linhas:[{ex:'Hemácias',val:'Dismórficas',ref:'—',alt:true},{ex:'Cilindros',val:'Hemáticos',ref:'Ausentes',alt:true},{ex:'Proteinúria',val:'1,2 g/24 h',ref:'< 150 mg',seta:'↑',alt:true}]},
      prompt:'O que se espera na investigação?',options:['C3 baixo e ASLO elevada (GN pós-estreptocócica)','C3 normal e albumina 1,5','Cultura de urina positiva','Anti-HBs reagente'],correct:0,hint:'Imunocomplexos ativam o complemento.',competencies:['visual','conceitual'],
      explain:['FARM-34.','Seria nefrótica.','Não é ITU.','Sem relação.']},
    differential:[
      {prompt:'Por que a proteinúria não está em faixa nefrótica?',options:['Na nefrítica é leve a moderada (< 3,5 g)','Porque o exame errou','Porque a albumina é alta','Não há proteinúria'],correct:0,competencies:['diferencial'],
        explain:['Característica da nefrítica.','Não.','Não é o motivo.','Há.']},
      {prompt:'O que causa a hipertensão?',options:['Retenção hidrossalina pela ↓ TFG','Dor','Hipoalbuminemia','Infecção'],correct:0,competencies:['fisiopatologia'],
        explain:['Inflamação → ↓ TFG → retenção.','Não.','É da nefrótica.','Não.']},
      {prompt:'Tratamento ambulatorial do paciente estável:',options:['Restrição de sódio, IECA/BRA para a PA e diurético de alça para a volemia','Corticoide em altas doses sempre','Antibiótico para "curar" a GN','Nada'],correct:0,competencies:['clinica'],
        explain:['Apostila, p. 32.','Reservado a casos selecionados (GNRP).','Não é o tratamento da GN.','Há o que fazer.']}
    ],
    final:{prompt:'Conclusão:',options:['Síndrome nefrítica pós-estreptocócica','Síndrome nefrótica por lesões mínimas','Nefropatia diabética','ITU'],correct:0,
      keyPrompt:'Dado decisivo:',keyOptions:['Hematúria dismórfica com cilindros hemáticos após faringite','Idade','Edema','Proteinúria'],keyCorrect:0,competencies:['clinica','diferencial','visual']},
    debrief:{diagnosis:'Síndrome nefrítica (GN pós-estreptocócica)',evidence:['**Faringite** 2 semanas antes.','Edema palpebral, **HAS**, oligúria, urina escura.','**Hemácias dismórficas**, **cilindros hemáticos**, proteinúria **< 3,5 g**.'],
      clinic:'Esperam-se C3 baixo e ASLO elevada.',
      revisar:{conceitual:'A barreira glomerular (p. 31)',visual:'Urina cor de coca-cola (laudo)',diferencial:'Nefrítica × nefrótica',clinica:'Os fármacos',fisiopatologia:'Síndrome nefrítica (p. 31–32)'}}
  },
  mastery:[
    {id:'l9q1',laudo:{paciente:'Bioquímica e urina',linhas:[{ex:'Proteinúria',val:'4,8 g/24 h',ref:'< 150 mg',seta:'↑',alt:true},{ex:'Albumina',val:'1,8 g/dL',ref:'≥ 3,5',seta:'↓',alt:true},{ex:'CT',val:'380 mg/dL',ref:'< 190',seta:'↑',alt:true},{ex:'EAS',val:'Sem hematúria',ref:'—'}]},q:'Criança de 4 anos com edema generalizado e urina espumosa. Correto:',ops:['Nefrítica com C3 baixo','Nefrótica; a perda de antitrombina III e proteínas C e S favorece trombose','ITU','Normal'],a:1,why:'FARM-35.',c:['visual','fisiopatologia']},
    {id:'l9q2',q:'Nefrótico com anasarca, albumina 1,6, pouca resposta à furosemida. Explicação e conduta:',ops:['Hipoalbuminemia reduz o transporte da furosemida ao túbulo; associar tiazídico','Furosemida não age no rim','Trocar por IECA + BRA','Suspender diuréticos'],a:0,why:'FARM-36.',c:['fisiopatologia','clinica']},
    {id:'l9q3',q:'Diabético com proteinúria em uso de enalapril tem tosse seca. Conduta:',ops:['Associar losartana ao enalapril','Suspender toda nefroproteção','Trocar o IECA por BRA, que bloqueia AT1 e mantém o efeito antiproteinúrico','Aumentar o enalapril'],a:2,why:'FARM-37.',c:['clinica']},
    {id:'l9q4',q:'Por que o IECA reduz a proteinúria?',ops:['Contrai a arteríola aferente','Dilata a arteríola eferente e reduz a pressão intraglomerular','Aumenta a albumina','É diurético'],a:1,why:'Apostila, p. 34.',c:['fisiopatologia']},
    {id:'l9q5',q:'Causa mais comum de síndrome nefrótica em crianças:',ops:['GESF','Membranosa','Doença de lesões mínimas','Diabetes'],a:2,why:'Apostila, p. 33.',c:['conceitual']},
    {id:'l9q6',q:'Achado que fala a favor de nefrítica, e não de nefrótica:',ops:['Proteinúria > 3,5 g','Hematúria dismórfica com cilindros hemáticos','Colesterol alto','Anasarca'],a:1,why:'Apostila, p. 33–34.',c:['diferencial']}
  ]
};

/* ===== Ordem das missões em cada área ===== */
(function(){var o={anat:0,img:1,lab:2};var a=function(m){return o[m.area]!=null?o[m.area]:0};
PM_MISSOES.sort(function(x,y){return a(x)-a(y)||String(x.num).localeCompare(String(y.num))});})();
