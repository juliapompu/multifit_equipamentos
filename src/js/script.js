// ── DATA ──
  const products = [
    {
      id: 1,
      name: 'Anilheiro de 04 pinos com 02 suporte para barra MF1112',
      category: 'MUSCULAÇÃO · LINHA PRO',
      img: 'src/assets/anilheiro_MF1112.png',
      shortDesc: 'Anilheiro de 04 pinos com 02 suporte para barra',
      fullDesc: 'Ideal para pequenos ambientes, estrutura em aço redorçado, pintura eletrostàtica à pó, processo de solda MIG',
      specs: [
      
      ],
      chars: ['Anilheiro de 04 pinos com 02 suporte para barra', 'Ocupa espaço reduzido', 'Comporta anilhas de 1,0 kg a 10,0 kg', 'Capacidade de Carga 100,0 kg'],
      mats: [
      ]
    },
    {
      id: 2,
      name: 'Suporte Horizontal apra barras MF1115',
      category: 'MUSCULAÇÃO · ELITE SERIES',
      img: 'src/assets/suporte_ho_barras_MF1115.png',
      shortDesc: 'Suporte Horizontal para barras',
      fullDesc: '',
      specs: [
        { label: 'Comporta barras de:', val: '0,40 m ' },
        { label: 'Comporta barras de:', val: '1,20 m '  },
        { label: 'Comporta barras de:', val: '1,50 m ' },
        { label: 'Comporta barras de:', val: '1,80 m ' },
        { label: 'Comporta barras de:', val: 'W' },
      ],
      chars: ['Anilheiro de 04 pinos com 02 suporte para barra', 'Ocupa espaço reduzido', 'Comporta anilhas de 1,0 kg a 10,0 kg', 'Capacidade de Carga 100,0 kg'],
      mats: [
       ]
    },
    {
      id: 3,
      name: 'Pulley sentado para ser utilizado com anilhas MF1142',
      category: 'CARDIO · PREMIUM',
      img: 'src/assets/pulley_sentado_anilhas_MF1142.png',
      shortDesc: ' Pulley sentado para ser utilizado com anilhas',
      fullDesc: 'Acompanha 01 barra grande e 01 barra pequena, é um equipamento versátil que possibilita diversos exercícios para Costas,Bíceps,Trícps e Abdominais',
      specs: [
      ],
      chars: ['Ideal para pequenos ambientes', 'Estrtura em aço 5050 reforçado', 'Pintura eletrostática à pó', 'Processo de solda MIG'],
      mats: [
     ]
    },
    {
      id: 4,
      name: 'Banco de supino reto MF1161',
      category: 'MUSCULAÇÃO · LINHA PRO',
      img: 'src/assets/supinoreto_MF1161.png',
      shortDesc: 'Banco de supino reto, inclinado e declinado.',
      fullDesc: 'Múltipla Regulagem de inclinação, múltipla regulagem dos apoios de barra, agachamento livre e possibilita a execução de exercícios para ombros, pode também sewr utilizado com barra de 1,80 m',
      specs: [
      ],
      chars: ['Ideal para pequenos ambientes', 'Estrtura em aço 5050 reforçado', 'Pintura eletrostática à pó', 'Processo de solda MIG'],
      mats: [
      ]
    },
    {
      id: 5,
      name: 'Suporte de Dumbbells MF1114',
      category: 'CARDIO · SPINNING',
      img: 'src/assets/suporte_dumbbells_MF1114.png',
      shortDesc: 'Suporte de Dumbbells',
      fullDesc: 'Capacidadde de 10 pares entre 1,0 kg e 10,0 kg, desmontável, fácil transporte',
      specs: [
      ],
      chars: ['Ideal para pequenos ambientes', 'Estrtura em aço 5050 reforçado', 'Pintura eletrostática à pó', 'Processo de solda MIG'],
      mats: [
      ]
    },
    {
      id: 6,
      name: 'Suporte Vertical para Halter MF1119',
      category: 'MUSCULAÇÃO · ELITE SERIES',
      img: 'src/assets/suporte_ve_halter_MF1119.png',
      shortDesc: 'Suporte Vertical para Halter',
      fullDesc: 'Para peso de 1,0 kg a 10,0 kg, capacidade de carga 110 kg',
      specs: [],
      chars: ['Ideal para pequenos ambientes', 'Estrtura em aço 5050 reforçado', 'Pintura eletrostática à pó', 'Processo de solda MIG'],
      mats: []
    },
    {
      id: 7,
      name: 'Suporte 3 em 1 MF1116',
      category: 'MUSCULAÇÃO · LINHA PRO',
      img: 'src/assets/suporte_3em1_MF1116.png',
      shortDesc: 'Suporte 3 em 1',
      fullDesc: 'O Puxador Costal MF-200 oferece polo de alta tração com stack de 80 kg, apoio para costas ajustável em altura e estrutura em tubo 80x60mm. Ideal para treinos de dorsais com máxima estabilidade.',
      specs: [
        { label: 'Possui:', val: '06 anilhas para anilhas de 1,0 à 15,0 kg' },
        { label: 'Possui:', val: 'Capacidade para 06 barras' },
        { label: 'Possui:', val: 'Suporte para jogo de halter de 1,0 kg à 10,00 kg' },
        { label: 'Possui:', val: 'Capacidade de carga de 180,0 kg' },
      ],
      chars: ['Ideal para pequenos ambientes', 'Estrtura em aço 5050 reforçado', 'Pintura eletrostática à pó', 'Processo de solda MIG'],
      mats: [
       ]
    },
    {
      id: 8,
      name: 'Espaldar de Alumínio MF1172',
      category: 'CARDIO · PREMIUM',
      img: 'src/assets/espaldar_MF1172.png',
      shortDesc: 'Espaldar de Alumínio',
      fullDesc: 'Ideal para alongamento e descompressão, Possui 04 pontos de fixação para melhor segurança, item essencial antes e depois de qualquer atividade física',
      specs: [
     ],
      chars: ['Ideal para pequenos ambientes', 'Estrtura em aço 5050 reforçado', 'Pintura eletrostática à pó', 'Processo de solda MIG'],
      mats: [
      ]
    },
    {
      id: 9,
      name: 'Banco reto fixo MF1122',
      category: 'MUSCULAÇÃO · LINHA PRO',
      img: 'src/assets/banco_retofixo_MF1122.png',
      shortDesc: 'Banco reto fixo',
      fullDesc: 'Para ser utulizado com Halter ou Barras na execução de exercícios livres, execelente custo-benefício',
      specs: [
  ],
      chars: ['Ideal para pequenos ambientes', 'Estrtura em aço 5050 reforçado', 'Pintura eletrostática à pó', 'Processo de solda MIG'],
      mats: []
    },
    {
      id: 10,
      name: 'Banco livre Regulável MF1132',
      category: 'MUSCULAÇÃO · LINHA PRO',
      img: 'src/assets/banco_livre_rm_MF1132.png',
      shortDesc: 'Banco livre regulável multifunções',
      fullDesc: 'Excelente para fazer exercícios livre, com dumbbell ou barra, pode ser acoplado ao MF1184 e aumentar a gama de exercícios',
      specs: [
    ],
      chars: ['Ideal para pequenos ambientes', 'Estrtura em aço 5050 reforçado', 'Pintura eletrostática à pó', 'Processo de solda MIG'],
      mats: [
]
    },
  ];
 
  // Banner slides
  const bannerSlides = [
    { title: 'LEG PRESS 45°', items: ['Plataforma extra-larga de 800mm', 'Trilhos retificados em aço carbono', 'Trava de segurança dupla', 'Ideal para academias profissionais'], image: 'src/assets/anilheiro_MF1112.png' },
    { title: 'CROSSOVER DUPLO ELITE SERIES', items: ['Duas colunas independentes de 90 kg', 'Polias ajustáveis em 20 posições', 'Cabos com 900 kg de tração', 'Barra de pull-up integrada'], image: 'src/assets/suporte_ho_barras_MF1115.png' },
    { title: 'SUPORTE HORIZONTAL DE BARRAS MF1115', items: ['Suporte horizontal para barras', 'Estrutura em aço reforçado', 'Pintura eletrostática à pó', 'Design moderno e robusto'], image: 'src/assets/equipamento_biceps_MF1152.png' },
  ];
  let bannerIdx = 2;
 
  function renderBannerDots() {
    const dots = document.getElementById('banner-dots');
    dots.innerHTML = bannerSlides.map((_, i) =>
      `<span class="${i === bannerIdx ? 'active' : ''}" onclick="setBanner(${i})"></span>`
    ).join('');
  }
 
  function setBanner(i) {
    bannerIdx = i;
    const s = bannerSlides[i];
    document.getElementById('banner-title').textContent = s.title;
    document.getElementById('banner-list').innerHTML = s.items.map(it => `<li>${it}</li>`).join('');
    // atualizar imagem do banner
    const bannerImg = document.getElementById('banner-image');
    if (bannerImg && s.image) bannerImg.src = s.image;
    renderBannerDots();
  }
 
  function bannerNext() { setBanner((bannerIdx + 1) % bannerSlides.length); }
  function bannerPrev() { setBanner((bannerIdx - 1 + bannerSlides.length) % bannerSlides.length); }
 
  // Auto-advance banner
  setInterval(bannerNext, 4000);
 

  // ── PRODUCT CARD HTML ──
  function cardHTML(p) {
    return `
      <div class="prod-card" onclick="showDetail(${p.id})">
        <div class="prod-card-img">${p.img ? `<img src="${p.img}" alt="${p.name}">` : `<div class="emoji">${p.emoji || ''}</div>`}</div>
        <div class="prod-card-body">
          <h4>${p.name}</h4>
          <p>${p.shortDesc}</p>
        </div>
        <div class="prod-card-footer">
          <span>Por:</span>
          <button class="btn-ver" onclick="event.stopPropagation(); showDetail(${p.id})">VER MAIS</button>
        </div>
      </div>
    `;
  }

  // ── CAROUSEL ──
  function renderCarousel(list) {
    const track = document.getElementById('carousel-track');
    if (!track) return;
    track.innerHTML = list.map(cardHTML).join('');
  }

  // ── SEARCH ──
  function filterSearch() {
    const q = document.getElementById('search-input').value.toLowerCase();
    const filtered = q ? products.filter(p =>
      p.name.toLowerCase().includes(q) || p.shortDesc.toLowerCase().includes(q)
    ) : products;
    renderCarousel(filtered);
  }

  function carouselNext() {
    const wrap = document.querySelector('.carousel-track-wrap');
    if (!wrap) return;
    wrap.scrollBy({ left: wrap.offsetWidth / 3 + 7, behavior: 'smooth' });
  }

  function carouselPrev() {
    const wrap = document.querySelector('.carousel-track-wrap');
    if (!wrap) return;
    wrap.scrollBy({ left: -(wrap.offsetWidth / 3 + 7), behavior: 'smooth' });
  }

 // ── DETAIL ──
function showDetail(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  document.getElementById('detail-breadcrumb').textContent = p.name;
  
  // renderizar imagem
  const emojiEl = document.getElementById('detail-emoji');
  if (p.img) {
    emojiEl.innerHTML = `<img src="${p.img}" alt="${p.name}" />`;
  } else {
    emojiEl.textContent = p.emoji || '';
  }
  
  document.getElementById('detail-category').textContent = p.category;
  document.getElementById('detail-title').textContent = p.name;
  document.getElementById('detail-desc').textContent = p.fullDesc;

  document.getElementById('detail-specs').innerHTML = p.specs.map(s => `
    <div class="spec-card">
      <div class="spec-label">${s.label}</div>
      <div class="spec-val">${s.val}</div>
    </div>
  `).join('');

  document.getElementById('detail-chars').innerHTML = p.chars.map(c => `<li>${c}</li>`).join('');

  const matsEl = document.getElementById('detail-mats');
  if (matsEl) {
    matsEl.innerHTML = p.mats.map(m => `
      <div class="mat-row">
        <span class="mat-key">${m.key}</span>
        <span class="mat-val">${m.val}</span>
      </div>
    `).join('');
  }

  showPage('detail');
}
 
  // ── PAGE ROUTING ──
  function showPage(name) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('page-' + name).classList.add('active');
    document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
    const map = { home: 'nav-home', catalog: 'nav-catalog', detail: 'nav-catalog' };
    if (map[name]) document.getElementById(map[name])?.classList.add('active');
    window.scrollTo(0, 0);
    return false;
  }
 
  // ── CATALOG GRID ──
  function renderCatalog(list) {
    const grid = document.getElementById('catalog-grid');
    grid.innerHTML = list.map(p => `
      <div class="prod-card" onclick="showDetail(${p.id})">
        <div class="prod-card-img">${p.img ? `<img src="${p.img}" alt="${p.name}">` : `<div class="emoji">${p.emoji || ''}</div>`}</div>
        <div class="prod-card-body">
          <h4>${p.name}</h4>
          <p>${p.shortDesc}</p>
        </div>
        <div class="prod-card-footer">
          <span>Por:</span>
          <button class="btn-ver" onclick="event.stopPropagation(); showDetail(${p.id})">VER MAIS</button>
        </div>
      </div>
    `).join('');
  }
 
  // ── INIT ──
  renderBannerDots();
  setBanner(bannerIdx);
  renderCarousel(products);
  renderCatalog(products);