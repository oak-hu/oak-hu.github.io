// Markdown for Agents: serves the build-time Markdown copy of a page (see
// _plugins/markdown_alternates.rb) when the client sends Accept: text/markdown.
// Deploy from this directory with `npx wrangler deploy`.

export default {
  async fetch(request) {
    const url = new URL(request.url);
    if (['GET', 'HEAD'].includes(request.method) && wantsMarkdown(request.headers.get('Accept'))) {
      for (const path of markdownPaths(url.pathname)) {
        const res = await fetch(new URL(path, url), { method: request.method });
        if (res.ok) {
          const out = new Response(res.body, res);
          out.headers.set('Content-Type', 'text/markdown; charset=utf-8');
          out.headers.set('Vary', 'Accept');
          return out;
        }
      }
    }
    const res = await fetch(request);
    if (!(res.headers.get('Content-Type') || '').startsWith('text/html')) return res;
    const out = new Response(res.body, res);
    out.headers.append('Vary', 'Accept');
    return out;
  },
};

export function wantsMarkdown(accept) {
  return (accept || '').split(',').some((part) => {
    const [type, ...params] = part.trim().toLowerCase().split(';').map((s) => s.trim());
    const q = params.find((p) => p.startsWith('q='));
    return type === 'text/markdown' && (!q || parseFloat(q.slice(2)) > 0);
  });
}

export function markdownPaths(path) {
  if (path.endsWith('/')) return [path + 'index.md'];
  if (path.endsWith('.html')) return [path.slice(0, -5) + '.md'];
  if (/\.[a-z0-9]+$/i.test(path.split('/').pop())) return [];
  return [path + '.md', path + '/index.md'];
}
