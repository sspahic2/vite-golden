import Typography from '../../../components/Typography';



const SettingsSidebarPartner = () => {

    return (
        <div className='cardShadow my-10 p-10 w-[315px] flex flex-col'>
            <Typography size="normal" >
                <span className='font-bold border-b-2 border-primary pb-1'>
                    Kontoverwaltung
                </span>
            </Typography>

            <Typography size="large" className='mt-10 font-bold text-gray'>
                Allgemein
            </Typography>


            <Typography size="normal" className='flex space-x-2 mt-4 items-center'>
                <i className="ri-settings-5-fill text-gray text-2xl" />
                <span>Einstellungen</span>
            </Typography>

            <Typography size="normal" className='flex space-x-2 mt-1 items-center'>
                <i className="ri-mail-ai-fill text-gray text-2xl" />
                <span>Newsletter</span>
            </Typography>

            <Typography size="normal" className='flex space-x-2 mt-1 items-center'>
                <i className="ri-sticky-note-add-fill text-gray text-2xl" />
                <span>Favoriten</span>
            </Typography>

            <Typography size="normal" className='flex space-x-2 mt-1 items-center'>
                <i className="ri-chat-voice-fill text-gray text-2xl" />
                <span>Anfragen</span>
            </Typography>


            <Typography size="large" className='mt-10 font-bold text-gray' >
                Anbieter
            </Typography>

            <Typography size="normal" className='flex space-x-2 mt-4 items-center'>
                <i className="ri-star-s-fill text-gray text-2xl" />
                <span>Anbieter-Pakete</span>
            </Typography>
            <Typography size="normal" className='flex space-x-2 mt-1 items-center'>
                <i className="ri-file-user-fill text-gray text-2xl" />
                <span>Profil</span>
            </Typography>
            <Typography size="normal" className='flex space-x-2 mt-1 items-center'>
                <i className="ri-list-check text-gray text-2xl" />
                <span>Angebote verwalten</span>
            </Typography>

            <Typography size="normal" className='flex space-x-2 mt-1 items-center'>
                <i className="ri-calendar-todo-fill text-gray text-2xl" />
                <span>Terminkalender</span>
            </Typography>

            <Typography size="normal" className='flex space-x-2 mt-1 items-center'>
                <i className="ri-puzzle-2-fill text-gray text-2xl" />
                <span>Erweiterungen</span>
            </Typography>

            <Typography size="normal" className='flex space-x-2 mt-1 items-center'>
                <i className="ri-megaphone-fill text-gray text-2xl" />
                <span>Werbung</span>
            </Typography>

            <Typography size="normal" className='flex space-x-2 mt-1 items-center'>
                <i className="ri-questionnaire-fill text-gray text-2xl" />
                <span>Prioritäts-Support</span>
            </Typography>
        </div>
    )
}

export default SettingsSidebarPartner