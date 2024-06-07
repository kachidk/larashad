import ApplicationLogo from "@/Components/ApplicationLogo";
import { Card } from "@/shadcn/ui/card";
import { Link } from "@inertiajs/react";
import { PropsWithChildren } from "react";

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
            <div>
                <Link href="/">
                    <ApplicationLogo className="w-20 h-20 fill-current text-foreground" />
                </Link>
            </div>

            <Card className="w-full sm:max-w-md mt-6 px-6 py-4">{children}</Card>
        </div>
    );
}
