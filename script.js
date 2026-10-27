/**
 * CARE'S INDIA - MODERN WHOLESALE DISTRIBUTOR CLIENT SCRIPT
 * Standalone Vanilla JavaScript (No React / Node / Bundler Required)
 */

const BUSINESS_INFO = {
  name: "CARE'S INDIA",
  phones: ["9300901545", "8817665365"],
  whatsappNumber: "918817665365",
  addressFull: "Near Star Restaurant, Sunar ki Bagiya, Ramdash Ghati, Lashkar, Gwalior - 474 001, Madhya Pradesh, India"
};

const PRODUCTS = [
  // 1. AUTO CARE
  {
    id: 'dash-polish',
    name: 'Quality Dash Polish',
    category: 'Auto Care',
    shortDesc: 'Premium dashboard restorer with UV polymer shield, anti-static dust repelling formula & satin luster.',
    packagingOptions: ['500 ml Trigger Spray', '1 Litre Bottle', '5 Litre Bulk Can', '20 Litre Drum'],
    keyFeatures: [
      'Advanced UV blockers prevent dashboard cracking and fading',
      'Non-greasy, dust-repellent silky satin sheen'
    ],
    imageUrl: 'IMAGE/dash.jpg',
    badge: 'Popular B2B'
  },
  {
    id: 'car-shampoo',
    name: 'Car Shampoo',
    category: 'Auto Care',
    shortDesc: 'Dense snow foam formulation with gloss enhancers, pH-neutral and completely clear-coat safe.',
    packagingOptions: ['1 Litre Bottle', '5 Litre Can', '20 Litre Bulk Drum', '50 Litre Barrel'],
    keyFeatures: [
      'Concentrated 1:100 dilution ratio for economical car washing',
      'pH 7.0 neutral protects ceramic coats & vehicle paint'
    ],
    imageUrl: 'IMAGE/carShampoo.jpg',
    badge: 'High Economy'
  },
  {
    id: 'car-polish',
    name: 'Car Polish',
    category: 'Auto Care',
    shortDesc: 'Deep gloss micro-abrasive cutting polish with hydrophobic Carnauba wax weather barrier.',
    packagingOptions: ['500 ml Bottle', '1 Litre Canister', '5 Litre Pack'],
    keyFeatures: [
      'Dual-action micro-abrasive polishing + Carnauba sealing',
      'Produces crystalline hydrophobic water-beading effect'
    ],
    imageUrl: 'IMAGE/carPolish.jpg',
    badge: 'Pro Grade'
  },

  // 2. HAND WASH & SOAP
  {
    id: 'liquid-soap',
    name: 'Liquid Soap',
    category: 'Hand Wash & Soap',
    shortDesc: 'Pearlized antimicrobial hand and body wash enriched with moisturizing glycerin and soothing agents.',
    packagingOptions: ['500 ml Dispenser', '5 Litre Refill Can', '20 Litre Bulk Drum', '50 Litre Barrel'],
    keyFeatures: [
      'Eliminates 99.9% common pathogenic bacteria',
      'Neutral pH and vegetable glycerin for campus & hospitals'
    ],
    imageUrl: 'IMAGE/dishSoap.jpg',
    badge: 'Campus & Hospital Choice'
  },
  {
    id: 'hand-wash',
    name: 'Hand Wash',
    category: 'Hand Wash & Soap',
    shortDesc: 'Active foaming herbal hand wash with neem and aloe vera extracts for daily commercial & home wellness.',
    packagingOptions: ['250 ml Pump', '500 ml Dispenser', '5 Litre Refill Can', '20 Litre Pack'],
    keyFeatures: [
      'Natural botanical extracts ensure deep germ defense',
      'Fast-rinsing active lather reduces water consumption'
    ],
    imageUrl: 'IMAGE/Handwash.jpg',
    badge: 'Dermatologically Gentle'
  },
  {
    id: 'sanitizer',
    name: 'Sanitizer',
    category: 'Hand Wash & Soap',
    shortDesc: 'Hospital-grade 75% Isopropyl Alcohol antiseptic hand rub for instant germ protection.',
    packagingOptions: ['100 ml Pocket Bottle', '500 ml Pump Bottle', '5 Litre Medical Can', '20 Litre Drum'],
    keyFeatures: [
      'Kills 99.9% germs within seconds without sticky feel',
      'Skin-friendly formula suitable for hospitals, colleges & clinics'
    ],
    imageUrl: 'IMAGE/sanitizer.jpg',
    badge: '99.9% Germ Protection'
  },

  // 3. CLEANING & FLOOR CARE
  {
    id: 'tiles-cleaner',
    name: 'Tiles Cleaner',
    category: 'Cleaning & Floor Care',
    shortDesc: 'Heavy-duty chemical descaler for rapid removal of hard water yellow scale, soap scum & grout stains.',
    packagingOptions: ['1 Litre Bottle', '5 Litre Can', '20 Litre Bulk Drum', '50 Litre Barrel'],
    keyFeatures: [
      'Dissolves tough mineral crusts and lime in under 2 minutes',
      'Formulated with corrosion inhibitors for bathroom fittings'
    ],
    imageUrl: 'IMAGE/tilescleaner.jpg',
    badge: 'Hostels & Restrooms'
  },
  {
    id: 'phenyle-black-white',
    name: 'Phenyle (Black & White)',
    category: 'Cleaning & Floor Care',
    shortDesc: 'Certified disinfectant phenyle available in pure Pine White and high-RWC Coal Tar Black formulations.',
    packagingOptions: ['1 Litre Bottle', '5 Litre Can', '20 Litre Drum', '200 Litre Industrial Barrel'],
    keyFeatures: [
      'White Pine: Pure Himalayan pine oil, milky bloom, insect repellent',
      'Black: RWC 5.0+ certified for drains & hospital sewage'
    ],
    imageUrl: 'IMAGE/phenyle.jpg',
    badge: 'Top Volume B2B'
  },
  {
    id: 'harpic',
    name: 'Harpic',
    category: 'Cleaning & Floor Care',
    shortDesc: 'High-viscosity acidic toilet bowl cleaner gel that clings to vertical ceramic surfaces and eliminates 99.9% germs.',
    packagingOptions: ['500 ml Nozzle Bottle', '1 Litre Grip Bottle', '5 Litre Refill Can', '20 Litre Drum'],
    keyFeatures: [
      'Viscous gel formula clings to slanted rims for deep stain removal',
      'Dissolves yellowish uric acid crusts effortlessly'
    ],
    imageUrl: 'IMAGE/harpic.jpg',
    badge: 'Deep Sanitization'
  },
  {
    id: 'room-freshner',
    name: 'Room Freshner',
    category: 'Cleaning & Floor Care',
    shortDesc: 'Commercial air neutralizer spray available in Lavender, Citrus Blossom & Sandalwood for lasting freshness.',
    packagingOptions: ['250 ml Machine Refill', '500 ml Trigger Mist Spray', '5 Litre Bulk Can'],
    keyFeatures: [
      'Odor-encapsulating molecules neutralize dampness and smoke',
      'Micro-diffusion mist suspends in the air for up to 8 hours'
    ],
    imageUrl: 'IMAGE/room.jpg',
    badge: 'Long-Lasting Aroma'
  }
];

// App State
let currentCategory = 'all';
let searchQuery = '';
let activeView = 'cards';
const cardSelectedPacks = {};
const orderPadState = {
  'car-shampoo': { qty: 0, pack: '5 Litre Can' },
  'phenyle-black-white': { qty: 0, pack: '5 Litre Can' },
  'tiles-cleaner': { qty: 0, pack: '5 Litre Can' },
  'liquid-soap': { qty: 0, pack: '5 Litre Refill Can' }
};

// Initialize Default Selected Packs for each product
PRODUCTS.forEach(p => {
  cardSelectedPacks[p.id] = p.packagingOptions[0];
});

// DOM Loaded Entry
function initApp() {
  renderProductCards();
  renderOrderPad();
  setupEventListeners();
  setupSearch();
  setupCategoryTabs();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

// Global WhatsApp Direct Link
function openWhatsAppGeneral() {
  const text = encodeURIComponent(
    `Namaste CARE'S INDIA, mujhe wholesale cleaning aur car care products ke rates chahiye (Gwalior delivery).`
  );
  window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${text}`, '_blank');
}

// Render Photo Cards
function renderProductCards() {
  const container = document.getElementById('product-cards-grid');
  if (!container) return;

  const query = searchQuery.toLowerCase().trim();
  const filtered = PRODUCTS.filter(p => {
    if (query) {
      return (
        p.name.toLowerCase().includes(query) ||
        p.shortDesc.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        p.packagingOptions.some(pack => pack.toLowerCase().includes(query))
      );
    }
    return currentCategory === 'all' || p.category === currentCategory;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 48px 16px; background: white; border-radius: 16px; border: 1px solid var(--slate-200);">
        <p style="font-size: 16px; font-weight: 700; color: var(--slate-800);">Koi product nahi mila ("${searchQuery}")</p>
        <p style="font-size: 13px; color: var(--slate-500); margin-top: 6px;">Kripya spelling check karein ya search reset karein.</p>
        <button onclick="clearSearch()" class="btn btn-primary btn-sm" style="margin-top: 14px;">Reset Search</button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(p => {
    const selectedPack = cardSelectedPacks[p.id] || p.packagingOptions[0];
    const featuresHtml = p.keyFeatures.map(f => `
      <div class="product-bullet-item">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        <span>${f}</span>
      </div>
    `).join('');

    const packsHtml = p.packagingOptions.map(pack => `
      <button 
        type="button" 
        class="pack-btn ${pack === selectedPack ? 'selected' : ''}" 
        onclick="selectCardPack('${p.id}', '${pack}')"
      >
        ${pack}
      </button>
    `).join('');

    return `
      <div class="product-card" id="card-${p.id}">
        <div class="product-img-wrap">
          <img src="${p.imageUrl}" alt="${p.name}" loading="lazy" onerror="this.src='IMAGE/prod_car_shampoo.jpg'">
          <div class="card-cat-badge">
            <span class="badge badge-white">${p.category}</span>
          </div>
          ${p.badge ? `<div class="card-feat-badge"><span class="badge badge-dark">${p.badge}</span></div>` : ''}
        </div>

        <div class="product-body">
          <div>
            <h3 class="product-title">${p.name}</h3>
            <p class="product-desc">${p.shortDesc}</p>

            <div class="product-bullets">
              ${featuresHtml}
            </div>

            <div class="pack-selection-wrap">
              <span class="pack-label">Available Packaging Sizes:</span>
              <div class="pack-options">
                ${packsHtml}
              </div>
            </div>
          </div>

          <div class="product-footer">
            <div class="pack-price-status">
              <span style="color: var(--slate-500);">Packing: <strong style="color: var(--slate-900);" id="pack-label-${p.id}">${selectedPack}</strong></span>
              <span class="badge badge-blue">Wholesale Rate Available</span>
            </div>

            <button type="button" class="btn btn-secondary" style="width: 100%;" onclick="sendWhatsAppProductQuote('${p.id}')">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
              <span>WhatsApp pe Rate Janein</span>
            </button>

            <div class="card-action-grid">
              <button type="button" class="btn btn-outline btn-sm" onclick="openQuoteModal('${p.id}')">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                <span>Rate Form (दाम)</span>
              </button>
              <a href="tel:${BUSINESS_INFO.phones[0]}" class="btn btn-soft-blue btn-sm">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <span>Direct Call</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Select Pack Size inside Card
function selectCardPack(productId, pack) {
  cardSelectedPacks[productId] = pack;
  const label = document.getElementById(`pack-label-${productId}`);
  if (label) label.textContent = pack;

  const card = document.getElementById(`card-${productId}`);
  if (card) {
    const btns = card.querySelectorAll('.pack-btn');
    btns.forEach(b => {
      b.classList.toggle('selected', b.textContent.trim() === pack);
    });
  }
}

// Send WhatsApp for a single product from card
function sendWhatsAppProductQuote(productId) {
  const prod = PRODUCTS.find(p => p.id === productId);
  if (!prod) return;
  const pack = cardSelectedPacks[productId] || prod.packagingOptions[0];
  const msg = encodeURIComponent(
    `Namaste CARE'S INDIA, mujhe *${prod.name}* (${pack}) ka bulk wholesale rate bataiye (Gwalior delivery).`
  );
  window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${msg}`, '_blank');
}

// Render 1-Click Order Pad
function renderOrderPad() {
  const listEl = document.getElementById('orderpad-list');
  if (!listEl) return;

  listEl.innerHTML = PRODUCTS.map(p => {
    const item = orderPadState[p.id] || { qty: 0, pack: p.packagingOptions[0] };
    const hasQty = item.qty > 0;

    const optionsHtml = p.packagingOptions.map(pack => `
      <option value="${pack}" ${pack === item.pack ? 'selected' : ''}>${pack}</option>
    `).join('');

    return `
      <div class="orderpad-row ${hasQty ? 'has-qty' : ''}" id="order-row-${p.id}">
        <div class="orderpad-prod-info">
          <img src="${p.imageUrl}" alt="${p.name}" class="orderpad-thumb" onerror="this.src='IMAGE/prod_car_shampoo.jpg'">
          <div>
            <div style="display: flex; align-items: center; gap: 8px;">
              <strong style="font-size: 14px; color: var(--slate-900);">${p.name}</strong>
              <span class="badge badge-white" style="font-size: 9px; padding: 2px 6px;">${p.category}</span>
            </div>
            <p style="font-size: 12px; color: var(--slate-500); margin-top: 2px;">${p.shortDesc}</p>
          </div>
        </div>

        <div class="orderpad-controls">
          <select class="orderpad-select" onchange="changeOrderPadPack('${p.id}', this.value)">
            ${optionsHtml}
          </select>

          <div class="qty-counter">
            <button class="qty-btn" onclick="changeOrderPadQty('${p.id}', -1)">-</button>
            <span class="qty-display" id="order-qty-${p.id}">${item.qty}</span>
            <button class="qty-btn" onclick="changeOrderPadQty('${p.id}', 1)">+</button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  updateOrderPadTotal();
}

function changeOrderPadPack(productId, pack) {
  if (!orderPadState[productId]) {
    orderPadState[productId] = { qty: 0, pack };
  } else {
    orderPadState[productId].pack = pack;
  }
}

function changeOrderPadQty(productId, delta) {
  const prod = PRODUCTS.find(p => p.id === productId);
  if (!prod) return;
  if (!orderPadState[productId]) {
    orderPadState[productId] = { qty: 0, pack: prod.packagingOptions[0] };
  }
  const current = orderPadState[productId].qty;
  const newQty = Math.max(0, current + delta);
  orderPadState[productId].qty = newQty;

  const display = document.getElementById(`order-qty-${productId}`);
  if (display) display.textContent = newQty;

  const row = document.getElementById(`order-row-${productId}`);
  if (row) {
    row.classList.toggle('has-qty', newQty > 0);
  }

  updateOrderPadTotal();
}

function updateOrderPadTotal() {
  const selectedItems = Object.entries(orderPadState).filter(([_, item]) => item.qty > 0);
  const totalUnits = selectedItems.reduce((acc, [_, item]) => acc + item.qty, 0);

  const unitsEl = document.getElementById('orderpad-total-units');
  if (unitsEl) unitsEl.textContent = totalUnits;

  const summaryBar = document.getElementById('orderpad-summary-bar');
  if (summaryBar) {
    summaryBar.style.display = totalUnits > 0 ? 'flex' : 'none';
  }
}

function resetOrderPad() {
  Object.keys(orderPadState).forEach(k => {
    orderPadState[k].qty = 0;
  });
  renderOrderPad();
}

function sendWhatsAppOrderPad() {
  const selectedItems = Object.entries(orderPadState).filter(([_, item]) => item.qty > 0);
  if (selectedItems.length === 0) {
    alert("Kripya pehle kisi product ki quantity (+) karein.");
    return;
  }

  let msg = `*CARE'S INDIA (Gwalior) - QUICK BULK ORDER LIST*\n`;
  msg += `-------------------------------------------\n`;
  msg += `Namaste, mujhe in cleaning & car care products ka wholesale rate chahiye:\n\n`;

  selectedItems.forEach(([id, item], index) => {
    const prod = PRODUCTS.find(p => p.id === id);
    if (prod) {
      msg += `${index + 1}. *${prod.name}*\n`;
      msg += `   • Pack Size: ${item.pack}\n`;
      msg += `   • Quantity: ${item.qty} units\n\n`;
    }
  });

  msg += `Kripya best wholesale rates aur delivery timing confirm karein.\n`;
  msg += `Location: Gwalior / MP`;

  window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
}

// View Mode Toggle (Cards vs Order Pad)
function setViewMode(mode) {
  activeView = mode;
  const cardsBtn = document.getElementById('view-cards-btn');
  const orderpadBtn = document.getElementById('view-orderpad-btn');
  const cardsGrid = document.getElementById('product-cards-grid');
  const orderpadView = document.getElementById('orderpad-view');

  if (mode === 'cards') {
    cardsBtn.className = 'view-mode-btn active-cards';
    orderpadBtn.className = 'view-mode-btn';
    cardsGrid.style.display = 'grid';
    orderpadView.style.display = 'none';
  } else {
    cardsBtn.className = 'view-mode-btn';
    orderpadBtn.className = 'view-mode-btn active-orderpad';
    cardsGrid.style.display = 'none';
    orderpadView.style.display = 'block';
  }
}

// Search & Categories
function setupSearch() {
  const input = document.getElementById('product-search-input');
  const clearBtn = document.getElementById('clear-search-btn');

  if (input) {
    input.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      if (clearBtn) {
        clearBtn.classList.toggle('show', searchQuery.length > 0);
      }
      renderProductCards();
    });
  }
}

function clearSearch() {
  const input = document.getElementById('product-search-input');
  const clearBtn = document.getElementById('clear-search-btn');
  searchQuery = '';
  if (input) input.value = '';
  if (clearBtn) clearBtn.classList.remove('show');
  renderProductCards();
}

function quickSearch(tag) {
  const input = document.getElementById('product-search-input');
  const clearBtn = document.getElementById('clear-search-btn');
  searchQuery = tag;
  if (input) input.value = tag;
  if (clearBtn) clearBtn.classList.add('show');
  setViewMode('cards');
  renderProductCards();
  document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' });
}

function setupCategoryTabs() {
  const btns = document.querySelectorAll('.category-tab-btn');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-category');
      renderProductCards();
    });
  });
}

// Quote Modal Handlers
let modalCurrentProduct = null;
let modalCurrentPack = '';

function openQuoteModal(productId) {
  const prod = PRODUCTS.find(p => p.id === productId);
  if (!prod) return;
  modalCurrentProduct = prod;
  modalCurrentPack = cardSelectedPacks[productId] || prod.packagingOptions[0];

  document.getElementById('modal-prod-title').textContent = prod.name;
  document.getElementById('modal-prod-name').textContent = prod.name;
  document.getElementById('modal-prod-desc').textContent = prod.shortDesc;
  document.getElementById('modal-prod-cat').textContent = prod.category;
  document.getElementById('modal-prod-img').src = prod.imageUrl;

  const packsWrap = document.getElementById('modal-pack-options');
  packsWrap.innerHTML = prod.packagingOptions.map(pack => `
    <button 
      type="button" 
      class="pack-btn ${pack === modalCurrentPack ? 'selected' : ''}" 
      onclick="setModalPack('${pack}')"
    >
      ${pack}
    </button>
  `).join('');

  document.getElementById('modal-form-view').style.display = 'block';
  document.getElementById('modal-success-view').style.display = 'none';
  document.getElementById('quote-modal-overlay').classList.add('open');
}

function setModalPack(pack) {
  modalCurrentPack = pack;
  const btns = document.querySelectorAll('#modal-pack-options .pack-btn');
  btns.forEach(b => b.classList.toggle('selected', b.textContent.trim() === pack));
}

function closeQuoteModal() {
  document.getElementById('quote-modal-overlay').classList.remove('open');
}

function sendWhatsAppFromModal() {
  if (!modalCurrentProduct) return;
  const name = document.getElementById('modal-inst-name').value.trim();
  const phone = document.getElementById('modal-phone').value.trim();
  const qty = document.getElementById('modal-quantity').value.trim();

  let msg = `*CARE'S INDIA - WHOLESALE RATE & ORDER INQUIRY*\n`;
  msg += `------------------------------------\n`;
  msg += `*Product:* ${modalCurrentProduct.name}\n`;
  msg += `*Category:* ${modalCurrentProduct.category}\n`;
  msg += `*Packaging:* ${modalCurrentPack}\n`;
  if (qty) msg += `*Quantity:* ${qty}\n`;
  if (name) msg += `*Business/Name:* ${name}\n`;
  if (phone) msg += `*Contact:* ${phone}\n`;
  msg += `\nPlease confirm best wholesale rate and stock availability in Gwalior.`;

  window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  closeQuoteModal();
}

function submitQuoteModal(e) {
  e.preventDefault();
  document.getElementById('modal-form-view').style.display = 'none';
  document.getElementById('modal-success-view').style.display = 'block';
  setTimeout(() => {
    closeQuoteModal();
  }, 1600);
}

// Contact Form Handler
function submitContactForm(e) {
  e.preventDefault();
  const name = document.getElementById('contact-name').value;
  const phone = document.getElementById('contact-phone').value;
  const cat = document.getElementById('contact-category').value;
  const notes = document.getElementById('contact-notes').value;

  document.getElementById('contact-form-elements').style.display = 'none';
  document.getElementById('contact-success-msg').style.display = 'block';
}

function sendContactWhatsApp() {
  const name = document.getElementById('contact-name').value.trim();
  const phone = document.getElementById('contact-phone').value.trim();
  const cat = document.getElementById('contact-category').value;
  const notes = document.getElementById('contact-notes').value.trim();

  let msg = `*CARE'S INDIA (Gwalior) - WHOLESALE RATE & ORDER*\n`;
  msg += `------------------------------------\n`;
  if (name) msg += `*Naam/Business:* ${name}\n`;
  if (phone) msg += `*Mobile:* ${phone}\n`;
  msg += `*Category:* ${cat}\n`;
  if (notes) msg += `*Zaroorat:* ${notes}\n`;
  msg += `\nPlease confirm best wholesale rate slabs & availability.`;

  window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
}

// Mobile Menu Toggle
function toggleMobileMenu() {
  const drawer = document.getElementById('mobile-drawer');
  if (drawer) {
    drawer.classList.toggle('open');
  }
}

function closeMobileMenu() {
  const drawer = document.getElementById('mobile-drawer');
  if (drawer) {
    drawer.classList.remove('open');
  }
}

// Setup Event Listeners
function setupEventListeners() {
  // Close modal when clicking outside modal box
  const modalOverlay = document.getElementById('quote-modal-overlay');
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeQuoteModal();
    });
  }

  // Active section tracking on scroll
  const sections = ['home', 'catalog', 'about', 'contact'];
  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 100;
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        const top = el.offsetTop;
        const height = el.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
          });
        }
      }
    });
  });
}

