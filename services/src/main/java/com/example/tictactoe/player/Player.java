package com.example.tictactoe.player;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document("player")
public class Player {
    @Id
    private String _id;
    private String DisplayName;
    private String FormatName;
    private Double rating;

    public Player(){}
    public Player(String id, String Displayname, Double rating){
        this._id = id;
        this.DisplayName = Displayname;
        this.FormatName = DisplayName.toLowerCase();
        this.rating = rating;
    }
}
