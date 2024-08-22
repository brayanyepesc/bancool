import { useStore } from "../store/useStore";

export const useAuthentication = () => {
    const { currentUser } = useStore();
    return currentUser !== null;
}