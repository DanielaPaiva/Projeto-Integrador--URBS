package com.urbs.projeto.repository;


import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import com.urbs.projeto.model.Usuario;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
	public Optional<Usuario>findAllByUsuario(String usuario);
	/*public List<UsuarioModel>findAllByNomeContainingIgnoreCase(String nome);
	public Optional<UsuarioModel> findByUsuarioAndSenha(String usuario, String senha);*/

}
