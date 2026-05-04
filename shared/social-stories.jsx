// 9:16 story templates for Five Zero Three Instagram

const StoryFrame = ({ children, dark = false, kraft = false }) => (
  <div className={"story" + (dark ? " dark" : "")} style={kraft ? {background: 'var(--kraft)'} : {}}>
    {children}
  </div>
);

// 1. New drink launch
const NewDrinkStory = () => (
  <StoryFrame>
    <div className="story-pad">
      <div style={{fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase'}}>
        — New on menu —
      </div>
      <div style={{marginTop: 24, transform: 'rotate(-2deg)'}}>
        <div style={{fontFamily: 'var(--font-hand-bold)', fontSize: 64, lineHeight: 0.9}}>
          Vietnamese<br/>Cold<br/>Coffee.
        </div>
      </div>
      <div style={{fontFamily: 'var(--font-hand)', fontSize: 28, color: 'var(--ink-soft)', marginTop: 16, lineHeight: 1.1}}>
        Condensed milk.<br/>Dark roast.<br/>Over crushed ice.
      </div>
      <div style={{marginTop: 'auto', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between'}}>
        <div>
          <div style={{fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.7}}>Starting today</div>
          <div style={{fontFamily: 'var(--font-hand-bold)', fontSize: 34, marginTop: 2}}>₹240</div>
        </div>
        <div style={{transform: 'rotate(4deg)'}}><CupToGo size={120}/></div>
      </div>
    </div>
    <div style={{position: 'absolute', top: 20, right: 20, opacity: 0.15}}><Bean size={60} rotate={30}/></div>
    <div style={{position: 'absolute', bottom: 200, left: 10, opacity: 0.1}}><Bean size={40} rotate={-45}/></div>
  </StoryFrame>
);

// 2. Daily special
const DailyStory = () => (
  <StoryFrame kraft>
    <div className="story-pad">
      <div style={{fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase'}}>
        — Tuesday at 503 —
      </div>
      <div style={{marginTop: 32}}>
        <div style={{fontFamily: 'var(--font-hand-bold)', fontSize: 42, lineHeight: 1, transform: 'rotate(-1deg)'}}>
          Bombay Sandwich
        </div>
        <div style={{fontFamily: 'var(--font-hand-bold)', fontSize: 80, lineHeight: 1, marginTop: 12}}>
          +
        </div>
        <div style={{fontFamily: 'var(--font-hand-bold)', fontSize: 42, lineHeight: 1, transform: 'rotate(1deg)'}}>
          Chai
        </div>
      </div>
      <div style={{margin: '24px 0', display: 'flex', alignItems: 'center', gap: 12}}>
        <Sandwich size={70}/>
        <Mug size={64}/>
      </div>
      <div style={{
        fontFamily: 'var(--font-hand-bold)', fontSize: 68, lineHeight: 0.9,
        padding: '14px 20px', background: 'var(--ink)', color: 'var(--cream-light)',
        alignSelf: 'flex-start', transform: 'rotate(-2deg)',
      }}>
        ₹220
      </div>
      <div style={{marginTop: 'auto', fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase'}}>
        Today only · Till 6 pm
      </div>
    </div>
  </StoryFrame>
);

// 3. Quote / vibe
const QuoteStory = () => (
  <StoryFrame dark>
    <div className="story-pad" style={{justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
      <div style={{fontFamily: 'var(--font-hand)', fontSize: 40, marginBottom: 18, opacity: 0.7}}>
        "ఒక్క కప్పు చాలు"
      </div>
      <div style={{fontFamily: 'var(--font-hand-bold)', fontSize: 72, lineHeight: 0.95, transform: 'rotate(-1deg)'}}>
        One cup<br/>is enough.
      </div>
      <div style={{margin: '30px 0'}}><Mascot size={120} stroke="var(--cream-light)"/></div>
      <div style={{fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', opacity: 0.6}}>
        The only rule at 503
      </div>
    </div>
  </StoryFrame>
);

// 4. Behind the scenes
const BTSStory = () => (
  <StoryFrame>
    <div className="story-pad">
      <div style={{fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase'}}>
        — Behind the bar —
      </div>
      <div style={{marginTop: 16, fontFamily: 'var(--font-hand-bold)', fontSize: 52, lineHeight: 0.95, transform: 'rotate(-1deg)'}}>
        Roast day.<br/>Wednesday.<br/>6 am.
      </div>
      <div style={{margin: '24px 0', display: 'flex', justifyContent: 'center'}}>
        <MokaPot size={180}/>
      </div>
      <div style={{fontFamily: 'var(--font-hand)', fontSize: 28, lineHeight: 1.2, color: 'var(--ink-soft)'}}>
        Small batch.<br/>Single origin.<br/>Ready by opening.
      </div>
      <div style={{marginTop: 'auto', fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase'}}>
        Tap up to order →
      </div>
    </div>
    <div style={{position: 'absolute', top: 40, right: -20, opacity: 0.08}}><Bean size={100} rotate={60}/></div>
  </StoryFrame>
);

// 5. Testimonial
const TestimonialStory = () => (
  <StoryFrame>
    <div className="story-pad">
      <div style={{fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase'}}>
        — From a regular —
      </div>
      <div style={{
        marginTop: 40, padding: 24,
        border: '2.5px solid var(--ink)',
        borderRadius: '18px 22px 16px 20px',
        background: 'var(--cream-light)',
        transform: 'rotate(-1.5deg)'
      }}>
        <div style={{fontFamily: 'var(--font-hand-bold)', fontSize: 56, lineHeight: 1, marginBottom: 6}}>"</div>
        <div style={{fontFamily: 'var(--font-hand)', fontSize: 30, lineHeight: 1.2, marginBottom: 16}}>
          The chai here tastes like something my ammamma used to make. I come back for that alone.
        </div>
        <div style={{display: 'flex', gap: 4, marginBottom: 6}}>
          {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="var(--ink)"/>)}
        </div>
        <div style={{fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em'}}>
          — PRIYA R., MONTHLY TIL FOREVER
        </div>
      </div>
      <div style={{marginTop: 'auto', textAlign: 'center'}}>
        <LogoLockup size={0.7}/>
      </div>
    </div>
  </StoryFrame>
);

// 6. Hours / closed
const HoursStory = () => (
  <StoryFrame dark>
    <div className="story-pad" style={{justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
      <div style={{fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', opacity: 0.7}}>
        — Mark your day —
      </div>
      <div style={{marginTop: 20, fontFamily: 'var(--font-hand-bold)', fontSize: 56, lineHeight: 0.9, transform: 'rotate(-1deg)'}}>
        CLOSED<br/>March 29
      </div>
      <div style={{fontFamily: 'var(--font-hand)', fontSize: 32, marginTop: 16, opacity: 0.85}}>
        for Holi.<br/>See you March 30.
      </div>
      <div style={{margin: '36px 0'}}>
        <Mascot size={140} stroke="var(--cream-light)"/>
      </div>
      <div style={{
        border: '2px dashed var(--cream-light)',
        borderRadius: 14, padding: '12px 20px',
        fontFamily: 'var(--font-mono)', fontSize: 12,
        letterSpacing: '0.15em', textTransform: 'uppercase'
      }}>
        Regular hours · 8 am — 11 pm
      </div>
    </div>
  </StoryFrame>
);

// 7. Event
const EventStory = () => (
  <StoryFrame kraft>
    <div className="story-pad">
      <div style={{
        alignSelf: 'flex-start',
        background: 'var(--ink)', color: 'var(--cream-light)',
        padding: '6px 12px',
        fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase'
      }}>
        Saturday · 4 PM
      </div>
      <div style={{marginTop: 24, fontFamily: 'var(--font-hand-bold)', fontSize: 76, lineHeight: 0.88, transform: 'rotate(-2deg)'}}>
        OPEN<br/>CUP.
      </div>
      <div style={{fontFamily: 'var(--font-hand)', fontSize: 32, marginTop: 8, lineHeight: 1.1}}>
        A weekly tasting.<br/>4 beans. No rules.
      </div>
      <div style={{margin: '28px 0', display: 'flex', justifyContent: 'center'}}>
        <MokaPot size={140}/>
      </div>
      <div style={{
        padding: 14, border: '2.5px solid var(--ink)',
        borderRadius: 14, marginTop: 'auto',
        fontFamily: 'var(--font-body)', fontSize: 14,
        textAlign: 'center'
      }}>
        <div style={{fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 4}}>
          How to join
        </div>
        <div style={{fontFamily: 'var(--font-hand-bold)', fontSize: 22, lineHeight: 1}}>
          DM @fivezerothree
        </div>
      </div>
    </div>
  </StoryFrame>
);

const stories = [
  { label: '01 · Drink launch', el: <NewDrinkStory/> },
  { label: '02 · Daily combo', el: <DailyStory/> },
  { label: '03 · Quote / vibe', el: <QuoteStory/> },
  { label: '04 · Behind the scenes', el: <BTSStory/> },
  { label: '05 · Testimonial', el: <TestimonialStory/> },
  { label: '06 · Hours notice', el: <HoursStory/> },
  { label: '07 · Event announcement', el: <EventStory/> },
];

const Grid = () => (
  <>{stories.map((s, i) => (
    <div key={i} className="story-wrap">
      <div className="story-label">{s.label}</div>
      {s.el}
    </div>
  ))}</>
);

ReactDOM.createRoot(document.getElementById('grid')).render(<Grid/>);
