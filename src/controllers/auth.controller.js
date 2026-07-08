// Controlador temporal para autenticación

export const login = (req, res) => {
    const { email, password } = req.body;
    res.status(200).json({ message: "POST /auth/login - Pendiente de implementar", credentials: { email, password } });
};