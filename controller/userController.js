const express = require('express')
const Profile = require("../models/UserSchema")
//Sign Up
const signUp = async(req, res) => {
    const { name, email, password } = req.body;

    Profile.findOne({ email }, (err, user) => {
      if (err) {
        return res.status(400).json({
          error: 'Something went wrong. Please try again'
        });
      }

      if (user) {
        return res.status(400).json({
          error: 'Email is already in use'
        });
      }

    //   const hash = bcrypt.hashSync(password, 10);
    //   const newUser = new User({ name, email, password: hash });

      newUser.save((err, savedUser) => {
        if (err) {
          return res.status(400).json({
            error: 'Something went wrong. Please try again'
          });
        }

        // const token = jwt.sign({ _id: savedUser._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

        res.json({
          token,
          user: {
            _id: savedUser._id,
            name: savedUser.name,
            email: savedUser.email
          }
        });
      });
    });
}
