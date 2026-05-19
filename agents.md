# Supported AI Coding Agents

Reference for **Agent Context Auto-Setup**. Use with [setup.prompt.md](setup.prompt.md) and [registries.md](registries.md).

The [Agent Skills](https://agentskills.io/) layout (`<dir>/<skill-name>/SKILL.md`) is the shared format across most tools. **`.agents/skills/`** is the cross-agent hub — install here whenever a registry delivers `SKILL.md` content.

---

## Agent matrix

| Agent | Detect signals | Project paths (rules / skills / context) | Install format |
|-------|----------------|------------------------------------------|----------------|
| **Cursor** | `.cursor/`, Cursor settings | `.cursor/rules/*.mdc`, `.cursor/skills/*/SKILL.md` | `.mdc`, `SKILL.md` |
| **Windsurf (Cascade)** | `.windsurf/`, Codeium | `.windsurf/rules/*.md`, `.windsurf/skills/*/SKILL.md`, `.windsurfrules` (legacy) | Markdown, `SKILL.md` |
| **Claude Code** | `.claude/`, `CLAUDE.md` | `.claude/skills/*/SKILL.md`, `CLAUDE.md` | `SKILL.md`, `CLAUDE.md` |
| **Google Antigravity** | `.antigravity/` | `.antigravity/skills/*/SKILL.md` | `SKILL.md` |
| **Cline** | `.cline/`, Cline extension | `.cline/skills/*/SKILL.md` | `SKILL.md` |
| **GitHub Copilot** | `.github/copilot*`, Copilot in VS Code | `.github/skills/*/SKILL.md`, `.github/copilot-instructions.md` | `SKILL.md`, Markdown |
| **OpenAI Codex** | `codex`, `.codex/` | `AGENTS.md` (root/nested), `.agents/skills/*/SKILL.md` | `AGENTS.md`, `SKILL.md` |
| **OpenCode** | `.opencode/`, `opencode.json` | `.opencode/skills/*/SKILL.md` (also reads `.claude/`, `.agents/`) | `SKILL.md` |
| **Gemini CLI** | `.gemini/`, `gemini` CLI | `GEMINI.md` (root, parents, JIT by file path), `~/.gemini/GEMINI.md` (global) | `GEMINI.md` |
| **Continue** | `.continue/`, Continue extension | `.continue/rules/*.md` | Markdown + YAML frontmatter |
| **Roo Code** | `.roo/`, Roo extension | `.roo/rules/**/*.md`, `.roorules`, `AGENTS.md` | Markdown |
| **Zed** | Zed project | `.rules`, `.cursorrules`, `.windsurfrules`, `.clinerules`, `AGENTS.md`, `CLAUDE.md`, `GEMINI.md`, `.github/copilot-instructions.md` (first match) | Markdown |
| **Amazon Q Developer** | Amazon Q in IDE | `.amazonq/rules/*.md` | Markdown |
| **Augment (Auggie)** | `.augment/`, Augment extension | `.augment/rules/**/*.md`, `.augment-guidelines`, `AGENTS.md`, `CLAUDE.md` | Markdown |
| **JetBrains Junie** | `.junie/`, Junie plugin | `.junie/AGENTS.md`, `AGENTS.md` | `AGENTS.md` |
| **Kiro** | `.kiro/`, Kiro IDE | `.kiro/steering/*.md`, `AGENTS.md` in workspace/global steering | Markdown + optional YAML `inclusion` |
| **Devin (Terminal)** | `.devin/`, `devin` CLI | `.devin/skills/*/SKILL.md`, `.agents/skills/*/SKILL.md` | `SKILL.md` |
| **Trae** | Trae IDE, `trae` config | Project **Rules** (IDE); community repos often mirror `.cursor/rules` — prefer `.cursor/` or `.agents/skills/` for file-based rules | Markdown / `SKILL.md` |
| **Aider** | `.aider*`, `aider` CLI | `CONVENTIONS.md`, `.aider.conf.yml` (not `SKILL.md`) | Conventions Markdown |
| **AGENTS.md standard** | Any agent listing `AGENTS.md` | `AGENTS.md`, `AGENT.md` at repo root and nested dirs | Markdown |

**Global-only paths (do not write during project setup):** `~/.copilot/skills/`, `~/.agents/skills/`, `~/.claude/skills/`, `~/.config/opencode/skills/`, `~/.codeium/windsurf/skills/`, `~/.config/devin/skills/`, `~/.roo/rules/`, `~/.gemini/GEMINI.md`, `~/.codex/AGENTS.md`, `~/.kiro/steering/`, `~/.continue/rules/`, `~/.augment/rules/`.

---

## Detection (STEP 1)

Mark an agent as **active** if any of:

1. Its project path already exists (e.g. `.github/skills/`).
2. A known config file exists (e.g. `opencode.json`, `.continue/config.yaml`).
3. The user names the tool in chat.
4. **Default fan-out:** If none detected, still install to the **standard project skill hub** (`.agents/skills/`) plus **Cursor** (`.cursor/rules/`, `.cursor/skills/`) — most teams use at least one of these.
5. **Codex session:** If the running agent is Codex, always treat Codex as active and install skills to `.agents/skills/`.

---

## Deploy mapping (STEP 4)

### From registry `SKILL.md` directories

Copy full skill folder to every **active** agent that uses `SKILL.md`, and always to:

| Target | When |
|--------|------|
| `.agents/skills/<id>/` | Always (cross-agent hub) |
| `.cursor/skills/<id>/` | Cursor active or default fan-out |
| `.claude/skills/<id>/` | Claude Code, OpenCode, Antigravity, or default |
| `.antigravity/skills/<id>/` | Antigravity active |
| `.cline/skills/<id>/` | Cline active |
| `.github/skills/<id>/` | GitHub Copilot active |
| `.opencode/skills/<id>/` | OpenCode active |
| `.windsurf/skills/<id>/` | Windsurf active |
| `.devin/skills/<id>/` | Devin CLI active |
| `.agents/skills/<id>/` | **OpenAI Codex active** (Codex official repo skill path) |

**Codex-only note:** Codex does not use `.codex/skills/` in the repo. Skills → `.agents/skills/<id>/`. Stack rules → summarize into root `AGENTS.md` (append only; never overwrite without confirmation).

### From `awesome-cursorrules` (`rules/*.mdc`)

| Target | Transform |
|--------|-----------|
| `.cursor/rules/<name>.mdc` | As-is (fix frontmatter if needed) |
| `.windsurf/rules/<name>.md` | Body only if tool rejects YAML; keep sections |
| `.continue/rules/<name>.md` | Keep YAML frontmatter; add `name`, `description`, `globs` |
| `.roo/rules/<name>.md` | Markdown body + short header |
| `.amazonq/rules/<name>.md` | Plain Markdown |
| `.augment/rules/<name>.md` | Plain Markdown + optional frontmatter `type: agent_requested` |
| `.kiro/steering/<name>.md` | Plain Markdown; optional `inclusion: fileMatch` from globs |
| Root `AGENTS.md` (append) | **Codex active:** summarize key conventions as Markdown bullets — append only |

### From `awesome-clinerules` (`rules/*/.cursorrules`)

Same as `.mdc` row, but convert to `.mdc` for Cursor and to Markdown for other rule stores.

### From `awesome-cursor-skills` (`resources/<name>/`)

Install to `.cursor/skills/<name>/` and mirror to `.agents/skills/<name>/` (and other active `SKILL.md` paths).

### Context files (optional, do not overwrite without confirmation)

| File | Use |
|------|-----|
| `AGENTS.md` | Append a short **“Agent context”** section only if missing or user asks |
| `GEMINI.md` | Same — optional stack summary for Gemini CLI |
| `CLAUDE.md` | Optional pointer to `.claude/skills/` for Claude Code users |
| `CONVENTIONS.md` | Aider only — high-level stack bullets, not full skill dumps |

---

## `.gitignore` block (STEP 6)

Append once if not already present:

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

Do **not** ignore `AGENTS.md`, `GEMINI.md`, or `CLAUDE.md` unless the team explicitly wants generated context files untracked.

---

## Official documentation links

| Agent | Docs |
|-------|------|
| Agent Skills spec | https://agentskills.io/specification |
| AGENTS.md standard | https://agents.md/ |
| Cursor | https://cursor.com/docs |
| Windsurf skills | https://docs.windsurf.com/windsurf/cascade/skills |
| Claude Code | https://docs.anthropic.com/en/docs/claude-code |
| GitHub Copilot skills | https://docs.github.com/en/copilot/how-tos/use-copilot-agents/coding-agent/create-skills |
| OpenAI Codex | https://developers.openai.com/codex/concepts/customization |
| OpenCode | https://opencode.ai/docs/skills |
| Gemini CLI | https://geminicli.com/docs/cli/gemini-md |
| Continue rules | https://docs.continue.dev/customize/deep-dives/rules |
| Roo Code | https://docs.roocode.com/features/custom-instructions |
| Zed rules | https://zed.dev/docs/ai/rules |
| Amazon Q rules | https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/context-project-rules.html |
| Augment rules | https://docs.augmentcode.com/cli/rules |
| Junie | https://junie.jetbrains.com/docs/guidelines-and-memory.html |
| Kiro steering | https://kiro.dev/docs/steering/ |
| Devin skills | https://cli.devin.ai/docs/extensibility/skills/overview |
