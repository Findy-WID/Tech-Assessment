import PageLayout from '../../../components/layout/PageLayout';

export default function IAMProviderPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-premium-dark via-blue-900 to-premium-primary text-white py-20 pt-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">PremiumID Provider</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Complete Identity and Access Management solution for modern enterprises. 
            Secure every identity, streamline access, and maintain compliance effortlessly.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="/contact" className="px-8 py-3 bg-premium-accent rounded-full font-medium hover:bg-cyan-600 transition-colors">
              Request Demo
            </a>
            <a href="#features" className="px-8 py-3 border border-white/40 rounded-full font-medium hover:bg-white/10 transition-colors">
              Explore Features
            </a>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Complete IAM Solution</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all">
              <div className="text-5xl mb-4">🔐</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Single Sign-On (SSO)</h3>
              <p className="text-gray-600 mb-4">
                One login for all enterprise applications. Support for SAML, OAuth 2.0, OpenID Connect, and WS-Federation protocols.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Eliminate password fatigue</li>
                <li>✓ Reduce help desk tickets by 60%</li>
                <li>✓ Seamless user experience</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Multi-Factor Authentication</h3>
              <p className="text-gray-600 mb-4">
                Add extra layers of security with biometric, SMS, email, authenticator apps, and hardware tokens.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Block 99.9% of account takeovers</li>
                <li>✓ FIDO2 and WebAuthn support</li>
                <li>✓ Adaptive risk-based authentication</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all">
              <div className="text-5xl mb-4">👥</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Identity Governance</h3>
              <p className="text-gray-600 mb-4">
                Automated provisioning, access reviews, and compliance reporting to ensure the right people have the right access.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Automated user lifecycle management</li>
                <li>✓ Role-based access control (RBAC)</li>
                <li>✓ Real-time access certification</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Access Analytics</h3>
              <p className="text-gray-600 mb-4">
                AI-powered insights to detect anomalies, identify risky access, and optimize security policies.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Behavioral analytics</li>
                <li>✓ Risk scoring</li>
                <li>✓ Automated threat detection</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all">
              <div className="text-5xl mb-4">🔑</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Privileged Access Management</h3>
              <p className="text-gray-600 mb-4">
                Secure high-risk accounts with just-in-time access, session recording, and approval workflows.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Vault for credentials</li>
                <li>✓ Session monitoring</li>
                <li>✓ Zero standing privileges</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all">
              <div className="text-5xl mb-4">📜</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Compliance & Audit</h3>
              <p className="text-gray-600 mb-4">
                Pre-built compliance templates for SOX, GDPR, HIPAA, ISO 27001, and automated audit trails.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Automated compliance reports</li>
                <li>✓ Audit-ready documentation</li>
                <li>✓ Policy enforcement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Integration */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">Integrates With Everything</h2>
          <p className="text-center text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Connect to 1000+ applications and systems with pre-built connectors and open APIs
          </p>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="p-6 bg-white rounded-lg">
              <p className="font-semibold text-gray-900">Microsoft Active Directory</p>
            </div>
            <div className="p-6 bg-white rounded-lg">
              <p className="font-semibold text-gray-900">Google Workspace</p>
            </div>
            <div className="p-6 bg-white rounded-lg">
              <p className="font-semibold text-gray-900">Salesforce</p>
            </div>
            <div className="p-6 bg-white rounded-lg">
              <p className="font-semibold text-gray-900">SAP</p>
            </div>
            <div className="p-6 bg-white rounded-lg">
              <p className="font-semibold text-gray-900">AWS</p>
            </div>
            <div className="p-6 bg-white rounded-lg">
              <p className="font-semibold text-gray-900">Azure</p>
            </div>
            <div className="p-6 bg-white rounded-lg">
              <p className="font-semibold text-gray-900">Oracle</p>
            </div>
            <div className="p-6 bg-white rounded-lg">
              <p className="font-semibold text-gray-900">ServiceNow</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-premium-dark via-premium-primary to-premium-secondary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Secure Your Enterprise?</h2>
          <p className="text-xl text-gray-300 mb-8">
            See how PremiumID Provider can transform your identity security in 30 minutes.
          </p>
          <a href="/contact" className="inline-block px-10 py-4 bg-white text-premium-primary font-semibold rounded-full text-lg hover:bg-gray-100 transition-colors">
            Schedule a Demo
          </a>
        </div>
      </section>
    </PageLayout>
  );
}
