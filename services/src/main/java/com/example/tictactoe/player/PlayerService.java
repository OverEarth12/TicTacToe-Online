package com.example.tictactoe.player;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class PlayerService {
    private PlayerRepository repository;

    public PlayerService(PlayerRepository repository){
        this.repository = repository;
    }

    public Player findPlayerByName(String name){
        Player p = repository.findPlayerByName(name.toLowerCase());
        return p;
    }

    public Player newPlayer(Player player) {
        return repository.save(player);
    }

    public Player setRatingPlayer(Player player) {
        return repository.save(player);
    }

    public List<Player> findAllPlayer(){
        return repository.findAll();
    }
}
