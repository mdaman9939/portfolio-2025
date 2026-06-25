/* =====================================================================
   Md Aman — Mini Portfolio Chatbot (client-side, no backend)
   Answers visitor questions about Md Aman. Self-contained:
   injects its own styles + DOM, works on every page.
   To add/edit answers, update the KB array below.
===================================================================== */
(function () {
  "use strict";

  // ---------------- Knowledge base ----------------
  // Each entry: { keys: [...trigger words/phrases...], answer: "..." }
  var KB = [
    { keys: ["hi", "hello", "hey", "namaste", "salam", "hii", "heyy", "good morning", "good evening"],
      answer: "Hi there! 👋 I'm Md Aman's assistant. Ask me anything about him — his skills, projects, experience, education, or how to hire him!" },

    { keys: ["who", "about", "yourself", "kaun", "introduce", "tell me about", "who is md aman", "about md aman"],
      answer: "Md Aman is a <b>Full Stack Developer & AI Engineer</b> based in Bhopal, India. He builds scalable web apps and AI/ML solutions across MERN, Python FastAPI, PHP and modern AI frameworks — from ERP systems to LLM and computer-vision projects. 🚀" },

    { keys: ["role", "what do you do", "profession", "designation", "job title", "kaam", "kya karte"],
      answer: "Md Aman works as a <b>Full Stack Developer & AI Engineer</b>. He currently works as a Technical & Operations Consultant focused on enterprise AI (LLMs & Computer Vision)." },

    { keys: ["skill", "skills", "technology", "technologies", "tech stack", "stack", "expertise", "what can you do", "good at"],
      answer: "Md Aman's core skills:<br>• <b>Frontend:</b> React.js, Angular, JavaScript, TypeScript<br>• <b>Backend:</b> Node.js, Express, NestJS, Python (FastAPI/Flask), PHP<br>• <b>Databases:</b> MongoDB, MySQL, SQL Server<br>• <b>AI/ML:</b> Computer Vision, LLMs, RAG, YOLO, OpenCV<br>• <b>DevOps:</b> Docker, CI/CD, Git, Vercel/Render" },

    { keys: ["experience", "work history", "where do you work", "company", "currently working", "job", "naukri", "employment", "career"],
      answer: "Md Aman's experience:<br>• <b>Super AI Polaris</b> — Technical & Operations Consultant (Sep 2025–Present), working on LLMs & Computer Vision AI.<br>• <b>Biznweb Technologies</b> — Software Engineer (Nov 2024–Aug 2025), built ERP/SaaS systems with React, Node, FastAPI, MongoDB & SQL Server.<br>• <b>OctaNet Services</b> — Web Developer Intern (2024)." },

    { keys: ["education", "study", "college", "degree", "university", "qualification", "btech", "b.tech", "padhai", "graduate"],
      answer: "Md Aman holds a <b>B.Tech in Computer Science</b> from RGPV University, Bhopal (2021–2025), with a CGPA of 7.69/10. He's also certified in Full Stack Web Development and JavaScript Algorithms & DSA. 🎓" },

    { keys: ["project", "projects", "portfolio", "work samples", "apps", "built", "made", "case study"],
      answer: "Some of Md Aman's live projects:<br>• <b>ERP Billing Software</b> (React, Node, SQL Server)<br>• <b>CRM Grievance System</b> (PHP, MySQL)<br>• <b>Hotel Vendor Dashboard</b> (Angular, NestJS)<br>• <b>Hospital Management System</b> (MERN)<br>• <b>Safety Logging App</b> (Bootstrap, MongoDB)<br>👉 See them all on the <a href='projects.htm'>Projects page</a>." },

    { keys: ["ai", "ml", "machine learning", "artificial intelligence", "computer vision", "llm", "rag", "yolo", "opencv", "deep learning"],
      answer: "Md Aman builds AI solutions: real-time object detection (YOLO, OpenCV), LLM apps, RAG pipelines with vector databases, and integrating AI models into production web apps. 🤖" },

    { keys: ["frontend", "front end", "react", "angular", "ui", "user interface"],
      answer: "On the frontend, Md Aman is strong with <b>React.js</b> and <b>Angular</b> (plus JavaScript & TypeScript), building responsive, scalable user interfaces." },

    { keys: ["backend", "back end", "node", "nodejs", "express", "nestjs", "fastapi", "flask", "php", "server", "api", "apis", "microservice"],
      answer: "On the backend, Md Aman works with <b>Node.js/Express/NestJS</b>, <b>Python FastAPI/Flask</b> and <b>PHP</b> — building secure RESTful APIs and microservices with proper auth." },

    { keys: ["database", "db", "mongodb", "mongo", "mysql", "sql", "nosql", "sql server", "data"],
      answer: "Md Aman works with both SQL and NoSQL databases — <b>MongoDB, MySQL, SQL Server</b> — plus vector databases for AI/semantic search, with a focus on clean data modeling and optimization." },

    { keys: ["service", "services", "offer", "hire", "freelance", "contract", "consulting", "available", "work with"],
      answer: "Md Aman is <b>available for freelance, contract & consulting</b> work (remote or on-site). Services: Full Stack Development, AI/ML solutions, APIs & microservices, database architecture, DevOps and enterprise platforms. 👉 <a href='contact.htm'>Get in touch here</a>." },

    { keys: ["price", "pricing", "cost", "charge", "rate", "budget", "kitna", "paisa", "fees"],
      answer: "Pricing depends on the project scope. For well-defined work Md Aman quotes a fixed price; for ongoing work, hourly/monthly arrangements. Share your requirements on the <a href='contact.htm'>Contact page</a> for a clear estimate. 💬" },

    { keys: ["contact", "email", "phone", "reach", "get in touch", "number", "call", "mail", "connect"],
      answer: "You can reach Md Aman here:<br>📧 <b>mdaman9939@gmail.com</b><br>📞 <b>+91 95080 58363</b><br>📍 Bhopal, India (remote available)<br>👉 Or use the <a href='contact.htm'>Contact page</a>." },

    { keys: ["location", "where", "city", "based", "place", "country", "kahan", "remote"],
      answer: "Md Aman is based in <b>Bhopal, Madhya Pradesh, India</b> 🇮🇳 — and is available for <b>remote work</b> with clients worldwide." },

    { keys: ["resume", "cv", "download resume", "download cv"],
      answer: "You can view Md Aman's full resume — education, skills & experience — on the <a href='resume.htm'>Resume page</a>, with a Download CV option." },

    { keys: ["github", "linkedin", "instagram", "facebook", "social", "profile", "links"],
      answer: "Connect with Md Aman:<br>• GitHub: <a href='https://github.com/mdaman9939' target='_blank'>@mdaman9939</a><br>• LinkedIn: <a href='https://www.linkedin.com/in/mdaman9939/' target='_blank'>@mdaman9939</a><br>• Instagram: <a href='https://www.instagram.com/mdaman9939/' target='_blank'>@mdaman9939</a>" },

    { keys: ["why hire", "why you", "why should", "best", "strength", "strong", "good developer"],
      answer: "Why hire Md Aman? He bridges <b>full-stack development + AI</b> — so he can build the whole product, from UI to API to AI model, and ship it to production. He's shipped real ERP, CRM, hospital & AI systems, not just demos. ✅" },

    { keys: ["certification", "certificate", "course", "certified"],
      answer: "Md Aman's certifications: <b>Full Stack Web Development</b> (Coding Thinker, 2023), <b>JavaScript Algorithms & Data Structures</b> (Coding Thinker, 2023), and hands-on AI/ML & Computer Vision (self-trained through real projects)." },

    { keys: ["language", "languages", "programming language", "code in"],
      answer: "Md Aman is a polyglot developer — he codes in <b>JavaScript, Python and PHP</b>, plus the frameworks and AI tools built on top of them." },

    { keys: ["blog", "article", "writing", "read"],
      answer: "Md Aman writes about Full Stack, AI/ML, RAG, YOLO and DevOps. 👉 Check out the <a href='blog.htm'>Blog page</a>." },

    { keys: ["thanks", "thank you", "thank", "shukriya", "dhanyawad", "thx"],
      answer: "You're welcome! 😊 Feel free to ask anything else, or reach out to Md Aman directly on the <a href='contact.htm'>Contact page</a>." },

    { keys: ["bye", "goodbye", "see you", "good night", "ok bye"],
      answer: "Goodbye! 👋 Don't forget to check out the projects and get in touch if you'd like to work with Md Aman!" }
  ];

  var FALLBACK = "I'm not totally sure about that 🤔 — but I can tell you about Md Aman's <b>skills, projects, experience, education, services</b> or <b>how to contact him</b>. Try asking \"What are your skills?\" or \"How can I contact you?\"";

  var QUICK = ["Skills", "Projects", "Experience", "Education", "Contact", "Hire me"];

  // ---------------- Matching ----------------
  function getAnswer(text) {
    var q = " " + text.toLowerCase().replace(/[^a-z0-9\s]/g, " ") + " ";
    var best = null, bestScore = 0;
    KB.forEach(function (entry) {
      var score = 0;
      entry.keys.forEach(function (k) {
        if (q.indexOf(" " + k + " ") !== -1) score += k.split(" ").length * 2; // phrase match weighted
        else if (q.indexOf(k) !== -1) score += 1;
      });
      if (score > bestScore) { bestScore = score; best = entry; }
    });
    return best ? best.answer : FALLBACK;
  }

  // ---------------- Styles ----------------
  var css = '' +
  '#mab-launcher{position:fixed;left:24px;bottom:24px;z-index:99998;width:56px;height:56px;border-radius:50%;border:none;cursor:pointer;background:var(--color-primary,#ff014f);color:#fff;display:flex;align-items:center;justify-content:center;box-shadow:0 8px 22px rgba(0,0,0,.3);transition:transform .2s ease;}' +
  '#mab-launcher:hover{transform:scale(1.08);}' +
  '#mab-launcher .mab-badge{position:absolute;top:-3px;right:-3px;width:14px;height:14px;background:#25D366;border-radius:50%;border:2px solid #fff;}' +
  '#mab-window{position:fixed;left:24px;bottom:92px;z-index:99999;width:350px;max-width:calc(100vw - 32px);height:480px;max-height:72vh;background:#fff;border-radius:16px;box-shadow:0 16px 48px rgba(0,0,0,.35);display:none;flex-direction:column;overflow:hidden;font-family:inherit;}' +
  '#mab-window.mab-open{display:flex;animation:mabIn .22s ease;}' +
  '@keyframes mabIn{from{opacity:0;transform:translateY(14px);}to{opacity:1;transform:translateY(0);}}' +
  '.mab-head{background:var(--color-primary,#ff014f);color:#fff;padding:14px 16px;display:flex;align-items:center;gap:10px;}' +
  '.mab-head img{width:38px;height:38px;border-radius:50%;object-fit:cover;border:2px solid rgba(255,255,255,.6);}' +
  '.mab-head .mab-t{font-weight:700;font-size:15px;line-height:1.2;}' +
  '.mab-head .mab-s{font-size:11px;opacity:.9;display:flex;align-items:center;gap:5px;}' +
  '.mab-head .mab-dot{width:7px;height:7px;border-radius:50%;background:#3bff8f;display:inline-block;}' +
  '.mab-close{margin-left:auto;background:none;border:none;color:#fff;cursor:pointer;font-size:22px;line-height:1;padding:0 4px;}' +
  '.mab-body{flex:1;overflow-y:auto;padding:16px;background:#f4f6f9;}' +
  '.mab-msg{max-width:84%;padding:10px 13px;border-radius:14px;margin-bottom:10px;font-size:13.5px;line-height:1.5;word-wrap:break-word;}' +
  '.mab-bot{background:#fff;color:#2a2d33;border:1px solid #e7ebf0;border-bottom-left-radius:4px;}' +
  '.mab-user{background:var(--color-primary,#ff014f);color:#fff;margin-left:auto;border-bottom-right-radius:4px;}' +
  '.mab-msg a{color:var(--color-primary,#ff014f);font-weight:600;text-decoration:underline;}' +
  '.mab-user a{color:#fff;}' +
  '.mab-quick{display:flex;flex-wrap:wrap;gap:7px;padding:0 16px 10px;background:#f4f6f9;}' +
  '.mab-chip{background:#fff;border:1px solid var(--color-primary,#ff014f);color:var(--color-primary,#ff014f);border-radius:18px;padding:6px 12px;font-size:12px;cursor:pointer;transition:.15s;}' +
  '.mab-chip:hover{background:var(--color-primary,#ff014f);color:#fff;}' +
  '.mab-foot{display:flex;gap:8px;padding:10px 12px;border-top:1px solid #e7ebf0;background:#fff;}' +
  '.mab-foot input{flex:1;border:1px solid #d8dee6;border-radius:22px;padding:10px 14px;font-size:13.5px;outline:none;color:#2a2d33;}' +
  '.mab-foot input:focus{border-color:var(--color-primary,#ff014f);}' +
  '.mab-send{background:var(--color-primary,#ff014f);border:none;color:#fff;width:40px;height:40px;border-radius:50%;cursor:pointer;display:flex;align-items:center;justify-content:center;flex:0 0 40px;}' +
  '.mab-typing span{display:inline-block;width:6px;height:6px;margin:0 1px;background:#aab2bd;border-radius:50%;animation:mabBlink 1s infinite;}' +
  '.mab-typing span:nth-child(2){animation-delay:.2s;}.mab-typing span:nth-child(3){animation-delay:.4s;}' +
  '@keyframes mabBlink{0%,100%{opacity:.3;}50%{opacity:1;}}' +
  '@media only screen and (max-width:575px){' +
  '#mab-launcher{left:16px;bottom:16px;width:50px;height:50px;}' +
  '#mab-window{left:16px;right:16px;bottom:78px;width:auto;max-width:none;height:68vh;}' +
  '}';

  // ---------------- Build DOM ----------------
  function init() {
    if (document.getElementById("mab-launcher")) return;

    var style = document.createElement("style");
    style.textContent = css;
    document.head.appendChild(style);

    var launcher = document.createElement("button");
    launcher.id = "mab-launcher";
    launcher.setAttribute("aria-label", "Chat with Md Aman's assistant");
    launcher.innerHTML = '<span class="mab-badge"></span>' +
      '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>';

    var win = document.createElement("div");
    win.id = "mab-window";
    win.innerHTML =
      '<div class="mab-head">' +
        '<img src="assets/images/logo/logos-circle.png" alt="Md Aman">' +
        '<div><div class="mab-t">Md Aman</div><div class="mab-s"><span class="mab-dot"></span> Ask me anything</div></div>' +
        '<button class="mab-close" aria-label="Close chat">&times;</button>' +
      '</div>' +
      '<div class="mab-body" id="mab-body"></div>' +
      '<div class="mab-quick" id="mab-quick"></div>' +
      '<form class="mab-foot" id="mab-form">' +
        '<input id="mab-input" type="text" autocomplete="off" placeholder="Type your question...">' +
        '<button class="mab-send" type="submit" aria-label="Send">' +
          '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>' +
        '</button>' +
      '</form>';

    document.body.appendChild(launcher);
    document.body.appendChild(win);

    var body = win.querySelector("#mab-body");
    var quick = win.querySelector("#mab-quick");
    var form = win.querySelector("#mab-form");
    var input = win.querySelector("#mab-input");
    var greeted = false;

    function scrollDown() { body.scrollTop = body.scrollHeight; }

    function addMsg(html, who) {
      var m = document.createElement("div");
      m.className = "mab-msg " + (who === "user" ? "mab-user" : "mab-bot");
      m.innerHTML = html;
      body.appendChild(m);
      scrollDown();
    }

    function botReply(text) {
      var typing = document.createElement("div");
      typing.className = "mab-msg mab-bot mab-typing";
      typing.innerHTML = "<span></span><span></span><span></span>";
      body.appendChild(typing);
      scrollDown();
      setTimeout(function () {
        typing.remove();
        addMsg(getAnswer(text), "bot");
      }, 550);
    }

    function buildChips() {
      quick.innerHTML = "";
      QUICK.forEach(function (q) {
        var c = document.createElement("button");
        c.type = "button";
        c.className = "mab-chip";
        c.textContent = q;
        c.addEventListener("click", function () {
          addMsg(q, "user");
          botReply(q);
        });
        quick.appendChild(c);
      });
    }

    function openChat() {
      win.classList.add("mab-open");
      if (!greeted) {
        greeted = true;
        addMsg("Hi! 👋 I'm <b>Md Aman's</b> assistant. Ask me anything about his skills, projects, experience or how to hire him!", "bot");
        buildChips();
      }
      setTimeout(function () { input.focus(); }, 100);
    }
    function closeChat() { win.classList.remove("mab-open"); }

    launcher.addEventListener("click", function () {
      win.classList.contains("mab-open") ? closeChat() : openChat();
    });
    win.querySelector(".mab-close").addEventListener("click", closeChat);

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var val = input.value.trim();
      if (!val) return;
      addMsg(val.replace(/</g, "&lt;"), "user");
      input.value = "";
      botReply(val);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
