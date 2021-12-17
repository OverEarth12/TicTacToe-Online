package com.example.tictactoe;

import com.example.tictactoe.player.PlayerRepository;
import com.example.tictactoe.queue.QueueRepository;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@EnableMongoRepositories(basePackageClasses = {PlayerRepository.class, QueueRepository.class})
public class TictactoeApplication {
    public static void main(String[] args) {
        SpringApplication.run(TictactoeApplication.class, args);
    }

}
