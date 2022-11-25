package org.serratec.repository;

import org.serratec.domain.Produto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProdutoRepository extends JpaRepository<Produto, Long> {
	Produto getById(Long id);

	Produto findByDescricao(String descricao);
}
