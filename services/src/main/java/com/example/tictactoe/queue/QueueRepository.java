package com.example.tictactoe.queue;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QueueRepository extends MongoRepository<Queue, String> {
//    @Query(value="{name:'?0'}")
//    public Player findByName(String name);
}