// Orthodox Daily PWA - Main JavaScript
class OrthodoxDailyApp {
    constructor() {
        this.deferredPrompt = null;
        this.prayerCompleted = false;
        this.init();
    }

    async init() {
        // Force cache refresh for new version
        this.forceCacheRefresh();
        
        // Initialize service worker
        this.registerServiceWorker();
        
        // Setup event listeners
        this.setupEventListeners();
        
        // Load daily content
        await this.loadDailyContent();
        
        // Setup PWA install prompt
        this.setupInstallPrompt();
        
        // Check prayer status
        this.checkPrayerStatus();
        
        // Check fasting status
        this.checkFastingStatus();
        
        // Initialize homepage features
        this.initializeHomepageFeatures();
    }

    // Force cache refresh for updated styles
    forceCacheRefresh() {
        const version = '1.1.1';
        const lastVersion = localStorage.getItem('appVersion');
        
        if (lastVersion !== version) {
            // Clear service worker cache
            if ('caches' in window) {
                caches.keys().then(names => {
                    names.forEach(name => {
                        caches.delete(name);
                    });
                });
            }
            
            // Store new version
            localStorage.setItem('appVersion', version);
            
            // Force reload after a short delay
            setTimeout(() => {
                window.location.reload(true);
            }, 500);
        }
    }

    // Service Worker Registration
    async registerServiceWorker() {
        if ('serviceWorker' in navigator) {
            try {
                const registration = await navigator.serviceWorker.register('/sw.js');
                console.log('Service Worker registered successfully:', registration);
            } catch (error) {
                console.log('Service Worker registration failed:', error);
            }
        }
    }

    // Event Listeners Setup
    setupEventListeners() {
        // Prayer button
        const prayedBtn = document.getElementById('prayedBtn');
        prayedBtn.addEventListener('click', () => this.markPrayerComplete());

        // Fasting button
        const fastingBtn = document.getElementById('fastingBtn');
        if (fastingBtn) {
            fastingBtn.addEventListener('click', () => this.markFastingCommitment());
        }

        // Search functionality
        const searchInput = document.getElementById('searchInput');
        const googleBtn = document.getElementById('googleBtn');
        const chatgptBtn = document.getElementById('chatgptBtn');

        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.performGoogleSearch();
            }
        });

        googleBtn.addEventListener('click', () => this.performGoogleSearch());
        chatgptBtn.addEventListener('click', () => this.performChatGPTSearch());

        // Install button
        const installBtn = document.getElementById('installBtn');
        if (installBtn) {
            installBtn.addEventListener('click', () => this.installApp());
        }
    }

    // Load Daily Content
    async loadDailyContent() {
        try {
            await this.loadTodaysSaint();
            await this.loadDailyQuote();
            await this.loadFastingGuidelines();
        } catch (error) {
            console.error('Error loading daily content:', error);
            this.showError('Unable to load daily content. Please check your connection.');
        }
    }

    // Load Today's Saint
    async loadTodaysSaint() {
        const saintName = document.getElementById('saintName');
        const saintFeast = document.getElementById('saintFeast');
        
        try {
            const today = new Date();
            const dateKey = this.formatDateKey(today);
            
            // Get saint data from saints.js
            const saintData = this.getSaintForDate(dateKey);
            
            if (saintData) {
                saintName.textContent = saintData.name;
                saintFeast.textContent = saintData.feast || 'Commemorated Today';
                
                // Remove loading state
                document.getElementById('saintCard').classList.remove('loading');
            } else {
                // Fallback for dates without specific saints
                saintName.textContent = 'Orthodox Saints';
                saintFeast.textContent = 'Commemorated Today';
                document.getElementById('saintCard').classList.remove('loading');
            }
        } catch (error) {
            saintName.textContent = 'Saint Information Unavailable';
            saintFeast.textContent = 'Please check your connection';
            console.error('Error loading saint data:', error);
        }
    }

    // Load Daily Quote
    async loadDailyQuote() {
        const quoteText = document.getElementById('quoteText');
        const quoteAuthor = document.getElementById('quoteAuthor');
        
        try {
            // Get today's quote from quotes.js
            const todaysQuote = this.getTodaysQuote();
            
            if (todaysQuote) {
                quoteText.textContent = `"${todaysQuote.text}"`;
                quoteAuthor.textContent = `— ${todaysQuote.author}`;
                
                // Remove loading state
                document.getElementById('quoteCard').classList.remove('loading');
            } else {
                // Fallback
                quoteText.textContent = '"The person who loves God cannot help loving every man as himself."';
                quoteAuthor.textContent = '— St. Maximus the Confessor';
                document.getElementById('quoteCard').classList.remove('loading');
            }
        } catch (error) {
            quoteText.textContent = 'Daily wisdom loading...';
            quoteAuthor.textContent = 'Please refresh the page';
            console.error('Error loading daily quote:', error);
        }
    }

    // Get Today's Quote
    getTodaysQuote() {
        if (typeof getTodaysQuote !== 'undefined') {
            return getTodaysQuote();
        }
        
        // Manual calculation if function not available
        const today = new Date();
        const start = new Date(today.getFullYear(), 0, 0);
        const diff = today - start;
        const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));
        
        // Basic quotes for fallback
        const basicQuotes = {
            1: {
                text: "The person who loves God cannot help loving every man as himself, even though he is grieved by the passions of those who are not yet purified.",
                author: "St. Maximus the Confessor"
            },
            2: {
                text: "Acquire the spirit of peace and a thousand souls around you will be saved.",
                author: "St. Seraphim of Sarov"
            }
        };
        
        return basicQuotes[dayOfYear % 2 + 1] || basicQuotes[1];
    }

    // Load Fasting Guidelines
    async loadFastingGuidelines() {
        const fastingStatus = document.getElementById('fastingStatus');
        const fastingDescription = document.getElementById('fastingDescription');
        const fastingActions = document.getElementById('fastingActions');
        
        try {
            const today = new Date();
            const fastingData = this.getFastingForDate(today);
            
            if (fastingData) {
                fastingStatus.textContent = fastingData.status;
                fastingDescription.textContent = fastingData.description;
                
                // Show fasting button only on fast days
                if (fastingData.status === 'Fast Day' && fastingActions) {
                    fastingActions.style.display = 'block';
                    this.checkFastingStatus();
                } else if (fastingActions) {
                    fastingActions.style.display = 'none';
                }
                
                // Add appropriate CSS class for styling
                fastingStatus.className = `fasting-status ${fastingData.cssClass}`;
                
                // Remove loading state
                document.getElementById('fastingCard').classList.remove('loading');
            } else {
                fastingStatus.textContent = 'Fasting Information Unavailable';
                fastingDescription.textContent = 'Please consult your spiritual father';
                document.getElementById('fastingCard').classList.remove('loading');
            }
        } catch (error) {
            fastingStatus.textContent = 'Unable to Load Fasting Guidelines';
            fastingDescription.textContent = 'Please check your connection';
            console.error('Error loading fasting data:', error);
        }
    }

    // Get Saint for Specific Date
    getSaintForDate(dateKey) {
        if (typeof SAINTS_DATA !== 'undefined' && SAINTS_DATA[dateKey]) {
            return SAINTS_DATA[dateKey];
        }
        
        // Return null if no specific saint data is available
        return null;
    }

    // Get Fasting Guidelines for Date
    getFastingForDate(date) {
        if (typeof FASTING_DATA === 'undefined') {
            return null;
        }

        const dayOfWeek = date.getDay(); // 0 = Sunday, 1 = Monday, etc.
        const dateKey = this.formatDateKey(date);
        
        // Check for specific date rules first
        if (FASTING_DATA.specificDates && FASTING_DATA.specificDates[dateKey]) {
            return FASTING_DATA.specificDates[dateKey];
        }
        
        // Check for general weekday rules
        if (FASTING_DATA.weeklyRules && FASTING_DATA.weeklyRules[dayOfWeek]) {
            return FASTING_DATA.weeklyRules[dayOfWeek];
        }
        
        // Default case
        return FASTING_DATA.default || null;
    }

    // Format date key for data lookup
    formatDateKey(date) {
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${month}-${day}`;
    }

    // Prayer Completion
    markPrayerComplete() {
        const prayedBtn = document.getElementById('prayedBtn');
        const today = new Date().toDateString();
        
        // Store prayer completion in localStorage
        localStorage.setItem('prayerCompleted', today);
        this.prayerCompleted = true;
        
        // Update streak
        const newStreak = this.updatePrayerStreak();
        
        // Update button state
        prayedBtn.classList.add('prayed');
        prayedBtn.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20 6L9 17l-5-5"/>
            </svg>
            Prayer completed today
        `;
        
        // Show confirmation with streak
        const streakMessage = newStreak > 1 ? 
            `Day ${newStreak} of your prayer journey. May your prayers be heard. God bless you.` :
            'May your prayers be heard. God bless you.';
        this.showNotification(streakMessage, 'success');
        
        // Update streak display
        this.updateStreakDisplay();
    }

    // Check Prayer Status
    checkPrayerStatus() {
        const today = new Date().toDateString();
        const lastPrayer = localStorage.getItem('prayerCompleted');
        
        if (lastPrayer === today) {
            this.prayerCompleted = true;
            const prayedBtn = document.getElementById('prayedBtn');
            prayedBtn.classList.add('prayed');
            prayedBtn.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M20 6L9 17l-5-5"/>
                </svg>
                Prayer completed today
            `;
        }
        
        // Update streak display
        this.updateStreakDisplay();
    }

    // Fasting Commitment Functions
    markFastingCommitment() {
        if (this.fastingCommitted) return;
        
        const today = new Date().toDateString();
        localStorage.setItem('fastingCommitted', today);
        this.fastingCommitted = true;
        
        // Update button appearance
        const fastingBtn = document.getElementById('fastingBtn');
        fastingBtn.classList.add('fasted');
        fastingBtn.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20 6L9 17l-5-5"/>
            </svg>
            Fasting commitment made
        `;
        
        // Show confirmation
        this.showNotification('Your fasting commitment has been recorded. May God bless your sacrifice.', 'success');
    }

    checkFastingStatus() {
        const today = new Date().toDateString();
        const lastFasting = localStorage.getItem('fastingCommitted');
        
        if (lastFasting === today) {
            this.fastingCommitted = true;
            const fastingBtn = document.getElementById('fastingBtn');
            if (fastingBtn) {
                fastingBtn.classList.add('fasted');
                fastingBtn.innerHTML = `
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M20 6L9 17l-5-5"/>
                    </svg>
                    Fasting commitment made
                `;
            }
        }
    }

    // Prayer Streak Management
    updatePrayerStreak() {
        const today = new Date();
        const todayString = today.toDateString();
        
        // Get current streak data
        let streakData = JSON.parse(localStorage.getItem('prayerStreak') || '{"count": 0, "lastDate": null, "completedDates": []}');
        
        // Check if already counted today
        if (streakData.completedDates.includes(todayString)) {
            return streakData.count;
        }
        
        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayString = yesterday.toDateString();
        
        // Check if streak continues
        if (streakData.lastDate === yesterdayString) {
            // Continue streak
            streakData.count += 1;
        } else if (streakData.lastDate === null || streakData.lastDate !== todayString) {
            // Start new streak or reset
            streakData.count = 1;
        }
        
        // Update streak data
        streakData.lastDate = todayString;
        streakData.completedDates.push(todayString);
        
        // Keep only last 365 days to prevent excessive storage
        if (streakData.completedDates.length > 365) {
            streakData.completedDates = streakData.completedDates.slice(-365);
        }
        
        // Save updated streak
        localStorage.setItem('prayerStreak', JSON.stringify(streakData));
        
        return streakData.count;
    }

    getCurrentStreak() {
        const today = new Date();
        const todayString = today.toDateString();
        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayString = yesterday.toDateString();
        
        let streakData = JSON.parse(localStorage.getItem('prayerStreak') || '{"count": 0, "lastDate": null, "completedDates": []}');
        
        // Check if streak is current
        if (streakData.lastDate === todayString || streakData.lastDate === yesterdayString) {
            return streakData.count;
        }
        
        // Streak is broken
        return 0;
    }

    updateStreakDisplay() {
        const currentStreak = this.getCurrentStreak();
        let streakElement = document.getElementById('streakDisplay');
        
        if (!streakElement) {
            // Create streak display element
            streakElement = document.createElement('div');
            streakElement.id = 'streakDisplay';
            streakElement.className = 'streak-display';
            
            // Insert after prayer section
            const prayerSection = document.querySelector('.prayer-section');
            prayerSection.parentNode.insertBefore(streakElement, prayerSection.nextSibling);
        }
        
        if (currentStreak > 0) {
            const streakText = currentStreak === 1 ? 'day' : 'days';
            const encouragement = this.getStreakEncouragement(currentStreak);
            
            streakElement.innerHTML = `
                <div class="streak-content">
                    <div class="streak-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>
                        </svg>
                    </div>
                    <div class="streak-info">
                        <div class="streak-number">${currentStreak} ${streakText}</div>
                        <div class="streak-label">Prayer streak</div>
                        <div class="streak-encouragement">${encouragement}</div>
                    </div>
                </div>
            `;
            streakElement.style.display = 'block';
        } else {
            streakElement.style.display = 'none';
        }
    }

    getStreakEncouragement(streak) {
        if (streak >= 40) return "Forty days of faithfulness - like Christ in the wilderness";
        if (streak >= 30) return "A month of devotion - blessed persistence";
        if (streak >= 21) return "Three weeks of prayer - forming sacred habits";
        if (streak >= 14) return "Two weeks strong - building spiritual discipline";
        if (streak >= 7) return "One week of faithful prayer";
        if (streak >= 3) return "Building a holy rhythm";
        return "Beginning your prayer journey";
    }

    // Search Functions
    performGoogleSearch() {
        const query = document.getElementById('searchInput').value.trim();
        if (query) {
            const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query + ' Orthodox Christian')}`;
            window.open(searchUrl, '_blank');
        } else {
            this.showNotification('Please enter a search term', 'warning');
        }
    }

    performChatGPTSearch() {
        const query = document.getElementById('searchInput').value.trim();
        if (query) {
            const chatgptUrl = `https://chat.openai.com/?q=${encodeURIComponent('As an Orthodox Christian, ' + query)}`;
            window.open(chatgptUrl, '_blank');
        } else {
            this.showNotification('Please enter a search term', 'warning');
        }
    }

    // PWA Install Prompt
    setupInstallPrompt() {
        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            this.deferredPrompt = e;
            
            // Show install prompt
            const installPrompt = document.getElementById('installPrompt');
            if (installPrompt) {
                installPrompt.style.display = 'block';
            }
        });

        // Handle successful installation
        window.addEventListener('appinstalled', () => {
            console.log('Orthodox Daily app installed successfully');
            this.deferredPrompt = null;
            
            const installPrompt = document.getElementById('installPrompt');
            if (installPrompt) {
                installPrompt.style.display = 'none';
            }
            
            this.showNotification('App installed successfully!', 'success');
        });
    }

    // Install App
    async installApp() {
        if (!this.deferredPrompt) {
            this.showNotification('App installation not available', 'warning');
            return;
        }

        const result = await this.deferredPrompt.prompt();
        console.log('Install prompt result:', result);
        
        this.deferredPrompt = null;
        
        const installPrompt = document.getElementById('installPrompt');
        if (installPrompt) {
            installPrompt.style.display = 'none';
        }
    }

    // Utility Functions
    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: ${type === 'success' ? '#38a169' : type === 'warning' ? '#d69e2e' : '#3182ce'};
            color: white;
            padding: 12px 24px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            z-index: 1000;
            font-size: 14px;
            font-weight: 500;
            opacity: 0;
            transition: opacity 0.3s ease;
        `;
        
        notification.textContent = message;
        document.body.appendChild(notification);
        
        // Show notification
        setTimeout(() => {
            notification.style.opacity = '1';
        }, 100);
        
        // Remove notification after 3 seconds
        setTimeout(() => {
            notification.style.opacity = '0';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }

    showError(message) {
        this.showNotification(message, 'error');
    }

    // Homepage Features for Desktop
    initializeHomepageFeatures() {
        // Add time-based styling
        this.setTimeBasedStyling();
        
        // Add smooth scroll behavior for desktop
        if (window.innerWidth >= 1024) {
            this.addSmoothScrolling();
        }
        
        // Add keyboard shortcuts for desktop users
        this.setupKeyboardShortcuts();
        
        // Update time every minute for homepage ambiance
        setInterval(() => {
            this.setTimeBasedStyling();
        }, 60000);
    }

    setTimeBasedStyling() {
        const hour = new Date().getHours();
        const body = document.body;
        
        // Remove existing time classes
        body.classList.remove('morning', 'evening');
        
        // Add appropriate class based on time
        if (hour >= 6 && hour < 18) {
            body.classList.add('morning');
        } else {
            body.classList.add('evening');
        }
    }

    addSmoothScrolling() {
        // Add smooth scrolling to anchor links
        document.documentElement.style.scrollBehavior = 'smooth';
        
        // Add subtle fade-in animation for sections
        const sections = document.querySelectorAll('section');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        sections.forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(20px)';
            section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(section);
        });
    }

    setupKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // Alt + P for prayer
            if (e.altKey && e.key === 'p') {
                e.preventDefault();
                const prayerBtn = document.getElementById('prayerBtn');
                if (prayerBtn) prayerBtn.click();
            }
            
            // Alt + G for Google search
            if (e.altKey && e.key === 'g') {
                e.preventDefault();
                this.performGoogleSearch();
            }
            
            // Alt + C for ChatGPT search
            if (e.altKey && e.key === 'c') {
                e.preventDefault();
                this.performChatGPTSearch();
            }
        });
    }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new OrthodoxDailyApp();
});

// Handle offline/online status
window.addEventListener('online', () => {
    console.log('App is online');
    document.body.classList.remove('offline');
});

window.addEventListener('offline', () => {
    console.log('App is offline');
    document.body.classList.add('offline');
});
