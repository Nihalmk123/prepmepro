// ============================================================
//  layout.js  –  inject nav, footer, webinar modal globally
// ============================================================

function injectLayout(currentPage = "home") {

  /* ── HEADER ── */
  const headerHTML = `
<nav id="mainNav">
  <div class="nav-inner">
    <a href="index.html" class="logo-link" aria-label="PrepMe.Pro Home">
      <img
  src="/assets/prepme/assets/images/logo.png"
  alt="PrepMe.Pro"
  class="nav-logo"
  height="80"
  width="240"
  loading="eager"
/>
    </a>
    <ul class="nav-links" id="navLinks" role="list">
      <li><a href="index.html" class="nav-item">Home</a></li>
      <li><a href="free-webinars.html" class="nav-item">Webinars</a></li>
      <li><a href="student-success-core.html" class="nav-item">Success Core</a></li>
      <li><a href="competitive-exams.html" class="nav-item">Competitive Exams</a></li>
      <li><a href="study-abroad.html" class="nav-item">Study Abroad</a></li>
      <li><a href="colleges.html" class="nav-item">For Colleges</a></li>
      <li><a href="blog.html" class="nav-item">Blog</a></li>
      <li><a href="about.html" class="nav-item">About</a></li>
      <li><a href="contact.html" class="nav-item">Contact</a></li>
    </ul>
    <div class="nav-cta">
      <a href="#" class="btn-nav-cta js-open-webinar-modal">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="5 3 19 12 5 21 5 3"/></svg>
        Free Workshop
      </a>
    </div>
  </div>
</nav>`;

  /* ── FOOTER ── */
  const footerHTML = `
<footer class="site-footer">

  <!-- BRAND BAR -->
  <div class="footer-brand-bar">
    <div class="container">
      <div class="footer-brand-inner">
        <a href="index.html" class="footer-logo-link" aria-label="PrepMe.Pro Home">
          <img src="/assets/prepme/assets/images/footer.png" alt="PrepMe.Pro" class="footer-logo" height="36" loading="lazy"/>
        </a>
        <p class="footer-tagline">
          Your complete student success platform — built in Karnataka, for ambitious students everywhere.
        </p>
        <div class="footer-socials">
          <a href="#" class="footer-social-btn" aria-label="WhatsApp">
            <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.554 4.118 1.523 5.85L0 24l6.335-1.502A11.956 11.956 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.368l-.36-.214-3.724.883.936-3.619-.235-.372A9.817 9.817 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/></svg>
          </a>
          <a href="#" class="footer-social-btn" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </a>
          <a href="#" class="footer-social-btn" aria-label="YouTube">
            <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          </a>
          <a href="#" class="footer-social-btn" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
        </div>
      </div>
    </div>
  </div>

  <!-- MAIN GRID -->
  <div class="footer-main">
    <div class="container">
      <div class="footer-grid">

        <!-- Programs -->
        <div class="footer-col">
          <h5 class="footer-col-title">Programs</h5>
          <ul class="footer-links">
            <li><a href="student-success-core.html">Student Success Core</a></li>
            <li><a href="competitive-exams.html">Competitive Exam Prep</a></li>
            <li><a href="study-abroad.html">Study Abroad Prep</a></li>
            <li><a href="free-webinars.html">Free Webinars</a></li>
          </ul>
        </div>

        <!-- Company -->
        <div class="footer-col">
          <h5 class="footer-col-title">Company</h5>
          <ul class="footer-links">
            <li><a href="about.html">About Us</a></li>
            <li><a href="colleges.html">For Colleges</a></li>
            <li><a href="blog.html">Blog</a></li>
            <li><a href="news-media.html">News &amp; Media</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>

        <!-- Contact -->
        <div class="footer-col">
          <h5 class="footer-col-title">Get In Touch</h5>
          <ul class="footer-contact-list">
            <li>
              <span class="fc-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </span>
              <span>No. 7, 1st Floor, APMC Yard,<br>Sirsi, Karnataka 581401, IN</span>
            </li>
            <li>
              <span class="fc-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </span>
              <a href="mailto:info@prepme.pro">info@prepme.pro</a>
            </li>
            <li>
              <span class="fc-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6.29 6.29l.86-.86a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </span>
              <a href="tel:+919606821633">+91 96068 21633</a>
            </li>
            <li>
              <span class="fc-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.554 4.118 1.523 5.85L0 24l6.335-1.502A11.956 11.956 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.368l-.36-.214-3.724.883.936-3.619-.235-.372A9.817 9.817 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/></svg>
              </span>
              <a href="https://wa.me/919606821633" target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
            </li>
          </ul>
        </div>

        <!-- CTA -->
        <div class="footer-col footer-cta-col">
          <h5 class="footer-col-title">Start for Free</h5>
          <p class="footer-cta-desc">Join thousands of students already transforming their future with PrepMe.Pro.</p>
          <a href="free-webinars.html" class="footer-cta-btn">
            Join Free Webinar
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
          <p class="footer-legal">A unit of <strong>Shree Honnakirana Academy LLP</strong></p>
        </div>

      </div>
    </div>
  </div>

  <!-- BOTTOM BAR -->
  <div class="footer-bottom-bar">
    <div class="container">
      <div class="footer-bottom-inner">
        <p class="footer-copyright">© 2026 <strong>Shree Honnakirana Academy LLP.</strong> All rights reserved.</p>
        <div class="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <span aria-hidden="true">·</span>
          <a href="#">Terms of Use</a>
          <span aria-hidden="true">·</span>
          <a href="#">Refund Policy</a>
        </div>
      </div>
    </div>
  </div>

</footer>`;

  /* ══════════════════════════════════════════
     MODAL
     ══════════════════════════════════════════ */
  const modalHTML = `
<div id="webinarModal" class="wm-overlay" aria-hidden="true">
  <div class="wm-dialog">
    <button class="wm-close js-close-webinar-modal" aria-label="Close">&times;</button>

    <div id="modalFormView">

      <!-- LEFT -->
      <div class="wm-left">
        <div class="wm-badge">🎓 Free Webinar &middot; Limited Seats &middot; 9th May 2026</div>
        <h2 class="wm-title">10 Lakh Applicants. 500 Seats.<br><em>Will YOU Be One of Them?</em></h2>
        <p class="wm-sub">How to Clear Competitive Exam in 1st Attempt — A FREE 90-min strategy session</p>

        <div class="wm-meta-row">
          <div class="wm-meta-item">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            <span>9th May 2026 &middot; 4:00 PM – 5:30 PM</span>
          </div>
          <div class="wm-meta-item">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            <span>90 Minutes &middot; Google Meet &middot; English + Kannada</span>
          </div>
          <div class="wm-meta-item">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            <span>100% Free &middot; Online &middot; Live Interactive</span>
          </div>
        </div>

        <div class="wm-scroll-content">
          <div class="wm-section-block">
            <p class="wm-section-label">The Real Problem</p>
            <p class="wm-body-text">You study 10 hours a day, buy 5 books, join 3 coaching classes — and still don't clear. Meanwhile someone studying 6 hours with ONE book clears in their first attempt.</p>
            <p class="wm-highlight-text">The difference is not hard work. The difference is <strong>STRATEGY.</strong></p>
          </div>

          <div class="wm-section-block">
            <p class="wm-section-label">What You'll Learn — 10 Rules</p>
            <div class="wm-learn-grid">
              <div class="wm-learn-card"><span class="wm-learn-num">01</span><div><strong>80/20 Syllabus Hack</strong><br>80% of questions from 20% of the syllabus.</div></div>
              <div class="wm-learn-card"><span class="wm-learn-num">02</span><div><strong>3-Phase Study Plan</strong><br>Why 90% fail at Phase 1 — and what to do instead.</div></div>
              <div class="wm-learn-card"><span class="wm-learn-num">03</span><div><strong>Subject Hold Technique</strong><br>Lock a subject at 80%+ accuracy permanently.</div></div>
              <div class="wm-learn-card"><span class="wm-learn-num">04</span><div><strong>Elimination Method</strong><br>Crack MCQs without knowing the answer. +15–20 marks.</div></div>
              <div class="wm-learn-card"><span class="wm-learn-num">05</span><div><strong>3-Pass Exam Strategy</strong><br>Score 78% knowing only 60% — pure time management.</div></div>
              <div class="wm-learn-card"><span class="wm-learn-num">06</span><div><strong>Mistake Checklist</strong><br>6 mistakes costing you one more year.</div></div>
            </div>
          </div>

          <div class="wm-section-block">
            <p class="wm-section-label">This Is For You If...</p>
            <ul class="wm-for-list">
              <li>Preparing for KPSC SDA/FDA, Banking, SSC, UPSC, KAS</li>
              <li>Studying hard but not seeing results</li>
              <li>Starting fresh and want to do it RIGHT from Day 1</li>
              <li>Failed one attempt and don't want to repeat mistakes</li>
              <li>Want a clear plan instead of random YouTube videos</li>
            </ul>
          </div>

          <div class="wm-testimonial">
            <p class="wm-testimonial-quote">"I knew only 60% of the answers. But I cleared the exam with 78%."</p>
            <p class="wm-testimonial-name">— Priya, Belgaum &middot; Cleared KPSC SDA 2023</p>
          </div>
        </div>

        <a href="https://wa.me/919606821633" target="_blank" rel="noopener noreferrer" class="wm-whatsapp">
          <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.554 4.118 1.523 5.85L0 24l6.335-1.502A11.956 11.956 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.368l-.36-.214-3.724.883.936-3.619-.235-.372A9.817 9.817 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/></svg>
          Questions? WhatsApp &rarr; +91 96068 21633
        </a>
      </div>

      <!-- RIGHT -->
      <div class="wm-right">
        <div class="wm-logo-area">
          <img src="/assets/prepme/assets/images/logo.png" alt="PrepMe.Pro" loading="eager" height="52"/>
          <span class="wm-reg-badge">Free Registration</span>
        </div>
        <div class="wm-form-area">
          <div class="wm-form-head">
            <h3>Reserve Your Free Seat</h3>
            <p>Join now — 90 minutes that can save you a whole year.</p>
          </div>
          <div class="wm-iframe-wrap">
            <iframe
              id="wm-frappe-iframe"
              src="https://prepme.fsn.frappe.cloud/w3"
              title="PrepMe Registration Form"
              loading="lazy"
              scrolling="no"
              style="border:none;width:100%;display:block;height:680px;min-height:680px;"
            ></iframe>
          </div>
          <p class="wm-disclaimer">&#10003; Free forever &nbsp;&#10003; No spam &nbsp;&#10003; Instant confirmation</p>
          <p class="wm-share-nudge">📢 Share with a friend preparing for exams — one forward could save them a year.</p>
        </div>
      </div>

    </div>

    <!-- SUCCESS VIEW -->
    <div id="modalSuccessView" class="wm-success" style="display:none;">
      <div class="wm-success-icon">✅</div>
      <h2>You're In!</h2>
      <p class="wm-success-sub">Your seat is reserved for <strong>9th May 2026, 4:00 PM</strong>.<br>Check your WhatsApp/email for the Google Meet link.</p>
      <div class="wm-success-detail">
        <div class="wm-success-row">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
          <span>9th May 2026 &middot; 4:00 PM – 5:30 PM</span>
        </div>
        <div class="wm-success-row">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          <span>90 Minutes &middot; Google Meet &middot; English + Kannada</span>
        </div>
      </div>
      <a href="https://wa.me/919606821633" target="_blank" rel="noopener noreferrer" class="wm-whatsapp" style="margin-top:1.5rem;">
        <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.554 4.118 1.523 5.85L0 24l6.335-1.502A11.956 11.956 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.368l-.36-.214-3.724.883.936-3.619-.235-.372A9.817 9.817 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/></svg>
        Any questions? WhatsApp us &rarr; +91 96068 21633
      </a>
      <button class="js-close-webinar-modal wm-close-success">Close</button>
    </div>

  </div>
</div>`;

  /* ── INJECT ── */
  const header    = document.getElementById("app-header");
  const footer    = document.getElementById("app-footer");
  const modalRoot = document.getElementById("app-modal-root");

  if (header) header.innerHTML = headerHTML;
  if (footer) footer.innerHTML = footerHTML;
  if (modalRoot && !document.getElementById("webinarModal")) {
    modalRoot.innerHTML = modalHTML;
  }

  _setActiveNavLink();
  _bindNavScroll();
}

/* ══════════════════════════════════════════
   PRIVATE
   ══════════════════════════════════════════ */

function _setActiveNavLink() {
  let current = window.location.pathname.split("/").pop();
  current = current.replace(".html", "") || "index";
  document.querySelectorAll(".nav-item").forEach(link => {
    let href = (link.getAttribute("href") || "").split("/").pop().split("?")[0].split("#")[0].replace(".html", "") || "index";
    const isActive = current === href;
    link.classList.toggle("active", isActive);
    isActive ? link.setAttribute("aria-current", "page") : link.removeAttribute("aria-current");
  });
}

function _bindNavScroll() {
  const nav = document.getElementById("mainNav");
  if (!nav) return;
  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 8);
  }, { passive: true });
}

/* ══════════════════════════════════════════
   IFRAME
   ══════════════════════════════════════════ */

function _bindIframe() {
  const iframe = document.getElementById("wm-frappe-iframe");
  if (!iframe) return;

  window.addEventListener("message", (e) => {
    if (e.origin !== "https://prepme.fsn.frappe.cloud") return;
    if (e.data?.type === "iframe_height" && e.data.height) {
      iframe.style.height = (e.data.height + 20) + "px";
    }
    if (e.data === "form_submitted" || e.data?.type === "form_submitted" || e.data?.status === "success") {
      showSuccessPage();
    }
  });

  iframe.addEventListener("load", () => {
    try {
      iframe.contentWindow.postMessage(
        { type: "set_field", fieldname: "source", value: "W2_Webinar" },
        "https://prepme.fsn.frappe.cloud"
      );
    } catch (e) {}
    try {
      const iDoc = iframe.contentDocument || iframe.contentWindow.document;
      const src = iDoc.querySelector('[data-fieldname="source"] select, [name="source"]');
      if (src) { src.value = "W2_Webinar"; src.dispatchEvent(new Event("change", { bubbles: true })); }
    } catch (e) {}
  });

  const poller = setInterval(() => {
    try {
      const url = iframe.contentWindow.location.href;
      if (url.includes("thank-you") || url.includes("success")) {
        clearInterval(poller);
        showSuccessPage();
      }
    } catch (e) {}
  }, 800);
}

/* ══════════════════════════════════════════
   MODAL HELPERS
   ══════════════════════════════════════════ */

function openWebinarModal() {
  const modal       = document.getElementById("webinarModal");
  const formView    = document.getElementById("modalFormView");
  const successView = document.getElementById("modalSuccessView");
  if (!modal) return;
  if (formView)    formView.style.display    = "";
  if (successView) successView.style.display = "none";
  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  _bindIframe();
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

/* ══════════════════════════════════════════
   GLOBAL EVENTS
   ══════════════════════════════════════════ */

function bindGlobalEvents() {
  if (window.__prepmeEventsBound) return;
  window.__prepmeEventsBound = true;

  document.addEventListener("click", function (e) {
    if (e.target.closest(".js-open-webinar-modal")) { e.preventDefault(); openWebinarModal(); return; }
    if (e.target.closest(".js-close-webinar-modal")) { e.preventDefault(); closeWebinarModal(); return; }
    const modal = document.getElementById("webinarModal");
    if (modal && e.target === modal) closeWebinarModal();
  });

  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeWebinarModal(); });
}

/* ══════════════════════════════════════════
   BOOT
   ══════════════════════════════════════════ */

function initLayout(currentPage) {
  injectLayout(currentPage);
  bindGlobalEvents();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => initLayout());
} else {
  initLayout();
}

window.openWebinarModal  = openWebinarModal;
window.closeWebinarModal = closeWebinarModal;
window.showSuccessPage   = showSuccessPage;
