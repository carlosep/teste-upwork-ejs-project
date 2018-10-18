const ejs = require('ejs');
// const html = ejs.render('<h1><%= test %></h1>', {test: 'abc'});
// console.log(html);

ejs.renderFile('index.ejs', {
        title: 'xerereu',
        menu_items: [
            ["#link", "item"],
            ["#link2", "item2"]
        ],
        sidebar_items: [
            ["#link", "item"]
        ],
        numero: '9',
        data_aula: ['01/01/2018', '11:58'],
        aula: ["Nome da Aula", "John Doe"],
        modulo: ["Nome do módulo", "Informações do módulo"],
        arquivos: [["#link", "Arquivo"]],
        messages: [["you", "hello"], ["them", "hi"]]
    },
    (err, html) => {
        console.log(err);
        console.log(html);
    });