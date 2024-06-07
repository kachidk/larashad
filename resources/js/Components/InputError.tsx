import clsx from "clsx";
import { HTMLAttributes } from "react";

export default function InputError({ message, className = "", ...props }: HTMLAttributes<HTMLParagraphElement> & { message?: string }) {
    return message ? (
        <p {...props} className={clsx("text-sm text-red-600", className)}>
            {message}
        </p>
    ) : null;
}
