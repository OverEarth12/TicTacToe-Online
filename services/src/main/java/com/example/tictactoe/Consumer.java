package com.example.tictactoe;

import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Service;

@Service
public class Consumer {
    @RabbitListener(queues = "FieldQueue")
    public String queuesField(String message){
        System.out.println("Hello,"+ message);
        return message;
    }
}
