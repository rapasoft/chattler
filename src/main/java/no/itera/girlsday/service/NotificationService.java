package no.itera.girlsday.service;

import no.itera.girlsday.dto.Message;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

@Service
public class NotificationService {

  private final SimpMessagingTemplate simpMessagingTemplate;

  @Autowired
  public NotificationService(SimpMessagingTemplate simpMessagingTemplate) {
    this.simpMessagingTemplate = simpMessagingTemplate;
  }

  public void messageAdded(Message message) {
    simpMessagingTemplate.convertAndSend("/chat/message", message);
  }

}
