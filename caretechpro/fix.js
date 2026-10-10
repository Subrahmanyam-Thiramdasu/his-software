const fs = require('fs');
const path = require('path');

const baseDir = 'd:/Work/his/caretechpro';

// Read index.html
let indexHtml = fs.readFileSync(path.join(baseDir, 'index.html'), 'utf8');

// 1. Fix Demo Section Text Contrast
indexHtml = indexHtml.replace(
  '<h4 class="mb-1">Free Live Demo</h4>',
  '<h4 class="mb-1" style="color: white;">Free Live Demo</h4>'
);
indexHtml = indexHtml.replace(
  '<h4 class="mb-1">Personalized Consultation</h4>',
  '<h4 class="mb-1" style="color: white;">Personalized Consultation</h4>'
);
indexHtml = indexHtml.replace(
  '<h4 class="mb-1">Quick Response</h4>',
  '<h4 class="mb-1" style="color: white;">Quick Response</h4>'
);
indexHtml = indexHtml.replace(
  '<p class="opacity-70 text-sm">No commitment required</p>',
  '<p class="opacity-70 text-sm" style="color: rgba(255,255,255,0.7);">No commitment required</p>'
);
indexHtml = indexHtml.replace(
  '<p class="opacity-70 text-sm">Based on your requirements</p>',
  '<p class="opacity-70 text-sm" style="color: rgba(255,255,255,0.7);">Based on your requirements</p>'
);
indexHtml = indexHtml.replace(
  '<p class="opacity-70 text-sm">Our team will contact you shortly</p>',
  '<p class="opacity-70 text-sm" style="color: rgba(255,255,255,0.7);">Our team will contact you shortly</p>'
);

// 2. Fix HIS Dashboard Mockup
const hisMockup = `
<div style="background: white; width: 100%; height: 100%; border-radius: 8px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); display: flex; flex-direction: column; overflow: hidden; border: 1px solid #e0e0e0;">
  <!-- Top Nav -->
  <div style="height: 50px; border-bottom: 1px solid #eee; display: flex; align-items: center; padding: 0 20px; justify-content: space-between;">
    <div style="display: flex; align-items: center; gap: 10px;">
      <div style="width: 24px; height: 24px; background: #087cff; border-radius: 4px;"></div>
      <div style="font-weight: 600; font-size: 14px; color: #10213A;">MedDashboard</div>
    </div>
    <div style="display: flex; gap: 12px;">
      <div style="width: 32px; height: 32px; border-radius: 50%; background: #f0f0f0;"></div>
      <div style="width: 32px; height: 32px; border-radius: 50%; background: #087cff;"></div>
    </div>
  </div>
  <!-- Main Body -->
  <div style="display: flex; flex: 1;">
    <!-- Sidebar -->
    <div style="width: 160px; border-right: 1px solid #eee; padding: 16px 0; background: #f8fbff;">
      <div style="padding: 8px 16px; margin: 0 8px 8px; background: rgba(8, 124, 255, 0.1); color: #087cff; border-radius: 6px; font-size: 12px; font-weight: 600;">Dashboard</div>
      <div style="padding: 8px 16px; margin: 0 8px 8px; color: #61738B; font-size: 12px;">Patients</div>
      <div style="padding: 8px 16px; margin: 0 8px 8px; color: #61738B; font-size: 12px;">OPD / IPD</div>
      <div style="padding: 8px 16px; margin: 0 8px 8px; color: #61738B; font-size: 12px;">Billing</div>
      <div style="padding: 8px 16px; margin: 0 8px 8px; color: #61738B; font-size: 12px;">Pharmacy</div>
    </div>
    <!-- Content -->
    <div style="flex: 1; padding: 20px; background: #fcfcfc;">
      <div style="font-size: 16px; font-weight: 600; margin-bottom: 16px; color: #10213A;">Overview</div>
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 24px;">
        <div style="background: white; border: 1px solid #eee; padding: 12px; border-radius: 8px;">
          <div style="font-size: 11px; color: #61738B; margin-bottom: 4px;">Total Patients</div>
          <div style="font-size: 20px; font-weight: 700; color: #10213A;">1,284</div>
        </div>
        <div style="background: white; border: 1px solid #eee; padding: 12px; border-radius: 8px;">
          <div style="font-size: 11px; color: #61738B; margin-bottom: 4px;">OPD Today</div>
          <div style="font-size: 20px; font-weight: 700; color: #00B7B3;">86</div>
        </div>
        <div style="background: white; border: 1px solid #eee; padding: 12px; border-radius: 8px;">
          <div style="font-size: 11px; color: #61738B; margin-bottom: 4px;">Available Beds</div>
          <div style="font-size: 20px; font-weight: 700; color: #FF7E4B;">24</div>
        </div>
      </div>
      <div style="background: white; border: 1px solid #eee; height: 120px; border-radius: 8px; padding: 12px;">
         <div style="font-size: 12px; font-weight: 600; color: #10213A; margin-bottom: 12px;">Patient Flow</div>
         <div style="display: flex; align-items: flex-end; gap: 8px; height: 70px;">
            <div style="flex: 1; background: #087cff; height: 40%; border-radius: 4px 4px 0 0;"></div>
            <div style="flex: 1; background: #087cff; height: 60%; border-radius: 4px 4px 0 0;"></div>
            <div style="flex: 1; background: #087cff; height: 30%; border-radius: 4px 4px 0 0;"></div>
            <div style="flex: 1; background: #087cff; height: 80%; border-radius: 4px 4px 0 0;"></div>
            <div style="flex: 1; background: #087cff; height: 50%; border-radius: 4px 4px 0 0;"></div>
            <div style="flex: 1; background: #087cff; height: 90%; border-radius: 4px 4px 0 0;"></div>
            <div style="flex: 1; background: #087cff; height: 60%; border-radius: 4px 4px 0 0;"></div>
         </div>
      </div>
    </div>
  </div>
</div>
`;
indexHtml = indexHtml.replace('<span style="color: #888;">[ Dashboard Preview ]</span>', hisMockup);

// 3. Fix Healthcare Website Mockups
const websiteMockup = `
<div style="background: white; width: 100%; height: 100%; display: flex; flex-direction: column;">
  <div style="background: #10213A; height: 120px; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 20px; text-align: center;">
    <div style="color: white; font-size: 18px; font-weight: 700; margin-bottom: 8px;">City General Hospital</div>
    <div style="width: 60%; height: 8px; background: rgba(255,255,255,0.2); border-radius: 4px; margin-bottom: 16px;"></div>
    <div style="padding: 6px 16px; background: #087cff; color: white; font-size: 10px; font-weight: 600; border-radius: 20px;">Book Appointment</div>
  </div>
  <div style="padding: 20px; display: grid; grid-template-columns: 1fr 1fr; gap: 12px; flex: 1; background: #f8fbff;">
    <div style="background: white; border-radius: 6px; padding: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
       <div style="width: 30px; height: 30px; background: #eaf5ff; border-radius: 50%; margin-bottom: 8px;"></div>
       <div style="width: 80%; height: 6px; background: #e0e0e0; border-radius: 3px; margin-bottom: 6px;"></div>
       <div style="width: 60%; height: 6px; background: #e0e0e0; border-radius: 3px;"></div>
    </div>
    <div style="background: white; border-radius: 6px; padding: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
       <div style="width: 30px; height: 30px; background: #eaf5ff; border-radius: 50%; margin-bottom: 8px;"></div>
       <div style="width: 80%; height: 6px; background: #e0e0e0; border-radius: 3px; margin-bottom: 6px;"></div>
       <div style="width: 60%; height: 6px; background: #e0e0e0; border-radius: 3px;"></div>
    </div>
    <div style="background: white; border-radius: 6px; padding: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
       <div style="width: 30px; height: 30px; background: #eaf5ff; border-radius: 50%; margin-bottom: 8px;"></div>
       <div style="width: 80%; height: 6px; background: #e0e0e0; border-radius: 3px; margin-bottom: 6px;"></div>
       <div style="width: 60%; height: 6px; background: #e0e0e0; border-radius: 3px;"></div>
    </div>
    <div style="background: white; border-radius: 6px; padding: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
       <div style="width: 30px; height: 30px; background: #eaf5ff; border-radius: 50%; margin-bottom: 8px;"></div>
       <div style="width: 80%; height: 6px; background: #e0e0e0; border-radius: 3px; margin-bottom: 6px;"></div>
       <div style="width: 60%; height: 6px; background: #e0e0e0; border-radius: 3px;"></div>
    </div>
  </div>
</div>
`;
indexHtml = indexHtml.replace('<span style="color:#888; font-size: 1.2rem;">Premium Hospital Website</span>', websiteMockup);

// Save updated index.html
fs.writeFileSync(path.join(baseDir, 'index.html'), indexHtml, 'utf8');

console.log('Homepage fixes applied.');
