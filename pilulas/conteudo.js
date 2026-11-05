/* PÍLULAS PARA PROVA · SOI IV
   23 assuntos (n 1–23) + extras. Fontes: enunciados, gabaritos e comentários das provas do banco Exatamente,
   complementados por referências padrão (Ministério da Saúde, KDIGO e livros-texto).
   Campos de cada pílula:
     n           número (ordem da lista); extra:true = pílula bônus
     busca       questões puxadas do banco (só SOI e Integradora): t = temas, re = palavras (regex),
                 nao = palavras que excluem, fora = IDs excluídos
     questoes    IDs fixos (somam com a busca)
     gancho      caso curto antes da explicação (o: alternativas, a: índice da certa)
     ideia       a frase que explica o tema inteiro (**negrito**; \n separa parágrafos)
     mapa        blocos: {tabela:{titulo,cols,rows}} | {fluxo:{titulo,passos}} | {lista:{titulo,itens}}
                 tabela com cols[0]==='' vira comparação lado a lado; senão, vira cartões
     gatilhos    [viu isto, pense nisto]
     pegadinhas  [afirmação falsa, correção]
     relampago   3 perguntas {p, o, a, x} (as alternativas são embaralhadas na tela)
     bula        o que levar na cabeça
*/
window.PL_PILULAS = [
  {
    id: "drge",
    n: 1,
    cor: "#c96a3a",
    titulo: "DRGE (refluxo gastroesofágico)",
    sub: "Barreira, depuração e epitélio",
    busca: {t:["esofago"], re:"refluxo|DRGE|pirose|Barrett|esofagite|dispepsia funcional"},
    questoes: [],
    gancho: {
      caso: "Homem, 40 anos, pirose e regurgitação 3 vezes por semana há 3 meses, piora ao deitar depois do jantar. Sem disfagia, sem perda de peso, sem anemia.",
      p: "Conduta inicial?",
      o: ["IBP em jejum por 8 semanas + mudança de hábitos, sem endoscopia", "Endoscopia antes de qualquer tratamento", "Cirurgia antirrefluxo", "Anti-H2 com antibiótico"],
      a: 0
    },
    ideia: "DRGE é o conteúdo do estômago **voltando para o esôfago** porque as defesas falharam.\nSão três defesas: **barreira antirrefluxo** (esfíncter inferior e diafragma), **depuração** (peristalse e saliva) e **resistência do epitélio**.\nSintoma **típico sem alarme** → trata direto com IBP. **Sinal de alarme** → endoscopia.",
    mapa: [
      {
        tabela: {
          titulo: "Sintomas e alarmes",
          cols: ["Grupo", "O que é"],
          rows: [
            ["Típicos", "**Pirose** (queimação retroesternal) e **regurgitação**"],
            ["Atípicos (extraesofágicos)", "Tosse crônica, asma, rouquidão, pigarro, dor torácica não cardíaca, erosão dentária"],
            ["Sinais de alarme → endoscopia", "**Disfagia**, odinofagia, **perda de peso**, **anemia**, sangramento, vômitos persistentes, início após 40–45 anos, história familiar de câncer"]
          ]
        }
      },
      {
        fluxo: {
          titulo: "Conduta",
          passos: ["Típico sem alarme → **mudança de hábitos + IBP em jejum por 8 semanas**", "Melhora parcial em 2 semanas → **manter** até completar 6–12 semanas", "Alarme ou falha do tratamento → **endoscopia**", "Esôfago de **Barrett** → IBP + vigilância endoscópica", "Refluxo **alcalino** (biliar, pós-colecistectomia) → **pró-cinético**"]
        }
      },
      {
        lista: {
          titulo: "Mudança de hábitos",
          itens: ["Elevar a cabeceira da cama", "Não deitar 2–3 horas depois de comer", "Perder peso", "Parar de fumar e reduzir álcool", "Evitar refeição volumosa e o que piora os sintomas"]
        }
      },
      {
        tabela: {
          titulo: "Complicações",
          cols: ["Complicação", "O que é"],
          rows: [
            ["Esofagite erosiva", "Erosões na mucosa vistas na endoscopia"],
            ["**Barrett**", "Epitélio escamoso trocado por **colunar com células caliciformes** (metaplasia intestinal) → risco de **adenocarcinoma**"],
            ["Estenose", "Disfagia progressiva por cicatriz"]
          ]
        }
      }
    ],
    gatilhos: [
      ["Pirose + regurgitação sem alarme", "IBP empírico, sem endoscopia"],
      ["Tosse crônica ou rouquidão sem outra causa", "DRGE atípica"],
      ["Disfagia, perda de peso ou anemia", "Endoscopia"],
      ["Células caliciformes no esôfago distal", "Barrett"],
      ["Refluxo alcalino após colecistectomia", "Pró-cinético"],
      ["Queimação epigástrica, endoscopia normal e H. pylori negativo", "Dispepsia funcional"]
    ],
    pegadinhas: [
      ["A lesão depende só da composição do material refluído.", "Depende também do tempo de contato e das defesas do esôfago."],
      ["DRGE é uma forma aguda e sempre tem lesão.", "É crônica e pode ser não erosiva."],
      ["Toda DRGE precisa de endoscopia antes de tratar.", "Só se houver sinal de alarme ou falha."],
      ["Melhorou 60% em 2 semanas: trocar ou parar o IBP.", "Manter até completar 6–12 semanas."],
      ["Os sintomas extraesofágicos acompanham sempre o grau de esofagite.", "Nem sempre; podem existir sem esofagite."]
    ],
    relampago: [
      {
        p: "DRGE típica tratada com hábitos + omeprazol. Em 2 semanas, melhora de 60%. Conduta:",
        o: ["Manter o tratamento até 6–12 semanas", "Pedir endoscopia já", "Trocar por anti-H2", "Suspender o IBP"],
        a: 0,
        x: "A resposta do IBP leva semanas. Melhora parcial cedo é esperada."
      },
      {
        p: "O que define o esôfago de Barrett na biópsia?",
        o: ["Epitélio colunar com células caliciformes no lugar do escamoso", "Infiltrado de eosinófilos", "Erosões superficiais", "Células em anel de sinete"],
        a: 0,
        x: "Metaplasia intestinal: o esôfago \"vira intestino\" para aguentar o ácido, e isso predispõe ao adenocarcinoma."
      },
      {
        p: "Qual destes NÃO é sinal de alarme na DRGE?",
        o: ["Pirose depois de refeição gordurosa", "Disfagia", "Anemia", "Perda de peso"],
        a: 0,
        x: "Pirose é o sintoma típico. Alarme é o que sugere complicação ou câncer."
      }
    ],
    bula: "Refluxo = falha da barreira, da depuração ou do epitélio. Típico sem alarme: IBP em jejum por 8 semanas + hábitos. Alarme: endoscopia. Barrett = colunar com caliciformes."
  },
  {
    id: "estomago",
    n: 2,
    cor: "#d9578f",
    titulo: "Gastrites, úlceras e H. pylori",
    sub: "Agressão × defesa da mucosa",
    busca: {t:["esofago"], re:"pylori|úlcera|ulcera|gastrite|AINE|anti-inflamat|antiácido|bomba de prótons|IBP|omeprazol"},
    questoes: ["SOI-2022.2-04", "SOI-2023.1-02", "SOI-2024.1-08", "SOI-2024.2-15", "SOI-2025.2-01", "SOI-2025.2-04", "SOI-2024.2-10"],
    gancho: {
      caso: "Mulher, 56 anos, toma ibuprofeno todo dia por dor nos joelhos. Tem H. pylori e queimação epigástrica.",
      p: "Como o AINE lesa a mucosa?",
      o: ["Inibe a COX-1 → menos prostaglandina → menos muco e bicarbonato", "Aumenta a liberação de gastrina", "Bloqueia a bomba de prótons", "Neutraliza o ácido do estômago"],
      a: 0
    },
    ideia: "Gastrite e úlcera são uma **balança desequilibrada**.\nDe um lado, os **agressores**: **ácido, H. pylori, AINE e tabaco**.\nDo outro, as **defesas**: **muco, bicarbonato, prostaglandinas, fluxo sanguíneo e renovação do epitélio**.\nO tratamento tira peso dos agressores.",
    mapa: [
      {
        tabela: {
          titulo: "Os agressores",
          cols: ["Agressor", "Como agride"],
          rows: [
            ["Ácido (HCl)", "Lesa a mucosa quando as defesas caem"],
            ["H. pylori", "**Urease** faz amônia e neutraliza o ácido ao redor (a bactéria sobrevive). **Flagelos** colonizam o muco. **VacA** vacuoliza e mata a célula. **CagA** aumenta a inflamação e o risco de câncer"],
            ["AINE", "Inibe a **COX-1** → menos prostaglandinas → menos muco, bicarbonato e fluxo"],
            ["Tabaco", "Menos perfusão, menos muco e bicarbonato"]
          ]
        }
      },
      {
        tabela: {
          titulo: "Úlcera gástrica × duodenal",
          cols: ["", "Gástrica", "Duodenal"],
          rows: [
            ["Dor", "Piora ao comer", "Melhora ao comer, volta 2–3 h depois; acorda de madrugada"],
            ["Causa", "H. pylori, AINE", "H. pylori (mais forte), hipersecreção ácida"],
            ["Câncer", "Biopsiar sempre (pode ser câncer)", "Raramente maligna"]
          ]
        }
      },
      {
        tabela: {
          titulo: "Os remédios",
          cols: ["Classe", "Ação", "Detalhe de prova"],
          rows: [
            ["IBP (omeprazol)", "Bloqueia a H⁺/K⁺-ATPase: a **via final**, qualquer que seja o estímulo", "Mais eficaz que o anti-H2. Tomar **em jejum**"],
            ["Anti-H2", "Bloqueia o receptor H2 da célula parietal", "Inferior ao IBP"],
            ["Antiácido", "Base fraca + HCl → água e sal", "Alívio rápido e curto, só sintomático"],
            ["Sucralfato e bismuto", "Protegem a mucosa", "Efeito protetor, não negativo"],
            ["Erradicar H. pylori", "**IBP + amoxicilina + claritromicina** por 14 dias", "Indicado na úlcera com H. pylori; confirmar a erradicação depois"]
          ]
        }
      }
    ],
    gatilhos: [
      ["Úlcera + H. pylori", "Erradicar: IBP + amoxicilina + claritromicina"],
      ["AINE crônico + dor epigástrica", "COX-1 inibida, prostaglandina cai"],
      ["VacA", "Vacuoliza e mata a célula → úlcera"],
      ["CagA", "Mais inflamação e mais risco de câncer gástrico"],
      ["Dor que acorda de madrugada e melhora ao comer", "Úlcera duodenal"],
      ["Dispepsia + anemia, perda de peso ou idade > 40", "Endoscopia com biópsia"]
    ],
    pegadinhas: [
      ["Os antagonistas H2 são os mais eficazes.", "O IBP é superior: bloqueia a via final."],
      ["O IBP deve ser tomado com alimento.", "Em jejum: comida reduz a absorção do IBP."],
      ["H. pylori se trata com anti-H2 + ampicilina + gentamicina por 28 dias.", "IBP + amoxicilina + claritromicina."],
      ["A urease acidifica o estômago.", "A urease gera amônia e alcaliniza o redor da bactéria."],
      ["A CagA reduz o risco de câncer.", "A CagA aumenta inflamação e risco de câncer."],
      ["A proteção gástrica depende da COX-2.", "Depende da COX-1."],
      ["Sucralfato e bismuto prejudicam a mucosa.", "Eles protegem a mucosa."]
    ],
    relampago: [
      {
        p: "Qual fator do H. pylori vacuoliza a célula epitelial e leva à apoptose?",
        o: ["VacA", "CagA", "Urease", "Flagelos"],
        a: 0,
        x: "VacA = vacuolizante. CagA aumenta inflamação e risco de câncer; urease protege a bactéria do ácido."
      },
      {
        p: "Úlcera gástrica com H. pylori positivo. Tratamento:",
        o: ["IBP + amoxicilina + claritromicina", "Anti-H2 + ampicilina + gentamicina", "Só antiácido", "Só sucralfato"],
        a: 0,
        x: "Erradicar o H. pylori cicatriza a úlcera e reduz muito a recidiva."
      },
      {
        p: "Por que o IBP é mais eficaz que o anti-H2?",
        o: ["Bloqueia a bomba de prótons, via final de qualquer estímulo", "Neutraliza o ácido já formado", "Aumenta a produção de muco", "Mata o H. pylori sozinho"],
        a: 0,
        x: "O anti-H2 bloqueia só o estímulo da histamina. O IBP bloqueia a bomba que todos os estímulos usam."
      }
    ],
    bula: "Agressores × defesas. AINE tira a prostaglandina (COX-1). H. pylori: urease sobrevive, VacA mata a célula, CagA inflama. Úlcera com H. pylori: IBP + amoxicilina + claritromicina."
  },
  {
    id: "alergia",
    n: 3,
    cor: "#e06b9a",
    titulo: "Alergias e intolerâncias alimentares",
    sub: "Imunidade × enzima",
    busca: {
      t: ["alergia", "intestino", "diarreiaped"],
      re: "alerg|lactose|lactase|anafil|APLV|IgE|hipersensibilidade",
      fora: ["INT-2021.1-27", "INT-2023.2-05", "INT-2025.2-23"]
    },
    questoes: [],
    gancho: {
      caso: "Menino de 8 anos come amendoim. Em 10 minutos: urticária no corpo todo, lábios inchados, chiado no peito e PA baixa.",
      p: "Primeira medida?",
      o: ["Adrenalina intramuscular na coxa", "Anti-histamínico oral e observar", "Corticoide venoso isolado", "Pedir IgE específica antes de tratar"],
      a: 0
    },
    ideia: "**Alergia** é o **sistema imune** reagindo a uma proteína do alimento. Pouquinho já basta, e pode matar (anafilaxia).\n**Intolerância** é **falta de enzima**: a lactose não digerida fermenta no intestino. Não envolve imunidade, depende da **quantidade** e não mata.",
    mapa: [
      {
        tabela: {
          titulo: "Alergia × intolerância à lactose",
          cols: ["", "Alergia alimentar", "Intolerância à lactose"],
          rows: [
            ["Mecanismo", "**Imune**: IgE (tipo I, minutos) ou não IgE (horas a dias)", "**Falta de lactase** (primária, ou secundária a gastroenterite e celíaca)"],
            ["Quantidade", "Traços já desencadeiam", "Depende da dose"],
            ["Sintomas", "Urticária, angioedema, vômitos, chiado, **anafilaxia**. Lactente com APLV: sangue nas fezes, baixo ganho de peso", "Distensão, gases, cólica, **diarreia aquosa ácida**, assadura perianal"],
            ["Exames", "IgE específica, teste cutâneo; **provocação oral** é o padrão-ouro", "**Teste do H₂ expirado** (alta ≥ 20 ppm); teste de tolerância (glicemia sobe < 20 mg/dL)"],
            ["Conduta", "Excluir o alimento; anafilaxia → **adrenalina IM**", "Reduzir lactose, produtos sem lactose ou lactase"]
          ]
        }
      },
      {
        lista: {
          titulo: "Anafilaxia",
          itens: ["Pele ou mucosa + respiração difícil ou PA baixa, minutos depois do alérgeno", "Mecanismo: alérgeno liga na **IgE presa a mastócitos e basófilos** → histamina (hipersensibilidade tipo I, resposta adaptativa já sensibilizada)", "**Adrenalina IM** no vasto lateral da coxa, 0,01 mg/kg (máximo 0,5 mg); repetir em 5–15 min se precisar", "Depois: deitar, oxigênio, volume. Anti-histamínico e corticoide são só **adjuvantes**", "Observar algumas horas: pode voltar (reação bifásica)"]
        }
      },
      {
        lista: {
          titulo: "Alergia à proteína do leite de vaca (APLV)",
          itens: ["Mamando no peito: **manter o aleitamento** e a mãe tira leite e derivados da dieta", "Em fórmula: **fórmula extensamente hidrolisada** (ou de aminoácidos)", "Fórmula **sem lactose** ou leite de cabra **não servem**: o problema é a proteína", "Alimentos que mais causam alergia: leite, ovo, soja, trigo, amendoim, castanhas, peixe e frutos do mar"]
        }
      }
    ],
    gatilhos: [
      ["Urticária + chiado ou hipotensão logo após comer", "Anafilaxia → adrenalina IM"],
      ["Gases e diarreia sempre após laticínios, sem pele nem pulmão", "Intolerância à lactose"],
      ["Diarreia ao voltar ao leite depois de uma gastroenterite", "Intolerância secundária (lactase caiu)"],
      ["Lactente com sangue nas fezes e baixo ganho de peso", "APLV"],
      ["Teste do H₂ positivo e IgE específicas negativas", "Intolerância, não alergia"]
    ],
    pegadinhas: [
      ["A intolerância à lactose é uma reação imunológica.", "É falta de enzima, sem imunidade."],
      ["Na APLV, basta trocar por fórmula sem lactose.", "O problema é a proteína: fórmula extensamente hidrolisada."],
      ["Na anafilaxia, o anti-histamínico é a primeira linha.", "A primeira linha é adrenalina IM."],
      ["IgE total confirma a alergia alimentar.", "Usa-se IgE específica; o padrão-ouro é a provocação oral."],
      ["Gestante com alergia deve cortar alimentos alergênicos para prevenir alergia no bebê.", "Não é recomendado."]
    ],
    relampago: [
      {
        p: "Teste do H₂ expirado positivo e IgE específicas para proteínas do leite negativas. Diagnóstico:",
        o: ["Intolerância à lactose", "Alergia à proteína do leite", "Doença celíaca", "Anafilaxia"],
        a: 0,
        x: "O H₂ vem da fermentação da lactose não absorvida pelas bactérias do cólon."
      },
      {
        p: "Lactente em aleitamento exclusivo com APLV (sangue nas fezes). Conduta:",
        o: ["Manter o peito; a mãe exclui leite de vaca e derivados", "Suspender o peito e dar fórmula sem lactose", "Trocar por leite de cabra", "Dar fórmula de soja desde o nascimento"],
        a: 0,
        x: "O leite materno continua sendo o melhor; a proteína do leite de vaca passa pela dieta da mãe."
      },
      {
        p: "Mecanismo da anafilaxia alimentar:",
        o: ["Alérgeno liga à IgE de mastócitos e basófilos e libera histamina", "Falta de enzima digestiva", "Toxina bacteriana no alimento", "Imunocomplexos no rim"],
        a: 0,
        x: "Hipersensibilidade tipo I: precisa de sensibilização prévia."
      }
    ],
    bula: "Alergia = imunidade (IgE, traços bastam, pode matar: adrenalina IM). Intolerância = falta de lactase (dose-dependente, H₂ expirado). APLV: manter o peito, fórmula extensamente hidrolisada."
  },
  {
    id: "dii",
    n: 4,
    cor: "#26a3b2",
    titulo: "Doenças inflamatórias intestinais e SII",
    sub: "Crohn × retocolite × intestino irritável",
    busca: {
      t: ["intestino", "colon"],
      re: "Crohn|colite|retocolite|ulcerativa|inflamatória intestinal|irritável|SII|Roma",
      fora: ["INT-2021.1-27", "INT-2022.1-34", "INT-2023.1-34", "INT-2024.2-38"]
    },
    questoes: ["SOI-2023.1-07", "SOI-2024.1-14", "SOI-2024.2-09", "SOI-2023.1-10", "SOI-2024.2-12", "SOI-2025.2-08"],
    gancho: {
      caso: "Mulher, 24 anos, diarreia sem sangue há 2 anos, perda de peso, fístula perianal e um episódio de obstrução intestinal. A mãe teve o mesmo quadro.",
      p: "Diagnóstico?",
      o: ["Doença de Crohn", "Retocolite ulcerativa", "Enterocolite infecciosa", "Diverticulose"],
      a: 0
    },
    ideia: "**Crohn** é **profundo e salteado**: atravessa a parede inteira (**transmural**, com granulomas) e pode estar **da boca ao ânus**. Por isso dá fístula, estenose e doença perianal.\n**Retocolite** é **rasa e contínua**: só a **mucosa**, começa no **reto** e sobe pelo cólon. Por isso dá **sangue** nas fezes.\n**SII** não tem lesão nenhuma: é um intestino **sensível e desregulado**. Dor que melhora ao evacuar, **sem sinais de alarme**.",
    mapa: [
      {
        tabela: {
          titulo: "Crohn × retocolite",
          cols: ["", "Crohn", "Retocolite"],
          rows: [
            ["Onde", "Boca ao ânus (clássico: **íleo terminal**), salteado", "Só cólon e reto, **contínuo a partir do reto**"],
            ["Profundidade", "**Transmural**, granulomas", "Só **mucosa**"],
            ["Fezes", "Diarreia, dor em fossa ilíaca direita; sangue menos comum", "**Diarreia com sangue**, urgência, tenesmo"],
            ["Complicações", "**Fístulas**, estenose e obstrução, abscesso, doença perianal, má absorção", "Megacólon tóxico, hemorragia, pseudopólipos, câncer"],
            ["Endoscopia", "Úlceras salteadas, pedra de calçamento", "Mucosa friável, úlceras rasas contínuas"],
            ["Cigarro", "Piora", "Parece proteger"]
          ]
        }
      },
      {
        lista: {
          titulo: "Diagnóstico e tratamento da DII",
          itens: ["Confirma com **colonoscopia com biópsia** (com íleo terminal)", "**Calprotectina fecal** alta = inflamação (ajuda a separar DII de SII)", "Leve (sobretudo retocolite): **mesalazina** (5-ASA)", "**Corticoide só nas crises**, nunca para manter", "Manter remissão: azatioprina, **metotrexato**, biológicos (anti-TNF)"]
        }
      },
      {
        tabela: {
          titulo: "Síndrome do intestino irritável",
          cols: ["Item", "O que saber"],
          rows: [
            ["Roma IV", "Dor abdominal recorrente, **≥ 1 dia/semana nos últimos 3 meses**, com 2 de 3: ligada à evacuação, mudança na frequência, mudança na forma das fezes"],
            ["Subtipos", "SII-C (constipação), SII-D (diarreia), SII-M (misto)"],
            ["Sinais de alarme", "Sangue, perda de peso, anemia, febre, sintomas noturnos, início > 45–50 anos, história familiar de câncer colorretal ou DII → **colonoscopia**"],
            ["Tratamento", "Explicar e acolher, dieta pobre em FODMAP, fibra solúvel (constipação), antiespasmódico (dor), loperamida (diarreia), manejo do estresse, antidepressivo em baixa dose"]
          ]
        }
      }
    ],
    gatilhos: [
      ["Fístula, doença perianal ou obstrução em jovem", "Crohn"],
      ["Diarreia com sangue começando no reto", "Retocolite"],
      ["Granuloma na biópsia", "Crohn"],
      ["Dor que alivia ao evacuar + hábito alternado + exames normais", "SII"],
      ["Dor abdominal com sangue, anemia ou perda de peso", "Não é SII: investigar com colonoscopia"]
    ],
    pegadinhas: [
      ["A retocolite é limitada ao reto.", "Começa no reto e pode subir pelo cólon inteiro."],
      ["O Crohn só acomete o íleo.", "Pode estar da boca ao ânus; o íleo terminal é só o local clássico."],
      ["Corticoide serve para manter a DII em remissão.", "Só para crises. Manutenção é com imunossupressor ou biológico."],
      ["SII pode causar sangue nas fezes e perda de peso.", "Isso é sinal de alarme: pensar em DII ou câncer."]
    ],
    relampago: [
      {
        p: "Qual achado sugere Crohn e não retocolite?",
        o: ["Fístula perianal", "Sangue nas fezes", "Acometimento contínuo a partir do reto", "Pseudopólipos"],
        a: 0,
        x: "Inflamação transmural fura a parede: fístulas e doença perianal são do Crohn."
      },
      {
        p: "Mulher, 28 anos: dor abdominal que melhora ao evacuar, alterna diarreia e constipação há 1 ano. Sem sangue, sem perda de peso, exames normais.",
        o: ["Síndrome do intestino irritável", "Doença de Crohn", "Câncer colorretal", "Doença celíaca"],
        a: 0,
        x: "Critérios de Roma sem sinais de alarme = SII."
      },
      {
        p: "Exame que confirma o diagnóstico de doença de Crohn:",
        o: ["Colonoscopia com biópsia", "Calprotectina fecal", "Parasitológico de fezes", "Raio X de abdome"],
        a: 0,
        x: "A calprotectina mostra inflamação, mas quem confirma é a colonoscopia com biópsia."
      }
    ],
    bula: "Crohn: fundo, salteado, fístula. Retocolite: rasa, contínua, sangue, começa no reto. SII: dor que alivia ao evacuar, sem alarme. Corticoide só na crise."
  },
  {
    id: "vermes",
    n: 5,
    cor: "#7b6bd6",
    titulo: "Helmintíases intestinais",
    sub: "Oxiúro, áscaris, estrongiloides, ancilóstomo",
    busca: {
      t: ["parasitoses"],
      re: "Ascaris|ascar|Enterobius|oxiur|enterob|Strongyloides|estrongil|Ancylostoma|ancilost|Necator|Trichuris|tricur|albendazol|mebendazol|ivermectina",
      fora: ["INT-2026.1-32"]
    },
    questoes: ["SOI-2023.1-01", "SOI-2024.1-01", "SOI-2024.1-05", "SOI-2024.2-08", "SOI-2024.2-11", "SOI-2025.2-07", "SOI-2025.2-15"],
    gancho: {
      caso: "Criança de 7 anos, prurido anal intenso à noite, irritada. No exame, vermes finos e brancos na região perianal.",
      p: "Parasita e tratamento?",
      o: ["Enterobius · albendazol", "Ascaris · praziquantel", "Strongyloides · metronidazol", "Taenia · ivermectina"],
      a: 0
    },
    ideia: "Para acertar verme, pergunte **como entra** e **o que faz no caminho**.\n**Ovo engolido**: oxiúro, áscaris, tricúris.\n**Larva pela pele** (andar descalço): estrongiloides e ancilóstomo.\nQuem passa pelo **pulmão** (áscaris, estrongiloides, ancilóstomo) dá tosse e eosinofilia (síndrome de Loeffler).",
    mapa: [
      {
        tabela: {
          titulo: "Os que caem",
          cols: ["Verme", "Entra por", "Marca de prova", "Tratamento"],
          rows: [
            ["Enterobius (oxiúro)", "Ovo (mão-boca, roupas)", "**Prurido anal noturno**; adulto no ceco; fêmea põe ovos no períneo; autoinfecção", "Albendazol"],
            ["Ascaris", "Ovo embrionado", "**Passa pelo pulmão** (Loeffler), sobe, é engolido e vira adulto no delgado; pode obstruir", "Albendazol ou mebendazol"],
            ["Strongyloides", "**Larva pela pele**", "**Autoinfecção**; hiperinfecção no imunossuprimido (corticoide, HTLV-1)", "**Ivermectina**"],
            ["Ancilóstomo (Necator)", "**Larva pela pele**", "Adulto suga sangue no duodeno → **anemia ferropriva**, eosinofilia; ovos de casca fina", "Albendazol + ferro"],
            ["Trichuris", "Ovo", "Disenteria e **prolapso retal** em criança", "Albendazol"]
          ]
        }
      },
      {
        tabela: {
          titulo: "Como os remédios agem",
          cols: ["Fármaco", "Mecanismo"],
          rows: [
            ["Albendazol / mebendazol", "Inibe a **polimerização da tubulina** → o verme não capta glicose"],
            ["Ivermectina", "Abre **canais de cloro** → paralisia do verme"],
            ["Pamoato de pirantel", "Bloqueio neuromuscular → paralisia espástica"]
          ]
        }
      }
    ],
    gatilhos: [
      ["Prurido anal noturno em criança", "Enterobíase (fita adesiva perianal)"],
      ["Tosse + eosinofilia + verme intestinal", "Fase pulmonar: áscaris, estrongiloides, ancilóstomo"],
      ["Imunossuprimido, corticoide ou HTLV-1 + verme", "Estrongiloidíase: risco de hiperinfecção"],
      ["Anemia ferropriva + eosinofilia em área rural", "Ancilostomíase"],
      ["Andar descalço em solo contaminado", "Larva pela pele: estrongiloides, ancilóstomo"]
    ],
    pegadinhas: [
      ["Albendazol é a primeira escolha na estrongiloidíase.", "Ivermectina."],
      ["A larva filarioide do estrongiloides é engolida e vai direto ao intestino.", "Penetra pela pele e passa pelo pulmão."],
      ["No imunossuprimido não precisa repetir a ivermectina.", "Repete-se 2 semanas depois."],
      ["O mebendazol paralisa a musculatura do verme.", "Inibe a tubulina e corta a glicose."],
      ["O ancilóstomo deposita ovos na região perianal.", "Quem faz isso é o oxiúro."]
    ],
    relampago: [
      {
        p: "Primeira escolha na estrongiloidíase:",
        o: ["Ivermectina", "Albendazol", "Metronidazol", "Praziquantel"],
        a: 0,
        x: "Ivermectina é mais efetiva; trata até assintomáticos pelo risco de hiperinfecção."
      },
      {
        p: "Trabalhador rural descalço, cansado, pálido, com anemia microcítica e eosinofilia:",
        o: ["Ancilostomíase", "Enterobíase", "Giardíase", "Teníase"],
        a: 0,
        x: "O ancilóstomo suga sangue no duodeno: anemia ferropriva."
      },
      {
        p: "Por que o áscaris pode causar tosse e eosinofilia?",
        o: ["As larvas passam pelo pulmão antes de virar adultas", "Os ovos são inalados", "O adulto vive no brônquio", "Uma toxina do verme irrita a traqueia"],
        a: 0,
        x: "Ciclo: ovo → larva no delgado → sangue → pulmão → sobe e é engolida → adulto no delgado."
      }
    ],
    bula: "Oxiúro coça à noite. Áscaris passa pelo pulmão. Estrongiloides entra pela pele e é grave no imunossuprimido: ivermectina. Ancilóstomo dá anemia. \"Bendazol\" = tubulina."
  },
  {
    id: "esquisto",
    n: 6,
    cor: "#5b8f3a",
    titulo: "Esquistossomose e teníase",
    sub: "Caramujo, cercária, carne crua",
    busca: {t:["parasitoses"], re:"Schisto|esquist|mansoni|Taenia|tênia|teníase|cisticerc|caramujo|praziquantel", fora:["INT-2026.1-32", "INT-2026.1-35"]},
    questoes: [],
    gancho: {
      caso: "Agricultor que toma banho em lagoa com caramujos. Diarreia crônica intermitente, fígado e baço aumentados, eosinofilia.",
      p: "Agente e exame de escolha?",
      o: ["Schistosoma mansoni · Kato-Katz", "Taenia solium · tamisação", "Ascaris · Baermann", "Strongyloides · hemograma"],
      a: 0
    },
    ideia: "**Esquistossomose**: a **cercária fura a pele** na água doce (o caramujo **Biomphalaria** é o hospedeiro intermediário). O verme adulto vive nas **veias mesentéricas**. O estrago vem dos **ovos** presos no fígado: granuloma → fibrose → **hipertensão portal** com o fígado ainda funcionando.\n**Teníase**: comer **carne crua** com cisticerco → verme adulto (solitária) no intestino.\n**Cisticercose**: engolir **ovos** de *T. solium* → cisticercos no **cérebro**.",
    mapa: [
      {
        fluxo: {
          titulo: "Ciclo do Schistosoma mansoni",
          passos: ["Ovos nas fezes chegam à água doce → **miracídio**", "Miracídio entra no caramujo **Biomphalaria** → vira **cercária**", "Cercária **penetra a pele** (coceira: dermatite cercariana)", "Passa pelo pulmão e chega ao sistema porta", "Casal adulto vive nas **veias mesentéricas** e põe ovos", "Ovos saem nas fezes ou ficam presos no fígado → **granuloma e fibrose periportal**"]
        }
      },
      {
        tabela: {
          titulo: "Formas da esquistossomose",
          cols: ["Forma", "O que aparece"],
          rows: [
            ["Aguda (Katayama)", "Febre, eosinofilia, dor abdominal, hepatoesplenomegalia semanas após o banho"],
            ["Intestinal", "Diarreia crônica intermitente, dor"],
            ["Hepatoesplênica", "**Fibrose de Symmers**, hipertensão portal **pré-sinusoidal**, varizes, baço grande; **função hepática preservada**"],
            ["Diagnóstico e tratamento", "**Kato-Katz** (ovo com **espículo lateral**), biópsia retal · **praziquantel**"]
          ]
        }
      },
      {
        tabela: {
          titulo: "T. solium × T. saginata",
          cols: ["", "T. solium", "T. saginata"],
          rows: [
            ["Carne", "**Porco**", "**Boi**"],
            ["Cisticercose humana", "**Sim** (engolindo ovos)", "Não"],
            ["Escólex", "Armado (ganchos)", "Inerme (sem ganchos)"],
            ["Proglotes", "Saem passivas com as fezes", "**Móveis**, saem sozinhas"],
            ["Tratamento", "Teníase: praziquantel ou albendazol. Neurocisticercose: albendazol + corticoide", "Praziquantel ou albendazol"]
          ]
        }
      }
    ],
    gatilhos: [
      ["Banho em lagoa com caramujo + eosinofilia", "Esquistossomose"],
      ["Ovo com espículo lateral", "Schistosoma mansoni (Kato-Katz)"],
      ["Baço grande, varizes, fígado funcionando", "Esquistossomose hepatoesplênica"],
      ["Segmentos brancos móveis nas fezes + carne de boi malpassada", "Teníase por T. saginata"],
      ["Convulsão + calcificações cerebrais em área rural", "Neurocisticercose (ovos de T. solium)"]
    ],
    pegadinhas: [
      ["Pega-se esquistossomose bebendo água contaminada.", "A cercária penetra a pele."],
      ["Os vermes adultos do S. mansoni migram direto para o intestino grosso.", "Vivem nas veias mesentéricas (sistema porta)."],
      ["Na forma hepatoesplênica, a função do fígado cai cedo.", "Fica preservada: a obstrução é pré-sinusoidal."],
      ["Cisticercose vem de comer carne de porco.", "Vem de engolir ovos (fecal-oral). Carne malpassada dá teníase."],
      ["Porco é hospedeiro da T. saginata.", "Porco → solium; boi → saginata."]
    ],
    relampago: [
      {
        p: "Hospedeiro intermediário do Schistosoma mansoni:",
        o: ["Caramujo Biomphalaria", "Porco", "Mosquito", "Boi"],
        a: 0,
        x: "O ciclo alterna fase assexuada no caramujo e sexuada no ser humano."
      },
      {
        p: "Tratamento da esquistossomose:",
        o: ["Praziquantel", "Ivermectina", "Metronidazol", "Albendazol isolado"],
        a: 0,
        x: "Praziquantel aumenta a permeabilidade ao cálcio e paralisa o verme."
      },
      {
        p: "Como se adquire a neurocisticercose?",
        o: ["Engolindo ovos de Taenia solium", "Comendo carne de boi malpassada", "Pela pele, em água doce", "Por picada de inseto"],
        a: 0,
        x: "O ser humano vira hospedeiro intermediário: os ovos viram cisticercos nos tecidos."
      }
    ],
    bula: "Esquisto: cercária fura a pele, adulto nas veias mesentéricas, ovo no fígado faz fibrose e hipertensão portal com fígado funcionando. Kato-Katz e praziquantel. Carne crua = teníase; ovo engolido = cisticercose."
  },
  {
    id: "protozoarios",
    n: 7,
    cor: "#38a37a",
    titulo: "Giardíase × amebíase",
    sub: "Cisto, fecal-oral, metronidazol",
    busca: {t:["parasitoses", "intestino", "diarreiaped"], re:"Giardia|giard|Entamoeba|ameb|protozo", fora:["INT-2025.2-23"]},
    questoes: ["SOI-2022.2-01", "SOI-2023.1-15", "SOI-2024.1-03", "SOI-2024.1-04", "SOI-2024.2-02", "SOI-2025.2-06", "SOI-2025.2-10"],
    gancho: {
      caso: "Criança de 5 anos, de creche, com diarreia aquosa, distensão e cólicas há 5 semanas. Sem sangue e sem febre. Metade da turma está igual.",
      p: "Forma infectante e tratamento?",
      o: ["Cisto · metronidazol", "Ovo · albendazol", "Larva pela pele · ivermectina", "Trofozoíto · ciprofloxacino"],
      a: 0
    },
    ideia: "Os dois protozoários **entram como cisto** pela via **fecal-oral** (água, alimento, mãos) e **saem com metronidazol**.\nA diferença é **onde moram**.\nA **giárdia** forra o **intestino delgado** e atrapalha a absorção: diarreia **gordurosa, sem sangue**.\nA **ameba** invade o **cólon**: diarreia **com muco e sangue**, e pode chegar ao fígado.",
    mapa: [
      {
        tabela: {
          titulo: "Lado a lado",
          cols: ["", "Giardíase", "Amebíase"],
          rows: [
            ["Agente", "Giardia lamblia (intestinalis)", "Entamoeba histolytica"],
            ["Infecta por", "**Cisto**, fecal-oral", "**Cisto**, fecal-oral"],
            ["Onde vive", "**Delgado**, aderida à mucosa", "**Cólon**, invade a parede"],
            ["Diarreia", "Aquosa ou gordurosa, má absorção; muitas vezes **crônica** (> 4 semanas)", "**Disenteria**: muco e sangue, dor, febre"],
            ["Mecanismo", "Atrofia e desnudamento das vilosidades → diarreia **osmótica/disabsortiva**", "Úlceras no cólon; pode formar abscesso hepático"],
            ["Tratamento", "**Metronidazol** ou tinidazol", "**Metronidazol** (oral ou IV)"],
            ["Prevenção", "**Ferver ou filtrar** a água (a cloração comum não basta)", "Saneamento, água tratada, higiene das mãos"]
          ]
        }
      },
      {
        fluxo: {
          titulo: "Ciclo direto (sem vetor, sem hospedeiro intermediário)",
          passos: ["Cisto ingerido com água, alimento ou mãos sujas", "No intestino o cisto se abre → **trofozoíto** se multiplica", "Trofozoíto vira cisto de novo e sai nas fezes", "Fezes contaminam água e alimento → novo ciclo"]
        }
      },
      {
        lista: {
          titulo: "Metronidazol",
          itens: ["Entra no protozoário e gera **radicais livres que lesam o DNA**", "Serve para giárdia, ameba e tricomonas", "Evitar álcool durante o uso"]
        }
      }
    ],
    gatilhos: [
      ["Creche + diarreia aquosa persistente, sem sangue", "Giardíase"],
      ["Diarreia por giárdia há mais de 4 semanas", "Classificação temporal: crônica"],
      ["Má absorção de gordura com vilosidades lesadas", "Diarreia osmótica/disabsortiva da giárdia"],
      ["Diarreia com muco e sangue + perda de peso", "Amebíase (colite amebiana)"],
      ["Surto pela água da cidade", "Giárdia: ferver ou filtrar"]
    ],
    pegadinhas: [
      ["A forma infectante da giárdia é o trofozoíto (ou o ovo).", "É o cisto."],
      ["A giárdia vive no intestino grosso e tem vetor ou hospedeiro intermediário.", "Vive no delgado; ciclo direto, sem vetor."],
      ["Albendazol ou ivermectina são a primeira linha na giardíase.", "Metronidazol ou tinidazol."],
      ["Amebíase se trata com ciprofloxacino.", "Metronidazol."],
      ["A maioria dos infectados por E. histolytica tem sintomas.", "A maioria fica assintomática."],
      ["A giárdia causa diarreia secretora por toxina.", "Causa diarreia osmótica/disabsortiva por lesão das vilosidades."]
    ],
    relampago: [
      {
        p: "Depois de beber água não tratada em viagem: diarreia persistente e distensão. Fezes com cistos e trofozoítos. Tratamento:",
        o: ["Metronidazol", "Albendazol", "Ivermectina", "Ciprofloxacino"],
        a: 0,
        x: "Cistos e trofozoítos = protozoário (giárdia). Albendazol e ivermectina são para vermes."
      },
      {
        p: "Mecanismo de ação do metronidazol:",
        o: ["Gera radicais livres que lesam o DNA do protozoário", "Inibe a polimerização da tubulina", "Abre canais de cloro e paralisa", "Inibe a síntese da parede celular"],
        a: 0,
        x: "Tubulina é o albendazol; canais de cloro, a ivermectina."
      },
      {
        p: "Diarreia com muco, febre, dor e emagrecimento; parasitológico com E. histolytica. Como foi a infecção?",
        o: ["Ingestão de cistos (água, alimento ou mãos)", "Larva penetrando a pele", "Picada de inseto", "Carne malcozida"],
        a: 0,
        x: "Ameba e giárdia: cisto engolido, via fecal-oral."
      }
    ],
    bula: "O cisto entra pela boca, o metronidazol resolve. Giárdia = delgado, gordura, sem sangue. Ameba = cólon, muco e sangue."
  },
  {
    id: "diarreias",
    n: 8,
    cor: "#3a8fb0",
    titulo: "Diarreias agudas e crônicas",
    sub: "Tempo, mecanismo e hidratação",
    busca: {
      t: ["intestino", "diarreiaped"],
      re: "diarr|desidrat|reidrat|SRO|plano [ABC]|osmótica|secret|celíaca|rotav|hemolítico-urêmica",
      nao: "Crohn|colite ulcerativa|retocolite"
    },
    questoes: [],
    gancho: {
      caso: "Criança de 2 anos, diarreia aquosa há 2 dias. Irritada, olhos fundos, bebe com sede, a prega da pele desaparece lentamente.",
      p: "Conduta?",
      o: ["Plano B: soro de reidratação oral na unidade e reavaliar", "Plano A: hidratação em casa", "Plano C: hidratação venosa", "Antibiótico oral"],
      a: 0
    },
    ideia: "Diante de diarreia, faça **duas perguntas**.\n**Há quanto tempo?** Aguda (até 14 dias), persistente (≥ 14 dias) ou **crônica (> 4 semanas)**.\n**Qual o mecanismo?** Osmótica, secretória, inflamatória, disabsortiva ou motora.\nNa criança, o que mata é a **desidratação**: o tratamento é **reidratar** (planos A, B e C).",
    mapa: [
      {
        tabela: {
          titulo: "Por tempo",
          cols: ["Tipo", "O que saber"],
          rows: [
            ["Aguda (até 14 dias)", "Quase sempre **infecciosa** (rotavírus é o vírus mais comum na criança); autolimitada; **não precisa de exames**"],
            ["Persistente (≥ 14 dias)", "Risco de desnutrição; pensar em intolerância secundária à lactose"],
            ["Crônica (> 4 semanas)", "Investigar: **celíaca**, DII, intolerância, parasitas, SII, pâncreas"]
          ]
        }
      },
      {
        tabela: {
          titulo: "Por mecanismo",
          cols: ["Tipo", "Mecanismo", "Exemplos"],
          rows: [
            ["Osmótica", "Soluto não absorvido puxa água; **para com jejum**", "Deficiência de lactase, laxativo osmótico, vírus que lesam a borda em escova"],
            ["Secretória", "Toxina faz secretar cloro e água; **continua em jejum**", "Cólera, E. coli enterotoxigênica"],
            ["Inflamatória (invasiva)", "Lesão da mucosa: muco, sangue, febre", "Shigella, Salmonella, ameba, DII"],
            ["Disabsortiva", "Má absorção de gordura (**esteatorreia**)", "Celíaca, Crohn, giárdia, pâncreas"],
            ["Motora", "Trânsito rápido", "SII, hipertireoidismo"]
          ]
        }
      },
      {
        tabela: {
          titulo: "Planos de hidratação (Ministério da Saúde)",
          cols: ["Plano", "Quando", "O que fazer"],
          rows: [
            ["A", "**Sem desidratação**: alerta, lágrimas, bebe normal", "Em casa: mais líquidos, SRO após cada evacuação, **manter a alimentação**, zinco, sinais de perigo"],
            ["B", "**Com desidratação**: irritado, olhos fundos, sede, prega some lentamente", "**SRO na unidade** (50–100 mL/kg em 4 h) e reavaliar"],
            ["C", "**Grave**: letárgico, não consegue beber, prega some muito lentamente, pulso fraco", "**Hidratação venosa** imediata"]
          ]
        }
      },
      {
        lista: {
          titulo: "Situações especiais",
          itens: ["Diarreia com sangue e depois **anemia hemolítica + plaquetas baixas + insuficiência renal** = **síndrome hemolítico-urêmica** (E. coli produtora de toxina Shiga)", "Antibiótico só em casos selecionados: disenteria com comprometimento, cólera grave", "Celíaca: **antitransglutaminase IgA**. Não tirar o glúten antes dos exames"]
        }
      }
    ],
    gatilhos: [
      ["Olhos fundos, sede, prega some lentamente", "Plano B"],
      ["Letargia, não bebe, pulso fraco", "Plano C"],
      ["Diarreia que para com jejum", "Osmótica"],
      ["Diarreia que continua em jejum", "Secretória"],
      ["Diarreia com sangue → anemia, plaquetopenia, rim parando", "Síndrome hemolítico-urêmica"],
      ["Diarreia crônica + baixo peso + antitransglutaminase positivo", "Doença celíaca"]
    ],
    pegadinhas: [
      ["Diarreia secretória é soluto osmótico na luz do intestino.", "Essa é a osmótica. A secretória é toxina e íons."],
      ["Diarreia aguda precisa de exames e antibiótico.", "É autolimitada: reidratar."],
      ["Deve-se suspender a alimentação na diarreia.", "Manter a alimentação."],
      ["Na celíaca, tirar o glúten antes de colher os exames.", "Manter o glúten até a sorologia e a biópsia."],
      ["O marcador da doença celíaca é a IgE total.", "Antitransglutaminase IgA e antiendomísio."]
    ],
    relampago: [
      {
        p: "Criança com diarreia, alerta, chora com lágrimas, bebe normalmente, pulso cheio. Conduta:",
        o: ["Plano A, em casa", "Plano B na unidade", "Plano C venoso", "Internar para exames"],
        a: 0,
        x: "Sem sinais de desidratação = plano A, mantendo a alimentação."
      },
      {
        p: "Diarreia crônica é a que dura mais de:",
        o: ["4 semanas", "3 dias", "7 dias", "14 dias"],
        a: 0,
        x: "Até 14 dias é aguda; de 14 a 30, persistente; mais de 4 semanas, crônica."
      },
      {
        p: "Característica típica da diarreia osmótica:",
        o: ["Melhora com jejum", "Persiste em jejum", "Tem sangue e febre", "Causada por toxina da cólera"],
        a: 0,
        x: "Sem comer, some o soluto que puxava água."
      }
    ],
    bula: "Tempo: aguda até 14 dias, crônica > 4 semanas. Mecanismo: osmótica para no jejum; secretória não. Na criança, o tratamento é reidratar: A em casa, B com SRO na unidade, C na veia."
  },
  {
    id: "colorretal",
    n: 9,
    cor: "#c4534a",
    titulo: "Pólipos e câncer de cólon",
    sub: "Adenoma → carcinoma, PAF × Lynch",
    busca: {t:["colon", "geral"], re:"pólipo|polipo|adenoma|colorretal|cólon|colon|colonosc|APC|Lynch|polipose|sangue oculto|PSOF|carcinoma invasivo"},
    questoes: ["SOI-2024.1-12", "SOI-2024.2-04", "SOI-2025.2-09", "SOI-2025.2-13"],
    gancho: {
      caso: "Jovem de 21 anos com centenas de pólipos adenomatosos no cólon. O pai teve câncer de cólon aos 40.",
      p: "Síndrome e gene?",
      o: ["PAF · APC", "Lynch · APC", "Peutz-Jeghers · genes de reparo", "Lynch · genes de reparo"],
      a: 0
    },
    ideia: "Câncer colorretal é **adenoma que vira carcinoma** por acúmulo de mutações (**APC → KRAS → TP53**).\nAs duas síndromes hereditárias são dois atalhos.\n**PAF** = **centenas de pólipos** (gene **APC**).\n**Lynch** = **poucos pólipos**, mas o **DNA não se conserta** (genes de reparo → **instabilidade de microssatélites**).",
    mapa: [
      {
        tabela: {
          titulo: "Tipos de pólipo",
          cols: ["Pólipo", "Risco de câncer"],
          rows: [
            ["Hiperplásico", "Praticamente nenhum"],
            ["**Adenoma** (tubular < tubuloviloso < viloso)", "**É o precursor.** Risco maior se > 1 cm, componente viloso ou displasia de alto grau"],
            ["Serrilhado séssil", "Também pode virar câncer"],
            ["Hamartomatoso (juvenil, Peutz-Jeghers)", "Baixo isolado; maior nas síndromes"],
            ["Inflamatório (pseudopólipo)", "Marca de DII, não é neoplasia"]
          ]
        }
      },
      {
        fluxo: {
          titulo: "Sequência adenoma → carcinoma",
          passos: ["Mucosa normal", "Perde o **APC** → adenoma pequeno", "Ativa o **KRAS** → adenoma maior", "Perde o **TP53** → **adenocarcinoma**", "Vira **invasivo** quando rompe a muscular da mucosa e invade a **submucosa**"]
        }
      },
      {
        tabela: {
          titulo: "PAF × Lynch",
          cols: ["", "PAF", "Lynch"],
          rows: [
            ["Gene", "**APC** (cromossomo 5q)", "**Reparo do DNA** (MLH1, MSH2, MSH6, PMS2)"],
            ["Pólipos", "**Centenas a milhares** de adenomas, desde jovem", "Poucos; câncer cedo, mais no **cólon direito**"],
            ["Risco", "Câncer quase **100%** sem cirurgia", "Também **endométrio**, ovário, estômago, vias urinárias"],
            ["Conduta", "**Colectomia profilática**", "Colonoscopia cedo e frequente"]
          ]
        }
      },
      {
        lista: {
          titulo: "Clínica e rastreamento",
          itens: ["Cólon **direito**: anemia ferropriva, massa, cansaço", "Cólon **esquerdo/reto**: mudança do hábito intestinal, fezes afiladas, sangue vivo, obstrução, tenesmo", "Rastreio a partir de **45–50 anos**: sangue oculto nas fezes anual ou colonoscopia a cada 10 anos", "**Sangue oculto positivo → colonoscopia** (não repetir o exame de fezes)", "Pólipo achado → **polipectomia** com histologia"]
        }
      }
    ],
    gatilhos: [
      ["Centenas de pólipos em jovem", "PAF → colectomia"],
      ["Câncer de cólon jovem + câncer de endométrio na família", "Lynch"],
      ["Idoso com anemia ferropriva sem causa", "Câncer de cólon direito até prova em contrário"],
      ["Sangue oculto nas fezes positivo", "Colonoscopia"],
      ["Pólipos hamartomatosos + manchas escuras nos lábios", "Peutz-Jeghers"]
    ],
    pegadinhas: [
      ["Lynch decorre de mutação no APC.", "APC é da PAF. Lynch = genes de reparo."],
      ["Pólipo hiperplásico é o principal precursor do câncer.", "O precursor é o adenoma."],
      ["Sangue oculto positivo: repetir o exame de fezes em 1 ano.", "Positivo pede colonoscopia."],
      ["Mutação em KIT e PDGFRA = adenocarcinoma de cólon.", "Isso é GIST."],
      ["Intestino irritável causa pólipos.", "É funcional, sem pólipos."]
    ],
    relampago: [
      {
        p: "Mulher de 38 anos, adenocarcinoma no cólon direito sem polipose. Mãe e irmã com câncer de endométrio.",
        o: ["Síndrome de Lynch", "PAF", "Peutz-Jeghers", "Intestino irritável"],
        a: 0,
        x: "Câncer jovem, poucos pólipos e endométrio na família = Lynch."
      },
      {
        p: "Qual pólipo é o principal precursor do câncer colorretal?",
        o: ["Adenoma", "Hiperplásico", "Inflamatório", "Hamartoma juvenil isolado"],
        a: 0,
        x: "Adenoma, sobretudo viloso, > 1 cm ou com displasia de alto grau."
      },
      {
        p: "Rastreio com sangue oculto nas fezes positivo. Próximo passo:",
        o: ["Colonoscopia", "Repetir o exame em 1 ano", "Tomografia de abdome", "Nada, se não tiver sintomas"],
        a: 0,
        x: "Sangue oculto positivo precisa achar a origem: colonoscopia."
      }
    ],
    bula: "Adenoma é o precursor (APC → KRAS → TP53). PAF: APC, mil pólipos, colectomia. Lynch: reparo quebrado, endométrio junto. Sangue oculto positivo = colonoscopia."
  },
  {
    id: "hepatites",
    n: 10,
    cor: "#e0a32e",
    titulo: "Marcadores das hepatites",
    sub: "Ler sorologia como frase",
    busca: {t:["hepatites"], re:"."},
    questoes: ["SOI-2022.2-06", "SOI-2023.1-13", "SOI-2024.2-01", "SOI-2025.2-03"],
    gancho: {
      caso: "Sorologia: HBsAg +, anti-HBc IgM +, HBeAg +, anti-HBs −, anti-HAV IgG +.",
      p: "Como ler?",
      o: ["Hepatite B aguda replicando; já teve hepatite A ou foi vacinado", "Hepatite B curada", "Só vacinado contra B", "Hepatite A aguda"],
      a: 0
    },
    ideia: "Leia a sorologia como uma frase.\n**Ag** (antígeno) = **o vírus está aí**. **Anti** = **o corpo respondeu**.\n**IgM** = **agora** (agudo). **IgG/total** = **já passou** ou vacina.\n**Anti-HBs** = **proteção** contra a B (cura ou vacina).",
    mapa: [
      {
        tabela: {
          titulo: "Cada marcador",
          cols: ["Marcador", "Significa"],
          rows: [
            ["HBsAg", "**Infecção pelo HBV**, aguda ou crônica. Primeiro a aparecer. Mais de 6 meses = crônica"],
            ["Anti-HBc IgM", "**Hepatite B aguda**"],
            ["Anti-HBc IgG (total)", "Já teve contato com o vírus (a vacina **não** gera)"],
            ["HBeAg", "**Replicação** viral, carga alta, muito contagioso"],
            ["Anti-HBs", "**Imunidade**: cura ou vacina"],
            ["Anti-HAV IgM", "Hepatite A aguda"],
            ["Anti-HAV IgG / total", "Já teve hepatite A ou foi vacinado"],
            ["Anti-HCV", "Contato com o vírus C; confirma infecção ativa com **HCV-RNA**"]
          ]
        }
      },
      {
        lista: {
          titulo: "Combinações que caem (hepatite B)",
          itens: ["HBsAg + e anti-HBc IgM + → **B aguda**", "HBsAg + por mais de 6 meses e anti-HBc IgG + → **B crônica**", "HBsAg −, anti-HBc IgG + e anti-HBs + → **B curada**", "Só anti-HBs + → **vacinado**", "HBsAg −, anti-HBs − e anti-HBc IgM + → **janela imunológica**"]
        }
      }
    ],
    gatilhos: [
      ["Anti-HBc IgM positivo", "Hepatite B aguda (não é hepatite medicamentosa)"],
      ["HBeAg positivo", "Vírus replicando"],
      ["Anti-HBs isolado", "Vacina"],
      ["HBsAg positivo", "Não está na janela imunológica"],
      ["Anti-HAV IgG positivo", "Passado ou vacina; nunca hepatite A crônica"]
    ],
    pegadinhas: [
      ["Anti-HBs é marcador de cronicidade da hepatite C.", "Anti-HBs é imunidade contra a hepatite B."],
      ["Anti-HBc IgM indica imunidade por vacina.", "Indica hepatite B aguda."],
      ["Anti-HBs identifica a fase aguda da B.", "A fase aguda é o anti-HBc IgM."],
      ["Anti-HCV IgG basta para confirmar hepatite C crônica.", "Precisa do HCV-RNA."],
      ["Existe hepatite A crônica.", "A hepatite A não cronifica."]
    ],
    relampago: [
      {
        p: "Vacinado contra hepatite B, nunca infectado. Perfil esperado:",
        o: ["Só anti-HBs positivo", "HBsAg positivo", "Anti-HBc IgG e anti-HBs positivos", "Anti-HBc IgM positivo"],
        a: 0,
        x: "A vacina é feita de HBsAg: gera só anti-HBs. Anti-HBc só aparece com o vírus de verdade."
      },
      {
        p: "Marcador de replicação e carga viral alta do HBV:",
        o: ["HBeAg", "Anti-HBs", "Anti-HBe", "Anti-HAV"],
        a: 0,
        x: "\"e\" de \"elevada replicação\". Quando vira anti-HBe, a replicação caiu."
      },
      {
        p: "Anti-HCV positivo. Para confirmar infecção ativa:",
        o: ["HCV-RNA", "Repetir o anti-HCV", "Anti-HBs", "Biópsia hepática"],
        a: 0,
        x: "O anticorpo fica positivo mesmo depois da cura. Quem confirma vírus circulando é o RNA."
      }
    ],
    bula: "Ag = vírus. IgM = agora. IgG = passado. Anti-HBs = proteção. HBeAg = replicando. A hepatite A não cronifica; a C se confirma com RNA."
  },
  {
    id: "cirrose",
    n: 11,
    cor: "#b07a2a",
    titulo: "Cirrose e hipertensão portal",
    sub: "Fibrose trava o fluxo",
    busca: {t:["figado"], re:"cirrose|portal|ascite|varizes|esplenomeg|hepatopat"},
    questoes: ["SOI-2023.1-09", "SOI-2023.1-12", "SOI-2024.1-09", "SOI-2024.2-05", "SOI-2024.2-07", "SOI-2025.2-02", "SOI-2025.2-12"],
    gancho: {
      caso: "Etilista, 53 anos, hematêmese volumosa, PA 85/50, FC 115. Abdome com ascite, baço palpável e fígado retraído. Ultrassom: veia porta dilatada.",
      p: "O que ele tem?",
      o: ["Cirrose alcoólica com hipertensão portal (varizes)", "Hepatite A", "Insuficiência cardíaca", "Úlcera perfurada"],
      a: 0
    },
    ideia: "Cirrose é **fibrose com nódulos** que endurece o fígado.\nO sangue que vem do intestino **não consegue passar**: a pressão da veia porta sobe e o sangue procura **atalhos**, que viram varizes.\nAo mesmo tempo, o fígado doente **para de fabricar** albumina e fatores de coagulação, e **para de conjugar e excretar** bilirrubina.",
    mapa: [
      {
        fluxo: {
          titulo: "Da fibrose às complicações",
          passos: ["**Álcool**, hepatite **B ou C**, esteatose (MASH), autoimune → fibrose e nódulos", "Resistência **dentro** do fígado aumenta → **hipertensão portal**", "Colaterais portossistêmicas → **varizes de esôfago** (hematêmese, choque) e **cabeça de medusa**", "Baço congestionado → **esplenomegalia** → plaquetopenia", "**Ascite** = hipertensão portal + albumina baixa + retenção de sódio", "Hepatócito falha → **icterícia**, albumina baixa, coagulação alterada"]
        }
      },
      {
        tabela: {
          titulo: "Onde está o bloqueio",
          cols: ["Tipo", "Causa", "Pista"],
          rows: [
            ["Pré-hepática", "Trombose da veia porta", "Fígado normal"],
            ["Intra-hepática", "**Cirrose** (a mais comum)", "Fígado nodular/retraído, sinais de doença hepática"],
            ["Pós-hepática", "IC direita, Budd-Chiari", "Turgência jugular, fígado grande e congesto"]
          ]
        }
      },
      {
        lista: {
          titulo: "Sinais do cirrótico no exame físico",
          itens: ["Icterícia, ascite, edema de membros", "Eritema palmar, aranhas vasculares, ginecomastia (excesso de estrogênio)", "Circulação colateral, esplenomegalia", "Fígado retraído ou nodular"]
        }
      }
    ],
    gatilhos: [
      ["Etilista + ascite + esplenomegalia + cabeça de medusa", "Hipertensão portal por cirrose"],
      ["Hematêmese em cirrótico", "Varizes de esôfago rompidas"],
      ["Plaquetopenia no cirrótico", "Baço grande sequestrando plaquetas"],
      ["Fígado retraído ou nodular", "Cirrose"],
      ["Esplenomegalia com fígado normal", "Pensar em trombose de porta (pré-hepática)"]
    ],
    pegadinhas: [
      ["A ascite vem só da hipoalbuminemia.", "É a soma de hipertensão portal + albumina baixa + retenção de sódio."],
      ["A icterícia da cirrose vem de obstrução extra-hepática.", "Vem da falha do hepatócito em conjugar e excretar."],
      ["Hepatite A pode levar a cirrose.", "A hepatite A não cronifica. Cirrose viral é por B ou C."],
      ["O diagnóstico de cirrose é só pelo exame físico.", "Confirma-se com laboratório, imagem e, às vezes, biópsia."]
    ],
    relampago: [
      {
        p: "Por que o cirrótico tem esplenomegalia?",
        o: ["Congestão pelo aumento da pressão portal", "Infecção do baço", "Hemólise autoimune", "Infiltração tumoral"],
        a: 0,
        x: "A veia esplênica drena na porta. Porta pressurizada = baço congestionado."
      },
      {
        p: "Causa de cirrose além do álcool:",
        o: ["Hepatite C crônica", "Hepatite A", "Giardíase", "Pancreatite aguda"],
        a: 0,
        x: "B e C cronificam e causam cirrose; a A não cronifica."
      },
      {
        p: "Etilista com hepatomegalia nodular, esplenomegalia, varizes e hemorragia digestiva alta. Tipo de hipertensão portal:",
        o: ["Intra-hepática, por cirrose", "Pré-hepática, por trombose", "Pós-hepática, por IC direita", "Idiopática"],
        a: 0,
        x: "Fígado nodular no etilista aponta a fibrose como o bloqueio: intra-hepática."
      }
    ],
    bula: "A fibrose trava o fluxo → porta pressurizada → varizes, baço grande, ascite. O fígado que falha dá icterícia e albumina baixa."
  },
  {
    id: "pancreatite",
    n: 12,
    cor: "#e8743b",
    titulo: "Pancreatite aguda × crônica",
    sub: "Autodigestão × fibrose",
    busca: {t:["biliopanc"], re:"pancrea"},
    questoes: ["SOI-2022.2-02", "SOI-2022.2-12", "SOI-2023.1-05", "SOI-2023.1-06", "SOI-2024.1-02", "SOI-2024.2-13", "SOI-2025.2-14"],
    gancho: {
      caso: "Homem, 45 anos, depois de um churrasco com muita cerveja: dor epigástrica intensa, em faixa, irradiando para as costas. Vomita várias vezes e a dor não alivia. Lipase 5× acima do normal.",
      p: "Qual o diagnóstico?",
      o: ["Úlcera péptica perfurada", "Pancreatite aguda", "Colecistite aguda", "Obstrução intestinal"],
      a: 1
    },
    ideia: "**Aguda:** a tripsina se ativa **dentro** do pâncreas e ele **se autodigere**. A lesão é **reversível**.\n**Crônica:** agressões repetidas viram **fibrose**. O pâncreas para de fabricar **enzima** (e depois **insulina**). O dano é **irreversível**.",
    mapa: [
      {
        fluxo: {
          titulo: "Como a aguda acontece",
          passos: ["Agressão: **cálculo biliar** obstruindo o ducto ou **álcool** (juntos, ~80% dos casos)", "Cálcio sobe dentro da célula acinar → **tripsina ativada cedo**", "**Autodigestão** do pâncreas + necrose gordurosa", "Citocinas (IL-1, IL-6, TNF-α) → **SIRS**, líquido no 3º espaço, choque"]
        }
      },
      {
        tabela: {
          titulo: "Aguda × crônica",
          cols: ["", "Aguda", "Crônica"],
          rows: [
            ["Causa", "Cálculo biliar, álcool, hipertrigliceridemia", "Álcool crônico (e tabaco)"],
            ["Dor", "Súbita, intensa, epigástrica, **em faixa → dorso**; vômito não alivia", "Recorrente ou constante, em crises"],
            ["Laboratório", "**Amilase/lipase ≥ 3×** (lipase é mais específica)", "Enzimas muitas vezes **normais**"],
            ["Marca", "Autodigestão, necrose gordurosa, SIRS", "Fibrose, calcificações, **esteatorreia**, perda de peso, **diabetes**"],
            ["Diagnóstico", "**2 de 3**: dor típica, enzimas ≥ 3×, imagem", "Clínica + imagem (calcificações, ducto irregular)"],
            ["Conduta", "Suporte: **hidratação**, analgesia, dieta precoce; tratar a causa (colecistectomia)", "Parar álcool e tabaco, **dieta hipogordurosa + enzimas**, analgesia"]
          ]
        }
      }
    ],
    gatilhos: [
      ["Dor em faixa para as costas + vômito que não alivia", "Pancreatite aguda"],
      ["Lipase ou amilase ≥ 3× o normal", "Fecha o diagnóstico junto com a dor"],
      ["Litíase biliar ou libação alcoólica antes da dor", "Causa da pancreatite aguda"],
      ["Hipertrigliceridemia + refeição gordurosa", "Também causa pancreatite aguda"],
      ["Etilista + dor crônica + perda de peso + fezes claras e gordurosas", "Crônica com insuficiência exócrina"]
    ],
    pegadinhas: [
      ["Na pancreatite crônica, os danos são reversíveis.", "Reversível é a aguda. A crônica é fibrose irreversível."],
      ["Na crônica, dieta hipergordurosa sem precisar de enzimas.", "Dieta hipogordurosa + reposição de enzimas pancreáticas."],
      ["Só a cirurgia garante o controle da dor na crônica.", "Nenhum procedimento garante. A cirurgia é individualizada."],
      ["Amilase normal afasta pancreatite crônica.", "Na crônica as enzimas costumam ser normais: o pâncreas já não tem o que liberar."]
    ],
    relampago: [
      {
        p: "Mulher, 32 anos: dor intensa no andar superior, vômitos, febre, ruídos hidroaéreos ausentes. Amilase alta e lipase muito alta.",
        o: ["Pancreatite aguda", "Apendicite aguda", "Colite ulcerativa", "Gastrite aguda"],
        a: 0,
        x: "Dor alta + lipase muito alta = pancreatite. Apendicite dói na fossa ilíaca direita e não eleva lipase."
      },
      {
        p: "Etilista de 53 anos com dor epigástrica constante, emagrecendo, fezes claras e gordurosas. O quadro indica:",
        o: ["Insuficiência exócrina do pâncreas", "Lesão pancreática reversível", "Úlcera duodenal", "Hepatite alcoólica"],
        a: 0,
        x: "Esteatorreia + perda de peso no etilista = pancreatite crônica: falta enzima para digerir gordura."
      },
      {
        p: "Centro do tratamento da pancreatite aguda:",
        o: ["Hidratação venosa, analgesia e tratar a causa", "Cirurgia de urgência", "Antibiótico profilático para todos", "Corticoide em dose alta"],
        a: 0,
        x: "O tratamento é de suporte. Antibiótico só se houver necrose infectada; colecistectomia quando a causa for biliar."
      }
    ],
    bula: "Aguda: a tripsina se solta, o pâncreas se come, a lipase sobe. Crônica: fibrose, falta enzima, gordura nas fezes."
  },
  {
    id: "abdome",
    n: 13,
    cor: "#e05252",
    titulo: "Abdome agudo em 5 síndromes",
    sub: "Como a dor começa",
    busca: {t:["abdome"], re:"."},
    questoes: ["SOI-2022.2-03", "SOI-2022.2-14", "SOI-2023.1-03", "SOI-2024.1-13"],
    gancho: {
      caso: "Dor súbita e lancinante, abdome em tábua. O paciente fica imóvel para não doer. Usa AINE por conta própria. Na percussão, sinal de Jobert.",
      p: "Qual síndrome?",
      o: ["Perfurativo", "Obstrutivo", "Inflamatório", "Hemorrágico"],
      a: 0
    },
    ideia: "Abdome agudo é dor abdominal **que exige decisão rápida**, muitas vezes cirúrgica.\nA prova só quer que você **encaixe o caso numa das 5 síndromes** olhando **como a dor começou** e **qual sinal vem junto**.",
    mapa: [
      {
        tabela: {
          titulo: "As 5 síndromes",
          cols: ["Síndrome", "Dor", "Pistas", "Exemplos"],
          rows: [
            ["Inflamatório", "**Insidiosa**, piora e localiza", "Febre, leucocitose, irritação localizada", "Apendicite, colecistite, pancreatite, diverticulite"],
            ["Obstrutivo", "**Cólica**, periumbilical", "Vômitos, distensão, **parada de gases e fezes**", "Bridas, hérnia, tumor"],
            ["Perfurativo", "**Súbita, lancinante**, difusa", "**Abdome em tábua**, paciente imóvel, **Jobert** (ar livre)", "Úlcera perfurada (AINE, corticoide)"],
            ["Hemorrágico", "Súbita, intensa", "**Choque**: hipotensão, taquicardia, palidez", "Gravidez ectópica rota, aneurisma roto, trauma"],
            ["Isquêmico", "Intensa e **desproporcional ao exame**", "Idoso, fibrilação atrial, acidose, lactato alto", "Isquemia mesentérica"]
          ]
        }
      },
      {
        lista: {
          titulo: "Tipos de dor",
          itens: ["**Visceral**: mal localizada, na linha média", "**Parietal**: bem localizada, piora ao mexer → o paciente fica **imóvel**", "**Referida**: sentida longe da origem (ex.: ombro na irritação do diafragma)"]
        }
      }
    ],
    gatilhos: [
      ["Paciente imóvel, abdome em tábua", "Peritonite"],
      ["Sinal de Jobert (som timpânico sobre o fígado)", "Ar livre → perfurativo"],
      ["Cólica + vômitos + parada de gases", "Obstrutivo"],
      ["Dor abdominal + choque + anemia", "Hemorrágico"],
      ["Dor desproporcional ao exame em idoso com fibrilação atrial", "Isquêmico"]
    ],
    pegadinhas: [
      ["Pancreatite biliar grave com choque é abdome hemorrágico.", "A banca classificou como inflamatório."],
      ["O obstrutivo começa com dor súbita e lancinante.", "O obstrutivo é cólica. Súbita e lancinante é perfurativo."],
      ["Na peritonite o paciente se contorce de dor.", "Fica imóvel. Quem se contorce tem cólica (renal, biliar)."],
      ["O inflamatório começa de forma súbita.", "Começa insidioso e vai piorando e localizando."]
    ],
    relampago: [
      {
        p: "Cólica periumbilical, vômitos, distensão, parada de gases e fezes:",
        o: ["Obstrutivo", "Perfurativo", "Hemorrágico", "Inflamatório"],
        a: 0,
        x: "Cólica + parada de eliminação = obstrução."
      },
      {
        p: "Mulher com atraso menstrual, dor abdominal súbita, hipotensa e taquicárdica:",
        o: ["Hemorrágico", "Inflamatório", "Obstrutivo", "Isquêmico"],
        a: 0,
        x: "Dor súbita + choque em idade fértil: gravidez ectópica rota."
      },
      {
        p: "Dor que começa vaga e vai piorando e se localizando, com febre:",
        o: ["Inflamatório", "Perfurativo", "Hemorrágico", "Isquêmico"],
        a: 0,
        x: "Evolução progressiva com febre = processo inflamatório (ex.: apendicite)."
      }
    ],
    bula: "Insidiosa + febre = inflamatório. Cólica + parada = obstrutivo. Súbita + tábua = perfurativo. Súbita + choque = hemorrágico. Dor maior que o exame = isquêmico."
  },
  {
    id: "itu",
    n: 14,
    cor: "#4f9cf0",
    titulo: "Infecção urinária",
    sub: "Grupos de risco, cistite × pielonefrite",
    busca: {t:["itu"], re:"."},
    questoes: ["SOI-2022.2-07", "SOI-2022.2-10", "SOI-2022.2-11", "SOI-2023.1-08", "SOI-2023.1-11", "SOI-2024.1-07", "SOI-2024.2-14"],
    gancho: {
      caso: "Gestante de 28 semanas, pré-natal de rotina. Urocultura com E. coli. Ela não tem nenhum sintoma.",
      p: "Conduta?",
      o: ["Tratar: risco de pielonefrite, prematuridade e baixo peso", "Não tratar, porque não tem sintomas", "Fluoroquinolona empírica", "Tratar, porque toda mulher com bacteriúria deve ser tratada"],
      a: 0
    },
    ideia: "ITU é **bactéria do intestino (E. coli) que sobe** pela uretra.\nQuem tem **urina parada, anatomia diferente ou imunidade baixa** pega mais.\nA **cistite** fica na bexiga e **não dá febre**. Se tem **febre + dor lombar/Giordano**, a infecção **subiu ao rim**: pielonefrite.",
    mapa: [
      {
        tabela: {
          titulo: "Grupos de risco e por quê",
          cols: ["Grupo", "Por quê"],
          rows: [
            ["Gestante", "**Progesterona** dilata o ureter e reduz o peristaltismo; o útero comprime; **estase**; urina menos concentrada e mais alcalina"],
            ["Criança", "Malformações, **refluxo vesicoureteral**, fralda e higiene"],
            ["Idoso", "Imunidade menor, **resíduo pós-miccional** (próstata, prolapso), menos estrogênio, comorbidades, déficit cognitivo"],
            ["Mulher jovem", "Uretra curta e perto do ânus; atividade sexual"],
            ["Sonda vesical, diabetes", "Porta de entrada e biofilme; glicosúria e imunidade menor"]
          ]
        }
      },
      {
        tabela: {
          titulo: "Cistite × pielonefrite",
          cols: ["", "Cistite", "Pielonefrite"],
          rows: [
            ["Sintomas", "Disúria, polaciúria, urgência, dor suprapúbica", "**Febre**, calafrio, **dor lombar, Giordano +**, náusea"],
            ["Gravidade", "Sem febre nem instabilidade", "Pode evoluir para **sepse**"],
            ["Tratamento", "**Nitrofurantoína** ou fosfomicina; quinolona não é 1ª escolha", "Grave: internar, colher cultura e **antibiótico EV empírico já** (ex.: ceftriaxona)"]
          ]
        }
      },
      {
        lista: {
          titulo: "Bacteriúria assintomática",
          itens: ["Bactéria na urocultura **sem sintomas**", "Trata **só na gestante** e antes de procedimento urológico", "Fica mais comum com idade, sexo feminino, atividade sexual, diabetes e sonda"]
        }
      }
    ],
    gatilhos: [
      ["Disúria + polaciúria, sem febre", "Cistite"],
      ["Febre + dor lombar + Giordano positivo", "Pielonefrite"],
      ["ITU com hipotensão, taquicardia e febre", "Urossepse: antibiótico EV empírico imediato"],
      ["Gestante com bacteriúria assintomática", "Trata"],
      ["Não gestante com bacteriúria assintomática", "Não trata"]
    ],
    pegadinhas: [
      ["Quinolona é a 1ª escolha na cistite não complicada.", "Ela fica na reserva, para evitar resistência e efeitos graves."],
      ["Fluoroquinolona é a escolha empírica na gestante.", "É evitada. Usa-se cefalexina, amoxicilina ou nitrofurantoína."],
      ["Na gestante não se trata, porque todo antibiótico é teratogênico.", "Trata, com antibióticos seguros."],
      ["Com febre e hipotensão, espera-se o antibiograma para começar.", "Colhe a cultura e começa logo, empírico."],
      ["Cistite pode causar febre e instabilidade.", "Isso já é pielonefrite."]
    ],
    relampago: [
      {
        p: "Mulher com disúria há 5 dias. Chega com PA 80×50, FC 130, febril. Conduta:",
        o: ["Internar e iniciar antibiótico EV empírico", "Esperar o antibiograma", "Nitrofurantoína oral em casa", "Só hidratação"],
        a: 0,
        x: "Febre + instabilidade = pielonefrite grave. O que muda a mortalidade é o antibiótico precoce."
      },
      {
        p: "Por que a gestante tem mais ITU?",
        o: ["A progesterona dilata o ureter e causa estase", "A uretra fica mais longa", "A urina fica mais ácida", "A imunidade aumenta"],
        a: 0,
        x: "Progesterona relaxa a musculatura lisa; urina parada favorece a bactéria."
      },
      {
        p: "Quem deve tratar bacteriúria assintomática?",
        o: ["Gestante", "Idosa institucionalizada", "Diabética", "Toda mulher adulta"],
        a: 0,
        x: "Fora da gestação (e de procedimento urológico) tratar só aumenta resistência."
      }
    ],
    bula: "A E. coli sobe. Bexiga = sem febre; rim = febre e dor lombar. Gestante com bactéria trata sempre; sem sintoma, fora da gestação, não. Quinolona fica na reserva."
  },
  {
    id: "litiase",
    n: 15,
    cor: "#8a6d3b",
    titulo: "Nefrolitíase",
    sub: "Cálculo, cólica e conduta",
    busca: {t:["litiase"], re:"."},
    questoes: [],
    gancho: {
      caso: "Homem, 35 anos, dor lombar súbita e intensa, em cólica, que desce para a virilha. Agitado, não acha posição. Náuseas, hematúria microscópica, Giordano positivo.",
      p: "Diagnóstico e exame de escolha?",
      o: ["Nefrolitíase · TC de abdome sem contraste", "Pielonefrite · urocultura", "Apendicite · ultrassom", "Abdome perfurativo · raio X"],
      a: 0
    },
    ideia: "Cálculo é **urina supersaturada** (pouca água, muito soluto) que **cristaliza**.\nA dor vem da **obstrução**: o ureter distende e dói em cólica, da lombar para a virilha. O paciente fica **agitado** (diferente da peritonite, em que ele fica imóvel).\n**Cálculo obstruindo + febre = urgência**: desobstruir.",
    mapa: [
      {
        tabela: {
          titulo: "Tipos de cálculo",
          cols: ["Cálculo", "Pistas"],
          rows: [
            ["**Oxalato de cálcio** (~80%)", "Radiopaco. Hipercalciúria, **hiperoxalúria** (Crohn, cirurgia de íleo), pouco citrato, pouca água"],
            ["Fosfato de cálcio", "Radiopaco, **urina alcalina**, hipercalciúria"],
            ["**Estruvita**", "Infecção por bactéria com **urease** (Proteus), urina alcalina, cálculo **coraliforme** grande"],
            ["**Ácido úrico**", "**Radiotransparente**, urina ácida, gota"],
            ["Cistina", "Doença genética, cristais hexagonais"]
          ]
        }
      },
      {
        lista: {
          titulo: "Diagnóstico e conduta",
          itens: ["**TC sem contraste** é o padrão-ouro; ultrassom em gestante e criança (mostra hidronefrose)", "Urina: **hematúria**", "Dor: **AINE** (± opioide)", "Cálculo ≤ 5 mm costuma sair sozinho; ureter distal de 5–10 mm: **tansulosina** (alfabloqueador) ajuda a expulsar", "Intervenção (ureteroscopia, litotripsia, percutânea) se grande, dor refratária, rim único ou obstrução com infecção", "**Obstrução + febre** → desobstruir (cateter duplo J ou nefrostomia) + antibiótico"]
        }
      },
      {
        lista: {
          titulo: "Prevenção",
          itens: ["Beber água para urinar > 2–2,5 L/dia", "Menos sal e menos proteína animal", "**Não cortar o cálcio** da dieta (aumenta a absorção de oxalato)", "Citrato de potássio se pouco citrato"]
        }
      }
    ],
    gatilhos: [
      ["Cólica lombar que desce para a virilha + paciente agitado", "Cólica nefrética"],
      ["Dor lombar + hematúria", "Cálculo"],
      ["Cálculo coraliforme + Proteus + urina alcalina", "Estruvita"],
      ["Cálculo invisível no raio X + gota", "Ácido úrico"],
      ["Doença de Crohn + cálculo", "Hiperoxalúria entérica"],
      ["Cálculo obstrutivo + febre", "Desobstrução urgente + antibiótico"]
    ],
    pegadinhas: [
      ["Cortar o cálcio da dieta previne cálculo.", "Aumenta o oxalato absorvido e piora."],
      ["O ultrassom é o padrão-ouro.", "O padrão-ouro é a TC sem contraste."],
      ["Cálculo de ácido úrico aparece no raio X simples.", "É radiotransparente."],
      ["Cálculos de estruvita são pequenos e passam pelo ureter.", "São grandes; muitas vezes achados no raio X."],
      ["Cristais de colesterol são comuns em cálculos de dislipidêmicos.", "Não fazem parte dos cálculos urinários."]
    ],
    relampago: [
      {
        p: "Cálculo coraliforme em mulher com ITU de repetição por Proteus. Composição provável:",
        o: ["Estruvita", "Ácido úrico", "Cistina", "Oxalato de cálcio"],
        a: 0,
        x: "A urease do Proteus alcaliniza a urina e precipita fosfato de amônio e magnésio."
      },
      {
        p: "Exame padrão-ouro para confirmar cálculo urinário:",
        o: ["TC de abdome sem contraste", "Ultrassom", "Raio X simples", "Urografia excretora"],
        a: 0,
        x: "A TC sem contraste vê praticamente todos os cálculos, inclusive os radiotransparentes."
      },
      {
        p: "Cálculo no ureter com febre e calafrios. Conduta:",
        o: ["Desobstruir com urgência e dar antibiótico", "Só analgesia e aguardar", "Tansulosina em casa", "Litotripsia eletiva"],
        a: 0,
        x: "Urina infectada parada vira sepse rápido: drenar primeiro."
      }
    ],
    bula: "Urina concentrada cristaliza. Cólica para a virilha, paciente agitado, hematúria. TC sem contraste. Oxalato é o mais comum; estruvita = Proteus; ácido úrico não aparece no raio X. Obstrução + febre = desobstruir."
  },
  {
    id: "lra",
    n: 16,
    cor: "#3f7fd1",
    titulo: "Lesão renal aguda (IRA)",
    sub: "Pré-renal, renal e pós-renal",
    busca: {t:["rim"], re:"aguda|LRA|IRA|pré-renal|pre-renal|tubular|pós-renal|ofídic|Crotalus|ureia/creatinina", fora:["INT-2024.2-13", "INT-2025.2-05"]},
    questoes: [],
    gancho: {
      caso: "Idoso com diarreia intensa há 3 dias, PA 90/60, urinando pouco. Creatinina 2,4 (antes 1,0), ureia/creatinina > 40, sódio urinário baixo, sedimento urinário normal.",
      p: "Tipo de lesão?",
      o: ["Pré-renal por hipovolemia", "Necrose tubular aguda", "Pós-renal por obstrução", "Glomerulonefrite"],
      a: 0
    },
    ideia: "Lesão renal aguda é **queda rápida da filtração**: creatinina sobe **≥ 0,3 em 48 h** ou **≥ 1,5× em 7 dias**, ou diurese < 0,5 mL/kg/h por 6 h.\nA pergunta é **onde está o problema**: **antes do rim** (falta sangue), **no rim** (tecido lesado) ou **depois do rim** (urina não sai).",
    mapa: [
      {
        tabela: {
          titulo: "Os três tipos",
          cols: ["Tipo", "Causas", "Pistas"],
          rows: [
            ["**Pré-renal**", "Desidratação, hemorragia, choque, IC; AINE e IECA pioram", "Rim funcional e **reversível com volume**. Ureia/creatinina **> 40**, sódio urinário < 20, **FeNa < 1%**, sedimento normal"],
            ["**Renal** (intrínseca)", "**Necrose tubular aguda** (pré-renal prolongada, aminoglicosídeo, contraste, rabdomiólise, veneno de cascavel), glomerulonefrite, nefrite intersticial", "**FeNa > 2%**, **cilindros granulosos** \"marrom-barrento\", urina pouco concentrada"],
            ["**Pós-renal**", "Obstrução **bilateral**: hiperplasia de próstata, cálculos, tumor", "Bexiga palpável, **hidronefrose** no ultrassom; resolve ao desobstruir (sonda)"]
          ]
        }
      },
      {
        lista: {
          titulo: "Complicações e quando dialisar",
          itens: ["**Hipercalemia**, acidose metabólica, hipervolemia (edema agudo de pulmão), uremia (pericardite, confusão)", "Diálise de urgência quando refratárias: **A**cidose, **E**letrólitos (K), **I**ntoxicação, **O**verload (volume), **U**remia", "Hipercalemia com ECG alterado: **gluconato de cálcio** primeiro (protege o coração); depois insulina + glicose, β2-agonista, bicarbonato, furosemida, resina, diálise", "Idoso tem menos reserva renal: mais risco em todos os tipos"]
        }
      }
    ],
    gatilhos: [
      ["Hipovolemia + ureia/creatinina > 40 + FeNa < 1%", "Pré-renal"],
      ["Cilindros granulosos + FeNa > 2%", "Necrose tubular aguda"],
      ["Idoso com próstata grande, bexiga cheia e hidronefrose", "Pós-renal → sondagem"],
      ["Acidente com cascavel + urina escura", "Rabdomiólise → necrose tubular"],
      ["Potássio alto com T apiculada no ECG", "Gluconato de cálcio já"],
      ["Melena + ureia muito alta", "Pré-renal + sangue digerido"]
    ],
    pegadinhas: [
      ["A pré-renal já tem lesão estrutural do rim.", "É funcional e reversível; se demorar, vira necrose tubular."],
      ["Na necrose tubular aguda a FeNa é < 1%.", "É > 2%: o túbulo lesado perde sódio."],
      ["O gluconato de cálcio baixa o potássio.", "Ele só protege o coração; quem baixa é insulina + glicose, β2, diurético, resina, diálise."],
      ["Ureia/creatinina > 40 indica necrose tubular.", "Indica pré-renal."],
      ["Lesão por nefrotóxico sempre reverte ao parar o remédio.", "Pode evoluir para doença renal crônica."]
    ],
    relampago: [
      {
        p: "FeNa < 1%, ureia/creatinina > 40, sedimento normal. Tipo:",
        o: ["Pré-renal", "Necrose tubular aguda", "Pós-renal", "Nefrite intersticial"],
        a: 0,
        x: "O túbulo está bom e segura sódio para poupar volume."
      },
      {
        p: "Idoso com hiperplasia prostática, bexiga palpável e hidronefrose bilateral. Primeira conduta:",
        o: ["Sondagem vesical", "Hidratação vigorosa", "Diálise imediata", "Biópsia renal"],
        a: 0,
        x: "Pós-renal: desobstruir resolve."
      },
      {
        p: "Potássio 7,0 com ondas T apiculadas. Primeira medida:",
        o: ["Gluconato de cálcio venoso", "Furosemida", "Resina de troca", "Restringir potássio na dieta"],
        a: 0,
        x: "Primeiro estabilizar a membrana do coração; depois baixar o potássio."
      }
    ],
    bula: "Antes do rim (falta sangue, FeNa < 1%), no rim (necrose tubular, FeNa > 2%, cilindros granulosos) ou depois (obstrução, hidronefrose). Potássio alto com ECG alterado: cálcio primeiro."
  },
  {
    id: "drc",
    n: 17,
    cor: "#2f6aa8",
    titulo: "Doença renal crônica (DRC)",
    sub: "TFG, albuminúria e proteção do rim",
    busca: {t:["rim"], re:"crônica|cronica|DRC|KDIGO|albuminúria|albumina/creatinina|CKD|cistatina", fora:["INT-2026.1-04"]},
    questoes: [],
    gancho: {
      caso: "Mulher, 60 anos, diabética e hipertensa. TFG 52 e relação albumina/creatinina 120 mg/g em duas medidas com 3 meses de intervalo.",
      p: "Como classificar e tratar?",
      o: ["DRC G3a A2: IECA ou BRA + iSGLT2 e controle da PA", "Normal para a idade, só observar", "Lesão renal aguda: hidratar", "DRC G5: diálise"],
      a: 0
    },
    ideia: "DRC é alteração do rim por **mais de 3 meses**: **TFG < 60** **ou** sinal de lesão (**albuminúria ≥ 30 mg/g**, sedimento ou imagem alterados), **mesmo com TFG normal**.\nAs grandes causas são **diabetes e hipertensão**.\nOs néfrons que sobram trabalham dobrado (hiperfiltração) e também se desgastam. Tratar é **proteger os que restam**.",
    mapa: [
      {
        tabela: {
          titulo: "Estágios (KDIGO)",
          cols: ["Estágio", "TFG (mL/min/1,73 m²)"],
          rows: [
            ["G1", "≥ 90, com sinal de lesão"],
            ["G2", "60–89, com sinal de lesão"],
            ["G3a", "45–59"],
            ["G3b", "30–44"],
            ["G4", "15–29"],
            ["G5", "< 15 (falência)"],
            ["Albuminúria", "A1 < 30 · **A2 30–300** · A3 > 300 mg/g"]
          ]
        }
      },
      {
        tabela: {
          titulo: "Complicações",
          cols: ["Complicação", "Por quê / conduta"],
          rows: [
            ["**Anemia normocítica**", "Falta de **eritropoetina** → ferro + eritropoetina"],
            ["Distúrbio mineral e ósseo", "Fósforo sobe, cálcio cai, falta calcitriol → **hiperparatireoidismo secundário**"],
            ["Acidose metabólica e hipercalemia", "Rim não elimina ácido e potássio"],
            ["Hipervolemia e hipertensão", "Retenção de sal e água"],
            ["Uremia", "Náusea, prurido, pericardite, confusão → diálise"]
          ]
        }
      },
      {
        lista: {
          titulo: "Rastreio e tratamento",
          itens: ["Rastrear quem tem DM, HAS ou idade avançada: **creatinina com TFG estimada (CKD-EPI)** + urina tipo 1 + **relação albumina/creatinina**", "Creatinina sozinha engana (idosa magra): estimar a TFG; cistatina C ajuda", "PA < 130/80, controle da glicemia, parar de fumar", "**IECA ou BRA** se albuminúria; **iSGLT2** protege o rim", "Evitar nefrotóxicos (AINE, contraste) e **ajustar doses** dos remédios", "Encaminhar ao nefrologista se TFG < 30 ou albuminúria A3"]
        }
      }
    ],
    gatilhos: [
      ["Albuminúria por > 3 meses com TFG normal", "Já é DRC"],
      ["Diabetes + hipertensão", "Principais causas"],
      ["Anemia normocítica no renal crônico", "Falta de eritropoetina"],
      ["Fósforo e PTH altos, cálcio baixo", "Hiperparatireoidismo secundário"],
      ["Rins pequenos no ultrassom", "Doença crônica (não aguda)"]
    ],
    pegadinhas: [
      ["TFG normal exclui DRC.", "Albuminúria persistente já define DRC."],
      ["Controlar a pressão não muda a progressão.", "Muda: é das medidas que mais protegem."],
      ["A creatinina isolada basta para avaliar o rim.", "Estimar a TFG; a creatinina depende da massa muscular."],
      ["Estágio 4 é TFG de 30–44.", "G4 é 15–29; 30–44 é G3b."],
      ["A anemia da DRC é microcítica por falta de ferro.", "É normocítica, por falta de eritropoetina."]
    ],
    relampago: [
      {p:"TFG de 25 mL/min/1,73 m² há 6 meses. Estágio:", o:["G4", "G3b", "G5", "G2"], a:0, x:"G4 = 15 a 29."},
      {
        p: "Diabético com albuminúria A2 persistente. Medicamento que protege o rim:",
        o: ["IECA ou BRA (e iSGLT2)", "AINE", "Diurético tiazídico isolado", "Nenhum, só observar"],
        a: 0,
        x: "Reduzem a pressão dentro do glomérulo e a albuminúria."
      },
      {
        p: "Causa da anemia na DRC:",
        o: ["Falta de eritropoetina", "Perda de sangue na urina", "Falta de vitamina B12", "Hemólise"],
        a: 0,
        x: "O rim é quem produz a eritropoetina."
      }
    ],
    bula: "DRC = > 3 meses com TFG < 60 ou albuminúria. DM e HAS são as causas. Proteger os néfrons: PA, glicemia, IECA/BRA, iSGLT2, nada de AINE. Anemia por falta de eritropoetina."
  },
  {
    id: "glomerular",
    n: 18,
    cor: "#6b5bd6",
    titulo: "Síndromes nefrítica e nefrótica",
    sub: "Inflamação × vazamento de proteína",
    busca: {t:["glomerular"], re:"."},
    questoes: [],
    gancho: {
      caso: "Menino de 8 anos, 2 semanas depois de uma amigdalite: urina cor de coca-cola, inchaço nas pálpebras, pressão alta. C3 baixo.",
      p: "Diagnóstico?",
      o: ["Glomerulonefrite pós-estreptocócica (nefrítica)", "Síndrome nefrótica por lesão mínima", "Infecção urinária", "Nefrolitíase"],
      a: 0
    },
    ideia: "**Nefrítica** = o glomérulo **inflamou**: sangue vaza (hematúria, cilindros hemáticos), a filtração cai e o corpo **retém sal e água** → **pressão alta, edema, pouca urina**. Proteína só um pouco.\n**Nefrótica** = a **barreira de filtração** (podócito) estragou: **proteína vaza muito** (> 3,5 g/dia) → **albumina baixa** → edema grande e colesterol alto.",
    mapa: [
      {
        tabela: {
          titulo: "Nefrítica × nefrótica",
          cols: ["", "Nefrítica", "Nefrótica"],
          rows: [
            ["Defeito", "Inflamação por **imunocomplexos**", "Lesão do **podócito** (barreira de filtração)"],
            ["Urina", "**Hematúria** dismórfica, **cilindros hemáticos**, proteinúria leve", "**Proteinúria > 3,5 g/24 h** (urina espumosa), lipidúria"],
            ["Sangue", "Creatinina sobe; **C3 baixo** na pós-estreptocócica", "**Albumina < 3**, **colesterol alto**, coagulação aumentada"],
            ["Clínica", "**HAS**, edema leve, oligúria", "**Edema importante** (anasarca), PA normal"],
            ["Exemplos", "Pós-estreptocócica, nefropatia por IgA, lúpus", "**Lesão mínima** (criança), GESF, membranosa (adulto), diabetes"],
            ["Tratamento", "Restringir sal e água, **furosemida**, anti-hipertensivo", "**Corticoide** (lesão mínima), diurético, IECA, estatina"]
          ]
        }
      },
      {
        fluxo: {
          titulo: "Pós-estreptocócica",
          passos: ["**Faringite** (1–3 semanas antes) ou **impetigo** (3–6 semanas) por estreptococo do grupo A", "**Imunocomplexos** se depositam no glomérulo (padrão granular)", "Ativam o **complemento** (via alternativa) → **C3 baixo**, que normaliza em **até 8 semanas**", "Inflamação → hematúria, edema, HAS; ASLO elevado", "Tratamento de suporte; quase sempre evolui bem"]
        }
      },
      {
        lista: {
          titulo: "Por que a nefrótica faz o que faz",
          itens: ["Albumina baixa → pressão oncótica cai → **edema**", "Fígado aumenta a produção de lipoproteínas → **colesterol alto**", "Perde antitrombina III → **trombose** (veia renal)", "Perde imunoglobulinas → **infecções**", "Cálcio total baixo (cálcio ligado à albumina)"]
        }
      }
    ],
    gatilhos: [
      ["Urina escura + edema + HAS semanas após faringite", "Pós-estreptocócica"],
      ["C3 baixo que normaliza em 8 semanas", "Pós-estreptocócica"],
      ["Urina espumosa + edema + albumina baixa + colesterol alto", "Nefrótica"],
      ["Criança com nefrótica", "Lesão mínima → corticoide"],
      ["Cilindros hemáticos", "Glomérulo inflamado (nefrítica)"],
      ["Hematúria poucos dias após resfriado", "Nefropatia por IgA"]
    ],
    pegadinhas: [
      ["Na nefrótica há hipertensão e hematúria importantes.", "Isso é típico da nefrítica."],
      ["O colesterol alto da nefrótica vem da dieta.", "Vem do aumento da síntese no fígado."],
      ["O edema da nefrítica é por albumina baixa.", "É por retenção de sal e água."],
      ["C3 baixo por mais de 8 semanas é normal na pós-estreptocócica.", "Pensar em outra causa (lúpus, membranoproliferativa)."]
    ],
    relampago: [
      {
        p: "Urina espumosa, edema, albumina 2,0 g/dL e colesterol 300 mg/dL:",
        o: ["Síndrome nefrótica", "Síndrome nefrítica", "Infecção urinária", "Lesão renal aguda pré-renal"],
        a: 0,
        x: "Proteinúria maciça + albumina baixa + dislipidemia + edema."
      },
      {
        p: "Na glomerulonefrite pós-estreptocócica, o C3:",
        o: ["Fica baixo e normaliza em até 8 semanas", "Fica alto", "É normal", "Fica baixo para sempre"],
        a: 0,
        x: "O complemento é consumido pelos imunocomplexos."
      },
      {
        p: "Como a furosemida melhora o edema?",
        o: ["Inibe o cotransportador Na⁺/K⁺/2Cl⁻ na alça de Henle", "Aumenta a albumina", "Bloqueia a aldosterona no túbulo coletor", "Inibe a anidrase carbônica"],
        a: 0,
        x: "Diurético de alça: o mais potente."
      }
    ],
    bula: "Nefrítica: glomérulo inflamado, sangue na urina, HAS, edema por retenção; C3 baixo na pós-estreptocócica. Nefrótica: barreira estragada, proteína > 3,5 g, albumina baixa, colesterol alto; criança = lesão mínima, corticoide."
  },
  {
    id: "tumorrenal",
    n: 19,
    cor: "#a34a6b",
    titulo: "Neoplasias renais",
    sub: "Células claras, Wilms e benignos",
    busca: {t:["urologia", "geral"], re:"renal|rim |rins|Wilms|células claras|oncocitoma|angiomiolipoma|urotelial", fora:["INT-2022.1-05"]},
    questoes: [],
    gancho: {
      caso: "Homem, 58 anos, fumante: hematúria, dor lombar e massa no flanco. TC: massa sólida e heterogênea no rim, invadindo a veia renal, e nódulos nos pulmões.",
      p: "Diagnóstico?",
      o: ["Carcinoma de células renais", "Cisto renal simples", "Angiomiolipoma", "Nefrolitíase"],
      a: 0
    },
    ideia: "Massa renal **sólida** em adulto é **câncer até prova em contrário**, quase sempre **carcinoma de células renais** (células claras, vindas do **túbulo proximal**).\nHoje é achado de **exame de imagem**; a tríade clássica é rara. Gosta de entrar na **veia renal** e ir para o **pulmão**.\nEm **criança**, massa abdominal é o tumor de **Wilms**.",
    mapa: [
      {
        tabela: {
          titulo: "Os tumores que caem",
          cols: ["Tumor", "O que saber"],
          rows: [
            ["**Carcinoma de células renais** (~85%)", "Células claras do **túbulo proximal**, gene **VHL** (3p). Fatores: **tabagismo**, obesidade, HAS, diálise. Invade veia renal e cava; metástase em pulmão e osso. Tratamento: **nefrectomia**; resiste a quimio e radioterapia"],
            ["Tumor de **Wilms**", "**Criança de 2–5 anos**, massa abdominal grande e assintomática, **não cruza a linha média**, gene WT1. Não palpar repetidamente"],
            ["**Oncocitoma**", "Benigno, células intercaladas do ducto coletor, **marrom-mogno com cicatriz central estrelada**"],
            ["**Angiomiolipoma**", "Benigno: **gordura**, vasos e músculo (vê gordura na TC); esclerose tuberosa; pode sangrar"],
            ["Carcinoma urotelial", "Pelve renal, ureter e bexiga: **hematúria macroscópica indolor** em fumante"]
          ]
        }
      },
      {
        lista: {
          titulo: "Pistas do carcinoma de células renais",
          itens: ["Tríade **hematúria + dor lombar + massa** (rara, < 10%, doença avançada)", "Síndromes paraneoplásicas: **policitemia** (eritropoetina), **hipercalcemia** (PTHrP), HAS (renina), febre", "**Varicocele esquerda** que surge de repente: trombo na veia renal esquerda", "Metástase pulmonar em \"bola de canhão\""]
        }
      }
    ],
    gatilhos: [
      ["Hematúria indolor em fumante idoso", "Investigar rim e bexiga (urotelial ou renal)"],
      ["Criança de 3 anos com massa abdominal que não cruza a linha média", "Wilms"],
      ["Policitemia + massa renal", "Carcinoma de células renais"],
      ["Massa marrom com cicatriz central estrelada", "Oncocitoma"],
      ["Massa renal com gordura na TC", "Angiomiolipoma"],
      ["Varicocele esquerda nova", "Trombo tumoral na veia renal"]
    ],
    pegadinhas: [
      ["A tríade clássica é a apresentação mais comum.", "É rara; a maioria é achado de imagem."],
      ["O carcinoma de células renais responde bem à quimioterapia.", "É resistente; o tratamento é cirúrgico (e terapia-alvo ou imunoterapia)."],
      ["O oncocitoma é maligno.", "É benigno."],
      ["Wilms é tumor de adulto.", "É da criança."]
    ],
    relampago: [
      {
        p: "De onde se origina o carcinoma de células claras?",
        o: ["Túbulo contorcido proximal", "Ducto coletor", "Glomérulo", "Urotélio da pelve"],
        a: 0,
        x: "Das células do túbulo proximal, com perda do gene VHL."
      },
      {
        p: "Criança de 3 anos com massa abdominal grande, assintomática, que não cruza a linha média:",
        o: ["Tumor de Wilms", "Carcinoma de células renais", "Oncocitoma", "Cisto simples"],
        a: 0,
        x: "Wilms (nefroblastoma) é o tumor renal da infância."
      },
      {
        p: "Por que o carcinoma renal pode causar policitemia?",
        o: ["O tumor produz eritropoetina", "Sangra pela urina", "Produz PTH", "Comprime a medula óssea"],
        a: 0,
        x: "Síndrome paraneoplásica clássica do rim."
      }
    ],
    bula: "Massa renal sólida no adulto = carcinoma de células claras (túbulo proximal, VHL, fumo), entra na veia renal, vai ao pulmão, cirurgia. Criança = Wilms. Benignos: oncocitoma (cicatriz central) e angiomiolipoma (gordura)."
  },
  {
    id: "gravidez",
    n: 20,
    cor: "#d0607f",
    titulo: "Diagnóstico de gravidez e contracepção",
    sub: "Beta-hCG, idade gestacional e métodos",
    busca: {
      t: ["gineco", "adolescente", "prenatal", "parto"],
      re: "hCG|HCG|contracep|anticoncep|DIU|planejamento (familiar|reprodutivo)|data provável|amenorreia da lactação|levonorgestrel|corpo lúteo|teste de gravidez",
      fora: ["INT-2022.1-37", "INT-2023.1-44", "INT-2024.2-27", "INT-2022.1-27", "INT-2025.2-13", "INT-2024.2-28", "INT-2024.2-18", "INT-2023.1-23"]
    },
    questoes: [],
    gancho: {
      caso: "Mulher de 30 anos, ciclos menstruais intensos e irregulares. Não quer engravidar nos próximos anos e prefere não lembrar de tomar remédio.",
      p: "Melhor método?",
      o: ["DIU com levonorgestrel", "Pílula combinada", "Tabelinha", "Só preservativo"],
      a: 0
    },
    ideia: "Gravidez se confirma pelo **beta-hCG**: produzido pelo trofoblasto, ele **mantém o corpo lúteo** produzindo progesterona. A idade gestacional se conta pela **DUM** (ou pelo ultrassom do 1º trimestre, que é o mais preciso).\nContracepção: escolher com a mulher, respeitando as **contraindicações**. Os mais eficazes são os de **longa duração** (DIU e implante). Só o **preservativo** protege de IST.",
    mapa: [
      {
        tabela: {
          titulo: "Diagnóstico de gravidez",
          cols: ["Item", "O que saber"],
          rows: [
            ["Beta-hCG", "Positiva ~8–10 dias após a fecundação; **dobra a cada ~48 h**; mantém o corpo lúteo"],
            ["Ultrassom transvaginal", "Saco gestacional ~5 semanas; batimento cardíaco ~6 semanas"],
            ["Sinais de presunção", "Atraso menstrual, náuseas, mamas doloridas, urinar mais"],
            ["Sinais de certeza", "**Batimento cardíaco fetal**, embrião no ultrassom, movimentos fetais percebidos pelo médico"],
            ["Data provável do parto", "**DUM + 280 dias** (regra de Naegele: + 7 dias e − 3 meses)"]
          ]
        }
      },
      {
        tabela: {
          titulo: "Métodos",
          cols: ["Método", "O que saber"],
          rows: [
            ["DIU de cobre", "Sem hormônio, ~10 anos; pode no pós-parto e na amamentação; pode aumentar fluxo e cólica"],
            ["**DIU com levonorgestrel**", "5–8 anos; **diminui o sangramento** (bom para ciclos intensos)"],
            ["Implante (etonogestrel)", "3 anos; **o mais eficaz**"],
            ["Pílula combinada", "Estrogênio + progestagênio. **Contraindicada**: fumante ≥ 35 anos, enxaqueca com aura, HAS não controlada, trombose prévia, **amamentando < 6 meses**"],
            ["Só progestagênio (desogestrel, injetável trimestral)", "Pode na **amamentação** e quando o estrogênio é proibido"],
            ["Preservativo", "Único que **protege de IST**"],
            ["Amenorreia da lactação", "Funciona se amamentação exclusiva, sem menstruar e < 6 meses"],
            ["Emergência", "**Levonorgestrel 1,5 mg** até 72 h (quanto antes melhor); DIU de cobre até 5 dias. Atrasa a ovulação, **não é abortivo**"]
          ]
        }
      },
      {
        lista: {
          titulo: "Adolescente",
          itens: ["Tem direito a **sigilo** e pode receber contraceptivo **sem autorização dos pais**", "Quebrar o sigilo só se houver **risco** à vida ou à saúde (ex.: violência)", "Oferecer preservativo + outro método (dupla proteção)"]
        }
      }
    ],
    gatilhos: [
      ["Ciclos intensos + quer método duradouro", "DIU com levonorgestrel"],
      ["Fumante com mais de 35 anos", "Sem estrogênio"],
      ["Amamentando", "Progestagênio isolado, DIU de cobre ou amenorreia da lactação"],
      ["Relação desprotegida há 2 dias", "Levonorgestrel de emergência"],
      ["Beta positivo, útero vazio no ultrassom, dor e sangramento", "Pensar em gravidez ectópica"],
      ["Adolescente pede anticoncepcional", "Sigilo e prescrição, sem exigir os pais"]
    ],
    pegadinhas: [
      ["Adolescente precisa de autorização dos pais para receber anticoncepcional.", "Tem direito a sigilo; quebra só com risco."],
      ["Pílula combinada é a melhor opção no pós-parto amamentando.", "Evitar antes de 6 meses: o estrogênio reduz o leite."],
      ["Pílula combinada é segura para fumante de 40 anos.", "Contraindicada pelo risco cardiovascular e de trombose."],
      ["A pílula do dia seguinte é abortiva.", "Ela atrasa ou impede a ovulação."]
    ],
    relampago: [
      {
        p: "Hormônio que mantém o corpo lúteo no início da gestação:",
        o: ["hCG", "Prolactina", "FSH", "Ocitocina"],
        a: 0,
        x: "Sem hCG o corpo lúteo regride, a progesterona cai e a gestação não se mantém."
      },
      {
        p: "DUM em 10 de março. Data provável do parto (Naegele):",
        o: ["17 de dezembro", "10 de dezembro", "3 de janeiro", "17 de novembro"],
        a: 0,
        x: "+ 7 dias = 17; − 3 meses = dezembro."
      },
      {
        p: "Puérpera em aleitamento exclusivo quer contracepção. Método adequado:",
        o: ["DIU de cobre", "Pílula combinada", "Anel vaginal combinado", "Adesivo combinado"],
        a: 0,
        x: "Na amamentação, nada de estrogênio nos primeiros 6 meses."
      }
    ],
    bula: "Beta-hCG mantém o corpo lúteo e dobra a cada 48 h. DPP = DUM + 280 dias. DIU e implante são os mais eficazes; DIU hormonal reduz o fluxo. Sem estrogênio para fumante ≥ 35 anos e amamentando. Adolescente tem sigilo."
  },
  {
    id: "prenatal",
    n: 21,
    cor: "#c85a8a",
    titulo: "Assistência pré-natal",
    sub: "Consultas, exames, vacinas e alertas",
    busca: {t:["prenatal"], re:"."},
    questoes: [],
    gancho: {
      caso: "Gestante de 10 semanas na primeira consulta. Toxoplasmose IgG negativa e IgM negativa; rubéola IgG positiva; teste de sífilis não reagente.",
      p: "Sobre a toxoplasmose:",
      o: ["Suscetível: orientar prevenção e repetir a sorologia", "Imune, não precisa repetir", "Infecção aguda: tratar já", "Vacinar contra toxoplasmose"],
      a: 0
    },
    ideia: "Pré-natal é **achar cedo o que dá para tratar**.\nComeçar **até 12 semanas**, com no mínimo **6 consultas**: mensais até 28 semanas, quinzenais até 36, semanais depois.\nEm toda consulta: **PA, peso, altura uterina, batimentos fetais e edema**.\nOs exames procuram **anemia, diabetes, infecções que passam para o bebê** (sífilis, HIV, hepatite B, toxoplasmose) e **ITU**.",
    mapa: [
      {
        tabela: {
          titulo: "Exames",
          cols: ["Quando", "O que pedir"],
          rows: [
            ["1º trimestre", "Hemograma, tipagem ABO/Rh (Coombs indireto se Rh−), **glicemia de jejum**, testes de **sífilis, HIV, hepatites B e C**, **toxoplasmose IgG/IgM**, urina tipo 1 e **urocultura**, ultrassom"],
            ["24–28 semanas", "**TOTG 75 g** (se a glicemia de jejum era < 92); Coombs indireto se Rh−"],
            ["3º trimestre", "Repetir hemograma, sífilis, HIV, hepatite B, toxoplasmose (se suscetível) e urocultura"]
          ]
        }
      },
      {
        tabela: {
          titulo: "Como interpretar",
          cols: ["Achado", "Significa"],
          rows: [
            ["Toxo IgG+ IgM−", "**Imune** (infecção antiga)"],
            ["Toxo IgG− IgM−", "**Suscetível**: carne bem passada, lavar verduras, luvas na terra, evitar fezes de gato; repetir a sorologia"],
            ["Toxo IgG+ IgM+", "Pode ser recente: **teste de avidez** (alta = antiga) e espiramicina enquanto investiga"],
            ["Teste rápido de sífilis reagente", "**Penicilina benzatina já** (sem esperar o VDRL) + tratar o parceiro; VDRL mensal"],
            ["Glicemia de jejum 92–125", "**Diabetes gestacional**; ≥ 126 = diabetes prévio"],
            ["PA ≥ 140/90", "Antes de 20 semanas: crônica. Depois: gestacional. Com proteinúria ou lesão de órgão: **pré-eclâmpsia**"]
          ]
        }
      },
      {
        lista: {
          titulo: "Suplementos e vacinas",
          itens: ["**Ácido fólico** 0,4 mg desde 30 dias antes de engravidar até a **12ª semana**", "**Sulfato ferroso** durante a gestação até **3 meses pós-parto**", "**dTpa** a partir de **20 semanas**, em toda gestação; **hepatite B** (se não vacinada), **influenza**", "**Não** dar vacinas de vírus vivo (tríplice viral, febre amarela salvo exceção)", "Alto risco de pré-eclâmpsia: AAS em baixa dose e cálcio a partir de 12–16 semanas", "Hipertensa em **losartana ou IECA**: **suspender** (fetotóxicos) e trocar por metildopa ou nifedipina"]
        }
      }
    ],
    gatilhos: [
      ["Toxo IgG− IgM−", "Suscetível: prevenção e repetir"],
      ["Toxo IgG+ IgM+", "Teste de avidez"],
      ["Teste rápido de sífilis reagente", "Penicilina benzatina já, parceiro também"],
      ["Glicemia de jejum 92–125", "Diabetes gestacional"],
      ["PA ≥ 140/90 depois de 20 semanas + proteinúria", "Pré-eclâmpsia"],
      ["Gestante usando losartana", "Suspender e trocar"]
    ],
    pegadinhas: [
      ["Glicemia de jejum 130 na 1ª consulta é diabetes gestacional.", "≥ 126 indica diabetes prévio (diagnosticado na gestação)."],
      ["Proteinúria é alteração normal da gravidez.", "Não é; pensar em pré-eclâmpsia."],
      ["Esperar o VDRL confirmar para tratar a sífilis.", "Tratar a partir do teste rápido reagente."],
      ["IECA e BRA podem continuar na gestação.", "São contraindicados."],
      ["Tríplice viral pode ser dada na gestação.", "Vírus vivo: contraindicada."]
    ],
    relampago: [
      {
        p: "Quando dar a dTpa na gestante?",
        o: ["A partir de 20 semanas, em toda gestação", "Só no 1º trimestre", "Só se nunca vacinou", "Só no puerpério"],
        a: 0,
        x: "Os anticorpos passam para o bebê e protegem contra coqueluche nos primeiros meses."
      },
      {
        p: "O TOTG 75 g de rotina é feito com:",
        o: ["24–28 semanas", "8–12 semanas", "32–36 semanas", "Na primeira consulta, sempre"],
        a: 0,
        x: "É quando a resistência à insulina da gravidez aparece."
      },
      {
        p: "Ácido fólico e sulfato ferroso vão, respectivamente, até:",
        o: ["12ª semana e 3 meses pós-parto", "Parto e 6 meses pós-parto", "20ª semana e o parto", "12ª semana e o parto"],
        a: 0,
        x: "Fólico previne defeito do tubo neural (fecha cedo); o ferro cobre gestação e puerpério."
      }
    ],
    bula: "Começar até 12 semanas, mínimo 6 consultas. Rastrear anemia, diabetes (jejum 92–125 ou TOTG em 24–28 semanas), sífilis, HIV, hepatites, toxo e ITU. Sífilis: penicilina já. dTpa a partir de 20 semanas. Fólico até 12 semanas."
  },
  {
    id: "parto",
    n: 22,
    cor: "#b0487a",
    titulo: "Trabalho de parto e puerpério",
    sub: "As 4 fases, aborto e pós-parto",
    busca: {t:["parto"], re:"."},
    questoes: [],
    gancho: {
      caso: "Primigesta com dilatação completa, sentindo vontade de fazer força; a cabeça do bebê está descendo.",
      p: "Em que fase do parto ela está?",
      o: ["Período expulsivo", "Dilatação", "Dequitação", "Greenberg"],
      a: 0
    },
    ideia: "O parto tem **4 períodos**: **dilatação** (até 10 cm), **expulsivo** (até o bebê nascer), **dequitação** (saída da placenta) e **Greenberg** (1ª hora depois, quando mais sangra).\nO **puerpério** é a volta do corpo ao normal (até 42 dias): o útero involui, saem os lóquios e a mãe precisa de atenção à **amamentação** e ao **humor**.",
    mapa: [
      {
        tabela: {
          titulo: "Os 4 períodos",
          cols: ["Período", "O que acontece"],
          rows: [
            ["1º Dilatação", "Fase latente e **fase ativa** (a partir de ~4–5 cm, contrações regulares) até a dilatação completa"],
            ["2º Expulsivo", "Da dilatação completa ao nascimento; puxos"],
            ["3º Dequitação", "Saída da placenta (até ~30 min); **ocitocina 10 UI IM** logo após o nascimento previne hemorragia"],
            ["4º Greenberg", "1ª hora após a placenta: vigiar sangramento e o útero contraído (globo de Pinard)"]
          ]
        }
      },
      {
        fluxo: {
          titulo: "Mecanismo do parto (cefálica fletida)",
          passos: ["Insinuação", "Descida", "Rotação interna", "Desprendimento da cabeça (extensão)", "Rotação externa", "Desprendimento do tronco"]
        }
      },
      {
        tabela: {
          titulo: "Puerpério",
          cols: ["Item", "O que saber"],
          rows: [
            ["Útero", "Logo após o parto na altura do umbigo; desce ~1 cm/dia; pélvico em ~2 semanas"],
            ["Lóquios", "**Rubros** (primeiros dias) → serossanguíneos → **brancos/amarelados**"],
            ["**Baby blues**", "Primeiros dias, choro e labilidade, **some em até 2 semanas** → acolher"],
            ["Depressão pós-parto", "**Mais de 2 semanas**, tristeza, perda de prazer, prejuízo → tratar"],
            ["Hemorragia pós-parto", "Principal causa: **atonia uterina** (4 T: tônus, trauma, tecido, trombina) → massagem + ocitocina"],
            ["Infecção puerperal", "Febre após 24 h, útero doloroso, lóquios fétidos → endometrite"],
            ["Consultas", "Mãe e bebê na **1ª semana** e revisão até **42 dias**"]
          ]
        }
      },
      {
        tabela: {
          titulo: "Abortamento",
          cols: ["Tipo", "Pistas e conduta"],
          rows: [
            ["Ameaça", "Sangramento leve, **colo fechado**, embrião vivo → repouso relativo, acompanhar"],
            ["Inevitável", "Colo aberto, sangramento → esvaziar"],
            ["**Incompleto**", "Colo aberto, **restos no útero** → esvaziamento (**AMIU**, curetagem ou misoprostol)"],
            ["Completo", "Sangramento parou, útero vazio, colo fechando → só acompanhar"],
            ["Retido", "Embrião sem batimento, colo fechado → esvaziar"]
          ]
        }
      }
    ],
    gatilhos: [
      ["Saída da placenta", "Dequitação"],
      ["Primeira hora após a placenta", "Greenberg: vigiar sangramento"],
      ["Útero amolecido + muito sangramento após o parto", "Atonia → massagem + ocitocina"],
      ["Choro e tristeza nos primeiros dias, passa em 2 semanas", "Baby blues"],
      ["Tristeza e desânimo por mais de 2 semanas", "Depressão pós-parto"],
      ["Sangramento + colo aberto + restos no útero", "Aborto incompleto → esvaziamento"]
    ],
    pegadinhas: [
      ["Baby blues precisa de antidepressivo.", "É autolimitado: acolher e orientar."],
      ["Os lóquios dos primeiros dias são brancos.", "No começo são rubros."],
      ["Aborto completo precisa de curetagem.", "O útero já está vazio: só acompanhar."],
      ["Pílula combinada é a melhor escolha para puérpera amamentando.", "Evitar estrogênio; DIU de cobre ou progestagênio."]
    ],
    relampago: [
      {
        p: "Ordem correta dos períodos do parto:",
        o: ["Dilatação, expulsivo, dequitação, Greenberg", "Expulsivo, dilatação, dequitação, Greenberg", "Dilatação, dequitação, expulsivo, Greenberg", "Greenberg, dilatação, expulsivo, dequitação"],
        a: 0,
        x: "Abre, nasce, sai a placenta, vigia a primeira hora."
      },
      {
        p: "Principal causa de hemorragia pós-parto:",
        o: ["Atonia uterina", "Laceração de períneo", "Restos placentários", "Distúrbio de coagulação"],
        a: 0,
        x: "O útero que não contrai não fecha os vasos da placenta."
      },
      {
        p: "Puérpera de 2 semanas chora fácil desde o parto, mas acha que vai passar e cuida bem do bebê:",
        o: ["Baby blues", "Depressão pós-parto grave", "Psicose puerperal", "Hipotireoidismo"],
        a: 0,
        x: "Leve, nos primeiros dias, sem prejuízo e transitório = baby blues."
      }
    ],
    bula: "Dilatação → expulsivo → dequitação → Greenberg. Ocitocina previne a atonia, principal causa de hemorragia. Lóquios: rubros → brancos. Baby blues some em 2 semanas; depressão passa disso. Aborto incompleto = esvaziar."
  },
  {
    id: "aleitamento",
    n: 23,
    cor: "#3aa37a",
    titulo: "Aleitamento e puericultura",
    sub: "Peito, curvas, marcos e triagens",
    busca: {t:["aleitamento", "crescimento", "desenvolvimento", "rn"], re:"."},
    questoes: [],
    gancho: {
      caso: "Recém-nascido de 7 dias, nasceu com 3.500 g e hoje pesa 3.250 g. Mama só no peito. A mãe acha que o leite é fraco.",
      p: "Conduta?",
      o: ["Perda < 10% é normal: manter só o peito e conferir a pega", "Complementar com fórmula", "Oferecer água e chá", "Trocar o peito por fórmula"],
      a: 0
    },
    ideia: "**Leite materno exclusivo até 6 meses** (sem água, chá ou outro leite) e continuar **até 2 anos ou mais**, com comida a partir dos 6 meses.\n**Puericultura** é acompanhar a criança saudável: **crescimento** (curvas da OMS), **desenvolvimento** (marcos), **vacinas** e **triagens**. No mínimo **7 consultas no 1º ano**.",
    mapa: [
      {
        tabela: {
          titulo: "Aleitamento",
          cols: ["Item", "O que saber"],
          rows: [
            ["Pega correta", "Boca bem aberta, **lábio inferior virado para fora**, mais aréola visível acima, queixo encostado na mama, bochechas cheias"],
            ["Hormônios", "Prolactina **produz**, ocitocina **ejeta**; a produção depende da **sucção e do esvaziamento**"],
            ["Contraindicações", "**HIV** (no Brasil), HTLV, galactosemia, alguns remédios"],
            ["Não contraindicam", "Hepatite B (bebê vacinado), mastite, febre comum"],
            ["Problemas", "Fissura → corrigir a pega. Ingurgitamento → esvaziar. **Mastite → continuar amamentando** + antibiótico"],
            ["Perda de peso", "Até **10% nos primeiros dias** é normal; recupera o peso de nascimento em 10–15 dias"]
          ]
        }
      },
      {
        tabela: {
          titulo: "Marcos do desenvolvimento",
          cols: ["Idade", "Esperado"],
          rows: [
            ["2 meses", "**Sorriso social**, acompanha com o olhar"],
            ["4 meses", "Sustenta a cabeça, leva a mão à boca, ri"],
            ["6 meses", "Senta com apoio, rola, vira para o som"],
            ["9 meses", "**Senta sem apoio**, engatinha, **pinça**, estranha pessoas"],
            ["12 meses", "Fica de pé, anda com apoio, primeiras palavras"],
            ["15–18 meses", "**Anda sozinho**, aponta, rabisca"],
            ["2 anos", "**Junta 2 palavras**, corre; controlar os esfíncteres ainda pode não acontecer"]
          ]
        }
      },
      {
        lista: {
          titulo: "Crescimento e triagens",
          itens: ["Curvas da OMS por **escore-z**: entre −2 e +2 é adequado; abaixo de −2 = baixo peso ou baixa estatura → investigar", "Consultas: 1ª semana, 1, 2, 4, 6, 9 e 12 meses; depois 18 e 24 meses", "**Teste do pezinho**: 3º ao 5º dia", "**Orelhinha**: até 1 mês. **Olhinho** (reflexo vermelho): na maternidade e nas consultas", "**Coraçãozinho** (oximetria): 24–48 h. **Barlow e Ortolani**: displasia do quadril"]
        }
      }
    ],
    gatilhos: [
      ["Mãe diz que o leite é fraco", "Não existe leite fraco: avaliar a pega e a frequência"],
      ["RN perdeu até 10% do peso na 1ª semana", "Normal"],
      ["Mastite", "Continuar amamentando"],
      ["Mãe com HIV", "Não amamentar (no Brasil)"],
      ["Não senta sem apoio aos 9 meses, sem sorriso social aos 3", "Atraso: investigar e estimular"],
      ["Curva abaixo do escore-z −2", "Investigar a causa"]
    ],
    pegadinhas: [
      ["Aleitamento exclusivo até 9 meses.", "Até 6 meses."],
      ["Em dias quentes, dar água ao bebê em aleitamento exclusivo.", "O leite materno basta."],
      ["Na mastite, suspender a amamentação.", "Continuar; esvaziar a mama ajuda a tratar."],
      ["Hepatite B da mãe contraindica amamentar.", "Não contraindica (bebê recebe vacina e imunoglobulina)."],
      ["Não controlar os esfíncteres aos 2 anos é atraso.", "Ainda é normal nessa idade."]
    ],
    relampago: [
      {p:"Sorriso social aparece em torno de:", o:["2 meses", "6 meses", "9 meses", "12 meses"], a:0, x:"Um dos primeiros marcos sociais."},
      {
        p: "Quando colher o teste do pezinho?",
        o: ["Entre o 3º e o 5º dia", "Nas primeiras 12 horas", "Com 1 mês", "Com 6 meses"],
        a: 0,
        x: "Antes de 48 h pode dar falso resultado em algumas doenças; depois de 5 dias atrasa o tratamento."
      },
      {
        p: "Criança de 9 meses. O que é esperado?",
        o: ["Senta sem apoio e faz pinça", "Anda sozinha", "Fala frases", "Controla os esfíncteres"],
        a: 0,
        x: "Andar sozinho vem entre 12 e 18 meses; frases, por volta dos 2 anos."
      }
    ],
    bula: "Peito exclusivo até 6 meses e até 2 anos ou mais. Leite fraco não existe: é a pega. Perda de até 10% é normal. Mastite: continuar. Marcos: sorriso 2 m, senta sem apoio 9 m, anda 15–18 m. Pezinho no 3º ao 5º dia."
  },
  {
    id: "ictericia",
    n: 24,
    extra: true,
    cor: "#d4b21f",
    titulo: "Icterícia e exames do fígado",
    sub: "Direta × indireta",
    busca: {t:["biliopanc", "figado"], re:"icterícia|bilirrubina|colúria|acolia|GGT|fosfatase", fora:["INT-2021.1-30", "INT-2025.2-10"]},
    questoes: ["SOI-2023.1-09", "SOI-2025.2-05", "SOI-2025.2-12", "SOI-2024.2-03"],
    gancho: {
      caso: "Bilirrubina total 8 mg/dL com predomínio de direta, fosfatase alcalina e GGT altas, urina cor de coca-cola e fezes claras.",
      p: "Onde está o problema?",
      o: ["Obstrução das vias biliares", "Hemólise", "Síndrome de Gilbert", "Anemia ferropriva"],
      a: 0
    },
    ideia: "Bilirrubina **indireta** vem da **quebra do sangue** e ainda **não passou pelo fígado**.\nO fígado a **conjuga** e ela vira **direta**, que sai pela bile.\nSobrou **indireta**: o problema está **antes ou na conjugação** (hemólise, Gilbert).\nSobrou **direta**: o problema está **na saída** (obstrução, colestase).",
    mapa: [
      {
        fluxo: {
          titulo: "O caminho da bilirrubina",
          passos: ["Hemácia velha → heme → **bilirrubina indireta** (insolúvel, presa à albumina)", "O fígado capta e **conjuga** (glicuroniltransferase)", "**Bilirrubina direta** (solúvel) → bile → intestino", "No intestino vira urobilinogênio → **dá cor às fezes**"]
        }
      },
      {
        tabela: {
          titulo: "Indireta × direta",
          cols: ["", "Indireta alta", "Direta alta"],
          rows: [
            ["Onde falha", "Antes do fígado ou na conjugação", "Hepatócito ou obstrução"],
            ["Exemplos", "Hemólise, Gilbert, icterícia do recém-nascido", "Coledocolitíase, tumor de cabeça de pâncreas, hepatite, cirrose"],
            ["Urina", "Normal (a indireta não sai na urina)", "**Colúria** (escura)"],
            ["Fezes", "Normais", "**Acolia** (claras) na obstrução"]
          ]
        }
      },
      {
        tabela: {
          titulo: "O que cada exame diz",
          cols: ["Exame", "O que diz"],
          rows: [
            ["AST / ALT", "**Lesão** do hepatócito"],
            ["FA + GGT", "**Colestase** ou obstrução. GGT isolada também sobe com álcool e anticonvulsivantes"],
            ["Albumina, proteínas, TAP/INR", "**Função de síntese** (doença crônica)"],
            ["Ultrassom", "Primeiro exame para cálculo biliar: imagem com **sombra acústica** que se move"]
          ]
        }
      }
    ],
    gatilhos: [
      ["Colúria + acolia + FA e GGT altas", "Colestase obstrutiva (direta)"],
      ["Icterícia + anemia + LDH alto", "Hemólise (indireta)"],
      ["Icterícia leve no jejum ou estresse, resto normal", "Gilbert (indireta)"],
      ["Albumina baixa + INR alargado", "Fígado sem função de síntese"],
      ["Suspeita de cálculo na vesícula", "Ultrassom"]
    ],
    pegadinhas: [
      ["A obstrução eleva a indireta; a hemólise eleva a direta.", "Invertido: obstrução → direta; hemólise → indireta."],
      ["A icterícia da cirrose é por obstrução extra-hepática.", "É por falha do hepatócito."],
      ["A radiografia simples nunca mostra cálculo biliar.", "Mostra os que têm cálcio (minoria). O exame de escolha é o ultrassom."],
      ["A tomografia é o exame inicial da colelitíase.", "O inicial é o ultrassom."]
    ],
    relampago: [
      {
        p: "Urina escura e fezes claras indicam aumento de:",
        o: ["Bilirrubina direta", "Bilirrubina indireta", "Albumina", "Hemoglobina"],
        a: 0,
        x: "Só a direta é solúvel e sai na urina; se não chega ao intestino, as fezes clareiam."
      },
      {
        p: "Qual exame avalia a função de síntese do fígado?",
        o: ["Albumina e TAP/INR", "AST e ALT", "GGT", "Amilase"],
        a: 0,
        x: "AST/ALT mostram lesão, não função. Quem mostra o que o fígado ainda fabrica é albumina e coagulação."
      },
      {
        p: "GGT alta isolada, AST/ALT normais, paciente em uso crônico de anticonvulsivante. Explicação:",
        o: ["Indução enzimática pelo anticonvulsivante", "Hepatite viral aguda", "Hemólise", "Pancreatite"],
        a: 0,
        x: "Anticonvulsivantes (e álcool) induzem a GGT sem lesar o hepatócito."
      }
    ],
    bula: "Indireta = antes do fígado (sangue). Direta = depois (bile). Urina escura + fezes claras = direta presa. AST/ALT = lesão; FA/GGT = colestase; albumina/INR = função."
  },
  {
    id: "gastrico",
    n: 25,
    extra: true,
    cor: "#9a5bc4",
    titulo: "Câncer gástrico: Lauren e Borrmann",
    sub: "Tipo de célula × formato",
    busca: {t:["esofago"], re:"câncer gástrico|adenocarcinoma gástrico|neoplasia gástrica|Borrmann|Lauren|anel de sinete"},
    questoes: ["SOI-2022.2-08", "SOI-2022.2-15", "SOI-2023.1-04"],
    gancho: {
      caso: "Biópsia gástrica: células isoladas cheias de muco, com o núcleo empurrado para o lado, infiltrando toda a parede. O estômago está rígido.",
      p: "Diagnóstico?",
      o: ["Adenocarcinoma difuso (anel de sinete)", "Adenocarcinoma intestinal", "Adenoma gástrico", "Leiomioma"],
      a: 0
    },
    ideia: "Quase todo câncer gástrico é **adenocarcinoma**.\n**Lauren** classifica pelo **tipo de célula**: intestinal × difuso.\n**Borrmann** classifica pelo **formato** que a endoscopia vê: tipos I a IV.\nO tipo **intestinal** é o fim da **cascata de Correa**, que começa com o **H. pylori**.",
    mapa: [
      {
        fluxo: {
          titulo: "Cascata de Correa (tipo intestinal)",
          passos: ["Mucosa normal", "**Gastrite crônica** (H. pylori)", "Gastrite **atrófica**", "**Metaplasia intestinal**", "Displasia", "**Adenocarcinoma intestinal**"]
        }
      },
      {
        tabela: {
          titulo: "Lauren",
          cols: ["", "Intestinal", "Difuso"],
          rows: [
            ["Histologia", "**Glândulas atípicas**, atipia e pleomorfismo nuclear", "**Células em anel de sinete** soltas, sem glândulas"],
            ["Origem", "Cascata de Correa", "Perda da E-caderina, sem cascata"],
            ["Perfil", "Homem idoso, antro", "Mais jovem, qualquer sexo"],
            ["Prognóstico", "Melhor", "Pior; pode virar linite plástica"]
          ]
        }
      },
      {
        lista: {
          titulo: "Borrmann (só câncer avançado)",
          itens: ["**I**: polipoide, vegetante", "**II**: ulcerado, bordas elevadas e bem definidas", "**III**: ulcerado e infiltrativo, bordas mal definidas (o mais comum)", "**IV**: infiltrativo difuso = **linite plástica**", "Câncer **precoce** = limitado à mucosa e submucosa; Borrmann não se aplica"]
        }
      }
    ],
    gatilhos: [
      ["Anel de sinete", "Lauren difuso"],
      ["Borrmann IV, estômago rígido", "Linite plástica (difuso)"],
      ["Gastrite atrófica + metaplasia intestinal", "Caminho do tipo intestinal"],
      ["Qualquer Borrmann", "Câncer avançado, não precoce"],
      ["Idoso com epigastralgia, plenitude e perda de peso", "Pensar em câncer gástrico"]
    ],
    pegadinhas: [
      ["Bem diferenciado quer dizer benigno.", "Adenocarcinoma é maligno, bem diferenciado ou não."],
      ["Borrmann II é câncer precoce, limitado à mucosa.", "Borrmann classifica câncer avançado."],
      ["O tipo intestinal tem células em anel de sinete.", "Anel de sinete é do difuso."],
      ["Lesão infiltrativa Borrmann IV pode ser adenoma.", "Adenoma não infiltra; é adenocarcinoma."]
    ],
    relampago: [
      {
        p: "Adenocarcinoma gástrico intestinal, Borrmann II. O que a lâmina mostra?",
        o: ["Glândulas atípicas com pleomorfismo nuclear", "Células em anel de sinete", "Células fusiformes benignas", "Só inflamação"],
        a: 0,
        x: "Intestinal forma glândulas (atípicas). Anel de sinete é do difuso."
      },
      {p:"Qual Borrmann é a linite plástica?", o:["IV", "I", "II", "III"], a:0, x:"IV = infiltração difusa da parede, estômago em \"garrafa de couro\"."},
      {
        p: "Primeiro passo da cascata de Correa:",
        o: ["Gastrite crônica por H. pylori", "Displasia", "Metaplasia intestinal", "Adenoma"],
        a: 0,
        x: "Gastrite → atrofia → metaplasia → displasia → carcinoma."
      }
    ],
    bula: "Lauren = célula (intestinal forma glândula; difuso tem anel de sinete). Borrmann = formato (IV = linite). O H. pylori abre a cascata."
  }
];
