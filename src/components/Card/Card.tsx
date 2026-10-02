import type { HTMLAttributes } from "react";

type CardProps = HTMLAttributes<HTMLDivElement>;

function Card({ children, className = "", ...divProps }: CardProps) {
  return (
    <div
      className={`rounded-xl border border-slate-200 bg-white p-6 shadow-sm ${className}`}
      {...divProps}
    >
      {children}
    </div>
  );
}

export default Card;
