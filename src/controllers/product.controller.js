// Controlador temporal para productos (se conectará a Firebase en el próximo requerimiento)

export const getAllProducts = (req, res) => {
    res.status(200).json({ message: "GET /api/products - Pendiente de implementar" });
};

export const getProductById = (req, res) => {
    const { id } = req.params;
    res.status(200).json({ message: `GET /api/products/${id} - Pendiente de implementar` });
};

export const createProduct = (req, res) => {
    const productData = req.body;
    res.status(201).json({ message: "POST /api/products/create - Pendiente de implementar", data: productData });
};

export const deleteProduct = (req, res) => {
    const { id } = req.params;
    res.status(200).json({ message: `DELETE /api/products/${id} - Pendiente de implementar` });
};