import express from "express"
// const express = require("express")

const app = express ()

app.get("/api/notes", (req,res) => {
    res.status(200).send("you got 10 notes");
});

app.post("/api/notes", (req,res) => {
    res.status(201).json({
        message:"Note created Successfully!"
    })
})

app.put("/api/notes/:id", (req,res) => {
    res.status(200).json({
        message:"Note updated Successfully!"
    })
})

app.delete("/api/notes/:id", (req,res) => {
    res.status(200).json({
        message:"Note deleted Successfully!"
    })
})

app.listen(5001, () =>{
    console.log ("Server Started on PORT:5001");
});