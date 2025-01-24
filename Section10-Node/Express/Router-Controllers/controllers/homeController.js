exports.paginaInicial = (req, res) => {
  res.send(`<form action="/" method = "POST">   
      Nome: <input type= "text" name="qualquercoisa"><br>
      Outro campoo: <input type= "text" name="outrocampo"><br>
      <button>Enviar</button>
    </form>`);
};

exports.trataPost = (req, res) => {
  console.log(req.body.qualquercoisa);
  console.log(req.body.outrocampo);
  console.log(req.body);
  res.send(`Recebi o formulario`);
};
