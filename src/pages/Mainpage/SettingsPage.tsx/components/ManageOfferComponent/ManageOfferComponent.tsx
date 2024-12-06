import React, { useState } from 'react';
import Typography from '../../../../../components/Typography';
import people from '../../../../../assets/images/people.jpeg';
import peoples from '../../../../../assets/images/peoples.png';
import { Link } from 'react-router-dom';
import ButtonCustom from '../../../../../components/ButtonCustom';
import DropDownOptions from './DropDownOptions';

const ManageOfferComponent = () => {
    const [activeTab, setActiveTab] = useState<'einzelsitzungen' | 'veranstaltungen'>('einzelsitzungen');
    const [dropdownSessionId, setDropdownSessionId] = useState<number | null>(null);

    const singleSessions = [
        { id: 1, image: people, title: 'Muster-Einzelsitzung1', enabled: true },
        { id: 2, image: peoples, title: 'Muster-Einzelsitzung2', enabled: false },
    ];

    const users = [
        { id: 1, name: "Max Mustermann", termin: "14:30", date: "20.04.2024" },
        { id: 2, name: "Maxima Mustermann", termin: "--", date: "--" }
    ];

    const handleTabClick = (tab: 'einzelsitzungen' | 'veranstaltungen'): void => {
        setActiveTab(tab);
    };

    const toggleDropdown = (sessionId: number): void => {
        setDropdownSessionId(dropdownSessionId === sessionId ? null : sessionId);
    };

    return (
        <div className="flex flex-col">
            <Typography size="big" className="font-bold text-gray">
                Angebote verwalten
            </Typography>

            <div className="flex items-center mt-4">
                <ButtonCustom
                    variant="primary"
                    onClick={() => { }}
                    title="Angebot hinzufügen"
                />
            </div>

            <div className="w-full mt-8">
                <div className="w-full flex space-x-20 border-b border-gray">
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
                </div>

                {activeTab === 'einzelsitzungen' && (
                    <div>
                        <table className="w-full mt-8 border-collapse text-left">
                            <thead>
                                <tr className="border-b border-gray">
                                    <th className="p-2 text-center">Einträge</th>
                                    <th className="p-2 text-center">Titel</th>
                                    <th className="p-2 text-center">Status</th>
                                    <th className="p-2 text-center">Optionen</th>
                                </tr>
                            </thead>
                            <tbody>
                                {singleSessions.map((session) => (
                                    <React.Fragment key={session.id}>
                                        <tr>
                                            <td className="p-2 text-center items-center">
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
                                                <Link to="" className="p-2 w-12 h-12 text-green-300">
                                                    <i className="ri-checkbox-circle-fill text-3xl" />
                                                </Link>
                                            </td>
                                            <td className="p-2 text-center relative">
                                                <button onClick={() => toggleDropdown(session.id)} className="p-2">
                                                    <i className={dropdownSessionId === session.id ? `ri-arrow-up-s-line text-3xl` : `ri-arrow-down-s-line text-3xl`} />
                                                </button>
                                                <i className="ri-settings-3-fill text-3xl" />
                                            </td>
                                        </tr>
                                        {dropdownSessionId === session.id && (
                                            <tr>
                                                <td colSpan={4} className="p-2">
                                                    <DropDownOptions users={users} />
                                                </td>
                                            </tr>
                                        )}
                                    </React.Fragment>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
            <div className="border-b-2 border-primary mt-5 max-w-full" />

            {/* <div className='flex justify-between mt-8 '>
                <span className='flex flex-col items-center'>
                    <i className="ri-checkbox-circle-fill text-3xl  text-green-300" />
                    Online
                </span>
                <span className='flex flex-col items-center'>
                    <i className="ri-loader-4-fill text-3xl  text-green-300" />
                    Änderungen werden geprüft
                </span>
                <span className='flex flex-col items-center'>
                    <i className="ri-hourglass-fill text-3xl  text-green-300" />
                    Wird geprüft
                </span>
                <span className='flex flex-col items-center'>
                    <i className="ri-error-warning-fill text-3xl  text-green-300" />
                    Hinweis
                </span>

                <span className='flex flex-col items-center'>
                    <i className="ri-pause-line text-3xl  text-green-300" />
                    Pausiert
                </span>

                <span className='flex flex-col items-center'>
                    <i className="ri-flag-fill text-3xl  text-green-300" />
                    Vol
                </span>

                <span className='flex flex-col items-center'>
                    <i className="ri-timer-fill text-3xl  text-green-300" />
                    Last Minute-Rabatt aktiv
                </span>

            </div> */}

            <div className="flex justify-between mt-8 w-full">
                <span className="flex flex-col items-center flex-1 text-center">
                    <i className="ri-checkbox-circle-fill text-3xl text-green-300" />
                    Online
                </span>
                <span className="flex flex-col items-center flex-1 text-center">
                    <i className="ri-loader-4-fill text-3xl text-green-300" />
                    Änderungen werden geprüft
                </span>
                <span className="flex flex-col items-center flex-1 text-center">
                    <i className="ri-hourglass-fill text-3xl text-green-300" />
                    Wird geprüft
                </span>
                <span className="flex flex-col items-center flex-1 text-center">
                    <i className="ri-error-warning-fill text-3xl text-green-300" />
                    Hinweis
                </span>
                <span className="flex flex-col items-center flex-1 text-center">
                    <i className="ri-pause-line text-3xl text-green-300" />
                    Pausiert
                </span>
                <span className="flex flex-col items-center flex-1 text-center">
                    <i className="ri-flag-fill text-3xl text-green-300" />
                    Vol
                </span>
                <span className="flex flex-col items-center flex-1 text-center">
                    <i className="ri-timer-fill text-3xl text-green-300" />
                    Last Minute-Rabatt aktiv
                </span>
            </div>

        </div>
    );
};

export default ManageOfferComponent;
