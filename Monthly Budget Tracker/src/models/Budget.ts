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
    
    getName(): string {
        return this.name;
    }
    
    changeName(name: string) : void {
        this.name = name;
    }
}