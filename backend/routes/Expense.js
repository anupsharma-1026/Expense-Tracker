const express = require("express");
const router = express.Router();

// to create new user


router.post("/", require("./../controllers/Expense").createExpense);

router.get("/", require("./../controllers/Expense").getAllExpense);


router.get("/:userID", require("./../controllers/Expense").getExpense);


router.delete("/:userID", require("./../controllers/Expense").deleteExpense);


router.put("/:userID", require("./../controllers/Expense").updateExpense);


module.exports = router;

