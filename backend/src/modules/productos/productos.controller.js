
import { UserModel } from "./productos.model.js";

// Obtener todos los productos
export const obtenerProductos = async (req, res) => {
  try {
    const results = await UserModel.findALL();
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: `error al listar productos: ${error}`,
    });
  }
};

// Obtener producto por codigo
export const obtenerProductoId = async (req, res) => {
  try {
    const results = await UserModel.findById(req.params.codigo);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: `error al listar producto: ${error}`,
    });
  }
};

// Crear producto
export const crearProducto = async (req, res) => {
  const datos = {
    codigo: req.body.codigo,
    descripcion: req.body.descripcion,
    unidad: req.body.unidad,
    costo: req.body.costo,
    precio: req.body.precio,
  };

  try {
    const results = await UserModel.create(datos);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: `ocurrió un error en la insercion:${error}`,
    });
  }
};

// Eliminar producto
export const borrarProducto = async (req, res) => {
  try {
    const results = await UserModel.delete(req.params.codigo);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: `ocurrió un error al eliminar:${error}`,
    });
  }
};

// Actualizar producto
export const actualizarProducto = async (req, res) => {
  try {
    const results = await UserModel.update(req.params.codigo, req.body);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: `ocurrió un error al actualizar ${error}`,
    });
  }
};
