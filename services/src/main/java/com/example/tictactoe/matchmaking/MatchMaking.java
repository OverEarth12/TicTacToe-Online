package com.example.tictactoe.matchmaking;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document("matchmaking")
public class MatchMaking {
    @Id
    private String _id;
    private String host_name;

    public MatchMaking(){}
    public MatchMaking(String id, String host_name){
        this._id = id;
        this.host_name = host_name;
    }

    public String get_id() {
        return _id;
    }
//
//    public String getName() {
//        return name;
//    }
}
