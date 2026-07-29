import * as React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'darkOutline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  isLoading?: boolean;
}

const variantStyles = {
  primary: 'bg-gradient-to-r from-[#0052FF] to-[#FF2A85] text-white hover:brightness-110 shadow-md active:translate-y-[1px]',
  secondary: 'bg-[#0052FF] text-white hover:bg-[#003ECC] border border-[#0052FF]',
  outline: 'border border-[#E7E7E7] bg-white text-[#0B0B0D] hover:border-[#FF2A85] hover:text-[#FF2A85]',
  darkOutline: 'border border-zinc-700 bg-zinc-900/80 text-white hover:bg-zinc-800 hover:border-[#FF2A85] transition-all',
  ghost: 'text-[#444444] hover:text-[#0052FF] hover:bg-[#F8F8FA]',
  link: 'text-[#FF2A85] underline-offset-4 hover:underline p-0 h-auto font-normal',
};

const sizeStyles = {
  sm: 'h-9 px-4 text-xs rounded-none',
  md: 'h-11 px-6 text-sm rounded-none',
  lg: 'h-13 px-8 text-base rounded-none font-semibold',
  icon: 'h-10 w-10 rounded-none',
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          'inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF2A85] disabled:pointer-events-none disabled:opacity-50 tracking-tight font-sans cursor-pointer',
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {isLoading ? (
          <span className="flex items-center gap-2">
            <svg
              className="animate-spin h-4 w-4 text-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Processing...
          </span>
        ) : (
          children
        )}
      </button>
    );
  }
);
Button.displayName = 'Button';

export { Button };
