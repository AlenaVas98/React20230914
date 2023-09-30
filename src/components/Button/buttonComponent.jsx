export const Button = ({ text, onClick, disabled, className }) => {
  return (
    <button onClick={onClick} disabled={disabled} className={className}>
      {text}
    </button>
  );
};
