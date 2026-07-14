import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' | 'ghost' };

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant = 'primary', ...props }, ref) => (
  <button ref={ref} className={cn('focus-ring inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition duration-200 disabled:cursor-not-allowed disabled:opacity-50', {
    'bg-brand-500 text-white shadow-lg shadow-brand-500/20 hover:bg-brand-400': variant === 'primary',
    'border border-line bg-white/5 text-slate-200 hover:bg-white/10': variant === 'secondary',
    'text-slate-300 hover:bg-white/5 hover:text-white': variant === 'ghost',
  }, className)} {...props} />
));
Button.displayName = 'Button';
