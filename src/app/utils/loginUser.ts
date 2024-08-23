import Swal from "sweetalert2";
import { LoginFormInputs, User } from "../types/types";
import { generateAccountNumber } from "./generateAccountNumber";
import { showAlert } from "./showAlert";

interface Props {
    users: User[];
    data: LoginFormInputs;
    setCurrentUser: (user: User) => void;
    changeStatusAuthentication: (status: boolean) => void;
}

export const loginUser = ({ users, data, setCurrentUser, changeStatusAuthentication }: Props) => {
    const user = users.find((u) => u.email === data.email && u.password === data.password);
    if (!user) {
        showAlert({ type: 'error', title: 'Error', message: 'User not found!' });
        return;
    }
    setCurrentUser(user);
    changeStatusAuthentication(true);
    showAlert({ type: 'success', title: 'Success', message: 'Welcome to the bank!' });
    return user;
}