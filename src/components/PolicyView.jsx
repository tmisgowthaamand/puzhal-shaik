import { ArrowLeft, Mail, MapPin, Clock, Phone } from 'lucide-react';
import { PRIVACY_POLICY, TERMS_AND_CONDITIONS } from '../data/legalPolicies';

export default function PolicyView({ policyId, onBackHome, onSwitchPolicy }) {
  const policy = policyId === 'terms-and-conditions' ? TERMS_AND_CONDITIONS : PRIVACY_POLICY;

  return (
    <main className="policy-page">
      <div className="container">
        <div className="policy-topbar">
          <button type="button" className="btn-secondary" onClick={onBackHome}>
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </button>

          <div className="policy-tabs" role="tablist" aria-label="Legal Policies">
            <button
              type="button"
              role="tab"
              aria-selected={policy.id === 'privacy-policy'}
              className={`policy-tab ${policy.id === 'privacy-policy' ? 'active' : ''}`}
              onClick={() => onSwitchPolicy('privacy-policy')}
            >
              Privacy Policy
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={policy.id === 'terms-and-conditions'}
              className={`policy-tab ${policy.id === 'terms-and-conditions' ? 'active' : ''}`}
              onClick={() => onSwitchPolicy('terms-and-conditions')}
            >
              Terms &amp; Conditions
            </button>
          </div>
        </div>

        <div className="policy-layout">
          <aside className="policy-toc" aria-label="Policy Sections">
            <p className="policy-toc-title">On This Page</p>
            <ul className="policy-toc-list">
              {policy.sections.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`}>{section.heading}</a>
                </li>
              ))}
            </ul>
          </aside>

          <article className="policy-article">
            <span className="section-eyebrow">Legal &amp; Compliance</span>
            <h1>{policy.title}</h1>
            <p className="policy-meta">
              Effective &amp; Last Updated: {policy.lastUpdated} · Jurisdiction: Chennai, Tamil Nadu, India
            </p>

            <p style={{ color: 'var(--ink-secondary)', marginBottom: '24px' }}>{policy.summary}</p>

            {policy.sections.map((section) => (
              <section key={section.id} id={section.id} className="policy-section">
                <h2>{section.heading}</h2>
                {section.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
                {section.bullets && (
                  <ul>
                    {section.bullets.map((b, idx) => (
                      <li key={idx}>{b}</li>
                    ))}
                  </ul>
                )}
                {section.contactBox && (
                  <div className="policy-contact-box">
                    <h3>{section.contactBox.officeName}</h3>
                    <p>
                      <strong>Designation:</strong> {section.contactBox.role} ({section.contactBox.qualifications})
                    </p>
                    <p style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginTop: '8px' }}>
                      <MapPin size={16} style={{ flexShrink: 0, marginTop: '4px', color: 'var(--accent-primary)' }} />
                      <span>
                        {section.contactBox.addressLine1}, {section.contactBox.addressLine2}
                      </span>
                    </p>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Phone size={16} style={{ flexShrink: 0, color: 'var(--accent-primary)' }} />
                      <a href={`tel:${section.contactBox.phone}`}>{section.contactBox.phone}</a>
                    </p>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Mail size={16} style={{ flexShrink: 0, color: 'var(--accent-primary)' }} />
                      <a href={`mailto:${section.contactBox.email}`}>{section.contactBox.email}</a>
                    </p>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Clock size={16} style={{ flexShrink: 0, color: 'var(--accent-primary)' }} />
                      <span>{section.contactBox.officeHours}</span>
                    </p>
                  </div>
                )}
              </section>
            ))}
          </article>
        </div>
      </div>
    </main>
  );
}
