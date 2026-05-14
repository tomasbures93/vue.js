import type {Transaction} from "@/models/Transaction.ts";

class Budget {
    private transactions: Transaction[];
    private name: string;

    constructor(transactions: Transaction[] = [], name: string = "User"){
        this.transactions = transactions;
        this.name = name;   
    }

    getAllTransactions() : Transaction[] {
        return [...this.transactions];
    }
    
    getTransactionsByType(type: string): Transaction[] {
        return [...this.transactions.filter(transactions => transactions.type === type)];
    }
    
    getTransactionsByMonth(date: string): Transaction[] {
        return [...this.transactions.filter(transactions => transactions.date.startsWith(date))];
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
        this.transactions = this.transactions.map(trans => trans.id === transaction.id ? transaction : trans);
    }
    
    getMonthlyExpense(month: string) : number {
        return this.transactions.filter(transaction =>
            transaction.date.startsWith(month) && transaction.type === 'expense')
            .reduce((sum, trans) => sum + trans.amount, 0);
    }
    
    getMonthlyIncome(date: string) : number {
        return this.transactions.filter(transaction =>
            transaction.date.startsWith(date) && transaction.type === 'income')
            .reduce((sum, trans) => sum + trans.amount, 0);
    }
    
    getMonthlyBalance(month: string) : number {
        return this.getMonthlyIncome(month) - this.getMonthlyExpense(month);
    }
}

export default Budget;