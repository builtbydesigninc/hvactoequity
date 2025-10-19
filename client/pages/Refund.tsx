import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Refund() {
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
            Service Agreement & Refund Policy
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
            className="space-y-10"
          >
            {/* Section 1 */}
            <div>
              <h2 className="text-2xl font-helvetica font-bold text-white mb-4">Our Commitment to You</h2>
              <p className="text-[#E5E5E5] font-helvetica leading-relaxed mb-4">
                At HVAC to Equity, your satisfaction and success are our top priorities. We maintain the highest standards for all advisory services and strive to ensure you achieve your business goals. Due to the nature of consulting services, specific conditions apply to refunds.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-2xl font-helvetica font-bold text-white mb-4">Strategy Session Fees</h2>
              <p className="text-[#E5E5E5] font-helvetica leading-relaxed mb-4">
                Initial strategy sessions with our business advisors are provided at <strong>$0 cost</strong>. There are no refunds for strategy sessions as we do not charge for them.
              </p>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-2xl font-helvetica font-bold text-white mb-4">Service Refunds</h2>
              <p className="text-[#E5E5E5] font-helvetica leading-relaxed mb-4">
                Due to the nature of business advisory services:
              </p>
              <ul className="list-disc list-inside text-[#E5E5E5] font-helvetica leading-relaxed space-y-3 ml-4">
                <li><strong>Monthly Retainers:</strong> May be cancelled with 30 days notice. Current month is non-refundable.</li>
                <li><strong>Project-Based Engagements:</strong> Milestone payments are non-refundable once work has commenced.</li>
                <li><strong>Unsatisfactory Results:</strong> If you're not seeing results, we'll work with you to adjust strategies at no additional cost.</li>
                <li><strong>Service Issues:</strong> Any service delivery issues will be addressed immediately with make-good services.</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-2xl font-helvetica font-bold text-white mb-4">Refund Process</h2>
              <p className="text-[#E5E5E5] font-helvetica leading-relaxed mb-4">
                To initiate a return:
              </p>
              <ol className="list-decimal list-inside text-[#E5E5E5] font-helvetica leading-relaxed space-y-3 ml-4">
                <li>Contact our support team at <a href="mailto:info@hvactoequity.com" className="text-[#326ec2] hover:text-[#2958a3] underline">info@hvactoequity.com</a> within the eligible timeframe</li>
                <li>Provide your order number and reason for return</li>
                <li>Receive return authorization and shipping instructions</li>
                <li>Ship the product back in original condition and packaging</li>
                <li>Refund processed within 7-10 business days upon receipt</li>
              </ol>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-2xl font-helvetica font-bold text-white mb-4">Non-Refundable Items</h2>
              <p className="text-[#E5E5E5] font-helvetica leading-relaxed mb-4">
                The following are not eligible for refund:
              </p>
              <ul className="list-disc list-inside text-[#E5E5E5] font-helvetica leading-relaxed space-y-2 ml-4">
                <li>Opened medication vials, bottles, or packaging</li>
                <li>Custom-compounded prescriptions tailored to your dosage</li>
                <li>Lab testing services already performed</li>
                <li>Physician consultation time (already provided at $0)</li>
                <li>Digital health assessments completed</li>
              </ul>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-2xl font-helvetica font-bold text-white mb-4">Treatment Dissatisfaction</h2>
              <p className="text-[#E5E5E5] font-helvetica leading-relaxed mb-4">
                If you're not achieving desired results, we encourage you to contact your assigned clinician for dosage adjustments or alternative treatment options. Our physicians provide ongoing optimization at no additional consultation cost.
              </p>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="text-2xl font-helvetica font-bold text-white mb-4">Cancellations</h2>
              <p className="text-[#E5E5E5] font-helvetica leading-relaxed mb-4">
                You may cancel future shipments at any time before the order is processed and shipped. Contact us at least 48 hours before your scheduled refill date to avoid charges. Once an order has been shipped, standard return policies apply.
              </p>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="text-2xl font-helvetica font-bold text-white mb-4">Shipping Delays or Lost Packages</h2>
              <p className="text-[#E5E5E5] font-helvetica leading-relaxed mb-4">
                We ship all orders with tracking. If your package is lost or significantly delayed (beyond 7 business days), we will reship at no cost or issue a full refund at your preference.
              </p>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="text-2xl font-helvetica font-bold text-white mb-4">Contact Us</h2>
              <p className="text-[#E5E5E5] font-helvetica leading-relaxed">
                For returns, refunds, or questions about this policy, contact us at:{" "}
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

