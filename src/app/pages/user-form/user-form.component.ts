import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { UserService } from 'src/app/backend/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent {
  public formGroup: any;
  public id: string = `0`;
  public constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      role: ['user', Validators.required],
    });

    this.activatedRoute.paramMap.subscribe((param: ParamMap) => {
      if (!!param.get(`id`)) { 
        this.id = param.get(`id`) || '0';
        this.initUpdate();
      }
    });
  }

  public submit() {
    if (!this.formGroup.valid) {
      alert('Invalido');
      return;
    }

    this.userService.post(this.formGroup.value).subscribe((result: any) => {
      this.router.navigate([`user`]);
    });
    
  }

  private initUpdate() {
    this.userService.getById(this.id).subscribe((result: any) => {
      this.formGroup.patchValue(result);
    })
  }
}
