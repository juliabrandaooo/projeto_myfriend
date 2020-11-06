var login = { Usuario:  "julia.paula", Senha:"senha123" };
		function Logar()
		{			
			//window.location.href ="feed.html";
			var loginDigitado = document.getElementById("login").value;
			var senhaDigitada = document.getElementById("senha").value;
		
			if(loginDigitado ==login["Usuario"] && senhaDigitada == login["Senha"])
			{
				window.location.replace("feed.html");
			}
			else
			{
				alert("Usuário ou senha inválidos!");
			}
		}