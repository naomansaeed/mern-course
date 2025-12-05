import express from "express"
import { createNote, deleteNote, getAllNotes, updateNote } from "../controllers/notesController";

const router = express.Router();

router.get("/", getAllNotes
    //(req,res) => {
    //res.status(200).send("you got 10 notes");}
);

router.post("/", createNote
    //(req,res) => {
    //res.status(201).json({
    //    message:"Note created Successfully!"});}
    );

router.put("/:id", updateNote
    //(req,res) => {
    //res.status(200).json({
    //    message:"Note updated Successfully!"
    //});}
);

router.delete("/:id", deleteNote
    //(req,res) => {
    //res.status(200).json({
    //    message:"Note deleted Successfully!"
    //});}
);

export default router