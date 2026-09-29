# Clean and Stuff - Commercial Janitorial & Cleaning Services Website

A modern, lightning-fast, ultra-responsive bilingual static website for **Clean and Stuff Cleaning Services** (Owner-Operated, 13+ Years Experience, LLC, Fully Insured).

---

## 🌟 Key Highlights & Features

- **🏢 Commercial & Janitorial First Focus**:
  - Positioned for corporate offices, commercial facilities, retail spaces, clinics, and business suites.
  - Dedicated focus on **Commercial Janitorial**, **Deep Cleaning**, and **Move-In / Move-Out Property Turnovers**, with full ongoing support for **Residential Cleaning**.
- **🌐 Full Bilingual Translation Engine (English & Español)**:
  - Instant client-side language toggle with 100% translation coverage across all copy, badges, checklists, service areas, and forms.
- **⚡ Zero Framework Bloat / Maximum Speed**:
  - Pure HTML5, Modern CSS3, and ES6+ JavaScript.
  - Instant load times (100/100 Lighthouse Performance).
  - No build tools, compilation, or external NPM dependencies required.
- **📱 Mobile-First Responsive Design**:
  - Sticky glassmorphic header with desktop navigation and mobile slide-out drawer.
  - Floating bottom mobile quick action bar with direct **Call (512-351-6477)**, **Text Us**, and **Quote** triggers.
- **🔄 Interactive Before & After Transformation Slider**:
  - Touch- and mouse-enabled draggable comparison slider showcasing real deep cleaning transformations.
- **🔍 Interactive Service Hotspot Inspector**:
  - Live inspection tabs exploring Baseboards, Break Rooms, Restroom Sanitization, and High Dusting.
- **📍 Central Texas Service Area Lookup**:
  - Real-time Zip Code and City search for Austin, Round Rock, Cedar Park, Pflugerville, Georgetown, Buda, Kyle, Lakeway, and surrounding areas.
- **❓ Searchable FAQ Accordion**:
  - Instant client-side search filtering across COI insurance, after-hours shifts, deep clean scope, supplies, and residential scheduling.
- **📋 Complete Service Catalog**:
  - Dedicated interactive tabs and checklists for **Commercial Janitorial**, **Deep Clean & Move-Out**, and **Residential & Specialty** care.

---

## 📁 File Structure

```
cleanStuff/
├── index.html              # Main application containing all sections, tabs & forms
├── README.md               # Documentation and deployment guide
├── css/
│   ├── style.css           # Design system tokens, layout, typography, components
│   └── animations.css      # Keyframe animations, hover effects, and scroll reveal utilities
├── js/
│   ├── main.js             # Sticky nav, mobile drawer, services tabs, FAQs, form handling
│   ├── i18n.js             # English and Spanish bilingual translation engine
│   ├── before-after.js     # Touch & mouse interactive comparison slider
│   └── service-area.js     # Central Texas zip code & city lookup tool
└── images/                 # High-resolution photography assets
    ├── commercial-office.jpg
    ├── specialty-cleaning.jpg
    ├── residential-clean.jpg
    ├── family-trust.jpg
    ├── hero-cleaning.jpg
    ├── before-kitchen.jpg
    └── after-kitchen.jpg
```

---

## 🚀 How to Run Locally

You can open the website simply by double-clicking `index.html` in your file explorer / Finder, or by opening it in any modern browser:

```bash
open index.html
```

Or serve with any lightweight static server:
```bash
# Using Python:
python3 -m http.server 8080

# Using Node:
npx serve .
```

---

## 🌐 How to Deploy (100% Free Hosting)

Because this is a pure static site, you can host it for free on any platform:

1. **GitHub Pages**:
   - Push this folder to a GitHub repository.
   - Go to **Settings > Pages** and select `Deploy from a branch (main / root)`.
2. **Netlify**:
   - Drag and drop the `cleanStuff/` folder onto [Netlify Drop](https://app.netlify.com/drop).
3. **Cloudflare Pages / Vercel**:
   - Connect your Git repo and select Static HTML output (Root directory: `./`).
4. **Any Standard Web Host (cPanel, Apache, Nginx, AWS S3)**:
   - Upload all files directly to `public_html` or the root web directory.
