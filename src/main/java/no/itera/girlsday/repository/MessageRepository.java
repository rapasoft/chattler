package no.itera.girlsday.repository;

import no.itera.girlsday.dto.Message;

import org.springframework.data.jpa.repository.JpaRepository;

public interface MessageRepository extends JpaRepository<Message, Long> {
}
