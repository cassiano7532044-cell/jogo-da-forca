(function(){
  const WORDS = [
      ["TRATOR","Máquina usada para preparar e trabalhar a terra"],
      ["ARADO","Implemento usado para afofar o solo"],
      ["GRADE","Implemento usado para preparar e nivelar a terra"],
      ["PLANTADEIRA","Implemento usada para plantar sementes em linhas"],
      ["COLHEITADEIRA","Máquina usada para colher  plantações"],
      ["ROÇADEIRA","Máquina usada para cortar mato"],
      ["ENSILADEIRA","Máquina usada para cortar plantas e produzir silagem"],
      ["CARRO DE BOI","Veículo rústico puxado por bois"],
      ["CARROÇA","Veículo usado para transportar cargas na zona rural"],
      ["ENXADA","Ferramenta usada para capinar e mexer na terra"],
      ["FOICE","Ferramenta usada para roçar mato e capim"],
      ["PÁ","Ferramenta usada para cavar e movimentar terra"],
      ["RASTELO","Ferramenta usada para juntar folhas e limpar o terreno"],
      ["ENXADÃO","Ferramenta usada para cavar e abrir valetas"],
      ["PICARETA","Ferramenta usada para quebrar terra dura e pedras"],
      ["MARRETA","Ferramenta pesada usada quando o martelo n resolve"],
      ["MACHADO","Ferramenta usada para cortar madeira"],
      ["INSEMINAÇÃO ARTIFICIAL","Modo de reprodução não convêncional"],
      ["LAÇO","Usado pelo peão para manejar o gado"],
      ["CURRAL","Local onde o gado é reunido e manejado"],
      ["BRETE","Estrutura estreita usada para conter o gado"],
      ["TRONCO","Estrutura usada para prender o animal durante o manejo"],
      ["EMBARCADOR","Estrutura usada para colocar animais em caminhões"],
      ["MANGUEIRA","Área cercada usada para manejo dos animais"],
      ["PASTO","Área onde o gado se alimenta de capim"],
      ["PIQUETE","Pequena área cercada destinada ao gado"],
      ["COCHO","Recipiente onde os animais recebem alimento"],
      ["BEBEDOURO","Local onde os animais bebem água"],
      ["SAL MINERAL","Suplemento usado na alimentação do gado"],
      ["RAÇÃO","Alimento fornecido aos animais"],
      ["SILAGEM","Alimento produzido a partir de plantas fermentadas"],
      ["FENO","Capim seco usado na alimentação dos animais"],
      ["CAPIM","Principal alimento de muitos animais de criação"],
      ["PAIOL","Construção usada para guardar milho e outros produtos"],
      ["SILO","Estrutura usada para armazenar grãos ou silagem"],
      ["GALPÃO","Construção grande usada para guardar máquinas e materiais"],
      ["BARRACÃO","Construção rústica usada para guardar equipamentos"],
      ["BAIA","Local coberto onde ficam animais"],
      ["ORDENHADEIRA","Equipamento usado para retirar leite das vacas"],
      ["LEITEIRA","Recipiente usado para transportar ou armazenar leite"],
      ["TANQUE DE LEITE","Equipamento usado para resfriar e armazenar leite"],
      ["NOVILHA","Fêmea jovem do gado"],
      ["GARROTE","Macho bovino jovem"],
      ["POTRO","Cavalo jovem"],
      ["BURRO","Animal forte usado para transporte e trabalho"],
      ["JUMENTO","Animal rústico usado como animal de carga"],
      ["CARNEIRO","Macho adulto da ovelha"],
      ["PASTAGEM","Área formada por plantas usadas na alimentação do gado"],
      ["FORRAGEIRA","Planta usada para alimentar os animais"],
      ["SEMENTE","Material usado para iniciar uma plantação"],
      ["MUDAS","Plantas jovens preparadas para serem cultivadas"],
      ["LAVOURA","Área destinada ao cultivo agrícola"],
      ["PLANTAÇÃO","Área onde são cultivadas plantas"],
      ["SOJA","Grão cultivado para a produção de oleo"],
      ["MANDIOCA","Raiz cultivada para alimentação e produção de farinha"],
      ["ADUBO","Material usado para melhorar a fertilidade do solo"],
      ["CALCÁRIO","Produto usado para corrigir a acidez do solo"],
      ["FERTILIZANTE","Produto usado para fornecer nutrientes às plantas"],
      ["IRRIGAÇÃO","Técnica usada para fornecer água às plantações"],
      ["AGROTÓXICO","Produto usado para controlar pragas e doenças agrícolas"],
      ["INSETICIDA","Produto usado para combater insetos nas plantações"],
      ["HERBICIDA","Produto usado para controlar plantas daninhas"],
      ["CERCA","Estrutura usada para dividir áreas e conter animais"],
      ["ARAME FARPADO","Material muito usado na construção de cercas rurais"],
      ["PORTEIRA","Portão de entrada de uma propriedade rural"],
      ["CERCA ELÉTRICA","Cerca que utiliza choque para conter animais"],
      ["ESTRADA DE TERRA","Caminho rural sem pavimentação"],
      ["AÇUDE","Reservatório de água comum em propriedades rurais"],
      ["REPRESA","Área construída para armazenar água"],
      ["NASCENTE","Lugar onde a água começa a brotar do solo"],
      ["SOMBRITE","Estrutura que ameniza o sol"],
      ["TRONQUEIRA","Estrutura simples usada para fechar ou dividir áreas"],
      ["MARRUCO","Boi erado"],
      ["PECUARISTA","Pessoa que trabalha com criação de animais"],
      ["COMITIVA","Grupo que acompanha o trabalho de condução do gado"],
      ["TROPA","Grupo de animais usados em trabalhos rurais"],
      ["RODEIO","Evento tradicional ligado à cultura pecuária"],
      ["CAVALGADA","Passeio ou atividade feita a cavalo"],
      ["LEILÃO","Evento onde animais são vendidos para criadores"],
      ["MARCA","Identificação feita nos animais da propriedade"],
      ["BRINCOS","Peças usadas para identificar bovinos"],
      ["FERRO DE MARCAR","Ferramenta usada para marcar o gado"],
      ["MOURÃO","Poste resistente usado para sustentar cercas"],
      ["ESTACA","Pedaço de madeira ou metal usado para sustentar cercas"],
      ["CABRESTO","Peça usada para conduzir cavalos e outros animais"],
      ["ESTRIBO","Peça onde o cavaleiro apoia os pés"],
      ["CINCHA","Faixa usada para prender a sela ao cavalo"],
      ["MANTA","Peça colocada entre o cavalo e a sela"],
      ["RÉDEA","Correia usada para conduzir o cavalo"],
      ["ESPORA","Peça usada pelo cavaleiro para auxiliar na condução"],
      ["NITROGENIO","Produto usado para conservar material genêtico"],
      ["BOIADEIRO","Caminhão preparado para transportar gado"],
      ["PULVERIZADOR","Máquina usada para aplicar produtos na lavoura"],
      ["SUBSOLADOR","Implemento usado para romper camadas compactadas do solo"],
      ["MOTOSSERRA","Máquina usada para cortar árvores e madeira"],
      ["GERADOR","Máquina usada para produzir energia elétrica na propriedade"],
      ["CAIXA DÁGUA","Reservatório usado para armazenar água"],
      ["RODA DÁGUA","Equipamento tradicional movido pela força da água"],
      ["MOINHO DE VENTO","Estrutura que utiliza o vento para movimentar mecanismos"],
      ["MATA BURRO","Estrutura metálica instalada nas estradas das propriedades"]
  ];
  const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const MAX_LIVES = 6;
  function shuffle(arr){
    const a = arr.slice();
    for(let i = a.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  const deck = shuffle(WORDS);
  let index = 0;
  let score = 0;
  let word = "";
  let hint = "";
  let guessed = new Set();
  let wrongCount = 0;
  let over = false;
  const els = {
    rig: document.getElementById("rig"),
    word: document.getElementById("word"),
    hint: document.getElementById("hint"),
    keyboard: document.getElementById("keyboard"),
    wordNum: document.getElementById("wordNum"),
    wordTotal: document.getElementById("wordTotal"),
    scoreCount: document.getElementById("scoreCount"),
    overlay: document.getElementById("overlay"),
    modal: document.getElementById("modal"),
    modalTitle: document.getElementById("modalTitle"),
    modalText: document.getElementById("modalText"),
    nextBtn: document.getElementById("nextBtn"),
  };
  els.wordTotal.textContent = deck.length;
  function buildRig(){
    els.rig.innerHTML = `
      <svg viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg">;
        <line x1="20" y1="150" x2="100" y2="150" stroke="#A78BFA" stroke-width="6" stroke-linecap="round"/>
        <line x1="40" y1="150" x2="40" y2="18" stroke="#A78BFA" stroke-width="6" stroke-linecap="round"/>
        <line x1="40" y1="18" x2="112" y2="18" stroke="#A78BFA" stroke-width="6" stroke-linecap="round"/>
        <line x1="40" y1="38" x2="62" y2="18" stroke="#A78BFA" stroke-width="6" stroke-linecap="round"/>
        <line x1="112" y1="18" x2="112" y2="34" stroke="#A78BFA" stroke-width="5" stroke-linecap="round"/>
        <circle id="part0" class="part" cx="112" cy="47" r="13" fill="none" stroke="#FFD23F" stroke-width="5"/>
        <line id="part1" class="part" x1="112" y1="60" x2="112" y2="96" stroke="#FF4D8D" stroke-width="5" stroke-linecap="round"/>
        <line id="part2" class="part" x1="112" y1="70" x2="97" y2="86" stroke="#FF4D8D" stroke-width="5" stroke-linecap="round"/>
        <line id="part3" class="part" x1="112" y1="70" x2="127" y2="86" stroke="#FF4D8D" stroke-width="5" stroke-linecap="round"/>
        <line id="part4" class="part" x1="112" y1="96" x2="99" y2="118" stroke="#06D6A0" stroke-width="5" stroke-linecap="round"/>
        <line id="part5" class="part" x1="112" y1="96" x2="125" y2="118" stroke="#06D6A0" stroke-width="5" stroke-linecap="round"/>
      </svg>`;
  }
  function normalize(str){
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }
  function startWord(){
    if(index >= deck.length){
      showEndOfDeck();
      return;
    }
    const pick = deck[index];
    word = pick[0];
    hint = pick[1];
    guessed = new Set();
    wrongCount = 0;
    over = false;
    els.overlay.classList.remove("show");
    els.wordNum.textContent = index + 1;
    els.scoreCount.textContent = score;
    buildRig();
    els.hint.textContent = "Dica: " + hint;
    renderWord();
    buildKeyboard();
  }
  function showEndOfDeck(){
    els.modal.className = "modal win";
    els.modalTitle.textContent = "Você completou todas as palavras! 🎉";
    els.modalText.innerHTML = "Placar final: <b>" + score + "</b> de <b>" + deck.length + "</b>";
    els.nextBtn.textContent = "Jogar novamente";
    els.overlay.classList.add("show");
    els.nextBtn.focus();
    launchConfetti();
    els.nextBtn.onclick = () => { index = 0; score = 0; startWord(); };
  }
  function renderWord(){
    els.word.innerHTML = "";
    word.split("").forEach(ch => {
      if(ch === " "){
        const s = document.createElement("div");
        s.className = "letter-slot space";
        els.word.appendChild(s);
        return;
      }
      const slot = document.createElement("div");
      slot.className = "letter-slot";
      const normCh = normalize(ch);
      if(guessed.has(normCh)){
        slot.textContent = ch;
        slot.classList.add("reveal");
      }
      els.word.appendChild(slot);
    });
  }
  function buildKeyboard(){
    els.keyboard.innerHTML = "";
    const rows = [
      ALPHABET.slice(0,9),
      ALPHABET.slice(9,18),
      ALPHABET.slice(18,26).concat(["Ç"])
    ];
    rows.forEach(rowLetters => {
      const row = document.createElement("div");
      row.className = "kb-row";
      rowLetters.forEach(letter => {
        const btn = document.createElement("button");
        btn.className = "key";
        btn.textContent = letter;
        btn.addEventListener("click", () => handleGuess(letter, btn));
        row.appendChild(btn);
      });
      els.keyboard.appendChild(row);
    });
  }
  function handleGuess(letter, btnEl){
    if(over || guessed.has(letter)) return;
    guessed.add(letter);
    btnEl.disabled = true;
    const normWord = normalize(word);
    if(normWord.includes(letter)){
      btnEl.classList.add("correct");
      renderWord();
      checkWin();
    } else {
      btnEl.classList.add("wrong");
      const part = document.getElementById("part" + wrongCount);
      if(part) part.classList.add("show");
      wrongCount++;
      if(wrongCount >= MAX_LIVES){
        loseWord();
      }
    }
  }
  function checkWin(){
    const normWord = normalize(word);
    const allGuessed = normWord.split("").every(ch => ch === " " || guessed.has(ch));
    if(allGuessed){
      winWord();
    }
  }
  function winWord(){
    over = true;
    score++;
    els.modal.className = "modal win";
    els.modalTitle.textContent = "Você acertou! 🎉";
    els.modalText.innerHTML = "A palavra era <b>" + word + "</b>";
    els.nextBtn.textContent = index + 1 >= deck.length ? "Ver placar final" : "Próxima palavra";
    els.overlay.classList.add("show");
    els.nextBtn.focus();
    disableKeyboard();
    launchConfetti();
    els.nextBtn.onclick = () => { index++; startWord(); };
  }
  function loseWord(){
    over = true;
    els.modal.className = "modal lose";
    els.modalTitle.textContent = "Ah, não! 💥";
    els.modalText.innerHTML = "A palavra era <b>" + word + "</b>";
    els.nextBtn.textContent = index + 1 >= deck.length ? "Ver placar final" : "Próxima palavra";
    els.overlay.classList.add("show");
    els.nextBtn.focus();
    disableKeyboard();
    els.nextBtn.onclick = () => { index++; startWord(); };
  }
  function disableKeyboard(){
    document.querySelectorAll(".key").forEach(k => k.disabled = true);
  }
  function launchConfetti(){
    const colors = ["#FF4D8D","#FFD23F","#06D6A0","#FF8C42","#A78BFA"];
    for(let i=0;i<40;i++){
      const piece = document.createElement("div");
      piece.className = "confetti";
      piece.style.left = Math.random()*100 + "vw";
      piece.style.background = colors[Math.floor(Math.random()*colors.length)];
      piece.style.animationDuration = (2 + Math.random()*1.5) + "s";
      piece.style.animationDelay = (Math.random()*0.4) + "s";
      document.body.appendChild(piece);
      setTimeout(() => piece.remove(), 4000);
    }
  }
  function findKey(letter){
    return Array.from(document.querySelectorAll(".key")).find(b => b.textContent === letter);
  }
  document.addEventListener("keydown", (e) => {
    // Enter ou espaço avançam para a próxima palavra quando o modal está aberto
    if((e.key === "Enter" || e.key === " ") && els.overlay.classList.contains("show")){
      e.preventDefault();
      els.nextBtn.click();
      return;
    }
    const letter = e.key.toUpperCase();
    if(ALPHABET.includes(letter) || letter === "Ç"){
      e.preventDefault();
      const btn = findKey(letter);
      if(btn && !btn.disabled){
        btn.classList.add("key-pressed");
        handleGuess(letter, btn);
      }
    }
  });
  document.addEventListener("keyup", (e) => {
    const letter = e.key.toUpperCase();
    if(ALPHABET.includes(letter) || letter === "Ç"){
      const btn = findKey(letter);
      if(btn) btn.classList.remove("key-pressed");
    }
  });
  startWord();
})();