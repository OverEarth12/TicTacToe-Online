package com.example.tictactoe.queue;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document("queue")
public class Queue {
    @Id
    private String _id;
//    private String name;

    public Queue(){}
    public Queue(String id, String name){
        this._id = id;
//        this.name = name;
    }

    public String get_id() {
        return _id;
    }
//
//    public String getName() {
//        return name;
//    }
}
