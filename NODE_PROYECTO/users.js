const router = require("express").Router();

router.get("/", (req, res) => {
  res.send({
    usuarios: listaDeUsuarios,
  });
});

router.post("/usuarios", (req, res) => {
  const nombre = req.body.nombre;
  const tarjetaDeCredito = req.body.tarjetaDeCredito;

  const nuevaUsuario = {
    nombre: nombre,
    tarjetaDeCredito: tarjetaDeCredito,
    autor: "Usuario",
  };
  listaDeUsuarios.push(nuevaUsuario);

  res.send({
    usuarios: listaDeUsuarios,
    nuevaUsuario: nuevaUsuario,
  });
});

const listaDeUsuarios = [
  {
    nombre: "Paula Rodrigéz",
    tarjetaDeCredito: "2428 10124208 8",
    autor: "Sistema",
  },
  {
    nombre: "Valentina Pérez",
    tarjetaDeCredito: "2428 10124208 6",
    autor: "Sistema",
  },
];


module.exports = router;
