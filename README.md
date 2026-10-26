# LinkME Opportunity Finder

The MEA CARES opportunity board: internships, jobs, certifications and events, by batch and industry.
Plain HTML, CSS and JavaScript. No build step, no packages to install.

## Where things live

| Thing | Where | Who needs access |
|---|---|---|
| Website code | This GitHub repository | Anyone who edits the site |
| Hosting | Netlify, site `meacareslinkme`. It redeploys by itself on every push to `main`. | Whoever owns the Netlify team |
| Listings data | A Google Sheet, **Listings** tab (or **Form Responses 1** once the form is linked), published to the web as CSV. The link is `CSV_URL` in `index.html`. | Sheet owner |
| Submission form | The Google Form | Core members |
| Alumni reviews (Previous Internships page) | Google Sheet `1j5IcIH…`, tab `Sheet24` | Sheet owner |
| Events and Async Documents | The masterfile Google Sheet `1wHf6J1u…` (tabs "Event Timeline" and "Async Documents") | Sheet owner |
| Visit and click counts | GoatCounter, dashboard `meacareslinkme.goatcounter.com` | Whoever signed up |

## How a listing gets onto the site

Form answer, then the Google Sheet, then the published CSV, then the website. The site reads the CSV every minute.
Google refreshes a published tab about every 5 minutes, so a new listing can take up to about 6 minutes to show.

The site finds columns by their header names, so reordering columns is safe. Do not rename these headers:
`Timestamp`, `Company Name`, `Position or Role`, `Available to which batch?`, `Deadline of Applying`, `Link to Job post`,
`Schedule`, `Type`, `Industry`, `Function`, `Job Description`, `Relevant Skills Needed`, `Paid?`, `Required?`,
`Work Set-up`, `Source`, `Company Email Address`.

Rules the site applies by itself:
- A listing is hidden once its deadline has passed.
- With no deadline, it is hidden 6 months after it was added.
- A listing is marked "New" for 7 days and "Closing soon" for the last 14 days before its deadline.
- Closed or expired listings can still be seen with "Show closed and expired opportunities too".

## Everyday jobs

- **Add a listing:** submit the Google Form.
- **Fix a wrong link or typo:** edit the cell in the form's responses sheet. It reaches the site within about 6 minutes.
- **Remove a listing early:** delete its row in the responses sheet.
- **Change the text or design:** edit the HTML here and push to `main`. Netlify deploys in about a minute.

## If the site shows no listings or an error

1. Open the published CSV link (`CSV_URL` in `index.html`) in a browser. If it does not load, the sheet was unpublished or restricted.
   Fix it with File, Share, Publish to web, pick the tab, choose CSV, and send the new link to whoever maintains the site to update `CSV_URL`.
2. Check the tab still has the headers listed above.
3. People who opened the site before will still see their last saved list with a note, instead of an error.

## Privacy rules

- The published tab must **not** contain submitters' email addresses. Only publish a tab with listing details.
- Keep the whole Google file set to **Restricted**. Only the published tab should be public.
- The site shows a company's contact email only if the form asks for it in "Company Email Address".

## Handover checklist (do this when officers change)

- [ ] Add the new officers as owners of the GitHub repository (or organization) and the Netlify team.
- [ ] Make a MEA CARES email (not a personal one) the owner of the Google Form, the data sheet and the GoatCounter account.
- [ ] Re-publish the data tab from the new owner's account if the old owner's account is removed, and update `CSV_URL`.
- [ ] Update the contact line in the footer of each page.
- [ ] Update the batch labels in `index.html` (`BATCH_LABELS`) when a new batch joins.

## Design notes

See `DESIGN.md` for colours, fonts and components. `components.html` is a visual reference page that is not linked from the site.
