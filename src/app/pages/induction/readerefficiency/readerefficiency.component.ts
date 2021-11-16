import { Component, OnInit, OnDestroy, ViewChild, ViewEncapsulation } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { ApiGetService } from '../../../@core/backend/common/api/apiGet.services';
import { HttpService } from '../../../@core/backend/common/api/http.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common'; 
import { takeWhile } from 'rxjs/operators';
import { NbToastrService } from '@nebular/theme';
 
interface efficiency {
  DestinationId: number,
  Description: string,
  Reads: number,
  NoReads: number,
  Error: number,
  Eficiencia: number,
  DateAdded: string,
}


@Component({
  selector: 'ngx-readerefficiency',
  templateUrl: './readerefficiency.component.html',
  styleUrls: ['./readerefficiency.component.scss']
})
export class ReaderefficiencyComponent implements OnInit {

  public airForm: FormGroup;
  private alive = true;
  public dataEfficiency: efficiency[];

  public acumulado = 0.0;
  public acumNr = 0.0;
  public acumR = 0.0;

  public acumPLevel1N = 0.0;
  public acumPLevel1R = 0.0;
  public acumPLevel1 = 0.0;

  public acumPLevel2N = 0.0;
  public acumPLevel2R = 0.0;
  public acumPLevel2 = 0.0;

  public acumPackingN = 0.0;
  public acumPackingR = 0.0;
  public acumPacking = 0.0;

  public acumVasN = 0.0;
  public acumVasR = 0.0;
  public acumVas = 0.0;

  public acumShippingR = 0.0;
  public acumShippingN = 0.0;
  public acumShipping = 0.0;

  constructor(
    public apiGetComp: ApiGetService,
    private api: HttpService,
    private fb: FormBuilder,
    private miDatePipe: DatePipe,
    private toastrService: NbToastrService,
    private http: HttpClient,
  ) { 
    
  }

  ngOnInit(): void {
    
    this.initForm();

  }

  initForm() {
    this.airForm = this.fb.group({
      StartTime: ['', Validators.required]
      // EndTime: ['', Validators.required],
    });
  }

  date(StartTime: string){

    const fechaFormateada = this.miDatePipe.transform(StartTime, 'yyyy-MM-dd');

    // console.log('fecha: ', fechaFormateada);
    

    // console.log('test: ', StartTime);
 
    if (fechaFormateada == null) {
      this.toastrService.warning('', 'No pusiste la fecha.');
    } else {
      this.http.get(this.api.apiUrlNode + '/api/GetEficienctiaBarCodeReaders?dateIni='+ fechaFormateada)
    .pipe(takeWhile(() => this.alive))
    .subscribe((res: any)=>{
      if (res.length == 0){
        // console.log("se encuentra vacío el arreglo")
        this.toastrService.danger('', 'No ha data.');
        }else {
        // console.log("no lo esta")
        
      this.dataEfficiency = res;
      
      this.dataEfficiency.forEach(quote => {

        // console.log('test',quote.Reads);
        this.acumR = this.acumR + quote.Reads
        this.acumNr = this.acumNr + quote.NoReads
        
        //table 
      //   if (quote.DestinationId >= 1 && quote.DestinationId <= 6) {

      //     // this.acumPLevel1N = this.acumPLevel1N + quote.NoReads;
      //     // this.acumPLevel1R = this.acumPLevel1R + quote.Reads;
          
          
      //     quote.DestinationId
          
          

      //     quote.Description
      //     // console.log('DestinationId', quote.DestinationId, 'Description', quote.Description);

      //     quote.Reads
      //     quote.NoReads
      //     // console.log('Reads', quote.Reads, 'NoReads', quote.NoReads);

      //     // tr = $('<tr/>');
      //     // tr.append("<td>" + quote.DestinationId + ".</td>");
      //     // tr.append("<td>" + quote.Description + "</td>");

      //     // tr.append("<td>" + quote.Reads + "</td>");
      //     // tr.append("<td>" + quote.NoReads + "</td>");


      //     if (quote.Eficiencia <= 25) {

      //       Math.round(quote.Eficiencia)
      //       Math.round(quote.Eficiencia)

      //         // tr.append("<td>"
      //         //     + '<div class="progress progress-xs progress-striped active">'
      //         //     + '<div class="progress-bar progress-bar-danger" style="width: ' + Math.round(quote.Eficiencia) + '%"></div>'
      //         //     + '</div>'
      //         //     + "</td>");
      //         // tr.append('<td><span class="badge bg-red">' + Math.round(quote.Eficiencia) + '%</span>');
      //     }
      //     else if (quote.Eficiencia > 25 && quote.Eficiencia <= 50) {

      //       Math.round(quote.Eficiencia)
      //       Math.round(quote.Eficiencia)
      //       console.log('d',Math.round(quote.Eficiencia));
            

      //         // tr.append("<td>"
      //         //     + '<div class="progress progress-xs progress-striped active">'
      //         //     + '<div class="progress-bar progress-bar-yellow" style="width: ' + Math.round(quote.Eficiencia) + '%"></div>'
      //         //     + '</div>'
      //         //     + "</td>");

      //         // tr.append('<td><span class="badge bg-yellow">' + Math.round(quote.Eficiencia) + '%</span>');
      //     }
      //     else if (quote.Eficiencia > 50 && quote.Eficiencia <= 90) {

      //       Math.round(quote.Eficiencia)
      //       Math.round(quote.Eficiencia)

      //         // tr.append("<td>"
      //         //     + '<div class="progress progress-xs progress-striped active">'
      //         //     + '<div class="progress-bar progress-bar-primary" style="width: ' + Math.round(quote.Eficiencia) + '%"></div>'
      //         //     + '</div>'
      //         //     + "</td>");
      //         // tr.append('<td><span class="badge bg-blue">' + Math.round(quote.Eficiencia) + '%</span>');

      //     }
      //     else if (quote.Eficiencia > 90 && quote.Eficiencia <= 100) {

      //       Math.round(quote.Eficiencia)
      //       Math.round(quote.Eficiencia)

      //         // tr.append("<td>"
      //         //     + '<div class="progress progress-xs progress-striped active">'
      //         //     + '<div class="progress-bar progress-bar-success" style="width: ' + Math.round(quote.Eficiencia) + '%"></div>'
      //         //     + '</div>'
      //         //     + "</td>");

      //         // tr.append('<td><span class="badge bg-green">' + Math.round(quote.Eficiencia) + '%</span>');

      //     }
          


      // }

      if (this.acumR > 0) this.acumulado = (100 - ((this.acumNr / this.acumR) * 100));
      // if (this.acumPLevel1R > 0) this.acumPLevel1 = (100 - ((this.acumPLevel1N / this.acumPLevel1R) * 100));
      // if (this.acumPLevel2R > 0) this.acumPLevel2 = (100 - ((this.acumPLevel2N / this.acumPLevel2R) * 100));
      // if (this.acumPackingR > 0) this.acumPacking = (100 - ((this.acumPackingN / this.acumPackingR) * 100));
      // if (this.acumVasR > 0) this.acumVas = (100 - ((this.acumVasN / this.acumVasR) * 100));
      // if (this.acumShippingR > 0) this.acumShipping = (100 - ((this.acumShippingN / this.acumShippingR) * 100));

      
       });
      
      }
    });
    }

  }

  ngOnDestroy() {
    this.alive = false;
  }

}
