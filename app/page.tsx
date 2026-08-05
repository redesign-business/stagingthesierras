const consultHref =
  "mailto:hello@stagingthesierras.com?subject=Book%20a%20consultation";

const services = [
  {
    number: "01",
    title: "Home staging",
    copy: "Mountain-modern spaces composed to photograph beautifully, feel memorable, and help buyers see themselves at home.",
  },
  {
    number: "02",
    title: "Styling & design",
    copy: "Personal, functional interiors shaped around the way you live, with natural texture and an unmistakable Tahoe point of view.",
  },
  {
    number: "03",
    title: "Short-term rentals",
    copy: "Durable, inviting getaways designed to stand out in a crowded market and welcome guests back season after season.",
  },
];

const faqs = [
  {
    question: "Where do you work?",
    answer:
      "Throughout the Tahoe Basin and nearby communities, including South Lake Tahoe, Incline Village, Truckee, Reno, Carson City, Minden, and Gardnerville.",
  },
  {
    question: "How quickly can a home be staged?",
    answer:
      "After the walk-through and proposal are complete, a property is typically transformed and ready to show in a single day.",
  },
  {
    question: "What happens to my consultation fee?",
    answer:
      "Your on-site consultation fee is fully credited toward your staging package when you choose to move forward.",
  },
  {
    question: "Do you rely on outside rental companies?",
    answer:
      "No. We own our furniture, decor, and delivery trucks, and store everything locally in South Lake Tahoe.",
  },
];

export default function Page() {
  return (
    <main>
      <nav className="nav" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Staging the Sierras home">
          <img
            src="/images/sts-re-brand-guide-90221fc5b9.png"
            alt="Staging the Sierras"
          />
        </a>
        <div className="navLinks">
          <a href="#services">Services</a>
          <a href="#proof">Why us</a>
          <a href="#process">Process</a>
          <a href="#about">About</a>
        </div>
        <a className="button navButton" href={consultHref}>
          Book a consultation
        </a>
      </nav>

      <section className="hero" id="top">
        <img
          className="heroImage"
          src="/images/stagingthesierrashero-a7f9f80e7f.jpeg"
          alt="A warmly staged mountain home in the Tahoe Basin"
        />
        <div className="heroShade" />
        <div className="heroContent">
          <p className="eyebrow light">South Lake Tahoe · Since 2018</p>
          <h1>Where mountain living comes to life.</h1>
          <p className="heroIntro">
            Thoughtful home staging and interior design that helps Tahoe homes
            show beautifully, sell confidently, and feel entirely their own.
          </p>
          <a className="button buttonLight" href={consultHref}>
            Book a consultation
          </a>
        </div>
        <p className="scroll">Scroll to explore</p>
      </section>

      <div className="ticker" aria-label="Service area">
        <span>South Lake Tahoe</span><i />
        <span>Truckee</span><i />
        <span>Incline Village</span><i />
        <span>Reno</span><i />
        <span>Carson City</span>
      </div>

      <section className="intro section">
        <div className="introImage frame">
          <img
            src="/images/20240908_13_0---copy-2--11420684dd.webp"
            alt="Layered neutral textures in a staged Tahoe interior"
          />
          <span className="frameNote">Mountain modern, naturally</span>
        </div>
        <div className="introCopy">
          <p className="eyebrow">Full-service home staging</p>
          <h2>Designed for the way Tahoe buyers want to live.</h2>
          <p>
            A great room does more than look finished. It creates an emotional
            connection the moment a buyer walks in and makes every listing
            photo work harder. We bring an eclectic, refined eye to every
            property, balancing neutral tones with the warmth of the Sierra.
          </p>
          <div className="signature">Staged with strategy. Styled with soul.</div>
        </div>
      </section>

      <section className="proof section" id="proof">
        <div className="proofHeading">
          <p className="eyebrow light">The difference is measurable</p>
          <h2>Beautiful spaces.<br />Real momentum.</h2>
          <p>
            Behind every composed room is a team built to move as quickly as
            the Tahoe market does.
          </p>
        </div>
        <div className="proofImage">
          <img
            src="/images/20240908_7_0-98d90f7405.jpg"
            alt="A bright living room professionally staged for market"
          />
        </div>
        <div className="proofGrid">
          <article>
            <strong>6 days</strong>
            <h3>From staged to pending</h3>
            <p>
              Vicky Acevedo&apos;s South Lake Tahoe home was sold and pending
              just six days after our team staged it.
            </p>
          </article>
          <article>
            <strong>More impact</strong>
            <h3>Quicker sales, more money</h3>
            <p>
              Senior Global Real Estate Advisor Ellen Camacho credits our
              creative staging with helping her listings sell quicker for more.
            </p>
          </article>
          <article>
            <strong>100% local</strong>
            <h3>Ready when you are</h3>
            <p>
              We are the Tahoe Basin&apos;s only staging company to own its full
              furniture inventory, decor collection, and delivery trucks.
            </p>
          </article>
        </div>
      </section>

      <section className="services section" id="services">
        <div className="servicesTop">
          <div>
            <p className="eyebrow">What we do</p>
            <h2>A considered approach to every kind of home.</h2>
          </div>
          <a className="button" href={consultHref}>Book a consultation</a>
        </div>
        <div className="serviceLayout">
          <img
            src="/images/captured-by-brian-walker-on-03_09_2026-at-.-3967aae59d.jpg"
            alt="A sophisticated mountain interior styled by Staging the Sierras"
          />
          <div className="serviceList">
            {services.map((service) => (
              <article key={service.number}>
                <span>{service.number}</span>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="process section" id="process">
        <div className="processImage">
          <img
            src="/images/1-dbcb0f6a9a.png"
            alt="Staging details being arranged in a Tahoe home"
          />
        </div>
        <div className="processCopy">
          <p className="eyebrow">Simple from start to finish</p>
          <h2>One team. Four clear steps.</h2>
          <ol>
            <li><span>01</span><div><h3>Walk through</h3><p>We meet at your property to understand the space, goals, timeline, and budget.</p></div></li>
            <li><span>02</span><div><h3>Proposal</h3><p>You receive a tailored plan covering furniture, decor, investment, and timing.</p></div></li>
            <li><span>03</span><div><h3>Staging</h3><p>Our crew transforms the space, typically making it show-ready in one day.</p></div></li>
            <li><span>04</span><div><h3>Removal</h3><p>When the time comes, we de-stage quickly and leave the home exactly as found.</p></div></li>
          </ol>
        </div>
      </section>

      <section className="quote section">
        <img
          src="/images/20240908_15_0-3fee7012e8.jpg"
          alt="Comfortable mountain home with warm modern styling"
        />
        <div className="quoteCard">
          <span className="quoteMark">“</span>
          <blockquote>
            It is no coincidence that my listings sell quicker for more money
            due to the creative staging from Staging the Sierras.
          </blockquote>
          <p>Ellen Camacho</p>
          <small>Senior Global Real Estate Advisor</small>
        </div>
      </section>

      <section className="about section" id="about">
        <div className="aboutCopy">
          <p className="eyebrow light">Born in the basin</p>
          <h2>Local knowledge, down to every angle.</h2>
          <p>
            Founder Leila Kuelper grew up in Lake Tahoe and began her real
            estate career in 2014. She knows the angles a listing photographer
            will shoot and stages each room with those images, and the buyer
            behind them, in mind.
          </p>
          <p>
            When she could not find the staging resources her listings needed,
            she built them. Today, our furniture, decor, trucks, and team are
            all based locally in South Lake Tahoe.
          </p>
          <a className="button buttonLight" href={consultHref}>Book a consultation</a>
        </div>
        <div className="aboutImage">
          <img
            src="/images/leila-photo_orig-484cb5be63.png"
            alt="Leila Kuelper, founder of Staging the Sierras"
          />
          <span>Leila Kuelper<br /><small>Founder &amp; creative director</small></span>
        </div>
      </section>

      <section className="gallery section">
        <div className="galleryTitle">
          <p className="eyebrow">Selected work</p>
          <h2>Homes we&apos;ve brought to life.</h2>
          <p>Every project reflects the home&apos;s setting, purpose, and potential.</p>
        </div>
        <div className="galleryGrid">
          <img src="/images/20240908_6_0---copy-2--aa38029762.jpg" alt="Mountain-modern living room" />
          <img src="/images/3-311946f1d9.jpg" alt="Warmly layered Tahoe home" />
          <img src="/images/22-0b7e9b7b76.jpg" alt="Refined interior staged for sale" />
        </div>
      </section>

      <section className="faq section">
        <div className="faqImage">
          <img
            src="/images/20240908_12_0---copy-2--68ea722397.jpg"
            alt="Inviting neutral sitting area in a Tahoe home"
          />
          <div>
            <p>Have another question?</p>
            <a href="tel:+17752348642">(775) 234-8642</a>
          </div>
        </div>
        <div className="faqCopy">
          <p className="eyebrow">Good to know</p>
          <h2>Frequently asked questions.</h2>
          <div className="questions">
            {faqs.map((faq, index) => (
              <details key={faq.question} open={index === 0}>
                <summary>{faq.question}<span>+</span></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="finalCta section">
        <img
          src="/images/4-96c48bcfbc.jpg"
          alt="Elevated Tahoe interior ready to welcome buyers"
        />
        <div />
        <article>
          <p className="eyebrow light">Your home, thoughtfully transformed</p>
          <h2>Ready to make a lasting first impression?</h2>
          <p>
            Tell us about your property. Your consultation fee is fully
            credited toward your staging package when you move forward.
          </p>
          <a className="button buttonLight" href={consultHref}>Book a consultation</a>
        </article>
      </section>

      <footer>
        <div className="footerBrand">STAGING <i>the</i> SIERRAS</div>
        <p>Home staging &amp; interior design throughout the Tahoe Basin.</p>
        <div className="footerLinks">
          <a href="tel:+17752348642">(775) 234-8642</a>
          <a href="mailto:hello@stagingthesierras.com">hello@stagingthesierras.com</a>
          <span>South Lake Tahoe, CA</span>
        </div>
        <small>© 2026 Staging the Sierras</small>
      </footer>

      <style>{`
        :root { --pine:#18382f; --cream:#f4f0e7; --sand:#d3c4ac; --ink:#20312c; --rust:#a45639; }
        * { box-sizing:border-box; }
        html { scroll-behavior:smooth; }
        body { margin:0; background:var(--cream); color:var(--ink); font-family:Arial, Helvetica, sans-serif; }
        a { color:inherit; text-decoration:none; }
        img { display:block; width:100%; height:100%; object-fit:cover; }
        h1,h2,h3,p { margin-top:0; }
        h1,h2 { font-family:Georgia, 'Times New Roman', serif; font-weight:400; letter-spacing:-.045em; }
        h2 { font-size:clamp(2.7rem,5vw,5.6rem); line-height:.96; }
        p { line-height:1.65; }
        .section { padding:clamp(5rem,10vw,9rem) clamp(1.4rem,6vw,6rem); }
        .eyebrow { font-size:.69rem; font-weight:700; letter-spacing:.2em; text-transform:uppercase; margin-bottom:1.6rem; }
        .eyebrow.light { color:#e8ddcb; }
        .button { display:inline-flex; align-items:center; justify-content:center; min-height:48px; padding:0 1.45rem; border:1px solid var(--pine); background:var(--pine); color:white; font-size:.7rem; font-weight:700; letter-spacing:.12em; text-transform:uppercase; transition:.25s ease; }
        .button:hover { background:var(--rust); border-color:var(--rust); transform:translateY(-2px); }
        .buttonLight { color:var(--pine); background:#f7f2e9; border-color:#f7f2e9; }
        .nav { height:88px; padding:0 clamp(1.2rem,4vw,4rem); display:flex; align-items:center; justify-content:space-between; background:#f5f0e8; position:relative; z-index:10; }
        .brand { width:190px; height:64px; }
        .brand img { object-fit:contain; }
        .navLinks { display:flex; gap:2.3rem; font-size:.67rem; font-weight:700; letter-spacing:.13em; text-transform:uppercase; }
        .navLinks a:hover { color:var(--rust); }
        .hero { min-height:calc(100vh - 88px); position:relative; color:white; display:flex; align-items:flex-end; padding:8rem clamp(1.4rem,8vw,8rem); overflow:hidden; }
        .heroImage,.heroShade { position:absolute; inset:0; }
        .heroShade { background:linear-gradient(90deg,rgba(11,32,26,.77) 0%,rgba(11,32,26,.2) 65%),linear-gradient(0deg,rgba(11,25,21,.5),transparent 55%); }
        .heroContent { position:relative; width:min(850px,88%); z-index:1; }
        .hero h1 { font-size:clamp(4.1rem,9.2vw,9.8rem); line-height:.82; margin-bottom:2rem; }
        .heroIntro { max-width:580px; font-size:1.08rem; margin-bottom:2.2rem; }
        .scroll { position:absolute; z-index:1; right:3rem; bottom:3rem; font-size:.62rem; letter-spacing:.18em; text-transform:uppercase; writing-mode:vertical-rl; }
        .ticker { min-height:66px; padding:1rem 4vw; display:flex; gap:2.5rem; align-items:center; justify-content:center; background:var(--pine); color:#efe7d8; font-family:Georgia,serif; font-size:1rem; font-style:italic; }
        .ticker i { width:4px; height:4px; background:var(--sand); border-radius:50%; }
        .intro { display:grid; grid-template-columns:minmax(280px,.9fr) minmax(320px,1fr); gap:clamp(3rem,9vw,10rem); align-items:center; }
        .introImage { height:min(690px,72vw); position:relative; }
        .introImage:before { content:''; position:absolute; inset:-18px 18px 18px -18px; border:1px solid #ae9d81; z-index:-1; }
        .frameNote { position:absolute; left:-2.5rem; bottom:4rem; padding:.7rem 1rem; background:var(--cream); font-family:Georgia,serif; font-style:italic; transform:rotate(-90deg); }
        .introCopy h2 { max-width:720px; }
        .introCopy>p:not(.eyebrow) { max-width:590px; font-size:1.05rem; color:#58645f; }
        .signature { margin-top:3rem; padding-top:1.5rem; border-top:1px solid #c9bead; font-family:Georgia,serif; font-size:1.25rem; font-style:italic; }
        .proof { color:white; background:var(--pine); display:grid; grid-template-columns:.8fr 1.2fr; }
        .proofHeading { padding:2rem 6vw 4rem 0; }
        .proofHeading h2 { margin-bottom:2rem; }
        .proofHeading>p:last-child { color:#c9d0ca; max-width:430px; }
        .proofImage { min-height:540px; }
        .proofGrid { grid-column:1/-1; display:grid; grid-template-columns:repeat(3,1fr); border-top:1px solid rgba(255,255,255,.25); margin-top:5rem; }
        .proofGrid article { padding:3rem clamp(1rem,3vw,3rem); border-right:1px solid rgba(255,255,255,.25); }
        .proofGrid article:first-child { padding-left:0; }
        .proofGrid article:last-child { border:0; }
        .proofGrid strong { color:#dbc9ac; display:block; font-family:Georgia,serif; font-size:clamp(2.3rem,4vw,4.5rem); font-weight:400; margin-bottom:1.5rem; }
        .proofGrid h3 { font-family:Georgia,serif; font-size:1.35rem; font-weight:400; }
        .proofGrid p { color:#bdc7c1; font-size:.88rem; margin-bottom:0; }
        .servicesTop { display:flex; justify-content:space-between; align-items:flex-end; gap:3rem; margin-bottom:5rem; }
        .servicesTop>div { max-width:850px; }
        .servicesTop h2 { margin:0; }
        .servicesTop .button { flex:0 0 auto; }
        .serviceLayout { display:grid; grid-template-columns:1fr 1fr; gap:clamp(2.5rem,7vw,7rem); align-items:stretch; }
        .serviceLayout>img { min-height:680px; }
        .serviceList { display:flex; flex-direction:column; justify-content:center; }
        .serviceList article { display:grid; grid-template-columns:55px 1fr; gap:1.5rem; padding:2.2rem 0; border-top:1px solid #bdb3a2; }
        .serviceList article:last-child { border-bottom:1px solid #bdb3a2; }
        .serviceList span { color:var(--rust); font:italic 1rem Georgia,serif; }
        .serviceList h3 { font:400 2rem Georgia,serif; margin-bottom:.7rem; }
        .serviceList p { color:#626b67; margin:0; max-width:500px; }
        .process { background:#ddd2c0; display:grid; grid-template-columns:1fr 1fr; gap:clamp(3rem,8vw,9rem); align-items:center; }
        .processImage { height:760px; }
        .processCopy h2 { max-width:650px; }
        .processCopy ol { list-style:none; padding:0; margin:3rem 0 0; }
        .processCopy li { display:grid; grid-template-columns:50px 1fr; gap:1rem; border-top:1px solid #aa9d88; padding:1.35rem 0; }
        .processCopy li>span { color:var(--rust); font:italic .95rem Georgia,serif; }
        .processCopy h3 { font:400 1.4rem Georgia,serif; margin-bottom:.35rem; }
        .processCopy li p { color:#5e625d; font-size:.88rem; margin:0; }
        .quote { position:relative; min-height:820px; display:flex; align-items:center; justify-content:flex-end; }
        .quote>img { position:absolute; inset:0; }
        .quoteCard { position:relative; width:min(600px,50vw); padding:clamp(2.5rem,6vw,6rem); background:rgba(247,242,233,.96); }
        .quoteMark { color:var(--rust); font:6rem/1 Georgia,serif; }
        blockquote { margin:0 0 2.5rem; font:400 clamp(1.8rem,3vw,3.1rem)/1.18 Georgia,serif; }
        .quoteCard p { font-weight:700; margin-bottom:.2rem; }
        .quoteCard small { color:#69716d; letter-spacing:.08em; text-transform:uppercase; }
        .about { padding-bottom:0; display:grid; grid-template-columns:1fr 1fr; background:var(--pine); color:white; gap:clamp(3rem,9vw,9rem); align-items:end; }
        .aboutCopy { padding-bottom:clamp(5rem,9vw,9rem); }
        .aboutCopy h2 { max-width:700px; }
        .aboutCopy>p:not(.eyebrow) { max-width:600px; color:#c5cec8; }
        .aboutCopy .button { margin-top:1.5rem; }
        .aboutImage { height:760px; position:relative; background:#d2c3ad; }
        .aboutImage img { object-fit:contain; object-position:bottom; }
        .aboutImage>span { position:absolute; left:1.5rem; bottom:1.5rem; padding:1rem 1.2rem; background:var(--cream); color:var(--ink); font:1.1rem Georgia,serif; }
        .aboutImage small { font:600 .58rem Arial,sans-serif; letter-spacing:.11em; text-transform:uppercase; }
        .galleryTitle { display:flex; align-items:flex-end; justify-content:space-between; gap:4rem; margin-bottom:4rem; }
        .galleryTitle h2 { max-width:750px; margin-bottom:0; }
        .galleryTitle>p:last-child { max-width:300px; color:#69716d; }
        .galleryGrid { display:grid; grid-template-columns:1.3fr .8fr 1fr; gap:1rem; align-items:end; }
        .galleryGrid img:nth-child(1) { height:610px; }
        .galleryGrid img:nth-child(2) { height:440px; }
        .galleryGrid img:nth-child(3) { height:530px; }
        .faq { display:grid; grid-template-columns:.8fr 1.2fr; gap:clamp(3rem,9vw,9rem); background:#e5dbc9; }
        .faqImage { height:720px; position:relative; }
        .faqImage>div { position:absolute; bottom:0; right:0; background:var(--pine); color:white; padding:1.5rem 2rem; }
        .faqImage p { margin-bottom:.25rem; font-size:.68rem; text-transform:uppercase; letter-spacing:.1em; }
        .faqImage a { font:1.35rem Georgia,serif; }
        .faqCopy h2 { max-width:680px; }
        .questions { margin-top:3rem; }
        details { border-top:1px solid #a99e8c; padding:1.3rem 0; }
        details:last-child { border-bottom:1px solid #a99e8c; }
        summary { cursor:pointer; list-style:none; display:flex; justify-content:space-between; font:1.2rem Georgia,serif; }
        summary::-webkit-details-marker { display:none; }
        summary span { color:var(--rust); font:1.4rem Arial,sans-serif; }
        details p { max-width:620px; color:#5f6863; font-size:.9rem; padding-right:2rem; margin:1rem 0 0; }
        .finalCta { min-height:700px; position:relative; display:grid; place-items:center; text-align:center; color:white; }
        .finalCta>img,.finalCta>div { position:absolute; inset:0; }
        .finalCta>div { background:rgba(17,48,39,.72); }
        .finalCta article { position:relative; max-width:860px; }
        .finalCta h2 { font-size:clamp(3.4rem,7vw,7rem); }
        .finalCta article>p:not(.eyebrow) { max-width:610px; margin:0 auto 2rem; }
        footer { padding:5rem 6vw 2rem; background:#102b24; color:#d8d0c2; text-align:center; }
        .footerBrand { color:white; font:2rem Georgia,serif; letter-spacing:.16em; }
        .footerBrand i { font-size:1rem; letter-spacing:0; }
        footer>p { color:#9cafaa; margin:1rem 0 2.5rem; }
        .footerLinks { display:flex; justify-content:center; gap:2rem; flex-wrap:wrap; font-size:.75rem; letter-spacing:.08em; text-transform:uppercase; }
        footer>small { display:block; border-top:1px solid rgba(255,255,255,.14); margin-top:4rem; padding-top:2rem; color:#7f938d; }
        @media (max-width: 900px) {
          .navLinks { display:none; }
          .hero { min-height:760px; padding-bottom:5rem; }
          .scroll { display:none; }
          .ticker { justify-content:flex-start; overflow:hidden; }
          .intro,.serviceLayout,.process,.about,.faq { grid-template-columns:1fr; }
          .proof { grid-template-columns:1fr; }
          .proofHeading { padding-right:0; }
          .proofImage { min-height:440px; }
          .proofGrid { grid-template-columns:1fr; margin-top:2rem; }
          .proofGrid article,.proofGrid article:first-child { padding:2.2rem 0; border-right:0; border-bottom:1px solid rgba(255,255,255,.25); }
          .servicesTop { align-items:flex-start; flex-direction:column; }
          .serviceLayout>img,.processImage,.aboutImage,.faqImage { height:600px; min-height:0; }
          .processImage { order:2; }
          .quote { min-height:700px; align-items:flex-end; }
          .quoteCard { width:85vw; }
          .galleryTitle { display:block; }
          .galleryTitle>p:last-child { margin-top:1.5rem; }
          .galleryGrid { grid-template-columns:1fr 1fr; }
          .galleryGrid img:nth-child(1) { grid-column:1/-1; height:500px; }
          .galleryGrid img:nth-child(2),.galleryGrid img:nth-child(3) { height:420px; }
        }
        @media (max-width: 600px) {
          .nav { height:74px; }
          .brand { width:145px; }
          .navButton { min-height:42px; padding:0 .8rem; font-size:.58rem; }
          .hero { min-height:680px; padding-bottom:4rem; }
          .heroContent { width:100%; }
          .hero h1 { font-size:4rem; }
          .ticker { gap:1.3rem; white-space:nowrap; }
          .intro { gap:4rem; }
          .introImage { height:480px; }
          .frameNote { display:none; }
          .serviceLayout>img,.processImage,.aboutImage,.faqImage { height:470px; }
          .quote { min-height:680px; padding-left:0; padding-right:0; }
          .quoteCard { width:calc(100% - 2rem); padding:2.4rem; }
          .galleryGrid { display:block; }
          .galleryGrid img:nth-child(n) { height:390px; margin-bottom:1rem; }
          .finalCta { min-height:650px; }
          .footerLinks { flex-direction:column; gap:1rem; }
        }
      `}</style>
    </main>
  );
}
