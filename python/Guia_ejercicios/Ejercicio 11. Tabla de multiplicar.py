# Pedimos el número al usuario
tabla_del = int(input("¿De qué número quieres ver la tabla?: "))

print(f"\n--- Tabla del {tabla_del} ---")

# El bucle for recorre un rango de números
for i in range(1, 11):
    resultado = tabla_del * i
    print(f"{tabla_del} x {i} = {resultado}")