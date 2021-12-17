package com.example.tictactoe.player;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class PlayerController {
    @Autowired
    private PlayerService playerService;

    @RequestMapping(value = "/findPlayerByName",method = RequestMethod.GET)
    public ResponseEntity<?> findPlayerByName(@RequestParam String name){
        Player p = playerService.findPlayerByName(name);
        if (p != null){
            return ResponseEntity.ok(p);
        }
        else{
            return ResponseEntity.ok("Player does not exist");
        }
    }

    @RequestMapping(value = "/findAllPlayer",method = RequestMethod.GET)
    public ResponseEntity<?> findAllPlayer(){
        List<Player> players = playerService.findAllPlayer();
        if(players != null){
            return ResponseEntity.ok(players);
        }
        else{
            return ResponseEntity.ok("Empty Player");
        }

    }

    @RequestMapping(value = "/new-player",method = RequestMethod.GET)
    public ResponseEntity<?> newPlayer(@RequestParam String name){
        Player p = playerService.newPlayer(new Player(null, name, 0.0));
        return ResponseEntity.ok(p);
    }

    @RequestMapping(value = "/SetScore-point",method = RequestMethod.GET)
    public ResponseEntity<?> SetScorePoint(@RequestParam Double point, @RequestParam String name){
        Player findPlayer = playerService.findPlayerByName(name);
        if (findPlayer != null){
            Player p = playerService.setRatingPlayer(new Player(findPlayer.get_id(), findPlayer.getDisplayName(), findPlayer.getRating()+point));
            return ResponseEntity.ok(p);
        }
        else{
            return ResponseEntity.ok("Player does not exist");
        }
    }
}
