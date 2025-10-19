import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Terms() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white">
      {/* Header */}
      <header className="border-b border-[#222222] px-6 sm:px-8 md:px-12 py-6">
        <div className="max-w-5xl mx-auto">
          <Link to="/" className="flex items-center">
            <img 
              src="/assets/logo.png" 
              alt="HVAC to Equity" 
              className="h-10 sm:h-12 w-auto"
            />
          </Link>
        </div>
      </header>

      {/* Content */}
      <div className="px-6 sm:px-8 md:px-12 py-12 sm:py-16 md:py-20">
        <div className="max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-[#9CA3AF] to-[#E5E7EB] bg-clip-text text-transparent font-helvetica text-4xl sm:text-5xl md:text-6xl mb-4"
          >
            Terms & Conditions
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#9CA3AF] font-helvetica text-sm mb-12"
          >
            Effective Date: January 1, 2025
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="prose prose-invert prose-lg max-w-none"
          >
            {/* Section 1 */}
            <div className="mb-10">
              <h2 className="text-2xl font-helvetica font-bold text-white mb-4">1. Introduction</h2>
              <p className="text-[#E5E5E5] font-helvetica leading-relaxed mb-4">
                HVAC to Equity ("We," "Us," "Our," or "Company") provides business growth advisory, operational consulting, and M&A services for HVAC companies. By accessing our website or using our services, you ("You" or "Your") agree to these Terms and Conditions. HVAC to Equity is a Limited Liability Company registered in the United States.
              </p>
            </div>

            {/* Section 2 */}
            <div className="mb-10">
              <h2 className="text-2xl font-helvetica font-bold text-white mb-4">2. Services</h2>
              <p className="text-[#E5E5E5] font-helvetica leading-relaxed mb-4">
                We provide comprehensive business transformation services for HVAC companies seeking growth, operational excellence, and strategic exits. Services include:
              </p>
              <ul className="list-disc list-inside text-[#E5E5E5] font-helvetica leading-relaxed space-y-2 ml-4">
                <li>Operational assessment and optimization</li>
                <li>Financial restructuring and engineering</li>
                <li>Technology implementation and automation</li>
                <li>M&A advisory and exit planning</li>
                <li>Strategic buyer introductions</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="mb-10">
              <h2 className="text-2xl font-helvetica font-bold text-white mb-4">3. Client Obligations</h2>
              <p className="text-[#E5E5E5] font-helvetica leading-relaxed mb-4">
                You agree to provide accurate, complete, and truthful business information during our assessment. You are responsible for:
              </p>
              <ul className="list-disc list-inside text-[#E5E5E5] font-helvetica leading-relaxed space-y-2 ml-4">
                <li>Providing accurate financial statements and operational data</li>
                <li>Implementing agreed-upon strategies and systems</li>
                <li>Maintaining confidentiality of proprietary methodologies</li>
                <li>Communicating openly with your assigned advisors</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div className="mb-10">
              <h2 className="text-2xl font-helvetica font-bold text-white mb-4">4. Payments & Refunds</h2>
              <p className="text-[#E5E5E5] font-helvetica leading-relaxed mb-4">
                All fees are outlined during your initial strategy session. We offer flexible engagement models from monthly retainers to equity partnerships. Initial strategy sessions are complimentary. Engagement fees vary by scope and business size. Payments are processed securely and subject to the terms of your specific engagement agreement.
              </p>
            </div>

            {/* Section 5 */}
            <div className="mb-10">
              <h2 className="text-2xl font-helvetica font-bold text-white mb-4">5. Business Advisory Disclaimer</h2>
              <p className="text-[#E5E5E5] font-helvetica leading-relaxed mb-4">
                Our services provide business advisory and consulting. We do not guarantee specific financial outcomes or business results. Success depends on numerous factors including market conditions, execution, and commitment. Past performance of other clients does not guarantee your results. Always consult with legal and financial professionals for specific advice.
              </p>
            </div>

            {/* Section 6 */}
            <div className="mb-10">
              <h2 className="text-2xl font-helvetica font-bold text-white mb-4">6. Limitation of Liability</h2>
              <p className="text-[#E5E5E5] font-helvetica leading-relaxed mb-4">
                HVAC to Equity's total liability is limited to the fees paid by you in the preceding 90 days. We are not liable for indirect, consequential, or punitive damages, including lost profits or business opportunities. We do not guarantee specific business outcomes or exit valuations.
              </p>
            </div>

            {/* Section 7 */}
            <div className="mb-10">
              <h2 className="text-2xl font-helvetica font-bold text-white mb-4">7. Privacy & Confidentiality</h2>
              <p className="text-[#E5E5E5] font-helvetica leading-relaxed mb-4">
                Your business information is protected under strict confidentiality agreements. We maintain comprehensive non-disclosure protocols and only share information with your explicit consent or as required by law. See our <Link to="/privacy" className="text-[#326ec2] hover:text-[#2958a3] underline">Privacy Policy</Link> for details.
              </p>
            </div>

            {/* Section 8 */}
            <div className="mb-10">
              <h2 className="text-2xl font-helvetica font-bold text-white mb-4">8. Termination</h2>
              <p className="text-[#E5E5E5] font-helvetica leading-relaxed mb-4">
                You may discontinue services at any time with 30 days' written notice. We reserve the right to terminate services for non-payment, provision of false business information, or violation of these terms.
              </p>
            </div>

            {/* Section 9 */}
            <div className="mb-10">
              <h2 className="text-2xl font-helvetica font-bold text-white mb-4">9. Governing Law</h2>
              <p className="text-[#E5E5E5] font-helvetica leading-relaxed mb-4">
                This Agreement is governed by the laws of the United States. Disputes are subject to the exclusive jurisdiction of United States courts. If any provision is found invalid, the remaining provisions remain in full force.
              </p>
            </div>

            {/* Section 10 */}
            <div className="mb-10">
              <h2 className="text-2xl font-helvetica font-bold text-white mb-4">10. Contact</h2>
              <p className="text-[#E5E5E5] font-helvetica leading-relaxed">
                For questions regarding these Terms & Conditions, contact us at:{" "}
                <a href="mailto:info@hvactoequity.com" className="text-[#326ec2] hover:text-[#2958a3] underline">
                  info@hvactoequity.com
                </a>
              </p>
            </div>
          </motion.div>

          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-[#9CA3AF] hover:text-white transition-colors font-helvetica"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to home
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

