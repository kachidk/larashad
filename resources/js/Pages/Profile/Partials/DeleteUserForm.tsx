import InputError from "@/Components/InputError";
import { Button } from "@/shadcn/ui/button";
import { Dialog, DialogContent } from "@/shadcn/ui/dialog";
import { Input } from "@/shadcn/ui/input";
import { Label } from "@/shadcn/ui/label";
import { useForm } from "@inertiajs/react";
import { FormEventHandler, useRef, useState } from "react";

export default function DeleteUserForm({ className = "" }: { className?: string }) {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const passwordInput = useRef<HTMLInputElement>(null);

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
    } = useForm({
        password: "",
    });

    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };

    const deleteUser: FormEventHandler = (e) => {
        e.preventDefault();

        destroy(route("profile.destroy"), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput.current?.focus(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setConfirmingUserDeletion(false);

        reset();
    };

    return (
        <section className={`space-y-6 ${className}`}>
            <header>
                <h2 className="text-lg font-medium">Delete Account</h2>

                <p className="mt-1 text-sm">
                    Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please
                    download any data or information that you wish to retain.
                </p>
            </header>

            <Button variant="destructive" onClick={confirmUserDeletion}>
                Delete Account
            </Button>

            <Dialog open={confirmingUserDeletion} onOpenChange={(open) => !open && closeModal()}>
                <DialogContent>
                    <form onSubmit={deleteUser} className="p-6">
                        <h2 className="text-lg font-medium">Are you sure you want to delete your account?</h2>

                        <p className="mt-1 text-sm">
                            Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to
                            confirm you would like to permanently delete your account.
                        </p>

                        <div className="mt-6">
                            <Label htmlFor="password" className="sr-only">
                                Password
                            </Label>

                            <Input
                                id="password"
                                type="password"
                                name="password"
                                ref={passwordInput}
                                value={data.password}
                                onChange={(e) => setData("password", e.target.value)}
                                autoFocus
                                placeholder="Password"
                            />

                            <InputError message={errors.password} className="mt-2" />
                        </div>

                        <div className="mt-6 flex justify-end">
                            <Button variant="outline" onClick={closeModal}>
                                Cancel
                            </Button>

                            <Button variant="destructive" className="ms-3" disabled={processing}>
                                Delete Account
                            </Button>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>
        </section>
    );
}
