# Experiment 2 - UI Design Using Component Libraries

## Overview

This experiment demonstrates how to design responsive user interfaces using two popular component libraries: **Bootstrap** and **Material UI**. Four separate React applications showcase different UI patterns and components.

---

## Project Structure

```
Exp_2/
├── 2.1/                # Bootstrap Form Application
├── 2.2/                # Bootstrap Cards Application
├── 2.3/                # Material UI Form Application
├── 2.4/                # Material UI Navbar Application
└── README.md           # This file
```

---

## Applications

### **App 2.1 - Bootstrap Form**

**Description**: A responsive form application using Bootstrap CSS components with form validation and submission handling.

**Features**:
- Bootstrap form styling
- Input validation for name and email
- Form submission with success message
- Gradient purple background
- Responsive card layout

**Output**:
![Bootstrap Form](./screenshots/2.1-form.png)

The form demonstrates:
- Two input fields with Bootstrap styling
- Form labels and placeholders
- Responsive design that works on all screen sizes
- Bootstrap button with hover effects
- Card-based layout with shadow effects
- Success message display after form submission

**To run**:
```bash
cd 2.1
npm run dev
```
Runs on **Port 5173**

---

### **App 2.2 - Bootstrap Cards**

**Description**: A card-based layout demonstrating Bootstrap's grid system and card components.

**Features**:
- Multiple Bootstrap cards displayed in a grid
- Card navigation (previous/next buttons)
- Bootstrap grid system (3 columns)
- Responsive layout for mobile devices
- Hover effects on cards

**Output**:
![Bootstrap Cards](./screenshots/2.2-cards.png)

The cards showcase:
- 3 columns on desktop, responsive on mobile
- Each card with title, subtitle, and description
- "NEXT" buttons for navigation
- Bootstrap card components with shadow effects
- Card hover animation (lift effect)
- Grid-based responsive design
- Dynamic card carousel functionality

**To run**:
```bash
cd 2.2
npm run dev
```
Runs on **Port 5174**

---

### **App 2.3 - Material UI Form**

**Description**: A modern form application using Material Design components from Material UI (@mui/material).

**Features**:
- Material UI TextField component
- Material UI Button component
- Material UI Card component
- Form validation
- Material Design principles (elevation, spacing, typography)
- Responsive centered layout

**Output Before Submission**:
![Material UI Form Empty](./screenshots/2.3-form-empty.png)

**Output After Submission**:
![Material UI Form Submitted](./screenshots/2.3-form-submitted.png)

The form demonstrates:
- Material UI's TextField with custom styling
- Material UI Button with variant="contained"
- Material UI Card with CardContent
- Success message with Material UI's Alert styling
- Professional Material Design look and feel
- Automatic form reset after submission
- Form state management with React hooks

**Key Components Used**:
```javascript
import { Button, TextField, Card, CardContent } from '@mui/material';
```

**To run**:
```bash
cd 2.3
npm run dev
```
Runs on **Port 5175**

---

### **App 2.4 - Material UI Navbar**

**Description**: A fully responsive navigation bar using Material UI components with different layouts for mobile and desktop.

**Features**:
- Material UI AppBar component
- Responsive navigation (hamburger menu on mobile)
- Material UI Drawer for mobile navigation
- Search functionality
- Material UI Icons integration
- Disabled navigation items
- Material Design navigation patterns

**Output (Desktop View)**:
![Material UI Navbar](./screenshots/2.4-navbar.png)

The navbar demonstrates:
- **Desktop View**: Horizontal navigation bar with menu items and search functionality
- **Mobile View**: Hamburger menu that opens a drawer (sidebar)
- Material UI AppBar with Toolbar
- Navigation links: Home, Link, Disabled
- Search input field with search button
- Material UI Icons (MenuIcon, SearchIcon)
- Responsive design using Material UI's breakpoints
- Professional navigation experience

**Key Components Used**:
```javascript
import { AppBar, Toolbar, Button, Drawer, List, ListItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
```

**Responsive Behavior**:
- **Mobile (xs)**: Shows hamburger menu with drawer sidebar
- **Desktop (md+)**: Shows horizontal navigation bar with search
- Smooth transitions between breakpoints

**To run**:
```bash
cd 2.4
npm run dev
```
Runs on **Port 5176**

---

## Technology Stack

### Common Dependencies (All Apps)
- **React**: 18.3.1 - JavaScript library for building UI
- **Vite**: 5.0.8 - Build tool and development server
- **React DOM**: 18.3.1 - React package for DOM rendering

### Bootstrap Apps (2.1 & 2.2)
- **Bootstrap**: 5.3.0 - CSS framework for responsive design
- Provides pre-built components: buttons, forms, cards, grids

### Material UI Apps (2.3 & 2.4)
- **@mui/material**: 5.14.0 - React component library following Material Design
- **@emotion/react**: 11.11.0 - CSS-in-JS library for styling
- **@emotion/styled**: 11.11.0 - Styled components library
- **@mui/icons-material**: 5.14.0 - Material Design icons (2.4 only)

---

## Key Concepts Demonstrated

### Bootstrap Approach
```javascript
import 'bootstrap/dist/css/bootstrap.min.css';

// Using Bootstrap classes directly
<div className="card">
  <div className="btn btn-primary">Click me</div>
</div>
```

- **CSS Class-based** styling
- Pre-defined utility classes for spacing, sizing, colors
- Grid system with rows and columns
- Pre-built components that use CSS classes

### Material UI Approach
```javascript
import { Button, TextField, Card } from '@mui/material';

// Using React components
<TextField label="Name" />
<Button variant="contained">Submit</Button>
```

- **Component-based** approach
- Props for customization instead of classes
- Built-in accessibility features
- Material Design system with theming support
- Emotion CSS-in-JS for dynamic styling

---

## Installation & Setup

All dependencies have been pre-installed. If you need to reinstall:

```bash
# For any app (2.1, 2.2, 2.3, or 2.4)
cd 2.X
npm install
```

---

## Running All Apps Simultaneously

Open separate terminals and run:

```bash
# Terminal 1 - Bootstrap Form
cd 2.1 && npm run dev

# Terminal 2 - Bootstrap Cards
cd 2.2 && npm run dev

# Terminal 3 - Material UI Form
cd 2.3 && npm run dev

# Terminal 4 - Material UI Navbar
cd 2.4 && npm run dev
```

Then access:
- App 2.1: http://localhost:5173
- App 2.2: http://localhost:5174
- App 2.3: http://localhost:5175
- App 2.4: http://localhost:5176

---

## Building for Production

```bash
cd 2.X
npm run build
```

This creates an optimized build in the `dist/` folder ready for deployment.

---

## Comparison: Bootstrap vs Material UI

| Feature | Bootstrap | Material UI |
|---------|-----------|-------------|
| **Approach** | CSS classes + HTML | React components |
| **Learning Curve** | Easier for beginners | Steeper, component-based |
| **Customization** | CSS overrides | Props & theming |
| **File Size** | Smaller | Larger (more features) |
| **Accessibility** | Good | Excellent |
| **Consistency** | Excellent | Excellent |
| **Theming** | Limited | Comprehensive |
| **Documentation** | Extensive | Extensive |

---

## Learning Outcomes

By completing this experiment, you will understand:

✅ How to use component libraries to build responsive UIs
✅ Bootstrap CSS classes and grid system
✅ Material Design principles and implementation
✅ React component composition
✅ Form handling and validation
✅ Responsive design patterns
✅ Navigation patterns (navbar)
✅ State management in React
✅ CSS-in-JS approaches
✅ Building production-ready applications

---

## File Structure (Each App)

```
2.X/
├── src/
│   ├── main.jsx          # Entry point
│   ├── App.jsx           # Main component
│   └── App.css           # Styles
├── index.html            # HTML template
├── package.json          # Dependencies
├── vite.config.js        # Vite configuration
└── node_modules/         # Installed packages
```

---

## Notes

- Each app runs on a different port to avoid conflicts
- All apps use Vite for fast development and building
- Bootstrap apps use CDN-style imports; Material UI uses component imports
- Material UI apps include Emotion for CSS-in-JS styling
- Apps demonstrate best practices for modern React development

---

**Experiment Date**: January 2026
**Framework**: React 18.3.1
**Build Tool**: Vite 5.0.8
**UI Libraries**: Bootstrap 5.3.0 & Material UI 5.14.0

---

## Quick Reference

| App | Name | Port | Library | Key Component |
|-----|------|------|---------|---|
| 2.1 | Form | 5173 | Bootstrap | `<form>` with Bootstrap classes |
| 2.2 | Cards | 5174 | Bootstrap | Bootstrap `card` component |
| 2.3 | Form | 5175 | Material UI | `<TextField>` & `<Button>` |
| 2.4 | Navbar | 5176 | Material UI | `<AppBar>` & `<Drawer>` |
