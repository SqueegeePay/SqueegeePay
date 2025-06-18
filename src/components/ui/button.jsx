export const Button = ({ children, ...props }) => (
  <button className="rounded-xl px-4 py-2 bg-orange-500 text-white hover:bg-orange-600" {...props}>{children}</button>
);