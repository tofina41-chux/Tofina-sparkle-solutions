import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface BaseProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  icon?: ReactNode;
}

interface ButtonAsLink extends BaseProps {
  to: string;
  href?: never;
  onClick?: () => void;
}

interface ButtonAsAnchor extends BaseProps {
  href: string;
  to?: never;
  onClick?: never;
  target?: string;
  rel?: string;
}

interface ButtonAsButton extends BaseProps {
  onClick?: () => void;
  to?: never;
  href?: never;
  type?: "button" | "submit";
  disabled?: boolean;
}

type ButtonProps = ButtonAsLink | ButtonAsAnchor | ButtonAsButton;

const VARIANTS: Record<NonNullable<BaseProps["variant"]>, string> = {
  primary: "bg-primary text-white hover:bg-primary-dark",
  secondary: "bg-secondary text-white hover:bg-black",
  outline: "border border-secondary/20 text-secondary hover:border-primary hover:text-primary",
  ghost: "text-secondary hover:text-primary",
};

const SIZES: Record<NonNullable<BaseProps["size"]>, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export default function Button(props: ButtonProps) {
  const {
    children,
    variant = "primary",
    size = "md",
    className = "",
    icon,
  } = props;

  const base = `group relative inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-all duration-300 ease-out focus-visible:outline-primary ${VARIANTS[variant]} ${SIZES[size]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {icon && <span className="transition-transform duration-300 group-hover:translate-x-0.5">{icon}</span>}
    </>
  );

  if ("to" in props && props.to) {
    return (
      <Link to={props.to} className={base} onClick={(props as ButtonAsLink).onClick}>
        {content}
      </Link>
    );
  }

  if ("href" in props && props.href) {
    return (
      <a href={props.href} target={props.target} rel={props.rel} className={base}>
        {content}
      </a>
    );
  }

  const { onClick, type = "button", disabled } = props as ButtonAsButton;
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={base}>
      {content}
    </button>
  );
}
