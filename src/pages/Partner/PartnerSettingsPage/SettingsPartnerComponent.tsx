import SettingsPersonalDataPartner from "./SettingsPersonalDataPartner"
import SettingsSidebarPartner from "./SettingsSidebarPartner"

const SettingsPartnerComponent = () => {
    return (
        <div>
            <div className="my-20 container mx-auto">
                <div className='flex flex-col md:flex-row '>
                    <SettingsSidebarPartner />
                    <SettingsPersonalDataPartner className="flex-grow" />
                </div>
                {/* <SubscriptionEmail className="container mx-auto rounded-[30px]" /> */}
            </div>
        </div>
    )
}

export default SettingsPartnerComponent

