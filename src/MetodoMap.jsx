import './App.css';

const productos = [
  { id: 1, nombre: 'Camiseta', precio: 19.99, categoria: 'Ropa' },
  { id: 2, nombre: 'Pantalones', precio: 39.99, categoria: 'Ropa' },
  { id: 3, nombre: 'Zapatos', precio: 59.99, categoria: 'Calzado' },
  { id: 4, nombre: 'Sombrero', precio: 14.99, categoria: 'Accesorios' },
  { id: 5, nombre: 'Gafas de sol', precio: 24.99, categoria: 'Accesorios' },
  { id: 6, nombre: 'Chaqueta', precio: 89.99, categoria: 'Ropa' },
  { id: 7, nombre: 'Bolso', precio: 49.99, categoria: 'Accesorios' },
  { id: 8, nombre: 'Bufanda', precio: 12.99, categoria: 'Accesorios' },
  { id: 9, nombre: 'Guantes', precio: 9.99, categoria: 'Accesorios' },
  { id: 10, nombre: 'Reloj', precio: 199.99, categoria: 'Accesorios' }
];

export default function MetodoMap() {
  return (
    <div>
      <h1>Lista de Productos</h1>
      <ul>
        {productos.map(producto => (
          <li key={producto.id}>
            {producto.nombre} - ${producto.precio} - {producto.categoria}
          </li>
        ))}
      </ul>
    </div>
  );
}
