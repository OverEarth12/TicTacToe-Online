package com.example.tictactoe.queue;

import org.springframework.stereotype.Service;

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
