import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  Stepper,
  Step,
  StepLabel,
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Radio,
  RadioGroup,
  Typography,
  Box,
  Paper,
  IconButton
} from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import PlanCard from './PlanCard';
import AddOnAccordion from './AddOnAccordion';
import ConsultingTierCard from './ConsultingTierCard';
import SummaryCard from './SummaryCard';
import './QuoteForm.css';

interface QuoteFormProps {
  open: boolean;
  onClose: () => void;
}

interface FormData {
  // Step 1: Lead Capture
  name: string;
  email: string;
  phone: string;
  
  // Step 2: Business Info
  industry: string;
  websiteStatus: string;
  hasDomain: string;
  goals: string;
  
  // Step 3: Plan Selection
  selectedPlan: number;
  paymentType: 'upfront' | 'zeroDown';
  
  // Step 4: Add-Ons
  selectedAddOns: number[];
  
  // Step 4.5: Consulting Tier
  consultingTier: number | null;
  
  // Step 5: Additional Questions
  whyNewSite: string;
  needsEcommerce: boolean;
  needsBooking: boolean;
  needsOrdering: boolean;
  additionalNotes: string;
  
  // Step 6: Schedule
  schedulingNotes: string;
}

const plans = [
  { 
    name: "Simple", 
    buildPrice: 1500, 
    monthlyUpfront: 100, 
    monthlyZeroDown: 199, 
    pages: "4-5",
    description: "Basic 4-5 page site with hosting/maintenance included. Quarterly review if $0-down.",
    features: ["4-5 page website", "Mobile responsive", "Hosting & maintenance", "SSL certificate", "2 updates/month", "Quarterly review ($0 Down)"]
  },
  { 
    name: "Standard", 
    buildPrice: 2500, 
    monthlyUpfront: 100, 
    monthlyZeroDown: 250, 
    pages: "5-7",
    description: "Everything in Simple + Google Business setup, basic SEO, monthly analytics review if $0-down.",
    features: ["5-7 page website", "Everything in Simple", "Google Business setup", "Basic SEO optimization", "Monthly analytics review ($0 Down)", "FREE Starter consulting ($0 Down)"],
    popular: true
  },
  { 
    name: "Advanced", 
    buildPrice: 4000, 
    monthlyUpfront: 150, 
    monthlyZeroDown: 325, 
    pages: "7-9",
    description: "Everything in Standard + advanced SEO, booking/ordering integration, custom analytics dashboard.",
    features: ["7-9 page website", "Everything in Standard", "Advanced SEO", "Booking/ordering integration", "Custom analytics dashboard", "Priority support", "FREE Starter consulting ($0 Down)"]
  },
  { 
    name: "Enterprise", 
    buildPrice: "Custom", 
    monthlyUpfront: "Custom",
    monthlyZeroDown: 500,
    pages: "10+",
    description: "Custom full-stack site with AI integration, database, backend, dedicated consulting.",
    features: ["10+ pages", "Custom full-stack development", "AI integration", "Database & backend", "Dedicated consulting", "White-glove service"],
    isCustom: true
  }
];

const consultingTiers = [
  { 
    name: "Starter", 
    price: 25, 
    frequency: "Twice-yearly", 
    description: "Twice-yearly traffic & performance review, basic SEO optimization, email summary with actionable insights.",
    features: [
      "Twice-yearly traffic & performance review",
      "Basic SEO optimization (meta tags, keywords, minor on-page suggestions)",
      "Email summary with actionable insights"
    ],
    includedWith: ["Standard ($0 Down)", "Advanced ($0 Down)"]
  },
  { 
    name: "Growth", 
    price: 50, 
    frequency: "Quarterly", 
    description: "Quarterly traffic review with advanced SEO recommendations and detailed email report.",
    features: [
      "Quarterly traffic & performance review",
      "Advanced SEO recommendations",
      "Keyword tracking & competitor analysis",
      "Detailed email report with insights"
    ],
    recommended: true
  },
  { 
    name: "Ultimate", 
    price: 100, 
    frequency: "Monthly", 
    description: "Monthly comprehensive review with advanced SEO, GA4/Data Studio dashboard, speed optimization, and monthly reports.",
    features: [
      "Monthly traffic & performance review",
      "Advanced SEO & keyword strategy",
      "GA4/Data Studio dashboard access",
      "Speed optimization & caching",
      "Monthly email reports",
      "Priority support"
    ]
  }
];

const addOns = [
  { name: "Monthly Pop-Up / Promo Banner", price: 50, description: "Custom monthly pop-ups for promotions or events. Great for restaurants or service businesses." },
  { name: "Speed Optimization", price: 50, description: "Monthly Lighthouse performance check, image compression, and caching updates to keep your site fast and high-ranking on Google." },
  { name: "Google Business Post Updates", price: 50, description: "We'll post updates or new photos to your Google Business profile 1-2 times per month to boost visibility and SEO." },
  { name: "Photo Gallery Refresh", price: 50, description: "Swap or add up to 10 photos per month, optimized for web performance and SEO — perfect for restaurants or retail shops." },
  { name: "Mini SEO + Analytics Report", price: 50, description: "You'll receive an automated monthly email report summarizing site traffic, keyword performance, and a simple actionable insight." },
  { name: "Growth Package (SEO + Dashboard + Emails)", price: 150, description: "Comprehensive digital presence management — includes SEO keyword maintenance, GA4 dashboard access, and monthly performance emails." },
  { name: "4 Updates / Month Package", price: 70, description: "Increase your monthly content/design updates from 2 to 4 — ideal for sites that update menus, services, or events regularly." },
  { name: "8 Updates / Month Package", price: 125, description: "Up to 8 total updates per month — perfect for active businesses that refresh content weekly." },
  { name: "Priority Support (Unlimited Updates, 24/7)", price: 250, description: "Unlimited content or design updates, emergency response, and after-hours support — full concierge experience." }
];

const steps = [
  'Contact Info',
  'Business Details',
  'Choose Plan',
  'Add-Ons & Consulting',
  'Requirements',
  'Schedule Call',
  'Review & Submit'
];

const QuoteForm: React.FC<QuoteFormProps> = ({ open, onClose }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    industry: '',
    websiteStatus: '',
    hasDomain: '',
    goals: '',
    selectedPlan: 1,
    paymentType: 'zeroDown',
    selectedAddOns: [],
    consultingTier: null,
    whyNewSite: '',
    needsEcommerce: false,
    needsBooking: false,
    needsOrdering: false,
    additionalNotes: '',
    schedulingNotes: ''
  });

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = () => {
    // TODO: Send form data to backend/email
    console.log('Form submitted:', formData);
    alert('Quote request submitted! We\'ll be in touch soon.');
    onClose();
  };

  const updateFormData = (field: keyof FormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleAddOn = (index: number) => {
    setFormData(prev => ({
      ...prev,
      selectedAddOns: prev.selectedAddOns.includes(index)
        ? prev.selectedAddOns.filter(i => i !== index)
        : [...prev.selectedAddOns, index]
    }));
  };

  const renderStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <Box className="form-step">
            <Typography variant="h5" className="step-title">Let's Get Started</Typography>
            <Typography variant="body1" className="step-subtitle">
              Tell us a bit about yourself so we can create the perfect plan for your business.
            </Typography>
            <TextField
              fullWidth
              label="Name"
              value={formData.name}
              onChange={(e) => updateFormData('name', e.target.value)}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Email"
              type="email"
              value={formData.email}
              onChange={(e) => updateFormData('email', e.target.value)}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => updateFormData('phone', e.target.value)}
              margin="normal"
            />
          </Box>
        );
      
      case 1:
        return (
          <Box className="form-step">
            <Typography variant="h5" className="step-title">About Your Business</Typography>
            <FormControl fullWidth margin="normal">
              <InputLabel>Industry</InputLabel>
              <Select
                value={formData.industry}
                onChange={(e) => updateFormData('industry', e.target.value)}
                label="Industry"
              >
                <MenuItem value="restaurant">Restaurant / Food Service</MenuItem>
                <MenuItem value="retail">Retail / E-commerce</MenuItem>
                <MenuItem value="services">Professional Services</MenuItem>
                <MenuItem value="band">Band / Artist / Entertainment</MenuItem>
                <MenuItem value="healthcare">Healthcare / Medical</MenuItem>
                <MenuItem value="real-estate">Real Estate</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
            </FormControl>
            
            <FormControl fullWidth margin="normal">
              <InputLabel>Website Status</InputLabel>
              <Select
                value={formData.websiteStatus}
                onChange={(e) => updateFormData('websiteStatus', e.target.value)}
                label="Website Status"
              >
                <MenuItem value="no-site">I don't have a website yet</MenuItem>
                <MenuItem value="need-update">I have a site but need an update</MenuItem>
                <MenuItem value="complete-redesign">I need a complete redesign</MenuItem>
              </Select>
            </FormControl>
            
            <FormControl fullWidth margin="normal">
              <InputLabel>Do you have a domain?</InputLabel>
              <Select
                value={formData.hasDomain}
                onChange={(e) => updateFormData('hasDomain', e.target.value)}
                label="Do you have a domain?"
              >
                <MenuItem value="yes">Yes, I have a domain</MenuItem>
                <MenuItem value="no">No, I need help with this</MenuItem>
                <MenuItem value="not-sure">Not sure</MenuItem>
              </Select>
            </FormControl>
            
            <TextField
              fullWidth
              label="What are your main goals for this website?"
              multiline
              rows={3}
              value={formData.goals}
              onChange={(e) => updateFormData('goals', e.target.value)}
              margin="normal"
              placeholder="e.g., Get more customers, showcase my work, sell products online..."
            />
          </Box>
        );
      
      case 2:
        return (
          <Box className="form-step">
            <Typography variant="h5" className="step-title">Choose Your Plan</Typography>
            <Typography variant="body1" className="step-subtitle">
              Select the plan that best fits your needs
            </Typography>
            
            <Box className="payment-type-toggle">
              <RadioGroup
                row
                value={formData.paymentType}
                onChange={(e) => updateFormData('paymentType', e.target.value as 'upfront' | 'zeroDown')}
              >
                <FormControlLabel value="upfront" control={<Radio />} label="Pay Upfront" />
                <FormControlLabel value="zeroDown" control={<Radio />} label="$0 Down" />
              </RadioGroup>
            </Box>
            
            <Box className="plan-cards-container">
              {plans.map((plan, index) => (
                <PlanCard
                  key={index}
                  plan={plan}
                  index={index}
                  selected={formData.selectedPlan === index}
                  paymentType={formData.paymentType}
                  onSelect={() => updateFormData('selectedPlan', index)}
                />
              ))}
            </Box>
          </Box>
        );
      
      case 3:
        return (
          <Box className="form-step">
            <Typography variant="h5" className="step-title">Enhance Your Plan</Typography>
            <Typography variant="body1" className="step-subtitle">
              Select optional add-ons and consulting services
            </Typography>
            
            <Box className="addons-section">
              <Typography variant="h6" className="section-title">Add-Ons (Optional)</Typography>
              {addOns.map((addOn, index) => (
                <AddOnAccordion
                  key={index}
                  addOn={addOn}
                  index={index}
                  selected={formData.selectedAddOns.includes(index)}
                  onToggle={() => toggleAddOn(index)}
                />
              ))}
            </Box>
            
            <Box className="consulting-section">
              <Typography variant="h6" className="section-title">Traffic & Optimization Consulting</Typography>
              <Box className="consulting-cards-container">
                {consultingTiers.map((tier, index) => (
                  <ConsultingTierCard
                    key={index}
                    tier={tier}
                    index={index}
                    selected={formData.consultingTier === index}
                    currentPlan={plans[formData.selectedPlan].name}
                    paymentType={formData.paymentType}
                    onSelect={() => updateFormData('consultingTier', formData.consultingTier === index ? null : index)}
                  />
                ))}
              </Box>
            </Box>
          </Box>
        );
      
      case 4:
        return (
          <Box className="form-step">
            <Typography variant="h5" className="step-title">Tell Us More</Typography>
            <Typography variant="body1" className="step-subtitle">
              Help us understand your specific needs
            </Typography>
            
            <TextField
              fullWidth
              label="Why do you want a new site or update?"
              multiline
              rows={3}
              value={formData.whyNewSite}
              onChange={(e) => updateFormData('whyNewSite', e.target.value)}
              margin="normal"
              placeholder="Tell us what's driving this project..."
            />
            
            <Typography variant="subtitle1" style={{ marginTop: '20px', marginBottom: '10px' }}>
              Do you need any of these features?
            </Typography>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.needsEcommerce}
                    onChange={(e) => updateFormData('needsEcommerce', e.target.checked)}
                  />
                }
                label="E-commerce / Online Store"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.needsBooking}
                    onChange={(e) => updateFormData('needsBooking', e.target.checked)}
                  />
                }
                label="Booking / Appointment System"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.needsOrdering}
                    onChange={(e) => updateFormData('needsOrdering', e.target.checked)}
                  />
                }
                label="Online Ordering"
              />
            </FormGroup>
            
            <TextField
              fullWidth
              label="Additional Notes"
              multiline
              rows={3}
              value={formData.additionalNotes}
              onChange={(e) => updateFormData('additionalNotes', e.target.value)}
              margin="normal"
              placeholder="Any other details or questions?"
            />
          </Box>
        );
      
      case 5:
        return (
          <Box className="form-step">
            <Typography variant="h5" className="step-title">Schedule Your Call</Typography>
            <Typography variant="body1" className="step-subtitle">
              Let's find a time to discuss your project
            </Typography>
            
            <Paper className="calendly-placeholder" elevation={2}>
              <Typography variant="h6">📅 Scheduling Integration</Typography>
              <Typography variant="body2">
                In production, this would show a Calendly embed or date/time picker.
              </Typography>
              <Typography variant="body2" style={{ marginTop: '10px' }}>
                For now, we'll contact you at {formData.email || 'your email'} to schedule.
              </Typography>
            </Paper>
            
            <TextField
              fullWidth
              label="Preferred times or additional scheduling notes"
              multiline
              rows={3}
              value={formData.schedulingNotes}
              onChange={(e) => updateFormData('schedulingNotes', e.target.value)}
              margin="normal"
              placeholder="e.g., Weekday mornings work best, avoid Thursdays..."
            />
          </Box>
        );
      
      case 6:
        return (
          <Box className="form-step">
            <Typography variant="h5" className="step-title">Review Your Selections</Typography>
            <Typography variant="body1" className="step-subtitle">
              Here's a summary of your custom quote
            </Typography>
            
            <SummaryCard
              formData={formData}
              plans={plans}
              addOns={addOns}
              consultingTiers={consultingTiers}
            />
          </Box>
        );
      
      default:
        return null;
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      className="quote-form-dialog"
    >
      <IconButton
        aria-label="close"
        onClick={onClose}
        className="dialog-close-button"
      >
        <CloseIcon />
      </IconButton>
      
      <DialogContent className="quote-form-content">
        <Stepper activeStep={activeStep} alternativeLabel className="quote-stepper">
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        
        <Box className="step-content">
          {renderStepContent(activeStep)}
        </Box>
        
        <Box className="step-navigation">
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
            className="nav-button back-button"
          >
            Back
          </Button>
          
          <Box sx={{ flex: '1 1 auto' }} />
          
          {activeStep === steps.length - 1 ? (
            <Button
              variant="contained"
              onClick={handleSubmit}
              className="nav-button submit-button"
            >
              Submit Quote Request
            </Button>
          ) : (
            <Button
              variant="contained"
              onClick={handleNext}
              className="nav-button next-button"
            >
              Next
            </Button>
          )}
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default QuoteForm;
