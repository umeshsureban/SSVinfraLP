# Deployment Setup — ssvinfra.aitomate.cloud

## Overview

Auto-deploys to `ssvinfra.aitomate.cloud` (Hostinger VPS at `72.60.103.200`) on every push to `master`. Next.js builds a static `out/` folder, `ssvinfra.html` is copied over as `index.html`, and the whole thing is rsynced to the VPS — no Node.js server required.

---

## Current Status

| Item | Status | Value |
|---|---|---|
| VPS | Running | `72.60.103.200` (Ubuntu 24.04) |
| SSH key | Configured | `~/.ssh/ssvinfra_deploy` |
| GitHub Secrets | Set | See below |
| Web root | Exists | `/var/www/ssvinfra.aitomate.cloud` |
| Nginx | Configured | Serves from web root |

### GitHub Secrets

| Secret | Value |
|---|---|
| `SSH_PRIVATE_KEY` | Contents of `~/.ssh/ssvinfra_deploy` |
| `SSH_HOST` | `72.60.103.200` |
| `SSH_USERNAME` | `root` |
| `SSH_TARGET_DIR` | `/var/www/ssvinfra.aitomate.cloud` |

---

## How the Pipeline Works

```
git push master
      ↓
GitHub Actions (.github/workflows/deploy.yml)
      ↓
npm ci → npm run build          # Next.js static export → out/
      ↓
cp ssvinfra.html out/index.html # Landing page becomes the root
      ↓
rsync out/ → root@72.60.103.200:/var/www/ssvinfra.aitomate.cloud/
```

---

## Re-setup from Scratch (if needed)

### 1. Generate SSH Key Pair
```bash
ssh-keygen -t ed25519 -C "github-deploy" -f ~/.ssh/ssvinfra_deploy
```

### 2. Add Public Key to VPS
Via Hostinger hPanel browser terminal:
```bash
echo "PASTE_PUBLIC_KEY_HERE" >> /root/.ssh/authorized_keys
chmod 600 /root/.ssh/authorized_keys
```

### 3. Create Web Root on VPS
```bash
mkdir -p /var/www/ssvinfra.aitomate.cloud
chown -R root:root /var/www/ssvinfra.aitomate.cloud
```

### 4. Add GitHub Secrets
Go to: **GitHub repo → Settings → Secrets and variables → Actions**

Add the 4 secrets listed in the table above.

---

## Troubleshooting

**Permission denied (publickey)**
- Verify the public key is in `/root/.ssh/authorized_keys` on the VPS
- Verify `SSH_PRIVATE_KEY` secret contains the full private key including `-----BEGIN` and `-----END` lines
- Use `printf '%s\n'` not `echo` when writing the key in the workflow (already fixed)

**Build fails: `output: export` error**
- Do not add API routes (`app/route.ts`) or any server-only Next.js features — they are incompatible with static export

**rsync: permission denied on target**
```bash
chown -R root: /var/www/ssvinfra.aitomate.cloud
```

**No such file or directory**
```bash
mkdir -p /var/www/ssvinfra.aitomate.cloud
```

**Workflow not triggering**
- Confirm the push is to `master` and `deploy.yml` is committed to that branch
