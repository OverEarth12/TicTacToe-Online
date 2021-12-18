package com.example.tictactoe.matchmaking;

import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
public class MatchMakingController {
    @Autowired
    private MatchMakingService matchMakingService;
    @Autowired
    private RabbitTemplate rabbitTemplate;

    @RequestMapping(value = "/createMatch", method = RequestMethod.GET)
    public ResponseEntity<?> createMatch(@RequestParam String room_id){
        List<Integer> xIndex = new ArrayList<>();
        List<Integer> oIndex = new ArrayList<>();
        MatchMaking m = matchMakingService.createRoom(new MatchMaking(room_id, xIndex, oIndex));
        return ResponseEntity.ok(m);
    }

    @RequestMapping(value = "/updateTable", method = RequestMethod.GET)
    public ResponseEntity<?> updateTable(@RequestParam String room_id, @RequestParam Integer onXO, @RequestParam Integer indexXO){
        List<Object> xIndex = new ArrayList<>();
        List<Object> oIndex = new ArrayList<>();
        MatchMaking getTable = matchMakingService.findMatchById(room_id);

        for (Object index : getTable.getXIndex()) {
            xIndex.add(index);
        }
        for (Object index : getTable.getOIndex()) {
            oIndex.add(index);
        }
        if(onXO == 1){
            oIndex.add(indexXO);
        }
        else{
            xIndex.add(indexXO);
        }
        MatchMaking m = matchMakingService.updateTable(new MatchMaking(room_id, xIndex, oIndex));
        return ResponseEntity.ok(m);
    }

    @RequestMapping(value = "/findMatchById", method = RequestMethod.GET)
    public ResponseEntity<?> findMatchById(@RequestParam String room_id){
        MatchMaking m = matchMakingService.findMatchById(room_id);
        if(m != null){
            return ResponseEntity.ok(m);
        }
        else{
            return ResponseEntity.ok("Not Found This Match");
        }
    }
    @RequestMapping(value = "/checkWinner", method = RequestMethod.GET)
    public ResponseEntity<?> checkWinner(@RequestParam String room_id){
        MatchMaking getTable = matchMakingService.findMatchById(room_id);
//        List<List<Integer>> winPattern = Arrays.asList(
//                Arrays.asList(0,1,2),
//                Arrays.asList(3,4,5),
//                Arrays.asList(6,7,8),
//                Arrays.asList(0,3,6),
//                Arrays.asList(1,4,7),
//                Arrays.asList(2,5,8),
//                Arrays.asList(0,4,8),
//                Arrays.asList(2,4,6)
//        );
//        String winner = null;
//        for (List win : winPattern) {
//            if(getTable.getXIndex().containsAll(win)){
//                winner = "X";
//                break;
//            }
//            if(getTable.getOIndex().containsAll(win)){
//                winner = "O";
//                break;
//            }
//        }
        Object winner = rabbitTemplate.convertSendAndReceive("Direct", "conclusion",getTable);
//        System.out.println(getTable);
        return ResponseEntity.ok((int)winner);
    }
}
