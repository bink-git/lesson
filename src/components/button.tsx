import * as React from 'react';
import { cn } from '@/lib/utils';

export const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center rounded-xl px-4 py-2 text-lg font-medium transition ',
        className
      )}
      {...props}
    />
  );
});
Button.displayName = 'Button';
