// In-store branding artifacts for Five Zero Three

// === 1. WALL MENU BOARD (landscape, mounted behind counter) ===
const MenuBoard = () => (
  <div style={{
    width: '100%', aspectRatio: '16 / 10',
    background: 'var(--ink)', color: 'var(--cream-light)',
    position: 'relative', overflow: 'hidden',
    padding: '36px 44px',
    border: '8px solid #3a2f24',
    boxShadow: 'inset 0 0 40px rgba(0,0,0,0.4)',
  }}>
    {/* Header */}
    <div style={{display: 'flex', alignItems: 'center', gap: 18, marginBottom: 20, borderBottom: '2px solid var(--cream-light)', paddingBottom: 14}}>
      <Mascot size={64} stroke="var(--cream-light)"/>
      <div style={{flex: 1, fontFamily: 'var(--font-hand-bold)', fontSize: 42, lineHeight: 0.9, display: 'flex', alignItems: 'flex-start', gap: 8, whiteSpace: 'nowrap'}}>
        <div>FIVE ZERO THREE</div>
        <div style={{fontFamily: 'var(--font-display)', fontSize: 16, marginTop: 6}}>503</div>
      </div>
      <div style={{textAlign: 'right'}}>
        <div style={{fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.25em', opacity: 0.6}}>TODAY</div>
        <div style={{fontFamily: 'var(--font-hand-bold)', fontSize: 22}}>Fresh Brew</div>
      </div>
    </div>

    {/* 3-column menu */}
    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 28, height: 'calc(100% - 120px)'}}>
      {['coffee', 'waffles', 'mains'].map(key => (
        <div key={key}>
          <div style={{fontFamily: 'var(--font-display)', fontSize: 18, letterSpacing: '0.1em', borderBottom: '1.5px solid var(--cream-light)', paddingBottom: 4, marginBottom: 8}}>
            {MENU[key].name.toUpperCase()}
          </div>
          {MENU[key].items.slice(0, 6).map((it, i) => (
            <div key={i} style={{display: 'flex', justifyContent: 'space-between', padding: '4px 0', fontFamily: 'var(--font-body)', fontSize: 12, borderBottom: '1px dotted rgba(250,245,234,0.2)', gap: 10}}>
              <span style={{fontWeight: 600}}>{it.n}{it.hero && ' ★'}</span>
              <span style={{fontFamily: 'var(--font-mono)', opacity: 0.8}}>₹{it.p}</span>
            </div>
          ))}
        </div>
      ))}
    </div>

    {/* Footer */}
    <div style={{position: 'absolute', bottom: 24, left: 44, right: 44, display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.7}}>
      <span>★ HOUSE PICKS</span>
      <span>SCAN TO ORDER →</span>
      <span>LEVEL 1 · HOTEL AMARA</span>
    </div>

    <div style={{position: 'absolute', top: 60, right: 60, opacity: 0.08}}><Bean size={80} rotate={30}/></div>
  </div>
);

// === 2. WINDOW DECAL ===
const WindowDecal = () => (
  <div style={{
    width: '100%', aspectRatio: '4 / 5',
    background: 'linear-gradient(135deg, #c8d5dd 0%, #a8b8c0 100%)',
    position: 'relative', overflow: 'hidden',
    border: '12px solid #3a2f24',
  }}>
    {/* window frame crossbar */}
    <div style={{position: 'absolute', top: '50%', left: 0, right: 0, height: 6, background: '#3a2f24', transform: 'translateY(-50%)'}}/>
    <div style={{position: 'absolute', top: 0, bottom: 0, left: '50%', width: 6, background: '#3a2f24', transform: 'translateX(-50%)'}}/>

    {/* Decal content — white vinyl */}
    <div style={{position: 'absolute', inset: 0, padding: 40, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'var(--cream-light)'}}>
      <Mascot size={120} stroke="var(--cream-light)"/>
      <div style={{fontFamily: 'var(--font-hand-bold)', fontSize: 38, lineHeight: 0.9, textAlign: 'center', marginTop: 16, transform: 'rotate(-1deg)', whiteSpace: 'nowrap'}}>
        FIVE ZERO THREE
      </div>
      <div style={{fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', marginTop: 14, opacity: 0.95}}>
        Open · 8 am — 11 pm
      </div>
      <div style={{marginTop: 24, padding: '10px 18px', border: '2.5px solid var(--cream-light)', borderRadius: 12, fontFamily: 'var(--font-hand-bold)', fontSize: 20}}>
        PUSH →
      </div>
    </div>
  </div>
);

// === 3. CUP SLEEVE ===
const CupSleeve = () => (
  <div style={{
    width: '100%', aspectRatio: '3 / 1',
    background: 'var(--kraft)',
    position: 'relative', overflow: 'hidden',
    borderRadius: '60px 60px 60px 60px / 40% 40% 40% 40%',
    padding: '24px 40px',
    display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20,
    color: 'var(--ink)'
  }}>
    <Mascot size={80}/>
    <div style={{textAlign: 'center'}}>
      <div style={{fontFamily: 'var(--font-hand-bold)', fontSize: 26, lineHeight: 0.9, display: 'flex', alignItems: 'flex-start', gap: 6, justifyContent: 'center', whiteSpace: 'nowrap'}}>
        <div>FIVE ZERO THREE</div>
        <div style={{fontFamily: 'var(--font-display)', fontSize: 12, marginTop: 4}}>503</div>
      </div>
      <div style={{fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.25em', textTransform: 'uppercase', marginTop: 4}}>
        Single-origin coffee & craft tea
      </div>
    </div>
    <div style={{fontFamily: 'var(--font-hand)', fontSize: 20, textAlign: 'right', lineHeight: 1.1}}>
      careful —<br/>it's hot :)
    </div>
  </div>
);

// === 4. HIRING POSTER ===
const HiringPoster = () => (
  <div style={{
    width: '100%', aspectRatio: '3 / 4',
    background: 'var(--cream-light)',
    position: 'relative', overflow: 'hidden',
    border: '3px solid var(--ink)',
    padding: '36px 32px',
  }}>
    <div style={{fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', textAlign: 'center'}}>
      — WE ARE HIRING —
    </div>
    <div style={{fontFamily: 'var(--font-hand-bold)', fontSize: 76, lineHeight: 0.88, textAlign: 'center', marginTop: 16, transform: 'rotate(-1deg)'}}>
      BARISTA<br/>WANTED.
    </div>
    <div style={{display: 'flex', justifyContent: 'center', margin: '20px 0'}}>
      <Mascot size={140}/>
    </div>
    <div style={{
      border: '2.5px solid var(--ink)', borderRadius: 14, padding: 18,
      fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.5
    }}>
      <div style={{fontFamily: 'var(--font-hand-bold)', fontSize: 22, marginBottom: 6}}>What you'll do</div>
      <div style={{marginBottom: 14, color: 'var(--ink-soft)'}}>
        Pull shots. Pour milk. Know your beans. Talk to people like they're people.
      </div>
      <div style={{fontFamily: 'var(--font-hand-bold)', fontSize: 22, marginBottom: 6}}>What we offer</div>
      <div style={{color: 'var(--ink-soft)'}}>
        Fair pay. Real training. Free coffee (obviously). Sundays off.
      </div>
    </div>
    <div style={{marginTop: 20, textAlign: 'center'}}>
      <div style={{fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.7}}>
        Walk in or DM us
      </div>
      <div style={{fontFamily: 'var(--font-hand-bold)', fontSize: 24, marginTop: 4}}>
        @fivezerothree
      </div>
    </div>
    <div style={{position: 'absolute', top: 40, left: 20, opacity: 0.15}}><Bean size={40} rotate={-20}/></div>
    <div style={{position: 'absolute', top: 80, right: 20, opacity: 0.15}}><Bean size={32} rotate={45}/></div>
  </div>
);

// === 5. WAYFINDING SIGNS ===
const Wayfinding = ({ label, icon, arrow, sub }) => (
  <div style={{
    background: 'var(--cream)',
    border: '2.5px solid var(--ink)',
    borderRadius: '16px 20px 14px 18px',
    padding: 20,
    display: 'flex', alignItems: 'center', gap: 16,
    minHeight: 90,
  }}>
    <div style={{flexShrink: 0}}>{icon}</div>
    <div style={{flex: 1}}>
      <div style={{fontFamily: 'var(--font-hand-bold)', fontSize: 28, lineHeight: 1}}>{label}</div>
      {sub && <div style={{fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', marginTop: 4, opacity: 0.7}}>{sub}</div>}
    </div>
    {arrow && <div style={{fontFamily: 'var(--font-hand-bold)', fontSize: 40, transform: 'rotate(-5deg)'}}>{arrow}</div>}
  </div>
);

const WayfindingSet = () => (
  <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 12}}>
    <Wayfinding label="Pickup" icon={<CupToGo size={48}/>} arrow="→" sub="Orders ready here"/>
    <Wayfinding label="Order here" icon={<Mascot size={54}/>} arrow="↓" sub="Scan or tap"/>
    <Wayfinding label="Restroom" icon={<div style={{fontFamily: 'var(--font-hand-bold)', fontSize: 36}}>WC</div>} arrow="→"/>
    <Wayfinding label="Self-seating" icon={<Mug size={48}/>} sub="Grab any empty table"/>
    <Wayfinding label="Wifi" icon={<div style={{fontFamily: 'var(--font-display)', fontSize: 24}}>))</div>} sub="503_guest · brew-it-strong"/>
    <Wayfinding label="Exit" icon={<div style={{fontFamily: 'var(--font-hand-bold)', fontSize: 32}}>×</div>} arrow="↖" sub="Come back soon"/>
  </div>
);

// === 6. TIP JAR / QR ORDER SIGN ===
const TipJarSign = () => (
  <div style={{
    width: '100%', aspectRatio: '3 / 4',
    background: 'var(--cream)',
    border: '3px solid var(--ink)',
    borderRadius: '20px 24px 18px 22px',
    padding: 32,
    position: 'relative',
    display: 'flex', flexDirection: 'column', alignItems: 'center',
  }}>
    <div style={{fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase'}}>
      — Scan to order —
    </div>
    <div style={{fontFamily: 'var(--font-hand-bold)', fontSize: 44, lineHeight: 0.95, textAlign: 'center', margin: '12px 0 20px', transform: 'rotate(-1deg)'}}>
      Skip the line,<br/>stay at your table.
    </div>

    {/* QR code representation */}
    <div style={{
      width: 180, height: 180, background: 'var(--ink)',
      padding: 14, borderRadius: 12,
      display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 2
    }}>
      {Array.from({length: 144}).map((_, i) => (
        <div key={i} style={{
          background: (i * 7 + Math.floor(i / 12)) % 3 === 0 || (i % 13 === 5) ? 'var(--cream-light)' : 'var(--ink)',
          aspectRatio: 1
        }}/>
      ))}
    </div>
    <div style={{
      marginTop: 8, padding: '4px 10px',
      background: 'var(--ink)', color: 'var(--cream-light)',
      fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.2em'
    }}>
      fivezerothree.cafe/order
    </div>

    <div style={{marginTop: 'auto', textAlign: 'center', paddingTop: 20, borderTop: '1.5px dashed var(--ink)', width: '100%'}}>
      <div style={{fontFamily: 'var(--font-hand)', fontSize: 22, lineHeight: 1.1}}>
        Tipped baristas<br/>make better coffee :)
      </div>
      <div style={{marginTop: 10, display: 'flex', gap: 8, justifyContent: 'center'}}>
        {['₹20', '₹50', '₹100'].map(t => (
          <div key={t} style={{
            padding: '6px 14px', border: '2px solid var(--ink)',
            borderRadius: 10, fontFamily: 'var(--font-hand-bold)', fontSize: 16
          }}>{t}</div>
        ))}
      </div>
    </div>
  </div>
);

// === Layout ===
const Layout = () => (
  <>
    <div className="section">
      <div className="section-h">Wall menu board · 16:10 landscape · mounted behind counter</div>
      <div className="artifact-label">60cm × 37.5cm · backlit or chalkboard mount</div>
      <MenuBoard/>
    </div>

    <div className="section">
      <div className="section-h">Storefront & packaging</div>
      <div style={{display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 24, alignItems: 'start'}}>
        <div>
          <div className="artifact-label">Window decal · white vinyl on glass</div>
          <WindowDecal/>
        </div>
        <div>
          <div className="artifact-label">Cup sleeve · kraft paper · wraps 12oz cup</div>
          <CupSleeve/>
          <div style={{height: 24}}/>
          <div className="artifact-label">Second colorway</div>
          <div style={{filter: 'invert(0.9) hue-rotate(180deg)', opacity: 0.95}}>
            <CupSleeve/>
          </div>
        </div>
      </div>
    </div>

    <div className="section">
      <div className="section-h">Posters & printed collateral</div>
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, alignItems: 'start'}}>
        <div>
          <div className="artifact-label">Hiring poster · A3 · lobby window</div>
          <HiringPoster/>
        </div>
        <div>
          <div className="artifact-label">Tip jar + QR order · A4 standee at counter</div>
          <TipJarSign/>
        </div>
      </div>
    </div>

    <div className="section">
      <div className="section-h">Wayfinding — modular signage set</div>
      <div className="artifact-label">Mix and match. 20cm × 8cm each. Wall-mounted or hanging.</div>
      <WayfindingSet/>
    </div>
  </>
);

ReactDOM.createRoot(document.getElementById('root')).render(<Layout/>);
