/* APG · caso Disfunção Erétil. Imagens em apg/img/ere-*. */
window.APG_DATA = window.APG_DATA || { casos: [] };
(function () {
  var f = function (n, cap) { return { src: 'img/ere-' + n + '.jpg', cap: cap }; };
  var c = function (t, d) { var figs = [].slice.call(arguments, 2); return { t: t, d: d, fig: figs.length ? figs : null }; };
  var k = function (t, kw) { return { t: t, kw: kw.split('|') }; };
  var q = function (a, b) { return { q: a, a: b }; };
  var mod = function (id, n, ic, t, obj, ler, p, dica, pts, modelo, ini, niveis) { return { id: id, n: n, ic: ic, t: t, obj: obj, ler: ler, explique: { p: p, dica: dica, pts: pts, modelo: modelo }, porques: { ini: ini, niveis: niveis } }; };
  var tu = function (a, b, s, r) { return { q: a, a: b, seg: [q(s, r)] }; };
  var ps = function (p, a, pq) { return { p: p, a: a, pq: pq }; };
  var vi = function (n, p, a, pq) { return { img: 'img/ere-' + n + '.jpg', p: p, a: a, pq: pq }; };

  window.APG_DATA.casos.push({
    id: 'ereto', ic: '🫀', titulo: 'Disfunção Erétil', cor: '#7A1E2C',
    sub: 'Tutoria · 4 blocos: ereção, diagnóstico, tratamento e sexualidade do idoso',
    modulos: [
      mod('e1', 1, '🧭', 'Anatomia reprodutora masculina', 'Bloco 1', [
        c('Testículos', '**Túbulos seminíferos:** espermatogênese, com células de **Sertoli**. **Células de Leydig** (interstício): testosterona sob estímulo do **LH**.'),
        c('Vias e glândulas', 'Epidídimo (maturação) → deferente → ducto ejaculatório → uretra. **Vesículas seminais** dão a maior parte do sêmen; **próstata**, o PSA; **bulbouretrais**, o muco pré-ejaculatório.'),
        c('Pênis por inteiro', 'Raiz, corpo e glande. Dois **corpos cavernosos** (rigidez) e um **corpo esponjoso**, que envolve a uretra e forma a glande.', f('penis-frontal', 'Corte frontal: uretra, corpos cavernosos e esponjoso, raiz e glande.')),
        c('Corte transversal', 'A **túnica albugínea** envolve os corpos cavernosos. No centro de cada um passa a **artéria profunda (cavernosa)**; no dorso, veias, artérias e nervo dorsais.', f('penis-corte', 'Corte transversal do pênis com vasos, nervo e túnica albugínea.')),
        c('Irrigação, drenagem e nervos', 'Ilíaca interna → **pudenda interna** → artérias do pênis. Drenagem pelo **plexo subtunical** e veia dorsal profunda. **Parassimpático S2–S4** ergue; **simpático T11–L2** devolve a flacidez; **pudendo** dá sensibilidade.')
      ], 'Descreva os órgãos reprodutores e a estrutura do pênis.', 'Testículo → vias → glândulas → pênis.', [
        k('Leydig produz testosterona; túbulos produzem espermatozoides', 'leydig|tubulo|testosterona'), k('Vias: epidídimo e deferente; glândulas acessórias', 'epididimo|deferente|seminal'), k('Dois corpos cavernosos e um esponjoso', 'cavernos|esponjos'), k('Túnica albugínea', 'albuginea'), k('Artérias cavernosas, drenagem venosa e nervos', 'arteria|venos|parassimp|pudend')
      ], 'Os testículos têm túbulos seminíferos, que produzem espermatozoides, e células de Leydig, que produzem testosterona. Os espermatozoides passam por epidídimo e deferente, e vesículas, próstata e bulbouretrais completam o sêmen. O pênis tem dois corpos cavernosos e um esponjoso, envolvidos pela túnica albugínea, irrigados por ramos da pudenda interna.',
      'A túnica albugínea é essencial para a ereção.', [q('Por quê?', 'É uma capa **resistente** que limita a expansão.'), q('O que isso faz com as veias?', 'Elas são **comprimidas** contra ela.'), q('E se ela estiver doente?', 'Peyronie: curvatura, dor e possível **vazamento venoso**.')]),
      mod('e2', 2, '⚡', 'Fisiologia da ereção', 'Bloco 1', [
        c('Quem comanda', 'Estímulos **psicogênicos** (cérebro) e **reflexogênicos** (toque) convergem na medula; o parassimpático é ativado e o simpático inibido, dilatando as arteríolas.', f('controle', 'Controle neural da ereção: vias centrais, medulares e táteis.')),
        c('A via NO-GMPc', 'NO (nNOS e eNOS) → **guanilato ciclase** → **GMPc** → PKG → **cai o cálcio** → músculo liso relaxa. A **PDE5** destrói o GMPc.', f('via-no', 'L-arginina → NO → GMPc → relaxamento; a PDE5 é o alvo dos remédios.')),
        c('Do vaso à rigidez', 'Sinusoides enchem e **comprimem o plexo subtunical**: entra sangue, quase não sai.', f('mecanismo', 'Pênis flácido × ereto e a cascata molecular.')),
        c('As seis fases', '**Flácida, latente (enchimento), tumescente, ereção completa, ereção rígida e detumescência.**', f('fases', 'Descrição das seis fases da ereção.')),
        c('Pressão e fluxo', 'O fluxo arterial é máximo no **começo**; depois a pressão sobe e ele diminui. Na fase **rígida** o isquiocavernoso contrai e a pressão passa da sistólica.', f('grafico', 'Fluxo na pudenda interna e pressão intracavernosa em cada fase.'))
      ], 'Narre a ereção do estímulo à detumescência.', 'Nervo → NO → GMPc → cálcio → sangue → veias → PDE5.', [
        k('Parassimpático e estímulos psicogênico e reflexo', 'parassimp|psicog|reflex'), k('NO ativa guanilato ciclase e gera GMPc', 'oxido|gmp|guanil'), k('Cálcio cai e músculo relaxa', 'calcio|relax'), k('Mecanismo veno-oclusivo', 'veia|venos|compri|oclus'), k('PDE5 e simpático encerram', 'pde|fosfodiesterase|simpatic')
      ], 'O estímulo ativa o parassimpático, que libera óxido nítrico. Ele ativa a guanilato ciclase, gera GMPc, reduz o cálcio e relaxa o músculo liso. O sangue enche os sinusoides, que comprimem as veias e mantêm a ereção. A PDE5 degrada o GMPc e o simpático devolve a flacidez.',
      'A flacidez é um estado ativo.', [q('Por quê?', 'O **simpático** mantém o músculo liso contraído.'), q('Com qual mediador e receptor?', '**Noradrenalina em α1**, que aumenta o cálcio.'), q('O que a ansiedade faz?', 'Aumenta a descarga simpática e **impede o relaxamento**.')]),
      mod('e3', 3, '🧩', 'DE: conceito, causas e fisiopatologia', 'Bloco 2', [
        c('Definição e epidemiologia', 'Incapacidade **persistente ou recorrente** de obter ou manter ereção suficiente. No estudo de Massachusetts, ~**52%** dos homens de 40 a 70 anos tinham algum grau. Diferencie de **libido baixa, ejaculação e hipogonadismo**.'),
        c('Classificação', '**Orgânica** (vascular, neurogênica, endócrina, anatômica), **psicogênica** e **mista** (muito comum).'),
        c('Fisiopatologia', '**Endotélio doente → menos NO**; aterosclerose → menos fluxo; neuropatia → sem gatilho; fibrose → vazamento venoso; hipogonadismo e prolactina alta; ansiedade → simpático.'),
        c('Fatores de risco', '**Modificáveis:** tabaco, sedentarismo, obesidade, diabetes, HAS, dislipidemia, álcool, estresse. **Não modificáveis:** idade, genética, sequelas.'),
        c('Alerta cardiovascular', 'As artérias penianas são **mais finas** que as coronárias: a DE pode anteceder um evento em **2 a 5 anos**.'),
        c('Medicamentos', 'Antidepressivos (ISRS), tiazídicos, espironolactona, digoxina, cetoconazol, cimetidina, metoclopramida, antiandrogênicos, antipsicóticos e opioides. **Não suspender sem o prescritor.**', f('medicamentos', 'Medicamentos e fase do ciclo sexual afetada.'))
      ], 'Classifique a DE e explique por que ela acontece.', 'Definição → três tipos → mecanismos → riscos.', [
        k('Persistente ou recorrente', 'persist|recorrent'), k('Orgânica, psicogênica e mista', 'organic|psicog|mista'), k('Disfunção endotelial reduz NO', 'endotel|oxido'), k('Marcador de risco cardiovascular', 'cardio|coron|aterosc'), k('Diabetes, tabaco e medicamentos', 'diabet|taba|medicament')
      ], 'DE é a incapacidade persistente de obter ou manter ereção. Pode ser orgânica, psicogênica ou mista. A principal via é a disfunção endotelial, com menos óxido nítrico, somada a neuropatia, alterações hormonais e ansiedade. Diabetes, tabagismo e remédios contribuem, e a DE alerta para risco cardiovascular.',
      'A DE pode anunciar um infarto.', [q('Por quê?', 'Porque o **endotélio doente** é o mesmo.'), q('Por que o pênis sofre antes?', 'Artérias de **menor calibre**.'), q('O que muda na conduta?', '**Avaliar o risco cardiovascular** de quem se queixa.')]),
      mod('e4', 4, '🔎', 'Diagnóstico', 'Bloco 2', [
        c('Anamnese sexual', 'Início, duração, frequência, **ereções matinais**, masturbação, libido, ejaculação, orgasmo e contexto. **Súbita, situacional e com ereção matinal** sugere psicogênica.'),
        c('Exame físico', 'Pressão, IMC e cintura, pulsos, caracteres sexuais, pênis (placas) e testículos.'),
        c('Laboratório', '**Glicemia/HbA1c, lipídios, testosterona total matinal** (repetir se baixa); prolactina e TSH quando indicados.'),
        c('IIEF-5', 'Cinco perguntas, 5 a 25 pontos: **22–25 sem DE; 17–21 leve; 12–16 leve a moderada; 8–11 moderada; 5–7 grave.**', f('iief', 'Versão em espanhol do questionário IIEF-5.'))
      ], 'Como você investiga um homem com queixa de DE?', 'Conversa → exame → laboratório → escore.', [
        k('Anamnese sexual detalhada', 'anamnese|inicio|matinal|libido'), k('Psicogênica × orgânica', 'psicog|subit|situac'), k('Exame físico', 'exame|pressao|testiculo|pulso'), k('Glicemia, lipídios e testosterona matinal', 'glicemia|lipid|testosterona'), k('IIEF-5', 'iief|escore|questionario')
      ], 'Começo pela anamnese sexual e clínica, com início, ereções matinais, libido e remédios. Examino pressão, medidas, pulsos, caracteres sexuais, pênis e testículos. Peço glicemia, lipídios e testosterona matinal, com prolactina e TSH se indicado, e uso o IIEF-5 para a gravidade.',
      'A testosterona é colhida pela manhã.', [q('Por quê?', 'Há **ritmo circadiano**, com pico matinal.'), q('Um resultado baixo basta?', 'Não: **repetir** e correlacionar com sintomas.'), q('O que pedir se confirmar?', '**LH, FSH e prolactina** para localizar a causa.')]),
      mod('e5', 5, '💊', 'Tratamento', 'Bloco 3', [
        c('Inibidores da PDE5', '**Preservam o GMPc**. Primeira linha. **Precisam de estímulo sexual**, pois não liberam NO.'),
        c('Comparando', 'Sildenafila e vardenafila: ~4 h. Tadalafila: até **36 h**. Avanafila: início rápido.', f('pde5-tabela', 'Doses, instruções, duração e efeitos dos inibidores de PDE5.')),
        c('Segurança', 'Efeitos: cefaleia, rubor, congestão, dispepsia; visão azulada (sildenafila); mialgia (tadalafila). **Contraindicados com nitratos e riociguate**; cautela com alfabloqueadores.'),
        c('Alprostadil', 'PGE1 → **AMPc**. Injeção intracavernosa ou via **intrauretral**; não depende de nervo.', f('intrauretral', 'Aplicação intrauretral.')),
        c('Papaverina, fentolamina e testosterona', 'Papaverina inibe PDEs sem seletividade; fentolamina bloqueia α. Risco de **priapismo e fibrose**. Testosterona **só com hipogonadismo confirmado**.'),
        c('Não farmacológico', 'Estilo de vida, controle das doenças, terapia sexual, **vácuo** e prótese.', f('vacuo', 'Dispositivo de ereção a vácuo.'))
      ], 'Explique o tratamento por linhas e os mecanismos.', 'PDE5 → contraindicação → injeções → testosterona → dispositivos.', [
        k('PDE5 preserva GMPc e exige estímulo', 'gmp|pde|estimulo'), k('Nitrato contraindicado', 'nitrato'), k('Alprostadil aumenta AMPc', 'alprostadil|amp|prostagland'), k('Testosterona só no hipogonadismo', 'testosterona|hipogonad'), k('Estilo de vida, terapia, vácuo e prótese', 'vida|terapia|vacuo|protese')
      ], 'A primeira linha são os inibidores de PDE5, que preservam o GMPc e precisam de estímulo; não podem ser usados com nitratos. Depois vêm alprostadil, que aumenta AMPc, e associações injetáveis, com risco de priapismo. Testosterona só no hipogonadismo. Somam-se estilo de vida, terapia, vácuo e prótese.',
      'Inibidor de PDE5 não pode com nitrato.', [q('Por quê?', 'Os dois elevam o **GMPc**.'), q('De que formas diferentes?', 'O nitrato **produz** mais; o inibidor **impede a quebra**.'), q('Resultado?', '**Hipotensão grave**, com risco de infarto e morte.')]),
      mod('e6', 6, '🤝', 'Sexualidade do idoso e preconceito', 'Bloco 4', [
        c('Sexualidade', 'Dimensão da saúde por toda a vida: afeto, intimidade, prazer e identidade, **além da penetração**.'),
        c('O que muda', 'Ereção mais lenta, mais estímulo, ejaculação menor e **período refratário maior**. **DE não é inevitável.**'),
        c('Idadismo', '**Assexualização, infantilização e ridicularização** levam a vergonha, silêncio, isolamento e subdiagnóstico.'),
        c('Masculinidade', 'Ligar virilidade à ereção favorece **automedicação** e atraso na consulta.'),
        c('Papel do profissional', 'Privacidade, escuta sem julgamento, autonomia, **perguntar ativamente** e orientar sobre **IST**. Modelo **PLISSIT**.')
      ], 'Discuta a sexualidade do idoso e o preconceito.', 'Conceito → mudanças → idadismo → conduta.', [
        k('Sexualidade é mais que penetração', 'afeto|intimidade|penetrac|vida'), k('Mudanças esperadas × doença', 'refratario|lent|inevitavel|doenca'), k('Idadismo e estigmas', 'idadismo|preconceito|assexual|infantil'), k('Consequências', 'vergonha|isolamento|subdiagn|silenc'), k('Acolher, autonomia e IST', 'acolh|escuta|autonomia|ist')
      ], 'A sexualidade acompanha toda a vida. Envelhecer muda o ritmo, mas a DE não é inevitável. O idadismo assexualiza e infantiliza o idoso, gerando vergonha e subdiagnóstico. Cabe ao profissional acolher, perguntar, respeitar a autonomia, investigar e prevenir IST.',
      'Muitos idosos não falam sobre DE.', [q('Por quê?', '**Vergonha** e a crença de que é normal da idade.'), q('De onde vem essa crença?', 'Do **idadismo**, inclusive internalizado.'), q('Como romper?', 'O profissional **pergunta ativamente**, com privacidade e sem julgar.')])
    ],
    tutor: [
      tu('Explique o mecanismo da ereção.', 'NO → GMPc → menos cálcio → relaxamento → enchimento e compressão venosa.', 'Quem desliga?', 'PDE5 e simpático.'),
      tu('Diferencie DE de redução da libido.', 'DE é resposta erétil; libido é desejo.', 'Que hormônio pensar se a libido cai?', 'Testosterona (e prolactina).'),
      tu('O que sugere causa psicogênica?', 'Início súbito, situacional, ereções matinais preservadas.', 'Isso exclui causa orgânica?', 'Não; pode ser mista.'),
      tu('Por que o diabetes causa DE?', 'Dano endotelial, neuropatia e testosterona baixa.', 'E a resposta ao remédio?', 'Costuma ser menor.'),
      tu('Que exames pedir?', 'Glicemia/HbA1c, lipídios e testosterona matinal.', 'Quando prolactina?', 'Libido ou testosterona baixas.'),
      tu('Como agem os inibidores de PDE5?', 'Impedem a degradação do GMPc.', 'Funcionam sem excitação?', 'Não.'),
      tu('Quais as contraindicações principais?', 'Nitratos e riociguate.', 'Intervalo para nitrato após tadalafila?', 'Em geral 48 horas.'),
      tu('O que é priapismo?', 'Ereção por mais de 4 horas.', 'Por que é urgência?', 'Hipóxia leva a fibrose e DE permanente.'),
      tu('Testosterona trata toda DE?', 'Não, só com hipogonadismo.', 'E a fertilidade?', 'A testosterona externa a reduz.'),
      tu('O que é idadismo?', 'Preconceito baseado na idade.', 'Exemplo na sexualidade?', 'Supor que o idoso não tem vida sexual.')
    ],
    relampago: [
      { t: 'Via NO-GMPc', pts: ['Origem do NO', 'Guanilato ciclase', 'Cálcio', 'PDE5'] },
      { t: 'Fases da ereção', pts: ['Flácida e latente', 'Tumescente e completa', 'Rígida', 'Detumescência'] },
      { t: 'Etiologia da DE', pts: ['Orgânica', 'Psicogênica', 'Mista', 'Medicamentos'] },
      { t: 'DE e coração', pts: ['Endotélio', 'Calibre arterial', 'Avaliar risco'] },
      { t: 'Inibidores de PDE5', pts: ['Mecanismo', 'Diferenças', 'Efeitos', 'Nitratos'] },
      { t: 'Idoso e preconceito', pts: ['Mudanças normais', 'Idadismo', 'Papel do profissional'] }
    ],
    casos: [
      { t: 'Diabético com DE gradual', hist: '55 anos, diabético e hipertenso, fumante. Ereções cada vez piores há 1 ano; sem ereção matinal.', passos: [ps('Que tipo provável?', 'Orgânica: vascular e neurogênica.', 'Gradual, sem ereção matinal, com fatores de risco.'), ps('O que avaliar?', 'Risco cardiovascular, HbA1c, lipídios, testosterona e remédios.', 'A DE é alerta vascular.'), ps('Tratamento?', 'Cessar tabaco, controlar doenças e inibidor de PDE5 se não houver contraindicação.', 'Trata causa e sintoma.')] },
      { t: 'Início súbito aos 26', hist: '26 anos, saudável. Falhou uma vez após término e desde então tem medo; ereções matinais normais.', passos: [ps('Hipótese?', 'Psicogênica, ansiedade de desempenho.', 'Súbita e com ereções preservadas.'), ps('Fisiopatologia?', 'Simpático alto contrai o músculo cavernoso.', 'Noradrenalina impede o relaxamento.'), ps('Conduta?', 'Acolher, terapia sexual e, se útil, apoio farmacológico.', 'Quebrar o ciclo de medo.')] },
      { t: 'Idoso em uso de nitrato', hist: '71 anos, angina em uso de mononitrato, pede sildenafila com vergonha, a filha fala por ele.', passos: [ps('Como começar?', 'Conversar a sós, sem julgamento.', 'Respeito à autonomia.'), ps('Pode prescrever sildenafila?', 'Não.', 'Com nitrato há hipotensão grave.'), ps('Alternativas?', 'Avaliar o coração e discutir vácuo ou alprostadil com especialista.', 'Segurança sem abandonar a queixa.')] }
    ],
    visual: [
      vi('penis-corte', 'Identifique as estruturas e diga qual dá rigidez.', 'Dois corpos cavernosos (rigidez), esponjoso com uretra, albugínea e vasos.', 'A albugínea permite a oclusão venosa.'),
      vi('mecanismo', 'Compare flácido e ereto.', 'No ereto, sinusoides cheios comprimem o plexo venoso.', 'Entra mais sangue e sai menos.'),
      vi('via-no', 'Narre a via e aponte o alvo do remédio.', 'L-arginina → NO → GMPc → menos cálcio → ereção; alvo é a PDE5.', 'Inibi-la mantém o GMPc.'),
      vi('grafico', 'Em que momento o fluxo é maior e quando a pressão é máxima?', 'Fluxo maior no enchimento; pressão máxima na fase rígida.', 'O isquiocavernoso contrai.'),
      vi('controle', 'Quais as duas origens do estímulo?', 'Central (psicogênica) e tátil (reflexa).', 'Convergem na medula.'),
      vi('vacuo', 'Que dispositivo é e como funciona?', 'Vácuo: pressão negativa puxa sangue e um anel o retém.', 'Anel por no máximo 30 minutos.'),
      vi('intrauretral', 'Que via de administração é?', 'Intrauretral (alprostadil).', 'Absorção local, menos invasiva que injeção.')
    ],
    ancoras: ['Ereção é um fenômeno **neurovascular**.', '**NO → GMPc → menos cálcio → relaxa → enche.**', 'DE costuma ser **mista** e alerta para o coração.', 'Investigar: história, exame, glicose, lipídios, testosterona.', 'PDE5 precisa de estímulo e **nunca com nitrato**.', 'DE não é inevitável na idade; acolher sem preconceito.']
  });
})();
