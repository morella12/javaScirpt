var pacientes = document.querySelectorAll(".paciente");

pacientes.forEach(function(pacientes)
{
	pacientes.querySelector('.editar').addEventListener('click', function()
	{
		var nome = pacientes.querySelector('.info-nome').textContent;
		var voltar = pacientes.innerHTML;
		pacientes.classList.add('edite');
		pacientes.innerHTML = '<tr class="paciente" >' +
							  '<td class="info-nome">'+ nome +'</td>' +
							  '<form id="form">' +
								'<td class="info-peso"><input id="peso" name="peso" type="text" placeholder="digite o peso do seu paciente" class="campo campo-medio" autofocus></td>' +
								'<td class="info-altura"><input id="altura" name="altura" type="text" placeholder="digite a altura do seu paciente" class="campo campo-medio"></td>' +
								'<td class="info-gordura"><input id="gordura" type="text" placeholder="digite a porcentagem de gordura do seu paciente" class="campo campo-medio"></td>' +
								'<td class="info-imc">0</td>' +
								'<td class="savlar"> ' +
								'	<form id="form"><b class="ed"><i class="fas fa-check"></i> Salvar</b>' +
								'</td>' +
								'<td class="cancelar">' +
									'<i class="far fa-trash-alt ed"></i><b class="ed"> Cancelar</b>' +
								'</td>' +
							  '</form>'+
						    '</tr>';
		pacientes.querySelector('.cancelar').addEventListener('click', function()
		{
			pacientes.classList.remove('edite');
			pacientes.innerHTML = voltar;
		});	
	});
});