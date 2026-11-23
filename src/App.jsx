import { useEffect, useState } from 'react';
import {
  Scale,
  BookOpen,
  Users,
  MapPin,
  Mail,
  Phone,
  Clock,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import Navbar from './components/Navbar';
import PolicyView from './components/PolicyView';
import Footer from './components/Footer';
import { PROFILE_DATA, CONTACT_DETAILS } from './data/profileData';

function getViewFromLocation() {
  const path = window.location.pathname.replace(/^\/+|\/+$/g, '');
  const hash = window.location.hash.replace('#', '');
  if (path === 'privacy-policy' || hash === 'privacy-policy') {
    return 'privacy-policy';
  }
  if (path === 'terms-and-conditions' || hash === 'terms-and-conditions') {
    return 'terms-and-conditions';
  }
  return 'home';
}

export default function App() {
  const [activeView, setActiveView] = useState(getViewFromLocation);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const syncView = () => {
      const next = getViewFromLocation();
      setActiveView(next);
      if (next !== 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };
    window.addEventListener('popstate', syncView);
    window.addEventListener('hashchange', syncView);
    return () => {
      window.removeEventListener('popstate', syncView);
      window.removeEventListener('hashchange', syncView);
    };
  }, []);

  const openPolicy = (policyId) => {
    window.history.pushState(null, '', `/${policyId}`);
    setActiveView(policyId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToSection = (sectionId) => {
    if (activeView !== 'home') {
      setActiveView('home');
      window.history.pushState(null, '', sectionId === 'top' ? '/' : `/#${sectionId}`);
      setTimeout(() => {
        if (sectionId === 'top') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        }
      }, 60);
      return;
    }

    if (sectionId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      return;
    }
    setSubmitted(true);
    setFormState({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <>
      <Navbar onNavigateSection={navigateToSection} />

      {activeView !== 'home' ? (
        <PolicyView
          policyId={activeView}
          onBackHome={() => navigateToSection('top')}
          onSwitchPolicy={openPolicy}
        />
      ) : (
        <main id="top">
          {/* HERO SECTION */}
          <section className="hero-section">
            <div className="container hero-grid">
              <div>
                <div className="hero-kicker">
                  <span>{PROFILE_DATA.tagline}</span>
                </div>
                <h1 className="hero-title">{PROFILE_DATA.name}</h1>
                <p className="hero-role">
                  {PROFILE_DATA.roleTitle} · {PROFILE_DATA.location}
                </p>

                {PROFILE_DATA.heroParagraphs.map((para, idx) => (
                  <p key={idx} className="hero-lead">
                    {para}
                  </p>
                ))}

                <div className="hero-pills">
                  <span className="pill">
                    <Scale size={14} /> MBA &amp; LL.B. Advocate
                  </span>
                  <span className="pill">
                    <Users size={14} /> Public Life Since 2003
                  </span>
                  <span className="pill">
                    <BookOpen size={14} /> Author &amp; Social Worker
                  </span>
                </div>

                <div className="hero-actions">
                  <button
                    type="button"
                    className="btn-primary"
                    onClick={() => navigateToSection('vision')}
                  >
                    <span>Thoughts &amp; Vision</span>
                    <ArrowRight size={16} />
                  </button>
                  <button
                    type="button"
                    className="btn-secondary"
                    onClick={() => navigateToSection('contact')}
                  >
                    <span>Contact Office</span>
                  </button>
                </div>
              </div>

              <div className="hero-portrait-wrap">
                <div className="hero-portrait-frame">
                  <img
                    src={PROFILE_DATA.portraitSrc}
                    alt={PROFILE_DATA.portraitAlt}
                    loading="eager"
                  />
                </div>
                <p className="portrait-caption">
                  {PROFILE_DATA.name} · {PROFILE_DATA.location}
                </p>
              </div>
            </div>
          </section>

          {/* JOURNEY IN PUBLIC LIFE */}
          <section id="journey" className="section section-subtle">
            <div className="container">
              <div className="section-header">
                <span className="section-eyebrow">Public Service Since 2003</span>
                <h2 className="section-title">Journey in Public Life</h2>
              </div>

              <div className="editorial-split">
                <div className="prose-stack">
                  {PROFILE_DATA.journey.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>

                <aside className="highlight-card">
                  <h3>Legal Profession &amp; Commitment</h3>
                  <div className="prose-stack">
                    {PROFILE_DATA.legalCommitment.map((para, idx) => (
                      <p key={idx}>{para}</p>
                    ))}
                  </div>
                </aside>
              </div>
            </div>
          </section>

          {/* POLITICAL & SOCIAL CONTRIBUTIONS + WOMEN'S EMPOWERMENT */}
          <section id="legal-political" className="section">
            <div className="container">
              <div className="section-header">
                <span className="section-eyebrow">Service &amp; Representation</span>
                <h2 className="section-title">Political &amp; Social Contributions</h2>
              </div>

              <div className="prose-stack" style={{ maxWidth: '72ch' }}>
                <p>{PROFILE_DATA.politicalIntro}</p>
              </div>

              <ul className="bullet-grid">
                {PROFILE_DATA.politicalCommitments.map((item) => (
                  <li key={item} className="bullet-item">
                    <span className="bullet-dot" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p
                style={{
                  marginTop: '20px',
                  color: 'var(--ink-secondary)',
                  maxWidth: '72ch',
                }}
              >
                {PROFILE_DATA.politicalClosing}
              </p>

              <div
                className="highlight-card"
                style={{ marginTop: '36px', background: 'var(--bg-subtle)' }}
              >
                <span className="section-eyebrow">Equality &amp; Dignity</span>
                <h3 style={{ fontSize: 'clamp(1.3rem, 3vw, 1.65rem)', marginBottom: '14px' }}>
                  Women&apos;s Empowerment and Equal Rights
                </h3>
                <div className="prose-stack">
                  {PROFILE_DATA.womensEmpowerment.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* LITERARY JOURNEY & YOUTH DEVELOPMENT */}
          <section id="literary" className="section section-subtle">
            <div className="container">
              <div className="editorial-split">
                <div>
                  <div className="section-header" style={{ marginBottom: '20px' }}>
                    <span className="section-eyebrow">Publications &amp; Thought</span>
                    <h2 className="section-title">Literary Journey &amp; Publications</h2>
                  </div>
                  <p style={{ color: 'var(--ink-secondary)', marginBottom: '18px' }}>
                    {PROFILE_DATA.literary.intro}
                  </p>

                  <div className="book-card">
                    <span className="section-eyebrow">First Published Book</span>
                    <h3 className="book-title">{PROFILE_DATA.literary.bookTitle}</h3>
                    <p style={{ margin: '0 0 12px', color: 'var(--ink-secondary)' }}>
                      {PROFILE_DATA.literary.bookDescription}
                    </p>
                    <div className="prose-stack">
                      {PROFILE_DATA.literary.paragraphs.map((para, idx) => (
                        <p key={idx}>{para}</p>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="highlight-card">
                  <span className="section-eyebrow">Next Generation</span>
                  <h3 style={{ fontSize: 'clamp(1.3rem, 3vw, 1.6rem)', marginBottom: '14px' }}>
                    Youth and Educational Development
                  </h3>
                  <div className="prose-stack">
                    {PROFILE_DATA.youthDevelopment.map((para, idx) => (
                      <p key={idx}>{para}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* THOUGHTS & VISION (9 FOCUS AREAS) */}
          <section id="vision" className="section">
            <div className="container">
              <div className="section-header">
                <span className="section-eyebrow">Core Pillars</span>
                <h2 className="section-title">My Thoughts and Vision</h2>
                <p style={{ color: 'var(--ink-secondary)', marginTop: '12px' }}>
                  {PROFILE_DATA.thoughtsIntro}
                </p>
              </div>

              <div className="focus-grid">
                {PROFILE_DATA.focusAreas.map((area) => (
                  <article key={area.number} className="focus-card">
                    <span className="focus-num">{area.number}</span>
                    <h3>{area.title}</h3>
                    <p>{area.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* VISION & MISSION STATEMENT */}
          <section className="section section-subtle">
            <div className="container">
              <div className="mission-box">
                <span className="section-eyebrow">Commitment to Society</span>
                <h2 className="section-title">My Vision and Mission</h2>
                {PROFILE_DATA.missionParagraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}

                <div className="rally-grid">
                  {PROFILE_DATA.rallyingCalls.map((call) => (
                    <div key={call} className="rally-line">
                      {call}
                    </div>
                  ))}
                </div>

                <div className="signature-block">
                  <strong style={{ fontSize: '1.05rem', display: 'block', marginBottom: '4px' }}>
                    {PROFILE_DATA.name}
                  </strong>
                  <div>{PROFILE_DATA.roleTitle}</div>
                  <div>{PROFILE_DATA.location}</div>
                  <div style={{ opacity: 0.85, marginTop: '4px' }}>{PROFILE_DATA.credentials}</div>
                </div>
              </div>
            </div>
          </section>

          {/* CONTACT SECTION */}
          <section id="contact" className="section">
            <div className="container">
              <div className="section-header">
                <span className="section-eyebrow">Public &amp; Official Correspondence</span>
                <h2 className="section-title">Contact Details</h2>
              </div>

              <div className="contact-grid">
                <div className="highlight-card">
                  <h3>{CONTACT_DETAILS.officeName}</h3>
                  <div className="contact-item">
                    <MapPin size={18} className="contact-icon" />
                    <div>
                      <span className="contact-label">Location</span>
                      <span className="contact-value">
                        {CONTACT_DETAILS.addressLine1}, {CONTACT_DETAILS.addressLine2}
                      </span>
                    </div>
                  </div>
                  <div className="contact-item">
                    <Phone size={18} className="contact-icon" />
                    <div>
                      <span className="contact-label">Phone</span>
                      <a href={`tel:${CONTACT_DETAILS.phone}`} className="contact-value">
                        {CONTACT_DETAILS.phone}
                      </a>
                    </div>
                  </div>
                  <div className="contact-item">
                    <Mail size={18} className="contact-icon" />
                    <div>
                      <span className="contact-label">Official Email</span>
                      <a href={`mailto:${CONTACT_DETAILS.email}`} className="contact-value">
                        {CONTACT_DETAILS.email}
                      </a>
                    </div>
                  </div>
                  <div className="contact-item">
                    <Clock size={18} className="contact-icon" />
                    <div>
                      <span className="contact-label">Office Hours</span>
                      <span className="contact-value">{CONTACT_DETAILS.officeHours}</span>
                    </div>
                  </div>
                </div>

                <div className="highlight-card">
                  <h3>Send a Message</h3>
                  {submitted ? (
                    <div className="policy-contact-box" style={{ marginTop: 0 }}>
                      <p style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600 }}>
                        <CheckCircle2 size={18} style={{ color: 'var(--accent-primary)' }} />
                        <span>Thank you. Your inquiry has been noted.</span>
                      </p>
                      <p style={{ marginTop: '8px' }}>
                        For urgent matters, please write directly to{' '}
                        <a href={`mailto:${CONTACT_DETAILS.email}`}>{CONTACT_DETAILS.email}</a>.
                      </p>
                      <button
                        type="button"
                        className="btn-secondary"
                        style={{ marginTop: '12px' }}
                        onClick={() => setSubmitted(false)}
                      >
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <form className="form-grid" onSubmit={handleSubmit}>
                      <div>
                        <label htmlFor="contact-name" className="field-label">
                          Full Name
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          required
                          className="field-input"
                          placeholder="Your name"
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-email" className="field-label">
                          Email Address
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          required
                          className="field-input"
                          placeholder="you@example.com"
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-subject" className="field-label">
                          Subject
                        </label>
                        <input
                          id="contact-subject"
                          type="text"
                          className="field-input"
                          placeholder="Public Service / Literary / General Inquiry"
                          value={formState.subject}
                          onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-message" className="field-label">
                          Message
                        </label>
                        <textarea
                          id="contact-message"
                          rows={4}
                          required
                          className="field-textarea"
                          placeholder="Write your message here (please avoid sharing confidential legal documents)."
                          value={formState.message}
                          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        />
                      </div>
                      <button type="submit" className="btn-primary">
                        Submit Inquiry
                      </button>
                      <p style={{ margin: 0, fontSize: '0.78rem', color: 'var(--ink-muted)' }}>
                        By submitting, you acknowledge our{' '}
                        <button
                          type="button"
                          className="footer-link-btn"
                          style={{ fontSize: '0.78rem' }}
                          onClick={() => openPolicy('privacy-policy')}
                        >
                          Privacy Policy
                        </button>{' '}
                        and{' '}
                        <button
                          type="button"
                          className="footer-link-btn"
                          style={{ fontSize: '0.78rem' }}
                          onClick={() => openPolicy('terms-and-conditions')}
                        >
                          Terms &amp; Conditions
                        </button>
                        .
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </section>
        </main>
      )}

      <Footer onOpenPolicy={openPolicy} onNavigateSection={navigateToSection} />
    </>
  );
}
