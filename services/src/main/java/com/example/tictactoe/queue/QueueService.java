package com.example.tictactoe.queue;

import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

@Service
public class QueueService {
    private QueueRepository repository;



    public QueueService(QueueRepository repository){
        this.repository = repository;
    }
//    public Player findPlayerById(String id){
//        if(playerRepository.existsById(id)) {
//            return playerRepository.findById(id).get();
//        }
//        else {
//            return null;
//        }
//    }

    public List<Queue> findAllPlayer(){
        return repository.findAll();
    }
}
