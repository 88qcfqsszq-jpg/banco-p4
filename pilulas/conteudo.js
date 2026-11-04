/* PÍLULAS PARA PROVA · SOI IV
   Fontes: enunciados, gabaritos e comentários das provas de SOI IV (2022.2 a 2025.2) do banco Exatamente,
   complementados por referências padrão de clínica e farmacologia.
   Estrutura de cada pílula:
     gancho      caso curto antes da explicação (o: alternativas, a: índice da certa)
     ideia       a frase que explica o tema inteiro (**negrito**)
     mapa        blocos: {tabela:{titulo,cols,rows}} | {fluxo:{titulo,passos}} | {lista:{titulo,itens}}
                 tabela com cols[0]==='' vira comparação lado a lado; senão, vira cartões
     gatilhos    [viu isto, pense nisto]
     pegadinhas  [afirmação falsa que já caiu, correção]
     relampago   3 perguntas: {p, o, a, x}
     bula        o que levar na cabeça
     questoes    IDs das questões reais do banco
*/
window.PL_PILULAS = [
{
  id:'pancreatite', cor:'#e8743b', titulo:'Pancreatite aguda × crônica', sub:'Autodigestão × fibrose',
  questoes:['SOI-2022.2-02','SOI-2022.2-12','SOI-2023.1-05','SOI-2023.1-06','SOI-2024.1-02','SOI-2024.2-13','SOI-2025.2-14'],
  gancho:{caso:'Homem, 45 anos, depois de um churrasco com muita cerveja: dor epigástrica intensa, em faixa, irradiando para as costas. Vomita várias vezes e a dor não alivia. Lipase 5× acima do normal.',
    p:'Qual o diagnóstico?', o:['Úlcera péptica perfurada','Pancreatite aguda','Colecistite aguda','Obstrução intestinal'], a:1},
  ideia:'**Aguda:** a tripsina se ativa **dentro** do pâncreas e ele **se autodigere**. A lesão é **reversível**.\n**Crônica:** agressões repetidas viram **fibrose**. O pâncreas para de fabricar **enzima** (e depois **insulina**). O dano é **irreversível**.',
  mapa:[
    {fluxo:{titulo:'Como a aguda acontece', passos:[
      'Agressão: **cálculo biliar** obstruindo o ducto ou **álcool** (juntos, ~80% dos casos)',
      'Cálcio sobe dentro da célula acinar → **tripsina ativada cedo**',
      '**Autodigestão** do pâncreas + necrose gordurosa',
      'Citocinas (IL-1, IL-6, TNF-α) → **SIRS**, líquido no 3º espaço, choque']}},
    {tabela:{titulo:'Aguda × crônica', cols:['','Aguda','Crônica'], rows:[
      ['Causa','Cálculo biliar, álcool, hipertrigliceridemia','Álcool crônico (e tabaco)'],
      ['Dor','Súbita, intensa, epigástrica, **em faixa → dorso**; vômito não alivia','Recorrente ou constante, em crises'],
      ['Laboratório','**Amilase/lipase ≥ 3×** (lipase é mais específica)','Enzimas muitas vezes **normais**'],
      ['Marca','Autodigestão, necrose gordurosa, SIRS','Fibrose, calcificações, **esteatorreia**, perda de peso, **diabetes**'],
      ['Diagnóstico','**2 de 3**: dor típica, enzimas ≥ 3×, imagem','Clínica + imagem (calcificações, ducto irregular)'],
      ['Conduta','Suporte: **hidratação**, analgesia, dieta precoce; tratar a causa (colecistectomia)','Parar álcool e tabaco, **dieta hipogordurosa + enzimas**, analgesia']]}}
  ],
  gatilhos:[
    ['Dor em faixa para as costas + vômito que não alivia','Pancreatite aguda'],
    ['Lipase ou amilase ≥ 3× o normal','Fecha o diagnóstico junto com a dor'],
    ['Litíase biliar ou libação alcoólica antes da dor','Causa da pancreatite aguda'],
    ['Hipertrigliceridemia + refeição gordurosa','Também causa pancreatite aguda'],
    ['Etilista + dor crônica + perda de peso + fezes claras e gordurosas','Crônica com insuficiência exócrina']],
  pegadinhas:[
    ['Na pancreatite crônica, os danos são reversíveis.','Reversível é a aguda. A crônica é fibrose irreversível.'],
    ['Na crônica, dieta hipergordurosa sem precisar de enzimas.','Dieta hipogordurosa + reposição de enzimas pancreáticas.'],
    ['Só a cirurgia garante o controle da dor na crônica.','Nenhum procedimento garante. A cirurgia é individualizada.'],
    ['Amilase normal afasta pancreatite crônica.','Na crônica as enzimas costumam ser normais: o pâncreas já não tem o que liberar.']],
  relampago:[
    {p:'Mulher, 32 anos: dor intensa no andar superior, vômitos, febre, ruídos hidroaéreos ausentes. Amilase alta e lipase muito alta.',
     o:['Pancreatite aguda','Apendicite aguda','Colite ulcerativa','Gastrite aguda'], a:0,
     x:'Dor alta + lipase muito alta = pancreatite. Apendicite dói na fossa ilíaca direita e não eleva lipase.'},
    {p:'Etilista de 53 anos com dor epigástrica constante, emagrecendo, fezes claras e gordurosas. O quadro indica:',
     o:['Insuficiência exócrina do pâncreas','Lesão pancreática reversível','Úlcera duodenal','Hepatite alcoólica'], a:0,
     x:'Esteatorreia + perda de peso no etilista = pancreatite crônica: falta enzima para digerir gordura.'},
    {p:'Centro do tratamento da pancreatite aguda:',
     o:['Hidratação venosa, analgesia e tratar a causa','Cirurgia de urgência','Antibiótico profilático para todos','Corticoide em dose alta'], a:0,
     x:'O tratamento é de suporte. Antibiótico só se houver necrose infectada; colecistectomia quando a causa for biliar.'}],
  bula:'Aguda: a tripsina se solta, o pâncreas se come, a lipase sobe. Crônica: fibrose, falta enzima, gordura nas fezes.'
},
{
  id:'estomago', cor:'#d9578f', titulo:'Estômago: agressão × defesa', sub:'H. pylori, AINE, IBP e refluxo',
  questoes:['SOI-2022.2-04','SOI-2023.1-02','SOI-2024.1-08','SOI-2024.2-15','SOI-2025.2-01','SOI-2025.2-04','SOI-2024.2-10'],
  gancho:{caso:'Mulher, 56 anos, toma ibuprofeno todo dia por dor nos joelhos. Tem H. pylori e queimação epigástrica.',
    p:'Como o AINE lesa a mucosa?', o:['Inibe a COX-1 → menos prostaglandina → menos muco e bicarbonato','Aumenta a liberação de gastrina','Bloqueia a bomba de prótons','Neutraliza o ácido do estômago'], a:0},
  ideia:'Gastrite e úlcera são uma **balança desequilibrada**.\nDe um lado, os **agressores**: **ácido, H. pylori, AINE e tabaco**.\nDo outro, as **defesas**: **muco, bicarbonato, prostaglandinas, fluxo sanguíneo e renovação do epitélio**.\nO tratamento tira peso dos agressores.',
  mapa:[
    {tabela:{titulo:'Os agressores', cols:['Agressor','Como agride'], rows:[
      ['Ácido (HCl)','Lesa a mucosa quando as defesas caem'],
      ['H. pylori','**Urease** faz amônia e neutraliza o ácido ao redor (a bactéria sobrevive). **Flagelos** colonizam o muco. **VacA** vacuoliza e mata a célula. **CagA** aumenta a inflamação e o risco de câncer'],
      ['AINE','Inibe a **COX-1** → menos prostaglandinas → menos muco, bicarbonato e fluxo'],
      ['Tabaco','Menos perfusão, menos muco e bicarbonato']]}},
    {tabela:{titulo:'Os remédios', cols:['Classe','Ação','Detalhe de prova'], rows:[
      ['IBP (omeprazol)','Bloqueia a H⁺/K⁺-ATPase: a **via final**, qualquer que seja o estímulo','Mais eficaz que o anti-H2. Tomar **em jejum**'],
      ['Anti-H2','Bloqueia o receptor H2 da célula parietal','Inferior ao IBP'],
      ['Antiácido','Base fraca + HCl → água e sal','Alívio rápido e curto, só sintomático'],
      ['Sucralfato e bismuto','Protegem a mucosa','Efeito protetor, não negativo'],
      ['Pró-cinético','Acelera o esvaziamento, aumenta o tônus do EEI','Escolha no **refluxo alcalino** pós-colecistectomia'],
      ['Erradicar H. pylori','**IBP + amoxicilina + claritromicina**','Indicado na úlcera com H. pylori']]}}
  ],
  gatilhos:[
    ['Úlcera + H. pylori','Erradicar: IBP + amoxicilina + claritromicina'],
    ['AINE crônico + dor epigástrica','COX-1 inibida, prostaglandina cai'],
    ['VacA','Vacuoliza e mata a célula → úlcera'],
    ['CagA','Mais inflamação e mais risco de câncer gástrico'],
    ['Refluxo alcalino após colecistectomia','Pró-cinético, não IBP'],
    ['DRGE','Falha da barreira antirrefluxo, da depuração esofágica e/ou da resistência do epitélio']],
  pegadinhas:[
    ['Os antagonistas H2 são os mais eficazes.','O IBP é superior: bloqueia a via final.'],
    ['O IBP deve ser tomado com alimento.','Em jejum: comida reduz a absorção do IBP.'],
    ['H. pylori se trata com anti-H2 + ampicilina + gentamicina por 28 dias.','IBP + amoxicilina + claritromicina.'],
    ['A urease acidifica o estômago.','A urease gera amônia e alcaliniza o redor da bactéria.'],
    ['A CagA reduz o risco de câncer.','A CagA aumenta inflamação e risco de câncer.'],
    ['A proteção gástrica depende da COX-2.','Depende da COX-1.'],
    ['Sucralfato e bismuto prejudicam a mucosa.','Eles protegem a mucosa.']],
  relampago:[
    {p:'Qual fator do H. pylori vacuoliza a célula epitelial e leva à apoptose?', o:['VacA','CagA','Urease','Flagelos'], a:0,
     x:'VacA = vacuolizante. CagA aumenta inflamação e risco de câncer; urease protege a bactéria do ácido.'},
    {p:'Seis meses após colecistectomia: esofagite, e a pHmetria mostra refluxo alcalino. Melhor classe:', o:['Pró-cinético','IBP','Anti-H2','Antiácido'], a:0,
     x:'Refluxo alcalino é bile, não ácido. O pró-cinético acelera o esvaziamento e reduz o contato do refluxo com o esôfago.'},
    {p:'Por que o IBP é mais eficaz que o anti-H2?', o:['Bloqueia a bomba de prótons, via final de qualquer estímulo','Neutraliza o ácido já formado','Aumenta a produção de muco','Mata o H. pylori sozinho'], a:0,
     x:'O anti-H2 bloqueia só o estímulo da histamina. O IBP bloqueia a bomba que todos os estímulos usam.'}],
  bula:'Agressores × defesas. AINE tira a prostaglandina (COX-1). H. pylori: urease sobrevive, VacA mata a célula, CagA inflama. IBP em jejum bloqueia a via final.'
},
{
  id:'protozoarios', cor:'#38a37a', titulo:'Giardíase × amebíase', sub:'Cisto, fecal-oral, metronidazol',
  questoes:['SOI-2022.2-01','SOI-2023.1-15','SOI-2024.1-03','SOI-2024.1-04','SOI-2024.2-02','SOI-2025.2-06','SOI-2025.2-10'],
  gancho:{caso:'Criança de 5 anos, de creche, com diarreia aquosa, distensão e cólicas há 5 semanas. Sem sangue e sem febre. Metade da turma está igual.',
    p:'Forma infectante e tratamento?', o:['Cisto · metronidazol','Ovo · albendazol','Larva pela pele · ivermectina','Trofozoíto · ciprofloxacino'], a:0},
  ideia:'Os dois protozoários **entram como cisto** pela via **fecal-oral** (água, alimento, mãos) e **saem com metronidazol**.\nA diferença é **onde moram**.\nA **giárdia** forra o **intestino delgado** e atrapalha a absorção: diarreia **gordurosa, sem sangue**.\nA **ameba** invade o **cólon**: diarreia **com muco e sangue**, e pode chegar ao fígado.',
  mapa:[
    {tabela:{titulo:'Lado a lado', cols:['','Giardíase','Amebíase'], rows:[
      ['Agente','Giardia lamblia (intestinalis)','Entamoeba histolytica'],
      ['Infecta por','**Cisto**, fecal-oral','**Cisto**, fecal-oral'],
      ['Onde vive','**Delgado**, aderida à mucosa','**Cólon**, invade a parede'],
      ['Diarreia','Aquosa ou gordurosa, má absorção; muitas vezes **crônica** (> 4 semanas)','**Disenteria**: muco e sangue, dor, febre'],
      ['Mecanismo','Atrofia e desnudamento das vilosidades → diarreia **osmótica/disabsortiva**','Úlceras no cólon; pode formar abscesso hepático'],
      ['Tratamento','**Metronidazol** ou tinidazol','**Metronidazol** (oral ou IV)'],
      ['Prevenção','**Ferver ou filtrar** a água (a cloração comum não basta)','Saneamento, água tratada, higiene das mãos']]}},
    {fluxo:{titulo:'Ciclo direto (sem vetor, sem hospedeiro intermediário)', passos:[
      'Cisto ingerido com água, alimento ou mãos sujas',
      'No intestino o cisto se abre → **trofozoíto** se multiplica',
      'Trofozoíto vira cisto de novo e sai nas fezes',
      'Fezes contaminam água e alimento → novo ciclo']}},
    {lista:{titulo:'Metronidazol', itens:['Entra no protozoário e gera **radicais livres que lesam o DNA**','Serve para giárdia, ameba e tricomonas','Evitar álcool durante o uso']}}
  ],
  gatilhos:[
    ['Creche + diarreia aquosa persistente, sem sangue','Giardíase'],
    ['Diarreia por giárdia há mais de 4 semanas','Classificação temporal: crônica'],
    ['Má absorção de gordura com vilosidades lesadas','Diarreia osmótica/disabsortiva da giárdia'],
    ['Diarreia com muco e sangue + perda de peso','Amebíase (colite amebiana)'],
    ['Surto pela água da cidade','Giárdia: ferver ou filtrar']],
  pegadinhas:[
    ['A forma infectante da giárdia é o trofozoíto (ou o ovo).','É o cisto.'],
    ['A giárdia vive no intestino grosso e tem vetor ou hospedeiro intermediário.','Vive no delgado; ciclo direto, sem vetor.'],
    ['Albendazol ou ivermectina são a primeira linha na giardíase.','Metronidazol ou tinidazol.'],
    ['Amebíase se trata com ciprofloxacino.','Metronidazol.'],
    ['A maioria dos infectados por E. histolytica tem sintomas.','A maioria fica assintomática.'],
    ['A giárdia causa diarreia secretora por toxina.','Causa diarreia osmótica/disabsortiva por lesão das vilosidades.']],
  relampago:[
    {p:'Depois de beber água não tratada em viagem: diarreia persistente e distensão. Fezes com cistos e trofozoítos. Tratamento:', o:['Metronidazol','Albendazol','Ivermectina','Ciprofloxacino'], a:0,
     x:'Cistos e trofozoítos = protozoário (giárdia). Albendazol e ivermectina são para vermes.'},
    {p:'Mecanismo de ação do metronidazol:', o:['Gera radicais livres que lesam o DNA do protozoário','Inibe a polimerização da tubulina','Abre canais de cloro e paralisa','Inibe a síntese da parede celular'], a:0,
     x:'Tubulina é o albendazol; canais de cloro, a ivermectina.'},
    {p:'Diarreia com muco, febre, dor e emagrecimento; parasitológico com E. histolytica. Como foi a infecção?', o:['Ingestão de cistos (água, alimento ou mãos)','Larva penetrando a pele','Picada de inseto','Carne malcozida'], a:0,
     x:'Ameba e giárdia: cisto engolido, via fecal-oral.'}],
  bula:'O cisto entra pela boca, o metronidazol resolve. Giárdia = delgado, gordura, sem sangue. Ameba = cólon, muco e sangue.'
},
{
  id:'cirrose', cor:'#b07a2a', titulo:'Cirrose e hipertensão portal', sub:'Fibrose trava o fluxo',
  questoes:['SOI-2023.1-09','SOI-2023.1-12','SOI-2024.1-09','SOI-2024.2-05','SOI-2024.2-07','SOI-2025.2-02','SOI-2025.2-12'],
  gancho:{caso:'Etilista, 53 anos, hematêmese volumosa, PA 85/50, FC 115. Abdome com ascite, baço palpável e fígado retraído. Ultrassom: veia porta dilatada.',
    p:'O que ele tem?', o:['Cirrose alcoólica com hipertensão portal (varizes)','Hepatite A','Insuficiência cardíaca','Úlcera perfurada'], a:0},
  ideia:'Cirrose é **fibrose com nódulos** que endurece o fígado.\nO sangue que vem do intestino **não consegue passar**: a pressão da veia porta sobe e o sangue procura **atalhos**, que viram varizes.\nAo mesmo tempo, o fígado doente **para de fabricar** albumina e fatores de coagulação, e **para de conjugar e excretar** bilirrubina.',
  mapa:[
    {fluxo:{titulo:'Da fibrose às complicações', passos:[
      '**Álcool**, hepatite **B ou C**, esteatose (MASH), autoimune → fibrose e nódulos',
      'Resistência **dentro** do fígado aumenta → **hipertensão portal**',
      'Colaterais portossistêmicas → **varizes de esôfago** (hematêmese, choque) e **cabeça de medusa**',
      'Baço congestionado → **esplenomegalia** → plaquetopenia',
      '**Ascite** = hipertensão portal + albumina baixa + retenção de sódio',
      'Hepatócito falha → **icterícia**, albumina baixa, coagulação alterada']}},
    {tabela:{titulo:'Onde está o bloqueio', cols:['Tipo','Causa','Pista'], rows:[
      ['Pré-hepática','Trombose da veia porta','Fígado normal'],
      ['Intra-hepática','**Cirrose** (a mais comum)','Fígado nodular/retraído, sinais de doença hepática'],
      ['Pós-hepática','IC direita, Budd-Chiari','Turgência jugular, fígado grande e congesto']]}},
    {lista:{titulo:'Sinais do cirrótico no exame físico', itens:['Icterícia, ascite, edema de membros','Eritema palmar, aranhas vasculares, ginecomastia (excesso de estrogênio)','Circulação colateral, esplenomegalia','Fígado retraído ou nodular']}}
  ],
  gatilhos:[
    ['Etilista + ascite + esplenomegalia + cabeça de medusa','Hipertensão portal por cirrose'],
    ['Hematêmese em cirrótico','Varizes de esôfago rompidas'],
    ['Plaquetopenia no cirrótico','Baço grande sequestrando plaquetas'],
    ['Fígado retraído ou nodular','Cirrose'],
    ['Esplenomegalia com fígado normal','Pensar em trombose de porta (pré-hepática)']],
  pegadinhas:[
    ['A ascite vem só da hipoalbuminemia.','É a soma de hipertensão portal + albumina baixa + retenção de sódio.'],
    ['A icterícia da cirrose vem de obstrução extra-hepática.','Vem da falha do hepatócito em conjugar e excretar.'],
    ['Hepatite A pode levar a cirrose.','A hepatite A não cronifica. Cirrose viral é por B ou C.'],
    ['O diagnóstico de cirrose é só pelo exame físico.','Confirma-se com laboratório, imagem e, às vezes, biópsia.']],
  relampago:[
    {p:'Por que o cirrótico tem esplenomegalia?', o:['Congestão pelo aumento da pressão portal','Infecção do baço','Hemólise autoimune','Infiltração tumoral'], a:0,
     x:'A veia esplênica drena na porta. Porta pressurizada = baço congestionado.'},
    {p:'Causa de cirrose além do álcool:', o:['Hepatite C crônica','Hepatite A','Giardíase','Pancreatite aguda'], a:0,
     x:'B e C cronificam e causam cirrose; a A não cronifica.'},
    {p:'Etilista com hepatomegalia nodular, esplenomegalia, varizes e hemorragia digestiva alta. Tipo de hipertensão portal:', o:['Intra-hepática, por cirrose','Pré-hepática, por trombose','Pós-hepática, por IC direita','Idiopática'], a:0,
     x:'Fígado nodular no etilista aponta a fibrose como o bloqueio: intra-hepática.'}],
  bula:'A fibrose trava o fluxo → porta pressurizada → varizes, baço grande, ascite. O fígado que falha dá icterícia e albumina baixa.'
},
{
  id:'vermes', cor:'#7b6bd6', titulo:'Vermes: como entram e o que fazem', sub:'Oxiúro, áscaris, estrongiloides, tênia',
  questoes:['SOI-2023.1-01','SOI-2024.1-01','SOI-2024.1-05','SOI-2024.2-08','SOI-2024.2-11','SOI-2025.2-07','SOI-2025.2-15'],
  gancho:{caso:'Criança de 7 anos, prurido anal intenso à noite, irritada. No exame, vermes finos e brancos na região perianal.',
    p:'Parasita e tratamento?', o:['Enterobius · albendazol','Ascaris · praziquantel','Strongyloides · metronidazol','Taenia · ivermectina'], a:0},
  ideia:'Para acertar verme, pergunte **como entra** e **o que faz no caminho**.\nTrês portas de entrada: **ovo engolido** (oxiúro, áscaris), **larva pela pele** (estrongiloides, ancilóstomo) e **carne malcozida** (tênia).\nQuem passa pelo **pulmão** dá tosse e eosinofilia (síndrome de Loeffler).',
  mapa:[
    {tabela:{titulo:'Os que caem', cols:['Verme','Entra por','Marca de prova','Tratamento'], rows:[
      ['Enterobius (oxiúro)','Ovo (mão-boca, roupas)','**Prurido anal noturno**; adulto no ceco; fêmea põe ovos no períneo; autoinfecção','Albendazol'],
      ['Ascaris','Ovo embrionado','**Passa pelo pulmão** (Loeffler), sobe, é engolido e vira adulto no delgado; pode obstruir','Albendazol ou mebendazol'],
      ['Strongyloides','**Larva pela pele**','**Autoinfecção**; hiperinfecção no imunossuprimido (corticoide)','**Ivermectina**'],
      ['Taenia','Carne malcozida com cisticerco (**boi → saginata**, **porco → solium**)','Proglotes nas fezes; ovos resistem meses no ambiente úmido','Praziquantel ou albendazol']]}},
    {tabela:{titulo:'Como os remédios agem', cols:['Fármaco','Mecanismo'], rows:[
      ['Albendazol / mebendazol','Inibe a **polimerização da tubulina** → o verme não capta glicose'],
      ['Ivermectina','Abre **canais de cloro** → paralisia do verme'],
      ['Praziquantel','Aumenta a permeabilidade ao **cálcio** → contração e paralisia'],
      ['Pamoato de pirantel','Bloqueio neuromuscular → paralisia espástica']]}}
  ],
  gatilhos:[
    ['Prurido anal noturno em criança','Enterobíase (fita adesiva perianal)'],
    ['Tosse + eosinofilia + verme intestinal','Fase pulmonar: áscaris, estrongiloides, ancilóstomo'],
    ['Imunossuprimido ou em corticoide + verme','Estrongiloidíase: risco de hiperinfecção'],
    ['Segmentos brancos móveis nas fezes + carne malpassada','Teníase (boi → T. saginata)'],
    ['Andar descalço em solo contaminado','Larva pela pele: estrongiloides, ancilóstomo']],
  pegadinhas:[
    ['Albendazol é a primeira escolha na estrongiloidíase.','Ivermectina.'],
    ['A larva filarioide do estrongiloides é engolida e vai direto ao intestino.','Penetra pela pele e passa pelo pulmão.'],
    ['No imunossuprimido não precisa repetir a ivermectina.','Repete-se 2 semanas depois.'],
    ['Porco é hospedeiro da T. saginata, e boi da T. solium.','Invertido: porco → solium; boi → saginata.'],
    ['As proglotes liberam cisticercos no solo.','Liberam ovos. O cisticerco fica na carne do hospedeiro intermediário.'],
    ['O mebendazol paralisa a musculatura do verme.','Inibe a tubulina e corta a glicose.']],
  relampago:[
    {p:'Primeira escolha na estrongiloidíase:', o:['Ivermectina','Albendazol','Metronidazol','Praziquantel'], a:0,
     x:'Ivermectina é mais efetiva; trata até assintomáticos pelo risco de hiperinfecção.'},
    {p:'Mecanismo do albendazol:', o:['Inibe a tubulina → o verme fica sem glicose','Abre canais de cloro','Aumenta a permeabilidade ao cálcio','Gera radicais livres no DNA'], a:0,
     x:'"Bendazol" = tubulina. Cloro é ivermectina; cálcio é praziquantel; radicais livres é metronidazol.'},
    {p:'Por que o áscaris pode causar tosse e eosinofilia?', o:['As larvas passam pelo pulmão antes de virar adultas','Os ovos são inalados','O adulto vive no brônquio','Uma toxina do verme irrita a traqueia'], a:0,
     x:'Ciclo: ovo → larva no delgado → sangue → pulmão → sobe e é engolida → adulto no delgado.'}],
  bula:'Oxiúro coça à noite. Áscaris passa pelo pulmão. Estrongiloides entra pela pele, se reinfecta e é grave no imunossuprimido: ivermectina. Tênia vem da carne. "Bendazol" = tubulina.'
},
{
  id:'itu', cor:'#4f9cf0', titulo:'Infecção urinária', sub:'Grupos de risco, cistite × pielonefrite',
  questoes:['SOI-2022.2-07','SOI-2022.2-10','SOI-2022.2-11','SOI-2023.1-08','SOI-2023.1-11','SOI-2024.1-07','SOI-2024.2-14'],
  gancho:{caso:'Gestante de 28 semanas, pré-natal de rotina. Urocultura com E. coli. Ela não tem nenhum sintoma.',
    p:'Conduta?', o:['Tratar: risco de pielonefrite, prematuridade e baixo peso','Não tratar, porque não tem sintomas','Fluoroquinolona empírica','Tratar, porque toda mulher com bacteriúria deve ser tratada'], a:0},
  ideia:'ITU é **bactéria do intestino (E. coli) que sobe** pela uretra.\nQuem tem **urina parada, anatomia diferente ou imunidade baixa** pega mais.\nA **cistite** fica na bexiga e **não dá febre**. Se tem **febre + dor lombar/Giordano**, a infecção **subiu ao rim**: pielonefrite.',
  mapa:[
    {tabela:{titulo:'Grupos de risco e por quê', cols:['Grupo','Por quê'], rows:[
      ['Gestante','**Progesterona** dilata o ureter e reduz o peristaltismo; o útero comprime; **estase**; urina menos concentrada e mais alcalina'],
      ['Criança','Malformações, **refluxo vesicoureteral**, fralda e higiene'],
      ['Idoso','Imunidade menor, **resíduo pós-miccional** (próstata, prolapso), menos estrogênio, comorbidades, déficit cognitivo'],
      ['Mulher jovem','Uretra curta e perto do ânus; atividade sexual'],
      ['Sonda vesical, diabetes','Porta de entrada e biofilme; glicosúria e imunidade menor']]}},
    {tabela:{titulo:'Cistite × pielonefrite', cols:['','Cistite','Pielonefrite'], rows:[
      ['Sintomas','Disúria, polaciúria, urgência, dor suprapúbica','**Febre**, calafrio, **dor lombar, Giordano +**, náusea'],
      ['Gravidade','Sem febre nem instabilidade','Pode evoluir para **sepse**'],
      ['Tratamento','**Nitrofurantoína** ou fosfomicina; quinolona não é 1ª escolha','Grave: internar, colher cultura e **antibiótico EV empírico já** (ex.: ceftriaxona)']]}},
    {lista:{titulo:'Bacteriúria assintomática', itens:['Bactéria na urocultura **sem sintomas**','Trata **só na gestante** e antes de procedimento urológico','Fica mais comum com idade, sexo feminino, atividade sexual, diabetes e sonda']}}
  ],
  gatilhos:[
    ['Disúria + polaciúria, sem febre','Cistite'],
    ['Febre + dor lombar + Giordano positivo','Pielonefrite'],
    ['ITU com hipotensão, taquicardia e febre','Urossepse: antibiótico EV empírico imediato'],
    ['Gestante com bacteriúria assintomática','Trata'],
    ['Não gestante com bacteriúria assintomática','Não trata']],
  pegadinhas:[
    ['Quinolona é a 1ª escolha na cistite não complicada.','Ela fica na reserva, para evitar resistência e efeitos graves.'],
    ['Fluoroquinolona é a escolha empírica na gestante.','É evitada. Usa-se cefalexina, amoxicilina ou nitrofurantoína.'],
    ['Na gestante não se trata, porque todo antibiótico é teratogênico.','Trata, com antibióticos seguros.'],
    ['Com febre e hipotensão, espera-se o antibiograma para começar.','Colhe a cultura e começa logo, empírico.'],
    ['Cistite pode causar febre e instabilidade.','Isso já é pielonefrite.']],
  relampago:[
    {p:'Mulher com disúria há 5 dias. Chega com PA 80×50, FC 130, febril. Conduta:', o:['Internar e iniciar antibiótico EV empírico','Esperar o antibiograma','Nitrofurantoína oral em casa','Só hidratação'], a:0,
     x:'Febre + instabilidade = pielonefrite grave. O que muda a mortalidade é o antibiótico precoce.'},
    {p:'Por que a gestante tem mais ITU?', o:['A progesterona dilata o ureter e causa estase','A uretra fica mais longa','A urina fica mais ácida','A imunidade aumenta'], a:0,
     x:'Progesterona relaxa a musculatura lisa; urina parada favorece a bactéria.'},
    {p:'Quem deve tratar bacteriúria assintomática?', o:['Gestante','Idosa institucionalizada','Diabética','Toda mulher adulta'], a:0,
     x:'Fora da gestação (e de procedimento urológico) tratar só aumenta resistência.'}],
  bula:'A E. coli sobe. Bexiga = sem febre; rim = febre e dor lombar. Gestante com bactéria trata sempre; sem sintoma, fora da gestação, não. Quinolona fica na reserva.'
},
{
  id:'dii', cor:'#26a3b2', titulo:'Crohn × retocolite e diarreias', sub:'Fundo e salteado × raso e contínuo',
  questoes:['SOI-2023.1-07','SOI-2024.1-14','SOI-2024.2-09','SOI-2023.1-10','SOI-2024.2-12','SOI-2025.2-08'],
  gancho:{caso:'Mulher, 24 anos, diarreia sem sangue há 2 anos, perda de peso, fístula perianal e um episódio de obstrução intestinal. A mãe teve o mesmo quadro.',
    p:'Diagnóstico?', o:['Doença de Crohn','Retocolite ulcerativa','Enterocolite infecciosa','Diverticulose'], a:0},
  ideia:'**Crohn** é **profundo e salteado**: atravessa a parede inteira (**transmural**, com granulomas) e pode estar **da boca ao ânus**. Por isso dá fístula, estenose e doença perianal.\n**Retocolite** é **rasa e contínua**: só a **mucosa**, começa no **reto** e sobe pelo cólon. Por isso dá **sangue** nas fezes.',
  mapa:[
    {tabela:{titulo:'Crohn × retocolite', cols:['','Crohn','Retocolite'], rows:[
      ['Onde','Boca ao ânus (clássico: **íleo terminal**), salteado','Só cólon e reto, **contínuo a partir do reto**'],
      ['Profundidade','**Transmural**, granulomas','Só **mucosa**'],
      ['Fezes','Diarreia; sangue menos comum','**Diarreia com sangue**, urgência, tenesmo'],
      ['Complicações','**Fístulas**, estenose e obstrução, abscesso, doença perianal, má absorção','Megacólon tóxico, hemorragia, pseudopólipos, câncer'],
      ['Endoscopia','Pedra de calçamento, úlceras aftoides','Mucosa friável, úlceras rasas contínuas'],
      ['Cigarro','Piora','Parece proteger']]}},
    {tabela:{titulo:'Os 5 tipos de diarreia', cols:['Tipo','Mecanismo','Exemplos'], rows:[
      ['Osmótica','Soluto não absorvido puxa água; **para com jejum**','Deficiência de lactase, laxativo osmótico'],
      ['Secretória','Toxina faz secretar cloro e água; **continua em jejum**','Cólera, E. coli enterotoxigênica'],
      ['Disabsortiva','Má absorção de gordura (**esteatorreia**)','Celíaca, Crohn, giárdia, estrongiloides, Whipple'],
      ['Inflamatória','Lesão da mucosa: muco, sangue, febre','DII, Shigella, ameba'],
      ['Funcional / motora','Trânsito rápido, sem tempo de absorver','Intestino irritável, hipertireoidismo']]}},
    {lista:{titulo:'Doença celíaca', itens:['Não é DII: é reação ao **glúten** que atrofia as vilosidades','Triagem: **antitransglutaminase IgA** e antiendomísio','Tratamento: tirar o glúten']}}
  ],
  gatilhos:[
    ['Fístula, doença perianal ou obstrução em jovem','Crohn'],
    ['Diarreia com sangue começando no reto','Retocolite'],
    ['Granuloma na biópsia','Crohn'],
    ['Má absorção + antitransglutaminase positivo','Doença celíaca'],
    ['Diarreia que para com jejum','Osmótica']],
  pegadinhas:[
    ['A retocolite é limitada ao reto.','Começa no reto e pode subir pelo cólon inteiro.'],
    ['Os marcadores da doença celíaca são IgE total e IgA total.','Antitransglutaminase e antiendomísio.'],
    ['Diarreia secretória é soluto osmótico na luz.','Essa é a osmótica. A secretória é toxina e íons.'],
    ['Doença celíaca é uma DII tratada com corticoide.','Não é DII; o tratamento é tirar o glúten.']],
  relampago:[
    {p:'Qual achado sugere Crohn e não retocolite?', o:['Fístula perianal','Sangue nas fezes','Acometimento contínuo a partir do reto','Pseudopólipos'], a:0,
     x:'Inflamação transmural fura a parede: fístulas e doença perianal são do Crohn.'},
    {p:'Esteatorreia por má absorção de lipídios é diarreia:', o:['Disabsortiva','Secretória','Osmótica','Funcional'], a:0,
     x:'Gordura nas fezes = disabsortiva (celíaca, Crohn, giárdia).'},
    {p:'Exame de triagem para doença celíaca:', o:['Antitransglutaminase IgA','IgE total','Calprotectina fecal','Anti-HBs'], a:0,
     x:'Antitransglutaminase IgA (com IgA total) e antiendomísio.'}],
  bula:'Crohn: fundo, salteado, fístula. Retocolite: rasa, contínua, sangue, começa no reto. Diarreia osmótica para no jejum; a secretória não.'
},
{
  id:'hepatites', cor:'#e0a32e', titulo:'Marcadores das hepatites', sub:'Ler sorologia como frase',
  questoes:['SOI-2022.2-06','SOI-2023.1-13','SOI-2024.2-01','SOI-2025.2-03'],
  gancho:{caso:'Sorologia: HBsAg +, anti-HBc IgM +, HBeAg +, anti-HBs −, anti-HAV IgG +.',
    p:'Como ler?', o:['Hepatite B aguda replicando; já teve hepatite A ou foi vacinado','Hepatite B curada','Só vacinado contra B','Hepatite A aguda'], a:0},
  ideia:'Leia a sorologia como uma frase.\n**Ag** (antígeno) = **o vírus está aí**. **Anti** = **o corpo respondeu**.\n**IgM** = **agora** (agudo). **IgG/total** = **já passou** ou vacina.\n**Anti-HBs** = **proteção** contra a B (cura ou vacina).',
  mapa:[
    {tabela:{titulo:'Cada marcador', cols:['Marcador','Significa'], rows:[
      ['HBsAg','**Infecção pelo HBV**, aguda ou crônica. Primeiro a aparecer. Mais de 6 meses = crônica'],
      ['Anti-HBc IgM','**Hepatite B aguda**'],
      ['Anti-HBc IgG (total)','Já teve contato com o vírus (a vacina **não** gera)'],
      ['HBeAg','**Replicação** viral, carga alta, muito contagioso'],
      ['Anti-HBs','**Imunidade**: cura ou vacina'],
      ['Anti-HAV IgM','Hepatite A aguda'],
      ['Anti-HAV IgG / total','Já teve hepatite A ou foi vacinado'],
      ['Anti-HCV','Contato com o vírus C; confirma infecção ativa com **HCV-RNA**']]}},
    {lista:{titulo:'Combinações que caem (hepatite B)', itens:[
      'HBsAg + e anti-HBc IgM + → **B aguda**',
      'HBsAg + por mais de 6 meses e anti-HBc IgG + → **B crônica**',
      'HBsAg −, anti-HBc IgG + e anti-HBs + → **B curada**',
      'Só anti-HBs + → **vacinado**',
      'HBsAg −, anti-HBs − e anti-HBc IgM + → **janela imunológica**']}}
  ],
  gatilhos:[
    ['Anti-HBc IgM positivo','Hepatite B aguda (não é hepatite medicamentosa)'],
    ['HBeAg positivo','Vírus replicando'],
    ['Anti-HBs isolado','Vacina'],
    ['HBsAg positivo','Não está na janela imunológica'],
    ['Anti-HAV IgG positivo','Passado ou vacina; nunca hepatite A crônica']],
  pegadinhas:[
    ['Anti-HBs é marcador de cronicidade da hepatite C.','Anti-HBs é imunidade contra a hepatite B.'],
    ['Anti-HBc IgM indica imunidade por vacina.','Indica hepatite B aguda.'],
    ['Anti-HBs identifica a fase aguda da B.','A fase aguda é o anti-HBc IgM.'],
    ['Anti-HCV IgG basta para confirmar hepatite C crônica.','Precisa do HCV-RNA.'],
    ['Existe hepatite A crônica.','A hepatite A não cronifica.']],
  relampago:[
    {p:'Vacinado contra hepatite B, nunca infectado. Perfil esperado:', o:['Só anti-HBs positivo','HBsAg positivo','Anti-HBc IgG e anti-HBs positivos','Anti-HBc IgM positivo'], a:0,
     x:'A vacina é feita de HBsAg: gera só anti-HBs. Anti-HBc só aparece com o vírus de verdade.'},
    {p:'Marcador de replicação e carga viral alta do HBV:', o:['HBeAg','Anti-HBs','Anti-HBe','Anti-HAV'], a:0,
     x:'"e" de "elevada replicação". Quando vira anti-HBe, a replicação caiu.'},
    {p:'Anti-HCV positivo. Para confirmar infecção ativa:', o:['HCV-RNA','Repetir o anti-HCV','Anti-HBs','Biópsia hepática'], a:0,
     x:'O anticorpo fica positivo mesmo depois da cura. Quem confirma vírus circulando é o RNA.'}],
  bula:'Ag = vírus. IgM = agora. IgG = passado. Anti-HBs = proteção. HBeAg = replicando. A hepatite A não cronifica; a C se confirma com RNA.'
},
{
  id:'colorretal', cor:'#c4534a', titulo:'Câncer colorretal: PAF × Lynch', sub:'APC × genes de reparo',
  questoes:['SOI-2024.1-12','SOI-2024.2-04','SOI-2025.2-09','SOI-2025.2-13'],
  gancho:{caso:'Jovem de 21 anos com centenas de pólipos adenomatosos no cólon. O pai teve câncer de cólon aos 40.',
    p:'Síndrome e gene?', o:['PAF · APC','Lynch · APC','Peutz-Jeghers · genes de reparo','Lynch · genes de reparo'], a:0},
  ideia:'Câncer colorretal é **adenoma que vira carcinoma** por acúmulo de mutações (**APC → KRAS → TP53**).\nAs duas síndromes hereditárias são dois atalhos.\n**PAF** = **centenas de pólipos** (gene **APC**).\n**Lynch** = **poucos pólipos**, mas o **DNA não se conserta** (genes de reparo → **instabilidade de microssatélites**).',
  mapa:[
    {fluxo:{titulo:'Sequência adenoma → carcinoma', passos:[
      'Mucosa normal',
      'Perde o **APC** → adenoma pequeno',
      'Ativa o **KRAS** → adenoma maior',
      'Perde o **TP53** → **adenocarcinoma**',
      'Fatores que aceleram: idade, carne processada, tabaco, álcool, obesidade, DII']}},
    {tabela:{titulo:'PAF × Lynch', cols:['','PAF','Lynch'], rows:[
      ['Gene','**APC** (cromossomo 5q)','**Reparo do DNA** (MLH1, MSH2, MSH6, PMS2)'],
      ['Herança','Autossômica dominante','Autossômica dominante'],
      ['Pólipos','**Centenas a milhares** de adenomas, desde jovem','Poucos; câncer cedo, mais no **cólon direito**'],
      ['Risco','Câncer quase **100%** sem cirurgia (por volta dos 40)','Também **endométrio**, ovário, estômago, vias urinárias'],
      ['Conduta','**Colectomia profilática**','Colonoscopia cedo e frequente']]}}
  ],
  gatilhos:[
    ['Centenas de pólipos em jovem','PAF → colectomia'],
    ['Câncer de cólon jovem + câncer de endométrio na família','Lynch'],
    ['Instabilidade de microssatélites','Lynch'],
    ['Pólipos hamartomatosos + manchas escuras nos lábios','Peutz-Jeghers'],
    ['Lesão vegetante e estenosante no cólon em tabagista','Adenocarcinoma (APC, KRAS, TP53)']],
  pegadinhas:[
    ['Lynch decorre de mutação no APC.','APC é da PAF. Lynch = genes de reparo.'],
    ['Lynch tem múltiplos pólipos; PAF tem câncer de endométrio.','Está invertido.'],
    ['O gene RET causa câncer colorretal.','RET é de tireoide (NEM 2).'],
    ['Mutação em KIT e PDGFRA = adenocarcinoma de cólon.','Isso é GIST.'],
    ['Intestino irritável causa pólipos.','É funcional, sem pólipos.']],
  relampago:[
    {p:'Mulher de 38 anos, adenocarcinoma no cólon direito sem polipose. Mãe e irmã com câncer de endométrio.', o:['Síndrome de Lynch','PAF','Peutz-Jeghers','Intestino irritável'], a:0,
     x:'Câncer jovem, poucos pólipos e endométrio na família = Lynch.'},
    {p:'Gene da PAF:', o:['APC, no cromossomo 5','MLH1','RET','KIT'], a:0,
     x:'MLH1 é Lynch; RET, tireoide; KIT, GIST.'},
    {p:'Conduta na PAF:', o:['Colectomia profilática','Só observar','Quimioterapia preventiva','Gastrectomia'], a:0,
     x:'Com centenas de pólipos, o câncer é praticamente inevitável sem tirar o cólon.'}],
  bula:'PAF: APC, mil pólipos, colectomia. Lynch: reparo quebrado, poucos pólipos, endométrio junto. Sequência: APC → KRAS → TP53.'
},
{
  id:'abdome', cor:'#e05252', titulo:'Abdome agudo em 5 síndromes', sub:'Como a dor começa',
  questoes:['SOI-2022.2-03','SOI-2022.2-14','SOI-2023.1-03','SOI-2024.1-13'],
  gancho:{caso:'Dor súbita e lancinante, abdome em tábua. O paciente fica imóvel para não doer. Usa AINE por conta própria. Na percussão, sinal de Jobert.',
    p:'Qual síndrome?', o:['Perfurativo','Obstrutivo','Inflamatório','Hemorrágico'], a:0},
  ideia:'Abdome agudo é dor abdominal **que exige decisão rápida**, muitas vezes cirúrgica.\nA prova só quer que você **encaixe o caso numa das 5 síndromes** olhando **como a dor começou** e **qual sinal vem junto**.',
  mapa:[
    {tabela:{titulo:'As 5 síndromes', cols:['Síndrome','Dor','Pistas','Exemplos'], rows:[
      ['Inflamatório','**Insidiosa**, piora e localiza','Febre, leucocitose, irritação localizada','Apendicite, colecistite, pancreatite, diverticulite'],
      ['Obstrutivo','**Cólica**, periumbilical','Vômitos, distensão, **parada de gases e fezes**','Bridas, hérnia, tumor'],
      ['Perfurativo','**Súbita, lancinante**, difusa','**Abdome em tábua**, paciente imóvel, **Jobert** (ar livre)','Úlcera perfurada (AINE, corticoide)'],
      ['Hemorrágico','Súbita, intensa','**Choque**: hipotensão, taquicardia, palidez','Gravidez ectópica rota, aneurisma roto, trauma'],
      ['Isquêmico','Intensa e **desproporcional ao exame**','Idoso, fibrilação atrial, acidose, lactato alto','Isquemia mesentérica']]}},
    {lista:{titulo:'Tipos de dor', itens:['**Visceral**: mal localizada, na linha média','**Parietal**: bem localizada, piora ao mexer → o paciente fica **imóvel**','**Referida**: sentida longe da origem (ex.: ombro na irritação do diafragma)']}}
  ],
  gatilhos:[
    ['Paciente imóvel, abdome em tábua','Peritonite'],
    ['Sinal de Jobert (som timpânico sobre o fígado)','Ar livre → perfurativo'],
    ['Cólica + vômitos + parada de gases','Obstrutivo'],
    ['Dor abdominal + choque + anemia','Hemorrágico'],
    ['Dor desproporcional ao exame em idoso com fibrilação atrial','Isquêmico']],
  pegadinhas:[
    ['Pancreatite biliar grave com choque é abdome hemorrágico.','A banca classificou como inflamatório.'],
    ['O obstrutivo começa com dor súbita e lancinante.','O obstrutivo é cólica. Súbita e lancinante é perfurativo.'],
    ['Na peritonite o paciente se contorce de dor.','Fica imóvel. Quem se contorce tem cólica (renal, biliar).'],
    ['O inflamatório começa de forma súbita.','Começa insidioso e vai piorando e localizando.']],
  relampago:[
    {p:'Cólica periumbilical, vômitos, distensão, parada de gases e fezes:', o:['Obstrutivo','Perfurativo','Hemorrágico','Inflamatório'], a:0,
     x:'Cólica + parada de eliminação = obstrução.'},
    {p:'Mulher com atraso menstrual, dor abdominal súbita, hipotensa e taquicárdica:', o:['Hemorrágico','Inflamatório','Obstrutivo','Isquêmico'], a:0,
     x:'Dor súbita + choque em idade fértil: gravidez ectópica rota.'},
    {p:'Dor que começa vaga e vai piorando e se localizando, com febre:', o:['Inflamatório','Perfurativo','Hemorrágico','Isquêmico'], a:0,
     x:'Evolução progressiva com febre = processo inflamatório (ex.: apendicite).'}],
  bula:'Insidiosa + febre = inflamatório. Cólica + parada = obstrutivo. Súbita + tábua = perfurativo. Súbita + choque = hemorrágico. Dor maior que o exame = isquêmico.'
},
{
  id:'ictericia', cor:'#d4b21f', titulo:'Icterícia e exames do fígado', sub:'Direta × indireta',
  questoes:['SOI-2023.1-09','SOI-2025.2-05','SOI-2025.2-12','SOI-2024.2-03'],
  gancho:{caso:'Bilirrubina total 8 mg/dL com predomínio de direta, fosfatase alcalina e GGT altas, urina cor de coca-cola e fezes claras.',
    p:'Onde está o problema?', o:['Obstrução das vias biliares','Hemólise','Síndrome de Gilbert','Anemia ferropriva'], a:0},
  ideia:'Bilirrubina **indireta** vem da **quebra do sangue** e ainda **não passou pelo fígado**.\nO fígado a **conjuga** e ela vira **direta**, que sai pela bile.\nSobrou **indireta**: o problema está **antes ou na conjugação** (hemólise, Gilbert).\nSobrou **direta**: o problema está **na saída** (obstrução, colestase).',
  mapa:[
    {fluxo:{titulo:'O caminho da bilirrubina', passos:[
      'Hemácia velha → heme → **bilirrubina indireta** (insolúvel, presa à albumina)',
      'O fígado capta e **conjuga** (glicuroniltransferase)',
      '**Bilirrubina direta** (solúvel) → bile → intestino',
      'No intestino vira urobilinogênio → **dá cor às fezes**']}},
    {tabela:{titulo:'Indireta × direta', cols:['','Indireta alta','Direta alta'], rows:[
      ['Onde falha','Antes do fígado ou na conjugação','Hepatócito ou obstrução'],
      ['Exemplos','Hemólise, Gilbert, icterícia do recém-nascido','Coledocolitíase, tumor de cabeça de pâncreas, hepatite, cirrose'],
      ['Urina','Normal (a indireta não sai na urina)','**Colúria** (escura)'],
      ['Fezes','Normais','**Acolia** (claras) na obstrução']]}},
    {tabela:{titulo:'O que cada exame diz', cols:['Exame','O que diz'], rows:[
      ['AST / ALT','**Lesão** do hepatócito'],
      ['FA + GGT','**Colestase** ou obstrução. GGT isolada também sobe com álcool e anticonvulsivantes'],
      ['Albumina, proteínas, TAP/INR','**Função de síntese** (doença crônica)'],
      ['Ultrassom','Primeiro exame para cálculo biliar: imagem com **sombra acústica** que se move']]}}
  ],
  gatilhos:[
    ['Colúria + acolia + FA e GGT altas','Colestase obstrutiva (direta)'],
    ['Icterícia + anemia + LDH alto','Hemólise (indireta)'],
    ['Icterícia leve no jejum ou estresse, resto normal','Gilbert (indireta)'],
    ['Albumina baixa + INR alargado','Fígado sem função de síntese'],
    ['Suspeita de cálculo na vesícula','Ultrassom']],
  pegadinhas:[
    ['A obstrução eleva a indireta; a hemólise eleva a direta.','Invertido: obstrução → direta; hemólise → indireta.'],
    ['A icterícia da cirrose é por obstrução extra-hepática.','É por falha do hepatócito.'],
    ['A radiografia simples nunca mostra cálculo biliar.','Mostra os que têm cálcio (minoria). O exame de escolha é o ultrassom.'],
    ['A tomografia é o exame inicial da colelitíase.','O inicial é o ultrassom.']],
  relampago:[
    {p:'Urina escura e fezes claras indicam aumento de:', o:['Bilirrubina direta','Bilirrubina indireta','Albumina','Hemoglobina'], a:0,
     x:'Só a direta é solúvel e sai na urina; se não chega ao intestino, as fezes clareiam.'},
    {p:'Qual exame avalia a função de síntese do fígado?', o:['Albumina e TAP/INR','AST e ALT','GGT','Amilase'], a:0,
     x:'AST/ALT mostram lesão, não função. Quem mostra o que o fígado ainda fabrica é albumina e coagulação.'},
    {p:'GGT alta isolada, AST/ALT normais, paciente em uso crônico de anticonvulsivante. Explicação:', o:['Indução enzimática pelo anticonvulsivante','Hepatite viral aguda','Hemólise','Pancreatite'], a:0,
     x:'Anticonvulsivantes (e álcool) induzem a GGT sem lesar o hepatócito.'}],
  bula:'Indireta = antes do fígado (sangue). Direta = depois (bile). Urina escura + fezes claras = direta presa. AST/ALT = lesão; FA/GGT = colestase; albumina/INR = função.'
},
{
  id:'gastrico', cor:'#9a5bc4', titulo:'Câncer gástrico: Lauren e Borrmann', sub:'Tipo de célula × formato',
  questoes:['SOI-2022.2-08','SOI-2022.2-15','SOI-2023.1-04'],
  gancho:{caso:'Biópsia gástrica: células isoladas cheias de muco, com o núcleo empurrado para o lado, infiltrando toda a parede. O estômago está rígido.',
    p:'Diagnóstico?', o:['Adenocarcinoma difuso (anel de sinete)','Adenocarcinoma intestinal','Adenoma gástrico','Leiomioma'], a:0},
  ideia:'Quase todo câncer gástrico é **adenocarcinoma**.\n**Lauren** classifica pelo **tipo de célula**: intestinal × difuso.\n**Borrmann** classifica pelo **formato** que a endoscopia vê: tipos I a IV.\nO tipo **intestinal** é o fim da **cascata de Correa**, que começa com o **H. pylori**.',
  mapa:[
    {fluxo:{titulo:'Cascata de Correa (tipo intestinal)', passos:[
      'Mucosa normal',
      '**Gastrite crônica** (H. pylori)',
      'Gastrite **atrófica**',
      '**Metaplasia intestinal**',
      'Displasia',
      '**Adenocarcinoma intestinal**']}},
    {tabela:{titulo:'Lauren', cols:['','Intestinal','Difuso'], rows:[
      ['Histologia','**Glândulas atípicas**, atipia e pleomorfismo nuclear','**Células em anel de sinete** soltas, sem glândulas'],
      ['Origem','Cascata de Correa','Perda da E-caderina, sem cascata'],
      ['Perfil','Homem idoso, antro','Mais jovem, qualquer sexo'],
      ['Prognóstico','Melhor','Pior; pode virar linite plástica']]}},
    {lista:{titulo:'Borrmann (só câncer avançado)', itens:['**I**: polipoide, vegetante','**II**: ulcerado, bordas elevadas e bem definidas','**III**: ulcerado e infiltrativo, bordas mal definidas (o mais comum)','**IV**: infiltrativo difuso = **linite plástica**','Câncer **precoce** = limitado à mucosa e submucosa; Borrmann não se aplica']}}
  ],
  gatilhos:[
    ['Anel de sinete','Lauren difuso'],
    ['Borrmann IV, estômago rígido','Linite plástica (difuso)'],
    ['Gastrite atrófica + metaplasia intestinal','Caminho do tipo intestinal'],
    ['Qualquer Borrmann','Câncer avançado, não precoce'],
    ['Idoso com epigastralgia, plenitude e perda de peso','Pensar em câncer gástrico']],
  pegadinhas:[
    ['Bem diferenciado quer dizer benigno.','Adenocarcinoma é maligno, bem diferenciado ou não.'],
    ['Borrmann II é câncer precoce, limitado à mucosa.','Borrmann classifica câncer avançado.'],
    ['O tipo intestinal tem células em anel de sinete.','Anel de sinete é do difuso.'],
    ['Lesão infiltrativa Borrmann IV pode ser adenoma.','Adenoma não infiltra; é adenocarcinoma.']],
  relampago:[
    {p:'Adenocarcinoma gástrico intestinal, Borrmann II. O que a lâmina mostra?', o:['Glândulas atípicas com pleomorfismo nuclear','Células em anel de sinete','Células fusiformes benignas','Só inflamação'], a:0,
     x:'Intestinal forma glândulas (atípicas). Anel de sinete é do difuso.'},
    {p:'Qual Borrmann é a linite plástica?', o:['IV','I','II','III'], a:0,
     x:'IV = infiltração difusa da parede, estômago em "garrafa de couro".'},
    {p:'Primeiro passo da cascata de Correa:', o:['Gastrite crônica por H. pylori','Displasia','Metaplasia intestinal','Adenoma'], a:0,
     x:'Gastrite → atrofia → metaplasia → displasia → carcinoma.'}],
  bula:'Lauren = célula (intestinal forma glândula; difuso tem anel de sinete). Borrmann = formato (IV = linite). O H. pylori abre a cascata.'
}
];
