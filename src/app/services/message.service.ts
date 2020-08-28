import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class MessageService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);    // push method is available to all arrays and "Appends new elements to an array, and returns the new length." (length = number of elements)
  }                                 // basically it adds the message from the parameter to the this.message-array

  clear() {
    this.messages = [];
  }
}