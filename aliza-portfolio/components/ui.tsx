import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-electric text-ink shadow-glow hover:bg-emerald",
        secondary:
          "border border-white/15 bg-white/8 text-white backdrop-blur hover:border-electric/60 hover:bg-white/14 dark:text-white light-panel",
        ghost: "text-current hover:bg-white/10"
      },
      size: {
        sm: "h-9 px-4",
        md: "h-11 px-5",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "md"
    }
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}

export function Pill({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-white/12 bg-white/8 px-3 py-1 text-xs font-medium text-steel backdrop-blur dark:text-steel",
        "light-panel",
        className
      )}
    >
      {children}
    </span>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  children
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-electric">{eyebrow}</p>
      <h2 className="font-display text-3xl font-semibold text-white dark:text-white sm:text-5xl light-title">{title}</h2>
      <p className="mt-4 text-base leading-7 text-steel dark:text-steel light-muted">{children}</p>
    </div>
  );
}
