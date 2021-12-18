package com.example.tictactoe.matchmaking;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@Document("matchmaking")
public class MatchMaking {
    @Id
    private String _id;
    private List xIndex;
    private List oIndex;

    public MatchMaking(){}
    public MatchMaking(String id, List xIndex, List oIndex){
        this._id = id;
        this.xIndex = xIndex;
        this.oIndex = oIndex;
    }
}