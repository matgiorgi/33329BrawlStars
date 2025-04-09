// Dados dos Brawlers (pode ser substituído por uma API real)
const brawlersData = [
  {
      id: 1,
      name: "Shelly",
      rarity: "Comum",
      type: "Dano",
      description: "Shelly atira uma rajada de balas que causam mais dano a curta distância.",
      image: "images/brawlers/shelly.jpg"
  },
  {
      id: 2,
      name: "Colt",
      rarity: "Comum",
      type: "Dano",
      description: "Colt dispara seis tiros rápidos em linha reta, perfeito para acertar alvos à distância.",
      image: "images/brawlers/colt.png"
  },
  // Adicione mais brawlers...
];

// Dados dos Modos de Jogo
const gameModes = [
  {
      id: 1,
      name: "Gem Grab",
      description: "Colete gemas e mantenha o controle para vencer. O primeiro time a coletar 10 gemas e mantê-las ganha!",
      image: "images/modes/gem-grab.jpg"
  },
  {
      id: 2,
      name: "Brawl Ball",
      description: "Marque dois gols antes do time adversário e ganhe a partida!",
      image: "images/modes/brawl-ball.jpg"
  },
  // Adicione mais modos...
];

// Função para carregar Brawlers
function loadBrawlers() {
  const container = document.getElementById('brawlers-container');
  
  brawlersData.forEach(brawler => {
      const rarityClass = brawler.rarity.toLowerCase().replace(' ', '-');
      
      const brawlerCard = document.createElement('div');
      brawlerCard.className = 'brawler-card';
      brawlerCard.innerHTML = `
          <img src="${brawler.image}" alt="${brawler.name}">
          <div class="brawler-info">
              <h3>${brawler.name}</h3>
              <p>${brawler.description}</p>
              <div class="brawler-meta">
                  <span class="brawler-rarity ${rarityClass}">${brawler.rarity}</span>
                  <span>${brawler.type}</span>
              </div>
          </div>
      `;
      
      container.appendChild(brawlerCard);
  });
}

// Função para carregar Modos de Jogo
function loadGameModes() {
  const container = document.querySelector('.modes-carousel');
  
  gameModes.forEach(mode => {
      const modeCard = document.createElement('div');
      modeCard.className = 'mode-card';
      modeCard.innerHTML = `
          <img src="${mode.image}" alt="${mode.name}">
          <div class="mode-info">
              <h3>${mode.name}</h3>
              <p>${mode.description}</p>
          </div>
      `;
      
      container.appendChild(modeCard);
  });
}

// Menu Mobile
document.querySelector('.mobile-menu').addEventListener('click', function() {
  document.querySelector('.navbar').classList.toggle('active');
});

// Carregar conteúdo quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
  loadBrawlers();
  loadGameModes();
  
  // Adicione animações de scroll suave
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });
});

// Efeito de rolagem no cabeçalho
window.addEventListener('scroll', function() {
  const header = document.querySelector('.header');
  if (window.scrollY > 50) {
      header.style.background = 'rgba(44, 62, 80, 0.9)';
      header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
  } else {
      header.style.background = '#2c3e50';
      header.style.boxShadow = 'none';
  }
});

// Função para inicializar os brawlers manuais
function initManualBrawlers() {
  // Adiciona efeito de hover dinâmico
  const brawlerCards = document.querySelectorAll('.brawler-card');
  
  brawlerCards.forEach(card => {
      card.addEventListener('mouseenter', function() {
          this.style.transform = 'translateY(-10px)';
          this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
      });
      
      card.addEventListener('mouseleave', function() {
          this.style.transform = 'translateY(0)';
          this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
      });
  });
  
  // Ajuste específico para a imagem do Colt
  const coltImage = document.querySelector('.colt-image');
  if (coltImage) {
      coltImage.addEventListener('load', function() {
          // Verifica as dimensões da imagem e ajusta se necessário
          if (this.naturalWidth / this.naturalHeight > 1.5) {
              this.style.objectPosition = 'center 30%';
          }
      });
  }
}

// Chama a função quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
  initManualBrawlers();
});

// Função para inicializar os modos de jogo
function initGameModes() {
  const modeCards = document.querySelectorAll('.mode-card');
  
  modeCards.forEach(card => {
      // Efeito hover
      card.addEventListener('mouseenter', function() {
          const img = this.querySelector('.mode-image');
          img.style.transform = 'scale(1.05)';
      });
      
      card.addEventListener('mouseleave', function() {
          const img = this.querySelector('.mode-image');
          img.style.transform = 'scale(1)';
      });
      
      // Ajuste específico para Brawl Ball
      if (card.querySelector('.brawl-ball-image')) {
          const brawlBallImg = card.querySelector('.brawl-ball-image');
          brawlBallImg.addEventListener('load', function() {
              if (this.naturalWidth / this.naturalHeight > 1.8) {
                  this.style.objectPosition = 'center 40%';
              }
          });
      }
  });
}

// Atualize o event listener DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
  initManualBrawlers();
  initGameModes();
});

// Função para inicializar os mapas
function initMaps() {
  const mapCards = document.querySelectorAll('.map-card');
  
  mapCards.forEach(card => {
      // Efeito hover na imagem
      const mapImage = card.querySelector('.map-image');
      
      card.addEventListener('mouseenter', function() {
          mapImage.style.transform = 'scale(1.1)';
      });
      
      card.addEventListener('mouseleave', function() {
          mapImage.style.transform = 'scale(1)';
      });
      
      // Ajuste específico para Campo de Futebol
      if (card.classList.contains('football-field-card')) {
          const footballFieldImg = card.querySelector('.football-field-image');
          
          footballFieldImg.addEventListener('load', function() {
              if (this.naturalWidth / this.naturalHeight > 1.8) {
                  this.style.objectPosition = 'center 35%';
              }
          });
      }
  });
}

// Atualize o event listener DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
  initManualBrawlers();
  initGameModes();
  initMaps();
});