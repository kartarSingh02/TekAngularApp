import { Component } from "@angular/core";
// import { UstaadjiService } from "../ustaadji.service";
import { ToastrService } from 'ngx-toastr';
import { Router } from "@angular/router";
import { UstaadjiService } from "../ustaadji.service";
import { HttpHeaders } from "@angular/common/http";

@Component({
    selector :"app-navbar",
    templateUrl: "./navbar.component.html",
    // providers : UstaadjiService,
})
export class NavbarComponent{
    projecttitle:any="Cake's House Shop"
    searchtext:any
    isloggedin:any
    length: any
    response:any
    
    constructor(private toastr: ToastrService, private router: Router, private ustaad: UstaadjiService  ){
        this.isloggedin=localStorage["token"]?true:false
        if(this.isloggedin){
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
                  this.length =  response.data?.length
               }
            })
         }
    }
    isAdmin:any = false
    //loggedinUser:any
   adminUsers:any = ["k4kartar4520@gmail.com"]
    ngDoCheck(){
        this.length =  this.ustaad.cartitems?.length
        if(localStorage["token"]){
            this.isloggedin=true
            if(this.adminUsers.includes(localStorage["loggedinUser"])){
                this.isAdmin = true
             }
        }
        else{
            this.isloggedin=false
            this.isAdmin = false
        }
    }

    search(){
        // this.toastr.warning('Mai ni dhundta')
        // alert(this.searchtext)   
        if(this.searchtext)
        this.router.navigate(["/search"], {queryParams:{q:this.searchtext}})
    }   //query param is question mark and q is query variable
    
    logout(){
        localStorage.clear();
        this.router.navigate(["/"])
        this.toastr.success('Logged out successfully')
    }
    
}