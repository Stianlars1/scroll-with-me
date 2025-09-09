

# GSAP Confidence-Building Projects: Beginner to Expert

A progressive learning path for mastering GSAP animations in React/Next.js applications.

## Table of Contents

- [Level 1: Foundation (Week 1)](#level-1-foundation-week-1)
- [Level 2: Timeline Basics (Week 2)](#level-2-timeline-basics-week-2)
- [Level 3: Interactive Systems (Week 3)](#level-3-interactive-systems-week-3)
- [Level 4: Scroll Integration (Week 4)](#level-4-scroll-integration-week-4)
- [Level 5: Complex Interactions (Week 5)](#level-5-complex-interactions-week-5)
- [Level 6: Performance & Polish (Week 6)](#level-6-performance--polish-week-6)
- [Level 7: Reusable Systems (Week 7)](#level-7-reusable-systems-week-7)
- [Level 8: Expert Mastery (Week 8)](#level-8-expert-mastery-week-8)
- [Success Metrics](#success-metrics-for-confidence-building)
- [Key Confidence Milestones](#key-confidence-milestones)

---

## Level 1: Foundation (Week 1)

### Project 1: Simple Fade-In Cards
**Goal:** Master `.set()` and `.to()`

**Requirements:**
- Build 3 cards that fade in from opacity 0
- Use `gsap.set()` for initial state
- Use `.to()` for animation
- No flash of unstyled content

```typescript
// Example structure
const cards = containerRef.current?.querySelectorAll('.card');
gsap.set(cards, { opacity: 0 });
gsap.to(cards, { opacity: 1, duration: 0.6, stagger: 0.2 });
```

**Success Metric:** No flash of unstyled content

---

### Project 2: Staggered List Items
**Goal:** Understand `stagger` parameter

**Requirements:**
- Build a todo list where items slide in from left
- 6+ items minimum
- 0.1s stagger timing
- Slide from `x: -50`

```typescript
// Example structure
gsap.set(items, { opacity: 0, x: -50 });
gsap.to(items, {
  opacity: 1,
  x: 0,
  duration: 0.5,
  stagger: 0.1,
  ease: "power2.out"
});
```

**Success Metric:** Smooth cascade effect

---

### Project 3: Loading Dots
**Goal:** Learn `repeat` and `yoyo`

**Requirements:**
- Create 3 dots that scale up/down infinitely
- Different delays per dot
- Infinite repeat with yoyo effect

```typescript
// Example structure
dots.forEach((dot, i) => {
  gsap.to(dot, {
    scale: 1.5,
    duration: 0.6,
    repeat: -1,
    yoyo: true,
    delay: i * 0.2
  });
});
```

**Success Metric:** Mesmerizing loading animation

---

## Level 2: Timeline Basics (Week 2)

### Project 4: Modal Animation
**Goal:** Master timeline sequencing

**Requirements:**
- Modal that fades in backdrop first
- Then scales in content
- Then fades in text
- 3-step sequence with proper positioning

```typescript
// Example timeline structure
const tl = gsap.timeline();
tl.to(backdrop, { opacity: 1, duration: 0.3 })
  .to(content, { scale: 1, duration: 0.4 }, "-=0.1")
  .to(text, { opacity: 1, duration: 0.3 }, "-=0.2");
```

**Success Metric:** Smooth 3-part entrance, reverse on close

---

### Project 5: Button Hover Effects
**Goal:** Learn `contextSafe` and event handling

**Requirements:**
- Button animates on hover/leave
- Background color and scale changes
- Smooth forward/reverse animations
- Proper cleanup with contextSafe

```typescript
// Example structure
const { contextSafe } = useGSAP(/* ... */);

const handleHover = contextSafe(() => {
  gsap.to(buttonRef.current, {
    scale: 1.05,
    backgroundColor: "hsl(var(--primary))",
    duration: 0.3
  });
});
```

**Success Metric:** No animation glitches on rapid hover

---

### Project 6: Form Validation Feedback
**Goal:** Combine timelines with conditional logic

**Requirements:**
- Form inputs shake on error
- Inputs glow on success
- Different animations per state
- Reset capability

```typescript
// Example error animation
const animateError = contextSafe((input) => {
  gsap.to(input, {
    x: [-10, 10, -8, 8, -6, 6, 0],
    borderColor: "hsl(var(--destructive))",
    duration: 0.5
  });
});
```

**Success Metric:** Clear visual feedback system

---

## Level 3: Interactive Systems (Week 3)

### Project 7: Expandable FAQ
**Goal:** Master timeline control methods

**Requirements:**
- FAQ items expand/collapse content
- Smooth height transitions
- Rotate icons on expand
- Multiple items support

```typescript
// Example expand/collapse
const expandFAQ = contextSafe((faqItem) => {
  const content = faqItem.querySelector('.content');
  const icon = faqItem.querySelector('.icon');
  
  tl.to(content, { height: 'auto', duration: 0.4 })
    .to(icon, { rotation: 180, duration: 0.3 }, "<");
});
```

**Success Metric:** Accordion-style functionality

---

### Project 8: Image Gallery Lightbox
**Goal:** Complex enter/exit animations

**Requirements:**
- Clickable thumbnails open full-size
- Backdrop fade effect
- Smooth scale/position transition
- Close animation

```typescript
// Example lightbox opening
const openLightbox = contextSafe((thumbnail) => {
  const tl = gsap.timeline();
  tl.to(backdrop, { opacity: 1, duration: 0.3 })
    .fromTo(lightboxImage, 
      { scale: 0.5, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.4 }
    );
});
```

**Success Metric:** Professional lightbox experience

---

### Project 9: Animated Navigation Menu
**Goal:** Master sequential animations with interaction

**Requirements:**
- Mobile menu slides in
- Animates nav items one by one
- Hamburger icon animation
- Backdrop fade

```typescript
// Example menu animation
const openMenu = contextSafe(() => {
  const tl = gsap.timeline();
  tl.to(menuContainer, { x: 0, duration: 0.4 })
    .to(menuItems, { 
      opacity: 1, 
      y: 0, 
      duration: 0.3, 
      stagger: 0.1 
    }, "-=0.2");
});
```

**Success Metric:** Mobile-first navigation system

---

## Level 4: Scroll Integration (Week 4)

### Project 10: Scroll-Triggered Sections
**Goal:** Learn ScrollTrigger basics

**Requirements:**
- 4+ page sections
- Animate in as they scroll into view
- Different entrance animations per section
- Proper scroll triggers

```typescript
// Example ScrollTrigger setup
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

gsap.from(section, {
  opacity: 0,
  y: 100,
  duration: 1,
  scrollTrigger: {
    trigger: section,
    start: "top 80%",
    end: "bottom 20%"
  }
});
```

**Success Metric:** Smooth scroll experience with proper triggers

---

### Project 11: Parallax Hero Section
**Goal:** Understand scroll-based continuous animation

**Requirements:**
- Background image moves slower than foreground
- Multiple scroll speeds
- Smooth performance
- Text overlay effects

```typescript
// Example parallax effect
gsap.to(backgroundImage, {
  y: -100,
  scrollTrigger: {
    trigger: heroSection,
    start: "top bottom",
    end: "bottom top",
    scrub: true
  }
});
```

**Success Metric:** Convincing parallax depth effect

---

### Project 12: Progress Indicator
**Goal:** Combine scroll with visual feedback

**Requirements:**
- Reading progress bar
- Fills based on scroll position
- Page completion detection
- Smooth progress updates

```typescript
// Example progress bar
gsap.to(progressBar, {
  scaleX: 1,
  scrollTrigger: {
    trigger: document.body,
    start: "top top",
    end: "bottom bottom",
    scrub: true
  }
});
```

**Success Metric:** Accurate progress representation

---

## Level 5: Complex Interactions (Week 5)

### Project 13: Drag & Drop Interface
**Goal:** Learn Draggable plugin integration

**Requirements:**
- Cards draggable between columns
- Drag constraints
- Snap-back on invalid drop
- Success animations

```typescript
// Example draggable setup
import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(Draggable);

Draggable.create(cards, {
  type: "x,y",
  bounds: container,
  onDragEnd: function() {
    // Handle drop logic
  }
});
```

**Success Metric:** Polished drag experience

---

### Project 14: Multi-Step Wizard
**Goal:** Master timeline coordination

**Requirements:**
- Form wizard with slide transitions
- Progress indicators
- Forward/back navigation
- Validation states

```typescript
// Example step transition
const nextStep = contextSafe(() => {
  const tl = gsap.timeline();
  tl.to(currentStep, { x: -100, opacity: 0, duration: 0.3 })
    .to(nextStepElement, { x: 0, opacity: 1, duration: 0.3 })
    .to(progressBar, { scaleX: progress, duration: 0.2 });
});
```

**Success Metric:** Smooth multi-step flow

---

### Project 15: Interactive Timeline
**Goal:** Build complex UI patterns

**Requirements:**
- Horizontal scrolling timeline
- Click interactions show details
- Detail panel animations
- Event markers

```typescript
// Example timeline interaction
const showEventDetails = contextSafe((eventData) => {
  const tl = gsap.timeline();
  tl.to(detailPanel, { 
    x: 0, 
    opacity: 1, 
    duration: 0.4,
    ease: "power2.out"
  });
});
```

**Success Metric:** Professional timeline interface

---

## Level 6: Performance & Polish (Week 6)

### Project 16: Smooth Page Transitions
**Goal:** Optimize for real-world usage

**Requirements:**
- Between-page transitions
- Loading states
- Route change detection
- Seamless transitions

```typescript
// Example page transition
const pageTransition = gsap.timeline();
pageTransition
  .to(currentPage, { opacity: 0, duration: 0.3 })
  .set(currentPage, { display: "none" })
  .set(nextPage, { display: "block", opacity: 0 })
  .to(nextPage, { opacity: 1, duration: 0.3 });
```

**Success Metric:** App-like navigation experience

---

### Project 17: Canvas Integration
**Goal:** Combine GSAP with Canvas/WebGL

**Requirements:**
- 100+ animated particles
- Mouse interaction effects
- 60fps performance
- Smooth particle system

```typescript
// Example particle animation
particles.forEach(particle => {
  gsap.to(particle, {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    duration: Math.random() * 3 + 1,
    repeat: -1,
    yoyo: true
  });
});
```

**Success Metric:** Buttery smooth particle system

---

### Project 18: Morphing Icons
**Goal:** Master SVG path animations

**Requirements:**
- Icons morph between states
- Hamburger to X transition
- Play to pause transition
- Reversible animations

```typescript
// Example icon morph
const morphIcon = contextSafe(() => {
  gsap.to(iconPath, {
    attr: { d: newPath },
    duration: 0.4,
    ease: "power2.inOut"
  });
});
```

**Success Metric:** Professional icon transitions

---

## Level 7: Reusable Systems (Week 7)

### Project 19: Animation Component Library
**Goal:** Build reusable abstractions

**Requirements:**
- 5+ reusable animation components
- Props-based configuration
- TypeScript types
- Documentation

```typescript
// Example reusable component
interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  duration = 0.6,
  direction = 'up'
}) => {
  // Animation logic
};
```

**Success Metric:** Drop-in animation components

---

### Project 20: Theme-Based Animations
**Goal:** Coordinate complex systems

**Requirements:**
- Adapts to light/dark theme
- CSS custom properties integration
- Coordinated transitions
- Smooth theme switching

```typescript
// Example theme animation
const switchTheme = contextSafe((newTheme) => {
  gsap.to(document.documentElement, {
    "--primary": newTheme.primary,
    "--background": newTheme.background,
    duration: 0.5
  });
});
```

**Success Metric:** Seamless theme switching

---

## Level 8: Expert Mastery (Week 8)

### Project 21: Custom Easing Functions
**Goal:** Deep GSAP customization

**Requirements:**
- Mathematical easing functions
- Visual easing editor
- Brand-specific motion
- Custom bezier curves

```typescript
// Example custom easing
const customEase = "cubic-bezier(0.25, 0.46, 0.45, 0.94)";

gsap.to(element, {
  x: 100,
  duration: 1,
  ease: customEase
});
```

**Success Metric:** Unique branded motion language

---

### Project 22: Performance Optimization System
**Goal:** Master production considerations

**Requirements:**
- FPS monitoring
- Automatic quality reduction
- Battery-aware animations
- Performance analytics

```typescript
// Example performance monitoring
const monitor = {
  fps: 0,
  startTime: performance.now(),
  
  update() {
    const currentTime = performance.now();
    this.fps = 1000 / (currentTime - this.startTime);
    
    if (this.fps < 30) {
      // Reduce animation quality
    }
  }
};
```

**Success Metric:** Adaptable performance system

---

### Project 23: Full Application Animation Framework
**Goal:** Comprehensive animation architecture

**Requirements:**
- Developer debugging tools
- Animation presets
- Performance analytics
- Complete framework

```typescript
// Example animation framework
class AnimationFramework {
  private animations: Map<string, gsap.core.Timeline> = new Map();
  private config: FrameworkConfig;
  
  create(name: string, animation: TimelineConfig) {
    const tl = gsap.timeline(animation);
    this.animations.set(name, tl);
    return tl;
  }
  
  play(name: string) {
    this.animations.get(name)?.play();
  }
  
  // More framework methods...
}
```

**Success Metric:** Production-ready animation framework

---

## Success Metrics for Confidence Building

**Week 1-2:** You can create any basic entrance animation without referencing docs

**Week 3-4:** You can debug timing issues and create smooth interactive experiences

**Week 5-6:** You can optimize animations for performance and create complex UI patterns

**Week 7-8:** You can architect reusable animation systems and solve novel problems

---

## Key Confidence Milestones

1. **"I fixed the flash issue"** - Understanding initial state management
2. **"My animations feel smooth"** - Mastering easing and timing
3. **"I can chain complex sequences"** - Timeline expertise
4. **"My interactions don't glitch"** - Event handling mastery
5. **"My animations perform well"** - Performance optimization
6. **"I built a reusable system"** - Architecture understanding
7. **"I can solve any animation problem"** - Expert-level confidence

---

## Important Notes

- Each project builds directly on the previous ones
- Don't skip ahead - confidence comes from mastering each level completely
- By project 12, you'll feel genuinely confident
- By project 18, you'll be helping others
- By project 23, you'll be an expert

---

## Getting Started

1. Copy this guide to a `.md` file
2. Start with Project 1
3. Complete each project fully before moving to the next
4. Build confidence progressively
5. Share your progress and ask questions

Happy animating!

