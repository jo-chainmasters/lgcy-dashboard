import { Injectable } from '@angular/core';
import {HttpService} from "./http.service";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private httpService: HttpService) {
  }

  public loadPage(
    first: number,
    rows: number,
    sortField: string | undefined,
    sortOrder: number | undefined
  ) {
    if (!sortField) {
      sortField = 'name';
    }
    const params: any = {
      first,
      rows,
      sortField,
      sortOrder,
    };
    return this.httpService
      .get('tokens/page/', {params: params})
      .pipe(map(TokenService.mapPage));
  }

  public static mapPage(page: any) {
    if (page.tokens) {
      page.tokens = TokenService.mapTokens(page.tokens);
    }
    return page;
  }

  public static mapTokens(tokens: any[]) {
    const scs = [];
    if (tokens) {
      for (let token of tokens) {
        scs.push(TokenService.mapToken(token));
      }
    }
    return scs;
  }

  public static mapToken(token: any) {
    const t: any = { ...token };
    return t;
  }
}
