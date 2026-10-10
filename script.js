// Portfolio Data for Vishal Choudhary - Flutter Developer (1.5 Years Exp)
const portfolioData = {
  profile: {
    name: "Vishal Choudhary",
    title: "Flutter Developer",
    experience: "1.5 Years Experience",
    location: "Kangra, Himachal Pradesh",
    email: "vc46320@gmail.com",
    phone: "+91 7591033165",
    github: "https://github.com",
    linkedin: "https://linkedin.com"
  },
  apps: {
    marispeak: {
      id: "marispeak",
      name: "MariSpeaks",
      tagline: "Instant Boat-to-Boat Push-to-Talk Voice & Navigation",
      category: "realtime",
      company: "Vision Vivante Private Limited",
      iconType: "marispeak_custom",
      iconImage: "assets/marispeak_icon.png",
      badgeColor: "#0284c7",
      status: "LIVE on App Store & Play Store",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.pttcommunicate.pttmessenger&pcampaignid=web_share",
      appStoreUrl: "https://apps.apple.com/in/app/marispeak/id6745493561",
      description: "Real-time Push-to-Talk (PTT) communication mobile application for boating adventures, fleet communication, and instant boat-to-boat voice messaging. Engineered with WebSocket-based audio streaming, Firebase Authentication, PushKit, CallKit, APNs, and FCM for background voice handling.",
      architecture: "WebSocket binary audio streaming, CallKit & PushKit background wakeups, jitter buffer optimization, audio routing with Flutter Audio Service, and real-time boat navigation tracking.",
      tags: ["Flutter", "Dart", "WebSocket", "Push-to-Talk", "PushKit", "CallKit", "Firebase", "APNs / FCM", "Riverpod", "GetX"],
      simulatorType: "marispeak"
    },
    towtraces: {
      id: "towtraces",
      name: "TowTraces",
      tagline: "Find Your Towed Vehicle Instantly & Yard Telematics",
      category: "baas",
      company: "Vision Vivante Private Limited",
      iconType: "towtraces_custom",
      iconImage: "assets/towtraces_icon.png",
      badgeColor: "#10b981",
      status: "LIVE on Apple App Store",
      playStoreUrl: "https://apps.apple.com/in/app/towtraces/id6760699884",
      appStoreUrl: "https://apps.apple.com/in/app/towtraces/id6760699884",
      description: "Production vehicle towing, yard overview, and recovery mobile application. Allows vehicle owners to find towed vehicles instantly by License Plate or VIN number, trace yard status, and track towing requests with real-time location updates. Integrated using Supabase and REST APIs.",
      architecture: "Supabase (PostgreSQL, Realtime, Storage), Google Maps GPS navigation, VIN barcode/license plate lookup API, secure user authentication.",
      tags: ["Flutter", "Supabase", "PostgreSQL", "Google Maps", "GPS Tracking", "VIN Lookup", "REST APIs", "GetX"],
      simulatorType: "towtraces"
    },
    viralflight: {
      id: "viralflight",
      name: "Viral Flight IN",
      tagline: "Influencer Marketing Made Easy — Brands & Creators",
      category: "enterprise",
      company: "Vision Vivante Private Limited",
      iconType: "viralflight_custom",
      iconImage: "assets/viralflight_icon.png",
      badgeColor: "#f43f5e",
      status: "LIVE on App Store & Play Store",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.viralflight.app&pcampaignid=web_share",
      appStoreUrl: "https://apps.apple.com/in/app/viral-flight-in/id6798629583",
      description: "Dual-sided influencer marketing platform connecting brands, agencies, and social media creators. Allows creators to join, build profiles, unlock work mode, and get hired for matched campaigns with contract tracking and promotion analytics.",
      architecture: "Role-based authentication (Brand / Agency / Creator), multi-tab campaign discovery, Instagram API integrations, push notifications, and production release on both major app stores.",
      tags: ["Flutter", "iOS App Store", "Google Play Store", "Campaign Matching", "Role-Based Auth", "REST APIs", "FCM"],
      simulatorType: "viralflight"
    },
    nvtusa: {
      id: "nvtusa",
      name: "NVT USA",
      tagline: "National Veterans Tournament USA Since 2015",
      category: "realtime",
      company: "Vision Vivante Private Limited",
      iconType: "nvtusa_custom",
      iconImage: "assets/nvtusa_icon.png",
      badgeColor: "#eab308",
      status: "LIVE on App Store & Play Store",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.nvtusa.app",
      appStoreUrl: "https://apps.apple.com/in/app/nvt-usa/id6795293003",
      description: "Official mobile application for the National Veterans Tournament USA. Empowers sports fans and teams to access live match schedules, brackets, standings, club directories across 32 states, and instant score notifications.",
      architecture: "API-driven high-performance match schedules, Google Maps stadium guides, push notifications for match kickoffs, responsive iOS & Android UI.",
      tags: ["Flutter", "REST APIs", "Google Maps", "Live Schedules", "Tournament Brackets", "Push Notifications", "Riverpod"],
      simulatorType: "nvtusa"
    },
    altrix: {
      id: "altrix",
      name: "Altrix",
      tagline: "Healthcare Appointment Booking & Telemedicine",
      category: "cloud",
      company: "Vision Vivante Private Limited",
      iconType: "altrix_custom",
      iconImage: "assets/altrix_icon.png",
      badgeColor: "#6366f1",
      status: "LIVE on Google Play Store",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.altrixs.altrixs&pcampaignid=web_share",
      appStoreUrl: "https://play.google.com/store/apps/details?id=com.altrixs.altrixs&pcampaignid=web_share",
      description: "Comprehensive healthcare and patient appointment booking application. Features daily wellness check-ins, doctor appointment scheduling, real-time doctor-patient chat, and encrypted audio calling capabilities.",
      architecture: "Real-time chat protocol, audio calling integration, patient scheduling engine, secure medical record storage, and backend REST APIs.",
      tags: ["Flutter", "Audio Calling", "Real-Time Chat", "Doctor Booking", "REST APIs", "Push Notifications", "GetX"],
      simulatorType: "altrix"
    },
    galaxyadvertisers: {
      id: "galaxyadvertisers",
      name: "Galaxy Advertisers",
      tagline: "Haridwar Billboard DOOH & Field Workforce GPS",
      category: "enterprise",
      company: "Vision Vivante Private Limited",
      iconType: "galaxy_custom",
      iconImage: "assets/galaxy_icon.png",
      badgeColor: "#8b5cf6",
      status: "LIVE on Google Play Store",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.mindaptix.galaxyadvertisers&pcampaignid=web_share",
      appStoreUrl: "https://play.google.com/store/apps/details?id=com.mindaptix.galaxyadvertisers&pcampaignid=web_share",
      description: "Enterprise billboard advertising network and field operations app built for Galaxy Advertisers in Haridwar. Clients discover prime billboard sites while administrators track field maintenance workers in real-time with GPS and photo proof audits.",
      architecture: "Background GPS location tracking, geotagged camera audits, billboard inventory management, and offline cache synchronization.",
      tags: ["Flutter", "Background GPS", "Haridwar Billboards", "Camera EXIF", "Field Audits", "REST APIs"],
      simulatorType: "galaxy"
    },
    bid4style: {
      id: "bid4style",
      name: "Bid4Style",
      tagline: "E-Commerce Fashion Marketplace & Cart Management",
      category: "enterprise",
      company: "Grow Tech / Personal Project",
      iconType: "bid4style_custom",
      iconImage: "assets/bid4style_icon.png",
      badgeColor: "#ec4899",
      status: "Featured Project",
      playStoreUrl: "#",
      appStoreUrl: "#",
      description: "E-commerce mobile application built using Flutter for browsing fashion products and managing checkout and cart flows. Implemented role-based authentication for customers and admins, with smooth product filtering and catalog management.",
      architecture: "Role-based authentication, cart state management with Riverpod, product-management and order workflows connected via backend REST APIs.",
      tags: ["Flutter", "Dart", "E-Commerce", "Cart State Management", "Riverpod", "REST APIs"],
      simulatorType: "bid4style"
    }
  }
};

// SVG / Image Icon Generator for authentic app icons matching screenshots
function getAppIconSvg(iconType, iconImage) {
  if (iconImage) {
    let bg = "transparent";
    let pad = "0px";
    if (iconType === "bid4style_custom") {
      bg = "#ffffff";
      pad = "5px";
    } else if (iconType === "viralflight_custom") {
      bg = "#ffffff";
      pad = "3px";
    } else if (iconType === "galaxy_custom") {
      bg = "#000000";
    }
    return `<img src="${iconImage}" alt="App Icon" class="app-svg-icon" style="width:100%; height:100%; object-fit:contain; border-radius:18px; background:${bg}; padding:${pad};" />`;
  }
  switch (iconType) {
    case "sail":
      // Marispeak nautical sails on blue
      return `
        <svg viewBox="0 0 100 100" class="app-svg-icon" style="background: linear-gradient(135deg, #0284c7, #38bdf8); border-radius: 18px; padding: 14px;">
          <!-- Left triangle sail -->
          <polygon points="50,15 22,82 50,82" fill="#ffffff" />
          <!-- Right triangle sail -->
          <polygon points="56,28 78,82 56,82" fill="#e0f2fe" />
        </svg>
      `;
    case "towtruck":
      // TowTraces teal truck icon
      return `
        <svg viewBox="0 0 100 100" class="app-svg-icon" style="background: linear-gradient(135deg, #059669, #10b981); border-radius: 18px; padding: 14px;">
          <path d="M20 40 L50 40 L65 52 L80 52 C84 52 86 55 86 58 L86 70 C86 72 84 74 82 74 L78 74 C78 70 74 66 70 66 C66 66 62 70 62 74 L38 74 C38 70 34 66 30 66 C26 66 22 70 22 74 L18 74 C16 74 14 72 14 70 L14 46 C14 42 17 40 20 40 Z" fill="none" stroke="#ffffff" stroke-width="6" stroke-linejoin="round"/>
          <circle cx="30" cy="74" r="6" fill="#ffffff"/>
          <circle cx="70" cy="74" r="6" fill="#ffffff"/>
          <path d="M50 42 L50 56 L64 56" fill="none" stroke="#ffffff" stroke-width="4"/>
        </svg>
      `;
    case "propeller":
      // Viral Flight IN propeller logo
      return `
        <div class="app-svg-icon" style="background: #ffffff; border-radius: 18px; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 6px; border: 2px solid #e2e8f0;">
          <svg viewBox="0 0 100 100" width="46" height="46">
            <!-- Propeller blades -->
            <ellipse cx="50" cy="50" rx="9" ry="42" transform="rotate(45 50 50)" fill="#1e293b"/>
            <ellipse cx="50" cy="50" rx="9" ry="42" transform="rotate(-45 50 50)" fill="#334155"/>
            <circle cx="50" cy="50" r="14" fill="#0f172a" stroke="#ffffff" stroke-width="3"/>
          </svg>
          <span style="font-size: 8px; font-weight: 900; color: #0f172a; letter-spacing: -0.3px; margin-top: -2px;">VIRAL FLIGHT</span>
        </div>
      `;
    case "nvtbadge":
      // NVT USA Soccer / Sports Crest
      return `
        <svg viewBox="0 0 100 100" class="app-svg-icon" style="background: radial-gradient(circle, #1e3a8a, #0f172a); border-radius: 18px; padding: 6px;">
          <circle cx="50" cy="46" r="30" fill="#f8fafc" stroke="#dc2626" stroke-width="3"/>
          <path d="M50 22 L60 36 L54 50 L46 50 L40 36 Z" fill="#2563eb"/>
          <path d="M50 58 L58 48 L42 48 Z" fill="#059669"/>
          <!-- Banner -->
          <rect x="12" y="66" width="76" height="18" rx="4" fill="#eab308" stroke="#ca8a04" stroke-width="1"/>
          <text x="50" y="79" font-size="11" font-weight="900" text-anchor="middle" fill="#0f172a">NVT USA</text>
        </svg>
      `;
    case "healthcross":
      return `
        <svg viewBox="0 0 100 100" class="app-svg-icon" style="background: linear-gradient(135deg, #4f46e5, #7c3aed); border-radius: 18px; padding: 12px;">
          <path d="M42 20 H58 V42 H80 V58 H58 V80 H42 V58 H20 V42 H42 Z" fill="#ffffff" />
          <polyline points="26,50 38,50 44,38 52,62 58,50 74,50" fill="none" stroke="#00f5a0" stroke-width="4" stroke-linecap="round"/>
        </svg>
      `;
    case "billboard":
      return `
        <svg viewBox="0 0 100 100" class="app-svg-icon" style="background: linear-gradient(135deg, #7c3aed, #a855f7); border-radius: 18px; padding: 12px;">
          <rect x="15" y="20" width="70" height="42" rx="4" fill="#ffffff"/>
          <rect x="20" y="25" width="60" height="32" rx="2" fill="#1e1b4b"/>
          <line x1="34" y1="62" x2="34" y2="84" stroke="#ffffff" stroke-width="6"/>
          <line x1="66" y1="62" x2="66" y2="84" stroke="#ffffff" stroke-width="6"/>
          <circle cx="50" cy="41" r="8" fill="#a855f7"/>
        </svg>
      `;
    case "shopping":
      return `
        <svg viewBox="0 0 100 100" class="app-svg-icon" style="background: linear-gradient(135deg, #ec4899, #f43f5e); border-radius: 18px; padding: 14px;">
          <path d="M26 35 L74 35 L68 76 L32 76 Z" fill="none" stroke="#ffffff" stroke-width="6"/>
          <path d="M38 35 C38 24 62 24 62 35" fill="none" stroke="#ffffff" stroke-width="6"/>
        </svg>
      `;
    case "delivery":
      return `
        <svg viewBox="0 0 100 100" class="app-svg-icon" style="background: linear-gradient(135deg, #f97316, #ea580c); border-radius: 18px; padding: 14px;">
          <circle cx="50" cy="50" r="32" fill="none" stroke="#ffffff" stroke-width="6"/>
          <polygon points="44,36 64,50 44,64" fill="#ffffff"/>
        </svg>
      `;
    default:
      return `<div style="font-size:2rem;">📱</div>`;
  }
}

// Audio Synthesizer for Push-To-Talk Walkie Talkie Chirps
let audioCtx = null;
function getAudioContext() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  return audioCtx;
}

function playPTTChirp(isStart = true) {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    const now = ctx.currentTime;
    if (isStart) {
      osc.type = "sine";
      osc.frequency.setValueAtTime(850, now);
      osc.frequency.exponentialRampToValueAtTime(1300, now + 0.07);
      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.11);
      osc.start(now);
      osc.stop(now + 0.11);
    } else {
      osc.type = "square";
      osc.frequency.setValueAtTime(650, now);
      osc.frequency.exponentialRampToValueAtTime(320, now + 0.08);
      gain.gain.setValueAtTime(0.14, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.09);
      osc.start(now);
      osc.stop(now + 0.09);
    }
  } catch (e) {
    console.log("Audio waiting for user gesture", e);
  }
}

let activeAppKey = "marispeak";
let isTransmitting = false;

document.addEventListener("DOMContentLoaded", () => {
  renderProjectsGrid("all");
  setupFilterTabs();
  setupPhoneSimulator();
  setupModalHandlers();
  setupContactForm();
});

// Render Simulator Screen
function renderSimulatorContent(appKey) {
  const container = document.getElementById("phoneAppContent");
  if (!container) return;

  const app = portfolioData.apps[appKey] || portfolioData.apps.marispeak;
  let screenHTML = "";

  switch (app.simulatorType) {
    case "marispeak":
      screenHTML = `
        <div class="ptt-screen-view">
          <div>
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <div style="display:flex; align-items:center; gap:8px;">
                <img src="assets/marispeak_icon.png" alt="MariSpeaks" style="width:30px; height:30px; border-radius:8px; object-fit:contain;" />
                <div>
                  <div style="font-weight:800; font-size:1.15rem; color:#fff; line-height:1.1;">MariSpeaks</div>
                  <div style="font-size:0.7rem; color:#38bdf8;">Boating Adventures & PTT</div>
                </div>
              </div>
              <span style="font-size:0.72rem; color:#38bdf8; background:rgba(56,189,248,0.15); padding:3px 8px; border-radius:12px; font-weight:700;">WebSocket Live</span>
            </div>
            
            <div class="ptt-channel-badge">
              <span class="badge-pulse"></span>
              CHANNEL 16 &bull; MARINA CALLING
            </div>
            <div style="font-size:0.72rem; color:#94a3b8; margin-top:4px;">PushKit & CallKit Active &bull; 12 Vessels Listening</div>
          </div>

          <div class="ptt-main-circle-wrap">
            <button id="simPTTButton" class="ptt-btn ${isTransmitting ? 'transmitting' : ''}">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
                <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                <line x1="12" y1="19" x2="12" y2="23"/>
                <line x1="8" y1="23" x2="16" y2="23"/>
              </svg>
              <span>${isTransmitting ? "TRANSMITTING" : "HOLD TO TALK"}</span>
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
            <div style="font-size:0.72rem; color:#94a3b8; margin-top:8px;" id="pttStatusText">
              ${isTransmitting ? "Broadcasting voice to Marina Channel..." : "Press & Hold button for instant boat-to-boat audio"}
            </div>
          </div>

          <div style="background:rgba(255,255,255,0.04); padding:10px 12px; border-radius:12px; border:1px solid rgba(255,255,255,0.08); font-size:0.72rem;">
            <div style="display:flex; justify-content:space-between; color:#94a3b8; margin-bottom:3px;">
              <span>Audio Codec: Low-Latency PCM</span>
              <span style="color:#00f5a0; font-weight:700;">14ms Ping</span>
            </div>
            <div style="color:#cbd5e1; font-family:monospace;">
              &check; Firebase Auth + APNs/FCM Background Service
            </div>
          </div>
        </div>
      `;
      break;

    case "towtraces":
      screenHTML = `
        <div style="height:100%; display:flex; flex-direction:column; justify-content:space-between;">
          <div>
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <div style="display:flex; align-items:center; gap:8px;">
                <img src="assets/towtraces_icon.png" alt="TowTraces" style="width:30px; height:30px; border-radius:8px; object-fit:contain;" />
                <div>
                  <div style="font-weight:800; font-size:1.15rem; color:#fff; line-height:1.1;">TowTraces</div>
                  <div style="font-size:0.7rem; color:#10b981;">Towed Vehicle Recovery</div>
                </div>
              </div>
              <span style="font-size:0.7rem; color:#10b981; background:rgba(16,185,129,0.15); padding:3px 8px; border-radius:12px; font-weight:700;">iOS App Store</span>
            </div>
          </div>

          <!-- Search Input Bar Preview -->
          <div style="background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1); border-radius:12px; padding:10px 12px; margin-top:10px;">
            <div style="font-size:0.7rem; color:#94a3b8; margin-bottom:4px;">License Plate / VIN Number</div>
            <div style="font-size:0.85rem; font-weight:700; color:#fff; font-family:monospace;">1HGBH41JXMN109186</div>
          </div>

          <!-- Yard Overview Mock -->
          <div style="background:rgba(255,255,255,0.04); border:1px solid rgba(16,185,129,0.3); border-radius:14px; padding:12px;">
            <div style="font-size:0.8rem; font-weight:700; color:#10b981; margin-bottom:6px;">ABC Towing Yard &bull; Lot #4</div>
            <div style="display:flex; justify-content:space-between; font-size:0.75rem; color:#cbd5e1; margin-bottom:6px;">
              <span>Towed Vehicle Status:</span>
              <span style="color:#00f5a0; font-weight:700;">Secured in Yard</span>
            </div>
            <div style="font-size:0.7rem; color:#94a3b8;">Location: 4.2 miles away &bull; Release Desk Open</div>
          </div>

          <button style="background:linear-gradient(135deg, #059669, #10b981); color:#fff; border:none; padding:10px; border-radius:10px; font-weight:700; font-size:0.78rem; cursor:pointer;" onclick="openStoreModal('towtraces')">
            View Live on Apple App Store ↗
          </button>
        </div>
      `;
      break;

    case "viralflight":
      screenHTML = `
        <div style="height:100%; display:flex; flex-direction:column; justify-content:space-between;">
          <div>
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <div style="display:flex; align-items:center; gap:8px;">
                <img src="assets/viralflight_icon.png" alt="Viral Flight" style="width:30px; height:30px; border-radius:8px; object-fit:contain; background:#fff;" />
                <div>
                  <div style="font-weight:800; font-size:1.15rem; color:#fff; line-height:1.1;">Viral Flight IN</div>
                  <div style="font-size:0.7rem; color:#f43f5e;">Influencer Marketing</div>
                </div>
              </div>
              <span style="font-size:0.7rem; color:#f43f5e; background:rgba(244,63,94,0.15); padding:3px 8px; border-radius:12px; font-weight:700;">App & Play Store</span>
            </div>
          </div>

          <!-- Creator Work Mode Mock -->
          <div style="background:rgba(255,255,255,0.05); border:1px solid rgba(244,63,94,0.3); border-radius:14px; padding:14px; margin:10px 0;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
              <div>
                <div style="font-weight:800; color:#fff; font-size:0.85rem;">Work Mode Active</div>
                <div style="font-size:0.7rem; color:#94a3b8;">Open for Brand Collabs</div>
              </div>
              <span style="background:#00f5a0; color:#0f172a; font-weight:800; font-size:0.65rem; padding:3px 8px; border-radius:10px;">ON</span>
            </div>
            <div style="background:rgba(0,0,0,0.3); padding:8px; border-radius:8px; font-size:0.72rem; color:#cbd5e1;">
              <strong>Matched Campaign:</strong> Tech & Gaming Reel<br>
              <span style="color:#f43f5e; font-weight:700;">Budget: ₹35,000 &bull; Agency Approved</span>
            </div>
          </div>

          <div style="display:flex; gap:8px;">
            <button style="flex:1; background:#f43f5e; color:#fff; border:none; padding:9px; border-radius:8px; font-size:0.75rem; font-weight:700; cursor:pointer;" onclick="openStoreModal('viralflight')">
              Store Links ↗
            </button>
          </div>
        </div>
      `;
      break;

    case "nvtusa":
      screenHTML = `
        <div style="height:100%; display:flex; flex-direction:column; justify-content:space-between;">
          <div>
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <div style="display:flex; align-items:center; gap:8px;">
                <img src="assets/nvtusa_icon.png" alt="NVT USA" style="width:30px; height:30px; border-radius:8px; object-fit:contain; background:#fff;" />
                <div>
                  <div style="font-weight:800; font-size:1.15rem; color:#fff; line-height:1.1;">NVT USA</div>
                  <div style="font-size:0.7rem; color:#eab308;">Veterans Tournament</div>
                </div>
              </div>
              <span style="font-size:0.7rem; color:#eab308; background:rgba(234,179,8,0.15); padding:3px 8px; border-radius:12px; font-weight:700;">Live Tournament</span>
            </div>
          </div>

          <!-- Tournament Match Card -->
          <div style="background:linear-gradient(135deg, rgba(30,58,138,0.5), rgba(15,23,42,0.8)); border:1px solid rgba(234,179,8,0.4); border-radius:14px; padding:12px; text-align:center;">
            <div style="font-size:0.7rem; color:#eab308; font-weight:800; letter-spacing:0.5px; margin-bottom:6px;">FINAL &bull; FIELD 10 &bull; LIVE</div>
            <div style="display:flex; justify-content:space-around; align-items:center;">
              <div>
                <div style="font-size:1rem; font-weight:800; color:#fff;">RALEIGH TRIANGLE</div>
                <div style="font-size:1.4rem; font-weight:900; color:#38bdf8;">2</div>
              </div>
              <div style="font-size:0.8rem; color:#64748b; font-weight:700;">VS</div>
              <div>
                <div style="font-size:1rem; font-weight:800; color:#fff;">RICHMOND</div>
                <div style="font-size:1.4rem; font-weight:900; color:#eab308;">1</div>
              </div>
            </div>
            <div style="font-size:0.7rem; color:#cbd5e1; margin-top:8px;">
              54 Teams &bull; 12 Players/Roster &bull; 32 States
            </div>
          </div>

          <button style="background:#eab308; color:#0f172a; border:none; padding:10px; border-radius:10px; font-weight:800; font-size:0.75rem; cursor:pointer;" onclick="openStoreModal('nvtusa')">
            Open NVT USA Store Page ↗
          </button>
        </div>
      `;
      break;

    case "altrix":
      screenHTML = `
        <div style="height:100%; display:flex; flex-direction:column; justify-content:space-between;">
          <div>
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <div style="display:flex; align-items:center; gap:8px;">
                <img src="assets/altrix_icon.png" alt="Altrix" style="width:30px; height:30px; border-radius:8px; object-fit:contain; background:#1e1b4b;" />
                <div>
                  <div style="font-weight:800; font-size:1.15rem; color:#fff; line-height:1.1;">Altrix</div>
                  <div style="font-size:0.7rem; color:#6366f1;">Doctor Appointments</div>
                </div>
              </div>
              <span style="font-size:0.7rem; color:#6366f1; background:rgba(99,102,241,0.15); padding:3px 8px; border-radius:12px; font-weight:700;">Play Store Live</span>
            </div>
          </div>

          <!-- Doctor Appointment Card -->
          <div style="background:rgba(255,255,255,0.05); border:1px solid rgba(99,102,241,0.3); border-radius:14px; padding:12px;">
            <div style="display:flex; align-items:center; gap:10px; margin-bottom:8px;">
              <div style="width:36px; height:36px; border-radius:50%; background:#6366f1; display:flex; align-items:center; justify-content:center;">🩺</div>
              <div>
                <div style="font-size:0.85rem; font-weight:700; color:#fff;">Dr. Jennifer Vance</div>
                <div style="font-size:0.7rem; color:#94a3b8;">Cardiology &bull; Verified Specialist</div>
              </div>
            </div>
            <div style="font-size:0.72rem; color:#cbd5e1; background:rgba(0,0,0,0.3); padding:8px; border-radius:8px;">
              Appointment Confirmed: Today at 5:00 PM<br>
              <span style="color:#00f5a0; font-weight:700;">Real-Time Audio Calling Ready</span>
            </div>
          </div>

          <button style="background:linear-gradient(135deg, #4f46e5, #6366f1); color:#fff; border:none; padding:10px; border-radius:10px; font-weight:700; font-size:0.78rem; cursor:pointer;" onclick="openStoreModal('altrix')">
            Google Play Store Page ↗
          </button>
        </div>
      `;
      break;

    case "galaxy":
      screenHTML = `
        <div style="height:100%; display:flex; flex-direction:column; justify-content:space-between;">
          <div>
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <div style="display:flex; align-items:center; gap:8px;">
                <img src="assets/galaxy_icon.png" alt="Galaxy Advertisers" style="width:30px; height:30px; border-radius:8px; object-fit:contain; background:#000;" />
                <div>
                  <div style="font-weight:800; font-size:1.15rem; color:#fff; line-height:1.1;">Galaxy Advertisers</div>
                  <div style="font-size:0.7rem; color:#8b5cf6;">Haridwar DOOH & Field</div>
                </div>
              </div>
              <span style="font-size:0.7rem; color:#8b5cf6; background:rgba(139,92,246,0.15); padding:3px 8px; border-radius:12px; font-weight:700;">Haridwar DOOH</span>
            </div>
          </div>

          <div style="background:rgba(255,255,255,0.04); border:1px solid rgba(139,92,246,0.3); border-radius:14px; padding:12px;">
            <div style="font-size:0.8rem; font-weight:700; color:#fff;">Billboard Site #HW-108</div>
            <div style="font-size:0.72rem; color:#cbd5e1;">Ranipur More, Haridwar</div>
            <div style="font-size:0.7rem; color:#00f5a0; margin-top:4px;">&check; Field Worker Verified (GPS Geotagged)</div>
          </div>

          <button style="background:#8b5cf6; color:#fff; border:none; padding:10px; border-radius:10px; font-weight:700; font-size:0.78rem; cursor:pointer;" onclick="openStoreModal('galaxyadvertisers')">
            Google Play Store Page ↗
          </button>
        </div>
      `;
      break;
  }

  container.innerHTML = screenHTML;

  if (app.simulatorType === "marispeak") {
    setupPTTEvents();
  }
}

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
}

window.switchSimulatorApp = function(appKey) {
  activeAppKey = appKey;
  const tabButtons = document.querySelectorAll(".phone-tab-btn");
  tabButtons.forEach(b => {
    if (b.dataset.app === appKey) {
      b.classList.add("active");
    } else {
      b.classList.remove("active");
    }
  });

  renderSimulatorContent(appKey);

  const sim = document.getElementById("deviceShowcase");
  if (sim) {
    sim.scrollIntoView({ behavior: "smooth", block: "center" });
  }
};

function renderProjectsGrid(filter = "all") {
  const container = document.getElementById("projectsGrid");
  if (!container) return;

  const appKeys = Object.keys(portfolioData.apps);
  const filteredKeys = appKeys.filter(key => {
    if (filter === "all") return true;
    return portfolioData.apps[key].category === filter;
  });

  container.innerHTML = filteredKeys.map(key => {
    const app = portfolioData.apps[key];
    const iconSvg = getAppIconSvg(app.iconType, app.iconImage);
    return `
      <div class="glass-panel app-card">
        <div class="app-card-header">
          <div class="app-icon-wrap">
            ${iconSvg}
          </div>
          <span class="badge badge-live">
            <span class="badge-pulse"></span>
            ${app.status}
          </span>
        </div>

        <div class="app-title-group">
          <h3>${app.name}</h3>
          <div class="app-company-tag">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
            </svg>
            ${app.company}
          </div>
        </div>

        <p class="app-desc">${app.description}</p>

        <div class="arch-highlight">
          <div class="arch-highlight-title">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polygon points="12 2 2 7 12 12 22 7 12 2"/>
              <polyline points="2 17 12 22 22 17"/>
              <polyline points="2 12 12 17 22 12"/>
            </svg>
            Key Engineering Highlights
          </div>
          <div class="arch-highlight-text">${app.architecture}</div>
        </div>

        <div class="tech-tag-list">
          ${app.tags.map(tag => `<span class="tech-tag">${tag}</span>`).join("")}
        </div>

        <div class="app-card-actions">
          <button class="btn-launch-sim" onclick="switchSimulatorApp('${app.id}')">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
              <line x1="12" y1="18" x2="12.01" y2="18"/>
            </svg>
            Live Simulator
          </button>
          <button class="store-links-btn" onclick="openStoreModal('${app.id}')">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
            Store URLs ↗
          </button>
        </div>
      </div>
    `;
  }).join("");
}

function setupFilterTabs() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.dataset.filter;
      renderProjectsGrid(filter);
    });
  });
}

// Modal for Store URLs
window.openStoreModal = function(appId) {
  const app = portfolioData.apps[appId];
  if (!app) return;

  const titleEl = document.getElementById("modalAppTitle");
  const descEl = document.getElementById("modalAppDesc");
  const storeLinksEl = document.getElementById("modalStoreLinks");
  const overlay = document.getElementById("storeModalOverlay");

  if (titleEl) {
    const iconTag = app.iconImage 
      ? `<img src="${app.iconImage}" alt="${app.name}" style="width:38px; height:38px; border-radius:10px; object-fit:contain;" />`
      : "";
    titleEl.innerHTML = `
      <div style="display:flex; align-items:center; gap:12px; margin-bottom:4px;">
        ${iconTag}
        <span>${app.name} &bull; Store Links</span>
      </div>
    `;
  }
  if (descEl) descEl.innerText = app.tagline;

  let linksHtml = "";

  if (app.playStoreUrl && app.playStoreUrl !== "#") {
    linksHtml += `
      <a href="${app.playStoreUrl}" target="_blank" rel="noopener noreferrer" class="store-badge-card">
        <div class="store-badge-left">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="#00f5a0">
            <polygon points="5 3 19 12 5 21 5 3"/>
          </svg>
          <div>
            <div style="font-weight:700; font-size:0.95rem;">Google Play Store</div>
            <div style="font-size:0.75rem; color:#94a3b8;">Official Android Release</div>
          </div>
        </div>
        <span class="btn btn-sm btn-primary">Open Play Store ↗</span>
      </a>
    `;
  }

  if (app.appStoreUrl && app.appStoreUrl !== "#") {
    linksHtml += `
      <a href="${app.appStoreUrl}" target="_blank" rel="noopener noreferrer" class="store-badge-card">
        <div class="store-badge-left">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="#00f0ff">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.85c.62-.75 1.04-1.8 0.93-2.85-.9.04-2 .6-2.65 1.35-.58.66-1.09 1.73-.95 2.76 1.01.08 2.05-.51 2.67-1.26z"/>
          </svg>
          <div>
            <div style="font-weight:700; font-size:0.95rem;">Apple App Store</div>
            <div style="font-size:0.75rem; color:#94a3b8;">Official iOS App Store Release</div>
          </div>
        </div>
        <span class="btn btn-sm btn-secondary">Open App Store ↗</span>
      </a>
    `;
  }

  if (!linksHtml) {
    linksHtml = `
      <div style="padding:16px; background:rgba(255,255,255,0.04); border-radius:10px; font-size:0.85rem; color:#cbd5e1;">
        Production builds & code walk-throughs available upon interview request.
      </div>
    `;
  }

  if (storeLinksEl) storeLinksEl.innerHTML = linksHtml;
  if (overlay) overlay.classList.add("active");
};

function setupModalHandlers() {
  const closeBtn = document.getElementById("closeModalBtn");
  const overlay = document.getElementById("storeModalOverlay");

  if (closeBtn) closeBtn.addEventListener("click", () => overlay.classList.remove("active"));
  if (overlay) overlay.addEventListener("click", (e) => { if (e.target === overlay) overlay.classList.remove("active"); });

  const resumeBtn = document.getElementById("viewResumeBtn");
  const resumeOverlay = document.getElementById("resumeModalOverlay");
  const closeResumeBtn = document.getElementById("closeResumeBtn");

  if (resumeBtn && resumeOverlay) resumeBtn.addEventListener("click", () => resumeOverlay.classList.add("active"));
  if (closeResumeBtn && resumeOverlay) closeResumeBtn.addEventListener("click", () => resumeOverlay.classList.remove("active"));
  if (resumeOverlay) resumeOverlay.addEventListener("click", (e) => { if (e.target === resumeOverlay) resumeOverlay.classList.remove("active"); });
}

window.copyToClipboard = function(text, label) {
  navigator.clipboard.writeText(text).then(() => {
    alert(`Copied ${label} to clipboard: ${text}`);
  }).catch(() => {
    prompt(`Copy ${label}:`, text);
  });
};

function setupContactForm() {
  const form = document.getElementById("portfolioContactForm");
  if (!form) return;

  const submitBtn = document.getElementById("contactSubmitBtn");
  const statusEl = document.getElementById("contactFormStatus");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.getElementById("contactName").value.trim();
    const email = document.getElementById("contactEmail").value.trim();
    const msg = document.getElementById("contactMsg").value.trim();

    if (!name || !email || !msg) return;

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerText = "Sending to Vishal's Gmail...";
    }
    if (statusEl) {
      statusEl.style.display = "none";
    }

    try {
      const response = await fetch("https://formsubmit.co/ajax/vc46320@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: msg,
          _subject: `Flutter Developer Interview Invitation from ${name} (${email})`,
          _template: "table"
        })
      });

      const result = await response.json();

      if (response.ok && (result.success === "true" || result.success === true)) {
        if (statusEl) {
          statusEl.style.display = "block";
          statusEl.style.background = "rgba(0, 245, 160, 0.15)";
          statusEl.style.border = "1px solid #00f5a0";
          statusEl.style.color = "#00f5a0";
          statusEl.innerHTML = `✓ <strong>Message Delivered!</strong> Your invitation has been sent directly to Vishal's Gmail (<strong>vc46320@gmail.com</strong>). Vishal will get back to you shortly!`;
        }
        form.reset();
      } else {
        throw new Error(result.message || "Direct API delivery not confirmed");
      }
    } catch (err) {
      console.warn("Direct submission fallback:", err);
      // Fallback: Open mail client directly to ensure 100% delivery guarantee
      const mailto = `mailto:vc46320@gmail.com?subject=Interview Opportunity for Vishal Choudhary (Flutter Developer)&body=${encodeURIComponent("From: " + name + " (" + email + ")\n\n" + msg)}`;
      window.location.href = mailto;

      if (statusEl) {
        statusEl.style.display = "block";
        statusEl.style.background = "rgba(1, 180, 228, 0.15)";
        statusEl.style.border = "1px solid #00f0ff";
        statusEl.style.color = "#00f0ff";
        statusEl.innerHTML = `✉️ Opening your email app to send directly to <strong>vc46320@gmail.com</strong>. You can also reach Vishal directly on WhatsApp at <strong>+91 7591033165</strong>!`;
      }
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerText = "Send Interview Invitation";
      }
    }
  });
}
