// ============================================
// SOUND EFFECTS ENGINE
// Using Web Audio API for crisp game sounds
// ============================================

class SoundEngine {
    constructor() {
        this.audioContext = null;
        this.enabled = true;
        this.volume = 0.5;
        this.initialized = false;
    }

    // Initialize audio context (must be called after user interaction)
    init() {
        if (this.initialized) return;

        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
            this.initialized = true;
        } catch (e) {
            console.warn('Web Audio API not supported');
            this.enabled = false;
        }
    }

    // Create an oscillator-based sound
    playTone(frequency, duration, type = 'sine', volume = this.volume) {
        if (!this.enabled || !this.audioContext) return;

        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);

        oscillator.frequency.value = frequency;
        oscillator.type = type;

        gainNode.gain.setValueAtTime(volume, this.audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + duration);

        oscillator.start(this.audioContext.currentTime);
        oscillator.stop(this.audioContext.currentTime + duration);
    }

    // Play a sequence of notes
    playMelody(notes, tempo = 150) {
        if (!this.enabled || !this.audioContext) return;

        notes.forEach((note, index) => {
            setTimeout(() => {
                this.playTone(note.freq, note.duration || 0.15, note.type || 'sine', note.volume || this.volume);
            }, index * tempo);
        });
    }

    // ============================================
    // GAME SOUND EFFECTS
    // ============================================

    // Correct answer - happy ascending melody
    playCorrect() {
        this.init();
        this.playMelody([
            { freq: 523.25, duration: 0.1 },  // C5
            { freq: 659.25, duration: 0.1 },  // E5
            { freq: 783.99, duration: 0.2 }   // G5
        ], 80);
    }

    // Wrong answer - descending sad tone
    playWrong() {
        this.init();
        this.playMelody([
            { freq: 311.13, duration: 0.15, type: 'triangle' },  // Eb4
            { freq: 233.08, duration: 0.3, type: 'triangle' }    // Bb3
        ], 100);
    }

    // Button click - short pop
    playClick() {
        this.init();
        this.playTone(800, 0.05, 'sine', 0.3);
    }

    // Button hover - subtle tick
    playHover() {
        this.init();
        this.playTone(600, 0.03, 'sine', 0.1);
    }

    // Level complete - triumphant fanfare
    playLevelComplete() {
        this.init();
        this.playMelody([
            { freq: 523.25, duration: 0.15 },  // C5
            { freq: 523.25, duration: 0.15 },  // C5
            { freq: 523.25, duration: 0.15 },  // C5
            { freq: 523.25, duration: 0.3 },   // C5
            { freq: 415.30, duration: 0.3 },   // Ab4
            { freq: 466.16, duration: 0.3 },   // Bb4
            { freq: 523.25, duration: 0.15 },  // C5
            { freq: 466.16, duration: 0.15 },  // Bb4
            { freq: 523.25, duration: 0.5 }    // C5
        ], 120);
    }

    // Game over - sad descending
    playGameOver() {
        this.init();
        this.playMelody([
            { freq: 392.00, duration: 0.3, type: 'triangle' },  // G4
            { freq: 349.23, duration: 0.3, type: 'triangle' },  // F4
            { freq: 329.63, duration: 0.3, type: 'triangle' },  // E4
            { freq: 261.63, duration: 0.6, type: 'triangle' }   // C4
        ], 200);
    }

    // Streak bonus - exciting ascending
    playStreak() {
        this.init();
        this.playMelody([
            { freq: 440, duration: 0.08 },
            { freq: 554.37, duration: 0.08 },
            { freq: 659.25, duration: 0.08 },
            { freq: 880, duration: 0.2 }
        ], 60);
    }

    // Timer warning - urgent beeps
    playTimerWarning() {
        this.init();
        this.playTone(880, 0.1, 'square', 0.2);
    }

    // Countdown tick
    playTick() {
        this.init();
        this.playTone(1000, 0.03, 'sine', 0.2);
    }

    // Start game - energetic
    playStart() {
        this.init();
        this.playMelody([
            { freq: 261.63, duration: 0.1 },  // C4
            { freq: 329.63, duration: 0.1 },  // E4
            { freq: 392.00, duration: 0.1 },  // G4
            { freq: 523.25, duration: 0.3 }   // C5
        ], 100);
    }

    // Bonus points
    playBonus() {
        this.init();
        this.playMelody([
            { freq: 880, duration: 0.05 },
            { freq: 1108.73, duration: 0.05 },
            { freq: 1318.51, duration: 0.1 }
        ], 50);
    }

    // New high score
    playHighScore() {
        this.init();
        this.playMelody([
            { freq: 523.25, duration: 0.15 },
            { freq: 659.25, duration: 0.15 },
            { freq: 783.99, duration: 0.15 },
            { freq: 1046.50, duration: 0.3 },
            { freq: 783.99, duration: 0.15 },
            { freq: 1046.50, duration: 0.4 }
        ], 100);
    }

    // Toggle sound on/off
    toggle() {
        this.enabled = !this.enabled;
        return this.enabled;
    }

    // Set volume (0-1)
    setVolume(vol) {
        this.volume = Math.max(0, Math.min(1, vol));
    }
}

// Create global sound engine instance
const soundEngine = new SoundEngine();
