import express from 'express';

const app = express();

app.use(express.json());

app.listen(8800, () => {
    console.log('Server started on port 8800');
});