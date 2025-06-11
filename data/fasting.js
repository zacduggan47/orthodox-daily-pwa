// Orthodox Fasting Guidelines Data
// This file contains fasting rules according to Orthodox tradition
// Rules may vary by jurisdiction - consult your spiritual father

const FASTING_DATA = {
    // Weekly fasting rules (0 = Sunday, 1 = Monday, etc.)
    weeklyRules: {
        0: { // Sunday
            status: 'No Fast',
            description: 'All foods permitted',
            cssClass: 'no-fast'
        },
        1: { // Monday
            status: 'Fast Day',
            description: 'No meat, dairy, fish, wine, or oil',
            cssClass: 'strict-fast'
        },
        2: { // Tuesday
            status: 'No Fast',
            description: 'All foods permitted',
            cssClass: 'no-fast'
        },
        3: { // Wednesday
            status: 'Fast Day',
            description: 'No meat, dairy, fish, wine, or oil',
            cssClass: 'strict-fast'
        },
        4: { // Thursday
            status: 'No Fast',
            description: 'All foods permitted',
            cssClass: 'no-fast'
        },
        5: { // Friday
            status: 'Fast Day',
            description: 'No meat, dairy, fish, wine, or oil',
            cssClass: 'strict-fast'
        },
        6: { // Saturday
            status: 'No Fast',
            description: 'All foods permitted',
            cssClass: 'no-fast'
        }
    },

    // Specific date rules (override weekly rules)
    specificDates: {
        // January
        '01-01': {
            status: 'No Fast',
            description: 'Circumcision of Our Lord - feast day',
            cssClass: 'no-fast'
        },
        '01-06': {
            status: 'No Fast',
            description: 'Holy Theophany - Great Feast',
            cssClass: 'no-fast'
        },
        '01-05': {
            status: 'Strict Fast',
            description: 'Eve of Theophany - strict fast until after Liturgy',
            cssClass: 'strict-fast'
        },

        // February
        '02-02': {
            status: 'No Fast',
            description: 'Presentation of Our Lord - feast day',
            cssClass: 'no-fast'
        },

        // March
        '03-09': {
            status: 'No Fast',
            description: 'Forty Martyrs of Sebaste - wine and oil allowed',
            cssClass: 'wine-oil'
        },
        '03-25': {
            status: 'Fish Allowed',
            description: 'Annunciation - fish, wine, and oil permitted',
            cssClass: 'fish-allowed'
        },

        // April
        '04-23': {
            status: 'Wine and Oil',
            description: 'St. George - wine and oil allowed during Great Lent',
            cssClass: 'wine-oil'
        },

        // May
        '05-21': {
            status: 'No Fast',
            description: 'Sts. Constantine and Helena - feast day',
            cssClass: 'no-fast'
        },

        // June
        '06-24': {
            status: 'No Fast',
            description: 'Nativity of St. John the Baptist - Great Feast',
            cssClass: 'no-fast'
        },
        '06-29': {
            status: 'No Fast',
            description: 'Sts. Peter and Paul - Great Feast',
            cssClass: 'no-fast'
        },

        // July
        '07-20': {
            status: 'No Fast',
            description: 'Holy Prophet Elijah - feast day',
            cssClass: 'no-fast'
        },

        // August
        '08-01': {
            status: 'Strict Fast',
            description: 'Beginning of Dormition Fast - strict fast for 2 weeks',
            cssClass: 'strict-fast'
        },
        '08-06': {
            status: 'Fish Allowed',
            description: 'Transfiguration - fish permitted during Dormition Fast',
            cssClass: 'fish-allowed'
        },
        '08-15': {
            status: 'No Fast',
            description: 'Dormition of the Theotokos - Great Feast',
            cssClass: 'no-fast'
        },
        '08-29': {
            status: 'Strict Fast',
            description: 'Beheading of St. John the Baptist - strict fast',
            cssClass: 'strict-fast'
        },

        // September
        '09-08': {
            status: 'No Fast',
            description: 'Nativity of the Theotokos - Great Feast',
            cssClass: 'no-fast'
        },
        '09-14': {
            status: 'Strict Fast',
            description: 'Exaltation of the Cross - strict fast',
            cssClass: 'strict-fast'
        },

        // October
        '10-01': {
            status: 'No Fast',
            description: 'Protection of the Theotokos - feast day',
            cssClass: 'no-fast'
        },

        // November
        '11-15': {
            status: 'Strict Fast',
            description: 'Beginning of Nativity Fast (40 days)',
            cssClass: 'strict-fast'
        },
        '11-21': {
            status: 'Fish Allowed',
            description: 'Entrance of Theotokos - fish permitted during Nativity Fast',
            cssClass: 'fish-allowed'
        },

        // December
        '12-06': {
            status: 'Fish Allowed',
            description: 'St. Nicholas - fish permitted during Nativity Fast',
            cssClass: 'fish-allowed'
        },
        '12-20': {
            status: 'Strict Fast',
            description: 'Last 5 days of Nativity Fast - strict fast',
            cssClass: 'strict-fast'
        },
        '12-25': {
            status: 'No Fast',
            description: 'Nativity of Christ - Great Feast',
            cssClass: 'no-fast'
        }
    },

    // Fasting seasons with special rules
    fastingSeasons: {
        greatLent: {
            name: 'Great Lent',
            duration: '48 days before Pascha',
            rules: {
                weekdays: {
                    status: 'Strict Fast',
                    description: 'No meat, dairy, fish, wine, or oil',
                    cssClass: 'strict-fast'
                },
                weekends: {
                    status: 'Wine and Oil',
                    description: 'Wine and oil permitted on Saturdays and Sundays',
                    cssClass: 'wine-oil'
                }
            }
        },
        apostlesFast: {
            name: 'Apostles Fast',
            duration: 'From Monday after All Saints to June 28',
            rules: {
                mondayWednesdayFriday: {
                    status: 'Strict Fast',
                    description: 'No meat, dairy, fish, wine, or oil',
                    cssClass: 'strict-fast'
                },
                tuesdayThursday: {
                    status: 'Fish Allowed',
                    description: 'Fish, wine, and oil permitted',
                    cssClass: 'fish-allowed'
                },
                weekends: {
                    status: 'Fish Allowed',
                    description: 'Fish, wine, and oil permitted',
                    cssClass: 'fish-allowed'
                }
            }
        },
        dormitionFast: {
            name: 'Dormition Fast',
            duration: 'August 1-14',
            rules: {
                default: {
                    status: 'Strict Fast',
                    description: 'No meat, dairy, fish, wine, or oil (except Transfiguration)',
                    cssClass: 'strict-fast'
                }
            }
        },
        nativityFast: {
            name: 'Nativity Fast',
            duration: 'November 15 - December 24',
            rules: {
                phase1: {
                    period: 'November 15 - December 19',
                    mondayWednesdayFriday: {
                        status: 'Strict Fast',
                        description: 'No meat, dairy, fish, wine, or oil',
                        cssClass: 'strict-fast'
                    },
                    tuesdayThursday: {
                        status: 'Wine and Oil',
                        description: 'Wine and oil permitted, no meat or dairy',
                        cssClass: 'wine-oil'
                    },
                    weekends: {
                        status: 'Fish Allowed',
                        description: 'Fish, wine, and oil permitted',
                        cssClass: 'fish-allowed'
                    }
                },
                phase2: {
                    period: 'December 20-24',
                    default: {
                        status: 'Strict Fast',
                        description: 'Strict fast - no meat, dairy, fish, wine, or oil',
                        cssClass: 'strict-fast'
                    }
                }
            }
        }
    },

    // Default rule when no specific rule applies
    default: {
        status: 'Regular Fasting',
        description: 'Follow normal Wednesday and Friday fasting',
        cssClass: 'regular-fast'
    },

    // Special considerations
    notes: {
        sickAndPregnant: 'Those who are sick, pregnant, nursing, or very young should consult their spiritual father for appropriate fasting guidelines.',
        newToFasting: 'Those new to fasting should begin gradually and seek guidance from their priest or spiritual father.',
        travelAndWork: 'Those traveling or with demanding work may need modified fasting guidelines - seek pastoral guidance.',
        communion: 'Fast from midnight before receiving Holy Communion (water and necessary medications excepted).'
    }
};

// Helper function to determine current fasting status
function getCurrentFastingStatus(date = new Date()) {
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const dayOfWeek = date.getDay();
    const dateKey = `${month}-${day}`;

    // Check for specific date rules first
    if (FASTING_DATA.specificDates[dateKey]) {
        return FASTING_DATA.specificDates[dateKey];
    }

    // Check if we're in a special fasting season
    const seasonStatus = getCurrentFastingSeason(date);
    if (seasonStatus) {
        return seasonStatus;
    }

    // Fall back to weekly rules
    return FASTING_DATA.weeklyRules[dayOfWeek] || FASTING_DATA.default;
}

// Helper function to determine if we're in a special fasting season
function getCurrentFastingSeason(date = new Date()) {
    const month = date.getMonth() + 1;
    const day = date.getDate();

    // Nativity Fast (November 15 - December 24)
    if ((month === 11 && day >= 15) || (month === 12 && day <= 24)) {
        if (month === 12 && day >= 20) {
            // Last 5 days - strict fast
            return {
                status: 'Fast Day',
                description: 'Nativity Fast - strict fasting (no meat, dairy, fish, wine, or oil)',
                cssClass: 'strict-fast'
            };
        } else {
            // Regular Nativity Fast rules apply based on day of week
            const dayOfWeek = date.getDay();
            if (dayOfWeek === 1 || dayOfWeek === 3 || dayOfWeek === 5) { // Mon, Wed, Fri
                return {
                    status: 'Fast Day',
                    description: 'Nativity Fast - no meat, dairy, fish, wine, or oil',
                    cssClass: 'strict-fast'
                };
            } else if (dayOfWeek === 2 || dayOfWeek === 4) { // Tue, Thu
                return {
                    status: 'Fast Day',
                    description: 'Nativity Fast - wine and oil permitted, no meat, dairy, or fish',
                    cssClass: 'wine-oil'
                };
            } else { // Sat, Sun
                return {
                    status: 'Fast Day',
                    description: 'Nativity Fast - fish, wine, and oil permitted, no meat or dairy',
                    cssClass: 'fish-allowed'
                };
            }
        }
    }

    // Dormition Fast (August 1-14)
    if (month === 8 && day >= 1 && day <= 14) {
        return {
            status: 'Fast Day',
            description: 'Dormition Fast - no meat, dairy, fish, wine, or oil',
            cssClass: 'strict-fast'
        };
    }

    // Note: Great Lent and Apostles Fast dates are moveable and depend on Pascha
    // For a complete implementation, you would need to calculate these based on Pascha date

    return null;
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { FASTING_DATA, getCurrentFastingStatus, getCurrentFastingSeason };
}
