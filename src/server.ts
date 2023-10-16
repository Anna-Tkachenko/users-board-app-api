import express from 'express';
import cors from 'cors';

const PORT = 5000;
const app = express();

const CLIENT_ORIGIN = 'http://localhost:3000';

app.use(cors({
    origin: CLIENT_ORIGIN,
}));

const users = [
    { id: 1, name: 'Joe Biden', carColorId: 5 },
    { id: 2, name: 'Elon Musk', carColorId: 4 },
    { id: 3, name: 'Pan Roman', carColorId: 2 },
];

const colors = [
    { id: 1, name: 'Black' },
    { id: 2, name: 'DeepPink' },
    { id: 3, name: 'Red' },
    { id: 4, name: 'Aquamarine' },
    { id: 5, name: 'Gold' },
    { id: 6, name: 'YellowGreen' },
    { id: 7, name: 'Yellow' },
];

app.get('/', (req, res) => {
    res.end('Hello world!');
});

app.get('/users', (req, res) => {
    res.send(users);
});

app.get('/users/:userId', (req, res) => {
    const { userId } = req.params;

    const user = users.find(({ id }) => id === +userId);

    if (!user) {
        res.sendStatus(404);

        return;
    }

    res.send(user);
});

app.get('/colors', (req, res) => {
    res.send(colors);
});

app.listen(PORT, () => {
    console.log(`API is running on http://localhost:${PORT}`);
});
