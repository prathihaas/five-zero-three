// Main website app for Five Zero Three

const App = () => {
  const [page, setPage] = React.useState('home'); // home | menu-full
  const [activeSection, setActiveSection] = React.useState('coffee');
  const [cart, setCart] = React.useState([]);
  const [cartOpen, setCartOpen] = React.useState(false);

  const onAdd = (item) => {
    setCart(c => [...c, item]);
    // micro feedback
    setCartOpen(false); // keep browsing
  };

  const onNav = (id) => {
    if (id === 'home') {
      setPage('home');
      window.scrollTo({top: 0, behavior: 'smooth'});
    } else if (id === 'menu') {
      if (page !== 'home') setPage('home');
      setTimeout(() => {
        document.getElementById('menu')?.scrollIntoView({behavior: 'smooth', block: 'start'});
      }, 100);
    } else if (id === 'story') {
      document.getElementById('story')?.scrollIntoView({behavior: 'smooth', block: 'start'});
    } else if (id === 'visit') {
      document.getElementById('visit')?.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  };

  return (
    <div className="paper" style={{minHeight: '100vh'}}>
      <SiteNav active={page === 'home' ? 'home' : 'menu'} onNav={onNav} cartCount={cart.length} onCart={() => setCartOpen(true)}/>
      <Hero onOrder={() => setCartOpen(true)} onMenu={() => onNav('menu')}/>
      <MenuBrowser
        onAdd={onAdd}
        cart={cart}
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />
      <StorySection/>
      <VisitSection/>
      <SiteFooter/>
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} cart={cart} setCart={setCart}/>

      {/* Floating cart FAB on mobile-ish */}
      {cart.length > 0 && !cartOpen && (
        <button onClick={() => setCartOpen(true)} style={{
          position: 'fixed', bottom: 24, right: 24, zIndex: 50,
          background: 'var(--ink)', color: 'var(--cream-light)',
          border: 'none', borderRadius: '22px 26px 20px 24px',
          padding: '14px 20px',
          fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 15,
          cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 10,
          boxShadow: '6px 6px 0 rgba(26, 22, 18, 0.15)'
        }}>
          <CupToGo size={22} stroke="var(--cream-light)"/>
          View order · {cart.length}
        </button>
      )}
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
