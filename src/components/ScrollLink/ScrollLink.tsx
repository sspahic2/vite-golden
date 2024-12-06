import { Link as ScrollLinkBase } from 'react-scroll';
import { useNavigate } from 'react-router-dom';

interface IScrollLinkProps {
    to?: string;
    scrollTo: string;
    children?: React.ReactNode;
    className?: string;
}

const ScrollLink: React.FC<IScrollLinkProps> = ({ to, children, className, scrollTo }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        if (to) {
            navigate(to); // Only call navigate if `to` is defined
        }
        setTimeout(() => {
            document.getElementById(scrollTo)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    return (
        <div>
            <ScrollLinkBase
                to={scrollTo}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={handleClick}
                className={` cursor-pointer ${className}`}
            >
                {children}
            </ScrollLinkBase>
        </div>
    );
};

export default ScrollLink;

