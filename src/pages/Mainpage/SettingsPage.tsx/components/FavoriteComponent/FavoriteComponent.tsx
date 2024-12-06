import { useState } from 'react';
import people from '../../../../../assets/images/people.jpeg';
import peoples from '../../../../../assets/images/peoples.png';
import Typography from '../../../../../components/Typography';

const FavoriteComponent = () => {
    const [activeTab, setActiveTab] = useState<'einzelsitzungen' | 'veranstaltungen' | 'produkte' | 'suchen' | 'anbieter'>('einzelsitzungen');
    const singleSessions = [
        { id: 1, image: people, title: 'Muster-Einzelsitzung1', enabled: true },
        { id: 2, image: peoples, title: 'Muster-Einzelsitzung2', enabled: false },
    ];
    const [isChecked, setIsChecked] = useState(true);

    const handleToggleChange = () => {
        setIsChecked(!isChecked);
    };

    const handleTabClick = (tab: 'einzelsitzungen' | 'veranstaltungen' | 'produkte' | 'suchen' | 'anbieter'): void => {
        setActiveTab(tab);
    };

    return (
        <div className="flex flex-col">
            <Typography size="big" className="font-bold text-gray">
                Favoriten
            </Typography>

            <div className="w-full mt-4">
                <div className="w-full flex justify-between border-b border-gray">
                    <button
                        onClick={() => handleTabClick('einzelsitzungen')}
                        className={activeTab === 'einzelsitzungen' ? 'font-bold border-b-2 border-primary' : ''}
                    >
                        <Typography size="normal">
                            Einzelsitzungen
                        </Typography>
                    </button>

                    <button
                        onClick={() => handleTabClick('veranstaltungen')}
                        className={activeTab === 'veranstaltungen' ? 'font-bold border-b-2 border-primary' : ''}
                    >
                        <Typography size="normal">
                            Veranstaltungen
                        </Typography>

                    </button>
                    <button
                        onClick={() => handleTabClick('produkte')}
                        className={activeTab === 'produkte' ? 'font-bold border-b-2 border-primary' : ''}
                    >
                        <Typography size="normal">
                            Produkte
                        </Typography>
                    </button>
                    <button
                        onClick={() => handleTabClick('anbieter')}
                        className={activeTab === 'anbieter' ? 'font-bold border-b-2 border-primary' : ''}
                    >
                        <Typography size="normal">
                            Anbieter
                        </Typography>
                    </button>
                    <button
                        onClick={() => handleTabClick('suchen')}
                        className={activeTab === 'suchen' ? 'font-bold border-b-2 border-primary' : ''}
                    >
                        <Typography size="normal">
                            Suchen
                        </Typography>
                    </button>
                </div >

                {activeTab === 'einzelsitzungen' && (
                    <div>
                        <table className="w-full mt-8 border-collapse text-left">
                            <thead>
                                <tr className="border-b border-gray">
                                    <th className="p-2 text-center">Einträge</th>
                                    <th className="p-2 text-center">Titel</th>
                                    <th className="p-2 text-center">Nl.</th>
                                    <th className="p-2 text-center">Optionen</th>
                                </tr>
                            </thead>
                            <tbody>
                                {singleSessions.map((session) => (
                                    <tr key={session.id}>
                                        <td className="p-2 text-center flex items-center">
                                            <img
                                                src={session.image}
                                                alt={session.title}
                                                width={50}
                                                height={50}
                                                className="rounded mx-auto"
                                            />
                                        </td>
                                        <td className="p-2 text-center">{session.title}</td>
                                        <td className="p-2 text-center">
                                            <label className="inline-flex items-center cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    className="sr-only peer"
                                                    checked={isChecked}
                                                    onChange={handleToggleChange}
                                                />
                                                <div className="relative w-11 h-6 bg-slate-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:bg-green-600 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600">
                                                </div>
                                            </label>
                                        </td>
                                        <td className="p-2 text-center">
                                            <button className="p-2 hover:bg-gray-100 rounded-full font-bold">
                                                ✕
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <div className="mt-12 flex flex-row">
                            <label className="inline-flex cursor-pointer mt-2">
                                <input
                                    type="checkbox"
                                    className="sr-only peer"
                                    checked={isChecked}
                                    onChange={handleToggleChange}
                                />
                                {/* <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:bg-green-600 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600">
                                </div> */}
                                <div className="relative w-11 h-6 bg-slate-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:bg-green-600 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600">
                                </div>


                            </label>
                            <Typography size="normal" className='pl-4'>
                                Durch das Aktivieren des Schiebers wird das Inserat zu deiner Newsletter-Liste hinzugefügt.
                                Sobald sich etwas zu deinem Favorit aktualisiert oder ändert wirst du in deinem Newsletter
                                darüber benachrichtigt. Weitere Optionen findest du unter Newsletter.
                            </Typography>
                        </div>
                    </div>
                )}



            </div >
        </div >
    );
};

export default FavoriteComponent;
