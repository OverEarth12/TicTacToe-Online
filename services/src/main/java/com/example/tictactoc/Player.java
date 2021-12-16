package com.example.tictactoc;

import lombok.Data;
import lombok.experimental.SuperBuilder;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document("Player")
public class Player {
    @Id
    private String _id;
    private String name;

    public Player(String id, String name){
        this._id = id;
        this.name = name;
    }

    public String get_id() {
        return _id;
    }

    public String getName() {
        return name;
    }
}
