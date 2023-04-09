import type  { ClassValue } from "clsx";
import { twMerge } from 'tailwind-merge' 

export function cn(...inputs: ClassValue[]) {
  // merges the tailwind classes and improves the readibility
  // clsx will handle the conditional logic
  // and twMerge will merge the classes 
  return twMerge(clsx(inputs))
}
