import ButtonCustom from '../ButtonCustom'
import ButtonFull from '../ButtonFull'
import Typography from '../Typography'
import FilterBox from './FilterBox'

import { filteredDataItem } from '../../utils/dummyData'
import CardItem from '../CardItem'
import { FILTER_PATH_SCROLL } from '../../config/PathForScroll'



const FilterComponent = () => {
    return (
        <div id={FILTER_PATH_SCROLL} className='mb-28'>
            <div className='container mx-auto m-4 md:mt-24 mb-10'>
                <div className='flex flex-row justify-between'>
                    <Typography size="large" >
                        Wir haben derzeit 97 aktive Angebote
                    </Typography>
                    <div className='space-x-8 flex flex-row'>
                        <ButtonCustom variant="primary" onClick={() => { }} title="Filter" startIcon='ri-filter-fill' className='btnShadow' />
                        <ButtonFull variant="outline" onClick={() => { }} title="sortieren nach: Preis" endIcon='ri-arrow-down-s-line' className='btnShadow' />
                        {/* <DropdownButton /> */}
                    </div>
                </div>
                <div className="border-b border-[#C0C0C0] mt-5  max-w-full" />
                <FilterBox />

                <div className='text-center md:text-left mt-12'>
                    <Typography size="large" >Nach dem Filtern wurden 10 Ergebnisse gefunden</Typography>
                </div>

                <CardItem data={filteredDataItem} className="mb-20" />

            </div>


            {/* <div className='container mx-auto m-4 md:mt-24 mb-16'>
                <SubscriptionEmail className="rounded-[30px]" />
            </div> */}


        </div >
    )
}

export default FilterComponent