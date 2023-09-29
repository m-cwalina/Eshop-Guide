import React  from 'react';
import ExportFile from './exportFile';
import Friends from './friends';

export default function Dashboard() {
  return (
    <div className='dashboard-container'>
      <Friends />
      <ExportFile />
    </div>
  );
}
