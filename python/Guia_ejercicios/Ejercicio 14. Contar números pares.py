
contador_pares = 0

for i in range(5):
    numero = int(input(f"Dame el número {i+1}: "))
    
    if numero % 2 == 0:
        
        contador_pares += 1
    else:
        print(f"El {numero} es impar")

# Al final, fuera del for, mostramos el total
print(f"\nEn total introdujiste {contador_pares} números pares.")