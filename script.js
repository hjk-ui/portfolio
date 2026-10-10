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
      simulatorType: "marispeak",
      screenshots: [
        {
          title: "Boat-to-Boat PTT Radio",
          caption: "Real-time Push-to-Talk voice channel & Marina communication",
          url: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/bd/ea/84/bdea84d7-81e5-ebe6-0462-3fc6493b4062/1.jpg/600x1300bb.webp",
          storeLabel: "Play Store & App Store Live"
        },
        {
          title: "WebSocket Live Audio Stream",
          caption: "Low-latency PushKit & CallKit VoIP background audio wakeups",
          url: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/c3/e2/c4/c3e2c406-43b8-64aa-2cbc-f645b725c9f8/2.jpg/600x1300bb.webp",
          storeLabel: "Apple App Store Live"
        },
        {
          title: "Fleet & Vessel Directory",
          caption: "Nearby boat vessels list with status & GPS proximity",
          url: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/cd/9f/41/cd9f4106-3e2a-d210-1923-dc18e8dff5c7/3.jpg/600x1300bb.webp",
          storeLabel: "Apple App Store Live"
        },
        {
          title: "GPS Navigation & Marine Maps",
          caption: "Real-time marine coordinates and boat navigation tracking",
          url: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/35/4f/db/354fdbb6-ad1f-b411-b4d7-00451220efc8/4.jpg/600x1300bb.webp",
          storeLabel: "Apple App Store Live"
        }
      ]
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
      simulatorType: "towtraces",
      screenshots: [
        {
          title: "Find Your Towed Vehicle",
          caption: "Real-time VIN and License plate vehicle recovery lookup",
          url: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/65/7a/b4/657ab45a-00f6-20be-9658-d23664fceecf/TowTrace_AppStore_1_1284x2778.png/600x1300bb.webp",
          storeLabel: "Apple App Store Live"
        },
        {
          title: "Yard Location & Release Details",
          caption: "Live towing yard status, release desk info & impound fees",
          url: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/aa/28/7d/aa287d36-a554-146c-3d29-6d96552713d1/TowTrace_AppStore_2_1284x2778.png/600x1300bb.webp",
          storeLabel: "Apple App Store Live"
        },
        {
          title: "Vehicle Recovery Route Navigation",
          caption: "Turn-by-turn navigation directly to the secure impound lot",
          url: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/6d/e8/6b/6de86ba7-7581-fc82-490a-dd6509ea9240/TowTrace_AppStore_4_1284x2778.png/600x1300bb.webp",
          storeLabel: "Apple App Store Live"
        }
      ]
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
      simulatorType: "viralflight",
      screenshots: [
        {
          title: "Creator Discovery & Collabs",
          caption: "Influencer marketing hub with verified brand campaigns",
          url: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/f8/49/f8/f849f851-a7b3-63ce-7cbb-d6462a3548b4/01_IMG_6048_1284x2778.png/600x1300bb.webp",
          storeLabel: "Play Store & App Store Live"
        },
        {
          title: "Work Mode & Campaign Matching",
          caption: "Instant job alerts and contract management for creators",
          url: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/79/9e/7d/799e7da7-4e3d-182b-c148-a06ce2f031d0/02_IMG_6054_1284x2778.png/600x1300bb.webp",
          storeLabel: "Apple App Store Live"
        },
        {
          title: "Social Performance Analytics",
          caption: "Engagement rates, followers reach & agency payout tracking",
          url: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/59/a7/9e/59a79ee7-d868-9762-ef01-68886076891e/03_IMG_6050_1284x2778.png/600x1300bb.webp",
          storeLabel: "Apple App Store Live"
        }
      ]
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
      simulatorType: "nvtusa",
      screenshots: [
        {
          title: "Tournament Bracket & Live Standings",
          caption: "National Veterans Tournament USA match schedules & scores",
          url: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/80/c8/63/80c8636d-b85f-9a7d-3f7d-e083caa831ed/Simulator_Screenshot_-_NVT_App_Store_iPhone_-_2026-07-28_at_03.58.48.png/600x1300bb.webp",
          storeLabel: "Apple App Store Live"
        },
        {
          title: "Team Rosters & Player Profiles",
          caption: "54 clubs across 32 states with detailed player statistics",
          url: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/b3/1a/1d/b31a1d73-c9b1-3059-a74d-5f84b2f96b45/Simulator_Screenshot_-_NVT_App_Store_iPhone_-_2026-07-28_at_03.59.25.png/600x1300bb.webp",
          storeLabel: "Apple App Store Live"
        },
        {
          title: "Stadium Navigation & Field Map",
          caption: "Field directions, match timing & official announcements",
          url: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/ef/0f/3c/ef0f3c6d-1a82-c0ea-5721-1ae74fcc6d9f/Simulator_Screenshot_-_NVT_App_Store_iPhone_-_2026-07-28_at_03.58.41.png/600x1300bb.webp",
          storeLabel: "Apple App Store Live"
        }
      ]
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
      simulatorType: "altrix",
      screenshots: [
        {
          title: "Doctor Appointments & Wellness",
          caption: "Verified doctor listings, appointment booking & chat",
          url: "https://play-lh.googleusercontent.com/u2vdgiFeuhBSTBr_BP9lu1vX8Vg1-aJqEwU8cxi0L-q57lL27TkVN_NvGP4GIWZq4QcMfw7Ct5LzeftPWg80XS0=w720-h1440-rw",
          storeLabel: "Google Play Store Live"
        },
        {
          title: "Specialist Consultation Details",
          caption: "Doctor profiles, credentials, consultation slots & fees",
          url: "https://play-lh.googleusercontent.com/h3Re0fVwij9DtEt70RaabL4ZDJMIDVcFN1U0ggzgY-pftSYHhcEYUs5E98Py0UZEBVLssrZmnP8JPW1-yi4lRQ=w720-h1440-rw",
          storeLabel: "Google Play Store Live"
        },
        {
          title: "Encrypted Audio Calling & Care",
          caption: "Real-time doctor consultation via VoIP and instant chat",
          url: "https://play-lh.googleusercontent.com/wQPHZSnFDouHEAfXHFAxzsOGq8aksvbA2ELBwwAagMgnHlkRiIZmilRctO5_qHuXjMpToj4HvOPAtkKHyJva=w720-h1440-rw",
          storeLabel: "Google Play Store Live"
        }
      ]
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
      simulatorType: "galaxy",
      screenshots: [
        {
          title: "Haridwar Billboard DOOH Network",
          caption: "Prime outdoor billboard site discovery and reservation",
          url: "https://play-lh.googleusercontent.com/7LPG1EJVXXQrTClK2uoYeJ-nCsSdzR_wl3mxV0H4dpk23JzWnpZ4QC0n3S4azC6CrwrCIe6MMKeFlmCC1uSfZw=w720-h1440-rw",
          storeLabel: "Google Play Store Live"
        },
        {
          title: "Site Location & Traffic Metrics",
          caption: "Geotagged billboard locations, traffic reach & dimensions",
          url: "https://play-lh.googleusercontent.com/NhoN-9Joq9lRJJR2J1IbmHHVCIKSFksDnAflBYeXBDF-kDMhZuzWLfY2pz5RDxBiKqPiY6o8d958vtjyeyP2Dw=w720-h1440-rw",
          storeLabel: "Google Play Store Live"
        },
        {
          title: "Field Maintenance & Proof of Performance",
          caption: "Camera audit proof and maintenance tracking with GPS tags",
          url: "https://play-lh.googleusercontent.com/NDUin4InZVyq7MRHWcKZOhJQQ1hfhxZp6P94mcy49Jj3AGE-7EJYBV_1HdRBfYdGZY6hGzy6vQnIHBTBs-cWVA=w720-h1440-rw",
          storeLabel: "Google Play Store Live"
        }
      ]
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
      simulatorType: "bid4style",
      screenshots: [
        {
          title: "Streetwear & Fashion Marketplace",
          caption: "Product discovery, sneaker auctions, live bids and Riverpod cart",
          url: "assets/bid4style_screen.jpg",
          storeLabel: "Flutter Production Prototype"
        }
      ]
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

          <div class="ptt-main-circle-wrap" style="margin:16px 0;">
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
            <div style="font-size:0.7rem; color:#94a3b8; margin-top:6px;" id="pttStatusText">
              ${isTransmitting ? "Broadcasting live audio to Marina channel..." : "Instant boat-to-boat voice communication"}
            </div>
          </div>

          <div class="sim-card-box" style="padding:8px 10px; margin-bottom:8px;">
            <div style="display:flex; justify-content:space-between; font-size:0.7rem; color:#94a3b8; margin-bottom:2px;">
              <span>CallKit &bull; PushKit Background Audio</span>
              <span style="color:#00f5a0; font-weight:700;">14ms Ping</span>
            </div>
            <div style="font-size:0.68rem; color:#cbd5e1; font-family:monospace;">
              &check; WebSocket Raw PCM Stream &bull; Firebase Auth
            </div>
          </div>

          <button class="sim-action-btn" style="background:#0284c7; color:#fff;" onclick="openStoreModal('marispeak')">
            Open MariSpeaks on App Store ↗
          </button>
        </div>
      `;
      break;

    case "towtraces":
      screenHTML = `
        <div style="height:100%; display:flex; flex-direction:column; justify-content:space-between;">
          <div>
            <div class="sim-header">
              <div class="sim-header-left">
                <img src="assets/towtraces_icon.png" alt="TowTraces" class="sim-header-icon" />
                <div>
                  <div class="sim-header-title">TowTraces</div>
                  <div class="sim-header-sub">Utilities &bull; Find Towed Vehicles</div>
                </div>
              </div>
              <span class="sim-tag-badge" style="background:rgba(16,185,129,0.18); color:#10b981; border:1px solid rgba(16,185,129,0.3);">
                iOS App Store
              </span>
            </div>

            <!-- Segmented Pill Tabs from App Store Screenshot -->
            <div class="sim-pill-group">
              <div class="sim-pill active">Yard Overview</div>
              <div class="sim-pill">Find Vehicle</div>
            </div>

            <!-- Yard Overview Stats Grid from Screenshot -->
            <div class="sim-stats-grid">
              <div class="sim-stat-tile" style="border-left:3px solid #10b981;">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                  <span class="sim-stat-val">21</span>
                  <span style="font-size:0.9rem;">🚗</span>
                </div>
                <span class="sim-stat-lbl">Total Vehicles</span>
              </div>
              <div class="sim-stat-tile" style="border-left:3px solid #38bdf8;">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                  <span class="sim-stat-val">11</span>
                  <span style="font-size:0.9rem;">📋</span>
                </div>
                <span class="sim-stat-lbl">Total Claims</span>
              </div>
            </div>

            <!-- Find Your Towed Vehicle Instantly Card from Screenshot -->
            <div class="sim-card-box" style="background:linear-gradient(135deg, rgba(16,185,129,0.15), rgba(15,23,42,0.9)); border-color:rgba(16,185,129,0.3); padding:10px;">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
                <span style="font-size:0.75rem; font-weight:800; color:#fff;">Find Your Towed Vehicle</span>
                <span style="font-size:0.65rem; color:#10b981; font-weight:700;">60k+ Owners</span>
              </div>
              <div style="font-size:0.68rem; color:#94a3b8; margin-bottom:8px;">Enter license plate or VIN number in seconds</div>

              <div style="display:flex; gap:6px; margin-bottom:6px;">
                <span style="font-size:0.65rem; padding:2px 8px; border-radius:10px; background:rgba(255,255,255,0.08); color:#94a3b8;">Licence Plate</span>
                <span style="font-size:0.65rem; padding:2px 8px; border-radius:10px; background:#10b981; color:#0f172a; font-weight:800;">&bull; VIN</span>
              </div>

              <div style="background:rgba(0,0,0,0.4); border:1px solid rgba(255,255,255,0.1); border-radius:8px; padding:6px 8px; display:flex; justify-content:space-between; align-items:center;">
                <span style="font-size:0.75rem; color:#fff; font-family:monospace; font-weight:700;">1HGBH41JXMN109186</span>
                <span style="font-size:0.68rem; color:#10b981; font-weight:800;">&check; VERIFIED</span>
              </div>
            </div>

            <!-- Found Vehicle Status Tile -->
            <div class="sim-card-box" style="padding:8px 10px; margin-bottom:8px;">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:2px;">
                <span style="font-size:0.72rem; font-weight:800; color:#fff;">ABC Towing Yard &bull; Lot #4</span>
                <span style="font-size:0.65rem; color:#00f5a0; font-weight:700; background:rgba(0,245,160,0.15); padding:2px 6px; border-radius:8px;">Secured</span>
              </div>
              <div style="font-size:0.67rem; color:#94a3b8;">4.2 miles away &bull; Supabase Realtime Telemetry</div>
            </div>
          </div>

          <button class="sim-action-btn" style="background:linear-gradient(135deg, #059669, #10b981); color:#fff;" onclick="openStoreModal('towtraces')">
            View Live on Apple App Store ↗
          </button>
        </div>
      `;
      break;

    case "viralflight":
      screenHTML = `
        <div style="height:100%; display:flex; flex-direction:column; justify-content:space-between;">
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
                Creator Hub
              </span>
            </div>

            <!-- Creator Work Mode Banner from Screenshot -->
            <div class="sim-card-box" style="background:linear-gradient(135deg, rgba(244,63,94,0.18), rgba(15,23,42,0.9)); border-color:rgba(244,63,94,0.35); padding:10px;">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
                <div>
                  <div style="font-size:0.78rem; font-weight:800; color:#fff;">Work Mode Active</div>
                  <div style="font-size:0.68rem; color:#94a3b8;">Good afternoon, Kartik &bull; Open for collabs</div>
                </div>
                <span style="background:#00f5a0; color:#0f172a; font-weight:900; font-size:0.65rem; padding:3px 9px; border-radius:12px; box-shadow:0 0 10px rgba(0,245,160,0.5);">ON</span>
              </div>
              <div style="display:flex; gap:6px; margin-top:8px;">
                <button style="flex:1; background:#f43f5e; border:none; color:#fff; font-size:0.68rem; font-weight:800; padding:5px; border-radius:6px; cursor:pointer;">Find Work</button>
                <button style="flex:1; background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.12); color:#cbd5e1; font-size:0.68rem; padding:5px; border-radius:6px; cursor:pointer;">About VF</button>
              </div>
            </div>

            <!-- Best Niche Matches from Screenshot -->
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px; padding:0 2px;">
              <span style="font-size:0.75rem; font-weight:800; color:#fff;">Best Niche Matches</span>
              <span style="font-size:0.68rem; color:#f43f5e; font-weight:700;">View All</span>
            </div>

            <!-- Match Card 1 -->
            <div class="sim-card-box" style="padding:8px 10px; margin-bottom:6px;">
              <div style="display:flex; justify-content:space-between; align-items:flex-start;">
                <div>
                  <div style="font-size:0.74rem; font-weight:800; color:#fff;">Tech Unboxing Video</div>
                  <div style="font-size:0.65rem; color:#38bdf8; margin-top:1px;">&bull; Tech &bull; INR 18,000</div>
                </div>
                <span style="font-size:0.65rem; background:rgba(0,245,160,0.15); color:#00f5a0; font-weight:800; padding:2px 6px; border-radius:8px;">95% match</span>
              </div>
            </div>

            <!-- Match Card 2 -->
            <div class="sim-card-box" style="padding:8px 10px; margin-bottom:8px;">
              <div style="display:flex; justify-content:space-between; align-items:flex-start;">
                <div>
                  <div style="font-size:0.74rem; font-weight:800; color:#fff;">Cloud Kitchen Promo</div>
                  <div style="font-size:0.65rem; color:#ec4899; margin-top:1px;">&bull; Food &bull; INR 25,000</div>
                </div>
                <span style="font-size:0.65rem; background:rgba(0,245,160,0.15); color:#00f5a0; font-weight:800; padding:2px 6px; border-radius:8px;">88% match</span>
              </div>
            </div>
          </div>

          <button class="sim-action-btn" style="background:#f43f5e; color:#fff;" onclick="openStoreModal('viralflight')">
            Open Viral Flight on App Store ↗
          </button>
        </div>
      `;
      break;

    case "nvtusa":
      screenHTML = `
        <div style="height:100%; display:flex; flex-direction:column; justify-content:space-between;">
          <div>
            <div class="sim-header">
              <div class="sim-header-left">
                <img src="assets/nvtusa_icon.png" alt="NVT USA" class="sim-header-icon" style="background:#fff;" />
                <div>
                  <div class="sim-header-title">NVT USA</div>
                  <div class="sim-header-sub">National Veterans Tournament</div>
                </div>
              </div>
              <span class="sim-tag-badge" style="background:rgba(234,179,8,0.18); color:#eab308; border:1px solid rgba(234,179,8,0.3);">
                5.0 &starf; Sports
              </span>
            </div>

            <!-- Matches Overview Header from Screenshot -->
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
              <span style="font-size:0.75rem; font-weight:800; color:#fff;">Matches &bull; NVT Tournament</span>
              <span style="font-size:0.68rem; color:#94a3b8;">66 Games</span>
            </div>

            <!-- Stats Row from Screenshot -->
            <div class="sim-stats-grid" style="grid-template-columns:repeat(3, 1fr); gap:6px; margin-bottom:8px;">
              <div class="sim-stat-tile" style="padding:6px; text-align:center;">
                <span class="sim-stat-val" style="color:#ef4444; font-size:1rem;">0</span>
                <span class="sim-stat-lbl">Live</span>
              </div>
              <div class="sim-stat-tile" style="padding:6px; text-align:center;">
                <span class="sim-stat-val" style="color:#eab308; font-size:1rem;">65</span>
                <span class="sim-stat-lbl">Upcoming</span>
              </div>
              <div class="sim-stat-tile" style="padding:6px; text-align:center;">
                <span class="sim-stat-val" style="color:#00f5a0; font-size:1rem;">1</span>
                <span class="sim-stat-lbl">Completed</span>
              </div>
            </div>

            <!-- Filter Pills from Screenshot -->
            <div class="sim-pill-group" style="margin-bottom:8px;">
              <div class="sim-pill active">All</div>
              <div class="sim-pill">Live</div>
              <div class="sim-pill">Upcoming</div>
              <div class="sim-pill">Results</div>
            </div>

            <!-- Match Card from Screenshot -->
            <div class="sim-card-box" style="background:linear-gradient(135deg, rgba(30,58,138,0.4), rgba(15,23,42,0.9)); border-color:rgba(234,179,8,0.35); padding:10px; margin-bottom:8px;">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
                <span style="font-size:0.65rem; background:#059669; color:#fff; font-weight:800; padding:2px 6px; border-radius:4px;">FINAL</span>
                <span style="font-size:0.65rem; color:#eab308; font-weight:700;">FIELD 10 &bull; LIVE</span>
              </div>

              <div style="display:flex; justify-content:space-around; align-items:center; padding:4px 0;">
                <div style="text-align:center; flex:1;">
                  <div style="font-size:0.78rem; font-weight:800; color:#fff;">RALEIGH</div>
                  <div style="font-size:1.3rem; font-weight:900; color:#38bdf8;">2</div>
                </div>
                <span style="font-size:0.75rem; color:#64748b; font-weight:800;">VS</span>
                <div style="text-align:center; flex:1;">
                  <div style="font-size:0.78rem; font-weight:800; color:#fff;">RICHMOND</div>
                  <div style="font-size:1.3rem; font-weight:900; color:#eab308;">1</div>
                </div>
              </div>
              <div style="text-align:center; font-size:0.66rem; color:#94a3b8; margin-top:4px;">
                88:24 &bull; 54 Teams &bull; 32 States
              </div>
            </div>
          </div>

          <button class="sim-action-btn" style="background:#eab308; color:#0f172a;" onclick="openStoreModal('nvtusa')">
            Open NVT USA Store Page ↗
          </button>
        </div>
      `;
      break;

    case "altrix":
      screenHTML = `
        <div style="height:100%; display:flex; flex-direction:column; justify-content:space-between;">
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
                Play Store
              </span>
            </div>

            <!-- Doctor Appointment Card from Description -->
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
                <div style="color:#00f5a0; font-weight:700; margin-top:2px;">Real-Time Audio Calling Ready</div>
              </div>

              <div style="display:flex; gap:6px;">
                <button style="flex:1; background:#6366f1; color:#fff; border:none; padding:6px; border-radius:6px; font-size:0.68rem; font-weight:800; cursor:pointer;" onclick="alert('Starting Audio Consultation...')">📞 Audio Call</button>
                <button style="flex:1; background:#00f5a0; color:#0f172a; border:none; padding:6px; border-radius:6px; font-size:0.68rem; font-weight:800; cursor:pointer;" onclick="alert('Connecting to Virtual Video Consult...')">📹 Video Call</button>
              </div>
            </div>

            <!-- Daily Wellness Check In Vitals -->
            <div style="font-size:0.75rem; font-weight:800; color:#fff; margin-bottom:6px;">Daily Wellness Vitals</div>
            <div class="sim-stats-grid" style="grid-template-columns:repeat(3, 1fr); gap:6px; margin-bottom:8px;">
              <div class="sim-stat-tile" style="padding:6px; text-align:center;">
                <span class="sim-stat-val" style="color:#00f5a0; font-size:0.9rem;">Low</span>
                <span class="sim-stat-lbl">Stress</span>
              </div>
              <div class="sim-stat-tile" style="padding:6px; text-align:center;">
                <span class="sim-stat-val" style="color:#38bdf8; font-size:0.9rem;">Optimal</span>
                <span class="sim-stat-lbl">Mood</span>
              </div>
              <div class="sim-stat-tile" style="padding:6px; text-align:center;">
                <span class="sim-stat-val" style="color:#a855f7; font-size:0.9rem;">7h 45m</span>
                <span class="sim-stat-lbl">Sleep</span>
              </div>
            </div>
          </div>

          <button class="sim-action-btn" style="background:linear-gradient(135deg, #4f46e5, #6366f1); color:#fff;" onclick="openStoreModal('altrix')">
            Google Play Store Page ↗
          </button>
        </div>
      `;
      break;

    case "galaxy":
      screenHTML = `
        <div style="height:100%; display:flex; flex-direction:column; justify-content:space-between;">
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

            <!-- Haridwar Prime Billboard Site Card -->
            <div class="sim-card-box" style="background:linear-gradient(135deg, rgba(139,92,246,0.2), rgba(15,23,42,0.9)); border-color:rgba(139,92,246,0.35); padding:10px; margin-bottom:8px;">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
                <span style="font-size:0.75rem; font-weight:800; color:#fff;">Site #HW-108: Ranipur More</span>
                <span style="font-size:0.65rem; color:#00f5a0; font-weight:800; background:rgba(0,245,160,0.15); padding:2px 6px; border-radius:6px;">Active LED</span>
              </div>
              <div style="font-size:0.68rem; color:#cbd5e1; margin-bottom:6px;">Dimensions: 40x20 ft &bull; Bypass Highway Corridor</div>
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

          <button class="sim-action-btn" style="background:#8b5cf6; color:#fff;" onclick="openStoreModal('galaxyadvertisers')">
            Google Play Store Page ↗
          </button>
        </div>
      `;
      break;

    case "bid4style":
      screenHTML = `
        <div style="height:100%; display:flex; flex-direction:column; justify-content:space-between;">
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

            <!-- Flash Auction Banner -->
            <div class="sim-card-box" style="background:linear-gradient(135deg, rgba(236,72,153,0.2), rgba(15,23,42,0.9)); border-color:rgba(236,72,153,0.35); padding:10px; margin-bottom:8px;">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
                <span style="font-size:0.75rem; font-weight:800; color:#fff;">⚡ Flash Auction Live</span>
                <span style="font-size:0.65rem; color:#ec4899; font-weight:800; background:rgba(236,72,153,0.2); padding:2px 6px; border-radius:6px;">Ends in 12m 45s</span>
              </div>
              <div style="font-size:0.68rem; color:#cbd5e1;">Vintage Denim Jacket &bull; Unisex Fit</div>
              <div style="display:flex; justify-content:space-between; align-items:center; margin-top:6px;">
                <span style="font-size:0.85rem; font-weight:900; color:#00f5a0;">Current: ₹1,850</span>
                <button style="background:#ec4899; border:none; color:#fff; font-size:0.68rem; font-weight:800; padding:4px 10px; border-radius:6px; cursor:pointer;" onclick="alert('Bid Placed for ₹1,900!')">Place Bid</button>
              </div>
            </div>

            <!-- Cart State Management Tile -->
            <div class="sim-card-box" style="padding:10px; margin-bottom:8px;">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <div>
                  <div style="font-size:0.75rem; font-weight:800; color:#fff;">Riverpod Cart State</div>
                  <div style="font-size:0.67rem; color:#94a3b8;">2 items &bull; Role-based Admin/User</div>
                </div>
                <span style="font-size:0.72rem; color:#00f5a0; font-weight:800;">₹4,250 Total</span>
              </div>
            </div>
          </div>

          <button class="sim-action-btn" style="background:#ec4899; color:#fff;" onclick="openStoreModal('bid4style')">
            Explore Bid4Style Architecture ↗
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
