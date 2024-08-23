import { BankHeader } from "@/app/components/molecules";
import { LoginForm } from "@/app/components/organisms";

export default function LoginPage() {
    return (
        <div className="w-full h-full p-20 flex flex-col justify-center items-center space-y-4">
            <BankHeader title="Login" description="Please enter your credentials to login" />
            <LoginForm />
        </div>
    );
}