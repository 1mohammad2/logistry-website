
Deploy via VS Code & Git:
1. Open folder in VS Code.
2. Initialize git if needed:
   git init
   git add .
   git commit -m "Initial commit"
3. Create a GitHub repo and push:
   git remote add origin <REMOTE_URL>
   git branch -M main
   git push -u origin main
4. Enable GitHub Pages (Settings → Pages) on branch main root (/).
5. Or deploy to Netlify/Vercel by dragging the folder or connecting the Git repo.
