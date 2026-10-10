const fs = require('fs');
const path = require('path');

const baseDir = 'd:/Work/his/caretechpro';

const indexHtml = fs.readFileSync(path.join(baseDir, 'index.html'), 'utf8');

const headStart = indexHtml.indexOf('<head>');
const headEnd = indexHtml.indexOf('</head>') + 7;
const head = indexHtml.substring(headStart, headEnd);

const headerStart = indexHtml.indexOf('<header id="header">');
const headerEnd = indexHtml.indexOf('</header>') + 9;
let header = indexHtml.substring(headerStart, headerEnd);

const footerStart = indexHtml.indexOf('<footer>');
const footerEnd = indexHtml.indexOf('</footer>') + 9;
const footer = indexHtml.substring(footerStart, footerEnd);

header = header.replace(/href="#home"/g, 'href="index.html"');
header = header.replace(/href="#his-software"/g, 'href="solutions.html#his"');
header = header.replace(/href="#websites"/g, 'href="solutions.html#websites"');
header = header.replace(/href="#solutions"/g, 'href="solutions.html"');
header = header.replace(/href="#pricing"/g, 'href="pricing.html"');
header = header.replace(/href="#about"/g, 'href="about.html"');
header = header.replace(/href="#contact"/g, 'href="contact.html"');

let updatedIndexHtml = indexHtml.substring(0, headerStart) + header + indexHtml.substring(headerEnd);
fs.writeFileSync(path.join(baseDir, 'index.html'), updatedIndexHtml, 'utf8');

const wrapHtml = (title, content) => {
  const newHead = head.replace('<title>CareTechPro | Premium Healthcare Technology Solutions</title>', '<title>' + title + ' | CareTechPro</title>');
  return '<!DOCTYPE html>\n<html lang="en">\n' + newHead + '\n<body>\n' + header + '\n<main>\n' + content + '\n</main>\n' + footer + '\n<script src="js/main.js"></script>\n<script src="js/animations.js"></script>\n</body>\n</html>';
};

const aboutContent = `
  <!-- 1. Cinematic Hero -->
  <section class="hero hero-inner bg-light" style="padding-bottom: 60px; text-align: center; background: radial-gradient(circle at 50% 50%, rgba(234, 245, 255, 0.8) 0%, transparent 80%);">
    <div class="container">
      <div class="eyebrow mb-4 mx-auto" style="display:inline-flex;">ABOUT CARETECHPRO</div>
      <h1 class="mb-4" style="max-width: 800px; margin-left: auto; margin-right: auto;">Technology Built Around <span class="text-blue">Better Healthcare</span></h1>
      <p class="text-lg mx-auto" style="max-width: 600px;">We empower healthcare providers with premium digital solutions designed to improve patient care, streamline operations, and grow modern healthcare brands.</p>
    </div>
  </section>

  <!-- 2. Company Intro -->
  <section class="about-intro bg-white" style="padding: 100px 0;">
    <div class="container grid grid-cols-2 gap-6 items-center">
      <div class="about-visual" style="border-radius: 12px; overflow: hidden; height: 400px; background: #eaf5ff; position: relative;">
        <!-- CSS Mockup representing healthcare tech -->
        <div style="position:absolute; top:20px; left:20px; right:20px; bottom:20px; border-radius: 8px; background: white; box-shadow: 0 10px 30px rgba(0,0,0,0.1); border: 1px solid #eee; display: flex; flex-direction: column;">
          <div style="height: 40px; border-bottom: 1px solid #eee; display: flex; align-items:center; padding: 0 16px;">
             <div style="width: 12px; height: 12px; border-radius: 50%; background: #ff5f56; margin-right: 6px;"></div>
             <div style="width: 12px; height: 12px; border-radius: 50%; background: #ffbd2e; margin-right: 6px;"></div>
             <div style="width: 12px; height: 12px; border-radius: 50%; background: #27c93f;"></div>
          </div>
          <div style="flex:1; display:flex; padding: 16px; gap: 16px;">
             <div style="flex:1; background: #f8fbff; border-radius: 6px;"></div>
             <div style="flex:2; display: flex; flex-direction: column; gap: 12px;">
                <div style="height: 40px; background: #f0f0f0; border-radius: 4px;"></div>
                <div style="flex:1; background: #f8fbff; border-radius: 4px;"></div>
             </div>
          </div>
        </div>
      </div>
      <div>
        <h2>Empowering the Future of <span class="text-blue">Medicine</span></h2>
        <p class="mb-4">CareTechPro was founded with a singular vision: to bridge the gap between advanced technology and everyday healthcare operations.</p>
        <p>By providing sophisticated Hospital Information Systems alongside beautifully crafted healthcare websites, we deliver complete digital transformations that allow doctors to focus on what matters most — their patients.</p>
      </div>
    </div>
  </section>

  <!-- 3. Mission & Vision -->
  <section class="mission-vision bg-light" style="padding: 100px 0;">
    <div class="container grid grid-cols-2 gap-6">
      <div class="mission-card" style="background: white; padding: 48px; border-radius: 16px; box-shadow: 0 10px 30px rgba(0,0,0,0.05); border-top: 4px solid var(--color-brand-blue);">
        <h3 class="mb-4">Our Mission</h3>
        <p>To provide intuitive, secure, and comprehensive digital solutions that elevate the standard of care in medical facilities of all sizes.</p>
      </div>
      <div class="vision-card" style="background: white; padding: 48px; border-radius: 16px; box-shadow: 0 10px 30px rgba(0,0,0,0.05); border-top: 4px solid var(--color-accent-teal);">
        <h3 class="mb-4">Our Vision</h3>
        <p>To be the trusted technology partner for healthcare providers globally, driving innovation and efficiency across the entire healthcare ecosystem.</p>
      </div>
    </div>
  </section>

  <!-- 4 & 5 & 6. Approach, Solutions, Philosophy -->
  <section class="approach-section bg-white" style="padding: 100px 0;">
    <div class="container text-center mb-6">
      <div class="eyebrow mb-3">OUR APPROACH</div>
      <h2>How We Deliver <span class="text-blue">Excellence</span></h2>
    </div>
    <div class="container grid grid-cols-3 gap-6">
      <div class="approach-card text-center" style="padding: 32px; background: #fcfcfc; border-radius: 12px; border: 1px solid #eee;">
        <div style="width: 64px; height: 64px; background: #eaf5ff; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 24px; color: var(--color-brand-blue);">
          <i data-lucide="shield"></i>
        </div>
        <h4 class="mb-3">Security First</h4>
        <p class="text-sm">We build our systems with uncompromising data security and privacy standards at the core.</p>
      </div>
      <div class="approach-card text-center" style="padding: 32px; background: #fcfcfc; border-radius: 12px; border: 1px solid #eee;">
        <div style="width: 64px; height: 64px; background: #eaf5ff; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 24px; color: var(--color-brand-blue);">
          <i data-lucide="layout"></i>
        </div>
        <h4 class="mb-3">Intuitive Design</h4>
        <p class="text-sm">Complex systems shouldn't require complex training. We prioritize user-friendly interfaces.</p>
      </div>
      <div class="approach-card text-center" style="padding: 32px; background: #fcfcfc; border-radius: 12px; border: 1px solid #eee;">
        <div style="width: 64px; height: 64px; background: #eaf5ff; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 24px; color: var(--color-brand-blue);">
          <i data-lucide="users"></i>
        </div>
        <h4 class="mb-3">Partnership</h4>
        <p class="text-sm">We view our clients as partners. Your successful implementation is our success.</p>
      </div>
    </div>
  </section>

  <!-- 7. CTA -->
  <section class="cta-section" style="padding: 100px 0; background: var(--color-primary); color: white; text-align: center;">
    <div class="container">
      <h2 style="color: white;" class="mb-4">Ready to transform your healthcare facility?</h2>
      <p class="mb-6 text-lg" style="opacity: 0.8; max-width: 600px; margin-left: auto; margin-right: auto;">Schedule a consultation with our technology experts to discuss your specific requirements.</p>
      <a href="contact.html" class="btn" style="background: white; color: var(--color-primary);">Get in Touch</a>
    </div>
  </section>
`;

fs.writeFileSync(path.join(baseDir, 'about.html'), wrapHtml('About Us', aboutContent), 'utf8');

const solutionsContent = `
  <!-- 1. Hero -->
  <section class="hero hero-inner bg-light" style="padding-bottom: 60px; text-align: center; background: radial-gradient(circle at 50% 50%, rgba(234, 245, 255, 0.8) 0%, transparent 80%);">
    <div class="container">
      <div class="eyebrow mb-4 mx-auto" style="display:inline-flex;">OUR SOLUTIONS</div>
      <h1 class="mb-4" style="max-width: 900px; margin-left: auto; margin-right: auto;">One Technology Partner. <br><span class="text-blue">Complete Healthcare Solutions.</span></h1>
      <p class="text-lg mx-auto" style="max-width: 600px;">Explore our comprehensive suite of software and digital services designed for modern healthcare.</p>
    </div>
  </section>

  <!-- Interactive Selector -->
  <div class="solutions-nav sticky-nav" style="position: sticky; top: 80px; background: white; z-index: 90; border-bottom: 1px solid #eee; padding: 16px 0;">
    <div class="container" style="display: flex; justify-content: center; gap: 24px; flex-wrap: wrap;">
      <a href="#his" class="btn btn-sm btn-outline" style="border-radius: 20px;">HIS Software</a>
      <a href="#clinic" class="btn btn-sm btn-outline" style="border-radius: 20px;">Clinic Management</a>
      <a href="#lab" class="btn btn-sm btn-outline" style="border-radius: 20px;">Laboratory Software</a>
      <a href="#pharmacy" class="btn btn-sm btn-outline" style="border-radius: 20px;">Pharmacy Software</a>
      <a href="#websites" class="btn btn-sm btn-outline" style="border-radius: 20px;">Healthcare Websites</a>
    </div>
  </div>

  <!-- Product 1: HIS -->
  <section id="his" class="product-showcase bg-white" style="padding: 120px 0;">
    <div class="container grid grid-cols-2 gap-6 items-center">
      <div>
        <div class="eyebrow mb-2">ENTERPRISE SOFTWARE</div>
        <h2 class="mb-4">Hospital Information System</h2>
        <p class="mb-4 text-lg">A robust, scalable platform to manage every department in your hospital from a single interface.</p>
        <ul class="feature-list mb-6">
          <li class="feature-item"><i data-lucide="check-circle" class="feature-icon"></i> <span>End-to-end OPD & IPD workflow</span></li>
          <li class="feature-item"><i data-lucide="check-circle" class="feature-icon"></i> <span>Automated billing and insurance claims</span></li>
          <li class="feature-item"><i data-lucide="check-circle" class="feature-icon"></i> <span>Electronic Medical Records (EMR)</span></li>
        </ul>
        <a href="contact.html" class="btn btn-primary">Book HIS Demo</a>
      </div>
      <div class="showcase-visual-container" style="height: 400px; background: #f8fbff; border-radius: 16px; border: 1px solid #eee; display: flex; align-items: center; justify-content: center;">
         <!-- CSS mockup -->
         <div style="width: 80%; height: 70%; background: white; border-radius: 8px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); padding: 16px;">
            <div style="height: 20px; width: 40%; background: #e0e0e0; margin-bottom: 24px; border-radius: 4px;"></div>
            <div style="display:flex; gap: 16px; margin-bottom: 24px;">
               <div style="flex:1; height: 60px; background: #eaf5ff; border-radius: 4px;"></div>
               <div style="flex:1; height: 60px; background: #eaf5ff; border-radius: 4px;"></div>
               <div style="flex:1; height: 60px; background: #eaf5ff; border-radius: 4px;"></div>
            </div>
            <div style="height: 100px; background: #f0f0f0; border-radius: 4px;"></div>
         </div>
      </div>
    </div>
  </section>

  <!-- Product 2: Clinic -->
  <section id="clinic" class="product-showcase bg-light" style="padding: 120px 0;">
    <div class="container grid grid-cols-2 gap-6 items-center">
      <div class="order-2-mobile showcase-visual-container" style="height: 400px; background: white; border-radius: 16px; border: 1px solid #eee; display: flex; align-items: center; justify-content: center;">
         <!-- CSS mockup -->
         <div style="width: 70%; height: 80%; background: #fcfcfc; border-radius: 8px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); padding: 16px;">
            <div style="height: 40px; background: #00b7b3; margin-bottom: 16px; border-radius: 4px; opacity: 0.8;"></div>
            <div style="height: 30px; background: #f0f0f0; margin-bottom: 8px; border-radius: 4px;"></div>
            <div style="height: 30px; background: #f0f0f0; margin-bottom: 8px; border-radius: 4px;"></div>
            <div style="height: 30px; background: #f0f0f0; margin-bottom: 8px; border-radius: 4px;"></div>
         </div>
      </div>
      <div class="order-1-mobile">
        <div class="eyebrow mb-2">PRACTICE MANAGEMENT</div>
        <h2 class="mb-4">Clinic Management Software</h2>
        <p class="mb-4 text-lg">Simplify your daily clinic operations, manage appointments, and keep digital patient records securely.</p>
        <ul class="feature-list mb-6">
          <li class="feature-item"><i data-lucide="check-circle" class="feature-icon" style="color:var(--color-accent-teal);"></i> <span>Smart appointment scheduling</span></li>
          <li class="feature-item"><i data-lucide="check-circle" class="feature-icon" style="color:var(--color-accent-teal);"></i> <span>Quick prescription generation</span></li>
          <li class="feature-item"><i data-lucide="check-circle" class="feature-icon" style="color:var(--color-accent-teal);"></i> <span>Patient queue management</span></li>
        </ul>
        <a href="contact.html" class="btn btn-primary" style="background: var(--color-accent-teal);">Book Clinic Demo</a>
      </div>
    </div>
  </section>

  <!-- Product 3: Lab -->
  <section id="lab" class="product-showcase bg-white" style="padding: 120px 0;">
    <div class="container grid grid-cols-2 gap-6 items-center">
      <div>
        <div class="eyebrow mb-2">DIAGNOSTICS</div>
        <h2 class="mb-4">Laboratory Management</h2>
        <p class="mb-4 text-lg">Streamline your diagnostic workflows from sample collection to automated report generation.</p>
        <ul class="feature-list mb-6">
          <li class="feature-item"><i data-lucide="check-circle" class="feature-icon" style="color:var(--color-accent-indigo);"></i> <span>Barcode sample tracking</span></li>
          <li class="feature-item"><i data-lucide="check-circle" class="feature-icon" style="color:var(--color-accent-indigo);"></i> <span>Analyzer machine integration</span></li>
          <li class="feature-item"><i data-lucide="check-circle" class="feature-icon" style="color:var(--color-accent-indigo);"></i> <span>Automated report delivery</span></li>
        </ul>
        <a href="contact.html" class="btn btn-primary" style="background: var(--color-accent-indigo);">Book Lab Demo</a>
      </div>
      <div class="showcase-visual-container" style="height: 400px; background: #f8fbff; border-radius: 16px; border: 1px solid #eee; display: flex; align-items: center; justify-content: center;">
         <!-- CSS mockup -->
         <div style="width: 80%; height: 70%; background: white; border-radius: 8px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); padding: 16px; display: grid; grid-template-columns: 1fr 2fr; gap: 16px;">
            <div style="background: #eaf5ff; border-radius: 4px;"></div>
            <div style="display:flex; flex-direction:column; gap: 12px;">
              <div style="height: 30px; background: #e0e0e0; border-radius: 4px;"></div>
              <div style="height: 20px; background: #f0f0f0; border-radius: 4px;"></div>
              <div style="height: 20px; background: #f0f0f0; border-radius: 4px;"></div>
              <div style="flex:1; background: #e8e8e8; border-radius: 4px;"></div>
            </div>
         </div>
      </div>
    </div>
  </section>

  <!-- Product 4: Pharmacy -->
  <section id="pharmacy" class="product-showcase bg-light" style="padding: 120px 0;">
    <div class="container grid grid-cols-2 gap-6 items-center">
      <div class="order-2-mobile showcase-visual-container" style="height: 400px; background: white; border-radius: 16px; border: 1px solid #eee; display: flex; align-items: center; justify-content: center;">
         <!-- CSS mockup -->
         <div style="width: 80%; height: 60%; background: white; border-radius: 8px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); padding: 16px; border: 1px solid #f0f0f0;">
            <div style="height: 30px; width: 30%; background: #ff7e4b; margin-bottom: 24px; border-radius: 4px; opacity: 0.8;"></div>
            <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px;">
               <div style="height: 80px; background: #fff5f0; border-radius: 4px;"></div>
               <div style="height: 80px; background: #fff5f0; border-radius: 4px;"></div>
               <div style="height: 80px; background: #fff5f0; border-radius: 4px;"></div>
            </div>
         </div>
      </div>
      <div class="order-1-mobile">
        <div class="eyebrow mb-2">INVENTORY & SALES</div>
        <h2 class="mb-4">Pharmacy Management</h2>
        <p class="mb-4 text-lg">Maintain optimal stock levels, manage expiry dates, and process sales quickly.</p>
        <ul class="feature-list mb-6">
          <li class="feature-item"><i data-lucide="check-circle" class="feature-icon" style="color:var(--color-accent-orange);"></i> <span>Real-time inventory tracking</span></li>
          <li class="feature-item"><i data-lucide="check-circle" class="feature-icon" style="color:var(--color-accent-orange);"></i> <span>Expiry and low stock alerts</span></li>
          <li class="feature-item"><i data-lucide="check-circle" class="feature-icon" style="color:var(--color-accent-orange);"></i> <span>Fast POS billing interface</span></li>
        </ul>
        <a href="contact.html" class="btn btn-primary" style="background: var(--color-accent-orange);">Book Pharmacy Demo</a>
      </div>
    </div>
  </section>

  <!-- Product 5: Websites -->
  <section id="websites" class="product-showcase bg-white" style="padding: 120px 0;">
    <div class="container grid grid-cols-2 gap-6 items-center">
      <div>
        <div class="eyebrow mb-2">DIGITAL PRESENCE</div>
        <h2 class="mb-4">Healthcare Website Development</h2>
        <p class="mb-4 text-lg">Transform your online presence with beautifully designed, mobile-first websites built specifically for healthcare brands.</p>
        <ul class="feature-list mb-6">
          <li class="feature-item"><i data-lucide="check-circle" class="feature-icon" style="color:var(--color-accent-rose);"></i> <span>Premium custom designs</span></li>
          <li class="feature-item"><i data-lucide="check-circle" class="feature-icon" style="color:var(--color-accent-rose);"></i> <span>Online appointment integration</span></li>
          <li class="feature-item"><i data-lucide="check-circle" class="feature-icon" style="color:var(--color-accent-rose);"></i> <span>SEO optimization for local search</span></li>
        </ul>
        <a href="contact.html" class="btn btn-primary" style="background: var(--color-accent-rose);">Request Website Quote</a>
      </div>
      <div class="showcase-visual-container" style="height: 400px; background: #fff5f8; border-radius: 16px; border: 1px solid #eee; display: flex; align-items: center; justify-content: center;">
         <!-- CSS mockup -->
         <div style="width: 70%; height: 90%; background: white; border-radius: 8px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); display: flex; flex-direction: column; overflow: hidden;">
            <div style="height: 60px; background: #10213A; display: flex; align-items: center; justify-content: space-between; padding: 0 16px;">
               <div style="width: 80px; height: 16px; background: rgba(255,255,255,0.2); border-radius: 2px;"></div>
               <div style="width: 60px; height: 24px; background: #e11d48; border-radius: 4px;"></div>
            </div>
            <div style="flex:1; padding: 16px; display: flex; flex-direction: column; gap: 16px;">
               <div style="height: 100px; background: #ffe4e6; border-radius: 4px;"></div>
               <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
                 <div style="height: 80px; background: #f0f0f0; border-radius: 4px;"></div>
                 <div style="height: 80px; background: #f0f0f0; border-radius: 4px;"></div>
               </div>
            </div>
         </div>
      </div>
    </div>
  </section>
`;

fs.writeFileSync(path.join(baseDir, 'solutions.html'), wrapHtml('All Solutions', solutionsContent), 'utf8');

console.log('Batch 1 complete.');
