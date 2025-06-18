export const Card = ({ children, className = "", ...props }) => (
  <div className={`bg-white rounded-2xl shadow ${className}`} {...props}>{children}</div>
);
export const CardContent = ({ children, className = "", ...props }) => (
  <div className={`p-4 ${className}`} {...props}>{children}</div>
);