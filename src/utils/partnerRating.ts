
interface Review {
    partner_id: number;
    rating: number;
}

interface AverageRating {
    [partner_id: number]: number;
}

export const calculateAverageRating = (reviews: Review[]): AverageRating => {
    const averageRatings = reviews.reduce((acc: Record<number, { sum: number; count: number }>, review) => {
        const { partner_id, rating } = review;

        if (!acc[partner_id]) {
            acc[partner_id] = { sum: 0, count: 0 };
        }

        acc[partner_id].sum += rating;
        acc[partner_id].count += 1;

        return acc;
    }, {});

    const result: AverageRating = Object.keys(averageRatings).reduce((acc, partner_id) => {
        const numericPartnerId = Number(partner_id);
        const { sum, count } = averageRatings[numericPartnerId];
        acc[numericPartnerId] = sum / count;
        return acc;
    }, {} as AverageRating);

    return result;
};
