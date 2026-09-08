const translations = {
  en: {
    "nav.github": "GitHub",
    "hero.slogan": "Write visually. Typeset with LaTeX.",
    "hero.description": "A visual, structured academic writing environment powered by LaTeX.",
    "hero.download": "Download for macOS",
    "hero.github": "View on GitHub",
    "hero.release": "Public Preview v0.2 · macOS · Apple Silicon",
    "write.title": "Write, don’t code",
    "write.body": "Work with the ideas on the page. AcaTex keeps the LaTeX precise and out of your way.",
    "write.traditional": "Traditional",
    "write.theory": "Theory",
    "structure.title": "Your paper has structure",
    "structure.body": "Navigate arguments, evidence, citations, and outputs as one coherent document.",
    "structure.intro": "Introduction",
    "structure.question": "Research Question",
    "structure.theory": "Theory",
    "structure.equation": "Equation 1",
    "structure.data": "Data",
    "structure.figure": "Figure 1",
    "structure.results": "Results",
    "structure.table": "Table 1",
    "layouts.title": "Structured layouts",
    "layouts.body": "Compose text, figures, and tables in balanced, publication-ready columns.",
    "tools.title": "Academic writing tools",
    "tools.equations": "Equations",
    "tools.citations": "Citations",
    "tools.footnotes": "Footnotes",
    "tools.figures": "Figures",
    "tools.tables": "Tables",
    "tools.templates": "Templates",
    "latex.title": "LaTeX underneath",
    "latex.body": "A visual workflow with a durable, portable typesetting system at its core.",
    "latex.editor": "Visual Editor",
    "latex.document": "Structured Document",
    "language.title": "Chinese & English",
    "language.body": "Write in English, Simplified Chinese, or both—within the same structured document.",
    "local.title": "Local-first",
    "local.body": "Your writing workflow can stay on your Mac, from the first sentence to the final PDF.",
    "local.writing": "Writing",
    "local.tectonic": "Tectonic compilation",
    "local.bibliography": "Bibliography processing",
    "local.pdf": "PDF generation",
    "cta.title": "The paper is yours. The typesetting is handled.",
    "cta.body": "AcaTex public preview is available for Apple Silicon Macs."
  },
  zh: {
    "nav.github": "GitHub",
    "hero.slogan": "可视化写作，使用 LaTeX 排版。",
    "hero.description": "由 LaTeX 驱动的可视化、结构化学术写作环境。",
    "hero.download": "下载 macOS 版",
    "hero.github": "在 GitHub 上查看",
    "hero.release": "公开预览版 v0.2 · macOS · Apple 芯片",
    "write.title": "专注写作，而非代码",
    "write.body": "直接处理页面上的观点与内容，准确的 LaTeX 排版交给 AcaTex。",
    "write.traditional": "传统方式",
    "write.theory": "理论",
    "structure.title": "论文，自有其结构",
    "structure.body": "在同一份文档中清晰组织论点、证据、引用与图表。",
    "structure.intro": "引言",
    "structure.question": "研究问题",
    "structure.theory": "理论",
    "structure.equation": "公式 1",
    "structure.data": "数据",
    "structure.figure": "图 1",
    "structure.results": "结果",
    "structure.table": "表 1",
    "layouts.title": "结构化布局",
    "layouts.body": "让正文、图表和数据以平衡、可发表的分栏形式组合。",
    "tools.title": "学术写作工具",
    "tools.equations": "公式",
    "tools.citations": "引用",
    "tools.footnotes": "脚注",
    "tools.figures": "图片",
    "tools.tables": "表格",
    "tools.templates": "模板",
    "latex.title": "底层仍是 LaTeX",
    "latex.body": "可视化的写作流程，建立在可靠、可移植的排版系统之上。",
    "latex.editor": "可视化编辑器",
    "latex.document": "结构化文档",
    "language.title": "中文与英文",
    "language.body": "支持英文、简体中文，以及同一份文档中的中英混排。",
    "local.title": "本地优先",
    "local.body": "从第一句话到最终 PDF，完整写作流程都可以留在你的 Mac 上。",
    "local.writing": "写作",
    "local.tectonic": "Tectonic 编译",
    "local.bibliography": "参考文献处理",
    "local.pdf": "PDF 生成",
    "cta.title": "论文由你完成，排版交给 AcaTex。",
    "cta.body": "AcaTex 公开预览版现已支持 Apple 芯片 Mac。"
  }
};

const languageButtons = document.querySelectorAll(".lang-button");

function setLanguage(language) {
  const lang = translations[language] ? language : "en";
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = translations[lang][element.dataset.i18n];
    if (value) element.textContent = value;
  });
  languageButtons.forEach((button) => {
    const active = button.dataset.lang === lang;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  document.title = lang === "zh"
    ? "AcaTex — 可视化写作，使用 LaTeX 排版"
    : "AcaTex — Write visually. Typeset with LaTeX.";
  try { localStorage.setItem("acatex-language", lang); } catch (_) { /* local files may block storage */ }
}

languageButtons.forEach((button) => button.addEventListener("click", () => setLanguage(button.dataset.lang)));

let savedLanguage = "en";
try { savedLanguage = localStorage.getItem("acatex-language") || "en"; } catch (_) { /* use English */ }
setLanguage(savedLanguage);

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const reveals = document.querySelectorAll(".reveal");
if (reducedMotion || !("IntersectionObserver" in window)) {
  reveals.forEach((element) => element.classList.add("is-visible"));
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  reveals.forEach((element) => observer.observe(element));
}

const citation = document.querySelector(".citation-demo");
const toggleCitation = () => citation.classList.toggle("is-converted");
citation.addEventListener("click", toggleCitation);
if (!reducedMotion) setInterval(toggleCitation, 2600);

const mapItems = [...document.querySelectorAll(".map-section")];
let activeMap = 0;
if (!reducedMotion) {
  setInterval(() => {
    mapItems[activeMap].classList.remove("is-active");
    activeMap = (activeMap + 1) % mapItems.length;
    mapItems[activeMap].classList.add("is-active");
  }, 2200);
}

const layoutCanvas = document.querySelector(".layout-canvas");
const layoutButtons = document.querySelectorAll(".layout-button");
layoutButtons.forEach((button) => {
  button.addEventListener("click", () => {
    layoutCanvas.dataset.layout = button.dataset.ratio;
    layoutButtons.forEach((item) => item.classList.toggle("is-active", item === button));
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();
