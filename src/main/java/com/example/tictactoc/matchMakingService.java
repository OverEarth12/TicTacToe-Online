package com.example.tictactoc;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
public class matchMakingService {
    private ArrayList<Integer> queues;

    @RequestMapping(value = "/matching/{id}",method = RequestMethod.GET)
    public void matchMaking(@PathVariable("id") int id){
        queues.add(id);
    }
}
