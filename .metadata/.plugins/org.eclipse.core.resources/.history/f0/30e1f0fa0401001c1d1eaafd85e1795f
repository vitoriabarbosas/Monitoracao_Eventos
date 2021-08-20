package br.com.vitoriacorp.eventdash.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.vitoriacorp.eventdash.dao.UsuarioDAO;
import br.com.vitoriacorp.eventdash.model.Usuario;

@RestController
public class UsuarioController {

	@Autowired
	private UsuarioDAO dao;
	// quero fazer um método de login, para isso preciso enviar infos para o backend
	
	@PostMapping ("/login")
	// ResponseEntity retorna um status http
	public ResponseEntity<Usuario> fazerlogin(@RequestBody Usuario dadosLogin) {
		Usuario res = dao.findByEmailOrRacf(dadosLogin.getEmail(), dadosLogin.getRacf());
		if(res != null) {
			if(res.getSenha().equals(dadosLogin.getSenha())) {
				return ResponseEntity.ok(res);
				//cria uma build com status ok, e retorna res
			}
		}
	return ResponseEntity.status(403).build(); 
	//cria uma build com status 403, que é Acesso negado
	}
}

