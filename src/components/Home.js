import React from 'react';
import Reduce from './Reduce';
import Reuse from './Reuse';
import Recycle from './Recycle';
import './Home.css';

export default function Home() {
  return (
    <div className="home-container">
      <Reduce />
      <Reuse />
      <Recycle />
    </div>
  )
}
