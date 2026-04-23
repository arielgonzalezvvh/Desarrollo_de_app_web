# 1. El acumulador debe empezar en 0
suma_notas = 0

# 2. Usamos el for para pedir la nota 3 veces
for i in range(3):
    # Pedimos la nota DENTRO del bucle para que se repita
    nota = float(input(f"Introduce la nota {i+1}: "))
    # Vamos sumando cada nota al acumulador
    suma_notas += nota

# 3. Calculamos el promedio fuera del bucle (una sola vez)
promedio = suma_notas / 3

print(f"\nTu promedio final es: {promedio}")

# 4. Evaluamos si aprobó
if promedio >= 4.0:
    print("¡Felicidades! Estás aprobado.")
else:
    print("Lo siento, estás desaprobado.")