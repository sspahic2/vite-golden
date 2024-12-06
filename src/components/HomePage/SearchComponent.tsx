import { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo/goldenSeitenLogo.png';
import { FILTER_PATH_SCROLL, HOME_PATH_SCROLL } from '../../config/PathForScroll';
import { FILTER_PATH } from '../../config/Paths';
import { AppDispatch } from '../../redux/ReduxStore';
import { getOffersByQuery } from '../../redux/slices/OfferSlice';
import ButtonCustom from '../ButtonCustom';
import ScrollLink from '../ScrollLink';
import Typography from '../Typography';


const SearchComponent = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch<AppDispatch>();
    const nameRef = useRef<HTMLInputElement | null>(null);
    const [name, setName] = useState<string>('');
    const [locationOrPostalCode, setLocationOrPostalCode] = useState<string>('');

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        setName(params.get('name') || '');
        setLocationOrPostalCode(params.get('locationOrPostalCode') || '');
    }, [location.search]);


    const handleSearch = useCallback((e: React.FormEvent) => {
        e.preventDefault();
        const searchParams = {
            name: name.trim(),
            locationOrPostalCode: locationOrPostalCode.trim(),
            page: 1,
            limit: 16,
        };
        const queryString = new URLSearchParams({
            name: searchParams.name || '',
            locationOrPostalCode: searchParams.locationOrPostalCode || '',
            page: searchParams.page.toString(),
            limit: searchParams.limit.toString(),
        }).toString();
        dispatch(getOffersByQuery(searchParams));
        navigate(`/offers?${queryString}`);
    }, [name, locationOrPostalCode, dispatch, navigate]);


    return (
        <>
            <div id={HOME_PATH_SCROLL} className="homeImageLogo relative">
                <div className="container mx-auto pt-12 flex flex-col items-center md:items-start">
                    <img src={logo} alt="logo" />
                    <Typography size="big" className='pt-10'> Entdecken Sie die transformative Kraft von Spiritualität und holistischer Gesundheit in Ihrer Nähe.</Typography>
                </div>
                <div className="mx-auto flex justify-center mt-12 px-4 searchLabel">
                    <form
                        onSubmit={handleSearch}
                        className="w-full flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4"
                    >
                        <input
                            type="text"
                            id="search_field"
                            placeholder="Naturheilkunden, Yoga, etc."
                            className="searchText text-customBigFont w-full md:w-1/3 my-4 md:my-0"
                            name="name"
                            value={name}
                            ref={nameRef}
                            onChange={(e) => setName(e.target.value)}
                            autoComplete="off"
                        />
                        <input
                            type="text"
                            id="search_field"
                            placeholder="Ort, PLZ"
                            className="searchText text-customBigFont w-full md:w-1/4 my-4 md:my-0"
                            name="locationOrPostalCode"
                            value={locationOrPostalCode}
                            onChange={(e) => setLocationOrPostalCode(e.target.value)}
                            autoComplete="off"
                        />
                        <div className="flex flex-col md:flex-row space-y-2 md:space-x-2 md:space-y-0 ">
                            <ButtonCustom
                                className="font-bold w-full md:w-auto"
                                variant="primary"
                                type="submit"
                                title="Suchen"
                            />
                            <ScrollLink to={FILTER_PATH} scrollTo={FILTER_PATH_SCROLL}>
                                <ButtonCustom
                                    className="font-bold w-full md:w-auto"
                                    variant="primary"
                                    onClick={() => {
                                        navigate(FILTER_PATH);
                                    }}
                                    title="Filter"
                                />
                            </ScrollLink>
                        </div>
                    </form>

                </div>

            </div>
        </>
    )
}

export default SearchComponent


