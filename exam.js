const questions = [
    // Section 1
    {
        passage: `Lessons on the Savanna <br><p><em>by Roland Smith</em></p>`,
        type: "mcq",
        question: "Which quotation supports patience? (Q1)",
        options: ["A. 3", "B. 4", "C. 5", "D. 22"],
        answer: "B",
        section: 1
    },
    {
        type: "dropdown",
        question: "Select the largest planet: (Q2)",
        options: ["Earth", "Jupiter", "Mars"],
        answer: "Jupiter",
        section: 1
    },
    {
        type: "fill",
        question: "What is 2 + 2? (Q3)",
        answer: "4",
        section: 1
    },

    // Section 2
    {
        type: "mcq",
        question: "Which is a mammal? (Q4)",
        options: ["Shark", "Dolphin", "Octopus", "Penguin"],
        answer: "Dolphin",
        section: 2
    },
    {
        type: "fill",
        question: "Water freezes at ___ degrees Celsius. (Q5)",
        answer: "0",
        section: 2
    },

    // Section 3
    // Section 3 - Drag & Drop Question
    {
        type: "fill",
        question: "Water freezes at ___ degrees Celsius. (Q5)",
        answer: "0",
        section: 2
    },

];


let currentQuestionIndex = 0;
const answers = [];
const totalQuestions = questions.length;

// Sections
const sections = [
    { name: "Section 1", duration: 27 }, // minutes
    { name: "Section 2", duration: 45 },
    { name: "Section 3", duration: 65 }
];
let currentSectionIndex = 0;
let sectionDuration = sections[currentSectionIndex].duration * 60; // in seconds
const timerDiv = document.getElementById("timer");
let timerInterval;

// Section Timer
function startSectionTimer() {
    timerDiv.textContent = `${sections[currentSectionIndex].name} - Time left: --:--`;

    timerInterval = setInterval(() => {
        let minutes = Math.floor(sectionDuration / 60);
        let seconds = sectionDuration % 60;

        timerDiv.textContent = `${sections[currentSectionIndex].name} - Time left: ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        sectionDuration--;

        if (sectionDuration < 0) {
            clearInterval(timerInterval);
            alert(`${sections[currentSectionIndex].name} time is up!`);

            currentSectionIndex++;
            if (currentSectionIndex < sections.length) {
                sectionDuration = sections[currentSectionIndex].duration * 60;
                startSectionTimer();
                // Reset question index for new section if needed
                currentQuestionIndex = 0;
                renderQuestion(currentQuestionIndex);
            } else {
                alert("All sections completed! Submitting exam...");
                submitExam();
            }
        }
    }, 1000);
}

// Drag & Drop functions
function allowDrop(ev) { ev.preventDefault(); }
function drag(ev) { ev.dataTransfer.setData("text", ev.target.id); }
function drop(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");
    const item = document.getElementById(data);
    ev.target.appendChild(item);
}

// Render question
function renderQuestion(index) {
    // Get questions of the current section and assign globalIndex
    const sectionQuestions = questions
        .filter(q => q.section === currentSectionIndex + 1)
        .map(q => ({ ...q, globalIndex: questions.indexOf(q) }));
    const q = sectionQuestions[index];

    const passageDiv = document.getElementById("passage-container");
    passageDiv.innerHTML = q.passage ? `<h5>Passage</h5><p>${q.passage}</p>` : "";

    const qDiv = document.getElementById("questions-container");
    qDiv.innerHTML = `<div class="question"><p>${index + 1}. ${q.question}</p></div>`;
    const questionContainer = qDiv.querySelector(".question");

    // ===== Render question options =====
    if (q.type === "mcq") {
        q.options.forEach(opt => {
            const optionDiv = document.createElement("div");
            optionDiv.innerHTML = `<input type="radio" name="q${q.globalIndex}" value="${opt}" ${answers[q.globalIndex] === opt ? "checked" : ""}> ${opt}`;
            questionContainer.appendChild(optionDiv);
        });
    } else if (q.type === "fill") {
        const input = document.createElement("input");
        input.type = "text";
        input.name = `q${q.globalIndex}`;
        input.placeholder = "Type your answer here";
        if (answers[q.globalIndex]) input.value = answers[q.globalIndex];
        questionContainer.appendChild(input);
    } else if (q.type === "dropdown") {
        const select = document.createElement("select");
        select.name = `q${q.globalIndex}`;
        q.options.forEach(opt => {
            const option = document.createElement("option");
            option.value = opt;
            option.textContent = opt;
            select.appendChild(option);
        });
        if (answers[q.globalIndex]) select.value = answers[q.globalIndex];
        questionContainer.appendChild(select);
    } else if (q.type === "drag-drop") {
        const container = document.createElement("div");
        container.className = "drag-drop-container";

        // Create draggable items
        const optionsDiv = document.createElement("div");
        optionsDiv.className = "drag-options";
        q.options.forEach(opt => {
            const item = document.createElement("div");
            item.className = "drag-item";
            item.id = opt.id;
            item.draggable = true;
            item.ondragstart = drag;
            item.textContent = opt.text;
            optionsDiv.appendChild(item);
        });
        container.appendChild(optionsDiv);

        // Create the correct drop zones table
        const tableDiv = document.createElement("div");
        tableDiv.className = "table-container";

        // Example: habitats for Section 3 drag-drop
        tableDiv.innerHTML = `
        <table>
            <thead>
                <tr><th>Savanna</th><th>Antarctica</th><th>Desert</th></tr>
            </thead>
            <tbody>
                <tr>
                    <td id="Savanna" class="drop-zone" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
                    <td id="Antarctica" class="drop-zone" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
                    <td id="Desert" class="drop-zone" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
                </tr>
            </tbody>
        </table>`;
        container.appendChild(tableDiv);
        questionContainer.appendChild(container);
    }
    // ============================================

    // Next button logic
    const nextBtn = document.getElementById("next-btn");
    nextBtn.textContent = index === sectionQuestions.length - 1 ? "Submit Section" : "Next";
    nextBtn.onclick = () => {
        saveAnswer(index, sectionQuestions);
        if (index < sectionQuestions.length - 1) {
            renderQuestion(index + 1);
        } else {
            alert(`${sections[currentSectionIndex].name} completed!`);
            currentSectionIndex++;
            if (currentSectionIndex < sections.length) {
                sectionDuration = sections[currentSectionIndex].duration * 60;
                currentQuestionIndex = 0;
                startSectionTimer();
                renderQuestion(currentQuestionIndex);
            } else {
                alert("All sections completed! Submitting exam...");
                submitExam();
            }
        }
    };

    // Back button logic
    const backBtn = document.getElementById("back-btn");
    backBtn.disabled = index === 0;
    backBtn.onclick = () => {
        if (index > 0) {
            saveAnswer(index, sectionQuestions);
            renderQuestion(index - 1);
        }
    };
}


// Save answer
function saveAnswer(index, sectionQuestions) {
    const q = sectionQuestions[index];
    if (q.type === "drag-drop") {
        const increase = Array.from(document.getElementById(`increase-${index}`).children).map(e => e.id);
        const decrease = Array.from(document.getElementById(`decrease-${index}`).children).map(e => e.id);
        answers[q.globalIndex] = { increase, decrease };
    } else {
        const input = document.querySelector(`[name="q${q.globalIndex}"]`);
        if (input) answers[q.globalIndex] = input.value;
    }
}
// Submit Exam
function submitExam() {
    let totalCorrect = 0;
    const mistakes = [];

    questions.forEach((q, index) => {
        const userAnswer = answers[index];

        if (q.type === "mcq" || q.type === "fill" || q.type === "dropdown") {
            if (userAnswer && userAnswer.toString().trim().toLowerCase() === q.answer.toString().trim().toLowerCase()) {
                totalCorrect++;
            } else {
                mistakes.push({
                    question: q.question,
                    yourAnswer: userAnswer || "No answer",
                    correctAnswer: q.answer
                });
            }
        } else if (q.type === "drag-drop") {
            let correct = true;

            // Check each drop zone for correct item
            if (q.correctPlacement) {
                for (let dropZoneId in q.correctPlacement) {
                    const expectedIds = q.correctPlacement[dropZoneId]; // array of correct item ids
                    const placedIds = userAnswer?.[dropZoneId] || [];
                    // If any expected id is missing in placedIds, mark incorrect
                    expectedIds.forEach(id => {
                        if (!placedIds.includes(id)) correct = false;
                    });
                }
            } else {
                // Fallback to previous "increase/decrease" logic
                q.options.forEach(opt => {
                    if (opt.text.toLowerCase().includes("increase") && !userAnswer?.increase.includes(opt.id)) correct = false;
                    if (opt.text.toLowerCase().includes("decrease") && !userAnswer?.decrease.includes(opt.id)) correct = false;
                });
            }

            if (correct) {
                totalCorrect++;
            } else {
                mistakes.push({
                    question: q.question,
                    yourAnswer: JSON.stringify(userAnswer),
                    correctAnswer: q.correctPlacement ? JSON.stringify(q.correctPlacement) : "Correct drag-drop placement"
                });
            }
        }
    });

    // Score out of 200, minimum 100, maximum 200
    const minScore = 100;
    const maxScore = 200;
    const gedScore = Math.round(minScore + (totalCorrect / questions.length) * (maxScore - minScore));

    document.getElementById("score").textContent = `${totalCorrect} / ${questions.length}`;
    document.getElementById("ged-score").textContent = `Exam Score: ${gedScore}`;
    document.getElementById("status").textContent = gedScore >= 145 ? "Passed ✅" : "Failed ❌";

    window.examMistakes = mistakes;
    document.getElementById("show-mistakes-btn").style.display = mistakes.length > 0 ? "inline-block" : "none";
    document.getElementById("result").style.display = "block";
}

// Show Mistakes
function showMistakes() {
    const mistakesList = document.getElementById("mistakes-list");
    mistakesList.innerHTML = "";
    if (window.examMistakes && window.examMistakes.length > 0) {
        window.examMistakes.forEach(m => {
            const li = document.createElement("li");
            li.innerHTML = `<strong>Q:</strong> ${m.question}<br><strong>Your Answer:</strong> ${m.yourAnswer}<br><strong>Correct Answer:</strong> ${m.correctAnswer}`;
            mistakesList.appendChild(li);
        });
        document.getElementById("mistakes").style.display = "block";
    } else mistakesList.innerHTML = "<li>No mistakes!</li>";
}

// Initialize
renderQuestion(currentQuestionIndex);
startSectionTimer();
