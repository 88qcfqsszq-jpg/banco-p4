/* APG · caso HPV — módulos 4 a 6, tutor, relâmpago, casos clínicos, olho clínico e âncoras */
(function () {
  var C = window.APG_DATA.casos.find(function (c) { return c.id === 'hpv'; });
  C.modulos.push(
    {
      id: 'h4', n: 4, ic: '🧪', t: 'Diagnóstico e rastreamento', obj: 'Objetivo 2',
      ler: [
        { t: 'Três situações diferentes', d: '**Diagnóstico** (verruga visível: clínico), **rastreamento** (pessoa assintomática, para achar risco ou lesão precursora) e **investigação** (sintoma, como sangramento pós-coital, exige avaliação **mesmo fora da idade de rastreio**). Rastreamento **não** diagnostica toda infecção e **não** substitui a avaliação de sintomas.' },
        { t: 'Verrugas: diagnóstico clínico', d: 'A **inspeção** basta para tratar. **Biópsia** quando a lesão é **atípica, pigmentada, endurecida, ulcerada, fixa, sangrante**, de diagnóstico incerto ou **não responde** ao tratamento, porque pode ser lesão precursora ou câncer.', fig: { src: 'img/hpv-condiloma-anal.jpg', cap: 'Condilomas perianais: inspeção clínica basta quando típicos.' } },
        { t: 'Teste de DNA-HPV (método primário desde 2025)', d: 'Detecta o **DNA de HPV oncogênico** em amostra do colo. É mais **sensível** que a citologia para achar lesão de alto grau e tem **alto valor preditivo negativo**: negativo = baixo risco por **5 anos**. **Início aos 25 anos**; antes disso, não se rastreia, porque as infecções são muitas e **regridem sozinhas**. Resultado positivo **não é câncer**: indica **risco**.' },
        { t: 'Algoritmo do teste positivo', d: '**16 e/ou 18:** colposcopia direta (maior risco de lesão de alto grau). **Outros tipos oncogênicos:** **citologia reflexa** na mesma amostra; se ASC-US ou pior, colposcopia; se normal, **repetir em 12 meses**. No retorno: persistência do mesmo tipo (~24 meses) leva à colposcopia.', fig: { svg: 'rastreio', cap: 'Algoritmo de rastreamento com DNA-HPV (resumo). Confira o protocolo vigente.' } },
        { t: 'Citologia, colposcopia e biópsia', d: 'A **citologia (Papanicolaou)** detecta alteração celular (coilocitose, discariose) e classifica em ASC-US, LSIL (baixo grau) e HSIL (alto grau). A **colposcopia** examina o colo com aumento e ácido acético para **dirigir a biópsia**; a **histologia** confirma o grau (NIC 1, 2, 3). Onde não há teste molecular, a citologia continua: 2 anuais normais e depois a cada 3 anos.', fig: { src: 'img/hpv-nomenclatura.jpg', cap: 'Equivalência entre as nomenclaturas citológicas e histológicas (Papanicolaou, OMS, Richart, Bethesda).' } },
        { t: 'Grau da lesão e terminologia LAST', d: 'NIC 1 = atipia no **1/3 inferior** do epitélio; NIC 2 = **2/3**; NIC 3 = **toda a espessura**. Pela terminologia **LAST**: **baixo grau** (NIC 1) e **alto grau** (NIC 2 e 3). O NIC 2 é **heterogêneo**: pode regredir ou progredir. Pessoas com HIV ou imunossupressão começam o rastreio mais cedo (após o início da vida sexual) e o intervalo é de 3 anos.' }
      ],
      explique: {
        p: 'Como se faz o rastreamento do colo do útero com DNA-HPV e o que fazer com um teste positivo?',
        dica: 'Para quem → com o quê → resultado negativo → positivo 16/18 → positivo de outros tipos.',
        pts: [
          { t: 'Rastreamento é para assintomáticos; sintoma exige investigação, mesmo fora da idade', kw: ['assintomatic', 'sintoma', 'investig'] },
          { t: 'DNA-HPV oncogênico como método primário, a partir dos 25 anos, antes não se rastreia', kw: ['dna', '25', 'primario'] },
          { t: 'Negativo: repete em 5 anos (alto valor preditivo negativo)', kw: ['5 anos', 'cinco', 'negativo'] },
          { t: 'Positivo para 16 e/ou 18: colposcopia direta', kw: ['16', '18', 'colposcopia'] },
          { t: 'Outros oncogênicos: citologia reflexa; ASC-US ou pior colposcopia; normal repete em 12 meses', kw: ['citologia', 'reflexa', 'asc', '12 meses'] },
          { t: 'Positivo não é câncer: indica risco; colposcopia e biópsia confirmam o grau', kw: ['nao e cancer', 'risco', 'biopsia', 'colposcopia'] }
        ],
        modelo: 'O rastreamento é feito em pessoas assintomáticas, com teste de DNA-HPV oncogênico como método primário a partir dos 25 anos; antes disso não se rastreia porque a maioria das infecções regride. Se o teste é negativo, repete em cinco anos, porque o valor preditivo negativo é alto. Se positivo para 16 ou 18, vai direto à colposcopia, pois são os tipos de maior risco. Se positivo para outro tipo oncogênico, faz-se citologia reflexa: com ASC-US ou pior, colposcopia; se normal, repete em 12 meses e, havendo persistência, colposcopia. Positivo não significa câncer, indica risco; a colposcopia com biópsia confirma o grau da lesão. Quem tem sintomas, como sangramento pós-coital, é investigado em qualquer idade.'
      },
      porques: {
        ini: 'Antes dos 25 anos não se faz rastreamento com DNA-HPV.',
        niveis: [
          { q: 'Por quê?', a: 'Porque a **prevalência de HPV é muito alta em jovens**, e a maioria dessas infecções é **transitória**.' },
          { q: 'E qual o problema de testar?', a: 'Muitos **testes positivos** que **clareariam sozinhos**: gera ansiedade, colposcopias e tratamentos **desnecessários**.' },
          { q: 'E o câncer nessa idade?', a: '**É raro**: o rastreamento nessa faixa **não reduz** incidência nem mortalidade, então o dano supera o benefício.' }
        ]
      }
    },
    {
      id: 'h5', n: 5, ic: '🛠️', t: 'Conduta e prevenção', obj: 'Objetivo 2',
      ler: [
        { t: 'Não existe antiviral que cure o HPV', d: 'Trata-se a **manifestação** (verruga ou lesão) e acompanha-se conforme o risco. Por isso a retirada de uma verruga **não garante eliminação do vírus** nem impede **recorrência**: o vírus pode estar nas células vizinhas, aparentemente normais.' },
        { t: 'Condilomas: opções', d: '**Observar** em casos selecionados (podem regredir). **Ácido tricloroacético 80–90%:** cáustico, coagula proteínas; **seguro na gestação**. **Podofilina:** antimitótico (impede a tubulina), lavar após horas, **contraindicada na gestação**. **Imiquimode:** estimula a imunidade local (agonista de TLR-7); **evitar na gestação**. **Crioterapia:** congelamento; seguro na gestação. **Cauterização, exérese ou laser:** lesões extensas ou refratárias.' },
        { t: 'Lesões precursoras do colo', d: '**Baixo grau (NIC 1):** em geral **vigilância**, pois a maioria regride. **Alto grau (NIC 2/3):** tratamento **excisional** (EZT/CAF ou conização) ou **ablativo** (só se a lesão for totalmente visível e sem suspeita de invasão). **Adenocarcinoma in situ:** excisional. A excisão profunda aumenta o risco de **parto prematuro**: excisar o mínimo necessário em mulheres jovens.' },
        { t: 'Suspeita de invasão e câncer', d: 'Lesão suspeita **não se destrói às cegas**: **biópsia e encaminhamento especializado** (a destruição apagaria o diagnóstico). **Câncer invasivo:** oncologia, com cirurgia, radioterapia e/ou tratamento sistêmico conforme sítio e estadiamento.' },
        { t: 'Seguimento após tratar lesão de alto grau', d: 'O risco de **recorrência e de câncer** continua maior por muitos anos (seguimento por até 25 anos). O **teste de DNA-HPV** acompanha: **persistência do vírus** após o tratamento é o melhor marcador de recidiva; negativação indica boa evolução.' },
        { t: 'Prevenção e cuidado sem estigma', d: 'Preservativo **reduz, não elimina**. **Vacina** é prevenção primária e **não trata** infecção já adquirida. **Mantém o rastreamento** mesmo vacinada. Orientar **parar de fumar** e investigar outras ISTs. Explicar que é **muito comum**, que pode ser **antiga** e que **não dá para saber quando** ocorreu.' }
      ],
      explique: {
        p: 'Explique a conduta nos condilomas e nas lesões precursoras do colo, e as medidas de prevenção.',
        dica: 'Primeiro o que não existe; depois condiloma; precursoras por grau; por fim prevenção.',
        pts: [
          { t: 'Não há antiviral que erradique o HPV; trata-se a lesão, e pode haver recorrência', kw: ['antiviral', 'recorrencia', 'erradic'] },
          { t: 'Condilomas: observar ou tratar (ATA, podofilina, imiquimode, crioterapia, cirurgia) conforme local, extensão e gestação', kw: ['ata', 'tricloroacetico', 'crioterapia', 'imiquimode', 'podofilina'] },
          { t: 'NIC 1: vigilância; NIC 2/3: tratamento excisional ou ablativo', kw: ['nic 1', 'vigilancia', 'excisional', 'alto grau', 'alca', 'conizacao'] },
          { t: 'Suspeita de invasão: biópsia e encaminhamento; não destruir lesão suspeita', kw: ['invasao', 'biopsia', 'encaminh'] },
          { t: 'Seguimento prolongado com DNA-HPV após tratar alto grau', kw: ['seguimento', 'persistencia', 'recidiva'] },
          { t: 'Prevenção: vacina, preservativo (reduz), manter rastreio, parar de fumar, sem estigma', kw: ['vacina', 'preservativo', 'rastreio', 'fumar', 'estigma'] }
        ],
        modelo: 'Não existe antiviral capaz de erradicar o HPV, então tratamos a manifestação, e a recorrência é possível. Nos condilomas, posso observar em casos selecionados ou tratar com ácido tricloroacético, podofilina, imiquimode, crioterapia ou cirurgia, escolhendo conforme local, extensão e gestação: podofilina e imiquimode são evitados na gravidez. No colo, o NIC 1 em geral só é acompanhado, porque regride; o NIC 2 e 3 são tratados por excisão, como EZT ou conização, ou ablação quando a lesão é totalmente visível e sem suspeita de invasão. Lesão suspeita de invasão é biopsiada e encaminhada, não destruída. Após tratar alto grau, mantém-se seguimento prolongado com DNA-HPV. Na prevenção: vacina, preservativo que reduz o risco, manter o rastreio mesmo vacinada, parar de fumar e abordar sem estigma.'
      },
      porques: {
        ini: 'Retirar a verruga não elimina o vírus nem impede que ela volte.',
        niveis: [
          { q: 'Por quê?', a: 'O tratamento **destrói a lesão visível**, mas o vírus pode estar **latente nas células basais do epitélio vizinho**, de aparência normal.' },
          { q: 'E o que traz a lesão de volta?', a: 'Essas células **reativam a expressão viral** quando a imunidade local não controla o vírus; por isso a **recorrência** é comum nos primeiros meses.' },
          { q: 'Qual o papel do paciente?', a: 'O **sistema imune** é quem acaba eliminando o vírus: parar de fumar, tratar outras ISTs e acompanhar ajudam; não existe “cura” pela destruição da lesão.' }
        ]
      }
    },
    {
      id: 'h6', n: 6, ic: '💉', t: 'Vacinação contra o HPV', obj: 'Objetivo 3',
      ler: [
        { t: 'Como a vacina funciona', d: 'É feita de **VLPs (partículas semelhantes ao vírus)**, montadas só com a proteína **L1**, **sem DNA**: **não causam infecção**. O corpo produz **anticorpos neutralizantes** que **bloqueiam a entrada** do vírus nas células epiteliais. Previne a **infecção**, e não trata a já existente.' },
        { t: 'Por que antes da vida sexual', d: 'A vacina **previne** a infecção; ela precisa estar pronta **antes da exposição**. Quem já foi exposto ao tipo vacinal **não tem esse benefício**, e a resposta imune é **mais forte em pré-adolescentes**, o que também ajuda a simplificar o esquema.' },
        { t: 'Vacina do SUS', d: '**Quadrivalente (6, 11, 16 e 18):** 6 e 11 contra a maioria das verrugas e 16 e 18 contra grande parte dos cânceres. **Rotina do PNI:** meninas e meninos de **9 a 14 anos**, em **dose única**. **Resgate temporário** de 15 a 19 anos não vacinados, também em dose única.' },
        { t: 'Grupos especiais (CRIE)', d: '**Imunocomprometidos** (HIV, transplantados, oncológicos), **usuários de PrEP** e **vítimas de violência sexual** têm **esquema ampliado**; para os que precisam, **3 doses (0, 2 e 6 meses)**, porque respondem pior a uma dose só. Conferir idade, indicação e esquema no PNI/CRIE.' },
        { t: 'Impacto individual e coletivo', d: 'Reduz **infecção persistente pelos tipos vacinais, verrugas e lesões precursoras**; com alta cobertura, reduz no futuro **câncer e mortalidade**. **Vacinar meninos e meninas** protege diretamente ambos e **reduz a circulação do vírus** (proteção coletiva).' },
        { t: 'Segurança e comunicação', d: 'Efeitos comuns: **dor, vermelhidão e edema local**, febre baixa, cefaleia. Graves são raros. **Síncope** em adolescentes vem do **ato da injeção**: vacinar **sentado** e observar. **Adiar** em doença aguda moderada ou grave; **gestante não vacina** (doses ficam para depois do parto). A vacina **não estimula** início da vida sexual e **não substitui** preservativo nem rastreio.' }
      ],
      explique: {
        p: 'Explique como a vacina contra HPV funciona, quem deve receber e por que ainda é preciso rastrear.',
        dica: 'Mecanismo → quando → esquema → impacto → o que ela não substitui.',
        pts: [
          { t: 'VLPs de L1, sem material genético, induzem anticorpos neutralizantes que bloqueiam a entrada', kw: ['vlp', 'l1', 'neutraliz', 'anticorpo'] },
          { t: 'Mais eficaz antes da exposição, por isso antes do início da vida sexual', kw: ['antes', 'exposicao', 'vida sexual'] },
          { t: 'Quadrivalente 6, 11, 16 e 18; rotina 9 a 14 anos, dose única, meninas e meninos', kw: ['quadrivalente', '9 a 14', 'dose unica', 'meninos'] },
          { t: 'Grupos especiais (imunocomprometidos, PrEP, violência sexual) com esquema ampliado de 3 doses', kw: ['imunocomprom', 'prep', 'violencia', '3 doses', 'tres doses'] },
          { t: 'Impacto: menos verrugas, lesões precursoras e cânceres; proteção coletiva', kw: ['verruga', 'precursora', 'cancer', 'coletiv'] },
          { t: 'Não trata infecção existente nem substitui preservativo e rastreio (outros tipos, já expostos)', kw: ['nao trata', 'substitui', 'rastreio', 'outros tipos'] }
        ],
        modelo: 'A vacina é feita de partículas semelhantes ao vírus, formadas pela proteína L1, sem material genético, então não causa infecção. Ela induz anticorpos neutralizantes que bloqueiam a entrada do HPV nas células epiteliais. É mais eficaz antes da exposição, por isso se vacina antes do início da vida sexual. O SUS usa a quadrivalente, tipos 6, 11, 16 e 18, em dose única para meninas e meninos de 9 a 14 anos, com resgate de 15 a 19 anos; imunocomprometidos, usuários de PrEP e vítimas de violência sexual têm esquema ampliado, com três doses. Reduz verrugas, lesões precursoras e, no futuro, cânceres, além de proteger a comunidade. Mas não trata infecção já existente, não cobre todos os tipos e não substitui preservativo nem rastreamento do colo.'
      },
      porques: {
        ini: 'Mulheres vacinadas continuam precisando do rastreamento do colo do útero.',
        niveis: [
          { q: 'Por quê?', a: 'A vacina cobre **só alguns tipos** (16 e 18 entre os oncogênicos); **outros tipos de alto risco** continuam causando lesão.' },
          { q: 'Há outro motivo?', a: 'Quem **já teve contato** com o vírus antes de vacinar **não tem o benefício** para aquele tipo, e a **proteção do rastreio** vale para toda a vida.' },
          { q: 'E o que isso mostra?', a: 'A vacina **reduz o risco, não o zera**: prevenção primária (vacina) e secundária (rastreio) **se somam**.' }
        ]
      }
    }
  );

  var SEG = {
    'Por que a maioria das infecções não vira câncer?': 'Porque a **imunidade celular** elimina o vírus em 1 a 2 anos na maior parte dos casos. O risco está na **persistência do tipo oncogênico por anos**, favorecida por tabagismo e imunossupressão.',
    'Por que uma pessoa sem sintomas transmite?': 'A infecção é **local, sem viremia e com pouca inflamação**, então não gera sintomas, mas o epitélio infectado **libera vírus** na descamação.',
    'Como a E6 contribui para o câncer?': 'A E6 **degrada a p53**: a célula com DNA danificado **não para nem morre**. Também ativa a **telomerase**, mantendo a célula “imortal”.',
    'E o que a E7 faz?': 'A E7 **inativa o pRb**, que segurava o E2F: a célula é empurrada para a **fase S**, **proliferando sem controle**.',
    'Por que a integração aumenta o risco?': 'Rompe o **E2**, o repressor de E6/E7, então elas ficam **superexpressas**, e a célula perde de vez os freios do ciclo e da apoptose.',
    'Por que a zona de transformação é vulnerável?': 'Porque tem **células de reserva e metaplásicas imaturas**, em divisão ativa, que o vírus infecta com eficiência. É onde surgem quase todas as neoplasias do colo.',
    'Qual a diferença entre verruga e câncer em termos de mecanismo?': 'Verruga: DNA viral **epissomal**, E6/E7 em nível baixo, **hiperplasia benigna**. Câncer: DNA **integrado**, E6/E7 em excesso, **perda de p53 e pRb** e instabilidade genômica.',
    'Quando uma verruga precisa de biópsia?': 'Se for **atípica, pigmentada, endurecida, ulcerada, fixa, sangrante**, de diagnóstico incerto ou **sem resposta** ao tratamento: pode ser lesão de alto grau ou câncer.',
    'Qual a vantagem do DNA-HPV sobre a citologia?': 'É **mais sensível** para lesão de alto grau e tem **alto valor preditivo negativo**, permitindo **intervalo de 5 anos** e menos perdas em rastreamentos organizados.',
    'Por que 16 e 18 vão direto para colposcopia?': 'São os tipos com **maior risco de lesão de alto grau e câncer**: o risco já justifica avaliar o colo sem esperar a citologia.',
    'Por que a sangramento pós-coital exige investigação mesmo fora do rastreio?': 'Porque é **sintoma de possível lesão ou câncer de colo**; rastreamento é para assintomáticos, e quem tem sintoma precisa de **diagnóstico**, em qualquer idade.',
    'Por que o NIC 1 em geral só é acompanhado?': 'Porque a maioria **regride sozinha** com a imunidade, e tratar teria **riscos** (como parto prematuro após excisão) sem benefício.',
    'Por que não se destrói uma lesão suspeita de invasão?': 'A destruição **elimina o tecido** que o patologista precisaria para o diagnóstico, atrasando o tratamento de um possível câncer. Faz-se **biópsia**.',
    'Por que podofilina e imiquimode são evitados na gestação?': 'A podofilina é **antimitótica** e pode ser absorvida (risco ao feto); o imiquimode tem **segurança não estabelecida**. Na gestação usam-se **ATA, crioterapia ou cirurgia**.',
    'O que o VLP tem de diferente do vírus?': 'É a **cápsula L1 vazia**, **sem DNA**: imita o vírus para o sistema imune, mas **não consegue infectar nem se replicar**.',
    'Por que a vacina funciona melhor antes da vida sexual?': 'Porque protege contra a **infecção**; quem já foi exposto ao tipo vacinal **não se beneficia** para aquele tipo, e a resposta de pré-adolescentes é mais forte.',
    'Por que a dose única foi adotada?': 'Estudos mostraram **proteção contra infecção persistente por 16/18 semelhante** à dos esquemas com mais doses; **simplifica, aumenta a adesão e amplia a cobertura**.',
    'Por que imunocomprometidos usam três doses?': 'Porque **respondem pior** à vacina, e o esquema ampliado garante **anticorpos suficientes**; eles também têm **maior risco** de lesões.',
    'Como responder à família que teme que a vacina estimule a vida sexual?': 'Com **escuta e linguagem simples**: a vacina **previne câncer e verrugas**, não estimula início da vida sexual, tem **segurança comprovada com bilhões de doses** e funciona melhor antes da exposição.',
    'O que fazer se uma gestante recebeu a vacina sem saber?': 'Não há indicação de interromper a gestação; as **doses restantes ficam para depois do parto**, conforme a orientação técnica vigente.'
  };

  C.tutor = [
    { q: 'Por que a maioria das infecções por HPV não evolui para câncer?', a: 'A imunidade celular elimina o vírus em 1 a 2 anos. O câncer exige persistência de um tipo oncogênico por anos, com cofatores como tabagismo e imunossupressão, e leva décadas.', seg: ['Por que a maioria das infecções não vira câncer?', 'Por que uma pessoa sem sintomas transmite?'], m: 'h1' },
    { q: 'Como o HPV é transmitido e por que o preservativo não elimina o risco?', a: 'Contato pele-pele ou pele-mucosa, sobretudo sexual, mesmo sem penetração. O preservativo não cobre toda a pele que pode transmitir, então reduz mas não elimina.', seg: ['Por que uma pessoa sem sintomas transmite?', 'Por que a zona de transformação é vulnerável?'], m: 'h1' },
    { q: 'Explique o papel de E6 e E7 na oncogênese.', a: 'E6 degrada a p53 e ativa a telomerase; E7 inativa o pRb e libera o E2F, levando à fase S. Resultado: menos apoptose, proliferação sem controle e instabilidade genômica.', seg: ['Como a E6 contribui para o câncer?', 'E o que a E7 faz?'], m: 'h2' },
    { q: 'O que acontece quando o DNA viral se integra ao genoma?', a: 'A integração rompe o gene E2, repressor de E6 e E7, que ficam superexpressas. O vírus deixa de se replicar, mas a célula perde os freios e se transforma.', seg: ['Por que a integração aumenta o risco?', 'Qual a diferença entre verruga e câncer em termos de mecanismo?'], m: 'h2' },
    { q: 'Quais as formas clínicas da infecção por HPV?', a: 'Latente (só DNA), subclínica (alteração citológica ou histológica) e clínica (verrugas). Cutâneas, condiloma acuminado, papilomatose respiratória, lesões precursoras e cânceres.', seg: ['Qual a diferença entre verruga e câncer em termos de mecanismo?', 'Quando uma verruga precisa de biópsia?'], m: 'h3' },
    { q: 'Quais cânceres estão associados ao HPV?', a: 'Colo do útero, ânus, vulva, vagina, pênis e orofaringe, com 16 e 18 sendo os mais frequentes (cerca de 70% dos cânceres de colo).', seg: ['Qual a diferença entre verruga e câncer em termos de mecanismo?', 'Por que a zona de transformação é vulnerável?'], m: 'h3' },
    { q: 'Qual a diferença entre rastreamento e investigação diagnóstica?', a: 'Rastreamento: pessoa assintomática, para achar risco ou lesão precursora. Investigação: pessoa com sintoma, como sangramento pós-coital, avaliada em qualquer idade.', seg: ['Por que a sangramento pós-coital exige investigação mesmo fora do rastreio?', 'Qual a vantagem do DNA-HPV sobre a citologia?'], m: 'h4' },
    { q: 'Como funciona o rastreamento com DNA-HPV?', a: 'A partir dos 25 anos. Negativo: 5 anos. 16/18: colposcopia. Outros tipos: citologia reflexa; ASC-US ou pior colposcopia, normal repete em 12 meses.', seg: ['Por que 16 e 18 vão direto para colposcopia?', 'Qual a vantagem do DNA-HPV sobre a citologia?'], m: 'h4' },
    { q: 'Por que um teste de HPV positivo não equivale a câncer?', a: 'Indica presença do vírus e risco, não lesão nem câncer: a maioria das infecções é transitória. A colposcopia com biópsia confirma o grau.', seg: ['Qual a vantagem do DNA-HPV sobre a citologia?', 'Por que 16 e 18 vão direto para colposcopia?'], m: 'h4' },
    { q: 'Qual a conduta nos condilomas anogenitais?', a: 'Observar em casos selecionados ou tratar com ATA, podofilina, imiquimode, crioterapia ou cirurgia, conforme local, extensão e gestação.', seg: ['Por que podofilina e imiquimode são evitados na gestação?', 'Quando uma verruga precisa de biópsia?'], m: 'h5' },
    { q: 'Como conduzir lesões precursoras do colo?', a: 'NIC 1: vigilância. NIC 2/3: excisão (EZT ou conização) ou ablação se totalmente visível e sem suspeita de invasão. Seguimento prolongado com DNA-HPV.', seg: ['Por que o NIC 1 em geral só é acompanhado?', 'Por que não se destrói uma lesão suspeita de invasão?'], m: 'h5' },
    { q: 'Como funciona a vacina contra o HPV?', a: 'VLPs da proteína L1, sem material genético, induzem anticorpos neutralizantes que bloqueiam a entrada do vírus. Previne infecção; não trata a existente.', seg: ['O que o VLP tem de diferente do vírus?', 'Por que a vacina funciona melhor antes da vida sexual?'], m: 'h6' },
    { q: 'Qual o esquema vacinal no SUS?', a: 'Quadrivalente, 9 a 14 anos, meninas e meninos, dose única; resgate temporário de 15 a 19 anos. Grupos especiais: 3 doses.', seg: ['Por que a dose única foi adotada?', 'Por que imunocomprometidos usam três doses?'], m: 'h6' },
    { q: 'Mulheres vacinadas ainda precisam fazer o rastreio?', a: 'Sim: a vacina não cobre todos os tipos oncogênicos, não beneficia quem já foi exposto e reduz mas não zera o risco.', seg: ['Como responder à família que teme que a vacina estimule a vida sexual?', 'O que fazer se uma gestante recebeu a vacina sem saber?'], m: 'h6' },
    { q: 'Como abordar a hesitação vacinal de uma família?', a: 'Escuta, linguagem simples, evidências de segurança, explicar que previne câncer e verrugas, que não estimula início da vida sexual e que funciona melhor antes da exposição.', seg: ['Como responder à família que teme que a vacina estimule a vida sexual?', 'O que fazer se uma gestante recebeu a vacina sem saber?'], m: 'h6' }
  ];
  C.tutor.forEach(function (t) { t.seg = t.seg.map(function (q) { if (!SEG[q]) throw new Error('sem resposta HPV: ' + q); return { q: q, a: SEG[q] }; }); });

  C.relampago = [
    { t: 'O vírus e seus tipos', pts: ['DNA, circular, sem envelope', 'Tropismo por epitélio escamoso', 'Baixo risco: 6 e 11 (verrugas)', 'Alto risco: 16 e 18 (câncer)', 'Capsídeo L1 e L2'] },
    { t: 'História natural da infecção', pts: ['Aquisição', 'Maioria é transitória (1 a 2 anos)', 'Persistência do tipo oncogênico', 'Lesão precursora', 'Câncer após décadas'] },
    { t: 'E6 e p53', pts: ['p53 é o guardião do genoma', 'E6 liga e degrada a p53', 'Sem apoptose diante de dano', 'Ativa a telomerase'] },
    { t: 'E7 e pRb', pts: ['pRb segura o E2F', 'E7 inativa o pRb', 'E2F liberado: fase S', 'Proliferação sem controle'] },
    { t: 'Integração do DNA viral', pts: ['Rompe o gene E2', 'E2 reprime E6 e E7', 'Oncoproteínas superexpressas', 'Instabilidade genômica'] },
    { t: 'Manifestações clínicas', pts: ['Maioria assintomática', 'Verrugas cutâneas e condiloma (6 e 11)', 'Papilomatose respiratória', 'Lesões precursoras', 'Cânceres: colo, ânus, orofaringe…'] },
    { t: 'Rastreamento com DNA-HPV', pts: ['Início aos 25 anos', 'Negativo: 5 anos', '16/18: colposcopia', 'Outros: citologia reflexa', 'Normal: repete em 12 meses'] },
    { t: 'Tratamento dos condilomas', pts: ['Sem antiviral', 'Observar ou tratar', 'ATA, podofilina, imiquimode, crioterapia', 'Gestação: ATA e crioterapia', 'Recorrência é comum'] },
    { t: 'Lesões precursoras do colo', pts: ['NIC 1: vigilância', 'NIC 2/3: excisão ou ablação', 'Não destruir lesão suspeita de invasão', 'Seguimento com DNA-HPV'] },
    { t: 'Vacina contra HPV', pts: ['VLPs da L1, sem DNA', 'Anticorpos neutralizantes', 'Quadrivalente 6, 11, 16 e 18', '9 a 14 anos, dose única', 'Não substitui rastreio'] }
  ];

  C.casos = [
    {
      t: 'Mulher de 28 anos com teste de HPV positivo',
      hist: 'Mulher de 28 anos, assintomática, faz rastreamento do colo do útero. Teste de DNA-HPV oncogênico: positivo para tipos oncogênicos diferentes de 16 e 18. Sem comorbidades.',
      passos: [
        { p: 'Isso significa que ela tem câncer?', a: 'Não. Indica presença de HPV oncogênico e risco, não lesão nem câncer.', pq: 'A maioria das infecções é transitória e regride sozinha.' },
        { p: 'Qual o próximo passo?', a: 'Citologia reflexa, na mesma amostra.', pq: 'Outros tipos oncogênicos têm risco menor que 16/18, e a citologia seleciona quem precisa de colposcopia.' },
        { p: 'A citologia veio normal. E agora?', a: 'Repetir o teste de DNA-HPV em 12 meses.', pq: 'A conduta busca saber se a infecção persiste, pois só a persistência traz risco.' },
        { p: 'No retorno o mesmo tipo persiste (~24 meses). O que fazer?', a: 'Colposcopia, independentemente da citologia.', pq: 'Persistência prolongada do tipo oncogênico aumenta a chance de lesão de alto grau.' },
        { p: 'O que explicar à paciente?', a: 'Que é muito comum, pode ser antiga, não se sabe quando ocorreu e que o seguimento é para prevenir o câncer. Orientar parar de fumar.', pq: 'Reduz estigma e culpa; o tabagismo favorece a persistência.' }
      ]
    },
    {
      t: 'Homem de 30 anos com lesões no pênis',
      hist: 'Homem de 30 anos com múltiplas lesões papilares, cor da pele e rosadas, na haste do pênis, há 2 meses, com prurido leve. Sem dor nem ulceração.',
      passos: [
        { p: 'Qual a hipótese?', a: 'Condiloma acuminado (verrugas anogenitais).', pq: 'Lesões papilares e múltiplas, em aspecto de couve-flor, típicas de HPV 6 e 11.' },
        { p: 'Preciso de biópsia?', a: 'Não, se típicas. Biópsia se atípicas, pigmentadas, endurecidas, ulceradas, fixas, sangrantes ou sem resposta.', pq: 'Nesses casos pode ser lesão precursora ou câncer.' },
        { p: 'Qual o tratamento?', a: 'Observar ou tratar: ATA, podofilina, imiquimode, crioterapia ou exérese, conforme extensão e preferência.', pq: 'Não há antiviral; trata-se a lesão visível.' },
        { p: 'Ele pergunta se está curado quando as verrugas somem.', a: 'As lesões somem, mas o vírus pode persistir e a recorrência é comum.', pq: 'O vírus pode estar latente nas células vizinhas; a imunidade controla com o tempo.' },
        { p: 'E a parceria? E prevenção?', a: 'Orientar que a parceria também pode estar infectada; preservativo reduz risco; avaliar outras ISTs; vacinar se tiver indicação.', pq: 'A transmissão ocorre por contato pele-mucosa, e o preservativo não cobre toda a pele.' }
      ]
    },
    {
      t: 'Mãe preocupada com a vacina da filha',
      hist: 'Mãe de uma menina de 11 anos recusa a vacina contra HPV: teme que estimule a vida sexual e duvida da segurança. A menina nunca foi vacinada.',
      passos: [
        { p: 'Como começar a conversa?', a: 'Com escuta: perguntar o que a preocupa e acolher o receio, sem julgar.', pq: 'Hesitação vacinal se resolve com vínculo e informação, não com confronto.' },
        { p: 'Responda ao medo de estimular a vida sexual.', a: 'A vacina previne câncer e verrugas; não há evidência de que estimule início da vida sexual. Funciona melhor antes da exposição.', pq: 'Vacina é prevenção primária e precisa estar pronta antes do contato com o vírus.' },
        { p: 'E a segurança?', a: 'Bilhões de doses aplicadas; efeitos comuns são locais; graves são raros. Desmaio vem do ato da injeção: vacinar sentada.', pq: 'Dar números e orientação prática reduz o medo.' },
        { p: 'Qual o esquema?', a: 'Dose única, na faixa de 9 a 14 anos, pelo SUS.', pq: 'A dose única mostrou proteção semelhante à de mais doses e simplifica o acesso.' },
        { p: 'O que ela ainda precisará fazer no futuro?', a: 'Manter o rastreamento do colo do útero a partir dos 25 anos e usar preservativo.', pq: 'A vacina não cobre todos os tipos nem trata infecção prévia.' }
      ]
    }
  ];

  /* Olho clínico: imagem → o que é? */
  C.visual = [
    { img: 'img/hpv-condiloma-penis.jpg', p: 'Qual a lesão e o tipo de HPV mais provável?', a: '**Condilomas acuminados** (verrugas anogenitais) no pênis: lesões papilares agrupadas em couve-flor. Tipos **6 e 11**.', pq: 'Baixo risco oncogênico: benigno, mas recorrente. Tratar a lesão; biópsia se atípica.' },
    { img: 'img/hpv-condiloma-anal.jpg', p: 'O que você vê e como confirma o diagnóstico?', a: '**Condilomas perianais.** O diagnóstico é **clínico** (inspeção) quando típicos.', pq: 'Biópsia só se a lesão for atípica, pigmentada, endurecida, ulcerada, sangrante ou refratária.' },
    { img: 'img/hpv-verruga-mao.jpg', p: 'Lesão na mão, indicada pela seta. Qual o diagnóstico?', a: '**Verruga vulgar** (cutânea), geralmente HPV **2 e 4**.', pq: 'Surge em locais sujeitos a abrasão (mãos, joelhos), que facilita a entrada do vírus.' },
    { img: 'img/hpv-verrugas-mao2.jpg', p: 'Múltiplas lesões no dorso da mão. O que são?', a: '**Verrugas cutâneas** múltiplas por HPV de pele.', pq: 'Em quem tem múltiplas lesões extensas e persistentes, considerar falha da imunidade celular (por exemplo, epidermodisplasia verruciforme, rara).' },
    { img: 'img/hpv-oral.jpg', p: 'Lesão papilomatosa na boca. Qual a relação com o HPV?', a: '**Papiloma oral** por HPV. Tipos de alto risco (16 e 18) também causam **câncer de orofaringe**.', pq: 'Sintomas que persistem por mais de 2 semanas (ferida que não cicatriza, rouquidão, disfagia, ínguas) exigem investigação.' },
    { img: 'img/hpv-coilocitose.jpg', p: 'Esta é uma lâmina de epitélio (HE). Qual o achado típico do HPV?', a: '**Coilocitose**: células com núcleo aumentado e irregular e halo claro perinuclear, além de acantose.', pq: 'É o efeito citopático do vírus; marca de infecção subclínica na citologia e na histologia.' },
    { img: 'img/hpv-e6e7.jpg', p: 'Explique este esquema.', a: '**E6** inibe a **p53** (e aumenta a telomerase); **E7** inibe **p21 e RB**, aumentando CDK4/ciclina D. Resultado: **imortalização, proliferação e instabilidade genômica**.', pq: 'Sem p53 não há apoptose; sem pRb não há freio em G1/S.' },
    { img: 'img/hpv-progressao.jpg', p: 'Descreva a progressão mostrada e o estado do DNA viral em cada fase.', a: 'Infecção → **DNA epissomal** (produz vírus, lesão de baixo grau) → **DNA integrado** (sem produção viral, alto grau) → neoplasia → **câncer invasivo**.', pq: 'A integração rompe E2 e superexpressa E6 e E7.' },
    { img: 'img/hpv-jec.jpg', p: 'O que é a JEC e por que ela importa?', a: '**Junção escamocolunar**: encontro do epitélio escamoso (rosa claro) com o colunar (vermelho) no colo. A **zona de transformação** ao redor dela é onde surgem quase todas as neoplasias.', pq: 'Células metaplásicas imaturas são mais vulneráveis ao HPV; por isso a coleta do exame inclui essa região.' },
    { img: 'img/hpv-genoma.jpg', p: 'Quais regiões do genoma estão mostradas e o que fazem?', a: '**Genes precoces E1 a E7** (replicação, regulação e transformação), **tardios L1 e L2** (capsídeo) e **região reguladora (URR/LCR)**. Cerca de 8 kb.', pq: 'L1 é a proteína usada na vacina; E6 e E7 são as oncoproteínas.' },
    { img: 'img/hpv-nomenclatura.jpg', p: 'Localize NIC 1, NIC 2 e 3 e as equivalências em Bethesda.', a: '**NIC 1 = LSIL** (baixo grau). **NIC 2 e 3 = HSIL** (alto grau). Acima, carcinoma in situ e invasor.', pq: 'Pela terminologia LAST: baixo grau e alto grau; NIC 2 é heterogêneo.' }
  ];

  C.fala = [];
  C.ancoras = [
    'O HPV é um vírus de DNA que infecta epitélio: a maioria das infecções é transitória e some sozinha.',
    'Risco de câncer = persistência de tipo oncogênico (16 e 18) por anos, com tabagismo e imunossupressão.',
    'E6 derruba a p53 e E7 derruba o pRb: sem apoptose e sem freio, a célula prolifera e se transforma.',
    'Verrugas (6 e 11) são benignas; trata-se a lesão, e a recorrência é comum.',
    'Rastreio com DNA-HPV a partir dos 25 anos: negativo repete em 5 anos; 16/18 vai à colposcopia.',
    'A vacina (VLPs de L1) previne, mas não trata e não substitui rastreio nem preservativo: 9 a 14 anos, dose única.'
  ];
})();
