var pacientes = document.querySelectorAll(".paciente");

pacientes.forEach(function(pacientes)
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
	pacientes.addEventListener('click',function()
	{
		console.log(this);
	});
});