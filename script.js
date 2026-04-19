/* ========================================
   AI Mastery Hub — JavaScript
   ======================================== */

// ============================================
// ASSESSMENT QUIZ DATA
// ============================================
const assessmentQuestions = [
    // --- General AI ---
    {
        category: "General AI",
        question: "What does a Large Language Model (LLM) primarily learn during pre-training?",
        options: [
            "How to follow specific user instructions",
            "Statistical patterns and relationships in text",
            "How to browse the internet for answers",
            "Domain-specific knowledge from textbooks"
        ],
        correct: 1
    },
    {
        category: "General AI",
        question: "What is the 'temperature' parameter in LLMs?",
        options: [
            "The GPU heat level during inference",
            "How fast the model generates tokens",
            "A measure of randomness/creativity in output",
            "The model's confidence score"
        ],
        correct: 2
    },
    {
        category: "General AI",
        question: "What is a 'hallucination' in the context of AI?",
        options: [
            "When the model crashes during processing",
            "When the model generates plausible but factually incorrect information",
            "When the model refuses to answer a question",
            "When the model takes too long to respond"
        ],
        correct: 1
    },
    // --- Prompt Engineering ---
    {
        category: "Prompt Engineering",
        question: "Which prompting technique involves providing example input-output pairs before the actual query?",
        options: [
            "Zero-shot prompting",
            "Chain-of-thought prompting",
            "Few-shot prompting",
            "System prompting"
        ],
        correct: 2
    },
    {
        category: "Prompt Engineering",
        question: "What is 'chain-of-thought' (CoT) prompting?",
        options: [
            "Chaining multiple models together",
            "Asking the model to explain its reasoning step by step",
            "Creating a pipeline of prompts",
            "Using decision trees as prompts"
        ],
        correct: 1
    },
    {
        category: "Prompt Engineering",
        question: "What is the primary purpose of a 'system prompt' in Claude?",
        options: [
            "To debug errors in the model",
            "To set the model's role, behavior, and constraints",
            "To train the model on new data",
            "To monitor the model's performance"
        ],
        correct: 1
    },
    // --- RAG & Architecture ---
    {
        category: "RAG & Architecture",
        question: "In RAG (Retrieval-Augmented Generation), what happens BEFORE the LLM generates a response?",
        options: [
            "The model is fine-tuned on the query",
            "Relevant documents are retrieved from a knowledge base",
            "The response is cached from a previous query",
            "The model searches the internet live"
        ],
        correct: 1
    },
    {
        category: "RAG & Architecture",
        question: "What is a 'vector embedding' used for?",
        options: [
            "Compressing images for storage",
            "Representing text as numerical vectors that capture semantic meaning",
            "Encrypting sensitive data",
            "Formatting text for display"
        ],
        correct: 1
    },
    {
        category: "RAG & Architecture",
        question: "Which similarity metric is most commonly used with vector embeddings?",
        options: [
            "Euclidean distance only",
            "Hamming distance",
            "Cosine similarity",
            "Manhattan distance"
        ],
        correct: 2
    },
    // --- MCP & Tools ---
    {
        category: "MCP & Tools",
        question: "What is the Model Context Protocol (MCP)?",
        options: [
            "A protocol for training models faster",
            "An open standard for connecting AI models to external tools and data sources",
            "A compression algorithm for model weights",
            "A security protocol for AI deployments"
        ],
        correct: 1
    },
    {
        category: "MCP & Tools",
        question: "In MCP architecture, what role does the 'MCP Server' play?",
        options: [
            "It hosts the AI model",
            "It exposes tools and resources that AI clients can use",
            "It trains the model on new data",
            "It manages user authentication"
        ],
        correct: 1
    },
    // --- LangChain ---
    {
        category: "LangChain",
        question: "What is a 'chain' in LangChain?",
        options: [
            "A blockchain-based data structure",
            "A sequence of LLM calls and operations linked together",
            "A type of neural network layer",
            "A security mechanism"
        ],
        correct: 1
    },
    // --- MLOps & Monitoring ---
    {
        category: "MLOps & Monitoring",
        question: "What is 'model drift'?",
        options: [
            "When a model's weights change randomly",
            "When model performance degrades because real-world data shifts from training data",
            "When a model becomes faster over time",
            "When a model is transferred between servers"
        ],
        correct: 1
    },
    {
        category: "MLOps & Monitoring",
        question: "What is the difference between 'data drift' and 'concept drift'?",
        options: [
            "They are the same thing",
            "Data drift = input distribution changes; Concept drift = input-output relationship changes",
            "Data drift = slow; Concept drift = fast",
            "Data drift affects training; Concept drift affects inference"
        ],
        correct: 1
    },
    // --- Safety & Ethics ---
    {
        category: "Safety & Ethics",
        question: "What is 'Constitutional AI' as used by Anthropic?",
        options: [
            "AI that follows government laws",
            "A training approach where the model critiques and revises its own outputs based on principles",
            "AI deployed in government institutions",
            "A model that only answers legal questions"
        ],
        correct: 1
    }
];

// ============================================
// PRACTICE EXAM DATA
// ============================================
const examData = {
    1: {
        title: "Practice Exam 1: Core Concepts",
        questions: [
            {
                category: "Prompt Engineering",
                question: "Which Claude API parameter controls the maximum number of tokens in the response?",
                options: ["max_tokens", "response_length", "output_limit", "token_count"],
                correct: 0
            },
            {
                category: "Prompt Engineering",
                question: "In Claude's API, what is the role of the 'system' parameter?",
                options: [
                    "It sets the operating system for the API",
                    "It provides persistent instructions that guide Claude's behavior throughout the conversation",
                    "It configures the API endpoint",
                    "It specifies the model version"
                ],
                correct: 1
            },
            {
                category: "Prompt Engineering",
                question: "What is the benefit of using XML tags in prompts for Claude?",
                options: [
                    "They make prompts run faster",
                    "They help structure and separate different parts of the prompt clearly",
                    "They enable HTML rendering in responses",
                    "They are required by the Claude API"
                ],
                correct: 1
            },
            {
                category: "API & Integration",
                question: "What is the correct order of messages in a Claude API conversation?",
                options: [
                    "Any order is fine",
                    "Human, Assistant, Human, Assistant... (alternating)",
                    "System, Human, Human, Assistant",
                    "Assistant, System, Human"
                ],
                correct: 1
            },
            {
                category: "API & Integration",
                question: "What happens when you set temperature to 0 in Claude?",
                options: [
                    "The model refuses to respond",
                    "Responses become more deterministic and consistent",
                    "The model generates longer responses",
                    "The API returns an error"
                ],
                correct: 1
            },
            {
                category: "API & Integration",
                question: "Which of these is NOT a valid Claude model as of 2025?",
                options: [
                    "claude-sonnet-4-20250514",
                    "claude-3-haiku-20240307",
                    "claude-4-turbo-20250101",
                    "claude-3-5-sonnet-20241022"
                ],
                correct: 2
            },
            {
                category: "Tool Use",
                question: "In Claude's tool use feature, what format is used to define tools?",
                options: [
                    "YAML schema",
                    "JSON Schema",
                    "XML DTD",
                    "Protocol Buffers"
                ],
                correct: 1
            },
            {
                category: "Tool Use",
                question: "When Claude decides to use a tool, what does it return?",
                options: [
                    "The tool's output directly",
                    "A tool_use content block with the tool name and input parameters",
                    "A URL to the tool's API",
                    "An error message asking you to call the tool"
                ],
                correct: 1
            },
            {
                category: "Safety",
                question: "What is 'red teaming' in the context of AI safety?",
                options: [
                    "Using red-colored text in prompts",
                    "Deliberately trying to break or misuse a model to find vulnerabilities",
                    "Training the model on dangerous data",
                    "Deploying models in critical infrastructure"
                ],
                correct: 1
            },
            {
                category: "Safety",
                question: "What is the RLHF technique used in training models like Claude?",
                options: [
                    "Reinforcement Learning from Human Feedback — using human preferences to align model behavior",
                    "Rapid Language Handling Framework",
                    "Recursive Logic and Heuristic Functions",
                    "Real-time Learning with High Fidelity"
                ],
                correct: 0
            },
            {
                category: "Prompt Engineering",
                question: "What is 'prompt injection'?",
                options: [
                    "Adding more examples to improve prompt quality",
                    "A technique to make prompts shorter",
                    "An attack where malicious instructions are hidden in user input to override system prompts",
                    "Inserting debugging information into prompts"
                ],
                correct: 2
            },
            {
                category: "Architecture",
                question: "What is 'streaming' in the context of the Claude API?",
                options: [
                    "Sending multiple requests simultaneously",
                    "Receiving the response token by token as it's generated, rather than waiting for completion",
                    "Using Claude to process video streams",
                    "Connecting Claude to streaming platforms"
                ],
                correct: 1
            },
            {
                category: "Architecture",
                question: "Which design pattern involves breaking a complex task into sub-tasks handled by specialized prompts?",
                options: [
                    "Monolithic prompting",
                    "Prompt chaining / orchestration",
                    "Batch processing",
                    "Response caching"
                ],
                correct: 1
            },
            {
                category: "Evaluation",
                question: "Which metric measures how factually grounded an LLM's responses are to provided context?",
                options: [
                    "Perplexity",
                    "BLEU score",
                    "Faithfulness / Groundedness",
                    "F1 score"
                ],
                correct: 2
            },
            {
                category: "Evaluation",
                question: "What is 'LLM-as-a-judge'?",
                options: [
                    "Using a legal AI model",
                    "Using one LLM to evaluate the outputs of another LLM",
                    "A benchmark dataset",
                    "A model training technique"
                ],
                correct: 1
            }
        ]
    },
    2: {
        title: "Practice Exam 2: Architecture & MCP",
        questions: [
            {
                category: "MCP",
                question: "In MCP, what are 'Resources'?",
                options: [
                    "CPU and memory used by the model",
                    "Data that the server exposes for the client to read (similar to GET endpoints)",
                    "The model's training data",
                    "API rate limits"
                ],
                correct: 1
            },
            {
                category: "MCP",
                question: "What transport protocols does MCP support?",
                options: [
                    "Only HTTP",
                    "Only WebSocket",
                    "stdio and HTTP with Server-Sent Events (SSE)",
                    "gRPC only"
                ],
                correct: 2
            },
            {
                category: "MCP",
                question: "In MCP, what is a 'Tool' versus a 'Resource'?",
                options: [
                    "They are the same thing",
                    "Tools perform actions (like POST); Resources expose data (like GET)",
                    "Tools are for developers; Resources are for users",
                    "Tools run locally; Resources run remotely"
                ],
                correct: 1
            },
            {
                category: "MCP",
                question: "Which JSON-RPC version does MCP use for communication?",
                options: [
                    "JSON-RPC 1.0",
                    "JSON-RPC 2.0",
                    "JSON-RPC 3.0",
                    "Custom Anthropic format"
                ],
                correct: 1
            },
            {
                category: "Architecture",
                question: "In a multi-agent system, what is an 'orchestrator' pattern?",
                options: [
                    "A single agent that does everything",
                    "A central agent that delegates tasks to specialized sub-agents and aggregates their results",
                    "An agent that only handles errors",
                    "A pattern for deploying agents to multiple servers"
                ],
                correct: 1
            },
            {
                category: "Architecture",
                question: "What is the 'context window' of an LLM?",
                options: [
                    "The browser window displaying the chat",
                    "The maximum amount of text (tokens) the model can process in a single call",
                    "The model's training time",
                    "The number of users it can serve simultaneously"
                ],
                correct: 1
            },
            {
                category: "Architecture",
                question: "Why might you use 'chunking' when building a RAG system?",
                options: [
                    "To make the UI look better",
                    "To break large documents into smaller pieces that fit in the context window and improve retrieval precision",
                    "To speed up model training",
                    "To reduce API costs only"
                ],
                correct: 1
            },
            {
                category: "Architecture",
                question: "What is 'prompt caching' as offered by Anthropic?",
                options: [
                    "Storing prompts in a browser cache",
                    "Reusing prefilled prompt processing across API calls to reduce latency and cost",
                    "Caching model weights",
                    "Memorizing previous conversations permanently"
                ],
                correct: 1
            },
            {
                category: "Safety",
                question: "What guardrail strategy involves having a separate 'classifier' model check outputs before returning them?",
                options: [
                    "Self-critique",
                    "Output filtering / safety classifier layer",
                    "Temperature reduction",
                    "Token limiting"
                ],
                correct: 1
            },
            {
                category: "Safety",
                question: "What is 'Constitutional AI' (CAI) and how does it differ from RLHF?",
                options: [
                    "CAI uses human feedback; RLHF uses rules",
                    "CAI has the model self-critique using a set of principles, reducing the need for human feedback",
                    "They are identical approaches",
                    "CAI only works with Claude; RLHF works with any model"
                ],
                correct: 1
            },
            {
                category: "Evaluation",
                question: "Which approach helps detect model drift in production?",
                options: [
                    "Retraining the model weekly",
                    "Monitoring input distributions and output quality metrics over time",
                    "Using smaller models",
                    "Increasing the temperature parameter"
                ],
                correct: 1
            },
            {
                category: "Evaluation",
                question: "What is an 'eval suite' in LLM development?",
                options: [
                    "A hotel suite for AI researchers",
                    "A collection of test cases used to systematically measure model performance across defined criteria",
                    "A type of model architecture",
                    "A deployment environment"
                ],
                correct: 1
            },
            {
                category: "Advanced",
                question: "What is 'agentic RAG'?",
                options: [
                    "RAG that runs on mobile agents",
                    "A pattern where an AI agent autonomously decides what to retrieve, when, and how to combine multiple retrieval steps",
                    "RAG without a vector database",
                    "A type of graph database"
                ],
                correct: 1
            },
            {
                category: "Advanced",
                question: "In Claude's 'extended thinking' (thinking mode), what happens?",
                options: [
                    "The model takes longer to respond with the same quality",
                    "Claude shows its internal reasoning process before providing the final answer, improving accuracy on complex tasks",
                    "The API timeout is extended",
                    "Claude searches the internet before responding"
                ],
                correct: 1
            },
            {
                category: "Advanced",
                question: "What is the key benefit of using 'structured outputs' (JSON mode) with Claude?",
                options: [
                    "Responses are shorter",
                    "Responses follow a guaranteed schema, making them reliable for programmatic consumption",
                    "The model is more creative",
                    "It reduces API cost"
                ],
                correct: 1
            }
        ]
    }
};

// ============================================
// COURSE RECOMMENDATIONS
// ============================================
const courseRecommendations = {
    beginner: [
        {
            title: "Google AI Essentials",
            desc: "Start with foundational AI concepts. Free course on Coursera by Google.",
            link: "https://www.coursera.org/learn/google-ai-essentials"
        },
        {
            title: "ChatGPT Prompt Engineering for Developers",
            desc: "Free course by DeepLearning.AI and OpenAI. Great intro to prompt engineering.",
            link: "https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/"
        },
        {
            title: "▶️ AI Explained - YouTube",
            desc: "Clear, beginner-friendly explanations of how LLMs and AI systems work.",
            link: "https://www.youtube.com/@aiexplained-official"
        },
        {
            title: "3Blue1Brown: Neural Networks",
            desc: "Beautiful visual explanations of neural networks from the ground up.",
            link: "https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi"
        }
    ],
    intermediate: [
        {
            title: "Anthropic Courses (Free)",
            desc: "Official courses from Anthropic covering Claude API, prompt engineering, and tool use.",
            link: "https://github.com/anthropics/courses"
        },
        {
            title: "LangChain Academy",
            desc: "Free courses on building LLM applications with LangChain and LangGraph.",
            link: "https://academy.langchain.com"
        },
        {
            title: "▶️ Full Stack LLM Bootcamp",
            desc: "Comprehensive YouTube course covering RAG, fine-tuning, and deployment.",
            link: "https://www.youtube.com/watch?v=twHxmU9OxDU"
        },
        {
            title: "Hugging Face NLP Course",
            desc: "Free course on Transformers, fine-tuning, and NLP pipelines.",
            link: "https://huggingface.co/learn/nlp-course"
        }
    ],
    advanced: [
        {
            title: "Claude Certified Architect Prep",
            desc: "Master MCP, system architecture, safety, and evaluation for the CCA exam.",
            link: "#claude-architect"
        },
        {
            title: "AWS Machine Learning Specialty",
            desc: "Comprehensive ML certification covering all aspects of ML on AWS.",
            link: "https://aws.amazon.com/certification/certified-machine-learning-specialty/"
        },
        {
            title: "▶️ Andrej Karpathy: Building GPT",
            desc: "Build a GPT from scratch. Brilliant deep dive by the former Tesla AI Director.",
            link: "https://www.youtube.com/watch?v=kCc8FmEb1nY"
        },
        {
            title: "MLOps Specialization",
            desc: "Learn to deploy, monitor, and maintain ML systems in production.",
            link: "https://www.coursera.org/specializations/machine-learning-engineering-for-production-mlops"
        }
    ]
};

// ============================================
// QUIZ ENGINE
// ============================================
let quizState = {
    currentQuestion: 0,
    answers: new Array(assessmentQuestions.length).fill(null),
    submitted: false
};

function initQuiz() {
    quizState = {
        currentQuestion: 0,
        answers: new Array(assessmentQuestions.length).fill(null),
        submitted: false
    };
    document.getElementById('quiz-card').classList.remove('hidden');
    document.getElementById('quiz-results').classList.add('hidden');
    renderQuizQuestion();
}

function renderQuizQuestion() {
    const q = assessmentQuestions[quizState.currentQuestion];
    const total = assessmentQuestions.length;
    const current = quizState.currentQuestion + 1;

    document.getElementById('quiz-category').textContent = q.category;
    document.getElementById('quiz-question').textContent = `${current}. ${q.question}`;
    document.getElementById('quiz-progress-text').textContent = `Question ${current} of ${total}`;
    document.getElementById('quiz-progress-fill').style.width = `${(current / total) * 100}%`;

    const optionsEl = document.getElementById('quiz-options');
    optionsEl.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];
    q.options.forEach((opt, i) => {
        const div = document.createElement('div');
        div.className = `quiz-option${quizState.answers[quizState.currentQuestion] === i ? ' selected' : ''}`;
        div.innerHTML = `<span class="option-marker">${letters[i]}</span><span>${opt}</span>`;
        div.onclick = () => selectQuizOption(i);
        optionsEl.appendChild(div);
    });

    document.getElementById('quiz-prev-btn').disabled = quizState.currentQuestion === 0;
    const nextBtn = document.getElementById('quiz-next-btn');
    if (quizState.currentQuestion === total - 1) {
        nextBtn.textContent = '🎯 Submit';
    } else {
        nextBtn.textContent = 'Next →';
    }
}

function selectQuizOption(index) {
    quizState.answers[quizState.currentQuestion] = index;
    renderQuizQuestion();
}

document.getElementById('quiz-next-btn').addEventListener('click', () => {
    if (quizState.currentQuestion < assessmentQuestions.length - 1) {
        quizState.currentQuestion++;
        renderQuizQuestion();
    } else {
        submitQuiz();
    }
});

document.getElementById('quiz-prev-btn').addEventListener('click', () => {
    if (quizState.currentQuestion > 0) {
        quizState.currentQuestion--;
        renderQuizQuestion();
    }
});

function submitQuiz() {
    let correct = 0;
    const categoryScores = {};

    assessmentQuestions.forEach((q, i) => {
        if (!categoryScores[q.category]) {
            categoryScores[q.category] = { total: 0, correct: 0 };
        }
        categoryScores[q.category].total++;
        if (quizState.answers[i] === q.correct) {
            correct++;
            categoryScores[q.category].correct++;
        }
    });

    const percentage = Math.round((correct / assessmentQuestions.length) * 100);

    // Determine level
    let level, description;
    if (percentage >= 80) {
        level = "🏆 Advanced — AI Expert";
        description = "Impressive! You have strong AI knowledge. Consider pursuing advanced certifications like Claude Certified Architect.";
    } else if (percentage >= 50) {
        level = "📈 Intermediate — Growing Practitioner";
        description = "Good foundation! Focus on deepening your knowledge in weaker areas and try the practice exams below.";
    } else {
        level = "🌱 Beginner — Budding Learner";
        description = "Everyone starts somewhere! We've curated beginner-friendly resources to accelerate your AI learning journey.";
    }

    // Hide quiz, show results
    document.getElementById('quiz-card').classList.add('hidden');
    document.getElementById('quiz-results').classList.remove('hidden');

    // Animate score ring
    const scoreRing = document.getElementById('score-ring');
    const circumference = 2 * Math.PI * 54;
    const offset = circumference - (percentage / 100) * circumference;
    setTimeout(() => {
        scoreRing.style.strokeDashoffset = offset;
    }, 100);

    // Animate score number
    animateNumber('score-number', percentage, 1500);

    document.getElementById('results-level').textContent = level;
    document.getElementById('results-description').textContent = description;

    // Breakdown
    const breakdownEl = document.getElementById('results-breakdown');
    breakdownEl.innerHTML = '';
    for (const [cat, scores] of Object.entries(categoryScores)) {
        const pct = Math.round((scores.correct / scores.total) * 100);
        const div = document.createElement('div');
        div.className = 'breakdown-item';
        div.innerHTML = `
            <h5>${cat}</h5>
            <div class="breakdown-score" style="background: var(--gradient-main); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">${scores.correct}/${scores.total}</div>
            <div class="breakdown-bar"><div class="breakdown-bar-fill" style="width: 0%"></div></div>
        `;
        breakdownEl.appendChild(div);
        setTimeout(() => {
            div.querySelector('.breakdown-bar-fill').style.width = `${pct}%`;
        }, 300);
    }

    // Recommendations
    const recGrid = document.getElementById('recommendations-grid');
    recGrid.innerHTML = '';
    let recLevel = 'beginner';
    if (percentage >= 80) recLevel = 'advanced';
    else if (percentage >= 50) recLevel = 'intermediate';

    courseRecommendations[recLevel].forEach(course => {
        const card = document.createElement('div');
        card.className = 'rec-card';
        card.innerHTML = `
            <h5>${course.title}</h5>
            <p>${course.desc}</p>
            <a href="${course.link}" target="_blank">Explore →</a>
        `;
        recGrid.appendChild(card);
    });
}

document.getElementById('retake-quiz-btn').addEventListener('click', initQuiz);

// ============================================
// PRACTICE EXAM ENGINE
// ============================================
let examState = {
    examId: null,
    currentQuestion: 0,
    answers: [],
    timer: null,
    timeLeft: 0
};

function startExam(examId) {
    const exam = examData[examId];
    examState = {
        examId,
        currentQuestion: 0,
        answers: new Array(exam.questions.length).fill(null),
        timer: null,
        timeLeft: 30 * 60 // 30 minutes
    };

    document.getElementById('exam-modal').classList.remove('hidden');
    document.getElementById('exam-results').classList.add('hidden');
    document.querySelector('.exam-body').classList.remove('hidden');
    document.querySelector('.exam-progress').classList.remove('hidden');
    document.getElementById('exam-title').textContent = exam.title;
    document.body.style.overflow = 'hidden';

    startTimer();
    renderExamQuestion();
}

function startTimer() {
    clearInterval(examState.timer);
    updateTimerDisplay();
    examState.timer = setInterval(() => {
        examState.timeLeft--;
        updateTimerDisplay();
        if (examState.timeLeft <= 0) {
            clearInterval(examState.timer);
            submitExam();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const min = Math.floor(examState.timeLeft / 60).toString().padStart(2, '0');
    const sec = (examState.timeLeft % 60).toString().padStart(2, '0');
    document.getElementById('timer-display').textContent = `${min}:${sec}`;

    // Change color when low
    const timerEl = document.getElementById('exam-timer');
    if (examState.timeLeft < 300) {
        timerEl.style.borderColor = 'rgba(255,68,68,0.5)';
        timerEl.style.color = '#ff4444';
    } else {
        timerEl.style.borderColor = '';
        timerEl.style.color = '';
    }
}

function renderExamQuestion() {
    const exam = examData[examState.examId];
    const q = exam.questions[examState.currentQuestion];
    const total = exam.questions.length;
    const current = examState.currentQuestion + 1;

    document.getElementById('exam-q-category').textContent = q.category;
    document.getElementById('exam-question').textContent = `${current}. ${q.question}`;
    document.getElementById('exam-progress-text').textContent = `Question ${current} of ${total}`;
    document.getElementById('exam-progress-fill').style.width = `${(current / total) * 100}%`;

    const optionsEl = document.getElementById('exam-options');
    optionsEl.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];
    q.options.forEach((opt, i) => {
        const div = document.createElement('div');
        div.className = `quiz-option${examState.answers[examState.currentQuestion] === i ? ' selected' : ''}`;
        div.innerHTML = `<span class="option-marker">${letters[i]}</span><span>${opt}</span>`;
        div.onclick = () => {
            examState.answers[examState.currentQuestion] = i;
            renderExamQuestion();
        };
        optionsEl.appendChild(div);
    });

    document.getElementById('exam-prev-btn').disabled = examState.currentQuestion === 0;
    const nextBtn = document.getElementById('exam-next-btn');
    if (examState.currentQuestion === total - 1) {
        nextBtn.textContent = '🎯 Submit Exam';
        nextBtn.onclick = submitExam;
    } else {
        nextBtn.textContent = 'Next →';
        nextBtn.onclick = () => {
            examState.currentQuestion++;
            renderExamQuestion();
        };
    }

    document.getElementById('exam-prev-btn').onclick = () => {
        if (examState.currentQuestion > 0) {
            examState.currentQuestion--;
            renderExamQuestion();
        }
    };
}

function submitExam() {
    clearInterval(examState.timer);
    const exam = examData[examState.examId];
    let correct = 0;

    exam.questions.forEach((q, i) => {
        if (examState.answers[i] === q.correct) correct++;
    });

    const percentage = Math.round((correct / exam.questions.length) * 100);
    const passed = percentage >= 75;

    // Hide quiz body, show results
    document.querySelector('.exam-body').classList.add('hidden');
    document.querySelector('.exam-progress').classList.add('hidden');
    document.getElementById('exam-results').classList.remove('hidden');

    // Animate ring
    const scoreRing = document.getElementById('exam-score-ring');
    const circumference = 2 * Math.PI * 54;
    const offset = circumference - (percentage / 100) * circumference;
    setTimeout(() => {
        scoreRing.style.strokeDashoffset = offset;
    }, 100);

    animateNumber('exam-score-number', percentage, 1500);

    document.getElementById('exam-result-status').textContent = passed
        ? '✅ PASSED!'
        : '❌ Not Yet — Keep Studying!';
    document.getElementById('exam-result-status').style.color = passed ? '#00d4aa' : '#ff6b9d';
    document.getElementById('exam-result-msg').textContent = `You scored ${correct}/${exam.questions.length} (${percentage}%). ${passed ? 'Great job!' : 'You need 75% to pass. Review the answers below and try again.'}`;

    // Answer review
    const reviewEl = document.getElementById('exam-answers-review');
    reviewEl.innerHTML = '<h4 style="margin-bottom:16px;">📝 Answer Review</h4>';
    exam.questions.forEach((q, i) => {
        const isCorrect = examState.answers[i] === q.correct;
        const letters = ['A', 'B', 'C', 'D'];
        const userAns = examState.answers[i] !== null ? `${letters[examState.answers[i]]}. ${q.options[examState.answers[i]]}` : 'Not answered';
        const correctAns = `${letters[q.correct]}. ${q.options[q.correct]}`;

        const div = document.createElement('div');
        div.className = `answer-review-item ${isCorrect ? 'correct' : 'incorrect'}`;
        div.innerHTML = `
            <div class="arq">${i + 1}. ${q.question}</div>
            <div class="ara">
                Your answer: ${isCorrect ? `<strong>${userAns}</strong>` : `<span class="wrong">${userAns}</span>`}
                ${!isCorrect ? `<br>Correct: <strong>${correctAns}</strong>` : ''}
            </div>
        `;
        reviewEl.appendChild(div);
    });
}

function closeExam() {
    clearInterval(examState.timer);
    document.getElementById('exam-modal').classList.add('hidden');
    document.body.style.overflow = '';
    // Reset ring
    document.getElementById('exam-score-ring').style.strokeDashoffset = 339.292;
}

// ============================================
// UTILITY FUNCTIONS
// ============================================
function animateNumber(elementId, target, duration) {
    const el = document.getElementById(elementId);
    const start = 0;
    const startTime = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // ease out cubic
        el.textContent = Math.round(start + (target - start) * eased);

        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }

    requestAnimationFrame(update);
}

// ============================================
// HERO STAT COUNTER ANIMATION
// ============================================
function animateHeroStats() {
    document.querySelectorAll('.stat-number[data-target]').forEach(el => {
        const target = parseInt(el.dataset.target);
        animateNumberElement(el, target, 2000);
    });
}

function animateNumberElement(el, target, duration) {
    const startTime = performance.now();
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(target * eased);
        if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
}

// ============================================
// SCROLL ANIMATIONS (Intersection Observer)
// ============================================
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 80);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.section-header, .concept-card, .domain-card, .pathway-card, .exam-card, .yt-channel-card, .architect-hero-card, .timeline-item').forEach(el => {
        observer.observe(el);
    });
}

// ============================================
// MOBILE MENU
// ============================================
document.getElementById('mobile-menu-btn').addEventListener('click', () => {
    document.getElementById('mobile-nav').classList.toggle('active');
});

// Close mobile menu on link click
document.querySelectorAll('.mobile-nav .nav-link').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('mobile-nav').classList.remove('active');
    });
});

// ============================================
// NAV SCROLL EFFECT
// ============================================
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const nav = document.getElementById('main-nav');
    const scroll = window.scrollY;
    if (scroll > 50) {
        nav.style.background = 'rgba(10, 10, 15, 0.95)';
    } else {
        nav.style.background = 'rgba(10, 10, 15, 0.85)';
    }
    lastScroll = scroll;
});

// ============================================
// INIT
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initQuiz();
    initScrollAnimations();

    // Animate hero stats when they come into view
    const heroObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateHeroStats();
                heroObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) heroObserver.observe(heroStats);
});
