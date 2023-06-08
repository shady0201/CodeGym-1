import { IService } from "./IService";
import { InvoiceManage } from "../entity/InvoiceManage";

export class InvoiceService implements IService<InvoiceManage> {
    private listInvoice: InvoiceManage[] = [];

    getInvoices(){
       console.table(this.listInvoice);
    }
    addInvoice(invoice: InvoiceManage) {
        throw new Error("Method not implemented.");
    }
    updateInvoice(id: number, updatedInvoice: InvoiceManage) {
        throw new Error("Method not implemented.");
    }
    deleteInvoice(id: number) {
        throw new Error("Method not implemented.");
    }
    getTotalAmount(startDate: Date, endDate: Date) {
        throw new Error("Method not implemented.");
    }
   
}