from fastapi import FastAPI
from pydantic import BaseModel, EmailStr
from typing import Optional
import psycopg2

DATABASE_URL = "dbname=aws_invoice user=aws_invoice_user password=oFsKPV03cSTIvRFwmkEiiJhnc99dNhxp host=dpg-cnu1hgda73kc73f5966g-a.singapore-postgres.render.com port=5432"

app = FastAPI()


class Invoice(BaseModel):
    invoice_number: str
    bill_date: str
    due_date: str
    client_name: str
    client_address: str
    client_email: EmailStr
    client_phone: str
    supplier_name: str
    supplier_address: str
    supplier_email: EmailStr
    supplier_phone: str
    tax: float
    sub_total: float
    grand_total: float
    remark: Optional[str] = None
    image: Optional[str] = None


@app.post("/invoices/")
async def create_invoice(invoice: Invoice):
    conn = psycopg2.connect(DATABASE_URL)
    cursor = conn.cursor()

    insert = f"""
        INSERT INTO "Employee_forms" (invoice_number, bill_date, due_date, client_name, client_address, client_email, client_phone, supplier_name, supplier_address, supplier_email, supplier_phone, tax, sub_total, grand_total, remark, image)
        VALUES ('{invoice.invoice_number}', '{invoice.bill_date}', '{invoice.due_date}', '{invoice.client_name}', '{invoice.client_address}', '{invoice.client_email}', '{invoice.client_phone}', '{invoice.supplier_name}',
                '{invoice.supplier_address}', '{invoice.supplier_email}', '{invoice.supplier_phone}', {invoice.tax}, {invoice.sub_total}, {invoice.grand_total}, '{invoice.remark}', '{invoice.image}')
    """

    cursor.execute(insert)
    conn.commit()

    cursor.close()
    conn.close()

    return {"status": "Invoice created"}
