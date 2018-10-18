const ejs = require('ejs');

ejs.renderFile('index.ejs', {
        title: 'xerereu',
        menu_items: [
            ["#href", "item"],
            ["#href", "item2"]
        ],
        sidebar_items: [
            ["#href", "item"]
        ],
        numero: '9',
        data_aula: ['01/01/2018', '11:58'],
        aula: ["Nome da Aula", "Nome do professor"],
        modulo: ["Nome do módulo", "Informações do módulo"],
        arquivos: [["#href", "Arquivo"]],
        messages: [["you", "hello"], ["them", "hi"]] /* you - mensagens que vieram de você (direita)
                                                        them - mensagens que vieram do outro (esquerda) */
    },
    (err, html) => {
        console.log(err);
        console.log(html);
    });