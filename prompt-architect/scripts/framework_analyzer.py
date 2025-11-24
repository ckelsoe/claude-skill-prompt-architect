"""
Framework Analyzer - Recommends appropriate prompting frameworks
"""

FRAMEWORKS = {
    'co-star': {
        'name': 'CO-STAR',
        'components': ['Context', 'Objective', 'Style', 'Tone', 'Audience', 'Response'],
        'best_for': [
            'content_creation',
            'writing_tasks',
            'audience_matters',
            'tone_critical',
            'rich_context_needed'
        ],
        'indicators': {
            'keywords': ['write', 'create', 'article', 'post', 'content', 'email', 'message'],
            'requires': ['audience', 'tone', 'style']
        }
    },
    'risen': {
        'name': 'RISEN',
        'components': ['Role', 'Instructions', 'Steps', 'End goal', 'Narrowing'],
        'best_for': [
            'multi_step_process',
            'complex_procedure',
            'methodology_matters',
            'constraints_important',
            'sequential_tasks'
        ],
        'indicators': {
            'keywords': ['process', 'procedure', 'workflow', 'steps', 'guide', 'methodology'],
            'requires': ['process', 'constraints', 'methodology']
        }
    },
    'rise-ie': {
        'name': 'RISE-IE (Input-Expectation)',
        'components': ['Role', 'Input', 'Steps', 'Expectation'],
        'best_for': [
            'data_transformation',
            'analysis_tasks',
            'input_output_clear',
            'processing_focused',
            'analytical_work',
            'technical_tasks'
        ],
        'indicators': {
            'keywords': ['analyze', 'process', 'transform', 'data', 'input', 'csv', 'json', 'file', 'review', 'extract'],
            'requires': ['input_spec', 'transformation', 'data']
        }
    },
    'rise-ix': {
        'name': 'RISE-IX (Instructions-Examples)',
        'components': ['Role', 'Instructions', 'Steps', 'Examples'],
        'best_for': [
            'content_creation',
            'instruction_based_tasks',
            'example_driven',
            'creative_work',
            'replication_tasks',
            'style_matching'
        ],
        'indicators': {
            'keywords': ['create', 'write', 'draft', 'compose', 'example', 'like', 'similar', 'style', 'format'],
            'requires': ['examples', 'instructions', 'style_reference']
        }
    },
    'tidd-ec': {
        'name': 'TIDD-EC',
        'components': ['Task type', 'Instructions', 'Do', "Don't", 'Examples', 'Context'],
        'best_for': [
            'high_precision_tasks',
            'explicit_boundaries',
            'error_prevention',
            'customer_support',
            'technical_documentation',
            'constraint_heavy',
            'compliance_required'
        ],
        'indicators': {
            'keywords': ['support', 'response', 'documentation', 'must', 'avoid', 'should', "shouldn't", "don't", 'requirement', 'compliance'],
            'requires': ['dos_donts', 'explicit_constraints', 'error_prevention']
        }
    },
    'rtf': {
        'name': 'RTF',
        'components': ['Role', 'Task', 'Format'],
        'best_for': [
            'simple_tasks',
            'format_focused',
            'well_defined',
            'minimal_context',
            'one_off_tasks'
        ],
        'indicators': {
            'keywords': ['format', 'structure', 'template', 'simple', 'quick'],
            'requires': ['format_spec']
        }
    },
    'chain_of_thought': {
        'name': 'Chain of Thought',
        'components': ['Step-by-step reasoning', 'Logic display', 'Verification'],
        'best_for': [
            'reasoning_tasks',
            'problem_solving',
            'mathematical',
            'logical_analysis',
            'debugging'
        ],
        'indicators': {
            'keywords': ['solve', 'calculate', 'reason', 'debug', 'analyze', 'decide'],
            'requires': ['reasoning', 'logic', 'verification']
        }
    },
    'chain_of_density': {
        'name': 'Chain of Density',
        'components': ['Iterations', 'Progressive refinement', 'Optimization'],
        'best_for': [
            'iterative_improvement',
            'summarization',
            'compression',
            'optimization_tasks',
            'refinement'
        ],
        'indicators': {
            'keywords': ['summarize', 'compress', 'refine', 'improve', 'iterate', 'optimize'],
            'requires': ['iteration', 'refinement']
        }
    }
}

def analyze_use_case(prompt_text):
    """
    Analyze a prompt and recommend appropriate frameworks.

    Args:
        prompt_text (str): The user's original prompt

    Returns:
        list: Recommended frameworks with reasoning
    """
    prompt_lower = prompt_text.lower()
    scores = {}

    for framework_id, framework_data in FRAMEWORKS.items():
        score = 0
        matches = []

        # Check for keyword matches
        for keyword in framework_data['indicators']['keywords']:
            if keyword in prompt_lower:
                score += 2
                matches.append(f"keyword: '{keyword}'")

        # Analyze prompt characteristics
        if framework_id == 'co-star':
            if any(word in prompt_lower for word in ['audience', 'tone', 'style', 'write', 'create']):
                score += 3
                matches.append("content creation indicators")

        elif framework_id == 'risen':
            if any(word in prompt_lower for word in ['step', 'process', 'procedure', 'workflow']):
                score += 3
                matches.append("process indicators")

        elif framework_id == 'rise-ie':
            if any(word in prompt_lower for word in ['analyze', 'data', 'input', 'csv', 'json', 'file']):
                score += 3
                matches.append("data transformation indicators")
            if any(word in prompt_lower for word in ['process', 'transform', 'extract']):
                score += 2
                matches.append("processing focus")

        elif framework_id == 'rise-ix':
            if any(word in prompt_lower for word in ['create', 'write', 'draft', 'compose']):
                score += 3
                matches.append("content creation indicators")
            if any(word in prompt_lower for word in ['example', 'like', 'similar', 'style']):
                score += 3
                matches.append("example-based indicators")

        elif framework_id == 'tidd-ec':
            if any(word in prompt_lower for word in ['support', 'response', 'documentation', 'compliance']):
                score += 3
                matches.append("precision task indicators")
            if any(word in prompt_lower for word in ['must', 'avoid', "don't", "shouldn't", 'should not']):
                score += 4
                matches.append("explicit dos/don'ts indicators")
            if any(word in prompt_lower for word in ['requirement', 'boundary', 'constraint', 'guideline']):
                score += 2
                matches.append("constraint indicators")

        elif framework_id == 'rtf':
            if len(prompt_text.split()) < 15:  # Short prompts
                score += 2
                matches.append("simple/short prompt")

        elif framework_id == 'chain_of_thought':
            if any(word in prompt_lower for word in ['solve', 'calculate', 'reason', 'why', 'how']):
                score += 3
                matches.append("reasoning indicators")

        elif framework_id == 'chain_of_density':
            if any(word in prompt_lower for word in ['summarize', 'compress', 'refine']):
                score += 3
                matches.append("refinement indicators")

        scores[framework_id] = {
            'score': score,
            'matches': matches,
            'framework': framework_data
        }

    # Sort by score
    sorted_frameworks = sorted(scores.items(), key=lambda x: x[1]['score'], reverse=True)

    # Return top 2-3 recommendations
    recommendations = []
    for framework_id, data in sorted_frameworks[:3]:
        if data['score'] > 0:
            recommendations.append({
                'id': framework_id,
                'name': data['framework']['name'],
                'score': data['score'],
                'matches': data['matches'],
                'components': data['framework']['components'],
                'best_for': data['framework']['best_for']
            })

    return recommendations

def get_framework_questions(framework_id):
    """
    Get clarifying questions for a specific framework.

    Args:
        framework_id (str): Framework identifier

    Returns:
        list: Questions to ask user
    """
    questions = {
        'co-star': [
            "What's the background context or situation?",
            "Who is your target audience? (expertise level, role, characteristics)",
            "What specific objective do you want to achieve?",
            "What tone is appropriate? (professional, casual, urgent, friendly, etc.)",
            "What style or format should the output follow?",
            "How should the response be structured? (length, sections, format)"
        ],
        'risen': [
            "What role or expertise level should be demonstrated?",
            "What principles or guidelines should guide the approach?",
            "What are the specific steps or sequence of actions needed?",
            "What defines success? What are the acceptance criteria?",
            "What should be avoided? What constraints or boundaries exist?"
        ],
        'rise-ie': [
            "What role or perspective is needed for this analytical task?",
            "What input are you providing? (format: CSV, JSON, text, etc.)",
            "What are the characteristics of the input data? (structure, fields, quirks)",
            "What processing or transformation steps are needed?",
            "What should the output look like? (format, structure, required elements)"
        ],
        'rise-ix': [
            "What role or persona is most appropriate for this creative task?",
            "What are the main instructions or task requirements?",
            "What workflow or steps should be followed?",
            "Can you provide 2-3 examples of desired output or style?",
            "What format or style should be replicated?"
        ],
        'tidd-ec': [
            "What type of task is this? (e.g., customer support, data analysis, documentation)",
            "What are the exact steps or instructions to follow?",
            "What MUST be included in the output? (dos)",
            "What must be AVOIDED? (don'ts - errors, inappropriate approaches)",
            "Can you provide examples of good output?",
            "What context or background information is relevant?"
        ],
        'rtf': [
            "What expertise or perspective is needed?",
            "What exactly needs to be done? (be specific)",
            "How should the output be formatted? (structure, length, style)"
        ],
        'chain_of_thought': [
            "What problem needs to be solved?",
            "What reasoning or logic steps should be shown?",
            "Should intermediate work be displayed?",
            "What verification or validation is needed?"
        ],
        'chain_of_density': [
            "What content needs to be improved/refined?",
            "How many iterations of refinement?",
            "What should each iteration optimize for? (clarity, brevity, density, etc.)",
            "What constraints apply? (length limits, key information to preserve)"
        ]
    }

    return questions.get(framework_id, [])

if __name__ == "__main__":
    # Example usage
    test_prompts = [
        "Write about machine learning",
        "Analyze this CSV file and find trends",
        "Create a procedure for onboarding new employees",
        "Format this as JSON",
        "Solve this math problem: x^2 + 5x + 6 = 0",
        "Write product descriptions similar to these examples",
        "Process this JSON data and extract user information",
        "Create customer support response - must be empathetic, don't use jargon",
        "Write technical documentation - must include examples, avoid assumptions"
    ]

    for prompt in test_prompts:
        print(f"\nPrompt: {prompt}")
        recs = analyze_use_case(prompt)
        print(f"Recommendations:")
        for rec in recs:
            print(f"  - {rec['name']} (score: {rec['score']})")
            print(f"    Matches: {', '.join(rec['matches'])}")
