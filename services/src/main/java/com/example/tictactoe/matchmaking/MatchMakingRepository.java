package com.example.tictactoe.matchmaking;

import com.example.tictactoe.queue.Queue;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MatchMakingRepository extends MongoRepository<Queue, String> {
//    @Query(value="{name:'?0'}")
//    public Player findByName(String name);
}