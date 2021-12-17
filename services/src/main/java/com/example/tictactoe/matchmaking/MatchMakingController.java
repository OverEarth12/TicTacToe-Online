package com.example.tictactoe.matchmaking;

import com.example.tictactoe.queue.Queue;
import com.example.tictactoe.queue.QueueService;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class MatchMakingController {
    private ArrayList<com.example.tictactoe.queue.Queue> queues;

    @Autowired
    private MatchMakingService matchMakingService;

    @RequestMapping(value = "/in-game", method = RequestMethod.POST)
    public String playField(@RequestParam String Room_id, @RequestParam Integer Index){
//        Object m = rabbitTemplate.convertSendAndReceive("Direct","Field",message);
//        return (String)m;
        return "200";
    }
}
