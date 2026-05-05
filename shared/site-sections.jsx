// Story, visit, footer sections

const StorySection = () => (
  <section id="story" style={{padding: '100px 28px', position: 'relative'}}>
    <div style={{maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center'}}>
      <div>
        <div style={{fontFamily: 'var(--font-mono)', fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: 10}}>
          — Our story —
        </div>
        <h2 style={{fontFamily: 'var(--font-hand-bold)', fontSize: 64, lineHeight: 1, margin: '0 0 24px', transform: 'rotate(-0.5deg)'}}>
          503 is an<br/>area code.
        </h2>
        <p style={{fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.6, color: 'var(--ink-soft)', marginBottom: 16}}>
          Nizamabad's own. A number stitched onto every postcard home, every phone bill, every
          long-distance hello. We borrowed it because this cafe is local before it is anything else.
        </p>
        <p style={{fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.6, color: 'var(--ink-soft)', marginBottom: 24}}>
          Small roaster. Fresh beans weekly. A short menu that we actually believe in.
          Chai that tastes like your grandmother's if you're lucky, and your neighbor's if you're not.
        </p>
        <div style={{display: 'flex', gap: 32, flexWrap: 'wrap'}}>
          <Stat label="Beans roasted" value="Weekly"/>
          <Stat label="Menu tested" value="42 rounds"/>
          <Stat label="Chai opinions" value="Welcome"/>
        </div>
      </div>
      <div style={{position: 'relative', display: 'flex', justifyContent: 'center'}}>
        <div style={{position: 'absolute', top: 20, left: 20, transform: 'rotate(-6deg)'}}>
          <MokaPot size={140}/>
        </div>
        <div style={{position: 'absolute', top: 80, right: 10, transform: 'rotate(8deg)'}}>
          <Bean size={50} rotate={30}/>
        </div>
        <div style={{position: 'absolute', bottom: 20, left: 40}}>
          <Bean size={40} rotate={-20}/>
        </div>
        <div style={{
          background: 'var(--cream-light)',
          border: '3px solid var(--ink)',
          borderRadius: '28px 32px 24px 30px',
          padding: 40, maxWidth: 360,
          transform: 'rotate(1.5deg)',
          boxShadow: '10px 10px 0 rgba(26, 22, 18, 0.08)',
          textAlign: 'center'
        }}>
          <div style={{fontFamily: 'var(--font-hand)', fontSize: 32, marginBottom: 16, color: 'var(--ink-soft)'}}>
            "ఒక్క కప్పు చాలు"
          </div>
          <div style={{fontFamily: 'var(--font-hand-bold)', fontSize: 26, lineHeight: 1.1, marginBottom: 10}}>
            One cup is enough.
          </div>
          <div style={{fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--ink-muted)', fontStyle: 'italic'}}>
            — the only rule at 503
          </div>
        </div>
      </div>
    </div>
  </section>
);

const VisitSection = () => (
  <section id="visit" style={{padding: '80px 28px', background: 'var(--ink)', color: 'var(--cream-light)'}}>
    <div style={{maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60}}>
      <div>
        <div style={{fontFamily: 'var(--font-mono)', fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: 10, opacity: 0.7}}>
          — Come say hi —
        </div>
        <h2 style={{fontFamily: 'var(--font-hand-bold)', fontSize: 64, lineHeight: 1, margin: '0 0 28px'}}>
          Find us on<br/>Level 1.
        </h2>
        <div style={{marginBottom: 24}}>
          <div style={{fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', opacity: 0.6, marginBottom: 4}}>
            Address
          </div>
          <div style={{fontFamily: 'var(--font-hand-bold)', fontSize: 28, lineHeight: 1.2}}>
            Level 1, Hotel Amara<br/>Nizamabad, Telangana
          </div>
        </div>
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 28}}>
          <div>
            <div style={{fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', opacity: 0.6, marginBottom: 4}}>Open</div>
            <div style={{fontFamily: 'var(--font-hand-bold)', fontSize: 20}}>Every day</div>
            <div style={{fontFamily: 'var(--font-body)', fontSize: 14, opacity: 0.8}}>8:00 am — 11:00 pm</div>
          </div>
          <div>
            <div style={{fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', opacity: 0.6, marginBottom: 4}}>Instagram</div>
            <div style={{fontFamily: 'var(--font-hand-bold)', fontSize: 20}}>@fivezerothree</div>
          </div>
        </div>
        <button style={{
          background: 'var(--cream-light)', color: 'var(--ink)',
          border: 'none', padding: '14px 24px',
          borderRadius: '20px 24px 18px 22px',
          fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 15,
          cursor: 'pointer', letterSpacing: '0.02em',
          display: 'inline-flex', alignItems: 'center', gap: 10
        }}>
          Open in maps <Arrow w={24} stroke="var(--ink)"/>
        </button>
      </div>
      <div style={{
        border: '2.5px solid var(--cream-light)',
        borderRadius: '24px 28px 22px 26px',
        padding: 32,
        position: 'relative',
      }}>
        <div style={{display: 'flex', alignItems: 'flex-start', gap: 14, marginBottom: 20}}>
          <MokaPot size={60} stroke="var(--cream-light)"/>
          <div>
            <div style={{fontFamily: 'var(--font-hand-bold)', fontSize: 24}}>Weekly brew</div>
            <div style={{fontFamily: 'var(--font-body)', fontSize: 13, opacity: 0.8}}>Tasting every Saturday, 4 pm</div>
          </div>
        </div>
        <div style={{display: 'flex', alignItems: 'flex-start', gap: 14, marginBottom: 20}}>
          <CupToGo size={60} stroke="var(--cream-light)"/>
          <div>
            <div style={{fontFamily: 'var(--font-hand-bold)', fontSize: 24}}>Loyalty cups</div>
            <div style={{fontFamily: 'var(--font-body)', fontSize: 13, opacity: 0.8}}>Bring your cup — ₹20 off any drink</div>
          </div>
        </div>
        <div style={{display: 'flex', alignItems: 'flex-start', gap: 14}}>
          <Waffle size={60} stroke="var(--cream-light)"/>
          <div>
            <div style={{fontFamily: 'var(--font-hand-bold)', fontSize: 24}}>Waffle Wednesday</div>
            <div style={{fontFamily: 'var(--font-body)', fontSize: 13, opacity: 0.8}}>Buy one waffle, get the second half price</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const SiteFooter = () => (
  <footer style={{padding: '40px 28px', background: 'var(--cream)', borderTop: '2.5px solid var(--ink)'}}>
    {/* Sister properties */}
    <div style={{maxWidth: 1280, margin: '0 auto', borderBottom: '1.5px dashed rgba(26,22,18,0.25)', paddingBottom: 24, marginBottom: 28}}>
      <div style={{fontFamily: 'var(--font-mono)', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--ink-muted)', marginBottom: 12}}>
        Part of Hotel Amara · Nizamabad
      </div>
      <div style={{display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center'}}>
        <a href="https://amara-hotel.vercel.app" target="_blank" rel="noopener"
          style={{fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 13, color: 'var(--ink)',
            textDecoration: 'none', border: '2px solid var(--ink)', padding: '8px 16px',
            borderRadius: '12px 16px 10px 14px', display: 'inline-flex', alignItems: 'center', gap: 6}}>
          Hotel Amara <Arrow w={16} stroke="var(--ink)"/>
        </a>
        <a href="https://telugu-theory.vercel.app" target="_blank" rel="noopener"
          style={{fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 13, color: 'var(--ink)',
            textDecoration: 'none', border: '2px solid var(--ink)', padding: '8px 16px',
            borderRadius: '12px 16px 10px 14px', display: 'inline-flex', alignItems: 'center', gap: 6}}>
          Telugu Theory · Level 2 <Arrow w={16} stroke="var(--ink)"/>
        </a>
      </div>
    </div>
    <div style={{maxWidth: 1280, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20}}>
      <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
        <Mascot size={40}/>
        <div>
          <Wordmark size={0.65}/>
          <div style={{fontFamily: 'var(--font-mono)', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.15em', marginTop: 2, color: 'var(--ink-muted)'}}>
            Single-origin coffee & craft tea · Est. 2024
          </div>
        </div>
      </div>
      <div style={{fontFamily: 'var(--font-mono)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--ink-muted)'}}>
        Crafted in Nizamabad · fivezerothree.cafe
      </div>
    </div>
  </footer>
);

window.StorySection = StorySection;
window.VisitSection = VisitSection;
window.SiteFooter = SiteFooter;
