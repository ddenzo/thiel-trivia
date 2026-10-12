# Tomcat Trivia
A responsive, accessible Thiel College trivia game with 160 editorially verified questions, eight categories, shuffled questions and answers, explanations, source links, round reviews and browser-local best scores. No account, API key, analytics, installation or build required.

## Play locally
Open `index.html` in a browser. Keep `app.js`, `questions.js` and `styles.css` beside it. Or run `python3 -m http.server 8000` in this directory and visit http://localhost:8000.

## Put it on GitHub
Create a repository named `thiel-trivia` in your GitHub account. Upload the contents of this folder at the repository root (not the surrounding folder). The four game files plus this README are sufficient; the included optional workflow automates deployment.

### Simple GitHub Pages setup
In repository Settings → Pages, select **Deploy from a branch**, choose **main** and **/ (root)**, then Save. GitHub displays the playable URL after deployment. Availability depends on your account plan and repository visibility.

### Optional workflow
If you upload `.github/workflows/pages.yml`, choose **GitHub Actions** as the Pages source instead. The workflow deploys on main-branch pushes or manual dispatch. Use only one of the two Pages setups.

## Maintain questions
Edit `questions.js`. Each `add` entry supplies category, prompt, four distinct choices (correct answer first), a brief explanation and a source key. The game shuffles choices when displayed. Add URLs to `SOURCES` as needed. Update the verification date after checking the source. Categories in the selection menu are generated from the question bank.

All factual answers were researched from Thiel College pages on October 12, 2026. Historical relocation dates vary between the history page and older fast-facts publications, so no relocation-year question is included. The game uses a fixed, reviewed question bank; it does not scrape or update automatically. Review current campus facts before an official event.

## Verification
Run `node --test test.cjs`. Tests validate the question bank, unique questions, source domains, randomized category selection, answer locking, scoring, complete rounds and replay. Run `node --check app.js` and `node --check questions.js` for syntax checks. Browser visual/accessibility QA has not been performed.

This is an independent prototype, not a claim of institutional endorsement. No official logo assets are included. Scores are stored only in the player’s browser and may be unavailable when browser storage is disabled. There is no shared leaderboard.

## Sharing
After a round, Share your score uses device sharing when supported; Copy score & link uses the clipboard, with selectable text as a fallback when clipboard access is blocked by a CMS iframe. Shared results link to the public game and do not save a public score record.

## Anniversary question bank
The 160-question edition covers History, Traditions, Campus, Media, Academics, Arts, Alumni and Athletics. Quick rounds draw up to 10 distinct questions; full rounds include every question in the selected category. Date-sensitive announcements state their year. Research avoids conflicting relocation dates and moot-court placements. The question bank contains no photo questions. The campus photo ribbon and shareable results remain available.
