import { InertiaLinkProps, Link } from "@inertiajs/react";
import clsx from "clsx";

export default function ResponsiveNavLink({ active = false, className = "", children, ...props }: InertiaLinkProps & { active?: boolean }) {
    return (
        <Link
            {...props}
            className={clsx(
                "w-full flex items-start ps-3 pe-4 py-2 border-l-4",
                active ? "border-primary text-primary bg-primary/10" : "border-transparent",
                "text-base font-medium focus:outline-none transition duration-150 ease-in-out",
                className
            )}
        >
            {children}
        </Link>
    );
}
