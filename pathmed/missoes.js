/* PATHMED · conteúdo das missões de estudo guiado.
   Todo o texto segue a apostila "MAPES 1 · Anatomopatologia · Teoria 2026.2" (páginas indicadas em "p").
   Tipos de etapa:
     texto     leitura curta, com figura opcional e um destaque
     abas      várias figuras/ideias lado a lado, uma aba por vez (comparar normal × doença, tipos, graus)
     explorar  lâmina com marcadores numerados: toque para descobrir cada estrutura
     sequencia passo a passo revelado em ordem (mecanismos, progressão)
     tabela    quadro comparativo da apostila
     checar    pergunta de fixação, sem nota: explica cada alternativa e deixa tentar de novo
     resumo    o que levar da missão + questões relacionadas do banco
   Coordenadas dos marcadores: x e y em % da largura e da altura da imagem. */
window.PM_MISSOES = [
{
  id:'m001', num:'001', titulo:'Adaptação celular e esôfago de Barrett',
  sub:'Da célula que se adapta à metaplasia, displasia e adenocarcinoma',
  pags:'3–9', cor:'#d9578f',
  questoes:['ANAT-01','ANAT-04','ANAT-02','ANAT-03'],
  etapas:[
  { t:'texto', titulo:'A célula não é passiva', p:'3',
    corpo:[
      'Antes de morrer, a célula **tenta se adaptar** ao estresse.',
      'Essas adaptações aparecem quando há **sobrecarga, falta de estímulo, alteração hormonal e/ou agressão leve a moderada**.',
      'Se o estímulo for **excessivo ou persistente**, a adaptação deixa de dar conta e a célula pode morrer.'
    ],
    destaque:'Existem quatro tipos principais de adaptação: hipertrofia, atrofia, hiperplasia e metaplasia. Guarde a pergunta que separa cada uma: o que mudou na célula, o tamanho, o número ou o tipo?'
  },
  { t:'abas', titulo:'Os quatro tipos de adaptação', p:'3–4',
    intro:'Toque em cada aba. Para cada tipo, repare no estímulo que o provoca.',
    abas:[
      { rot:'Hipertrofia', img:'m1_hipertrofia', leg:'Miocárdio normal (esquerda) e do ventrículo esquerdo com fibras de maior diâmetro (direita).',
        itens:['A célula **aumenta de tamanho**.','Acontece principalmente no **músculo cardíaco e esquelético**.','Exemplos: academia, hipertensão arterial.'],
        regra:'Estímulo de sobrecarga → hipertrofia' },
      { rot:'Atrofia', img:'m1_atrofia', leg:'Fibras musculares atróficas (pequenas, no alto) ao lado de fibras normais ou hipertróficas.',
        itens:['A célula **diminui de tamanho** e, às vezes, de número.','É como se a célula pensasse: “não estou sendo usada, vou economizar energia”.','Envelhecimento e desnutrição podem causar.','Diferente da morte celular: na atrofia a célula **continua viva e funcional**, mesmo com menos metabolismo.'],
        regra:'Falta de estímulo → atrofia' },
      { rot:'Hiperplasia', img:'m1_hiperplasia', leg:'Epiderme com acantose e hiperplasia pseudocarcinomatosa, sobre reação inflamatória na derme.',
        itens:['A célula **aumenta em número**: há proliferação celular por algum estímulo.','Ocorre em tecidos que **conseguem se dividir**.','Pode ser fisiológica ou não.','Se o estímulo cessa, a hiperplasia tende a diminuir.'],
        regra:'Estímulo proliferativo → hiperplasia' },
      { rot:'Metaplasia', img:'m1_metaplasia_bronquio', leg:'Epitélio simples pseudoestratificado cilíndrico ciliado (normal) e epitélio estratificado escamoso (metaplásico).',
        itens:['Uma célula adulta é **substituída por outro tipo de célula adulta**.','Exemplo: no fumante, o epitélio respiratório é trocado por epitélio estratificado pavimentoso.','A célula perde a função original e o tecido pode evoluir para câncer.','Ainda é **reversível**: é uma adaptação da célula.'],
        regra:'Agressão crônica → metaplasia' }
    ]
  },
  { t:'checar', titulo:'Confira o entendimento', p:'3–4',
    perg:'No brônquio de um fumante, o epitélio cilíndrico ciliado dá lugar a um epitélio estratificado pavimentoso. Que adaptação é essa?',
    dica:'Pergunte o que mudou: o tamanho da célula, a quantidade de células ou o tipo de célula?',
    ops:[
      { t:'Hipertrofia', por:'Hipertrofia é a mesma célula maior. Aqui a célula não cresceu: ela foi trocada por outro tipo.' },
      { t:'Hiperplasia', por:'Hiperplasia é mais células do mesmo tipo. Aqui surgiu um tipo diferente de epitélio.' },
      { t:'Metaplasia', por:'Um tipo de célula adulta foi substituído por outro, mais resistente à agressão crônica do fumo. É o exemplo da própria apostila.', certa:true },
      { t:'Atrofia', por:'Atrofia é redução de tamanho por falta de estímulo. Aqui há agressão crônica e mudança de tipo celular.' }
    ]
  },
  { t:'texto', titulo:'O que é o esôfago de Barrett', p:'4', img:'m1_barrett_esquema',
    leg:'Esôfago distal com áreas revestidas por epitélio colunar acima da junção gastroesofágica; na histologia, a mucosa escamosa ao lado da metaplasia intestinal.',
    corpo:[
      'É uma **complicação crônica da doença do refluxo gastroesofágico (DRGE)**.',
      'Caracteriza-se pela **metaplasia intestinal na mucosa escamosa do esôfago**.',
      'Para entender o processo, primeiro é preciso lembrar como é o esôfago normal: é o que a próxima etapa mostra.'
    ]
  },
  { t:'explorar', titulo:'Explore o esôfago normal', p:'4–5', img:'m1_esofago_normal', ann:'m1_esofago_normal_apostila',
    intro:'Toque em cada número para descobrir a estrutura. O esôfago é revestido por epitélio pavimentoso estratificado não queratinizado: várias camadas de células, adequadas para suportar o atrito da passagem dos alimentos.',
    pts:[
      { x:6,  y:40, nome:'Epitélio pavimentoso estratificado não queratinizado', txt:'Várias camadas de células achatadas. Em condições normais, **não tem células caliciformes**, que são do epitélio intestinal.' },
      { x:15, y:78, nome:'Lâmina própria', txt:'Tecido conjuntivo logo abaixo do epitélio.' },
      { x:23, y:30, nome:'Camada muscular da mucosa', txt:'Faixa fina de músculo liso que fecha a mucosa.' },
      { x:37, y:22, nome:'Glândulas esofágicas', txt:'Os grupos de ácinos arroxeados abaixo da mucosa.' },
      { x:55, y:58, nome:'Camada muscular circular interna', txt:'Primeira camada da muscular própria.' },
      { x:79, y:45, nome:'Camada muscular longitudinal externa', txt:'Camada mais externa da muscular própria.' }
    ]
  },
  { t:'sequencia', titulo:'Do refluxo à metaplasia', p:'4',
    intro:'Avance um passo de cada vez. Cada passo é causa do seguinte.',
    passos:[
      { h:'Refluxo repetido', txt:'Na DRGE, o conteúdo gástrico reflui repetidamente para o esôfago.' },
      { h:'Lesão do epitélio escamoso', txt:'A exposição crônica ao **ácido gástrico e às secreções biliares** lesa o epitélio: morte celular, inflamação e regeneração.' },
      { h:'Mudança nas células-tronco', txt:'Com a agressão persistente, muda a diferenciação das **células-tronco da camada basal**.' },
      { h:'Novo epitélio', txt:'Essas células passam a originar um **epitélio colunar com características intestinais**, incluindo **células caliciformes produtoras de mucina**.' },
      { h:'Barrett', txt:'O epitélio escamoso normal é gradualmente substituído pelo epitélio metaplásico. Essa transformação é a base anatomopatológica do esôfago de Barrett.' }
    ],
    nota:'O principal aspecto clínico-patológico é o **risco aumentado de adenocarcinoma esofágico**. Metaplasia não significa câncer: ela identifica uma mucosa que pode evoluir para displasia e, em alguns casos, para neoplasia maligna.'
  },
  { t:'abas', titulo:'Na peça: normal × Barrett', p:'5',
    intro:'Compare a junção entre esôfago e estômago nas duas peças.',
    abas:[
      { rot:'Junção normal', img:'m1_jeg_normal', leg:'Peça cirúrgica: esôfago claro em cima, estômago avermelhado embaixo.',
        itens:['A **junção gastroesofágica (JEG)** normal é uma linha de transição nítida entre a mucosa do esôfago e a do estômago.'] },
      { rot:'Barrett', img:'m1_barrett_macro', leg:'Peça com esôfago de Barrett.',
        itens:['A transição entre o epitélio pavimentoso estratificado do esôfago e o epitélio colunar simples fica **irregular**, com projeções de mucosa colunar subindo pelo esôfago.','Esse desenho é a **transição epitelial típica do esôfago de Barrett**.'] }
    ]
  },
  { t:'abas', titulo:'Segmento longo, curto e ultracurto', p:'5–6',
    intro:'A classificação usa a **extensão da metaplasia intestinal acima da junção esofagogástrica (JEG)**, a região de transição entre o esôfago e o estômago.',
    abas:[
      { rot:'Longo', img:'m1_seg_longo', leg:'Endoscopia: epitélio escamoso, linha Z e mucosa de Barrett cor de salmão.',
        itens:['A metaplasia se estende por **3 cm ou mais** acima da JEG.','É **mais associado ao adenocarcinoma** do que o segmento curto.'] },
      { rot:'Curto', img:'m1_seg_curto', leg:'Endoscopias com extensões de 1 e 2 cm.',
        itens:['A metaplasia se estende por **menos de 3 cm** acima da JEG.'] },
      { rot:'Ultracurto', img:'m1_seg_ultracurto', leg:'Endoscopia: pequenas áreas metaplásicas (setas) na região da JEG.',
        itens:['Existem apenas **pequenas áreas metaplásicas** na região da JEG.'] }
    ]
  },
  { t:'checar', titulo:'Confira o entendimento', p:'5',
    perg:'A endoscopia mostra mucosa cor de salmão que sobe 4 cm acima da junção esofagogástrica, e a biópsia confirma metaplasia intestinal. Como se classifica?',
    dica:'O ponto de corte é 3 cm acima da JEG.',
    ops:[
      { t:'Segmento ultracurto', por:'Ultracurto são só pequenas áreas metaplásicas na região da JEG, não 4 cm de extensão.' },
      { t:'Segmento curto', por:'Curto é menos de 3 cm. Com 4 cm, já passou do corte.' },
      { t:'Segmento longo', por:'3 cm ou mais acima da JEG é segmento longo, o mais associado ao adenocarcinoma.', certa:true }
    ]
  },
  { t:'explorar', titulo:'Ache a metaplasia na lâmina', p:'6', img:'m1_metaplasia_lamina', ann:'m1_metaplasia_lamina_apostila',
    intro:'Esta é a pergunta da apostila: como reconhecer a metaplasia intestinal na lâmina? Toque nos números.',
    pts:[
      { x:79, y:55, nome:'Região sem metaplasia', txt:'**Epitélio estratificado pavimentoso não queratinizado**, o revestimento normal do esôfago.' },
      { x:30, y:14, nome:'Área metaplásica', txt:'**Epitélio colunar simples**, organizado em células altas e justapostas.' },
      { x:21, y:48, nome:'Células caliciformes', txt:'Comuns no epitélio colunar simples do intestino, **não no esôfago**. Acumulam mucina no citoplasma, que fica claro ou vacuolizado. A mucina pode ser evidenciada pela coloração **azul de Alcian**.' },
      { x:12, y:84, nome:'Mais caliciformes', txt:'Repare no tom azulado: é a mucina dentro das células caliciformes.' }
    ]
  },
  { t:'checar', titulo:'Confira o entendimento', p:'4 e 6',
    perg:'Numa biópsia de esôfago distal, qual achado indica metaplasia intestinal?',
    dica:'Pense na célula que é típica do intestino e que o esôfago normal não tem.',
    ops:[
      { t:'Epitélio pavimentoso estratificado não queratinizado', por:'Esse é o epitélio normal do esôfago, não a metaplasia.' },
      { t:'Epitélio colunar com células caliciformes produtoras de mucina', por:'É a marca da metaplasia intestinal: o epitélio escamoso foi trocado por um epitélio colunar com características intestinais.', certa:true },
      { t:'Camada muscular longitudinal externa espessa', por:'A camada muscular não é onde a metaplasia acontece; a mudança é no epitélio da mucosa.' }
    ]
  },
  { t:'explorar', titulo:'Displasia: quando o epitélio se desorganiza', p:'8', img:'m1_displasia', ann:'m1_displasia_apostila',
    intro:'A displasia é o **crescimento desordenado do epitélio**, com perda da uniformidade celular e da organização normal. Toque nos números.',
    pts:[
      { x:44, y:30, nome:'Perda da organização epitelial', txt:'As camadas deixam de seguir o arranjo normal. Também há **aumento da atividade mitótica**.' },
      { x:76, y:30, nome:'Pleomorfismo celular', txt:'Em vez de um conjunto organizado de células semelhantes, aparecem células com **dimensões e formas variáveis**.' }
    ],
    destaque:'Metaplasia muda o **tipo** de diferenciação celular. Displasia muda o **crescimento, a maturação e a organização** do epitélio.'
  },
  { t:'explorar', titulo:'O que mudou nos núcleos', p:'8', img:'m1_displasia_nucleos',
    intro:'Painel A: transição abrupta da metaplasia de Barrett para displasia leve. Painel B: irregularidades arquiteturais de displasia de alto grau.',
    pts:[
      { x:20, y:40, nome:'Núcleos hipercromáticos', txt:'Núcleos mais escuros, por alterações no conteúdo e na organização da cromatina, com **aumento da relação núcleo-citoplasma** e estratificação nuclear.' },
      { x:77, y:40, nome:'Glândula dentro de glândula', txt:'Irregularidade arquitetural típica da **displasia de alto grau**.' }
    ]
  },
  { t:'abas', titulo:'Baixo grau × alto grau', p:'8',
    intro:'A diferença está em quanto a arquitetura se perde.',
    abas:[
      { rot:'Baixo grau', img:'m1_displasia_baixo', leg:'Displasia de baixo grau.',
        itens:['A arquitetura **permanece relativamente preservada**.','Pode existir hipercromasia.'] },
      { rot:'Alto grau', img:'m1_displasia_alto', leg:'Displasia de alto grau.',
        itens:['As alterações celulares e arquiteturais são **mais acentuadas**, com maior irregularidade.','Exemplo: **glândulas dentro de glândulas**.'] }
    ]
  },
  { t:'tabela', titulo:'Metaplasia × displasia × adenocarcinoma', p:'9',
    cols:['Metaplasia','Displasia','Adenocarcinoma'],
    linhas:[
      ['Alteração principal','Substituição do tipo celular','Atipia e desorganização do epitélio','Neoplasia maligna glandular'],
      ['Organização','Pode permanecer relativamente organizada','Alterada em grau variável','Frequentemente desorganizada'],
      ['Invasão dos tecidos','Não caracteriza a metaplasia','Não caracteriza a displasia epitelial isolada','Pode invadir tecidos adjacentes'],
      ['Significado','Adaptação a um estímulo crônico','Lesão pré-neoplásica','Câncer maligno']
    ],
    nota:'A sequência metaplasia → displasia → adenocarcinoma ajuda a entender a progressão **possível** do Barrett, mas nem todo paciente percorre essas etapas. O ponto central: a persistência do estímulo lesivo cria um ambiente favorável à evolução das alterações epiteliais.'
  },
  { t:'checar', titulo:'Confira o entendimento', p:'8–9',
    perg:'No seguimento de um Barrett, a biópsia mostra núcleos hipercromáticos, arquitetura muito irregular com glândulas dentro de glândulas, e nenhuma invasão. Qual é a interpretação?',
    dica:'Olhe para dois critérios da tabela: há atipia? Há invasão?',
    ops:[
      { t:'Metaplasia intestinal sem displasia', por:'Metaplasia é só troca do tipo celular, com organização relativamente mantida. Aqui há atipia nuclear e desorganização.' },
      { t:'Displasia de baixo grau', por:'No baixo grau a arquitetura fica relativamente preservada. Glândulas dentro de glândulas indicam irregularidade acentuada.' },
      { t:'Displasia de alto grau', por:'Atipia com alterações arquiteturais acentuadas (glândulas dentro de glândulas), sem invasão: displasia de alto grau.', certa:true },
      { t:'Adenocarcinoma invasivo', por:'O que define o adenocarcinoma na tabela é a capacidade de invadir tecidos adjacentes, e a biópsia não mostra invasão.' }
    ]
  },
  { t:'resumo', titulo:'O que levar desta missão',
    itens:[
      'A célula se adapta antes de morrer: **sobrecarga → hipertrofia; falta de estímulo → atrofia; estímulo proliferativo → hiperplasia; agressão crônica → metaplasia**.',
      'Esôfago normal: **epitélio pavimentoso estratificado não queratinizado**, sem células caliciformes.',
      'Barrett: na DRGE, as células-tronco da camada basal passam a formar **epitélio colunar intestinal com células caliciformes** (azul de Alcian).',
      'Classificação pela extensão acima da JEG: **longo ≥ 3 cm, curto < 3 cm, ultracurto** só com pequenas áreas; o longo é mais associado ao adenocarcinoma.',
      'Displasia: **atipia** (núcleos hipercromáticos, relação núcleo-citoplasma aumentada, pleomorfismo) e **desorganização**. Baixo grau preserva a arquitetura; alto grau tem glândulas dentro de glândulas.',
      'Só o adenocarcinoma **invade**. A sequência é uma possibilidade, não um destino.'
    ]
  }
  ]
},
{
  id:'m002', num:'002', titulo:'Estômago e gastrite crônica por H. pylori',
  sub:'Da mucosa normal à metaplasia, displasia e adenocarcinoma gástrico',
  pags:'9–14', cor:'#d9578f',
  questoes:['ANAT-05','ANAT-06','ANAT-07','ANAT-08'],
  etapas:[
  { t:'texto', titulo:'Gastrite crônica por H. pylori', p:'9',
    corpo:[
      'A gastrite crônica é a **inflamação persistente da mucosa gástrica**. A principal causa é a infecção por ***Helicobacter pylori***: bactéria **gram-negativa, espiralada**, que coloniza a mucosa do estômago, **especialmente o antro**.',
      'Diferente de uma resposta só aguda, o infiltrado da gastrite crônica é de **células mononucleares, sobretudo linfócitos e plasmócitos**.',
      'Os linfócitos participam da resposta imune adaptativa e mantêm a inflamação. Os plasmócitos, derivados dos linfócitos B, produzem anticorpos. A presença persistente dessas células indica **inflamação crônica**.'
    ],
    destaque:'O H. pylori é identificado no **muco superficial** que recobre o epitélio gástrico. A coloração de **Giemsa** evidencia a bactéria.'
  },
  { t:'explorar', titulo:'Explore a parede do estômago', p:'9–10', img:'m2_estomago_camadas', ann:'m2_estomago_camadas_apostila',
    intro:'Antes da doença, o normal. Toque nos números, de dentro para fora.',
    pts:[
      { x:30, y:14, nome:'Epitélio e fossetas gástricas', txt:'A mucosa é revestida por **epitélio cilíndrico simples**, formado principalmente por células produtoras de muco. Esse epitélio se invagina formando as **fossetas gástricas**, que se comunicam com as glândulas da mucosa.' },
      { x:58, y:30, nome:'Camada mucosa', txt:'Epitélio, glândulas e lâmina própria.' },
      { x:62, y:50, nome:'Camada submucosa', txt:'Tecido conjuntivo frouxo, mais claro, abaixo da mucosa.' },
      { x:28, y:76, nome:'Camada muscular', txt:'Músculo liso, a faixa mais espessa.' },
      { x:44, y:89, nome:'Camada serosa', txt:'Revestimento mais externo.' }
    ]
  },
  { t:'explorar', titulo:'Corpo e fundo: a fábrica de ácido', p:'10–11', img:'m2_corpo_fundo', ann:'m2_corpo_fundo_apostila',
    intro:'No corpo e no fundo, as glândulas são **retas e bem organizadas, com lúmen estreito**, e predominam as **células parietais e principais**. Toque nos números.',
    pts:[
      { x:20, y:16, nome:'Fossetas', txt:'Invaginações do epitélio de superfície, que produz muco.' },
      { x:30, y:62, nome:'Células parietais (acidófilas)', txt:'Citoplasma **rosado**. Produzem **ácido clorídrico**, que participa da digestão e da barreira contra microrganismos, e secretam o **fator intrínseco**.' },
      { x:8,  y:56, nome:'Células principais (basófilas)', txt:'Coram em **roxo** pela abundância de retículo endoplasmático rugoso, ligado à síntese proteica. Produzem **pepsinogênio**, precursor da pepsina.' },
      { x:88, y:90, nome:'Camada muscular da mucosa', txt:'Limite inferior da mucosa.' }
    ],
    destaque:'Corpo e fundo são especializados em produzir **ácido e componentes enzimáticos**.'
  },
  { t:'explorar', titulo:'Parietal ou principal?', p:'10', img:'m2_parietais_principais',
    intro:'Aumento maior das glândulas do corpo. As setas da própria figura apontam um exemplo de cada célula; os números ficam ao lado delas.',
    pts:[
      { x:93, y:42, nome:'Célula parietal', txt:'Acidófila, citoplasma rosado: ácido clorídrico e fator intrínseco.' },
      { x:29, y:42, nome:'Célula principal', txt:'Basófila, citoplasma arroxeado: pepsinogênio.' }
    ]
  },
  { t:'explorar', titulo:'Antro e piloro: o território do H. pylori', p:'11', img:'m2_antro', ann:'m2_antro_apostila',
    intro:'No antro e no piloro, as glândulas são **longas, tortuosas e predominantemente mucosas, com lúmen mais amplo**. É a região **mais acometida pelo H. pylori**.',
    pts:[
      { x:52, y:30, nome:'Lúmen glandular mais amplo', txt:'Compare com as glândulas retas e estreitas do corpo.' },
      { x:31, y:54, nome:'Organização mais tortuosa', txt:'Poucas células parietais. Predominam **células mucosas e células G**, que produzem **gastrina**, hormônio que regula a secreção ácida e a atividade gástrica.' }
    ]
  },
  { t:'tabela', titulo:'Corpo/fundo × antro/piloro', p:'12',
    cols:['Corpo/fundo','Antro/piloro'],
    linhas:[
      ['Glândulas','Retas e organizadas','Longas e tortuosas'],
      ['Lúmen glandular','Estreito','Mais amplo'],
      ['Células predominantes','Parietais e principais','Mucosas e células G'],
      ['Função destacada','Ácido e pepsinogênio','Muco e gastrina'],
      ['Relação com H. pylori','Pode ser acometido na progressão da gastrite','Região frequentemente acometida'],
      ['Consequências','Atrofia e metaplasia intestinal no comprometimento crônico','Inflamação frequentemente superficial, sintomas ausentes ou leves']
    ]
  },
  { t:'checar', titulo:'Confira o entendimento', p:'11–12',
    perg:'Uma biópsia gástrica mostra glândulas longas e tortuosas, de lúmen amplo, com muitas células mucosas e células G e poucas parietais. De que região ela veio?',
    dica:'Células G produzem gastrina. Em qual região elas predominam?',
    ops:[
      { t:'Corpo', por:'No corpo as glândulas são retas, de lúmen estreito, cheias de células parietais e principais.' },
      { t:'Fundo', por:'O fundo tem a mesma histologia do corpo: glândulas retas, parietais e principais.' },
      { t:'Antro', por:'Glândulas longas, tortuosas e mucosas, lúmen amplo, células G: antro/piloro, a região mais acometida pelo H. pylori.', certa:true }
    ]
  },
  { t:'sequencia', titulo:'Patogênese: da colonização à metaplasia', p:'12', img:'m2_patogenese',
    intro:'A colonização desencadeia inflamação persistente e, em alguns casos, alterações estruturais cada vez mais importantes. Avance passo a passo.',
    passos:[
      { h:'Colonização e urease', txt:'O H. pylori produz **urease**, que transforma ureia em amônia e dióxido de carbono. A amônia **reduz a acidez** no microambiente próximo à bactéria, favorecendo sua sobrevivência. A presença bacteriana e a resposta do hospedeiro mantêm a inflamação.' },
      { h:'Gastrite crônica ativa', txt:'Infiltrado de **linfócitos e plasmócitos** na lâmina própria (componente crônico) junto com **neutrófilos** (componente ativo). “Ativa” significa atividade inflamatória sobreposta à crônica.' },
      { h:'Atrofia gástrica', txt:'A inflamação persistente pode destruir as glândulas. Reduzem as células parietais e principais, com menos ácido e pepsina. Menos células parietais também pode comprometer o fator intrínseco e levar à **deficiência de vitamina B12**.' },
      { h:'Metaplasia intestinal', txt:'Após a perda das glândulas, a mucosa pode ser substituída por epitélio com características intestinais, incluindo **células caliciformes**. É semelhante, em conceito, ao Barrett, mas em outro órgão.' }
    ],
    nota:'**Inflamação crônica → atrofia → metaplasia intestinal → maior risco de adenocarcinoma.** É uma possibilidade, não um destino: nem toda gastrite evolui para atrofia, nem toda atrofia para metaplasia, e nem toda metaplasia vira câncer.'
  },
  { t:'abas', titulo:'O que procurar na lâmina', p:'13',
    intro:'Três achados da gastrite por H. pylori, cada um em uma aba.',
    abas:[
      { rot:'A bactéria', imgs:['m2_hpylori_he','m2_hpylori_prata'], leg:'H. pylori na superfície, em H&E (setas) e na impregnação pela prata, em que os bacilos espiralados aparecem escuros sobre o epitélio.',
        itens:['O H. pylori coloniza **apenas a camada mucosa**, a mais superficial.','A bactéria pode ser vista **junto ao muco que recobre as fossetas gástricas**.','O que causa as úlceras é a **inflamação** resultante da infecção.'] },
      { rot:'Infiltrado crônico', imgs:['m2_infiltrado_cronico','m2_infiltrado_lamina'], leg:'Lâmina própria com infiltrado mononuclear denso.',
        itens:['**Linfócitos e plasmócitos** se acumulam na lâmina própria.','Infiltrado mononuclear = gastrite **crônica**.'] },
      { rot:'Neutrófilos', imgs:['m2_neutrofilos','m2_neutrofilos_fosseta'], leg:'Neutrófilos na mucosa e no epitélio das fossetas.',
        itens:['Infiltrado de **neutrófilos** (polimorfonucleares) indica componente agudo, **ativo**.','Os neutrófilos podem estar na mucosa e no **epitélio das fossetas ou glândulas**.'] }
    ]
  },
  { t:'checar', titulo:'Confira o entendimento', p:'12–13',
    perg:'A biópsia do antro mostra lâmina própria cheia de linfócitos e plasmócitos e neutrófilos invadindo o epitélio das fossetas. Como descrever essa gastrite?',
    dica:'São dois componentes ao mesmo tempo. O que cada tipo de célula indica?',
    ops:[
      { t:'Gastrite aguda isolada', por:'Linfócitos e plasmócitos na lâmina própria indicam cronicidade; não é só aguda.' },
      { t:'Gastrite crônica sem atividade', por:'Os neutrófilos no epitélio das fossetas indicam atividade inflamatória.' },
      { t:'Gastrite crônica ativa', por:'Linfócitos e plasmócitos = componente crônico; neutrófilos = componente ativo. Juntos: gastrite crônica ativa.', certa:true }
    ]
  },
  { t:'explorar', titulo:'Metaplasia intestinal no estômago', p:'14', img:'m2_metaplasia_gastrica',
    intro:'Na metaplasia intestinal, o epitélio gástrico passa a ter células com diferenciação intestinal. Toque no número.',
    pts:[
      { x:67, y:22, nome:'Células caliciformes', txt:'Células com diferenciação intestinal, **produtoras de muco**: o mesmo marcador que você viu no Barrett.' }
    ]
  },
  { t:'texto', titulo:'Displasia gástrica', p:'14', img:'m2_metaplasia_glandulas', leg:'Glândulas com metaplasia: células bem diferenciadas.',
    corpo:[
      'Na displasia gástrica, o epitélio metaplásico passa a ter **atipias celulares e crescimento desordenado**. É uma alteração **pré-neoplásica**.',
      'As características são as mesmas do Barrett: **núcleos hipercromáticos, aumento da relação núcleo-citoplasma e irregularidade da arquitetura glandular**.',
      'A diferença é o contexto: no Barrett, as alterações aparecem no epitélio metaplásico do esôfago; na gastrite crônica, na mucosa gástrica, em meio a inflamação persistente, atrofia e metaplasia intestinal.'
    ],
    destaque:'Epitélio intestinal na mucosa gástrica, **por si só, é metaplasia, não displasia**. Para falar em displasia é preciso ver **atipias e desorganização** epitelial.'
  },
  { t:'checar', titulo:'Confira o entendimento', p:'14',
    perg:'A mucosa gástrica mostra glândulas com células caliciformes, núcleos pequenos, basais e uniformes, e arquitetura organizada. Qual é o diagnóstico?',
    dica:'Há células caliciformes, mas existe atipia ou desorganização?',
    ops:[
      { t:'Metaplasia intestinal', por:'Células caliciformes sem atipia e com arquitetura preservada: só a troca do tipo celular.', certa:true },
      { t:'Displasia gástrica', por:'Displasia exige atipias e desorganização. Epitélio intestinal sozinho não basta.' },
      { t:'Adenocarcinoma gástrico', por:'Não há atipia, destruição da arquitetura nem invasão.' }
    ]
  },
  { t:'explorar', titulo:'Adenocarcinoma gástrico', p:'14', img:'m2_adenocarcinoma', ann:'m2_adenocarcinoma_apostila',
    intro:'O adenocarcinoma é a neoplasia maligna mais comum do estômago: tumor de origem **epitelial glandular**, com **crescimento invasivo, destruição da arquitetura normal e capacidade de dar metástases**. Toque nos números.',
    pts:[
      { x:38, y:58, nome:'Atipia celular', txt:'As células variam de **tamanho e forma**, com **núcleos aumentados e hipercromáticos**.' },
      { x:80, y:70, nome:'Perda da arquitetura normal', txt:'As glândulas deixam de ter a organização regular da mucosa.' }
    ]
  },
  { t:'resumo', titulo:'O que levar desta missão',
    itens:[
      'H. pylori: **gram-negativo, espiralado**, no **muco superficial**, sobretudo no **antro**; Giemsa evidencia a bactéria. A urease gera amônia, que reduz a acidez ao redor dela.',
      'Corpo/fundo: glândulas **retas**, lúmen estreito, **parietais** (rosadas: HCl, fator intrínseco) e **principais** (roxas: pepsinogênio). Antro/piloro: glândulas **longas e tortuosas**, lúmen amplo, **células mucosas e G** (gastrina).',
      'Gastrite crônica = **linfócitos e plasmócitos** na lâmina própria. **Neutrófilos** = atividade (gastrite crônica ativa).',
      'Sequência possível: **inflamação crônica → atrofia → metaplasia intestinal → maior risco de adenocarcinoma**. Atrofia pode levar a deficiência de B12.',
      'Células caliciformes no estômago = **metaplasia**. Displasia só com **atipia e desorganização**.',
      'Adenocarcinoma gástrico: epitelial glandular, **invasivo**, destrói a arquitetura e pode dar metástases.'
    ]
  }
  ]
}
];
window.PM_PROXIMAS = ['Intestino delgado e doença inflamatória intestinal','Parasitoses intestinais','Pólipos e câncer colorretal','Fígado e hepatites','Vesícula, pâncreas e apêndice','Glomérulo e rim','Mama e endométrio'];
