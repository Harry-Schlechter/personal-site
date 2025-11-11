import React from 'react';
import { Paper, Typography, Box, Divider, Chip } from '@mui/material';
import {
  Person as PersonIcon,
  Business as BusinessIcon,
  Star as PlanIcon,
  Add as AddOnIcon,
  TrendingUp as ConsultingIcon
} from '@mui/icons-material';

interface FormData {
  name: string;
  email: string;
  phone: string;
  industry: string;
  websiteStatus: string;
  hasDomain: string;
  goals: string;
  selectedPlan: number;
  paymentType: 'upfront' | 'zeroDown';
  selectedAddOns: number[];
  consultingTier: number | null;
  whyNewSite: string;
  needsEcommerce: boolean;
  needsBooking: boolean;
  needsOrdering: boolean;
  additionalNotes: string;
  schedulingNotes: string;
}

interface Plan {
  name: string;
  buildPrice: number | string;
  monthlyUpfront: number | string;
  monthlyZeroDown: number | string;
  pages: string;
  isCustom?: boolean;
}

interface AddOn {
  name: string;
  price: number;
}

interface ConsultingTier {
  name: string;
  price: number;
  includedWith?: string[];
}

interface SummaryCardProps {
  formData: FormData;
  plans: Plan[];
  addOns: AddOn[];
  consultingTiers: ConsultingTier[];
}

const SummaryCard: React.FC<SummaryCardProps> = ({ formData, plans, addOns, consultingTiers }) => {
  const currentPlan = plans[formData.selectedPlan];
  const isEnterprise = currentPlan.isCustom || false;
  
  // Calculate totals
  const calculateTotals = () => {
    if (isEnterprise) {
      return { upfront: 'Custom', monthly: 'Custom' };
    }

    const buildPrice = formData.paymentType === 'upfront' ? (currentPlan.buildPrice as number) : 0;
    const baseMonthly = formData.paymentType === 'upfront' 
      ? (currentPlan.monthlyUpfront as number)
      : (currentPlan.monthlyZeroDown as number);
    
    const addOnTotal = formData.selectedAddOns.reduce((sum, index) => sum + addOns[index].price, 0);
    
    // Add consulting tier price if selected
    let consultingMonthly = 0;
    if (formData.consultingTier !== null) {
      const tier = consultingTiers[formData.consultingTier];
      const isIncluded = formData.paymentType === 'zeroDown' && 
        tier.includedWith?.includes(`${currentPlan.name} ($0 Down)`);
      consultingMonthly = isIncluded ? 0 : tier.price;
    }
    
    return {
      upfront: buildPrice,
      monthly: baseMonthly + addOnTotal + consultingMonthly
    };
  };

  const totals = calculateTotals();
  
  const specialFeatures = [];
  if (formData.needsEcommerce) specialFeatures.push('E-commerce');
  if (formData.needsBooking) specialFeatures.push('Booking System');
  if (formData.needsOrdering) specialFeatures.push('Online Ordering');

  return (
    <Paper className="summary-card" elevation={3}>
      {/* Contact Info */}
      <Box className="summary-section">
        <Box className="section-header">
          <PersonIcon className="section-icon" />
          <Typography variant="h6">Contact Information</Typography>
        </Box>
        <Typography variant="body1"><strong>Name:</strong> {formData.name}</Typography>
        <Typography variant="body1"><strong>Email:</strong> {formData.email}</Typography>
        {formData.phone && <Typography variant="body1"><strong>Phone:</strong> {formData.phone}</Typography>}
      </Box>

      <Divider />

      {/* Business Info */}
      <Box className="summary-section">
        <Box className="section-header">
          <BusinessIcon className="section-icon" />
          <Typography variant="h6">Business Details</Typography>
        </Box>
        {formData.industry && (
          <Typography variant="body1">
            <strong>Industry:</strong> {formData.industry.charAt(0).toUpperCase() + formData.industry.slice(1).replace('-', ' ')}
          </Typography>
        )}
        {formData.websiteStatus && (
          <Typography variant="body1">
            <strong>Website Status:</strong> {formData.websiteStatus.replace('-', ' ')}
          </Typography>
        )}
        {formData.goals && (
          <Typography variant="body1">
            <strong>Goals:</strong> {formData.goals}
          </Typography>
        )}
      </Box>

      <Divider />

      {/* Selected Plan */}
      <Box className="summary-section">
        <Box className="section-header">
          <PlanIcon className="section-icon" />
          <Typography variant="h6">Selected Plan</Typography>
        </Box>
        <Typography variant="h5" className="plan-name-summary">
          {currentPlan.name}
        </Typography>
        <Typography variant="body1">
          <strong>Payment:</strong> {formData.paymentType === 'upfront' ? 'Pay Upfront' : '$0 Down'}
        </Typography>
        <Typography variant="body1">
          <strong>Pages:</strong> {currentPlan.pages}
        </Typography>
      </Box>

      <Divider />

      {/* Add-Ons */}
      {formData.selectedAddOns.length > 0 && (
        <>
          <Box className="summary-section">
            <Box className="section-header">
              <AddOnIcon className="section-icon" />
              <Typography variant="h6">Add-Ons</Typography>
            </Box>
            <Box className="addons-list-summary">
              {formData.selectedAddOns.map((index) => (
                <Chip
                  key={index}
                  label={`${addOns[index].name} (+$${addOns[index].price}/mo)`}
                  variant="outlined"
                  size="small"
                  className="addon-chip"
                />
              ))}
            </Box>
          </Box>
          <Divider />
        </>
      )}

      {/* Consulting Tier */}
      {formData.consultingTier !== null && (
        <>
          <Box className="summary-section">
            <Box className="section-header">
              <ConsultingIcon className="section-icon" />
              <Typography variant="h6">Traffic & Optimization Consulting</Typography>
            </Box>
            <Typography variant="body1">
              <strong>{consultingTiers[formData.consultingTier].name}</strong>
            </Typography>
            {formData.paymentType === 'zeroDown' && 
             consultingTiers[formData.consultingTier].includedWith?.includes(`${currentPlan.name} ($0 Down)`) ? (
              <Chip label="FREE - Included with plan" color="success" size="small" />
            ) : (
              <Typography variant="body2">
                +${consultingTiers[formData.consultingTier].price}/mo
              </Typography>
            )}
          </Box>
          <Divider />
        </>
      )}

      {/* Special Features */}
      {specialFeatures.length > 0 && (
        <>
          <Box className="summary-section">
            <Typography variant="h6">Special Features Requested</Typography>
            <Box className="features-list-summary">
              {specialFeatures.map((feature, idx) => (
                <Chip key={idx} label={feature} size="small" className="feature-chip" />
              ))}
            </Box>
          </Box>
          <Divider />
        </>
      )}

      {/* Additional Notes */}
      {(formData.whyNewSite || formData.additionalNotes) && (
        <>
          <Box className="summary-section">
            <Typography variant="h6">Additional Information</Typography>
            {formData.whyNewSite && (
              <Typography variant="body2" className="notes-text">
                <strong>Project Motivation:</strong> {formData.whyNewSite}
              </Typography>
            )}
            {formData.additionalNotes && (
              <Typography variant="body2" className="notes-text">
                <strong>Notes:</strong> {formData.additionalNotes}
              </Typography>
            )}
          </Box>
          <Divider />
        </>
      )}

      {/* Pricing Summary */}
      <Box className="summary-section pricing-summary">
        <Typography variant="h6" className="pricing-title">Total Investment</Typography>
        
        {formData.paymentType === 'upfront' && !isEnterprise && (
          <Box className="price-row">
            <Typography variant="body1">Upfront Build Cost:</Typography>
            <Typography variant="h5" className="price-value">
              ${totals.upfront}
            </Typography>
          </Box>
        )}
        
        <Box className="price-row monthly-row">
          <Typography variant="body1">Monthly Service:</Typography>
          <Typography variant="h4" className="price-value monthly-price">
            {typeof totals.monthly === 'number' ? `$${totals.monthly}` : totals.monthly}
            {typeof totals.monthly === 'number' && <span className="price-period">/mo</span>}
          </Typography>
        </Box>
        
        {isEnterprise && (
          <Typography variant="body2" className="enterprise-note">
            Custom pricing based on your specific requirements. We'll discuss details on our call.
          </Typography>
        )}
      </Box>
    </Paper>
  );
};

export default SummaryCard;
