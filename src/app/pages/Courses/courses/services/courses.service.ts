import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, take, tap } from 'rxjs';

import { Courses } from '../model/course';

@Injectable()
export class CourseService {

  private readonly API = 'api/courses'

    constructor(private http: HttpClient) { }

    List() {
        return this.http.get<Courses[]>(this.API).pipe(first())
    }

    getById(id: string) {
        return this.http.get<Courses>(`${this.API}/${id}`)
    }

    create(record: Partial<Courses>) {
        return this.http.post<Courses>(this.API, record).pipe(first())
    }

    update(record: Partial<Courses>) {
        return this.http.put<Courses>(`${this.API}/${record._id}`, record).pipe(first())
    }

    delete(id: string) {
        return this.http.delete<Courses>(`${this.API}/${id}`).pipe(first())
    }
}
