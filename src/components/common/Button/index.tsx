interface buttonProps {
  children: string;
}

function Button({ children }: buttonProps) {
  return <button>{children}</button>;
}

export default Button;
