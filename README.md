# ⚙️ POS - Next.js / Nest.js

Un sistema POS desarrollado con Nest.js, diseñado para administrar productos, cupones y transacciones de forma eficiente y escalable.
Incluye integración con Cloudinary para la subida y gestión de imágenes, y utiliza TypeORM con PostgreSQL como base de datos principal

---

## 🧱 Tecnologías utilizadas

- 🟩 **Nest.js** — entorno de ejecución
- 🚀 **Express** — framework para la API REST
- 🟦 **TypeScript** — tipado estático y modularidad
- 🐘 **TypeORM** — ORM para la gestión de entidades y migraciones
- 🐘 **PostgreSQL** — base de datos relacional
- 🔐 **dotenv** para variables de entorno    

---

## 📂 Estructura del proyecto
- `src/categories/` → Módulo para la gestión de categorías
- `src/common/` → Código y utilidades compartidas
- `src/config/` → Configuración de la aplicación y conexión con TypeORM
- `src/coupons/` → Gestión de cupones y descuentos
- `src/products/` → CRUD de productos con subida de imágenes
- `src/transactions/` → Manejo de transacciones de venta
- `src/upload-image/` → Lógica para la subida y almacenamiento de imágenes en Cloudinary
- `src/seeder/` → Poblado inicial de la base de datos (datos de prueba
- `src/app.module.ts` → Módulo raíz del proyecto
- `src/main.ts` → Punto de entrada principal de la aplicación
---

## ⚙️ Configuración del entorno

Crea un archivo `.env` en la raíz del proyecto con la siguiente variable:

```env
DATABASE_HOST=
DATABASE_PORT=
DATABASE_USER=
DATABASE_PASS=
DATABASE_NAME=

CLOUDINARY_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```


## 🔗 Repositorios relacionados

- [Frontend - Next.js + TS](https://github.com/crisomarjs/pos-frontend)
- [Backend - Node + Express + TS + PostgreSQL](https://github.com/crisomarjs/pos-backend)
