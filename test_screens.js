const fs = require('fs');

async function testScreenshots() {
  const storeData = JSON.parse(fs.readFileSync('all_app_screenshots.json', 'utf8'));
  
  // Let's inspect the top screenshots for each
  const verifiedScreens = {
    marispeak: [
      {
        title: "Boat-to-Boat PTT Radio",
        caption: "Real-time Push-to-Talk voice channel & Marina communication",
        url: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/bd/ea/84/bdea84d7-81e5-ebe6-0462-3fc6493b4062/1.jpg/600x1300bb.webp"
      },
      {
        title: "Active Channel Audio Call",
        caption: "WebSocket low-latency audio stream with CallKit integration",
        url: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/c3/e2/c4/c3e2c406-43b8-64aa-2cbc-f645b725c9f8/2.jpg/600x1300bb.webp"
      },
      {
        title: "Fleet & Vessel Directory",
        caption: "Nearby boat vessels list with status & GPS proximity",
        url: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/cd/9f/41/cd9f4106-3e2a-d210-1923-dc18e8dff5c7/3.jpg/600x1300bb.webp"
      },
      {
        title: "GPS Navigation & Marine Map",
        caption: "Real-time marine coordinates and boat tracking",
        url: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/35/4f/db/354fdbb6-ad1f-b411-b4d7-00451220efc8/4.jpg/600x1300bb.webp"
      }
    ],
    towtraces: [
      {
        title: "Find Your Towed Vehicle",
        caption: "Real-time VIN and License plate vehicle recovery lookup",
        url: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/65/7a/b4/657ab45a-00f6-20be-9658-d23664fceecf/TowTrace_AppStore_1_1284x2778.png/600x1300bb.webp"
      },
      {
        title: "Yard Location & Details",
        caption: "Live towing yard status, release desk info & fees",
        url: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/aa/28/7d/aa287d36-a554-146c-3d29-6d96552713d1/TowTrace_AppStore_2_1284x2778.png/600x1300bb.webp"
      },
      {
        title: "Vehicle Recovery Route",
        caption: "Turn-by-turn navigation directly to the impound lot",
        url: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/6d/e8/6b/6de86ba7-7581-fc82-490a-dd6509ea9240/TowTrace_AppStore_4_1284x2778.png/600x1300bb.webp"
      }
    ],
    viralflight: [
      {
        title: "Creator Discovery & Collabs",
        caption: "Influencer marketing hub with verified brand campaigns",
        url: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/f8/49/f8/f849f851-a7b3-63ce-7cbb-d6462a3548b4/01_IMG_6048_1284x2778.png/600x1300bb.webp"
      },
      {
        title: "Work Mode & Campaign Matching",
        caption: "Instant job alerts and contract management for influencers",
        url: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/79/9e/7d/799e7da7-4e3d-182b-c148-a06ce2f031d0/02_IMG_6054_1284x2778.png/600x1300bb.webp"
      },
      {
        title: "Social Performance Analytics",
        caption: "Engagement rates, followers reach & payout tracking",
        url: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/59/a7/9e/59a79ee7-d868-9762-ef01-68886076891e/03_IMG_6050_1284x2778.png/600x1300bb.webp"
      }
    ],
    nvtusa: [
      {
        title: "Tournament Bracket & Live Standings",
        caption: "National Veterans Tournament USA match schedules & scores",
        url: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/80/c8/63/80c8636d-b85f-9a7d-3f7d-e083caa831ed/Simulator_Screenshot_-_NVT_App_Store_iPhone_-_2026-07-28_at_03.58.48.png/600x1300bb.webp"
      },
      {
        title: "Team Rosters & Player Profiles",
        caption: "54 clubs across 32 states with detailed player statistics",
        url: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/b3/1a/1d/b31a1d73-c9b1-3059-a74d-5f84b2f96b45/Simulator_Screenshot_-_NVT_App_Store_iPhone_-_2026-07-28_at_03.59.25.png/600x1300bb.webp"
      },
      {
        title: "Stadium Navigation & Field Map",
        caption: "Field directions, match timing & official announcements",
        url: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/ef/0f/3c/ef0f3c6d-1a82-c0ea-5721-1ae74fcc6d9f/Simulator_Screenshot_-_NVT_App_Store_iPhone_-_2026-07-28_at_03.58.41.png/600x1300bb.webp"
      }
    ],
    altrix: [
      {
        title: "Doctor Appointments & Wellness",
        caption: "Verified doctor listings, appointment booking & chat",
        url: "https://play-lh.googleusercontent.com/u2vdgiFeuhBSTBr_BP9lu1vX8Vg1-aJqEwU8cxi0L-q57lL27TkVN_NvGP4GIWZq4QcMfw7Ct5LzeftPWg80XS0=w720-h1440-rw"
      },
      {
        title: "Specialist Consultation Details",
        caption: "Doctor profiles, credentials, consultation slots & fees",
        url: "https://play-lh.googleusercontent.com/h3Re0fVwij9DtEt70RaabL4ZDJMIDVcFN1U0ggzgY-pftSYHhcEYUs5E98Py0UZEBVLssrZmnP8JPW1-yi4lRQ=w720-h1440-rw"
      },
      {
        title: "Encrypted Audio Calling & Care",
        caption: "Real-time doctor consultation via VoIP and instant chat",
        url: "https://play-lh.googleusercontent.com/wQPHZSnFDouHEAfXHFAxzsOGq8aksvbA2ELBwwAagMgnHlkRiIZmilRctO5_qHuXjMpToj4HvOPAtkKHyJva=w720-h1440-rw"
      }
    ],
    galaxyadvertisers: [
      {
        title: "Haridwar Billboard DOOH Network",
        caption: "Prime outdoor billboard site discovery and reservation",
        url: "https://play-lh.googleusercontent.com/7LPG1EJVXXQrTClK2uoYeJ-nCsSdzR_wl3mxV0H4dpk23JzWnpZ4QC0n3S4azC6CrwrCIe6MMKeFlmCC1uSfZw=w720-h1440-rw"
      },
      {
        title: "Site Location & Traffic Metrics",
        caption: "Geotagged billboard locations, traffic reach & dimensions",
        url: "https://play-lh.googleusercontent.com/NhoN-9Joq9lRJJR2J1IbmHHVCIKSFksDnAflBYeXBDF-kDMhZuzWLfY2pz5RDxBiKqPiY6o8d958vtjyeyP2Dw=w720-h1440-rw"
      },
      {
        title: "Field Maintenance & Proof of Performance",
        caption: "Camera audit proof and maintenance tracking with GPS tags",
        url: "https://play-lh.googleusercontent.com/NDUin4InZVyq7MRHWcKZOhJQQ1hfhxZp6P94mcy49Jj3AGE-7EJYBV_1HdRBfYdGZY6hGzy6vQnIHBTBs-cWVA=w720-h1440-rw"
      }
    ]
  };

  // Test fetch each URL
  for (const [app, screens] of Object.entries(verifiedScreens)) {
    console.log(`Checking ${app}...`);
    for (const s of screens) {
      const res = await fetch(s.url);
      console.log(`  ${s.title}: ${res.status} (${res.headers.get('content-type')})`);
    }
  }

  fs.writeFileSync('verified_screens_data.json', JSON.stringify(verifiedScreens, null, 2));
}

testScreenshots();
