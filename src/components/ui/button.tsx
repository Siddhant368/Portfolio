import React from "react";
import Link from "next/link";

interface ButtonBaseProps {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
  children: React.ReactNode;
}

type ButtonAsButton = ButtonBaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
    download?: undefined;
  };

type ButtonAsLink = ButtonBaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    download?: boolean | string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "left",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-zinc-950 active:scale-[0.98] select-none cursor-pointer";

  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs gap-1.5",
    md: "px-5 py-2.5 text-sm gap-2",
    lg: "px-6 py-3 text-base gap-2.5",
  };

  const variantStyles = {
    primary:
      "relative group overflow-hidden bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white shadow-[0_0_20px_rgba(147,51,234,0.35)] hover:shadow-[0_0_25px_rgba(147,51,234,0.55)] hover:from-purple-500 hover:via-indigo-500 hover:to-blue-500 border border-white/20",
    secondary:
      "bg-white/80 hover:bg-zinc-100 text-zinc-800 dark:bg-zinc-900/80 dark:hover:bg-zinc-800/90 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-700/60 hover:border-zinc-300 dark:hover:border-zinc-500/80 backdrop-blur-md shadow-sm hover:shadow-md dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.06)]",
    outline:
      "bg-transparent hover:bg-zinc-200/50 dark:hover:bg-zinc-800/40 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white border border-zinc-300 dark:border-zinc-700/50 hover:border-zinc-400 dark:hover:border-zinc-500/70 backdrop-blur-sm",
    ghost:
      "bg-transparent hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white border-transparent",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span className="transition-transform duration-300 group-hover:-translate-x-0.5">
          {icon}
        </span>
      )}
      <span>{children}</span>
      {icon && iconPosition === "right" && (
        <span className="transition-transform duration-300 group-hover:translate-x-0.5">
          {icon}
        </span>
      )}
    </>
  );

  if ("href" in props && props.href) {
    const { href, download, target, rel, ...rest } = props as ButtonAsLink;
    const isExternal = href.startsWith("http") || href.startsWith("mailto:");

    if (download || isExternal) {
      return (
        <a
          href={href}
          download={download}
          target={isExternal ? target || "_blank" : undefined}
          rel={isExternal ? rel || "noopener noreferrer" : undefined}
          className={combinedClasses}
          {...rest}
        >
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className={combinedClasses} {...rest}>
        {content}
      </Link>
    );
  }

  return (
    <button
      className={combinedClasses}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  );
}
