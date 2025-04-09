document.addEventListener('DOMContentLoaded', function () {
    // Carregar o arquivo JSON
    fetch('./json/regioes.json')
        .then(response => response.json())
        .then(data => {
            // Obter todos os botões das zonas e o botão "Mostrar Tudo"
            const zonas = document.querySelectorAll('.zona');
            const mostrarTudoBtn = document.querySelector('.mostrar-tudo');
            const detalhesCidades = document.getElementById('detalhes-cidades');
            const zonaSelecionada = document.getElementById('zona-selecionada');
            const mapaContainer = document.getElementById('mapa-container');
            const mapaTitulo = document.querySelector('#mapa-geral h2');  // Seletor do título do mapa

            // Exibir o mapa e detalhes da zona "Mostrar Tudo" por padrão
            exibirDetalhesZona(data, 'Geral');
            exibirMapa('Geral');
            zonaSelecionada.textContent = 'Mapa Geral';
            mapaTitulo.textContent = 'Mapa Geral';  // Define o título do mapa para o mapa geral

            // Função para exibir os detalhes da zona e cidades
            function exibirDetalhesZona(data, zona) {
                detalhesCidades.innerHTML = '';  // Limpar a seção de detalhes antes de adicionar novos dados

                let cidades;
                if (zona === 'Geral') {
                    // Exibe todas as cidades
                    cidades = { ...data['Zona Sul'], ...data['Zona Norte Superior'], ...data['Zona Central'], ...data['Zona Oeste'], ...data['Zona Norte'] };
                } else {
                    cidades = data[zona];
                }

                if (cidades) {
                    Object.keys(cidades).forEach(cidade => {
                        const cidadeInfo = cidades[cidade];
                        const cidadeElement = document.createElement('div');
                        cidadeElement.innerHTML = `
                            <h3>${cidade}</h3>
                            <p><strong>Habitantes:</strong> ${cidadeInfo.habitantes} habitantes</p>
                            <p><strong>Capacidade do Reservatório:</strong> ${cidadeInfo.capacidadeReservatorio} litros</p>
                        `;
                        detalhesCidades.appendChild(cidadeElement);
                    });
                } else {
                    detalhesCidades.innerHTML = `<p>Zona não encontrada.</p>`;
                }
            }

            // Função para exibir o mapa da zona selecionada
            function exibirMapa(zona) {
                let mapaSrc = '';
                if (zona === 'Geral') {
                    mapaSrc = './assents/img/mapa_total.jpg'; // Mapa geral
                    mapaTitulo.textContent = 'Mapa Geral'; // Muda o título para "Mapa Geral"
                } else {
                    switch (zona) {
                        case 'Zona Sul':
                            mapaSrc = './assents/img/zona_sul.jpg';
                            mapaTitulo.textContent = `Mapa Região Sul`; // Muda o título para a zona
                            break;
                        case 'Zona Norte Superior':
                            mapaSrc = './assents/img/zona_norte_superior.jpg';
                            mapaTitulo.textContent = `Mapa Zona Norte Superior`;
                            break;
                        case 'Zona Central':
                            mapaSrc = './assents/img/zona_central.jpg';
                            mapaTitulo.textContent = `Mapa Zona Central`;
                            break;
                        case 'Zona Oeste':
                            mapaSrc = './assents/img/zona_oeste.jpg';
                            mapaTitulo.textContent = `Mapa Zona Oeste`;
                            break;
                        case 'Zona Norte':
                            mapaSrc = './assents/img/zona_norte.jpg';
                            mapaTitulo.textContent = `Mapa Zona Norte`;
                            break;
                        default:
                            mapaSrc = ''; // Mapa padrão vazio
                            mapaTitulo.textContent = 'Mapa não encontrado';
                    }
                }
                if (mapaSrc) {
                    mapaContainer.innerHTML = `<img src="${mapaSrc}" alt="Mapa da ${zona}">`;
                } else {
                    mapaContainer.innerHTML = `<p>Mapa não encontrado.</p>`;
                }
            }

            // Evento para as zonas
            zonas.forEach(button => {
                button.addEventListener('click', function () {
                    const zona = button.getAttribute('data-zona');
                    zonaSelecionada.textContent = `Detalhes da ${zona}`;
                    exibirDetalhesZona(data, zona);
                    exibirMapa(zona);
                });
            });

            // Evento para o botão "Mostrar Tudo"
            mostrarTudoBtn.addEventListener('click', function () {
                zonaSelecionada.textContent = 'Mapa Geral';
                exibirDetalhesZona(data, 'Geral');
                exibirMapa('Geral');
            });
        })
        .catch(error => console.log('Erro ao carregar o arquivo JSON:', error));
});
