// Shared params
const config = {
    ROLES: {
        'USER': 'user',
        'ADMIN': 'admin',
    },
    PLANS: {
        'FREE': 'free',
        'MEDIUM': 'medium',
        'PREMIUM': 'premium',
    },
    PLANS_DETAILS: {
        'FREE': {
            'MAX_TRACKS': 5,
        },
        'MEDIUM': {
            'MAX_TRACKS': 30,
        },
        'PREMIUM': {
            'MAX_TRACKS': 100,
        },
    },
    PLANS_CONFIG: {
        'DAILY': 'daily',
        'TWICE': 'twice',
        'SIX_HOURS': 'six_hours',
        'THREE_HOURS': 'three_hours',
        'ONE_HOUR': 'one_hour',
    },
    COMPARE_DATES_OPTIONS: {
        'LAST_ELEMENT': 'last_element',
        'TWELVE': 'twelve',
        'YESTERDAY': 'yesterday',
        'THREE_DAYS': 'three_days',
        'FIVE_DAYS': 'five_days',
        'ONE_WEEK': 'one_week',
        'FIRST_ELEMENT': 'first_element',
    },
    AVAILABLE_PLATFORMS: {
        'WALLAPOP': 'wallapop',
    },
}

export default config