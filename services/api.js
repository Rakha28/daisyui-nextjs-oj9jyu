// services/api.js
import express from 'express';
import { Pool } from 'pg';

const router = express.Router();

const pool = new Pool({
  user: 'laode.alif',
  host: 'ep-wild-shadow-492151.ap-southeast-1.aws.neon.tech',
  database: 'animehub',
  password: 'Fm8Wq6ITNhkH',
  port: '5432',
  ssl: true,
});

router.get('/getAllAnime', async (req, res) => {
  try {
    const query = 'SELECT * FROM allanime;';
    const client = await pool.connect();
    const result = await client.query(query);
    client.release();
    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Error fetching anime data:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

router.get('/getAnime/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const query = 'SELECT * FROM anime WHERE animeid = $1;';
    const client = await pool.connect();
    const result = await client.query(query, [id]);
    client.release();
    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error(`Error fetching anime with ID ${id}:`, error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

router.get('/getAnimeDetails/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const query = 'SELECT * FROM animedetail WHERE animeid = $1;';
    const client = await pool.connect();
    const result = await client.query(query, [id]);
    client.release();
    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error(`Error fetching anime details with ID ${id}:`, error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

router.get('/getAnimeReviews/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const query = 'SELECT * FROM animereview WHERE animeid = $1;';
    const client = await pool.connect();
    const result = await client.query(query, [id]);
    client.release();
    res.status(200).json(result.rows);
  } catch (error) {
    console.error(`Error fetching anime reviews with ID ${id}:`, error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

// Add more API routes as needed

export default router;
