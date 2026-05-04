// Cart drawer with order type selection (dine-in / takeaway / delivery), checkout flow

const CartDrawer = ({ open, onClose, cart, setCart }) => {
  const [step, setStep] = React.useState('cart'); // cart | details | confirm
  const [orderType, setOrderType] = React.useState('dine-in');
  const [tableNo, setTableNo] = React.useState('');
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [notes, setNotes] = React.useState('');
  const [orderId, setOrderId] = React.useState('');

  const grouped = React.useMemo(() => {
    const map = new Map();
    cart.forEach(it => {
      if (!map.has(it.n)) map.set(it.n, { ...it, qty: 0 });
      map.get(it.n).qty += 1;
    });
    return [...map.values()];
  }, [cart]);

  const subtotal = grouped.reduce((s, it) => s + it.p * it.qty, 0);
  const tax = Math.round(subtotal * 0.05);
  const deliveryFee = orderType === 'delivery' ? 40 : 0;
  const total = subtotal + tax + deliveryFee;

  const removeAll = (n) => setCart(cart.filter(it => it.n !== n));
  const decrement = (n) => {
    const idx = cart.findIndex(it => it.n === n);
    if (idx >= 0) setCart([...cart.slice(0, idx), ...cart.slice(idx + 1)]);
  };
  const increment = (item) => setCart([...cart, item]);

  const submitOrder = () => {
    setOrderId('503-' + Math.floor(Math.random() * 9000 + 1000));
    setStep('confirm');
  };

  const reset = () => {
    setCart([]);
    setStep('cart');
    setOrderType('dine-in');
    setTableNo(''); setName(''); setPhone(''); setAddress(''); setNotes('');
    onClose();
  };

  if (!open) return null;

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 100,
      background: 'rgba(26, 22, 18, 0.4)',
      display: 'flex', justifyContent: 'flex-end',
    }} onClick={onClose}>
      <div onClick={e => e.stopPropagation()} style={{
        width: 460, maxWidth: '100vw', height: '100vh',
        background: 'var(--cream)',
        borderLeft: '3px solid var(--ink)',
        display: 'flex', flexDirection: 'column',
        animation: 'slidein 0.25s ease',
      }}>
        <div style={{
          padding: '20px 24px', borderBottom: '2.5px solid var(--ink)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between'
        }}>
          <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
            <CupToGo size={28}/>
            <div style={{fontFamily: 'var(--font-hand-bold)', fontSize: 26}}>
              {step === 'cart' ? 'Your Order' : step === 'details' ? 'Where to?' : 'Order placed!'}
            </div>
          </div>
          <button onClick={onClose} style={{
            background: 'transparent', border: '2px solid var(--ink)',
            borderRadius: '50%', width: 32, height: 32,
            cursor: 'pointer', fontFamily: 'var(--font-body)', fontWeight: 700
          }}>×</button>
        </div>

        {step === 'cart' && (
          <>
            <div style={{flex: 1, overflowY: 'auto', padding: 24}}>
              {grouped.length === 0 && (
                <div style={{textAlign: 'center', padding: '60px 20px', color: 'var(--ink-muted)'}}>
                  <Mascot size={120}/>
                  <div style={{fontFamily: 'var(--font-hand)', fontSize: 28, marginTop: 12}}>
                    Your cart's empty.
                  </div>
                  <div style={{fontFamily: 'var(--font-body)', fontSize: 14, marginTop: 4}}>
                    Let's fix that — pick something from the menu.
                  </div>
                </div>
              )}
              {grouped.map(it => (
                <div key={it.n} style={{
                  padding: '16px 0', borderBottom: '1.5px dashed var(--ink)',
                  display: 'flex', gap: 14, alignItems: 'center'
                }}>
                  <div style={{flex: 1}}>
                    <div style={{fontFamily: 'var(--font-hand-bold)', fontSize: 18}}>{it.n}</div>
                    <div style={{fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--ink-muted)'}}>
                      ₹{it.p} × {it.qty}
                    </div>
                  </div>
                  <div style={{display: 'flex', alignItems: 'center', gap: 8, border: '2px solid var(--ink)', borderRadius: 10, padding: '2px 6px'}}>
                    <button onClick={() => decrement(it.n)} style={qtyBtn}>−</button>
                    <div style={{fontFamily: 'var(--font-body)', fontWeight: 700, minWidth: 20, textAlign: 'center'}}>{it.qty}</div>
                    <button onClick={() => increment(it)} style={qtyBtn}>+</button>
                  </div>
                  <div style={{fontFamily: 'var(--font-hand-bold)', fontSize: 20, minWidth: 60, textAlign: 'right'}}>
                    ₹{it.p * it.qty}
                  </div>
                </div>
              ))}
            </div>
            {grouped.length > 0 && (
              <div style={{padding: 24, borderTop: '2.5px solid var(--ink)', background: 'var(--cream-light)'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: 8, fontFamily: 'var(--font-body)', fontSize: 14}}>
                  <span>Subtotal</span><span>₹{subtotal}</span>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: 12, fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--ink-muted)'}}>
                  <span>Taxes (5%)</span><span>₹{tax}</span>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: 16, fontFamily: 'var(--font-hand-bold)', fontSize: 26, borderTop: '1.5px dashed var(--ink)', paddingTop: 12}}>
                  <span>Total</span><span>₹{subtotal + tax}</span>
                </div>
                <button onClick={() => setStep('details')} style={{...btnPrimary, width: '100%', justifyContent: 'center'}}>
                  Continue <Arrow w={24} stroke="var(--cream-light)"/>
                </button>
              </div>
            )}
          </>
        )}

        {step === 'details' && (
          <>
            <div style={{flex: 1, overflowY: 'auto', padding: 24}}>
              <div style={{fontFamily: 'var(--font-mono)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 10, color: 'var(--ink-muted)'}}>
                How are you having it?
              </div>
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8, marginBottom: 24}}>
                {[
                  {id: 'dine-in', label: 'Dine-in', icon: <Mug size={32}/>},
                  {id: 'takeaway', label: 'Takeaway', icon: <CupToGo size={32}/>},
                  {id: 'delivery', label: 'Delivery', icon: <Bean size={28} rotate={45}/>},
                ].map(t => (
                  <button key={t.id} onClick={() => setOrderType(t.id)} style={{
                    padding: '16px 8px',
                    background: orderType === t.id ? 'var(--ink)' : 'var(--cream-light)',
                    color: orderType === t.id ? 'var(--cream-light)' : 'var(--ink)',
                    border: '2.5px solid var(--ink)',
                    borderRadius: '14px 18px 12px 16px',
                    cursor: 'pointer',
                    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
                    fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 700,
                    textTransform: 'uppercase', letterSpacing: '0.06em',
                  }}>
                    <div style={{filter: orderType === t.id ? 'invert(1)' : 'none'}}>{t.icon}</div>
                    {t.label}
                  </button>
                ))}
              </div>

              {orderType === 'dine-in' && (
                <Field label="Table number" value={tableNo} onChange={setTableNo} placeholder="e.g. T-04" mono/>
              )}
              {orderType === 'delivery' && (
                <Field label="Delivery address" value={address} onChange={setAddress} placeholder="Flat, building, landmark" textarea/>
              )}
              <Field label="Your name" value={name} onChange={setName} placeholder="What do we call you?"/>
              <Field label="Phone" value={phone} onChange={setPhone} placeholder="10 digits" mono/>
              <Field label="Any notes? (optional)" value={notes} onChange={setNotes} placeholder="Less ice, extra shot, etc." textarea/>

              <div style={{
                marginTop: 20, padding: 14,
                background: 'var(--cream-light)',
                border: '2px dashed var(--ink)',
                borderRadius: 12,
                fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--ink-soft)'
              }}>
                <strong>Est. time:</strong> {orderType === 'dine-in' ? '10-12 min at your table' : orderType === 'takeaway' ? '~8 min at the counter' : '25-30 min to your door'}
              </div>
            </div>
            <div style={{padding: 24, borderTop: '2.5px solid var(--ink)', background: 'var(--cream-light)'}}>
              <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: 16, fontFamily: 'var(--font-hand-bold)', fontSize: 26}}>
                <span>Total</span><span>₹{total}</span>
              </div>
              <div style={{display: 'flex', gap: 10}}>
                <button onClick={() => setStep('cart')} style={{...btnGhost, flex: 1}}>Back</button>
                <button onClick={submitOrder} style={{...btnPrimary, flex: 2, justifyContent: 'center'}}
                  disabled={!name || !phone || (orderType === 'dine-in' && !tableNo) || (orderType === 'delivery' && !address)}
                >
                  Place order
                </button>
              </div>
            </div>
          </>
        )}

        {step === 'confirm' && (
          <div style={{flex: 1, overflowY: 'auto', padding: 32, textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <div style={{animation: 'bounce 0.6s ease'}}>
              <Mascot size={160}/>
            </div>
            <div style={{fontFamily: 'var(--font-hand-bold)', fontSize: 44, lineHeight: 1, marginTop: 12, transform: 'rotate(-1deg)'}}>
              Thank you!
            </div>
            <div style={{fontFamily: 'var(--font-hand)', fontSize: 26, color: 'var(--ink-soft)', marginTop: 4}}>
              We're on it.
            </div>
            <div style={{
              marginTop: 28, padding: '18px 24px',
              background: 'var(--ink)', color: 'var(--cream-light)',
              borderRadius: 14,
              fontFamily: 'var(--font-mono)', fontSize: 13,
              letterSpacing: '0.1em',
            }}>
              ORDER {orderId}
            </div>
            <div style={{
              marginTop: 20, fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--ink-soft)', maxWidth: 320
            }}>
              {orderType === 'dine-in' && <>Heading out to table <strong>{tableNo}</strong>. Sit tight.</>}
              {orderType === 'takeaway' && <>We'll have it ready at the counter in ~8 min, <strong>{name}</strong>.</>}
              {orderType === 'delivery' && <>On its way to <strong>{address}</strong>. Tracking texted to {phone}.</>}
            </div>
            <button onClick={reset} style={{...btnPrimary, marginTop: 32}}>
              Close
            </button>
          </div>
        )}
      </div>

      <style>{`
        @keyframes slidein { from { transform: translateX(100%); } to { transform: translateX(0); } }
        @keyframes bounce { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.05); } }
      `}</style>
    </div>
  );
};

const qtyBtn = {
  background: 'transparent', border: 'none',
  width: 24, height: 24,
  fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 16,
  cursor: 'pointer', color: 'var(--ink)'
};

const Field = ({ label, value, onChange, placeholder, textarea, mono }) => (
  <div style={{marginBottom: 14}}>
    <div style={{fontFamily: 'var(--font-mono)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 6, color: 'var(--ink-muted)'}}>
      {label}
    </div>
    {textarea ? (
      <textarea value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder}
        rows={2}
        style={{
          width: '100%', padding: '10px 12px',
          background: 'var(--cream-light)',
          border: '2px solid var(--ink)', borderRadius: 10,
          fontFamily: mono ? 'var(--font-mono)' : 'var(--font-body)',
          fontSize: 14, color: 'var(--ink)',
          resize: 'vertical',
        }}/>
    ) : (
      <input value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder}
        style={{
          width: '100%', padding: '10px 12px',
          background: 'var(--cream-light)',
          border: '2px solid var(--ink)', borderRadius: 10,
          fontFamily: mono ? 'var(--font-mono)' : 'var(--font-body)',
          fontSize: 14, color: 'var(--ink)',
        }}/>
    )}
  </div>
);

window.CartDrawer = CartDrawer;
