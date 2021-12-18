import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingComponent } from './testing.component';
import { By } from '@angular/platform-browser';
import { TestService } from '../../services/test.service';

let testService: TestService;
let spyGetClassValue: jest.SpyInstance<Promise<string>, []>;
describe('TestingComponent', () => {
  let component: TestingComponent;
  let fixture: ComponentFixture<TestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestingComponent],
      providers: [TestService],
    }).compileComponents();
    testService = TestBed.inject<TestService>(TestService);
    spyGetClassValue = jest.spyOn(testService, 'getClassValue');
    spyGetClassValue.mockResolvedValue('');
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change classes when divs are clicked', () => {
    const resultElement = fixture.debugElement.query(
      By.css('.result-container')
    );
    const redElement = fixture.debugElement.query(
      By.css('.test-container > .red')
    );
    const whiteElement = fixture.debugElement.query(
      By.css('.test-container > .white')
    );
    const blueElement = fixture.debugElement.query(
      By.css('.test-container > .blue')
    );

    expect(resultElement.classes['result-container']).toBeTruthy();
    expect(resultElement.classes['red']).toBeFalsy();
    expect(resultElement.classes['white']).toBeFalsy();
    expect(resultElement.classes['blue']).toBeFalsy();

    redElement.nativeElement.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(resultElement.classes['result-container']).toBeTruthy();
    expect(resultElement.classes['red']).toBeTruthy();
    expect(resultElement.classes['white']).toBeFalsy();
    expect(resultElement.classes['blue']).toBeFalsy();

    whiteElement.nativeElement.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(resultElement.classes['result-container']).toBeTruthy();
    expect(resultElement.classes['red']).toBeFalsy();
    expect(resultElement.classes['white']).toBeTruthy();
    expect(resultElement.classes['blue']).toBeFalsy();

    blueElement.nativeElement.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(resultElement.classes['result-container']).toBeTruthy();
    expect(resultElement.classes['red']).toBeFalsy();
    expect(resultElement.classes['white']).toBeFalsy();
    expect(resultElement.classes['blue']).toBeTruthy();
  });

  it('should change result-container on load', () => {
    // Tell the dependency what value to return.
    spyGetClassValue.mockResolvedValue('pink');
    // Trigger component update
    fixture.detectChanges();

    // Query html element using css selector for result-container
    const resultElement = fixture.debugElement.query(
      By.css('.result-container')
    );

    // Test the expectations
    expect(resultElement.classes['result-container']).toBeTruthy();
    expect(resultElement.classes['red']).toBeFalsy();
    expect(resultElement.classes['white']).toBeFalsy();
    expect(resultElement.classes['blue']).toBeFalsy();
    expect(resultElement.classes['pink']).toBeFalsy();
  });
});
