# 1. Solicitamos el monto de la compra
monto = float(input("Ingrese el monto de la compra: "))

# 2. Evaluamos si aplica el descuento
if monto > 50000:
    descuento = monto * 0.10
    total = monto - descuento
    print(f"Se aplicó un descuento del 10% (${descuento})")
else:
    descuento = 0
    total = monto
    print("No aplica descuento.")

# 3. Mostramos el monto final
print(f"El monto final a pagar es: ${total}")