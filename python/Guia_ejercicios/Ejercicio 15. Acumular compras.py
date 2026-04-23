
contador_final = 0

for i in range(5):
    numero = float(input(f"Dame el precio {i+1}: "))
    
    contador_final += numero

print(f"resultado final {contador_final}")