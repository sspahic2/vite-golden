import { useState } from 'react';
import people from '../../../../../assets/images/people.jpeg';
import peoples from '../../../../../assets/images/peoples.png';
import Typography from '../../../../../components/Typography';
import { Link } from 'react-router-dom';

const BookingComponent = () => {
    const [activeTab, setActiveTab] = useState<'einzelsitzungen' | 'veranstaltungen'>('einzelsitzungen');
    const singleSessions = [
        { id: 1, image: people, title: 'Muster-Einzelsitzung1', enabled: true },
        { id: 2, image: peoples, title: 'Muster-Einzelsitzung2', enabled: false },
    ];



    const handleTabClick = (tab: 'einzelsitzungen' | 'veranstaltungen'): void => {
        setActiveTab(tab);
    };
    return (
        <div className="flex flex-col">
            <Typography size="big" className="font-bold text-gray">
                Anfragen
            </Typography>

            <div className="w-full mt-4">
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

                </div >

                {activeTab === 'einzelsitzungen' && (
                    <div>
                        <table className="w-full mt-8 border-collapse text-left">
                            <thead>
                                <tr className="border-b border-gray">
                                    <th className="p-2 text-center">Einträge</th>
                                    <th className="p-2 text-center">Titel</th>
                                    <th className="p-2 text-center">Termin</th>
                                    <th className="p-2 text-center">Kontakt</th>
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
                                        <td className="p-2 text-center ">
                                            <Typography size="normal">
                                                20.04.2024
                                            </Typography>

                                        </td>
                                        <td className="p-2 text-center">
                                            <Link to="" className="p-2 w-12 h-12 text-gray">
                                                <i className="ri-mail-line text-3xl" />
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div >
        </div >
    )
}

export default BookingComponent