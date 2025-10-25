# WiFly Mobile

Aplicación móvil desarrollada con React Native para la gestión de redes WiFi, soporte técnico y autenticación de usuarios.

## 🚀 Tecnologías

Este proyecto está construido con las siguientes tecnologías:

- **TypeScript** - Lenguaje de programación tipado
- **React Native 0.82.0** - Framework para aplicaciones móviles multiplataforma
- **Kotlin** - Código nativo Android (MainActivity, MainApplication)
- **Swift** - Código nativo iOS (AppDelegate)
- **React Navigation** - Navegación entre pantallas
- **Axios** - Cliente HTTP para consumir APIs
- **AsyncStorage** - Almacenamiento local persistente

## ✨ Características Principales

- **Gestión de Redes WiFi**: Visualiza, crea, actualiza y elimina redes WiFi. Monitorea dispositivos conectados a cada red.
- **Sistema de Tickets de Soporte**: Crea y gestiona tickets de soporte técnico con sistema de mensajería integrado.
- **Autenticación de Usuarios**: Sistema completo de login, registro, recuperación y restablecimiento de contraseña con tokens JWT.
- **Almacenamiento Seguro**: Gestión automática de tokens de autenticación con AsyncStorage y react-native-keychain.
- **Interfaz Multiplataforma**: Compatible con Android, iOS y Web.

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (v20 o superior)
- **npm** o **yarn**
- **React Native CLI**
- **Android Studio** (para desarrollo Android)
- **Xcode** (para desarrollo iOS, solo macOS)
- **JDK 17** (para desarrollo Android)
- **CocoaPods** (para desarrollo iOS)

## 🔧 Variables de Entorno

Configura las siguientes variables de entorno según tu entorno:

### API_URL
URL base de la API backend. Por defecto está configurada en `http://localhost:8080/api` en `src/services/api.ts`.

Para entornos de producción, actualiza la constante `API_BASE_URL`:

```typescript
const API_BASE_URL = process.env.API_URL || 'https://tu-api.ejemplo.com/api';
```

### MAPBOX_TOKEN / GOOGLE_MAPS_KEY
Si planeas integrar funcionalidades de mapas para visualizar ubicaciones de redes WiFi, necesitarás configurar:

- **MAPBOX_TOKEN**: Token de acceso de Mapbox
- **GOOGLE_MAPS_KEY**: Clave API de Google Maps

**Nota**: Actualmente estas variables no están implementadas en el proyecto, pero están preparadas para futuras integraciones.

## 🛠️ Instrucciones de Desarrollo

### 1. Clonar el repositorio

```bash
git clone https://github.com/VIPPINN/WiFly.git
cd WiFly
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Instalar dependencias de iOS (solo macOS)

```bash
npx pod-install
# o alternativamente:
cd ios && pod install && cd ..
```

### 4. Ejecutar la aplicación

#### Android

```bash
npm run android
# o
npx react-native run-android
```

#### iOS (solo macOS)

```bash
npm run ios
# o
npx react-native run-ios
```

#### Web

```bash
npm run web
```

### 5. Ejecutar en modo desarrollo

Para iniciar el Metro bundler:

```bash
npm start
```

## 📱 Ejemplo de Uso de la API

### Autenticación - Login

**Con fetch:**

```javascript
fetch('http://localhost:8080/api/auth/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email: 'usuario@ejemplo.com',
    password: 'tuContraseña123'
  })
})
.then(response => response.json())
.then(data => {
  console.log('Token:', data.token);
  console.log('Usuario:', data.user);
})
.catch(error => console.error('Error:', error));
```

**Con curl:**

```bash
curl -X POST http://localhost:8080/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "usuario@ejemplo.com",
    "password": "tuContraseña123"
  }'
```

### Obtener Redes WiFi

**Con fetch:**

```javascript
const token = 'tu-token-jwt';

fetch('http://localhost:8080/api/wifi-networks', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  }
})
.then(response => response.json())
.then(data => console.log('Redes WiFi:', data))
.catch(error => console.error('Error:', error));
```

**Con curl:**

```bash
curl -X GET http://localhost:8080/api/wifi-networks \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer tu-token-jwt"
```

### Crear Ticket de Soporte

**Con curl:**

```bash
curl -X POST http://localhost:8080/api/support/tickets \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer tu-token-jwt" \
  -d '{
    "title": "Problema con la red WiFi",
    "description": "No puedo conectarme a la red principal",
    "priority": "high"
  }'
```

## 🤝 Contribución

Las contribuciones son bienvenidas. Para contribuir:

1. Haz un fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/NuevaCaracteristica`)
3. Realiza tus cambios y haz commit (`git commit -m 'Agrega nueva característica'`)
4. Sube tus cambios (`git push origin feature/NuevaCaracteristica`)
5. Abre un Pull Request

Por favor, asegúrate de:
- Probar en ambas plataformas (Android e iOS)
- Seguir las convenciones de código del proyecto
- Actualizar la documentación si es necesario

## 📄 Licencia

Este proyecto está licenciado bajo la Licencia MIT.

```
MIT License

Copyright (c) 2024 VIPPINN

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 📧 Contacto

**VIPPINN**

- GitHub: [@VIPPINN](https://github.com/VIPPINN)
- Proyecto: [WiFly](https://github.com/VIPPINN/WiFly)

Para soporte o consultas sobre el proyecto, por favor abre un issue en el repositorio.