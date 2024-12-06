import { Link, useNavigate } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css';
import defaultImage from '../../assets/images/massage.jpg';
import { OFFER_PATH_SCROLL } from '../../config/PathForScroll';
import { VITE_BASE_URL } from '../../config/routes';
import { truncateText } from '../../utils/helpers';
import { useExtractImage } from '../../utils/hooks';
import ButtonCustom from '../ButtonCustom';
import ScrollLink from '../ScrollLink';

interface ICardItemProps {
    data: {
        id: number | string;
        image: string;
        price?: number;
        location?: string;
        description: string;
        publicDate?: string;
        discount?: number;
        name?: string;
    }[];
    className?: string;
}

const CardItem = (props: ICardItemProps) => {
    const { data, className } = props;
    const navigate = useNavigate();


    const extractImageName = useExtractImage();


    return (
        <div className={`grid md:grid-cols-2 gap-6 mt-6 lg:grid-cols-3 2xl:grid-cols-4 ${className} justify-items-center`}>
            {data.map((item) => {
                const imageName = extractImageName(item.image ?? '');
                return (
                    <div key={item.id} className="w-[320px] h-full cardShadow flex flex-col">
                        <div>
                            <Link to={`/offer/${item.id}`} state={{ content: item }} className='relative'>
                                <img
                                    src={imageName ? `${VITE_BASE_URL}/uploads\\${imageName}` : defaultImage}
                                    alt="card"
                                    className='rounded-t-[20px] h-48 w-full object-cover'
                                />
                                <span className='-mt-20 absolute right-0 bg-primary text-white p-2 rounded-l-[20px]'>
                                    {item.price}€/h
                                </span>
                            </Link>
                        </div>
                        <div className="p-5 flex flex-col flex-grow justify-between">
                            <div>
                                <div className='flex space-x-2 text-secondary'>
                                    <i className="ri-map-pin-fill" />
                                    <p>{item.location}</p>
                                </div>
                                <Link to="#">
                                    <h5 className="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        {item.name}
                                    </h5>
                                </Link>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    {truncateText(item.description, 140)}
                                </p>
                            </div>
                            <ScrollLink scrollTo={OFFER_PATH_SCROLL}>
                                <ButtonCustom
                                    className='mt-2'
                                    variant='primary'
                                    onClick={() => navigate(`/offer/${item.id}`, { state: { content: item } })}
                                    title="Zum Angebot"
                                />
                            </ScrollLink>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default CardItem;


