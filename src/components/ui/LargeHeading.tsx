
import { FC, HTMLAttributes, forwardRef } from 'react' 
import { VariantProps, cva } from 'class-variance-authority'
import { cn } from '@/app/lib/utils'

// cva is the class variance 
// which sets the global css styles for all the types of the
// headings 
const headingVariants = cva(
  "text-black dark:text-white text-center lg:text-left font-extrabold leading-tight tracing-tighter",  
	{
    // setting the various variants of the headings for various devices 
      variants: {
        size : {
          default: 'text-4xl md:text-5xl lg:text-6xl',
					lg: 'text-5xl md:text-6xl lg:text-7xl',
          sm: 'text-2xl md:text-3xl lg:text-4xl',
        }
      },
      defaultVariants : {
        size: 'default',
      },
    }
)

// extending the HTMLAttributes allows us to leverage the 
// attributes of the html heading elements 
interface LaregHeadingProps extends HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof	headingVariants> {}

// forwardRef lets us expose the DOM node to a parent component with a ref  
const Heading = forwardRef<HTMLHeadingElement, LaregHeadingProps>(
  ({ className, size, children, ...props }, ref) => {
      return <h1 ref={ref} {...props} className={cn(
          headingVariants({
            size,
            className
          })
      )}>
      {children}
      </h1>
  }
)

Heading.displayName = 'Heading'

export default Heading 

