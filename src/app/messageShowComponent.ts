import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import  {MessageService } from '../services/message.service';

@Component({
  selector: 'message-show',
  templateUrl: './messageShowComponent.html',
  styleUrls: ['./app.component.css']
})
export class MessageShowComponent implements OnDestroy {
    message: any;
    subscription:Subscription;

    constructor(private messageService: MessageService) {
        this.subscription = this.messageService.getMessage()
            .subscribe(x=>this.message = x);
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
