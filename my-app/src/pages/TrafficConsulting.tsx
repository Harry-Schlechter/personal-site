import React, { useState } from 'react';
import './TrafficConsulting.css';
import { FaCheck, FaChevronDown, FaChevronUp, FaStar, FaChartLine } from 'react-icons/fa';

interface ConsultingTier {
  name: string;
  price: number;
  frequency: string;
  features: string[];
  description: string;
  recommended?: boolean;
  includedWith?: string[];
}

const consultingTiers: ConsultingTier[] = [
  {
    name: "Starter",
    price: 25,
    frequency: "Twice-yearly",
    features: [
      "Twice-yearly traffic & performance review",
      "Basic SEO optimization (meta tags, keywords, minor on-page suggestions)",
      "Email summary with actionable insights"
    ],
    description: "Ideal for small sites that don't change often. We provide two performance reviews per year with simple recommendations delivered by email.",
    includedWith: ["Standard ($0 Down)", "Advanced ($0 Down)"]
  },
  {
    name: "Growth",
    price: 50,
    frequency: "Quarterly",
    features: [
      "Quarterly traffic analysis and keyword trend review",
      "Advanced SEO recommendations (on-page optimization, backlinks, Google My Business updates)",
      "Quarterly email summary highlighting actionable steps"
    ],
    description: "Perfect for growing businesses. We review your site every 3 months and provide actionable recommendations to boost visibility and performance.",
    recommended: true
  },
  {
    name: "Ultimate",
    price: 100,
    frequency: "Monthly",
    features: [
      "Monthly full-site analytics review (traffic, top pages, conversions, engagement)",
      "Advanced SEO monitoring and updates",
      "Dashboard access (GA4 + Data Studio) for real-time insights",
      "Monthly automated email reports",
      "Website speed optimization (caching, image compression, Lighthouse checks)"
    ],
    description: "For high-activity businesses seeking full optimization. Monthly insights, proactive SEO updates, speed monitoring, and dashboard access to track performance."
  }
];

interface TrafficConsultingProps {
  onTierSelect?: (tier: ConsultingTier | null) => void;
  selectedTier?: number | null;
  currentPlan?: string;
  paymentType?: 'upfront' | 'zeroDown';
}

const TrafficConsulting: React.FC<TrafficConsultingProps> = ({ 
  onTierSelect, 
  selectedTier = null,
  currentPlan = '',
  paymentType = 'upfront'
}) => {
  const [expandedTier, setExpandedTier] = useState<number | null>(null);
  const [internalSelectedTier, setInternalSelectedTier] = useState<number | null>(selectedTier);

  const toggleAccordion = (index: number) => {
    setExpandedTier(expandedTier === index ? null : index);
  };

  const handleTierSelect = (index: number) => {
    const tier = consultingTiers[index];
    
    // Check if tier is already included
    const isIncluded = tier.includedWith && 
      paymentType === 'zeroDown' && 
      (currentPlan === 'Standard' || currentPlan === 'Advanced');

    if (isIncluded) {
      return; // Don't allow selection if already included
    }

    const newSelection = internalSelectedTier === index ? null : index;
    setInternalSelectedTier(newSelection);
    
    if (onTierSelect) {
      onTierSelect(newSelection !== null ? tier : null);
    }
  };

  const isTierIncluded = (tier: ConsultingTier) => {
    return tier.includedWith && 
      paymentType === 'zeroDown' && 
      (currentPlan === 'Standard' || currentPlan === 'Advanced');
  };

  return (
    <div className="traffic-consulting-section">
      <div className="consulting-header">
        <div className="header-icon">
          <FaChartLine />
        </div>
        <h2 className="consulting-title">Traffic & Optimization Consulting</h2>
        <p className="consulting-subtitle">
          Boost your online presence with ongoing analytics, SEO, and performance optimization
        </p>
      </div>

      <div className="consulting-tiers-grid">
        {consultingTiers.map((tier, index) => {
          const isIncluded = isTierIncluded(tier);
          const isSelected = internalSelectedTier === index;

          return (
            <div 
              key={index} 
              className={`consulting-tier-card ${tier.recommended ? 'recommended' : ''} ${isSelected ? 'selected' : ''} ${isIncluded ? 'included' : ''}`}
            >
              {tier.recommended && (
                <div className="recommended-badge">
                  <FaStar /> Recommended
                </div>
              )}
              
              {isIncluded && (
                <div className="included-badge">
                  <FaCheck /> Included with {currentPlan} ($0 Down)
                </div>
              )}

              <div className="tier-card-header">
                <h3 className="tier-card-name">{tier.name}</h3>
                <div className="tier-card-pricing">
                  <div className="tier-card-price">
                    {isIncluded ? (
                      <>
                        <span className="price-strikethrough">${tier.price}</span>
                        <span className="price-free">FREE</span>
                      </>
                    ) : (
                      <>${tier.price}<span className="price-period">/mo</span></>
                    )}
                  </div>
                  <div className="tier-card-frequency">{tier.frequency}</div>
                </div>
              </div>

              <p className="tier-card-description">{tier.description}</p>

              {/* Accordion for features */}
              <div className="tier-accordion">
                <button
                  className="accordion-toggle-btn"
                  onClick={() => toggleAccordion(index)}
                >
                  <span>View Features</span>
                  {expandedTier === index ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                
                {expandedTier === index && (
                  <div className="accordion-content">
                    <ul className="tier-features-list">
                      {tier.features.map((feature, idx) => (
                        <li key={idx}>
                          <FaCheck className="feature-check-icon" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Selection checkbox/button */}
              <div className="tier-selection">
                {isIncluded ? (
                  <button className="selection-btn included-btn" disabled>
                    Already Included
                  </button>
                ) : (
                  <label className="selection-checkbox">
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => handleTierSelect(index)}
                    />
                    <span className="checkbox-label">
                      {isSelected ? 'Selected' : 'Add to Plan'}
                    </span>
                  </label>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="consulting-info">
        <p className="info-text">
          <strong>Note:</strong> Starter tier is automatically included with Standard and Advanced plans when choosing $0 Down payment option.
        </p>
      </div>
    </div>
  );
};

export default TrafficConsulting;
