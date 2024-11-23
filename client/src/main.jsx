import React from 'react';
import dotnev from "dotenv";
import { createRoot } from 'react-dom/client';
import { globalStyles } from './styles/global';
import { AppRoutes } from './routes/routes.jsx';

globalStyles();
dotnev.config();

createRoot(document.getElementById('root')).render( <AppRoutes /> );