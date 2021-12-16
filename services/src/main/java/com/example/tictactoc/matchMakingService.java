package com.example.tictactoc;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class MatchMakingService {
//    @Autowired
//    private QueueRepository queueRepository;
    @Autowired
    private PlayerRepository playerRepository;

    public MatchMakingService(PlayerRepository playerRepository){
//        this.queueRepository = queueRepository;
        this.playerRepository = playerRepository;
    }
    public Player findPlayerById(String id){
        if(playerRepository.existsById(id)) {
        return playerRepository.findById(id).get();}
        else {
            return null;
        }
    }
//    public Player addQueue(Player player){
//        return queueRepository.save(player);
//    }
//    public boolean deleteQueue(Player player){
//        try {queueRepository.delete(player); return true;}
//        catch (Exception e) {return false;}
//    }
//    public boolean checkQueue(){
//        int numQueue = (int)queueRepository.count();
//        return numQueue >= 2;
//    }
}
