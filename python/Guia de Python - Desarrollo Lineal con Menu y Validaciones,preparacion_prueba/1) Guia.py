menu = 0

while menu != 2:
    print("---Opción menu---")
    print("1. Registro compra")
    print("2. salir")
    
    try:
        opcion = int(input("Seleccione la opcion:"))
    except:
        print("Error vuleva intentarlo")
        
    if opcion == 1:
        
        monto_valido = False
        
        while monto_valido == False:
            try:
                monto = int(input("Ingrese un monto $$:"))
                
                if monto > 0:
                    monto_valido = True
                else:
                    print("El número debe ser mayor a cero")
            except:
                print("Error ingrese un número entero")
                
        tipo_cliente = input("Ingrese tipo de cliente (premium/socio/normal): ")
        tipo_cliente = tipo_cliente.lower().strip()
        
        if tipo_cliente == "premium":
            porcentaje = 0.20
        elif tipo_cliente == "socio":
            porcentaje = 0.10
        elif tipo_cliente == "normal":
            porcentaje = 0
        else:
            porcentaje = 0
            
        descuento = porcentaje * monto
            
        resulato = monto - descuento
            
        print("Monto original: $", monto)
        print("Descuento aplicado: $", int(descuento))
        print("Total a pagar: $", int(resulato))
            
    
    elif opcion == 2:
        print("Salir con exito")
    else:
        print("Error ingrese un número entero")