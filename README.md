# Prompt Architect

Transform vague prompts into expert-level, structured prompts using 7 research-backed frameworks.

A comprehensive Claude Code Skill that analyzes, architects, and iteratively refines prompts through systematic framework application and guided dialogue.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Example Transformation](#example-transformation)
- [Supported Frameworks](#supported-frameworks)
- [Quick Start](#quick-start)
- [Installation](#installation)
- [Usage](#usage)
- [Framework Selection Guide](#framework-selection-guide)
- [Project Structure](#project-structure)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

Prompt Architect is a production-ready Claude Code Skill that elevates your prompting capabilities through:

- **Intelligent Analysis** - Evaluates prompts across 5 quality dimensions (clarity, specificity, context, completeness, structure)
- **Framework Recommendation** - Suggests the best framework(s) for your specific use case with clear reasoning
- **Guided Dialogue** - Asks targeted clarifying questions to gather missing information progressively
- **Systematic Application** - Applies selected framework to transform your prompt
- **Iterative Refinement** - Continues improving based on feedback until perfect

**Target Audience:**
- Developers using Claude Code for software engineering tasks
- Prompt engineers optimizing LLM interactions
- AI practitioners seeking systematic prompt improvement
- Teams wanting consistent, high-quality prompts

---

## Key Features

### 7 Research-Backed Frameworks

| Framework | Best For | Complexity |
|-----------|----------|------------|
| **CO-STAR** | Content creation, writing tasks | High |
| **RISEN** | Multi-step processes, procedures | High |
| **RISE-IE** | Data analysis, transformations (Input-Expectation) | Medium |
| **RISE-IX** | Content creation with examples (Instructions-Examples) | Medium |
| **TIDD-EC** | High-precision tasks with explicit dos/don'ts | Medium |
| **RTF** | Simple, focused tasks | Low |
| **Chain of Thought** | Reasoning, problem-solving | Medium |
| **Chain of Density** | Iterative refinement, summarization | Medium |

### Quality Scoring System

Every prompt is evaluated across:
- **Clarity** (1-10): Is the goal clear and unambiguous?
- **Specificity** (1-10): Are requirements detailed enough?
- **Context** (1-10): Is background information provided?
- **Completeness** (1-10): Are all necessary elements present?
- **Structure** (1-10): Is the prompt well-organized?

### Progressive Disclosure

- Asks 3-5 targeted questions at a time (never overwhelming)
- Adapts questions based on framework selection
- Builds understanding iteratively
- Confirms assumptions before proceeding

### Continuous Iteration

- Shows before/after comparisons with explanations
- Refines based on your feedback
- Can switch frameworks if initial choice doesn't fit
- Continues until you're satisfied

---

## Example Transformation

### Before
```
"Write about machine learning"
```

**Analysis Scores:**
- Clarity: 2/10 (vague goal)
- Specificity: 1/10 (no details)
- Context: 0/10 (no background)
- Completeness: 2/10 (missing most elements)
- Structure: 3/10 (single sentence)
- **Overall: 1.6/10**

---

### After (CO-STAR Framework)

```
CONTEXT:
Creating content for a business blog aimed at C-level executives exploring
how AI/ML could benefit their organizations. Readers understand business
strategy but have limited technical ML knowledge. Part of an emerging
technologies series.

OBJECTIVE:
Create an engaging article helping executives understand practical machine
learning applications relevant to their companies. Focus on demonstrating
tangible business value and real-world implementation without overwhelming
technical details.

STYLE:
Professional blog style combining narrative with bullet points. Include 2-3
real-world case studies. Structure with clear subheadings every 150-200 words.
Balance storytelling with concrete information. Avoid jargon; when necessary,
provide plain-language explanations.

TONE:
Professional yet approachable and conversational. Confident and authoritative
without being condescending. Practical and business-focused rather than
theoretical.

AUDIENCE:
C-suite executives and senior managers at mid-to-large enterprises who:
- Make strategic technology investment decisions
- Understand business metrics and ROI
- Have limited technical ML knowledge
- Value practical examples over theory

RESPONSE FORMAT:
800-word article structured as:
- Compelling headline (10 words max)
- Brief hook (2-3 sentences)
- 3-4 main sections with descriptive subheadings
- Mix of paragraphs and bullet points
- Clear call-to-action conclusion
```

**Result Scores:**
- Clarity: 9/10
- Specificity: 9/10
- Context: 10/10
- Completeness: 9/10
- Structure: 9/10
- **Overall: 8.8/10**

---

## Supported Frameworks

### CO-STAR (Context, Objective, Style, Tone, Audience, Response)

**Best for:** Content creation, writing tasks, communications

**Components:**
- **Context** - Background information and situation
- **Objective** - Clear goal and purpose
- **Style** - Writing style and formatting approach
- **Tone** - Voice and emotional quality
- **Audience** - Target reader characteristics
- **Response** - Expected format and structure

**Example Use Cases:** Blog posts, emails, presentations, marketing copy, documentation

---

### RISEN (Role, Instructions, Steps, End goal, Narrowing)

**Best for:** Multi-step processes, systematic procedures

**Components:**
- **Role** - Expertise and perspective needed
- **Instructions** - High-level guidance
- **Steps** - Detailed methodology
- **End goal** - Success criteria
- **Narrowing** - Constraints and boundaries

**Example Use Cases:** Code reviews, workflows, systematic analysis, project planning

---

### RISE (Dual Variants)

#### RISE-IE (Input-Expectation)
**Best for:** Data analysis, transformations, processing tasks

**Components:**
- **Role** - Expertise needed
- **Input** - Data format and characteristics
- **Steps** - Processing methodology
- **Expectation** - Output requirements

**Example Use Cases:** CSV analysis, data processing, file transformations, report generation

#### RISE-IX (Instructions-Examples)
**Best for:** Content creation with reference examples

**Components:**
- **Role** - Expertise needed
- **Instructions** - Task guidance
- **Steps** - Workflow process
- **Examples** - Reference samples

**Example Use Cases:** Creative writing, template-based content, style matching

---

### TIDD-EC (Task, Instructions, Do, Don't, Examples, Context)

**Best for:** High-precision tasks requiring explicit boundaries

**Components:**
- **Task type** - Nature of the work
- **Instructions** - What to accomplish
- **Do** - Explicit positive guidance
- **Don't** - Explicit negative guidance (what to avoid)
- **Examples** - Reference samples
- **Context** - Background information

**Example Use Cases:** Code generation with standards, compliance tasks, quality-critical work

---

### RTF (Role, Task, Format)

**Best for:** Simple, well-defined tasks

**Components:**
- **Role** - Expertise required
- **Task** - What needs to be done
- **Format** - Output structure

**Example Use Cases:** Quick conversions, simple formatting, straightforward requests

---

### Chain of Thought

**Best for:** Complex reasoning and problem-solving

**Approach:**
- Breaks down reasoning into explicit steps
- Shows work and intermediate conclusions
- Verifies logic at each stage
- Builds to final answer

**Example Use Cases:** Math problems, debugging, decision analysis, logical reasoning

---

### Chain of Density

**Best for:** Iterative refinement and compression

**Approach:**
- Starts with baseline version
- Progressively refines through iterations
- Increases information density
- Optimizes for specific goals

**Example Use Cases:** Summarization, content compression, explanation optimization

---

## Quick Start

### 1. Install via npm (Recommended)

```bash
# Install globally
npm install -g @ckelsoe/claude-skill-prompt-architect

# Run installation script
prompt-architect-install
```

**Alternative: Manual Installation**

If you prefer not to use npm:

**macOS/Linux:**
```bash
cp -r prompt-architect ~/.claude/skills/
```

**Windows (PowerShell):**
```powershell
Copy-Item -Path "prompt-architect" -Destination "$env:USERPROFILE\.claude\skills\prompt-architect" -Recurse
```

### 2. Restart Claude Code

Close and reopen Claude Code to load the skill.

### 3. Try It Out

```
"Help me improve this prompt: write a technical blog post"
```

The skill will automatically:
1. Analyze your prompt and score it
2. Recommend the best framework (likely CO-STAR)
3. Ask clarifying questions
4. Generate an improved, structured prompt
5. Explain the changes made

---

## Installation

### Method 1: npm (Recommended)

**Option A: Global Installation (User-Wide)**

```bash
# Install globally
npm install -g @ckelsoe/claude-skill-prompt-architect

# Run installation script
prompt-architect-install

# Restart Claude Code
```

**Option B: Local Installation (Without Global)**

```bash
# Install package
npm install @ckelsoe/claude-skill-prompt-architect

# Run installation script using npx
npx prompt-architect-install

# Restart Claude Code
```

**Option C: Project-Specific Installation**

```bash
# Install as dev dependency
npm install --save-dev @ckelsoe/claude-skill-prompt-architect

# Install to project .claude/skills/ folder
npx prompt-architect-install --project

# Restart Claude Code
```

### Method 2: Manual Installation

If you prefer not to use npm:

#### Prerequisites

- Claude Code installed and configured
- Python 3.7+ (optional, for analysis scripts)

#### Installation Steps

1. **Clone or Download this Repository**

```bash
git clone https://github.com/ckelsoe/claude-skill-prompt-architect.git
cd claude-skill-prompt-architect
```

2. **Copy Skill to Claude Code Directory**

The skill needs to be in your Claude Code skills folder.

**Default Locations:**
- Windows: `C:\Users\<YourName>\.claude\skills\`
- macOS: `~/.claude/skills/`
- Linux: `~/.claude/skills/`

**Installation Commands:**

```bash
# macOS/Linux
cp -r prompt-architect ~/.claude/skills/

# Windows (PowerShell)
Copy-Item -Path "prompt-architect" -Destination "$env:USERPROFILE\.claude\skills\prompt-architect" -Recurse

# Windows (Command Prompt)
xcopy prompt-architect %USERPROFILE%\.claude\skills\prompt-architect /E /I
```

3. **Verify Installation**

Check that all files are present:

```bash
# macOS/Linux
ls ~/.claude/skills/prompt-architect/

# Windows (PowerShell)
ls $env:USERPROFILE\.claude\skills\prompt-architect\

# Should see:
# - SKILL.md (required)
# - references/ (framework docs)
# - assets/ (templates)
# - scripts/ (analysis tools)
```

4. **Restart Claude Code**

The skill will be automatically loaded on restart.

### Verification

Test the skill with:
```
"Help me improve this prompt: analyze some data"
```

You should see the skill activate with prompt analysis and framework recommendations.

---

## Usage

### Basic Usage

Simply ask Claude Code to improve any prompt:

```
"Help me improve this prompt: [your prompt here]"
```

### Example Interaction

```
User: "Help me improve this prompt: create a function to process user data"

Skill: I'll analyze this prompt and help improve it.

**Analysis**:
- Clarity: 4/10 (basic goal stated)
- Specificity: 2/10 (what kind of data? what processing?)
- Context: 1/10 (no background)
- Completeness: 2/10 (missing many details)
- Structure: 3/10 (single sentence)
- **Overall: 2.4/10**

**Recommendation**: RISEN framework (multi-step process requiring methodology)

**Questions**:
1. What type of user data? (names, emails, profiles, etc.)
2. What processing is needed? (validation, transformation, storage?)
3. What's the tech stack? (Python, JavaScript, database type?)
4. Any constraints? (performance, security requirements?)
5. Expected error handling approach?

User: "It's a Python function processing CSV user registrations. Need to validate
emails, normalize names, and save to PostgreSQL. Should handle invalid data gracefully."

Skill: Perfect! Let me apply the RISEN framework...

[Improved prompt generated with clear role, instructions, steps, end goal, and constraints]
```

### Advanced Usage

**Request Specific Framework:**
```
"Use the CO-STAR framework to improve: write marketing copy"
```

**Iterate on Existing Prompts:**
```
"Review this prompt and suggest improvements: [existing structured prompt]"
```

**Switch Frameworks:**
```
"Try using TIDD-EC instead for more explicit guidance"
```

---

## Framework Selection Guide

### Decision Tree

```
Is it content/writing focused?
├─ YES → CO-STAR (if audience/tone matter)
└─ NO ↓

Is it a multi-step process?
├─ YES → RISEN (if methodology/constraints important)
└─ NO ↓

Is it data transformation?
├─ YES → RISE-IE (input → output)
└─ NO ↓

Does it need examples?
├─ YES → RISE-IX (content with samples)
└─ NO ↓

Does it need explicit dos/don'ts?
├─ YES → TIDD-EC (high-precision tasks)
└─ NO ↓

Is it reasoning/problem-solving?
├─ YES → Chain of Thought
└─ NO → RTF (simple tasks) or Chain of Density (refinement)
```

### Quick Reference

| Your Task | Recommended Framework | Why |
|-----------|----------------------|-----|
| Write blog post | CO-STAR | Audience and tone critical |
| Code review process | RISEN | Multi-step with constraints |
| Analyze CSV data | RISE-IE | Clear input→output transformation |
| Generate with examples | RISE-IX | Need reference samples |
| Generate secure code | TIDD-EC | Explicit dos/don'ts needed |
| Debug logic error | Chain of Thought | Requires reasoning steps |
| Compress explanation | Chain of Density | Iterative refinement |
| Simple conversion | RTF | Straightforward task |

---

## Project Structure

```
prompt-architect/
│
├── README.md                          # This file
├── LICENSE                            # MIT License
│
└── prompt-architect/                  # The skill
    ├── SKILL.md                       # Core skill instructions (5 KB)
    │
    ├── scripts/                       # Analysis Utilities
    │   ├── framework_analyzer.py      # Framework recommendation logic
    │   └── prompt_evaluator.py        # Quality scoring system
    │
    ├── references/                    # Framework Documentation
    │   └── frameworks/                # Loaded on-demand
    │       ├── co-star.md             # CO-STAR reference (600+ lines)
    │       ├── risen.md               # RISEN reference (600+ lines)
    │       ├── rise.md                # RISE (IE/IX) reference (700+ lines)
    │       ├── tidd-ec.md             # TIDD-EC reference (600+ lines)
    │       ├── rtf.md                 # RTF reference (500+ lines)
    │       ├── chain-of-thought.md    # CoT reference (500+ lines)
    │       └── chain-of-density.md    # CoD reference (500+ lines)
    │
    └── assets/
        └── templates/                 # Framework Templates
            ├── co-star_template.txt
            ├── risen_template.txt
            ├── rise-ie_template.txt
            ├── rise-ix_template.txt
            ├── tidd-ec_template.txt
            ├── rtf_template.txt
            └── hybrid_template.txt
```

**Total Size:** ~200 KB

**Core Components:**
- **SKILL.md** - Main skill logic and instructions
- **7 Framework Docs** - Complete references with examples
- **7 Templates** - Ready-to-use structures
- **2 Python Scripts** - Analysis and scoring utilities

---

## Documentation

### Framework References

Detailed documentation for each framework in `prompt-architect/references/frameworks/`:

- **co-star.md** - Context, Objective, Style, Tone, Audience, Response
- **risen.md** - Role, Instructions, Steps, End goal, Narrowing
- **rise.md** - Dual variants (IE & IX)
- **tidd-ec.md** - Task, Instructions, Do, Don't, Examples, Context
- **rtf.md** - Role, Task, Format
- **chain-of-thought.md** - Step-by-step reasoning
- **chain-of-density.md** - Iterative refinement

---

## Contributing

Contributions are welcome! Here's how you can help:

### Ways to Contribute

1. **Add New Frameworks** - Implement additional prompting frameworks
2. **Improve Existing Frameworks** - Enhance documentation and examples
3. **Bug Fixes** - Report and fix issues
4. **Documentation** - Improve guides and examples
5. **Testing** - Test with different use cases and report findings

### Adding New Frameworks

1. Research and validate the framework has backing
2. Create comprehensive framework reference (see existing in `references/frameworks/`)
3. Add template file in `assets/templates/`
4. Update SKILL.md framework selection logic
5. Test with multiple use cases
6. Submit pull request with examples and rationale

### Contribution Guidelines

**File Structure:**
```
New framework contributions should include:
- references/frameworks/your-framework.md (600+ lines with examples)
- assets/templates/your-framework_template.txt
- Updates to SKILL.md framework selection
- Examples in documentation
```

**Documentation Standards:**
- Clear component definitions
- Multiple use case examples
- Selection criteria explanation
- Before/after comparisons
- Research citations

**Testing Requirements:**
- Test with 3-5 diverse prompts
- Verify scoring improves
- Check framework selection logic
- Validate template structure

### Pull Request Process

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-framework`)
3. Make your changes following the guidelines
4. Test thoroughly with multiple examples
5. Update relevant documentation
6. Commit with clear messages
7. Push to your fork
8. Submit a Pull Request with:
   - Clear description of changes
   - Examples of improvements
   - Test results
   - Documentation updates

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### License Summary

**Permissions:**
- Commercial use
- Modification
- Distribution
- Private use

**Conditions:**
- License and copyright notice must be included

**Limitations:**
- No liability
- No warranty

---

## Support

### Getting Help

- **Issues** - Report bugs or request features via [GitHub Issues](https://github.com/ckelsoe/prompt-architect/issues)
- **Documentation** - Check framework references in `references/frameworks/`

### FAQ

**Q: Why isn't the skill activating?**
A: Ensure the skill folder is in the correct location (`~/.claude-code/skills/prompt-architect/`) and restart Claude Code.

**Q: Can I use this without Claude Code?**
A: Yes! Include SKILL.md content in your Claude API system prompt.

**Q: Which framework should I use?**
A: The skill will recommend one, but check the Framework Selection Guide above.

**Q: Can I add my own framework?**
A: Yes! See the Contributing section for guidelines.

**Q: Does this work with other LLMs?**
A: The frameworks are universal, but the skill is optimized for Claude.

---

## Project Status

**Version:** 1.0.0
**Status:** Production Ready
**Last Updated:** November 2024

### Roadmap

- [x] Core skill implementation
- [x] 7 framework integrations
- [x] Quality scoring system
- [x] Comprehensive documentation
- [x] Example interactions
- [ ] Additional framework variants
- [ ] Community framework submissions
- [ ] Framework effectiveness metrics

---

**Built for the prompt engineering community**
