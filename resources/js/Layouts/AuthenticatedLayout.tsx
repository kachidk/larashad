import ApplicationLogo from "@/Components/ApplicationLogo";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { ThemeToggle } from "@/Components/ThemeToggle";
import { Button } from "@/shadcn/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/shadcn/ui/dropdown-menu";
import { Popover, PopoverContent, PopoverTrigger } from "@/shadcn/ui/popover";
import { User } from "@/types";
import { Link } from "@inertiajs/react";
import { ChevronDown, Menu, X } from "lucide-react";
import { PropsWithChildren, ReactNode, useState } from "react";

export default function Authenticated({ user, header, children }: PropsWithChildren<{ user: User; header?: ReactNode }>) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <div className="min-h-screen bg-background relative">
            <nav className="bg-background sticky top-0 inset-x-0 z-10 border-b border-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex grow h-full">
                            <div className="shrink-0 flex items-center">
                                <Link href="/">
                                    <ApplicationLogo className="block h-9 w-auto fill-current text-foreground" />
                                </Link>
                            </div>

                            <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                                <NavLink href={route("dashboard")} active={route().current("dashboard")}>
                                    Dashboard
                                </NavLink>
                            </div>
                        </div>

                        <ThemeToggle />

                        <DropdownMenu>
                            <DropdownMenuTrigger className="hidden text-sm sm:flex sm:items-center sm:gap-2 sm:ml-4">
                                {user.name}
                                <ChevronDown className="size-3.5" />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem asChild>
                                    <Link href={route("profile.edit")}>Profile</Link>
                                </DropdownMenuItem>

                                <DropdownMenuItem asChild>
                                    <Link href={route("logout")} method="post" as="button" className="w-full">
                                        Log Out
                                    </Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>

                        <Popover onOpenChange={(open) => setShowingNavigationDropdown(open)}>
                            <PopoverTrigger asChild>
                                <Button className="inline-flex ml-2 sm:ml-0 sm:hidden" variant="ghost" size="icon">
                                    {!showingNavigationDropdown ? <Menu /> : <X />}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-screen">
                                <div>
                                    <div className="pt-2 pb-3 space-y-1">
                                        <ResponsiveNavLink href={route("dashboard")} active={route().current("dashboard")}>
                                            Dashboard
                                        </ResponsiveNavLink>
                                    </div>

                                    <div className="py-3 border-t border-border space-y-1">
                                        <ResponsiveNavLink href={route("profile.edit")}>Profile</ResponsiveNavLink>
                                        <ResponsiveNavLink method="post" href={route("logout")} as="button">
                                            Log Out
                                        </ResponsiveNavLink>
                                    </div>
                                </div>
                            </PopoverContent>
                        </Popover>
                    </div>
                </div>
            </nav>

            {header && (
                <header>
                    <div className="max-w-7xl mx-auto pt-6 px-4 sm:px-6 lg:px-8">{header}</div>
                </header>
            )}

            <main>{children}</main>
        </div>
    );
}
