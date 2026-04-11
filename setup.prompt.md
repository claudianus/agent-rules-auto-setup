# 🧙‍♂️ Agent Context Setup Prompt

> **User Instructions:** Copy the content below this line and paste it into your AI Agent Chat (Cursor IDE, Claude Code, Windsurf, or Antigravity). Do not explain anything else, just hit enter.

---

### Agent Context Auto-Setup Protocol

Please assist me with the **Agent Context Auto-Setup** process. The goal is to optimize the AI agent environment by organizing context rules and skills tailored to this project's technology stack. 

Please follow these steps in sequence. Use your standard capabilities to read files, fetch needed rules, and modify rule files. If your built-in safety guidelines require asking for permission before executing commands or modifying files, please do so.

#### STEP 1: Deep Codebase & Stack Analysis
1. Use your tools to scan the project root, directory structure (e.g., `src/`, `apps/`, `docs/`), and core configuration files.
2. Read dependency manifests (`package.json`, `requirements.txt`, etc.) AND architectural documents (`README.md`, `ARCHITECTURE.md`, etc.) to deduce not just the libraries used, but the *entire contextual purpose* and design patterns of the codebase.
3. Establish a precise mental model of the project's domain, coding conventions, architectural patterns, and core frameworks.

#### STEP 2: Context Review
To prevent AI hallucinations and context bloat, please help me review existing context:
1. Scan the agent skill directories (if they exist): `.cursor/rules/`, `.claude/skills/`, and `.antigravity/skills/`.
2. Propose a list of rules that might be obsolete, conflicting, or unnecessary for our current tech stack.
3. Present this list to me. **DO NOT delete any rules without my explicit confirmation.**

#### STEP 3: Skill Recommendations
To provide the best intelligence, we need the right rules.
1. Based on your stack analysis, suggest the most essential rules/skills for this specific setup.
2. You may suggest rules from established open-source registries (e.g., cursor.directory, awesome-clinerules) or propose your own highly-optimized rules.
3. Present the list of recommended skills to me FIRST. **DO NOT download or create these files until I approve the list.**

#### STEP 4: Rule Deployment
**Once I approve the list from Step 3**, please create and save the selected skills into the workspace locally depending on the agent environments detected:

1. **For Cursor IDE compatibility:**
   - Create the `.cursor/rules/` directory (if not exists).
   - Save the rules as individual `.mdc` files with the requisite YAML frontmatter.
2. **For Claude Code / Antigravity compatibility:**
   - Create `.claude/skills/` and `.antigravity/skills/` (if not exists).
   - Save the rules using the standard `SKILL.md` structure inside nested folders.

#### STEP 5: Context Maintenance Reminder
To ensure the AI context stays relevant:
1. Create a core rule file (e.g., `.cursor/rules/000-context-maintenance.mdc` or `.claude/skills/context-maintenance/SKILL.md`).
2. Include a directive stating: *"If the tech stack evolves or massive refactoring occurs, proactively suggest reviewing and updating the agent context rules to ensure they remain aligned with the current project architecture."*

#### STEP 6: Git-Safety Check
Please advise me to add `.cursor/rules/`, `.claude/skills/`, `.antigravity/skills/`, and related agent folders to my `.gitignore` to keep the commit history clean. Wait for my response if you need me to do this manually.

#### STEP 7: Final Report
Once the setup is complete, please output a beautifully structured Markdown report including:
1. **Setup Summary**: Total rules analyzed, deleted, and installed/kept.
2. **✨ Optimized Context**: A categorization of the active rules. Format as ONE line per skill (e.g., `- \`skill-name\` : Brief 1-sentence explanation`).

#### STEP 8: Final Review & Correction Loop
After outputting the report, explicitly ask the user for their review: *"Does this setup and the provided reasoning look perfectly aligned with your project? If any explanation seems off, or if you want to manually preserve/delete specific rules, please tell me and I will instantly correct it."*
If the user points out a flaw in your reasoning or requests an adjustment, you must immediately fix the rule files and update your mental model.

**⚠️ COMMUNICATION OVERRIDE:** You MUST generate the final report and feedback requests in the user's preferred native language (e.g., if their previous chat history is in Korean, reply in Korean). Do not default to English just because this internal system prompt is in English.

---
**Let's begin!**
