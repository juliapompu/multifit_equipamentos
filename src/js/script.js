  // ── PRODUTOS ──
  // Produtos originais (exibidos na home)
  const products = [
     {
      id: 1,
      mf: 1112,
      name: 'Anilheiro de 04 pinos com 02 suporte para barra MF1112',
      category: 'MUSCULAÇÃO',
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
      mf: 1115,
      name: 'Suporte Horizontal para barras MF1115',
      category: 'MUSCULAÇÃO',
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
      mf: 1142,
      name: 'Pulley sentado para ser utilizado com anilhas MF1142',
      category: 'MUSCULAÇÃO',
      img: 'src/assets/pulley_sentado_anilhas_MF1142.png',
      shortDesc: ' Pulley sentado para ser utilizado com anilhas',
      fullDesc: 'Acompanha 01 barra grande e 01 barra pequena, é um equipamento versátil que possibilita diversos exercícios para Costas,Bíceps,Trícps e Abdominais',
      specs: [
      ],
      chars: ['Ideal para pequenos ambientes', 'Estrutura em aço 5050 reforçado', 'Pintura eletrostática à pó', 'Processo de solda MIG'],
      mats: [
     ]
    },
    {
      id: 4,
      mf: 1161,
      name: 'Banco de supino reto MF1161',
      category: 'MUSCULAÇÃO',
      img: 'src/assets/supinoreto_MF1161.png',
      shortDesc: 'Banco de supino reto, inclinado e declinado.',
      fullDesc: 'Múltipla Regulagem de inclinação, múltipla regulagem dos apoios de barra, agachamento livre e possibilita a execução de exercícios para ombros, pode também sewr utilizado com barra de 1,80 m',
      specs: [
      ],
      chars: ['Ideal para pequenos ambientes', 'Estrutura em aço 5050 reforçado', 'Pintura eletrostática à pó', 'Processo de solda MIG'],
      mats: [
      ]
    },
    {
      id: 5,
      mf: 1114,
      name: 'Suporte de Dumbbells MF1114',
      category: 'MUSCULAÇÃO',
      img: 'src/assets/suporte_dumbbells_MF1114.png',
      shortDesc: 'Suporte de Dumbbells',
      fullDesc: 'Capacidadde de 10 pares entre 1,0 kg e 10,0 kg, desmontável, fácil transporte',
      specs: [
      ],
      chars: ['Ideal para pequenos ambientes', 'Estrutura em aço 5050 reforçado', 'Pintura eletrostática à pó', 'Processo de solda MIG'],
      mats: [
      ]
    },
    {
      id: 6,
      mf: 1119,
      name: 'Suporte Vertical para Halter MF1119',
      category: 'MUSCULAÇÃO',
      img: 'src/assets/suporte_ve_halter_MF1119.png',
      shortDesc: 'Suporte Vertical para Halter',
      fullDesc: 'Para peso de 1,0 kg a 10,0 kg, capacidade de carga 110 kg',
      specs: [],
      chars: ['Ideal para pequenos ambientes', 'Estrutura em aço 5050 reforçado', 'Pintura eletrostática à pó', 'Processo de solda MIG'],
      mats: []
    },
    {
      id: 7,
      mf: 1116,
      name: 'Suporte 3 em 1 MF1116',
      category: 'MUSCULAÇÃO',
      img: 'src/assets/suporte_3em1_MF1116.png',
      shortDesc: 'Suporte 3 em 1',
      fullDesc: 'O Puxador Costal MF-200 oferece polo de alta tração com stack de 80 kg, apoio para costas ajustável em altura e estrutura em tubo 80x60mm. Ideal para treinos de dorsais com máxima estabilidade.',
      specs: [
        { label: 'Possui:', val: '06 anilhas para anilhas de 1,0 à 15,0 kg' },
        { label: 'Possui:', val: 'Capacidade para 06 barras' },
        { label: 'Possui:', val: 'Suporte para jogo de halter de 1,0 kg à 10,00 kg' },
        { label: 'Possui:', val: 'Capacidade de carga de 180,0 kg' },
      ],
      chars: ['Ideal para pequenos ambientes', 'Estrutura em aço 5050 reforçado', 'Pintura eletrostática à pó', 'Processo de solda MIG'],
      mats: [
       ]
    },
    {
      id: 8,
      mf: 1172,
      name: 'Espaldar de Alumínio MF1172',
      category: 'MUSCULAÇÃO',
      img: 'src/assets/espaldar_MF1172.png',
      shortDesc: 'Espaldar de Alumínio',
      fullDesc: 'Ideal para alongamento e descompressão, Possui 04 pontos de fixação para melhor segurança, item essencial antes e depois de qualquer atividade física',
      specs: [
     ],
      chars: ['Ideal para pequenos ambientes', 'Estrutura em aço 5050 reforçado', 'Pintura eletrostática à pó', 'Processo de solda MIG'],
      mats: [
      ]
    },
    {
      id: 9,
      mf: 1122,
      name: 'Banco reto fixo MF1122',
      category: 'MUSCULAÇÃO',
      img: 'src/assets/banco_retofixo_MF1122.png',
      shortDesc: 'Banco reto fixo',
      fullDesc: 'Para ser utulizado com Halter ou Barras na execução de exercícios livres, execelente custo-benefício',
      specs: [
  ],
      chars: ['Ideal para pequenos ambientes', 'Estrutura em aço 5050 reforçado', 'Pintura eletrostática à pó', 'Processo de solda MIG'],
      mats: []
    },
    {
      id: 10,
      mf: 1132,
      name: 'Banco livre Regulável MF1132',
      category: 'MUSCULAÇÃO',
      img: 'src/assets/banco_livre_rm_MF1132.png',
      shortDesc: 'Banco livre regulável multifunções',
      fullDesc: 'Excelente para fazer exercícios livre, com dumbbell ou barra, pode ser acoplado ao MF1184 e aumentar a gama de exercícios',
      specs: [
    ],
      chars: ['Ideal para pequenos ambientes', 'Estrutura em aço 5050 reforçado', 'Pintura eletrostática à pó', 'Processo de solda MIG'],
      mats: [
]
    },
  ];

  // Todos os produtos (para o catálogo)
  const allProducts = [
    ...products,
    {
      id: 11,
      mf: 1101,
      name: 'Banco de Supino Reto e Inclinado MF1101',
      category: 'MUSCULAÇÃO',
      img: 'src/assets/supino_MF1101.png',
      shortDesc: 'Banco de supino reto, inclinado e declinado',
      fullDesc: 'Regulagem múltipla de inclinação. Pode ser utilizado com barra de 1,50m. Dobrável e ideal para pequenos ambientes.',
      specs: [],
      chars: ['Regulagem múltipla de inclinação', 'Pode ser utilizado com barra de 1,50m', 'Dobrável', 'Ideal para pequenos ambientes'],
      mats: []
    },
    {
      id: 12,
      mf: 1102,
      name: 'Banco de Supino MF1102',
      category: 'MUSCULAÇÃO',
      img: 'src/assets/supino_MF1102.png',
      shortDesc: 'Banco de supino regulável',
      fullDesc: 'Banco de supino com múltiplas posições de inclinação',
      specs: [],
      chars: ['Ideal para pequenos ambientes', 'Estrutura em aço 5050 reforçado', 'Pintura eletrostática à pó', 'Processo de solda MIG'],
      mats: []
    },
    {
      id: 13,
      mf: 1103,
      name: 'Banco de Supino MF1103',
      category: 'MUSCULAÇÃO',
      img: 'src/assets/supino_MF1103.png',
      shortDesc: 'Banco de supino profissional',
      fullDesc: 'Banco de supino com estrutura reforçada',
      specs: [],
      chars: ['Ideal para pequenos ambientes', 'Estrutura em aço 5050 reforçado', 'Pintura eletrostática à pó', 'Processo de solda MIG'],
      mats: []
    },
    {
      id: 14,
      mf: 1104,
      name: 'Banco de Supino MF1104',
      category: 'MUSCULAÇÃO',
      img: 'src/assets/supino_MF1104.png',
      shortDesc: 'Banco de supino com apoio',
      fullDesc: 'Banco de supino com apoios laterais para maior estabilidade',
      specs: [],
      chars: ['Ideal para pequenos ambientes', 'Estrutura em aço 5050 reforçado', 'Pintura eletrostática à pó', 'Processo de solda MIG'],
      mats: []
    },
    {
      id: 15,
      mf: 1113,
      name: 'Anilheiro MF1113',
      category: 'MUSCULAÇÃO',
      img: 'src/assets/anilheiro_MF1113.png',
      shortDesc: 'Anilheiro com suporte para barra',
      fullDesc: 'Anilheiro de alta capacidade com suporte horizontal para barras',
      specs: [],
      chars: ['Ideal para pequenos ambientes', 'Estrutura em aço 5050 reforçado', 'Pintura eletrostática à pó', 'Processo de solda MIG'],
      mats: []
    },
    {
      id: 16,
      mf: 1118,
      name: 'Suporte Vertical para Halter MF1118',
      category: 'MUSCULAÇÃO',
      img: 'src/assets/suporte_ve_halter_MF1118.png',
      shortDesc: 'Suporte Vertical para Halter',
      fullDesc: 'Suporte vertical para halteres com capacidade de até 110 kg',
      specs: [],
      chars: ['Ideal para pequenos ambientes', 'Estrutura em aço 5050 reforçado', 'Pintura eletrostática à pó', 'Processo de solda MIG'],
      mats: []
    },
    {
      id: 17,
      mf: 1152,
      name: 'Equipamento Bíceps MF1152',
      category: 'MUSCULAÇÃO',
      img: 'src/assets/equipamento_biceps_MF1152.png',
      shortDesc: 'Equipamento especializado para bíceps',
      fullDesc: 'Máquina isoladora para exercícios de bíceps com movimento guiado',
      specs: [],
      chars: ['Ideal para pequenos ambientes', 'Estrutura em aço 5050 reforçado', 'Pintura eletrostática à pó', 'Processo de solda MIG'],
      mats: []
    },
    {
      id: 18,
      mf: 1162,
      name: 'Banco de Supino Reto MF1162',
      category: 'MUSCULAÇÃO',
      img: 'src/assets/supinoreto_MF1162.png',
      shortDesc: 'Banco de supino reto profissional',
      fullDesc: 'Banco de supino reto com estrutura em aço de alta qualidade',
      specs: [],
      chars: ['Ideal para pequenos ambientes', 'Estrutura em aço 5050 reforçado', 'Pintura eletrostática à pó', 'Processo de solda MIG'],
      mats: []
    },
    {
      id: 19,
      mf: 1184,
      name: 'Barra Superior com 4 Tipos de Pegada MF1184',
      category: 'MUSCULAÇÃO',
      img: 'src/assets/barra_superior4pegadas_MF1184.png',
      shortDesc: 'Barra superior com múltiplas pegadas',
      fullDesc: 'Agachamento livre com regulagem de altura da barra. Projetado para utilização com barras de 1,80 m. Paralelas com várias regulagens de altura.',
      specs: [
        { label: 'Altura:', val: 'Regulável' },
        { label: 'Pegadas:', val: '4 tipos diferentes' },
        { label: 'Capacidade:', val: 'Até 150 kg' },
      ],
      chars: ['Agachamento livre com regulagem de altura da barra', 'Projetado para utilização com barras de 1,80 m', 'Paralelas com várias regulagens de altura', 'Possui 6 pinos para suporte de anilhas'],
      mats: []
    },
  ];
 
  function getAssetPath(path) {
    const normalizedPath = path.replace(/^\//, '');
    if (window.location.pathname.includes('/src/pages/')) {
      return new URL(normalizedPath.replace(/^src\//, '../'), window.location.href).href;
    }
    return new URL(normalizedPath, window.location.href).href;
  }

  // ── BANNER ──
  const bannerSlides = [
    { title: 'Banco de Supino Reto e Inclinado MF1101', image: 'src/assets/supino_MF1101.png', items: ['Regulagem Múltipla de Inclinação','Pode ser utilizado com barra de 1,50m','Dobrável','Ideal para pequenos ambiente'] },
    { title: 'Barra superior com 1 tipos de pegada MF1184', image: 'src/assets/barra_superior4pegadas_MF1184.png', items: ['Agachamento livre com regulagem de altura da barra','Projetado para utilização com barras de 1,80 mt','Paralelas com várias regulagens de altura','Possui 6 pinos para suporte de anilhas', 'Perfeito para condomínios e/ou salas de ginástica'] },
    { title: 'SUPORTE HORIZONTAL DE BARRAS MF1115', image: 'src/assets/suporte_ho_barras_MF1115.png', items: ['Suporte horizontal para barras','Estrutura em aço reforçado','Pintura eletrostática à pó','Design moderno e robusto'] },
  ];
  let bannerIdx = 0;
 
  function renderBannerDots() {
    const dots = document.getElementById('banner-dots');
    if (!dots) return;
    dots.innerHTML = bannerSlides.map((_,i) =>
      `<span class="${i===bannerIdx?'active':''}" onclick="setBanner(${i})"></span>`).join('');
  }
  function setBanner(i) {
    bannerIdx = i;
    const s = bannerSlides[i];
    const title = document.getElementById('banner-title');
    const list = document.getElementById('banner-list');
    const bannerImage = document.getElementById('banner-image');
    if (title) title.textContent = s.title;
    if (list) list.innerHTML = s.items.map(it=>`<li>${it}</li>`).join('');
    if (bannerImage) {
      bannerImage.src = getAssetPath(s.image);
      bannerImage.alt = s.title;
    }
    renderBannerDots();
  }
  function bannerNext() { setBanner((bannerIdx+1) % bannerSlides.length); }
  function bannerPrev() { setBanner((bannerIdx-1+bannerSlides.length) % bannerSlides.length); }
  if (document.getElementById('banner-title') || document.getElementById('banner-list') || document.getElementById('banner-dots')) {
    setInterval(bannerNext, 7000);
  }
 
  let miniCarouselIdx = 0;

  function getMiniSlideCount() {
    return Math.ceil(products.slice(0, 6).length / 3);
  }

  function renderMiniCarousel() {
    const track = document.getElementById('mini-carousel-track');
    const dots = document.getElementById('mini-carousel-dots');
    if (!track || !dots) return;

    const miniProducts = products.slice(0, 6);
    const slides = [];
    for (let i = 0; i < miniProducts.length; i += 3) {
      slides.push(miniProducts.slice(i, i + 3));
    }

    track.innerHTML = slides.map(slide => `
      <div class="mini-carousel-slide">
        ${slide.map(p => `
          <div class="mini-card" onclick="showDetail(${p.id})">
            <div class="mini-card-img">
              <img src="${getAssetPath(p.img)}" alt="${p.name}">
            </div>
            <h4>${p.name}</h4>
            <p>${p.shortDesc}</p>
          </div>`).join('')}
      </div>`).join('');

    dots.innerHTML = slides.map((_, i) => `<span class="${i === miniCarouselIdx ? 'active' : ''}" onclick="setMiniCarousel(${i})"></span>`).join('');
    track.style.transform = `translateX(-${miniCarouselIdx * 100}%)`;
  }

  function setMiniCarousel(i) {
    miniCarouselIdx = i;
    const track = document.getElementById('mini-carousel-track');
    const dots = document.getElementById('mini-carousel-dots');
    if (!track || !dots) return;
    track.style.transform = `translateX(-${miniCarouselIdx * 100}%)`;
    dots.innerHTML = Array.from({ length: getMiniSlideCount() }, (_, index) => `<span class="${index === miniCarouselIdx ? 'active' : ''}" onclick="setMiniCarousel(${index})"></span>`).join('');
  }

  function miniCarouselNext() {
    const totalSlides = getMiniSlideCount();
    miniCarouselIdx = (miniCarouselIdx + 1) % totalSlides;
    renderMiniCarousel();
  }

  function miniCarouselPrev() {
    const totalSlides = getMiniSlideCount();
    miniCarouselIdx = (miniCarouselIdx - 1 + totalSlides) % totalSlides;
    renderMiniCarousel();
  }

  // ── HOME GRID ──
  function renderHomeGrid(list) {
    const container = document.getElementById('home-grid');
    if (!container) return;
    const sorted = list.sort((a, b) => a.mf - b.mf);
    container.innerHTML = sorted.map(p => `
      <div class="home-card" onclick="showDetail(${p.id})">
        <div class="home-card-img">
          <img class="card-image" src="${getAssetPath(p.img)}" alt="${p.name}">
          <span class="home-card-tag">${p.category.split('·')[0].trim()}</span>
        </div>
        <div class="home-card-body">
          <h4>${p.name}</h4>
          <p>${p.shortDesc}</p>
        </div>
        <div class="home-card-footer">
          <button class="btn-ver" onclick="event.stopPropagation();showDetail(${p.id})">VER MAIS</button>
        </div>
      </div>`).join('');
  }
 
  // ── CATALOG GRID ──
  function renderCatalog(list) {
    const container = document.getElementById('catalog-grid');
    if (!container) return;
    const sorted = list.sort((a, b) => a.mf - b.mf);
    container.innerHTML = sorted.map(p => `
      <div class="prod-card" onclick="showDetail(${p.id})">
        <div class="prod-card-img">
          <img class="card-image" src="${getAssetPath(p.img)}" alt="${p.name}">
        </div>
        <div class="prod-card-body">
          <h4>${p.name}</h4>
          <p>${p.shortDesc}</p>
        </div>
        <div class="prod-card-footer">
          <button class="btn-ver" onclick="event.stopPropagation();showDetail(${p.id})">VER MAIS</button>
        </div>
      </div>`).join('');
  }
 
  // ── SEARCH ──
  function filterSearch() {
    const input = document.getElementById('search-input');
    if (!input) return;
    const q = input.value.toLowerCase();
    
    if (document.getElementById('home-grid')) {
      const filtered = q ? products.filter(p =>
        p.name.toLowerCase().includes(q) || p.shortDesc.toLowerCase().includes(q)) : products;
      renderHomeGrid(filtered);
    }
    
    if (document.getElementById('catalog-grid')) {
      const filtered = q ? allProducts.filter(p =>
        p.name.toLowerCase().includes(q) || p.shortDesc.toLowerCase().includes(q)) : allProducts;
      renderCatalog(filtered);
    }
  }
 
  // ── DETAIL ──
  function showDetail(id) {
    const p = allProducts.find(x => x.id === id);
    if (!p) return;

    const breadcrumb = document.getElementById('detail-breadcrumb');
    const detailImage = document.getElementById('detail-emoji');
    const category = document.getElementById('detail-category');
    const title = document.getElementById('detail-title');
    const desc = document.getElementById('detail-desc');
    const specs = document.getElementById('detail-specs');
    const chars = document.getElementById('detail-chars');
    const mats = document.getElementById('detail-mats');

    if (breadcrumb) breadcrumb.textContent = p.name;
    if (detailImage) {
      detailImage.src = getAssetPath(p.img);
      detailImage.alt = p.name;
    }
    if (category) category.textContent = p.category;
    if (title) title.textContent = p.name;
    if (desc) desc.textContent = p.fullDesc;
    if (specs) specs.innerHTML = p.specs.map(s =>
      `<div class="spec-card"><div class="spec-label">${s.label}</div><div class="spec-val">${s.val}</div></div>`).join('');
    if (chars) chars.innerHTML = p.chars.map(c => `<li>${c}</li>`).join('');
    if (mats) mats.innerHTML = p.mats.map(m =>
      `<div class="mat-row"><span class="mat-key">${m.key}</span><span class="mat-val">${m.val}</span></div>`).join('');

    if (document.getElementById('page-detail')) showPage('detail');
  }
 
  // ── ROUTING ──
  function showPage(name) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const targetPage = document.getElementById('page-' + name);
    if (targetPage) targetPage.classList.add('active');
    document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
    const navLinks = document.getElementById('nav-links');
    if (navLinks) navLinks.classList.remove('open');
    const map = { home:'nav-home', catalog:'nav-catalog', sobre:'nav-sobre', detail:'nav-catalog' };
    if (map[name]) document.getElementById(map[name])?.classList.add('active');
    window.scrollTo(0, 0);
  }
 

// ── CARROSSEL DESCUBRA MAIS ──
const DESCUBRA_VISIBLE = 3;
let descubraIdx = 0;

function renderDescubra() {
  const track = document.getElementById('descubra-track');
  if (!track) return;

  const sorted = allProducts.sort((a, b) => a.mf - b.mf);
  track.innerHTML = sorted.map(p => `
    <div class="descubra-card" onclick="showDetail(${p.id})">
      <div class="descubra-card-img">
        <img src="${p.img}" alt="${p.name}" onerror="this.parentElement.innerHTML='<div style=font-size:48px;opacity:.2>🏋️</div>'" />
      </div>
      <div class="descubra-card-body">
        <h4>${p.name}</h4>
        <p>${p.shortDesc}</p>
      </div>
    </div>
  `).join('');

  atualizarDescubra();
  renderDescubraDots();
}

function atualizarDescubra() {
  const track = document.getElementById('descubra-track');
  if (!track) return;
  const card = track.querySelector('.descubra-card');
  if (!card) return;
  const largura = card.offsetWidth + 20; // gap
  track.style.transform = `translateX(-${descubraIdx * largura}px)`;
  renderDescubraDots();
}

function descubraProximo() {
  const max = allProducts.length - DESCUBRA_VISIBLE;
  if (descubraIdx < max) { descubraIdx++; atualizarDescubra(); }
}

function descubraAnterior() {
  if (descubraIdx > 0) { descubraIdx--; atualizarDescubra(); }
}

function renderDescubraDots() {
  const dots = document.getElementById('descubra-dots');
  if (!dots) return;
  const total = Math.ceil(allProducts.length / DESCUBRA_VISIBLE);
  const atual = Math.floor(descubraIdx / DESCUBRA_VISIBLE);
  dots.innerHTML = Array.from({length: total}, (_, i) =>
    `<span class="${i === atual ? 'active' : ''}" onclick="descubraIrPara(${i})"></span>`
  ).join('');
}

function descubraIrPara(i) {
  descubraIdx = i * DESCUBRA_VISIBLE;
  atualizarDescubra();
}


  // ── INIT ──
  if (document.getElementById('banner-dots') || document.getElementById('banner-title') || document.getElementById('banner-list')) {
    renderBannerDots();
    setBanner(0);
  }

  renderMiniCarousel();
  if (document.getElementById('mini-carousel-track')) {
    setInterval(() => {
      if (document.getElementById('mini-carousel-track')) miniCarouselNext();
    }, 5000);
  }

  // roda renderHomeGrid só se o elemento existir (página home)
  if (document.getElementById('home-grid')) renderHomeGrid(products);

  // roda renderCatalog só se o elemento existir (página catálogo)
  if (document.getElementById('catalog-grid')) renderCatalog(allProducts);

  if (document.getElementById('descubra-track')) renderDescubra();