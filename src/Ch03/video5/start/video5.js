//Promise.all

import {Database} from "../../modules/mock-db";
const db = new Database();

const max = db.findUser({username:"maxkaplan"});
const sally = db.findUser({username:"sallysimon"});
const ben = db.findUser({username:"bensmith"});
const noone = db.findUser({username:"noone"});
