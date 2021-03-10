# Introduction 
Administración de los mensajes y ubicacion de las naves que esten mas alla de los asteroides

# Getting Started
1. Servicios habilitados
3. Pre requisitos

# 1. Servicios habilitados
## 1.1 Consulta de la ubicacion nave
Permite consultar solo la ubicacion de la nave

### 1.1.1 Request 
_____
``POST``
Para el uso de este servicio será necesario enviar la distancia de cada satelite con respecto a la nave

````json
{
    "satellites": [
        {
            "name":"kenobi", 
            "distance":1220.66
        },
        {
            "name":"skywalker",
            "distance":721.11
        },
        {   
            "name":"sato",
            "distance":400.00
        }
    ]
}
````
### 1.1.2 Response
_____
En caso de éxito se retornará las comisiones de ese grupo economico:
````json
{
    "statusCode": 200,
    "status": {
        "code": "QUA200",
        "message": "SUCCESS",
        "date": "2021-03-10T16:54:47.462Z"
    },
    "body": {
        "x": "500.01",
        "y": "499.97"
    }
}
````

### 1.1.3 Codigos de respuesta
_____
Los tipos de respuesta de este microservicio son:

- ``200`` : Localización satisfactoria
````json
{
    "statusCode": 200,
    "status": {
        "code": "QUA200",
        "message": "SUCCESS",
        "date": "2021-03-10T16:54:47.462Z"
    },
    "body": {
        "x": "",
        "y": ""
    }
}
````

- ``404`` : La data no es valida
````json
{
    "statusCode": 400,
    "status": {
        "code": "QUA501",
        "message": "Please send valid data",
        "date": "2021-03-10T16:54:47.462Z"
    }
}
````

- ``500`` : La data enviada no es suficiente || error interno
````json
{
    "statusCode": 500,
    "status": {
        "code": "QUA500",
        "message": "Internal Error in the service",
        "detail": "Cannot read property 'distance' of undefined",
        "date": "2021-03-10T16:54:47.462Z"
    }
}
````
### 1.2.4 Pantallas 
_____
Req
![image](https://user-images.githubusercontent.com/44010632/110700965-90eaac00-81be-11eb-9544-9708fa407b99.png)
Res
![image](https://user-images.githubusercontent.com/44010632/110700995-9a741400-81be-11eb-90d1-51f2a12923c2.png)

## 1.2 Consulta del mensaje secreto de la nave
Se rearma el mensaje que envio la nave

### 1.2.1 Request
_____
``POST``
Para el uso de este servicio será necesario enviar los mensajes que reciben los satelites

````json
{
    "satellites": [{
        "name":"kenobi",
        "message":["este", "", "", "mensaje", ""],
    },{
        "name":"sato",
        "message":["","es", "", "", "secreto"]
    },{
        "name":"skywalker",
        "message":["este", "", "un", "",""]
    }]
}
````
### 1.2.2 Response
_____
La respuesta existosa será de la siguiente forma:
````json
{
    "statusCode": 200,
    "status": {
        "code": "QUA200",
        "message": "SUCCESS",
        "date": "2021-03-10T17:02:59.429Z"
    },
    "body": "este es un mensaje secreto"
}
````
### 1.2.3 Codigos de respuesta
_____
Los tipos de respuesta de este microservicio son:

- ``200`` : Mensaje desifrado satisfactoriamente
````json
{
    "statusCode": 200,
    "status": {
        "code": "QUA***",
        "message": "SUCCESS",
        "date": ""
    },
    "body": ""
}
````


- ``400`` : la data no es valida
````json
{
    "statusCode": 400,
    "status": {
        "code": "QUA***",
        "message": "Please send valid data",
        "date": ""
    }
}
````

- ``500`` : Data insuficiente || Error interno
````json
{
    "statusCode": 500,
    "status": {
        "code": "QUA500",
        "message": "Internal Error in the service",
        "detail": "Cannot read property 'message' of undefined",
        "date": ""
    }
}
````
### 1.2.4 Pantallas 
_____
Req
![image](https://user-images.githubusercontent.com/44010632/110700609-276a9d80-81be-11eb-99ce-f71511643853.png)
Res
![image](https://user-images.githubusercontent.com/44010632/110700660-318c9c00-81be-11eb-96f0-992fb8324d36.png)

## 1.3 Consulta del mensaje y localizacion secreta de la nave
Se rearma el mensaje que envio la nave y se localiza las cordenadas de la nave

### 1.3.1 Request
_____
``POST``
Para el uso de este servicio será necesario enviar los mensajes que reciben los satelites y las distancias de cada satelite a la nave

````json
{
    "satellites": [
        {
            "name": "kenobi",
            "distance": 950,
            "message": ["este", "", "", "mensaje", ""]
        },
        {
            "name": "skywalker",
            "distance": 350,
            "message": ["", "es", "", "", "secreto"]
        },
        {
            "name": "sato",
            "distance": 100,
            "message": ["este", "", "un", "", ""]
        }
    ]
}
````
### 1.3.2 Response
_____
La respuesta existosa será de la siguiente forma:
````json
{
    "RESPONSE_CODE": 200,
    "body": {
        "position": {
            "x": "417.19",
            "y": "46.88"
        },
        "message": "este es un mensaje secreto"
    }
}
````
### 1.3.3 Codigos de respuesta
_____
Los tipos de respuesta de este microservicio son:

- ``200`` : Mensaje y localizacion desifrado satisfactoriamente
````json
{
    "RESPONSE_CODE": 200,
    "body": {
        "position": {
            "x": "",
            "y": ""
        },
        "message": ""
    }
}
````


- ``400`` : la data no es valida || data no valida
````json
{
    "RESPONSE_CODE": 404
}
````
### 1.3.4 Pantallas 
_____
Req
![image](https://user-images.githubusercontent.com/44010632/110700023-76fc9980-81bd-11eb-812e-ee6b7f467bff.png)
Res
![image](https://user-images.githubusercontent.com/44010632/110700059-824fc500-81bd-11eb-889c-8ef28f5841a9.png)

# 2. Pre requisitos
_____
Instalar las siguientes herramientas:

- [Node 12.*](http://nodejs.org)
- [Serverless 1.2x](https://serverless.com/)

