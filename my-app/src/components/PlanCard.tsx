import React from 'react';
import { Card, CardContent, Typography, Box, Button, Chip } from '@mui/material';
import { Check as CheckIcon, Star as StarIcon } from '@mui/icons-material';

interface Plan {
  name: string;
  buildPrice: number | string;
  monthlyUpfront: number | string;
  monthlyZeroDown: number | string;
  pages: string;
  description: string;
  features: string[];
  popular?: boolean;
  isCustom?: boolean;
}

interface PlanCardProps {
  plan: Plan;
  index: number;
  selected: boolean;
  paymentType: 'upfront' | 'zeroDown';
  onSelect: () => void;
}

const PlanCard: React.FC<PlanCardProps> = ({ plan, index, selected, paymentType, onSelect }) => {
  const displayPrice = paymentType === 'upfront' 
    ? plan.monthlyUpfront 
    : plan.monthlyZeroDown;
  
  const buildPrice = plan.buildPrice;
  
  return (
    <Card 
      className={`plan-card ${selected ? 'selected' : ''} ${plan.popular ? 'popular' : ''}`}
      onClick={onSelect}
    >
      {plan.popular && (
        <Chip 
          icon={<StarIcon />}
          label="Most Popular" 
          className="popular-badge"
          color="primary"
        />
      )}
      
      <CardContent>
        <Typography variant="h5" className="plan-name">
          {plan.name}
        </Typography>
        
        <Typography variant="subtitle1" className="plan-pages">
          {plan.pages} pages
        </Typography>
        
        <Box className="plan-pricing">
          {paymentType === 'upfront' && !plan.isCustom && (
            <Typography variant="body2" className="build-price">
              ${buildPrice} build
            </Typography>
          )}
          
          <Typography variant="h4" className="monthly-price">
            {typeof displayPrice === 'number' ? `$${displayPrice}` : displayPrice}
            {typeof displayPrice === 'number' && <span className="price-period">/mo</span>}
          </Typography>
          
          {paymentType === 'zeroDown' && !plan.isCustom && (
            <Typography variant="body2" className="payment-note">
              $0 down
            </Typography>
          )}
        </Box>
        
        <Typography variant="body2" className="plan-description">
          {plan.description}
        </Typography>
        
        <Box className="plan-features">
          {plan.features.map((feature, idx) => (
            <Box key={idx} className="feature-item">
              <CheckIcon className="feature-check" />
              <Typography variant="body2">{feature}</Typography>
            </Box>
          ))}
        </Box>
        
        <Button
          variant={selected ? 'contained' : 'outlined'}
          fullWidth
          className="select-plan-button"
        >
          {selected ? 'Selected' : 'Select Plan'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default PlanCard;
