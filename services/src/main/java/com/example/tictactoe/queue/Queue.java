package com.example.tictactoe.queue;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document("queue")
public class Queue {
    @Id
    private String _id;
    private String host_name;
    private String participant;

    public Queue(){}
    public Queue(String id, String name, String participant){
        this._id = id;
        this.host_name = name;
        this.participant = participant;
    }
}
