import type { TransactionType } from "@/models/TransactionType.ts";

export interface Transaction {
    id: string;
    title: string;
    amount: number;
    type: TransactionType;
    categoryId: number;
    date: string;
    note?: string;
    createdAt: string;
}