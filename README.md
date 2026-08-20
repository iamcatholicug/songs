# songs

A website for viewing lyrics extracted from Christian song files in this repository.

## Website behavior

- Each `.pptx` file inside each song folder is rendered as a web post.
- The file name is used as the post header.
- Extracted slide text is used as the post body.

## Run locally

From `/home/runner/work/songs/songs`:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.
