import { interval, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { catchError, concatAll, map } from 'rxjs/operators';
import ViewUserData from './components/ViewUserData';

const url = 'https://rxjs-backend.herokuapp.com';

interval(5000).pipe(
  map(() => ajax.getJSON(`${url}/messages/unread`).pipe(
    catchError(() => of(null)),
  )),
  concatAll(),
  catchError((e) => of(e.response)),
).subscribe((res) => {
  ViewUserData(res);
});
