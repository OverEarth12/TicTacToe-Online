package com.example.tictactoe.player;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface PlayerRepository extends MongoRepository<Player, String> {
    @Query(value="{FormatName:'?0'}")
    public Player findPlayerByName(String FormatName);
}