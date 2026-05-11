# Quick Start — ssvinfra.aitomate.cloud

## Deploy
```bash
git add .
git commit -m "your message"
git push origin master
```
GitHub Actions builds → copies `ssvinfra.html` as `index.html` → rsyncs to VPS.

Monitor at: **GitHub repo → Actions tab**

---

## Infrastructure (already configured)

| Item | Value |
|---|---|
| VPS IP | `72.60.103.200` |
| Deploy user | `root` |
| Web root | `/var/www/ssvinfra.aitomate.cloud` |
| SSH key | `~/.ssh/ssvinfra_deploy` (local) |
| GitHub Secrets | `SSH_PRIVATE_KEY`, `SSH_HOST`, `SSH_USERNAME`, `SSH_TARGET_DIR` |

---

## Edit the landing page

All content is in `ssvinfra.html` at the project root. Edit it and push to deploy.

---

## Troubleshooting

See [DEPLOYMENT_SETUP.md](DEPLOYMENT_SETUP.md) for detailed troubleshooting steps.
