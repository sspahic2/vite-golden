import calendar from '../assets/icons/calendar.png';
import star from '../assets/icons/star.png';
import user from '../assets/icons/user.png';
import { default as cardPhoto, default as massage } from '../assets/images/massage.jpg';
import partnerImage from '../assets/images/partnerImage.jpg';
import yoga from '../assets/images/yoga.jpg';
import yogaDoctor from '../assets/images/yogaDoctor.jpg';

// export const userLogged = {
//     name: 'Johny',
//     image: profilImage,
//     role: 'customer'
// }

export const cardMiniData = [
    {
        id: 1,
        title: 'Entdecken',
        description: 'Störben Sie durch unser vielfältiges Angebot an spirituellen und gesundheitsfördernden Dienstleistungen.',
        icon: user,
    },
    {
        id: 2,
        title: 'Vergleichen',
        description: 'Finden Sie Ihren passenden Dienstleister durch Vergleichen von Bewertungen und Profilen.',
        icon: star,
    },
    {
        id: 3,
        title: 'Buchen',
        description: 'Nehmen Sie Kontakt auf und buchen Sie direkt Ihre erste Sitzung.',
        icon: calendar,
    },
]

export const cardItemData = [
    {
        id: 1,
        image: yoga,
        price: 120,
        location: '20095 Hamburg',
        title: 'Aura-Reinigung & Aura-Schutz',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna. Aenean velit odio, elementum in tempus ut, vehicula eu diam. Pellentesque rhoncus aliquam mattis. Ut vulputate eros sed felis sodales nec vulputate justo hendrerit. Vivamus varius pretium ligula, a aliquam odio euismod sit amet. Quisque laoreet sem sit amet orci ullamcorper at ultricies metus viverra. Pellentesque arcu mauris, malesuada quis ornare accumsan, blandit sed diam.',
        publicDate: '22.04.2024',
        discount: 20,
    },
    {
        id: 2,
        image: yogaDoctor,
        price: 110,
        location: '20095 Hamburg',
        title: 'Entspannende Massage',
        description: 'Genießen Sie eine entspannende Massage, die Körper und Geist revitalisiert.',
        publicDate: '02.02.2024',
        discount: 20,
    },
    {
        id: 3,
        image: cardPhoto,
        price: 150,
        location: '20095 Hamburg',
        title: 'Yoga-Kurse für Anfänger',
        description: 'Starten Sie Ihre Reise mit Yoga und entdecken Sie die Vorteile für Körper und Geist.',
        publicDate: '02.02.2024',
        discount: 20,
    },
    {
        id: 4,
        image: cardPhoto,
        price: 90,
        location: '20095 Hamburg',
        title: 'Meditation für mehr Gelassenheit',
        description: 'Lernen Sie Meditationstechniken für mehr Gelassenheit und innere Ruhe.',
        publicDate: '02.10.2024',
        discount: 20,
    },

];

export const cardData = [
    {
        id: 1,
        location: '20095 Hamburg',
        title: 'Aura-Reinigung & Aura-Schutz',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In id dignissimos exercitationem fuga consectetur perferendis amet a dolores, beatae itaque nulla non earum minus sequi unde nemo? Distinctio, unde in.',
    },
    {
        id: 2,
        location: '20095 Hamburg',
        title: 'Entspannende Massage',
        description: 'Genießen Sie eine entspannende Massage, die Körper und Geist revitalisiert.',
    },
    {
        id: 3,
        location: '20095 Hamburg',
        title: 'Yoga-Kurse für Anfänger',
        description: 'Starten Sie Ihre Reise mit Yoga und entdecken Sie die Vorteile für Körper und Geist.',
    },
    {
        id: 4,
        location: '20095 Hamburg',
        title: 'Meditation für mehr Gelassenheit',
        description: 'Lernen Sie Meditationstechniken für mehr Gelassenheit und innere Ruhe.',
    }

];

export const cardUser = [
    {
        id: 1,
        image: yoga,
        name: 'Martina Musermann',
        city: "Oldenburg",
        rating: 3,
        activity: 'Yoga, Meditation, Coaching, Heilmethoden',
    },
    {
        id: 2,
        image: yogaDoctor,
        name: 'Lukas Schmidt',
        city: "Berlin",
        rating: 4,
        activity: 'Fitness Training, Personal Coaching, Nutrition Consulting',
    },
    {
        id: 3,
        image: massage,
        name: 'Sarah Müller',
        city: "Hamburg",
        rating: 5,
        activity: 'Pilates, Mindfulness, Health Coaching',
    },
    {
        id: 4,
        image: massage,
        name: 'Anna Becker',
        city: "Munich",
        rating: 4,
        activity: 'Yoga, Nutrition Consulting',
    },
    {
        id: 5,
        image: massage,
        name: 'Maximilian Meier',
        city: "Cologne",
        rating: 5,
        activity: 'Personal Training, Weight Loss Coaching',
    },
    {
        id: 6,
        image: yoga,
        name: 'Laura Schneider',
        city: "Stuttgart",
        rating: 3,
        activity: 'Relaxation Techniques, Massage Therapy',
    },
    {
        id: 7,
        image: yogaDoctor,
        name: 'Tim Fischer',
        city: "Frankfurt",
        rating: 4,
        activity: 'Yoga, Health Coaching',
    },
    {
        id: 8,
        image: yoga,
        name: 'Nina Hartmann',
        city: "Düsseldorf",
        rating: 5,
        activity: 'Fitness, Yoga, Meditation',
    },
    {
        id: 9,
        image: massage,
        name: 'Felix Wagner',
        city: "Hamburg",
        rating: 2,
        activity: 'Sports Massage, Injury Rehabilitation',
    },
    {
        id: 10,
        image: massage,
        name: 'Julia König',
        city: "Nuremberg",
        rating: 4,
        activity: 'Yoga, Mindfulness Coaching',
    },
    {
        id: 11,
        image: yogaDoctor,
        name: 'Tom Richter',
        city: "Leipzig",
        rating: 3,
        activity: 'Nutrition Consulting, Personal Coaching',
    },
    {
        id: 12,
        image: massage,
        name: 'Sophie Klein',
        city: "Hannover",
        rating: 4,
        activity: 'Therapeutic Massage, Stress Relief',
    },
    {
        id: 13,
        image: yoga,
        name: 'Michaela Schulz',
        city: "Bremen",
        rating: 5,
        activity: 'Yoga, Personal Training',
    },
    {
        id: 14,
        image: yogaDoctor,
        name: 'Paul Weber',
        city: "Dortmund",
        rating: 4,
        activity: 'Fitness Coaching, Group Classes',
    },
    {
        id: 15,
        image: massage,
        name: 'Lisa Müller',
        city: "Essen",
        rating: 3,
        activity: 'Relaxation, Spa Treatments',
    }
];

export const filteredDataItem = [
    {
        id: 1,
        image: yoga,
        price: 130,
        location: '20095 Hamburg',
        title: 'Aura-Reinigung & Aura-Schutz',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In id dignissimos exercitationem fuga consectetur perferendis amet a dolores, beatae itaque nulla non earum minus sequi unde nemo? Distinctio, unde in.',
    },
    {
        id: 2,
        image: yogaDoctor,
        price: 130,
        location: '20095 Hamburg',
        title: 'Entspannende Massage',
        description: 'Genießen Sie eine entspannende Massage, die Körper und Geist revitalisiert.',
    },
    {
        id: 3,
        image: cardPhoto,
        location: '20095 Hamburg',
        title: 'Yoga-Kurse für Anfänger',
        description: 'Starten Sie Ihre Reise mit Yoga und entdecken Sie die Vorteile für Körper und Geist.',
    },
    {
        id: 4,
        image: cardPhoto,
        price: 100,
        location: '20095 Hamburg',
        title: 'Meditation für mehr Gelassenheit',
        description: 'Lernen Sie Meditationstechniken für mehr Gelassenheit und innere Ruhe.',
    },
    {
        id: 5,
        image: yoga,
        location: '20095 Hamburg',
        title: 'Kundalini Yoga für alle',
        description: 'Erleben Sie die transformative Kraft des Kundalini Yoga und steigern Sie Ihr Energieniveau.',
    },
    {
        id: 6,
        image: yogaDoctor,
        price: 180,
        location: '20095 Hamburg',
        title: 'Atemübungen für Entspannung',
        description: 'Lernen Sie effektive Atemtechniken zur Reduzierung von Stress und zur Förderung der Entspannung.',
    },
    {
        id: 7,
        image: cardPhoto,
        price: 100,
        location: '20095 Hamburg',
        title: 'Pilates für einen starken Kern',
        description: 'Stärken Sie Ihren Körper und verbessern Sie Ihre Flexibilität mit Pilates-Kursen.',
    },
    {
        id: 8,
        image: cardPhoto,
        price: 130,
        location: '20095 Hamburg',
        title: 'Yoga für Schwangere',
        description: 'Sichere und sanfte Yoga-Übungen für werdende Mütter, um Entspannung zu finden.',
    },
    {
        id: 9,
        image: yoga,
        price: 130,
        location: '20095 Hamburg',
        title: 'Stressbewältigung durch Meditation',
        description: 'Erfahren Sie, wie Meditation Ihnen helfen kann, Stress zu bewältigen und inneren Frieden zu finden.',
    },
    {
        id: 10,
        image: yogaDoctor,
        price: 90,
        location: '20095 Hamburg',
        title: 'Yoga-Workshops für Fortgeschrittene',
        description: 'Vertiefen Sie Ihre Yoga-Praxis in speziellen Workshops für Fortgeschrittene.',
    },
    {
        id: 11,
        image: cardPhoto,
        price: 120,
        location: '20095 Hamburg',
        title: 'Naturheilkundliche Therapien',
        description: 'Entdecken Sie die Vorteile von naturheilkundlichen Therapien für Ihre Gesundheit.',
    },
    {
        id: 12,
        image: cardPhoto,
        price: 90,
        location: '20095 Hamburg',
        title: 'Sound Healing Sessions',
        description: 'Genießen Sie heilsame Klänge in unseren Sound Healing Sessions für Körper und Geist.',
    }
];

export const partnerProfileData = [
    {
        id: 1,
        name: 'Mitar Miric',
        image: partnerImage,
        partnerService: 'Gewerblicher Anbieter',
        urlLink: 'www.maxmustermann.de',
        phoneNumber: '+49 1715 2452 25',
        emailPartner: 'info@maxmustermann.de',
        rating: 3,
        aboutUs: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna. Aenean velit odio, elementum in tempus ut, vehicula eu diam. Pellentesque rhoncus aliquam mattis. Ut vulputate eros sed felis sodales nec vulputate justo hendrerit. Vivamus varius pretium ligula, a aliquam odio euismod sit amet. Quisque laoreet sem sit amet orci ullamcorper at ultricies metus viverra. Pellentesque arcu mauris, malesuada quis ornare accumsan, blandit sed diam.'
    }
]

export const offersPartnerData = [
    {
        id: 1,
        image: yoga,
        price: 120,
        location: '20095 Hamburg',
        title: 'Aura-Reinigung & Aura-Schutz',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna. Aenean velit odio, elementum in tempus ut, vehicula eu diam. Pellentesque rhoncus aliquam mattis. Ut vulputate eros sed felis sodales nec vulputate justo hendrerit. Vivamus varius pretium ligula, a aliquam odio euismod sit amet. Quisque laoreet sem sit amet orci ullamcorper at ultricies metus viverra. Pellentesque arcu mauris, malesuada quis ornare accumsan, blandit sed diam.',
        publicDate: '22.04.2024',
        discount: 20,
    },
    {
        id: 2,
        image: yogaDoctor,
        price: 110,
        location: '20095 Hamburg',
        title: 'Entspannende Massage',
        description: 'Genießen Sie eine entspannende Massage, die Körper und Geist revitalisiert.',
        publicDate: '02.02.2024',
        discount: 20,
    },
    {
        id: 3,
        image: cardPhoto,
        price: 150,
        location: '20095 Hamburg',
        title: 'Yoga-Kurse für Anfänger',
        description: 'Starten Sie Ihre Reise mit Yoga und entdecken Sie die Vorteile für Körper und Geist.',
        publicDate: '02.02.2024',
        discount: 20,
    },
    {
        id: 4,
        image: cardPhoto,
        price: 90,
        location: '20095 Hamburg',
        title: 'Meditation für mehr Gelassenheit',
        description: 'Lernen Sie Meditationstechniken für mehr Gelassenheit und innere Ruhe.',
        publicDate: '02.10.2024',
        discount: 20,
    },

];

export const customersReviews = [
    {
        id: 1,
        image: yoga,
        name: 'Emir Kulic',
        city: "Sarajevo",
        rating: 5,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec.',
        dateReview: '24.04.2024'
    },
    {
        id: 2,
        image: yoga,
        name: 'Michael Kurc',
        city: "Dachau",
        rating: 4,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec.',
        dateReview: '24.02.2024'
    },
    {
        id: 3,
        image: yoga,
        name: 'Sofia Rodriguez',
        city: "Barcelona",
        rating: 5,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec.',
        dateReview: '24.10.2024'

    },
    {
        id: 4,
        image: yoga,
        name: 'Yuki Tanaka',
        city: "Tokyo",
        rating: 4,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec.',
        dateReview: '24.04.2024'
    },
    {
        id: 5,
        image: yoga,
        name: 'Olivia Thompson',
        city: "Sydney",
        rating: 3,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec.',
        dateReview: '24.02.2023'
    },
    {
        id: 6,
        image: yoga,
        name: 'Ahmed Hassan',
        city: "Cairo",
        rating: 5,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec.',
        dateReview: '02.08.2024'

    },
    {
        id: 7,
        image: yoga,
        name: 'Isabella Costa',
        city: "Rio de Janeiro",
        rating: 4,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec.',
        dateReview: '02.08.2024'
    },
    {
        id: 8,
        image: yoga,
        name: 'Liam Nelson',
        city: "Dublin",
        rating: 5,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec.',
        dateReview: '02.11.2024'

    },
    {
        id: 9,
        image: yoga,
        name: 'Priya Patel',
        city: "Mumbai",
        rating: 4,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec.',
        dateReview: '22.03.2024'

    },
    {
        id: 10,
        image: yoga,
        name: 'Elena Popova',
        city: "Moscow",
        rating: 3,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec.',
        dateReview: '23.04.2024'

    }
]

export const allOffersData = [
    {
        id: 1,
        image: yoga,
        price: 120,
        location: '20095 Hamburg',
        title: 'Aura-Reinigung & Aura-Schutz',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna. Aenean velit odio, elementum in tempus ut, vehicula eu diam. Pellentesque rhoncus aliquam mattis. Ut vulputate eros sed felis sodales nec vulputate justo hendrerit. Vivamus varius pretium ligula, a aliquam odio euismod sit amet. Quisque laoreet sem sit amet orci ullamcorper at ultricies metus viverra. Pellentesque arcu mauris, malesuada quis ornare accumsan, blandit sed diam.',
        publicDate: '22.04.2024',
        discount: 20,
    },
    {
        id: 2,
        image: yogaDoctor,
        price: 110,
        location: '20095 Hamburg',
        title: 'Entspannende Massage',
        description: 'Genießen Sie eine entspannende Massage, die Körper und Geist revitalisiert.',
        publicDate: '02.02.2024',
        discount: 20,
    },
    {
        id: 3,
        image: cardPhoto,
        price: 150,
        location: '20095 Hamburg',
        title: 'Yoga-Kurse für Anfänger',
        description: 'Starten Sie Ihre Reise mit Yoga und entdecken Sie die Vorteile für Körper und Geist.',
        publicDate: '02.02.2024',
        discount: 20,
    },
    {
        id: 4,
        image: cardPhoto,
        price: 90,
        location: '20095 Hamburg',
        title: 'Meditation für mehr Gelassenheit',
        description: 'Lernen Sie Meditationstechniken für mehr Gelassenheit und innere Ruhe.',
        publicDate: '02.10.2024',
        discount: 20,
    },
    {
        id: 5,
        image: yoga,
        price: 130,
        location: '20095 Hamburg',
        title: 'Kundalini Yoga',
        description: 'Erleben Sie die transformative Kraft des Kundalini Yoga.',
        publicDate: '15.03.2024',
        discount: 15,
    },
    {
        id: 6,
        image: yogaDoctor,
        price: 115,
        location: '20095 Hamburg',
        title: 'Thai-Massage',
        description: 'Eine traditionelle Thai-Massage zur Förderung der Flexibilität und Entspannung.',
        publicDate: '10.05.2024',
        discount: 25,
    },
    {
        id: 7,
        image: cardPhoto,
        price: 140,
        location: '20095 Hamburg',
        title: 'Pilates-Kurse',
        description: 'Stärken Sie Ihren Körper und Geist mit Pilates.',
        publicDate: '20.06.2024',
        discount: 10,
    },
    {
        id: 8,
        image: cardPhoto,
        price: 95,
        location: '20095 Hamburg',
        title: 'Stressbewältigung durch Meditation',
        description: 'Techniken zur Stressbewältigung durch Meditation.',
        publicDate: '05.07.2024',
        discount: 20,
    },
    {
        id: 9,
        image: yoga,
        price: 125,
        location: '20095 Hamburg',
        title: 'Ashtanga Yoga',
        description: 'Erleben Sie die Dynamik des Ashtanga Yoga.',
        publicDate: '30.08.2024',
        discount: 15,
    },
    {
        id: 10,
        image: yogaDoctor,
        price: 105,
        location: '20095 Hamburg',
        title: 'Aromatherapie-Massage',
        description: 'Genießen Sie eine Aromatherapie-Massage zur Entspannung.',
        publicDate: '12.09.2024',
        discount: 20,
    },
    {
        id: 11,
        image: cardPhoto,
        price: 160,
        location: '20095 Hamburg',
        title: 'Yoga-Retreat',
        description: 'Verbringen Sie ein Wochenende in einem Yoga-Retreat.',
        publicDate: '25.11.2024',
        discount: 30,
    },
    {
        id: 12,
        image: cardPhoto,
        price: 85,
        location: '20095 Hamburg',
        title: 'Meditation für Einsteiger',
        description: 'Ein Kurs für Einsteiger, um die Grundlagen der Meditation zu lernen.',
        publicDate: '01.12.2024',
        discount: 15,
    },
    {
        id: 13,
        image: yoga,
        price: 135,
        location: '20095 Hamburg',
        title: 'Yin Yoga',
        description: 'Sanfte Dehnübungen für mehr Flexibilität und Entspannung.',
        publicDate: '15.01.2025',
        discount: 20,
    },
    {
        id: 14,
        image: yogaDoctor,
        price: 120,
        location: '20095 Hamburg',
        title: 'Faszientherapie',
        description: 'Lernen Sie die Techniken der Faszientherapie kennen.',
        publicDate: '28.02.2025',
        discount: 20,
    },
    {
        id: 15,
        image: cardPhoto,
        price: 140,
        location: '20095 Hamburg',
        title: 'Kreatives Yoga',
        description: 'Entdecken Sie kreatives Yoga zur Entfaltung Ihrer Persönlichkeit.',
        publicDate: '10.03.2025',
        discount: 25,
    },
    {
        id: 16,
        image: yoga,
        price: 150,
        location: '20095 Hamburg',
        title: 'Yoga für Schwangere',
        description: 'Ein spezieller Yoga-Kurs für Schwangere zur Entspannung und Stärkung.',
        publicDate: '01.04.2025',
        discount: 20,
    },
];


