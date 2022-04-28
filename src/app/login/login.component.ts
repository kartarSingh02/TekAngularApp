import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NavigationEnd, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UstaadjiService } from '../ustaadji.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http : HttpClient , private router: Router,private toastr: ToastrService,private ustaad:UstaadjiService) { }

  userdetails:any={

  }
  // isloggedin:any
  responseError:any
  
  login(){
    var url="https://apifromashu.herokuapp.com/api/login"
    this.http.post(url,this.userdetails).subscribe({
      next:(response: any)=>{
        console.log("response from login users api",response)
        // this.userdetails.email=response.email,
        // this.userdetails.password=response.password
        if(response.token){
          localStorage["token"]= response.token
          localStorage["loggedinUser"] =  response.email
          var url = "https://apifromashu.herokuapp.com/api/cakecart"
          var headers = new HttpHeaders()
          headers = headers.append("authtoken",localStorage["token"])
          var body = {}
          var options = {
            headers:headers
          }
          this.ustaad.getCartItems(url,body,options).subscribe({
            next:(response:any)=>{
                console.log("response from cart items api in navbar", response)
                this.ustaad.cartitems = response.data
            }
          })
          this.router.navigate(["/"])
          this.toastr.success('Successfully Logged In') 
        }
        else{
          this.responseError = "Invalid Login"
          this.toastr.warning('Invalid Login') 
        }
      },
      error:(error)=>{
        console.log("Error from users api",error)
      }
    })
    // if(localStorage["token"]){
    //   this.router.navigate(["/"])
    // }
    // else{
    //   this.router.navigate(["/login"])
    // }
  }

 
  ngOnInit(): void {
  }
}
