package com.example.tictactoc;

import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
public class MatchMakingController {
    private ArrayList<Player> queues;

    @Autowired
    private RabbitTemplate rabbitTemplate;
    @Autowired
    private MatchMakingService matchMakingService;

    @RequestMapping(value = "/matching/{id}",method = RequestMethod.GET)
    public ResponseEntity<?> matchMaking(@PathVariable("id") String id){
        Player p = matchMakingService.findPlayerById(id);
        if(p != null){
            queues.add(p);
            if(queues.size()%2 == 0){
                //เรียกส่วน grpc
                return ResponseEntity.ok("Match Found");
            }else{
                return ResponseEntity.ok("Please Wait");
            }


        }else{
            return ResponseEntity.ok("Not Found this id");
        }

    }
}
