import React, { useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Checkbox,
  Typography,
  Box
} from '@mui/material';
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';

interface AddOn {
  name: string;
  price: number;
  description: string;
}

interface AddOnAccordionProps {
  addOn: AddOn;
  index: number;
  selected: boolean;
  onToggle: () => void;
}

const AddOnAccordion: React.FC<AddOnAccordionProps> = ({ addOn, index, selected, onToggle }) => {
  const [expanded, setExpanded] = useState(false);

  const handleAccordionChange = (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded);
  };

  const handleCheckboxClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    onToggle();
  };

  return (
    <Accordion 
      expanded={expanded} 
      onChange={handleAccordionChange}
      className={`addon-accordion ${selected ? 'selected' : ''}`}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        className="addon-summary"
      >
        <Box className="addon-summary-content">
          <Checkbox
            checked={selected}
            onClick={handleCheckboxClick}
            className="addon-checkbox"
          />
          <Box className="addon-info">
            <Typography variant="subtitle1" className="addon-name">
              {addOn.name}
            </Typography>
            <Typography variant="body2" className="addon-price">
              +${addOn.price}/mo
            </Typography>
          </Box>
        </Box>
      </AccordionSummary>
      <AccordionDetails className="addon-details">
        <Typography variant="body2">
          {addOn.description}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default AddOnAccordion;
