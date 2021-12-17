package com.example.tictactoe.queue;

import com.example.tictactoe.player.Player;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class QueueController {
    private ArrayList<Queue> queues;

    @Autowired
    private QueueService queueService;

    @RequestMapping(value = "/findAllQueue",method = RequestMethod.GET)
    public ResponseEntity<?> findAllQueue(){
        List<Queue> rooms = queueService.findAllQueue();
        if(rooms != null){
            return ResponseEntity.ok(rooms);
        }
        else{
            return ResponseEntity.ok("Empty Queue");
        }
    }

    @RequestMapping(value = "/newQueue",method = RequestMethod.GET)
    public ResponseEntity<?> newQueue(@RequestParam String name){
        Queue q = queueService.newQueue(new Queue(null, name, null));
            return ResponseEntity.ok(q);
    }

    @RequestMapping(value = "/joinQueue",method = RequestMethod.GET)
    public ResponseEntity<?> joinQueue(@RequestParam String id, @RequestParam String name, @RequestParam String participant){
        Queue q = queueService.joinQueue(new Queue(id, name, participant));
        return ResponseEntity.ok(q);
    }

    @RequestMapping(value = "/observerQueueById",method = RequestMethod.GET)
    public ResponseEntity<?> observerQueueById(@RequestParam String id){
        Queue q = queueService.observerQueueById(id);
        return ResponseEntity.ok(q);
    }
    @RequestMapping(value = "/deleteQueueById",method = RequestMethod.GET)
    public ResponseEntity<?> deleteQueueById(@RequestParam String id){
        queueService.deleteQueueById(id);
        System.out.println("Delete Queue Success");
        return ResponseEntity.ok("Delete Queue Success");
    }
}
