import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, take, tap } from 'rxjs';

import { Courses } from '../model/course';

@Injectable()
export class CourseService {

  private readonly API = 'api/courses'

    constructor(private http: HttpClient) { }

    List() {
        return this.http.get<Courses[]>(this.API)
        .pipe(
        take(1),
        tap(courses => console.log(courses)))
    }

    create(record: Partial<Courses>) {
        return this.http.post<Courses>(this.API, record).pipe(first())
    }

    getById(id: string) {
        return this.http.get<Courses>(`${this.API}/${id}`)
    }

    update(record: Partial<Courses>) {
      return this.http.put<Courses>(`${this.API}/${record._id}`, record).pipe(first())
    }
}
