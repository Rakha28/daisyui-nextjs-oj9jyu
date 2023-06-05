// pages/index.js
import React, { useEffect, useState } from 'react';
import Card from '../components/Card/Card';
import apiRouter from '../services/api';
import express from 'express';
import next from 'next';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use('/api', apiRouter);

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});

const HomePage = () => {
  const [animeData, setAnimeData] = useState([]);

  useEffect(() => {
    const fetchAnimeData = async () => {
      try {
        const response = await fetch('/api/getAllAnime');
        const data = await response.json();
        setAnimeData(data);
      } catch (error) {
        console.error('Error fetching anime data:', error);
      }
    };

    fetchAnimeData();
  }, []);

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-2xl font-bold mb-4">Anime List</h1>
      <div className="grid grid-cols-3 gap-4">
        {animeData.map((anime) => (
          <Card key={anime.animeid} anime={anime} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
