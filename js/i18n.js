/**
 * Clean and Stuff - Bilingual Translation Engine (English / Español)
 * Streamlined, Punchy, Scannable & Visual-First Copy
 */

const translations = {
  en: {
    // Brand & Header
    "brand_name": "CLEAN & STUFF",
    "brand_sub": "Commercial & Residential Cleaning",
    "nav_services": "Services",
    "nav_results": "Results",
    "nav_why_us": "Why Us",
    "nav_scheduling": "Scheduling",
    "nav_reviews": "Reviews",
    "nav_contact": "Contact",
    "btn_free_quote": "Free Quote",

    // Hero Section
    "hero_trust_badge": "Commercial Janitorial • Deep Clean • Move-Out • Insured LLC",
    "hero_title_1": "COMMERCIAL & DEEP CLEANING",
    "hero_title_2": "CENTRAL TEXAS SPECIALISTS",
    "hero_subhead": "Office Janitorial • Restorative Deep Cleaning • Turnovers • Residential Care",
    "hero_btn_estimate": "Get Free Estimate",
    "hero_btn_call": "Call / Text 512-351-6477",

    // Hero 4 Trust Badges
    "trust_card_family_title": "Commercial & Home",
    "trust_card_family_sub": "Tailored Scopes",
    "trust_card_exp_title": "13+ Years",
    "trust_card_exp_sub": "Local Experience",
    "trust_card_insured_title": "Fully Insured",
    "trust_card_insured_sub": "LLC & COI Verified",
    "trust_card_llc_title": "Flexible Shifts",
    "trust_card_llc_sub": "Day, Night & Weekend",

    // Why Choose Us
    "why_subtitle": "Why Clean and Stuff?",
    "why_title": "Commercial Quality. Proven Reliability.",
    "why_desc": "Over 13 years of hands-on cleaning experience providing consistent janitorial maintenance, restorative deep cleans, and tenant turnovers.",

    "bento_hero_pill": "13+ Years Experience",
    "bento_hero_region": "Central Texas & Austin Metro",
    "bento_hero_title": "Spotless Facilities &amp; Homes",
    "bento_hero_desc": "Reliable commercial janitorial, restorative deep cleans, and tenant move-outs with direct owner accountability.",
    "bento_chip_insured": "Fully Insured LLC",
    "bento_chip_family": "Owner Supervised",
    "bento_chip_quality": "100% Guaranteed",

    "bento_detail_title": "Precision Standards",
    "bento_detail_sub": "Inspected corner to corner",
    "bento_detail_tap": "Tap an area to inspect our detailed standard:",
    "hotspot_baseboards_btn": "Baseboards",
    "hotspot_kitchens_btn": "Break Rooms",
    "hotspot_restrooms_btn": "Restrooms",
    "hotspot_highdusting_btn": "High Dusting",
    "hotspot_baseboards_text": "Baseboards & Trim: Hand-wiped to remove all scuffs, dust, and grime along high-traffic corridors and rooms.",
    "hotspot_kitchens_text": "Break Rooms & Kitchens: Degreased counters, tables, microwaves, and sanitized sinks.",
    "hotspot_restrooms_text": "Restroom Sanitization: Fixtures disinfected, tiles scrubbed, mirrors shined, and supplies restocked.",
    "hotspot_highdusting_text": "High Dusting & Vents: HVAC vents, ceiling fan blades, high ledges, and light fixtures dusted.",

    "bento_card1_title": "Direct Communication",
    "bento_card1_desc": "Call or text <strong>512-351-6477</strong> anytime for instant quotes with zero wait.",
    "bento_card1_cta": "Call or Text Us →",
    "bento_card2_title": "Transparent Pricing",
    "bento_card2_desc": "Clear flat rates and custom itemized scopes with zero surprise fees.",
    "bento_card2_cta": "Get Free Quote →",
    "bento_card3_title": "Commercial Standards",
    "bento_card3_desc": "Insured LLC adhering to strict security, keyholder, and facility protocols.",
    "bento_card3_cta": "Get Free Estimate →",

    // About Section
    "about_subtitle": "About Clean and Stuff",
    "about_title": "13+ Years of Cleaning Excellence",
    "about_float_years": "13+",
    "about_float_text": "Years Experience",
    "about_p1": "Clean and Stuff is an owner-operated Central Texas cleaning team delivering consistent commercial janitorial care, restorative deep cleans, and move-out turnovers.",
    "about_p2": "We combine commercial-grade standards with personal owner supervision on every single project.",
    "about_quote": "“Quality cleaning, dependable service, and spaces you're proud of.”",
    "about_steps_title": "Getting Started Is Easy:",
    "about_step1_title": "Quick Estimate",
    "about_step1_sub": "Call, text, or form",
    "about_step2_title": "Custom Shift",
    "about_step2_sub": "Day, night or weekend",
    "about_step3_title": "Pristine Results",
    "about_step3_sub": "Spotless & guaranteed",

    // Services Catalog
    "services_subtitle": "Our Services & Properties",
    "services_title": "Commercial, Deep Clean & Residential Care",
    "services_desc": "Tailored cleaning solutions for Central Texas businesses, property managers, and homes.",
    "service_badge_com": "Commercial",
    "service_badge_deep": "Deep Clean & Move-Out",
    "service_badge_res": "Residential & Specialty",

    // Service 1: Commercial
    "service_com_title": "Commercial & Janitorial",
    "service_com_summary": "Pristine workspaces that elevate your brand & boost productivity.",
    "service_sub_offices": "Offices",
    "service_sub_restrooms": "Restrooms",
    "service_sub_facilities": "Facilities",
    "com_offices_h1": "Workstations, desks & conference rooms",
    "com_offices_h2": "Lobbies, entry glass & reception",
    "com_offices_h3": "Commercial carpets & hard floors",
    "com_restrooms_h1": "Fixture & stall deep sanitization",
    "com_restrooms_h2": "Trash removal, relining & restocking",
    "com_restrooms_h3": "Odor neutralization & mirror polish",
    "com_facilities_h1": "Break rooms, sinks & appliances",
    "com_facilities_h2": "Daily, weekly or custom night shifts",
    "com_facilities_h3": "Flexible after-hours schedules",
    "checklist_btn": "View Full Checklist",
    "checklist_btn_hide": "Hide Checklist",
    "com_check_1": "High-touch disinfection (keyboards, phones, handles)",
    "com_check_2": "Commercial trash & recycling disposal",
    "com_check_3": "Hallways, baseboards & elevator care",
    "com_check_4": "Security & keyholder protocol compliance",
    "btn_com_estimate": "Get Commercial Estimate",

    // Service 2: Deep Clean & Move-Out
    "service_deep_title": "Deep Clean & Move-Out",
    "service_deep_summary": "Intensive restorative scrubbing & 100% deposit-ready turnovers.",
    "service_sub_deep": "Deep Clean",
    "service_sub_move": "Move In/Out",
    "service_sub_turnover": "Turnovers",
    "deep_clean_h1": "Baseboards, door frames, vents & trim",
    "deep_clean_h2": "Ceiling fans, light fixtures & high dusting",
    "deep_clean_h3": "Heavy grease, grime & residue scrub",
    "move_clean_h1": "Inside cabinets, drawers & pantries",
    "move_clean_h2": "Full interior/exterior appliance detailing",
    "move_clean_h3": "100% deposit & inspection turnover ready",
    "turnover_clean_h1": "Property manager turnover standard",
    "turnover_clean_h2": "Tile scrubbing & shower/bath descaling",
    "turnover_clean_h3": "Fast turnaround for new move-ins",
    "deep_check_1": "Inside oven, refrigerator & microwave detailing",
    "deep_check_2": "Hand-washing all baseboards, plates & door frames",
    "deep_check_3": "Tile scrubbing, grout care & shower glass shine",
    "deep_check_4": "Interior window tracks, sills & glass cleaning",
    "btn_deep_estimate": "Get Deep Clean Estimate",

    // Service 3: Residential & Specialty
    "service_res_title": "Residential & Specialty",
    "service_res_summary": "Routine home care, post-construction & specialty projects.",
    "service_sub_std": "Standard Home",
    "service_sub_post": "Post-Construction",
    "service_sub_windows": "Windows & Floors",
    "res_std_h1": "Kitchen surfaces, sinks & exteriors",
    "res_std_h2": "Bathroom sanitization & mirror polish",
    "res_std_h3": "Dusting, vacuuming & floor mopping",
    "spec_post_h1": "Drywall dust, residue & paint overspray",
    "spec_post_h2": "Debris removal & final detail wipe down",
    "spec_post_h3": "Move-in ready for new builds & remodels",
    "spec_windows_h1": "Interior & exterior window glass cleaning",
    "spec_windows_h2": "Window track, sill & screen dusting",
    "spec_windows_h3": "Machine floor care & grout scrubbing",
    "res_check_1": "All-room dusting, cobweb removal & trash emptied",
    "res_check_2": "Disinfecting switches, handles & touchpoints",
    "res_check_3": "Scrubbing stovetops, microwave & counters",
    "res_check_4": "Flexible weekly (save 5%), bi-weekly, or monthly visits",
    "btn_res_estimate": "Get Residential Estimate",

    // Who We Serve
    "serve_subtitle": "Who We Serve",
    "serve_title": "Properties We Clean",
    "serve_desc": "Professional cleaning solutions tailored for businesses, property managers, and homeowners.",
    "hub1_tag": "Workplaces",
    "hub1_title": "Commercial & Offices",
    "hub1_desc": "Tailored maintenance for corporate offices, retail stores & facilities.",
    "hub1_chip1": "Corporate Suites & Offices",
    "hub1_chip2": "Retail Stores & Boutiques",
    "hub1_chip3": "Clinics, Studios & Facilities",
    "hub2_tag": "Turnover & Leases",
    "hub2_title": "Property Managers",
    "hub2_desc": "Fast, turnkey turnover deep cleaning for rentals, leases & listings.",
    "hub2_chip1": "Apartment Move-In & Move-Out",
    "hub2_chip2": "Commercial Lease Turnovers",
    "hub2_chip3": "Short-Term Rentals (Airbnb / VRBO)",
    "hub3_tag": "Living Spaces",
    "hub3_title": "Residential Homes",
    "hub3_desc": "Care for private residences, townhomes & remodel projects.",
    "hub3_chip1": "Single-Family Homes & Condos",
    "hub3_chip2": "Post-Construction & Remodels",
    "hub3_chip3": "Seasonal Deep Restorations",

    // Custom Plans & Scheduling
    "plan_stage_tag": "Flexible Scheduling",
    "plan_stage_title": "Your Space.<br><span class=\"text-highlight\">Your Schedule.</span><br>Your Cleaning Plan.",
    "plan_stage_desc": "Customized cleaning schedules with zero rigid contracts.",
    "chip_commercial": "Commercial Daily",
    "chip_night": "Night & Weekend Shifts",
    "chip_weekly": "Weekly / Bi-Weekly",
    "chip_monthly": "Monthly",
    "chip_onetime": "Move-Out / One-Time",
    "btn_custom_schedule": "Request Custom Schedule",
    "glass1_title": "Property & Facility Size",
    "glass1_desc": "Tailored to your square footage.",
    "glass2_title": "Commercial & Residential",
    "glass2_desc": "Offices, retail, turnovers & homes.",
    "glass3_title": "Priority Areas",
    "glass3_desc": "Desks, restrooms & break rooms.",
    "glass4_title": "Flexible Shifts",
    "glass4_desc": "Day porter or after-hours night crew.",
    "glass5_title": "Special Attention",
    "glass5_desc": "Baseboards, return vents & ledges.",
    "glass6_title": "Add-On Options",
    "glass6_desc": "Appliances, windows & grout scrub.",

    // Gallery / Results
    "gallery_subtitle": "Real Results",
    "gallery_title": "See The Transformation",
    "gallery_desc": "Drag the slider to see how we restore shine, cleanliness, and immaculate order.",
    "ba_badge_before": "BEFORE",
    "ba_badge_after": "AFTER",
    "ba_helper_text": "Drag slider horizontally to inspect transformation",

    // Quality Section
    "quality_badge": "Quality Standard",
    "quality_title": "Commercial-Grade Standards. Zero Cut Corners.",
    "quality_desc": "We focus on the fine details that keep facilities and homes genuinely pristine.",
    "quality_point_1": "Corners & Edges",
    "quality_point_2": "High-Touch Disinfection",
    "quality_point_3": "Hard-to-Reach Areas",
    "quality_point_4": "Detailed Floors",
    "quality_point_5": "All Workstations",
    "quality_point_6": "Restrooms & Break Rooms",

    // Reviews
    "reviews_subtitle": "Client Feedback",
    "reviews_title": "Trusted by Businesses, Property Managers & Families",
    "review1_text": "“Our conference rooms, break room, and restrooms are spotless every Monday morning. Reliable, punctual, and easy to work with.”",
    "review1_author": "David R.",
    "review1_role": "Commercial Office Manager",
    "review2_text": "“Booked them for a Move-Out deep clean and got 100% of our deposit back. They cleaned the oven, cabinets, and baseboards flawlessly!”",
    "review2_author": "Jessica & Leo",
    "review2_role": "Move-Out Clean",
    "review3_text": "“Clean and Stuff has been cleaning our home bi-weekly for months. Their attention to detail on baseboards and kitchen counters is outstanding!”",
    "review3_author": "Sarah M.",
    "review3_role": "Residential Client",

    // Featured Spaces Carousel
    "spaces_subtitle": "A Look Inside",
    "spaces_desc": "A look inside bespoke boutique showrooms, commercial suites, and executive spaces in our regular care.",
    "space1_title": "Luxury Boutique Showroom",
    "space1_tag": "Showroom & Lounge",
    "space1_desc": "Hardwood floor polish, custom vitrines & leather craft care",
    "space2_title": "Executive Display Suite",
    "space2_tag": "Private Facility",
    "space2_desc": "High-gloss desk detailing, dust-free wood panels & lighting",
    "space3_title": "Bespoke Marble Restroom",
    "space3_tag": "Sanitization & Stone",
    "space3_desc": "Deep stone restoration, wall tile grout & mirror polish",
    "space4_title": "Artisan Vitrines & Showcase",
    "space4_tag": "Detail Maintenance",
    "space4_desc": "Fingerprint-free glass, brass fixtures & delicate care",

    // Service Area
    "servicearea_subtitle": "Local Service",
    "servicearea_title": "Central Texas & Austin Metro Area",
    "servicearea_desc": "Check if your commercial property or residence is in our immediate service area:",
    "servicearea_input_placeholder": "Enter Zip Code or City (e.g. Austin, 78704)...",
    "servicearea_btn": "Check Area",

    // FAQs
    "faq_subtitle": "Common Questions",
    "faq_title": "Frequently Asked Questions",
    "faq_q1": "Are you licensed and insured?",
    "faq_a1": "Yes. Clean and Stuff is an established LLC and carries full business liability insurance for total protection and peace of mind.",
    "faq_q2": "Do you bring your own cleaning supplies?",
    "faq_a2": "Yes! Our team arrives fully equipped with professional-grade supplies, microfiber cloths, and vacuums. If you prefer specific products, we are happy to use them.",
    "faq_q3": "Can I text you for questions or quotes?",
    "faq_a3": "Yes! Call or text us anytime at <strong>512-351-6477</strong> for quick responses and easy scheduling.",
    "faq_q4": "What recurring schedules do you offer?",
    "faq_a4": "We offer Weekly (save 5%), Bi-Weekly, Monthly, One-Time cleans, and custom daily/weekly commercial maintenance.",

    // Contact Form
    "contact_badge": "Ready for a Cleaner Space?",
    "contact_title": "GET A FREE ESTIMATE",
    "contact_desc": "Call, text, or submit the form for a fast, honest estimate for your commercial property, turnover, or home.",
    "contact_direct_title": "Direct Call or Text",
    "contact_btn_call": "Call 512-351-6477",
    "contact_btn_text": "Text Us",
    "contact_success": "Thank you! Your request was received. We will call or text you shortly!",
    "contact_label_name": "Name *",
    "contact_placeholder_name": "Your Name / Business Name",
    "contact_label_phone": "Phone (Call/Text) *",
    "contact_placeholder_phone": "512-000-0000",
    "contact_label_service": "Service *",
    "contact_opt_select": "Select Service",
    "contact_opt_com_off": "Commercial - Office & Business Janitorial",
    "contact_opt_com_fac": "Commercial - Facility & Retail Care",
    "contact_opt_deep_clean": "Deep Cleaning (Commercial or Home)",
    "contact_opt_move_turnover": "Move-In / Move-Out Turnover Clean",
    "contact_opt_res_recurring": "Residential - Recurring Home Clean",
    "contact_opt_res_std": "Residential - Standard Clean",
    "contact_opt_spec_post": "Specialty - Post-Construction Cleanup",
    "contact_opt_spec_cust": "Custom Cleaning Scope",
    "contact_label_property": "City / Zip / Square Footage",
    "contact_placeholder_property": "e.g. Austin 78704 (2,500 sq ft)",
    "contact_label_notes": "Notes / Scope Details",
    "contact_placeholder_notes": "Facility type, number of rooms/desks, preferred cleaning hours...",
    "contact_btn_submit": "Send Free Estimate Request",

    // Footer & Mobile Bar
    "footer_rights": "© 2026 Clean and Stuff Cleaning Services. All rights reserved.",
    "mobile_call": "Call",
    "mobile_text": "Text",
    "mobile_quote": "Quote"
  },

  es: {
    // Brand & Header
    "brand_name": "CLEAN & STUFF",
    "brand_sub": "Limpieza Comercial y Residencial",
    "nav_services": "Servicios",
    "nav_results": "Resultados",
    "nav_why_us": "¿Por Qué Nosotros?",
    "nav_scheduling": "Horarios",
    "nav_reviews": "Opiniones",
    "nav_contact": "Contacto",
    "btn_free_quote": "Cotización Gratis",

    // Hero Section
    "hero_trust_badge": "Limpieza Comercial • Limpieza Profunda • Mudanzas • Asegurados LLC",
    "hero_title_1": "LIMPIEZA COMERCIAL Y PROFUNDA",
    "hero_title_2": "ESPECIALISTAS EN TEXAS CENTRAL",
    "hero_subhead": "Limpieza de Oficinas • Limpieza Profunda • Entregas de Mudanza • Cuidado Residencial",
    "hero_btn_estimate": "Obtener Cotización Gratis",
    "hero_btn_call": "Llamar / Texto 512-351-6477",

    // Hero 4 Trust Badges
    "trust_card_family_title": "Comercial y Hogar",
    "trust_card_family_sub": "Planes a Medida",
    "trust_card_exp_title": "13+ Años",
    "trust_card_exp_sub": "De Experiencia",
    "trust_card_insured_title": "Totalmente Asegurados",
    "trust_card_insured_sub": "LLC y Certificado COI",
    "trust_card_llc_title": "Turnos Flexibles",
    "trust_card_llc_sub": "Día, Noche y Fin de Semana",

    // Why Choose Us
    "why_subtitle": "¿Por Qué Elegirnos?",
    "why_title": "Calidad Comercial. Confiabilidad Comprobada.",
    "why_desc": "Más de 13 años de experiencia en mantenimiento de oficinas, limpiezas profundas y mudanzas.",

    "bento_hero_pill": "13+ Años de Experiencia",
    "bento_hero_region": "Texas Central y Área de Austin",
    "bento_hero_title": "Instalaciones y Hogares Impecables",
    "bento_hero_desc": "Mantenimiento comercial confiable, limpiezas profundas y mudanzas con atención directa de los dueños.",
    "bento_chip_insured": "Empresa LLC Asegurada",
    "bento_chip_family": "Supervisión Directa",
    "bento_chip_quality": "100% Garantizado",

    "bento_detail_title": "Estándares de Precisión",
    "bento_detail_sub": "Inspeccionado de esquina a esquina",
    "bento_detail_tap": "Toca un área para ver nuestro estándar detallado:",
    "hotspot_baseboards_btn": "Zócalos",
    "hotspot_kitchens_btn": "Comedores",
    "hotspot_restrooms_btn": "Baños",
    "hotspot_highdusting_btn": "Desempolvado Alto",
    "hotspot_baseboards_text": "Zócalos y Molduras: Limpieza a mano de polvo, rozaduras y manchas en pasillos y oficinas.",
    "hotspot_kitchens_text": "Comedores y Cocinas: Desengrasado de mostradores, mesas, microondas y fregaderos desinfectados.",
    "hotspot_restrooms_text": "Desinfección de Baños: Sanitarios desinfectados, azulejos fregados, espejos pulidos y reposición.",
    "hotspot_highdusting_text": "Desempolvado en Altura: Rejillas de aire, ventiladores de techo, repisas y lámparas altas.",

    "bento_card1_title": "Comunicación Directa",
    "bento_card1_desc": "Llámanos o escríbenos al <strong>512-351-6477</strong> para cotizaciones al instante sin esperas.",
    "bento_card1_cta": "Llámanos o Envíanos Texto →",
    "bento_card2_title": "Precios Claros",
    "bento_card2_desc": "Tarifas claras y presupuestos detallados sin ningún cargo sorpresa.",
    "bento_card2_cta": "Obtener Cotización Gratis →",
    "bento_card3_title": "Estándar Comercial",
    "bento_card3_desc": "Empresa LLC con seguro, llaves y cumplimiento de normas de seguridad.",
    "bento_card3_cta": "Obtener Cotización →",

    // About Section
    "about_subtitle": "Sobre Nosotros",
    "about_title": "13+ Años de Excelencia en Limpieza",
    "about_float_years": "13+",
    "about_float_text": "Años de Experiencia",
    "about_p1": "Clean and Stuff es un equipo de limpieza de Texas Central operado por sus dueños, especializado en oficinas comerciales, limpiezas profundas y mudanzas.",
    "about_p2": "Combinamos estándares comerciales de primer nivel con supervisión directa en cada proyecto.",
    "about_quote": "“Limpieza de calidad, servicio confiable y espacios de los que sentirse orgulloso.”",
    "about_steps_title": "Comenzar Es Muy Fácil:",
    "about_step1_title": "Cotización Rápida",
    "about_step1_sub": "Llamada, texto o web",
    "about_step2_title": "Horario a Medida",
    "about_step2_sub": "Día, noche o finde",
    "about_step3_title": "Espacio Impecable",
    "about_step3_sub": "Garantizado al 100%",

    // Services Catalog
    "services_subtitle": "Nuestros Servicios y Propiedades",
    "services_title": "Comercial, Limpieza Profunda y Residencial",
    "services_desc": "Soluciones de limpieza adaptadas para empresas, administradores de propiedades y hogares en Texas Central.",
    "service_badge_com": "Comercial",
    "service_badge_deep": "Limpieza Profunda y Mudanza",
    "service_badge_res": "Residencial y Especializado",

    // Service 1: Commercial
    "service_com_title": "Comercial y Oficinas",
    "service_com_summary": "Espacios impecables que elevan tu marca y aumentan la productividad.",
    "service_sub_offices": "Oficinas",
    "service_sub_restrooms": "Baños",
    "service_sub_facilities": "Instalaciones",
    "com_offices_h1": "Estaciones de trabajo y salas de juntas",
    "com_offices_h2": "Vestíbulos, cristales de entrada y recepción",
    "com_offices_h3": "Alfombras comerciales y pisos duros",
    "com_restrooms_h1": "Desinfección profunda de sanitarios",
    "com_restrooms_h2": "Vaciado de basura, bolsas y reposición",
    "com_restrooms_h3": "Neutralización de olores y espejos",
    "com_facilities_h1": "Comedores, fregaderos y aparatos",
    "com_facilities_h2": "Turnos diarios, semanales o nocturnos",
    "com_facilities_h3": "Horarios flexibles fuera de oficina",
    "checklist_btn": "Ver Lista de Tareas Completa",
    "checklist_btn_hide": "Ocultar Lista de Tareas",
    "com_check_1": "Desinfección de puntos de contacto (teclados, manijas)",
    "com_check_2": "Reciclaje y recolección de basura comercial",
    "com_check_3": "Pasillos, zócalos y mantenimiento de elevadores",
    "com_check_4": "Cumplimiento de protocolos de seguridad y llaves",
    "btn_com_estimate": "Obtener Cotización Comercial",

    // Service 2: Deep Clean & Move-Out
    "service_deep_title": "Limpieza Profunda y Mudanza",
    "service_deep_summary": "Fregado intensivo restaurador y limpiezas con devolución de depósito.",
    "service_sub_deep": "Limpieza Profunda",
    "service_sub_move": "Entrada / Salida",
    "service_sub_turnover": "Rotaciones",
    "deep_clean_h1": "Zócalos, marcos, rejillas y molduras",
    "deep_clean_h2": "Ventiladores, lámparas y techos altos",
    "deep_clean_h3": "Fregado de grasa y suciedad profunda",
    "move_clean_h1": "Interior de gabinetes, cajones y despensas",
    "move_clean_h2": "Detallado de electrodomésticos por dentro y fuera",
    "move_clean_h3": "100% lista para inspección y depósito",
    "turnover_clean_h1": "Estándar para administradores de renta",
    "turnover_clean_h2": "Fregado de azulejos y desincrustación",
    "turnover_clean_h3": "Rápida entrega para nuevos inquilinos",
    "deep_check_1": "Detallado interior de horno, refrigerador y microondas",
    "deep_check_2": "Limpieza a mano de todos los zócalos y puertas",
    "deep_check_3": "Fregado de juntas, azulejos y canceles de baño",
    "deep_check_4": "Limpieza de rieles, marcos y cristales de ventanas",
    "btn_deep_estimate": "Obtener Cotización de Limpieza Profunda",

    // Service 3: Residential & Specialty
    "service_res_title": "Residencial y Especializado",
    "service_res_summary": "Mantenimiento periódico del hogar, post-construcción y proyectos especiales.",
    "service_sub_std": "Hogar Estándar",
    "service_sub_post": "Construcción",
    "service_sub_windows": "Ventanas y Pisos",
    "res_std_h1": "Superficies de cocina, fregaderos y exteriores",
    "res_std_h2": "Desinfección de baños y brillo de espejos",
    "res_std_h3": "Desempolvado, aspirado y trapeado",
    "spec_post_h1": "Polvo de yeso, restos de pintura y obra",
    "spec_post_h2": "Retiro de residuos y limpieza final",
    "spec_post_h3": "Listo para habitar obras y remodelaciones",
    "spec_windows_h1": "Cristales de ventanas interiores y exteriores",
    "spec_windows_h2": "Limpieza de rieles, marcos y mosquiteros",
    "spec_windows_h3": "Cuidado de pisos a máquina y juntas",
    "res_check_1": "Desempolvado general, telarañas y basura",
    "res_check_2": "Desinfección de interruptores y manijas",
    "res_check_3": "Fregado de estufas, microondas y barras",
    "res_check_4": "Servicio semanal (ahorra 5%), quincenal o mensual",
    "btn_res_estimate": "Obtener Cotización Residencial",

    // Who We Serve
    "serve_subtitle": "¿A Quién Servimos?",
    "serve_title": "Propiedades Que Limpiamos",
    "serve_desc": "Soluciones profesionales adaptadas para empresas, administradores de propiedades y familias.",
    "hub1_tag": "Lugares de Trabajo",
    "hub1_title": "Comercial y Oficinas",
    "hub1_desc": "Mantenimiento a medida para oficinas corporativas, comercios e instalaciones.",
    "hub1_chip1": "Oficinas Corporativas y Suites",
    "hub1_chip2": "Tiendas Minoristas y Boutiques",
    "hub1_chip3": "Clínicas, Estudios e Instalaciones",
    "hub2_tag": "Rotación y Alquileres",
    "hub2_title": "Administradores",
    "hub2_desc": "Limpiezas profundas y rápidas para rotación de rentas y contratos.",
    "hub2_chip1": "Entrada y Salida de Mudanza",
    "hub2_chip2": "Contratos Comerciales",
    "hub2_chip3": "Alquileres Temporales (Airbnb / VRBO)",
    "hub3_tag": "Espacios Residenciales",
    "hub3_title": "Hogares",
    "hub3_desc": "Cuidado para casas particulares, condominios y proyectos de remodelación.",
    "hub3_chip1": "Casas Unifamiliares y Condominios",
    "hub3_chip2": "Post-Construcción y Remodelaciones",
    "hub3_chip3": "Restauraciones Profundas de Temporada",

    // Custom Plans & Scheduling
    "plan_stage_tag": "Horarios Flexibles",
    "plan_stage_title": "Tu Espacio.<br><span class=\"text-highlight\">Tu Horario.</span><br>Tu Plan de Limpieza.",
    "plan_stage_desc": "Planes de limpieza personalizados sin contratos rígidos.",
    "chip_commercial": "Comercial Diario",
    "chip_night": "Turnos Nocturnos y Finde",
    "chip_weekly": "Semanal / Quincenal",
    "chip_monthly": "Mensual",
    "chip_onetime": "Mudanza / Una Sola Vez",
    "btn_custom_schedule": "Solicitar Horario Personalizado",
    "glass1_title": "Tamaño de Instalación",
    "glass1_desc": "Ajustado a tus metros cuadrados.",
    "glass2_title": "Comercial y Residencial",
    "glass2_desc": "Oficinas, comercios, mudanzas y casas.",
    "glass3_title": "Áreas Prioritarias",
    "glass3_desc": "Escritorios, baños y comedores.",
    "glass4_title": "Turnos Flexibles",
    "glass4_desc": "Personal de día o cuadrilla nocturna.",
    "glass5_title": "Atención Especial",
    "glass5_desc": "Zócalos, rejillas y repisas altas.",
    "glass6_title": "Servicios Adicionales",
    "glass6_desc": "Electrodomésticos, ventanas y juntas.",

    // Gallery / Results
    "gallery_subtitle": "Resultados Reales",
    "gallery_title": "Mira La Transformación",
    "gallery_desc": "Arrastra el control deslizante para ver cómo devolvemos el brillo y la higiene.",
    "ba_badge_before": "ANTES",
    "ba_badge_after": "DESPUÉS",
    "ba_helper_text": "Arrastra el control horizontalmente para inspeccionar",

    // Quality Section
    "quality_badge": "Estándar de Calidad",
    "quality_title": "Estándares Comerciales. Cero Esquinas Sin Limpiar.",
    "quality_desc": "Nos enfocamos en los detalles para mantener las instalaciones y hogares genuinamente impecables.",
    "quality_point_1": "Esquinas y Bordes",
    "quality_point_2": "Desinfección de Alto Contacto",
    "quality_point_3": "Lugares Difíciles de Alcanzar",
    "quality_point_4": "Pisos Impecables",
    "quality_point_5": "Todas las Estaciones de Trabajo",
    "quality_point_6": "Baños y Comedores",

    // Reviews
    "reviews_subtitle": "Comentarios de Clientes",
    "reviews_title": "De Confianza para Empresas, Administradores y Familias",
    "review1_text": "“Nuestras salas de juntas, comedor y baños quedan impecables todos los lunes por la mañana. Confiables, puntuales y muy atentos.”",
    "review1_author": "David R.",
    "review1_role": "Administrador de Oficinas Comerciales",
    "review2_text": "“Los contraté para una limpieza de mudanza y nos devolvieron el 100% de nuestro depósito. ¡Horno, gabinetes y zócalos impecables!”",
    "review2_author": "Jessica y Leo",
    "review2_role": "Limpieza de Mudanza",
    "review3_text": "“Clean and Stuff ha limpiado nuestra casa de forma quincenal durante meses. Su atención al detalle en zócalos y cocina es excepcional.”",
    "review3_author": "Sarah M.",
    "review3_role": "Cliente Residencial",

    // Featured Spaces Carousel
    "spaces_subtitle": "Un Vistazo al Interior",
    "spaces_desc": "Un vistazo a salas de exhibición exclusivas, suites comerciales y espacios ejecutivos bajo nuestro cuidado regular.",
    "space1_title": "Showroom y Lounge de Lujo",
    "space1_tag": "Exhibición y Lounge",
    "space1_desc": "Pulido de pisos de madera, vitrinas y cuidado artesanal",
    "space2_title": "Suite Ejecutiva de Exhibición",
    "space2_tag": "Instalación Privada",
    "space2_desc": "Detallado de escritorio brillante, paneles de madera y luces",
    "space3_title": "Baño de Lujo en Mármol",
    "space3_tag": "Desinfección y Piedra",
    "space3_desc": "Restauración de piedra profunda, azulejos y brillo de espejos",
    "space4_title": "Vitrinas y Exhibición Artesanal",
    "space4_tag": "Mantenimiento al Detalle",
    "space4_desc": "Vidrios sin huellas, accesorios de latón y cuidado meticuloso",

    // Service Area
    "servicearea_subtitle": "Servicio Local",
    "servicearea_title": "Área Metropolitana de Austin y Texas Central",
    "servicearea_desc": "Verifica si tu propiedad comercial o residencia está en nuestra área de servicio directo:",
    "servicearea_input_placeholder": "Ingresa Código Postal o Ciudad (ej. Austin, 78704)...",
    "servicearea_btn": "Verificar Área",

    // FAQs
    "faq_subtitle": "Preguntas Frecuentes",
    "faq_title": "Preguntas Frecuentes",
    "faq_q1": "¿Cuentan con licencia y seguro?",
    "faq_a1": "Sí. Clean and Stuff es una LLC registrada y cuenta con seguro de responsabilidad comercial completo para tu total tranquilidad.",
    "faq_q2": "¿Traen sus propios artículos de limpieza?",
    "faq_a2": "¡Sí! Nuestro equipo llega completamente equipado con productos profesionales, paños de microfibra y aspiradoras. Si prefieres productos específicos, los usamos con gusto.",
    "faq_q3": "¿Puedo enviarles un mensaje de texto para consultas o presupuestos?",
    "faq_a3": "¡Sí! Llámanos o escríbenos al <strong>512-351-6477</strong> para respuestas rápidas y fácil coordinación.",
    "faq_q4": "¿Qué horarios recurrentes ofrecen?",
    "faq_a4": "Ofrecemos limpiezas Semanales (ahorra 5%), Quincenales, Mensuales, de Una Sola Vez y mantenimiento comercial personalizado.",

    // Contact Form
    "contact_badge": "¿Listo para un Espacio Más Limpio?",
    "contact_title": "OBTÉN UNA COTIZACIÓN GRATIS",
    "contact_desc": "Llama, envía un texto o completa el formulario para recibir un presupuesto rápido para tu empresa, mudanza u hogar.",
    "contact_direct_title": "Llamada Directa o Texto",
    "contact_btn_call": "Llamar 512-351-6477",
    "contact_btn_text": "Enviar Mensaje",
    "contact_success": "¡Muchas gracias! Hemos recibido tu solicitud. ¡Te llamaremos o enviaremos un mensaje en breve!",
    "contact_label_name": "Nombre *",
    "contact_placeholder_name": "Tu Nombre / Nombre de la Empresa",
    "contact_label_phone": "Teléfono (Llamada/Texto) *",
    "contact_placeholder_phone": "512-000-0000",
    "contact_label_service": "Servicio *",
    "contact_opt_select": "Selecciona un Servicio",
    "contact_opt_com_off": "Comercial - Limpieza de Oficinas y Negocios",
    "contact_opt_com_fac": "Comercial - Mantenimiento de Instalaciones y Locales",
    "contact_opt_deep_clean": "Limpieza Profunda (Comercial u Hogar)",
    "contact_opt_move_turnover": "Limpieza de Entrada / Salida de Mudanza",
    "contact_opt_res_recurring": "Residencial - Mantenimiento Recurrente del Hogar",
    "contact_opt_res_std": "Residencial - Limpieza Estándar",
    "contact_opt_spec_post": "Especializada - Limpieza Post-Construcción",
    "contact_opt_spec_cust": "Plan de Limpieza Personalizado",
    "contact_label_property": "Ciudad / Código Postal / Metros Cuadrados",
    "contact_placeholder_property": "ej. Austin 78704 (2,500 sq ft)",
    "contact_label_notes": "Notas / Detalles del Alcance",
    "contact_placeholder_notes": "Tipo de instalación, cantidad de escritorios/habitaciones, horario preferido...",
    "contact_btn_submit": "Enviar Solicitud de Cotización",

    // Footer & Mobile Bar
    "footer_rights": "© 2026 Clean and Stuff Cleaning Services. Todos los derechos reservados.",
    "mobile_call": "Llamar",
    "mobile_text": "Texto",
    "mobile_quote": "Cotizar"
  }
};

let currentLang = localStorage.getItem("clean_stuff_lang") || "en";

function setLanguage(lang) {
  if (!translations[lang]) lang = "en";
  currentLang = lang;
  localStorage.setItem("clean_stuff_lang", lang);
  document.documentElement.lang = lang;

  // Update all elements with data-i18n attribute
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      if (translations[lang][key].includes("<") || translations[lang][key].includes("&")) {
        el.innerHTML = translations[lang][key];
      } else {
        el.textContent = translations[lang][key];
      }
    }
  });

  // Update form placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (translations[lang][key]) {
      el.setAttribute("placeholder", translations[lang][key]);
    }
  });

  // Update language switcher active badges
  document.querySelectorAll("[data-lang-opt]").forEach(badge => {
    if (badge.getAttribute("data-lang-opt") === lang) {
      badge.classList.add("active");
    } else {
      badge.classList.remove("active");
    }
  });

  // Update active hotspot detail box
  const activeHotspotBtn = document.querySelector(".why-hotspot-btn.active");
  const hotspotText = document.getElementById("why-hotspot-text");
  if (activeHotspotBtn && hotspotText) {
    const key = activeHotspotBtn.dataset.detailKey;
    if (key && translations[lang][key]) {
      hotspotText.textContent = translations[lang][key];
    }
  }

  // Update checklist drawer toggle buttons
  document.querySelectorAll(".checklist-toggle-btn").forEach(btn => {
    const panel = btn.closest(".sub-service-content") || btn.closest(".service-clean-card");
    const drawer = panel ? panel.querySelector(".checklist-drawer") : null;
    const isOpen = drawer && drawer.classList.contains("open");
    const span = btn.querySelector("span");
    if (span) {
      span.textContent = isOpen ? (translations[lang]["checklist_btn_hide"] || "Hide Checklist") : (translations[lang]["checklist_btn"] || "View Full Checklist");
    }
  });
}

// Initialize on DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  setLanguage(currentLang);

  // Setup click listener on language switcher buttons
  const langToggleBtns = document.querySelectorAll(".lang-switch-btn");
  langToggleBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const targetBadge = e.target.closest("[data-lang-opt]");
      if (targetBadge) {
        const selectedLang = targetBadge.getAttribute("data-lang-opt");
        setLanguage(selectedLang);
      } else {
        const nextLang = currentLang === "en" ? "es" : "en";
        setLanguage(nextLang);
      }
    });
  });
});

