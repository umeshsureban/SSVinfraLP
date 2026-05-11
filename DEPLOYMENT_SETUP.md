# Deployment Setup — ssvinfra.aitomate.cloud

## Overview
This project auto-deploys to `ssvinfra.aitomate.cloud` (Hostinger VPS at `72.60.103.200`) via GitHub Actions on every push to `master`. Next.js is built to a static `out/` folder and rsynced to the VPS — no Node.js server required.

---

## One-Time Setup

### 1. Generate SSH Key Pair (on your local machine)
```bash
ssh-keygen -t ed25519 -C "github-deploy-ssvinfra" -f ~/.ssh/ssvinfra_deploy
```
This creates:
- `~/.ssh/ssvinfra_deploy` — **private key** (goes into GitHub Secrets)
- `~/.ssh/ssvinfra_deploy.pub` — **public key** (goes on the VPS)

### 2. Add Public Key to VPS
SSH into the VPS and append the public key:
```bash
ssh root@72.60.103.200
mkdir -p ~/.ssh
echo "PASTE_PUBLIC_KEY_CONTENTS_HERE" >> ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
```
Or use **Hostinger hPanel → VPS → SSH Keys** to add it via the UI.

### 3. Create Target Directory on VPS
```bash
ssh root@72.60.103.200
mkdir -p /var/www/ssvinfra.aitomate.cloud
```

### 4. Configure Nginx on VPS
Create a site config pointing to the target directory:
```nginx
server {
    listen 80;
    server_name ssvinfra.aitomate.cloud;
    root /var/www/ssvinfra.aitomate.cloud;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```
Enable and reload:
```bash
ln -s /etc/nginx/sites-available/ssvinfra.aitomate.cloud /etc/nginx/sites-enabled/
nginx -t && systemctl reload nginx
```

### 5. Add GitHub Secrets
Go to: **GitHub repo → Settings → Secrets and variables → Actions → New repository secret**

Add all four secrets:

| Secret Name | Value |
|---|---|
| `SSH_PRIVATE_KEY` | Contents of `~/.ssh/ssvinfra_deploy` (entire private key file) |
| `SSH_HOST` | `72.60.103.200` |
| `SSH_USERNAME` | Your VPS SSH username (e.g. `root` or `ubuntu`) |
| `SSH_TARGET_DIR` | `/var/www/ssvinfra.aitomate.cloud` |

### 6. Trigger First Deployment
Push any commit to `master`. Watch it run under **GitHub repo → Actions**.

---

## Updating the Website
Just push to `master`. GitHub Actions handles everything automatically.

---

## Troubleshooting

**Permission denied (publickey)**
- Verify the public key is in `~/.ssh/authorized_keys` on the VPS
- Verify `SSH_PRIVATE_KEY` secret contains the full private key (including `-----BEGIN` and `-----END` lines)

**rsync: failed to set permissions**
- The SSH user may not own the target directory. Run:
  ```bash
  chown -R root: /var/www/ssvinfra.aitomate.cloud
  ```

**No such file or directory**
- The target directory doesn't exist on the VPS. Create it:
  ```bash
  mkdir -p /var/www/ssvinfra.aitomate.cloud
  ```

**Build fails: `output: export` error**
- Ensure no API routes or server-only features are used (they're incompatible with static export)

**Workflow not triggering**
- Confirm the push is to `master` and the workflow file is committed to that branch
