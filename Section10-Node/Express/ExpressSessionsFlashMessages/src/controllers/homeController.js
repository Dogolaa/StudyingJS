exports.paginaInicial = (req, res) => {
  req.session.usuario = { nome: 'Luiz', logado: true };
  req.flash('info', 'Ola mundo!');
  req.flash('error', 'error');
  req.flash('success', 'success');
  res.render('index');
  return;
};

exports.trataPost = (req, res) => {
  res.send(req.body);
  return;
};
