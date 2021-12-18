package com.example.tictactoe;

import com.example.tictactoe.matchmaking.MatchMaking;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
public class Consumer {
    private List<List<Integer>> winPattern = Arrays.asList(
            Arrays.asList(0,1,2),
            Arrays.asList(3,4,5),
            Arrays.asList(6,7,8),
            Arrays.asList(0,3,6),
            Arrays.asList(1,4,7),
            Arrays.asList(2,5,8),
            Arrays.asList(0,4,8),
            Arrays.asList(2,4,6)
    );
    @RabbitListener(queues = "ConclusionQueue")
    public int checkWinner(MatchMaking room){
        int winner = -1;
        for (List win : winPattern) {
            if(room.getXIndex().containsAll(win)){
                winner = 0;
                break;
            }
            if(room.getOIndex().containsAll(win)){
                winner = 1;
                break;
            }
        }
        return winner;
    }
}
