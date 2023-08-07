import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";
import {NumberConverter} from "../utils/NumberConverter";
import {HttpService} from "./http.service";

@Injectable({
  providedIn: 'root'
})
export class SmartContractService {

  constructor(private httpService: HttpService) {
  }

  public loadPage(
    first: number,
    rows: number,
    sortField: string | undefined,
    sortOrder: number | undefined
  ) {
    if (!sortField) {
      sortField = 'created.createdAtDate';
    }
    const params: any = {
      first,
      rows,
      sortField,
      sortOrder,
    };
    return this.httpService
      .get('smartContracts/page/', {params: params})
      .pipe(map(SmartContractService.mapPage));
  }

  public getDetailsProjection(contractAddress: string) {
    return this.httpService
      .get('smartContracts/detailsProjection?address=' + contractAddress);
  }

  public static mapPage(page: any) {
    if (page.smartContracts) {
      page.smartContracts = SmartContractService.mapSmartContracts(page.smartContracts);
    }
    return page;
  }

  public static mapSmartContracts(smartContracts: any[]) {
    const scs = [];
    if (smartContracts) {
      for (let smartContract of smartContracts) {
        scs.push(SmartContractService.mapSmartContract(smartContract));
      }
    }
    return scs;
  }

  public static mapSmartContract(smartContract: any) {
    const t: any = { ...smartContract };
    return t;
  }
}
