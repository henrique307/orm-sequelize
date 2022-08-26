const database = require("../models");

class PessoasController {
  static async GET_Pessoas(req, res) {
    const { id } = req.params;

    // PESQUISA UMA PESSOA

    if (id) {
      try {
        const pessoa = await database.Pessoas.findOne({
          where: {
            id: Number(id),
          },
        });
        return res.status(200).json(pessoa);
      } catch (err) {
        return res.status(500).json(err.message);
      }
    }

    try {
      const todasAsPessoas = await database.Pessoas.findAll();
      /*

        findAll: TAMBEM PODE SER USADO COM O OBJETO COM O
        PARAMETRO WHERE, ELE VAI TRAZER TODOS NO RANGE DA
        PESQUISA.

      */
      return res.status(200).json(todasAsPessoas);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async GET_Matricula(req, res) {
    const { estudanteId, matriculaId } = req.params;

    try {
      const umaMatricula = await database.Matriculas.findOne({
        where: {
          id: matriculaId,
          estudante_id: estudanteId,
        },
      });

      return res.status(200).json(umaMatricula);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async POST_Pessoa(req, res) {
    try {
      const pessoaCriada = await database.Pessoas.create(req.body);
      return res.status(200).json(pessoaCriada);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async POST_Matricula(req, res) {
    const { estudanteId } = req.params;
    const novaMatricula = { ...req.body, estudante_id: Number(estudanteId) };
    try {
      const novaMatriculaCriada = await database.Matriculas.create(
        novaMatricula
      );
      return res.status(200).json(novaMatriculaCriada);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async PUT_Pessoa(req, res) {
    const { id } = req.params;
    try {
      const antes = await database.Pessoas.findOne({ where: { id: id } });
      await database.Pessoas.update(req.body, { where: { id: id } });
      const nova = await database.Pessoas.findOne({ where: { id: id } });

      return res.status(200).json({ antes: antes, depois: nova });
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async PUT_Matricula(req, res) {
    const { estudanteId, matriculaId } = req.params;
    
    try {
      await database.Matriculas.update(req.body, {
        where: {
          id: matriculaId,
          estudante_id: estudanteId,
        },
      });
      const matriculaAtualizada = await database.Matriculas.findOne({
        where: {
          id: matriculaId,
        },
      });
      return res.status(200).json(matriculaAtualizada);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async DELETE_Pessoa(req, res) {
    try {
      const { id } = req.params;
      await database.Pessoas.destroy({ where: { id: id } });
      return res.status(200).json(`ID ${id} deletado com sucesso`);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async DELETE_Matricula(req, res) {
    try {
      const { matriculaId } = req.params;
      await database.Matriculas.destroy({ where: { id: matriculaId } });
      return res.status(200).json(`ID ${matriculaId} deletado com sucesso`);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }
}

/*

    C CREATE - POST
    R READ - GET
    U UPDATE - PUT
    D DELETE - DELETE

*/

module.exports = PessoasController;
