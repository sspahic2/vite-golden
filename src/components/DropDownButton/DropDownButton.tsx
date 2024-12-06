
interface DropDownButtonProps {
    options: string[];
    onChange: (value: string) => void;
    selected: string;
    placeholder?: string;
    className?: string;
}

const DropDownButton: React.FC<DropDownButtonProps> = ({ options, onChange, selected, placeholder, className = "w-full" }) => {
    return (
        <div className={`relative ${className}`}>
            <select
                onChange={(e) => onChange(e.target.value)}
                value={selected}
                className="p-2.5 inputSettings appearance-none w-full pr-10"
            >
                <option value="">{placeholder}</option>
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            <span className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <i className="ri-arrow-down-s-line text-3xl"></i>
            </span>
        </div>
    );
}

export default DropDownButton;
