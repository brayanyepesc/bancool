import Swal from "sweetalert2";
import { LoginFormInputs, User } from "../types/types";
import { generateAccountNumber } from "./generateAccountNumber";

interface Props {
    users: User[];
    data: LoginFormInputs;
    setCurrentUser: (user: User) => void;
}

export const loginUser = ({ users, data, setCurrentUser }: Props) => {
    const user = users.find((u) => u.email === data.email && u.password === data.password);
    if (!user) {
        Swal.fire({
            icon: 'error',
            title: 'Incorrect email or password',
            timer: 2000
        });
        return;
    }
    setCurrentUser(user);
    Swal.fire({
        icon: 'success',
        title: 'User logged successfully',
        timer: 2000
    })
    return user;
}