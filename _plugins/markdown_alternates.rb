# Writes a Markdown version of every HTML page next to it in the built site
# (/about.html -> /about.md, /writing/foo/index.html -> /writing/foo/index.md),
# so agents can request it with `Accept: text/markdown` (see cloudflare/).
# Sidenotes, both ^^shorthand^^ and {% include sidenote.html %}, become footnotes.
require 'reverse_markdown'

module MarkdownAlternates
  SKIP = %w[/404.html /google2429120ea0160dae.html].freeze

  module_function

  def convert(html)
    html = html.gsub(%r{<(script|style)\b.*?</\1>}m, '')
    # Card grids (e.g. /writing/) read better as lists.
    html = html.gsub(%r{<div class="writing-grid">(.*?)</div>}m) do
      items = $1.scan(%r{<a\b.*?</a>}m).map { |a| "<li>#{a.sub('<span class="writing-card-week">', ' — <span>')}</li>" }
      "<ul>#{items.join}</ul>"
    end
    notes = []
    footnote = lambda do |content|
      notes << content.strip
      "MDALTFOOTNOTE#{notes.size}MDALT"
    end
    html = html.gsub(/\^\^(.*?)\^\^/m) { footnote.call($1) }
    html = html.gsub(%r{<label[^>]*sidenote-number[^>]*>\s*</label>\s*<input[^>]*margin-toggle[^>]*/?>\s*<span class="sidenote">(.*?)</span>}m) { footnote.call($1) }

    md = to_md(html)
    md = md.gsub(/MDALTFOOTNOTE(\d+)MDALT/) { "[^#{$1}]" }
    unless notes.empty?
      md << "\n\n" << notes.each_with_index.map { |n, i| "[^#{i + 1}]: #{to_md(n).gsub(/\s*\n\s*/, ' ')}" }.join("\n")
    end
    md.gsub(/\n{3,}/, "\n\n").strip + "\n"
  end

  def to_md(html)
    ReverseMarkdown.convert(html, unknown_tags: :bypass, github_flavored: true).strip
  end
end

Jekyll::Hooks.register [:pages, :documents], :post_render do |doc|
  next unless doc.output_ext == '.html' && !MarkdownAlternates::SKIP.include?(doc.url)
  next if doc.data['redirect_to'] || doc.data['markdown_alternate'] == false

  title = doc.data['title'].to_s
  body = MarkdownAlternates.convert(doc.content)
  body = "# #{title}\n\n#{body}" unless title.empty? || body.start_with?('# ')
  front = { 'title' => title, 'url' => doc.site.config['url'].to_s + doc.url }
  front['date'] = doc.data['date'].strftime('%Y-%m-%d') if doc.data['date'].respond_to?(:strftime)
  doc.data['markdown_alternate_output'] = "#{front.to_yaml}---\n\n#{body}"
end

Jekyll::Hooks.register [:pages, :documents], :post_write do |doc|
  md = doc.data['markdown_alternate_output'] or next
  path = doc.destination(doc.site.dest).sub(/\.html\z/, '.md')
  File.write(path, md)
end
