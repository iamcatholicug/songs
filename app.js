async function loadPosts() {
  const host = document.getElementById('posts');
  const template = document.getElementById('post-template');

  try {
    const response = await fetch('/data/posts.json');
    if (!response.ok) throw new Error('Failed to fetch song posts');

    const posts = await response.json();

    for (const post of posts) {
      const clone = template.content.cloneNode(true);
      clone.querySelector('.folder').textContent = post.folder;
      clone.querySelector('.title').textContent = post.title;
      clone.querySelector('.body').textContent = post.body || '(No text content found in file)';
      host.appendChild(clone);
    }
  } catch (error) {
    host.textContent = `Could not load posts: ${error.message}`;
  }
}

loadPosts();
