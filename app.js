let currentQuestions = [];
let activeIndex = null;
let selectedGrade = 'LKG';
let selectedOp = 'addition';

/**
 * Handles sliding grade selection and limits operations
 */
function setGrade(btn, val) {
    selectedGrade = val;
    document.querySelectorAll('#grade-selector .slide-opt').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    // Hide Multiplication/Division for LKG and UKG students
    const advNodes = document.querySelectorAll('.adv-node');
    if (val === 'LKG' || val === 'UKG') {
        advNodes.forEach(n => n.classList.add('hidden'));
        // Revert to addition if they were on a restricted operation
        if (selectedOp === 'multiplication' || selectedOp === 'division') {
            const addBtn = document.querySelector('#op-selector .slide-opt');
            setOp(addBtn, 'addition');
        }
    } else {
        advNodes.forEach(n => n.classList.remove('hidden'));
    }
}

function setOp(btn, val) {
    selectedOp = val;
    document.querySelectorAll('#op-selector .slide-opt').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
}

/**
 * Main game generation engine
 */
function startGame() {
    const grid = document.getElementById('quiz-grid');
    grid.innerHTML = '';
    currentQuestions = [];
    
    // Determine number ranges by grade
    let rangeMax = (selectedGrade === 'LKG') ? 5 : (selectedGrade === 'UKG') ? 10 : (selectedGrade === 'G1') ? 20 : 100;

    for (let i = 0; i < 16; i++) {
        let a, b, q, ans;
        if (selectedOp === 'addition') {
            a = Math.floor(Math.random() * (rangeMax + 1));
            b = Math.floor(Math.random() * (rangeMax - a + 1));
            q = `${a} + ${b}`; ans = a + b;
        } else if (selectedOp === 'subtraction') {
            a = Math.floor(Math.random() * rangeMax) + 1;
            b = Math.floor(Math.random() * a);
            q = `${a} - ${b}`; ans = a - b;
        } else if (selectedOp === 'multiplication') {
            a = Math.floor(Math.random() * 6) + 1; // Basic tables
            b = Math.floor(Math.random() * 10);
            q = `${a} × ${b}`; ans = a * b;
        } else {
            b = Math.floor(Math.random() * 5) + 1; // Simple divisor
            ans = Math.floor(Math.random() * 10);
            a = b * ans;
            q = `${a} ÷ ${b}`;
        }
        currentQuestions.push({ q, a: ans, userAnswer: null });
        
        const div = document.createElement('div');
        div.className = 'math-card';
        div.id = `q-${i}`;
        div.innerText = q;
        div.onclick = () => openZoom(i);
        grid.appendChild(div);
    }
    
    document.getElementById('setup-screen').classList.add('hidden');
    document.getElementById('main-header').classList.add('hidden');
    document.getElementById('game-screen').classList.remove('hidden');
}

/**
 * Modal logic for answering questions
 */
function openZoom(i) {
    activeIndex = i;
    document.getElementById('active-question').innerText = currentQuestions[i].q + " = ?";
    document.getElementById('answer-input').value = '';
    document.getElementById('zoom-overlay').classList.remove('hidden');
    setTimeout(() => document.getElementById('answer-input').focus(), 200);
}

function submitAnswer() {
    const input = document.getElementById('answer-input');
    const val = parseInt(input.value);
    if (!isNaN(val)) {
        currentQuestions[activeIndex].userAnswer = val;
        const card = document.getElementById(`q-${activeIndex}`);
        card.innerText = `${currentQuestions[activeIndex].q} = ${val}`;
        card.classList.add('answered');
        document.getElementById('zoom-overlay').classList.add('hidden');
    }
}

/**
 * Final Score Calculation
 */
function checkResults() {
    let score = 0;
    currentQuestions.forEach((item, i) => {
        const card = document.getElementById(`q-${i}`);
        if (item.userAnswer === item.a) {
            score++;
            card.classList.add('correct');
        } else {
            card.classList.add('incorrect');
            card.innerText = `${item.q} = ${item.a}`;
        }
    });
    document.getElementById('score-number').innerText = score;
    document.getElementById('result-overlay').classList.remove('hidden');
}

/**
 * App Navigation
 */
function goHome() {
    document.getElementById('game-screen').classList.add('hidden');
    document.getElementById('result-overlay').classList.add('hidden');
    document.getElementById('setup-screen').classList.remove('hidden');
    document.getElementById('main-header').classList.remove('hidden');
}

function retrySame() {
    document.getElementById('result-overlay').classList.add('hidden');
    currentQuestions.forEach((item, i) => {
        item.userAnswer = null;
        const card = document.getElementById(`q-${i}`);
        card.classList.remove('correct', 'incorrect', 'answered');
        card.innerText = item.q;
    });
}

function closeZoom() {
    document.getElementById('zoom-overlay').classList.add('hidden');
}

// Support for Enter key
document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const overlay = document.getElementById('zoom-overlay');
        if (!overlay.classList.contains('hidden')) submitAnswer();
    }
});