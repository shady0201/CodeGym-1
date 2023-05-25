export interface IService<T> {
    getInvoices();
    addInvoice(invoice:T);
    updateInvoice(id: number, updatedInvoice: T);
    deleteInvoice(id: number);
    getTotalAmount(startDate: Date, endDate: Date);
}
    