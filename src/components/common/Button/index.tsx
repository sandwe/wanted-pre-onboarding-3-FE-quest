interface buttonProps {
  children: string;
}

function Button({ children }: buttonProps) {
  return <button className='w-full bg-slate-700 text-white text-lg font-semibold mt-2 py-2 rounded'>{children}</button>;
}

export default Button;
