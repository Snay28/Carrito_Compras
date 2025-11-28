# Carrito de Compras 🛒

## Mi primer proyecto — Curso *JavaScript Moderno* (Udemy) — Instructor: Juan de la Torre

---

## 📖 Descripción

Este es mi primer proyecto del curso **JavaScript Moderno**. Construí una aplicación tipo carrito de compras donde el usuario puede agregar productos, verlos en un listado, eliminar artículos y observar cómo el total se actualiza dinámicamente.

El objetivo principal fue aprender a **manipular el DOM**, gestionar arrays y objetos, trabajar con eventos y resolver problemas reales como evitar duplicados, actualizar cantidades y reconstruir la interfaz cuando cambia el estado del carrito.

En el código dejé comentarios que muestran mis intentos iniciales, errores comunes y cómo encontré la solución correcta. Este proyecto representa mi proceso de aprendizaje desde cero.

Pagina del proyecto publicada: https://proyecto-carrito-snay28.netlify.app/

---

## 🧰 Tecnologías utilizadas

* HTML5
* CSS3
* JavaScript (Vanilla)
* Git
* GitHub

---

## 🚀 Cómo ejecutar el proyecto

Clona el repositorio y abre el archivo principal (index.html) en tu navegador:

```bash
git clone https://github.com/Snay28/Carrito_Compras.git
cd Carrito_Compras
# Abre index.html en el navegador o usa una extensión "Live Server" en tu editor.
```

---

## 🧪 Funcionamiento de la aplicación

* Los productos se muestran en pantalla con su información básica.
* Al hacer clic en **"Agregar al carrito"**, el producto se agrega al array que representa el carrito.
* Si el producto ya existe, la cantidad aumenta.
* El carrito se muestra en pantalla con su nombre, precio, cantidad.
* Los productos pueden eliminarse individualmente.

Además, dejé comentarios en el código mostrando ideas que intenté y que no funcionaron, explicando por qué fallaban y cuál fue la solución que sí funcionó.

---

## 💡 Conceptos que aprendí

### 🔸 Manipulación del DOM

* `createElement()`
* `appendChild()`
* `innerHTML`
* Eliminación de nodos con loops
* Limpieza y re-renderizado del contenido del carrito

### 🔸 Uso de Arrays y Objetos

Representé cada producto como un objeto y usé arrays para almacenar el carrito. Utilicé métodos como:

* `forEach()`
* `map()`
* `filter()`
* `some()`

Esto me permitió agregar, buscar, actualizar y eliminar productos.

### 🔸 Eventos

* `addEventListener("click", ...)`
* Delegación de eventos en elementos hijos
* Cómo leer atributos de un botón o elemento específico

### 🔸 Lógica de programación real

* Cómo evitar elementos duplicados
* Cómo actualizar cantidades correctamente
* Cómo mantener y reconstruir el estado del carrito
* Orden y estructura en la lógica del script

### 🔸 Depuración y aprendizaje práctico

Registré varios comentarios explicando errores reales que tuve:

* Variables que no se actualizaban
* Métodos que no eran adecuados para lo que intentaba
* Problemas al agregar elementos repetidos

Cada error me enseñó un poco más sobre la lógica del programa.

---

## 📂 Estructura del proyecto

```
Carrito_Compras/
│
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── img/
│   └── (imágenes del proyecto)
└── README.md
```

---

## 🚧 Estado del proyecto

* [x] Carrito funcional
* [x] Cálculo de totales de cursos
* [x] Agregar y eliminar productos
* [x] Código comentado mostrando el proceso de aprendizaje
* [ ] No tiene persistencia (no usa `localStorage`)
* [ ] No está optimizado para móviles
* [ ] No usa módulos JavaScript

> Es un proyecto educativo para aplicar los fundamentos de JavaScript.

---

## 🎯 Posibles mejoras

* Persistencia usando `localStorage`.
* Diseño más profesional y responsivo.
* Botones de aumentar y disminuir cantidad.
* Animaciones en la interfaz.
* Código modular (separar funciones en archivos distintos).
* Validaciones adicionales.
* Simulación de una API o backend falso.

---

## ✨ Agradecimientos

Agradezco al curso **JavaScript Moderno** y al profesor **Juan de la Torre**. Este proyecto fue mi primer acercamiento serio a la manipulación del DOM y al uso práctico de JavaScript.

También me agradezco a mí mismo por dedicar tiempo, esfuerzo y paciencia mientras aprendía, cometía errores y finalmente lograba que el proyecto funcionara correctamente.

---
