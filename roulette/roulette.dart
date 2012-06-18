#import('dart:html');
#import('package:google-api-dart-client/urlshortener-v1.dart');

UrlshortenerApi _shortener;

void main() {
  _shortener = new UrlshortenerApi();
  final input = document.query('#longUrl');
  final button = document.query('#shorten');
  final output = document.query('#shortUrl');
  final error = document.query('#error');
  final spinner = document.query('#spinner');
  
  document.query('#shorten').on.submit.add((e) {
    final url = (Math.random() < 0.1)
        ? "http://www.youtube.com/watch?v=oHg5SJYRHA0"
        : input.value;
    show(spinner);
    hide(output);
    hide(error);
    shorten(url).onComplete((f) {
      hide(spinner);
      try {
        output.text = output.href = f.value;
        show(output);
      } catch (final ex) {
        error.text = "Error: $ex";
        show(error);
      }
    });
    e.preventDefault();
  });
}

Future<String> shorten(String longUrl) {
  Url url = new Url();
  url.longUrl = longUrl;
  return _shortener.url.insert(url).transform((u) => u.id);
}
hide(element) => element.style.display = "none";
show(element) => element.style.display = "";