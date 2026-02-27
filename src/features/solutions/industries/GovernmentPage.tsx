import PageLayout from '../../../components/layout/PageLayout';

export default function GovernmentPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-premium-dark via-blue-900 to-premium-primary text-white py-20 pt-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">FICAM-Compliant Identity for Government</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Meet federal and state security mandates with identity governance built for government agencies, 
            defense contractors, and public sector organizations.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="/contact" className="px-8 py-3 bg-premium-accent rounded-full font-medium hover:bg-cyan-600 transition-colors">
              Request Demo
            </a>
            <a href="#challenges" className="px-8 py-3 border border-white/40 rounded-full font-medium hover:bg-white/10 transition-colors">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Industry Challenges */}
      <section id="challenges" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Government Identity Challenges</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">FISMA Compliance</h3>
              <p className="text-gray-600">
                Meeting federal security requirements with continuous monitoring and audit readiness.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">FICAM Implementation</h3>
              <p className="text-gray-600">
                Aligning with Federal Identity, Credential, and Access Management architecture standards.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">PIV/CAC Integration</h3>
              <p className="text-gray-600">
                Seamless integration with Personal Identity Verification and Common Access Cards.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cross-Agency Access</h3>
              <p className="text-gray-600">
                Managing identity federation across federal, state, and local agencies.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Classified Systems</h3>
              <p className="text-gray-600">
                Secure access control for classified and sensitive government systems.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Contractor Management</h3>
              <p className="text-gray-600">
                Managing identity lifecycle for contractors, consultants, and third-party vendors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Government Solutions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all">
              <div className="text-5xl mb-4">🪪</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">PIV/CAC Integration</h3>
              <p className="text-gray-600 mb-4">
                Native support for PIV, CAC, and other federal smart cards. Seamless authentication across 
                government applications and systems.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ PIV/CAC card authentication</li>
                <li>✓ FICAM-compliant architecture</li>
                <li>✓ PKI integration</li>
                <li>✓ Certificate lifecycle management</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Agency Federation</h3>
              <p className="text-gray-600 mb-4">
                Secure identity federation between federal, state, and local agencies with SAML, OIDC, 
                and FICAM trust frameworks.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Cross-agency trust establishment</li>
                <li>✓ Federation with USA.gov services</li>
                <li>✓ Inter-agency access control</li>
                <li>✓ Federal bridge CA support</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all">
              <div className="text-5xl mb-4">📋</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">FISMA Compliance</h3>
              <p className="text-gray-600 mb-4">
                Automated compliance reporting for FISMA, FedRAMP, and agency-specific requirements. 
                Continuous monitoring and audit trails.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ NIST 800-53 control mapping</li>
                <li>✓ FedRAMP-ready documentation</li>
                <li>✓ Continuous diagnostics</li>
                <li>✓ Automated POA&M tracking</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all">
              <div className="text-5xl mb-4">🔐</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Classified Access</h3>
              <p className="text-gray-600 mb-4">
                Multi-level security for classified systems with granular access controls and 
                separation of duties for sensitive operations.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Multi-level security policies</li>
                <li>✓ Separation of duties enforcement</li>
                <li>✓ Classified system integration</li>
                <li>✓ Privileged session management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Government Results</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-premium-primary mb-2">100%</div>
              <p className="text-gray-600 font-medium">FISMA compliance achievement</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-premium-primary mb-2">80%</div>
              <p className="text-gray-600 font-medium">Faster audit preparation</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-premium-primary mb-2">60%</div>
              <p className="text-gray-600 font-medium">Reduction in identity management costs</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-premium-primary mb-2">Zero</div>
              <p className="text-gray-600 font-medium">Compliance violations</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-premium-dark via-premium-primary to-premium-secondary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Meet Federal Security Mandates</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join government agencies that trust PremiumID for FICAM-compliant identity security.
          </p>
          <a href="/contact" className="inline-block px-10 py-4 bg-white text-premium-primary font-semibold rounded-full text-lg hover:bg-gray-100 transition-colors">
            Schedule a Demo
          </a>
        </div>
      </section>
    </PageLayout>
  );
}