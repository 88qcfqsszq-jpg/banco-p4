/* APG · caso HPV — figuras próprias (SVG) e módulos 1 a 3. Imagens do resumo em apg/img/. */
window.APG_DATA = window.APG_DATA || { casos: [] };
window.APG_SVG = window.APG_SVG || {};
(function () {
  var box = function (x, y, w, h, t, f, s) {
    var ls = t.split('|'), dy = ls.length > 1 ? -7 * (ls.length - 1) : 0;
    return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="10" fill="' + (f || 'var(--surface2)') + '" stroke="' + (s || 'var(--line2)') + '" stroke-width="1.5"/>' +
      '<text x="' + (x + w / 2) + '" y="' + (y + h / 2 + 5 + dy) + '" text-anchor="middle" font-size="13" font-weight="700" fill="currentColor">' +
      ls.map(function (l, i) { return '<tspan x="' + (x + w / 2) + '" dy="' + (i ? 15 : 0) + '">' + l + '</tspan>'; }).join('') + '</text>';
  };
  var arr = function (x1, y1, x2, y2) { return '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" stroke="var(--muted)" stroke-width="2" marker-end="url(#ar)"/>'; };
  var defs = '<defs><marker id="ar" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="var(--muted)"/></marker></defs>';
  var svg = function (w, h, body, alt) { return '<svg viewBox="0 0 ' + w + ' ' + h + '" role="img" aria-label="' + alt + '" style="width:100%;height:auto;color:var(--fg);font-family:inherit">' + defs + body + '</svg>'; };

  /* Camadas do epitélio × ciclo do vírus */
  window.APG_SVG.epitelio = svg(360, 250,
    '<text x="180" y="18" text-anchor="middle" font-size="12" font-weight="800" fill="var(--muted)">SUPERFÍCIE</text>' +
    box(20, 28, 320, 50, 'Camada superficial|L1 + L2 · montagem e descamação', 'rgba(60,207,149,.18)', 'var(--ok)') +
    box(20, 86, 320, 50, 'Camada espinhosa|E1 e E2 replicam o DNA · E4 libera', 'rgba(245,184,61,.18)', 'var(--acc)') +
    box(20, 144, 320, 50, 'Camada basal|entrada · E6 e E7 estimulam a divisão', 'rgba(242,106,95,.18)', 'var(--bad)') +
    box(20, 202, 320, 34, 'Membrana basal · derme', 'var(--surface2)') +
    '<text x="180" y="246" text-anchor="middle" font-size="11" fill="var(--muted)">O vírus entra por microabrasão e sobe junto com a diferenciação</text>',
    'Camadas do epitélio e etapas do ciclo do HPV');

  /* História natural */
  window.APG_SVG.historia = svg(360, 300,
    box(90, 6, 180, 40, 'Infecção por HPV', 'var(--surface2)') +
    box(20, 68, 150, 56, 'Transitória|cleara em ~1 a 2 anos', 'rgba(60,207,149,.18)', 'var(--ok)') +
    box(190, 68, 150, 56, 'Persistente|tipo de alto risco', 'rgba(245,184,61,.18)', 'var(--acc)') +
    arr(150, 46, 95, 66) + arr(210, 46, 265, 66) +
    arr(265, 124, 265, 146) +
    box(190, 148, 150, 50, 'Lesão de baixo grau|(NIC 1 · LSIL)', 'rgba(245,184,61,.14)', 'var(--acc)') +
    arr(265, 198, 265, 218) +
    box(190, 220, 150, 50, 'Lesão de alto grau|(NIC 2/3 · HSIL)', 'rgba(242,106,95,.18)', 'var(--bad)') +
    box(20, 232, 140, 50, 'Câncer invasivo|anos a décadas depois', 'rgba(242,106,95,.3)', 'var(--bad)') +
    arr(190, 245, 162, 252) +
    '<text x="95" y="150" text-anchor="middle" font-size="11" fill="var(--muted)">maioria dos casos</text>' +
    '<text x="95" y="166" text-anchor="middle" font-size="11" fill="var(--muted)">(sem sintomas)</text>',
    'História natural da infecção por HPV');

  /* Algoritmo de rastreamento (DNA-HPV 2025) */
  window.APG_SVG.rastreio = svg(360, 330,
    box(80, 6, 200, 40, 'Teste DNA-HPV oncogênico', 'var(--surface2)') +
    arr(180, 46, 180, 62) +
    box(6, 64, 104, 50, 'Negativo|repete em 5 anos', 'rgba(60,207,149,.18)', 'var(--ok)') +
    box(128, 64, 104, 50, '16 e/ou 18|colposcopia', 'rgba(242,106,95,.18)', 'var(--bad)') +
    box(250, 64, 104, 50, 'Outros tipos|citologia reflexa', 'rgba(245,184,61,.18)', 'var(--acc)') +
    arr(150, 46, 58, 62) + arr(180, 46, 180, 62) + arr(210, 46, 300, 62) +
    arr(302, 114, 302, 138) +
    box(250, 140, 104, 50, 'ASC-US ou pior|colposcopia', 'rgba(242,106,95,.18)', 'var(--bad)') +
    box(130, 140, 104, 50, 'Citologia normal|repete em 12 m', 'rgba(245,184,61,.14)', 'var(--acc)') +
    arr(285, 114, 190, 138) +
    box(40, 214, 140, 56, 'Negativo no retorno|volta aos 5 anos', 'rgba(60,207,149,.18)', 'var(--ok)') +
    box(196, 214, 158, 56, '16/18 ou mesmo tipo|persistente (~24 m)|colposcopia', 'rgba(242,106,95,.18)', 'var(--bad)') +
    arr(160, 190, 110, 212) + arr(205, 190, 270, 212) +
    '<text x="180" y="300" text-anchor="middle" font-size="11" fill="var(--muted)">Início aos 25 anos · imunossuprimidos: intervalo de 3 anos</text>' +
    '<text x="180" y="318" text-anchor="middle" font-size="11" fill="var(--muted)">Confira sempre o protocolo vigente</text>',
    'Algoritmo de rastreamento com DNA-HPV');
})();

window.APG_DATA.casos.push({
  id: 'hpv',
  ic: '🧫',
  titulo: 'HPV',
  sub: 'Tutoria · 3 objetivos: vírus e câncer, diagnóstico e conduta, vacinação',
  cor: '#7A1E2C',
  modulos: [
    {
      id: 'h1', n: 1, ic: '🧫', t: 'O vírus, a epidemiologia e a história natural', obj: 'Objetivo 1',
      ler: [
        { t: 'O vírus em uma frase', d: 'HPV é um **vírus de DNA de fita dupla, circular, pequeno (~8 mil pares de bases) e sem envelope**: só tem capsídeo icosaédrico de proteínas **L1 e L2**. Sem envelope, ele é resistente a ressecamento e desinfetantes, o que facilita a transmissão por contato. Só se replica em **epitélio escamoso** (pele e mucosas).', fig: { src: 'img/hpv-genoma.jpg', cap: 'Genoma do HPV: genes precoces (E1 a E7), tardios (L1 e L2) e região reguladora (URR/LCR).' } },
        { t: 'Mais de 100 tipos, dois grupos', d: '**Baixo risco** (6 e 11): causam **verrugas** (cerca de 90% dos condilomas) e papilomatose respiratória, quase nunca câncer. **Alto risco** (16, 18, 31, 33, 45, 52, 58…): causam **lesões precursoras e câncer**; 16 e 18 respondem por cerca de **70% dos cânceres de colo**. Os tipos de pele (1, 2, 4) causam verrugas comuns e plantares.', fig: { src: 'img/hpv-risco.jpg', cap: 'Baixo risco: 6 e 11. Alto risco: 16 e 18 (e outros).' } },
        { t: 'Quão comum é', d: 'É a **IST mais frequente do mundo**: estima-se que ~80% das pessoas sexualmente ativas terão contato com o vírus. Há **dois picos**: no início da vida sexual (20 a 30 anos) e entre 50 e 60 anos (nova exposição, perda de imunidade ou imunossenescência). Em uma parceria fixa, quase metade das mulheres adquire o vírus em ~3 anos.' },
        { t: 'Como se transmite', d: 'Por **contato pele-pele ou pele-mucosa**, sobretudo sexual, **inclusive sem penetração** (mãos, genitais e boca). Daí vem a limitação do preservativo: ele **reduz, mas não elimina**, porque não cobre toda a pele que transmite. Há transmissão **perinatal** (rara): pode causar verrugas ou **papilomatose laríngea** no recém-nascido. Fômites são raros.' },
        { t: 'Fatores de risco', d: 'Início precoce, maior número de parcerias (mas **uma só pode bastar**), não uso de preservativo. Para **persistência e progressão**: **tabagismo** (lesiona a imunidade local do colo), **imunossupressão, incluindo HIV** (o CD4 baixo impede o controle do vírus) e a **zona de transformação imatura** de adolescentes e gestantes, mais vulnerável.' },
        { t: 'História natural: por que a maioria não vira câncer', d: 'O sistema imune celular **elimina** a maioria das infecções em ~1 a 2 anos. O que importa é a **persistência do tipo oncogênico por anos**: aí a chance de lesão precursora cresce, e o câncer leva **décadas**, sem ser inevitável. Distinga: **aquisição → transitória → persistência → lesão precursora → câncer**.', fig: { svg: 'historia', cap: 'História natural da infecção por HPV (esquema).' } }
      ],
      explique: {
        p: 'Explique o que é o HPV, como se transmite e por que a maioria das infecções não evolui para câncer.',
        dica: 'Vírus → tipos → transmissão → história natural → fatores de persistência.',
        pts: [
          { t: 'Vírus de DNA, sem envelope, com tropismo por epitélio escamoso', kw: ['dna', 'envelope', 'epitelio', 'escamoso'] },
          { t: 'Baixo risco (6 e 11, verrugas) × alto risco (16 e 18, câncer)', kw: ['baixo risco', 'alto risco', '16', '18', '6 e 11'] },
          { t: 'Transmissão por contato pele-mucosa, inclusive sem penetração; preservativo reduz mas não elimina', kw: ['contato', 'pele', 'sem penetracao', 'preservativo'] },
          { t: 'A maioria é transitória e eliminada pela imunidade celular em 1 a 2 anos', kw: ['transitori', 'elimin', 'regride', 'clareamento', 'dois anos', '2 anos'] },
          { t: 'Persistência do tipo oncogênico é o que leva a lesões precursoras', kw: ['persist', 'precursora', 'lesao'] },
          { t: 'Cofatores: tabagismo, imunossupressão (HIV); câncer leva anos e não é inevitável', kw: ['tabag', 'imunossup', 'hiv', 'decada', 'anos', 'inevitavel'] }
        ],
        modelo: 'O HPV é um vírus de DNA, pequeno, sem envelope, que infecta o epitélio escamoso da pele e das mucosas. Há mais de cem tipos: os de baixo risco, como 6 e 11, causam verrugas; os de alto risco, como 16 e 18, causam lesões precursoras e câncer. A transmissão é por contato pele-mucosa, sobretudo sexual, mesmo sem penetração, então o preservativo reduz mas não elimina o risco. A maioria das infecções é transitória: a imunidade celular elimina o vírus em um a dois anos. O risco aparece quando um tipo oncogênico persiste por anos, favorecido por tabagismo e imunossupressão, como no HIV. Mesmo assim, o câncer leva décadas para surgir e não é inevitável.'
      },
      porques: {
        ini: 'Uma pessoa sem verrugas ou sintomas ainda pode transmitir o HPV.',
        niveis: [
          { q: 'Por quê?', a: 'Porque a **maioria das infecções é assintomática**: o vírus se replica no epitélio sem causar lesão visível, mas produz partículas infectantes.' },
          { q: 'E por que ele passa despercebido?', a: 'A infecção é **local**, sem viremia, com **inflamação discreta** e **pouca exposição ao sistema imune**; o vírus ainda **inibe** parte da resposta imune. Sem alarme, não há sintomas.' },
          { q: 'Qual a consequência prática?', a: 'Ausência de lesão **não exclui transmissão**, e a infecção pode ser **antiga ou latente**: é impossível saber quando ocorreu, e **não se deve culpar** a parceria atual.' }
        ]
      }
    },
    {
      id: 'h2', n: 2, ic: '🧬', t: 'Patogenia e mecanismo oncogênico (E6 e E7)', obj: 'Objetivo 1',
      ler: [
        { t: 'Porta de entrada', d: 'O vírus precisa de **microabrasões** para alcançar a **camada basal**, onde estão as células que ainda se dividem. No colo, a **zona de transformação** (onde o epitélio colunar é substituído pelo escamoso) tem células **imaturas e em metaplasia**, mais vulneráveis: quase todas as neoplasias cervicais surgem aí.', fig: { src: 'img/hpv-jec.jpg', cap: 'Junção escamocolunar (JEC) no colo uterino. A zona de transformação é a região de risco. Fonte: Ginecologia, Williams.' } },
        { t: 'O ciclo acompanha a diferenciação', d: 'O DNA fica na célula basal como **epissoma** (fora do cromossomo). À medida que a célula sobe e se diferencia, os genes **E** replicam o DNA e os genes **L (L1, L2)** só se expressam **nas camadas superficiais**, onde o capsídeo é montado e o vírus é liberado na **descamação**. Por isso o ciclo completo só ocorre em epitélio diferenciado, e o vírus **não é lítico**.', fig: { svg: 'epitelio', cap: 'Camadas do epitélio e o que acontece em cada uma.' } },
        { t: 'E6: derruba a p53', d: 'A p53 é o “**guardião do genoma**”: ao detectar dano no DNA, para o ciclo ou induz **apoptose**. A **E6** liga-se à p53 e a **marca para degradação**, então a célula com DNA danificado **não é freada nem morre**. A E6 também aumenta a **telomerase**, ajudando a célula a “não envelhecer”.', fig: { src: 'img/hpv-e6e7.jpg', cap: 'E6 inibe p53 e aumenta a telomerase (TERT); E7 inibe p21 e RB, levando à imortalização e à instabilidade genômica.' } },
        { t: 'E7: derruba o pRb', d: 'O pRb é o “**freio**” da transição G1/S: ele segura o fator **E2F**. A **E7** liga-se ao pRb e **libera o E2F**, que empurra a célula para a **fase S** (replicação) o tempo todo. Resultado: **proliferação sem controle**.' },
        { t: 'Integração: o freio dos freios', d: 'O gene **E2** do vírus normalmente **reprime E6 e E7**. Quando o DNA viral **se integra** ao genoma da célula, o círculo se quebra geralmente **no E2**: o freio some e **E6 e E7 ficam superexpressos**. O vírus perde a capacidade de se replicar, mas a célula ganha **mais proliferação, menos apoptose e instabilidade genômica**.', fig: { src: 'img/hpv-progressao.jpg', cap: 'Progressão do carcinoma cervical: infecção, DNA epissomal (produção viral), DNA integrado (sem produção viral), neoplasia e câncer invasivo. Fonte: Murray, Microbiologia Médica.' } },
        { t: 'Do desequilíbrio ao câncer', d: 'Sem p53 e sem pRb, a célula **prolifera e acumula mutações** sem reparo nem morte. A sequência é **infecção persistente → lesão de baixo grau → lesão de alto grau → carcinoma**. O grau da lesão depende de **quanto do epitélio** está tomado por células atípicas: 1/3 (NIC 1), 2/3 (NIC 2), toda a espessura (NIC 3).' }
      ],
      explique: {
        p: 'Explique como E6 e E7 transformam uma célula infectada e por que a integração do DNA viral importa.',
        dica: 'Primeiro quem são p53 e pRb; depois o que E6 e E7 fazem; por fim a integração.',
        pts: [
          { t: 'p53 é o guardião do genoma: para o ciclo ou induz apoptose diante de dano', kw: ['p53', 'guardiao', 'apoptose'] },
          { t: 'E6 se liga à p53 e a degrada: a célula com DNA lesado não é eliminada; também ativa a telomerase', kw: ['e6', 'degrada', 'telomerase'] },
          { t: 'pRb segura o E2F e o ponto de checagem G1/S', kw: ['prb', 'rb', 'e2f', 'g1'] },
          { t: 'E7 inativa o pRb, liberando E2F e levando a célula à fase S', kw: ['e7', 'fase s', 'libera'] },
          { t: 'Integração rompe o E2, que reprime E6 e E7, superexpressando as oncoproteínas', kw: ['integra', 'e2', 'superexpress'] },
          { t: 'Resultado: proliferação, menos apoptose, instabilidade genômica e progressão para câncer', kw: ['instabilidade', 'mutac', 'cancer', 'proliferacao'] }
        ],
        modelo: 'A p53 é o guardião do genoma: quando há dano no DNA, ela para o ciclo ou induz apoptose. O pRb segura o fator E2F e controla a passagem de G1 para S. Nos tipos de alto risco, a E6 se liga à p53 e a marca para degradação, e ainda ativa a telomerase; a E7 inativa o pRb, liberando o E2F e empurrando a célula para a fase S. Quando o DNA viral se integra ao genoma, o gene E2, que normalmente reprime E6 e E7, é interrompido, então as duas oncoproteínas ficam superexpressas. A célula prolifera sem freio, não morre, acumula mutações e instabilidade genômica, e com o tempo evolui de lesão de baixo grau para alto grau e câncer.'
      },
      porques: {
        ini: 'A integração do DNA viral aumenta o risco de câncer, mesmo impedindo o vírus de se replicar.',
        niveis: [
          { q: 'Por quê?', a: 'A integração costuma **romper o gene E2**, que é o **repressor de E6 e E7**.' },
          { q: 'E o que acontece sem o E2?', a: '**E6 e E7 passam a ser produzidas em excesso**, degradando a p53 e inativando o pRb de forma contínua.' },
          { q: 'E por que isso leva ao câncer?', a: 'A célula perde o **freio do ciclo e a apoptose**: **prolifera, acumula mutações e instabilidade genômica**. A multiplicação do vírus deixa de importar; importa a **transformação da célula**.' }
        ]
      }
    },
    {
      id: 'h3', n: 3, ic: '🔍', t: 'Manifestações clínicas', obj: 'Objetivo 1',
      ler: [
        { t: 'Três formas de infecção', d: '**Latente:** só se detecta o DNA viral, sem alteração do epitélio. **Subclínica:** há alteração citológica ou histológica (vista no Papanicolaou ou na biópsia). **Clínica:** lesões visíveis, como verrugas. A **maioria é assintomática**, e o período de latência pode ir de meses a anos.', fig: { src: 'img/hpv-formas.jpg', cap: 'Formas de apresentação do HPV: proliferativa (verrugas), congênita, latente e neoplásica. Fonte: Sanarflix.' } },
        { t: 'Verrugas cutâneas', d: '**Verruga vulgar** (HPV 2 e 4): múltiplas, rugosas, em mãos, dedos, joelhos. **Verruga plantar** (HPV 1): geralmente única, **dolorosa**, no calcanhar e na planta (a pressão a empurra para dentro). **Epidermodisplasia verruciforme:** doença rara, em quem tem **falha da imunidade celular** (linfócitos T) frente ao HPV, com lesões extensas e risco de câncer de pele.', fig: { src: 'img/hpv-verruga-mao.jpg', cap: 'Verruga vulgar no dorso da mão (seta).' } },
        { t: 'Verrugas anogenitais (condiloma acuminado)', d: 'HPV **6 e 11**. Lesões **papilares ou em “couve-flor”**, da cor da pele, rosadas ou hiperpigmentadas, únicas ou múltiplas. Pênis, ânus, períneo, vulva, vagina e colo. Causam prurido, desconforto, sangramento por trauma. **Benignas**, mas recorrem. Na gestação podem crescer e raramente obstruem o parto.', fig: { src: 'img/hpv-condiloma-penis.jpg', cap: 'Condilomas acuminados no pênis, em aspecto de couve-flor.' } },
        { t: 'Papilomatose respiratória recorrente', d: 'Causada por **6 e 11**, em crianças que se infectaram no parto ou em adultos. Lesões verrucosas na **laringe** que **recorrem**: causam **rouquidão (disfonia) e falta de ar (dispneia)** progressivas e podem **obstruir a via aérea**.' },
        { t: 'Lesões precursoras e neoplasias', d: 'A maioria das precursoras é **assintomática**: aparece no **rastreamento**. Câncer de colo (sangramento pós-coital, corrimento fétido, dor pélvica), **ânus, vulva, vagina, pênis e orofaringe** (rouquidão, ferida que não cicatriza, disfagia, ínguas no pescoço por mais de 2 semanas). Os tipos 16 e 18 são os mais frequentes.', fig: { src: 'img/hpv-oral.jpg', cap: 'Lesão papilomatosa na cavidade oral.' } },
        { t: 'Como o patologista enxerga o HPV', d: 'A célula típica é o **coilócito**: núcleo aumentado, irregular e **halo claro** ao redor, efeito citopático do vírus. Aparecem também discariose e disqueratose. O epitélio fica espesso (**acantose, hiperplasia**), o que explica a **verruga**: estímulo do vírus ao crescimento das camadas basal e espinhosa.', fig: { src: 'img/hpv-coilocitose.jpg', cap: 'Epitélio com coilocitose exuberante (HE).' } }
      ],
      explique: {
        p: 'Descreva as manifestações clínicas da infecção por HPV, das verrugas ao câncer.',
        dica: 'Forma de infecção → verrugas → papilomatose → precursoras e cânceres.',
        pts: [
          { t: 'Formas latente, subclínica e clínica; a maioria é assintomática', kw: ['latente', 'subclinica', 'clinica', 'assintomatic'] },
          { t: 'Verrugas cutâneas (vulgar 2 e 4, plantar 1)', kw: ['vulgar', 'plantar', 'cutane'] },
          { t: 'Condiloma acuminado (6 e 11): lesões em couve-flor, benignas, recorrentes', kw: ['condiloma', 'couve', '6 e 11'] },
          { t: 'Papilomatose respiratória recorrente: rouquidão, dispneia, obstrução da via aérea', kw: ['laringe', 'rouquidao', 'disfonia', 'dispneia'] },
          { t: 'Lesões precursoras geralmente assintomáticas, detectadas no rastreamento', kw: ['precursora', 'rastreamento', 'assintomatic'] },
          { t: 'Cânceres: colo, ânus, vulva, vagina, pênis e orofaringe, sobretudo 16 e 18', kw: ['colo', 'anus', 'vulva', 'penis', 'orofaringe', '16'] }
        ],
        modelo: 'A infecção pode ser latente, com só o DNA viral detectável, subclínica, com alteração citológica ou histológica, ou clínica, com lesões visíveis, e a maioria é assintomática. As formas cutâneas são a verruga vulgar, pelos tipos 2 e 4, e a plantar, pelo tipo 1. Os tipos 6 e 11 causam o condiloma acuminado, em couve-flor, benigno mas recorrente, e a papilomatose respiratória recorrente, com rouquidão e dispneia por obstrução da laringe. As lesões precursoras costumam ser assintomáticas e aparecem no rastreamento. Os tipos 16 e 18 causam câncer de colo, ânus, vulva, vagina, pênis e orofaringe.'
      },
      porques: {
        ini: 'O condiloma é benigno, mas o HPV 16 causa câncer: o mesmo vírus, desfechos diferentes.',
        niveis: [
          { q: 'Por quê?', a: 'Os tipos **6 e 11** têm E6 e E7 que **ligam pouco** a p53 e o pRb; os tipos **16 e 18** têm oncoproteínas que **os inativam com muita eficiência**.' },
          { q: 'E o que o condiloma faz, então?', a: 'Só **estimula o crescimento do epitélio** (verruga) com o DNA viral **epissomal**, sem integração e sem perda dos freios celulares.' },
          { q: 'E a consequência na clínica?', a: 'Condiloma: **tratar a lesão** e tranquilizar. Tipos de alto risco: **rastrear e acompanhar**, porque a persistência pode virar câncer.' }
        ]
      }
    }
  ]
});
