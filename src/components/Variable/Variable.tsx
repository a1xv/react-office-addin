import './Variable.less';


interface VariableProps {
    text: string;
    onClick: () => void;
}

export const Variable = ({
    text,
    onClick,
}: VariableProps) => {

    return (
        <button
            className="variable"
            onClick={onClick}
        >
            {text}
        </button>
    )
}
