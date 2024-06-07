import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Card } from "@/shadcn/ui/card";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";
import DeleteUserForm from "./Partials/DeleteUserForm";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";

export default function Edit({ auth, mustVerifyEmail, status }: PageProps<{ mustVerifyEmail: boolean; status?: string }>) {
    return (
        <AuthenticatedLayout user={auth.user} header={<h2 className="font-semibold text-xl leading-tight">Profile</h2>}>
            <Head title="Profile" />

            <div className="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8">
                <div className="space-y-6">
                    <Card className="p-4 sm:p-8">
                        <UpdateProfileInformationForm mustVerifyEmail={mustVerifyEmail} status={status} className="max-w-xl" />
                    </Card>

                    <Card className="p-4 sm:p-8">
                        <UpdatePasswordForm className="max-w-xl" />
                    </Card>

                    <Card className="p-4 sm:p-8">
                        <DeleteUserForm className="max-w-xl" />
                    </Card>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
