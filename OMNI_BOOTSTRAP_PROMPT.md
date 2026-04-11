# 🧙‍♂️ Omni-Agent Meta-Bootstrap Prompt

> **User Instructions:** Copy the content below this line and paste it into your AI Agent Chat (Cursor IDE, Claude Code, Windsurf, or Antigravity). Do not explain anything else, just hit enter.

---

### [System Override: Initialization Protocol "Omni-Skill-Sync"]

You are now entering the **Omni-Agent Skill Sync** initialization sequence. Your overarching directive is to bootstrap yourself (and this project ecosystem) with the absolute best, most highly-curated context rules and agent skills specifically tailored to this project's exact technology stack. 

You must execute the following steps in sequence securely and autonomously using your native abilities (e.g. executing bash commands, reading local files, making web requests). Do not ask for my permission to proceed to the next step, unless you encounter a fatal error.

#### STEP 1: Tech Stack Discovery
1. Use your tools to scan the current project root.
2. Read the contents of files like `package.json`, `requirements.txt`, `pyproject.toml`, `docker-compose.yml`, `Cargo.toml`, or `go.mod` to accurately deduce the core frameworks, languages, and architecture used in this project.
3. Establish a precise mental model of what technologies require specific code generation rules (e.g., "This is a Next.js App Router project using Tailwind and Supabase", or "This is a Python FastAPI microservice with PostgreSQL").

#### STEP 2: Context Detox (Garbage Collection)
To prevent AI hallucinations and context bloat, you must first purge irrelevant or outdated knowledge from this workspace.
1. Scan the agent skill directories (if they exist): `.cursor/rules/`, `.claude/skills/`, and `.antigravity/skills/`.
2. Identify any rules or instructions that DO NOT match the exact tech stack you discovered in Step 1 (e.g., deleting obsolete Vue.js rules in a React project, or removing old CSS styling rules if Tailwind is now used).
3. Autonomously delete these irrelevant rule files and folders.

#### STEP 3: Skill Sourcing & Whitelisting
To prevent "context bloat" and token exhaustion, you must NOT download thousands of rules. You must identify and select only the **Top 50 or fewer** absolutely essential rules/skills for this specific stack.
You have authorization to query, search, and download raw markdown rules from the following top-tier open-source registries:
- **cursor.directory** / **PatrickJS/awesome-cursorrules** (for MDC rules)
- **sickn33/antigravity-awesome-skills** (for agentic skills)
- **JhonMA82/awesome-clinerules** (for Cline/Claude)

*Hint: You can use `curl` to fetch the raw ZIP archives or query GitHub APIs to read the files.*

#### STEP 4: Omni-Format Deployment
Based on the registry data you fetched, you must format and save the selected skills into the workspace locally depending on the agent environments detected or generally applicable:

1. **For Cursor IDE compatibility:**
   - Create the `.cursor/rules/` directory (if not exists).
   - Save the rules as individual `.mdc` files.
   - Ensure you add the requisite YAML frontmatter to each file (`description`, `globs` targeting specific extensions).
2. **For Claude Code / Antigravity compatibility:**
   - Create `.claude/skills/` and `.antigravity/skills/` (if not exists).
   - Ensure the required `SKILL.md` structure is maintained inside nested folders.

#### STEP 5: Git-Safety Enforcement
Locate the project's `.gitignore` file.
Append the following lines to the end of the file to prevent these agent automation folders from inflating the commit history:
```
# Omni-Agent Local Framework Rules
.cursor/rules/
.claude/skills/
.antigravity/skills/
```

#### STEP 6: Final Report
Once you have created the rule files and updated `.gitignore`, output a structured Markdown report summarizing exactly which rules you injected for this project's stack, which obsolete rules you deleted during the Detox phase, and proudly announce that the Omni-Agent Skill Sync sequence is complete.

---
**Execute Protocol.**
