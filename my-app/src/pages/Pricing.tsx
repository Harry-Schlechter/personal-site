import React, { useState, useEffect } from 'react';
import './Pricing.css';
import { FaCheck, FaStar, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import TrafficConsulting from './TrafficConsulting';

// Plan tier data
interface Plan {
  name: string;
  buildPrice: number | string;
  monthlyUpfront?: number;
  monthlyZeroDown: number | string;
  popular?: boolean;
  features: string[];
  zeroDownBonus?: string;
  isCustom?: boolean;
}

interface AddOn {
  name: string;
  price: number;
  description: string;
}

const plans: Plan[] = [
  {
    name: "Simple",
    buildPrice: 1500,
    monthlyUpfront: 100,
    monthlyZeroDown: 199,
    features: [
      "4 pages (Landing, About, Contact, Menu/Services)",
      "Responsive & mobile-friendly design",
      "Hosting, maintenance, and light updates (2/mo)",
      "Basic SEO setup",
      "SSL, domain setup, Google Maps embed"
    ],
    zeroDownBonus: "Quarterly analytics review + quarterly performance tweaks"
  },
  {
    name: "Standard",
    buildPrice: 2500,
    monthlyUpfront: 100,
    monthlyZeroDown: 250,
    popular: true,
    features: [
      "Everything in Simple + 1-2 additional pages",
      "Google Business setup",
      "Map pin optimization",
      "Basic SEO + analytics dashboard (GA4 + Data Studio)",
      "Monthly analytics review + tweaks (0-down only)"
    ]
  },
  {
    name: "Advanced",
    buildPrice: 4000,
    monthlyUpfront: 150,
    monthlyZeroDown: 325,
    features: [
      "Everything in Standard + 1-2 additional pages",
      "Advanced SEO strategy",
      "Online booking / ordering integration (OpenTable, Toast, etc.)",
      "Custom analytics dashboard + KPI tracking (0-down: monthly review)"
    ]
  },
  {
    name: "Enterprise",
    buildPrice: "Starts at $5000",
    monthlyZeroDown: "Starts at $500/mo",
    features: [
      "Full-stack web apps, AI integrations, database or backend systems",
      "Custom API or automation support",
      "Dedicated consulting & maintenance retainer"
    ],
    isCustom: true
  }
];

const addOns: AddOn[] = [
  {
    name: "Monthly Pop-Up / Promo Banner",
    price: 50,
    description: "We'll create and swap in a custom pop-up banner for promotions, events, or seasonal specials each month — great for restaurants or service businesses."
  },
  {
    name: "Speed Optimization",
    price: 50,
    description: "Monthly Lighthouse performance check, image compression, and caching updates to keep your site fast and high-ranking on Google."
  },
  {
    name: "Google Business Post Updates",
    price: 50,
    description: "We'll post updates or new photos to your Google Business profile 1–2 times per month to boost visibility and SEO."
  },
  {
    name: "Photo Gallery Refresh",
    price: 50,
    description: "Swap or add up to 10 new photos monthly, optimized for web performance and SEO — perfect for restaurants or retail shops."
  },
  {
    name: "Mini SEO + Analytics Report",
    price: 50,
    description: "You'll receive an automated monthly email report summarizing site traffic, keyword performance, and a simple actionable insight."
  },
  {
    name: "Growth Package (SEO + Dashboard + Emails)",
    price: 150,
    description: "Comprehensive digital presence management — includes SEO keyword maintenance, GA4 dashboard access, and monthly performance emails."
  },
  {
    name: "4 Updates / Month Package",
    price: 70,
    description: "Increase your monthly content/design updates from 2 to 4 — ideal for sites that update menus, services, or events regularly."
  },
  {
    name: "8 Updates / Month Package",
    price: 125,
    description: "Up to 8 total updates per month — perfect for active businesses that refresh content weekly."
  },
  {
    name: "Priority Support (Unlimited Updates, 24/7)",
    price: 250,
    description: "Unlimited content or design updates, emergency response, and after-hours support — full concierge experience."
  }
];

const Pricing: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState(1); // Default to Standard
  const [paymentType, setPaymentType] = useState<'upfront' | 'zeroDown'>('upfront');
  const [cardViewPaymentType, setCardViewPaymentType] = useState<'upfront' | 'zeroDown'>('zeroDown'); // Card view toggle
  const [selectedAddOns, setSelectedAddOns] = useState<number[]>([]);
  const [expandedAddOn, setExpandedAddOn] = useState<number | null>(null);
  const [showFeatures, setShowFeatures] = useState(false); // Features dropdown toggle
  const [selectedConsultingTier, setSelectedConsultingTier] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentPlan = plans[selectedPlan];
  const isEnterprise = currentPlan.isCustom || false;

  // Calculate totals
  const calculateTotals = (): { upfront: number | string; monthly: number | string } => {
    if (isEnterprise) {
      return { upfront: 'Custom', monthly: 'Custom' };
    }

    const buildPrice = paymentType === 'upfront' ? (currentPlan.buildPrice as number) : 0;
    const baseMonthly = paymentType === 'upfront' 
      ? (currentPlan.monthlyUpfront as number)
      : (currentPlan.monthlyZeroDown as number);
    
    const addOnTotal: number = selectedAddOns.reduce((sum: number, index: number) => sum + addOns[index].price, 0);
    
    // Add consulting tier price if selected
    let consultingMonthly = 0;
    if (selectedConsultingTier !== null) {
      const consultingTier = [
        { name: "Starter", price: 25, includedWith: ["Standard ($0 Down)", "Advanced ($0 Down)"] },
        { name: "Growth", price: 50, includedWith: [] },
        { name: "Ultimate", price: 100, includedWith: [] }
      ][selectedConsultingTier];
      
      // Check if tier is included for free
      const isIncluded = paymentType === 'zeroDown' && 
        consultingTier.includedWith.includes(`${currentPlan.name} ($0 Down)`);
      
      consultingMonthly = isIncluded ? 0 : consultingTier.price;
    }
    
    return {
      upfront: buildPrice,
      monthly: baseMonthly + addOnTotal + consultingMonthly
    };
  };

  const totals = calculateTotals();

  const toggleAddOn = (index: number) => {
    setSelectedAddOns(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const toggleAccordion = (index: number) => {
    setExpandedAddOn(expandedAddOn === index ? null : index);
  };

  return (
    <div className="pricing-page">
      {/* Hero Section */}
      <section className="pricing-hero">
        <div className="hero-content">
          <h1 className="pricing-main-title">Pricing Plans</h1>
          <p className="pricing-hero-subtitle">
            Choose the plan that fits your business — flexible payment options available
          </p>
        </div>
      </section>

      {/* Tier Cards Section */}
      <section className="tiers-section">
        <div className="tiers-container">
          <h2 className="section-title">Our Plans</h2>
          
          {/* Card View Payment Type Toggle */}
          <div className="card-view-toggle">
            <button
              className={`card-toggle-btn ${cardViewPaymentType === 'zeroDown' ? 'active' : ''}`}
              onClick={() => setCardViewPaymentType('zeroDown')}
            >
              $0 Down Pricing
            </button>
            <button
              className={`card-toggle-btn ${cardViewPaymentType === 'upfront' ? 'active' : ''}`}
              onClick={() => setCardViewPaymentType('upfront')}
            >
              Upfront Cost
            </button>
          </div>

          <div className="tier-cards-grid">
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={`tier-card ${plan.popular ? 'popular' : ''} ${selectedPlan === index ? 'selected' : ''}`}
                onClick={() => !plan.isCustom && setSelectedPlan(index)}
              >
                {plan.popular && (
                  <div className="popular-badge">
                    <FaStar /> Most Popular
                  </div>
                )}
                <h3 className="tier-name">{plan.name}</h3>
                <div className="tier-pricing">
                  {!plan.isCustom ? (
                    <>
                      {cardViewPaymentType === 'zeroDown' ? (
                        <>
                          <div className="build-price">
                            $0 <span className="price-label">down</span>
                          </div>
                          <div className="monthly-price">
                            ${plan.monthlyZeroDown}/mo
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="build-price">
                            ${typeof plan.buildPrice === 'number' ? plan.buildPrice.toLocaleString() : plan.buildPrice}
                            <span className="price-label"> upfront</span>
                          </div>
                          <div className="monthly-price">
                            ${plan.monthlyUpfront}/mo <span className="price-label">after</span>
                          </div>
                        </>
                      )}
                    </>
                  ) : (
                    <>
                      <div className="build-price">
                        {plan.buildPrice}
                      </div>
                      <div className="monthly-price-custom">
                        {plan.monthlyZeroDown}
                      </div>
                    </>
                  )}
                </div>
                <ul className="tier-features">
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>
                      <FaCheck className="check-icon" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                {plan.zeroDownBonus && (
                  <div className="zero-down-bonus">
                    <strong>0-Down Bonus:</strong> {plan.zeroDownBonus}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Calculator Section */}
      {!isEnterprise && (
        <section className="calculator-section">
          <div className="calculator-container">
            <h2 className="section-title">Price Calculator</h2>
            <p className="section-subtitle">Customize your plan and see your total</p>

            {/* Live Price Display */}
            <div className="price-display">
              <div className="price-item">
                <span className="price-label">Upfront Cost</span>
                <span className="price-value">
                  {typeof totals.upfront === 'number' ? `$${totals.upfront.toLocaleString()}` : totals.upfront}
                </span>
              </div>
              <div className="price-item">
                <span className="price-label">Monthly Cost</span>
                <span className="price-value price-highlight">
                  {typeof totals.monthly === 'number' ? `$${totals.monthly}/mo` : totals.monthly}
                </span>
              </div>
            </div>

            {/* Plan Selection */}
            <div className="calculator-option">
              <label className="option-label">Selected Plan</label>
              <div className="plan-selector">
                {plans.slice(0, 3).map((plan, index) => (
                  <button
                    key={index}
                    className={`plan-selector-btn ${selectedPlan === index ? 'active' : ''}`}
                    onClick={() => setSelectedPlan(index)}
                  >
                    {plan.name}
                  </button>
                ))}
              </div>
              
              {/* Features Dropdown */}
              <div className="features-dropdown-container">
                <button
                  className="features-dropdown-toggle"
                  onClick={() => setShowFeatures(!showFeatures)}
                >
                  <span>View {currentPlan.name} Features</span>
                  {showFeatures ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                {showFeatures && (
                  <div className="features-dropdown-content">
                    <ul className="features-list">
                      {currentPlan.features.map((feature, idx) => (
                        <li key={idx}>
                          <FaCheck className="feature-check" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    {currentPlan.zeroDownBonus && paymentType === 'zeroDown' && (
                      <div className="bonus-info">
                        <strong>0-Down Bonus:</strong> {currentPlan.zeroDownBonus}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Payment Type Toggle */}
            <div className="calculator-option">
              <label className="option-label">Payment Type</label>
              <div className="payment-toggle">
                <button
                  className={`toggle-btn ${paymentType === 'upfront' ? 'active' : ''}`}
                  onClick={() => setPaymentType('upfront')}
                >
                  Upfront Payment
                  <span className="toggle-desc">Pay build cost upfront, lower monthly</span>
                </button>
                <button
                  className={`toggle-btn ${paymentType === 'zeroDown' ? 'active' : ''}`}
                  onClick={() => setPaymentType('zeroDown')}
                >
                  $0 Down
                  <span className="toggle-desc">No upfront cost, higher monthly</span>
                </button>
              </div>
            </div>

            {/* Add-Ons Section */}
            <div className="calculator-option">
              <label className="option-label">Add-Ons (Optional)</label>
              <div className="addons-list">
                {addOns.map((addOn, index) => (
                  <div key={index} className="addon-item">
                    <div className="addon-header">
                      <label className="addon-checkbox-label">
                        <input
                          type="checkbox"
                          checked={selectedAddOns.includes(index)}
                          onChange={() => toggleAddOn(index)}
                        />
                        <span className="addon-name">{addOn.name}</span>
                        <span className="addon-price">+${addOn.price}/mo</span>
                      </label>
                      <button
                        className="accordion-toggle"
                        onClick={() => toggleAccordion(index)}
                      >
                        {expandedAddOn === index ? <FaChevronUp /> : <FaChevronDown />}
                      </button>
                    </div>
                    {expandedAddOn === index && (
                      <div className="addon-description">
                        <p>{addOn.description}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Traffic & Optimization Consulting */}
            <TrafficConsulting
              currentPlan={currentPlan.name}
              paymentType={paymentType}
              selectedTier={selectedConsultingTier}
              onTierSelect={(tier) => {
                if (tier === null) {
                  setSelectedConsultingTier(null);
                } else {
                  // Map tier to index
                  const consultingTiers = [
                    { name: "Starter", price: 25 },
                    { name: "Growth", price: 50 },
                    { name: "Ultimate", price: 100 }
                  ];
                  const tierIndex = consultingTiers.findIndex(t => t.name === tier.name);
                  setSelectedConsultingTier(tierIndex !== -1 ? tierIndex : null);
                }
              }}
            />

            {/* CTA Button */}
            <div className="calculator-cta">
              <a 
                href="/contact" 
                className="cta-button"
              >
                Get Started - Schedule a Call
              </a>
              <p className="cta-note">
                Have questions? <a href="/contact">Contact me</a> for a custom quote
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Enterprise CTA */}
      {isEnterprise && (
        <section className="enterprise-cta-section">
          <div className="enterprise-cta-container">
            <h2>Ready for Enterprise Solutions?</h2>
            <p>Let's discuss your custom requirements and build something amazing together.</p>
            <a href="/contact" className="cta-button">Schedule a Consultation</a>
          </div>
        </section>
      )}
    </div>
  );
};

export default Pricing;
