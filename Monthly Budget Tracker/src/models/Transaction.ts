import type { TransactionType } from "@/models/TransactionType.ts";

export interface Transaction {
    id: string;
    title: string;
    amount: number;
    type: TransactionType;
    categoryId: string;
    date: string;
    note?: string;
    createdAt: string;
}