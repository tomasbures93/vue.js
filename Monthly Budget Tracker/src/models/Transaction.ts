import type { TransactionType } from "@/models/TransactionType.ts";

export interface Transaction {
    id: string;
    title: string;
    amount: number;
    type: TransactionType;
    category: string;
    date: string;
    note?: string;
    createdAt: string;
}