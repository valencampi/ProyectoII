var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const generosRouter = require ('./routes/generos');
const peliculasRouter = require ('./routes/peliculas');
const PeliculasPreferidasRouter = require ('./routes/PeliculasPreferidas');
const pelicularPorGeneroRouter = require ('./routes/pelicularPorGenero');
const resultadoRouter = require ('./routes/resultado');
const registroRouter = require ('./routes/registro');
const resenaRouter = require ('./routes/resena');
const loginRouter = require ('./routes/login');
const misResenasRouter = require ('./routes/misResenas');
const buscadorUsuariosRouter = require ('./routes/buscadorUsuarios');
const detalleRouter = require ('./routes/detalle');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/generos', generosRouter);
app.use('/peliculas', peliculasRouter);
app.use('/PeliculasPreferidas', PeliculasPreferidasRouter);
app.use('/pelicularPorGenero', pelicularPorGeneroRouter);
app.use('/resultado', resultadoRouter);
app.use('/registro', registroRouter);
app.use('/peliculas', resenaRouter);
app.use('/login', loginRouter);
app.use('/misResenas', misResenasRouter);
app.use('/buscadorUsuarios', buscadorUsuariosRouter);
app.use('/detalle', detalleRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
