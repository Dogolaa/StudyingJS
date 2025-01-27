exports.middlewareGlobal = (req, res, next) => {
  res.locals.umaVariavelLocal = 'ESte e o valor da variavel local';
  next();
};
