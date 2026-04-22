acumulador = 0.0

num1 = float(input("Dame tu primera nota:"))
acumulador += num1

num2 = float(input("Dame tu primera nota:"))
acumulador += num2

num3 = float(input("Dame tu primera nota:"))
acumulador += num3

division = acumulador / 3

print("saber si estas aprobado o desaprobado")
if division >= 4.0:
    print("estas aprobado :D")
else:
    print("desaprobado")