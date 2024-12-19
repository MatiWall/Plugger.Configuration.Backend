import express from 'express';
import configRoutes from './api/routes/configRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/api', configRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
