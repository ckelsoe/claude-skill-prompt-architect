# 🎯 Prompt Architect

> Transform vague prompts into expert-level, structured prompts using 7 research-backed frameworks

A comprehensive Claude Code Skill that analyzes, architects, and iteratively refines prompts through systematic framework application and guided dialogue.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Claude Code](https://img.shields.io/badge/Claude%20Code-Skill-blue.svg)](https://github.com/anthropics/claude-code)

---

## 📖 Table of Contents

- [What is Prompt Architect?](#what-is-prompt-architect)
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

## What is Prompt Architect?

Prompt Architect is a production-ready Claude Code Skill that elevates your prompting capabilities through:

- **Intelligent Analysis**: Evaluates prompts across 5 quality dimensions (clarity, specificity, context, completeness, structure)
- **Framework Recommendation**: Suggests the best framework(s) for your specific use case with clear reasoning
- **Guided Dialogue**: Asks targeted clarifying questions to gather missing information progressively
- **Systematic Application**: Applies selected framework to transform your prompt
- **Iterative Refinement**: Continues improving based on feedback until perfect

**Who is this for?**
- Developers using Claude Code for software engineering tasks
- Prompt engineers optimizing LLM interactions
- AI practitioners seeking systematic prompt improvement
- Teams wanting consistent, high-quality prompts

---

## 🌟 Key Features

### 🎯 7 Research-Backed Frameworks

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

### 📊 Quality Scoring System

Every prompt is evaluated across:
- **Clarity** (1-10): Is the goal clear and unambiguous?
- **Specificity** (1-10): Are requirements detailed enough?
- **Context** (1-10): Is background information provided?
- **Completeness** (1-10): Are all necessary elements present?
- **Structure** (1-10): Is the prompt well-organized?

### 💬 Progressive Disclosure

- Asks 3-5 targeted questions at a time (never overwhelming)
- Adapts questions based on framework selection
- Builds understanding iteratively
- Confirms assumptions before proceeding

### 🔄 Continuous Iteration

- Shows before/after comparisons with explanations
- Refines based on your feedback
- Can switch frameworks if initial choice doesn't fit
- Continues until you're satisfied

---

## 🚀 Example Transformation

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
- **Overall: 8.8/10** ✨

---

## 📚 Supported Frameworks

### 🎨 CO-STAR (Context, Objective, Style, Tone, Audience, Response)
**Best for:** Content creation, writing tasks, communications

**Components:**
- **C**ontext: Background information and situation
- **O**bjective: Clear goal and purpose
- **S**tyle: Writing style and formatting approach
- **T**one: Voice and emotional quality
- **A**udience: Target reader characteristics
- **R**esponse: Expected format and structure

**Example Use Cases:** Blog posts, emails, presentations, marketing copy, documentation

---

### 🔄 RISEN (Role, Instructions, Steps, End goal, Narrowing)
**Best for:** Multi-step processes, systematic procedures

**Components:**
- **R**ole: Expertise and perspective needed
- **I**nstructions: High-level guidance
- **S**teps: Detailed methodology
- **E**nd goal: Success criteria
- **N**arrowing: Constraints and boundaries

**Example Use Cases:** Code reviews, workflows, systematic analysis, project planning

---

### 📊 RISE (Dual Variants)

#### RISE-IE (Input-Expectation)
**Best for:** Data analysis, transformations, processing tasks

**Components:**
- **R**ole: Expertise needed
- **I**nput: Data format and characteristics
- **S**teps: Processing methodology
- **E**xpectation: Output requirements

**Example Use Cases:** CSV analysis, data processing, file transformations, report generation

#### RISE-IX (Instructions-Examples)
**Best for:** Content creation with reference examples

**Components:**
- **R**ole: Expertise needed
- **I**nstructions: Task guidance
- **S**teps: Workflow process
- **E**xamples: Reference samples

**Example Use Cases:** Creative writing, template-based content, style matching

---

### ✅ TIDD-EC (Task, Instructions, Do, Don't, Examples, Context)
**Best for:** High-precision tasks requiring explicit boundaries

**Components:**
- **T**ask type: Nature of the work
- **I**nstructions: What to accomplish
- **D**o: Explicit positive guidance
- **D**on't: Explicit negative guidance (what to avoid)
- **E**xamples: Reference samples
- **C**ontext: Background information

**Example Use Cases:** Code generation with standards, compliance tasks, quality-critical work

---

### 🎯 RTF (Role, Task, Format)
**Best for:** Simple, well-defined tasks

**Components:**
- **R**ole: Expertise required
- **T**ask: What needs to be done
- **F**ormat: Output structure

**Example Use Cases:** Quick conversions, simple formatting, straightforward requests

---

### 🧠 Chain of Thought
**Best for:** Complex reasoning and problem-solving

**Approach:**
- Breaks down reasoning into explicit steps
- Shows work and intermediate conclusions
- Verifies logic at each stage
- Builds to final answer

**Example Use Cases:** Math problems, debugging, decision analysis, logical reasoning

---

### 🔁 Chain of Density
**Best for:** Iterative refinement and compression

**Approach:**
- Starts with baseline version
- Progressively refines through iterations
- Increases information density
- Optimizes for specific goals

**Example Use Cases:** Summarization, content compression, explanation optimization

---

## ⚡ Quick Start

### 1. Install the Skill

**macOS/Linux:**
```bash
cp -r skills/prompt-architect ~/.claude-code/skills/
```

**Windows (Command Prompt):**
```cmd
xcopy skills\prompt-architect %USERPROFILE%\.claude-code\skills\prompt-architect /E /I
```

**Windows (PowerShell):**
```powershell
Copy-Item -Path "skills\prompt-architect" -Destination "$env:USERPROFILE\.claude-code\skills\prompt-architect" -Recurse
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

## 💻 Installation

### Prerequisites

- **Claude Code** installed and configured
- **Python 3.7+** (optional, for analysis scripts)

### Detailed Installation Steps

1. **Clone or Download this Repository**

```bash
git clone https://github.com/yourusername/prompt-architect.git
cd prompt-architect
```

2. **Copy Skill to Claude Code Directory**

The skill needs to be in your Claude Code skills folder:

**Default Locations:**
- Windows: `C:\Users\<YourName>\.claude-code\skills\`
- macOS: `~/.claude-code/skills/`
- Linux: `~/.claude-code/skills/`

**Installation Commands:**

```bash
# macOS/Linux
cp -r skills/prompt-architect ~/.claude-code/skills/

# Windows (PowerShell)
Copy-Item -Path "skills\prompt-architect" -Destination "$env:USERPROFILE\.claude-code\skills\prompt-architect" -Recurse

# Windows (Command Prompt)
xcopy skills\prompt-architect %USERPROFILE%\.claude-code\skills\prompt-architect /E /I
```

3. **Verify Installation**

Check that all files are present:

```bash
# macOS/Linux
ls ~/.claude-code/skills/prompt-architect/

# Windows (PowerShell)
ls $env:USERPROFILE\.claude-code\skills\prompt-architect\

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

## 📖 Usage

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

## 🧭 Framework Selection Guide

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

## 📁 Project Structure

```
prompt-architect/
│
├── README.md                          # This file
├── LICENSE                            # MIT License
│
├── docs/                              # 📚 Comprehensive Documentation
│   ├── START_HERE.md                  # Quick orientation guide
│   ├── README.md                      # Detailed project overview
│   ├── DESIGN_SPECIFICATION.md        # Complete architecture
│   ├── IMPLEMENTATION_GUIDE.md        # Deployment & customization
│   ├── EXAMPLE_INTERACTIONS.md        # Real dialogue examples
│   ├── PROJECT_SUMMARY.md             # Project summary
│   ├── DEPLOYMENT_READY.md            # Deployment status
│   └── ADDING_NEW_FRAMEWORKS.md       # Guide for adding frameworks
│
└── skills/                            # 🚀 Deployable Skill Package
    ├── README.md                      # Deployment instructions
    └── prompt-architect/              # ← Copy this to Claude Code
        ├── SKILL.md                   # Core skill instructions (5 KB)
        │
        ├── scripts/                   # Analysis Utilities
        │   ├── framework_analyzer.py  # Framework recommendation logic
        │   └── prompt_evaluator.py    # Quality scoring system
        │
        ├── references/                # Framework Documentation
        │   └── frameworks/            # Loaded on-demand
        │       ├── co-star.md         # CO-STAR reference (600+ lines)
        │       ├── risen.md           # RISEN reference (600+ lines)
        │       ├── rise.md            # RISE (IE/IX) reference (700+ lines)
        │       ├── tidd-ec.md         # TIDD-EC reference (600+ lines)
        │       ├── rtf.md             # RTF reference (500+ lines)
        │       ├── chain-of-thought.md # CoT reference (500+ lines)
        │       └── chain-of-density.md # CoD reference (500+ lines)
        │
        └── assets/
            └── templates/             # Framework Templates
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
- **SKILL.md**: Main skill logic and instructions
- **7 Framework Docs**: Complete references with examples
- **7 Templates**: Ready-to-use structures
- **2 Python Scripts**: Analysis and scoring utilities

---

## 📚 Documentation

### For Users

| Document | Purpose | Read Time |
|----------|---------|-----------|
| [START_HERE.md](docs/START_HERE.md) | Quick orientation | 2 min |
| [README.md](docs/README.md) | Detailed overview | 10 min |
| [EXAMPLE_INTERACTIONS.md](docs/EXAMPLE_INTERACTIONS.md) | Real usage examples | 15 min |

### For Developers

| Document | Purpose | Read Time |
|----------|---------|-----------|
| [DESIGN_SPECIFICATION.md](docs/DESIGN_SPECIFICATION.md) | Complete architecture | 30 min |
| [IMPLEMENTATION_GUIDE.md](docs/IMPLEMENTATION_GUIDE.md) | Deployment guide | 20 min |
| [ADDING_NEW_FRAMEWORKS.md](docs/ADDING_NEW_FRAMEWORKS.md) | Extend with new frameworks | 30 min |

### Framework References

Detailed documentation for each framework in `skills/prompt-architect/references/frameworks/`:

- **[co-star.md](skills/prompt-architect/references/frameworks/co-star.md)** - Context, Objective, Style, Tone, Audience, Response
- **[risen.md](skills/prompt-architect/references/frameworks/risen.md)** - Role, Instructions, Steps, End goal, Narrowing
- **[rise.md](skills/prompt-architect/references/frameworks/rise.md)** - Dual variants (IE & IX)
- **[tidd-ec.md](skills/prompt-architect/references/frameworks/tidd-ec.md)** - Task, Instructions, Do, Don't, Examples, Context
- **[rtf.md](skills/prompt-architect/references/frameworks/rtf.md)** - Role, Task, Format
- **[chain-of-thought.md](skills/prompt-architect/references/frameworks/chain-of-thought.md)** - Step-by-step reasoning
- **[chain-of-density.md](skills/prompt-architect/references/frameworks/chain-of-density.md)** - Iterative refinement

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### Ways to Contribute

1. **Add New Frameworks** - Implement additional prompting frameworks
2. **Improve Existing Frameworks** - Enhance documentation and examples
3. **Bug Fixes** - Report and fix issues
4. **Documentation** - Improve guides and examples
5. **Testing** - Test with different use cases and report findings

### Adding New Frameworks

Want to add a new framework? Follow these steps:

1. **Read the Guide**: Check [ADDING_NEW_FRAMEWORKS.md](docs/ADDING_NEW_FRAMEWORKS.md) for detailed instructions
2. **Research**: Validate the framework has research backing
3. **Document**: Create comprehensive framework reference (see existing in `references/frameworks/`)
4. **Create Template**: Add template file in `assets/templates/`
5. **Update SKILL.md**: Add framework to selection logic
6. **Test**: Verify with multiple use cases
7. **Submit PR**: Include examples and rationale

### Contribution Guidelines

#### File Structure
```
New framework contributions should include:
- references/frameworks/your-framework.md (600+ lines with examples)
- assets/templates/your-framework_template.txt
- Updates to SKILL.md framework selection
- Examples in documentation
```

#### Documentation Standards
- Clear component definitions
- Multiple use case examples
- Selection criteria explanation
- Before/after comparisons
- Research citations

#### Testing Requirements
- Test with 3-5 diverse prompts
- Verify scoring improves
- Check framework selection logic
- Validate template structure

### Pull Request Process

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-framework`)
3. Make your changes following the guidelines above
4. Test thoroughly with multiple examples
5. Update relevant documentation
6. Commit with clear messages
7. Push to your fork
8. Submit a Pull Request with:
   - Clear description of changes
   - Examples of improvements
   - Test results
   - Documentation updates

### Code of Conduct

- Be respectful and constructive
- Focus on improving prompt quality
- Provide evidence for framework effectiveness
- Help others learn and improve
- Follow existing code and documentation patterns

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### What This Means

✅ **You CAN:**
- Use commercially
- Modify the code
- Distribute
- Sublicense
- Use privately

✅ **You MUST:**
- Include original license
- Include copyright notice

❌ **You CANNOT:**
- Hold liable
- Use trademarks without permission

---

## 🙏 Acknowledgments

- **Framework Research**: Based on established prompting frameworks from the AI/ML community
- **Claude Code**: Built as a skill for Anthropic's Claude Code platform
- **Community**: Inspired by the prompt engineering community's best practices

---

## 📞 Support & Contact

### Getting Help

- **Issues**: Report bugs or request features via [GitHub Issues](https://github.com/yourusername/prompt-architect/issues)
- **Documentation**: Check the [docs/](docs/) folder for comprehensive guides
- **Examples**: See [EXAMPLE_INTERACTIONS.md](docs/EXAMPLE_INTERACTIONS.md) for usage patterns

### FAQ

**Q: Why isn't the skill activating?**
A: Ensure the skill folder is in the correct location (`~/.claude-code/skills/prompt-architect/`) and restart Claude Code.

**Q: Can I use this without Claude Code?**
A: Yes! Include SKILL.md content in your Claude API system prompt. See [IMPLEMENTATION_GUIDE.md](docs/IMPLEMENTATION_GUIDE.md).

**Q: Which framework should I use?**
A: The skill will recommend one, but check the [Framework Selection Guide](#framework-selection-guide) above.

**Q: Can I add my own framework?**
A: Absolutely! See [ADDING_NEW_FRAMEWORKS.md](docs/ADDING_NEW_FRAMEWORKS.md) for a complete guide.

**Q: Does this work with other LLMs?**
A: The frameworks are universal, but the skill is optimized for Claude. You may need to adapt for other models.

---

## 🚀 What's Next?

After installing Prompt Architect:

1. **Try It Out** - Start with simple prompts and see the improvements
2. **Explore Frameworks** - Read framework docs to understand when to use each
3. **Customize** - Add your own frameworks or modify templates
4. **Share** - Help others improve their prompts
5. **Contribute** - Submit improvements and new frameworks

---

## 📊 Project Status

**Version**: 1.0.0 (Production Ready)
**Status**: ✅ Complete and Tested
**Last Updated**: November 2024

### Roadmap

- [x] Core skill implementation
- [x] 7 framework integrations
- [x] Quality scoring system
- [x] Comprehensive documentation
- [x] Example interactions
- [ ] Additional framework variants
- [ ] Community framework submissions
- [ ] Interactive web demo
- [ ] Framework effectiveness metrics

---

## ⭐ Star This Project

If you find Prompt Architect useful, please consider starring the repository! It helps others discover this tool and motivates continued development.

---

**Happy Prompting!** 🎯

Built with ❤️ for the prompt engineering community