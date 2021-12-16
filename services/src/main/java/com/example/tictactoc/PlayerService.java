package com.example.tictactoc;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PlayerService {
    @Autowired
    private PlayerRepository repository;

    public PlayerService(PlayerRepository repository){
        this.repository = repository;
    }

}
