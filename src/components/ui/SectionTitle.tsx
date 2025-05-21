
import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps extends HTMLAttributes<HTMLDivElement> {
  subtitle?: string;
  centered?: boolean;
}

const SectionTitle = ({
  children,
  subtitle,
  centered = false,
  className,
  ...props
}: SectionTitleProps) => {
  return (
    <div
      className={cn(
        'mb-12',
        centered ? 'flex flex-col items-center text-center' : '',
        className
      )}
      {...props}
    >
      <h2 className="text-3xl md:text-4xl font-semibold mb-2">
        {children}
      </h2>
      {subtitle && (
        <p className={cn("text-gray-600 max-w-2xl mt-2", centered && "text-center")}>
          {subtitle}
        </p>
      )}
      <div className={cn("h-1 w-20 bg-earthyBrown mt-4", centered && "mx-auto")}></div>
    </div>
  );
};


export default SectionTitle;
