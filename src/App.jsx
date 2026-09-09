import { useEffect, useState } from 'react';

import celebrationOfPhd from './celebration_of_phd.jpg';
import cousins from './cousins.jpg';
import diwali2025 from './diwali-2025.jpeg';
import familyPhoto from './Family-Photo.jpg';
import family from './family.jpeg';
import kakuBday from './kaku-bday.jpeg';
import mothyai from './mothyai.jpeg';
import mummyPapa from './mummy-papa.jpeg';
import rakhi2023 from './Rakhi-2023.jpg';
import rakhi2024 from './Rakhi-2024.jpg';
import rakhi2025 from './Rakhi-2025.jpg';
import rakhi2026 from './Rakhi-2026.jpg';
import rakhi from './Rakhi.jpg';
import rakhi1 from './Rakhi1.jpg';
import sistersAtHaldi from './sisters_at_haldi.JPG';
import squad from './squad.jpeg';
import Squad from './Squad.jpg';
import Squad1 from './Squad1.jpg';
import surpriseImage from './surprise.png';
import udayHonor from './uday-honor.jpeg';
import us1 from './US1.jpg';
import usThree from './usThree.jpg';
import usAtWedding from './us_at_wedding.jpg';
import withMummyPapa from './with-mummy-papa.jpg';

const heroCake = 'https://images.unsplash.com/photo-1558636508-e0db3814bd1d?auto=format&fit=crop&w=1000&q=85';
const colors = ['#f26f5d', '#f8c95b', '#cbd6c4', '#202322', '#fffdf9'];

const memorySections = [
  { className: 'family-memories', number: '01', name: 'Family first', eyebrow: 'where every story begins', intro: 'Big celebrations, familiar faces, and the people who make every gathering feel like home.', photos: [[familyPhoto, 'Family meet up at Ganesh Jayanti in the farm'], [family, 'Family meet up at Nanded'], [kakuBday, "Small glimpse at Kaku's birthday"], [celebrationOfPhd, 'Huge congratulations for completing the PhD and becoming the third doctor in the family']] },
  { className: 'cousins-memories', number: '02', name: 'Us 4', eyebrow: 'the chosen chaos', intro: 'Four cousins, endless laughter, and a camera roll full of proof that we always have the best time.', photos: [[cousins, 'Beautiful moments at Haldi night'], [Squad, 'Cute portrait at the reception'], [squad, 'Again, us four and our favorite kind of happy'], [Squad1, 'Us four at the engagement']] },
  { className: 'bonds-memories', number: '03', name: 'Strong bondings', eyebrow: 'the people who hold us', intro: 'Quiet support, proud smiles, and the kind of love that shows up for every milestone.', photos: [[udayHonor, 'Congratulating Uday for his success in the SSC exams'], [mothyai, 'A precious moment with Mothyai in the farm'], [withMummyPapa, 'A warm family photo at Ganesh Jayanti'], [mummyPapa, 'A sweet memory with Mummy and Papa']] },
  { className: 'rakhi-memories', number: '04', name: 'Usssssss', eyebrow: 'the tradition we treasure', intro: 'Years change, the thread stays, and this beautiful bond only grows stronger.', photos: [[rakhi2023, 'Rakhi-2023'], [rakhi2024, 'Rakhi-2024'], [rakhi2025, 'Rakhi-2025'], [rakhi2026, 'Rakhi-2026'], [diwali2025, 'A bright Diwali memory from 2025'], [usAtWedding, 'Us at a wedding, dressed up and together'], [us1, 'One more favorite memory of us']] },
  { className: 'cuties-memories', number: '05', name: 'Cuties', eyebrow: 'the sweetest little crew', intro: 'Proof that the best memories are often the ones filled with mischief, hugs, and huge smiles.', photos: [[rakhi, 'Definition of bravery ... and the sweetest smile'], [rakhi1, 'Uncle, didi, and me'], [sistersAtHaldi, 'A beautiful photo at Haldi'], [usThree, 'Cute boy with two beautiful sisters']] },
];

const herPhotos = [
  ['https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=85', 'she shines'],
  ['https://images.unsplash.com/photo-1496440737103-cd596325d314?auto=format&fit=crop&w=900&q=85', 'soft heart, strong soul'],
  ['https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=85', 'the world looks good on you'],
  ['https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=900&q=85', 'beautifully in your element'],
  ['https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=85', 'that unforgettable smile'],
  ['https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=85', 'joy follows you everywhere'],
  ['https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=900&q=85', 'golden hour energy'],
  ['https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=85', 'one of one'],
];

function PandaScene() {
  const panda = (type, label, instrument = null) => <div className={`panda panda-${type}`} role="img" aria-label={label}><span className="panda-ear ear-left" /><span className="panda-ear ear-right" /><span className="panda-head"><i className="eye eye-left" /><i className="eye eye-right" /><i className="panda-nose" /><i className="panda-mouth" /></span><span className="panda-body" /><span className="panda-arm arm-left" /><span className="panda-arm arm-right" />{instrument}</div>;
  return <div className="panda-scene" aria-label="Cute pandas celebrating with cake and instruments">
    {panda('cake', 'Panda holding a birthday cake', <span className="cake-in-paws"><b>♥</b><i /><em>✦</em></span>)}
    {panda('clap', 'Panda clapping', <span className="clap-heart">♡</span>)}
    {panda('drum', 'Panda playing a drum', <span className="drum">♪</span>)}
    {panda('trumpet', 'Panda playing a trumpet', <span className="trumpet">♪</span>)}
    <span className="music-note note-one">♫</span><span className="music-note note-two">♪</span><span className="music-note note-three">✦</span>
  </div>;
}

function Confetti({ pieces }) { return <div id="confetti" aria-hidden="true">{pieces.map((piece) => <span className="confetto" style={piece} key={piece.key} />)}</div>; }

function MemorySection({ section, onPhotoClick }) {
  return <div className={`memory-subsection ${section.className}`}>
    <div className="memory-subsection-heading reveal"><span className="subsection-number">{section.number}</span><div><p className="eyebrow">{section.eyebrow}</p><h3>{section.name}</h3><p>{section.intro}</p></div></div>
    <div className={`memory-layout ${section.photos.length === 7 ? 'memory-layout-seven' : 'memory-layout-four'}`}>
      {section.photos.map(([image, description]) => <figure className="photo reveal" key={image} onClick={() => onPhotoClick(image, description)}><img src={image} alt={description} /><figcaption><strong>{section.name}</strong><span>{description}</span></figcaption></figure>)}
    </div>
  </div>;
}

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMusicOn, setIsMusicOn] = useState(false);
  const [toast, setToast] = useState('');
  const [pieces, setPieces] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [photoZoom, setPhotoZoom] = useState(1);

  const launchConfetti = (amount = 90) => setPieces(Array.from({ length: amount }, (_, index) => ({ key: `${Date.now()}-${index}`, left: `${Math.random() * 100}%`, background: colors[index % colors.length], '--drift': `${(Math.random() - 0.5) * 260}px`, animationDelay: `${Math.random() * 0.7}s` })));
  const openSurprise = () => { setIsModalOpen(true); launchConfetti(130); };
  const openPhoto = (image, alt) => { setSelectedPhoto({ image, alt }); setPhotoZoom(1); };
  const closePhoto = () => { setSelectedPhoto(null); setPhotoZoom(1); };
  const showToast = (message) => { setToast(message); window.setTimeout(() => setToast(''), 2800); };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }), { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
    const moveGlow = (event) => { const glow = document.querySelector('.cursor-glow'); if (glow) { glow.style.left = `${event.clientX}px`; glow.style.top = `${event.clientY}px`; } };
    document.addEventListener('mousemove', moveGlow);
    return () => { observer.disconnect(); document.removeEventListener('mousemove', moveGlow); };
  }, []);

  useEffect(() => { if (!isModalOpen) document.body.classList.remove('modal-open'); else document.body.classList.add('modal-open'); return () => document.body.classList.remove('modal-open'); }, [isModalOpen]);
  useEffect(() => {
    const closeOnEscape = (event) => { if (event.key === 'Escape') { setSelectedPhoto(null); setIsModalOpen(false); } };
    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, []);

  return <>
    <div className="noise" aria-hidden="true" /><div className="cursor-glow" aria-hidden="true" /><Confetti pieces={pieces} />
    <header className="site-header"><a href="#top" className="brand" aria-label="Back to top"><span className="brand-mark">✦</span> a little note for you</a><nav className="main-nav" aria-label="Main navigation"><a href="#letter">The letter</a><a href="#memories">Our memories</a><a href="#her-world">Her world</a></nav><button className={`music-button ${isMusicOn ? 'active' : ''}`} type="button" aria-label="Toggle ambient music" onClick={() => { const next = !isMusicOn; setIsMusicOn(next); showToast(next ? 'Imagine your favorite song playing right now.' : 'A quiet little birthday moment.'); }}><span className="music-bars"><i /><i /><i /></span><span className="music-label">sound {isMusicOn ? 'on' : 'off'}</span></button></header>
    <main id="top">
      <section className="hero section-shell"><div className="hero-copy reveal"><p className="eyebrow"><span /> for the girl who makes everything brighter</p><h1>Happy birthday,<br /><em>my favorite</em> person.</h1><p className="hero-text">Today is your reminder that the world is luckier, lighter, and a whole lot more fun because you are in it.</p><div className="hero-actions"><button className="primary-button" type="button" onClick={openSurprise}>Open your surprise <span>↗</span></button><a className="text-link" href="#letter">Read your little letter <span>↓</span></a></div><div className="hero-note"><span className="mini-spark">✦</span> made with all my love, always</div></div><div className="hero-art reveal reveal-delay" aria-label="A birthday cake and celebrating pandas"><div className="sun-disc" /><PandaScene /><div className="hero-image-wrap"><img src={heroCake} alt="Colorful birthday cake with candles" /><div className="image-sticker sticker-top">for you <span>♡</span></div><div className="image-sticker sticker-bottom">make a wish ✦</div></div><div className="orbit orbit-one" /><div className="orbit orbit-two" /><span className="floating-star star-one">✦</span><span className="floating-star star-two">✧</span><span className="floating-star star-three">✷</span></div><div className="scroll-cue"><span className="scroll-line" /> keep scrolling, there is more</div></section>
      <section className="intro-strip section-shell reveal"><div className="strip-number">01</div><div className="strip-copy"><p className="eyebrow">a very important announcement</p><h2>You are deeply loved.<br /><em>In case you forgot.</em></h2></div><p className="strip-text">You bring your own kind of magic into every room. So this little corner of the internet is dedicated to celebrating exactly that.</p></section>
      <section className="letter-section section-shell" id="letter"><div className="section-heading reveal"><p className="eyebrow">02 / from my heart</p><h2>A letter for<br /><em>my built-in best didi.</em></h2><span className="hand-note">read slowly ♡</span></div><div className="letter-card reveal reveal-delay"><div className="letter-top"><span>dear sister,</span><span>12 - 09 - 2026</span></div><div className="letter-body"><p>Some people make life beautiful by doing big, impressive things. You do it in the smaller ways: with the laugh that fills a room, the advice that somehow always arrives on time, and the way you make ordinary days feel like they are worth remembering.</p><p>I hope this year gives you back every bit of joy you give to everyone else. More brave choices. More slow mornings. More reasons to laugh until your cheeks hurt.</p><p className="signature">I love you to the moon and back,<br /><em>your handsome brother (Pratik)</em> <span>♡</span></p></div><div className="letter-seal">✦</div></div></section>
      <section className="gallery-section memories section-shell" id="memories"><div className="gallery-heading reveal"><div><p className="eyebrow">04 / the two of us</p><h2>Our people,<br /><em>our memories.</em></h2></div><p>A little album of<br />the moments we keep.</p></div>{memorySections.map((section) => <MemorySection section={section} onPhotoClick={openPhoto} key={section.name} />)}</section>
      <section className="gallery-section her-world section-shell" id="her-world"><div className="gallery-heading reveal"><div><p className="eyebrow">05 / the main character</p><h2>Your world,<br /><em>in full color.</em></h2></div><p>For all the things that make<br />you wonderfully, unmistakably you.</p></div><div className="her-grid"><figure className="photo her-feature reveal" onClick={() => openPhoto(herPhotos[0][0], herPhotos[0][1])}><img src={herPhotos[0][0]} alt="Woman in a stylish outfit" /><div className="photo-label">{herPhotos[0][1]} <span>✦</span></div></figure><div className="her-stack">{herPhotos.slice(1).map(([image, caption]) => <figure className="photo reveal" key={image} onClick={() => openPhoto(image, caption)}><img src={image} alt={caption} /><figcaption><span>{caption}</span></figcaption></figure>)}</div></div></section>
      <section className="finale section-shell reveal"><div className="finale-stars">✦ &nbsp; ✧ &nbsp; ✦</div><p className="eyebrow">a message from your forever teammate</p><h2>You are the<br /><em>best didi in the world.</em></h2><p>Thank you for being my safe place, my biggest cheerleader, and my favorite person to celebrate.</p><button className="primary-button" type="button" onClick={openSurprise}>Surprise <span>✦</span></button><div className="finale-sign">with love, always <span>♡</span></div></section>
    </main>
    {isModalOpen && <div className="modal" role="dialog" aria-modal="true" aria-label="Birthday surprise"><div className="modal-backdrop" onClick={() => setIsModalOpen(false)} /><div className="modal-card"><button className="close-button" type="button" aria-label="Close surprise" onClick={() => setIsModalOpen(false)}>×</button><img className="secret-photo" src={surpriseImage} alt="Birthday surprise photo for my sister" /><h2>A secret just for you ♡</h2></div></div>}
    {selectedPhoto && <div className="photo-lightbox" role="dialog" aria-modal="true" aria-label="Expanded photo" onWheel={(event) => { event.preventDefault(); setPhotoZoom((current) => Math.min(3, Math.max(1, current + (event.deltaY < 0 ? 0.15 : -0.15)))); }}><div className="photo-lightbox-backdrop" onClick={closePhoto} /><div className="photo-lightbox-card"><button className="photo-lightbox-close" type="button" aria-label="Close photo" onClick={closePhoto}>×</button><img src={selectedPhoto.image} alt={selectedPhoto.alt} style={{ transform: `scale(${photoZoom})` }} /><div className="photo-lightbox-controls"><button type="button" onClick={() => setPhotoZoom((current) => Math.max(1, current - 0.25))} aria-label="Zoom out">−</button><span>{Math.round(photoZoom * 100)}%</span><button type="button" onClick={() => setPhotoZoom((current) => Math.min(3, current + 0.25))} aria-label="Zoom in">+</button><button type="button" onClick={() => setPhotoZoom(1)}>Reset</button></div></div></div>}
    {toast && <div className="toast show" role="status">{toast}</div>}
  </>;
}

export default App;
