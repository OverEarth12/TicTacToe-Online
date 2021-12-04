package com.example.tictactoc;

import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Service;

@Service
public class Consumer {
    @RabbitListener(queues = "MatchMakingQueue")
    public void findRoom(int id){
        System.out.println(id);
    }
}
