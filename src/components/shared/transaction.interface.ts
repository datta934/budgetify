export interface InterfaceTransaction {
    "date": string,
    "amount": Number,
    "category": string,
    "txnType": string,
    "notes": string,
    "script"?:string,
    "units"?: string,
    "unitPrice"?:Number,
    "account": {
        "id": Number,
        "accountType": string
    }
}


export interface InterfaceTransactionRecords{
    date: string;
    name: string;
    amount: Date;
    payment: string;
}