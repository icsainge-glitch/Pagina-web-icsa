const fs = require('fs');

const urls = [
  { url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80', dest: 'public/hero1.jpg' },
  { url: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1920&q=80', dest: 'public/hero2.jpg' },
  { url: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=80', dest: 'public/hero3.jpg' }
];

async function run() {
  for (const item of urls) {
    const res = await fetch(item.url);
    const buffer = await res.arrayBuffer();
    fs.writeFileSync(item.dest, Buffer.from(buffer));
    console.log('Downloaded ' + item.dest);
  }
}
run();
