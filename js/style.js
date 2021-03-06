// Primeira aula
var titulo = document.querySelector('.titulo');
console.log(titulo);
console.log(titulo.textContent);
titulo.textContent = "Aparecida Nutricionista";
// Fim primeira aula

// Segunda Aula
/*
var paciente = document.querySelector("#primeiro");
var peso = paciente.querySelector('.info-peso').textContent;
var altura = paciente.querySelector('.info-altura').textContent;

console.log(paciente);
console.log(peso);
console.log(altura);
*/

/*if(peso <= 0 || peso >= 700)
	paciente.querySelector('.info-imc').textContent = 'Peso inválido';
else if(altura <= 0 || altura >= 3.0)
	paciente.querySelector('.info-imc').textContent = 'Altura inválida';
else
	paciente.querySelector('.info-imc').textContent = (peso/(altura*2));
*/

// Fim Segunda Aula

// Terceira Aula
var peso;
var altura;
var pacientes = document.querySelectorAll('.paciente');

console.log(pacientes);

for (var i = 0; i < pacientes.length; i++)
{
	peso = pacientes[i].querySelector('.info-peso').textContent;
	altura = pacientes[i].querySelector('.info-altura').textContent;
	
	if(peso <= 0 || peso >= 700)
	{
		pacientes[i].querySelector('.info-imc').textContent = 'Peso inválido';
		pacientes[i].classList.add('invalido');
		//pacientes[i].style.backgroundColor: "red";
	}
	else if(altura <= 0 || altura >= 3.0)
	{
		pacientes[i].querySelector('.info-imc').textContent = 'Altura inválida';
		pacientes[i].classList.add('invalido');
	}
	else
		pacientes[i].querySelector('.info-imc').textContent = (peso/(altura*2)).toFixed(2);

	// toFixed(número) -> define número de casas decimais
}
// Fim Teceira Aula

// Quarta Aula
var form = document.querySelector('#form');
document.querySelector('#adicionar-paciente').addEventListener("click", function(event)
{
	// Sempre que usar o event tem que ser colocado como parametro da função
	// event serve para chamar funções padrões do DOM
	event.preventDefault();
	// preventDefault() esse tira o evento padrão do DOM 

	var elemento = [nome.value, peso, altura, gordura.value, '0'];
	var elementos = ['','','','',''];
	var pacienteTr = document.createElement('tr');
	var classes = ['info-nome','info-peso','info-altura','info-gordura','info-imc'];

	pacienteTr.classList.add('tabela-pacientes');

	//console.log(form.nome.value);
	// form.nome vai mostar o html do elemento que tenha como atributo 'name' recebendo 'nome'
	for (var i = 0; i <= 4; i++)
	{
	 	elementos[i] = document.createElement("td");
	 	elementos[i].classList.add(classes[i]);
	 	elementos[i].textContent = elemento[i];
	 	pacienteTr.appendChild(elementos[i]);
	}

	document.querySelector('#tabela-pacientes').appendChild(pacienteTr);
	// Limpar campos 
	form.reset();
});

function mostrarMensagem()
{
	// Exemplo de função 
	console.log("Olá, eu fui clicado");
}
// Fim Quarta Aula

// Quinta  Aula
// Separar em funções é uma boa pratica

// Criação de um objeto são variavel que representa alguma coisa do mundo real
function form()
{
	
	var paciente =
	{
		nome: form.nome.value,
		peso: form.peso.value,
		altura: form.altura.value,
		gordura: form.gordura.value, 
		imc: 10
	}
	return paciente;
}

// Com isso eleminamos a necessidade de um array dentro do evento click
// Fim Quinta Aula 

// Sexta Aula
// Como fazer um forEach
// variavel.forEach(function(nomeDoItem){})
/*elementos.forEach(function(elemento)
{
	// --- *****
});*/
// Acrecentar messagem no HTML
document.querySelector('#titulo-form').addEventListener("click", function(event)
{
	document.querySelector('#form').innerHTML = "Aqui está o novo texto!";
});
// Fim Sexta Aula 

// Setima Aula

// Fim Setima Aula