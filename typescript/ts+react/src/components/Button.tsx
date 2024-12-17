type ButtonProps = {
  title: string;
  disabled: boolean;
};

const Button = ({ title, disabled }: ButtonProps) => {
  console.log(disabled);
  return (
    <button className={`${disabled ? "" : "btn"}`} disabled={disabled}>
      {title}
    </button>
  );
};

export default Button;
