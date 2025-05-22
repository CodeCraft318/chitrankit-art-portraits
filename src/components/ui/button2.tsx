
import { forwardRef, ButtonHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  linkProps?: Record<string, unknown>;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', href, linkProps, children, ...props }, ref) => {
    const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-colors disabled:opacity-50 disabled:pointer-events-none';
    
    const variants = {
      primary: 'bg-earthyBrown hover:bg-earthyBrown/90 text-white',
      secondary: 'bg-transparent border border-earthyBrown text-earthyBrown hover:bg-earthyBrown/10',
      ghost: 'text-darkGray hover:text-black underline decoration-1 underline-offset-4 bg-transparent',
    };
    
    const sizes = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-5 py-2.5',
      lg: 'px-6 py-3 text-lg',
    };
    
    const classes = cn(baseClasses, variants[variant], sizes[size], className);
    
    if (href) {
      return (
        <Link to={href} className={classes} {...linkProps}>
          {children}
        </Link>
      );
    }
    
    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
