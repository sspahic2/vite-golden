import { useState } from 'react';
import Typography from '../Typography';
import { useExtractImage } from '../../utils/hooks';
import { VITE_BASE_URL } from '../../config/routes';
import defaultImage from '../../assets/images/profilImage.jpg';

interface IReviewProps {
    id: string;
    rating: number;
    reviewText: string;
    createdAt?: string;
    user: {
        nameSurname: string;
        imageProfile: string;
    };
}

interface ICardReviewsProps {
    data: IReviewProps[];
}

const CardReviews = (props: ICardReviewsProps) => {
    const { data } = props;
    const extractImageName = useExtractImage();

    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 3;

    const totalPages = Math.ceil(data.length / itemsPerPage);

    const handleNext = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrev = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const startIndex = currentPage * itemsPerPage;
    const currentItems = data.slice(startIndex, startIndex + itemsPerPage);

    const renderStars = (rating: number) => {
        const fullStars = '★'.repeat(rating);
        const emptyStars = '☆'.repeat(5 - rating);
        return <span className="text-primary text-4xl">{fullStars}{emptyStars}</span>;
    };

    const calculateTimeDifference = (dateReview: string): string => {
        const reviewDate = new Date(dateReview);

        if (isNaN(reviewDate.getTime())) {
            return "Ungültiges Datum";
        }

        const currentDate = new Date();
        const diffTime = Math.abs(currentDate.getTime() - reviewDate.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays === 0) {
            return 'Heute';
        } else if (diffDays === 1) {
            return 'vor 1 Tag';
        } else if (diffDays < 7) {
            return `vor ${diffDays} Tagen`;
        } else if (diffDays < 30) {
            const weeks = Math.floor(diffDays / 7);
            return `vor ${weeks} ${weeks === 1 ? 'Woche' : 'Wochen'}`;
        } else if (diffDays < 365) {
            const months = Math.floor(diffDays / 30);
            return `vor ${months} ${months === 1 ? 'Monat' : 'Monaten'}`;
        } else {
            const years = Math.floor(diffDays / 365);
            return `vor ${years} ${years === 1 ? 'Jahr' : 'Jahren'}`;
        }
    };

    const hasMoreThan3Items = data.length > 3;

    return (
        <div className="flex justify-center">
            {hasMoreThan3Items && (
                <div className="flex-1 flex justify-start">
                    <button
                        onClick={handlePrev}
                        disabled={currentPage === 0}
                        className="text-5xl text-black"
                    >
                        <i className="ri-arrow-left-s-line"></i>
                    </button>
                </div>
            )}
            <div className="grid md:grid-cols-2 gap-6 mt-6 lg:grid-cols-3 xl:grid-cols-3 justify-items-center">
                {currentItems.map((item) => {
                    const imageName = extractImageName(item.user.imageProfile ?? '');
                    return (
                        <div key={item.id} className="w-full max-w-[340px] h-full flex flex-col cardShadow bg-white p-4">
                            <div className="flex flex-row items-center space-x-4">
                                <img
                                    src={imageName ? `${VITE_BASE_URL}/uploads\\${imageName}` : defaultImage}
                                    alt={item.user.nameSurname}
                                    className="rounded-full w-[80px] h-[80px] object-cover"
                                />
                                <p>{item.user.nameSurname}</p>
                            </div>
                            {/* Move the review text to be at the top */}
                            <div className="flex flex-col flex-grow justify-start mt-4">
                                <Typography size="normal" className="text-left">{item.reviewText}</Typography>
                            </div>
                            <div className="flex items-center my-2">
                                <span>{renderStars(item.rating)}</span>
                                <span className="text-md text-secondary mt-1 ml-2">({item.rating})</span>
                                {/* <span className="text-md text-secondary mt-1 ml-2"> {calculateTimeDifference(item.createdAt.toString())}</span> */}
                                <span className="text-md text-secondary mt-1 ml-2">
                                    {item.createdAt ? calculateTimeDifference(item.createdAt.toString()) : ''}
                                </span>

                            </div>
                        </div>

                    );
                })}
            </div>
            {hasMoreThan3Items && (
                <div className="flex-1 flex justify-end">
                    <button
                        onClick={handleNext}
                        disabled={currentPage === totalPages - 1}
                        className="text-5xl text-black"
                    >
                        <i className="ri-arrow-right-s-line"></i>
                    </button>
                </div>
            )}
        </div>
    );
};

export default CardReviews;
