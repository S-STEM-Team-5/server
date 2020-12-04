const express = require('express');
const router = express.Router();
const Account = require('../model/accountModel.js');

//Getting all accounts
router.get('/', async (req, res) => {
  try {
    const account = await Account.find();
    res.json(account);
  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
});

//Getting account(s) by email
router.get('/:email', getAccount, (req, res) => {
  res.send(res.account[0]);
});

//Getting account(s) by email
router.post('/signin', getAccountVerification, (req, res) => {
});


//Creating account
router.post('/', async (req, res) => {
  const account = new Account({
    accType: req.body.accType,
    email: req.body.email,
    password: req.body.password,
    name: {
      fname: req.body.name.fname,
      lname: req.body.name.lname
    }
  });
  try {
    const newAccount = await account.save();
    res.status(201).json(account);
  } catch (err) {
    res.status(200).json({
      message: 'Account already exists'
    });
  }
});

//Deleting Account
router.delete('/:email', getAccount, async (req, res) => {
  try {
    await res.account[0].remove();
    res.json('Deleted Account');
  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
});

//Middleware
async function getAccount(req, res, next) {
  let account;
  try {
    account = await Account.find({
      email: req.params.email
    });
    if (account == null || account.length == 0) {
      return res.status(404).json({
        message: 'Cannot find Account'
      });
    }
  } catch (err) {
    return res.status(500).json({
      message: err.message
    });
  }
  res.account = account;
  next();
}

async function getAccountVerification(req, res, next) {
  let account;
  try {
    account = await Account.find({
      email: req.body.email,
      password: req.body.password
    });
    if (account == null || account.length == 0) {
      return res.status(200).json({
        message: 'Cannot find Account'
      });
    }
    else {
      return res.json({
        message: 'Account Verified',
        accType: account[0].accType
      });
    }
  } catch (err) {
    return res.status(500).json({
      message: err.message
    });
  }
  res.account = account;
  next();
}

module.exports = router;
