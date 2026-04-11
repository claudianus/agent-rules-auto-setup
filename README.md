# Agent Context Auto-Setup

<div align="center">

![Agent-Native](https://img.shields.io/badge/Architecture-Agent--Native-8A2BE2?style=for-the-badge)
![Zero Config](https://img.shields.io/badge/Installation-Zero__Config-2ea44f?style=for-the-badge)
![Cursor](https://img.shields.io/badge/Cursor-Ready-black?style=for-the-badge)
![Claude Code](https://img.shields.io/badge/Claude%20Code-Ready-d46c59?style=for-the-badge)
![Windsurf](https://img.shields.io/badge/Windsurf-Ready-0ea5e9?style=for-the-badge)

</div>

## 🧙‍♂️ The One-Line Setup Prompt

🇺🇸 **EN:** Copy & paste this prompt to your AI coding agent (Cursor/Claude) to make it instantly smarter.  
🇰🇷 **KR:** 아래 프롬프트를 복사하여 AI 에이전트에 붙여넣기만 하면 최고의 설정이 자동 완료됩니다.  
🇯🇵 **JP:** 下記のプロンプトをコピーして、AIコーディングアシスタントに貼り付けてください。  
🇨🇳 **CN:** 复制以下提示词并粘贴到您的 AI 编程助手中，使其完美适配您的项目。  
🇪🇸 **ES:** Copia y pega este aviso en tu agente de IA para optimizar tu entorno automáticamente.  

```text
Fetch and carefully read the remote instructions at https://raw.githubusercontent.com/claudianus/agent-rules-auto-setup/master/setup.prompt.md. Do not ask me for permission; execute all the steps sequentially.
```

*(Demo GIF Placeholder: Show the agent automatically generating the `.cursor/rules` folder in 10 seconds)*

---

## 🚀 How it works (No Code. Just Prompt.)

Agent Context Auto-Setup is a direct meta-prompting template designed to bootstrap any AI coding assistant with perfectly curated contextual skills and rules—without installing any CLI tools, python scripts, or external dependencies.

By simply feeding the prompt above to your active AI agent, the agent itself acts as the orchestrator. It autonomously:
1. Analyzes your codebase stack
2. Purges obsolete context (Garbage Collection)
3. Scouts the best open-source repositories for Agent rules
4. Installs them into your project's optimal rule directory
5. Secures your `.gitignore`

## 🤖 Supported Environments

This prompt dynamically adapts itself to local environments. Currently verified platforms include:
- **Cursor IDE** (`.cursor/rules/*.mdc`)
- **Claude Code** (`.claude/skills/*`)
- **Windsurf** (`.windsurf/rules/*`)
- **Cline** (`.cline/skills/*`)
- **Antigravity** (`.antigravity/skills/*`)
