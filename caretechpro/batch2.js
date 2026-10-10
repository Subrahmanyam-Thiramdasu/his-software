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

const wrapHtml = (title, content, extraScript = '') => {
  const newHead = head.replace('<title>CareTechPro | Premium Healthcare Technology Solutions</title>', '<title>' + title + ' | CareTechPro</title>');
  return '<!DOCTYPE html>\n<html lang="en">\n' + newHead + '\n<body>\n' + header + '\n<main>\n' + content + '\n</main>\n' + footer + '\n<script src="js/main.js"></script>\n<script src="js/animations.js"></script>\n' + extraScript + '\n</body>\n</html>';
};

// ==========================================
// PRICING PAGE
// ==========================================
const pricingContent = `
  <!-- Hero -->
  <section class="hero hero-inner bg-light" style="padding-bottom: 60px; text-align: center; background: radial-gradient(circle at 50% 50%, rgba(234, 245, 255, 0.8) 0%, transparent 80%);">
    <div class="container">
      <div class="eyebrow mb-4 mx-auto" style="display:inline-flex;">PRICING & PLANS</div>
      <h1 class="mb-4" style="max-width: 900px; margin-left: auto; margin-right: auto;">Flexible Solutions for <br><span class="text-blue">Every Healthcare Business</span></h1>
      <p class="text-lg mx-auto" style="max-width: 600px;">Because every healthcare facility is unique, we provide customized pricing plans based on your specific requirements and scale.</p>
    </div>
  </section>

  <!-- Pricing Tabs -->
  <section class="pricing-section bg-white" style="padding: 100px 0;">
    <div class="container">
      
      <div class="tabs-container mx-auto" style="display: flex; justify-content: center; gap: 12px; margin-bottom: 48px; flex-wrap: wrap;">
        <button class="btn btn-outline active pricing-tab-btn" data-target="tab-his">HIS Software</button>
        <button class="btn btn-outline pricing-tab-btn" data-target="tab-clinic">Clinic Management</button>
        <button class="btn btn-outline pricing-tab-btn" data-target="tab-lab">Laboratory Software</button>
        <button class="btn btn-outline pricing-tab-btn" data-target="tab-pharmacy">Pharmacy Software</button>
        <button class="btn btn-outline pricing-tab-btn" data-target="tab-web">Healthcare Websites</button>
      </div>

      <div class="pricing-tab-content active" id="tab-his" style="display: block;">
        <div class="grid grid-cols-2 gap-6 items-center">
          <div style="background: var(--color-bg-offwhite); padding: 48px; border-radius: 16px; border: 1px solid #eee;">
            <div class="eyebrow mb-3">CUSTOM QUOTE</div>
            <h3 class="mb-4">Hospital Information System</h3>
            <p class="mb-6 text-lg">Comprehensive management for multi-department hospitals. Pricing scales with bed capacity and required modules.</p>
            <div class="mb-6">
              <h5 class="mb-3">Pricing Factors:</h5>
              <ul class="feature-list">
                <li class="feature-item"><i data-lucide="check-circle" class="feature-icon"></i> Number of active beds</li>
                <li class="feature-item"><i data-lucide="check-circle" class="feature-icon"></i> Included modules (OPD, IPD, Billing, etc.)</li>
                <li class="feature-item"><i data-lucide="check-circle" class="feature-icon"></i> Integration requirements (Lab machines, PACS)</li>
              </ul>
            </div>
            <div class="flex gap-4">
              <a href="contact.html" class="btn btn-primary">Request Custom Quote</a>
              <a href="contact.html" class="btn btn-secondary">Book a Demo</a>
            </div>
          </div>
          <div>
            <h4 class="mb-4">Included in all HIS deployments:</h4>
            <div style="display: flex; flex-direction: column; gap: 16px;">
              <div style="padding: 16px; background: white; border: 1px solid #eee; border-radius: 8px; display: flex; gap: 16px; align-items: flex-start;">
                 <i data-lucide="shield" style="color: var(--color-brand-blue);"></i>
                 <div>
                   <h5 class="mb-1">Enterprise-Grade Security</h5>
                   <p class="text-sm opacity-80 mb-0">Role-based access control and daily encrypted backups.</p>
                 </div>
              </div>
              <div style="padding: 16px; background: white; border: 1px solid #eee; border-radius: 8px; display: flex; gap: 16px; align-items: flex-start;">
                 <i data-lucide="headphones" style="color: var(--color-brand-blue);"></i>
                 <div>
                   <h5 class="mb-1">24/7 Dedicated Support</h5>
                   <p class="text-sm opacity-80 mb-0">Direct access to our technical support team round the clock.</p>
                 </div>
              </div>
              <div style="padding: 16px; background: white; border: 1px solid #eee; border-radius: 8px; display: flex; gap: 16px; align-items: flex-start;">
                 <i data-lucide="graduation-cap" style="color: var(--color-brand-blue);"></i>
                 <div>
                   <h5 class="mb-1">Comprehensive Staff Training</h5>
                   <p class="text-sm opacity-80 mb-0">On-site or remote training sessions for all departments.</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Hidden tabs for others using similar layout but hidden by default -->
      <div class="pricing-tab-content" id="tab-clinic" style="display: none;">
         <div class="grid grid-cols-2 gap-6 items-center">
          <div style="background: var(--color-bg-offwhite); padding: 48px; border-radius: 16px; border: 1px solid #eee;">
            <div class="eyebrow mb-3">CUSTOM QUOTE</div>
            <h3 class="mb-4">Clinic Management</h3>
            <p class="mb-6 text-lg">Perfect for single-doctor clinics to multi-specialty polyclinics.</p>
            <div class="flex gap-4">
              <a href="contact.html" class="btn btn-primary" style="background: var(--color-accent-teal);">Request Custom Quote</a>
              <a href="contact.html" class="btn btn-secondary">Book a Demo</a>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Add other tabs easily... -->

    </div>
  </section>

  <!-- Deployment Options -->
  <section class="deployment-section bg-light" style="padding: 100px 0;">
    <div class="container">
      <div class="text-center mb-6">
        <h2>Deployment Options</h2>
        <p class="text-lg">Choose the architecture that best fits your hospital's IT policies.</p>
      </div>
      <div class="grid grid-cols-2 gap-6">
        <div style="background: white; padding: 40px; border-radius: 12px; border: 1px solid #eee;">
           <i data-lucide="cloud" style="width: 48px; height: 48px; color: var(--color-brand-blue); margin-bottom: 24px;"></i>
           <h3 class="mb-3">Cloud Hosted (SaaS)</h3>
           <p class="mb-4">We host and manage the software on our secure cloud servers. Best for facilities without a dedicated IT team.</p>
           <ul class="feature-list">
             <li class="feature-item"><i data-lucide="check"></i> Zero hardware investment</li>
             <li class="feature-item"><i data-lucide="check"></i> Automatic updates</li>
             <li class="feature-item"><i data-lucide="check"></i> Access from anywhere</li>
           </ul>
        </div>
        <div style="background: white; padding: 40px; border-radius: 12px; border: 1px solid #eee;">
           <i data-lucide="server" style="width: 48px; height: 48px; color: var(--color-brand-blue); margin-bottom: 24px;"></i>
           <h3 class="mb-3">On-Premise Server</h3>
           <p class="mb-4">The software is installed directly on your hospital's local servers. Best for strict data compliance policies.</p>
           <ul class="feature-list">
             <li class="feature-item"><i data-lucide="check"></i> Total data control</li>
             <li class="feature-item"><i data-lucide="check"></i> Works without internet</li>
             <li class="feature-item"><i data-lucide="check"></i> Highly customizable</li>
           </ul>
        </div>
      </div>
    </div>
  </section>
  
  <!-- FAQs -->
  <section class="faq-section bg-white" style="padding: 100px 0;">
    <div class="container" style="max-width: 800px;">
      <h2 class="text-center mb-6">Frequently Asked Questions</h2>
      <div style="border: 1px solid #eee; border-radius: 12px; overflow: hidden;">
         <div style="padding: 24px; border-bottom: 1px solid #eee; background: #fcfcfc;">
            <h4 class="mb-2">Are there any hidden costs?</h4>
            <p class="mb-0 opacity-80 text-sm">No. Our quotations clearly outline all costs including software licensing, implementation, training, and annual maintenance charges (AMC).</p>
         </div>
         <div style="padding: 24px; border-bottom: 1px solid #eee; background: #fcfcfc;">
            <h4 class="mb-2">Do you provide data migration from our old software?</h4>
            <p class="mb-0 opacity-80 text-sm">Yes, we offer secure data migration services to ensure your existing patient records are safely transferred to our system.</p>
         </div>
      </div>
    </div>
  </section>
`;

const pricingScript = `
<script>
  document.querySelectorAll('.pricing-tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.pricing-tab-btn').forEach(b => {
        b.classList.remove('active');
        b.style.background = 'transparent';
        b.style.color = 'var(--color-primary)';
      });
      e.target.classList.add('active');
      e.target.style.background = 'var(--color-primary)';
      e.target.style.color = 'white';
      
      document.querySelectorAll('.pricing-tab-content').forEach(content => {
        content.style.display = 'none';
      });
      const targetId = e.target.getAttribute('data-target');
      const targetContent = document.getElementById(targetId);
      if(targetContent) {
        targetContent.style.display = 'block';
        gsap.fromTo(targetContent, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.4 });
      }
    });
  });
</script>
`;

fs.writeFileSync(path.join(baseDir, 'pricing.html'), wrapHtml('Pricing', pricingContent, pricingScript), 'utf8');

// ==========================================
// CONTACT PAGE
// ==========================================
const contactContent = `
  <!-- Hero -->
  <section class="hero hero-inner bg-light" style="padding-bottom: 60px; text-align: center; background: radial-gradient(circle at 50% 50%, rgba(234, 245, 255, 0.8) 0%, transparent 80%);">
    <div class="container">
      <div class="eyebrow mb-4 mx-auto" style="display:inline-flex;">CONTACT US</div>
      <h1 class="mb-4" style="max-width: 900px; margin-left: auto; margin-right: auto;">Let's Build Something Better <br><span class="text-blue">for Healthcare</span></h1>
    </div>
  </section>

  <!-- Contact Form & Info -->
  <section class="contact-section bg-white" style="padding: 100px 0;">
    <div class="container grid grid-cols-2 gap-6">
      
      <!-- Info Left -->
      <div style="padding-right: 40px;">
        <h2 class="mb-4">Get in touch with our team</h2>
        <p class="text-lg mb-6 opacity-80">Whether you want to request a demo, get a custom quote, or need technical support, our team is ready to help.</p>
        
        <div style="display: flex; flex-direction: column; gap: 32px; margin-top: 48px;">
          <div style="display: flex; gap: 24px;">
            <div style="width: 56px; height: 56px; background: #eaf5ff; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: var(--color-brand-blue); flex-shrink: 0;">
               <i data-lucide="phone"></i>
            </div>
            <div>
              <h4 class="mb-1">Sales & Consultation</h4>
              <p class="mb-1 opacity-80">Call us directly to speak with a healthcare IT specialist.</p>
              <a href="tel:+15551234567" style="font-weight: 600; color: var(--color-primary);">+1 (555) 123-4567</a>
            </div>
          </div>
          
          <div style="display: flex; gap: 24px;">
            <div style="width: 56px; height: 56px; background: #eaf5ff; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: var(--color-brand-blue); flex-shrink: 0;">
               <i data-lucide="mail"></i>
            </div>
            <div>
              <h4 class="mb-1">Email Enquiries</h4>
              <p class="mb-1 opacity-80">For detailed RFPs and business proposals.</p>
              <a href="mailto:sales@caretechpro.com" style="font-weight: 600; color: var(--color-primary);">sales@caretechpro.com</a>
            </div>
          </div>
          
          <div style="display: flex; gap: 24px;">
            <div style="width: 56px; height: 56px; background: #eaf5ff; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: var(--color-brand-blue); flex-shrink: 0;">
               <i data-lucide="map-pin"></i>
            </div>
            <div>
              <h4 class="mb-1">Headquarters</h4>
              <p class="mb-1 opacity-80">123 Health Tech Blvd, Suite 100<br>New York, NY 10001, USA</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Form Right -->
      <div style="background: white; padding: 48px; border-radius: 16px; box-shadow: 0 20px 40px rgba(0,0,0,0.08); border: 1px solid #eee;">
        <h3 class="mb-4 text-center">Send a Message</h3>
        <form id="contactPageForm" onsubmit="handleContactSubmit(event)">
          <div class="grid grid-cols-2 gap-3">
            <div class="form-group">
              <label class="form-label">Full Name*</label>
              <input type="text" class="form-control" required placeholder="Dr. Jane Smith">
            </div>
            <div class="form-group">
              <label class="form-label">Phone Number*</label>
              <input type="tel" class="form-control" required placeholder="+1 234 567 890">
            </div>
          </div>
          
          <div class="grid grid-cols-2 gap-3">
            <div class="form-group">
              <label class="form-label">Email Address*</label>
              <input type="email" class="form-control" required placeholder="jane@hospital.com">
            </div>
            <div class="form-group">
              <label class="form-label">Hospital / Organization*</label>
              <input type="text" class="form-control" required placeholder="City General Hospital">
            </div>
          </div>
          
          <div class="form-group">
            <label class="form-label">Interested Solution*</label>
            <select class="form-control" required>
              <option value="" disabled selected>Select an option</option>
              <option value="his">HIS Software</option>
              <option value="clinic">Clinic Management Software</option>
              <option value="lab">Laboratory Software</option>
              <option value="pharmacy">Pharmacy Software</option>
              <option value="website">Healthcare Website Development</option>
              <option value="other">Other Enquiry</option>
            </select>
          </div>
          
          <div class="form-group">
            <label class="form-label">Message (Optional)</label>
            <textarea class="form-control" rows="4" placeholder="Tell us a bit about your requirements..."></textarea>
          </div>
          
          <div class="form-group mt-4">
            <button type="submit" id="contactSubmitBtn" class="btn btn-primary" style="width: 100%;">Submit Request <i data-lucide="send" class="btn-icon"></i></button>
          </div>
          <div id="contactFormStatus" style="margin-top: 16px; text-align: center; font-weight: 500; display: none;"></div>
        </form>
      </div>

    </div>
  </section>
`;

const contactScript = `
<script>
  function handleContactSubmit(e) {
    e.preventDefault();
    const btn = document.getElementById('contactSubmitBtn');
    const status = document.getElementById('contactFormStatus');
    
    btn.innerHTML = 'Submitting... <i data-lucide="loader" class="btn-icon"></i>';
    btn.disabled = true;
    btn.style.opacity = '0.7';
    lucide.createIcons();
    
    // Simulate backend submission requirement
    setTimeout(() => {
      btn.innerHTML = 'Submit Request <i data-lucide="send" class="btn-icon"></i>';
      btn.disabled = false;
      btn.style.opacity = '1';
      lucide.createIcons();
      
      status.style.display = 'block';
      status.style.color = 'var(--color-brand-blue)';
      status.innerText = 'Request submitted. Awaiting backend API integration for final processing.';
      
    }, 1500);
  }
</script>
`;

fs.writeFileSync(path.join(baseDir, 'contact.html'), wrapHtml('Contact', contactContent, contactScript), 'utf8');

console.log('Batch 2 complete.');
