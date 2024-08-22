export interface RegisterFormInputs {
    names: string;
    lastnames: string;
    email: string;
    password: string;
    address: string;
    phone: string;
    clientType: 'natural' | 'bussiness';
}