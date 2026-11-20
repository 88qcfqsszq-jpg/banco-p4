/* PÍLULAS PARA PROVA · APG Semana 3 (2026.2)
   17 pílulas (n 24–40) feitas a partir do PDF da APG S3: infecções congênitas, abortamento, DTG, mamas,
   corrimento e ISTs, úlceras genitais, crescimento e alimentação. Mesmo formato do conteudo.js (leia o cabeçalho dele).
   Carrega depois de conteudo.js e acrescenta ao mesmo array. */
(window.PL_PILULAS = window.PL_PILULAS || []).push(
  {
    id: "torch",
    n: 24,
    cor: "#7a5cc9",
    titulo: "Infecções congênitas (TORCH)",
    sub: "Como passa, quando lesa e o que deixa no bebê",
    busca: {"t": ["prenatal", "rn", "gineco", "politicas", "adolescente"], "re": "TORCH|toxoplasm|citomegal|\\bCMV\\b|rub[ée]ola|zika|microcefal|sífilis cong[êe]nita|infec[çc][ãa]o cong[êe]nita|Sabin|Gregg", "enun": true},
    questoes: [],
    gancho: {
      caso: "Recém-nascido a termo, microcefálico, com calcificações periventriculares na ultrassonografia transfontanelar e triagem auditiva alterada. A mãe nunca teve sintomas na gestação.",
      p: "Agente mais provável?",
      o: ["Citomegalovírus", "Toxoplasma gondii", "Vírus da rubéola", "Treponema pallidum"],
      a: 0
    },
    ideia: "Infecção congênita é a que a mãe passa ao feto **pela placenta** (transmissão vertical). A mãe quase sempre **não sente nada**; o feto sofre. Por isso o diagnóstico depende da **triagem do pré-natal**.\nA **infecção primária** (primeiro contato) é a que mais transmite, porque ainda não há anticorpos.\nA **idade gestacional** manda: **quanto mais cedo, mais grave** (organogênese) e **quanto mais tarde, mais transmite**. A exceção é o **herpes**: 85% da transmissão é **no parto**.",
    mapa: [
      {
        tabela: {
          titulo: "O que cada uma deixa",
          cols: ["Infecção", "Achado típico no bebê", "Pista"],
          rows: [
            ["**Toxoplasmose**", "Retinocoroidite, hidrocefalia e **calcificações difusas** (tríade de Sabin)", "Mais grave no 1º trimestre; transmite mais no 3º"],
            ["**Citomegalovírus**", "Microcefalia, **calcificações periventriculares**, **surdez**, petéquias", "Infecção congênita mais comum; principal causa não genética de surdez"],
            ["**Rubéola**", "**Catarata, cardiopatia (PCA, estenose pulmonar) e surdez** (tríade de Gregg)", "Risco até 12 semanas; vacina de vírus vivo"],
            ["**Herpes simples**", "Vesículas, encefalite ou forma disseminada (pele, SNC ou disseminada)", "85% no parto; primoinfecção no fim da gestação é o pior cenário"],
            ["**Sífilis**", "Pênfigo palmoplantar, rinite sanguinolenta, pseudoparalisia de Parrot", "Mais evitável de todas; qualquer fase da gestação"],
            ["**Zika**", "**Microcefalia grave**, calcificações subcorticais, artrogripose", "Aedes aegypti; afinidade por células progenitoras neurais"]
          ]
        }
      },
      {
        fluxo: {
          titulo: "Como o agente chega ao feto",
          passos: ["Viremia ou parasitemia na **mãe**", "Infecta o **trofoblasto** e causa placentite", "Alcança a **circulação fetal**", "Até 8 semanas (organogênese) → **malformação e aborto**", "Depois → **inflamação e destruição** (calcificação, hidrocefalia, hepatite, anemia)"]
        }
      },
      {
        tabela: {
          titulo: "Prevenção de cada uma",
          cols: ["Infecção", "Medida"],
          rows: [
            ["Toxoplasmose", "Carne bem passada, lavar frutas e verduras, luvas na terra, **não limpar caixa de areia do gato**"],
            ["CMV", "**Lavar as mãos** após fralda e saliva de criança, não compartilhar talheres, não beijar na boca"],
            ["Rubéola", "**Vacina antes de engravidar** (vírus vivo) e evitar gravidez por 30 dias"],
            ["Herpes", "Preservativo, aciclovir a partir de **36 semanas**, cesárea se lesão no parto"],
            ["Sífilis", "Teste rápido na 1ª consulta, 3º trimestre e parto; **penicilina benzatina** e tratar a parceria"],
            ["Zika", "Repelente, roupas compridas, eliminar criadouros, preservativo"]
          ]
        }
      }
    ],
    gatilhos: [
      ["Tríade de Sabin (retinocoroidite, hidrocefalia, calcificação difusa)", "Toxoplasmose"],
      ["Calcificação periventricular + surdez + microcefalia", "CMV"],
      ["Catarata + cardiopatia + surdez", "Rubéola (tríade de Gregg)"],
      ["Microcefalia grave com calcificação subcortical", "Zika"],
      ["Vesículas no RN entre a 1ª e a 4ª semana", "Herpes neonatal"],
      ["Mancha em bolinho de mirtilo (blueberry muffin)", "CMV ou rubéola"]
    ],
    pegadinhas: [
      ["A reativação da infecção na gestante é a que mais transmite.", "É a infecção primária."],
      ["Quanto mais cedo a infecção, mais o feto se infecta.", "Transmite mais no fim, mas lesa mais no início."],
      ["O herpes passa sobretudo pela placenta.", "85% no parto."],
      ["A gestante sem sintomas tem feto sem risco.", "Quase sempre a mãe é assintomática e o feto é lesado."],
      ["Tomar a vacina tríplice viral na gestação é seguro.", "É vírus vivo: vacinar antes ou no puerpério."]
    ],
    relampago: [
      {
        p: "Qual infecção congênita é a mais comum?",
        o: ["Citomegalovírus", "Toxoplasmose", "Rubéola", "Herpes"],
        a: 0,
        x: "CMV: 0,5 a 1% dos nascidos vivos."
      },
      {
        p: "Por que a infecção primária transmite mais ao feto?",
        o: ["Não há anticorpos maternos e a carga do agente no sangue é grande", "A placenta fica mais fina", "O feto não tem sistema imune", "O agente só circula na primeira vez"],
        a: 0,
        x: "Na reativação ou reinfecção, os anticorpos já existentes reduzem a passagem."
      },
      {
        p: "Tríade de Gregg:",
        o: ["Catarata, cardiopatia e surdez", "Retinocoroidite, hidrocefalia e calcificações", "Dentes de Hutchinson, ceratite e surdez", "Microcefalia, artrogripose e calcificações"],
        a: 0,
        x: "É a rubéola congênita. A segunda é Sabin; a terceira é de Hutchinson (sífilis tardia)."
      }
    ],
    bula: "Mãe assintomática, feto lesado. Primoinfecção é o risco. Cedo lesa mais, tarde transmite mais (herpes passa no parto). Sabin = toxo, Gregg = rubéola, periventricular = CMV, subcortical = Zika."
  },
  {
    id: "toxo",
    n: 25,
    cor: "#c2703d",
    titulo: "Toxoplasmose na gestação",
    sub: "Sorologia, espiramicina e esquema tríplice",
    busca: {"t": ["prenatal", "rn", "gineco", "adolescente"], "re": "toxoplasm|espiramicina|sulfadiazina|pirimetamina", "enun": true},
    questoes: [],
    gancho: {
      caso: "Gestante de 10 semanas. IgG positiva e IgM positiva para toxoplasmose. Avidez de IgG alta (> 60%).",
      p: "Interpretação?",
      o: ["Infecção anterior à gestação: sem tratamento", "Infecção aguda: iniciar o esquema tríplice", "Suscetível: repetir em 3 meses", "Falso-positivo: ignorar"],
      a: 0
    },
    ideia: "**Toxoplasma gondii**: o **gato** é o hospedeiro definitivo (oocisto nas fezes); a gestante se infecta por **carne crua**, **oocisto** em alimento, água ou terra.\nSó transmite ao feto na **primoinfecção** durante a gestação. Quem já tinha **IgG antes** está protegida.\n**IgM positiva não prova infecção recente** (dura meses): quem esclarece é a **avidez da IgG**.",
    mapa: [
      {
        tabela: {
          titulo: "Sorologia na gestação",
          cols: ["IgG / IgM", "Interpretação e conduta"],
          rows: [
            ["**− / −**", "**Suscetível**: orientar prevenção e **repetir a cada trimestre**"],
            ["**+ / −**", "**Imune** (infecção antiga): nada a fazer"],
            ["**− / +**", "Infecção muito recente ou falso-positivo: repetir em 2 a 3 semanas"],
            ["**+ / +**", "Até 16 semanas: **avidez da IgG** (alta = infecção anterior; baixa = possível aguda). Após 16 semanas: **tratar como aguda**"]
          ]
        }
      },
      {
        tabela: {
          titulo: "Tratamento",
          cols: ["", "Espiramicina", "Sulfadiazina + pirimetamina + ácido folínico"],
          rows: [
            ["**Quando**", "Aguda até **16 semanas**, feto ainda **não infectado**", "**Feto infectado** (PCR do líquido amniótico + ou ultrassom alterado) ou aguda após 16 semanas"],
            ["**Objetivo**", "Barrar a placenta (profilaxia): reduz ~60% a transmissão", "**Tratar o feto**"],
            ["**Mecanismo**", "Macrolídeo: bloqueia a síntese de proteínas (50S)", "**Bloqueiam o folato do parasita** em dois pontos (sinergia)"],
            ["**Atravessa a placenta?**", "Pouco: concentra na placenta, não trata o feto", "Sim"]
          ]
        }
      },
      {
        lista: {
          titulo: "Detalhes do esquema tríplice",
          itens: ["**Sulfadiazina** imita o PABA e bloqueia a di-hidropteroato sintase", "**Pirimetamina** bloqueia a **DHFR**: pode causar anemia megaloblástica, neutropenia e plaquetopenia → hemograma a cada 2 a 4 semanas", "**Ácido folínico** protege a medula da mãe e não é aproveitado pelo parasita", "Pirimetamina **não no 1º trimestre** (teratogênica em animais)", "Sulfadiazina perto do parto: risco de **kernicterus**", "RN infectado trata por **12 meses**, mesmo sem sintomas"]
        }
      },
      {
        fluxo: {
          titulo: "Investigar o feto",
          passos: ["Infecção aguda na mãe", "**PCR do líquido amniótico** (após 18 semanas e pelo menos 4 semanas depois da infecção)", "**Ultrassom mensal**: ventriculomegalia e calcificações", "PCR positivo ou ultrassom alterado → **esquema tríplice**"]
        }
      }
    ],
    gatilhos: [
      ["IgM + e IgG +, avidez alta, 1º trimestre", "Infecção anterior à gestação"],
      ["Infecção aguda com 12 semanas, feto não infectado", "Espiramicina 3 g/dia"],
      ["PCR do líquido amniótico positivo", "Esquema tríplice + ácido folínico"],
      ["Gestante suscetível", "Sorologia a cada trimestre"],
      ["Linfonodo cervical indolor e móvel na gestante", "Pensar em toxoplasmose"],
      ["Mulher soropositiva para HIV com CD4 baixo", "Pode reativar"]
    ],
    pegadinhas: [
      ["IgM positiva sempre significa infecção recente.", "Pode durar mais de um ano; use a avidez."],
      ["A espiramicina trata o feto infectado.", "Ela barra a placenta; o feto infectado recebe o tríplice."],
      ["A pirimetamina é segura no 1º trimestre.", "Evitar no 1º trimestre."],
      ["O ácido folínico reduz o efeito da pirimetamina no parasita.", "O parasita não o aproveita; ele só protege a mãe."],
      ["A gestante com IgG positiva antiga precisa de profilaxia.", "Está protegida (exceto imunossuprimida)."]
    ],
    relampago: [
      {
        p: "Gestante de 12 semanas com toxoplasmose aguda e feto sem infecção confirmada. Droga?",
        o: ["Espiramicina", "Sulfadiazina + pirimetamina + ácido folínico", "Penicilina benzatina", "Aciclovir"],
        a: 0,
        x: "Até 16 semanas com feto não infectado: espiramicina até o parto."
      },
      {
        p: "Para que serve o ácido folínico no esquema tríplice?",
        o: ["Proteger a medula materna sem reduzir o efeito sobre o parasita", "Aumentar a absorção da sulfadiazina", "Tratar o parasita", "Prevenir kernicterus"],
        a: 0,
        x: "Já é o folato pronto: entra depois da DHFR e o parasita não o usa."
      },
      {
        p: "A prevenção para a gestante suscetível inclui:",
        o: ["Carne bem passada e não limpar a caixa de areia do gato", "Evitar qualquer contato com água", "Vacina antes da gestação", "Apenas lavar as mãos"],
        a: 0,
        x: "Não há vacina: é evitar cistos na carne e oocistos no ambiente."
      }
    ],
    bula: "IgM não prova recência: avidez. Até 16 semanas espiramicina; feto infectado ou depois de 16 semanas, tríplice (+ ácido folínico). Pirimetamina não no 1º trimestre. RN: 12 meses."
  },
  {
    id: "cmvrub",
    n: 26,
    cor: "#4f8fc0",
    titulo: "CMV e rubéola na gestação",
    sub: "Primária × não primária, avidez e vacina",
    busca: {"t": ["prenatal", "rn", "gineco", "politicas", "adolescente"], "re": "citomegal|\\bCMV\\b|rub[ée]ola|tr[íi]plice viral|Gregg", "enun": true},
    questoes: [],
    gancho: {
      caso: "Mulher de 28 anos, 6 semanas de gestação, cartão sem vacina contra rubéola, e sem exposição. Qual a conduta?",
      p: "Conduta?",
      o: ["Não vacinar agora; vacinar no puerpério, antes da alta", "Vacinar hoje com a tríplice viral", "Dar imunoglobulina de rotina", "Dar antiviral profilático"],
      a: 0
    },
    ideia: "**CMV**: herpesvírus de DNA, **latente** após a primeira infecção. Transmissão de **30 a 40%** na infecção **primária** e de **1 a 3%** na não primária. No Brasil a maioria já é IgG+, então a maior parte dos casos é **não primária**.\n**Rubéola**: vírus de RNA, transmitido por gotículas. Até **12 semanas**, até 90% dos fetos se infectam e quase todos têm defeitos. **Não há antiviral**: a prevenção é a **vacina antes da gestação**.",
    mapa: [
      {
        tabela: {
          titulo: "CMV × Rubéola",
          cols: ["", "CMV", "Rubéola"],
          rows: [
            ["**Agente**", "Herpesvírus 5 (DNA); latente", "Rubivirus (RNA); único hospedeiro: o ser humano"],
            ["**Fonte**", "Saliva e urina de criança pequena (creche); leite e parto", "Gotículas respiratórias"],
            ["**Sintomas na mãe**", "Quase sempre nenhum; ou mononucleose-like", "Metade sem sintomas; exantema que desce, linfonodos retroauriculares"],
            ["**No RN**", "85–90% sem sinais; baixo peso, microcefalia, petéquias, icterícia direta, **surdez**", "Tríade de Gregg; sal e pimenta na retina; bolinho de mirtilo"],
            ["**Triagem**", "Sorologia **não é rotina** (só se sintoma ou ultrassom alterado)", "Sorologia **não é rotina**: conferir a caderneta (2 doses de tríplice viral)"],
            ["**Tratamento**", "Valaciclovir 8 g/dia na primária do 1º trimestre; RN sintomático: ganciclovir e valganciclovir por 6 meses", "**Sem antiviral**: suporte"],
            ["**Prevenção**", "**Higiene**: lavar as mãos, não beijar na boca da criança", "**Vacina** antes; evitar engravidar por 30 dias"]
          ]
        }
      },
      {
        tabela: {
          titulo: "Sorologia do CMV",
          cols: ["IgG / IgM / avidez", "Interpretação"],
          rows: [
            ["**− / −**", "Suscetível: higiene"],
            ["**+ / −**", "Infecção antiga (pode reativar: risco 1 a 3%)"],
            ["**+ / + com avidez baixa**", "**Primária recente** (últimos 3 meses): investigar o feto"],
            ["**+ / + com avidez alta**", "Infecção há mais de 3 meses; se colhida no 1º trimestre, é anterior à gestação"]
          ]
        }
      },
      {
        lista: {
          titulo: "Diagnóstico no feto e no RN",
          itens: ["**PCR do líquido amniótico**: CMV após **20 semanas** e pelo menos **6 semanas** da infecção (o vírus precisa passar pelo rim fetal)", "**RN com CMV**: PCR na urina ou saliva **nas primeiras 3 semanas**; depois não diferencia congênito de adquirido", "**CMV**: afinidade pela **matriz germinativa** → calcificação periventricular e polimicrogiria", "**Surdez** pode surgir depois, até em quem nasceu sem sinais", "**Rubéola**: notificar em 24 horas; IgG+ = imune; IgM + confirmar com avidez e RT-PCR"]
        }
      }
    ],
    gatilhos: [
      ["Gestante que trabalha em creche", "Higiene para evitar CMV"],
      ["Calcificação periventricular, intestino hiperecogênico", "CMV"],
      ["IgM + e avidez baixa nos últimos 3 meses", "CMV primária"],
      ["Surdez neurossensorial progressiva em criança", "Pensar em CMV"],
      ["Exantema + linfonodo retroauricular + gestante", "Rubéola: notificar"],
      ["Mulher sem vacina contra rubéola, grávida", "Vacinar no puerpério"]
    ],
    pegadinhas: [
      ["A sorologia de CMV é rotina no pré-natal.", "O Ministério da Saúde não recomenda de rotina."],
      ["A maior parte dos casos de CMV no Brasil é primária.", "É não primária (a maioria já tem IgG)."],
      ["Para rubéola, dar imunoglobulina à gestante exposta.", "Não é rotina: não impede a viremia."],
      ["Se vacinar sem saber da gestação, interromper a gravidez.", "Não há indicação: nunca foi descrito SRC pela vacina."],
      ["O PCR do RN com CMV vale a qualquer idade.", "Só até 3 semanas de vida."]
    ],
    relampago: [
      {
        p: "A principal sequela do CMV congênito é:",
        o: ["Perda auditiva neurossensorial", "Catarata", "Cardiopatia", "Hepatoesplenomegalia permanente"],
        a: 0,
        x: "É a principal causa não genética de surdez na infância."
      },
      {
        p: "Gestante imune à rubéola é a que tem:",
        o: ["Duas doses de tríplice viral na caderneta", "Nenhuma vacina", "IgM positiva", "Contato recente com caso"],
        a: 0,
        x: "A estratégia é conferir a caderneta; sorologia de rotina não é recomendada."
      },
      {
        p: "Por que a vacina tríplice viral não é feita na gestação?",
        o: ["É de vírus vivo atenuado (risco teórico)", "Não gera anticorpos", "Aumenta a chance de CMV", "Causa toxoplasmose"],
        a: 0,
        x: "Vacina-se a suscetível no puerpério e evita-se engravidar por 30 dias."
      }
    ],
    bula: "CMV: higiene, surdez, calcificação periventricular, PCR do RN em 3 semanas, valaciclovir (gestação) e ganciclovir (RN). Rubéola: sem antiviral, Gregg, vacina antes (vírus vivo, não na gestação)."
  },
  {
    id: "sifilis",
    n: 27,
    cor: "#b8473f",
    titulo: "Sífilis (adquirida, gestacional e congênita)",
    sub: "Fases, testes, penicilina e seguimento",
    busca: {"t": ["prenatal", "rn", "gineco", "hepatites", "politicas", "violencia", "adolescente"], "re": "s[íi]filis|VDRL|treponem|benzatina|Jarisch|cancro duro", "enun": true},
    questoes: [],
    gancho: {
      caso: "Gestante de 24 semanas com teste rápido de sífilis reagente na 1ª consulta. Sem lesões. Não sabe quando se infectou.",
      p: "Conduta?",
      o: ["Penicilina benzatina 2,4 milhões UI semanal por 3 semanas, tratar a parceria", "Aguardar o VDRL antes de tratar", "Doxiciclina por 15 dias", "Azitromicina em dose única"],
      a: 0
    },
    ideia: "**Treponema pallidum** é sistêmico desde o início; divide-se **devagar** (a cada 30 horas), por isso a penicilina precisa manter nível por dias: **benzatina** libera por 2 a 4 semanas.\n**Treponêmico** (teste rápido, FTA-Abs) **fica positivo para sempre**: diagnostica. **Não treponêmico** (VDRL) tem **título** que cai com o tratamento: **segue a cura**.\nNa **gestante**, teste reagente = **tratar já**; só **penicilina benzatina** trata o feto.",
    mapa: [
      {
        tabela: {
          titulo: "Fases",
          cols: ["Fase", "O que aparece"],
          rows: [
            ["**Primária** (10 a 90 dias)", "**Cancro duro**: úlcera única, indolor, base endurecida, linfonodo inguinal indolor; some em 3 a 8 semanas"],
            ["**Secundária** (6 sem a 6 m)", "**Roséola**, lesões em palmas e plantas, **condiloma plano**, alopecia em clareira, linfadenopatia generalizada"],
            ["**Latente**", "Sem sinais; só sorologia. **Recente < 1 ano**; **tardia > 1 ano ou duração ignorada**"],
            ["**Terciária**", "Gomas, **aortite**, neurossífilis tardia (tabes dorsalis, paralisia geral)"]
          ]
        }
      },
      {
        tabela: {
          titulo: "Testes",
          cols: ["Treponêmico", "Não treponêmico", "Interpretação"],
          rows: [
            ["Reagente", "Reagente", "Sífilis ativa ou cicatriz sorológica (ver história e título)"],
            ["Reagente", "Não reagente", "Sífilis muito recente, cicatriz ou falso-positivo; **gestante sem tratamento prévio, tratar**"],
            ["Não reagente", "Reagente", "**Falso-positivo do VDRL** (gestação, autoimune); confirmar com outro treponêmico"],
            ["Não reagente", "Não reagente", "Ausência de infecção ou janela; repetir se exposição"]
          ]
        }
      },
      {
        tabela: {
          titulo: "Tratamento (penicilina benzatina)",
          cols: ["Fase", "Esquema"],
          rows: [
            ["**Recente** (primária, secundária, latente < 1 ano)", "**2,4 milhões UI IM dose única**"],
            ["**Tardia, ignorada ou terciária**", "2,4 milhões UI IM **1x por semana, 3 semanas** (total 7,2)"],
            ["**Neurossífilis**", "Penicilina cristalina IV por 14 dias (ou ceftriaxona)"],
            ["**Gestante**", "**Só penicilina**; alérgica é **dessensibilizada**. Atraso > 7 dias reinicia o esquema"]
          ]
        }
      },
      {
        lista: {
          titulo: "Seguimento e prevenção",
          itens: ["**Jarisch-Herxheimer** nas primeiras 24 horas (febre, calafrios, piora das lesões): não é alergia, **não suspende o tratamento**", "**Parcerias** dos últimos 90 dias: penicilina 2,4 milhões UI mesmo com teste negativo", "**VDRL** mensal na gestante; **queda de 2 diluições** em 3 meses (ou 4 em 6 meses) indica resposta; **aumento de 2** é reinfecção ou falha", "Tratamento adequado na gestante: completo para a fase e **iniciado até 30 dias antes do parto**", "Teste rápido: 1ª consulta, **3º trimestre**, **parto ou aborto**", "RN: VDRL do bebê **2 diluições maior** que o da mãe indica sífilis congênita; notificação compulsória"]
        }
      },
      {
        tabela: {
          titulo: "Sífilis congênita",
          cols: ["Tipo", "Sinais"],
          rows: [
            ["**Precoce** (até 2 anos)", "Rinite sanguinolenta, **pênfigo palmoplantar**, icterícia, hepatoesplenomegalia, **pseudoparalisia de Parrot**"],
            ["**Tardia** (> 2 anos)", "**Tríade de Hutchinson** (incisivos em barril, ceratite intersticial, surdez), nariz em sela, tíbia em sabre"]
          ]
        }
      }
    ],
    gatilhos: [
      ["Úlcera única, indolor, base endurecida", "Sífilis primária"],
      ["Lesões em palmas e plantas + roséola", "Sífilis secundária"],
      ["Teste rápido reagente em gestante", "Penicilina benzatina já, tratar parceiro"],
      ["Tempo de infecção desconhecido", "Tratar como tardia (3 doses)"],
      ["Gestante alérgica à penicilina", "Dessensibilizar"],
      ["Febre horas depois da primeira dose", "Jarisch-Herxheimer: não parar"]
    ],
    pegadinhas: [
      ["O teste treponêmico serve para acompanhar a cura.", "Fica positivo para sempre; o VDRL acompanha."],
      ["Gestante só trata depois do VDRL confirmar.", "Teste reagente já trata."],
      ["A doxiciclina é alternativa na gestante.", "Contraindicada: só penicilina trata o feto."],
      ["Na gestante, atraso de 10 dias entre as doses não muda nada.", "Mais de 7 dias reinicia o esquema."],
      ["Parceiro com teste negativo não precisa tratar.", "Trata-se mesmo assim (incubação)."]
    ],
    relampago: [
      {
        p: "Gestante com sífilis latente de duração ignorada. Esquema:",
        o: ["Benzatina 2,4 milhões UI semanal por 3 semanas", "Benzatina 2,4 milhões UI dose única", "Ceftriaxona por 10 dias", "Doxiciclina por 30 dias"],
        a: 0,
        x: "Duração ignorada = tardia: 7,2 milhões UI no total."
      },
      {
        p: "Qual teste acompanha a resposta ao tratamento?",
        o: ["VDRL (título)", "Teste rápido", "FTA-Abs", "ELISA"],
        a: 0,
        x: "Treponêmicos são cicatriz sorológica."
      },
      {
        p: "A reação de Jarisch-Herxheimer:",
        o: ["Ocorre em 24 horas por morte maciça de treponemas; manter o tratamento", "É alergia grave à penicilina", "Contraindica a penicilina na gestação", "Surge só na fase terciária"],
        a: 0,
        x: "Trata-se com antitérmico e observação."
      }
    ],
    bula: "Treponêmico diagnostica, VDRL segue a cura. Recente 1 dose, tardia 3 doses. Gestante: teste reagente trata, só penicilina, parceiro junto, até 30 dias antes do parto. Hutchinson = tardia; Parrot e pênfigo = precoce."
  },
  {
    id: "aborto",
    n: 28,
    cor: "#c24d6e",
    titulo: "Abortamento",
    sub: "Formas clínicas, conduta, complicações e lei",
    busca: {"t": ["prenatal", "parto", "gineco", "violencia", "adolescente", "politicas"], "re": "abortamento|aborto|misoprostol|AMIU|curetagem|Asherman|istmocervical|ovo cego|anembrion", "enun": true},
    questoes: [],
    gancho: {
      caso: "Mulher de 26 anos, 9 semanas, com sangramento moderado e cólicas. Ao toque: colo aberto, restos ovulares no orifício, útero menor que o esperado. Ultrassom: material heterogêneo na cavidade.",
      p: "Forma clínica?",
      o: ["Abortamento incompleto", "Ameaça de abortamento", "Abortamento retido", "Abortamento completo"],
      a: 0
    },
    ideia: "**Abortamento** é a interrupção antes da viabilidade: **até 20 a 22 semanas ou feto < 500 g**. **Precoce** (até 12 semanas) vem de **alteração cromossômica**; **tardio** (13 a 22) vem de **causa materna** (insuficiência istmocervical, malformação uterina).\nPara classificar, olha-se o **colo** e o **ultrassom**: **colo aberto** pede **esvaziar** (inevitável, incompleto); **colo fechado** (ameaça, completo, retido) tem outra lógica.",
    mapa: [
      {
        tabela: {
          titulo: "Formas clínicas",
          cols: ["Forma", "Colo", "O que é", "Conduta"],
          rows: [
            ["**Ameaça**", "Fechado", "Sangramento pequeno, embrião **vivo**", "Expectante, repouso relativo"],
            ["**Inevitável**", "**Aberto**", "Expulsão em curso; restos no orifício", "**Esvaziar o útero**"],
            ["**Incompleto**", "**Aberto**", "Parte eliminada, parte retida; útero menor; eco > 15 mm", "**Esvaziar** (misoprostol ou AMIU)"],
            ["**Completo**", "Fechado", "Tudo eliminado; dor e sangue diminuem; eco < 15 mm", "Só seguir (beta-hCG em queda)"],
            ["**Retido**", "Fechado", "Embrião morto retido; sem sangramento; > 4 semanas risco de **CIVD**", "**Esvaziar** (medicamento ou AMIU)"],
            ["**Infectado**", "Amolecido, doloroso", "Febre, odor fétido; polimicrobiano", "**Antibiótico venoso** e depois esvaziar"]
          ]
        }
      },
      {
        tabela: {
          titulo: "Ultrassom: gestação inviável",
          cols: ["Achado", "Interpretação"],
          rows: [
            ["**CCN ≥ 7 mm** sem batimento", "Embrião morto"],
            ["Saco gestacional **≥ 25 mm sem embrião**", "Gestação anembrionada (ovo cego)"],
            ["CCN < 7 mm sem batimento, ou saco 16 a 24 mm sem embrião", "**Suspeito**: repetir em 7 a 10 dias"]
          ]
        }
      },
      {
        tabela: {
          titulo: "Tratamento do esvaziamento",
          cols: ["Método", "O que saber"],
          rows: [
            ["**Misoprostol**", "Análogo da PGE1: contrai o útero e **amadurece o colo**. Incompleto: 600 µg VO ou 400 µg SL. Hospitalar no Brasil. Mifepristona não é comercializada"],
            ["**AMIU**", "**Método de escolha até 12 semanas**: aspiração a vácuo, menos perfuração e Asherman que a curetagem"],
            ["**Curetagem**", "Substituída pela AMIU; ainda usada após 12 semanas ou sem AMIU"],
            ["**Sempre**", "Anti-D se **Rh negativo**; material para **anatomopatológico**"]
          ]
        }
      },
      {
        tabela: {
          titulo: "Complicações",
          cols: ["Complicação", "Conduta"],
          rows: [
            ["**Hemorragia**", "Esvaziar, uterotônico, repor volume"],
            ["**Infecção / sepse**", "Antibiótico IV amplo (clindamicina + gentamicina) e esvaziar; histerectomia se grave"],
            ["**Perfuração**", "Observar; laparoscopia se sangramento ou lesão de alça"],
            ["**Síndrome de Asherman**", "Sinequias: amenorreia, infertilidade; **histeroscopia**"],
            ["**Isoimunização Rh**", "Prevenir com **anti-D**"]
          ]
        }
      },
      {
        lista: {
          titulo: "Repetição e lei",
          itens: ["**Repetição**: 3 ou mais perdas; investigar cariótipo do casal, **anticorpos antifosfolípides**, cavidade uterina, TSH e glicemia", "**SAF**: AAS + heparina; **septo**: ressecção; **insuficiência istmocervical**: **cerclagem** em 12 a 14 semanas, retirada com 36 a 37", "**Legal** (art. 128): **risco de vida**, **estupro** (sem BO ou autorização judicial) e **anencefalia** (ADPF 54)", "**Sigilo médico**: não comunicar à polícia. **Objeção de consciência** não vale em urgência nem para complicação"]
        }
      }
    ],
    gatilhos: [
      ["Sangramento pequeno, colo fechado, BCF presente", "Ameaça: conduta expectante"],
      ["Colo aberto com restos ovulares", "Inevitável ou incompleto: esvaziar"],
      ["Sem sintomas de gravidez, colo fechado, CCN ≥ 7 mm sem BCF", "Abortamento retido"],
      ["Febre e secreção fétida após manipulação", "Abortamento infectado"],
      ["Menstruação escassa e infertilidade após curetagem", "Síndrome de Asherman"],
      ["Perda no 2º trimestre, sem dor, colo dilatado", "Insuficiência istmocervical: cerclagem"]
    ],
    pegadinhas: [
      ["O abortamento precoce vem de causa materna.", "Vem de alteração cromossômica do embrião."],
      ["Repouso absoluto evita a perda na ameaça.", "Não há evidência."],
      ["Gestante Rh negativo com aborto não precisa de anti-D.", "Precisa."],
      ["O médico deve comunicar o abortamento provocado à polícia.", "Há sigilo profissional."],
      ["A curetagem é o método de escolha até 12 semanas.", "É a AMIU."]
    ],
    relampago: [
      {
        p: "Qual forma tem colo fechado, útero compatível e ultrassom com BCF presente?",
        o: ["Ameaça de abortamento", "Inevitável", "Incompleto", "Completo"],
        a: 0,
        x: "O embrião está vivo: gestação pode continuar."
      },
      {
        p: "Qual a causa mais comum do abortamento precoce?",
        o: ["Alteração cromossômica do embrião", "Mioma submucoso", "Diabetes", "Sífilis"],
        a: 0,
        x: "50 a 60% dos casos; idade materna é o maior fator de risco."
      },
      {
        p: "Qual NÃO é uma situação de aborto legal no Brasil?",
        o: ["Malformação fetal grave diferente da anencefalia", "Risco de vida da gestante", "Estupro", "Anencefalia"],
        a: 0,
        x: "Risco de vida, estupro e anencefalia (ADPF 54)."
      }
    ],
    bula: "Colo aberto = esvaziar; colo fechado = ameaça, completo, retido. AMIU até 12 semanas. Anti-D se Rh−. Asherman após curetagem. Repetição ≥ 3: antifosfolípide, cariótipo, útero. Sigilo médico."
  },
  {
    id: "dtg",
    n: 29,
    cor: "#8a5fb0",
    titulo: "Doença trofoblástica gestacional (mola)",
    sub: "Completa × parcial, hCG e seguimento",
    busca: {"t": ["gineco", "prenatal", "metabolico", "diarreiaped"], "re": "\\bmola\\b|trofobl|coriocarcinoma|hidatiform|cacho de uva", "enun": true},
    questoes: [],
    gancho: {
      caso: "Mulher de 41 anos, 9 semanas, sangramento escuro com saída de vesículas, vômitos intensos e útero maior que o esperado. Beta-hCG de 250.000 mUI/mL. Ultrassom em flocos de neve, sem embrião.",
      p: "Qual o tratamento?",
      o: ["Esvaziamento por aspiração, ocitocina só depois de iniciar", "Misoprostol para induzir a expulsão", "Conduta expectante", "Metotrexato imediato"],
      a: 0
    },
    ideia: "Na mola o **trofoblasto** prolifera: as vilosidades viram vesículas (**cacho de uva**).\n**Chave genética**: genes **paternos** estimulam a placenta e os **maternos** o embrião. Mola é **excesso paterno**.\nO **hCG** é o marcador tumoral perfeito: depois do esvaziamento, tem de **cair a zero**. Se não cai, é **neoplasia** (NTG).",
    mapa: [
      {
        tabela: {
          titulo: "Mola completa × parcial",
          cols: ["", "Completa", "Parcial"],
          rows: [
            ["**Cariótipo**", "**46,XX**, só paterno (androgenético)", "**69,XXY / XXX / XYY** (triploide)"],
            ["**Embrião**", "Ausente", "Presente, malformado"],
            ["**Vilosidades**", "Todas hidrópicas", "Parte hidrópica"],
            ["**p57** (IHQ)", "**Negativa**", "Positiva"],
            ["**Útero**", "Frequentemente **maior** que a IG", "Compatível ou menor"],
            ["**Beta-hCG**", "**Muito alto** (> 100.000)", "Pouco elevado"],
            ["**Cistos tecaluteínicos, hiperêmese, hipertireoidismo**", "Frequentes", "Raros"],
            ["**Evolução para NTG**", "**15 a 20%**", "0,5 a 5%"]
          ]
        }
      },
      {
        tabela: {
          titulo: "Clínica (efeitos do hCG alto)",
          cols: ["Achado", "Por quê"],
          rows: [
            ["Sangramento escuro (suco de ameixa), vesículas", "Sinal mais comum no 1º trimestre"],
            ["**Hiperêmese**", "hCG alto"],
            ["**Cistos tecaluteínicos** bilaterais", "hCG estimula o ovário"],
            ["**Hipertireoidismo**", "hCG tem a mesma subunidade alfa do TSH"],
            ["**Pré-eclâmpsia < 20 semanas**", "Praticamente exclusiva da mola"]
          ]
        }
      },
      {
        fluxo: {
          titulo: "Conduta",
          passos: ["Ultrassom + beta-hCG; pré-operatório (hemograma, TSH, Rx de tórax)", "**Esvaziamento por AMIU (aspiração)**, mesmo em útero grande", "**Ocitocina só depois** de iniciada a aspiração", "**Sem misoprostol** nem indução (embolização trofoblástica)", "Anti-D se Rh−; material para **anatomopatológico**", "**hCG semanal até 3 negativos**, depois mensal por 3 a 6 meses; **anticoncepção hormonal** (sem DIU até negativar)"]
        }
      },
      {
        lista: {
          titulo: "NTG pós-molar (FIGO): basta um",
          itens: ["**Platô** do hCG (variação < 10%) em 4 dosagens por 3 semanas", "**Aumento** > 10% em 3 dosagens por 2 semanas", "Histologia de **coriocarcinoma**", "hCG ainda detectável **6 meses** depois", "**Baixo risco** (escore 0 a 6): **metotrexato** (+ ácido folínico) ou actinomicina D", "**Alto risco** (≥ 7): **EMA-CO**", "**Coriocarcinoma**: metástase precoce, **pulmão** (bala de canhão), vagina, cérebro, fígado", "Cura próxima de 100% no baixo risco"]
        }
      }
    ],
    gatilhos: [
      ["Útero maior que a IG + hCG > 100.000 + sem embrião", "Mola completa"],
      ["Triploidia 69,XXY", "Mola parcial"],
      ["p57 negativo", "Mola completa"],
      ["Hipertireoidismo ou hiperêmese em gestação inicial", "Pensar em mola"],
      ["Pré-eclâmpsia antes de 20 semanas", "Mola"],
      ["hCG em platô ou subindo depois do esvaziamento", "NTG: quimioterapia"]
    ],
    pegadinhas: [
      ["Na mola, induzir com misoprostol.", "Esvaziar por aspiração; indução embolia."],
      ["A mola completa tem genes maternos e paternos.", "Só paternos."],
      ["Colocar DIU logo depois do esvaziamento.", "Só depois do hCG negativar."],
      ["Histerectomia elimina o risco de metástase.", "Reduz a invasão, mas o seguimento do hCG continua."],
      ["A mola parcial evolui mais para NTG.", "É a completa (15 a 20%)."]
    ],
    relampago: [
      {
        p: "O imprinting explica a mola completa porque:",
        o: ["Só há genes de origem paterna", "Faltam genes paternos", "Há excesso de genes maternos", "O óvulo é fecundado por 3 espermatozoides"],
        a: 0,
        x: "Genes paternos estimulam o trofoblasto e os maternos o embrião."
      },
      {
        p: "Por que ocorre hipertireoidismo na mola?",
        o: ["O hCG compartilha a subunidade alfa com o TSH", "O trofoblasto produz T4", "A tireoide é infiltrada", "É autoimune"],
        a: 0,
        x: "Níveis altos de hCG ativam o receptor de TSH."
      },
      {
        p: "Qual quimioterápico de baixo risco na NTG?",
        o: ["Metotrexato (ou actinomicina D)", "EMA-CO", "Cisplatina isolada", "Tamoxifeno"],
        a: 0,
        x: "Antifolato que bloqueia a DHFR; dá-se ácido folínico para resgatar as células normais."
      }
    ],
    bula: "Mola completa: 46,XX paterno, hCG > 100.000, útero grande, p57 negativo, 15 a 20% NTG. Esvazia com AMIU (ocitocina depois, sem misoprostol). hCG semanal até negativar e anticoncepção hormonal."
  },
  {
    id: "mamafisio",
    n: 30,
    cor: "#d17a9a",
    titulo: "Morfofisiologia das mamas",
    sub: "Anatomia, linfa, histologia e hormônios",
    busca: {"t": ["gineco", "puberdade", "aleitamento"], "re": "telarca|Tanner|sentinela|Cooper|mioepitel|apojadura|ductolobular", "enun": true},
    questoes: [],
    gancho: {
      caso: "Mulher de 40 anos fará cirurgia por câncer de mama. O cirurgião quer evitar o esvaziamento axilar completo se o primeiro linfonodo que recebe a drenagem do tumor estiver livre.",
      p: "Esse conceito se chama:",
      o: ["Linfonodo sentinela", "Nível III de Berg", "Cauda de Spence", "Plexo de Batson"],
      a: 0
    },
    ideia: "A mama é uma **glândula sudorípara apócrina modificada**. Tem **15 a 20 lobos**, cada um com um ducto que se abre no mamilo. A unidade funcional (e onde nascem as doenças) é a **unidade ductolobular terminal (UDLT)**.\nA mama obedece aos hormônios: **estrogênio** ramifica os ductos; **progesterona** diferencia os ácinos.\n**Linfa**: ~75% vai para a **axila**; o resto para a **cadeia mamária interna**.",
    mapa: [
      {
        tabela: {
          titulo: "Anatomia que cai",
          cols: ["Estrutura", "O que saber"],
          rows: [
            ["**Limites**", "2ª a 6ª costela; do esterno à linha axilar média"],
            ["**Quadrante superolateral**", "Mais tecido glandular: ~**metade dos carcinomas**"],
            ["**Cauda de Spence**", "Prolongamento axilar da mama"],
            ["**Ligamentos de Cooper**", "Sustentam a mama; o tumor os encurta e **retrai a pele**"],
            ["**Espaço retromamário**", "Dá mobilidade; perda sugere infiltração da fáscia"],
            ["**Artéria torácica interna**", "~60% do fluxo (mamária interna)"],
            ["**Torácica lateral**", "~30% do fluxo"],
            ["**Plexo de Batson**", "Veias sem válvula: **vértebras, pelve** e crânio sem passar pelo pulmão"]
          ]
        }
      },
      {
        tabela: {
          titulo: "Linfonodos axilares (Berg)",
          cols: ["Nível", "Relação com o peitoral menor"],
          rows: [
            ["**I**", "Lateral ou abaixo da borda lateral"],
            ["**II**", "Posterior (inclui os interpeitorais de Rotter)"],
            ["**III**", "Medial à borda medial (ápice, infraclaviculares): doença mais avançada"],
            ["**Sentinela**", "Primeiro que recebe a drenagem: se livre, poupa o esvaziamento e o **linfedema**"]
          ]
        }
      },
      {
        tabela: {
          titulo: "Nervos na cirurgia axilar",
          cols: ["Nervo", "Lesão causa"],
          rows: [
            ["**Torácico longo** (serrátil anterior)", "**Escápula alada**"],
            ["**Toracodorsal** (latíssimo do dorso)", "Fraqueza na adução e rotação do braço"],
            ["**Intercostobraquial** (sensitivo)", "**Parestesia** na face medial do braço"]
          ]
        }
      },
      {
        tabela: {
          titulo: "Histologia e hormônios",
          cols: ["Tema", "O que saber"],
          rows: [
            ["**Duas camadas**", "**Luminal** (secreta, tem receptores hormonais) e **basal mioepitelial** (ejeta leite)"],
            ["**In situ × invasor**", "In situ está contido pela **membrana basal e mioepitélio** (p63, calponina confirmam)"],
            ["**Estroma intralobular**", "Frouxo e hormônio-sensível: origem de **fibroadenoma e filoides**"],
            ["**Tanner**", "M1 a M5; **telarca** (8 a 13 anos) é o primeiro sinal; antes de 8 = puberdade precoce"],
            ["**Fase lútea**", "Edema e congestão: **mastalgia** pré-menstrual; exame logo **após a menstruação**"],
            ["**Gestação**", "Proliferação máxima, mas a **progesterona** impede o leite"],
            ["**Apojadura**", "Queda da progesterona na dequitação: leite entre o **2º e o 4º dia**"],
            ["**Reflexos**", "**Prolactina** produz (dopamina inibe); **ocitocina** ejeta (inibida por dor e estresse)"],
            ["**Pós-menopausa**", "Gordura substitui o parênquima: **mamografia mais sensível**"]
          ]
        }
      }
    ],
    gatilhos: [
      ["Pele repuxada por tumor", "Ligamentos de Cooper encurtados"],
      ["Escápula alada após axila", "Nervo torácico longo"],
      ["Parestesia na face medial do braço", "Intercostobraquial"],
      ["Metástase vertebral sem pulmão", "Plexo de Batson"],
      ["Mama dolorosa antes da menstruação", "Fase lútea: edema do estroma"],
      ["Tumor na axila sem nódulo mamário", "Cauda de Spence"]
    ],
    pegadinhas: [
      ["A mama é uma glândula sebácea modificada.", "Sudorípara apócrina."],
      ["Na gestação o leite não vem por falta de prolactina.", "A progesterona placentária bloqueia o efeito."],
      ["A ocitocina produz o leite.", "Ela ejeta; a prolactina produz."],
      ["A maior parte da linfa drena para a cadeia mamária interna.", "Cerca de 75% vai para a axila."],
      ["A mamografia funciona melhor na mama densa da jovem.", "Funciona melhor na mama gordurosa da idosa."]
    ],
    relampago: [
      {
        p: "Qual o primeiro sinal da puberdade feminina?",
        o: ["Telarca (broto mamário)", "Menarca", "Pubarca", "Estirão"],
        a: 0,
        x: "Entre 8 e 13 anos; antes de 8 é puberdade precoce."
      },
      {
        p: "A lesão do nervo torácico longo provoca:",
        o: ["Escápula alada", "Parestesia do braço", "Fraqueza do latíssimo", "Linfedema"],
        a: 0,
        x: "Inerva o serrátil anterior."
      },
      {
        p: "Como diferenciar carcinoma in situ de invasor?",
        o: ["Células mioepiteliais e membrana basal íntegras", "Pelo tamanho", "Pela presença de calcificações", "Pelo receptor hormonal"],
        a: 0,
        x: "Barreira íntegra = in situ, sem acesso a vasos."
      }
    ],
    bula: "UDLT é o ponto de partida. Superolateral = metade dos cânceres. Axila 75% da linfa (Berg I, II, III). Sentinela poupa esvaziamento. Prolactina produz, ocitocina ejeta, progesterona bloqueia na gestação."
  },
  {
    id: "mamabenigna",
    n: 31,
    cor: "#c9877a",
    titulo: "Doenças benignas da mama",
    sub: "Nódulo, dor, descarga, mastite e risco (Dupont e Page)",
    busca: {"t": ["gineco", "aleitamento", "parto", "puberdade"], "re": "fibroadenoma|filoides|descarga papilar|secre[çc][ãa]o (mamilar|papilar)|papiloma intraductal|mastite|mastalgia|dor mam[áa]ria|galactorreia|ginecomastia|n[óo]dulo (mam[áa]rio|na mama)|abscesso mam[áa]rio|ectasia|necrose gordurosa|Dupont|hiperplasia atípica", "enun": true},
    questoes: [],
    gancho: {
      caso: "Mulher de 22 anos com nódulo indolor na mama, oval, bem delimitado, móvel e que 'foge do dedo'. Ultrassom: oval, circunscrito, hipoecoico, mais largo que alto.",
      p: "Diagnóstico mais provável?",
      o: ["Fibroadenoma", "Carcinoma ductal", "Cisto simples", "Tumor filoides maligno"],
      a: 0
    },
    ideia: "A queixa mamária benigna se resume a **quatro**: **dor**, **nódulo**, **descarga papilar** e **sinais inflamatórios**. O benigno **empurra** os tecidos (limites bem definidos, liso, móvel); o maligno **infiltra** (irregular, fixo).\nO **diagnóstico** é a **tríplice avaliação**: clínica + imagem + biópsia, que precisam concordar.\n**Atipia** na biópsia por agulha se **retira** (15 a 30% já têm carcinoma).",
    mapa: [
      {
        tabela: {
          titulo: "Nódulos",
          cols: ["", "Cisto", "Fibroadenoma", "Tumor filoides", "Carcinoma"],
          rows: [
            ["**Idade**", "35 a 50 anos", "< 35 anos", "40 a 50 anos", "> 50 anos"],
            ["**Consistência**", "Elástica, tensa", "Fibroelástica", "Firme, lobulada", "**Pétrea**"],
            ["**Contorno**", "Regular, móvel", "Regular, **móvel**", "Lobulado, móvel", "Irregular, aderido"],
            ["**Evolução**", "Surge e regride; varia com o ciclo", "Lento, estável", "**Rápido**; pele fina e brilhante", "Progressiva; retração"],
            ["**US**", "Anecoico, reforço posterior", "Oval, circunscrito, **mais largo que alto**", "Grande, lobulado, fendas císticas", "Irregular, **mais alto que largo**, sombra"],
            ["**Conduta**", "Simples: nada; complexo: biópsia", "Seguimento ou retirada", "**Retirada com margem**", "Oncológico"]
          ]
        }
      },
      {
        tabela: {
          titulo: "Cisto no ultrassom (BI-RADS)",
          cols: ["Tipo", "Aspecto", "BI-RADS"],
          rows: [
            ["**Simples**", "Líquido homogêneo, parede fina", "**2**"],
            ["**Complicado**", "Ecos internos sem sólido", "**3**"],
            ["**Complexo**", "Septos espessos ou **componente sólido**", "**4** (biópsia)"]
          ]
        }
      },
      {
        tabela: {
          titulo: "Dor, descarga e inflamação",
          cols: ["Quadro", "O que saber"],
          rows: [
            ["**Mastalgia cíclica**", "Bilateral, difusa, pré-menstrual; nodularidade sem nódulo dominante (AFBM)"],
            ["**Mastalgia acíclica**", "Localizada: procurar causa (parede torácica, costocondrite)"],
            ["**Descarga patológica**", "**Espontânea, unilateral, um ducto**, sanguinolenta ou serosa; **papiloma intraductal**"],
            ["**Descarga fisiológica**", "Bilateral, vários ductos, só à expressão; **ectasia ductal** (espessa, esverdeada)"],
            ["**Galactorreia**", "Leitosa, bilateral: **prolactina alta** (dopamina baixa; antipsicóticos, metoclopramida)"],
            ["**Mastite lactacional**", "**Estase de leite + S. aureus** por fissura; área em cunha; **continuar amamentando**; abscesso se não melhora em 48 a 72 h"],
            ["**Mastite periductal**", "**Tabagista**, abscesso retroareolar recorrente e fístula"],
            ["**Necrose gordurosa**", "Pós-trauma ou cirurgia: nódulo duro que **imita câncer**"],
            ["**Ginecomastia**", "Disco firme **central** sob a aréola; o câncer é excêntrico e aderido"]
          ]
        }
      },
      {
        tabela: {
          titulo: "Dupont e Page: risco de câncer",
          cols: ["Grupo", "Lesões", "Risco relativo"],
          rows: [
            ["**Não proliferativas**", "Cistos, fibrose, ectasia, fibroadenoma simples, mastite", "1 a 1,2 (sem aumento)"],
            ["**Proliferativas sem atipia**", "Hiperplasia usual moderada, adenose esclerosante, **papiloma**, cicatriz radial", "1,5 a 2"],
            ["**Proliferativas com atipia**", "**Hiperplasia ductal ou lobular atípica**", "**4 a 5**"],
            ["**CLIS**", "Carcinoma lobular in situ", "**8 a 10**"]
          ]
        }
      }
    ],
    gatilhos: [
      ["Nódulo móvel que cresce rápido, pele brilhante", "Tumor filoides"],
      ["Descarga sanguinolenta espontânea por um ducto", "Papiloma intraductal: retirar o ducto"],
      ["Mama em cunha, quente, vermelha, lactante", "Mastite lactacional"],
      ["Tabagista, abscesso retroareolar recorrente", "Mastite periductal"],
      ["Nódulo duro após trauma ou cirurgia", "Necrose gordurosa"],
      ["Hiperplasia ductal atípica na core biopsy", "Retirar a lesão"]
    ],
    pegadinhas: [
      ["Na mastite lactacional, suspender a amamentação.", "Continuar: esvaziar a mama ajuda."],
      ["Toda lesão benigna aumenta o risco de câncer.", "Só as proliferativas, principalmente com atipia."],
      ["Mastite fora da lactação que não melhora é só tratar de novo.", "Biopsiar: pode ser carcinoma inflamatório."],
      ["O cisto complicado é BI-RADS 2.", "É 3; o complexo é 4."],
      ["O fibroadenoma típico precisa sempre de cirurgia.", "Pode ser só acompanhado."]
    ],
    relampago: [
      {
        p: "Descarga papilar patológica típica:",
        o: ["Espontânea, unilateral, por um único ducto, sanguinolenta", "Bilateral, leitosa", "Esverdeada à expressão", "Bilateral, por vários ductos"],
        a: 0,
        x: "A causa mais comum é o papiloma intraductal."
      },
      {
        p: "Maior fator de risco para mastite periductal:",
        o: ["Tabagismo", "Estase de leite", "Fissura", "Trauma"],
        a: 0,
        x: "Presente em ~90%: metaplasia escamosa e queratina obstruem o ducto."
      },
      {
        p: "Maior risco relativo (Dupont e Page) entre:",
        o: ["Carcinoma lobular in situ", "Cisto simples", "Fibroadenoma simples", "Adenose esclerosante"],
        a: 0,
        x: "CLIS: 8 a 10, bilateral."
      }
    ],
    bula: "Benigno empurra (liso, móvel); maligno infiltra. Fibroadenoma < 35 anos, filoides cresce rápido, cisto 35–50. Descarga patológica = unilateral, 1 ducto, sangue (papiloma). Mastite: continuar amamentando. Atipia: retirar."
  },
  {
    id: "mamaca",
    n: 32,
    cor: "#a64a6a",
    titulo: "Câncer de mama",
    sub: "Fatores de risco, subtipos e estádios",
    busca: {"t": ["gineco"], "re": "c[âa]ncer de mama|carcinoma (ductal|lobular|invasivo|de mama)|BRCA|HER2|triplo[- ]negativo|luminal|Paget|TNM|imuno-histoqu", "enun": true},
    questoes: [],
    gancho: {
      caso: "Mulher de 34 anos, mãe com câncer de mama aos 40 e ovário aos 45. Teste genético: mutação em BRCA1.",
      p: "Qual o risco de câncer de mama ao longo da vida?",
      o: ["Cerca de 70%", "Cerca de 12%", "Igual ao da população", "Menos de 5%"],
      a: 0
    },
    ideia: "Quase todo câncer de mama é **carcinoma**: nasce das células da **UDLT**. O maior fator de risco é a **idade**; 5 a 10% são **hereditários** (BRCA1 e BRCA2).\nO tratamento depende do **subtipo** (RE, RP, HER2, Ki-67) e do **estádio TNM**.\nO risco reflete o **tempo de exposição ao estrogênio**: menarca precoce, menopausa tardia, nuliparidade e 1ª gestação após 30 anos. **Amamentação** protege.",
    mapa: [
      {
        tabela: {
          titulo: "Fatores de risco",
          cols: ["Grupo", "Fatores"],
          rows: [
            ["**Genéticos**", "**BRCA1, BRCA2**, TP53 (Li-Fraumeni), PTEN (Cowden), CDH1, PALB2; parente de 1º grau (RR 2)"],
            ["**História pessoal**", "Câncer prévio, **hiperplasia atípica**, **CLIS**, radioterapia torácica entre 10 e 30 anos"],
            ["**Densidade**", "Mama extremamente densa: RR 4 a 6"],
            ["**Hormonais**", "Menarca < 12, menopausa > 55, nuliparidade, 1ª gestação > 30 anos, terapia combinada > 5 anos"],
            ["**Estilo de vida**", "Obesidade pós-menopausa (aromatase na gordura), **álcool**, sedentarismo"],
            ["**Proteção**", "Amamentação, gestação precoce, atividade física"]
          ]
        }
      },
      {
        tabela: {
          titulo: "Subtipos moleculares",
          cols: ["Subtipo", "Perfil e comportamento", "Tratamento"],
          rows: [
            ["**Luminal A** (40 a 50%)", "RE+, RP ≥ 20%, HER2−, Ki-67 baixo; **melhor prognóstico**", "Hormonioterapia"],
            ["**Luminal B HER2−**", "RE+, Ki-67 alto e/ou RP < 20%", "Hormonioterapia ± quimioterapia"],
            ["**Luminal B HER2+**", "RE+, HER2+", "Quimioterapia + anti-HER2 + hormonioterapia"],
            ["**HER2 superexpresso**", "RE−, RP−, HER2+; metástases viscerais e cerebrais", "Quimioterapia + **trastuzumabe** e pertuzumabe"],
            ["**Triplo-negativo**", "RE−, RP−, HER2−; jovens, negras, **BRCA1**; recidiva nos primeiros 3 anos", "Quimioterapia (± platina, imunoterapia, **inibidor de PARP**)"]
          ]
        }
      },
      {
        tabela: {
          titulo: "TNM (resumo)",
          cols: ["Categoria", "Definição"],
          rows: [
            ["**T1 / T2 / T3**", "≤ 2 cm / > 2 a 5 cm / > 5 cm"],
            ["**T4**", "Parede torácica, **pele** (úlcera, nódulos satélites, **casca de laranja**) ou **T4d inflamatório**"],
            ["**N1**", "Axilares níveis I e II **móveis**"],
            ["**N2 / N3**", "N2: fixos ou mamária interna sozinha; N3: infraclavicular, **supraclavicular**, mamária interna + axilar"],
            ["**Estádio**", "0: Tis; I: T1N0; II: T0-1N1 ou T2N0; III: T4, N2 ou N3; **IV: qualquer M1**"]
          ]
        }
      },
      {
        tabela: {
          titulo: "Clínica",
          cols: ["Sinal", "Por quê"],
          rows: [
            ["**Nódulo** endurecido, indolor, irregular, superolateral", "~90% dos sintomáticos"],
            ["**Retração** de pele ou mamilo", "Fibrose encurta os Cooper e os ductos"],
            ["**Casca de laranja**", "Obstrução dos linfáticos da derme"],
            ["**Doença de Paget**", "Células malignas no mamilo; parece eczema **unilateral**; sem melhora em 2 semanas, biopsiar"],
            ["**Carcinoma inflamatório**", "Eritema, edema, casca de laranja > 1/3 da mama, rápido, **T4d** (≥ estádio III); confunde com mastite"],
            ["**Metástases**", "Ossos, pulmão, fígado, cérebro"]
          ]
        }
      },
      {
        lista: {
          titulo: "Imagem",
          itens: ["**Sugerem malignidade**: nódulo espiculado, **microcalcificações finas pleomórficas ou lineares ramificadas** (típicas de CDIS), distorção, assimetria nova", "Benignas: calcificação grosseira, em pipoca ou vascular", "US: sólido, hipoecoico, **mais alto que largo**, sombra acústica", "**RM**: alto risco, extensão, resposta à quimioterapia", "Confirmação sempre por **core biopsy** com **imuno-histoquímica**; metástase a partir do **estádio III**"]
        }
      }
    ],
    gatilhos: [
      ["Casca de laranja + eritema em > 1/3 da mama, rápida", "Carcinoma inflamatório (T4d)"],
      ["Eczema unilateral do mamilo sem melhora", "Doença de Paget"],
      ["Jovem, negra, BRCA1, RE−RP−HER2−", "Triplo-negativo"],
      ["HER2 3+", "Trastuzumabe"],
      ["Microcalcificação fina ramificada", "Suspeita de CDIS"],
      ["Câncer de mama e de ovário na família", "Pensar em BRCA1"]
    ],
    pegadinhas: [
      ["O câncer hereditário é a maioria.", "Só 5 a 10%."],
      ["A amamentação aumenta o risco.", "Protege."],
      ["O carcinoma inflamatório tem sempre nódulo palpável.", "Muitas vezes não tem."],
      ["O luminal A é o de pior prognóstico.", "É o de melhor."],
      ["Calcificações grosseiras são suspeitas de CDIS.", "As finas pleomórficas é que são."]
    ],
    relampago: [
      {
        p: "Subtipo tratado com trastuzumabe:",
        o: ["HER2 positivo", "Luminal A", "Triplo-negativo", "Luminal B HER2−"],
        a: 0,
        x: "Anti-HER2 bloqueia os receptores em excesso."
      },
      {
        p: "A obesidade pós-menopausa aumenta o risco porque:",
        o: ["A aromatase da gordura produz estrogênio", "Há mais densidade mamária", "Há mais BRCA", "A mamografia é menos sensível"],
        a: 0,
        x: "É fonte periférica de estrogênio."
      },
      {
        p: "T4d significa:",
        o: ["Carcinoma inflamatório", "Invasão da parede torácica", "Úlcera de pele", "Nódulos satélites"],
        a: 0,
        x: "T4a: parede; T4b: pele; T4c: ambos."
      }
    ],
    bula: "Carcinoma da UDLT. Idade e estrogênio; BRCA 70%. Subtipos: luminal A (hormônio), HER2 (trastuzumabe), triplo-negativo (quimio, BRCA1). Estádio III = T4, N2 ou N3. Paget e inflamatório: biópsia."
  },
  {
    id: "mamarastreio",
    n: 33,
    cor: "#5b8a9e",
    titulo: "Rastreamento do câncer de mama",
    sub: "Mamografia, idades e limites",
    busca: {"t": ["gineco", "politicas", "adolescente"], "re": "rastreamento (do c[âa]ncer de mama|mamogr[áa]fico)|mamogra|BI-?RADS|autoexame", "enun": true},
    questoes: [],
    gancho: {
      caso: "Mulher de 55 anos, assintomática, sem fatores de risco. A UBS a convida para exame de rastreamento.",
      p: "Qual exame comprovadamente reduz a mortalidade?",
      o: ["Mamografia", "Autoexame das mamas", "Ultrassonografia", "Termografia"],
      a: 0
    },
    ideia: "**Rastreamento** é examinar quem **não tem sintoma** para achar a doença cedo. **Diagnóstico precoce** é investigar rápido quem **já tem sinal**.\nA **mamografia** é o único exame que **reduz mortalidade** (~20% nas convidadas, 25 a 40% nas que fazem), com maior benefício entre **50 e 69 anos**.\nO **autoexame** não é recomendado como rastreamento: o que se estimula é conhecer as próprias mamas.",
    mapa: [
      {
        tabela: {
          titulo: "Quem recomenda o quê",
          cols: ["Fonte", "40 a 49", "50 a 69/74"],
          rows: [
            ["**Ministério da Saúde** (set/2025)", "Acesso garantido, **decisão compartilhada**", "**Bienal**, convite ativo (50 a 74)"],
            ["**INCA** (2015)", "Não recomendado", "**Bienal** (50 a 69)"],
            ["**SBM / CBR / Febrasgo**", "**Anual** a partir dos 40", "**Anual** até 74"],
            ["**USPSTF** (2024)", "Bienal", "Bienal até 74"],
            ["**Alto risco** (≥ 20%, BRCA, TP53, radioterapia torácica)", "**RM anual** a partir dos 25 + mamografia a partir dos 30", "Individualizar"]
          ]
        }
      },
      {
        tabela: {
          titulo: "Limitações",
          cols: ["Limite", "O que é"],
          rows: [
            ["**Falso-positivo**", "Ansiedade e biópsia desnecessária; mais em **jovens e mamas densas**"],
            ["**Falso-negativo**", "Principalmente em **mama densa** (tumor e tecido ficam brancos)"],
            ["**Sobrediagnóstico**", "Câncer que nunca causaria dano (10 a 20%): sobretratamento"],
            ["**Radiação**", "Baixa, mas pesa mais nas jovens"]
          ]
        }
      },
      {
        tabela: {
          titulo: "BI-RADS",
          cols: ["Categoria", "Significado e conduta"],
          rows: [
            ["**0**", "Inconclusivo: **complementar** com outra imagem"],
            ["**1**", "Normal: rastreamento de rotina"],
            ["**2**", "Benigno: rotina"],
            ["**3**", "**Provavelmente benigno** (< 2% de câncer): **controle em 6 meses**"],
            ["**4**", "**Suspeito**: **biópsia**"],
            ["**5**", "Altamente suspeito: biópsia e tratamento"],
            ["**6**", "Câncer já comprovado por biópsia"]
          ]
        }
      },
      {
        lista: {
          titulo: "Leis e densidade",
          itens: ["**Lei 11.664/2008**: mamografia pelo SUS a partir dos 40 anos", "**Lei 13.896/2019**: confirmação diagnóstica em até **30 dias**", "**Lei 12.732/2012**: início do tratamento em até **60 dias**", "**Mama densa**: reduz a sensibilidade; considerar US ou tomossíntese", "A sobrevida em 5 anos: ~**99% na doença restrita à mama** e ~**30% com metástase**"]
        }
      }
    ],
    gatilhos: [
      ["Mulher de 50 a 74 anos assintomática", "Mamografia bienal (MS)"],
      ["BRCA positivo ou radioterapia torácica na infância", "RM anual desde os 25"],
      ["BI-RADS 3", "Seguimento em 6 meses"],
      ["BI-RADS 4", "Biópsia"],
      ["Mama densa com mamografia normal", "Considerar US ou tomossíntese"],
      ["Jovem de 30 anos com nódulo palpável", "Diagnóstico, não rastreamento: US"]
    ],
    pegadinhas: [
      ["O autoexame reduz a mortalidade.", "Não reduz; não é recomendado como rastreamento."],
      ["Rastreamento e diagnóstico precoce são a mesma coisa.", "Rastreia-se quem não tem sintoma."],
      ["O sobrediagnóstico é erro do exame.", "É câncer real que nunca causaria dano."],
      ["O MS recomenda mamografia anual dos 40 aos 74.", "Essa é a recomendação das sociedades médicas; o MS é bienal (50 a 74)."],
      ["A mamografia é mais sensível na mulher jovem.", "É menos, pela densidade."]
    ],
    relampago: [
      {
        p: "Ministério da Saúde (2025): intervalo para 50 a 74 anos?",
        o: ["Dois anos", "Um ano", "Cinco anos", "Seis meses"],
        a: 0,
        x: "Convite ativo bienal; 40 a 49 por decisão compartilhada."
      },
      {
        p: "BI-RADS 4 pede:",
        o: ["Biópsia", "Controle em 6 meses", "Rotina anual", "Complementar com outra imagem"],
        a: 0,
        x: "Suspeito."
      },
      {
        p: "Rastreamento de alto risco (BRCA1):",
        o: ["RM anual a partir dos 25 + mamografia a partir dos 30", "Apenas autoexame", "Mamografia bienal aos 50", "Nenhum"],
        a: 0,
        x: "Preferir ressonância."
      }
    ],
    bula: "Mamografia é a única que reduz mortalidade. MS: 50 a 74 anos, bienal; sociedades: anual a partir de 40. Alto risco: RM desde os 25. BI-RADS 3 = 6 meses, 4 = biópsia. Autoexame não."
  },
  {
    id: "vulvovaginites",
    n: 34,
    cor: "#d1a23a",
    titulo: "Vulvovaginites",
    sub: "Vaginose, candidíase e tricomoníase",
    busca: {"t": ["gineco", "puberdade", "prenatal", "adolescente", "itu"], "re": "vaginose|candid[íi]ase|tricomon|corrimento|leucorreia|gardnerella|vaginite|clue cells|Amsel|metronidazol|fluconazol|miconazol", "enun": true},
    questoes: [],
    gancho: {
      caso: "Mulher de 25 anos, corrimento fino e acinzentado com odor de peixe, pior após a relação. pH 5,5, teste das aminas positivo, sem inflamação. Clue cells no exame a fresco.",
      p: "Tratamento e conduta com o parceiro?",
      o: ["Metronidazol; não tratar o parceiro", "Fluconazol dose única; tratar o parceiro", "Azitromicina; tratar o parceiro", "Miconazol creme; não tratar o parceiro"],
      a: 0
    },
    ideia: "Corrimento vem do **colo** (cervicite) ou da **vagina** (vulvovaginite). As três vaginites (~90%) são **vaginose bacteriana**, **candidíase** e **tricomoníase**. Só a **tricomoníase é IST**.\nOs **lactobacilos** produzem ácido lático (pH **3,8 a 4,5**); eles caem com duchas, antibióticos, sangue, sêmen e menopausa.\n**Três testes** separam: **pH**, **teste das aminas** (KOH) e **microscopia**.",
    mapa: [
      {
        tabela: {
          titulo: "Diagnóstico diferencial",
          cols: ["", "Vaginose bacteriana", "Candidíase", "Tricomoníase"],
          rows: [
            ["**Queixa**", "**Odor de peixe**, pior após o sexo e a menstruação", "**Coceira** e ardor intensos", "Corrimento abundante, ardor, disúria"],
            ["**Corrimento**", "Fino, homogêneo, acinzentado", "Branco, espesso, em grumos (**leite talhado**), sem odor", "**Amarelo-esverdeado, bolhoso**, com odor"],
            ["**Vulva e colo**", "Normais (quase sem inflamação)", "Vulva vermelha e edemaciada, fissuras", "**Colo em framboesa**"],
            ["**pH**", "**> 4,5**", "**< 4,5** (normal)", "**> 4,5**"],
            ["**Aminas (KOH)**", "**Positivo**", "Negativo", "Pode ser positivo"],
            ["**Microscopia**", "**Clue cells**, poucos leucócitos", "**Pseudo-hifas** e leveduras (KOH)", "**Protozoário móvel**, muitos leucócitos"],
            ["**É IST?**", "Não", "Não", "**Sim**: tratar a parceria"]
          ]
        }
      },
      {
        tabela: {
          titulo: "Tratamento",
          cols: ["Infecção", "Primeira escolha", "Gestante e parceria"],
          rows: [
            ["**Vaginose**", "**Metronidazol 500 mg VO 12/12 h por 7 dias** ou gel vaginal por 5 dias; alternativa: clindamicina", "Metronidazol oral é seguro em qualquer trimestre; **parceiro não é tratado**"],
            ["**Candidíase**", "**Miconazol creme 2% por 7 dias** ou nistatina por 14 dias; alternativa: **fluconazol 150 mg dose única**", "Gestante: **só vaginal** (fluconazol oral não); parceiro só se sintomas"],
            ["**Tricomoníase**", "**Metronidazol 2 g dose única** ou 500 mg 12/12 h por 7 dias (preferido na mulher)", "**Tratar a parceria** junto; 7 dias para gestantes e HIV"]
          ]
        }
      },
      {
        tabela: {
          titulo: "Detalhes que caem",
          cols: ["Tema", "O que saber"],
          rows: [
            ["**Critérios de Amsel**", "Corrimento fino, pH > 4,5, aminas +, clue cells > 20%: **3 de 4**. Nugent (Gram): 7 a 10 = vaginose"],
            ["**Gardnerella**", "Cocobacilo que faz **biofilme**; a vaginose é **polimicrobiana** (disbiose)"],
            ["**Metronidazol**", "Pró-fármaco ativado por **anaeróbios** (radicais lesam o DNA); **sem álcool** por 24 h (efeito antabuse)"],
            ["**Azóis**", "Inibem a **14-alfa-desmetilase** → sem **ergosterol**; nistatina liga ao ergosterol e faz poros"],
            ["**Candida glabrata**", "Resistente ao fluconazol: **ácido bórico vaginal** ou nistatina por 14 dias"],
            ["**Recorrente**", "VB: 3 ou mais por ano → metronidazol gel 2x/semana por 4 a 6 meses. Candidíase: ≥ 4 por ano → fluconazol **semanal por 6 meses**"],
            ["**Gestante**", "VB não tratada: parto prematuro e RPM; **não rastrear** a assintomática de baixo risco"],
            ["**Clindamicina creme**", "Óleo **enfraquece o látex** do preservativo"]
          ]
        }
      }
    ],
    gatilhos: [
      ["Odor de peixe + pH > 4,5 + clue cells", "Vaginose bacteriana"],
      ["Coceira + leite talhado + pH normal", "Candidíase"],
      ["Colo em framboesa + corrimento bolhoso", "Tricomoníase"],
      ["Candidíase em gestante", "Miconazol vaginal 7 dias"],
      ["Diabética descompensada com candidíase", "Complicada: tratamento mais longo"],
      ["Corrimento + dispareunia na pós-menopausa", "Vaginite atrófica"]
    ],
    pegadinhas: [
      ["Tratar o parceiro na vaginose.", "Não diminui a recorrência."],
      ["A candidíase tem pH alcalino.", "O pH é normal (< 4,5)."],
      ["Fluconazol oral é seguro na gestação.", "Só tratamento vaginal."],
      ["A vaginose tem muita inflamação.", "Quase não há leucócitos."],
      ["Achar Candida ou Gardnerella no preventivo sem sintomas indica tratar.", "Não trata."]
    ],
    relampago: [
      {
        p: "Qual vulvovaginite é IST?",
        o: ["Tricomoníase", "Vaginose bacteriana", "Candidíase", "Vaginite atrófica"],
        a: 0,
        x: "Trata-se a parceria ao mesmo tempo."
      },
      {
        p: "Células-guia (clue cells) indicam:",
        o: ["Vaginose bacteriana", "Candidíase", "Tricomoníase", "Cervicite"],
        a: 0,
        x: "São células cobertas pelo biofilme de bactérias."
      },
      {
        p: "Mecanismo dos azóis:",
        o: ["Inibem a síntese de ergosterol", "Quebram o DNA anaeróbio", "Ligam à subunidade 50S", "Inibem a parede"],
        a: 0,
        x: "Inibem a 14-alfa-desmetilase; a nistatina liga ao ergosterol."
      }
    ],
    bula: "pH > 4,5: vaginose e tricomoníase; pH normal: candidíase. Aminas + nas duas primeiras. Só tricomoníase é IST. Metronidazol para VB e tricomoníase; azol para candidíase (gestante só vaginal)."
  },
  {
    id: "cervicites",
    n: 35,
    cor: "#3f9a8c",
    titulo: "Cervicites: clamídia, gonorreia e Mycoplasma",
    sub: "Epitélio cilíndrico, NAAT e ceftriaxona + azitromicina",
    busca: {"t": ["gineco", "itu", "adolescente", "violencia", "rn"], "re": "cervicite|clam[íi]dia|chlamydia|gonor|gonoc|neisseria|mycoplasma|uretrite|NAAT|ceftriaxona", "enun": true},
    questoes: [],
    gancho: {
      caso: "Mulher de 22 anos, parceria nova, sem sintomas. Ao exame, secreção mucopurulenta no orifício do colo e sangramento fácil ao toque do cotonete.",
      p: "Tratamento do Ministério da Saúde?",
      o: ["Ceftriaxona 500 mg IM + azitromicina 1 g VO, dose única", "Metronidazol 500 mg por 7 dias", "Fluconazol 150 mg", "Penicilina benzatina"],
      a: 0
    },
    ideia: "**Cervicite** é a infecção do **epitélio cilíndrico** do colo (clamídia, gonococo, Mycoplasma). **70 a 80% não têm sintoma**, mas a infecção pode subir e causar **DIP**, infertilidade e gravidez ectópica.\nOs sinais são **secreção mucopurulenta** e **friabilidade**. Como o aspecto não diz o agente, **trata-se clamídia e gonococo juntos** (e colhe-se NAAT).\n**Parceria dos últimos 60 dias**, sempre.",
    mapa: [
      {
        tabela: {
          titulo: "Os três agentes",
          cols: ["", "Chlamydia", "Neisseria gonorrhoeae", "Mycoplasma genitalium"],
          rows: [
            ["**O que é**", "Bactéria **intracelular obrigatória**", "**Diplococo Gram-negativo**", "Sem parede celular"],
            ["**Sem sintomas**", "70 a 80%", "Até 50%", "Maioria"],
            ["**Diagnóstico**", "**NAAT (PCR)**", "NAAT; **Gram e cultura (Thayer-Martin)** para antibiograma", "NAAT"],
            ["**Tratamento**", "**Azitromicina 1 g** ou **doxiciclina 100 mg 12/12 h por 7 dias** (gestante: azitromicina)", "**Ceftriaxona 500 mg IM + azitromicina 1 g**", "**Doxiciclina 7 dias** e depois **moxifloxacino 7 dias**"],
            ["**No RN**", "Conjuntivite e **pneumonia afebril**", "**Oftalmia neonatal** (2 a 5 dias)", "Pouco descrito"]
          ]
        }
      },
      {
        tabela: {
          titulo: "Detalhes que caem",
          cols: ["Tema", "O que saber"],
          rows: [
            ["**Ciclo da clamídia**", "**Corpo elementar** (infectante) → **corpo reticulado** (se divide) → volta a elementar e rompe a célula"],
            ["**Dano**", "Resposta imune destrói cílios das tubas (proteína de choque térmico 60): **infertilidade tubária**"],
            ["**Gonococo**", "**Pili** com variação antigênica (reinfecta); protease de IgA; LOS; **ágar chocolate**"],
            ["**Disseminada**", "Febre, lesões de pele e **artrite** (joelho, punho, tornozelo)"],
            ["**Complicações**", "**DIP, Fitz-Hugh-Curtis, infertilidade, ectópica**, Bartholin; artrite reativa"],
            ["**Mycoplasma**", "Suspeitar se a cervicite **persiste** após tratar clamídia e gonococo; não aparece no Gram"],
            ["**Azitromicina**", "Macrolídeo (50S), se concentra dentro das células"],
            ["**Doxiciclina**", "Tetraciclina (30S); **não na gestação**"],
            ["**Rastreamento**", "PCR em ≤ 30 anos sexualmente ativos, **gestantes (1ª consulta)**, HIV, múltiplas parcerias, violência sexual"]
          ]
        }
      },
      {
        tabela: {
          titulo: "Uretrite no parceiro",
          cols: ["", "Gonocócica", "Não gonocócica"],
          rows: [
            ["**Incubação**", "2 a 5 dias", "1 a 3 semanas"],
            ["**Início**", "Súbito", "Gradual"],
            ["**Secreção**", "**Purulenta**, abundante", "Mucoide, clara, escassa"],
            ["**Disúria**", "Intensa", "Leve ou ausente"],
            ["**Gram**", "**Diplococos intracelulares**", "Leucócitos sem diplococos"],
            ["**Tratamento**", "Ceftriaxona IM + azitromicina", "Azitromicina ou doxiciclina 7 dias"]
          ]
        }
      }
    ],
    gatilhos: [
      ["Cervicite mucopurulenta com sangramento fácil", "Tratar clamídia e gonococo juntos"],
      ["Disúria com urocultura negativa", "Síndrome uretral por clamídia"],
      ["Conjuntivite do RN em 5 a 14 dias", "Clamídia"],
      ["Gestante com clamídia", "Azitromicina (não doxiciclina)"],
      ["Cervicite persistente após tratamento", "Mycoplasma genitalium"],
      ["Diplococos Gram-negativos intracelulares", "Gonorreia"]
    ],
    pegadinhas: [
      ["A clamídia é diagnosticada pelo Gram.", "É intracelular: NAAT."],
      ["Doxiciclina é boa opção na gestante.", "Contraindicada."],
      ["A cervicite sem sintomas não precisa tratar.", "Pode causar DIP e infertilidade."],
      ["A parceria é tratada só se tiver sintomas.", "Sempre (60 dias)."],
      ["A gonorreia confere imunidade.", "Variação antigênica: reinfecta."]
    ],
    relampago: [
      {
        p: "Esquema do MS para cervicite ou gonorreia:",
        o: ["Ceftriaxona 500 mg IM + azitromicina 1 g VO", "Azitromicina isolada", "Doxiciclina isolada", "Metronidazol"],
        a: 0,
        x: "Cobre gonococo e clamídia, e a azitromicina ajuda contra resistência."
      },
      {
        p: "Exame de escolha para clamídia:",
        o: ["NAAT (PCR)", "Gram", "Cultura em Thayer-Martin", "Microscopia a fresco"],
        a: 0,
        x: "Ela fica dentro das células."
      },
      {
        p: "O que é o corpo elementar?",
        o: ["A forma infectante e resistente da clamídia", "A forma que se divide", "A inclusão", "Uma toxina"],
        a: 0,
        x: "Entra na célula e vira corpo reticulado."
      }
    ],
    bula: "Cervicite: mucopurulenta e friável, 70 a 80% sem sintomas. NAAT. Trata clamídia + gonococo juntos (ceftriaxona + azitromicina). Parceria 60 dias. Gestante sem doxiciclina. Mycoplasma persistente: doxiciclina + moxifloxacino."
  },
  {
    id: "dip",
    n: 36,
    cor: "#9a5a3f",
    titulo: "Doença inflamatória pélvica (DIP)",
    sub: "Critérios, Monif e antibióticos",
    busca: {"t": ["gineco", "abdome", "adolescente"], "re": "\\bDIP\\b|inflamat[óo]ria p[ée]lvica|salpingite|abscesso tubo|Monif|Fitz|endometrite", "enun": true},
    questoes: [],
    gancho: {
      caso: "Mulher de 23 anos, dor no baixo-ventre, dor à mobilização do colo e à palpação dos anexos, febre de 38 °C e secreção endocervical purulenta. Beta-hCG negativo. Sem peritonite.",
      p: "Conduta?",
      o: ["Ambulatório: ceftriaxona IM + doxiciclina + metronidazol por 14 dias", "Laparotomia", "Apenas azitromicina dose única", "Conduta expectante"],
      a: 0
    },
    ideia: "**DIP** é a infecção do trato genital superior (endométrio, tubas, ovários, peritônio), quase sempre **subindo de uma cervicite**, e **logo depois da menstruação**. É **polimicrobiana**: clamídia, gonococo, anaeróbios, Gardnerella, E. coli.\nOs critérios são **amplos de propósito**: tratar a mais é melhor que deixar **sequela** (infertilidade, ectópica, dor crônica).",
    mapa: [
      {
        tabela: {
          titulo: "Critérios (PCDT IST)",
          cols: ["Tipo", "Critérios"],
          rows: [
            ["**Maiores**", "**Dor no hipogástrio**; dor à palpação dos **anexos**; dor à **mobilização do colo**"],
            ["**Menores**", "Febre (> 37,5 axilar); secreção anormal; massa pélvica; > 5 leucócitos por campo; leucocitose; **PCR ou VHS altos**; NAAT positivo"],
            ["**Elaborados**", "**Endometrite** na biópsia; **abscesso tubo-ovariano** ou no Douglas; **laparoscopia** com DIP"],
            ["**Diagnóstico**", "**3 maiores + 1 menor**, ou **1 elaborado**"]
          ]
        }
      },
      {
        tabela: {
          titulo: "Classificação de Monif",
          cols: ["Estágio", "Achado", "Conduta"],
          rows: [
            ["**1**", "Endometrite e salpingite aguda, **sem peritonite**", "**Ambulatorial**"],
            ["**2**", "Salpingite **com peritonite**", "Internação, antibiótico IV"],
            ["**3**", "Oclusão tubária ou **abscesso tubo-ovariano íntegro**", "Internação; drenagem se não regredir"],
            ["**4**", "**Abscesso roto** ou choque séptico", "**Cirurgia de urgência**"]
          ]
        }
      },
      {
        tabela: {
          titulo: "Tratamento",
          cols: ["", "Esquema"],
          rows: [
            ["**Ambulatorial**", "**Ceftriaxona 500 mg IM dose única + doxiciclina 100 mg 12/12 h + metronidazol 500 mg 12/12 h, 14 dias**"],
            ["**Hospitalar**", "Ceftriaxona 1 g IV/dia + doxiciclina + metronidazol IV; alternativa: **clindamicina + gentamicina**; reavaliar em **72 h**"],
            ["**Internar**", "**Gestante**, grave, abscesso tubo-ovariano, falha do oral, dúvida diagnóstica"],
            ["**DIU**", "Não precisa retirar, salvo se não melhorar"],
            ["**Parceria**", "Últimos 60 dias: tratar para clamídia e gonococo"]
          ]
        }
      },
      {
        lista: {
          titulo: "Para lembrar",
          itens: ["**Teste de gravidez sempre**: afastar **ectópica**", "Diagnóstico diferencial: **apendicite**, torção ou cisto roto de ovário, endometriose", "**Fitz-Hugh-Curtis**: infecção chega à cápsula hepática (**corda de violino**), dor no hipocôndrio direito", "US: **hidrossalpinge ou piossalpinge**, abscesso tubo-ovariano", "Infertilidade: ~10% após 1 episódio e > 50% após 3"]
        }
      }
    ],
    gatilhos: [
      ["Dor pélvica + dor à mobilização do colo", "DIP: tratar"],
      ["Dor no hipocôndrio direito com DIP", "Fitz-Hugh-Curtis"],
      ["DIP com abscesso tubo-ovariano", "Internar"],
      ["Gestante com suspeita de DIP", "Internar"],
      ["Dor pélvica com beta-hCG positivo", "Pensar em ectópica"],
      ["Peritonite, choque, abscesso roto", "Monif 4: cirurgia"]
    ],
    pegadinhas: [
      ["O DIU deve ser retirado em toda DIP.", "Só se não melhorar."],
      ["Esperar a cultura para iniciar o tratamento.", "Iniciar logo com critérios mínimos."],
      ["DIP é infecção só por clamídia.", "É polimicrobiana: cobre anaeróbios."],
      ["O tratamento ambulatorial dura 7 dias.", "14 dias."],
      ["A DIP leve não deixa sequela.", "Cada episódio aumenta o risco de infertilidade."]
    ],
    relampago: [
      {
        p: "Esquema ambulatorial da DIP:",
        o: ["Ceftriaxona IM + doxiciclina + metronidazol por 14 dias", "Azitromicina dose única", "Penicilina benzatina", "Amoxicilina 7 dias"],
        a: 0,
        x: "Cobre gonococo, clamídia e anaeróbios."
      },
      {
        p: "Monif 3:",
        o: ["Abscesso tubo-ovariano íntegro ou oclusão tubária", "Peritonite sem abscesso", "Abscesso roto", "Endometrite leve"],
        a: 0,
        x: "Internação; drenagem se não regredir."
      },
      {
        p: "Aderências em corda de violino indicam:",
        o: ["Fitz-Hugh-Curtis", "Apendicite", "Endometriose", "Torção ovariana"],
        a: 0,
        x: "Peri-hepatite por DIP."
      }
    ],
    bula: "DIP = cervicite que sobe, depois da menstruação. 3 maiores + 1 menor. Ceftriaxona + doxiciclina + metronidazol por 14 dias. Gestante, abscesso e falha: internar. Monif 1 a 4."
  },
  {
    id: "ulceras",
    n: 37,
    cor: "#c0613a",
    titulo: "ISTs com úlcera genital",
    sub: "Sífilis, herpes, cancro mole e donovanose",
    busca: {"t": ["gineco", "figado", "prenatal", "adolescente", "violencia", "politicas"], "re": "cancro|donovan|herpes|[úu]lcera genital|haemophilus|aciclovir|granuloma inguinal|linfogranuloma|Tzanck", "nao": "papilomav[íi]rus|\\bHPV\\b|hepatocelular", "enun": true},
    questoes: [],
    gancho: {
      caso: "Homem de 30 anos com várias úlceras dolorosas, de fundo sujo e fétido, bordas solapadas e bubão unilateral que flutua e fistuliza por um único orifício.",
      p: "Agente e tratamento?",
      o: ["Haemophilus ducreyi: azitromicina 1 g dose única", "Treponema pallidum: penicilina benzatina", "HSV-2: aciclovir 7 a 10 dias", "Klebsiella granulomatis: doxiciclina 21 dias"],
      a: 0
    },
    ideia: "Quatro agentes dão úlcera genital: **sífilis** (T. pallidum), **herpes** (HSV), **cancro mole** (H. ducreyi) e **donovanose** (K. granulomatis). **LGV** (clamídia L1–L3) também começa com úlcera pequena.\nÉ preciso **separar** pelo padrão: número, **dor**, borda e fundo, **base endurecida** e **linfonodos**.\nA úlcera **aumenta várias vezes o risco de HIV**: testar HIV, sífilis e hepatites sempre. Até 10% têm **mais de uma infecção**.",
    mapa: [
      {
        tabela: {
          titulo: "Comparando as úlceras",
          cols: ["", "Sífilis", "Herpes", "Cancro mole", "Donovanose"],
          rows: [
            ["**Agente**", "T. pallidum", "HSV-2 e HSV-1", "H. ducreyi", "K. granulomatis"],
            ["**Incubação**", "10 a 90 dias", "4 a 7 dias", "3 a 5 dias", "Semanas a meses"],
            ["**Número**", "Geralmente **única**", "**Múltiplas**, vesículas agrupadas", "Múltiplas (autoinoculação, em espelho)", "Única ou múltiplas"],
            ["**Dor**", "**Indolor**", "**Muito dolorosa**", "**Muito dolorosa**", "**Indolor**"],
            ["**Borda e fundo**", "Borda elevada, fundo **limpo**", "Rasa, borda em mapa", "Solapada, fundo **sujo e fétido**", "Fundo **granuloso, vermelho-carne, sangra fácil**"],
            ["**Base**", "**Endurecida**", "Mole", "Mole", "Firme"],
            ["**Linfonodos**", "**Bilaterais, indolores**", "Bilaterais, dolorosos", "**Bubão** unilateral que fistuliza", "**Pseudobubão** (sem adenopatia verdadeira)"],
            ["**Diagnóstico**", "Campo escuro; testes", "Clínico; **PCR**", "Clínico; Gram (**cardume de peixes**)", "**Corpúsculos de Donovan** (Giemsa) ou biópsia"],
            ["**Tratamento**", "**Penicilina benzatina** 2,4 milhões UI", "**Aciclovir** 400 mg 8/8 h por 7 a 10 dias", "**Azitromicina 1 g** ou ceftriaxona 250 mg IM", "**Doxiciclina 100 mg 12/12 h por 21 dias ou mais**"]
          ]
        }
      },
      {
        tabela: {
          titulo: "Herpes: o que saber",
          cols: ["Tema", "O que saber"],
          rows: [
            ["**Fisiopatologia**", "Vesícula por células balonizantes e gigantes multinucleadas; **latência nos gânglios sacrais (S2 a S4)**; não tem cura"],
            ["**Primoinfecção**", "2 a 3 semanas: febre, retenção urinária, linfonodos dolorosos"],
            ["**Recorrência**", "Mais leve (5 a 10 dias), unilateral, **pródromo** de ardor"],
            ["**Aciclovir**", "Análogo da guanosina, ativado pela **timidina quinase viral** → seletivo; sem 3'-OH **interrompe a cadeia**"],
            ["**Supressão**", "≥ 6 recorrências por ano: aciclovir 400 mg 12/12 h por 6 meses ou mais"],
            ["**Tzanck**", "Células gigantes, **não diferencia de varicela**"]
          ]
        }
      },
      {
        tabela: {
          titulo: "Herpes na gestação",
          cols: ["Situação", "Conduta"],
          rows: [
            ["**Risco para o RN**", "**Primoinfecção no fim da gestação**: 30 a 50%; recorrência < 1 a 3%"],
            ["**Supressão**", "Aciclovir ou valaciclovir a partir de **36 semanas**"],
            ["**Lesão ativa ou pródromo no parto**", "**Cesárea**, de preferência antes da ruptura"],
            ["**Sem lesão**", "Parto vaginal; evitar eletrodo no couro cabeludo, fórceps e vácuo"],
            ["**RN suspeito**", "**Aciclovir IV** 14 dias (pele, olhos, boca) ou 21 dias (SNC e disseminada); começar antes da confirmação"],
            ["**Formas**", "Pele-olhos-boca (45%), **SNC** (30%), **disseminada** (25%, mais letal)"]
          ]
        }
      },
      {
        lista: {
          titulo: "Detalhes finais",
          itens: ["**Parcerias**: sífilis 90 dias; cancro mole 10 dias; donovanose 60 dias", "**Bubão do cancro mole**: aspirar com agulha grossa, **nunca incisar**", "**Úlcera > 4 semanas**: biópsia (donovanose pode se associar a carcinoma)", "**Doxiciclina na gestação**: não; usar azitromicina", "**Donovanose**: formas ulcerovegetante, vegetante, elefantiásica e esclerótica"]
        }
      }
    ],
    gatilhos: [
      ["Úlcera única, indolor, base endurecida", "Sífilis primária"],
      ["Vesículas agrupadas + dor + linfonodo doloroso", "Herpes"],
      ["Úlceras dolorosas, fundo sujo, bubão que fistuliza", "Cancro mole"],
      ["Úlcera vermelho-carne, indolor, sangra fácil", "Donovanose"],
      ["Cardume de peixes no Gram", "Haemophilus ducreyi"],
      ["Corpúsculos de Donovan no Giemsa", "Klebsiella granulomatis"]
    ],
    pegadinhas: [
      ["O cancro mole é indolor.", "É muito doloroso; o indolor é o cancro duro e a donovanose."],
      ["O bubão do cancro mole se incisa com bisturi.", "Aspira-se: a incisão fistuliza."],
      ["A donovanose cura em 7 dias de doxiciclina.", "21 dias ou mais, até cicatrizar."],
      ["O aciclovir elimina o vírus latente.", "Só reduz a duração e a eliminação."],
      ["O Tzanck diferencia herpes simples de varicela.", "Não diferencia."]
    ],
    relampago: [
      {
        p: "Qual úlcera é indolor?",
        o: ["Cancro duro (sífilis) e donovanose", "Herpes e cancro mole", "Apenas herpes", "Cancro mole"],
        a: 0,
        x: "Herpes e cancro mole doem muito."
      },
      {
        p: "Mecanismo seletivo do aciclovir:",
        o: ["Só é ativado pela timidina quinase viral nas células infectadas", "Inibe a parede do vírus", "Bloqueia o ribossomo", "Destrói o RNA"],
        a: 0,
        x: "Depois vira trifosfato e interrompe a cadeia de DNA."
      },
      {
        p: "Gestante com lesão genital ativa de herpes no início do parto:",
        o: ["Cesárea, de preferência antes da ruptura das membranas", "Parto vaginal com aciclovir", "Esperar a lesão sumir", "Fórceps"],
        a: 0,
        x: "Evita o contato com as secreções infectadas."
      }
    ],
    bula: "Dor + múltiplas = herpes e cancro mole; indolor = sífilis (base dura) e donovanose (vermelho-carne). Penicilina, aciclovir, azitromicina 1 g, doxiciclina 21 dias. Úlcera: sempre testar HIV. Herpes: 36 semanas, cesárea se lesão."
  },
  {
    id: "prevencaoist",
    n: 38,
    cor: "#4a7fa8",
    titulo: "Prevenção das ISTs e parcerias",
    sub: "Prevenção combinada, preservativo e doxi-PEP",
    busca: {"t": ["gineco", "prenatal", "violencia", "adolescente", "politicas"], "re": "preven[çc][ãa]o combinada|doxi-?PEP|parcerias? sexua|PrEP|tratamento do parceiro|tratar o parceiro|profilaxia p[óo]s-exposi[çc][ãa]o", "enun": true},
    questoes: [],
    gancho: {
      caso: "Mulher de 24 anos tem diagnóstico de tricomoníase e é tratada com metronidazol. O parceiro nega sintomas.",
      p: "Conduta com o parceiro?",
      o: ["Tratar ao mesmo tempo, mesmo sem sintomas", "Não tratar porque é assintomático", "Tratar só se houver sintomas", "Apenas orientar"],
      a: 0
    },
    ideia: "**Prevenção combinada** é juntar estratégias, porque nenhuma protege de tudo: **biomédicas** (preservativo, testagem, tratamento, profilaxias, vacinas), **comportamentais** (informação, negociação, adesão) e **estruturais** (estigma, violência, acesso).\nPara corrimento e úlcera, a proteção vem de **quatro medidas**: **preservativo**, **rastreamento** de quem não tem sintoma, **tratamento correto** e **tratamento das parcerias**.",
    mapa: [
      {
        tabela: {
          titulo: "Parcerias: quem trata e por quanto tempo",
          cols: ["Infecção", "Parceria"],
          rows: [
            ["**Tricomoníase**", "**Sempre trata** (é IST verdadeira)"],
            ["**Clamídia, gonorreia, Mycoplasma**", "Últimos **60 dias**"],
            ["**Sífilis**", "Últimos **90 dias**: penicilina 2,4 milhões UI, mesmo com teste negativo"],
            ["**Cancro mole**", "Últimos **10 dias**"],
            ["**Donovanose**", "Últimos **60 dias**"],
            ["**Vaginose e candidíase**", "**Parceiro não trata** (candidíase só se tiver balanopostite)"]
          ]
        }
      },
      {
        tabela: {
          titulo: "Medidas",
          cols: ["Medida", "O que saber"],
          rows: [
            ["**Preservativo**", "Masculino e feminino (interno), do começo ao fim. Protege bem gonorreia, clamídia e tricomoníase; **nas úlceras é parcial** (pele com pele). Reduz ~30% o risco de herpes"],
            ["**Lesão ativa de herpes**", "Evitar relação até cicatrizar"],
            ["**Rastreamento**", "PCR de clamídia e gonococo em **≤ 30 anos ativos**, **gestantes (1ª consulta)**, HIV, parcerias múltiplas e **violência sexual**"],
            ["**Teste rápido de sífilis**", "Toda pessoa sexualmente ativa; **PrEP: a cada consulta**"],
            ["**Terapia supressiva do herpes**", "Reduz ~**metade** da transmissão"],
            ["**Doxi-PEP**", "Doxiciclina **200 mg até 72 h** após sexo sem preservativo: reduz sífilis e clamídia em **HSH e mulheres trans**; em **mulheres cis, ainda não recomendada**"],
            ["**Vacinas**", "Não existem contra clamídia, gonorreia, tricomoníase, sífilis ou herpes. **4CMenB** dá proteção parcial (30 a 40%) contra gonorreia"],
            ["**Violência sexual**", "Penicilina benzatina, ceftriaxona, azitromicina e metronidazol + profilaxia de **HIV** e **hepatite B** + contracepção de emergência"],
            ["**Recém-nascido**", "**Colírio nos olhos** logo após o parto (oftalmia gonocócica)"]
          ]
        }
      },
      {
        lista: {
          titulo: "Vaginose e candidíase (não são ISTs clássicas)",
          itens: ["Preservar os **lactobacilos**: sem duchas nem sabonete perfumado", "Antibiótico só se necessário; controlar **diabetes**; parar de fumar", "Probióticos: **sem evidência forte**", "Recorrência: **supressão** (metronidazol gel 2x/semana; fluconazol semanal)"]
        }
      }
    ],
    gatilhos: [
      ["Tricomoníase", "Tratar a parceria ao mesmo tempo"],
      ["Vaginose bacteriana", "Parceiro não tratado"],
      ["Sífilis no parceiro", "Benzatina 2,4 milhões UI em 90 dias, mesmo com teste negativo"],
      ["Vítima de violência sexual", "Profilaxia de IST + HIV + hepatite B"],
      ["Mulher cis com sexo desprotegido", "Doxi-PEP ainda não indicada"],
      ["Jovem de 20 anos sexualmente ativa", "PCR de clamídia e gonococo"]
    ],
    pegadinhas: [
      ["O preservativo protege completamente contra herpes.", "Protege parcialmente, porque o contato é pele com pele."],
      ["A doxi-PEP é indicada para mulheres cis.", "Não: um estudo no Quênia não mostrou proteção."],
      ["O parceiro da candidíase sempre é tratado.", "Só se tiver sintomas."],
      ["Existe vacina contra clamídia e gonorreia.", "Não; 4CMenB dá proteção parcial."],
      ["O repouso sexual não importa durante o tratamento.", "O casal fica sem relações até o fim."]
    ],
    relampago: [
      {
        p: "Qual parceria é tratada mesmo sem sintomas?",
        o: ["Tricomoníase", "Vaginose bacteriana", "Candidíase assintomática", "Vaginite atrófica"],
        a: 0,
        x: "Sem tratar, a mulher se reinfecta."
      },
      {
        p: "Janela para tratar parceria de sífilis:",
        o: ["90 dias", "10 dias", "60 dias", "1 ano"],
        a: 0,
        x: "Cancro mole 10; clamídia, gonorreia e donovanose 60."
      },
      {
        p: "O que a prevenção combinada inclui?",
        o: ["Medidas biomédicas, comportamentais e estruturais", "Apenas o preservativo", "Somente vacinas", "Somente testagem"],
        a: 0,
        x: "Nenhuma estratégia protege sozinha."
      }
    ],
    bula: "Prevenção combinada: biomédica + comportamental + estrutural. Parcerias: sífilis 90 d, clamídia/gonorreia/donovanose 60 d, cancro mole 10 d, tricomoníase sempre; VB não. Preservativo é parcial nas úlceras. Doxi-PEP não é para mulher cis."
  },
  {
    id: "crescimento",
    n: 39,
    cor: "#5a9a4a",
    titulo: "Crescimento e desenvolvimento",
    sub: "Escore-z, fontanelas, reflexos e alertas",
    busca: {"t": ["desenvolvimento", "aleitamento", "rn", "aga", "puberdade"], "re": "escore[- ]z|curva de crescimento|fontanela|per[íi]metro cef[áa]lico|caderneta|reflexo|marcos? do desenvolvimento|M-CHAT|idade corrigida|desenvolvimento neuropsicomotor|DNPM", "enun": true},
    questoes: [],
    gancho: {
      caso: "Lactente de 8 meses cuja curva de peso já caminhava no escore-z −1,5 desde o nascimento. Hoje está no −1,5, com desenvolvimento adequado.",
      p: "Interpretação?",
      o: ["Normal: o que importa é a tendência e ela está estável", "Baixo peso: investigar", "Desnutrição aguda", "Atraso do desenvolvimento"],
      a: 0
    },
    ideia: "**Crescimento** é **quantitativo** (peso, comprimento, perímetro cefálico: hiperplasia e hipertrofia). **Desenvolvimento** é **qualitativo** (habilidades: mielinização e sinapses). Uma criança cresce bem e se desenvolve mal, ou o contrário: **avalia-se os dois** em toda consulta.\nNa curva da OMS o que importa é a **tendência**: o traçado deve subir **paralelo**; **horizontal ou descendente** é alerta, mesmo dentro da faixa.\nO **peso** cai primeiro na falta de alimento; a **estatura** cai depois (**desnutrição crônica**).",
    mapa: [
      {
        tabela: {
          titulo: "Escore-z (OMS, menores de 5 anos)",
          cols: ["Escore-z", "Peso/idade", "Estatura/idade", "IMC/idade"],
          rows: [
            ["**< −3**", "Muito baixo peso", "Muito baixa estatura", "Magreza acentuada"],
            ["**−3 a −2**", "Baixo peso", "Baixa estatura", "Magreza"],
            ["**−2 a +1**", "Adequado", "Adequada", "Eutrofia"],
            ["**+1 a +2**", "Adequado", "Adequada", "Risco de sobrepeso"],
            ["**+2 a +3**", "Elevado", "Adequada", "Sobrepeso"],
            ["**> +3**", "Elevado", "Adequada", "Obesidade"]
          ]
        }
      },
      {
        tabela: {
          titulo: "Marcos do crescimento",
          cols: ["Tema", "O que saber"],
          rows: [
            ["**Perda do RN**", "Até **10%** do peso; recupera em **10 a 15 dias**"],
            ["**Ritmo**", "Rápido no 1º ano, **5 a 7 cm/ano** dos 2 anos à puberdade, estirão na puberdade"],
            ["**Perímetro cefálico**", "Cérebro ~25% do adulto ao nascer e **75% aos 2 anos**; micro ou hidrocefalia = alerta"],
            ["**Fontanela posterior**", "Fecha até os **2 meses**"],
            ["**Fontanela anterior**", "Fecha entre **9 e 18 meses**; **abaulada** = pressão intracraniana; **deprimida** = desidratação"],
            ["**Medidas**", "Comprimento deitado até 2 anos; PC até 2 anos"],
            ["**Hormônios**", "Feto: **insulina**; infância: **GH** (IGF-1) e **tireoide**; puberdade: esteroides sexuais"]
          ]
        }
      },
      {
        tabela: {
          titulo: "Desenvolvimento",
          cols: ["Tema", "O que saber"],
          rows: [
            ["**Quatro domínios**", "Motor grosso, motor fino, **linguagem**, pessoal-social"],
            ["**Direção**", "**Céfalo-caudal** e **próximo-distal**"],
            ["**Reflexos primitivos**", "Do tronco encefálico; o córtex os **inibe**. **Ausência** ou **persistência** além do esperado = lesão neurológica"],
            ["**Sinais de alerta**", "Não alcançar o marco na idade-limite, **regressão**, assimetria, persistência de reflexos, **falta de contato visual ou resposta ao nome**"],
            ["**M-CHAT-R**", "Rastreio de **autismo** entre **16 e 30 meses**"],
            ["**Idade corrigida**", "Prematuros: idade cronológica menos as semanas que faltaram para 40, **até 2 anos**"]
          ]
        }
      },
      {
        tabela: {
          titulo: "Marcos por idade",
          cols: ["Idade", "Esperado"],
          rows: [
            ["**2 meses**", "**Sorriso social**, arrulhos, levanta a cabeça de bruços"],
            ["**4 meses**", "Sustenta a cabeça, ri alto, leva objetos à boca"],
            ["**6 meses**", "Senta com apoio, passa objeto de uma mão para outra, **balbucia**"],
            ["**9 meses**", "**Senta sem apoio**, engatinha, **pinça lateral**, dá tchau, estranha"],
            ["**12 meses**", "Anda com apoio, **pinça fina**, primeiras palavras"],
            ["**18 meses**", "**Anda bem**, torre de 3 cubos, 10 a 20 palavras"],
            ["**2 anos**", "Corre, frases de 2 palavras, ~50 palavras"],
            ["**3 anos**", "Triciclo, copia **círculo**, frases completas, controle diurno de esfíncteres"]
          ]
        }
      }
    ],
    gatilhos: [
      ["Curva horizontal ou descendente", "Alerta, mesmo no normal"],
      ["Peso cai antes da estatura", "Falta aguda; estatura baixa = crônica"],
      ["Fontanela abaulada", "Pressão intracraniana"],
      ["Fontanela deprimida", "Desidratação"],
      ["Perdeu uma habilidade que já tinha", "Regressão: investigar"],
      ["Não responde ao nome, sem contato visual aos 18 meses", "M-CHAT-R e avaliar autismo"]
    ],
    pegadinhas: [
      ["Escore-z −1,5 sempre estável é problema.", "Se a criança sempre esteve ali, está bem."],
      ["A estatura é o primeiro parâmetro a cair.", "O peso cai primeiro."],
      ["Crescer bem garante bom desenvolvimento.", "São avaliados separadamente."],
      ["A fontanela anterior fecha aos 2 meses.", "A posterior; a anterior fecha entre 9 e 18 meses."],
      ["Prematuros usam idade corrigida até os 5 anos.", "Até os 2 anos."]
    ],
    relampago: [
      {
        p: "Qual faixa do escore-z é considerada normal para peso/idade?",
        o: ["−2 a +1 (adequado)", "−3 a −2", "> +2", "< −3"],
        a: 0,
        x: "Abaixo de −2 = baixo peso."
      },
      {
        p: "O reflexo primitivo que persiste além do esperado indica:",
        o: ["Possível lesão neurológica", "Crescimento rápido", "Desnutrição", "Normalidade"],
        a: 0,
        x: "O córtex deveria inibir os reflexos."
      },
      {
        p: "Idade de rastreio com M-CHAT-R:",
        o: ["16 a 30 meses", "3 a 6 meses", "5 anos", "Ao nascer"],
        a: 0,
        x: "Rastreia o transtorno do espectro autista."
      }
    ],
    bula: "Crescimento = medida; desenvolvimento = habilidade. Tendência da curva vale mais que um ponto. Peso cai antes da estatura. Fontanela anterior fecha em 9 a 18 meses. Reflexos persistentes ou ausentes: lesão. M-CHAT aos 16 a 30 m."
  },
  {
    id: "alimentacao",
    n: 40,
    cor: "#d98a2b",
    titulo: "Alimentação complementar e carências",
    sub: "Aos 6 meses, suplementos e desnutrição",
    busca: {"t": ["aleitamento", "desenvolvimento", "rn", "aga", "alergia", "gastroped"], "re": "alimenta[çc][ãa]o complementar|suplementa[çc][ãa]o|sulfato ferroso|vitamina D|vitamina A|raquitismo|marasmo|kwashiorkor|desnutri[çc][ãa]o|anemia ferropriva|introdu[çc][ãa]o alimentar|mel\\b", "enun": true},
    questoes: [],
    gancho: {
      caso: "Lactente de 6 meses em aleitamento materno exclusivo, sentando com apoio, sem protrusão da língua, interessado na comida da mãe.",
      p: "Conduta?",
      o: ["Iniciar alimentação complementar amassada com garfo e manter o leite materno", "Esperar até 9 meses", "Dar suco de frutas e sopa liquidificada", "Substituir o leite materno por leite de vaca"],
      a: 0
    },
    ideia: "Aos **6 meses**, o leite materno **sozinho** não supre **energia, ferro e zinco**, e a criança está **pronta**: senta com apoio, sustenta a cabeça, perdeu o reflexo de protrusão da língua.\nA comida **complementa**, não substitui o leite, que continua em **livre demanda**. Começar **antes** aumenta diarreia, alergias e desmame; **depois**, anemia e atraso de crescimento.\nA comida é **amassada com garfo**, nunca liquidificada ou peneirada.",
    mapa: [
      {
        tabela: {
          titulo: "Regras do Guia Alimentar (MS 2019)",
          cols: ["Regra", "O que saber"],
          rows: [
            ["**Consistência**", "Amassada com garfo; **pedaços pequenos** aos 7 a 8 meses; **comida da família** com 1 ano"],
            ["**Frutas**", "Inteiras ou amassadas, **nunca em suco**"],
            ["**Açúcar e ultraprocessados**", "**Não antes dos 2 anos**"],
            ["**Mel**", "**Não no 1º ano** (botulismo)"],
            ["**Leite de vaca integral**", "**Não no 1º ano**: proteína e sal em excesso, pouco ferro, microssangramentos; sem peito, usa-se **fórmula**"],
            ["**Recusa**", "Normal: oferecer **8 a 15 vezes** o mesmo alimento"],
            ["**Ambiente**", "Junto com a família, sem telas, sem forçar"]
          ]
        }
      },
      {
        tabela: {
          titulo: "Suplementação de rotina",
          cols: ["Nutriente", "Dose e período", "Por quê"],
          rows: [
            ["**Ferro**", "MS: **1 mg/kg/dia dos 6 aos 24 meses**. SBP: a partir dos 3 meses (termo) e de 30 dias (prematuros, 2 mg/kg/dia)", "Reserva do nascimento acaba; previne **anemia ferropriva**"],
            ["**Vitamina D**", "**400 UI/dia** até 12 meses e **600 UI** dos 12 aos 24 meses (SBP)", "Leite materno tem pouca; previne **raquitismo**"],
            ["**Vitamina A**", "Megadose: 100.000 UI aos 6 a 11 meses e 200.000 UI a cada 6 meses dos 12 aos 59 (regiões prioritárias)", "Reduz mortalidade e **xeroftalmia**"]
          ]
        }
      },
      {
        tabela: {
          titulo: "Carências e desnutrição",
          cols: ["Quadro", "O que saber"],
          rows: [
            ["**Marasmo**", "Falta **global de energia**: extremamente magra, sem gordura, pele sobre os ossos"],
            ["**Kwashiorkor**", "Falta de **proteína**: **edema** (albumina baixa), barriga distendida, lesões de pele, cabelo fino e descolorido"],
            ["**Anemia ferropriva**", "Carência **mais comum** na infância: palidez, irritabilidade, atraso cognitivo"],
            ["**Raquitismo**", "Falta de vitamina D: pernas arqueadas, alargamento dos punhos, **rosário raquítico**"],
            ["**Vitamina A**", "**Cegueira noturna**, xeroftalmia, infecções mais graves"],
            ["**Excesso**", "Ultraprocessados e desmame precoce: **sobrepeso e obesidade**"],
            ["**Primeiros mil dias**", "Da concepção aos 2 anos: falta deixa **baixa estatura definitiva** e pior desempenho escolar"]
          ]
        }
      },
      {
        lista: {
          titulo: "Esquema até 2 anos",
          itens: ["**6 meses**: leite materno + fruta + almoço (2 a 3 colheres) + fruta", "**7 e 8 meses**: + jantar (3 a 4 colheres)", "**9 a 11 meses**: 4 a 5 colheres, pedaços pequenos", "**12 a 24 meses**: 5 colheres, café da manhã, lanches, comida da família"]
        }
      }
    ],
    gatilhos: [
      ["Edema e barriga distendida em criança desnutrida", "Kwashiorkor"],
      ["Criança muito magra, sem gordura", "Marasmo"],
      ["Pernas arqueadas e rosário", "Raquitismo (vitamina D)"],
      ["Cegueira noturna", "Falta de vitamina A"],
      ["Lactente com mel", "Risco de botulismo no 1º ano"],
      ["Criança de 9 meses com palidez e irritabilidade", "Anemia ferropriva"]
    ],
    pegadinhas: [
      ["Introduzir comida aos 4 meses para o bebê crescer melhor.", "Aos 6 meses; antes aumenta diarreia, alergia e desmame."],
      ["Liquidificar a comida para facilitar.", "Amassar com garfo."],
      ["Suco de fruta natural é boa opção aos 6 meses.", "Fruta inteira ou amassada."],
      ["O leite de vaca integral é bom a partir de 6 meses.", "Só depois de 1 ano."],
      ["Após a comida, o leite materno pode parar.", "Continua em livre demanda."]
    ],
    relampago: [
      {
        p: "Anemia ferropriva é prevenida pela suplementação de:",
        o: ["Ferro 1 mg/kg/dia dos 6 aos 24 meses (MS)", "Ferro apenas se anêmico", "Vitamina C", "Zinco"],
        a: 0,
        x: "SBP: a partir de 3 meses nos nascidos a termo."
      },
      {
        p: "Qual quadro tem EDEMA?",
        o: ["Kwashiorkor", "Marasmo", "Raquitismo", "Xeroftalmia"],
        a: 0,
        x: "Falta de proteína reduz a albumina; o líquido sai dos vasos."
      },
      {
        p: "Por que não dar mel antes de 1 ano?",
        o: ["Botulismo", "Diarreia", "Alergia", "Obesidade"],
        a: 0,
        x: "Esporos de Clostridium botulinum."
      }
    ],
    bula: "Complementar aos 6 meses, amassada com garfo, leite materno em livre demanda. Sem mel e leite de vaca no 1º ano; sem açúcar antes dos 2. Ferro 1 mg/kg/dia (6 a 24 m), vitamina D 400 UI. Marasmo = energia; kwashiorkor = proteína."
  }
);
