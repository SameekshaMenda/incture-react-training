interface ButtonProps {
    label : string;
    onClick: () => void;
    disabled ? : boolean;  //optional either can be passed or not
}

const Button: React.FC<ButtonProps> = ({label, onClick, disabled = false}) => {

    return (
        <button onClick={onClick} disabled={disabled}>
            {label}
        </button>
    )
}

export default Button;