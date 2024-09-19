import { cn } from '@/utils/cn';
import React from 'react';
interface ParagraphProps extends React.HTMLAttributes<HTMLHeadingElement> {
    children: React.ReactNode;
}
const Paragraph: React.FC<ParagraphProps> = ({ children, className = '', ...props }) => {
    return (
        <p className={cn('text-xs md:text-sm  leading-8 tracking-wide text-neutral-600 dark:text-neutral-200 font-normal', className)} {...props}>
            {children}
        </p>
    );
};

export default Paragraph;
