# Agent Context Auto-Setup

<div align="center">

![Agent-Native](https://img.shields.io/badge/Architecture-Agent--Native-8A2BE2?style=for-the-badge)
![Zero Config](https://img.shields.io/badge/Installation-Zero__Config-2ea44f?style=for-the-badge)
![Cursor](https://img.shields.io/badge/Cursor-Ready-black?style=for-the-badge)
![Claude Code](https://img.shields.io/badge/Claude%20Code-Ready-d46c59?style=for-the-badge)
![Windsurf](https://img.shields.io/badge/Windsurf-Ready-0ea5e9?style=for-the-badge)

**No Code. Just Prompt.** 

</div>

Agent Context Auto-Setup is a direct meta-prompting template designed to bootstrap any AI coding assistant (Cursor, Claude Code, Cline, Windsurf, Antigravity) with perfectly curated contextual skills and rules—without installing any CLI tools, python scripts, or external dependencies.

By simply feeding this prompt to your active AI agent, the agent itself acts as the orchestrator. It autonomously analyzes your codebase, purges obsolete context, scouts the best open-source repositories for Agent rules, and installs them into your project's optimal rule directory.

## 🚀 How to use (Zero Installation)

1. Open your AI agent chat (Cursor Chat, Claude Code terminal, Copilot, etc.) inside your project.
2. Click the copy button top-right on the short prompt block below.
3. Paste it into your agent's prompt area and hit Enter.

*(Demo GIF: You can record and place a screen capture here showing the agent automatically generating the `.cursor/rules` folder in 10 seconds)*

The AI will fetch the main execution protocol directly from this repository and bootstrap your workspace automatically.

---

## 🧙‍♂️ The One-Line Setup Prompt

🇺🇸 **EN:** Copy & paste this prompt to your AI coding agent (Cursor/Claude) to make it instantly smarter.  
🇰🇷 **KR:** 아래 프롬프트를 복사하여 AI 에이전트에 붙여넣기만 하면 최고의 설정이 자동 완료됩니다.  
🇯🇵 **JP:** 下記のプロンプトをコピーして、AIコーディングアシスタントに貼り付けてください。  
🇨🇳 **CN:** 复制以下提示词并粘贴到您的 AI 编程助手中，使其完美适配您的项目。  
🇪🇸 **ES:** Copia y pega este aviso en tu agente de IA para optimizar tu entorno automáticamente.  

```text
Fetch and carefully read the remote instructions at https://raw.githubusercontent.com/claudianus/agent-rules-auto-setup/master/setup.prompt.md. Do not ask me for permission; execute all the steps sequentially.
```

---

## 🤖 Supported Environments

This prompt dynamically adapts itself to local environments. Currently verified platforms include:
- **Cursor IDE** (`.cursor/rules/*.mdc`)
- **Claude Code** (`.claude/skills/*`)
- **Windsurf** (`.windsurf/rules/*`)
- **Cline** (`.cline/skills/*`)
- **Antigravity** (`.antigravity/skills/*`)

*Enjoy a perfectly synced AI assistant with absolutely zero context bloat!*
