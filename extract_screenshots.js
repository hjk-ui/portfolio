const fs = require('fs');

async function getScreenshotsForApple(url) {
  try {
    const res = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' }
    });
    const html = await res.text();
    const list = [];
    // Apple screenshots: thumb/PurpleSource... or thumb/Purple... with .png or .jpg
    const regex = /https:\/\/is\d-ssl\.mzstatic\.com\/image\/thumb\/PurpleSource[^\s"',]+\.(?:png|jpg|jpeg)/g;
    let m;
    while ((m = regex.exec(html)) !== null) {
      const src = m[0];
      if (!list.includes(src)) list.push(src);
    }
    return list;
  } catch (e) {
    return [];
  }
}

async function getScreenshotsForPlay(packageId) {
  try {
    const url = 'https://play.google.com/store/apps/details?id=' + packageId + '&hl=en&gl=US';
    const res = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' }
    });
    const html = await res.text();
    
    // Google Play embeds screenshots in ds:X javascript blocks
    // Format is typically [null,[[null,null,"https://play-lh.googleusercontent.com/...",[w,h]], ...
    const regex = /"(https:\/\/play-lh\.googleusercontent\.com\/[^"=]+)"/g;
    const found = [];
    let m;
    while ((m = regex.exec(html)) !== null) {
      const img = m[1];
      if (img.length > 60 && !img.includes('placeholder') && !found.includes(img)) {
        found.push(img);
      }
    }
    return found;
  } catch (e) {
    return [];
  }
}

async function main() {
  const result = {
    marispeak: {
      apple: await getScreenshotsForApple('https://apps.apple.com/in/app/marispeak/id6745493561'),
      play: await getScreenshotsForPlay('com.pttcommunicate.pttmessenger')
    },
    towtraces: {
      apple: await getScreenshotsForApple('https://apps.apple.com/in/app/towtraces/id6760699884'),
      play: []
    },
    viralflight: {
      apple: await getScreenshotsForApple('https://apps.apple.com/in/app/viral-flight-in/id6798629583'),
      play: await getScreenshotsForPlay('com.viralflight.app')
    },
    nvtusa: {
      apple: await getScreenshotsForApple('https://apps.apple.com/in/app/nvt-usa/id6795293003'),
      play: await getScreenshotsForPlay('com.nvtusa.app')
    },
    altrix: {
      apple: [],
      play: await getScreenshotsForPlay('com.altrixs.altrixs')
    },
    galaxyadvertisers: {
      apple: [],
      play: await getScreenshotsForPlay('com.mindaptix.galaxyadvertisers')
    }
  };

  fs.writeFileSync('all_app_screenshots.json', JSON.stringify(result, null, 2));
  console.log('Saved all screenshots!');
  for (const [k, v] of Object.entries(result)) {
    console.log(`\n=== ${k} ===`);
    console.log('Apple screenshots count:', v.apple.length);
    if (v.apple[0]) console.log('  Apple ex:', v.apple[0]);
    console.log('Play screenshots count:', v.play.length);
    if (v.play[0]) console.log('  Play ex:', v.play[0]);
  }
}

main();
