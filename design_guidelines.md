# Design Guidelines for Sponty Rides Dealership

## Design Approach
**Selected Approach**: Reference-Based Design inspired by modern motorcycle dealership websites like Harley-Davidson and Indian Motorcycle, combined with contemporary automotive e-commerce patterns.

**Key Design Principles**:
- Professional automotive retail aesthetic
- Clean, trust-building visual hierarchy
- Performance-focused user experience
- Mobile-responsive design

## Core Design Elements

### A. Color Palette
**Primary Colors**:
- Deep Blue: 220 85% 25% (primary brand color)
- Pure White: 0 0% 100% (backgrounds, text on dark)
- Rich Black: 0 0% 8% (text, headers, navigation)

**Supporting Colors**:
- Light Gray: 220 10% 95% (section backgrounds)
- Medium Gray: 220 5% 65% (borders, secondary text)
- Success Green: 142 76% 36% (for availability indicators)

### B. Typography
- **Primary Font**: Inter via Google Fonts (modern, automotive-inspired)
- **Headings**: Font weights 600-700, sizes from text-lg to text-4xl
- **Body Text**: Font weight 400-500, text-sm to text-base
- **Buttons/CTAs**: Font weight 600, text-sm to text-base

### C. Layout System
**Spacing Scale**: Tailwind units of 2, 4, 6, 8, 12, and 16
- Standard padding: p-4 and p-8
- Section margins: mt-12 and mt-16  
- Grid gaps: gap-6 and gap-8
- Container max-width: max-w-7xl with mx-auto

### D. Component Library

**Navigation**:
- Fixed header with white background, subtle shadow
- Blue logo/brand text, black navigation links
- Mobile hamburger menu with slide-out drawer

**Hero Section**:
- Large background image with dark overlay
- White text over image with blue accent CTA button
- Prominent "Sponty Rides Dealership" branding

**Product Cards**:
- White cards with subtle shadows and rounded corners
- Motorcycle image, model name, price in blue, key specs
- Clean grid layout with consistent spacing

**Buttons**:
- Primary: Blue background (220 85% 25%) with white text
- Secondary: White background with blue border and blue text
- Outline variants on images: Blurred white/gray backgrounds

**Forms**:
- Clean white forms with gray borders
- Blue focus states and submit buttons
- Proper spacing and typography hierarchy

**Admin Dashboard**:
- Sidebar navigation with blue accents
- White content areas with organized tables/forms
- Clear action buttons and status indicators

## Images
**Hero Image**: Large, high-impact motorcycle lifestyle image (1920x800px minimum) showing multiple bikes in a modern showroom or scenic riding location

**Motorcycle Gallery**: High-resolution product images (800x600px minimum) with consistent lighting and backgrounds, multiple angles per bike

**Background Elements**: Subtle texture overlays or geometric patterns in light gray for section variation

**Icon Usage**: Heroicons for UI elements - specifications, features, contact information

## Layout Specifications
- **Header**: 80px height with centered logo and horizontal navigation
- **Hero**: Full viewport height with centered content overlay
- **Product Grid**: 3-column desktop, 2-column tablet, 1-column mobile
- **Footer**: Dark background with white text, organized into columns
- **Max Content Width**: 1280px with responsive gutters

This design creates a professional, trustworthy motorcycle dealership experience that emphasizes the quality and appeal of the inventory while maintaining excellent usability for both customers and administrators.