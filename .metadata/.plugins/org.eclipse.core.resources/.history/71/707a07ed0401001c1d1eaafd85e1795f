package br.com.vitoriacorp.eventdash.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.vitoriacorp.eventdash.dao.AlarmeDAO;
import br.com.vitoriacorp.eventdash.model.Alarme;

@RestController
public class AlarmController {
	
	// autowired é responsável por, além de buscar um objeto
	// que faz a implementação da interface, também cria 
	// a instanciação do objeto sem precisar da NEW
	@Autowired
	private AlarmeDAO dao;
	
// vamos criar um metodo que retorne todos os alarmes do banco
	@GetMapping("/alarmes")
	public ArrayList<Alarme> recuperarTodos(){
		// basicamente deve entrar em contato com db e fazer select
		
		ArrayList<Alarme> lista;
		lista = (ArrayList<Alarme>)dao.findAll();
		return lista;
	}
}
