package no.itera.girlsday.controller;

import no.itera.girlsday.dto.Message;
import no.itera.girlsday.repository.MessageRepository;
import no.itera.girlsday.service.NotificationService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/message")
@Slf4j
public class ChatController {

  private final MessageRepository messageRepository;
  private final NotificationService notificationService;

  @Autowired
  public ChatController(
      MessageRepository messageRepository,
      NotificationService notificationService
  ) {
    this.messageRepository = messageRepository;
    this.notificationService = notificationService;
  }

  @PostMapping
  @ResponseStatus(HttpStatus.CREATED)
  public Message add(@RequestBody Message message) {
    Message saved = messageRepository.saveAndFlush(message);
    log.info("New message: {}", message);
    notificationService.messageAdded(saved);
    return saved;
  }

}
