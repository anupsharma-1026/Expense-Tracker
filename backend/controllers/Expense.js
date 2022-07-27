const userModel = require("./../models/Expense");

// to create new user

exports.createExpense = async (req, res) => {
    try {
        const users = await new userModel(req.body).save();
        res.json(users);
    }

    catch (err) {
        res.json({ err });
    }
}

exports.getAllExpense = async (req, res) => {
    try {
        const users = await userModel.find();
        res.json(users);
    }
    catch (err) {
        res.json({ err });
    }
}

exports.getExpense = async (req, res) => {
    try {
        const users = await userModel.find({ _id: req.params.userID });
        res.json(users);
    }
    catch (err) {
        res.json({ err });
    }
}

exports.deleteExpense = (req,res)=>{

    userModel.findOneAndDelete({_id:req.params.userID},(err,data)=>{
        if(err){
            res.json({err});

        }
        else{
            res.json(data);

        }
    });

}

exports.updateExpense = (req,res)=>{

userModel.findOneAndUpdate({_id:req.params.userID},req.body,{new:true},(err,data)=>{
    if(err){
        res.json({err});
    }
    else{
        res.json(data);
    }
});
}



