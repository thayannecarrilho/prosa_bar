const express = require('express');
const session = require('express-session')
const path = require('path')
const bodyParser = require('body-parser')
const mysql = require('mysql2')
const exp = require('constants')
const prosaRoute = require('./routes/prosaRoute');
const app = express();

//CONFIG
app.use(session({secret: "ssshhhhh"}))
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//BANCO DE DADOS
function conectiondb(){
    var con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'thayanne',
        database: 'prosabar'
    })
    con.connect((err) =>{
        if(err){
            console.log('Erro connecting to database...', err)
            return
        }
        console.log('Connection established!')
    })
    return con;
}

//ROTAS E CONTROLLERS SEPARA DPS


app.get('/', (req,res) =>{ 
    res.render('home')
})

app.get('/cadastrostaff', (req,res) =>{ 
    res.render('cadastrostaff')
})

app.get('/homestaff', (req, res) =>{
    if (req.session.user){
        let con = conectiondb();
        let query2 = 'SELECT * FROM users WHERE email LIKE ?';
        con.query(query2, [req.session.user],   
        function (err, results){
            res.render('homestaff')
        })
    }else{
        res.redirect("/")
    }
})

app.get('/login', (req, res) => {
    let message = '';
    res.render('login', {message: message})
})

app.post('/savecadastrostaff', function (req, res){
    var nome = req.body.nome;
    var email = req.body.email;
    var senha = req.body.senha;   

    var con = conectiondb();
    var query = 'INSERT INTO users(??, ??, ??) VALUES (?, ?, ?)';
    const data = ['nome', 'email', 'senha', nome, email, senha]
    con.query(query, data, function (err){
        if (err){
            console.log(err)
        }else{
            console.log ("Usuario adicionado com email " + email);
            res.redirect('/login')
        }        
    });    
})

app.post('/log', function (req, res){
    let email = req.body.email;
    let senha = req.body.senha;
    let con = conectiondb();
    let query = 'SELECT * FROM users WHERE senha = ? AND email LIKE ?';

    con.query(query, [senha, email], function(err, results){
        if(results.length > 0){
            req.session.user = email; 
            console.log('Login efetuado com sucesso!');
            res.render('homestaff', {message:results});
        }else{
            let message = 'Login ou senha incorreta';
            res.render('login', {message: message})
        }
    })
}) 




const port = 3000;
app.listen(port, () => {
    console.log('servidor rodando')
})