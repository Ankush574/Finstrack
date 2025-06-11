const express = require('express');
const cors = require('cors');
const postRoutes = require('./routes/postRoutes');

const app = express();
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json());

app.use('/api/posts', postRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));