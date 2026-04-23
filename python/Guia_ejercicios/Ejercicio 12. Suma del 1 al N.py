# Solicitamos el número al usuario
n = int(input("Introduce un número entero positivo: "))

# Creamos el acumulador y lo inicializamos en 0
suma_total = 0

# Recorremos desde 1 hasta N inclusive
for i in range(1, n + 1):
    # Sumamos el valor actual de i al acumulador
    suma_total += i

print(f"La suma de todos los números del 1 al {n} es: {suma_total}")