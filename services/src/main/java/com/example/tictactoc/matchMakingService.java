package com.example.tictactoc;

import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
public class matchMakingService {
    private ArrayList<Integer> queues;

    @Autowired
    private RabbitTemplate rabbitTemplate;

    @RequestMapping(value = "/matching/{id}",method = RequestMethod.GET)
    public String matchMaking(@PathVariable("id") int id){
        System.out.println("Test : " + id );
        queues.add(id);
        return "Success";
    }
}
