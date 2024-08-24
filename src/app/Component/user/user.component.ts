import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../Model/user';
import { FormsModule, NgForm } from '@angular/forms';
import { UserService } from '../../Service/user.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {

  userList:UserModel[]=[];
  editMode:boolean=false;
    user:UserModel={
    firstName:"",
    lastName:"",
    email:"",
    mobileNumber:0,
    salary:0.
    }

    constructor(private _userService:UserService){}

    ngOnInit(): void {
        this.getUserList()
    }
    getUserList()
    {
      this._userService.getUsers().subscribe((res)=>{
        this.userList=res;

      })
    }
    onSubmit(form:NgForm):void{
    
      console.log(form)
      if(this.editMode)
      {
        this._userService.updateUser(this.user).subscribe((res)=>{
          this.getUserList();
          this.editMode=false;
          form.reset()
        })
      }
      else{
      this._userService.addUser(this.user).subscribe((res)=>{
        this.getUserList();
        form.reset()
      })
    }
    }
    OnEdit(userdata:UserModel)
    {
    this.user=userdata;
    this.editMode=true;
    }
    OnDelete(id:any)
    {
      this._userService.deleteUser(id).subscribe((res)=>{
        this.getUserList();
      })
    }

    OnResetForm()
    {

    }
}
