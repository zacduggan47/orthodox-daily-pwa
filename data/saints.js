// Orthodox Saints Data
// This file contains saint information for various dates throughout the year
// Data follows the Orthodox liturgical calendar

const SAINTS_DATA = {
    // January Saints
    '01-01': {
        name: 'St. Basil the Great',
        feast: 'Circumcision of Our Lord and St. Basil the Great',
        type: 'Great Feast'
    },
    '01-06': {
        name: 'Holy Theophany',
        feast: 'Baptism of Our Lord Jesus Christ',
        type: 'Great Feast'
    },
    '01-07': {
        name: 'St. John the Baptist',
        feast: 'Synaxis of St. John the Forerunner',
        type: 'Major Feast'
    },
    '01-17': {
        name: 'St. Anthony the Great',
        feast: 'Father of Monasticism',
        type: 'Saint'
    },
    '01-25': {
        name: 'St. Gregory the Theologian',
        feast: 'Archbishop of Constantinople',
        type: 'Saint'
    },
    '01-30': {
        name: 'Three Holy Hierarchs',
        feast: 'Sts. Basil, Gregory, and John Chrysostom',
        type: 'Major Feast'
    },

    // February Saints
    '02-02': {
        name: 'Presentation of Our Lord',
        feast: 'Meeting of Our Lord in the Temple',
        type: 'Great Feast'
    },
    '02-05': {
        name: 'St. Agatha',
        feast: 'Virgin Martyr of Sicily',
        type: 'Saint'
    },
    '02-24': {
        name: 'First and Second Finding of the Head of St. John the Baptist',
        feast: 'Discovery of the Precious Head',
        type: 'Major Feast'
    },

    // March Saints
    '03-09': {
        name: 'Forty Holy Martyrs of Sebaste',
        feast: 'Soldiers who died for Christ',
        type: 'Major Feast'
    },
    '03-25': {
        name: 'Annunciation',
        feast: 'Annunciation of the Theotokos',
        type: 'Great Feast'
    },

    // April Saints
    '04-23': {
        name: 'St. George the Trophy-Bearer',
        feast: 'Great Martyr and Miracle-Worker',
        type: 'Major Feast'
    },
    '04-25': {
        name: 'St. Mark the Evangelist',
        feast: 'Author of the Second Gospel',
        type: 'Saint'
    },

    // May Saints
    '05-08': {
        name: 'St. John the Theologian',
        feast: 'Beloved Disciple of Christ',
        type: 'Major Feast'
    },
    '05-21': {
        name: 'Sts. Constantine and Helena',
        feast: 'Equal-to-the-Apostles',
        type: 'Major Feast'
    },

    // June Saints
    '06-11': {
        name: 'St. Bartholomew the Apostle',
        feast: 'One of the Twelve Apostles',
        type: 'Saint'
    },
    '06-24': {
        name: 'Nativity of St. John the Baptist',
        feast: 'Birth of the Forerunner',
        type: 'Great Feast'
    },
    '06-29': {
        name: 'Sts. Peter and Paul',
        feast: 'Chief Apostles',
        type: 'Great Feast'
    },

    // July Saints
    '07-02': {
        name: 'Deposition of the Robe of the Theotokos',
        feast: 'Protection of Constantinople',
        type: 'Major Feast'
    },
    '07-11': {
        name: 'St. Euphemia the Great Martyr',
        feast: 'Witness of Orthodox Faith',
        type: 'Saint'
    },
    '07-20': {
        name: 'Holy Prophet Elijah',
        feast: 'Fiery Ascension to Heaven',
        type: 'Major Feast'
    },
    '07-27': {
        name: 'St. Panteleimon',
        feast: 'Great Martyr and Healer',
        type: 'Major Feast'
    },

    // August Saints
    '08-01': {
        name: 'Procession of the Precious Cross',
        feast: 'Beginning of Dormition Fast',
        type: 'Major Feast'
    },
    '08-06': {
        name: 'Transfiguration',
        feast: 'Transfiguration of Our Lord',
        type: 'Great Feast'
    },
    '08-15': {
        name: 'Dormition of the Theotokos',
        feast: 'Falling Asleep of the Mother of God',
        type: 'Great Feast'
    },
    '08-29': {
        name: 'Beheading of St. John the Baptist',
        feast: 'Martyrdom of the Forerunner',
        type: 'Great Feast'
    },

    // September Saints
    '09-01': {
        name: 'Beginning of the Church Year',
        feast: 'Ecclesiastical New Year',
        type: 'Major Feast'
    },
    '09-08': {
        name: 'Nativity of the Theotokos',
        feast: 'Birth of the Mother of God',
        type: 'Great Feast'
    },
    '09-14': {
        name: 'Exaltation of the Cross',
        feast: 'Universal Exaltation of the Precious Cross',
        type: 'Great Feast'
    },

    // October Saints
    '10-01': {
        name: 'Protection of the Theotokos',
        feast: 'Pokrov - Protection of the Mother of God',
        type: 'Major Feast'
    },
    '10-06': {
        name: 'St. Thomas the Apostle',
        feast: 'Doubting Thomas',
        type: 'Saint'
    },
    '10-26': {
        name: 'St. Demetrios of Thessalonica',
        feast: 'Great Martyr and Myrrh-Streamer',
        type: 'Major Feast'
    },

    // November Saints
    '11-08': {
        name: 'Synaxis of the Archangel Michael',
        feast: 'Chief Commander of the Heavenly Host',
        type: 'Major Feast'
    },
    '11-13': {
        name: 'St. John Chrysostom',
        feast: 'Archbishop of Constantinople',
        type: 'Major Feast'
    },
    '11-21': {
        name: 'Entrance of the Theotokos',
        feast: 'Presentation of the Mother of God',
        type: 'Great Feast'
    },
    '11-30': {
        name: 'St. Andrew the First-Called',
        feast: 'First Apostle of Christ',
        type: 'Major Feast'
    },

    // December Saints
    '12-04': {
        name: 'St. Barbara the Great Martyr',
        feast: 'Protector against sudden death',
        type: 'Saint'
    },
    '12-06': {
        name: 'St. Nicholas the Wonderworker',
        feast: 'Archbishop of Myra',
        type: 'Major Feast'
    },
    '12-13': {
        name: 'St. Lucy the Martyr',
        feast: 'Virgin Martyr of Syracuse',
        type: 'Saint'
    },
    '12-25': {
        name: 'Nativity of Christ',
        feast: 'Birth of Our Lord and Savior',
        type: 'Great Feast'
    },
    '12-26': {
        name: 'Synaxis of the Theotokos',
        feast: 'Assembly in honor of the Mother of God',
        type: 'Major Feast'
    },
    '12-27': {
        name: 'St. Stephen the Protomartyr',
        feast: 'First Martyr for Christ',
        type: 'Saint'
    }
};

// Helper function to get saint information
function getSaintInfo(month, day) {
    const dateKey = `${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return SAINTS_DATA[dateKey] || null;
}

// Helper function to get all saints for a month
function getSaintsForMonth(month) {
    const monthKey = String(month).padStart(2, '0');
    const saints = {};
    
    for (const [key, value] of Object.entries(SAINTS_DATA)) {
        if (key.startsWith(monthKey)) {
            saints[key] = value;
        }
    }
    
    return saints;
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { SAINTS_DATA, getSaintInfo, getSaintsForMonth };
}
