// Orthodox Localization Data
// Supports ROCOR, Greek Orthodox, and general Orthodox traditions

const ORTHODOX_TRADITIONS = {
    GENERAL: 'general',
    ROCOR: 'rocor',
    GREEK: 'greek'
};

const LANGUAGES = {
    EN: 'en',
    RU: 'ru',
    EL: 'el'
};

// Language translations
const translations = {
    en: {
        // App Interface
        appTitle: 'Orthodox Daily',
        dailyWisdom: 'Daily Wisdom',
        todaysFasting: "Today's Fasting",
        saintOfTheDay: 'Saint of the Day',
        prayerTracker: 'Prayer Tracker',
        fastingCommitment: 'Fasting Commitment',
        prayerStreak: 'Prayer Streak',
        
        // Prayer Section
        morningPrayers: 'Morning Prayers',
        eveningPrayers: 'Evening Prayers',
        markComplete: 'Mark Complete',
        prayersCompleted: 'Prayers completed for today',
        daysStraight: 'days straight',
        
        // Fasting Section
        fastingDay: 'Fasting Day',
        nonFastingDay: 'Non-Fasting Day',
        commitToFast: 'Commit to Fast',
        fastCommitted: 'Fast committed for today',
        
        // Settings
        settings: 'Settings',
        tradition: 'Orthodox Tradition',
        language: 'Language',
        calendar: 'Calendar Type',
        
        // Traditions
        generalOrthodox: 'General Orthodox',
        rocorTradition: 'ROCOR (Russian Orthodox)',
        greekTradition: 'Greek Orthodox',
        
        // Calendar Types
        julianCalendar: 'Julian Calendar (Old Calendar)',
        gregorianCalendar: 'Gregorian Calendar (New Calendar)',
        
        // Installation
        installApp: 'Install App',
        installPrompt: 'Install Orthodox Daily as an app for quick access to your spiritual practices.',
        
        // Encouragement Messages
        streakEncouragement: {
            1: 'Great start! Keep building your prayer habit.',
            7: 'One week of consistent prayer - well done!',
            30: 'A month of faithful prayer - may God bless your devotion!',
            100: 'One hundred days of prayer - truly blessed persistence!'
        }
    },
    
    ru: {
        // App Interface
        appTitle: 'Православный День',
        dailyWisdom: 'Мудрость Дня',
        todaysFasting: 'Сегодняшний Пост',
        saintOfTheDay: 'Святой Дня',
        prayerTracker: 'Учёт Молитв',
        fastingCommitment: 'Обязательство Поста',
        prayerStreak: 'Череда Молитв',
        
        // Prayer Section
        morningPrayers: 'Утренние Молитвы',
        eveningPrayers: 'Вечерние Молитвы',
        markComplete: 'Отметить Выполненным',
        prayersCompleted: 'Молитвы выполнены на сегодня',
        daysStraight: 'дней подряд',
        
        // Fasting Section
        fastingDay: 'Постный День',
        nonFastingDay: 'Не Постный День',
        commitToFast: 'Обязаться Поститься',
        fastCommitted: 'Пост принят на сегодня',
        
        // Settings
        settings: 'Настройки',
        tradition: 'Православная Традиция',
        language: 'Язык',
        calendar: 'Тип Календаря',
        
        // Traditions
        generalOrthodox: 'Общее Православие',
        rocorTradition: 'РПЦЗ (Русская Православная)',
        greekTradition: 'Греческое Православие',
        
        // Calendar Types
        julianCalendar: 'Юлианский Календарь (Старый Стиль)',
        gregorianCalendar: 'Григорианский Календарь (Новый Стиль)',
        
        // Installation
        installApp: 'Установить Приложение',
        installPrompt: 'Установите Православный День как приложение для быстрого доступа к духовным практикам.',
        
        // Encouragement Messages
        streakEncouragement: {
            1: 'Отличное начало! Продолжайте строить молитвенную привычку.',
            7: 'Неделя постоянной молитвы - молодцы!',
            30: 'Месяц верной молитвы - да благословит Бог вашу преданность!',
            100: 'Сто дней молитвы - поистине благословенное постоянство!'
        }
    },
    
    el: {
        // App Interface
        appTitle: 'Ορθόδοξη Ημέρα',
        dailyWisdom: 'Σοφία της Ημέρας',
        todaysFasting: 'Σημερινή Νηστεία',
        saintOfTheDay: 'Άγιος της Ημέρας',
        prayerTracker: 'Παρακολούθηση Προσευχής',
        fastingCommitment: 'Δέσμευση Νηστείας',
        prayerStreak: 'Συνεχόμενες Προσευχές',
        
        // Prayer Section
        morningPrayers: 'Πρωινές Προσευχές',
        eveningPrayers: 'Εσπερινές Προσευχές',
        markComplete: 'Σημείωση Ολοκλήρωσης',
        prayersCompleted: 'Προσευχές ολοκληρώθηκαν για σήμερα',
        daysStraight: 'μέρες συνεχόμενα',
        
        // Fasting Section
        fastingDay: 'Ημέρα Νηστείας',
        nonFastingDay: 'Μη Νηστίσιμη Ημέρα',
        commitToFast: 'Δέσμευση για Νηστεία',
        fastCommitted: 'Νηστεία δεσμευτήκαμε για σήμερα',
        
        // Settings
        settings: 'Ρυθμίσεις',
        tradition: 'Ορθόδοξη Παράδοση',
        language: 'Γλώσσα',
        calendar: 'Τύπος Ημερολογίου',
        
        // Traditions
        generalOrthodox: 'Γενική Ορθοδοξία',
        rocorTradition: 'ROCOR (Ρωσική Ορθόδοξη)',
        greekTradition: 'Ελληνική Ορθοδοξία',
        
        // Calendar Types
        julianCalendar: 'Ιουλιανό Ημερολόγιο (Παλαιό Ημερολόγιο)',
        gregorianCalendar: 'Γρηγοριανό Ημερολόγιο (Νέο Ημερολόγιο)',
        
        // Installation
        installApp: 'Εγκατάσταση Εφαρμογής',
        installPrompt: 'Εγκαταστήστε την Ορθόδοξη Ημέρα ως εφαρμογή για γρήγορη πρόσβαση στις πνευματικές σας πρακτικές.',
        
        // Encouragement Messages
        streakEncouragement: {
            1: 'Εξαιρετική αρχή! Συνεχίστε να χτίζετε τη συνήθεια προσευχής.',
            7: 'Μία εβδομάδα συνεπούς προσευχής - μπράβο!',
            30: 'Ένας μήνας πιστής προσευχής - ας ευλογήσει ο Θεός την αφοσίωσή σας!',
            100: 'Εκατό μέρες προσευχής - πραγματικά ευλογημένη επιμονή!'
        }
    }
};

// Tradition-specific saints and practices
const traditionSpecificContent = {
    general: {
        saints: {
            // General Orthodox saints celebrated by most traditions
            emphasizedSaints: [
                'St. John Chrysostom',
                'St. Basil the Great',
                'St. Nicholas of Myra',
                'St. Seraphim of Sarov',
                'St. Paisios of Mount Athos'
            ]
        },
        fasting: {
            emphasis: 'standard'
        }
    },
    
    rocor: {
        saints: {
            // ROCOR-specific emphasis on Russian saints
            emphasizedSaints: [
                'St. Seraphim of Sarov',
                'St. Sergius of Radonezh',
                'St. Innocent of Alaska',
                'St. John of Kronstadt',
                'St. Paisios Velichkovsky',
                'New Martyrs and Confessors of Russia'
            ],
            newMartyrs: true
        },
        fasting: {
            emphasis: 'traditional',
            strictness: 'moderate'
        },
        calendar: 'julian',
        language: 'ru'
    },
    
    greek: {
        saints: {
            // Greek Orthodox emphasis
            emphasizedSaints: [
                'St. John Chrysostom',
                'St. Basil the Great',
                'St. Gregory the Theologian',
                'St. Paisios of Mount Athos',
                'St. Nektarios of Aegina',
                'St. Cosmas of Aetolia'
            ],
            mountAthos: true
        },
        fasting: {
            emphasis: 'traditional',
            strictness: 'strict'
        },
        calendar: 'gregorian',
        language: 'el'
    }
};

// Calendar conversion utilities
const calendarUtils = {
    // Convert Julian to Gregorian date (13-day difference in 20th-21st century)
    julianToGregorian: function(julianDate) {
        const gregorianDate = new Date(julianDate);
        gregorianDate.setDate(gregorianDate.getDate() + 13);
        return gregorianDate;
    },
    
    // Convert Gregorian to Julian date
    gregorianToJulian: function(gregorianDate) {
        const julianDate = new Date(gregorianDate);
        julianDate.setDate(julianDate.getDate() - 13);
        return julianDate;
    },
    
    // Get the appropriate date based on tradition's calendar preference
    getDateForTradition: function(tradition, baseDate = new Date()) {
        const traditionData = traditionSpecificContent[tradition];
        if (traditionData && traditionData.calendar === 'julian') {
            return this.gregorianToJulian(baseDate);
        }
        return baseDate;
    }
};

// Localization functions
function getCurrentLocale() {
    return localStorage.getItem('orthodox-locale') || 'en';
}

function getCurrentTradition() {
    return localStorage.getItem('orthodox-tradition') || 'general';
}

function getCurrentCalendar() {
    return localStorage.getItem('orthodox-calendar') || 'gregorian';
}

function setLocale(locale) {
    localStorage.setItem('orthodox-locale', locale);
    updatePageLanguage();
}

function setTradition(tradition) {
    localStorage.setItem('orthodox-tradition', tradition);
    updateTraditionContent();
}

function setCalendar(calendar) {
    localStorage.setItem('orthodox-calendar', calendar);
    updateCalendarDates();
}

function translate(key, locale = null) {
    const currentLocale = locale || getCurrentLocale();
    const keys = key.split('.');
    let translation = translations[currentLocale];
    
    for (const k of keys) {
        if (translation && translation[k]) {
            translation = translation[k];
        } else {
            // Fallback to English if translation not found
            translation = translations.en;
            for (const fallbackKey of keys) {
                if (translation && translation[fallbackKey]) {
                    translation = translation[fallbackKey];
                } else {
                    return key; // Return key if no translation found
                }
            }
        }
    }
    
    return translation;
}

function updatePageLanguage() {
    const locale = getCurrentLocale();
    document.documentElement.lang = locale;
    
    // Update all translatable elements
    const translatableElements = document.querySelectorAll('[data-translate]');
    translatableElements.forEach(element => {
        const key = element.getAttribute('data-translate');
        element.textContent = translate(key);
    });
    
    // Update placeholders
    const placeholderElements = document.querySelectorAll('[data-translate-placeholder]');
    placeholderElements.forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        element.placeholder = translate(key);
    });
}

function updateTraditionContent() {
    const tradition = getCurrentTradition();
    const traditionData = traditionSpecificContent[tradition];
    
    if (traditionData) {
        // Update emphasized saints
        if (traditionData.saints && traditionData.saints.emphasizedSaints) {
            // This will be used by the saint loading functions
            window.emphasizedSaints = traditionData.saints.emphasizedSaints;
        }
        
        // Update fasting strictness display
        if (traditionData.fasting) {
            window.fastingEmphasis = traditionData.fasting.emphasis;
        }
    }
}

function updateCalendarDates() {
    // This will trigger a refresh of date-dependent content
    if (window.orthodoxApp) {
        window.orthodoxApp.loadDailyContent();
    }
}

function getTraditionSpecificDate(baseDate = new Date()) {
    const tradition = getCurrentTradition();
    const calendar = getCurrentCalendar();
    
    if (calendar === 'julian') {
        return calendarUtils.gregorianToJulian(baseDate);
    }
    
    return baseDate;
}

// Initialize localization
function initializeLocalization() {
    // Set default tradition based on browser language
    if (!localStorage.getItem('orthodox-tradition')) {
        const browserLang = navigator.language.toLowerCase();
        if (browserLang.includes('ru')) {
            setTradition('rocor');
            setLocale('ru');
        } else if (browserLang.includes('el')) {
            setTradition('greek');
            setLocale('el');
        }
    }
    
    updatePageLanguage();
    updateTraditionContent();
    updateCalendarDates();
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        ORTHODOX_TRADITIONS,
        LANGUAGES,
        translations,
        traditionSpecificContent,
        calendarUtils,
        getCurrentLocale,
        getCurrentTradition,
        getCurrentCalendar,
        setLocale,
        setTradition,
        setCalendar,
        translate,
        updatePageLanguage,
        updateTraditionContent,
        updateCalendarDates,
        getTraditionSpecificDate,
        initializeLocalization
    };
}