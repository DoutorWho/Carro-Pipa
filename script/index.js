window.onload = function () {
    const frases = [
        { texto: "💧 Cada gota conta: economize água!" },
        { texto: "🚿 Feche a torneira enquanto escova os dentes!" },
        { texto: "🌍 Água é vida. Preserve cada gota!" },
        { texto: "💦 Pequenas ações salvam grandes quantidades de água!" },
        { texto: "🔧 Conserte vazamentos. Não deixe a água escorrer à toa!" },
        { texto: "🌱 Regue plantas com consciência, de manhã ou à noite!" },
        { texto: "🚫 Não jogue água limpa fora — reutilize quando puder!" }
      ];
      
  
    let index = 0;
    const textEl = document.getElementById('motivation-text');
    const imgEl = document.getElementById('emoji-img');
  
    if (textEl) {
      textEl.innerHTML = frases[index].texto;
  
      setInterval(() => {
        index = (index + 1) % frases.length;
        textEl.innerHTML = frases[index].texto;
  
        if (imgEl) {
          textEl.appendChild(imgEl); // adiciona a imagem novamente ao texto
        }
      }, 5000);
    } else {
      console.error("Elemento 'motivation-text' não encontrado no DOM.");
    }
  
    // 💧 Adicionando chuva ao fundo
    const rainContainer = document.createElement('div');
    rainContainer.className = 'rain';
    document.body.appendChild(rainContainer);
  
    for (let i = 0; i < 100; i++) {
      const drop = document.createElement('div');
      drop.className = 'raindrop';
      drop.style.left = `${Math.random() * 100}vw`;
      drop.style.animationDuration = `${0.5 + Math.random() * 0.5}s`;
      drop.style.animationDelay = `${Math.random() * 5}s`;
      rainContainer.appendChild(drop);
    }
  };
  
  // Adiciona imagens flutuantes na tela
  function criarImagemFlutuante(src) {
    const img = document.createElement('img');
    img.src = src;
    img.className = 'imagem-flutuante'; 
    const margem = 50 // margem mínima em px

    img.style.left = `${margem + Math.random() * (window.innerWidth - 2 * margem)}px`;
    img.style.top = `${margem + Math.random() * (window.innerHeight - 2 * margem)}px`;
    document.body.appendChild(img);
  
    setTimeout(() => {
      img.remove();
    }, 4000); // Remove depois de 4 segundos
  }
  
  setInterval(() => {
    const imagens = [
      './assents/img/informacao1.png',
      './assents/img/informacao2.png',
      './assents/img/informacao3.png',
      './assents/img/informacao4.png'
    ];
  
    const item = imagens[Math.floor(Math.random() * imagens.length)];
  
    if (item.endsWith('.png') || item.endsWith('.jpg') || item.endsWith('.jpeg') || item.endsWith('.webp')) {
      criarImagemFlutuante(item);
    } else {
      const span = document.createElement('span');
      span.className = 'emoji-flutuante';
      span.innerText = item;
      span.style.left = `${Math.random() * 100}vw`;
      span.style.top = `${Math.random() * 100}vh`;
      document.body.appendChild(span);
  
      setTimeout(() => {
        span.remove();
      }, 4000);
    }
  }, 1000); // Aparece um a cada segundo

// Redireciona após 10 segundos
setTimeout(() => {
    window.location.href = 'paginainicial.html'; // <-- Link do destino
  }, 40000);

  
