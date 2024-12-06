import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppDispatch, RootState } from '../../redux/ReduxStore';
import { calculatePagingAll } from '../../utils/PaggingUtils';
import { getAllOffers, getOffersByQuery } from '../../redux/slices/OfferSlice';

const Pagination = () => {
    const dispatch = useDispatch<AppDispatch>();
    const pagingInformation = useSelector((state: RootState) => state.offer.pagingInformation);
    const pages = useSelector((state: RootState) => state.offer.pagingInformation?.totalCount);
    const navigate = useNavigate();
    const { search } = useLocation();
    console.log("Pag inf " + pages);
    useEffect(() => {
        const params = new URLSearchParams(search);
        const page = parseInt(params.get('page') || '1', 10);
        const limit = parseInt(params.get('limit') || '16', 10);

        const query = {
            name: params.get('name') || '',
            locationOrPostalCode: params.get('locationOrPostalCode') || '',
            page,
            limit,
        };

        if (query.name || query.locationOrPostalCode) {
            dispatch(getOffersByQuery(query));
        } else {
            dispatch(getAllOffers({ page, limit }));
        }
    }, [dispatch, search]);

    const updateURL = (newPage: string | number) => {
        const params = new URLSearchParams(search);
        if (params.get('name')?.trim() === '') params.delete('name');
        if (params.get('locationOrPostalCode')?.trim() === '') params.delete('locationOrPostalCode');
        params.set('page', String(newPage));
        if (!params.has('limit')) {
            params.set('limit', '16');
        }
        return `/offers?${params.toString()}`;
    };

    const navigateToNumber = (e: React.MouseEvent<HTMLParagraphElement>) => {
        e.preventDefault();
        const newPage = e.currentTarget.id;
        const updatedURL = updateURL(newPage);
        navigate(updatedURL);
    };

    return (
        <div className="flex flex-row justify-center mt-10">
            <div className="flex space-x-4 cursor-pointer">
                {pagingInformation && pagingInformation.totalPages > 1 && calculatePagingAll(pagingInformation).map((num) => {
                    const isActive = Number(num) === pagingInformation.currentPage;

                    return (
                        <p
                            key={num}
                            id={num.toString()}
                            className={`flex items-center justify-center px-3 py-1 rounded-md ${isActive ? 'bg-primary text-white' : 'bg-gray-100 text-black hover:bg-gray-200'}`}
                            onClick={!isActive ? navigateToNumber : undefined}
                        >
                            {num}
                        </p>
                    );
                })}
            </div>
        </div>
    );
};

export default Pagination;



