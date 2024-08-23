import Swal from "sweetalert2"

interface Props {
    type: 'success' | 'error'
    title: string
    message: string
}

export const showAlert = ({ type, title, message }: Props) => {
    Swal.fire({
        title,
        text: message,
        icon: type,
        timer: 2000,
    })
}