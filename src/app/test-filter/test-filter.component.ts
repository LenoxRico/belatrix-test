import { Component, OnInit } from '@angular/core';
// import { MzButtonModule, MzInputModule } from 'ngx-materialize';

@Component({
  selector: 'app-test-filter',
  templateUrl: './test-filter.component.html',
  styleUrls: ['./test-filter.component.scss']
})
export class TestFilterComponent implements OnInit {
  title = 'Bellatrix Test';
  filters  = ['DEPARTAMENTO', 'PROVINCIA', 'DISTRITO'];
  data = [
    "01 Lima /  / ",
    "01 Lima / 50 Lima / ",
    "01 Lima / 51 Barranca / ",
    "01 Lima / 50 Lima / 202 La Molina",
    "01 Lima / 50 Lima / 203 San Isidro",
    "02 Arequipa /  / ",
    "02 Arequipa / 63 Arequipa / ",
    "02 Arequipa / 64 Caylloma / ",
    "02 Arequipa / 63 Arequipa / 267 Cercado",
  ];
  filter_data = [];

  constructor() { }

	ngOnInit() {
		
	}

	displayData(data){
		let depart = [];
		let province = [];
		let district = [];
		for (let data = 0; data < this.data.length; data++) {
			const element:Array<any> = this.data[data].split(' / ');
			const code_depart = element[0].match(/\d+/g);
			const name_depart = element[0].match(/[a-zA-Z]+/g);
			const code_providence = element[1].match(/\d+/g);
			const name_providence = element[1].match(/[a-zA-Z]+/g);
			const code_district = element[2].match(/\d+/g);
			const name_district = element[2].match(/[a-zA-Z]+/g);
			code_depart ? depart.push([code_depart,name_depart,'','']) : void 0;
			code_providence ? province.push([code_providence,name_providence,code_depart,name_depart]) : void 0;
			code_district ? district.push([code_district,name_district,code_providence,name_providence]) : void 0;
		}

		switch (data) {
			case this.filters[0]:
				this.filter_data = depart;
				break;
			case this.filters[1]:
				this.filter_data = province;
				break;
			case this.filters[2]:
				this.filter_data = district;
				break;
			default:
				this.filter_data = depart;
				break;
		}
		// console.log(this.filter_data)
	}
}
