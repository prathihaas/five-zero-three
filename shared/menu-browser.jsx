// Menu browsing + item cards

const MenuBrowser = ({ onAdd, cart, activeSection, onSectionChange, compact = false }) => {
  return (
    <section id="menu" style={{padding: compact ? '40px 28px' : '80px 28px', background: 'var(--cream-light)', borderTop: '2.5px solid var(--ink)', borderBottom: '2.5px solid var(--ink)'}}>
      <div style={{maxWidth: 1280, margin: '0 auto'}}>
        <div style={{textAlign: 'center', marginBottom: 44}}>
          <div style={{fontFamily: 'var(--font-mono)', fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: 10}}>
            — The Menu —
          </div>
          <h2 style={{fontFamily: 'var(--font-hand-bold)', fontSize: 72, margin: '0 0 8px', transform: 'rotate(-0.5deg)'}}>
            What's brewing today
          </h2>
          <div style={{display: 'flex', justifyContent: 'center'}}><Squiggle w={200}/></div>
        </div>

        {/* Section tabs */}
        <div style={{
          display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 10,
          marginBottom: 44, paddingBottom: 24, borderBottom: '1.5px dashed var(--ink)'
        }}>
          {MENU_SECTIONS.map(key => (
            <button key={key} onClick={() => onSectionChange(key)} style={{
              padding: '10px 20px',
              background: activeSection === key ? 'var(--ink)' : 'transparent',
              color: activeSection === key ? 'var(--cream-light)' : 'var(--ink)',
              border: '2.5px solid var(--ink)',
              borderRadius: '14px 18px 12px 16px',
              fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 700,
              textTransform: 'uppercase', letterSpacing: '0.06em',
              cursor: 'pointer', transition: 'all 0.15s'
            }}>
              {MENU[key].name}
            </button>
          ))}
        </div>

        {/* Active section */}
        <div>
          <div style={{display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 24, flexWrap: 'wrap'}}>
            <h3 style={{fontFamily: 'var(--font-hand-bold)', fontSize: 48, margin: 0}}>{MENU[activeSection].name}</h3>
            <div style={{fontFamily: 'var(--font-hand)', fontSize: 22, color: 'var(--ink-soft)'}}>
              — {MENU[activeSection].subtitle}
            </div>
          </div>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 20}}>
            {MENU[activeSection].items.map((item, i) => (
              <MenuItem key={i} item={item} section={activeSection} onAdd={onAdd} count={cart.filter(c => c.n === item.n).length}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const MenuItem = ({ item, section, onAdd, count }) => {
  const icon = {
    coffee: <Mug size={48}/>,
    sips: <CupToGo size={44}/>,
    waffles: <Waffle size={44}/>,
    sandwiches: <Sandwich size={44}/>,
    mains: <Burger size={44}/>,
  }[section];

  return (
    <div style={{
      background: 'var(--cream)',
      border: '2.5px solid var(--ink)',
      borderRadius: '16px 20px 14px 18px',
      padding: 20,
      position: 'relative',
      display: 'flex', flexDirection: 'column',
      minHeight: 200,
      transition: 'transform 0.15s',
    }}
    onMouseEnter={e => e.currentTarget.style.transform = 'translate(-2px, -2px)'}
    onMouseLeave={e => e.currentTarget.style.transform = 'none'}
    >
      {item.hero && (
        <div style={{
          position: 'absolute', top: -12, right: 14,
          background: 'var(--ink)', color: 'var(--cream-light)',
          fontFamily: 'var(--font-mono)', fontSize: 10,
          textTransform: 'uppercase', letterSpacing: '0.15em',
          padding: '4px 10px', borderRadius: 6,
          transform: 'rotate(3deg)'
        }}>
          ★ House pick
        </div>
      )}
      <div style={{display: 'flex', gap: 14, alignItems: 'flex-start', marginBottom: 10}}>
        <div style={{flexShrink: 0, marginTop: -4}}>{icon}</div>
        <div style={{flex: 1}}>
          <div style={{fontFamily: 'var(--font-hand-bold)', fontSize: 22, lineHeight: 1.1, marginBottom: 4}}>
            {item.n}
          </div>
          <div style={{fontFamily: 'var(--font-body)', fontSize: 13, lineHeight: 1.45, color: 'var(--ink-soft)'}}>
            {item.d}
          </div>
        </div>
      </div>
      <div style={{marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 12, borderTop: '1.5px dashed var(--ink)'}}>
        <div style={{fontFamily: 'var(--font-hand-bold)', fontSize: 24}}>
          ₹{item.p}
        </div>
        <button onClick={() => onAdd(item)} style={{
          background: count > 0 ? 'var(--ink)' : 'transparent',
          color: count > 0 ? 'var(--cream-light)' : 'var(--ink)',
          border: '2.5px solid var(--ink)',
          borderRadius: '12px 16px 10px 14px',
          padding: '8px 16px',
          fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 700,
          textTransform: 'uppercase', letterSpacing: '0.06em',
          cursor: 'pointer',
          display: 'flex', alignItems: 'center', gap: 6,
        }}>
          {count > 0 ? `Added · ${count}` : '+ Add'}
        </button>
      </div>
    </div>
  );
};

window.MenuBrowser = MenuBrowser;
window.MenuItem = MenuItem;
