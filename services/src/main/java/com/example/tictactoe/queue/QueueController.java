package com.example.tictactoe.queue;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class QueueController {
    private ArrayList<Queue> queues;

//    @Autowired
//    private RabbitTemplate rabbitTemplate;
    @Autowired
    private QueueService playerService;

//    @RequestMapping(value = "/matching/{id}",method = RequestMethod.GET)
//    public ResponseEntity<?> matchMaking(@PathVariable("id") String id){
//        Player p = matchMakingService.findPlayerById(id);
//        if(p != null){
//            queues.add(p);
//            if(queues.size()%2 == 0){
//                //เรียกส่วน grpc
//                return ResponseEntity.ok("Match Found");
//            }else{
//                return ResponseEntity.ok("Please Wait");
//            }
//
//
//        }else{
//            return ResponseEntity.ok("Not Found this id");
//        }
//    }
    @RequestMapping(value = "/qfindAll",method = RequestMethod.GET)
    public ResponseEntity<?> matchMaking(){
        List<Queue> players = playerService.findAllPlayer();
            return ResponseEntity.ok(players);
    }
}
