/* APG · caso Próstata. Imagens em apg/img/prost-*. */
window.APG_DATA = window.APG_DATA || { casos: [] };
(function () {
  var f = function (n, cap) { return { src: 'img/prost-' + n + '.jpg', cap: cap }; };
  var c = function (t, d) { var figs = [].slice.call(arguments, 2); return { t: t, d: d, fig: figs.length ? figs : null }; };
  var k = function (t, kw) { return { t: t, kw: kw.split('|') }; };
  var q = function (a, b) { return { q: a, a: b }; };
  var mod = function (id, n, ic, t, obj, ler, p, dica, pts, modelo, ini, niveis) { return { id: id, n: n, ic: ic, t: t, obj: obj, ler: ler, explique: { p: p, dica: dica, pts: pts, modelo: modelo }, porques: { ini: ini, niveis: niveis } }; };
  var tu = function (a, b, s, r) { return { q: a, a: b, seg: [q(s, r)] }; };
  var ps = function (p, a, pq) { return { p: p, a: a, pq: pq }; };
  var vi = function (n, p, a, pq) { return { img: 'img/prost-' + n + '.jpg', p: p, a: a, pq: pq }; };

  window.APG_DATA.casos.push({
    id: 'prostata', ic: '🌰', titulo: 'Próstata', cor: '#7A1E2C',
    sub: 'Tutoria · 3 objetivos: morfofisiologia, HPB × câncer e farmacologia',
    modulos: [
      mod('p1', 1, '🧭', 'Anatomia, zonas e histologia', 'Objetivo 1', [
        c('Onde fica e por que isso importa', 'Glândula de cerca de **20 g** no adulto jovem, **abaixo da bexiga**, **à frente do reto**, envolvendo a **uretra prostática**. Daí saem três consequências: crescer **aperta a uretra**; a face posterior é **palpável no toque**; ao lado passam os **nervos da ereção**.', f('relacoes', 'Relações da próstata: bexiga acima, reto atrás, uretra no centro.')),
        c('Zonas em corte transversal', '**Periférica** (~70% do tecido glandular): posterior, origem da maioria dos **cânceres**. **Central** (~25%): em volta dos ductos ejaculatórios. **Transição** (~5 a 10%): em volta da uretra, sede principal da **HPB**.', f('zonas-corte', 'Zonas periférica, central e de transição em volta da uretra.')),
        c('Zonas em três dimensões', 'Há ainda a **região anterior fibromuscular**, praticamente sem glândulas. Repare na relação com vesículas seminais, ductos ejaculatórios e esfíncter externo.', f('zonas-3d', 'Visão tridimensional das zonas e estruturas vizinhas.'), f('zonas-letras', 'Mesmas zonas identificadas por letras: treine nomear sem olhar a legenda.')),
        c('Detalhes anatômicos', 'No **colículo seminal** desembocam os ductos ejaculatórios; os ductos prostáticos abrem nos **seios prostáticos**. A glândula tem **cápsula** e é cercada pelo **plexo venoso prostático**, que se comunica com as veias vertebrais (via para metástase óssea).', f('zonas-anat', 'Corte anatômico: cápsula, plexo venoso, colículo seminal e reto.')),
        c('Histologia', 'São **30 a 50 glândulas tubuloalveolares** em estroma com **músculo liso**. Epitélio cuboide ou colunar, com células **luminais** (produzem PSA) e **basais**. No **adenocarcinoma a camada basal desaparece**.', f('histo-central', 'Região central em corte próximo à uretra prostática.'), f('histo-epitelio', 'Epitélio das glândulas tubuloalveolares (setas).')),
        c('Funções', 'Secreta cerca de **20 a 30% do sêmen**: líquido leitoso com **citrato, zinco, fosfatase ácida e PSA**. O **PSA liquefaz** o coágulo seminal e libera os espermatozoides. O músculo liso expulsa a secreção na ejaculação.')
      ], 'Descreva a próstata: localização, zonas, histologia e funções.', 'Relações → zonas → tecidos → o que secreta.', [
        k('Abaixo da bexiga, à frente do reto, envolvendo a uretra', 'bexiga|reto|uretra'), k('Zona periférica: principal sede do câncer', 'periferic'), k('Zona de transição: sede da HPB', 'transicao'), k('Glândulas tubuloalveolares em estroma com músculo liso', 'estroma|musculo|glandul'), k('Secreção com PSA, zinco e citrato; PSA liquefaz o sêmen', 'psa|zinco|citrato|liquef')
      ], 'A próstata fica abaixo da bexiga, à frente do reto, envolvendo a uretra prostática. Tem zona periférica, posterior, onde nasce a maioria dos cânceres; zona central, em torno dos ductos ejaculatórios; zona de transição, em volta da uretra, onde surge a HPB; e uma região anterior fibromuscular. É formada por glândulas tubuloalveolares em estroma rico em músculo liso e secreta parte do sêmen, com citrato, zinco e PSA, que liquefaz o coágulo seminal.',
      'A HPB costuma dar sintomas antes do câncer.', [q('Por quê?', 'Porque a HPB cresce na **zona de transição**, encostada na uretra.'), q('E o câncer?', 'Nasce sobretudo na **zona periférica**, longe do canal.'), q('Que exame se aproveita disso?', 'O **toque retal**, que alcança a face posterior, onde está a zona periférica.')]),
      mod('p2', 2, '⚙️', 'Regulação hormonal e micção', 'Objetivo 1', [
        c('O eixo', '**GnRH → LH → células de Leydig → testosterona**. Na próstata, a **5-alfa-redutase** (tipo 2) a converte em **DHT**, o androgênio mais potente no tecido.'),
        c('Estroma e epitélio conversam', 'A DHT, feita sobretudo no **estroma**, liga-se ao receptor androgênico, vai ao núcleo e induz **fatores de crescimento** que agem no próprio estroma e no epitélio.', f('dht', 'Testosterona vira DHT no estroma e estimula fatores de crescimento nas duas células.')),
        c('A balança', 'Normalmente **proliferação = morte celular**. KGF, EGF e IGF estimulam; **TGF-beta** induz morte. Na HPB, androgênios e estrogênios inclinam a balança para mais proliferação e menos apoptose.', f('equilibrio', 'Balança normal × balança na hiperplasia prostática.')),
        c('Armazenar urina', '**Simpático**: receptor **β3** relaxa o detrusor; receptor **α1** contrai colo vesical e próstata. O nervo pudendo mantém o esfíncter externo fechado.'),
        c('Esvaziar', '**Parassimpático (S2 a S4)**: receptores muscarínicos (**M3**) contraem o detrusor, enquanto a saída relaxa. **Toda a farmacologia da HPB sai desses receptores.**')
      ], 'Explique como a DHT controla a próstata e quais receptores comandam a micção.', 'Eixo → enzima → balança → α1, β3, M3.', [
        k('Testosterona vira DHT pela 5-alfa-redutase', 'redutase|dht'), k('DHT induz fatores de crescimento', 'crescimento'), k('Equilíbrio entre proliferação e apoptose', 'apoptose|morte|prolifera'), k('α1 contrai a saída; β3 relaxa a bexiga', 'alfa|beta'), k('Muscarínico M3 contrai o detrusor', 'muscarin|m3|detrusor')
      ], 'A testosterona é convertida em DHT pela 5-alfa-redutase. A DHT age no receptor androgênico e induz fatores de crescimento, que equilibram proliferação e apoptose. Na micção, o simpático relaxa o detrusor por β3 e contrai a saída por α1; o parassimpático contrai o detrusor por receptores muscarínicos M3.',
      'Bloquear a 5-alfa-redutase diminui a próstata.', [q('Por quê?', 'Cai a **DHT**, o principal estímulo do tecido.'), q('E o que acontece com as células?', 'Perdem o sinal de sobrevivência: há **apoptose e atrofia**.'), q('Por que demora meses?', 'Porque é preciso **remover tecido**, e não apenas relaxar músculo.')]),
      mod('p3', 3, '🚰', 'Hiperplasia prostática benigna', 'Objetivo 2', [
        c('Definição e epidemiologia', 'Aumento **benigno do número de células** do estroma e do epitélio, na zona de transição. Presente em cerca de **metade dos homens aos 60 anos** e **80 a 90% após os 80**. Fatores: idade, DHT, obesidade, diabetes.'),
        c('Como é a peça', 'Nódulos bem delimitados que comprimem a uretra. Microscopicamente, glândulas proliferadas, muitas dilatadas, com **duas camadas celulares preservadas**, em estroma fibromuscular. Os nódulos empurram a periferia, formando a **cápsula cirúrgica**.', f('hpb-peca', 'HPB: peça com nódulos (A) e microscopia (B e C).')),
        c('Fisiopatologia', '**Componente estático** (volume) + **componente dinâmico** (tônus α1). O detrusor hipertrofia, trabecula e fica **hiperativo**; depois descompensa: resíduo, retenção, infecção, cálculo e **hidronefrose**.'),
        c('Sintomas', '**Esvaziamento:** jato fraco, hesitação, esforço, gotejamento, esvaziamento incompleto. **Armazenamento:** polaciúria, noctúria, urgência, incontinência de urgência.'),
        c('IPSS', 'Sete sintomas de 0 a 5 e uma pergunta de qualidade de vida. **0 a 7 leve; 8 a 19 moderado; 20 a 35 grave.** Mede intensidade, não fecha diagnóstico.', f('ipss', 'Questionário internacional de sintomas prostáticos.')),
        c('Exames', 'Toque: **aumentada, lisa, simétrica, fibroelástica**. **PSA** pode subir; **EAS** (infecção, hematúria); **creatinina**. **Ultrassom** com volume e **resíduo pós-miccional**.', f('ustr', 'Ultrassonografia transretal: posição da sonda e imagem da próstata.'))
      ], 'Explique a HPB da causa aos exames.', 'Definição → dois componentes → bexiga → sintomas → exames.', [
        k('Hiperplasia de estroma e epitélio na zona de transição', 'estroma|transicao|hiperplasia'), k('Componentes estático e dinâmico', 'estatic|dinamic|tonus|volume'), k('Resposta da bexiga: hipertrofia, hiperatividade, falência', 'detrusor|bexiga'), k('Sintomas de esvaziamento e armazenamento', 'esvazia|armazena|jato|urgencia|nocturia'), k('Toque liso, PSA, EAS, creatinina, ultrassom com resíduo', 'toque|ultrass|residuo|creatinina')
      ], 'A HPB é o aumento benigno de células do estroma e epitélio na zona de transição, ligado à idade e à DHT. Obstrui por um componente estático, o volume, e um dinâmico, o tônus muscular. A bexiga hipertrofia, fica hiperativa e depois falha. Há sintomas de esvaziamento e de armazenamento. Investiga-se com IPSS, toque, PSA, EAS, creatinina e ultrassom com resíduo.',
      'Um homem com HPB tem urgência e noctúria.', [q('Por quê, se o problema é obstrução?', 'A bexiga **hipertrofiada fica hiperativa**.'), q('O que mais reduz o espaço útil?', 'O **resíduo pós-miccional**: sobra urina, cabe menos.'), q('O que pensar além da próstata?', 'Diabetes, apneia, insuficiência cardíaca e excesso de líquido à noite.')]),
      mod('p4', 4, '🧬', 'Câncer de próstata: biologia e clínica', 'Objetivo 2', [
        c('Epidemiologia e risco', 'INCA: **77.920 casos novos por ano (2026–2028)**; o mais frequente no homem, fora pele não melanoma. Riscos: **idade, ancestralidade negra, parente de 1º grau, BRCA2**, obesidade (doença agressiva).'),
        c('Patogênese', 'Inflamação e dano → **fusão TMPRSS2-ERG**, silenciamento de **GSTP1** → neoplasia intraepitelial → **perda de PTEN** → adenocarcinoma → metástase → **resistência à castração**.', f('ca-patogenese', 'Sequência molecular do epitélio normal à doença resistente à castração.')),
        c('Macroscopia', 'Tumor em geral **periférico e posterior**, área **firme e esbranquiçada**, diferente do aspecto esponjoso do tecido benigno.', f('ca-peca', 'Adenocarcinoma: área esbranquiçada na zona periférica posterior.')),
        c('Microscopia', 'Pequenas glândulas **apinhadas**, infiltrando entre glândulas maiores benignas; **núcleos grandes, nucléolo evidente**, citoplasma mais escuro e **sem camada basal**.', f('ca-histo-a', 'Pequeno aumento: glândulas pequenas entre glândulas benignas.'), f('ca-histo-b', 'Grande aumento: núcleos aumentados e nucléolos proeminentes.')),
        c('Clínica', '**Inicialmente assintomático.** Local: obstrução, hematúria, hematospermia, disfunção erétil. Avançado: **dor óssea**, perda de peso, fraqueza, compressão medular.', f('ca-clinica', 'Manifestações: ausência frequente, sintomas locais e metastáticos.')),
        c('Metástase óssea', 'Principalmente coluna e pelve; tipicamente **osteoblástica** (lesão densa), com dor, fratura e risco de compressão medular.', f('ca-vertebra', 'Metástases osteoblásticas em corpos vertebrais.'))
      ], 'Explique como o câncer de próstata surge, se manifesta e se espalha.', 'Risco → genes → zona → silêncio → osso.', [
        k('Riscos: idade, raça negra, história familiar, BRCA2', 'idade|negr|familiar|brca'), k('Alterações: TMPRSS2-ERG, PTEN', 'pten|erg|gene|mutac'), k('Adenocarcinoma na zona periférica, sem camada basal', 'periferic|adenocarcinoma|basal'), k('Inicialmente assintomático', 'assintomatic|silencios'), k('Metástase para linfonodos e ossos, osteoblástica', 'osso|ossea|linfonodo|blastic')
      ], 'É em geral um adenocarcinoma da zona periférica, ligado à idade, raça negra, história familiar e BRCA2. Acumula alterações como a fusão TMPRSS2-ERG e perda de PTEN. É silencioso no início; avançado causa sintomas urinários, hematúria, dor óssea e perda de peso. Espalha-se para linfonodos e ossos, com lesões osteoblásticas.',
      'O câncer inicial costuma não dar sintoma.', [q('Por quê?', 'Está na **zona periférica**, longe da uretra.'), q('Quando passa a obstruir?', 'Quando cresce muito e **invade** uretra ou colo vesical.'), q('E se o primeiro sintoma for dor lombar?', 'Pensar em **metástase óssea**; fraqueza nas pernas é urgência.')]),
      mod('p5', 5, '🔬', 'Diagnóstico, grau e estadiamento', 'Objetivo 2', [
        c('Toque retal', 'Avalia a face posterior. **Nódulo, endurecimento ou assimetria** pedem investigação **mesmo com PSA normal**.', f('toque', 'Toque retal: o dedo alcança a face posterior da próstata.')),
        c('PSA', 'É **do órgão, não do câncer**. Ajuda: **livre/total** (baixa sugere câncer), **densidade** (> 0,15) e **velocidade**. A tabela por idade é referência histórica, não um limite de segurança.', f('psa-idade', 'Valores de PSA por idade (adaptado da EAU, 2020).')),
        c('Imagem e biópsia', '**Ressonância multiparamétrica antes da biópsia**, com **PI-RADS** (4 e 5 suspeitos). A **biópsia confirma**.'),
        c('Gleason: veja a diferença', 'Quanto menos o tumor forma glândulas, pior. Soma o padrão predominante e o segundo.', f('gleason-a', 'Baixo grau: glândulas uniformes e bem formadas.'), f('gleason-b', 'Biópsia, grupo 1 (3+3=6): glândulas formadas de tamanhos variados.'), f('gleason-c', 'Grupo 5 (5+5=10): lençóis de células sem glândulas.')),
        c('Grupos ISUP', '**1:** ≤ 6. **2:** 3+4. **3:** 4+3. **4:** 8. **5:** 9 e 10.', f('gleason-esquema', 'Padrão de Gleason do menos ao mais agressivo.'), f('isup', 'Definição dos cinco grupos de grau.')),
        c('Estadiamento', '**TNM**: extensão local, linfonodos e metástases. **Cintilografia óssea** e **PET-PSMA** em casos selecionados.', f('tnm', 'Estadiamento patológico TNM.'), f('cintilo', 'Cintilografia: exame normal × múltiplas metástases.')),
        c('Conduta (além do roteiro)', '**Vigilância ativa:** intenção curativa, adia o tratamento em baixo risco. **Espera vigilante:** paliativa, em expectativa de vida curta. Doença localizada: cirurgia ou radioterapia, inclusive **braquiterapia**.', f('vigilancia', 'Vigilância ativa × espera vigilante.'), f('braqui', 'Braquiterapia: sementes radioativas implantadas na próstata.')),
        c('Rastreamento: duas posições', '**Ministério da Saúde e INCA:** não recomendam rastreamento populacional. **Diretriz conjunta de sociedades (nov/2026):** PSA a partir dos **50**; **45** em negros ou com história familiar; **40** em mutações como BRCA. Nos dois casos, decisão compartilhada.')
      ], 'Como confirmar, graduar e estadiar o câncer?', 'Toque e PSA → ressonância → biópsia → Gleason → TNM.', [
        k('Toque e PSA levantam suspeita', 'toque|psa'), k('Ressonância com PI-RADS', 'ressonancia|pi-rads|pirads|pi rads'), k('Biópsia confirma', 'biopsia'), k('Gleason e grupo ISUP indicam agressividade', 'gleason|isup'), k('TNM, cintilografia e PET', 'tnm|cintilo|pet|estadi')
      ], 'Toque alterado ou PSA elevado levantam suspeita. A ressonância multiparamétrica com PI-RADS orienta a biópsia, que confirma. O Gleason e o grupo ISUP medem agressividade. O TNM, com cintilografia ou PET-PSMA quando indicado, define a extensão.',
      'Gleason 4+3 é pior que 3+4.', [q('Por quê, se ambos somam 7?', 'O **primeiro número é o padrão predominante**.'), q('O que é o padrão 4?', 'Glândulas **mal formadas ou fundidas**.'), q('Como aparece no ISUP?', '3+4 é grupo **2**; 4+3 é grupo **3**.')]),
      mod('p6', 6, '💊', 'Farmacologia da HPB', 'Objetivo 3', [
        c('Alfabloqueadores', '**Tansulosina, doxazosina, alfuzosina**. Bloqueiam α1 → relaxam próstata e colo. Alívio **rápido**, sem reduzir volume. Efeitos: **hipotensão postural, tontura, alteração da ejaculação**; íris flácida na catarata.'),
        c('Inibidores da 5-alfa-redutase', '**Finasterida (5 mg), dutasterida (0,5 mg)**. Menos DHT → **reduzem o volume** em meses; menos retenção e cirurgia. **PSA cai ~50%** (multiplicar por 2). Efeitos sexuais e ginecomastia.', f('5alfa-tabela', 'Classes e doses. Fenoxibenzamina e prazosina aparecem na tabela, mas não são preferidas hoje.')),
        c('Tadalafila', 'Inibe PDE5 → **aumenta GMPc** → relaxa músculo liso. Boa se houver disfunção erétil. **Nunca com nitratos.**'),
        c('Antimuscarínicos', '**Oxibutinina, solifenacina**: menos contrações involuntárias. Boca seca, constipação, confusão em idosos. **Cautela com resíduo alto.**'),
        c('Agonista β3', '**Mirabegrona** relaxa o detrusor no enchimento. Pode **elevar a pressão**.'),
        c('Como combinar', 'Próstata grande e sintomas importantes: **alfabloqueador + 5-ARI**. Urgência persistente: acrescentar **antimuscarínico ou mirabegrona**. Complicações pedem avaliar cirurgia.')
      ], 'Explique cada classe: mecanismo, efeito e cuidado.', 'Saída (α1) → volume (DHT) → GMPc → bexiga (M3 e β3).', [
        k('Alfabloqueador: rápido, hipotensão', 'alfa|tansulosina|hipotens'), k('5-ARI: reduz volume e PSA', 'finasterida|dutasterida|redutase'), k('Tadalafila: GMPc, não usar com nitrato', 'tadalafila|gmp|nitrato'), k('Antimuscarínico: cuidado com resíduo', 'antimuscarin|oxibutinina|solifenacina|residuo'), k('Mirabegrona: β3, pressão', 'mirabegrona|beta')
      ], 'Alfabloqueadores relaxam a saída e agem rápido, com risco de hipotensão. Inibidores da 5-alfa-redutase reduzem DHT e volume em meses e diminuem o PSA pela metade. A tadalafila aumenta o GMPc e não combina com nitratos. Para armazenamento usam-se antimuscarínicos, com cuidado no resíduo alto, ou mirabegrona, atentando à pressão.',
      'Em próstata grande associa-se alfabloqueador e 5-ARI.', [q('Por quê?', 'Atacam componentes diferentes: **dinâmico e estático**.'), q('Qual alivia primeiro?', 'O **alfabloqueador**.'), q('Qual muda a história da doença?', 'O **5-ARI**, reduzindo retenção e necessidade de cirurgia.')])
    ],
    tutor: [
      tu('Quais são as zonas da próstata e sua importância?', 'Periférica (câncer), transição (HPB), central (ductos ejaculatórios) e fibromuscular anterior.', 'Por que o toque não vê tudo?', 'Não alcança a região anterior nem a zona de transição.'),
      tu('Qual a função do PSA?', 'Liquefazer o coágulo seminal.', 'Por que sobe no sangue?', 'Mais tecido ou arquitetura rompida deixam vazar mais.'),
      tu('Como a DHT participa da HPB?', 'Estimula fatores de crescimento e reduz a morte celular.', 'Qual enzima a produz?', 'A 5-alfa-redutase, sobretudo tipo 2 na próstata.'),
      tu('HPB vira câncer?', 'Não. São doenças distintas que podem coexistir.', 'Operar a HPB protege do câncer?', 'Não: a zona periférica permanece.'),
      tu('Diferencie sintomas de armazenamento e esvaziamento.', 'Armazenamento: frequência, urgência, noctúria. Esvaziamento: jato fraco, hesitação, esforço.', 'Qual vem da hiperatividade do detrusor?', 'Os de armazenamento.'),
      tu('PSA elevado confirma câncer?', 'Não. Também sobe em HPB, prostatite, retenção e manipulação.', 'O que refina?', 'Livre/total, densidade, velocidade e ressonância.'),
      tu('O que confirma o câncer?', 'A biópsia.', 'O que fazer antes dela?', 'Ressonância multiparamétrica, quando disponível.'),
      tu('Para onde o câncer mais metastatiza?', 'Linfonodos e ossos.', 'Que tipo de lesão óssea?', 'Osteoblástica.'),
      tu('Qual remédio para alívio rápido?', 'Alfabloqueador.', 'Ele reduz a próstata?', 'Não.'),
      tu('Quando usar 5-ARI?', 'Próstata aumentada (em geral acima de 30 a 40 mL).', 'Como ler o PSA em uso?', 'Multiplicar por 2 após cerca de 6 meses.'),
      tu('Quando evitar antimuscarínico?', 'Resíduo alto, retenção, glaucoma de ângulo fechado.', 'Qual alternativa?', 'Mirabegrona, olhando a pressão.')
    ],
    relampago: [
      { t: 'Zonas da próstata', pts: ['Periférica e câncer', 'Transição e HPB', 'Central e ductos ejaculatórios', 'Fibromuscular anterior'] },
      { t: 'PSA', pts: ['Função', 'Causas de aumento', 'Livre/total e densidade', 'Não é diagnóstico'] },
      { t: 'Fisiopatologia da HPB', pts: ['DHT', 'Estático e dinâmico', 'Bexiga', 'Complicações'] },
      { t: 'HPB × câncer', pts: ['Zona', 'Toque', 'Sintomas', 'Metástase'] },
      { t: 'Gleason e ISUP', pts: ['Padrões', 'Soma', '3+4 × 4+3', 'Cinco grupos'] },
      { t: 'Rastreamento', pts: ['Posição do MS/INCA', 'Diretriz das sociedades', 'Decisão compartilhada'] },
      { t: 'Remédios da HPB', pts: ['α1', '5-ARI', 'PDE5', 'Bexiga'] }
    ],
    casos: [
      { t: 'Jato fraco aos 68 anos', hist: 'Homem de 68 anos com jato fraco, hesitação e noctúria há 2 anos. IPSS 22. Toque: próstata de cerca de 60 g, lisa e simétrica.', passos: [ps('Qual a principal hipótese?', 'HPB com sintomas graves.', 'Quadro progressivo, toque liso e IPSS ≥ 20.'), ps('Que exames pedir?', 'PSA, EAS, creatinina e ultrassom com resíduo.', 'Excluir infecção, lesão renal e retenção.'), ps('Qual tratamento clínico?', 'Alfabloqueador associado a 5-ARI.', 'Sintomas importantes e próstata grande.')] },
      { t: 'Nódulo no toque', hist: 'Homem negro de 62 anos, pai com câncer de próstata. Assintomático. Toque com nódulo endurecido; PSA 3,2 ng/mL.', passos: [ps('O PSA tranquiliza?', 'Não.', 'Toque alterado exige investigação, e há alto risco.'), ps('Próximo passo?', 'Ressonância multiparamétrica e biópsia.', 'A ressonância dirige; a biópsia confirma.'), ps('Biópsia 4+3. Interprete.', 'Gleason 7, grupo ISUP 3: estadiar.', 'O padrão 4 predomina.')] },
      { t: 'Retenção súbita', hist: 'Homem de 74 anos com HPB usou descongestionante e não consegue urinar há 10 horas; dor suprapúbica.', passos: [ps('O que é?', 'Retenção urinária aguda.', 'Descongestionante alfa-agonista contrai a saída.'), ps('Conduta imediata?', 'Sondagem vesical.', 'Descomprimir a bexiga.'), ps('E depois?', 'Alfabloqueador, tentativa de retirar a sonda e reavaliar.', 'Reduz o componente dinâmico.')] }
    ],
    visual: [
      vi('zonas-corte', 'Nomeie as zonas e diga a doença típica de cada uma.', 'Periférica (câncer), central e transição (HPB) em volta da uretra.', 'A posição explica a clínica.'),
      vi('hpb-peca', 'Que processo é este?', 'Hiperplasia prostática benigna nodular.', 'Nódulos comprimindo a uretra, glândulas proliferadas com arquitetura benigna.'),
      vi('ca-peca', 'O que chama atenção nesta peça?', 'Área firme e esbranquiçada periférica: adenocarcinoma.', 'Contrasta com o tecido esponjoso benigno.'),
      vi('ca-histo-b', 'O que sugere malignidade?', 'Glândulas pequenas, núcleos grandes e nucléolos evidentes.', 'Falta a camada basal.'),
      vi('ca-vertebra', 'Que lesão há nas vértebras?', 'Metástases osteoblásticas.', 'Padrão típico do câncer de próstata.'),
      vi('gleason-c', 'Qual o grau provável?', 'Alto grau, Gleason 9 ou 10 (grupo 5).', 'Lençóis de células sem formar glândulas.'),
      vi('gleason-b', 'E este?', 'Baixo grau, 3+3 (grupo 1).', 'Glândulas ainda bem formadas.'),
      vi('cintilo', 'Compare os dois exames.', 'O segundo mostra múltiplas áreas de hipercaptação: metástases.', 'Há remodelação óssea aumentada.'),
      vi('dht', 'Narre o que acontece neste esquema.', 'Testosterona vira DHT no estroma, que ativa o receptor e gera fatores de crescimento.', 'É o alvo dos 5-ARI.'),
      vi('equilibrio', 'Explique a balança.', 'Na HPB há mais proliferação e menos morte celular.', 'O estrogênio soma estímulo.')
    ],
    ancoras: ['A próstata envolve a uretra e fica à frente do reto.', '**Transição = HPB; periférica = câncer.**', 'A DHT, feita pela 5-alfa-redutase, sustenta o crescimento.', 'PSA é do órgão, não da doença; a **biópsia** confirma.', 'A HPB não vira câncer, mas podem coexistir.', 'α1 alivia rápido; 5-ARI reduz volume; bexiga: antimuscarínico ou β3.']
  });
})();
