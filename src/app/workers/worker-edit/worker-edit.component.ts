import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MyWorker, MyWorkerType } from 'src/app/shared/models/myworkers.model';
import { MyworkersService } from 'src/app/shared/services/myworkers.service'
@Component({
  selector: 'app-worker-edit',
  templateUrl: './worker-edit.component.html',
  styleUrls: ['./worker-edit.component.css']
})
export class WorkerEditComponent implements OnInit {

  id: number;
  worker: MyWorker;
  workerForm: FormGroup;
  MyWorkerType = MyWorkerType;

  constructor(
    private activatedRoute: ActivatedRoute,
    private MyworkersService: MyworkersService,
    private router: Router
    ){
    this.activatedRoute.params.subscribe((param) => {
      this.id = param.id;
    });
  }

  ngOnInit(): void {
    this.getData();
    this.workerForm = new FormGroup({
      surname: new FormControl(null, [Validators.required, Validators.pattern(/\S/)]),
      name: new FormControl(null, [Validators.required, Validators.pattern(/\S/)]),
      patronym: new FormControl(null, [Validators.required, Validators.pattern(/\S/)]),
      phone: new FormControl(null, [Validators.required, Validators.pattern("[+]{1}[0-9]{1}[-]{1}[0-9]{3}[-]{1}[0-9]{3}[-][0-9]{2}[-]{1}[0-9]{2}")]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      birthday: new FormControl(null, [Validators.required, Validators.pattern("[0-3]{1}[0-9]{1}[.]{1}[0-1]{1}[0-9]{1}[.]{1}[1-2]{1}[0,9]{1}[0-9]{2}")]),
      type: new FormControl(null, Validators.required)
    });
  }

  async getData() {
    if (this.id > 0) {
      try {
        let worker = this.MyworkersService.getOneById(this.id);
        this.worker = await worker;
      } catch (err) {
        console.error(err);
      }
      this.workerForm.patchValue({
        surname: this.worker.surname,
        name: this.worker.name,
        patronym: this.worker.patronym,
        phone: this.worker.phone,
        email: this.worker.email,
        birthday: this.worker.birthday,
        type: this.worker.type,
      });
    }
  }

  async onSave() {
    if (this.id > 0) {
      try {
        await this.MyworkersService.putOneById(this.id, this.workerForm.value);
      } catch (err) {
        console.error(err);
      }
    } else {
      try {
        let res = await this.MyworkersService.postOne(this.workerForm.value);
        this.getData();
      } catch (err) {
        console.error(err);
      }
    }
    this.router.navigate(['/workers']);
  }

  async onDelete() {
    try {
      await this.MyworkersService.deleteOneById(this.id);
    } catch (err) {
      console.error(err);
    }
    this.router.navigate(['/workers']);
  }

}
