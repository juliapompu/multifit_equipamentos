  // ── PRODUTOS ──
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
 
  function getAssetPath(path) {
    const normalizedPath = path.replace(/^\//, '');
    if (window.location.pathname.includes('/src/pages/')) {
      return new URL(normalizedPath.replace(/^src\//, '../'), window.location.href).href;
    }
    return new URL(normalizedPath, window.location.href).href;
  }

  // ── BANNER ──
  const bannerSlides = [
    { title: 'LEG PRESS 45°', items: ['Plataforma extra-larga de 800mm','Trilhos retificados em aço carbono','Trava de segurança dupla','Ideal para academias profissionais'] },
    { title: 'CROSSOVER DUPLO ELITE SERIES', items: ['Duas colunas independentes de 90 kg','Polias ajustáveis em 20 posições','Cabos com 900 kg de tração','Barra de pull-up integrada'] },
    { title: 'SUPORTE HORIZONTAL DE BARRAS MF1115', items: ['Suporte horizontal para barras','Estrutura em aço reforçado','Pintura eletrostática à pó','Design moderno e robusto'] },
  ];
  let bannerIdx = 2;
 
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
    if (title) title.textContent = s.title;
    if (list) list.innerHTML = s.items.map(it=>`<li>${it}</li>`).join('');
    renderBannerDots();
  }
  function bannerNext() { setBanner((bannerIdx+1) % bannerSlides.length); }
  function bannerPrev() { setBanner((bannerIdx-1+bannerSlides.length) % bannerSlides.length); }
  if (document.getElementById('banner-title') || document.getElementById('banner-list') || document.getElementById('banner-dots')) {
    setInterval(bannerNext, 4000);
  }
 
  // ── HOME GRID ──
  function renderHomeGrid(list) {
    const container = document.getElementById('home-grid');
    if (!container) return;
    container.innerHTML = list.map(p => `
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
          <span>Por:</span>
          <button class="btn-ver" onclick="event.stopPropagation();showDetail(${p.id})">VER MAIS</button>
        </div>
      </div>`).join('');
  }
 
  // ── CATALOG GRID ──
  function renderCatalog(list) {
    const container = document.getElementById('catalog-grid');
    if (!container) return;
    container.innerHTML = list.map(p => `
      <div class="prod-card" onclick="showDetail(${p.id})">
        <div class="prod-card-img">
          <img class="card-image" src="${getAssetPath(p.img)}" alt="${p.name}">
        </div>
        <div class="prod-card-body">
          <h4>${p.name}</h4>
          <p>${p.shortDesc}</p>
        </div>
        <div class="prod-card-footer">
          <span>Por:</span>
          <button class="btn-ver" onclick="event.stopPropagation();showDetail(${p.id})">VER MAIS</button>
        </div>
      </div>`).join('');
  }
 
  // ── SEARCH ──
  function filterSearch() {
    const input = document.getElementById('search-input');
    if (!input) return;
    const q = input.value.toLowerCase();
    const filtered = q ? products.filter(p =>
      p.name.toLowerCase().includes(q) || p.shortDesc.toLowerCase().includes(q)) : products;
    if (document.getElementById('home-grid')) renderHomeGrid(filtered);
    if (document.getElementById('catalog-grid')) renderCatalog(filtered);
  }
 
  // ── DETAIL ──
  function showDetail(id) {
    const p = products.find(x => x.id === id);
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
 
  // ── INIT ──
  if (document.getElementById('banner-dots') || document.getElementById('banner-title') || document.getElementById('banner-list')) {
    renderBannerDots();
    setBanner(bannerIdx);
  }

  // roda renderHomeGrid só se o elemento existir (página home)
  if (document.getElementById('home-grid')) renderHomeGrid(products);

  // roda renderCatalog só se o elemento existir (página catálogo)
  if (document.getElementById('catalog-grid')) renderCatalog(products);