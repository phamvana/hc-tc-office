import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "danger" | "outline" | "ghost";
};

const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "bg-blue-700 text-white hover:bg-blue-800 focus-visible:outline-blue-700",
  secondary: "bg-slate-100 text-slate-800 hover:bg-slate-200 focus-visible:outline-slate-500",
  danger: "bg-red-600 text-white hover:bg-red-700 focus-visible:outline-red-600",
  outline: "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 focus-visible:outline-blue-700",
  ghost: "bg-transparent text-slate-700 hover:bg-slate-100 focus-visible:outline-blue-700",
};

export function Button({
  children,
  variant = "primary",
  type = "button",
  className = "",
  ...buttonProps
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50 ${variantClasses[variant]} ${className}`}
      {...buttonProps}
    >
      {children}
    </button>
  );
}
