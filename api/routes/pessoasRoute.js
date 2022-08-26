const Router = require("express").Router; // === const { Router } = require('express')
const PessoasController = require("../controllers/PessoasController");

const router = Router();

router
  .get("/pessoas/:id", PessoasController.GET_Pessoas)
  .get("/pessoas", PessoasController.GET_Pessoas)
  .get("/pessoas/:estudanteId/matricula/:matriculaId",PessoasController.GET_Matricula)
  .post("/pessoas", PessoasController.POST_Pessoa)
  .post("/pessoas/:estudanteId/matricula", PessoasController.POST_Matricula)
  .put("/pessoas/:id", PessoasController.PUT_Pessoa)
  .put("/pessoas/:estudanteId/matricula/:matriculaId", PessoasController.PUT_Matricula)
  .delete("/pessoas/:id", PessoasController.DELETE_Pessoa)
  .delete("/pessoas/:estudanteId/matricula/:matriculaId", PessoasController.DELETE_Matricula)

module.exports = router;
