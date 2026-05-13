import type {Transaction} from "@/models/Transaction.ts";

class Budget {
    private transactions: Transaction[];
    private name: string;

    constructor(transactions: Transaction[] = [], name: string){
        this.transactions = transactions;
        this.name = name;   
    }

    getAllTransactions() : Transaction[] {
        return [...this.transactions];
    }
    
    getTransactionsByType(type: string): Transaction[] {
        // todo
        return [];
    }
    
    getTransactionsByMonth(date: string): Transaction[] {
        // Todo
        return [];
    }
    
    getName(): string {
        return this.name;
    }
    
    changeName(name: string) : void {
        this.name = name;
    }
    
    addTransaction(transaction: Transaction) : void {
        this.transactions.push(transaction);
    }
    
    deleteTransaction(id: string) : void {
        this.transactions = this.transactions.filter(transaction => transaction.id !== id);
    }
    
    updateTransaction(transaction: Transaction): void {
        // todo
    }
    
    getMonthlyIncome(month: number) : number {
        // todo
        return 0;
    }
    
    getMonthlyExpense(month: number) : number {
        // todo
        return 0;
    }
    
    getMonthlyBalance(month: number) : number {
        return this.getMonthlyIncome(month) - this.getMonthlyExpense(month);
    }
}