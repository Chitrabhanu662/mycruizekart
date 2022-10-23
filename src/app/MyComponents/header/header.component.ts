// import { CruiseService } from '../../services/cruise.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, PLATFORM_ID, Input, Inject, EventEmitter, Output } from '@angular/core';
import { PlatformLocation, isPlatformServer, isPlatformBrowser } from '@angular/common';
// import { ToastrService } from 'ngx-toastr';
declare var jQuery: any;
declare var window: any;

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    showDropDown: boolean = false;
    title = 'Cruize';
    public password: any;
    public menuItems: any[] = [];
    public user: any = {
        address: "",
        city: "",
        state: "",
        country: "",
        pincode: "",
        phone: "",
        title: "",
        password: ""
    };
    public balance: any = 0;
    public agent: any = {
        address: "",
        city: "",
        state: "",
        country: "",
        pincode: "",
        phone: "",
        agencyName: "",
        contactPerson: "",
        lastName: "",
        designation: "",
        mobile: "",
        password: "",
        gstNo: "",
        panNo: "",
        AvailableCredit: "",
        agencyType: "A"
    };
    public isUserLoggedIn: any = false;
    public isAgentLoggedIn: any = false; public imageError: any = '';
    public portaltype: any = '';
    public email: any = '';
    public Bookingref: any = '';
    public ticketUrls: any = "";
    public filename: any = "";
    public trans: any = "";
    public GSTNdiv: any = '';
    public Callagentremarks: any = '';
    public Callagentemail: any = '';
    public Callmobile: any = '';
    public loginType = ''; public balancestr: any = 0; public username = ''; public loginDataN: any = {};
    // fileData: File = null;
    previewUrl: any = null;
    // fileUploadProgress: string = null;
    // uploadedFilePath: string = null;
    @Output() someEvent = new EventEmitter();
    public fileUrl: any;

    public logintxt: any = 'Agent Sign In'; public signuptxt: any = 'Agent Sign Up';
    // public file: File = null;
     public base64string: any = ''; public fileName: any = ''; public baseURL: any = ''; public fullURL: any = '';
    public usertype = ''; public agentcode = ''; public imageURL = ''; public link = ''; public logindata: any = '';
    constructor(@Inject(PLATFORM_ID) public platformId: Object,
    //  public toastr: ToastrService,
      // public cruiserService: CruiseService,
       public router: Router) {
        // this.loginType = this.cruiserService.getloginType();
        // try {
            // if (isPlatformBrowser(this.platformId)) {
            //     if (this.loginType == "B2B") {
            //         this.logindata = sessionStorage.getItem("logindatas");
            //         this.loginDataN = JSON.parse(JSON.parse(this.logindata));
            //         this.balancestr = this.loginDataN.CurrentBalance;
            //         this.username = this.loginDataN.ContactPerson;
            //         this.usertype = this.loginDataN.Type;
            //         this.agentcode = this.loginDataN.CompanyCode;
            //         this.link = this.loginDataN.Link;
            //         this.imageURL = "https://s3.ap-south-1.amazonaws.com/b2badminstorage/AGENT_LOGO/" + this.agentcode + ".png?" + Math.round((Math.random() * 100000) * 100);
            //     }
            // }

    //         if (sessionStorage.getItem("isAgentLoggedIn") || this.isUserLoggedIn)
    //             this.isAgentLoggedIn = JSON.parse(sessionStorage.getItem("isAgentLoggedIn"));
    //         if (this.isAgentLoggedIn || this.isUserLoggedIn) {
    //             if (sessionStorage.getItem("logindata"))
    //                 if (sessionStorage.getItem("logindata") != "undefined") {
    //                     this.agent = (this.cruiserService.getAgentDecrypt());
    //                     this.menuItems = (this.cruiserService.getmenuItemsDecrypt());
    //                     this.loginDataN = this.agent;
    //                     //this.balancestr = this.loginDataN.CurrentBalance;
    //                     this.username = this.loginDataN.ContactPerson;
    //                     this.usertype = this.loginDataN.Type;
    //                     this.agentcode = this.loginDataN.Code;
    //                     this.link = this.loginDataN.url;
    //                     this.imageURL = "https://s3.ap-south-1.amazonaws.com/b2badminstorage/AGENT_LOGO/" + this.agentcode + ".png?" + Math.round((Math.random() * 100000) * 100);
    //                     jQuery("#helloAcc").css("display", "block");
    //                     jQuery("#myAcc").css("display", "none");

    //                 }
    //                 else {
    //                     sessionStorage.clear();
    //                     sessionStorage.setItem("loginType", "B2C");
    //                     jQuery("#helloAcc").css("display", "none");
    //                     if (this.loginType == "B2B") {
    //                         sessionStorage.setItem("loginType", "B2B"); this.portaltype = "B2B";
    //                         jQuery("#myAcc").css("display", "none");
    //                     } else { jQuery("#myAcc").css("display", "block"); }
    //                 }
    //         }
    //         else {
    //             if (this.loginType == "B2B") {
    //                 sessionStorage.setItem("loginType", "B2B"); this.portaltype = "B2B";
    //             } else {
    //                 sessionStorage.setItem("loginType", "B2C"); this.portaltype = "B2C";
    //             }
    //         }

    //     } catch (errormsg) { }
    // }

    // ngOnInit() {
    //     this.agentbal();
    // }
    
    // agentbal() {
    //     // this.isUserLoggedIn = JSON.parse(sessionStorage.getItem("isAgentLoggedIn"));
    //     if (this.isUserLoggedIn) {
            // this.agent = (this.cruiserService.getAgentDecrypt());
            // this.cruiserService.agentbalance(this.agent.email, this.agent.Type).subscribe(
                // data => {
                //     var resp = JSON.parse(JSON.parse(JSON.stringify(data)).d);
                //     if (resp.agentdata) {
                //         this.balance = resp.agentdata.Balance;
                //         if (this.loginType == "B2B") {
                //             this.balancestr = "(" + this.balance + ")";
                //         } else { this.balancestr = ""; }
                //         sessionStorage.setItem("balance", JSON.stringify(resp.agentdata));
                //     } else {
                //         sessionStorage.setItem("balance", "0");
                //     }
                // },
                // error => {
                //     sessionStorage.setItem("balance", "0");
                // }
            // )

            // this.balance = JSON.parse(sessionStorage.getItem("balance"));
            // this.loginType = (sessionStorage.getItem("loginType"));
    //         if (this.loginType == "B2B") {
    //             this.balancestr = "(" + this.balance + ")";
    //         } else { this.balancestr = ""; }

    //     }
    // }
    // loginb2c() {
    //     if (this.username && this.password)
    //         this.cruiserService.loginAgentuser(this.username, this.password, 'B2C').subscribe(
    //             data => {
    //                 var orgData = JSON.parse(JSON.stringify(data)).d;
    //                 sessionStorage.setItem("logindata", JSON.stringify(orgData));
    //                 var encryptData = this.cruiserService.getdecryptData(orgData);
    //                 var resp = JSON.parse(encryptData);
    //                 sessionStorage.setItem("logindatas", JSON.stringify(encryptData));
    //                 if (resp.status == "success") {
    //                     sessionStorage.setItem("isAgentLoggedIn", "true");
    //                     sessionStorage.setItem("loginType", "B2C");
    //                     this.agent = (this.cruiserService.getAgentDecrypt());
    //                     jQuery("#login-signup").modal("hide");
    //                     this.toastr.success("Login success...!");
    //                     this.someEvent.emit(null);
    //                     window.location.reload();
    //                 }
    //                 else {
    //                     this.toastr.error(resp.status);
    //                 }
    //             },
    //             error => {
    //                 this.toastr.error("Unable to login...! Try again...!")
    //             }
    //         )
    //     else {
    //         this.toastr.warning("Please provide username or password...!")
    //     }
    // }

    // registerb2c() {
    //     if (!this.user.email) {
    //         this.toastr.warning("Please provide Correct Email...!");
    //         return false;
    //     } else {
    //         var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    //         if (!emailReg.test(this.user.email)) {
    //             this.toastr.warning("Please provide Correct Email...!");
    //             return false;
    //         }
    //     }
    //     if (!this.user.firstName) {
    //         this.toastr.warning("Please provide First Name...!")
    //         return false;
    //     }
    //     if (!this.user.lastName) {
    //         this.toastr.warning("Please provide last Name...!")
    //         return false;
    //     }
    //     if (!this.user.mobile) {
    //         this.toastr.warning("Please provide Mobile...!")
    //         return false;
    //     }
    //     if (!this.user.password) {
    //         this.toastr.warning("Please provide Password...!")
    //         return false;
    //     }

    //     this.cruiserService.register(this.user).subscribe(
    //         data => {
    //             var resp = JSON.parse(JSON.parse(JSON.stringify(data)).d);
    //             if (resp.status == "success") {
    //                 jQuery("#login-tab").click();
    //                 this.toastr.success("Registration successful...! Please login...!")
    //                 setTimeout(() => {
    //                     this.router.navigate(["/"]);
    //                 }, 2000);
    //             }
    //             else { this.toastr.warning(resp.status) }
    //         }, error => {
    //             this.toastr.error("Unable to register...!")
    //         }
    //     )
    // }
    // callbacksubmit() {
    //     if (!this.Callmobile) {
    //         this.toastr.warning("Please provide Mobile...!")
    //         return false;
    //     }
    //     if (!this.Callagentemail) {
    //         this.toastr.warning("Please provide  Email...!");
    //         return false;
    //     } else {
    //         var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    //         if (!emailReg.test(this.Callagentemail)) {
    //             this.toastr.warning("Please provide Correct Email...!");
    //             return false;
    //         }
    //     }
    //     if (!this.Callagentremarks) {
    //         this.toastr.warning("Please provide Remarks...!")
    //         return false;
    //     }
    //     if (sessionStorage.getItem("isAgentLoggedIn"))
    //         this.isAgentLoggedIn = JSON.parse(sessionStorage.getItem("isAgentLoggedIn"));
    //     if (this.isAgentLoggedIn) {
    //         if (sessionStorage.getItem("logindata"))
    //             if (sessionStorage.getItem("agent") != "undefined") {
    //                 //this.agent = (this.cruiserService.getAgentDecrypt());
    //             }
    //     }

    //     this.cruiserService.callbackAgent("", this.agent.uid, this.Callmobile, this.Callagentemail, this.Callagentremarks, this.portaltype, "Add", "callback").subscribe(
    //         data => {
    //             var resp = JSON.parse(JSON.parse(JSON.stringify(data)).d);
    //             if (resp.status == "Operation Successful") {
    //                 jQuery('#AgentCallBack').modal('toggle');
    //                 jQuery('#AgentCallBack').hide();
    //                 this.toastr.success("Your Request Submitted, The Team is working on the same. Please don't submit the same again...!")
    //             }
    //         }, error => {
    //             this.toastr.error("Unable to Agent Call Back Support...!")
    //         }
    //     )
    // }
    // register() {
    //     if (!this.agent.email) {
    //         this.toastr.warning("Please provide Correct Email...!");
    //         return false;
    //     } else {
    //         var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    //         if (!emailReg.test(this.agent.email)) {
    //             this.toastr.warning("Please provide Correct Email...!");
    //             return false;
    //         }
    //     }
    //     if (!this.agent.agencyName) {
    //         this.toastr.warning("Please provide Name...!")
    //         return false;
    //     }
    //     if (!this.agent.contactPerson) {
    //         this.toastr.warning("Please provide First Name...!")
    //         return false;
    //     }
    //     if (!this.agent.lastName) {
    //         this.toastr.warning("Please provide Last Name...!")
    //         return false;
    //     }
    //     if (!this.agent.mobile) {
    //         this.toastr.warning("Please provide Mobile...!")
    //         return false;
    //     } else {
    //         var mobileReg = /^(\d{10})?$/;
    //         if (!mobileReg.test(this.agent.mobile)) {
    //             this.toastr.warning("Please provide Correct Mobile Number. 10 Digit...!");
    //             return false;
    //         }
    //     }
    //     if (!this.agent.password) {
    //         this.toastr.warning("Please provide Password...!")
    //         return false;
    //     }

    //     var agentcode = "";
    //     try { agentcode = JSON.parse(JSON.parse(JSON.stringify(sessionStorage.agent))).Code; }
    //     catch (errormsg) {
    //     }

    //     this.cruiserService.registerAgent(this.agent, agentcode, this.base64string, this.filename).subscribe(
    //         data => {
    //             var resp = JSON.parse(JSON.parse(JSON.stringify(data)).d);
    //             if (resp.status == "success") {
    //                 jQuery("#login-tab").click();
    //                 jQuery("#agentloginSignup").modal("hide");
    //                 jQuery('#agentloginSignup').modal('toggle');
    //                 jQuery('#agentloginSignup').hide();
    //                 this.toastr.success("Registration successful...! Please login...1")
    //                 setTimeout(() => {
    //                     this.router.navigate(["/"]);
    //                 }, 5000);
    //             }
    //             else { this.toastr.warning(resp.status) }
    //         }, error => {
    //             this.toastr.error("Unable to register...!")
    //         }
    //     )
    // }
    // imgtobase64(fileInput: any, dataType: any) {
    //     this.imageError = ''; var cardImageBase64 = "";
    //     if (fileInput.target.files && fileInput.target.files[0]) {
    //         if (fileInput.target.files[0].name.toUpperCase().indexOf("PNG") > -1 || fileInput.target.files[0].name.toUpperCase().indexOf("JPEG") > -1 || fileInput.target.files[0].name.toUpperCase().indexOf("JPG") > -1) {
    //             // Size Filter Bytes
    //             const max_size = 2097152;

    //             if (fileInput.target.files[0].size > max_size) {
    //                 this.imageError =
    //                     'Maximum size allowed is ' + max_size / 1000000 + 'Mb';

    //                 return false;
    //             }

    //             this.fileName = fileInput.target.files[0].name;

    //             const reader = new FileReader();
    //             reader.onload = (e: any) => {
    //                 const imgBase64Path = e.target.result;
    //                 //console.log(imgBase64Path);
    //                 this.base64string = imgBase64Path;
    //             };
    //             reader.readAsDataURL(fileInput.target.files[0]);
    //         } else { this.toastr.warning("Choose the correct file. Need a Png,Jpeg file"); }
    //     }
    // }
    // forgetpassword() {
    //     if (!this.username) {
    //         this.toastr.warning("Please provide email...!")
    //         return false;
    //     }
    //     this.cruiserService.forgetPassword(this.username, 'B2B').subscribe(

    //         data => {
    //             jQuery("#login-tab").click();
    //             jQuery("#agentloginSignup").modal("hide");
    //             jQuery('#agentloginSignup').modal('toggle');
    //             jQuery('#agentloginSignup').hide();
    //             this.toastr.success("Password sent on registered email...!")
    //         }, error => {
    //             this.toastr.error("Email not registered, Please try with valid email...!")
    //         }
    //     )
    // }
    // logout() {
    //     this.user = {};
    //     this.agent = {};
    //     this.isUserLoggedIn = {};
    //     sessionStorage.clear();
    //     sessionStorage.setItem("loginType", "B2C");
    //     jQuery("#helloAcc").css("display", "none");
    //     jQuery("#myAcc").css("display", "block");
    //     this.portaltype = "B2C";
    //     // window.location.reload();
    //     //this.router.navigate(["/"]);
    //     localStorage.clear(); this.loginDataN = {}; this.router.navigate([""]); window.location.reload();;
    // }
    // logoutagent() {
    //     this.agent = {};
    //     this.isAgentLoggedIn = {};
    //     sessionStorage.clear();
    //     sessionStorage.setItem("loginType", "B2C");
    //     jQuery("#helloAcc").css("display", "none");
    //     if (this.loginType == "B2B") {
    //         sessionStorage.setItem("loginType", "B2B"); this.portaltype = "B2B";
    //         // this.router.navigate(["login"]);
    //         localStorage.clear(); this.loginDataN = {}; this.router.navigate([""]); window.location.reload();
    //     } else {
    //         this.portaltype = "B2C";
    //         window.location.reload();
    //         localStorage.clear(); this.loginDataN = {}; this.router.navigate([""]); window.location.reload();
    //     }
    // }
    // ShowBooking() {
    //     if (!this.email) {
    //         this.toastr.warning("Please provide  Email...!");
    //         return false;
    //     } else {
    //         var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    //         if (!emailReg.test(this.email)) {
    //             this.toastr.warning("Please provide Correct Email...!");
    //             return false;
    //         }
    //         sessionStorage.setItem("B2Cemail", this.email);
    //     }
    //     if (!this.Bookingref) {
    //         this.toastr.warning("Please provide Name...!")
    //         return false;
    //     }
    //     // this.ticketUrls = this.merchantsetup.siteUrl + "confirmPayment/" + this.Bookingref + "/success";
    //     // this.trans = "/confirmPayment/" + this.Bookingref + "/success";
    //     // this.router.navigate([this.trans]);
    //     jQuery("#b2ceticketdata").modal("hide");
    // }
    // fileProgress(fileInput: any) {
    //     this.fileData = <File>fileInput.target.files[0];
    //     this.preview();
    // }

    // preview() {
    //     // Show preview 
    //     var mimeType = this.fileData.type;
    //     if (mimeType.match(/image\/*/) == null) {
    //         return;
    //     }

    //     var reader = new FileReader();
    //     reader.readAsBinaryString(this.fileData);
    //     reader.readAsDataURL(this.fileData);
    //     reader.onload = (_event) => {
    //         this.previewUrl = reader.result;
    //     }
    //     this.filename = this.fileData.name;
    // }
    // readLogoFile(event: any) {
    //     var base64 = this.imgtobase64(event, '');
    //     if (base64 == false) {
    //         this.toastr.warning(this.imageError)
    //         return false;
    //     }
    // }

    // uploadfile() {
    //     if (this.file != null) {

    //         this.toastr.info("Please wait we are uploading file...!");
    //         jQuery("#loader").toggle();

    //         let formData: FormData = new FormData();
    //         formData.append("file", this.file);
    //         this.cruiserService.uploadAgentLogo(formData).subscribe(
    //             data => {
    //                 jQuery("#loader").toggle();
    //                 let obj = JSON.parse(JSON.stringify(data));
    //             },
    //             error => {
    //                 jQuery("#loader").toggle();
    //                 this.toastr.error(error.error.text);
    //             });
    //     } else {

    //     }
    // }
    // keyPress(event: any) {
    //     const pattern = /[0-9\ ]/;

    //     let inputChar = String.fromCharCode(event.charCode);
    //     if (event.keyCode != 8 && !pattern.test(inputChar)) {
    //         event.preventDefault();
    //     }
    // }

    // onlyAlphabets(e: any) {
    //     try {
    //         if (window.event) {
    //             var charCode = window.event.keyCode;
    //         }
    //         else if (e) {
    //             var charCode = e.which;
    //         }
    //         else { return true; }
    //         if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || (charCode == 32))
    //             return true;
    //         else
    //             return false;
    //     }
    //     catch (err) {
    //     }
    // }
    // login() {
    //     if (this.username && this.password)
    //         this.cruiserService.loginAgent(this.username, this.password, 'B2B').subscribe(
    //             data => {
    //                 var orgData = JSON.parse(JSON.stringify(data)).d;
    //                 sessionStorage.setItem("logindata", JSON.stringify(orgData));
    //                 var encryptData = this.cruiserService.getdecryptData(orgData);
    //                 var resp = JSON.parse(encryptData);
    //                 sessionStorage.setItem("logindatas", JSON.stringify(encryptData));
    //                 if (resp.status == "success") {
    //                     sessionStorage.setItem("isAgentLoggedIn", "true");
    //                     sessionStorage.setItem("loginType", "B2B");
    //                     this.agent = (this.cruiserService.getAgentDecrypt());
    //                     jQuery("#agentloginSignup").modal("hide");
    //                     this.toastr.success("Login success...!");
    //                     if (resp.status == "success") {
    //                         window.location.reload();
    //                     }
    //                     else {
    //                         setTimeout(() => {
    //                             this.router.navigate(["/"]);
    //                         }, 500);
    //                     }
    //                 } else {
    //                     this.toastr.error(resp.status);
    //                 }
    //             },
    //             error => {
    //                 this.toastr.error("Unable to login...! Try again...!")
    //             }
    //         )
    //     else {
    //         this.toastr.warning("Please provide username or password...!")
    //     }
    // }

    // logout() {
    //   if (isPlatformBrowser(this.platformId)) {
    //     localStorage.clear(); this.loginDataN = {}; this.router.navigate([""]); window.location.reload();;
    //   }
    // }
       }
    
  

       ngOnInit(): void {
        // throw new Error('Method not implemented.');
       }
}
