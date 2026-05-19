# ⚡ Agent Context Auto-Setup

<div align="center">

![Agent-Native](https://img.shields.io/badge/Architecture-Agent--Native-8A2BE2?style=for-the-badge)
![Zero Config](https://img.shields.io/badge/Installation-Zero__Config-2ea44f?style=for-the-badge)
![Cursor](https://img.shields.io/badge/IDE-Cursor-black?style=for-the-badge&logo=cursor)
![Claude Code](https://img.shields.io/badge/CLI-Claude_Code-d46c59?style=for-the-badge&logo=anthropic)
![Windsurf](https://img.shields.io/badge/IDE-Windsurf-0ea5e9?style=for-the-badge)

**No Code. Just Prompt.**<br>
*Instantly optimize, align, and detox your AI coding assistant's context.*

</div>

---

## 🧙‍♂️ The One-Line Setup Prompt

<img src="https://flagcdn.com/w20/us.png" width="16" alt="US"/> **EN:** Copy & paste this prompt to your AI coding agent (Cursor/Claude) to make it instantly smarter.  
<img src="https://flagcdn.com/w20/kr.png" width="16" alt="KR"/> **KR:** 아래 프롬프트를 복사하여 AI 에이전트에 붙여넣기만 하면 최고의 설정이 자동 완료됩니다.  
<img src="https://flagcdn.com/w20/jp.png" width="16" alt="JP"/> **JP:** 下記のプロンプトをコピーして、AIコーディングアシスタントに貼り付けてください。  
<img src="https://flagcdn.com/w20/cn.png" width="16" alt="CN"/> **CN:** 复制以下提示词并粘贴到您的 AI 编程助手中，使其完美适配您的项目。  
<img src="https://flagcdn.com/w20/es.png" width="16" alt="ES"/> **ES:** Copia y pega este aviso en tu agente de IA para optimizar tu entorno automáticamente.  

<br>

🔥 **=============================================================** 🔥  
👇👇👇 **COPY & PASTE THIS PROMPT TO YOUR AI AGENT** 👇👇👇  

```text
Fetch the instructions at https://raw.githubusercontent.com/claudianus/agent-rules-auto-setup/master/setup.prompt.md and help me optimize our context rules step-by-step.
```

👆👆👆 **COPY & PASTE THIS PROMPT TO YOUR AI AGENT** 👆👆👆  
🔥 **=============================================================** 🔥  

---

## 🚀 Why Use This? (The Problem)

AI assistants (like Cursor or Claude Code) are incredibly smart, but they **hallucinate** or **write bad code** if their project context is bloated or missing. 
Usually, developers solve this by manually searching for rule files (`.mdc`), downloading them, and dropping them into folders. This is tedious, and over time, the rules become outdated when your tech stack evolves.

**Agent Context Auto-Setup** solves this completely by turning the AI agent into its own context manager.

## 🛠️ How it Works (8-Step Workflow)

By simply feeding the prompt above to your active AI agent, you trigger a meta-prompt sequence. Your agent safely:

1. 🕵️ **Deep Codebase Analysis:** Scans manifests and docs; outputs a stack keyword list.
2. 🧹 **Smart Context Review:** Proposes obsolete rules for removal — **never deletes without your confirmation.**
3. 📥 **Registry Harvest:** Browses **four whitelisted GitHub registries**, scores matches (max 50), and prints an install manifest.
4. ⚙️ **Auto-Install (manifest-once):** Unless you object to the manifest in the same turn, fetches raw rules/skills and deploys to `.cursor/`, `.claude/`, etc.
5. 🧬 **Context Maintenance Reminder:** Plants a meta-rule to re-run setup when the stack changes (with your consent to fetch).
6. 🛡️ **Git-Safety:** Idempotently updates `.gitignore` for agent context folders.
7. 📋 **Final Report:** Summary, per-item `repo@path` sources, and one-line categorized context list.
8. 🙋‍♂️ **Correction Loop:** You can request fixes; the agent updates files immediately.

### Whitelisted registries

The agent **must** search these repos (details in [registries.md](registries.md)):

| Registry | Repository |
|----------|------------|
| Cursor rules (`.mdc`) | [PatrickJS/awesome-cursorrules](https://github.com/PatrickJS/awesome-cursorrules) |
| Agent skills (`SKILL.md`) | [sickn33/antigravity-awesome-skills](https://github.com/sickn33/antigravity-awesome-skills) |
| Cline / legacy rules | [JhonMA82/awesome-clinerules](https://github.com/JhonMA82/awesome-clinerules) |
| Cursor-native skills | [spencerpauly/awesome-cursor-skills](https://github.com/spencerpauly/awesome-cursor-skills) |

Fallback: [cursor.directory](https://cursor.directory) only when the four repos lack a match.

## 🤖 Supported Environments

This prompt dynamically adapts itself to your local IDE/CLI tool. Currently verified zero-config platforms include:

- **Cursor IDE** (`.cursor/rules/*.mdc`, `.cursor/skills/*/SKILL.md`)
- **Windsurf** (`.windsurf/rules/*`)
- **Claude Code CLI** (`.claude/skills/*`)
- **Cline** (`.cline/skills/*`)
- **Antigravity** (`.antigravity/skills/*`)

---

<div align="center">
<i>Enjoy a perfectly synced AI assistant with absolutely zero context bloat!</i>
</div>
