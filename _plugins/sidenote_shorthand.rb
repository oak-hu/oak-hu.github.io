# Converts ^^sidenote content^^ to sidenote HTML.
# Usage in markdown: text^^this appears in the margin^^more text
# Inline markdown inside ^^ is processed normally by kramdown first.
Jekyll::Hooks.register [:pages, :documents], :post_render do |doc|
  next unless doc.output_ext == '.html'
  counter = 0
  doc.output = doc.output.gsub(/\^\^(.*?)\^\^/m) do
    content = $1.strip
    counter += 1
    id = "sn-sh-#{counter}"
    "<label for=\"#{id}\" class=\"margin-toggle sidenote-number\"></label>" \
    "<input type=\"checkbox\" id=\"#{id}\" class=\"margin-toggle\"/>" \
    "<span class=\"sidenote\">#{content}</span>"
  end
end
