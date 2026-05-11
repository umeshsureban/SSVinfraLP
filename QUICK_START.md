# Quick Start — Deploying ssvinfra.aitomate.cloud

## Requirements (one-time)
- [ ] SSH key pair generated and public key added to VPS (`72.60.103.200`)
- [ ] 4 GitHub Secrets set: `SSH_PRIVATE_KEY`, `SSH_HOST`, `SSH_USERNAME`, `SSH_TARGET_DIR`
- [ ] Target directory exists on VPS: `/var/www/ssvinfra.aitomate.cloud`
- [ ] Nginx configured to serve from `/var/www/ssvinfra.aitomate.cloud`

## Deploy
```bash
git add .
git commit -m "your message"
git push origin master
```
GitHub Actions builds Next.js → static `out/` → rsyncs to VPS automatically.

Monitor at: **GitHub repo → Actions tab**

## Docs
See [DEPLOYMENT_SETUP.md](DEPLOYMENT_SETUP.md) for full setup instructions.
