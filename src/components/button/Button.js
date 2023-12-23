const Button = ({ children, color, prodId, onClick}) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: color,
        color: "white",
        padding: "5px 10px",
        border: 0,
        borderRadius: "5px",
        marginTop: "5px",
      }}
    >
      {children}
    </button>
  );
};

export default Button;
