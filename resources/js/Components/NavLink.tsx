import { InertiaLinkProps, Link } from "@inertiajs/react";
import clsx from "clsx";

export default function NavLink({ active = false, className = "", children, ...props }: InertiaLinkProps & { active: boolean }) {
    return (
        <Link
            {...props}
            className={clsx(
                "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none",
                active ? "border-primary" : "border-transparent",
                className
            )}
        >
            {children}
        </Link>
    );
}
