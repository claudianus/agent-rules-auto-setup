# Supported AI Coding Agents

Reference for **Agent Context Auto-Setup**. The executing agent should read **[setup.prompt.md](setup.prompt.md)** first — all paths are inlined there. This file is the human-readable companion + official doc links.

Shared skill format: [Agent Skills spec](https://agentskills.io/) → `<dir>/<skill-name>/SKILL.md`

**Universal hub (always install skills here):** `.agents/skills/<name>/` — read by Codex, Copilot, Windsurf, OpenCode, Devin, and others.

---

## Quick matrix

| Agent | Detect | Skills path | Rules / context path |
|-------|--------|-------------|----------------------|
| **Cursor** | `.cursor/`, Cursor session | `.cursor/skills/*/SKILL.md` | `.cursor/rules/*.mdc`, `AGENTS.md` |
| **Claude Code** | `.claude/`, `CLAUDE.md`, session | `.claude/skills/*/SKILL.md` | `CLAUDE.md` |
| **Windsurf** | `.windsurf/`, session | `.windsurf/skills/*/`, `.agents/skills/` | `.windsurf/rules/*.md`, `AGENTS.md` |
| **GitHub Copilot** | `.github/copilot*`, session | `.github/skills/`, `.agents/skills/`, `.claude/skills/` | `.github/copilot-instructions.md`, `.github/instructions/*.instructions.md`, `AGENTS.md` |
| **OpenAI Codex** | Codex session, user says Codex | **`.agents/skills/*/SKILL.md`** | **`AGENTS.md`** (not `.codex/skills/`) |
| **Gemini CLI** | `.gemini/`, session | via `GEMINI.md` + `.agents/skills/` | `GEMINI.md` (root, parents, JIT) |
| **Continue** | `.continue/`, `config.yaml` | — | `.continue/rules/*.md` |
| **Roo Code** | `.roo/`, session | `.agents/skills/` | `.roo/rules/**/*.md`, `.roorules`, `AGENTS.md` |
| **Cline** | `.cline/`, session | `.cline/skills/*/`, `.claude/skills/` | Cline rules (separate) |
| **OpenCode** | `.opencode/`, `opencode.json` | `.opencode/skills/`, `.claude/`, `.agents/` | — |
| **Amazon Q** | `.amazonq/`, session | `.agents/skills/` | `.amazonq/rules/*.md` |
| **Augment** | `.augment/`, `auggie` | — | `.augment/rules/**/*.md`, `AGENTS.md`, `CLAUDE.md` |
| **Kiro** | `.kiro/`, session | — | `.kiro/steering/*.md`, `AGENTS.md` |
| **Devin CLI** | `.devin/`, `devin` | `.devin/skills/`, `.agents/skills/` | — |
| **Antigravity** | `.antigravity/` | `.antigravity/skills/` | — |
| **Zed** | Zed Agent, session | `.agents/skills/` | `.rules`, `AGENTS.md`, `.cursorrules`, … (first match) |
| **Junie** | `.junie/` | `.agents/skills/` | `.junie/AGENTS.md`, `AGENTS.md` |
| **Aider** | `.aider*`, `aider` | — | `CONVENTIONS.md` |

---

## Detection (STEP 1)

Mark **active** if any:

1. **Session:** the running product is that agent (Cursor chat, Codex CLI, etc.).
2. **Paths/config:** project folder or config file exists (see matrix).
3. **User:** user names the tool in chat.
4. **Default fan-out:** none detected → `.agents/skills/` + `.cursor/rules/` + `.cursor/skills/`.

---

## Deploy: SKILL.md folders

Copy **full skill directory** to:

| Target | When |
|--------|------|
| `.agents/skills/<id>/` | **Always** |
| `.cursor/skills/<id>/` | Cursor active or default |
| `.claude/skills/<id>/` | Claude Code, OpenCode, Antigravity, Cline, or default |
| `.windsurf/skills/<id>/` | Windsurf active |
| `.github/skills/<id>/` | Copilot active |
| `.opencode/skills/<id>/` | OpenCode active |
| `.cline/skills/<id>/` | Cline active |
| `.devin/skills/<id>/` | Devin active |
| `.antigravity/skills/<id>/` | Antigravity active |

**Codex:** only needs `.agents/skills/` (official path). No `.codex/skills/` in repo.

---

## Deploy: `.mdc` / `.cursorrules` rules

| Target | Transform |
|--------|-----------|
| `.cursor/rules/<name>.mdc` | As-is |
| `.windsurf/rules/<name>.md` | Map frontmatter → `trigger` / `globs` |
| `.continue/rules/<name>.md` | Add `name`, `description`, `globs`, `alwaysApply` |
| `.roo/rules/<name>.md` | Markdown + header |
| `.amazonq/rules/<name>.md` | Plain Markdown |
| `.augment/rules/<name>.md` | + optional `type: agent_requested` |
| `.kiro/steering/<name>.md` | + optional `inclusion: fileMatch` |
| `.github/instructions/<name>.instructions.md` | Copilot path-specific; `applyTo:` globs |
| `.github/copilot-instructions.md` | Copilot repo-wide (append) |
| `AGENTS.md` | Codex, Roo, Zed, Junie, Augment — **append bullets only** |
| `GEMINI.md` | Gemini CLI — append |
| `CONVENTIONS.md` | Aider — append |
| `.rules` | Zed-only projects |

---

## Context files (append only unless empty + user OK)

| File | Agents |
|------|--------|
| `AGENTS.md` | Codex, Copilot, Roo, Zed, Windsurf, Junie, Augment |
| `GEMINI.md` | Gemini CLI |
| `CLAUDE.md` | Claude Code |
| `CONVENTIONS.md` | Aider |
| `.github/copilot-instructions.md` | Copilot |

---

## Global paths — never write during project setup

`~/.copilot/skills/` · `~/.agents/skills/` · `~/.claude/skills/` · `~/.config/opencode/skills/` · `~/.codeium/windsurf/skills/` · `~/.config/devin/skills/` · `~/.roo/rules/` · `~/.gemini/GEMINI.md` · `~/.codex/AGENTS.md` · `~/.kiro/steering/` · `~/.continue/rules/` · `~/.augment/rules/` · `~/.cline/skills/`

---

## `.gitignore` block (STEP 6)

```gitignore
# AI agent context (agent-rules-auto-setup)
.cursor/rules/
.cursor/skills/
.claude/skills/
.antigravity/skills/
.windsurf/rules/
.windsurf/skills/
.cline/skills/
.github/skills/
.agents/skills/
.opencode/skills/
.devin/skills/
.continue/rules/
.roo/rules/
.amazonq/rules/
.augment/rules/
.kiro/steering/
```

Do **not** ignore `AGENTS.md`, `GEMINI.md`, `CLAUDE.md`, `.github/copilot-instructions.md` unless team wants that.

---

## Official documentation

| Agent | Docs |
|-------|------|
| Agent Skills | https://agentskills.io/specification |
| AGENTS.md | https://agents.md/ |
| Cursor rules | https://cursor.com/docs/context/rules |
| Claude Code skills | https://docs.anthropic.com/en/docs/claude-code/skills |
| Windsurf skills | https://docs.windsurf.com/windsurf/cascade/skills |
| Windsurf rules | https://docs.windsurf.com/windsurf/cascade/memories |
| Copilot skills | https://docs.github.com/en/copilot/how-tos/use-copilot-agents/coding-agent/create-skills |
| Copilot instructions | https://docs.github.com/en/copilot/customizing-copilot/adding-repository-custom-instructions-for-github-copilot |
| OpenAI Codex | https://developers.openai.com/codex/concepts/customization |
| OpenCode skills | https://opencode.ai/docs/skills |
| Gemini CLI | https://geminicli.com/docs/cli/gemini-md |
| Continue rules | https://docs.continue.dev/customize/deep-dives/rules |
| Roo Code | https://docs.roocode.com/features/custom-instructions |
| Cline skills | https://docs.cline.bot/features/skills |
| Zed rules | https://zed.dev/docs/ai/rules |
| Amazon Q rules | https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/context-project-rules.html |
| Augment rules | https://docs.augmentcode.com/cli/rules |
| Kiro steering | https://kiro.dev/docs/steering/ |
| Devin skills | https://cli.devin.ai/docs/extensibility/skills/overview |
