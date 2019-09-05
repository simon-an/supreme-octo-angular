export enum RoleEnum {
    Customer,
    Administrator
}


export interface LoginData {
    email: string;
    role: keyof typeof RoleEnum;
}
