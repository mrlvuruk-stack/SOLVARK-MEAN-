import * as React from 'react';
import { cn } from '@/lib/utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'solid' | 'outline' | 'blueprint' | 'glass' | 'dark';
  glow?: boolean;
}

const variantStyles = {
  solid: 'bg-[#F8F8FA] border border-[#E7E7E7] text-[#0B0B0D]',
  outline: 'bg-white border border-[#E7E7E7] text-[#0B0B0D] hover:border-[#FF2A85]',
  blueprint: 'bg-white border border-[#E7E7E7] text-[#0B0B0D] hover:border-[#0052FF] relative blueprint-border',
  glass: 'bg-white border border-[#E7E7E7] text-[#0B0B0D] hover:border-[#FF2A85] relative blueprint-border',
  dark: 'bg-zinc-900 border border-zinc-800 text-white hover:border-[#0052FF] transition-all',
};

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'blueprint', glow = true, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'p-6 transition-all duration-200 relative font-sans',
          variantStyles[variant],
          glow && 'hover:shadow-md hover:shadow-[#FF2A85]/5',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Card.displayName = 'Card';

export { Card };
