const fs = require('fs');

let content = fs.readFileSync('script.js', 'utf8');

const targetStart = 'let activeAppKey = "marispeak";';
const targetEnd = `  if (app.simulatorType === "marispeak") {
    setupPTTEvents();
  }
}`;

const startIndex = content.indexOf(targetStart);
if (startIndex === -1) {
  console.error("Could not find targetStart");
  process.exit(1);
}

const endIndex = content.indexOf(targetEnd, startIndex);
if (endIndex === -1) {
  console.error("Could not find targetEnd");
  process.exit(1);
}

const replacementCode = `let activeAppKey = "marispeak";
let activeSimulatorMode = "store"; // 'store' (Live Store UI) or 'prototype' (Interactive Lab)
let isTransmitting = false;

// Per-app active screenshot index tracker
const appScreenIndices = {
  marispeak: 0,
  towtraces: 0,
  viralflight: 0,
  nvtusa: 0,
  altrix: 0,
  galaxyadvertisers: 0,
  bid4style: 0
};

// Interactive prototype state variables
let nvtHomeScore = 2;
let nvtAwayScore = 1;
let currentBidPrice = 11250;
let cartCount = 3;
let workModeActive = true;
let callActive = false;
let callSeconds = 0;
let callInterval = null;

document.addEventListener("DOMContentLoaded", () => {
  renderProjectsGrid("all");
  setupFilterTabs();
  setupPhoneSimulator();
  setupModalHandlers();
  setupContactForm();
});

// Mode Switcher Handler
window.setSimulatorMode = function(mode) {
  activeSimulatorMode = mode;
  const storeBtn = document.getElementById("tabModeStore");
  const protoBtn = document.getElementById("tabModePrototype");
  const islandText = document.getElementById("islandText");

  if (storeBtn) storeBtn.classList.toggle("active", mode === "store");
  if (protoBtn) protoBtn.classList.toggle("active", mode === "prototype");
  if (islandText) islandText.innerText = mode === "store" ? "Live Store UI" : "Flutter Lab";

  renderSimulatorContent(activeAppKey);
};

// Screenshot Carousel Navigation
window.prevStoreScreenshot = function() {
  const app = portfolioData.apps[activeAppKey];
  if (!app || !app.screenshots || app.screenshots.length <= 1) return;
  const current = appScreenIndices[activeAppKey] || 0;
  appScreenIndices[activeAppKey] = (current - 1 + app.screenshots.length) % app.screenshots.length;
  renderSimulatorContent(activeAppKey);
};

window.nextStoreScreenshot = function() {
  const app = portfolioData.apps[activeAppKey];
  if (!app || !app.screenshots || app.screenshots.length <= 1) return;
  const current = appScreenIndices[activeAppKey] || 0;
  appScreenIndices[activeAppKey] = (current + 1) % app.screenshots.length;
  renderSimulatorContent(activeAppKey);
};

window.jumpToScreenshot = function(idx) {
  appScreenIndices[activeAppKey] = idx;
  renderSimulatorContent(activeAppKey);
};

// Render Simulator Screen
function renderSimulatorContent(appKey) {
  const container = document.getElementById("phoneAppContent");
  if (!container) return;

  const app = portfolioData.apps[appKey] || portfolioData.apps.marispeak;

  // Dynamically update reactive phone glow & border highlight based on app branding
  const glow = document.getElementById("phoneGlowBacking");
  if (glow) {
    glow.style.background = \`radial-gradient(circle, \${app.badgeColor}55 0%, rgba(121, 40, 202, 0.22) 50%, transparent 75%)\`;
  }
  const mockup = document.getElementById("phoneMockup");
  if (mockup) {
    mockup.style.borderColor = \`\${app.badgeColor}77\`;
    mockup.style.boxShadow = \`0 30px 80px rgba(0, 0, 0, 0.85), 0 0 30px \${app.badgeColor}33, inset 0 0 0 2px #0a0e17\`;
  }

  // Update Island capsule text
  const islandText = document.getElementById("islandText");
  if (islandText) {
    islandText.innerText = activeSimulatorMode === "store" ? "Live Store UI" : "Flutter Lab";
  }

  // Check which mode to display
  if (activeSimulatorMode === "store") {
    renderStoreScreensView(app, container);
  } else {
    renderInteractivePrototypeView(app, container);
  }
}

// 1. Render Live Store UI View (Real Play Store / App Store Screenshots & Metadata)
function renderStoreScreensView(app, container) {
  const screens = app.screenshots || [];
  const currentIndex = appScreenIndices[app.id] || 0;
  const currentScreen = screens[currentIndex] || screens[0] || {
    title: app.name,
    caption: app.tagline,
    url: app.iconImage,
    storeLabel: app.status
  };

  const hasMultiple = screens.length > 1;

  let dotsHtml = "";
  if (hasMultiple) {
    dotsHtml = \`
      <div class="store-dots-row">
        \${screens.map((_, i) => \`
          <span class="store-dot \${i === currentIndex ? 'active' : ''}" onclick="jumpToScreenshot(\${i})" title="Screen \${i + 1}"></span>
        \`).join("")}
      </div>
    \`;
  }

  let storeBadgesHtml = "";
  if (app.playStoreUrl && app.playStoreUrl !== "#") {
    storeBadgesHtml += \`
      <a href="\${app.playStoreUrl}" target="_blank" rel="noopener noreferrer" class="btn-store-external play-btn">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="5 3 19 12 5 21 5 3"/>
        </svg>
        <span>Google Play ↗</span>
      </a>
    \`;
  }
  if (app.appStoreUrl && app.appStoreUrl !== "#") {
    storeBadgesHtml += \`
      <a href="\${app.appStoreUrl}" target="_blank" rel="noopener noreferrer" class="btn-store-external apple-btn">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.85c.62-.75 1.04-1.8 0.93-2.85-.9.04-2 .6-2.65 1.35-.58.66-1.09 1.73-.95 2.76 1.01.08 2.05-.51 2.67-1.26z"/>
        </svg>
        <span>App Store ↗</span>
      </a>
    \`;
  }

  container.innerHTML = \`
    <div class="store-ui-wrapper">
      <div class="store-ui-header">
        <div class="store-ui-app-meta">
          <img src="\${app.iconImage}" alt="\${app.name}" class="store-ui-app-icon" />
          <div>
            <div class="store-ui-app-name">\${app.name}</div>
            <div class="store-ui-app-sub">Screen \${currentIndex + 1} of \${screens.length}</div>
          </div>
        </div>
        <span class="store-badge-pill" style="background:\${app.badgeColor}22; color:\${app.badgeColor}; border:1px solid \${app.badgeColor}44;">
          <span class="badge-pulse" style="background:\${app.badgeColor};"></span>
          Verified Live
        </span>
      </div>

      <!-- Screenshot Canvas -->
      <div class="store-screen-canvas">
        <img 
          src="\${currentScreen.url}" 
          alt="\${currentScreen.title}" 
          class="store-screen-img" 
          loading="eager"
          onerror="this.src='assets/bid4style_screen.jpg'"
        />

        \${hasMultiple ? \`
          <button class="store-carousel-nav prev" onclick="prevStoreScreenshot()" title="Previous Screen">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg>
          </button>
          <button class="store-carousel-nav next" onclick="nextStoreScreenshot()" title="Next Screen">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
        \` : ''}

        <div class="store-caption-overlay">
          <div class="store-caption-title">\${currentScreen.title}</div>
          <div class="store-caption-desc">\${currentScreen.caption}</div>
        </div>
      </div>

      \${dotsHtml}

      <div class="store-quick-actions">
        \${storeBadgesHtml}
      </div>
    </div>
  \`;
}

// 2. Render Interactive Prototype Lab (Functional widgets, live sound effects & animations)
function renderInteractivePrototypeView(app, container) {
  let screenHTML = "";

  switch (app.simulatorType) {
    case "marispeak":
      screenHTML = \`
        <div class="proto-view-wrap">
          <div>
            <div class="sim-header">
              <div class="sim-header-left">
                <img src="assets/marispeak_icon.png" alt="MariSpeaks" class="sim-header-icon" />
                <div>
                  <div class="sim-header-title">MariSpeaks</div>
                  <div class="sim-header-sub">Begin your boating adventures</div>
                </div>
              </div>
              <span class="sim-tag-badge" style="background:rgba(56,189,248,0.18); color:#38bdf8; border:1px solid rgba(56,189,248,0.3);">
                Navigation &bull; PTT
              </span>
            </div>

            <!-- Marine GPS Mini Route Card -->
            <div class="sim-card-box" style="background:linear-gradient(135deg, rgba(2,132,199,0.2), rgba(15,23,42,0.8)); border-color:rgba(56,189,248,0.3); padding:8px 10px; margin-bottom:8px;">
              <div style="display:flex; justify-content:space-between; align-items:center; font-size:0.7rem; color:#94a3b8;">
                <span style="display:flex; align-items:center; gap:4px; color:#38bdf8; font-weight:700;">
                  🧭 Heading: North
                </span>
                <span style="font-weight:700; color:#00f5a0;">Speed: 2 Km/h (1.1 kn)</span>
              </div>
              <div style="font-size:0.68rem; color:#cbd5e1; margin-top:3px; font-family:monospace;">
                GPS: 24° 12' 40" N, 72° 45' 18" E &bull; Route Clear
              </div>
            </div>

            <div class="ptt-channel-badge" style="margin:4px auto 0;">
              <span class="badge-pulse"></span>
              CHANNEL 16 &bull; MARINA CALLING
            </div>
          </div>

          <div class="ptt-main-circle-wrap">
            <button id="simPTTButton" class="ptt-btn \${isTransmitting ? 'transmitting' : ''}">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
                <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                <line x1="12" y1="19" x2="12" y2="23"/>
                <line x1="8" y1="23" x2="16" y2="23"/>
              </svg>
              <span>\${isTransmitting ? "TRANSMITTING" : "HOLD TO TALK"}</span>
            </button>
            <div class="ptt-waveform">
              <span class="wave-bar"></span>
              <span class="wave-bar"></span>
              <span class="wave-bar"></span>
              <span class="wave-bar"></span>
              <span class="wave-bar"></span>
              <span class="wave-bar"></span>
              <span class="wave-bar"></span>
            </div>
            <div style="font-size:0.7rem; color:#94a3b8; margin-top:6px; text-align:center;" id="pttStatusText">
              \${isTransmitting ? "Broadcasting live audio to Marina Channel..." : "Press & Hold button for instant boat-to-boat audio"}
            </div>
          </div>

          <div>
            <div style="background:rgba(255,255,255,0.04); padding:8px 10px; border-radius:10px; border:1px solid rgba(255,255,255,0.08); font-size:0.68rem; margin-bottom:8px;">
              <div style="display:flex; justify-content:space-between; color:#94a3b8; margin-bottom:2px;">
                <span>WebSocket Binary Stream</span>
                <span style="color:#00f5a0; font-weight:700;">14ms Ping</span>
              </div>
              <div style="color:#cbd5e1; font-family:monospace; font-size:0.65rem;">
                &check; CallKit + PushKit Wakeups Active
              </div>
            </div>

            <button class="sim-action-btn" style="background:linear-gradient(135deg, #0284c7, #38bdf8); color:#fff;" onclick="setSimulatorMode('store')">
              View Verified Store Screenshots 📸
            </button>
          </div>
        </div>
      \`;
      break;

    case "towtraces":
      screenHTML = \`
        <div class="proto-view-wrap">
          <div>
            <div class="sim-header">
              <div class="sim-header-left">
                <img src="assets/towtraces_icon.png" alt="TowTraces" class="sim-header-icon" />
                <div>
                  <div class="sim-header-title">TowTraces</div>
                  <div class="sim-header-sub">Towed Vehicle Recovery</div>
                </div>
              </div>
              <span class="sim-tag-badge" style="background:rgba(16,185,129,0.18); color:#10b981; border:1px solid rgba(16,185,129,0.3);">
                Supabase &bull; GPS
              </span>
            </div>

            <!-- License Plate / VIN Search Input -->
            <div class="sim-card-box" style="margin-bottom:8px;">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
                <span style="font-size:0.68rem; color:#94a3b8;">License Plate / VIN Number</span>
                <span style="font-size:0.62rem; color:#10b981; font-weight:700;">CA Registered</span>
              </div>
              <div style="background:rgba(0,0,0,0.4); padding:8px 10px; border-radius:8px; display:flex; justify-content:space-between; align-items:center;">
                <span style="font-size:0.82rem; font-weight:800; color:#fff; font-family:monospace;" id="vinNumberDisplay">1HGBH41JXMN109186</span>
                <button style="background:#10b981; color:#0f172a; border:none; padding:4px 8px; border-radius:6px; font-weight:800; font-size:0.65rem; cursor:pointer;" onclick="simulateVINSearch()">Search</button>
              </div>
            </div>

            <!-- Yard Overview Card -->
            <div class="sim-card-box" id="towYardResultCard" style="background:linear-gradient(135deg, rgba(16,185,129,0.18), rgba(15,23,42,0.85)); border-color:rgba(16,185,129,0.35); padding:10px; margin-bottom:8px;">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
                <span style="font-size:0.75rem; font-weight:800; color:#10b981;">ABC Impound Yard &bull; Lot #4</span>
                <span style="font-size:0.65rem; color:#00f5a0; font-weight:800; background:rgba(0,245,160,0.15); padding:2px 6px; border-radius:6px;">Secured</span>
              </div>
              <div style="font-size:0.68rem; color:#cbd5e1; margin-bottom:4px;">
                Vehicle: 2022 Honda Accord &bull; Gray Sedan
              </div>
              <div style="font-size:0.65rem; color:#94a3b8; background:rgba(0,0,0,0.35); padding:6px 8px; border-radius:6px;">
                Release Desk: Open until 8:00 PM &bull; 4.2 miles away
              </div>
            </div>

            <!-- Route Telematics Tile -->
            <div class="sim-stats-grid" style="margin-bottom:8px;">
              <div class="sim-stat-tile">
                <span class="sim-stat-val" style="color:#00f5a0;">12 Min</span>
                <span class="sim-stat-lbl">Transit ETA</span>
              </div>
              <div class="sim-stat-tile">
                <span class="sim-stat-val" style="color:#38bdf8;">$185.00</span>
                <span class="sim-stat-lbl">Standard Fee</span>
              </div>
            </div>
          </div>

          <button class="sim-action-btn" style="background:linear-gradient(135deg, #059669, #10b981); color:#fff;" onclick="setSimulatorMode('store')">
            View Live Apple App Store Screenshots ↗
          </button>
        </div>
      \`;
      break;

    case "viralflight":
      screenHTML = \`
        <div class="proto-view-wrap">
          <div>
            <div class="sim-header">
              <div class="sim-header-left">
                <img src="assets/viralflight_icon.png" alt="Viral Flight" class="sim-header-icon" style="background:#fff;" />
                <div>
                  <div class="sim-header-title">Viral Flight IN</div>
                  <div class="sim-header-sub">Influencer Marketing Made Easy</div>
                </div>
              </div>
              <span class="sim-tag-badge" style="background:rgba(244,63,94,0.18); color:#f43f5e; border:1px solid rgba(244,63,94,0.3);">
                Brands &bull; Creators
              </span>
            </div>

            <!-- Work Mode Toggle Bar -->
            <div class="sim-card-box" style="padding:10px; margin-bottom:8px;">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <div>
                  <div style="font-size:0.8rem; font-weight:800; color:#fff;">Creator Work Mode</div>
                  <div style="font-size:0.65rem; color:#94a3b8;" id="workModeSubtitle">\${workModeActive ? "Accepting brand deals & reels" : "Standby mode"}</div>
                </div>
                <button id="btnToggleWorkMode" style="background:\${workModeActive ? '#00f5a0' : '#475569'}; color:#0f172a; border:none; padding:5px 12px; border-radius:12px; font-weight:900; font-size:0.7rem; cursor:pointer;" onclick="toggleWorkMode()">
                  \${workModeActive ? "ACTIVE [ON]" : "OFF"}
                </button>
              </div>
            </div>

            <!-- Matched Brand Campaign -->
            <div class="sim-card-box" style="background:linear-gradient(135deg, rgba(244,63,94,0.18), rgba(15,23,42,0.85)); border-color:rgba(244,63,94,0.35); padding:10px; margin-bottom:8px;">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
                <span style="font-size:0.75rem; font-weight:800; color:#fff;">Gaming Headset Reel Collab</span>
                <span style="font-size:0.65rem; color:#f43f5e; font-weight:800; background:rgba(244,63,94,0.2); padding:2px 6px; border-radius:6px;">Matched</span>
              </div>
              <div style="font-size:0.68rem; color:#cbd5e1; margin-bottom:6px;">
                Brand: Razer India &bull; Escrow Verified
              </div>
              <div style="display:flex; justify-content:space-between; align-items:center; background:rgba(0,0,0,0.35); padding:6px 8px; border-radius:6px;">
                <span style="font-size:0.82rem; font-weight:800; color:#00f5a0;">₹35,000 Budget</span>
                <button style="background:#f43f5e; color:#fff; border:none; padding:4px 10px; border-radius:6px; font-size:0.68rem; font-weight:800; cursor:pointer;" onclick="applyViralCampaign()">Apply Deal</button>
              </div>
            </div>

            <!-- Creator Stats Grid -->
            <div class="sim-stats-grid" style="margin-bottom:8px;">
              <div class="sim-stat-tile">
                <span class="sim-stat-val" style="color:#f43f5e;">84.2K</span>
                <span class="sim-stat-lbl">Followers Reach</span>
              </div>
              <div class="sim-stat-tile">
                <span class="sim-stat-val" style="color:#00f5a0;">4.8%</span>
                <span class="sim-stat-lbl">Engagement</span>
              </div>
            </div>
          </div>

          <button class="sim-action-btn" style="background:#f43f5e; color:#fff;" onclick="setSimulatorMode('store')">
            View Live App Store & Play Store Screens 📸
          </button>
        </div>
      \`;
      break;

    case "nvtusa":
      screenHTML = \`
        <div class="proto-view-wrap">
          <div>
            <div class="sim-header">
              <div class="sim-header-left">
                <img src="assets/nvtusa_icon.png" alt="NVT USA" class="sim-header-icon" style="background:#fff;" />
                <div>
                  <div class="sim-header-title">NVT USA</div>
                  <div class="sim-header-sub">Veterans Tournament Since 2015</div>
                </div>
              </div>
              <span class="sim-tag-badge" style="background:rgba(234,179,8,0.18); color:#eab308; border:1px solid rgba(234,179,8,0.3);">
                Live Brackets
              </span>
            </div>

            <!-- Tournament Match Scoreboard Card -->
            <div class="sim-card-box" style="background:linear-gradient(135deg, rgba(30,58,138,0.5), rgba(15,23,42,0.85)); border-color:rgba(234,179,8,0.4); padding:10px; text-align:center; margin-bottom:8px;">
              <div style="font-size:0.68rem; color:#eab308; font-weight:800; letter-spacing:0.5px; margin-bottom:6px;">
                🏆 CHAMPIONSHIP FINAL &bull; FIELD 10 &bull; LIVE
              </div>
              <div style="display:flex; justify-content:space-around; align-items:center; margin-bottom:6px;">
                <div>
                  <div style="font-size:0.8rem; font-weight:800; color:#fff;">RALEIGH</div>
                  <div style="font-size:1.5rem; font-weight:900; color:#38bdf8;" id="nvtHomeScore">\${nvtHomeScore}</div>
                </div>
                <div style="font-size:0.75rem; color:#64748b; font-weight:800;">VS</div>
                <div>
                  <div style="font-size:0.8rem; font-weight:800; color:#fff;">RICHMOND</div>
                  <div style="font-size:1.5rem; font-weight:900; color:#eab308;" id="nvtAwayScore">\${nvtAwayScore}</div>
                </div>
              </div>
              <button style="background:rgba(234,179,8,0.2); border:1px solid rgba(234,179,8,0.4); color:#eab308; padding:3px 10px; border-radius:6px; font-size:0.65rem; font-weight:800; cursor:pointer;" onclick="simulateNVTGoal()">
                ⚽ Simulate Match Goal
              </button>
            </div>

            <!-- Tournament Matrix Specs -->
            <div class="sim-stats-grid" style="margin-bottom:8px;">
              <div class="sim-stat-tile">
                <span class="sim-stat-val" style="color:#eab308;">54</span>
                <span class="sim-stat-lbl">Clubs Competing</span>
              </div>
              <div class="sim-stat-tile">
                <span class="sim-stat-val" style="color:#38bdf8;">32</span>
                <span class="sim-stat-lbl">US States</span>
              </div>
            </div>
          </div>

          <button class="sim-action-btn" style="background:#eab308; color:#0f172a;" onclick="setSimulatorMode('store')">
            View Live App Store Tournament Screens ↗
          </button>
        </div>
      \`;
      break;

    case "altrix":
      screenHTML = \`
        <div class="proto-view-wrap">
          <div>
            <div class="sim-header">
              <div class="sim-header-left">
                <img src="assets/altrix_icon.png" alt="Altrix" class="sim-header-icon" style="background:#1e1b4b;" />
                <div>
                  <div class="sim-header-title">Altrix</div>
                  <div class="sim-header-sub">Healthcare & Video Consultations</div>
                </div>
              </div>
              <span class="sim-tag-badge" style="background:rgba(99,102,241,0.18); color:#6366f1; border:1px solid rgba(99,102,241,0.3);">
                Play Store Live
              </span>
            </div>

            <!-- Doctor Card -->
            <div class="sim-card-box" style="background:linear-gradient(135deg, rgba(99,102,241,0.2), rgba(15,23,42,0.9)); border-color:rgba(99,102,241,0.35); padding:10px; margin-bottom:8px;">
              <div style="display:flex; align-items:center; gap:8px; margin-bottom:6px;">
                <div style="width:34px; height:34px; border-radius:50%; background:#6366f1; display:flex; align-items:center; justify-content:center; font-size:1rem;">🩺</div>
                <div>
                  <div style="font-size:0.78rem; font-weight:800; color:#fff;">Dr. Jennifer Vance</div>
                  <div style="font-size:0.67rem; color:#a5b4fc;">Cardiology Specialist &bull; 4.9 &starf;</div>
                </div>
              </div>

              <div style="background:rgba(0,0,0,0.35); padding:6px 8px; border-radius:8px; font-size:0.68rem; margin-bottom:8px;">
                <div style="color:#cbd5e1;">Today at 5:00 PM &bull; Confirmed</div>
                <div style="color:#00f5a0; font-weight:700; margin-top:2px;" id="altrixCallStatus">
                  \${callActive ? \`📞 Call Connected: 00:\${callSeconds < 10 ? '0' + callSeconds : callSeconds}\` : "Real-Time Audio Calling Ready"}
                </div>
              </div>

              <div style="display:flex; gap:6px;">
                <button style="flex:1; background:#6366f1; color:#fff; border:none; padding:6px; border-radius:6px; font-size:0.68rem; font-weight:800; cursor:pointer;" onclick="toggleAltrixCall()">
                  \${callActive ? "End Audio Call" : "📞 Audio Call"}
                </button>
                <button style="flex:1; background:#00f5a0; color:#0f172a; border:none; padding:6px; border-radius:6px; font-size:0.68rem; font-weight:800; cursor:pointer;" onclick="alert('Connecting to Virtual Video Consult...')">
                  📹 Video Call
                </button>
              </div>
            </div>

            <!-- Daily Wellness Vitals -->
            <div style="font-size:0.72rem; font-weight:800; color:#fff; margin-bottom:4px;">Daily Wellness Vitals</div>
            <div class="sim-stats-grid" style="grid-template-columns:repeat(3, 1fr); gap:6px; margin-bottom:8px;">
              <div class="sim-stat-tile" style="padding:6px; text-align:center;">
                <span class="sim-stat-val" style="color:#00f5a0; font-size:0.85rem;">Low</span>
                <span class="sim-stat-lbl">Stress</span>
              </div>
              <div class="sim-stat-tile" style="padding:6px; text-align:center;">
                <span class="sim-stat-val" style="color:#38bdf8; font-size:0.85rem;">Optimal</span>
                <span class="sim-stat-lbl">Mood</span>
              </div>
              <div class="sim-stat-tile" style="padding:6px; text-align:center;">
                <span class="sim-stat-val" style="color:#a855f7; font-size:0.85rem;">7h 45m</span>
                <span class="sim-stat-lbl">Sleep</span>
              </div>
            </div>
          </div>

          <button class="sim-action-btn" style="background:linear-gradient(135deg, #4f46e5, #6366f1); color:#fff;" onclick="setSimulatorMode('store')">
            View Live Google Play Store Screens ↗
          </button>
        </div>
      \`;
      break;

    case "galaxy":
      screenHTML = \`
        <div class="proto-view-wrap">
          <div>
            <div class="sim-header">
              <div class="sim-header-left">
                <img src="assets/galaxy_icon.png" alt="Galaxy Advertisers" class="sim-header-icon" style="background:#000;" />
                <div>
                  <div class="sim-header-title">Galaxy Advertisers</div>
                  <div class="sim-header-sub">Haridwar DOOH & Field GPS</div>
                </div>
              </div>
              <span class="sim-tag-badge" style="background:rgba(139,92,246,0.18); color:#8b5cf6; border:1px solid rgba(139,92,246,0.3);">
                Haridwar Fleet
              </span>
            </div>

            <!-- Billboard Site Card -->
            <div class="sim-card-box" style="background:linear-gradient(135deg, rgba(139,92,246,0.2), rgba(15,23,42,0.9)); border-color:rgba(139,92,246,0.35); padding:10px; margin-bottom:8px;">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
                <span style="font-size:0.75rem; font-weight:800; color:#fff;">Site #HW-108: Ranipur More</span>
                <span style="font-size:0.65rem; color:#00f5a0; font-weight:800; background:rgba(0,245,160,0.15); padding:2px 6px; border-radius:6px;">Active LED</span>
              </div>
              <div style="font-size:0.68rem; color:#cbd5e1; margin-bottom:4px;">Dimensions: 40x20 ft &bull; Bypass Highway Corridor</div>
              <div style="font-size:0.65rem; color:#94a3b8; background:rgba(0,0,0,0.35); padding:5px 8px; border-radius:6px;">
                Haridwar Client Campaign Live &bull; 98.4% Uptime
              </div>
            </div>

            <!-- Field Worker Live GPS Tracking Tile -->
            <div class="sim-card-box" style="padding:10px; margin-bottom:8px;">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
                <span style="font-size:0.74rem; font-weight:800; color:#fff;">Field Tech #07 Live Stream</span>
                <span class="badge-pulse"></span>
              </div>
              <div style="font-size:0.68rem; color:#cbd5e1; font-family:monospace;">
                GPS: 29.9457° N, 78.1642° E &bull; Accuracy: &plusmn;3m
              </div>
              <div style="font-size:0.66rem; color:#00f5a0; margin-top:4px;">
                &check; Geotagged camera photo proof verified with EXIF
              </div>
            </div>
          </div>

          <button class="sim-action-btn" style="background:#8b5cf6; color:#fff;" onclick="setSimulatorMode('store')">
            View Live Google Play Store Screens ↗
          </button>
        </div>
      \`;
      break;

    case "bid4style":
      screenHTML = \`
        <div class="proto-view-wrap">
          <div>
            <div class="sim-header">
              <div class="sim-header-left">
                <img src="assets/bid4style_icon.png" alt="Bid4Style" class="sim-header-icon" style="background:#fff;" />
                <div>
                  <div class="sim-header-title">Bid4Style</div>
                  <div class="sim-header-sub">Fashion Bidding & E-Commerce</div>
                </div>
              </div>
              <span class="sim-tag-badge" style="background:rgba(236,72,153,0.18); color:#ec4899; border:1px solid rgba(236,72,153,0.3);">
                Cart &bull; Live
              </span>
            </div>

            <!-- Flash Auction Card -->
            <div class="sim-card-box" style="background:linear-gradient(135deg, rgba(236,72,153,0.2), rgba(15,23,42,0.9)); border-color:rgba(236,72,153,0.35); padding:10px; margin-bottom:8px;">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
                <span style="font-size:0.75rem; font-weight:800; color:#fff;">⚡ Flash Auction Live</span>
                <span style="font-size:0.65rem; color:#ec4899; font-weight:800; background:rgba(236,72,153,0.2); padding:2px 6px; border-radius:6px;">Ends in 12m 45s</span>
              </div>
              <div style="font-size:0.68rem; color:#cbd5e1;">CyberRun Sneaker V2 &bull; Limited Drop</div>
              <div style="display:flex; justify-content:space-between; align-items:center; margin-top:6px;">
                <span style="font-size:0.95rem; font-weight:900; color:#00f5a0;" id="bidPriceDisplay">₹\${currentBidPrice.toLocaleString()}</span>
                <button style="background:#ec4899; border:none; color:#fff; font-size:0.68rem; font-weight:800; padding:5px 12px; border-radius:6px; cursor:pointer;" onclick="placeBidStyle()">Place Bid (+₹500)</button>
              </div>
            </div>

            <!-- Cart State Management Tile -->
            <div class="sim-card-box" style="padding:10px; margin-bottom:8px;">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <div>
                  <div style="font-size:0.75rem; font-weight:800; color:#fff;">Riverpod Cart State</div>
                  <div style="font-size:0.67rem; color:#94a3b8;" id="cartCountDisplay">\${cartCount} items &bull; Role-based Admin/User</div>
                </div>
                <span style="font-size:0.75rem; color:#00f5a0; font-weight:800;">₹18,450 Total</span>
              </div>
            </div>
          </div>

          <button class="sim-action-btn" style="background:#ec4899; color:#fff;" onclick="setSimulatorMode('store')">
            View Live Flutter UI Screen 📸
          </button>
        </div>
      \`;
      break;
  }

  container.innerHTML = screenHTML;

  if (app.simulatorType === "marispeak") {
    setupPTTEvents();
  }
}

// Interactive Helper Functions
window.simulateVINSearch = function() {
  const card = document.getElementById("towYardResultCard");
  const vin = document.getElementById("vinNumberDisplay");
  if (card && vin) {
    card.style.opacity = "0.5";
    setTimeout(() => {
      card.style.opacity = "1";
      alert("Supabase Realtime Query: Vehicle found in Lot #4! Desk open until 8 PM.");
    }, 300);
  }
};

window.toggleWorkMode = function() {
  workModeActive = !workModeActive;
  const btn = document.getElementById("btnToggleWorkMode");
  const sub = document.getElementById("workModeSubtitle");
  if (btn) {
    btn.innerText = workModeActive ? "ACTIVE [ON]" : "OFF";
    btn.style.background = workModeActive ? "#00f5a0" : "#475569";
  }
  if (sub) {
    sub.innerText = workModeActive ? "Accepting brand deals & reels" : "Standby mode";
  }
};

window.applyViralCampaign = function() {
  alert("✓ Application submitted! Escrow contract locked for ₹35,000 via Viral Flight.");
};

window.simulateNVTGoal = function() {
  nvtHomeScore++;
  const el = document.getElementById("nvtHomeScore");
  if (el) {
    el.innerText = nvtHomeScore;
    el.style.transform = "scale(1.3)";
    setTimeout(() => el.style.transform = "scale(1)", 300);
  }
};

window.toggleAltrixCall = function() {
  callActive = !callActive;
  const status = document.getElementById("altrixCallStatus");
  if (callActive) {
    callSeconds = 0;
    playPTTChirp(true);
    callInterval = setInterval(() => {
      callSeconds++;
      if (status) status.innerText = \`📞 Call Connected: 00:\${callSeconds < 10 ? '0' + callSeconds : callSeconds}\`;
    }, 1000);
  } else {
    clearInterval(callInterval);
    playPTTChirp(false);
    if (status) status.innerText = "Real-Time Audio Calling Ready";
  }
  renderSimulatorContent("altrix");
};

window.placeBidStyle = function() {
  currentBidPrice += 500;
  cartCount++;
  const priceEl = document.getElementById("bidPriceDisplay");
  const cartEl = document.getElementById("cartCountDisplay");
  if (priceEl) priceEl.innerText = \`₹\${currentBidPrice.toLocaleString()}\`;
  if (cartEl) cartEl.innerText = \`\${cartCount} items • Role-based Admin/User\`;
  alert(\`✓ Bid placed! Highest bid updated to ₹\${currentBidPrice.toLocaleString()}\`);
};

function setupPTTEvents() {
  const pttBtn = document.getElementById("simPTTButton");
  if (!pttBtn) return;

  const startTransmit = (e) => {
    e.preventDefault();
    if (isTransmitting) return;
    isTransmitting = true;
    pttBtn.classList.add("transmitting");
    const statusText = document.getElementById("pttStatusText");
    if (statusText) statusText.innerText = "Transmitting voice stream to boats on Channel 16...";
    const btnSpan = pttBtn.querySelector("span");
    if (btnSpan) btnSpan.innerText = "TRANSMITTING";
    playPTTChirp(true);
  };

  const stopTransmit = (e) => {
    e.preventDefault();
    if (!isTransmitting) return;
    isTransmitting = false;
    pttBtn.classList.remove("transmitting");
    const statusText = document.getElementById("pttStatusText");
    if (statusText) statusText.innerText = "Press & Hold button for instant boat-to-boat audio";
    const btnSpan = pttBtn.querySelector("span");
    if (btnSpan) btnSpan.innerText = "HOLD TO TALK";
    playPTTChirp(false);
  };

  pttBtn.addEventListener("mousedown", startTransmit);
  window.addEventListener("mouseup", stopTransmit);
  pttBtn.addEventListener("touchstart", startTransmit);
  window.addEventListener("touchend", stopTransmit);
}

function setupPhoneSimulator() {
  renderSimulatorContent(activeAppKey);

  const tabButtons = document.querySelectorAll(".phone-tab-btn");
  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      tabButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const appKey = btn.dataset.app;
      activeAppKey = appKey;
      renderSimulatorContent(appKey);
    });
  });
}`;

const newContent = content.substring(0, startIndex) + replacementCode + content.substring(endIndex + targetEnd.length);
fs.writeFileSync('script.js', newContent);
console.log("Successfully updated script.js!");
