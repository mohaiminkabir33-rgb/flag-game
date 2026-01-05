// ============================================
// FLAG MASTER - MAIN GAME ENGINE
// ============================================

class FlagGame {
    constructor() {
        // Game state
        this.difficulty = 'easy';
        this.level = 1;
        this.score = 0;
        this.lives = 3;
        this.streak = 0;
        this.questionsInLevel = 0;
        this.correctInLevel = 0;
        this.levelPoints = 0;
        this.highScore = this.loadHighScore();
        this.usedCountries = new Set();

        // Hint system
        this.hintsRemaining = 3;
        this.hintUsedThisQuestion = false;

        // Difficulty settings
        this.difficultySettings = {
            easy: {
                choices: 4,
                timer: null,
                questionsPerLevel: 10,
                basePoints: 100,
                countries: EASY_COUNTRIES,
                hintsPerLevel: 3
            },
            medium: {
                choices: 6,
                timer: 15,
                questionsPerLevel: 12,
                basePoints: 150,
                countries: MEDIUM_COUNTRIES,
                hintsPerLevel: 2
            },
            hard: {
                choices: 8,
                timer: 10,
                questionsPerLevel: 15,
                basePoints: 200,
                countries: HARD_COUNTRIES,
                hintsPerLevel: 1
            }
        };

        // Timer state
        this.timerInterval = null;
        this.timeLeft = 0;

        // Current question
        this.currentCountry = null;
        this.options = [];

        // DOM elements
        this.elements = {
            // Screens
            menuScreen: document.getElementById('menu-screen'),
            gameScreen: document.getElementById('game-screen'),
            directoryScreen: document.getElementById('directory-screen'),

            // Menu elements
            difficultyBtns: document.querySelectorAll('.diff-btn'),
            startBtn: document.getElementById('start-btn'),
            directoryBtn: document.getElementById('directory-btn'),
            menuHighScore: document.getElementById('menu-high-score'),

            // Game elements
            currentLevel: document.getElementById('current-level'),
            currentScore: document.getElementById('current-score'),
            timerContainer: document.getElementById('timer-container'),
            timerProgress: document.getElementById('timer-progress'),
            timerText: document.getElementById('timer-text'),
            streakCount: document.getElementById('streak-count'),
            livesDisplay: document.getElementById('lives-display'),
            levelProgress: document.getElementById('level-progress'),
            progressText: document.getElementById('progress-text'),
            flagImage: document.getElementById('flag-image'),
            optionsContainer: document.getElementById('options-container'),
            menuBtn: document.getElementById('menu-btn'),

            // Hint elements
            hintBtn: document.getElementById('hint-btn'),
            hintsRemaining: document.getElementById('hints-remaining'),
            hintDisplay: document.getElementById('hint-display'),
            hintContent: document.getElementById('hint-content'),

            // Directory elements
            directoryBackBtn: document.getElementById('directory-back-btn'),
            directoryGrid: document.getElementById('directory-grid'),
            countrySearch: document.getElementById('country-search'),
            continentFilter: document.getElementById('continent-filter'),
            countryCount: document.getElementById('country-count'),

            // Modal elements
            countryModal: document.getElementById('country-modal'),
            modalClose: document.getElementById('modal-close'),
            modalFlag: document.getElementById('modal-flag'),
            modalCountryName: document.getElementById('modal-country-name'),
            modalCapital: document.getElementById('modal-capital'),
            modalContinent: document.getElementById('modal-continent'),
            modalCode: document.getElementById('modal-code'),
            modalHistoryText: document.getElementById('modal-history-text'),

            // Popups
            resultPopup: document.getElementById('result-popup'),
            resultIcon: document.getElementById('result-icon'),
            resultTitle: document.getElementById('result-title'),
            resultMessage: document.getElementById('result-message'),
            bonusPoints: document.getElementById('bonus-points'),
            bonusAmount: document.getElementById('bonus-amount'),

            levelCompletePopup: document.getElementById('level-complete-popup'),
            levelCorrect: document.getElementById('level-correct'),
            levelAccuracy: document.getElementById('level-accuracy'),
            levelPointsDisplay: document.getElementById('level-points'),
            nextLevelBtn: document.getElementById('next-level-btn'),
            confetti: document.getElementById('confetti'),

            gameOverPopup: document.getElementById('game-over-popup'),
            finalScore: document.getElementById('final-score'),
            finalLevel: document.getElementById('final-level'),
            newHighScore: document.getElementById('new-high-score'),
            retryBtn: document.getElementById('retry-btn'),
            homeBtn: document.getElementById('home-btn'),

            complimentToast: document.getElementById('compliment-toast'),
            complimentText: document.getElementById('compliment-text')
        };

        this.init();
    }

    // ============================================
    // INITIALIZATION
    // ============================================

    init() {
        this.bindEvents();
        this.updateHighScoreDisplay();
        this.selectDifficulty('easy');
    }

    bindEvents() {
        // Difficulty selection
        this.elements.difficultyBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                soundEngine.playClick();
                this.selectDifficulty(btn.dataset.difficulty);
            });

            btn.addEventListener('mouseenter', () => {
                soundEngine.playHover();
            });
        });

        // Start button
        this.elements.startBtn.addEventListener('click', () => {
            soundEngine.playStart();
            this.startGame();
        });

        // Directory button
        this.elements.directoryBtn.addEventListener('click', () => {
            soundEngine.playClick();
            this.showDirectory();
        });

        // Menu button
        this.elements.menuBtn.addEventListener('click', () => {
            soundEngine.playClick();
            this.goToMenu();
        });

        // Hint button
        this.elements.hintBtn.addEventListener('click', () => {
            soundEngine.playClick();
            this.useHint();
        });

        // Next level button
        this.elements.nextLevelBtn.addEventListener('click', () => {
            soundEngine.playClick();
            this.startNextLevel();
        });

        // Retry button
        this.elements.retryBtn.addEventListener('click', () => {
            soundEngine.playClick();
            this.startGame();
        });

        // Home button
        this.elements.homeBtn.addEventListener('click', () => {
            soundEngine.playClick();
            this.goToMenu();
        });

        // Directory back button
        this.elements.directoryBackBtn.addEventListener('click', () => {
            soundEngine.playClick();
            this.hideDirectory();
        });

        // Directory search
        this.elements.countrySearch.addEventListener('input', () => {
            this.filterDirectory();
        });

        // Continent filter
        this.elements.continentFilter.addEventListener('change', () => {
            this.filterDirectory();
        });

        // Modal close
        this.elements.modalClose.addEventListener('click', () => {
            soundEngine.playClick();
            this.closeModal();
        });

        // Close modal on overlay click
        document.querySelector('.modal-overlay')?.addEventListener('click', () => {
            this.closeModal();
        });
    }

    // ============================================
    // MENU FUNCTIONS
    // ============================================

    selectDifficulty(diff) {
        this.difficulty = diff;
        this.elements.difficultyBtns.forEach(btn => {
            btn.classList.toggle('selected', btn.dataset.difficulty === diff);
        });
    }

    goToMenu() {
        this.stopTimer();
        this.hideAllPopups();
        this.elements.gameScreen.classList.remove('active');
        this.elements.directoryScreen.classList.remove('active');
        this.elements.menuScreen.classList.add('active');
        this.updateHighScoreDisplay();
    }

    updateHighScoreDisplay() {
        this.elements.menuHighScore.textContent = this.highScore;
    }

    // ============================================
    // GAME FLOW
    // ============================================

    startGame() {
        // Reset game state
        this.level = 1;
        this.score = 0;
        this.lives = 3;
        this.streak = 0;
        this.usedCountries.clear();

        // Reset hints
        const settings = this.difficultySettings[this.difficulty];
        this.hintsRemaining = settings.hintsPerLevel;

        // Switch screens
        this.elements.menuScreen.classList.remove('active');
        this.elements.gameScreen.classList.add('active');

        // Show/hide timer based on difficulty
        this.elements.timerContainer.classList.toggle('hidden', !settings.timer);

        // Start first level
        this.startLevel();
    }

    startLevel() {
        this.questionsInLevel = 0;
        this.correctInLevel = 0;
        this.levelPoints = 0;

        // Reset hints for new level
        const settings = this.difficultySettings[this.difficulty];
        this.hintsRemaining = settings.hintsPerLevel;
        this.updateHintUI();

        this.updateUI();
        this.loadNextQuestion();
    }

    startNextLevel() {
        this.hideAllPopups();
        this.level++;
        this.startLevel();
    }

    loadNextQuestion() {
        const settings = this.difficultySettings[this.difficulty];

        // Reset hint state for new question
        this.hintUsedThisQuestion = false;
        this.elements.hintDisplay.classList.add('hidden');
        this.updateHintUI();

        // Check if level is complete
        if (this.questionsInLevel >= settings.questionsPerLevel) {
            this.showLevelComplete();
            return;
        }

        // Get available countries for this difficulty
        let availableCountries = COUNTRIES.filter(c =>
            settings.countries.includes(c.code) && !this.usedCountries.has(c.code)
        );

        // If we've used all countries, reset the used set
        if (availableCountries.length < settings.choices) {
            this.usedCountries.clear();
            availableCountries = COUNTRIES.filter(c => settings.countries.includes(c.code));
        }

        // Select random correct answer
        const randomIndex = Math.floor(Math.random() * availableCountries.length);
        this.currentCountry = availableCountries[randomIndex];
        this.usedCountries.add(this.currentCountry.code);

        // Generate wrong options
        const wrongOptions = this.getWrongOptions(settings.choices - 1);
        this.options = this.shuffleArray([this.currentCountry, ...wrongOptions]);

        // Update UI
        this.renderQuestion();

        // Start timer if applicable
        if (settings.timer) {
            this.startTimer(settings.timer);
        }
    }

    getWrongOptions(count) {
        const settings = this.difficultySettings[this.difficulty];
        const availableWrong = COUNTRIES.filter(c =>
            settings.countries.includes(c.code) && c.code !== this.currentCountry.code
        );

        const shuffled = this.shuffleArray([...availableWrong]);
        return shuffled.slice(0, count);
    }

    // ============================================
    // HINT SYSTEM
    // ============================================

    useHint() {
        if (this.hintsRemaining <= 0 || this.hintUsedThisQuestion) return;

        this.hintsRemaining--;
        this.hintUsedThisQuestion = true;
        this.updateHintUI();

        // Generate hint
        const hintType = this.getRandomHintType();
        let hintText = '';

        switch (hintType) {
            case 'continent':
                hintText = `This country is in ${this.currentCountry.continent}`;
                break;
            case 'capital':
                hintText = `The capital is ${this.currentCountry.capital}`;
                break;
            case 'first_letter':
                hintText = `The country starts with "${this.currentCountry.name.charAt(0)}"`;
                break;
            case 'eliminate':
                // Eliminate 2 wrong options
                this.eliminateWrongOptions(2);
                hintText = `Eliminated 2 wrong answers!`;
                break;
        }

        this.elements.hintContent.textContent = hintText;
        this.elements.hintDisplay.classList.remove('hidden');

        soundEngine.playBonus();
    }

    getRandomHintType() {
        const types = ['continent', 'capital', 'first_letter', 'eliminate'];
        return types[Math.floor(Math.random() * types.length)];
    }

    eliminateWrongOptions(count) {
        const buttons = this.elements.optionsContainer.querySelectorAll('.option-btn:not(:disabled)');
        const wrongButtons = [];

        buttons.forEach(btn => {
            if (btn.textContent !== this.currentCountry.name) {
                wrongButtons.push(btn);
            }
        });

        // Shuffle and disable some wrong buttons
        const shuffled = this.shuffleArray(wrongButtons);
        for (let i = 0; i < Math.min(count, shuffled.length); i++) {
            shuffled[i].disabled = true;
            shuffled[i].style.opacity = '0.3';
            shuffled[i].style.textDecoration = 'line-through';
        }
    }

    updateHintUI() {
        this.elements.hintsRemaining.textContent = this.hintsRemaining;
        this.elements.hintBtn.disabled = this.hintsRemaining <= 0 || this.hintUsedThisQuestion;
    }

    // ============================================
    // UI RENDERING
    // ============================================

    renderQuestion() {
        // Update flag image with loading animation
        this.elements.flagImage.style.opacity = '0';

        const img = new Image();
        img.onload = () => {
            this.elements.flagImage.src = img.src;
            this.elements.flagImage.style.opacity = '1';
        };
        img.src = getFlagUrl(this.currentCountry.code, 'w640');

        // Render options
        this.elements.optionsContainer.innerHTML = '';
        this.options.forEach((country, index) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.textContent = country.name;
            btn.addEventListener('click', () => this.handleAnswer(country));
            btn.addEventListener('mouseenter', () => soundEngine.playHover());

            // Animate in with delay
            btn.style.opacity = '0';
            btn.style.transform = 'translateY(20px)';
            setTimeout(() => {
                btn.style.transition = 'all 0.3s ease';
                btn.style.opacity = '1';
                btn.style.transform = 'translateY(0)';
            }, index * 50);

            this.elements.optionsContainer.appendChild(btn);
        });
    }

    updateUI() {
        const settings = this.difficultySettings[this.difficulty];

        // Update level and score
        this.elements.currentLevel.textContent = this.level;
        this.elements.currentScore.textContent = this.score;
        this.elements.streakCount.textContent = this.streak;

        // Update lives
        this.elements.livesDisplay.textContent = '❤️'.repeat(this.lives) + '🖤'.repeat(3 - this.lives);

        // Update progress
        const progress = (this.questionsInLevel / settings.questionsPerLevel) * 100;
        this.elements.levelProgress.style.width = `${progress}%`;
        this.elements.progressText.textContent = `${this.questionsInLevel} / ${settings.questionsPerLevel}`;
    }

    // ============================================
    // TIMER
    // ============================================

    startTimer(seconds) {
        this.stopTimer();
        this.timeLeft = seconds;
        this.updateTimerDisplay();

        const circumference = 2 * Math.PI * 45;
        this.elements.timerProgress.style.strokeDasharray = circumference;
        this.elements.timerProgress.style.strokeDashoffset = 0;

        this.timerInterval = setInterval(() => {
            this.timeLeft--;
            this.updateTimerDisplay();

            // Update progress circle
            const progress = this.timeLeft / seconds;
            const offset = circumference * (1 - progress);
            this.elements.timerProgress.style.strokeDashoffset = offset;

            // Color changes
            if (this.timeLeft <= 3) {
                this.elements.timerProgress.classList.add('danger');
                this.elements.timerProgress.classList.remove('warning');
                soundEngine.playTimerWarning();
            } else if (this.timeLeft <= 5) {
                this.elements.timerProgress.classList.add('warning');
                this.elements.timerProgress.classList.remove('danger');
            } else {
                this.elements.timerProgress.classList.remove('warning', 'danger');
            }

            if (this.timeLeft <= 0) {
                this.handleTimeout();
            }
        }, 1000);
    }

    stopTimer() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }
        this.elements.timerProgress.classList.remove('warning', 'danger');
    }

    updateTimerDisplay() {
        this.elements.timerText.textContent = this.timeLeft;
    }

    handleTimeout() {
        this.stopTimer();
        this.handleAnswer(null); // Treat timeout as wrong answer
    }

    // ============================================
    // ANSWER HANDLING
    // ============================================

    handleAnswer(selectedCountry) {
        this.stopTimer();
        this.disableOptions();

        const isCorrect = selectedCountry && selectedCountry.code === this.currentCountry.code;

        if (isCorrect) {
            this.handleCorrectAnswer(selectedCountry);
        } else {
            this.handleWrongAnswer(selectedCountry);
        }
    }

    handleCorrectAnswer(selectedCountry) {
        // Play sound
        soundEngine.playCorrect();

        // Update state
        this.streak++;
        this.questionsInLevel++;
        this.correctInLevel++;

        // Calculate points
        const settings = this.difficultySettings[this.difficulty];
        let points = settings.basePoints;

        // Reduce points if hint was used
        if (this.hintUsedThisQuestion) {
            points = Math.floor(points * 0.5);
        }

        // Streak bonus
        let bonus = 0;
        if (this.streak >= 3) {
            bonus = Math.floor(points * (this.streak * 0.1));
        }

        // Time bonus for timed modes
        if (settings.timer && this.timeLeft > 0) {
            bonus += this.timeLeft * 10;
        }

        // Level multiplier
        const levelMultiplier = 1 + (this.level - 1) * 0.1;
        points = Math.floor((points + bonus) * levelMultiplier);

        this.score += points;
        this.levelPoints += points;

        // Show correct styling
        const buttons = this.elements.optionsContainer.querySelectorAll('.option-btn');
        buttons.forEach(btn => {
            if (btn.textContent === selectedCountry.name) {
                btn.classList.add('correct');
            }
        });

        // Show result popup
        this.showResultPopup(true, this.getRandomCompliment(), bonus);

        // Check for streak milestones
        if (STREAK_COMPLIMENTS[this.streak]) {
            setTimeout(() => {
                soundEngine.playStreak();
                this.showComplimentToast(STREAK_COMPLIMENTS[this.streak]);
            }, 500);
        }

        // Update UI and load next question
        this.updateUI();
        setTimeout(() => {
            this.hideResultPopup();
            this.loadNextQuestion();
        }, 1200);
    }

    handleWrongAnswer(selectedCountry) {
        // Play sound
        soundEngine.playWrong();

        // Update state
        this.streak = 0;
        this.lives--;
        this.questionsInLevel++;

        // Show styling
        const buttons = this.elements.optionsContainer.querySelectorAll('.option-btn');
        buttons.forEach(btn => {
            if (btn.textContent === this.currentCountry.name) {
                btn.classList.add('correct');
            } else if (selectedCountry && btn.textContent === selectedCountry.name) {
                btn.classList.add('wrong');
            }
        });

        // Show result popup
        const message = selectedCountry
            ? `The correct answer was ${this.currentCountry.name}`
            : `Time's up! It was ${this.currentCountry.name}`;
        this.showResultPopup(false, message, 0);

        // Update UI
        this.updateUI();

        // Check for game over
        if (this.lives <= 0) {
            setTimeout(() => {
                this.hideResultPopup();
                this.showGameOver();
            }, 1500);
        } else {
            setTimeout(() => {
                this.hideResultPopup();
                this.loadNextQuestion();
            }, 1500);
        }
    }

    disableOptions() {
        const buttons = this.elements.optionsContainer.querySelectorAll('.option-btn');
        buttons.forEach(btn => btn.disabled = true);
    }

    getRandomCompliment() {
        return COMPLIMENTS[Math.floor(Math.random() * COMPLIMENTS.length)];
    }

    // ============================================
    // POPUPS
    // ============================================

    showResultPopup(isCorrect, message, bonus) {
        this.elements.resultIcon.textContent = isCorrect ? '✅' : '❌';
        this.elements.resultTitle.textContent = isCorrect ? 'Correct!' : 'Wrong!';
        this.elements.resultTitle.style.color = isCorrect ? 'var(--success)' : 'var(--danger)';
        this.elements.resultMessage.textContent = message;

        if (bonus > 0) {
            this.elements.bonusAmount.textContent = bonus;
            this.elements.bonusPoints.classList.remove('hidden');
            soundEngine.playBonus();
        } else {
            this.elements.bonusPoints.classList.add('hidden');
        }

        this.elements.resultPopup.classList.remove('hidden');
    }

    hideResultPopup() {
        this.elements.resultPopup.classList.add('hidden');
    }

    showLevelComplete() {
        soundEngine.playLevelComplete();

        const settings = this.difficultySettings[this.difficulty];
        const accuracy = Math.round((this.correctInLevel / settings.questionsPerLevel) * 100);

        this.elements.levelCorrect.textContent = this.correctInLevel;
        this.elements.levelAccuracy.textContent = `${accuracy}%`;
        this.elements.levelPointsDisplay.textContent = this.levelPoints;

        // Create confetti
        this.createConfetti();

        this.elements.levelCompletePopup.classList.remove('hidden');
    }

    showGameOver() {
        soundEngine.playGameOver();

        this.elements.finalScore.textContent = this.score;
        this.elements.finalLevel.textContent = this.level;

        // Check for high score
        if (this.score > this.highScore) {
            this.highScore = this.score;
            this.saveHighScore();
            this.elements.newHighScore.classList.remove('hidden');
            setTimeout(() => soundEngine.playHighScore(), 500);
        } else {
            this.elements.newHighScore.classList.add('hidden');
        }

        this.elements.gameOverPopup.classList.remove('hidden');
    }

    hideAllPopups() {
        this.elements.resultPopup.classList.add('hidden');
        this.elements.levelCompletePopup.classList.add('hidden');
        this.elements.gameOverPopup.classList.add('hidden');
    }

    showComplimentToast(text) {
        this.elements.complimentText.textContent = text;
        this.elements.complimentToast.classList.remove('hidden');

        // Reset animation
        this.elements.complimentToast.style.animation = 'none';
        setTimeout(() => {
            this.elements.complimentToast.style.animation = 'toastIn 0.5s ease, toastOut 0.5s ease 1.5s forwards';
        }, 10);

        setTimeout(() => {
            this.elements.complimentToast.classList.add('hidden');
        }, 2000);
    }

    // ============================================
    // FLAG DIRECTORY
    // ============================================

    showDirectory() {
        this.elements.menuScreen.classList.remove('active');
        this.elements.directoryScreen.classList.add('active');
        this.renderDirectory();
    }

    hideDirectory() {
        this.elements.directoryScreen.classList.remove('active');
        this.elements.menuScreen.classList.add('active');
    }

    renderDirectory(countries = COUNTRIES) {
        this.elements.directoryGrid.innerHTML = '';
        this.elements.countryCount.textContent = `Showing ${countries.length} countries`;

        countries.forEach(country => {
            const card = document.createElement('div');
            card.className = 'country-card';
            card.innerHTML = `
                <img src="${getFlagUrl(country.code, 'w160')}" alt="${country.name}" class="country-card-flag" loading="lazy">
                <div class="country-card-info">
                    <div class="country-card-name">${country.name}</div>
                    <div class="country-card-details">Capital: ${country.capital || 'N/A'}</div>
                    <span class="country-card-continent">${country.continent}</span>
                </div>
            `;

            card.addEventListener('click', () => {
                soundEngine.playClick();
                this.showCountryModal(country);
            });

            this.elements.directoryGrid.appendChild(card);
        });
    }

    filterDirectory() {
        const searchTerm = this.elements.countrySearch.value.toLowerCase();
        const continent = this.elements.continentFilter.value;

        let filtered = COUNTRIES;

        if (searchTerm) {
            filtered = filtered.filter(c =>
                c.name.toLowerCase().includes(searchTerm) ||
                c.capital?.toLowerCase().includes(searchTerm) ||
                c.code.toLowerCase().includes(searchTerm)
            );
        }

        if (continent !== 'all') {
            filtered = filtered.filter(c => c.continent === continent);
        }

        this.renderDirectory(filtered);
    }

    showCountryModal(country) {
        this.elements.modalFlag.src = getFlagUrl(country.code, 'w640');
        this.elements.modalCountryName.textContent = country.name;
        this.elements.modalCapital.textContent = country.capital || 'N/A';
        this.elements.modalContinent.textContent = country.continent;
        this.elements.modalCode.textContent = country.code.toUpperCase();
        this.elements.modalHistoryText.textContent = country.history || 'No historical information available.';

        this.elements.countryModal.classList.remove('hidden');
    }

    closeModal() {
        this.elements.countryModal.classList.add('hidden');
    }

    // ============================================
    // CONFETTI EFFECT
    // ============================================

    createConfetti() {
        this.elements.confetti.innerHTML = '';
        const colors = ['#f59e0b', '#10b981', '#6366f1', '#ec4899', '#8b5cf6'];

        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = `${Math.random() * 100}%`;
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = `${Math.random() * 0.5}s`;
            confetti.style.animationDuration = `${2 + Math.random() * 2}s`;

            if (Math.random() > 0.5) {
                confetti.style.borderRadius = '50%';
            }

            this.elements.confetti.appendChild(confetti);
        }
    }

    // ============================================
    // STORAGE
    // ============================================

    loadHighScore() {
        try {
            return parseInt(localStorage.getItem('flagMasterHighScore') || '0');
        } catch {
            return 0;
        }
    }

    saveHighScore() {
        try {
            localStorage.setItem('flagMasterHighScore', this.highScore.toString());
        } catch {
            // Storage not available
        }
    }

    // ============================================
    // UTILITIES
    // ============================================

    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }
}

// ============================================
// INITIALIZE GAME
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    const game = new FlagGame();

    // Initialize sound on first interaction
    document.addEventListener('click', () => {
        soundEngine.init();
    }, { once: true });
});
