import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {BankomatComponent} from './bankomat.component';
import {FormsModule} from '@angular/forms';
import {findFormatter} from "tslint";
import {Account} from "../shared/interfaces/account";

describe('BankomatComponent', () => {
  let component: BankomatComponent;
  let fixture: ComponentFixture<BankomatComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [
        BankomatComponent
      ]
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(BankomatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });
  it('should create the app', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
  it('should call withdraw()', () => {
    // skapar ett fake objekt
    const customer = {customerName: 'Fake Mcfakey', balance: 300};
    // Jasmin spy on component!
    spyOn(component, 'withdraw');
    //jasmin skapa ett object och använd mitt fake objekt som heter customer
    const mockData = jasmine.createSpyObj(customer);
    // kör funktionen withdraw och använd spyObjektet som argument
    component.withdraw(mockData);
    // success
    expect(component.withdraw).toHaveBeenCalled();
    // success
    expect(component.withdraw).toHaveBeenCalledWith(mockData);
    // testar att se hur många gånger som withdraw körs genom att skapa ett error
    //Expected spy withdraw to have been called 14 times. It was called 1 times.
    expect(component.withdraw).toHaveBeenCalledTimes(14);
  });
});

// På god väg!
// 1. Man ska testa det förväntade utfallet. Om man anropar en funktion en gång i testet,
// och förväntar sig att den ska anropa servicen en gång, så ska man testa att den har
// anropats exakt en gång. Det finns ingen anledning att testa just 14 gånger som du gör.

// 2. Frågan som är intressant att ställa är: anropar komponenten servicens funktion
// withdraw rätt antal gånger? Det är inte intressant att kontrollera att komponentens funktion
// withdraw har anropats, för det gör du ju på rad 9. Här behöver du en fejkad service som du kan

// injicera i komponenten med dependency injection.
// 3. komponentens funktion withdraw kanske ska anropas med en parameter, det beror på hur du har gjort den.




// import {async, ComponentFixture, TestBed} from '@angular/core/testing';
// import {FormsModule} from '@angular/forms';
// import {BankomatComponent} from './bankomat.component';
//
// describe('BankomatComponent', () => {

//
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       imports: [FormsModule],
//       declarations: [BankomatComponent]
//     })
//       .compileComponents();
//   }));
//
//   beforeEach(() => {
//     fixture = TestBed.createComponent(BankomatComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });
//
//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });


// Du ska även testa en komponent som använder servicen. Komponenten har följande kravspecifikation:
// det ska finnas en komponent med namnet Bank
// komponenten ska kunna visa ett konto
// komponenten ska använda sig av BankService för att hämta saldot, göra insättning och göra uttag
// den ska visa saldot i ett DOM-element som har CSS-klassen "accountBalance"
// det ska finnas ett textfält där användaren kan skriva in ett belopp
// det ska finnas en funktion som kan köras för att sätta in det inskrivna beloppet på kontot
// det ska finnas en knapp som kör funktionen när man klickar på den
// det ska finnas en funktion som kan köras för att ta ut det inskrivna beloppet från kontot
// det ska finnas en knapp som kör funktionen när man klickar på den
// (överföring stöds inte i den här versionen av appen)

