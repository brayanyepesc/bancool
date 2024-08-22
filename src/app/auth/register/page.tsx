import { AuthHeader } from "@/app/components/molecules";
import { RegisterForm } from "@/app/components/organisms";

export default function RegisterPage() {
    return (
        <div className="w-full h-full p-20 flex flex-col justify-center items-center space-y-4">
            <AuthHeader />
            <RegisterForm />
        </div>
    )
}