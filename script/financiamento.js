// Dados simulados por região
const dados = {
    regioes: [
      {
        nome: "Zona Norte Superior (Priscila)",
        rotas: [
          { rota: "Poço -> Tracupá (C1)", tempoM: 7, frete: 52.50 },
          { rota: "Tracupá -> Distrito de Jorrinho (C1)", tempoM: 7, frete: 52.50 },
          { rota: "Distrito de Jorrinho -> Poço (C1)", tempoM: 14, frete: 105.00 },
          { rota: "Poço -> Distrito de Jorrinho (C1)", tempoM: 14, frete: 105.00 },
          { rota: "Distrito de Jorrinho -> Arapuã (C1)", tempoM: 15, frete: 112.50 },
          { rota: "Arapuã -> Rio do Peixe (C1)", tempoM: 3, frete: 22.50 },
          { rota: "Rio do Peixe -> Poço (C1)", tempoM: 18, frete: 135.00 },
          { rota: "Poço -> Lagoa da Onça (C1)", tempoM: 20.5, frete: 153.75 },
          { rota: "Lagoa da Onça -> Lagoa do Boi (C1)", tempoM: 2.5, frete: 18.75 },
          { rota: "Lagoa do Boi -> Poço (C1)", tempoM: 23, frete: 172.50 },
          { rota: "Poço -> Barreira (C1)", tempoM: 30, frete: 225.00 },
          { rota: "Barreira -> Poço (C1) (5200)", tempoM: 30, frete: 225.00 }
        ]        
      },
      {
        nome: "Zona Central (Elder)",
        rotas: [
          { rota: "Poço -> Bomba (C2)", tempoM: 18, frete: 135.00 },
          { rota: "Bomba -> Rua da Palha (C2)", tempoM: 4, frete: 30.00 },
          { rota: "Rua da Palha -> Poço (C2)", tempoM: 22, frete: 165.00 },
          { rota: "Poço -> Rua da Palha (C2)", tempoM: 22, frete: 165.00 },
          { rota: "Rua da Palha -> Ribeira I (C2)", tempoM: 15, frete: 112.50 },
          { rota: "Ribeira I -> Ribeira II (C2)", tempoM: 3, frete: 22.50 },
          { rota: "Ribeira II -> Palmeira (C2)", tempoM: 14, frete: 105.00 },
          { rota: "Palmeira -> Poço (C2)", tempoM: 28, frete: 210.00 },
          { rota: "Poço -> Palmeira (C2)", tempoM: 28, frete: 210.00 },
          { rota: "Palmeira -> Bela Vista (C2)", tempoM: 4, frete: 30.00 }
        ]        
      },
      {
        nome: "Zona Oeste (Everton)",
        rotas: [
          { rota: "Poço -> Campo de Eloí (C3)", tempoM: 44, frete: 330.00 },
          { rota: "Campo de Eloí -> Alto Grande (C3)", tempoM: 33, frete: 247.50 },
          { rota: "Alto Grande -> Pau Darco (C3)", tempoM: 24, frete: 180.00 },
          { rota: "Pau Darco -> Poço (C3)", tempoM: 35, frete: 262.50 },
          { rota: "Poço -> Pau Darco (C3)", tempoM: 35, frete: 262.50 },
          { rota: "Pau Darco -> Lagoa da Laje (C3)", tempoM: 3, frete: 22.50 },
          { rota: "Lagoa Nova Laje -> Poço (C3)", tempoM: 38, frete: 285.00 }
        ]        
      },
      {
        nome: "Zona Norte (Lucas)",
        rotas: [
          { rota: "Poço -> Areal (C4)", tempoM: 58, frete: 435.00 },
          { rota: "Areal -> Poço (C4)", tempoM: 58, frete: 435.00 },
          { rota: "Poço -> Areal (C4)", tempoM: 58, frete: 435.00 },
          { rota: "Areal -> Campo Grande (C4)", tempoM: 4, frete: 30.00 },
          { rota: "Campo Grande -> Areal (C4)", tempoM: 4, frete: 30.00 },
          { rota: "Areal -> Aracatu (C4)", tempoM: 11, frete: 82.50 },
          { rota: "Aracatu -> Miranda (C4)", tempoM: 5, frete: 37.50 },
          { rota: "Miranda -> Poço (C4)", tempoM: 52, frete: 390.00 },
          { rota: "Bela Vista -> Miranda (C2)", tempoM: 36, frete: 270.00 },
          { rota: "Miranda -> Poço (C2)", tempoM: 52, frete: 390.00 }
        ]               
      },
      {
        nome: "Zona Sul (Marcelo)",
        rotas: [
          { rota: "Poço -> Nazaré (C1)", tempoM: 21, frete: 157.50 },
          { rota: "Nazaré -> Lagoa Rural (C1)", tempoM: 3, frete: 22.50 },
          { rota: "Lagoa Rural -> Poço (C1) (por dentro)", tempoM: 24, frete: 180.00 },
          { rota: "Poço -> Poço do Capim (C5) (por fora)", tempoM: 30, frete: 225.00 },
          { rota: "Poço do Capim -> Poço Grande (C5)", tempoM: 4, frete: 30.00 },
          { rota: "Poço Grande -> Resina (C5)", tempoM: 12, frete: 90.00 },
          { rota: "Resina -> Poço (C5)", tempoM: 26, frete: 195.00 },
          { rota: "Poço -> Caldeirão (C5)", tempoM: 24, frete: 180.00 },
          { rota: "Caldeirão -> Poço (C5)", tempoM: 24, frete: 180.00 },
          { rota: "Poço -> Tinguí (C5)", tempoM: 28, frete: 210.00 },
          { rota: "Tinguí -> Lagoa Nova Lajedo (C5)", tempoM: 11, frete: 82.50 },
          { rota: "Lagoa Nova Lajedo -> Poço (C5)", tempoM: 31, frete: 232.50 },
          { rota: "Poço -> Resina (C5)", tempoM: 26, frete: 195.00 },
          { rota: "Resina -> Poço (C5)", tempoM: 26, frete: 195.00 },
          { rota: "Poço -> Resina (C5)", tempoM: 26, frete: 195.00 },
          { rota: "Resina -> Lagoa Nova Lajedo (C5)", tempoM: 9, frete: 67.50 },
          { rota: "Lagoa Nova Lajedo -> Poço (C5)", tempoM: 31, frete: 232.50 },
          { rota: "Poço -> Lagoa Nova Lajedo (C5)", tempoM: 31, frete: 232.50 },
          { rota: "Lagoa Nova Lajedo -> Lagoa Escura (C5)", tempoM: 27, frete: 202.50 },
          { rota: "Lagoa Escura -> Poço (C5) (Por fora) (1400)", tempoM: 52, frete: 390.00 }
        ]      
      }
    ]
  };
  
  // conventer horas em minutos
  function converterMinutosParaHoras(minutos) {
    const horas = Math.floor(minutos / 60);
    const mins = minutos % 60;
    return `${horas}h${mins}min`;
  }

  
  // Função para formatar valores em moeda brasileira
  function formatarValor(valor) {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }
  
  // Exibe detalhes da região e soma no final
  function mostrarDetalhesRegiao(regiao) {
    const container = document.getElementById("detalhesRegiao");
  
    if (!regiao || !regiao.rotas.length) {
      container.innerHTML = `<p>Nenhum dado disponível! Por favor, selecione uma região!</p>`;
      return;
    }
  
    let html = `<h3>${regiao.nome}</h3>`;
  
    let totalMinutos = 0;
    let totalFrete = 0;
    let frete_ultimo = 0;
    let minutos_ultimo = 0;

    // os temp
    let temp_frete = 0;
    let temp_m = 0;
  
    regiao.rotas.forEach(rota => {
  
      totalMinutos += rota.tempoM;
      totalFrete += rota.frete;

      // parte de último
      frete_ultimo = rota.frete;
      minutos_ultimo = rota.tempoM;

      // partes para tirar erros
      if (rota.rota == 'Lagoa Rural -> Poço (C1) (por dentro)') {
        temp_frete = rota.frete;
        temp_m = rota.tempoM;
      }
      if (rota.rota == 'Palmeira -> Bela Vista (C2)') {
        frete_ultimo = 0;
        minutos_ultimo = 0;
      }

      if (rota.rota == 'Miranda -> Poço (C4)') {
          temp_frete = rota.frete;
          temp_m = rota.tempoM;
      }


  
      html += `
        <div class="rota animar">
          <img src="/assents/img/estrada_animacao.jpg" alt="Ícone Rota", style="height: 80px; width: 500px;">
          <h4>${rota.rota}</h4>
          <p><strong>Tempo em minutos:</strong> ${rota.tempoM}</p>
          <p><strong>Valor do frete:</strong> ${formatarValor(rota.frete)}</p>
        </div>
      `;
    });
  
  
    container.innerHTML = html;
  
    // Atualiza o total da região
    document.querySelector(".total-regiao").style.display = 'block';
    document.querySelector(".total-regiao").innerHTML = `
      <h3>Total da Região</h3>
      <p>Total de minutos gasto: ${converterMinutosParaHoras((totalMinutos * 15) - (minutos_ultimo + temp_m))}</p>
      <p>Total do frete: ${formatarValor((totalFrete * 15) - (frete_ultimo + temp_frete))}</p>
    `;
  }
  
  // Adiciona evento no select
  function adicionarEventoSelect() {
    const select = document.getElementById("regiaoSelect");
    const regiao = document.getElementById("totalRegiao");
  
    select.addEventListener("change", (e) => {
      const index = e.target.value-1; // aqui é para garantir que as regiões serão seleciondas automaticamente!!
      if (index !== "") {
        const regiaoSelecionada = dados.regioes[index];
        mostrarDetalhesRegiao(regiaoSelecionada);
      } else {
        regiao.style.display = 'block';
        document.getElementById("detalhesRegiao").innerHTML = "<p>Selecione uma região para visualizar os dados.</p>";
        document.querySelector(".total-regiao").innerHTML = `
          <h3>Total da Região</h3>
          <p>R$ 0,00</p>
        `;
      }
    });
  }
  
  // Preenche o select com as regiões (caso precise)
function preencherSelectRegioes() {
  const select = document.getElementById("regiaoSelect");


  // Adiciona as regiões
  dados.regioes.forEach((regiao, index) => {
    const option = document.createElement("option");
    option.value = index+1;
    option.textContent = regiao.nome;
    select.appendChild(option);
  });
}
  
  
  // Inicializa tudo
  function inicializar() {
    preencherSelectRegioes();
    adicionarEventoSelect();

  }
  
  document.addEventListener("DOMContentLoaded", inicializar);
  