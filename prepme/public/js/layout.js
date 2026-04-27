// ============================================================
//  layout.js  –  inject nav, footer, webinar modal globally
// ============================================================
 
function injectLayout(currentPage = "home") {
 
  /* ── HEADER ── */
 const headerHTML = `<!-- NAVIGATION -->
<nav id="mainNav">
  <div class="nav-inner">

    <a href="index.html" class="logo-link" aria-label="PrepMe.Pro Home">
      <img
        src="/assets/prepme/assets/images/logo.png"
        alt="PrepMe.Pro"
        class="nav-logo"
        height="40"
        loading="eager"
      />
    </a>

    <ul class="nav-links" id="navLinks">
      <li><a href="index.html" class="nav-item">Home</a></li>
      <li><a href="free-webinars.html" class="nav-item">Webinars</a></li>
      <li><a href="student-success-core.html" class="nav-item">Success Core</a></li>
      <li><a href="competitive-exams.html" class="nav-item">Competitive Exams</a></li>
      <li><a href="study-abroad.html" class="nav-item">Study Abroad</a></li>
      <li><a href="colleges.html" class="nav-item">For Colleges</a></li>
      <li><a href="blog.html" class="nav-item">Blogs</a></li>
      <li><a href="news-media.html" class="nav-item">News</a></li>
      <li><a href="about.html" class="nav-item">About</a></li>
      <li><a href="contact.html" class="nav-item">Contact</a></li>
    </ul>

    <div class="nav-cta">
      <a href="#" class="btn btn-sm js-open-webinar-modal">Free Workshop</a>
      <button class="hamburger" id="hamburger" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>

  <div class="mobile-menu" id="mobileMenu">
    <div class="mobile-menu-inner">
      <a href="index.html" class="mobile-link">Home</a>
      <a href="competitive-exams.html" class="mobile-link">Competitive Exams</a>
      <a href="study-abroad.html" class="mobile-link">Study Abroad</a>
      <a href="student-success-core.html" class="mobile-link">Success Core</a>
      <a href="colleges.html" class="mobile-link">For Colleges</a>
      <a href="free-webinars.html" class="mobile-link">Webinars</a>
      <a href="blog.html" class="mobile-link">Blog</a>
      <a href="news-media.html" class="mobile-link">News</a>
      <a href="about.html" class="mobile-link">About</a>
      <a href="contact.html" class="mobile-link">Contact</a>
      <a href="#" class="btn btn-full js-open-webinar-modal" style="margin-top:0.5rem;">
        Free Workshop
      </a>
    </div>
  </div>
</nav>`;

function setActiveNavLink() {
  // Works for: /index, /index.html, /, /about, /about.html
  let current = window.location.pathname.split("/").pop();
  current = current.replace(".html", "") || "index"; // "" = root = index

  document.querySelectorAll(".nav-item, .mobile-link").forEach(link => {
    let href = (link.getAttribute("href") || "")
      .split("/").pop()
      .split("?")[0]
      .split("#")[0]
      .replace(".html", "") || "index";

    const isActive = current === href;
    link.classList.toggle("active", isActive);
    isActive
      ? link.setAttribute("aria-current", "page")
      : link.removeAttribute("aria-current");
  });
}
 
  /* ── FOOTER ── */
  const footerHTML = `<!-- FOOTER -->
<footer class="site-footer">
  <div class="footer-top">
    <div class="container">
      <div class="footer-grid">
 
        <!-- Brand Column -->
        <div class="footer-brand-col">
          <a href="index.html" class="footer-logo-link" aria-label="PrepMe.Pro Home">
            <img
              src="/assets/prepme/assets/images/footer.png"
              alt="PrepMe.Pro"
              class="footer-logo"
              height="38"
              loading="lazy"
            />
          </a>
          <p class="footer-tagline">
            Your complete student success platform. Built in Karnataka,
            for ambitious students everywhere.
          </p>
          <p class="footer-legal">A unit of <strong>Shree Honnakirana Academy LLP</strong></p>
 
          <!-- Social Icons -->
          <div class="footer-socials">
            <a href="#" class="footer-social-btn" aria-label="WhatsApp">
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.554 4.118 1.523 5.85L0 24l6.335-1.502A11.956 11.956 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.368l-.36-.214-3.724.883.936-3.619-.235-.372A9.817 9.817 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
              </svg>
            </a>
            <a href="#" class="footer-social-btn" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="#" class="footer-social-btn" aria-label="YouTube">
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a href="#" class="footer-social-btn" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
 
        <!-- Programs Column -->
        <div class="footer-col">
          <h5>Programs</h5>
          <ul class="footer-links">
            <li><a href="student-success-core.html">Student Success Core</a></li>
            <li><a href="competitive-exams.html">Competitive Exam Prep</a></li>
            <li><a href="study-abroad.html">Study Abroad Prep</a></li>
            <li><a href="free-webinars.html">Free Webinars</a></li>
          </ul>
        </div>
 
        <!-- Company Column -->
        <div class="footer-col">
          <h5>Company</h5>
          <ul class="footer-links">
            <li><a href="about.html">About Us</a></li>
            <li><a href="colleges.html">For Colleges</a></li>
            <li><a href="blog.html">Blog</a></li>
            <li><a href="news-media.html">News &amp; Media</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
 
        <!-- Contact Column -->
        <div class="footer-col">
          <h5>Get In Touch</h5>
          <ul class="footer-contact-list">
            <li>
              <span class="footer-contact-icon">📍</span>
              <span>Bangalore, Karnataka, India</span>
            </li>
            <li>
              <span class="footer-contact-icon">📧</span>
              <a href="mailto:info@prepme.pro">info@prepme.pro</a>
            </li>
            <li>
              <span class="footer-contact-icon">💬</span>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                WhatsApp Us
              </a>
            </li>
          </ul>
          <a href="free-webinars.html" class="footer-cta-btn">
            Join Free Webinar →
          </a>
        </div>
 
      </div>
    </div>
  </div>
 
  <!-- Footer Bottom Bar -->
  <div class="footer-bottom-bar">
    <div class="container">
      <div class="footer-bottom-inner">
        <p class="footer-copyright">
          © 2026 <strong>Shree Honnakirana Academy LLP.</strong> All rights reserved.
        </p>
        <div class="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <span>·</span>
          <a href="#">Terms of Use</a>
          <span>·</span>
          <a href="#">Refund Policy</a>
        </div>
      </div>
    </div>
  </div>
</footer>`;
 
  /* ── MODAL ── */
  const modalHTML = `
<div id="webinarModal" class="wm-overlay">
  <div class="wm-dialog">

    <button class="wm-close" onclick="closeWebinarModal()" aria-label="Close">&times;</button>

    <!-- FORM VIEW -->
    <div id="modalFormView">

      <!-- Left Panel -->
      <div class="wm-left">
        <div class="wm-badge">&#127979; Single Session Workshop &middot; Limited Seats</div>
        <h2 class="wm-title">Stop Wishing You Were a Better Communicator.<br><em>Start Being One.</em></h2>
        <p class="wm-sub">The Single-Session Communication Skills Workshop</p>

        <div class="wm-pain">
          <p>Are misunderstandings costing you time, opportunities, or peace of mind?</p>
          <p>In today&rsquo;s fast-paced world, ineffective communication is the silent killer of productivity and relationships.</p>
        </div>

        <div class="wm-meta-row">
          <div class="wm-meta-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            <span>April 25, 2026 &middot; 4pm &ndash; 4:30pm &middot; Saturday</span>
          </div>
          <div class="wm-meta-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            <span>90 Minutes &middot; Live Interactive Webinar</span>
          </div>
          <div class="wm-meta-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            <span>Practical, actionable strategies you can use now</span>
          </div>
        </div>

        <div class="wm-why">
          <p class="wm-why-title">Why This Workshop?</p>
          <p class="wm-why-tag">Not theoretical &mdash; Highly practical</p>
        </div>

        <div class="wm-achieve">
          <p class="wm-achieve-title">What You&rsquo;ll Achieve</p>
          <ul class="wm-achieve-list">
            <li><strong>Clarity</strong> &mdash; eliminate fluff and deliver messages with precision.</li>
            <li><strong>Confidence</strong> &mdash; master non-verbal cues to project authority.</li>
            <li><strong>Connection</strong> &mdash; build stronger professional and personal relationships.</li>
            <li><strong>Conflict Resolution</strong> &mdash; handle difficult conversations professionally.</li>
          </ul>
        </div>

        <div class="wm-seats-warn">&#9888;&#65039; Spaces are limited for personalized attention.</div>

        <a href="https://wa.me/919606821633" target="_blank" rel="noopener noreferrer" class="wm-whatsapp">
          <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.554 4.118 1.523 5.85L0 24l6.335-1.502A11.956 11.956 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.368l-.36-.214-3.724.883.936-3.619-.235-.372A9.817 9.817 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/></svg>
          Questions? WhatsApp &rarr; +91 96068 21633
        </a>
      </div>

      <!-- Right Panel: Form -->
      <div class="wm-right">

  <!-- Logo at top of form panel -->
  <div class="wm-logo-area">
     <img
        src="/assets/prepme/assets/images/logo.png"
        alt="PrepMe.Pro"
        height="40"
        loading="eager"
      />
    <span class="wm-reg-badge">Free Registration</span>
  </div>

  <!-- Form -->
  <div class="wm-form-area">
    <div class="wm-form-head">
      <h3>Reserve Your Free Seat</h3>
      <p>Join now and invest 90 minutes in better communication.</p>
    </div>

    <form id="webinarForm" class="wm-form" novalidate>
      <div class="wm-row">
        <div class="wm-field">
          <label for="wm-fname">First Name <span class="wm-req">*</span></label>
          <input type="text" id="wm-fname" placeholder="Rahul" required>
        </div>
        <div class="wm-field">
          <label for="wm-lname">Last Name <span class="wm-req">*</span></label>
          <input type="text" id="wm-lname" placeholder="Sharma" required>
        </div>
      </div>
      <div class="wm-field">
        <label for="wm-mobile">Mobile No. <span class="wm-req">*</span></label>
        <div class="wm-phone-wrap">
          <span class="wm-phone-prefix">&#127470;&#127475; +91</span>
          <input type="tel" id="wm-mobile" placeholder="98765 43210" maxlength="10" required>
        </div>
      </div>
      <div class="wm-field">
        <label for="wm-email">Email <span class="wm-req">*</span></label>
        <input type="email" id="wm-email" placeholder="rahul@email.com" required>
      </div>
      <div class="wm-field">
        <label for="wm-gender">Gender <span class="wm-req">*</span></label>
        <select id="wm-gender" required>
          <option value="" disabled selected>Select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
          <option value="prefer-not">Prefer not to say</option>
        </select>
      </div>
      <div class="wm-field">
        <label for="wm-college">College Name <span class="wm-req">*</span></label>
        <input type="text" id="wm-college" placeholder="e.g. VTU, Delhi University..." required>
      </div>

      <button type="submit" id="submitBtn" class="wm-submit-btn">
        Reserve My Free Seat &rarr;
      </button>

      <p class="wm-disclaimer">&#10003; Free forever &nbsp; &#10003; No spam &nbsp; &#10003; Instant confirmation</p>
    </form>
  </div>

</div>
    </div>

    <!-- SUCCESS VIEW -->
    <div id="modalSuccessView" class="wm-success" style="display:none;">
      <div class="wm-success-icon">&#9989;</div>
      <h2>You&rsquo;re In!</h2>
      <p class="wm-success-sub">Your seat has been reserved. Check your email for confirmation details.</p>
      <div class="wm-success-detail">
        <div class="wm-success-row">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
          <span>April 25, 2026 &middot; 4:00 PM &ndash; 4:30 PM</span>
        </div>
        <div class="wm-success-row">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          <span>90 Minutes &middot; Live Interactive Webinar</span>
        </div>
      </div>
      <a href="https://wa.me/919606821633" target="_blank" rel="noopener noreferrer" class="wm-whatsapp" style="margin-top:1.5rem;">
        <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.554 4.118 1.523 5.85L0 24l6.335-1.502A11.956 11.956 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.368l-.36-.214-3.724.883.936-3.619-.235-.372A9.817 9.817 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/></svg>
        Any questions? WhatsApp us &rarr; +91 96068 21633
      </a>
      <button onclick="closeWebinarModal()" class="wm-close-success">Close</button>
    </div>

  </div>
</div>`;
 
  /* ── INJECT INTO DOM ── */
  const header    = document.getElementById("app-header");
  const footer    = document.getElementById("app-footer");
  const modalRoot = document.getElementById("app-modal-root");
 
  if (header)    header.innerHTML    = headerHTML;
  if (footer)    footer.innerHTML    = footerHTML;
  
  setActiveNavLink();
  // Only inject modal once, even if injectLayout is called multiple times
  if (modalRoot && !document.getElementById("webinarModal")) {
    modalRoot.innerHTML = modalHTML;
  }
}
 
/* ── MODAL HELPERS ── */
function openWebinarModal() {
  const modal = document.getElementById("webinarModal");
  if (!modal) return;
  // Reset to form view every time it opens
  const formView    = document.getElementById("modalFormView");
  const successView = document.getElementById("modalSuccessView");
  const btn         = document.getElementById("submitBtn");
  if (formView)    formView.style.display    = "";
  if (successView) successView.style.display = "none";
  if (btn)         { btn.disabled = false; btn.textContent = "Reserve now"; }
 
  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}
 
function closeWebinarModal() {
  const modal = document.getElementById("webinarModal");
  if (!modal) return;
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}
 
function showSuccessPage() {
  const formView    = document.getElementById("modalFormView");
  const successView = document.getElementById("modalSuccessView");
  if (formView)    formView.style.display    = "none";
  if (successView) successView.style.display = "flex";
}
 
/* ── SINGLE GLOBAL EVENT DELEGATION ──
   Bound once on <document> so it works for any element
   injected by injectLayout(), including nav & mobile menu.      */
function bindGlobalModalEvents() {
  document.addEventListener("click", function (e) {
    // Open triggers  (.js-open-webinar-modal anywhere on the page)
    if (e.target.closest(".js-open-webinar-modal")) {
      e.preventDefault();
      openWebinarModal();
      return;
    }
    // Close button inside modal
    if (e.target.closest(".wm-close")) {
      e.preventDefault();
      closeWebinarModal();
      return;
    }
    // Click on the dark overlay itself
    const modal = document.getElementById("webinarModal");
    if (modal && e.target === modal) {
      closeWebinarModal();
    }
  });
 
  // Escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeWebinarModal();
  });
 
  // Form submit (delegated – works even though form is injected later)
  document.addEventListener("submit", function (e) {
    if (!e.target.closest("#webinarForm")) return;
    e.preventDefault();
    const btn = document.getElementById("submitBtn");
    if (btn) {
      btn.disabled = true;
      btn.innerHTML = '<span class="wm-btn-spinner"></span> Reserving your seat…';
    }
    setTimeout(showSuccessPage, 1800);
  });
}
 
/* ── HAMBURGER (mobile nav toggle) ──
   Delegated so it works after header injection.                  */
function bindHamburger() {
  document.addEventListener("click", function (e) {
    const hamburger   = e.target.closest("#hamburger");
    const mobileMenu  = document.getElementById("mobileMenu");
    if (hamburger && mobileMenu) {
      mobileMenu.classList.toggle("open");
      hamburger.classList.toggle("open");
    }
    // Close mobile menu if a link inside it is clicked
    if (e.target.closest("#mobileMenu .mobile-link")) {
      mobileMenu && mobileMenu.classList.remove("open");
      const hb = document.getElementById("hamburger");
      hb && hb.classList.remove("open");
    }
  });
}
 
/* ── BOOT ── */
function initLayout(currentPage) {
  injectLayout(currentPage);   // inject HTML first …
  bindGlobalModalEvents();     // … then attach delegated events once
  bindHamburger();
}
 
// Safe DOMContentLoaded guard
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", function () { initLayout(); });
} else {
  initLayout();   // DOM already ready (e.g. script loaded with defer)
}
 
// Expose helpers globally for any inline onclick="" usage
window.openWebinarModal  = openWebinarModal;
window.closeWebinarModal = closeWebinarModal;

