# 1. Pedimos la palabra y la pasamos a minúsculas de inmediato
palabra = input("Ingresa una palabra: ").lower()

# 2. Creamos el contador (nuestra alcancía)
cantidad_vocales = 0

# 3. Recorremos la palabra letra por letra
for letra in palabra:
    # 4. Verificamos si la letra es una vocal
    if letra in "aeiou":
        cantidad_vocales += 1  # Si es vocal, sumamos 1 al contador

# 5. Mostramos el resultado
print(f"La palabra tiene {cantidad_vocales} vocales.")