import React from 'react';

interface DropDownOptionsProps {
    users: { id: number; name: string; termin: string; date: string }[];
}

const DropDownOptions: React.FC<DropDownOptionsProps> = ({ users }) => {
    return (
        <div className="relative bg-white inputSettings rounded-[30px] p-4 w-full mt-2 z-10">
            <div className='flex justify-end'>
                <i className="ri-calculator-fill text-3xl  cursor-pointer" />
                <i className="ri-file-settings-fill text-3xl  cursor-pointer" />
            </div>
            {users.map((user) => (
                <div
                    key={user.id}
                    className="flex items-center "
                >
                    <input type="checkbox" className="form-checkbox mr-2" />

                    <div className="flex flex-row justify-between flex-grow items-center">
                        <span className="text-green-500 font-semibold">{user.name}</span>

                        <span className="text-green-500 text-sm">
                            {user.termin} <span className="mx-1">|</span> {user.date}

                        </span>
                        <span>
                            <i className="ri-mail-line text-3xl text-gray-500 cursor-pointer " />
                            <i className="ri-add-circle-line text-3xl text-green-500 cursor-pointer " />
                        </span>
                    </div>
                </div>
            ))}

        </div>
    );
};

export default DropDownOptions;
