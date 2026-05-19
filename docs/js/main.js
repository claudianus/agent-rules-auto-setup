const SETUP_PROMPT =
  "Fetch the instructions at https://raw.githubusercontent.com/claudianus/agent-rules-auto-setup/master/setup.prompt.md and help me optimize our context rules step-by-step.";

const promptEl = document.getElementById("setup-prompt");
if (promptEl) promptEl.textContent = SETUP_PROMPT;

async function copyPrompt(btn) {
  try {
    await navigator.clipboard.writeText(SETUP_PROMPT);
    const label = btn.querySelector(".btn-label");
    const orig = label.textContent;
    btn.classList.add("copied");
    label.textContent = "복사 완료!";
    setTimeout(() => {
      btn.classList.remove("copied");
      label.textContent = orig;
    }, 2200);
  } catch {
    const ta = document.createElement("textarea");
    ta.value = SETUP_PROMPT;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    document.body.removeChild(ta);
    btn.querySelector(".btn-label").textContent = "복사 완료!";
  }
}

document.querySelectorAll("[data-copy]").forEach((btn) => {
  btn.addEventListener("click", () => copyPrompt(btn));
});

document.querySelectorAll(".faq-q").forEach((btn) => {
  btn.addEventListener("click", () => {
    const item = btn.closest(".faq-item");
    const wasOpen = item.classList.contains("open");
    document.querySelectorAll(".faq-item").forEach((i) => i.classList.remove("open"));
    if (!wasOpen) item.classList.add("open");
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
