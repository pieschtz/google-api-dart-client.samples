#import('dart:html');
#import('package:google-api-dart-client/calendar-v3.dart', prefix:'cal');
#import('package:google-api-dart-client/oauth2.dart');

// Replace this with your application ID!
final APP_ID = '484081979759.apps.googleusercontent.com';

var calApi;

main() {
  final oauth = new OAuth2(APP_ID, ['https://www.googleapis.com/auth/calendar.readonly']);
  calApi = new cal.CalendarApi(applicationName:'CalendarSample', authenticator:oauth);
  // If we're already logged in, load calendars immediatesly
  oauth.login(immediate:true).onComplete((f) {
    if (f.hasValue) loadCalendars();
  });
  document.query('#login').on.click.add((e) {
    // Log in for real in response to a click event, so we don't get popup-blocked.
    oauth.login().onComplete((f) {
      if (f.hasValue) loadCalendars();
    });
  });
}

void loadCalendars() {
  document.query('#login').style.display = ""; // We're logged in now
  document.query('#loading').style.display = ""; // Show 'loading...' message
  calApi.calendarList.list().then((list) {
    document.query('#loading').remove();
    list.items.forEach((calendar) {
      document.query('#calendars').elements.add(createCalendarBox(calendar));
    });
  });
}

Element createCalendarBox(calendar) {
  final box = new DivElement();
  box.classes.add("calendar");

  final header = new Element.tag("h2");
  header.text = calendar.summary;
  box.elements.add(header);

  final loading = new DivElement();
  loading.elements.add(new ImageElement("spinner.gif"));
  loading.insertAdjacentText("beforeend", "Loading events...");
  box.elements.add(loading);

  calApi.events.list(calendar.id,
      singleEvents:true,
      timeMin:rfc3339Date(today()), 
      timeMax:rfc3339Date(today().add(new Duration(days:1))))
      .onComplete((result) {
        loading.remove();
        if (!result.hasValue) {
          box.insertAdjacentText("beforeend", "Error: ${result.exception}");
          return;
        }
        var events = result.value;
        if (events.items == null || events.items.isEmpty()) {
          final noEvents = new SpanElement();
          noEvents.classes.add("no-events");
          noEvents.text = "No events!";
          box.elements.add(noEvents);
        } else {
          final results = new List.from(events.items);
          results.sort((a, b) => compare(
              dateFromRfc3339(a.start.dateTime),
              dateFromRfc3339(b.start.dateTime)));
          events.items.forEach((e) => box.elements.add(createEventBox(e)));
        }
      });

  return box;
}

compare(a, b) {
  if (a == null) return -1;
  if (b == null) return 1;
  return a.compareTo(b);
}

Element createEventBox(event) {
  final box = new DivElement();
  box.text = event.summary;
  box.classes.add("event");

  final time = new SpanElement();
  time.classes.add("time");
  time.text = (event.start.dateTime == null) 
    ? "All day"
    : Strings.join([
        formatTime(dateFromRfc3339(event.start.dateTime)),
        formatTime(dateFromRfc3339(event.end.dateTime))],
        " - ");
  box.elements.add(time);

  return box;
}

String formatTime(Date date) {
  String hours = date.hours.toString();
  String minutes = date.minutes.toString();
  if (hours.length < 2) hours = "0$hours";
  if (minutes.length < 2) minutes = "0$minutes";
  return "$hours:$minutes";
}

Date today() {
  Date now = new Date.now().toUtc();
  return new Date(now.year, now.month, now.day, isUtc:now.isUtc());
}

String rfc3339Date(Date date) => date.toString().replaceFirst(' ', 'T');
Date dateFromRfc3339(String text) {
  if (text == null) return null;
  if (text.endsWith('Z')) return new Date.fromString(text).toLocal();
  final tzMatch = const RegExp(@'([+-])(\d\d):(\d\d)$').firstMatch(text);
  if (tzMatch == null) throw new IllegalArgumentException(text);
  final rawDate = new Date.fromString("${text.substring(0, tzMatch.start())}Z");
  final offset = new Duration(
      hours:Math.parseInt(tzMatch.group(2)),
      minutes:Math.parseInt(tzMatch.group(3)));
  final zonedDate = (tzMatch.group(1) == '+')
      ? rawDate.subtract(offset)
      : rawDate.add(offset);
  return zonedDate.toLocal();
}
