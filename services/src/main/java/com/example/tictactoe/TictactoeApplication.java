package com.example.tictactoe;

import com.example.tictactoe.matchmaking.MatchMakingRepository;
import com.example.tictactoe.player.PlayerRepository;
import com.example.tictactoe.queue.QueueRepository;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@SpringBootApplication
@EnableMongoRepositories(basePackageClasses = {PlayerRepository.class, QueueRepository.class, MatchMakingRepository.class})
public class TictactoeApplication {
    public static void main(String[] args) {
        SpringApplication.run(TictactoeApplication.class, args);
    }
    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurerAdapter() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**").allowedOrigins("*");
            }
        };
    }

}
