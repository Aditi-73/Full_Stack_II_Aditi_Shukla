package com.AML_2B.Demo_WebSocket.Controller;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.AML_2B.Demo_WebSocket.Model.Message;

@Controller
public class ChatController {
    private final List<Message> chatHistory = new CopyOnWriteArrayList<>();

    @MessageMapping("/chat")          // client sends here
    @SendTo("/topic/messages")        // broadcast to all
    public Message sendMessage(Message message) {
        if (message.getType() == null || message.getType().isBlank()) {
            message.setType("CHAT");
        }

        chatHistory.add(message);
        System.out.println(message.getSender()+" : "+ message.getContent());
        return message;
    }

    @MessageMapping("/join")
    @SendTo("/topic/messages")
    public Message userJoined(Message message) {
        String sender = message.getSender() == null ? "Unknown" : message.getSender().trim();

        Message joinNotification = new Message();
        joinNotification.setSender("System");
        joinNotification.setContent(sender + " joined the chat");
        joinNotification.setType("JOIN");

        chatHistory.add(joinNotification);
        return joinNotification;
    }

    @MessageMapping("/clear")
    @SendTo("/topic/messages")
    public Message clearChat() {
        chatHistory.clear();

        Message clearEvent = new Message();
        clearEvent.setSender("System");
        clearEvent.setContent("Chat cleared");
        clearEvent.setType("CLEAR");
        return clearEvent;
    }

    @GetMapping("/api/messages")
    @ResponseBody
    @CrossOrigin(origins = "*")
    public List<Message> getHistory() {
        return new ArrayList<>(chatHistory);
    }
}
