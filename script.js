// Translation Dictionary
const translations = {
  en: {
    capabilities: "Capabilities",
    products: "Products",
    technology: "Technology",
    approach: "Approach",
    contact: "Contact",
    heroTitle:
      "Straightforward software solutions for managing operations, teams, and resources — without the chaos.",
    discussBtn: "Discuss Your Project",
    socialTitle: "Building workflows with trusted industry standards",
    coreFocusLabel: "Core Capabilities",
    erpTitle: "Custom ERP Applications",
    erpDesc:
      "Tailored business management structures designed to map your actual workflows, organize company data, and keep different departments in sync.",
    toolsTitle: "Intuitive Internal Tools",
    toolsDesc:
      "Clean, easy-to-use control dashboards built specifically for your staff to manage daily checklists, client requests, and operations without clutter.",
    trackingTitle: "Inventory & Asset Tracking",
    trackingDesc:
      "Practical database solutions for accurate balance tracking, real-time item status updates, and transparent transaction logs.",
    backendTitle: "Secure Business Backends",
    backendDesc:
      "Stable, dependable system frameworks that securely handle data storage, processing rules, and user access permissions.",
    prodReadyLabel: "Software Ready-to-Deploy",
    prodMainTitle: "Our Management Modules",
    hrmTitle: "Human Resource Management",
    hrmDesc:
      "Handles team structures, personnel records, and employee status tracking. Helps companies organize internal development and simplify day-to-day HR processes.",
    wmsTitle: "Warehouse Management (WMS)",
    wmsDesc:
      "Optimizes product storage, inventory movement, and stock tracking. Automates core warehouse operations to cut down manual errors and lower costs.",
    pawnTitle: "Pawnshop Management",
    pawnDesc:
      "Keeps track of collateral assets, customer files, and financial agreements. Streamlines daily retail transactions and simplifies inventory logs.",
    gymTitle: "Gym & Complex Management",
    gymDesc:
      "Web-based software that simplifies membership management, access control, subscription handling, and financial oversight.",
    techLabel: "Technical Foundations",
    techMainTitle: "Our Production Stack",
    stackBackend: "Backend & Runtimes",
    stackNodeDesc: "High-performance, event-driven server logic.",
    stackBunDesc: "Fast, modern native runtime compilation.",
    stackDb: "Databases & Storage",
    stackPgDesc: "Relational data integrity and complex queries.",
    stackMongoDesc: "Flexible document storage for fast data scaling.",
    stackFe: "Frontend Interfaces",
    stackVueDesc: "Predictable state rendering and responsive tools.",
    stackReactDesc: "Component-driven modular frontend systems.",
    approachLabel: "Our Approach",
    p1Heading: "Clear Visual Architecture",
    p1Desc:
      "We don't build confusing, overdesigned systems. Our software focuses on intuitive layouts, readable fonts, and distinct functional views so your team can work instantly without endless training.",
    p2Heading: "No Feature Bloat",
    p2Desc:
      "We stick to what is useful. By intentionally omitting unnecessary administrative buttons and hidden menus, we build lightweight tools that solve problems directly and maintain speed.",
    p3Heading: "Clean, Maintainable Code",
    p3Desc:
      "We use predictable, modular, and type-safe code bases. This makes updates, software expansions, and cross-branch rollouts uncomplicated as your business footprint grows.",
    ctaTitle: "Let's organize your operational tools.",
    ctaDesc:
      "Contact our development team directly to discuss your system needs, project timelines, or platform integration details.",
    badgeText: " Email copied!",
    footerLoc: "Baku, Azerbaijan • Operating Globally",
    footerRights: "© 2026 Pragmatica. All rights reserved.",
  },
  az: {
    capabilities: "İmkanlar",
    products: "Məhsullar",
    technology: "Texnologiya",
    approach: "Yanaşma",
    contact: "Əlaqə",
    heroTitle:
      "Əməliyyatların, komandaların və resursların xaos olmadan idarə edilməsi üçün sadə proqram təminatı həlləri.",
    discussBtn: "Layihənizi Müzakirə Edin",
    socialTitle: "Güvənilən sənaye standartları ilə iş axınlarının qurulması",
    coreFocusLabel: "Əsas İmkanlar",
    erpTitle: "Fərdi ERP Tətbiqləri",
    erpDesc:
      "Real iş axınlarınızı əks etdirmək, şirkət məlumatlarını təşkil etmək və fərqli şöbələrin sinxron işləməsini təmin etmək üçün hazırlanmış xüsusi biznes idarəetmə sistemləri.",
    toolsTitle: "İntuitiv Daxili Alətlər",
    toolsDesc:
      "Heyətinizin gündəlik yoxlama siyahılarını, müştəri sorğularını və əməliyyatları qarışıqlıq olmadan idarə etməsi üçün xüsusi olaraq hazırlanmış təmiz, istifadəsi asan idarəetmə panelləri.",
    trackingTitle: "Anbar və Aktivlərin İzlənməsi",
    trackingDesc:
      "Dəqiq qalıq izlənməsi, real vaxt rejimində məhsul statusunun yenilənməsi və şəffaf əməliyyat jurnalları üçün praktiki verilənlər bazası həlləri.",
    backendTitle: "Təhlükəsiz Biznes Backend Altyapıları",
    backendDesc:
      "Məlumatların saxlanılmasını, emal qaydalarını və istifadəçi giriş icazələrini təhlükəsiz şəkildə idarə edən sabit, etibarlı sistem çərçivələri.",
    prodReadyLabel: "Hazır Proqram Təminatı Modulları",
    prodMainTitle: "İdarəetmə Modullarımız",
    hrmTitle: "İnsan Resurslarının İdarə Edilməsi (HRM)",
    hrmDesc:
      "Komanda strukturlarını, personal qeydlərini və işçilərin statusunun izlənməsini idarə edir. Şirkətlərə daxili inkişafı təşkil etməyə və gündəlik HR proseslərini sadələşdirməyə kömək edir.",
    wmsTitle: "Anbar İdarəetmə Sistemi (WMS)",
    wmsDesc:
      "Məhsulların saxlanmasını, inventar hərəkətini və ehtiyatların izlənməsini optimallaşdırır. Mexanik səhvləri azaltmaq və xərcləri aşağı salmaq üçün əsas anbar əməliyyatlarını avtomatlaşdırır.",
    pawnTitle: "Lombard İdarəetmə Sistemi",
    pawnDesc:
      "Girov aktivlərini, müştəri fayllarını və maliyyə müqavilələrini izləyir. Gündəlik pərakəndə əməliyyatları sürətləndirir və inventar qeydlərini sadələşdirir.",
    gymTitle: "İdman Zalları və Komplekslərin İdarə Edilməsi",
    gymDesc:
      "Klub üzvlüklərini, giriş icazələrini, aktiv abunəlikləri və aydın maliyyə hesabatlılığını sadələşdirən veb-əsaslı proqram təminatı.",
    techLabel: "Texniki Bünövrə",
    techMainTitle: "İstehsalat Stack-imiz",
    stackBackend: "Backend və Runtime-lar",
    stackNodeDesc: "Yüksək performanslı, hadisələrə əsaslanan server məntiqi.",
    stackBunDesc: "Sürətli, müasir nativ runtime kompilyasiyası.",
    stackDb: "Verilənlər Bazası və Saxlanma",
    stackPgDesc: "Relyasiya məlumatlarının bütövlüyü və mürəkkəb sorğular.",
    stackMongoDesc: "Sürətli məlumat miqyaslanması üçün çevik sənəd saxlama sistemi.",
    stackFe: "Frontend İnterfeysləri",
    stackVueDesc: "Proqnozlaşdırıla bilən state renderi və operativ alətlər.",
    stackReactDesc: "Komponent əsaslı modul frontend sistemləri.",
    approachLabel: "Yanaşmamız",
    p1Heading: "Aydın Vizual Memarlıq",
    p1Desc:
      "Biz qarışıq, həddindən artıq dizayn edilmiş sistemlər qurmuruq. Proqram təminatımız intuitiv tərtibata, oxunaqlı şriftlərə və aydın funksional görünüşlərə yönəlir ki, komandanız uzun təlimlər olmadan dərhal işə başlaya bilsin.",
    p2Heading: "Artıq Funksionallıq Yoxdur",
    p2Desc:
      "Biz yalnız faydalı olan xüsusiyyətlərə sadiq qalırıq. Lazımsız inzibati düymələri və gizli menyuları qəsdən çıxararaq, problemləri birbaşa həll edən və sürəti qoruyan yüngül alətlər qururuq.",
    p3Heading: "Təmiz və Dayanıqlı Kod Altyapısı",
    p3Desc:
      "Proqram modullarımız proqnozlaşdırıla bilən, modul və tip-təhlükəsiz kod bazalarından istifadə edir. This makes updates, software expansions, and cross-branch rollouts uncomplicated as your business footprint grows.",
    ctaTitle: "Əməliyyat alətlərinizi birlikdə nizamlayaq.",
    ctaDesc:
      "Sistem ehtiyaclarınızı, layihə müddətlərini və ya platforma inteqrasiya detallarını müzakirə etmək üçün birbaşa texniki komandamızla əlaqə saxlayın.",
    badgeText: " E-poçt kopyalandı!",
    footerLoc: "Bakı, Azərbaycan • Qlobal Fəaliyyət",
    footerRights: "© 2026 Pragmatica. Bütün hüquqlar qorunur.",
  },
};
// 2. Dynamic Phrases for Hero Section
const localizedPhrases = {
  en: [
    { text: "Clean software for organized operations.", colorClass: "text-purple" },
    { text: "Reliable tools built for real business workflows.", colorClass: "text-green" }
  ],
  az: [
    { text: "Mütəşəkkil əməliyyatlar üçün təmiz proqram təminatı.", colorClass: "text-purple" },
    { text: "Real biznes iş axınları üçün qurulmuş etibarlı alətlər.", colorClass: "text-green" }
  ]
};

document.addEventListener("DOMContentLoaded", () => {
  const html = document.documentElement;
  const navbar = document.getElementById("navbar");
  const mobileDrawer = document.getElementById("mobile-drawer");
  const themeToggle = document.getElementById("theme-toggle");
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const langToggleBtn = document.getElementById("lang-toggle");
  const textElement = document.getElementById("dynamic-text");

  // 1. Dark Mode Toggle Module
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      html.classList.toggle("dark");
      const isDark = html.classList.contains("dark");
      localStorage.setItem("theme", isDark ? "dark" : "light");
    });
  }

  // 2. Mobile Drawer Interaction Module
  if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      mobileDrawer.classList.toggle("active");
    });

    mobileDrawer.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileDrawer.classList.remove("active");
      });
    });

    document.addEventListener("click", (e) => {
      if (navbar && !navbar.contains(e.target)) {
        mobileDrawer.classList.remove("active");
      }
    });
  }

  // 3. Performance-Optimized Navbar Scroll Trigger
  window.addEventListener("scroll", () => {
    if (navbar) {
      if (window.scrollY > 20) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    }
  });

  // 4. Hero Text Animation Engine
  let currentIdx = 0;
  let textInterval = null;

  function resetHeroText(lang) {
    if (!textElement) return;
    if (textInterval) clearInterval(textInterval);
    
    const activePhrases = localizedPhrases[lang];
    currentIdx = 0;
    
    textElement.className = "hero-desc visible";
    textElement.textContent = activePhrases[currentIdx].text;
    textElement.classList.add(activePhrases[currentIdx].colorClass);

    textInterval = setInterval(() => {
      textElement.classList.add("exit");
      textElement.classList.remove("visible");

      setTimeout(() => {
        textElement.classList.remove(activePhrases[currentIdx].colorClass);

        currentIdx = (currentIdx + 1) % activePhrases.length;
        textElement.textContent = activePhrases[currentIdx].text;
        
        textElement.classList.add(activePhrases[currentIdx].colorClass);
        textElement.classList.remove("exit");

        void textElement.offsetWidth; // Force hardware reflow rendering trigger
        textElement.classList.add("visible");
      }, 600);
    }, 4000);
  }

  // 5. Strict Localization Management Engine (SEO & Production Parameter Friendly)
  const urlParams = new URLSearchParams(window.location.search);
  const urlLang = urlParams.get('lang');
  
  let savedLang = urlLang || localStorage.getItem("lang");
  
  if (savedLang !== "en" && savedLang !== "az") {
    savedLang = "en";
  }
  
  localStorage.setItem("lang", savedLang);
  let currentLang = savedLang;

  function applyLocalization(lang) {
    document.querySelectorAll("[data-i18n]").forEach(element => {
      const key = element.getAttribute("data-i18n");
      if (translations[lang] && translations[lang][key]) {
        if (key === "badgeText") {
          element.innerHTML = `<i class="fa-solid fa-circle-check"></i>${translations[lang][key]}`;
        } else {
          element.textContent = translations[lang][key];
        }
      }
    });
    
    if (langToggleBtn) {
      langToggleBtn.textContent = lang === "en" ? "AZ" : "EN";
    }
    document.documentElement.setAttribute("lang", lang);
    
    resetHeroText(lang);
  }

  if (langToggleBtn) {
    langToggleBtn.addEventListener("click", () => {
      currentLang = currentLang === "en" ? "az" : "en";
      localStorage.setItem("lang", currentLang);
      
      const newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname + (currentLang === "az" ? "?lang=az" : "");
      window.history.pushState({ path: newUrl }, '', newUrl);
      
      applyLocalization(currentLang);
    });
  }

  applyLocalization(currentLang);
});

// 6. Copy Email Clipboard Logic
const emailBtn = document.getElementById('copy-email-btn');
const copyBadge = document.getElementById('copy-badge');
let badgeTimeout = null;

if (emailBtn && copyBadge) {
  emailBtn.addEventListener('click', function(event) {
    event.preventDefault(); 
    const emailText = "hello@pragmatica.io";
    
    navigator.clipboard.writeText(emailText).then(() => {
      if (badgeTimeout) {
        clearTimeout(badgeTimeout);
      }
      
      copyBadge.classList.add('show');
      
      badgeTimeout = setTimeout(() => {
        copyBadge.classList.remove('show');
      }, 5000);
    }).catch(err => {
      console.error('Failed to copy text string: ', err);
    });
  });
}