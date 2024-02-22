import { Component } from '@angular/core';
import { IonHeader, IonToolbar,IonSearchbar,IonSelect,IonSelectOption,IonItem, IonTitle,IonBackButton,IonCol, IonGrid,IonRow,IonContent,IonCardContent,IonCardSubtitle,IonCardTitle,IonCardHeader, IonCard, IonIcon, IonList } from '@ionic/angular/standalone';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonList, IonHeader, IonToolbar,IonSearchbar,IonSelect,IonItem,IonSelectOption, IonTitle, IonBackButton,IonGrid,IonCol,IonRow,IonContent,IonCardContent,IonCardSubtitle,IonCardTitle,IonCardHeader,IonCard,IonIcon],
})
export class HomePage {
  constructor() {}
}
