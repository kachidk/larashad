import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Card } from "@/shadcn/ui/card";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";

export default function Dashboard({ auth }: PageProps) {
    return (
        <AuthenticatedLayout user={auth.user} header={<h2 className="font-semibold text-xl leading-tight">Dashboard</h2>}>
            <Head title="Dashboard" />

            <div className="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8">
                <Card className="p-4">You're logged in!</Card>
            </div>
        </AuthenticatedLayout>
    );
}
