// Copyright 2012 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

#import('dart:html');
#import('dart:math');
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
    e.preventDefault();
    final url = (new Random().nextDouble() < 0.1)
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
      } catch (ex) {
        error.text = "Error: $ex";
        show(error);
      }
    });
  });
}

Future<String> shorten(String longUrl) {
  Url url = new Url();
  url.longUrl = longUrl;
  return _shortener.url.insert(url).transform((u) => u.id);
}
hide(element) => element.style.display = "none";
show(element) => element.style.display = "";
