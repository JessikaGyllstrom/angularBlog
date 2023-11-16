import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  sendMessage(firstName: string, message: string, email: string, phone: string): void {
    // if either input fields is empty 
    if (!firstName || !message || !email || !phone) {
      alert("Field cant be empty!")
    }
    // if input fields contains values 
    else {
      alert("Message sent!")
      console.log("sending message" + " " + "Name:" + " " + firstName + " " + "Email:" + " " + email + " " + "Phone: " + " " +  phone + " " + "Message:" + " " + message)
    }
  }  
}
