import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputsComponent } from './Componentes/inputs/inputs.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,InputsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  palabra=[
      {
        'titulo':'ESPEJO',
        'des':'Superficie que refleja la luz y muestra imágenes de los objetos que están frente a él'
      },
      {
        'titulo':'ELEFANTE',
        'des':'Animal grande y gris con trompa larga y colmillos en forma de colmillos'
      },
      {
        'titulo':'RELOJ',
        'des':'Instrumento para medir y mostrar el tiempo'
      }
    
    
    ]
  imagenes =['../assets/primeraimagen.jpg',
            '../assets/segundaimagen.jpg',
            '../assets/terceraimagen.jpg',
            '../assets/cuartaimagen.jpg',
            '../assets/quintaimagen.jpg',
            '../assets/sextaimagen.jpg'];

  palabraelegida:any;
  letras:string[]=[];
  letrasantigua:string[]=[];
  indice=0;
  
  
  ngOnInit(): void {
    this.palabraelegidafuncion();
    this.letraselegidas();
  }

  palabraelegidafuncion():void{
    const min=0;
    const max=this.palabra.length-1;
    const numero=this.random(min,max);
    this.palabraelegida=this.palabra[numero];
    console.log(this.palabraelegida);
  }


  letraselegidas(): void {
    const letrasseparadas = this.palabraelegida.titulo.split('');
    const limite = Math.floor(letrasseparadas.length * 0.5);
    const indices = new Set<number>();

    while (indices.size < limite) {
      indices.add(this.random(0, letrasseparadas.length - 1));
    }

    this.letras = letrasseparadas.map((letra:any, index:number) =>
      indices.has(index) ? letra : '-'
    );

   
  }

  comprobar():void{
    

    alert(this.letrasantigua+" / "+this.letras+" "+this.palabraelegida.titulo);
  
  }

  onLetraChange(nuevaLetra: string, index: number): void {
    this.letrasantigua=[...this.letras];
    this.letras[index] = nuevaLetra;
    if (this.letras[index] !== this.palabraelegida.titulo[index] && this.letras[index] !== "-" && this.letras[index] !== "") {
      this.indice++;
    }
   
  }


  random(min:number,max:number):number{
    return Math.floor(Math.random() * (max - min + 1)) + min;

  }


  
}
