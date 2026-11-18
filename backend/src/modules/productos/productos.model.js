import db from "../../config/dbconexion.js";

// MODELO DE PRODUCTOS
export const UserModel = {
  findALL: async () => {
    const sql = "SELECT * FROM productos;";

    // Almacenamos la respuesta en un arreglo
    const [rows] = await db.query(sql);
    return rows;
  },

  findById: async (codigo) => {
    const sql = "SELECT * FROM productos WHERE codigo=?";
    //almacenamos la respuesta en un arreglo
    const [rows] = await db.query(sql, [codigo]);
    return rows;
  },

  delete: async (codigo) => {
    const sql = "DELETE FROM productos WHERE codigo=?";
    const [rows] = await db.query(sql, [codigo]);
    return rows;
  },

  create: async (data) => {
    let descripcion = data.descripcion;
    console.log(data);

    // validamos que la descripcion no exista
    const [descripcionExiste] = await db.query(
      "SELECT * FROM productos WHERE descripcion = ?",
      [descripcion],
    );

    if (descripcionExiste.length > 0) {
      throw new Error("La descripcion ya está registrada");
    }

    const productoNuevo = {
      codigo: data.codigo,
      descripcion: data.descripcion,
      unidad: data.unidad,
      costo: data.costo,
      precio: data.precio,
    };

    const sql = "INSERT INTO productos SET ?";
    const [rows] = await db.query(sql, [productoNuevo]);
    return rows;
  },

  update: async (codigo, data) => {
    const sql = "UPDATE productos SET ? WHERE codigo = ?";
    //almacenamos la respuesta en un arreglo
    const [rows] = await db.query(sql, [data, codigo]);
    return rows;
  },
};
