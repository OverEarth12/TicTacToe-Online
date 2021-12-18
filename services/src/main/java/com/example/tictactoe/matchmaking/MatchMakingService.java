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
    public List<MatchMaking> findAllMatch(){
        return repository.findAll();
    }
    public MatchMaking findMatchById(String id){
        return repository.findById(id).get();
    }
    public MatchMaking createRoom(MatchMaking matchMaking) {
        return repository.save(matchMaking);
    }
    public MatchMaking updateTable(MatchMaking matchMaking) {
        return repository.save(matchMaking);
    }
}
