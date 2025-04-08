const personagens = [
    {
      nome: 'Shelly',
      imagem: 'https://cdn.brawlify.com/brawlers/shelly/model.webp',
      vida: 3600,
      ataque: 300,
    },
    {
      nome: 'Colt',
      imagem: 'https://cdn.brawlify.com/brawlers/colt/model.webp',
      vida: 2800,
      ataque: 320,
    },
    {
      nome: 'Nita',
      imagem: 'https://cdn.brawlify.com/brawlers/nita/model.webp',
      vida: 3800,
      ataque: 240,
    },
    {
      nome: 'Leon',
      imagem: 'https://cdn.brawlify.com/brawlers/leon/model.webp',
      vida: 3200,
      ataque: 440,
    }
  ];
  
  const container = document.getElementById('cards-container');
  
  function criarCard(p) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${p.imagem}" alt="${p.nome}" />
      <h3>${p.nome}</h3>
      <div class="stats">
        <span>Vida: ${p.vida}</span>
        <span>Ataque: ${p.ataque}</span>
      </div>
    `;
    container.appendChild(card);
  }
  
  function carregarPersonagens() {
    personagens.forEach(criarCard);
  }
  
  document.addEventListener('DOMContentLoaded', carregarPersonagens);
  