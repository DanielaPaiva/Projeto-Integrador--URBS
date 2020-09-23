package com.urbs.projeto.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.urbs.projeto.model.UserLogin;
import com.urbs.projeto.model.Usuario;
import com.urbs.projeto.repository.UsuarioRepository;
import com.urbs.projeto.service.UsuarioService;

@RestController
@RequestMapping("/usuario")
@CrossOrigin(origins="*",allowedHeaders="*")
public class UsuarioController {
	
	@Autowired
	private UsuarioRepository repository;
	
	@Autowired
	private UsuarioService usuarioService;
	
	/*@GetMapping
	public ResponseEntity<List<UsuarioModel>>GetAll(){
		return ResponseEntity.ok(repository.findAll());
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<UsuarioModel> GetById(@PathVariable long id) {
		return repository.findById(id).map(resp -> ResponseEntity.ok(resp)).orElse(ResponseEntity.notFound().build());
	}*/

	@PostMapping("/login")
	public ResponseEntity<UserLogin>Autentication (@RequestBody Optional<UserLogin>user){
		return usuarioService.Login(user).map(resp->ResponseEntity.ok(resp))
				.orElse(ResponseEntity.status(HttpStatus.UNAUTHORIZED).build());
	}
	
	@PostMapping("/cadastrar")
	public ResponseEntity<Usuario>Post(@RequestBody Usuario usuario){
		return ResponseEntity.status(HttpStatus.CREATED).body(usuarioService.cadastrarUsuario(usuario));
	}
	
	/*@PutMapping
	public ResponseEntity<UsuarioModel>Put(@RequestBody UsuarioModel usuario){
		return ResponseEntity.ok(repository.save(usuario));
	}
	*/

}
