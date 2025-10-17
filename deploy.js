#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');

console.log('🚀 Starting Maruthi Toolings Deployment...\n');

// Function to run commands
function runCommand(command, cwd = process.cwd()) {
  try {
    console.log(`📦 Running: ${command}`);
    execSync(command, { 
      stdio: 'inherit', 
      cwd: cwd 
    });
    console.log('✅ Command completed successfully\n');
  } catch (error) {
    console.error(`❌ Command failed: ${command}`);
    console.error(error.message);
    process.exit(1);
  }
}

// Install dependencies
console.log('📥 Installing dependencies...');
runCommand('npm install');
runCommand('npm install', path.join(__dirname, 'backend'));
runCommand('npm install', path.join(__dirname, 'frontend'));

// Build frontend
console.log('🔨 Building frontend...');
runCommand('npm run build', path.join(__dirname, 'frontend'));

console.log('✅ Build completed successfully!');
console.log('\n📋 Next steps:');
console.log('1. Backend: cd backend && npm start');
console.log('2. Frontend: cd frontend && npm start');
console.log('3. Or use: npm run dev (for development)');
