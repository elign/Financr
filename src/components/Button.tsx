import { ReactNode } from "react"

interface circularButtonProps {
    id: number;
    option: string;
    selected: boolean;
    icon: ReactNode;
    onButtonClick: (option: string) => void;
}

const CircularButton: React.FC<circularButtonProps> = ({ id, option, selected, icon, onButtonClick }) => {
    return (
        <div onClick={() => onButtonClick(option)} className="flex flex-col items-center gap-3">
            <button className={`pt-1 grid place-content-center rounded-full drop-shadow-md w-20 bg-${selected ? "primary" : "tertiary"} h-20 hover:drop-shadow-none cursor-pointer`}
            >{icon}</button>
            <p className="text-secondary">{option}</p>
        </div>
    )
}

export {
    CircularButton,
}