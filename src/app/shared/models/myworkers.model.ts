export interface MyWorker {
    surname: string;
    name: string;
    patronym: string;
    phone: string;
    email: string;
    birthday: string;
    type: number;
    id?: number;
}

export enum MyWorkerType {
    IT,
    Sales,
    Delivery,
    Lawyer
}