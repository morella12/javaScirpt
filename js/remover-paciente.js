var pacientes = document.querySelectorAll(".paciente");

/*pacientes.forEach(function(pacientes)
{
	pacientes.querySelector('.remover').addEventListener('click', function()
	{
		var nome = pacientes.querySelector('.info-nome').textContent.toLocaleUpperCase();
		if(confirm('Deseja remover o paciente ' + nome + '?'))
		{
			alert('Paciente ' + nome + ' foi removido com sucesso!');
			pacientes.remove();
		}
	});
});*/

document.querySelector('table').addEventListener('click',function(event)
{
	// event também pega quem foi clicado target=alvos
	
	var paciente = event.target.parentNode.parentNode;
	var nome = paciente.querySelector('.info-nome').textContent.toLocaleUpperCase();
	
	if (event.target.parentNode.classList.contains('remover'))
	{
		if(confirm('Deseja remover o paciente ' + nome + '?'))
		{
			alert('Paciente ' + nome + ' foi removido com sucesso!');
			paciente.remove();
		}
	}
});