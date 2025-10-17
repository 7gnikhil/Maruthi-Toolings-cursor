#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');

console.log('🚀 Starting Maruthi Toolings...\n');

// Start backend
console.log('🔧 Starting backend server...');
const backend = spawn('npm', ['start'], {
  cwd: path.join(__dirname, 'backend'),
  stdio: 'inherit',
  shell: true
});

backend.on('error', (error) => {
  console.error('❌ Backend failed to start:', error);
});

backend.on('close', (code) => {
  console.log(`Backend process exited with code ${code}`);
});

// Handle process termination
process.on('SIGINT', () => {
  console.log('\n🛑 Shutting down...');
  backend.kill();
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Shutting down...');
  backend.kill();
  process.exit(0);
});
