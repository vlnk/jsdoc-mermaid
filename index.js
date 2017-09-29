const doctrine = require('doctrine');

exports.handlers = {
  newDoclet: function(e) {
    let graphvizComment = doctrine.parse([e.doclet.comment].join('\n'), { unwrap: true, tags: ['graphviz'] }).tags;
    e.doclet.description = e.doclet.description || '';
    e.doclet.description = '<script type="text/javascript" src="https://unpkg.com/mermaid@7.1.0/dist/mermaid.min.js"/>' + e.doclet.description;
    for (let i = 0; i < graphvizComment.length; i++) {
      e.doclet.description += '<div class="mermaid">' + graphvizComment[i].description + '</div>'
    }
  }
};