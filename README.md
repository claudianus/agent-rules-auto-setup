# Omni-Agent Skill Sync (OASS)

**No Code. Just Prompt.** 

Omni-Agent Skill Sync is a meta-prompting methodology designed to bootstrap any AI coding assistant (Cursor, Claude Code, Cline, Windsurf, Antigravity) with perfectly curated contextual skills and rules—without installing any CLI tools, python scripts, or external dependencies.

By simply feeding the OASS Prompt to your active AI agent, the agent itself acts as the orchestrator. It autonomously analyzes your codebase, scouts the best open-source repositories for Agent rules, and structures them into your project's optimal rule directory.

## 🚀 How to use (Zero Installation)

1. Open your AI agent chat (Cursor Chat, Claude Code terminal, Copilot, etc.) inside your project.
2. Copy and paste the contents of `OMNI_BOOTSTRAP_PROMPT.md` into the prompt area.
3. Hit enter.

The AI will:
- **Scan** your project stack (package.json, requirements.txt, pyproject.toml, docker-compose).
- **Search** the best open-source rule sources (*cursor.directory*, *PatrickJS/awesome-cursorrules*, *sickn33/antigravity-awesome-skills*, *awesome-clinerules*).
- **Download and format** only the core, essential rules specific to your stack.
- **Deploy** them to `.cursor/rules/*.mdc` (if Cursor), `.claude/skills/*` (if Claude), or `.antigravity/skills/*` (if Antigravity).
- **Protect** your repository by updating `.gitignore`.

Enjoy a perfectly synced AI assistant with absolutely zero context bloat!
