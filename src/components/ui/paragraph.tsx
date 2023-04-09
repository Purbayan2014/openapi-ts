import { FC, HTMLAttributes, forwardRef } from 'react' 
import { VariantProps, cva } from 'class-variance-authority'
import { cn } from '@/app/lib/utils'

// cva is the class variance 
// which sets the global css styles for all the types of the
// paras 
const paragraphVariants = cva(
  'max-w-prose text-slate-700 dark:text-slate-300 mb-2 text-center',
    {
    // setting the various variants of the paragraphs for various devices 
      variants: {
        size : {
          default: 'text-base sm:text-lg',
          sm: 'text-sm, sm:text-base'
        }
      },
      defaultVariants : {
        size: 'default',
      },
    }
)

// extending the HTMLAttributes allows us to leverage the 
// attributes of the html paragraph elements 
interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement>, VariantProps<typeof paragraphVariants> {}

// forwardRef lets us expose the DOM node to a parent component with a ref  
const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ className, size, children, ...props }, ref) => {
      return <p ref={ref} {...props} className={cn(
          paragraphVariants({
            size,
            className
          })
      )}>
      {children}
      </p>
  }
)

Paragraph.displayName = 'Paragraph'

export default Paragraph


