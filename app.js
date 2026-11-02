* {
  box-sizing: border-box;
}

:root {
  --bg: #05140e;
  --bg-2: #0b1d19;
  --panel: rgba(15, 28, 25, 0.86);
  --panel-strong: rgba(11, 20, 19, 0.96);
  --card: rgba(19, 35, 31, 0.9);
  --card-soft: rgba(255, 255, 255, 0.03);
  --line: rgba(255, 255, 255, 0.08);
  --text: #edf7f4;
  --muted: #a7c0bb;
  --green: #79f7c7;
  --blue: #8bc9ff;
  --gold: #ffd166;
  --red: #ff7d7d;
  --shadow: rgba(0, 0, 0, 0.28);
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-height: 100vh;
  font-family: Inter, "Segoe UI", sans-serif;
  color: var(--text);
  background:
    radial-gradient(circle at top left, rgba(121, 247, 199, 0.1), transparent 30%),
    radial-gradient(circle at top right, rgba(139, 201, 255, 0.1), transparent 25%),
    linear-gradient(180deg, #040d0b 0%, var(--bg) 34%, #07150f 100%);
}

img, video {
  max-width: 100%;
  display: block;
}

button, select, input {
  font: inherit;
}

button {
  cursor: pointer;
}

.container {
  width: min(1180px, calc(100% - 28px));
  margin: 0 auto;
}

.section {
  padding: 44px 0;
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 20;
  backdrop-filter: blur(14px);
  background: rgba(6, 18, 15, 0.74);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 78px;
  gap: 18px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 800;
}

.brand-mark {
  width: 36px;
  height: 36px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  color: #062f1f;
  background: linear-gradient(135deg, var(--green), var(--blue));
  box-shadow: 0 14px 30px rgba(121, 247, 199, 0.25);
}

.nav-links {
  display: flex;
  gap: 24px;
  color: var(--muted);
}

.nav-links a {
  text-decoration: none;
  color: inherit;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.button {
  border: none;
  border-radius: 999px;
  padding: 0.82rem 1.2rem;
  font-weight: 700;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.button:hover {
  transform: translateY(-1px);
}

.button.primary {
  color: #062d1d;
  background: linear-gradient(135deg, var(--green), #aaf7d1);
  box-shadow: 0 18px 30px rgba(121, 247, 199, 0.2);
}

.button.secondary {
  color: var(--text);
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.07);
}

.hero {
  padding-top: 72px;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  align-items: center;
  gap: 28px;
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 999px;
  border: 1px solid rgba(121, 247, 199, 0.2);
  background: rgba(121, 247, 199, 0.08);
  color: var(--green);
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-weight: 700;
}

h1 {
  margin: 18px 0 0;
  font-size: clamp(3rem, 6vw, 5.2rem);
  line-height: 0.92;
  letter-spacing: -0.06em;
}

.gradient {
  background: linear-gradient(135deg, var(--green), var(--blue));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.lead {
  margin-top: 18px;
  max-width: 580px;
  color: var(--muted);
  line-height: 1.7;
  font-size: 1.06rem;
}

.cta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 28px;
}

.hero-stats {
  margin-top: 32px;
  display: grid;
  grid-template-columns: repeat(3, minmax(120px, 1fr));
  gap: 18px;
}

.stat-card {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 16px 18px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.025);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.stat-card strong {
  font-size: 1.8rem;
}

.stat-card span {
  color: var(--muted);
  font-size: 0.85rem;
}

.hero-panel {
  position: relative;
  min-height: 520px;
  border-radius: 30px;
  background: linear-gradient(180deg, rgba(15, 28, 25, 0.9), rgba(9, 16, 15, 0.96));
  border: 1px solid rgba(255,255,255,0.06);
  overflow: hidden;
  box-shadow: var(--shadow);
}

.panel-glow {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 72% 30%, rgba(121,247,199,0.18), transparent 24%),
    radial-gradient(circle at 30% 70%, rgba(139,201,255,0.1), transparent 32%);
}

.athlete-card {
  position: absolute;
  right: 18px;
  left: 18px;
  bottom: 18px;
  padding: 18px 18px 16px;
  border-radius: 24px;
  background: rgba(7, 17, 15, 0.9);
  border: 1px solid rgba(255,255,255,0.06);
  box-shadow: 0 25px 55px rgba(0,0,0,0.3);
}

.card-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--muted);
  font-size: 0.74rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.ring {
  width: 170px;
  height: 170px;
  margin: 18px auto 8px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: conic-gradient(var(--green) 0 76%, rgba(255,255,255,0.08) 76% 100%);
  box-shadow: inset 0 0 32px rgba(0,0,0,0.18);
}

.ring-inner {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: #06130f;
  font-size: 2rem;
  font-weight: 800;
}

.macro-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
}

.macro {
  background: rgba(255,255,255,0.02);
  border: 1px solid rgba(255,255,255,0.05);
  border-radius: 14px;
  padding: 12px 10px;
  text-align: center;
}

.macro span {
  color: var(--muted);
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.macro strong {
  display: block;
  margin-top: 6px;
  font-size: 1.1rem;
}

.section-heading {
  margin-bottom: 30px;
}

.section-heading h2 {
  margin: 0;
  font-size: clamp(2.1rem, 4vw, 3rem);
  letter-spacing: -0.06em;
}

.section-heading p {
  margin-top: 10px;
  max-width: 640px;
  color: var(--muted);
  line-height: 1.7;
}

.compact {
  margin-bottom: 20px;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.info-card, .dashboard-card, .meal-card, .analysis-panel, .upload-box, .final-cta, .cta-box {
  background: linear-gradient(180deg, rgba(15, 28, 25, 0.94), rgba(8, 16, 15, 0.94));
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 24px;
  box-shadow: var(--shadow);
}

.info-card {
  padding: 22px;
}

.icon {
  width: 52px;
  height: 52px;
  display: grid;
  place-items: center;
  font-size: 1.3rem;
  border-radius: 16px;
  background: linear-gradient(135deg, rgba(121,247,199,0.18), rgba(139,201,255,0.18));
  border: 1px solid rgba(255,255,255,0.05);
}

.info-card h3 {
  margin: 16px 0 10px;
  font-size: 1.4rem;
}

.info-card p {
  margin: 0;
  color: var(--muted);
  line-height: 1.7;
}

.sport-picker {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 26px;
}

.sport-chip {
  border: 1px solid rgba(255,255,255,0.08);
  background: rgba(255,255,255,0.025);
  color: var(--text);
  border-radius: 999px;
  padding: 0.7rem 1rem;
  font-weight: 700;
  transition: 0.15s ease;
}

.sport-chip.selected {
  background: linear-gradient(135deg, rgba(121,247,199,0.18), rgba(139,201,255,0.16));
  border-color: rgba(121,247,199,0.25);
  color: var(--green);
}

.sports-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 18px;
}

.dashboard-card {
  padding: 22px;
}

.card-topline {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin-bottom: 18px;
}

#sportBadge {
  font-size: 1.1rem;
  font-weight: 800;
}

.pill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 110px;
  padding: 8px 10px;
  border-radius: 999px;
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 700;
}

.pill.success {
  background: rgba(121,247,199,0.08);
  border: 1px solid rgba(121,247,199,0.22);
  color: var(--green);
}

.metrics-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.metric-box {
  border-radius: 16px;
  background: rgba(255,255,255,0.02);
  border: 1px solid rgba(255,255,255,0.05);
  padding: 16px 14px;
}

.metric-box span {
  display: block;
  color: var(--muted);
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 10px;
}

.metric-box strong {
  font-size: 1.08rem;
}

.coach-note {
  margin-top: 18px;
  padding: 18px;
  line-height: 1.7;
  border-radius: 18px;
  background: linear-gradient(180deg, rgba(121,247,199,0.06), rgba(139,201,255,0.03));
  border: 1px solid rgba(121,247,199,0.18);
  color: #dffdf1;
}

.meal-card {
  padding: 22px;
}

.meal-card h3 {
  margin-top: 0;
  margin-bottom: 16px;
  font-size: 1.4rem;
}

.meal-list {
  display: grid;
  gap: 12px;
}

.meal-row {
  display: grid;
  grid-template-columns: 1fr auto auto;
  gap: 8px 10px;
  padding: 12px 14px;
  border-radius: 14px;
  background: rgba(255,255,255,0.02);
  border: 1px solid rgba(255,255,255,0.04);
  align-items: center;
}

.meal-row .time {
  font-weight: 800;
  color: var(--green);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.72rem;
}

.meal-row .name {
  font-weight: 700;
}

.meal-row .tag {
  padding: 6px 8px;
  border-radius: 999px;
  font-size: 0.72rem;
  color: var(--green);
  background: rgba(121,247,199,0.08);
  border: 1px solid rgba(121,247,199,0.18);
  text-align: center;
}

.meal-row .kcal {
  color: var(--muted);
  text-align: right;
  font-weight: 700;
}

.video-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
}

.upload-box {
  position: relative;
  min-height: 340px;
  display: grid;
  place-items: center;
  overflow: hidden;
  border: 1px dashed rgba(121,247,199,0.38);
  background: rgba(121,247,199,0.04);
}

#videoUpload {
  display: none;
}

.upload-label {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.85rem 1.2rem;
  border-radius: 999px;
  background: linear-gradient(135deg, var(--green), var(--blue));
  color: #052a1d;
  font-weight: 800;
  cursor: pointer;
}

#previewVideo {
  display: none;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 24px;
  background: #07110d;
}

.analysis-panel {
  padding: 22px;
}

.analysis-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 18px;
}

.analysis-header h3 {
  margin: 0;
  font-size: 1.35rem;
}

#analysisSport {
  padding: 0.7rem 0.8rem;
  border-radius: 12px;
  border: 1px solid rgba(255,255,255,0.08);
  background: rgba(255,255,255,0.02);
  color: var(--text);
}

.result-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.result-box {
  background: rgba(255,255,255,0.025);
  border: 1px solid rgba(255,255,255,0.05);
  border-radius: 15px;
  padding: 16px 14px;
}

.result-box span {
  display: block;
  color: var(--muted);
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 10px;
}

.result-box strong {
  font-size: 1.12rem;
}

.analysis-note {
  margin-top: 18px;
  padding: 18px;
  line-height: 1.7;
  border-radius: 18px;
  background: linear-gradient(180deg, rgba(121,247,199,0.05), rgba(139,201,255,0.02));
  border: 1px solid rgba(121,247,199,0.18);
  color: #e2f9f0;
}

.final-cta {
  padding: 0;
}

.cta-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 22px;
  padding: 28px 24px;
  background: linear-gradient(135deg, rgba(121,247,199,0.08), rgba(139,201,255,0.08));
}

.cta-box h3 {
  margin: 0;
  font-size: clamp(1.8rem, 3vw, 2.7rem);
  letter-spacing: -0.05em;
}

.cta-box p {
  margin: 8px 0 0;
  color: var(--muted);
  line-height: 1.7;
}

@media (max-width: 920px) {
  .hero-grid,
  .sports-grid,
  .video-grid {
    grid-template-columns: 1fr;
  }

  .nav-links {
    display: none;
  }

  .info-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 560px) {
  .hero-stats,
  .metrics-grid,
  .result-grid {
    grid-template-columns: 1fr;
  }

  .cta-box {
    flex-direction: column;
    align-items: flex-start;
  }

  .card-topline,
  .analysis-header {
    flex-direction: column;
    align-items: flex-start;
  }
}
