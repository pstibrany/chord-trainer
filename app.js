class ChordTrainer {
    constructor() {
        this.currentQuestion = 0;
        this.totalQuestions = 20;
        this.score = 0;
        this.currentChord = null;
        this.mistakes = [];
        this.answeredQuestions = [];
        this.selectedChordTypes = [];
        
        this.initializeElements();
        this.attachEventListeners();
    }
    
    initializeElements() {
        this.startScreen = document.getElementById('start-screen');
        this.quizScreen = document.getElementById('quiz-screen');
        this.resultsScreen = document.getElementById('results-screen');
        
        this.startBtn = document.getElementById('start-btn');
        this.revealBtn = document.getElementById('reveal-btn');
        this.correctBtn = document.getElementById('correct-btn');
        this.incorrectBtn = document.getElementById('incorrect-btn');
        this.restartBtn = document.getElementById('restart-btn');
        
        this.chordDisplay = document.getElementById('chord-name');
        this.answerSection = document.getElementById('answer-section');
        this.chordNotesDisplay = document.getElementById('chord-notes');
        
        this.progressFill = document.querySelector('.progress-fill');
        this.progressText = document.querySelector('.progress-text');
        
        this.finalScore = document.getElementById('final-score');
        this.scoreMessage = document.getElementById('score-message');
        this.mistakesReview = document.getElementById('mistakes-review');
    }
    
    attachEventListeners() {
        this.startBtn.addEventListener('click', () => this.startQuiz());
        this.revealBtn.addEventListener('click', () => this.revealAnswer());
        this.correctBtn.addEventListener('click', () => this.markAnswer(true));
        this.incorrectBtn.addEventListener('click', () => this.markAnswer(false));
        this.restartBtn.addEventListener('click', () => this.restartQuiz());
    }
    
    startQuiz() {
        // Get selected chord types
        this.selectedChordTypes = [];
        const checkboxes = document.querySelectorAll('.checkbox-group input[type="checkbox"]:checked');
        
        checkboxes.forEach(checkbox => {
            this.selectedChordTypes.push(checkbox.value);
        });
        
        // Validate at least one chord type is selected
        if (this.selectedChordTypes.length === 0) {
            alert('Please select at least one chord type!');
            return;
        }
        
        this.currentQuestion = 0;
        this.score = 0;
        this.mistakes = [];
        this.answeredQuestions = [];
        
        this.showScreen('quiz');
        this.nextQuestion();
    }
    
    nextQuestion() {
        this.currentQuestion++;
        
        if (this.currentQuestion > this.totalQuestions) {
            this.showResults();
            return;
        }
        
        this.currentChord = getRandomChord(this.selectedChordTypes);
        this.answeredQuestions.push({
            chord: this.currentChord,
            isCorrect: false
        });
        
        this.updateProgress();
        this.displayQuestion();
        
        // Reset button states
        this.answerSection.classList.add('hidden');
        this.revealBtn.classList.remove('hidden');
        this.correctBtn.classList.add('hidden');
        this.incorrectBtn.classList.add('hidden');
    }
    
    displayQuestion() {
        this.chordDisplay.textContent = this.currentChord.displayName;
    }
    
    revealAnswer() {
        // Show the answer
        this.chordNotesDisplay.innerHTML = this.currentChord.notes
            .map(note => `<span class="note-badge">${note}</span>`)
            .join('');
        
        this.answerSection.classList.remove('hidden');
        
        // Hide reveal button, show correct/incorrect buttons
        this.revealBtn.classList.add('hidden');
        this.correctBtn.classList.remove('hidden');
        this.incorrectBtn.classList.remove('hidden');
    }
    
    markAnswer(isCorrect) {
        this.answeredQuestions[this.currentQuestion - 1].isCorrect = isCorrect;
        
        if (isCorrect) {
            this.score++;
        } else {
            this.mistakes.push({
                chord: this.currentChord
            });
        }
        
        // Disable the buttons briefly to show feedback
        this.correctBtn.disabled = true;
        this.incorrectBtn.disabled = true;
        
        // Highlight the selected button
        if (isCorrect) {
            this.correctBtn.classList.add('selected');
        } else {
            this.incorrectBtn.classList.add('selected');
        }
        
        // Move to next question after a short delay
        setTimeout(() => {
            this.correctBtn.disabled = false;
            this.incorrectBtn.disabled = false;
            this.correctBtn.classList.remove('selected');
            this.incorrectBtn.classList.remove('selected');
            this.nextQuestion();
        }, 1000);
    }
    
    updateProgress() {
        const percentage = ((this.currentQuestion - 1) / this.totalQuestions) * 100;
        this.progressFill.style.width = `${percentage}%`;
        this.progressText.textContent = `Question ${this.currentQuestion} / ${this.totalQuestions}`;
    }
    
    showResults() {
        this.showScreen('results');
        
        const percentage = (this.score / this.totalQuestions) * 100;
        this.finalScore.textContent = `${this.score} / ${this.totalQuestions} (${percentage}%)`;
        
        if (percentage >= 90) {
            this.scoreMessage.textContent = 'Excellent! You really know your chords!';
        } else if (percentage >= 70) {
            this.scoreMessage.textContent = 'Good job! Keep practicing to improve.';
        } else if (percentage >= 50) {
            this.scoreMessage.textContent = 'Not bad! More practice will help you master these chords.';
        } else {
            this.scoreMessage.textContent = 'Keep practicing! You\'ll get better with time.';
        }
        
        if (this.mistakes.length > 0) {
            this.mistakesReview.innerHTML = `
                <h3>Chords to Review:</h3>
                <div class="mistakes-list">
                    ${this.mistakes.map(mistake => `
                        <div class="mistake-item">
                            <strong>${mistake.chord.displayName}</strong><br>
                            Notes: ${mistake.chord.notes.join(', ')}
                        </div>
                    `).join('')}
                </div>
            `;
        } else {
            this.mistakesReview.innerHTML = '<p class="perfect">Perfect score! No mistakes!</p>';
        }
    }
    
    restartQuiz() {
        this.startQuiz();
    }
    
    showScreen(screenName) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        
        switch(screenName) {
            case 'start':
                this.startScreen.classList.add('active');
                break;
            case 'quiz':
                this.quizScreen.classList.add('active');
                break;
            case 'results':
                this.resultsScreen.classList.add('active');
                break;
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new ChordTrainer();
});