// Hero, site header, mascot intro section for Five Zero Three

const SiteNav = ({ active = "home", onNav, cartCount = 0, onCart }) => {
  const links = [
    { id: "home", label: "Home" },
    { id: "menu", label: "Menu" },
    { id: "story", label: "Our Story" },
    { id: "visit", label: "Visit" },
  ];
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 40,
      background: 'rgba(242, 234, 216, 0.92)',
      backdropFilter: 'blur(8px)',
      borderBottom: '2px solid var(--ink)',
    }}>
      <div style={{
        maxWidth: 1280, margin: '0 auto', padding: '14px 28px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24
      }}>
        <div style={{display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer'}} onClick={() => onNav('home')}>
          <Mascot size={36}/>
          <Wordmark size={0.7}/>
        </div>
        <nav style={{display: 'flex', gap: 28, fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 600, letterSpacing: '0.02em'}}>
          {links.map(l => (
            <a key={l.id} onClick={() => onNav(l.id)} style={{
              cursor: 'pointer', color: 'var(--ink)',
              textDecoration: 'none',
              borderBottom: active === l.id ? '2.5px solid var(--ink)' : '2.5px solid transparent',
              paddingBottom: 2,
              transition: 'border-color 0.2s'
            }}>{l.label}</a>
          ))}
        </nav>
        <button onClick={onCart} style={{
          background: 'var(--ink)', color: 'var(--cream-light)',
          border: 'none', padding: '10px 18px',
          borderRadius: '18px 22px 16px 20px / 18px 22px 16px 20px',
          fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 14,
          cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8,
          letterSpacing: '0.02em'
        }}>
          <CupToGo size={16} stroke="var(--cream-light)"/>
          Order · {cartCount}
        </button>
      </div>
    </header>
  );
};

const Hero = ({ onOrder, onMenu }) => {
  return (
    <section style={{position: 'relative', padding: '60px 28px 80px', overflow: 'hidden'}}>
      {/* scattered beans */}
      <div style={{position: 'absolute', top: 80, right: 140, opacity: 0.4}}><Bean size={22} rotate={35}/></div>
      <div style={{position: 'absolute', top: 180, right: 80, opacity: 0.4}}><Bean size={18} rotate={-20}/></div>
      <div style={{position: 'absolute', top: 260, right: 200, opacity: 0.4}}><Bean size={20} rotate={80}/></div>
      <div style={{position: 'absolute', bottom: 120, left: 60, opacity: 0.3}}><Bean size={26} rotate={-45}/></div>
      <div style={{position: 'absolute', bottom: 60, left: 180, opacity: 0.3}}><Bean size={20} rotate={15}/></div>

      <div style={{maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 420px', gap: 60, alignItems: 'center'}}>
        <div>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            fontFamily: 'var(--font-mono)', fontSize: 12,
            textTransform: 'uppercase', letterSpacing: '0.15em',
            padding: '6px 14px', border: '2px solid var(--ink)',
            borderRadius: '10px 14px 8px 12px',
            marginBottom: 28
          }}>
            <span style={{width: 6, height: 6, background: 'var(--ink)', borderRadius: '50%'}}/>
            Est. 2024 · Nizamabad
          </div>
          <h1 style={{
            fontFamily: 'var(--font-hand-bold)',
            fontSize: 88, lineHeight: 0.95,
            margin: '0 0 20px', letterSpacing: '-0.02em',
          }}>
            Single-origin<br/>coffee.<br/>
            <span style={{fontFamily: 'var(--font-hand)', fontSize: 76, fontStyle: 'italic', fontWeight: 700}}>
              Stories on the side.
            </span>
          </h1>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 18, lineHeight: 1.5, maxWidth: 520,
            color: 'var(--ink-soft)', marginBottom: 36
          }}>
            Pulled slow, served honest. A small cafe on Level 1 of Hotel Amara, where we take
            our beans seriously and ourselves considerably less so.
          </p>
          <div style={{display: 'flex', gap: 14, flexWrap: 'wrap'}}>
            <button onClick={onOrder} style={btnPrimary}>
              Start an order
              <Arrow w={28} stroke="var(--cream-light)"/>
            </button>
            <button onClick={onMenu} style={btnGhost}>
              Browse the menu
            </button>
          </div>

          <div style={{display: 'flex', gap: 40, marginTop: 56, paddingTop: 28, borderTop: '1.5px dashed var(--ink)', maxWidth: 560}}>
            <Stat label="Dine-in" value="8 tables"/>
            <Stat label="Takeaway" value="~8 min"/>
            <Stat label="Delivery" value="4 km radius"/>
          </div>
        </div>

        <div style={{position: 'relative', alignSelf: 'center'}}>
          <div style={{
            background: 'var(--cream-light)',
            border: '3px solid var(--ink)',
            borderRadius: '28px 24px 32px 26px',
            padding: '40px 32px',
            transform: 'rotate(2deg)',
            position: 'relative',
            boxShadow: '12px 12px 0 rgba(26, 22, 18, 0.08)'
          }}>
            <div style={{display: 'flex', justifyContent: 'center', marginBottom: 16}}>
              <Mascot size={180}/>
            </div>
            <div style={{textAlign: 'center'}}>
              <div style={{fontFamily: 'var(--font-hand-bold)', fontSize: 28, lineHeight: 1, marginBottom: 6}}>
                Hi, I'm Moka.
              </div>
              <div style={{fontFamily: 'var(--font-hand)', fontSize: 22, color: 'var(--ink-soft)'}}>
                I'll take your order →
              </div>
            </div>
            <div style={{
              position: 'absolute', top: -16, right: -16,
              background: 'var(--ink)', color: 'var(--cream-light)',
              fontFamily: 'var(--font-display)', fontSize: 22,
              padding: '10px 14px', borderRadius: '50%',
              width: 72, height: 72, display: 'flex', alignItems: 'center', justifyContent: 'center',
              transform: 'rotate(-8deg)'
            }}>
              503
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Stat = ({ label, value }) => (
  <div>
    <div style={{fontFamily: 'var(--font-mono)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--ink-muted)', marginBottom: 4}}>
      {label}
    </div>
    <div style={{fontFamily: 'var(--font-hand-bold)', fontSize: 24}}>{value}</div>
  </div>
);

const btnPrimary = {
  background: 'var(--ink)', color: 'var(--cream-light)',
  border: 'none', padding: '16px 28px',
  borderRadius: '20px 24px 18px 22px',
  fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 16,
  cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 12,
  letterSpacing: '0.02em'
};
const btnGhost = {
  background: 'transparent', color: 'var(--ink)',
  border: '2.5px solid var(--ink)', padding: '14px 28px',
  borderRadius: '20px 24px 18px 22px',
  fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 16,
  cursor: 'pointer', letterSpacing: '0.02em'
};

window.SiteNav = SiteNav;
window.Hero = Hero;
window.btnPrimary = btnPrimary;
window.btnGhost = btnGhost;
