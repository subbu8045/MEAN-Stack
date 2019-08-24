import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import Friend from './friends.model';
import { runInNewContext } from 'vm';
const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/friend', { useNewUrlParser: true });

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB connection success.!');
});

router.route('/friends').get((req, res) => {
    Friend.find((err, friends) => {
        if (err)
            console.log(err);
        else
            res.json(friends);
    });
});

router.route('/friends/:id').get((req, res) => {
    Friend.findById(req.params.id, (err, friends) => {
        if (err)
            console.log(err);
        else
            res.json(friends);
    });
});

router.route('/friends/add').post((req, res) => {
    let friends = new Friend(req.body);
    friends.save().then(friends => {
        res.status(200).json({ 'Friend': 'Added Successfully' });
    })
        .catch(err => {
            res.status(400).send('Failed to create new record');
        });
});

router.route('/friends/update/:id').patch((req, res) => {
    Friend.findById(req.params.id, (err, friends) => {
        if (!friends)
            return next(new Error('could not load document'));
        else
        friends.name = req.body.name;
        friends.location = req.body.location;
        friends.epertise = req.body.expertise;
        friends.salary = req.body.salary;
        friends.birthday = req.body.birthday;

        friends.save().then(friends => {
            res.status(200).json('Update Done');
        })
            .catch(err => {
                res.status(400).send('Update Failed');
            });
    })
});

router.route('/friends/delete/:id').get((req, res) => {
    Friend.findByIdAndRemove({ _id: req.params.id }, (err, friends) => {
        if (err)
            console.log(err);
        else
            res.json('Remove Successfully');
    });
});

app.use('/', router);

app.listen(3000, () => console.log('Express running on 3000'));