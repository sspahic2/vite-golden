import React, { createContext, useContext, useState } from 'react';

type SettingsContextType = {
    activeComponent: string;
    setActiveComponent: (component: string) => void;
};

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export const SettingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [activeComponent, setActiveComponent] = useState('settings');
    return (
        <SettingsContext.Provider value={{ activeComponent, setActiveComponent }}>
            {children}
        </SettingsContext.Provider>
    );
};

export const useSettings = () => {
    const context = useContext(SettingsContext);
    if (!context) throw new Error("useSettings must be used within a SettingsProvider");
    return context;
};
