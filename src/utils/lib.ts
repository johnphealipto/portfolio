import classNames, { ArgumentArray } from "classnames";
import { twMerge } from "tailwind-merge";

/** Merge classes with tailwind-merge with clsx full feature */
export function cn(...inputs: ArgumentArray) {
  return twMerge(classNames(inputs));
}
