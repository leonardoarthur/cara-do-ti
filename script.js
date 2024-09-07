const termos = [
    {
        nome: 'JavaScript',
        criador: 'Brendan Eich',
        empresa: 'Netscape',
        descricao: 'Uma linguagem de programação popular para desenvolvimento web, conhecida por sua flexibilidade e suporte a programação orientada a objetos e funcional.',
        exemplo: 'console.log("Hello, World!");'
    },
    {
        nome: 'Python',
        criador: 'Guido van Rossum',
        empresa: 'Python Software Foundation',
        descricao: 'Uma linguagem de programação de alto nível, conhecida por sua simplicidade e legibilidade. Muito usada em ciência de dados, automação e desenvolvimento web.',
        exemplo: 'print("Hello, World!")'
    },
    {
        nome: 'Java',
        criador: 'James Gosling',
        empresa: 'Sun Microsystems',
        descricao: 'Uma linguagem de programação orientada a objetos amplamente utilizada para desenvolvimento de aplicativos web, móveis e empresariais.',
        exemplo: 'System.out.println("Hello, World!");'
    },
    {
        nome: 'C++',
        criador: 'Bjarne Stroustrup',
        empresa: 'AT&T',
        descricao: 'Uma extensão da linguagem C que adiciona suporte a programação orientada a objetos e outros recursos.',
        exemplo: '#include <iostream>\nint main() {\n    std::cout << "Hello, World!";\n    return 0;\n}'
    },
    {
        nome: 'C#',
        criador: 'Microsoft',
        empresa: 'Microsoft',
        descricao: 'Uma linguagem de programação desenvolvida pela Microsoft que é usada principalmente na plataforma .NET.',
        exemplo: 'Console.WriteLine("Hello, World!");'
    },
    {
        nome: 'Ruby',
        criador: 'Yukihiro Matsumoto',
        empresa: 'Ruby Association',
        descricao: 'Uma linguagem de programação dinâmica e orientada a objetos, conhecida por sua sintaxe simples e legibilidade.',
        exemplo: 'puts "Hello, World!"'
    },
    {
        nome: 'PHP',
        criador: 'Rasmus Lerdorf',
        empresa: 'PHP Group',
        descricao: 'Uma linguagem de script do lado do servidor amplamente utilizada para desenvolvimento web.',
        exemplo: '<?php echo "Hello, World!"; ?>'
    },
    {
        nome: 'Swift',
        criador: 'Apple Inc.',
        empresa: 'Apple Inc.',
        descricao: 'Uma linguagem de programação desenvolvida pela Apple para o desenvolvimento de aplicativos para iOS e macOS.',
        exemplo: 'print("Hello, World!")'
    },
    {
        nome: 'Go',
        criador: 'Robert Griesemer, Rob Pike, Ken Thompson',
        empresa: 'Google',
        descricao: 'Uma linguagem de programação desenvolvida pelo Google, conhecida por sua simplicidade e eficiência.',
        exemplo: 'package main\nimport "fmt"\nfunc main() {\n    fmt.Println("Hello, World!")\n}'
    },
    {
        nome: 'Kotlin',
        criador: 'JetBrains',
        empresa: 'JetBrains',
        descricao: 'Uma linguagem de programação que é interoperável com Java e é usada principalmente para o desenvolvimento de aplicativos Android.',
        exemplo: 'fun main() {\n    println("Hello, World!")\n}'
    },
    // Conceitos de Programação
    {
        nome: 'Algoritmo',
        criador: 'N/A',
        empresa: 'N/A',
        descricao: 'Uma sequência de passos ou instruções para realizar uma tarefa ou resolver um problema.',
        exemplo: 'Algoritmo para calcular a soma de dois números: 1) Receber dois números como entrada, 2) Somar os números, 3) Exibir o resultado.'
    },
    {
        nome: 'Função',
        criador: 'N/A',
        empresa: 'N/A',
        descricao: 'Um bloco de código que executa uma tarefa específica e pode ser reutilizado em diferentes partes do programa.',
        exemplo: 'function soma(a, b) {\n    return a + b;\n}'
    },
    {
        nome: 'Classe',
        criador: 'N/A',
        empresa: 'N/A',
        descricao: 'Um modelo ou template que define as propriedades e comportamentos de um tipo de objeto.',
        exemplo: 'class Pessoa {\n    constructor(nome, idade) {\n        this.nome = nome;\n        this.idade = idade;\n    }\n}'
    },
    {
        nome: 'Objeto',
        criador: 'N/A',
        empresa: 'N/A',
        descricao: 'Uma instância de uma classe que contém propriedades e métodos.',
        exemplo: 'const pessoa = new Pessoa("João", 30);'
    },
    {
        nome: 'Herança',
        criador: 'N/A',
        empresa: 'N/A',
        descricao: 'Um conceito de programação orientada a objetos onde uma classe herda propriedades e métodos de outra classe.',
        exemplo: 'class Aluno extends Pessoa {\n    constructor(nome, idade, matricula) {\n        super(nome, idade);\n        this.matricula = matricula;\n    }\n}'
    },
    {
        nome: 'Polimorfismo',
        criador: 'N/A',
        empresa: 'N/A',
        descricao: 'O conceito de permitir que uma função ou método tenha diferentes implementações dependendo do contexto.',
        exemplo: 'function fazerBarulho(obj) {\n    obj.barulho();\n}'
    },
    {
        nome: 'Encapsulamento',
        criador: 'N/A',
        empresa: 'N/A',
        descricao: 'O conceito de esconder os detalhes internos de um objeto e expor apenas o que é necessário.',
        exemplo: 'class ContaBancaria {\n    #saldo;\n    constructor(saldoInicial) {\n        this.#saldo = saldoInicial;\n    }\n    depositar(valor) {\n        this.#saldo += valor;\n    }\n}'
    },
    {
        nome: 'Abstração',
        criador: 'N/A',
        empresa: 'N/A',
        descricao: 'O conceito de fornecer uma interface simplificada para um sistema complexo, escondendo os detalhes de implementação.',
        exemplo: 'abstract class Veiculo {\n    abstract mover();\n}'
    },
    {
        nome: 'Recursão',
        criador: 'N/A',
        empresa: 'N/A',
        descricao: 'Uma técnica onde uma função chama a si mesma para resolver um problema.',
        exemplo: 'function fatorial(n) {\n    if (n === 0) return 1;\n    return n * fatorial(n - 1);\n}'
    },
    {
        nome: 'TypeScript',
        criador: 'Microsoft',
        empresa: 'Microsoft',
        descricao: 'Um superset do JavaScript que adiciona tipos estáticos opcionais e outras funcionalidades.',
        exemplo: 'let mensagem: string = "Hello, World!"; console.log(mensagem);'
    },
    {
        nome: 'Rust',
        criador: 'Graydon Hoare',
        empresa: 'Mozilla',
        descricao: 'Uma linguagem de programação focada em segurança, performance e concorrência.',
        exemplo: 'fn main() {\n    println!("Hello, World!");\n}'
    },
    {
        nome: 'Scala',
        criador: 'Martin Odersky',
        empresa: 'École Polytechnique Fédérale de Lausanne',
        descricao: 'Uma linguagem que combina programação orientada a objetos e programação funcional.',
        exemplo: 'object HelloWorld {\n    def main(args: Array[String]) {\n        println("Hello, World!")\n    }\n}'
    },
    {
        nome: 'Perl',
        criador: 'Larry Wall',
        empresa: 'N/A',
        descricao: 'Uma linguagem de programação conhecida por suas capacidades de manipulação de texto e expressões regulares.',
        exemplo: 'print "Hello, World!\n";'
    },
    {
        nome: 'Lua',
        criador: 'Roberto Ierusalimschy, Luiz Henrique de Figueiredo, Waldemar Celes',
        empresa: 'N/A',
        descricao: 'Uma linguagem de script leve e embutida, frequentemente usada em jogos e sistemas embarcados.',
        exemplo: 'print("Hello, World!")'
    },
    {
        nome: 'Haskell',
        criador: 'N/A',
        empresa: 'N/A',
        descricao: 'Uma linguagem de programação funcional pura e fortemente tipada.',
        exemplo: 'main = putStrLn "Hello, World!"'
    },
    {
        nome: 'Swift',
        criador: 'Apple Inc.',
        empresa: 'Apple Inc.',
        descricao: 'Uma linguagem de programação desenvolvida pela Apple para o desenvolvimento de aplicativos para iOS e macOS.',
        exemplo: 'print("Hello, World!")'
    },
    {
        nome: 'Dart',
        criador: 'Google',
        empresa: 'Google',
        descricao: 'Uma linguagem de programação otimizada para criar interfaces de usuário para aplicativos web e móveis.',
        exemplo: 'void main() {\n  print("Hello, World!");\n}'
    },
    {
        nome: 'MATLAB',
        criador: 'MathWorks',
        empresa: 'MathWorks',
        descricao: 'Uma linguagem de programação e ambiente de desenvolvimento focado em cálculos numéricos e computação científica.',
        exemplo: 'disp("Hello, World!")'
    },
    {
        nome: 'R',
        criador: 'Ross Ihaka, Robert Gentleman',
        empresa: 'N/A',
        descricao: 'Uma linguagem e ambiente para estatística e análise de dados.',
        exemplo: 'print("Hello, World!")'
    },
    // Conceitos de Programação (continuação)
    {
        nome: 'Algoritmo de Ordenação',
        criador: 'N/A',
        empresa: 'N/A',
        descricao: 'Algoritmos usados para organizar uma lista de itens em uma ordem específica, como crescente ou decrescente.',
        exemplo: 'Exemplo: Algoritmo de ordenação por bolha: Compara e troca elementos adjacentes até que a lista esteja ordenada.'
    },
    {
        nome: 'Estruturas de Dados',
        criador: 'N/A',
        empresa: 'N/A',
        descricao: 'Formas de organizar e armazenar dados de maneira eficiente para acesso e modificação.',
        exemplo: 'Exemplo: Pilhas, filas, listas ligadas, árvores, grafos.'
    },
    {
        nome: 'Programação Funcional',
        criador: 'N/A',
        empresa: 'N/A',
        descricao: 'Um paradigma de programação que trata a computação como a avaliação de funções matemáticas e evita estados e dados mutáveis.',
        exemplo: 'Exemplo: Funções de ordem superior, imutabilidade.'
    },
    {
        nome: 'Programação Orientada a Objetos',
        criador: 'N/A',
        empresa: 'N/A',
        descricao: 'Um paradigma de programação baseado na ideia de objetos que contêm dados e métodos.',
        exemplo: 'Exemplo: Encapsulamento, herança, polimorfismo.'
    },
    {
        nome: 'Design Patterns',
        criador: 'N/A',
        empresa: 'N/A',
        descricao: 'Soluções reutilizáveis para problemas comuns de design de software.',
        exemplo: 'Exemplo: Singleton, Factory, Observer.'
    },
    {
        nome: 'DevOps',
        criador: 'N/A',
        empresa: 'N/A',
        descricao: 'Uma prática que combina desenvolvimento e operações para melhorar a colaboração e eficiência no ciclo de vida do software.',
        exemplo: 'Exemplo: Integração contínua, entrega contínua.'
    },
    {
        nome: 'Git',
        criador: 'Linus Torvalds',
        empresa: 'N/A',
        descricao: 'Um sistema de controle de versão distribuído usado para gerenciar código-fonte.',
        exemplo: 'Exemplo: git clone, git commit, git push.'
    },
    {
        nome: 'Docker',
        criador: 'Solomon Hykes',
        empresa: 'Docker Inc.',
        descricao: 'Uma plataforma para desenvolver, enviar e executar aplicativos em contêineres.',
        exemplo: 'Exemplo: docker run, docker-compose up.'
    },
    {
        nome: 'Kubernetes',
        criador: 'Google',
        empresa: 'Google',
        descricao: 'Um sistema de orquestração de contêineres para automatizar a implantação, o dimensionamento e a operação de aplicativos em contêineres.',
        exemplo: 'Exemplo: kubectl get pods, kubectl apply -f deployment.yaml.'
    },
    {
        nome: 'CI/CD',
        criador: 'N/A',
        empresa: 'N/A',
        descricao: 'Práticas de Integração Contínua e Entrega Contínua para automatizar o desenvolvimento e a implantação de software.',
        exemplo: 'Exemplo: Jenkins, Travis CI, GitHub Actions.'
    },
    {
        nome: 'REST',
        criador: 'Roy Fielding',
        empresa: 'N/A',
        descricao: 'Um estilo arquitetônico para sistemas distribuídos que utiliza HTTP e princípios de design RESTful.',
        exemplo: 'Exemplo: GET /api/users, POST /api/users.'
    },
    {
        nome: 'GraphQL',
        criador: 'Facebook',
        empresa: 'Facebook',
        descricao: 'Uma linguagem de consulta para APIs e um runtime para atender essas consultas com seus dados.',
        exemplo: 'Exemplo: query { user(id: "1") { name } }'
    },
    {
        nome: 'WebSocket',
        criador: 'IETF',
        empresa: 'N/A',
        descricao: 'Um protocolo de comunicação que fornece um canal de comunicação bidirecional sobre uma única conexão TCP.',
        exemplo: 'Exemplo: const socket = new WebSocket("ws://example.com/socket");'
    },
    {
        nome: 'SOAP',
        criador: 'N/A',
        empresa: 'N/A',
        descricao: 'Um protocolo para troca de informações estruturadas na implementação de serviços web.',
        exemplo: 'Exemplo: <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:exam="http://example.com/"> ... </soapenv:Envelope>'
    },
    {
        nome: 'JSON',
        criador: 'Douglas Crockford',
        empresa: 'N/A',
        descricao: 'Um formato leve de troca de dados que é fácil para humanos lerem e escreverem e fácil para máquinas analisarem e gerarem.',
        exemplo: '{ "nome": "João", "idade": 30 }'
    },
    {
        nome: 'XML',
        criador: 'W3C',
        empresa: 'N/A',
        descricao: 'Um formato de marcação que define um conjunto de regras para codificação de documentos em um formato que é legível por humanos e máquinas.',
        exemplo: '<pessoa><nome>João</nome><idade>30</idade></pessoa>'
    },
    {
        nome: 'AJAX',
        criador: 'N/A',
        empresa: 'N/A',
        descricao: 'Uma técnica para criar aplicações web interativas, que permite atualizar partes da página da web sem recarregar a página inteira.',
        exemplo: 'Exemplo: $.ajax({ url: "/data", success: function(data) { console.log(data); } });'
    },
    {
        nome: 'OOP',
        criador: 'N/A',
        empresa: 'N/A',
        descricao: 'Programação Orientada a Objetos, um paradigma de programação baseado em objetos.',
        exemplo: 'Exemplo: class Animal { constructor(nome) { this.nome = nome; } }'
    },
    {
        nome: 'MVC',
        criador: 'Trygve Reenskaug',
        empresa: 'N/A',
        descricao: 'Model-View-Controller, um padrão arquitetônico usado para separar a lógica de apresentação e de negócios de uma aplicação.',
        exemplo: 'Exemplo: Um controlador que processa entradas de usuário, atualiza o modelo e renderiza a visualização.'
    },
    {
        nome: 'API',
        criador: 'N/A',
        empresa: 'N/A',
        descricao: 'Interface de Programação de Aplicações, um conjunto de rotinas e padrões usados por programas para se comunicar com outros softwares.',
        exemplo: 'Exemplo: GET /api/v1/users retorna uma lista de usuários em JSON.'
    },
    {
        nome: 'SQL',
        criador: 'Donald D. Chamberlin, Raymond F. Boyce',
        empresa: 'IBM',
        descricao: 'Structured Query Language, uma linguagem usada para gerenciar e consultar bancos de dados relacionais.',
        exemplo: 'Exemplo: SELECT * FROM users WHERE age > 18;'
    },
    {
        nome: 'NoSQL',
        criador: 'N/A',
        empresa: 'N/A',
        descricao: 'Um tipo de banco de dados que não utiliza o modelo relacional de tabelas, focando em armazenamento de dados não estruturados.',
        exemplo: 'Exemplo: MongoDB, Cassandra, Redis.'
    },
    {
        nome: 'Regex',
        criador: 'N/A',
        empresa: 'N/A',
        descricao: 'Expressão Regular, uma sequência de caracteres que define um padrão de busca.',
        exemplo: 'Exemplo: /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/ para validar emails.'
    },
    {
        nome: 'Big Data',
        criador: 'N/A',
        empresa: 'N/A',
        descricao: 'Conjunto de dados que são grandes demais para serem geridos por sistemas tradicionais de banco de dados.',
        exemplo: 'Exemplo: Hadoop, Spark, e análise de grandes volumes de dados em tempo real.'
    },
    {
        nome: 'Machine Learning',
        criador: 'N/A',
        empresa: 'N/A',
        descricao: 'Ramo da inteligência artificial focado no desenvolvimento de algoritmos que permitem que as máquinas aprendam a partir de dados.',
        exemplo: 'Exemplo: Modelos preditivos que aprendem padrões em grandes volumes de dados.'
    },
    {
        nome: 'Cloud Computing',
        criador: 'N/A',
        empresa: 'N/A',
        descricao: 'O uso de servidores remotos na internet para armazenar, gerenciar e processar dados, ao invés de um servidor local.',
        exemplo: 'Exemplo: Amazon Web Services (AWS), Google Cloud Platform (GCP).'
    },
    {
        nome: 'Microservices',
        criador: 'N/A',
        empresa: 'N/A',
        descricao: 'Uma arquitetura de software que divide um sistema em pequenos serviços independentes que se comunicam entre si.',
        exemplo: 'Exemplo: Um serviço para autenticação de usuários e outro para gerenciamento de pedidos, cada um com seu próprio banco de dados.'
    },
    {
        nome: 'Blockchain',
        criador: 'Satoshi Nakamoto',
        empresa: 'N/A',
        descricao: 'Uma tecnologia de registro distribuído que permite a transferência segura de ativos digitais.',
        exemplo: 'Exemplo: Bitcoin e contratos inteligentes no Ethereum.'
    },
    {
        nome: 'API REST',
        criador: 'Roy Fielding',
        empresa: 'N/A',
        descricao: 'Interface de Programação de Aplicações baseada em representações de estado usando HTTP.',
        exemplo: 'Exemplo: GET /users retorna uma lista de usuários no formato JSON.'
    },
    {
        nome: 'JSON Web Token (JWT)',
        criador: 'N/A',
        empresa: 'N/A',
        descricao: 'Um padrão para transmitir dados de forma compacta e segura entre as partes em um formato JSON.',
        exemplo: 'Exemplo: Utilizado para autenticação e troca segura de informações entre cliente e servidor.'
    }
    // Adicione mais termos e linguagens conforme necessário
];

function pesquisarTermo() {
    const pesquisa = document.getElementById('search-input').value.toLowerCase();
    const resultado = document.getElementById('result-container');
    resultado.innerHTML = ''; // Limpa o resultado anterior

    const termo = termos.find(t => t.nome.toLowerCase() === pesquisa);

    if (termo) {
        resultado.innerHTML = `
            <h2>${termo.nome}</h2>
            <p><strong>Criador:</strong> ${termo.criador}</p>
            <p><strong>Empresa:</strong> ${termo.empresa}</p>
            <p><strong>Descrição:</strong> ${termo.descricao}</p>
            <p><strong>Exemplo de Uso:</strong></p>
            <pre><code>${termo.exemplo}</code></pre>
        `;
    } else {
        resultado.innerHTML = '<p>Termo ou linguagem não encontrado :( </p>';
    }
}

document.getElementById('search-button').addEventListener('click', pesquisarTermo);

// Seleciona o botão e a div
const botaoBuscar = document.getElementById('search-button');
const divResultado = document.getElementById('result-container');

// Adiciona um evento de clique ao botão
botaoBuscar.addEventListener('click', function() {
    // Exibe a div quando o botão for clicado
    divResultado.style.display = 'block';
});

