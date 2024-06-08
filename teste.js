const bcrypt = require('bcryptjs');
const express = require('express');
const app = express();
app.use(express.json());

const password = 'Password';
const users = [

]

app.post('/singup', async (req, res) => {
    const {username, password} = req.body
    const hash = await bcrypt.hash(password, 13)
    users.push({
        username,
        password: hash
    })
    res.send('ok')
    console.log(users)
})

app.post('/login', async (req, res) => {
    const {username, password} = req.body
    const user = users.find(u => u.username ===  username) //no database aqui é só encontrar o username, varia entre sql e mongodb
    if (!user) {
        res.send("wrong username")
        return;
    }
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
        res.send("wrong password")
        return
    }
    
    res.send('logado.');
})

app.listen(8080, () => console.log("listening on port: 8080"));
