import React from 'react';

interface TypographyProps {
    size?: "small" | "normal" | "large" | "big"; // Optional size prop
    children: React.ReactNode; // Define children as React.ReactNode
    className?: string; // Optional className prop
}

const Typography: React.FC<TypographyProps> = ({ size = "normal", children, className = "" }) => {
    let fontSizeClass;

    switch (size) {
        case "small":
            fontSizeClass = "customTextRegister"; // 12px
            break;
        case "normal":
            fontSizeClass = "customNormalFont"; // 20px
            break;
        case "large":
            fontSizeClass = "customLargeFont"; // 20px
            break;
        case "big":
            fontSizeClass = "customBigFont";
            break;
        default:
            fontSizeClass = "customTextFont"; // default to normal size if none specified
    }

    return <span className={`${fontSizeClass} ${className}`}>{children}</span>;
};

export default Typography;
