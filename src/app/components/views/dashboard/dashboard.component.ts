import {Component, OnInit} from '@angular/core';
import {DashboardService} from "../../../services/dashboard.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {

  public dashboardData: any;
  public dataHours = {};
  public dataDays = {};
  public options;

  public documentStyle;

  public hourOptions = [
    {name: '12', code: '12'},
    {name: '24', code: '24'},
    {name: '36', code: '36'},
    {name: '48', code: '48'},
  ];
  public selectedHours = '12';

  public dayOptions = [
    {name: '7', code: '7'},
    {name: '14', code: '14'},
    {name: '21', code: '21'},
    {name: '28', code: '28'},
  ];
  public selectedDays = '7';

  constructor(private dashboardService: DashboardService) {

    this.documentStyle = getComputedStyle(document.documentElement);
    const textColor = this.documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = this.documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = this.documentStyle.getPropertyValue('--surface-border');

    this.dashboardService.getDashboardData().subscribe((data: any) => {
      this.dashboardData = data;

      this.dataHours = {
        labels: data.labelsHours24,
        datasets: [
          {
            label: 'First Dataset',
            data: data.dataHours24,
            fill: true,
            borderColor: this.documentStyle.getPropertyValue('--blue-500'),
            backgroundColor: this.documentStyle.getPropertyValue('--blue-500'),
            tension: 0.4
          }
        ]
      };

      this.dataDays = {
        labels: data.labelsDays7,
        datasets: [
          {
            label: 'First Dataset',
            data: data.dataDays7,
            fill: false,
            borderColor: this.documentStyle.getPropertyValue('--blue-500'),
            backgroundColor: this.documentStyle.getPropertyValue('--blue-500'),
            tension: 0.4
          }
        ]
      };

    });

    this.options = {
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: true
          }
        },
        y: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: true
          }
        }
      }
    }
  }

  public onChangeHours(event: any) {
    this.changeHourChartData(event.value.code);
  }

  public onChangeDays(event: any) {
    this.changeDayChartData(event.value.code);
  }

  private changeDayChartData(hours: string) {

    let data;
    let labels;
    switch(hours) {
      case '7':
        data = this.dashboardData.dataDays7;
        labels = this.dashboardData.labelsDays7;
        break;
      case '14':
        data = this.dashboardData.dataDays14;
        labels = this.dashboardData.labelsDays14;
        break;
      case '21':
        data = this.dashboardData.dataDays21;
        labels = this.dashboardData.labelsDays21;
        break;
      case '28':
        data = this.dashboardData.dataDays28;
        labels = this.dashboardData.labelsDays28;
        break;
    }

    this.dataDays = {
      labels: labels,
      datasets: [
        {
          label: 'First Dataset',
          data: data,
          fill: false,
          borderColor: this.documentStyle.getPropertyValue('--blue-500'),
          backgroundColor: this.documentStyle.getPropertyValue('--blue-500'),
          tension: 0.4
        }
      ]
    };
  }

  private changeHourChartData(hours: string) {

    let data;
    let labels;
    switch(hours) {
      case '12':
        data = this.dashboardData.dataHours12;
        labels = this.dashboardData.labelsHours12;
        break;
      case '24':
        data = this.dashboardData.dataHours24;
        labels = this.dashboardData.labelsHours24;
        break;
      case '36':
        data = this.dashboardData.dataHours36;
        labels = this.dashboardData.labelsHours36;
        break;
      case '48':
        data = this.dashboardData.dataHours48;
        labels = this.dashboardData.labelsHours48;
        break;
    }

    this.dataHours = {
      labels: labels,
      datasets: [
        {
          label: 'First Dataset',
          data: data,
          fill: false,
          borderColor: this.documentStyle.getPropertyValue('--blue-500'),
          backgroundColor: this.documentStyle.getPropertyValue('--blue-500'),
          tension: 0.4
        }
      ]
    };
  }
}
