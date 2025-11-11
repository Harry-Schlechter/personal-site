import React, { useState } from 'react';
import { Card, CardContent, Typography, Box, Button, Chip, Collapse } from '@mui/material';
import { 
  Check as CheckIcon, 
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon,
  Star as StarIcon
} from '@mui/icons-material';

interface ConsultingTier {
  name: string;
  price: number;
  frequency: string;
  description: string;
  features: string[];
  recommended?: boolean;
  includedWith?: string[];
}

interface ConsultingTierCardProps {
  tier: ConsultingTier;
  index: number;
  selected: boolean;
  currentPlan: string;
  paymentType: 'upfront' | 'zeroDown';
  onSelect: () => void;
}

const ConsultingTierCard: React.FC<ConsultingTierCardProps> = ({
  tier,
  index,
  selected,
  currentPlan,
  paymentType,
  onSelect
}) => {
  const [expanded, setExpanded] = useState(false);

  // Check if this tier is included for free
  const isIncluded = paymentType === 'zeroDown' && 
    tier.includedWith?.includes(`${currentPlan} ($0 Down)`);

  return (
    <Card 
      className={`consulting-tier-card ${selected ? 'selected' : ''} ${isIncluded ? 'included' : ''} ${tier.recommended ? 'recommended' : ''}`}
      onClick={onSelect}
    >
      {tier.recommended && (
        <Chip 
          icon={<StarIcon />}
          label="Recommended" 
          className="recommended-badge"
          size="small"
        />
      )}
      
      {isIncluded && (
        <Chip 
          label="Already Included" 
          className="included-badge"
          size="small"
          color="success"
        />
      )}
      
      <CardContent>
        <Typography variant="h6" className="tier-name">
          {tier.name}
        </Typography>
        
        <Typography variant="subtitle2" className="tier-frequency">
          {tier.frequency}
        </Typography>
        
        <Box className="tier-pricing">
          {isIncluded ? (
            <>
              <Typography variant="h5" className="tier-price strikethrough">
                ${tier.price}/mo
              </Typography>
              <Typography variant="h5" className="tier-price-free">
                FREE
              </Typography>
            </>
          ) : (
            <Typography variant="h5" className="tier-price">
              ${tier.price}<span className="price-period">/mo</span>
            </Typography>
          )}
        </Box>
        
        <Typography variant="body2" className="tier-description">
          {tier.description}
        </Typography>
        
        <Button
          size="small"
          onClick={(e) => {
            e.stopPropagation();
            setExpanded(!expanded);
          }}
          className="expand-features-button"
          endIcon={expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        >
          {expanded ? 'Hide' : 'Show'} Features
        </Button>
        
        <Collapse in={expanded}>
          <Box className="tier-features">
            {tier.features.map((feature, idx) => (
              <Box key={idx} className="feature-item">
                <CheckIcon className="feature-check" />
                <Typography variant="body2">{feature}</Typography>
              </Box>
            ))}
          </Box>
        </Collapse>
        
        <Button
          variant={selected ? 'contained' : 'outlined'}
          fullWidth
          className="select-tier-button"
          disabled={isIncluded}
        >
          {isIncluded ? 'Included' : selected ? 'Selected' : 'Select'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default ConsultingTierCard;
