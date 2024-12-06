import { useState } from 'react';
import ButtonCustom from '../../../../../components/ButtonCustom';
import Typography from '../../../../../components/Typography';
import AddOfferIndividual from './AddOfferIndividual';
import AddOfferEvent from './AddOfferEvent';

const AddOffersComponent = () => {
    const [selectedOption, setSelectedOption] = useState('Einzelsitzung');

    return (
        <div className='flex flex-col'>
            <Typography size="big" className='font-bold text-gray'>
                Angebot hinzufügen
            </Typography>
            <div className="flex items-center mt-4 space-x-4">
                <ButtonCustom
                    variant="outline"
                    onClick={() => setSelectedOption('Einzelsitzung')}
                    title="Einzelsitzung"
                    className={`mt-4 ${selectedOption === 'Einzelsitzung' ? 'bg-primary text-white' : ''}`}
                />
                <ButtonCustom
                    variant="outline"
                    onClick={() => setSelectedOption('Veranstaltung')}
                    title="Veranstaltung"
                    className={`mt-4 ${selectedOption === 'Veranstaltung' ? 'bg-primary text-white' : ''}`}
                />
            </div>
            {selectedOption === 'Einzelsitzung' ? <AddOfferIndividual /> : <AddOfferEvent />}
        </div>
    );
};

export default AddOffersComponent;
