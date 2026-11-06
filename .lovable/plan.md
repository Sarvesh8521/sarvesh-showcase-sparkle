# Portfolio upgrade

## Goal
Turn the existing terminal-style resume into a recruiter-focused portfolio while preserving the dark grid, neon-green accent, editable resume/profile, and contact form.

## Work
1. Reorder the single page so featured work follows the hero; add Philosophy and Writing sections and retain Experience and Contact.
2. Refine the hero with a large terminal headline, a restrained typing cursor on the headline only, a one-sentence summary, two prominent CTAs, and a secondary availability badge. Keep resume and bio connected to the existing admin-editable settings.
3. Create three featured project cards using existing project details, GitHub links, and visual placeholder frames. Do not invent outcome numbers or demo URLs; clearly mark missing metrics and demos until supplied.
4. Update experience to reflect the supplied Auburn role details, organize technical skills by category, and only show supported impact metrics.
5. Align sticky navigation and section anchors; update page title, description, Open Graph, and Twitter metadata. Do not invent a social preview image URL.
6. Verify the desktop and mobile layouts, project/CTA anchors, resume link, and build output.

## Technical notes
- Use the current React/Vite setup, semantic HTML, existing design tokens, and shared button components.
- Keep the existing Supabase-backed contact form and admin-controlled profile/resume/bio behavior unchanged.
- Respect reduced-motion preferences; keep the terminal cursor effect limited to the headline.
