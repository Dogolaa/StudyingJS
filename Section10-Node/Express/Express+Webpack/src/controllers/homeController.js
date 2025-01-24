exports.paginaInicial = (req, res) => {
  res.render('index');
};

exports.trataPost = (req, res) => {
  console.log(req.body.qualquercoisa);
  console.log(req.body.outrocampo);
  console.log(req.body);
  res.send(`Recebi o formulario`);
};
