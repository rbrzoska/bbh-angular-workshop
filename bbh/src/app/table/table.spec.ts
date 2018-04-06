import { TableDataService } from './table-data.service';

import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

describe('Table Module', () => {

  describe('TableService', () => {
    let tableService: TableDataService;
    let httpMock: HttpTestingController;

    beforeEach(()=>{
      TestBed.configureTestingModule({
        imports:[HttpClientTestingModule],
        providers:[TableDataService, HttpClient]
      });
      tableService = TestBed.get(TableDataService);
      httpMock = TestBed.get(HttpTestingController);
    });

    it('returns table data for given parameters', ()=> {
      const data = [
        {id:1, name:'test1'},
        {id:2, name:'test2'}
      ];
      tableService.getData<any>('/users', 1).subscribe( httpResponse => {
        expect(httpResponse.body.length).toBe(2);
        expect(httpResponse.body).toEqual(data);
        expect(httpResponse.headers.get('X-Total-Count')).toEqual('2');
      });

      const req = httpMock.expectOne(`http://localhost:3000/users?_limit=5&_page=1`);
      expect(req.request.method).toBe("GET");
      req.flush(data,{ headers: {'X-Total-Count': '2'}});
    })
  })
});
