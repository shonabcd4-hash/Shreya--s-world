:root {
  --cream: #fff7e8;
  --blush: #f7dde5;
  --lavender: #e8e0fa;
  --powder: #dceffc;
  --mint: #ddf2df;
  --brown: #594b45;
  --coral: #f29b91;
  --ink: #2e2a29;
  --paper: rgba(255, 255, 255, 0.7);
  --border: rgba(89, 75, 69, 0.14);
}

* { box-sizing: border-box; }
html, body, #root {
  margin: 0;
  min-height: 100%;
  min-width: 100%;
  font-family: 'Segoe UI', sans-serif;
  background: linear-gradient(180deg, #fffaf2 0%, #fff5f0 100%);
  color: var(--ink);
}
body { min-height: 100vh; }
button, a { font: inherit; }
button { cursor: pointer; }

.intro-shell,
.app-shell {
  min-height: 100vh;
  background: linear-gradient(180deg, #fef9f2 0%, #f9f1ff 100%);
}

.intro-shell {
  position: relative;
  display: grid;
  place-items: center;
  overflow: hidden;
  padding: 24px;
}

.sky-glow {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at top, rgba(255, 246, 180, 0.9), transparent 50%);
}

.cloud {
  position: absolute;
  width: 240px;
  height: 72px;
  border-radius: 999px;
  background: rgba(255,255,255,0.7);
  box-shadow: 0 18px 30px rgba(93,119,142,0.08);
  animation: drift 18s ease-in-out infinite;
}
.cloud::before,
.cloud::after {
  content: '';
  position: absolute;
  background: rgba(255,255,255,0.78);
  border-radius: 50%;
}
.cloud::before {
  width: 72px; height: 72px; left: 30px; top: -22px;
}
.cloud::after {
  width: 96px; height: 96px; right: 30px; top: -32px;
}
.cloud-one { top: 14%; left: 8%; }
.cloud-two { top: 18%; right: 12%; animation-delay: 2s; }
.cloud-three { bottom: 16%; left: 24%; animation-delay: 4s; }

.intro-card {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 28px;
  width: min(980px, 92vw);
  min-height: 560px;
  padding: 32px;
  border-radius: 32px;
  border: 1px solid rgba(89, 75, 69, 0.08);
  background: rgba(255,255,255,0.45);
  backdrop-filter: blur(8px);
  box-shadow: 0 24px 60px rgba(75,56,46,0.12);
}

.island-scene {
  position: relative;
  border-radius: 26px;
  background: linear-gradient(180deg, rgba(220,239,252,0.7), rgba(221,242,223,0.9));
  overflow: hidden;
  min-height: 420px;
}
.island-scene::before {
  content: '';
  position: absolute;
  inset: auto 10% 10% 10%;
  height: 170px;
  border-radius: 50% 50% 0 0;
  background: linear-gradient(180deg, #cdd8b5, #9dbb8b);
  box-shadow: inset 0 10px 18px rgba(255,255,255,0.24);
}
.island-scene::after {
  content: '';
  position: absolute;
  inset: auto 20% 40% 20%;
  height: 85px;
  border-radius: 50%;
  background: rgba(255,255,255,0.6);
}

.tiny-plant {
  position: absolute;
  bottom: 80px;
  width: 24px;
  height: 52px;
  border-radius: 999px;
  background: linear-gradient(180deg, #8fc98d, #6aaf6d);
}
.tiny-plant::before,
.tiny-plant::after {
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: rgba(215,242,214,0.8);
  top: -18px;
}
.tiny-plant::before { left: -8px; }
.tiny-plant::after { right: -8px; }
.plant-one { left: 18%; }
.plant-two { left: 50%; }
.plant-three { right: 18%; }

.door-arch {
  position: absolute;
  bottom: 120px;
  left: 50%;
  transform: translateX(-50%);
  width: 110px;
  height: 120px;
  border-radius: 18px 18px 10px 10px;
  background: linear-gradient(180deg, #f4d7bf, #d8b18d);
  border: 8px solid rgba(114,82,61,0.22);
  box-shadow: 0 18px 20px rgba(65,52,47,0.08);
}
.door-arch::before {
  content: '';
  position: absolute;
  inset: 12px;
  border-radius: 14px;
  background: rgba(255,255,255,0.4);
}

.floating-budgie,
.floating-turtle {
  position: absolute;
  animation: float 6s ease-in-out infinite;
}
.floating-budgie {
  top: 18%;
  left: 18%;
  width: 44px;
  height: 28px;
  border-radius: 20px 24px 18px 24px;
  background: linear-gradient(135deg, #f9d39d, #edb055);
  transform: rotate(-10deg);
}
.floating-budgie::before,
.floating-budgie::after {
  content: '';
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255,255,255,0.6);
  top: -8px;
}
.floating-budgie::before { left: 10px; }
.floating-budgie::after { right: 10px; }

.floating-turtle {
  right: 16%;
  bottom: 95px;
  width: 58px;
  height: 32px;
  border-radius: 20px 22px 18px 18px;
  background: linear-gradient(180deg, #9bdc7a, #6bbb62);
}
.floating-turtle::before,
.floating-turtle::after {
  content: '';
  position: absolute;
  width: 14px;
  height: 18px;
  border-radius: 50%;
  background: rgba(245,248,232,0.8);
  top: -6px;
}
.floating-turtle::before { left: 12px; }
.floating-turtle::after { right: 12px; }

.intro-copy {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
}

.eyebrow {
  margin: 0;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: rgba(89,75,69,0.7);
}

.intro-copy h1,
.map-header h2,
.location-header p,
.info-card h3,
.story-card h3,
.memory-card h3,
.final-card h4 {
  margin: 0;
  color: var(--brown);
}

.intro-copy h1 {
  font-size: clamp(2.2rem, 5vw, 4rem);
  line-height: 1.05;
}

.lead,
.soft-text,
.info-card p,
.story-card p,
.memory-card p,
.final-card p,
.location-header p,
.map-header h2 {
  margin: 0;
  line-height: 1.6;
  color: rgba(46,42,41,0.9);
}
.soft-text { color: rgba(46,42,41,0.72); }

.cta-row,
.music-toggle-row,
.toolbar { display: flex; flex-wrap: wrap; gap: 12px; }

.primary-btn,
.ghost-btn,
.chip-btn,
.map-node,
.chapter-tab,
.close-btn { transition: transform 0.22s ease, box-shadow 0.22s ease; }

.primary-btn,
.ghost-btn,
.chip-btn {
  border: none;
  border-radius: 999px;
  padding: 0.88rem 1.25rem;
  font-weight: 600;
}
.primary-btn {
  background: linear-gradient(135deg, var(--coral), #f7b5ad);
  color: #fff;
  box-shadow: 0 14px 24px rgba(242,155,145,0.3);
}
.ghost-btn {
  background: rgba(255,255,255,0.7);
  color: var(--brown);
  border: 1px solid rgba(89,75,69,0.08);
}
.chip-btn {
  background: rgba(255,255,255,0.65);
  color: var(--brown);
  border: 1px solid rgba(89,75,69,0.06);
}
.primary-btn.small,
.ghost-btn.subtle { padding: 0.7rem 1rem; font-size: 0.92rem; }

.topbar {
  display: flex; justify-content: space-between; align-items: center; gap: 16px;
  width: min(1200px, 94vw); margin: 0 auto; padding: 18px 0 10px;
}
.brand-block { display: flex; align-items: center; gap: 12px; }
.brand-mark {
  display: grid; place-items: center; width: 40px; height: 40px; border-radius: 50%;
  background: linear-gradient(135deg, var(--lavender), var(--blush)); color: var(--brown); font-size: 1.2rem;
}
.brand-label { margin: 0; font-weight: 700; color: var(--brown); }
.brand-block small { color: rgba(89,75,69,0.7); }

.world-view {
  width: min(1200px, 94vw); margin: 0 auto 26px; display: grid; grid-template-columns: minmax(260px, 340px) minmax(0, 1fr); gap: 24px;
}
.map-panel,
.location-panel {
  background: rgba(255,255,255,0.5); border: 1px solid var(--border); border-radius: 28px; box-shadow: 0 24px 50px rgba(80,61,54,0.07);
}
.map-panel { padding: 20px 18px 18px; }
.map-header { margin-bottom: 18px; }
.map-scene {
  position: relative; height: 500px; border-radius: 24px; overflow: hidden; background: linear-gradient(180deg, #dfeffb 0%, #e8f5e5 100%); border: 1px solid rgba(89,75,69,0.06);
}
.map-bg {
  position: absolute; inset: 0;
  background: radial-gradient(circle at 50% 30%, rgba(255,255,255,0.7), transparent 34%), linear-gradient(180deg, rgba(255,255,255,0.24), rgba(255,255,255,0));
}
.map-node {
  position: absolute; display: grid; place-items: center; padding: 0.5rem 0.8rem; border-radius: 999px; border: none; background: rgba(255,255,255,0.76); color: var(--brown); box-shadow: 0 12px 22px rgba(89,75,69,0.12); font-weight: 600;
}
.map-node.active { background: linear-gradient(135deg, var(--mint), rgba(209,236,255,0.8)); transform: scale(1.04); }
.node-garden { top: 16%; left: 18%; }
.node-friends { top: 28%; right: 22%; }
.node-memory { top: 48%; left: 26%; }
.node-story { top: 56%; right: 18%; }
.node-letter { bottom: 14%; left: 27%; }
.node-final { bottom: 12%; right: 20%; }

.location-panel { padding: 18px; }
.location-header { display: flex; justify-content: space-between; gap: 12px; align-items: center; margin-bottom: 20px; }
.location-content { display: grid; gap: 18px; }

.garden-visual,
.pet-scene,
.memory-tree-visual,
.house-scene,
.night-sky {
  position: relative; min-height: 280px; border-radius: 24px; overflow: hidden; border: 1px solid rgba(89,75,69,0.08);
}
.garden-visual { background: linear-gradient(180deg, rgba(239,248,255,0.8), rgba(221,242,223,0.9)); }
.sun-core {
  position: absolute; top: 26px; right: 64px; width: 76px; height: 76px; border-radius: 50%;
  background: radial-gradient(circle at 35% 35%, #fff9d5, #f6d87f 52%, #f0c35a 100%); box-shadow: 0 0 24px rgba(255,204,102,0.7);
}
.garden-object {
  position: absolute; display: grid; place-items: center; width: 46px; height: 46px; border: none; border-radius: 50%; color: var(--brown); background: rgba(255,255,255,0.42);
}
.garden-1 { left: 12%; top: 40%; }
.garden-2 { left: 28%; top: 56%; }
.garden-3 { right: 28%; top: 46%; }
.garden-4 { right: 18%; top: 62%; }

.card-grid { display: grid; gap: 18px; }
.two-up { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.info-card {
  background: rgba(255,255,255,0.68); border: 1px solid rgba(89,75,69,0.08); border-radius: 22px; padding: 20px; box-shadow: 0 14px 25px rgba(73,64,57,0.05);
}
.large { min-height: 180px; }

.message-popup,
.letter-overlay {
  position: fixed; inset: 0; display: grid; place-items: center; background: rgba(41,32,30,0.32); z-index: 20;
}
.message-box,
.letter-sheet {
  position: relative; width: min(420px, 82vw); padding: 28px 22px 18px; border-radius: 26px; background: linear-gradient(180deg, rgba(255,255,255,0.94), rgba(255,245,229,0.96)); box-shadow: 0 26px 42px rgba(42,31,27,0.16);
}
.message-box.small { width: min(300px, 72vw); }
.close-btn {
  position: absolute; top: 10px; right: 12px; width: 30px; height: 30px; border: none; border-radius: 50%; background: rgba(89,75,69,0.08); color: var(--brown);
}
.paper-badge {
  display: inline-block; margin-bottom: 10px; padding: 0.4rem 0.7rem; border-radius: 999px; font-size: 0.72rem; font-weight: 700; letter-spacing: 0.08em; background: rgba(232,224,250,0.7); color: var(--brown); text-transform: uppercase;
}

.pet-scene { background: linear-gradient(180deg, rgba(214,229,251,0.75), rgba(221,242,223,0.9)); }
.branch {
  position: absolute; height: 16px; border-radius: 999px; background: linear-gradient(90deg, #8f6b49, #c69a6d);
}
.branch-one { left: 22%; top: 28%; width: 180px; transform: rotate(-18deg); }
.branch-two { right: 18%; top: 32%; width: 180px; transform: rotate(18deg); }

.pet { position: absolute; border: none; background: transparent; }
.pet-name { position: absolute; top: -22px; left: 50%; transform: translateX(-50%); font-size: 0.72rem; font-weight: 700; color: var(--brown); white-space: nowrap; }
.pet-body,
.pet-shell { position: relative; display: block; border-radius: 50%; }
.budgie { left: 24%; bottom: 40%; }
.budgie .pet-body { width: 60px; height: 40px; background: linear-gradient(135deg, #f6d292, #e0a95b); border-radius: 16px 28px 16px 28px; }
.budgie.excited .pet-body { transform: translateY(-6px); }
.budgie::before,
.budgie::after { content: ''; position: absolute; }
.budgie::before { width: 18px; height: 18px; border-radius: 50%; background: rgba(255,255,255,0.8); left: 8px; top: -8px; }
.budgie::after { width: 22px; height: 18px; border-radius: 50% 50% 30% 30%; background: rgba(255,255,255,0.5); left: 28px; top: -2px; }

.turtle { right: 24%; bottom: 28%; }
.turtle .pet-shell { width: 76px; height: 42px; background: linear-gradient(180deg, #8ad58d, #5ba461); border-radius: 28px 30px 24px 24px; }
.turtle.moving .pet-shell { transform: translateX(12px); }

.memory-tree-visual { background: linear-gradient(180deg, rgba(232,245,221,0.9), rgba(244,232,220,0.9)); }
.memory-tree {
  position: absolute; left: 50%; bottom: 0; width: 220px; height: 200px; transform: translateX(-50%); background: linear-gradient(180deg, #a17045, #78563a); border-radius: 50% 50% 12px 12px; box-shadow: inset 0 18px 14px rgba(255,255,255,0.12);
}
.memory-tree::before,
.memory-tree::after {
  content: ''; position: absolute; inset: 32px 20px auto 20px; height: 120px; border-radius: 50%; background: rgba(150,110,85,0.4);
}
.memory-leaf {
  position: absolute; width: 22px; height: 22px; border: none; border-radius: 50%; background: linear-gradient(135deg, rgba(244,214,122,0.98), rgba(255,247,210,0.9)); color: #92673d; box-shadow: 0 8px 18px rgba(123,102,77,0.18);
}
.memory-leaf.selected { background: linear-gradient(135deg, #f0a9a0, #f7dfbe); }
.memory-card { min-height: 160px; }
.date-label { color: rgba(89,75,69,0.72); font-size: 0.82rem; letter-spacing: 0.06em; text-transform: uppercase; }

.story-view { grid-template-columns: minmax(220px, 270px) minmax(0, 1fr); }
.timeline-sidebar { display: grid; gap: 10px; }
.chapter-tab {
  display: flex; align-items: center; gap: 10px; padding: 0.8rem 0.9rem; border: 1px solid rgba(89,75,69,0.08); border-radius: 14px; background: rgba(255,255,255,0.6); color: var(--brown); text-align: left;
}
.chapter-tab.selected { background: linear-gradient(135deg, rgba(220,239,252,0.7), rgba(232,224,250,0.8)); }

.house-scene { background: linear-gradient(180deg, rgba(250,241,214,0.8), rgba(229,228,253,0.8)); }
.house-scene::before {
  content: ''; position: absolute; left: 50%; bottom: 50px; transform: translateX(-50%); width: 250px; height: 180px; border-radius: 18px 18px 12px 12px; background: linear-gradient(180deg, #f7e7d7, #e2c5a5); box-shadow: 0 14px 24px rgba(89,75,69,0.08);
}
.house-scene::after {
  content: ''; position: absolute; left: 50%; bottom: 182px; transform: translateX(-50%); width: 0; height: 0; border-left: 98px solid transparent; border-right: 98px solid transparent; border-bottom: 78px solid #ecd3b7;
}
.house-window {
  position: absolute; left: 50%; bottom: 90px; transform: translateX(-50%); width: 100px; height: 80px; border-radius: 18px; background: linear-gradient(180deg, rgba(244,236,177,0.95), rgba(255,197,110,0.7)); box-shadow: inset 0 0 18px rgba(255,255,255,0.4);
}
.letter-envelope {
  position: absolute; left: 50%; bottom: 38px; transform: translateX(-50%); width: 150px; height: 88px; border: none; border-radius: 12px; background: linear-gradient(180deg, #f7d6d1, #f2b9b0); box-shadow: 0 16px 24px rgba(89,75,69,0.12); color: var(--brown); font-weight: 700;
}
.letter-envelope::before,
.letter-envelope::after { content: ''; position: absolute; inset: 0; background: linear-gradient(135deg, transparent 49.5%, rgba(255,255,255,0.6) 50%, transparent 51%); }

.letter-sheet { width: min(760px, 88vw); max-height: 80vh; overflow: auto; padding: 28px 24px 18px; background: linear-gradient(180deg, #fffdf8, #fff2dc); border: 1px solid rgba(89,75,69,0.06); border-radius: 24px; }
.letter-body { display: grid; gap: 10px; margin-top: 18px; color: #413937; line-height: 1.8; }
.letter-body p { margin: 0; }

.night-sky { background: linear-gradient(180deg, #1f2d4d, #2c3058 55%, #f3d4dd 100%); }
.moon {
  position: absolute; top: 26px; right: 52px; width: 72px; height: 72px; border-radius: 50%;
  background: radial-gradient(circle at 35% 35%, #fffef3, #fef3bf 66%, #ebd77a 100%); box-shadow: 0 0 26px rgba(255,247,180,0.8);
}
.star {
  position: absolute; width: 8px; height: 8px; background: rgba(255,255,255,0.9); border-radius: 50%; box-shadow: 0 0 12px rgba(255,255,255,0.8);
}
.star-one { top: 20%; left: 20%; }
.star-two { top: 34%; right: 26%; }
.star-three { bottom: 28%; left: 38%; }

.budgie-rest,
.turtle-rest {
  position: absolute; bottom: 24px; width: 70px; height: 50px; border-radius: 50%; opacity: 0.8;
}
.budgie-rest { left: 30%; background: linear-gradient(135deg, #ebc37b, #d69352); }
.turtle-rest { right: 28%; width: 82px; height: 52px; background: linear-gradient(180deg, #7ac57b, #5da864); }

.final-card { display: grid; gap: 14px; }
.quote { font-size: clamp(1.3rem, 2.1vw, 2rem); font-weight: 700; color: var(--brown); }
.final-interaction { display: grid; gap: 12px; padding-top: 12px; }
.closing-line { font-size: 1.06rem; font-weight: 600; color: var(--brown); }

.primary-btn:hover,
.ghost-btn:hover,
.chip-btn:hover,
.map-node:hover,
.chapter-tab:hover,
.close-btn:hover { transform: translateY(-1px); }

@keyframes drift { 0%,100% { transform: translateX(0px); } 50% { transform: translateX(20px); } }
@keyframes float { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-12px); } }

@media (max-width: 860px) {
  .intro-card { grid-template-columns: 1fr; }
  .world-view,
  .story-view,
  .two-up { grid-template-columns: 1fr; }
  .topbar,
  .location-header { flex-direction: column; align-items: flex-start; }
}

@media (max-width: 540px) {
  .intro-shell,
  .app-shell { padding: 12px 0; }
  .intro-card,
  .map-panel,
  .location-panel { border-radius: 22px; }
  .intro-card { padding: 20px; }
  .map-scene { height: 420px; }
  .toolbar,
  .cta-row { width: 100%; }
  .toolbar button,
  .cta-row button { width: 100%; justify-content: center; }
}
