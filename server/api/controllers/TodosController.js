/**
 * TodosController
 *
 * @description :: Server-side logic for managing todos
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  get: (req, res) => {
    var skip = req.query.skip;
    var limit = req.query.limit;

    Todo.find().exec(
      (error, records) => {
        if(records){
          return res.json({
            status: true,
            todos: records
          });
        }
        if(error){
          return res.json({
            status: false,
            error: error
          });
        }
      }
    );
  },

  insertOrUpdate: (req, res) => {
    var todoObj = req.body.todo;

    Todo.updateOrCreate(todoObj.id,todoObj).exec(
      (error, records) => {
        if(records){
          return res.json({
            status: true,
            todos: records
          });
        }
        if(error){
          return res.json({
            status: false,
            error: error
          });
        }
      }
    );
  },

  delete: (req, res) => {
    Todo.destroy({id: req.body.id}).exec(
      (error, records) => {
        if(records){
          return res.json({
            status: true,
            todos: records
          });
        }
        if(error){
          return res.json({
            status: false,
            error: error
          });
        }
      }
    );
  }
};

