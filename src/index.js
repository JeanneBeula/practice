import { config } from 'dotenv';
import app from './sever';

config(); // This enables dotenv configulations

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Practice', `Server is running on http://localhost:${port}`));
export default app;
