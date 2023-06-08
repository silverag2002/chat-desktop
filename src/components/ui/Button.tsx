import { FC } from "react";
import cva from "class-variance-authority";

interface ButtonProps {}

const Button: FC<ButtonProps> = ({}) => {
  const buttonVariants = cva(
    [
      "active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition-color focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disable:opacity-50 disabled:pinter-events-none",
    ],
    {
      variants: {
        intent: {
          default: "bg-slate-900 text-white hover:bg-slate-800",
          ghost: "bg-transparent hover:text-slate-900 hover:bg-slate-200",
        },
        size: {
          default: "h-10 py-2 px-4",
          sm: "h-9 px-2",
          lg: "h-11 px-8",
        },
      },
      defaultVariants: {
        intent: "default",
        size: "default",
      },
    }
  );
  return <div>Button</div>;
};

export default Button;
