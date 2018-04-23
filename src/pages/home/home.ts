import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  admissionRequirements = [];
  homeImgSrc = ['slide1.jpg', 'slide2.jpg', 'slide3.jpg'];
  images = [];

  programStartInfo: any;

  constructor(private fireProvider: FirebaseProvider, public navCtrl: NavController) {
    this.initializeItems()
  }


  initializeItems() {
    this.fireProvider.getAdmissionReq().then((response) => {
      response.valueChanges().subscribe((list) => {
        this.admissionRequirements = list
      })
    })
    
    this.fireProvider.getStartDate().then((response) => {
      response.valueChanges().subscribe((date => {
        this.programStartInfo = date
      }))
    })

    this.homeImgSrc.forEach(imageName => {
      this.fireProvider.getImage('/home_slides/' + imageName).then((image)=>{
        image.getDownloadURL().subscribe(url=>{
         this.images.push(url)
        })
       
      })
    });

  }

}
