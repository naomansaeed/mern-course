import express from "express"
// const express = require("express")

const app = express ()

app.get("/api/notes", (req,res) => {
    res.status(200).send("you got 10 notes");
});

app.post("/api/notes", (req,res) => {
    res.status(201).json({
        message:"Post created Successfully!"
    })
})

app.put("/api/notes", (req,res) => {
    res.status(200).json({
        message:"Post updated Successfully!"
    })
})

app.listen(5001, () =>{
    console.log ("Server Started on PORT:5001");
});