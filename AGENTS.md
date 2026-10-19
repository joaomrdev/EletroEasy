<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Serve original media through checked-in Lovable asset pointers, not preview-host URLs; the asset service provides delivery across deployments.
- Work-video playback uses a dedicated native HTML5 player with WebM derivatives and original MP4 fallback; this preserves real footage while covering browser codec differences.
- Contact destinations are centralized in a browser-safe module; only verified channels may be exposed.
