// ### **Exercícios**

// **Exercício 1: Cadastro de Usuário**
// - Declare variáveis para armazenar o nome, a idade, o e-mail e se o usuário é um assinante (booleano). Use `const` para os dados que não devem ser alterados e `let` para aqueles que podem ser atualizados. Exiba essas informações no console de forma organizada, usando template strings.

// const nome = 'Grégori'
// const idade = '19'
// const email = 'gregori@gmail.com'
// const assinante = true

// console.log(`Nome: ${nome}\nIdade: ${idade}\nEmail: ${email}\nStatus de assinatura: ${assinante}\n`)

// **Exercício 2: Calculadora de Área de Retângulo**
// - Declare duas variáveis, `base` e `altura`, e atribua valores numéricos a elas. Calcule a área do retângulo (área = base * altura) e armazene o resultado em uma terceira variável chamada `area`. Exiba o resultado no console com uma mensagem clara.
// const base = 10
// const altura = 10
// const area = base * altura
// console.log('A base é: ' + base + 'cm')
// console.log('A altura é: ' + altura + 'cm')
// console.log('A área é: ' + area + 'cm2')

// **Exercício 3: Verificador de Maioridade**
// - Declare uma variável `idade` e atribua um valor numérico. Use um operador relacional para verificar se a idade é maior ou igual a 18. Armazene o resultado booleano (true ou false) em uma variável chamada `eMaiorDeIdade`. Exiba a variável `eMaiorDeIdade` no console.
// const idade = 19
// const eMaiorDeIdade = idade >= 18
// console.log(eMaiorDeIdade)

// **Exercício 4: O "Bug" da Soma com Strings**
// - Declare uma variável `valorProduto` com o valor ` "150" ` (como string). Declare uma variável `valorDesconto` com o valor `20` (como number). Tente subtrair o desconto do produto e veja o que acontece. Corrija o problema convertendo a string para número antes da operação e exiba o resultado final no console.
// const valorProduto = '150'
// const valorDesconto = 20
// const resultado = Number(valorProduto) - valorDesconto
// console.log(resultado)

// **Exercício 5: Par ou Ímpar?**
// - Declare uma variável `numero` e atribua um valor inteiro a ela. Use o operador de módulo (`%`) para verificar se o número é par. Um número é par se o resto da sua divisão por 2 for 0. Armazene o resultado booleano em uma variável `ePar` e exiba no console.
// const numero = 4
// const ePar = (numero % 2) === 0
// console.log(ePar)

// **Exercício 6: Verificação de Acesso**
// - Declare duas variáveis booleanas: `usuarioLogado` e `temPermissaoAdmin`. Use o operador lógico `&&` (E) para verificar se o usuário está logado E tem permissão de administrador. Armazene o resultado em uma variável `podeAcessarAreaAdmin` e exiba-a no console.
// const usuarioLogado = true
// const temPermissaoAdmin = false
// podeAcessarAreaAdmin = usuarioLogado && temPermissaoAdmin
// console.log(podeAcessarAreaAdmin)

// **Exercício 7: Status de Jogo com Operador Ternário**
// - Declare uma variável `pontuacao` com um valor numérico. Use o operador ternário para criar uma variável `statusDoJogo`. Se a pontuação for maior que 1000, o status deve ser "Jogador VIP". Caso contrário, deve ser "Jogador regular". Exiba o `statusDoJogo` no console.
// const pontuacao = 1200
// statusDoJogo = pontuacao > 1000 ? 'Jogador VIP' : 'Jogador regular'
// console.log(statusDoJogo)

// **Exercício 8: Cálculo de IMC (Índice de Massa Corporal)**
// - Declare duas variáveis: `peso` (em kg) e `altura` (em metros). Calcule o IMC usando a fórmula: `IMC = peso / (altura * altura)` ou `IMC = peso / altura ** 2`. Armazene o resultado na variável `imc` e exiba no console, formatando o número para ter apenas duas casas decimais.
// const peso = 61
// const altura = 1.67
// const imc = peso/(altura ** 2)
// console.log(imc.toFixed(2))

// **Exercício 9: Concatenação de Informações**
// - Declare três variáveis: `primeiroNome`, `ultimoNome` e `anoNascimento`. Concatene essas informações para criar uma frase no seguinte formato: "O usuário [primeiroNome] [ultimoNome] nasceu em [anoNascimento]." Armazene a frase completa em uma variável e exiba no console.
// const primeiroNome = 'Ana'
// const ultimoNome = 'Clara'
// const anoNascimento = '2000'
// console.log(`O usuário ${primeiroNome} ${ultimoNome} nasceu em ${anoNascimento}`)

// **Exercício 10: Cálculo de Juros Simples**
// - Crie um script para calcular juros simples. Declare as variáveis `capitalInicial`, `taxaDeJuros` (em decimal, ex: 5% = 0.05) e `tempoDeAplicacao` (em meses). A fórmula é: `montante = capitalInicial * (1 + taxaDeJuros * tempoDeAplicacao)`. Calcule e exiba o valor do `montante` final.

// const capitalInicial = 50000
// const taxaDeJuros = 0.02
// const tempoDeAplicacao = 24
// const montante = capitalInicial * (1 + taxaDeJuros * tempoDeAplicacao)
// console.log(montante)