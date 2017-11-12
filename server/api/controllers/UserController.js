/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  // Handles login requests
  auth: (req, res) => {
    if(!req.body.username || !req.body.password){
      return res.send(400, {status:'error',error:'Username or password is missing.'});
    }

    User.findOne({username: req.body.username, password: req.body.password}).exec(
      (error, user) => {
        if(user){
         User.update({id: user.id },{activeSession: this.makeSessionId()}).exec(
           (err) => {
             if(err){
               return res.json({
                 status: false,
                 error: err
               });
             } else{
               return res.json({
                 status: true,
                 username: user.username,
                 sessionId: user.activeSession
               });
             }
           }
         );
        }
        if(error) {
          return res.json({
            status: false,
            error: error
          });
        }
      }
    );

  },

  makeSessionId: () => {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 32; i++ ){
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  },


  getBySessionId: (req, res) => {
    User.findOne({activeSession: req.params['session']}).exec(
      (error, user) => {
        if(error){
          return res.json({
            status: false,
            error: err
          });
        }
        if(user){
          return res.json({
            status: true,
            username: user.username,
            sessionId: user.activeSession
          });
        }
      }
    );
  },

  logout: (req, res) => {
    User.findOne({activeSession: req.params['session']}).exec(
      (error, user) => {
        if(error){
          return res.json({
            status: false,
            error: err
          });
        }
        if(user){
          User.update({id: user.id },{activeSession: ''}).exec(
            (err) => {
              if(err){
                return res.json({
                  status: false,
                  error: err
                });
              } else{
                return res.json({
                  status: true,
                  username: user.username,
                });
              }
            }
          );
        }
      }
    );
  }

};

