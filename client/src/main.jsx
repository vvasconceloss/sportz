import React from 'react';
import { createRoot } from 'react-dom/client';
import { globalStyles } from './styles/global';
import { AppRoutes } from './routes/routes.jsx';

globalStyles();

createRoot(document.getElementById('root')).render( <AppRoutes /> );