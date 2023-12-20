# Backend Conversor de UF a CLP

## Descripcion General

Proyecto desarollado en nodejs con Typescript.
Se conecta a base de datos mongodb atlas.
Cuenta con los siguiente servicios rest.

- Login
- Conversor
- Obtener historial de conversiones
- Export a XLS historial de conversiones

## Instalacion e Iniciación

Luego descargar el codigo Fuente

Para instalar las dependencias ejecutar el siguiente comando

```bash
  npm i
```

Luego de instaladas, se ejecuta el siguiente comando para iniciar backend

```bash
  npm run start
```

Esté backend se conecta a base de datos MongoDB Atlas y el path es

```bash
  mongodb+srv://zejano:Vf2ua0K01vtiTe6N@cluster0.drfseoi.mongodb.net/prueba
```

En caso de querer cambiar algunas configuraciones favor dirigirse al archivo

```bash
  src/common/environment.ts
```

## Servicios Rest

Url de servicios rest

```bash
  POST http://localhost:3001/api/auth/v1/login
  POST http://localhost:3001/api/conversor/v1
  POST http://localhost:3001/api/conversor/v1/export
```

## Authors

- [Manuel Hernández Aravena](https://github.com/zefrox)
