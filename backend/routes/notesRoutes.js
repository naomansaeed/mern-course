import express from "express"
//import { createNote, deleteNote, getAllNotes, updateNote } from "../controllers/notesController";

const router = express.Router();

router.get("/", (req,res) => {
    res.status(200).send("you got 10 notes");}
    );

router.post("/", (req,res) => {
    res.status(201).json({
        message:"Note created Successfully!"});}
    );

router.put("/:id", (req,res) => {
    res.status(200).json({
        message:"Note updated Successfully!"
    });}
    );

router.delete("/:id", (req,res) => {
    res.status(200).json({
        message:"Note deleted Successfully!"
    });}
    );

export default router