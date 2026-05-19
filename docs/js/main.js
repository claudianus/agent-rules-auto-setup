const SETUP_PROMPT =
  "Fetch the instructions at https://raw.githubusercontent.com/claudianus/agent-rules-auto-setup/master/setup.prompt.md and help me optimize our context rules step-by-step.";

const PROMPT_URL =
  "https://raw.githubusercontent.com/claudianus/agent-rules-auto-setup/master/setup.prompt.md";

function renderPromptBox(el) {
  const [before, after] = SETUP_PROMPT.split(PROMPT_URL);
  el.replaceChildren();

  const lead = document.createElement("p");
  lead.className = "prompt-line";
  lead.textContent = before.trim();
  el.appendChild(lead);

  const url = document.createElement("code");
  url.className = "prompt-url";
  url.textContent = PROMPT_URL;
  el.appendChild(url);

  const tail = document.createElement("p");
  tail.className = "prompt-line";
  tail.textContent = after.trim();
  el.appendChild(tail);
}

const promptEl = document.getElementById("setup-prompt");
if (promptEl) renderPromptBox(promptEl);

function flashAllCopyButtons() {
  document.querySelectorAll("[data-copy]").forEach((btn) => {
    const label = btn.querySelector(".btn-label");
    if (!label) return;
    if (!label.dataset.orig) label.dataset.orig = label.textContent;
    btn.classList.add("copied");
    label.textContent = "복사 완료!";
  });
  setTimeout(() => {
    document.querySelectorAll("[data-copy]").forEach((btn) => {
      btn.classList.remove("copied");
      const label = btn.querySelector(".btn-label");
      if (label?.dataset.orig) label.textContent = label.dataset.orig;
    });
  }, 2200);
}

async function copyPrompt() {
  try {
    await navigator.clipboard.writeText(SETUP_PROMPT);
    flashAllCopyButtons();
  } catch {
    const ta = document.createElement("textarea");
    ta.value = SETUP_PROMPT;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    document.body.removeChild(ta);
    flashAllCopyButtons();
  }
}

document.querySelectorAll("[data-copy]").forEach((btn) => {
  btn.addEventListener("click", () => copyPrompt());
});

const stickyCopy = document.getElementById("sticky-copy");
const startSection = document.getElementById("start");
if (stickyCopy && startSection) {
  const mq = window.matchMedia("(max-width: 768px)");
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (!mq.matches) {
        stickyCopy.classList.remove("is-visible");
        document.body.classList.remove("has-sticky-copy");
        return;
      }
      const show = !entry.isIntersecting;
      stickyCopy.classList.toggle("is-visible", show);
      document.body.classList.toggle("has-sticky-copy", show);
    },
    { threshold: 0, rootMargin: "-72px 0px 0px 0px" }
  );
  observer.observe(startSection);
  mq.addEventListener("change", () => {
    if (!mq.matches) {
      stickyCopy.classList.remove("is-visible");
      document.body.classList.remove("has-sticky-copy");
    }
  });
}

document.querySelectorAll(".faq-q").forEach((btn) => {
  btn.addEventListener("click", () => {
    const item = btn.closest(".faq-item");
    const wasOpen = item.classList.contains("open");
    document.querySelectorAll(".faq-item").forEach((i) => {
      i.classList.remove("open");
      const q = i.querySelector(".faq-q");
      if (q) q.setAttribute("aria-expanded", "false");
    });
    if (!wasOpen) {
      item.classList.add("open");
      btn.setAttribute("aria-expanded", "true");
    }
  });
});

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => nav.classList.toggle("open"));
  nav.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => nav.classList.remove("open"));
  });
}
