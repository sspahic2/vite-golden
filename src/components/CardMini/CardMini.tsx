import React from 'react';
import Typography from '../Typography';

interface ICardMiniProps {
    id: number;
    title: string;
    description: string;
    icon: string;
    className?: string;
}

interface CardMiniProps {
    data: ICardMiniProps[];
    className?: string;
}

const CardMini: React.FC<CardMiniProps> = ({ data, className }) => {

    return (
        <div className='flex flex-col items-center lg:flex-row justify-between w-full'>
            {data.map((item) => (
                <div key={item.id} className={`relative ${className} my-2 mt-20 lg:mt-0`}>
                    <div className={`w-[260px] h-[280px] xl:w-[351px] xl:h-[270px] p-2 shadow-md rounded-[20px] overflow-hidden flex flex-col justify-between`}
                        style={{
                            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                            background: "linear-gradient(168deg, rgb(249, 245, 234) 43%, rgb(235, 226, 202) 100%)",
                        }}>
                        <div className="flex flex-col text-center pt-10">
                            <Typography size="big">{item.title}</Typography>
                            <Typography size="normal" className='mt-4'>{item.description}</Typography>
                        </div>
                    </div>
                    {/* <div className="hidden xl:flex -mt-14 justify-center"> */}
                    <div className="flex -mt-14 justify-center">
                        <div className="xl:w-[100px] xl:h-[100px] bg-[#F9F5EA] border-2 border-primary border-solid rounded-full flex items-center justify-center -mb-[78px]">
                            <img src={item.icon} alt={item.title} className="w-[80px] h-[80px]" />
                        </div>
                    </div>
                </div>
            ))}

        </div >
    );
};

export default CardMini;



// import React from 'react';
// import Typography from '../Typography';

// interface ICardItemProps {
//     title: string;
//     description: string;
//     image: string;
//     location: string;
//     className?: string;
// }

// const CardItem: React.FC<ICardItemProps> = ({ title, description, image, location, className = '' }) => {
//     return (
//         <div className={`relative ${className} my-2`}>
//             <div className={`w-[260px] h-[280px] xl:w-[351px] xl:h-[270px] p-2 shadow-md rounded-[20px] overflow-hidden flex flex-col justify-between`}
//                 style={{
//                     boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
//                     background: "linear-gradient(168deg, rgb(249, 245, 234) 43%, rgb(235, 226, 202) 100%)",
//                 }}>
//                 <div className="flex flex-col text-center pt-10">
//                     <Typography size="big">{title}</Typography>
//                     <Typography size="small" className='text-gray-600'>{location}</Typography>
//                     <Typography size="normal" className='mt-4'>{description}</Typography>
//                 </div>
//             </div>
//             <div className="hidden xl:flex -mt-14 justify-center">
//                 <div className="xl:w-[100px] xl:h-[100px] bg-[#F9F5EA] border-2 border-primary border-solid rounded-full flex items-center justify-center -mb-[78px]">
//                     <img src={image} alt={title} className="w-[80px] h-[80px]" />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CardItem;


