import { Component,Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-inputs',
  standalone: true,
  imports: [],
  templateUrl: './inputs.component.html',
  styleUrl: './inputs.component.css'
})
export class InputsComponent {
  @Input() letra: string = '';  // Acepta un input llamado 'letra'
  @Output() letraChange: EventEmitter<string> = new EventEmitter<string>();  // Emite el cambio de letra


  onInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.letra = input.value;
    this.letraChange.emit(this.letra);  // Emite el nuevo valor de la letra
  }

}
