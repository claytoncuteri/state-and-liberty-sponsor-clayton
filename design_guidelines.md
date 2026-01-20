# Design Guidelines: State & Liberty x Clayton Cuteri Interactive Pitch Deck

## Design Approach
**Reference-Based**: Professional presentation software aesthetic (Apple Keynote, Pitch, Beautiful.ai) with corporate sophistication. This is a high-stakes sponsorship proposal requiring polished, executive-level visual design with smooth interactions.

## Core Design Principles
1. **Presentation Excellence**: Every slide should feel like a premium corporate deck
2. **Data Visualization**: Analytics and metrics are the hero - make them impressive
3. **Dual-Mode Flexibility**: Seamless transition between slideshow and scroll modes
4. **Professional Impact**: This is selling a $50K+ partnership - design accordingly

## Typography System
- **Primary Font**: Inter or SF Pro Display (via Google Fonts CDN) - clean, professional, modern
- **Accent Font**: Libre Baskerville or Playfair Display for brand name treatments
- **Hierarchy**:
  - Slide Titles: 64-72px, font-weight-900, tight tracking
  - Section Headers: 32-36px, font-weight-700
  - Body Text: 20-22px, font-weight-400, generous line-height (1.7)
  - Stat Numbers: 56-64px, font-weight-900
  - Caption/Meta: 16-18px, font-weight-300

## Layout & Spacing System
- **Slide Dimensions**: 1920x1080 (16:9 ratio) for each slide
- **Content Padding**: 80px horizontal, 120px top, 80px bottom
- **Spacing Units**: Use Tailwind units of 4, 6, 8, 12, 16, 20 (e.g., p-8, gap-12, mt-20)
- **Grid Systems**: 
  - 2-column: gap-16 for text/content splits
  - 3-column: gap-8 for stat boxes
  - Max content width: Never needed - each slide is fixed at 1920x1080

## Component Library

### Navigation Controls
- Slide counter: Bottom-right, subtle opacity
- Arrow buttons: Floating left/right edges, appear on hover, semi-transparent backgrounds with blur
- Progress bar: Thin (4px) line at top, fills with crimson red (#c41e3a)
- Keyboard hints: Subtle footer indication (← → Space)

### Stat Boxes
- Background: rgba(255,255,255,0.05) with 1px border rgba(255,255,255,0.1)
- Hover state: Lift (translate-y-2), increase border opacity, subtle glow
- Padding: p-10
- Border radius: rounded-xl
- Number animation: Count-up effect on scroll into view

### Analytics Integration
- Screenshot containers: Subtle shadow, thin border, rounded corners
- Labels: Clear captions beneath each chart/metric
- Placement: Full-width or 2-column layouts depending on slide
- Frame treatment: Slight padding around screenshots for polish

### Tier/Package Cards
- Standard: Semi-transparent background, subtle border
- Recommended: Crimson border (2px), glowing effect, "RECOMMENDED" badge
- Hover: Scale up slightly (scale-105), enhance glow
- Internal spacing: p-8, gap-4 for list items

### Photo Integration
- Clayton headshot: Professional framing on "About Clayton" slide
- Lifestyle photos: Full-bleed backgrounds with overlay gradients for text readability
- Placement: Strategic - hero moments, testimonial sections, brand identity slides

## Interactive Elements

### Slide Transitions
- **Slide Mode**: Fade + slight horizontal slide (50px offset)
- **Duration**: 600ms ease-in-out
- **Loading State**: Smooth opacity transitions

### Stat Animations
- Count-up effect: Numbers animate from 0 to target over 1.2s
- Trigger: When slide becomes active or scrolls into view
- Easing: Ease-out for natural deceleration

### Hover States
- Stat boxes: Transform scale(1.02), enhanced border glow
- Navigation buttons: Opacity change + subtle scale
- Tier cards: Lift effect + glow intensification
- Duration: 200ms for all hover transitions

## Viewing Modes

### Slide Mode (Default)
- One slide visible at a time, centered
- Navigation via arrows, keyboard, or swipe
- Fullscreen-optimized (can enter true fullscreen)
- Slide counter and progress bar visible

### Scroll Mode
- Vertical scroll through all slides
- Slides separated by margin-bottom: 40px
- Scroll-triggered animations as slides enter viewport
- Sticky navigation to switch back to slide mode

### PDF Export
- Render all slides at 1920x1080 resolution
- Maintain styling and layout exactly
- Exclude interactive UI (buttons, navigation)
- Include all analytics screenshots and photos

## Brand Colors (Maintain Existing)
- Primary Background: Linear gradient from #0a1628 → #1a2942 → #0a1628
- Accent Red: #c41e3a (borders, stats, highlights, CTAs)
- Text White: #ffffff
- Text Light: #a8b2c1 (subtitles, captions)
- Text Gray: #d1d5db (body copy)
- Overlay: rgba(255,255,255,0.05) for cards/boxes

## Images
**Large Hero Image**: Yes - on title slide (Slide 1), use a professional photo of Clayton in State & Liberty attire or a branded lifestyle shot with text overlay

**Analytics Screenshots**: 
- YouTube views chart (Slide focused on social metrics)
- Instagram demographics, age ranges, interactions, views, new followers (Multi-metric slide)
- Facebook interactions and views (Comparative social slide)

**Professional Photos**:
- Clayton headshot in suit (About Clayton slide)
- Lifestyle/action shots from IMG_0892 and IMG_0928 (Brand alignment slides)

All images should have subtle fade-in animations on slide load (400ms delay).