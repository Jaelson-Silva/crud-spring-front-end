import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take, tap } from 'rxjs';

import { Courses } from '../../home/model/course';

@Injectable()
export class CourseService {

  private readonly API = 'api/courses'

    constructor(private http: HttpClient) { }

    getProductsSmall() {
        return this.http.get<Courses[]>(this.API)
        .pipe(
        take(1),
        tap(courses => console.log(courses)))
    }
}
