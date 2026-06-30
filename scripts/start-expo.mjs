import { execSync } from 'node:child_process';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

function getLocalIp() {
  const interfaces = os.networkInterfaces();

  for (const entries of Object.values(interfaces)) {
    for (const entry of entries ?? []) {
      if (entry.family === 'IPv4' && !entry.internal) {
        return entry.address;
      }
    }
  }

  return null;
}

const localIp = getLocalIp();
const useTunnel = process.argv.includes('--tunnel');
const expoArgs = useTunnel
  ? ['expo', 'start', '--tunnel', '-c']
  : ['expo', 'start', '--lan', '-c'];

const env = { ...process.env };

if (!useTunnel && localIp) {
  env.REACT_NATIVE_PACKAGER_HOSTNAME = localIp;
  console.log(`Starting Expo on LAN IP: ${localIp}`);
} else if (!useTunnel) {
  console.warn('Could not detect LAN IP. Falling back to tunnel mode.');
  expoArgs.splice(1, 3, 'start', '--tunnel', '-c');
}

try {
  execSync(`npx ${expoArgs.join(' ')}`, {
    stdio: 'inherit',
    env,
    cwd: projectRoot,
    shell: true,
  });
} catch {
  process.exit(1);
}
