package com.example.tictactoe.matchmaking;

import com.example.tictactoe.queue.Queue;
import com.example.tictactoe.queue.QueueRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MatchMakingService {
    private MatchMakingRepository repository;

    public MatchMakingService(MatchMakingRepository repository){
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

    public List<Queue> findAllRoom(){
        return repository.findAll();
    }
}
