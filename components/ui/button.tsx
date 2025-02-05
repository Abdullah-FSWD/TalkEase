import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 uppercase tracking-wide",
  {
    variants: {
      variant: {
        locked:
          "bg-neutral-200 text-primary-foreground hover:bg-neutral-200/90 border-neutral-400 border-b-4 active:border-b-0",
        default:
          "bg-white text-black text-slate-500 border-2 border-b-4 active:border-b-2 hover:bg-slate-100 border-slate-200",
        primary:
          "bg-sky-400 border-sky-500 text-primary-foreground hover:bg-sky-400/90 border-b-4 active:border-b-0",
        primaryOutline: "bg-white text-sky-500 hover:bg-slate-100",
        secondary:
          "bg-green-500 border-green-600 text-primary-foreground hover:bg-green-500/90 border-b-4 active:border-b-0",
        secondaryOutline: "bg-white text-green-500 hover:bg-slate-100",
        danger:
          "bg-rose-500 border-rose-600 text-primary-foreground hover:bg-rose-500/90 border-b-4 active:border-b-0",
        dangerOutline: "bg-white text-rose-500 hover:bg-slate-100",
        super:
          "bg-indigo-500 border-indigo-600 text-primary-foreground hover:bg-indigo-500/90 border-b-4 active:border-b-0",
        superOutline: "bg-white text-indigo-500 hover:bg-slate-100",
        ghost:
          "bg-transparent text-slate-500 hover:bg-slate-100 border-transparent border-0",
        sidebar:
          "bg-transparent text-slate-500 hover:bg-slate-100 border-transparent border-2 transition-none",
        sidebarOutline:
          "bg-sky-500/15 text-sky-500 border-sky-300 border-2 hover:bg-sky-500/20 transition-none",
      },
      size: {
        default: "h-11 px-4 py-2",
        sm: "h-9  px-3",
        lg: "h-12 px-8",
        icon: "h-10 w-10",
        rounded: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
